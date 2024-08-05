//Login
var session_user = sessionStorage.getItem('account');
var accounts = [];
accounts= JSON.parse(session_user)
console.log(accounts)
let account = {
    tk: "",
    mk: "",
    khoitao: function account(email, mk) {
        this.email = email;
        this.mk = mk;
    },
};

let acc = new account.khoitao("minh@mail.com", "1");
accounts.push(acc);
console.log(accounts)
function submitAcc() {
    var email = document.getElementById('email').value;
    var mk = document.getElementById('mk').value;
    if (email == "") {
        alert("Hãy nhập email");
        return false;
    }
    if (mk == "") {
        alert("Hãy nhập mật khẩu");
        return false;
    }
    let accf = new account.khoitao(email, mk);
    accounts.push(accf);
    console.log(accounts);
}
function kiemtra_user(email,password){
    for(let i = 0 ; i < accounts.length ; i++){
        if(accounts[i].email == email && accounts[i].mk == password){
            return i;
        }
    }
    return -1;
}
function dangnhap(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('mk').value;
    console.log(email,password);
    if(email == ""){
        alert(' moi nhap ma Email');
        return false;
    }
    if(password == ""){
        alert(' moi nhap ma password');
        return false;
    }
    let i = kiemtra_user(email,password);
    
    if(i>=0){
        alert('vao trang admin');
        window.location.href = "admin/admin.html";  
    }else {
        alert('ko đúng')
    }

}

function newAcc(x) {
    // var the = x.parentElement.parentElement;
    
    // var email = the.children[0].children[1].children[1].value;
    // var mk = the.children[1].children[1].children[1].value;
    // console.log(mk)
    submitAcc();
    sessionStorage.setItem("account", JSON.stringify(accounts))
    
    window.location = "login.html";
}