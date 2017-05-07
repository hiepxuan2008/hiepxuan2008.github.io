var canvas = document.getElementById("leCanvas");
var context = canvas.getContext("2d");
// context.globalCompositeOperation = "source-over";
var deg = 0;

var image = new Image();
var strSourceBG = "./img/pattern/mau01.png";
image.src = strSourceBG;
image.onload = function() {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

$(function() {
    $('.image-editor').cropit({
        freeMove: true,
        smallImage: "allow",
        maxZoom: 3
    });
    $('#btn-choose-image').click(function() {
        $('.cropit-image-input').click();
    });
    $('#rotate_right').click(function(){
        deg += 90;
        if(deg >=360) deg = 0;
        $('#crop-image').css('transform','rotate('+deg+'deg)');
    });
    $('#rotate_left').click(function(){
        deg -= 90;
        if(deg <= -360) deg = 0;
        $('#crop-image').css('transform','rotate('+deg+'deg)');
    });
});

function downloadCV(t) {
    var img = new Image();
    img.src = $('.image-editor').cropit('export');
    img.onload = function(){
        context.translate(canvas.width/2,canvas.height/2);
        context.rotate(deg*Math.PI/180);
        context.drawImage(img,-img.width/2,-img.width/2);
        context.rotate(-deg*Math.PI/180);
        context.translate(-canvas.width/2,-canvas.height/2);
        var image = new Image();
        image.src = strSourceBG;
        image.onload = function() {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            var imageData = canvas.toDataURL('image/png');
            canvas.toBlob(uploadToServer, 'image/jpeg', 0.95);

            imageData = imageData.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
            imageData = imageData.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');

            var link = document.createElement('a');
            link.download = 'HueSVBinhDinhAvatar.png';
            link.href = imageData;
            link.click();
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    }
}


function uploadToServer(blob) {
    var formData = new FormData();
    formData.append('picture', blob);

    $.ajax({
        url: "http://139.59.115.135:3001/upload",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false
    }).done(function(respond){
        console.log(respond);
        refreshRecentlyImages();
    });
}

function stateComboChange()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    var combo1 = document.getElementById('stateCombo');

    switch(combo1.value)
    {
        case 'mau1': strSourceBG = "./img/pattern/mau01.png";
            break;
        case 'mau2': strSourceBG = "./img/pattern/mau02.png";
            break;
    }
    image.src = strSourceBG;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
}


$(document).ready(function() {
    refreshRecentlyImages();
});

function refreshRecentlyImages() {
    $.ajax({
        url: "http://139.59.115.135:3001/images",
        type: "GET"
    }).done(function(data){
        console.log(data);
        var html = '';
        data.forEach(function(item, index) {
            html += '<div class="image"><img src="' + item.thumb + '"></div>';
        });
        $('.recently-images').html(html);
    });
}