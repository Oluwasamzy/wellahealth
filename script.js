let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}



let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
  cart.classList.add("active") 
closecart.onclick = () => {
  cart.classList.remove("active");
};
//adding to cart
function addCartClicked(event){
  var button = event.target
  var shopPoducts = button.parentElement
  var title = shopPoducts.getElementsByClassname('title')[0].innerText
  var price = shopPoducts.getElementsByClassname('price')[0].innerText
  var productImg = shopPoducts.getElementsByClassname('cart-img')[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}
}
