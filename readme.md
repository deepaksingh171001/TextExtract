# TextExtract

This application uses Tesseract OCR and Flask to extract text from an image. Users can upload an image and get the extracted text as output.

## Steps to Run Locally

1. Clone the repository:
   ```
   git clone [repository_url]
   ```

2. Install the Tesseract OCR Application:
   - Visit the official Tesseract OCR GitHub repository: [https://github.com/tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract)

3. Install Flask:
   ```
   pip install flask
   ```
4. Start the Application:
   - Run the Flask development server:
     ```
     flask run
     ```
   - The application will be accessible at [http://localhost:5000](http://localhost:5000) in your web browser.

5. Upload an Image:
   - In your web browser, navigate to [http://localhost:5000](http://localhost:5000).
   - Click on the "Upload Image" button and select an image file from your local system.
   - Submit the image file.

6. Get Extracted Text:
   - The application will process the uploaded image using Tesseract OCR.
   - After processing, the extracted text will be displayed on the web page.

Congratulations! You have successfully set up and run the Tesseract-Flask Text Extraction Application locally.