from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from google.cloud import storage
from google.auth.transport.requests import Request
from .models import Image
from .models import Comment
from .serializers import CommentSerializer, ImageSerializer
from rest_framework import viewsets
from rest_framework import generics
from collections import defaultdict
from django.db.models.functions import TruncDate
from datetime import datetime

def generate_signed_url(bucket_name, blob_name):
    storage_client = storage.Client.from_service_account_json('../keys/rsc-lifetimewebsitekey.json')
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(blob_name)

    url = blob.generate_signed_url(
        version="v4",
        # This URL is vali d for 15 minutes
        expiration=24*60*60,
        # Allow GET requests using this URL.
        method="GET",
    )

    return url

@csrf_exempt
def image_upload(request):
    if request.method == 'POST':
        image_file = request.FILES['image']
        description = request.POST['description']

        # upload image_file to Google Cloud Storage
        storage_client = storage.Client.from_service_account_json('../keys/rsc-lifetimewebsitekey.json')
        bucket = storage_client.get_bucket('rsc-lifetime')
        blob = bucket.blob(image_file.name)
        blob.upload_from_file(image_file)

        # create new Image object with the blob name and the description
        Image.objects.create(url=image_file.name, description=description)

        return JsonResponse({'message': 'Image uploaded successfully.'})

def images(request):
    start_date = request.GET.get('start_date', None)
    end_date = request.GET.get('end_date', None)

    if start_date is not None and end_date is not None:
        # Convert strings to datetime objects
        start_date = datetime.strptime(start_date, '%Y-%m-%dT%H:%M:%S.%fZ')
        end_date = datetime.strptime(end_date, '%Y-%m-%dT%H:%M:%S.%fZ')
        # Fetch images in date range from the database
        images = Image.objects.filter(posted_at__range=[start_date, end_date])
    else:
        # Fetch all images from the database
        images = Image.objects.all()

    # Annotate images with their posting date
    images = images.annotate(posting_date=TruncDate('posted_at')).order_by('-posting_date')

    # Initialize a dictionary to store the image data grouped by date
    image_dict = defaultdict(list)

    # Iterate over the images
    for image in images:
        # Generate a signed URL for the image
        signed_url = generate_signed_url('rsc-lifetime', image.url)

        # Add the image data (including the signed URL) to the corresponding date in the dict
        image_data = {
            'id': image.id,
            'url': signed_url,
            'description': image.description,
        }
        image_dict[image.posting_date.isoformat()].append(image_data)
    print(image_dict)

    return JsonResponse(image_dict, safe=False)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
