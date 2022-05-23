//store the products array in localstorage as "products"
document.querySelector("#add_product").addEventListener("click",myFunction)
  function product(type,desc,price,image)
  {
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;
  }
  
  var productArr=JSON.parse(localStorage.getItem("products"))||[];

  function myFunction(){
    event.preventDefault();
   
     let type=products.type.value;
     let desc=products.desc.value;
     let price=products.price.value;
     let image=products.image.value;
   
     let p=new product(type,desc,price,image)
    productArr.push(p);
    localStorage.setItem("products",JSON.stringify(productArr))
    window.location.reload();
  }

  document.querySelector("#show_products").addEventListener("click",changefunc)
  function changefunc()
  {
    window.location.href="inventory.html"
  }