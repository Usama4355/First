const wrapper=document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const paymentMode=document.querySelector(".payment");
const close=document.querySelector(".close");
const productBtn=document.querySelector(".productButton");
const popup=document.getElementById("popup");
const nameError = document.getElementById("name-error");
const cardError = document.getElementById("card-error");
const phoneError = document.getElementById("number-error"); // changed from 'numberError'
const addressError = document.getElementById("address-error");
const submitError = document.getElementById("submit-error");
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "air.png",
        },
        {
          code: "darkblue",
          img: "air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "jordan.png",
        },
        {
          code: "green",
          img: "jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "blazer.png",
        },
        {
          code: "green",
          img: "blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "crater.png",
        },
        {
          code: "lightgray",
          img: "crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "hippie.png",
        },
        {
          code: "black",
          img: "hippie2.png",
        },
      ],
    },
  ];
  const choseProduct=products[0];

  menuItems.forEach((item,id)=>{
    item.addEventListener("click",()=>{
    wrapper.style.transform=`translateX(-${100*id}vw)`;
    choseProduct=products[id];
    currentProductTitle.textContent=choseProduct.title;
   currentProductPrice.textContent=choseProduct.price;
   currentProductImg.src=choseProduct.colors[0].img;
   currentProductColors.forEach((color,id)=>{
    color.style.backgroundColor=choseProduct.colors[id].code;
   });
});
});
currentProductColors.forEach((color, id) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choseProduct.colors[id].img;
    });
  });


  currentProductSizes.forEach((size, id) => {
    size.addEventListener("click", () => {
      if (!size.classList.contains("selected")) {
        currentProductSizes.forEach((s) => {
          s.classList.remove("selected");
          s.style.backgroundColor = "green";
          s.style.color = "black";
        });
        size.classList.add("selected");
        size.style.backgroundColor = "black";
        size.style.color = "green";
      }
    });
  });
  function validateName() {
    var name = document.querySelector(".payInput").value;
    if (name.length === 0) {
      nameError.innerHTML = "Name is Required";
      return false;
    } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      nameError.innerHTML = "Write full Name";
      return false;
    }
  
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  
  function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
  
    if (phone.length === 0) {
      phoneError.innerHTML = "Phone no is required";
      return false;
    }
  
    if (phone.length !== 11) {
      phoneError.innerHTML = "Phone Number should be 11 digits";
      return false;
    }
  
    if (!phone.match(/^[0-9]{11}$/)) {
      phoneError.innerHTML = "Numbers Only";
      return false;
    }
  
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  
  function validateAddress() {
    var address = document.getElementById("adress-ad").value;
  
    if (address.length === 0) {
      addressError.innerHTML = "Address is required";
      return false;
    }
  
    addressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  
  function validateCard() {
    var card = document.getElementById("card-number").value;
  
    if (card.length === 0) {
      cardError.innerHTML = "Card no is required";
      return false;
    }
  
    if (card.length !== 16) {
      cardError.innerHTML = "Card Number should be 16 digits";
      return false;
    }
  
    if (!card.match(/^[0-9]{16}$/)) {
      cardError.innerHTML = "Numbers Only";
      return false;
    }
  
    cardError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
  
  function validateForm() {
    if (!validateName() || !validatePhone() || !validateAddress() || !validateCard()) {
      submitError.style.display = "block";
      submitError.innerHTML = "Please fix the error";
      setTimeout(function () {
        submitError.style.display = "none";
      }, 1000);
      return false;
    }
  }

  
  function paymentClick() {
    productBtn.addEventListener("click", () => {
      paymentMode.style.visibility = "visible";
    });
  
    close.addEventListener("click", () => {
      paymentMode.style.visibility = "hidden";
    });
  }
  
  function openPopup() {
    
    if (validateForm()) {  
      popup.innerHTML="Error"; 
    }
    
 
} 
  
  function closePopup() {
    popup.classList.remove("open-popup");
    paymentMode.style.visibility = "hidden";
  }


  function tweet() {
    window.open("https://twitter.com/intent/tweet?text=","Tweet Window", "width=600, height=300");
}
function whatsapp() {
  window.open("https://whatsapp.com"," Window", "width=600, height=300");
}
function facebook() {
  window.open("https://facebook.com","Tweet Window", "width=600, height=300");
}
function instagram() {
  window.open("https://instagram.com"," Window", "width=600, height=300");
}
  