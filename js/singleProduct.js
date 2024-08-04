//Single Product 

var session_masp = sessionStorage.getItem('id');
var masp = session_masp.replace(/"/g, '');
let text1 = "";
let text2 = "";
// Keep Cart
var x = sessionStorage.getItem("giohang");
if (x == null) {
    giohangs = [];
} else {
    giohangs = JSON.parse(x);
}
//
function checkProduct(masp) {

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === masp) {
            return i;
        }
    }
    return -1;
}

let kt = checkProduct(masp);
if (kt == -1) {
    alert('no item');
} else {
    text1 += '<h2>' + products[kt].brandName + '</h2>';
    text1 += '<div class="single-product-price"> <span class="price new-price">' + products[kt].price + '</span><span class="regular-price">    5.000.000</span></div>'
    text1 += '<div class="product-description"><p>Giày size ' + products[kt].size + '</p></div>';
    text2 += '<img src="../assets/images/' + products[kt].img + '" alt="">';
    console.log(text1);
    document.getElementById('showProductDetail').innerHTML = text1;
    document.getElementById('lg-image').innerHTML = text2;
}