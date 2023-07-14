from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Image

@csrf_exempt
def image_upload(request):
    if request.method == 'POST':
        image_file = request.FILES['image']
        description = request.POST['description']
        Image.objects.create(image=image_file, description=description)
        return JsonResponse({'message': 'Image uploaded successfully.'})
def images(request):
    image_list = list(Image.objects.values())
    return JsonResponse(image_list, safe=False)
