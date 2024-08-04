
var index =1;
changeImage = function(){
    var imgs = ["banner-ads.jpg","banner-ads2.jpg"]
    document.getElementById('img').src = "../img/banner/" + imgs[index];
    index++;
    if(index == 2){
        index = 0;
    }
}
setInterval(changeImage,3000);