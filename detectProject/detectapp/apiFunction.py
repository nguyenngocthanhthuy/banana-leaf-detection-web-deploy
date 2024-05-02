from ultralytics import YOLO
from PIL import Image
import os

def detect_objects_on_image(image_buf, model_buf):
    temp_model_path = "temp_model.pt"
    with open(temp_model_path, "wb") as temp_model_file:
        for chunk in model_buf.chunks():
            temp_model_file.write(chunk)

    model = YOLO(temp_model_path)
    results = model.predict(Image.open(image_buf))
    result = results[0]
    output = []
    for box in result.boxes:
        x1, y1, x2, y2 = [round(x) for x in box.xyxy[0].tolist()]
        class_id = box.cls[0].item()
        prob = round(box.conf[0].item(), 2)
        output.append([x1, y1, x2, y2, result.names[class_id], prob])
    os.remove(temp_model_path)  # Xóa tệp mô hình tạm sau khi sử dụng
    return output