from django.shortcuts import render
from django.shortcuts import render
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from ultralytics import YOLO
from PIL import Image
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import os
from .apiFunction import detect_objects_on_image

@csrf_exempt
def detect(request):
    if request.method == 'POST':
        image_buf = request.FILES.get('image_file')
        model_buf = request.FILES.get('model_file')

        if image_buf and model_buf:
            boxes = detect_objects_on_image(image_buf, model_buf)
            return JsonResponse(boxes, safe=False)
        else:
            return JsonResponse({'error': 'Please select both an image file and a model file.'}, status=400)
    else:
        return JsonResponse({'error': 'Method not allowed.'}, status=405)
