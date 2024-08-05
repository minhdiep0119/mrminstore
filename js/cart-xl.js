// Xử lí giỏ hàng
document.getElementById("showgiohang").style.display = "none";

var x = sessionStorage.getItem("giohang");
if(x == null){
    giohangs = [];
}else{
    giohangs = JSON.parse(x);
}


function showgiohang(){
    var x = document.getElementById("showgiohang");
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
    let gh= giohang;
    document.getElementById('danhsachsanpham').innerHTML = gh.xuatgiohang(giohangs);
}

function showspgiohang(){
    let gh= giohang;
    document.getElementById('danhsachsanpham').innerHTML = gh.xuatgiohang(giohangs);
}
function kiemtragiohang(masp,giohangs){
    for(let i=0;i < giohangs.length; i++){
        if(giohangs[i].masp == masp){
            return i;
        }
    }
    return -1; 
}
function chonhang(x){
    
    var the = x.parentElement;
    var hinh = the.children[0].children[0].src;
    var tensp = 'Nike';
    var gia = the.children[2].innerText.slice(17);
    console.log(gia)
     var masp = the.children[1].innerText.slice(13, 19);
    var soluong = 1;
    let vitri = kiemtragiohang(masp,giohangs);
    if(vitri == -1){
        let gh= new giohang.khoitao(masp,tensp,gia,soluong,hinh);
        giohangs.push(gh);
    }else{
        let sl=Number(giohangs[vitri].soluong) + Number(soluong);
        giohangs[vitri].soluong = sl;
    }
    sessionStorage.setItem("giohang",JSON.stringify(giohangs));
    showspgiohang()
}


function xoagiohang(x){
    var the = x.parentElement.parentElement;
    console.log(the.children[0].children[0].innerText);
    let masp = the.children[0].children[0].innerText;
    let vitri = kiemtragiohang(masp,giohangs);
    giohangs.splice(vitri,1);
    sessionStorage.setItem("giohang",JSON.stringify(giohangs));
    showspgiohang();
}
function giamsl(x){
    var the= x.parentElement.parentElement;
    let masp = the.children[0].children[0].innerText;
    vitri = kiemtragiohang(masp,giohangs);
    if(giohangs[vitri].soluong >1){
        giohangs[vitri].soluong--;
    }else{
        alert('Không giảm được nữa!');
    }
    showspgiohang()
}
function tangsl(x){
    var the= x.parentElement.parentElement;
    let masp = the.children[0].children[0].innerText;
    vitri = kiemtragiohang(masp,giohangs);
    giohangs[vitri].soluong++;   
    showspgiohang()
}
function closegiohang(){
    document.getElementById('showgiohang').style.display = 'none';
}
