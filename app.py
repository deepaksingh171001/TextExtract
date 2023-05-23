from flask import Flask, render_template, request
import pytesseract
from PIL import Image
from io import BytesIO

app = Flask(__name__)

# function to extract text from image using Tesseract
def imgtotext(img):
    image_data = img.read()
    image_stream = BytesIO(image_data)
    image = Image.open(image_stream)
    img_text = pytesseract.image_to_string(image)
    return img_text

# home route to upload image
@app.route("/")
def home():
    return render_template("index.html")

# predict route to convert input image to text
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return 'No image file uploaded'

    image = request.files['image']
    return imgtotext(image)

app.run(debug=True)