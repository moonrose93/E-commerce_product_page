const iconNext = document.getElementById("next");
const iconPrevious = document.getElementById("previous");
const imageDesktop1 = document.getElementById("product-1-desktop-main");
const imageDesktop2 = document.getElementById("product-2-desktop-main");
const imageDesktop3 = document.getElementById("product-3-desktop-main");
const imageDesktop4 = document.getElementById("product-4-desktop-main");
const imageMobile1 = document.getElementById("product-1-mobile");
const imageOpenThumbnail1 = document.getElementById("product-1-desktop-open-tn");
const imageOpenThumbnail2 = document.getElementById("product-2-desktop-open-tn");
const imageOpenThumbnail3 = document.getElementById("product-3-desktop-open-tn");
const imageOpenThumbnail4 = document.getElementById("product-4-desktop-open-tn");
const imageMobile2 = document.getElementById("product-2-mobile");
const imageMobile3 = document.getElementById("product-3-mobile");
const imageMobile4 = document.getElementById("product-4-mobile");
const iconMenu = document.getElementById("icon-menu");
const cartIcon = document.getElementById("cart-icon");
const addToCartbtn = document.getElementById("add-to-cart");
const plusQuantitybtn = document.getElementById("plus");
const minusQuantitybtn = document.getElementById("minus");
const quantityPrice = document.getElementById("price2");
const openedImages = document.getElementById("opened-images");
const openedImage1 = document.getElementById("product-open");
const openedImage2 = document.getElementById("product-open2");
const openedImage3 = document.getElementById("product-open3");
const openedImage4 = document.getElementById("product-open4");
const iconClose = document.querySelector(".icon-close");
const container = document.getElementById("container");
const overlay = document.querySelector(".overlay");
const overlay2 = document.querySelector(".overlay2");
const notification = document.getElementById("notification");
const cartPopupnot = document.getElementById("cart-popup");
const emptyNotification = document.getElementById("empty");
const cardItemAdded = document.getElementById("cart-item-added");
const deleteElementIcon = document.getElementById("icon-delete");
//for mobile
const btnPlusMobile =  document.getElementById("plus-mobile");
const btnMinusMobile = document.getElementById("minus-mobile");
const quantityPriceMobile = document.getElementById("price2-mobile");
const cartPopupnotMobile = document.getElementById("cart-popup-mobile");
const emptyNotificationMobile = document.getElementById("empty-mobile");
const notificationMobile = document.getElementById("notification-mobile");
const cardItemAddedMobile = document.getElementById("cart-item-added-mobile");
const cartIconMobile= document.getElementById("cart-icon-mobile");
const addToCartbtnMobile = document.getElementById("add-to-cart");
const iconPreviousMobile = document.getElementById("previous-mobile");
const iconNextMobile = document.getElementById("next-mobile");
const menuBtnMobile = document.getElementById("icon-menu");
const deleteElementIconMobile = document.getElementById("icon-delete-mobile");
const menuMobile = document.getElementById("menu-mobile");
const iconCloseMobile = document.getElementById("icon-close-mobile");
const product1Mobile = document.getElementById("product");
const product2Mobile = document.getElementById("product2");
const product3Mobile = document.getElementById("product3");
const product4Mobile = document.getElementById("product4");


// Mobile version quantity price value
let quantityPriceValueMobile = 0;

// Function to update the quantity price for mobile
function updateQuantityPriceMobile() {
  quantityPriceMobile.textContent = quantityPriceValueMobile;
}

// Event listener for the plus button on mobile
btnPlusMobile.addEventListener("click", () => {
  quantityPriceValueMobile++;
  updateQuantityPriceMobile();
});

// Event listener for the minus button on mobile
btnMinusMobile.addEventListener("click", () => {
  if (quantityPriceValueMobile > 0) {
    quantityPriceValueMobile--;
    updateQuantityPriceMobile();
  }
});

// Event listener for adding to cart on mobile
addToCartbtnMobile.addEventListener("click", () => {
  notificationMobile.innerText = quantityPriceValueMobile;
});

// Event listener for opening the cart popup on mobile
cartIconMobile.addEventListener("click", () => {
  if (cartPopupnotMobile.style.display === "none") {
    cartPopupnotMobile.style.display = "block";
  } else {
    cartPopupnotMobile.style.display = "none";
  }

  if (quantityPriceValueMobile === 0) {
    emptyNotificationMobile.style.display = "block";
    cardItemAddedMobile.style.display = "none";
  } else {
    emptyNotificationMobile.style.display = "none";
  }

  if (quantityPriceValueMobile > 0) {
    emptyNotificationMobile.style.display = "none";
    cardItemAddedMobile.style.display = "block";
  }
});

// Event listener for deleting an item in the cart on mobile
deleteElementIconMobile.addEventListener("click", () => {
  cardItemAddedMobile.style.display = "none";
  emptyNotificationMobile.style.display = "block";
});

// Mobile version image navigation (previous and next)
iconNextMobile.addEventListener("click", () => {
  // Implement your logic for displaying the next image here
});

iconPreviousMobile.addEventListener("click", () => {
  // Implement your logic for displaying the previous image here
});

// Mobile version menu button click event
menuBtnMobile.addEventListener("click", () => {
  // Implement your menu toggle logic for the mobile version here
    menuMobile.style.display = "block";
  
});

iconCloseMobile.addEventListener("click", () =>{
  menuMobile.style.display = "none";
});

let productsMobileImages = [product1Mobile,product2Mobile,product3Mobile,product4Mobile];
let productIndex = 0;

iconNextMobile.addEventListener("click",()=>{
  productsMobileImages[productIndex].style.display = "none";//To hide the current image
  productIndex = (productIndex + 1) % productsMobileImages.length;//on every click new image from the array to be shown wrapping up the end of the arry.
  productsMobileImages[productIndex].style.display = "block";

})

//For desktop

/*1.Setting the quantity value for the quantity price starting from 0 creating a variable for the quantity price.And based on
the plusQuantitybtn clicks the updateQuantityPrice will change and with that  quantityPrice.textContent will change.Because
quantityPrice.textContentquantityPrice.textContent = quantityPriceValue; Which means by every click on the + button the updateQuantityPrice() will change bacause we called that function 
inside the + and the - button.*/

let quantityPriceValue = 0;

// Function to update the quantityPrice and the displayed value

function updateQuantityPrice() {
  quantityPrice.textContent = quantityPriceValue;
  
}


/*We set  quantityPrice.textContent = quantityPriceValue; so when the + button is clicked the the quontityPrice(p)element to change synchroniously starting from 0 
depending on how much is clicked */

// Event listener for the "plus" button
plusQuantitybtn.addEventListener("click", () => {
  // Increment the quantityPriceValue when the "plus" button is clicked
  quantityPriceValue++;
  // Update the displayed quantityPrice
  updateQuantityPrice();
  
});

btnPlusMobile.addEventListener("click", () => {
  quantityPriceValue++;
  updateQuantityPrice();
})

// Event listener for the "minus" button
minusQuantitybtn.addEventListener("click", () => {
  // Ensure the quantityPriceValue doesn't go below 0
  if (quantityPriceValue > 0) {
    // Decrement the quantityPriceValue when the "minus" button is clicked
    quantityPriceValue--;
    // Update the displayed quantityPrice
    updateQuantityPrice();
  }
});



// Initial call to set the quantityPrice to 0
updateQuantityPrice();

//Also here we linked so when is clicked on the addToCartbtn the notification(p)element to change accordingly the quantityPriceValue
addToCartbtn.addEventListener("click", () => {
  notification.innerText =  quantityPriceValue;
});

cartIcon.addEventListener("click", () => {
  if (cartPopupnot.style.display === "none") {
    cartPopupnot.style.display = "block";
  } else {
    cartPopupnot.style.display = "none";//after its shown its to block after that on the next click set it to none
  }

  if(quantityPriceValue === 0){
  emptyNotification.style.display = "block";
  cardItemAdded.style.display ="none";
  }else{
    emptyNotification.style.display = "none";
  }

  if(quantityPriceValue > 0){
    emptyNotification.style.display = "none";
    cardItemAdded.style.display ="block";
  }
});


deleteElementIcon.addEventListener("click",()=>{
  cardItemAdded.style.display ="none";
  emptyNotification.style.display = "block";
})



//2.By clicking on the thumbnails-main the opened images container will be shown with the openedthumbnails and based on which image is clicked that image will have a outline orange.


imageDesktop2.addEventListener("click", () => {
  
  imageDesktop2.style.outline = "2px solid orange";
  imageDesktop3.style.outline = "none";
  imageDesktop4.style.outline = "none";
  imageDesktop1.style.outline = "none";
  
});


imageDesktop3.addEventListener("click", () => {
  
  imageDesktop3.style.outline = "2px solid orange";
  imageDesktop4.style.outline = "none";
  imageDesktop2.style.outline = "none";
  imageDesktop1.style.outline = "none";
});


imageDesktop4.addEventListener("click", () => {
  
  imageDesktop4.style.outline = "2px solid orange";
  
  imageDesktop3.style.outline = "none";
  imageDesktop2.style.outline = "none";
  imageDesktop1.style.outline = "none";
});




imageDesktop1.addEventListener("click", () => {
  imageDesktop1.style.outline = "2px solid orange";
    openedImages.style.display = "block";
    overlay.style.display = "block"; // Change the background color to black with 50% opacity
    imageOpenThumbnail1.style.outline = "2px solid orange";
    imageOpenThumbnail4.style.outline = "none";
    imageOpenThumbnail2.style.outline = "none";
    imageOpenThumbnail3.style.outline = "none";
    
  });

  
  
  

iconClose.addEventListener("click", () => {
  openedImages.style.display = "none";
  overlay.style.display = "none";
  imageDesktop1.style.outline = "none";
});


// You create an array called openedImageArray to hold references to the opened images (openedImage1, openedImage2, openedImage3, and openedImage4). This array will help you cycle through these images.
const openedImageArray = [openedImage1, openedImage2, openedImage3, openedImage4];
const openedThumbnailImageArray = [imageOpenThumbnail1, imageOpenThumbnail2, imageOpenThumbnail3, imageOpenThumbnail4];


// You initialize a variable currentIndex to keep track of the currently displayed opened image. Initially, it is set to 0, which corresponds to the first opened image (openedImage1).
let currentIndex = 0;
let thumbnailIndex = 0;

/*You add an event listener to the iconNext element. When this element (usually a button for moving to the next item)
is clicked, it cycles through the opened images by hiding the currently displayed image, incrementing the currentIndex (with wrap-around), and showing the next opened image.*/

iconNext.addEventListener("click", () => {
  // For Images
  // Hide the currently displayed opened image before increment
  openedImageArray[currentIndex].style.display = "none";

  // Increment the current index by 1, wrapping around if it reaches the end
  currentIndex = (currentIndex + 1) % openedImageArray.length;

  // Display the newly selected opened image after increment
  openedImageArray[currentIndex].style.display = "block";

  // For orange Outline
  openedThumbnailImageArray[thumbnailIndex].style.outline = "none";
  thumbnailIndex = (thumbnailIndex + 1) % openedThumbnailImageArray.length;
  openedThumbnailImageArray[thumbnailIndex].style.outline = "2px solid orange";

});




// Event listener to cycle through opened images when iconPrevious is clicked
iconPrevious.addEventListener("click", () => {
    // Hide the currently displayed opened image before decrement

    openedImageArray[currentIndex].style.display = "none";

    // Decrement the current index by 1, wrapping around if it reaches the beginning

    currentIndex = (currentIndex - 1 + openedImageArray.length) % openedImageArray.length;
     // Display the newly selected opened image after dicrement

    openedImageArray[currentIndex].style.display = "block";
     /*We say to thumbnail index to decrease by 1 from bexind so the array will be counted from behind and the outline to be removed
     from the current item and after decraising the outline to be shown on the decreased element*/
    openedThumbnailImageArray[thumbnailIndex].style.outline = "none";
    thumbnailIndex = (thumbnailIndex - 1 +  openedThumbnailImageArray.length) % openedThumbnailImageArray.length;

    openedThumbnailImageArray[thumbnailIndex].style.outline = "2px solid orange";
   
  });


  

//For Mobile
