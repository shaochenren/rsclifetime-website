from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from google.cloud import storage
from google.auth.transport.requests import Request
from .models import Image
from .models import Comment
from .serializers import CommentSerializer, ImageSerializer
from rest_framework import viewsets
from rest_framework import generics


def generate_signed_url(bucket_name, blob_name):
    storage_client = storage.Client.from_service_account_json('../keys/rsc-lifetimewebsitekey.json')
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(blob_name)

    url = blob.generate_signed_url(
        version="v4",
        # This URL is valid for 15 minutes
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
    # Fetch all images from the database
    images = Image.objects.all()

    # Initialize a list to store the image data
    image_list = []

    # Iterate over the images
    for image in images:
        # Generate a signed URL for the image
        signed_url = generate_signed_url('rsc-lifetime', image.url)

        # Add the image data (including the signed URL) to the list
        image_data = {
            'id': image.id,
            'url': signed_url,
            'description': image.description,
        }
        image_list.append(image_data)

    return JsonResponse(image_list, safe=False)



class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class ImageViewSet(viewsets.ReadOnlyModelViewSet):  # Add this
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
