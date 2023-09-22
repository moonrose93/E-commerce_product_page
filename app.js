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
const addToCartbtnMobile = document.getElementById("add-to-cart-mobile");
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


// 1.Mobile version - Plus and minus buttons and dynamically changing of the quantity price in the middle based on the clicked button

/*first we set a variable for starting value which its 0 in this case, then we create a function updateQuantityPriceMobile() in wich we set the quantity price text content equal
to the quantity price variable we created ( quantityPriceValueMobile).With this we dynamiclly will update the quantity price. */

let quantityPriceValueMobile = 0;

//Creating a function to set it to the button event listeners so that the text content will change dynamically.
function updateQuantityPriceMobile() {
  quantityPriceMobile.textContent = quantityPriceValueMobile;
}

/*Then we add event listener to the + button and when clicked the quantityPriceValueMobile++; will increase by 1 starting from 0.also in this function
we call the function where we set the quantity price textcontent equal to the variable quantityPriceValueMobile with this the text content of the quantityPriceMobile will change dynamically.*/
btnPlusMobile.addEventListener("click", () => {
  quantityPriceValueMobile++;
  updateQuantityPriceMobile();
});

/*same for the minus button if the quantityPriceValueMobile is bigger then 0 then on the click on the minus button the value will decrease and with that the  quantityPriceMobile.textContent
will change dynamically bacause we called the function updateQuantityPriceMobile(); inside the btnMinusMobile.addEventListener */
btnMinusMobile.addEventListener("click", () => {
  if (quantityPriceValueMobile > 0) {
    quantityPriceValueMobile--;
    updateQuantityPriceMobile();
  }
});

/*Wrap up: we set the updateQuantityPriceMobile(); in every button so that the value of text will change depending on which button is clicked.Also we create a variable = 0 so that its 
initial value for starting and that value with clicked on + button will increase by 1  (quantityPriceValueMobile++;) or decease by 1 if clicked on - button */



/*2.When clicked on the add to cart button the notification (0-orange HTML p text will change based on the  quantityPriceValueMobile)- If the  quantityPriceValueMobile variable
incrases then the innerTxt of the Notification will change based on the value of the quantityPriceVariable if increases 3 times and then its click on th button then the notification 
will change based on the value of the increasion.*/

  addToCartbtnMobile.addEventListener("click", () => {
    notificationMobile.innerText = quantityPriceValueMobile;
  });



/*3.Here we set listener on the cartIcon when clicked on the icon the hiddend div from css cartPopupnotMobile will show up ,
first we set condition if (cartPopupnotMobile.style.display === "none") ,which it is in css when clicked on the button to to be dispayed to block(to be visible)after its visible 
we set the else statment again on the next click on the icon to be displayed none*/
cartIconMobile.addEventListener("click", () => {
  if (cartPopupnotMobile.style.display === "none") {
    cartPopupnotMobile.style.display = "block";
  } else {
    cartPopupnotMobile.style.display = "none";
  }


  /*4.Here we set conditions for the  emptyNotification , if quantityPriceValueMobile === 0 then the emptyNotificationMobile to be shown inside the cartPopup and
  the cardItemAddedMobile(divot so prikazhani items da bide skrien) to be hidden else (ako e drugo- na pr quantityPriceValueMobile > 0 togas emptyNotificationMobile to be hidden)  */
  if (quantityPriceValueMobile === 0) {
    emptyNotificationMobile.style.display = "block";
    cardItemAddedMobile.style.display = "none";
  } else {
    emptyNotificationMobile.style.display = "none";
  }
/*5. if quantityPriceValueMobile value  is bigger then 0 then  emptyNotificationMobile to be hidden and cardItemAddedMobile div to be displayed*/
  
  if (quantityPriceValueMobile > 0) {
    emptyNotificationMobile.style.display = "none";
    cardItemAddedMobile.style.display = "block";
  }
});

/*6.When clicked on the delete icon ardItemAddedMobile that to be hidden and  emptyNotificationMessage to be displayed */
deleteElementIconMobile.addEventListener("click", () => {
  cardItemAddedMobile.style.display = "none";
  emptyNotificationMobile.style.display = "block";
});

/*7. We created an array of the images we want to be slided and initialized it as productsMobileImages also we created a variable for staring index for the array 
 productIndex which is 0 so the array will start counting from 0.(from the first element)*/

let productsMobileImages = [product1Mobile,product2Mobile,product3Mobile,product4Mobile];
let productIndex = 0;

/*When clicked on the next button the productsMobileImages array will start from 0 we linked the array with the index (productsMobileImages[productIndex]),
that would be the first element and that element will be hidden (current element)and as the productIndex increase by 1 the next image will be shown and every current image with every
click will be hidden */

//Here with every click on the next button the current image from the array will be hidden and after increasing the array by 1 the increased element will be shown. until the end of the array.
/*On every click on nect button the current image from the array to be hidden and and every next image from the array to be displa */
iconNextMobile.addEventListener("click",()=>{
  productsMobileImages[productIndex].style.display = "none";//To hide the current image(index)
  //We manipulate the product index to increase from the array length by 1
  productIndex = (productIndex + 1) % productsMobileImages.length;//on every click new image from the array to be shown wrapping up the end of the arry.
  productsMobileImages[productIndex].style.display = "block";

});

/*When clicked on the previous button the productsMobileImages array will start decreaseing by 1 until the beginning of the array and every current image will be hidden and every
decerad image backwards will be displayeed */

iconPreviousMobile.addEventListener("click", () => {
    productsMobileImages[productIndex].style.display = "none";//To hide the current image(index)
    //We manipulate the product index to decrase from the array length by1
    productIndex = (productIndex - 1 + productsMobileImages.length) % productsMobileImages.length;//on every click new image from the array to be shown wrapping up the end of the arry.
    productsMobileImages[productIndex].style.display = "block";
});

// Mobile version menu button click event for when we click on the menu burger icon the hidden menu from css to shown
menuBtnMobile.addEventListener("click", () => {
  // Implement your menu toggle logic for the mobile version here
    menuMobile.style.display = "block";
  
});

// Mobile version menu button click event for when we click on the icon close from the menu the menu to be hidden.

iconCloseMobile.addEventListener("click", () =>{
  menuMobile.style.display = "none";
});



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
