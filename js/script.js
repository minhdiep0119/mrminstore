// Show slider 
const slides = document.querySelectorAll("#slider-holder  li ");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let slideIndex = 0;

function showSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

prevButton.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
});

nextButton.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
});

// Show the initial slide
showSlide();

//Change tabs 

function openTabs(evt, tabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tabs a");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList = tablinks[i].classList.remove('active');
    }
    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className = " active";
}

// Add Product 

var products = [];
let product={
    id:"",
    name:"",
    size:"",
    brandName:"",
    price:"",
    img:"",
    khoitao: function product(id,name,price,brandName,size,img){
        this.id=id;
        this.name=name;
        this.price=price;
        this.brandName=brandName;
        this.size=size;
        this.img=img;
    },
    xuatsp: function (products){
        let text="";
        
        for(let i=0; i<products.length;i++){
            text += '<div class="product">';
            text += this.motsp(products[i]);
            text += '</div>';
        }
        return text;
    },
    motsp: function(product){
        let text="";
        text +="<li>"
        text += '<div class="image"> <a href="view/single-product.html"><img src="assets/images/'+ product.img +'"alt="" /></a> </div>';
        text += '<p> Item Number: <span>'+ product.id+'</span><br />';
        text += 'Size List : <span>'+ product.size+'</span><br />';
        text += 'Brand Name: <a href="#">'+ product.brandName+'</a> </p>';
        text += '<p class="price">Wholesale Price: <strong>'+ product.price+'</strong></p>';    
        text +="</li>"  
        return text;
    }  
};

let sp=new product.khoitao("125501","giày  1","200000","Adidas","8/8.5/9.5/10/11","image1.jpg");
products.push(sp);
let sp2=new product.khoitao("125502","giày bốt 2","300000","Adidas","8/8.5/9.5/10/11","image2.jpg");
products.push(sp2);
let sp3=new product.khoitao("125503","giày bốt 3","400000","Adidas","8/8.5/9.5/10/11","image3.jpg");
products.push(sp3);
let sp4=new product.khoitao("125504","giày bốt 4","400000","Adidas","8/8.5/9.5/10/11","image4.jpg");
products.push(sp4);

document.getElementById('showproduct1').innerHTML = product.xuatsp(products);
document.getElementById('showproduct2').innerHTML = product.xuatsp(products);
document.getElementById('showproduct3').innerHTML = product.xuatsp(products);

function submitsp(){
    var id=document.getElementById('id').value;
    var name=document.getElementById('name').value;
    var size=document.getElementById('size').value;
    var price=document.getElementById('price').value;
    var brandName=document.getElementById('brandName').value;
    var img=document.getElementById('img').value;
    if( id == ""){
        alert("Hãy nhập mã sản phẩm");
        return false;
    }
    if( size == ""){
        alert("Hãy nhập mô tả sản phẩm");
        return false;
    }
    if( brandName == ""){
        alert("Hãy nhập mô tả sản phẩm");
        return false;
    }
    if(name == ""){
        alert("Hãy nhập tên sản phẩm");
        return false;
    }
    if( price == ""){
        alert("Hãy nhập giá sản phẩm");
        return false;
    }
    if( img == ""){
        alert("Hãy chọn img sản phẩm");
        return false;
    }
    let spf=new product.khoitao(id,name,brandName,price,size,Hinh);
    products.push(spf);
    console.log(products);
    let sp=product
    document.getElementById('showproduct').innerHTML = sp.xuatsp(products);
}

function chitietsp(x){
    var the= x.parentElement
    var id= the.children[3].innerText;
    sessionStorage.setItem("id",JSON.stringify(id))
    window.location = "ChiTiet.html";
}   






