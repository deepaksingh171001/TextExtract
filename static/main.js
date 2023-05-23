let prediction = document.getElementById('prediction')
let predText = document.querySelector('.pred-text');
let copy = document.querySelector('.copy');

prediction.style.display = "none"

// drag and drop functionality
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      uploadImage(inputElement.files[0])
      prediction.style.display = "flex"

    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      uploadImage(e.dataTransfer.files[0])
      prediction.style.display = "flex"
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

document.querySelector('.hide-pred').addEventListener('click', () => {
  prediction.style.display = "none"
  predText.innerText = ""
})

function uploadImage(file) {

  var formData = new FormData();
  formData.append('image', file);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/predict', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Request succeeded
      var response = xhr.responseText;

      predText.innerText = response;


      // Handle the response from the server
    } else {
      // Request failed
      var error = 'Error: ' + xhr.status;
      // Handle errors
    }
  };
  xhr.onerror = function () {
    // Request failed
    var error = 'Error: ' + xhr.status;
    // Handle errors
  };
  xhr.send(formData);
}

// to copy the extracted text
copy.addEventListener('click', copyExtractText)

// copy the extracted text and toggle the icons
function copyExtractText() {
  var copyText = document.querySelector('.pred-text').innerText;
  navigator.clipboard.writeText(copyText);
  let copyicon = copy.innerHTML
  copy.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z" fill="currentColor"/><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" fill="currentColor"/></svg>`
  // restore the copy icon
  setTimeout(() => copy.innerHTML = copyicon, 2500)
}