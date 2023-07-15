from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from google.cloud import storage
from .models import Image
from .models import Comment
from .serializers import CommentSerializer
from rest_framework import viewsets
from rest_framework import generics


@csrf_exempt
def image_upload(request):
    if request.method == 'POST':
        image_file = request.FILES['image']
        description = request.POST['description']


        # upload image_file to Google Cloud Storage
        storage_client = storage.Client.from_service_account_json('path/to/your/service-account-file.json')
        bucket = storage_client.get_bucket('your-bucket-name')
        blob = bucket.blob(image_file.name)
        blob.upload_from_file(image_file)


        # get the URL of the uploaded image
        url = blob.public_url


        # create new Image object with this URL and the description
        Image.objects.create(url=url, description=description)


        return JsonResponse({'message': 'Image uploaded successfully.'})


def images(request):
    image_list = list(Image.objects.values())
    return JsonResponse(image_list, safe=False)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer




class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
