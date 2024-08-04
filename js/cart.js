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


