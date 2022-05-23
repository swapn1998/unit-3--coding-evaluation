var productArr=JSON.parse(localStorage.getItem("products"))
  display(productArr)
  function display(productArr)
  {
    productArr.forEach(function(ele,index){
      var card=document.createElement("div")
     
      var img=document.createElement("img")
      img.src=ele.image;

    var typ=document.createElement("p")
      typ.innerText=ele.type;

     var info=document.createElement("p")
      info.innerText=ele.desc;

      var money=document.createElement("p")
      money.innerText=ele.price

      var button=document.createElement("button")
      button.innerText="Delete"
      button.id="remove_product"
    //  button.setAttribute("remove_product")
      button.addEventListener("click",function(){
        deleteItem(ele,index)
      })
      card.append(img,typ,info,money,button)
      document.querySelector("#all_products").append(card)
    })
  }

  function deleteItem(ele,index)
  {
    productArr.splice(index,1)
    localStorage.setItem("products",JSON.stringify(productArr))
    window.location.reload();
  }

  document.querySelector("#add_more_product").addEventListener("click",backfunc)
  function backfunc()
  {
    window.location.href="index.html"
  }