var giohangs = [];
var giohang = {
    masp:"",
    tensp:"",
    gia:"",
    soluong:"",
    hinh:"",
    khoitao: function giohang(masp,tensp,gia,soluong,hinh){
        this.masp = masp;
        this.tensp = tensp;
        this.gia = gia;
        this.soluong = soluong;
        this.hinh = hinh;
    },
    xuatgiohang: function(giohang){
        let text="";
        for(let i=0;i<giohangs.length;i++){
            text += '<tr>';
            text += this.motsp_giohang(giohang[i]);
            text += '</tr>';
            text += '<br>';
        }
        if(giohangs.length >0){
            text +="<tr><td colspan='4'><button>thanhtoan</button></td></tr>";
        }
        return text;
    },
    motsp_giohang: function(giohang){
        let text = "";
        text += '<td width = "30%"><label width=20px>'+giohang.masp+'</label>';
        text += '<img  width="50%" src="'+giohang.hinh +'"></td>';
        text += '<td width ="10%"><p>'+ giohang.tensp +'</p></td>'
        text += '<td width = "10%"><p>$<span>'+ giohang.gia +'</span>&emsp;&emsp;</p></td>';
        text += '<td width = "10%">';
        text += '<button onclick ="giamsl(this)" > - </button></br>';
        text += '<input nam="soluong" disabled value="'+ giohang.soluong +'" min="1" type="number" >';
        text += '</br><button onclick ="tangsl(this)"> + </button></td>';
        text += '<td width = "15%"><p>&emsp;=&emsp;$<span>'+ (giohang.gia*giohang.soluong) +'</span></p></td>';
        text += '<td width = "5%"><button onclick ="xoagiohang(this)">Xoa</button></td>';
        return text;
    }
}


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
    var tensp = the.children[1].innerText;
    var gia = the.children[2].innerText;
    var masp = the.children[3].innerText;
    var soluong = the.children[6].value;
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
