var users = [];
var user = {
    ma_user:"",
    fullname:"",
    email:"",
    password:"",
    phone:"",
    address:"",
    position:1,
    khoitao : function(ma_user,fullname,email,password,phone,address,position){
        this.ma_user = ma_user;
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.position = position;
    }
};
let us1 = new user.khoitao("nguyennhxps38099","Xuân Nguyên","xn@gmail.com","123","0398666555","Phú Nhuận", 1);
users.push(us1);
let us2 = new user.khoitao("admin","Xuân Nguyên","xn@gmail.com","1231211ok","0398666555","Phú Nhuận", 0);
users.push(us2);
// console.log(users);
function validateEmail(email){
    // biểu thức chính quy để kiểm tra định dạng email
    var re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
function checkform(){
    var ma_user= document.getElementById("ma_user").value;
    var fullname= document.getElementById("fullname").value;
    var email= document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var phone= document.getElementById("phone").value;
    var address= document.getElementById("address").value;
    var position=1;
    if(ma_user === ""){
        alert('Hãy nhập tên đăng nhập');
        return false
    }
    if(fullname === ""){
        alert('Hãy nhập họ và tên');
        return false
    }
    if(email === ""){
        alert('Hãy nhập email');
        return false
    }
    if(!validateEmail(email)){
        alert("Email không đúng! Hãy nhập lại");
        return false
    }
    if(password === ""){
        alert('Hãy nhập mật khẩu');
        return false
    }
    if(phone === ""){
        alert('Hãy nhập số điện thoại');
        return false
    }
    if(address === ""){
        alert('Hãy nhập địa chỉ');
        return false
    }
    var usr = new user.khoitao(ma_user,fullname,email,password,phone,address,position);
    users.push(usr);
    alert('Đăng ký thành công');
}
function kiemtra_user(ma_user,password){
    for(let i=0;i<users.length;i++){
        if(users[i].ma_user === ma_user && users[i].password === password){
            return i;
        }
    }
    return -1;
}
function dangnhap(){
    var ma_user= document.getElementById("ma_user").value;
    var password= document.getElementById("password").value;
    if(ma_user === ""){
        alert('nhap ten dang nhap');
        return false;
    }
    if(password === ""){
        alert('nhap mat khau');
        return false;
    }
    let vitri = kiemtra_user(ma_user,password);
    if(users[vitri].position === 0){
        alert('vào trang admin')
    }
    if(users[vitri].position === 1){
        alert('vào trang chủ')
    }  
    if(vitri == -1){
        alert('sai tên đăng nhập hoặc mật khẩu!');
    }  
}
