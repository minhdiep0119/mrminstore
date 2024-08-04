// Add Product 

var products = [];
let product = {
    id: "",
    size: "",
    brandName: "",
    price: "",
    img: "",
    khoitao: function product(id, price, brandName, size, img) {
        this.id = id;
        this.price = price;
        this.brandName = brandName;
        this.size = size;
        this.img = img;
    },
    xuatsp: function (products) {
        let text = "";

        for (let i = 0; i < products.length; i++) {
            text += '<div class="product">';
            text += this.motsp(products[i]);
            text += '</div>';
        }
        return text;
    },
    motsp: function (product) {
        let text = "";
        text += '<li>'
        text += '<div class="image"><img onclick="detailProduct(this)" src="assets/images/' + product.img + '"alt="" /></div>';
        text += '<p> Item Number: <span>' + product.id + '</span><br />';
        text += 'Size List : <span>' + product.size + '</span><br />';
        text += 'Brand Name: <a href="#">' + product.brandName + '</a> </p>';
        text += '<p  class="price">Wholesale Price: <strong>' + product.price + '</strong></p>';
        text += '<button onclick="chonhang(this)"><i class="fa fa-cart-plus"></i> Thêm vào giỏ</button>';
        text += '</li>'
        return text;
    }
};

let sp = new product.khoitao("125501", "200000", "Nike", "8/8.5/9.5/10/11", "image1.jpg");
products.push(sp);
let sp2 = new product.khoitao("125502", "300000", "Nike", "8/8.5/9.5/10/11", "image2.jpg");
products.push(sp2);
let sp3 = new product.khoitao("125503", "400000", "Nike", "8/8.5/9.5/10/11", "image3.jpg");
products.push(sp3);
let sp4 = new product.khoitao("125504", "400000", "Nike", "8/8.5/9.5/10/11", "image4.jpg");
products.push(sp4);

document.getElementById('showproduct1').innerHTML = product.xuatsp(products);
document.getElementById('showproduct2').innerHTML = product.xuatsp(products);
document.getElementById('showproduct3').innerHTML = product.xuatsp(products);

function submitsp() {
    var id = document.getElementById('id').value;
    var brandName = document.getElementById('brandName').value;
    var size = document.getElementById('size').value;
    var price = document.getElementById('price').value;
    var img = document.getElementById('img').value;
    if (id == "") {
        alert("Hãy nhập mã sản phẩm");
        return false;
    }
    if (size == "") {
        alert("Hãy nhập mô tả sản phẩm");
        return false;
    }
    if (brandName == "") {
        alert("Hãy nhập mô tả sản phẩm");
        return false;
    }
    if (price == "") {
        alert("Hãy nhập giá sản phẩm");
        return false;
    }
    if (img == "") {
        alert("Hãy chọn img sản phẩm");
        return false;
    }
    let spf = new product.khoitao(id, price, brandName, size, img);
    products.push(spf);
    console.log(products);
    document.getElementById('showproduct1').innerHTML = product.xuatsp(products);
    document.getElementById('showproduct2').innerHTML = product.xuatsp(products);
    document.getElementById('showproduct3').innerHTML = product.xuatsp(products);
}

function detailProduct(x) {
    var the = x.parentElement.parentElement;
    var id = the.children[1].innerText.slice(13, 19);
    sessionStorage.setItem("id", JSON.stringify(id))
    window.location = "./view/single-product.html";
}