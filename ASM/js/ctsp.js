
var session_masp = sessionStorage.getItem('masp');     
var masp = session_masp.replace(/"/g, '');
let text ="";
// giữ giỏ hàng
var x = sessionStorage.getItem("giohang");
        if(x == null){
            giohangs = [];
        }else{
            giohangs = JSON.parse(x);
        }
//
function kiemtrasanpham(masp){
    for(let i=0; i<sanphams.length;i++){
        if(sanphams[i].masp === masp){
            return i;
        }
    }
            return -1;
}

let kt = kiemtrasanpham(masp);
        if(kt == -1){
            alert('no item');
        }else{
            
            text += '<tr><td rowspan="5" width="10%"><lable>' + sanphams[kt].masp;
            text += '</lable><img height="auto" width="300px" src="../img/sanpham/' + sanphams[kt].hinh + '"/>';
            text += '</td></tr>'
            text += '<tr><td>' + sanphams[kt].tensp +'</td></tr>';
            text += '<tr><td>' + sanphams[kt].gia +'<i class="fa fa-usd"></i></td></tr>';
            text += '<tr><td width="20%">' + sanphams[kt].ctsp +'</td></tr>';
            document.getElementById('showchitietsanpham').innerHTML=text;
        }
        