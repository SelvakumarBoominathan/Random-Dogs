const imageList = document.getElementById('imageList');

// Function to fetch existing images from the API
function fetchExistingImages() {
  const API = "https://api.thedogapi.com/v1/images/search?limit=10"; //Public API URL of 10 Dogs
  fetch(API)
    .then(response => response.json())
    .then(images => {
      images.forEach(image => {
        addExistingImage(image.url);
      });
    })
    .catch(error => console.error('Error fetching existing images:', error));
}

// Function to add an existing img to the list
function addExistingImage(imageUrl) {
  const listItem = document.createElement('li');
  const img = document.createElement('img');
  img.src = imageUrl;
  listItem.appendChild(img);
  listItem.innerHTML += `
        <input id="Jsoninput" type="text" value="${imageUrl}">
        <button onclick="updateImage(this)">Update</button>
        <button onclick="deleteImage(this)">Delete</button>
      `;
  imageList.appendChild(listItem);
}

// Function to add a new img
function addImage() {
  const imageUrl = document.getElementById('imageUrlInput').value.trim();
  if (imageUrl) {
    addExistingImage(imageUrl);
    document.getElementById('imageUrlInput').value = ''; // Clear input field
  }
}

// Function to update img
function updateImage(button) {
  const listItem = button.parentNode;
  const imageUrl = listItem.querySelector('input[type="text"]').value.trim();
  if (imageUrl) {
    const img = listItem.querySelector('img');
    img.src = imageUrl;
    // Alert for update
    alert('Image details updated successfully!');
  }
}

// to Delete an img
function deleteImage(button) {
  const listItem = button.parentNode;
  listItem.remove();
  //Alert for deletion of img
  alert('Image deleted successfully!');
}

// Fetch existing images when the page loads
fetchExistingImages();