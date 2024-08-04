var sanphams = [];
let sanpham={
    masp:"",
    tensp:"",
    gia:"",
    ctsp:"",
    hình:"",
    khoitao: function sanpham(masp,tensp,gia,ctsp,hinh){
        this.masp=masp;
        this.tensp=tensp;
        this.gia=gia;
        this.ctsp=ctsp;
        this.hinh=hinh;
    },
    xuatsp: function (sanphams){
        let text="";
        
        for(let i=0; i<sanphams.length;i++){
            text += '<div class="sanpham">';
            text += this.motsp(sanphams[i]);
            text += '</div>';
        }
        return text;
    },
    motsp: function(sanpham){
        let text="";
        text += '<div><img src="../img/sanpham/' + sanpham.hinh + '"></div>';
        text += '<p>'+ sanpham.tensp + '</p>';
        text += '<p><span>'+ sanpham.gia +'<i class="fa fa-usd"></i></span></p>';
        text += '<p>' + sanpham.masp + '</p>';
        text += '<button onclick="chitietsp(this)">Chi tiết</button></br>';
        text += '<input nam="soluong" value="1" min="1" type="number">';
        text += '<button onclick="chonhang(this)"><i class="fa fa-cart-plus"></i> Thêm vào giỏ</button>';      
        return text;
    }  
};

let sp=new sanpham.khoitao("001","giày bốt 1","200000","Giày cao gót màu trắng đính ngọc","giay bot nu 1.jpg");
sanphams.push(sp);
let sp2=new sanpham.khoitao("002","giày bốt 2","300000","Giày cao gót màu nâu vải xịn","giay bot nu 2.jpg");
sanphams.push(sp2);
let sp3=new sanpham.khoitao("003","giày bốt 3","400000","Giày cao gót màu trắng thắt nơ","giay bot nu 3.jpg");
sanphams.push(sp3);
let sp4=new sanpham.khoitao("004","giày bốt 4","400000","Giày cao gót màu đỏ sành điệu","giay bot nu 4.jpg");
sanphams.push(sp4);

let sp5=new sanpham.khoitao("005","váy xòe","200000","Vay xoe da den","vay 2.jpg");
sanphams.push(sp5);
let sp6=new sanpham.khoitao("006","váy ôm","300000","Váy ôm màu trắng tinh khít","vay 3.jpg");
sanphams.push(sp6);
let sp7=new sanpham.khoitao("007","váy jean","400000","Váy jean bánh bèo","vay 4.jpg");
sanphams.push(sp7);
let sp8=new sanpham.khoitao("008","váy bó sát ","400000","Váy bó sát quyến rũ","vay 1.jpg");
sanphams.push(sp8);

let sp9=new sanpham.khoitao("009","áo jean","200000","Áo jean cá tính","ao 2.jpg");
sanphams.push(sp9);
let sp10=new sanpham.khoitao("010","áo thun","300000","Áo thun màu trắng bánh bèo","ao 3.jpg");
sanphams.push(sp10);
let sp11=new sanpham.khoitao("011","áo len","400000","Áo len màu vàng, mặc vào như nàng thơ","ao 1.jpg");
sanphams.push(sp11);
let sp12=new sanpham.khoitao("012","áo thể thao","400000","Áo ba lỗ năng động màu đen","ao 4.jpg");
sanphams.push(sp12);

let sp13=new sanpham.khoitao("013","dây chuyền","200000","Áo jean cá tính","day chuyen.jpg");
sanphams.push(sp13);
let sp14=new sanpham.khoitao("014","thắt lưng","300000","Áo thun màu trắng bánh bèo","that lung.jpg");
sanphams.push(sp14);
let sp15=new sanpham.khoitao("015","vòng tay","400000","Áo len màu vàng, mặc vào như nàng thơ","vong tay.jpg");
sanphams.push(sp15);
let sp16=new sanpham.khoitao("016","khuyên tai","400000","Áo ba lỗ năng động màu đen","khuyen tai.jpg");
sanphams.push(sp16);
document.getElementById('showsanpham').innerHTML = sanpham.xuatsp(sanphams);

function submitsp(){
    var MaSP=document.getElementById('MaSP').value;
    var TenSP=document.getElementById('TenSP').value;
    var CTSP=document.getElementById('CTSP').value;
    var Gia=document.getElementById('Gia').value;
    var Hinh=document.getElementById('Hinh').value;
    if( MaSP == ""){
        alert("Hãy nhập mã sản phẩm");
        return false;
    }
    if( CTSP == ""){
        alert("Hãy nhập mô tả sản phẩm");
        return false;
    }
    if(TenSP == ""){
        alert("Hãy nhập tên sản phẩm");
        return false;
    }
    if( Gia == ""){
        alert("Hãy nhập giá sản phẩm");
        return false;
    }
    if( Hinh == ""){
        alert("Hãy chọn hình sản phẩm");
        return false;
    }
    let spf=new sanpham.khoitao(MaSP,TenSP,Gia,CTSP,Hinh);
    sanphams.push(spf);
    console.log(sanphams);
    let sp=sanpham
    document.getElementById('showsanpham').innerHTML = sp.xuatsp(sanphams);
}

function chitietsp(x){
    var the= x.parentElement
    var masp= the.children[3].innerText;
    sessionStorage.setItem("masp",JSON.stringify(masp))
    window.location = "ChiTiet.html";
}   
