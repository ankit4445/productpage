let productDiv=document.querySelector(".product");
var categorylistDiv=document.querySelector(".categoryList");
let allcat=[];
let dispalyproduct=async( allcheck=[])=>{
  console.log(allcheck);
  productDiv.innerHTML="";
  
  let product= await fetch("https://fakestoreapi.com/products")
  let finalproduct= await product.json();
  finalproduct.forEach(element => {

    if(!allcat.includes(element.category)){

     categorylistDiv.innerHTML+=`
     <label for="">
       <input type="checkbox"  onclick="categoryfilter()" value="${element.category}"> ${element.category}
     </label>`;

     allcat.push(element.category)
     
  }
  if(allcheck.length==0){
    allcheck=allcat;
  }


  if(allcheck.includes(element.category)){




    productDiv.innerHTML+=`<div class="productItems">
    <img src="${element.image}" alt="">
    <h4> ${element.category}</h4>
    <p> Rs.${element.price} | ${element.rating.rate}</p>
    <h3>${element.title}</h3>
  </div>`
  }
    
  });
  
  

}
dispalyproduct();

let categoryfilter=()=>{
  let checkinput=document.querySelectorAll("input[type='checkbox']");
  let checkdata=[];
  checkinput.forEach((e)=>{
    if(e.checked){
      checkdata.push(e.value);

    }
    
  })
   dispalyproduct(checkdata);
}

