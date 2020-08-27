$(document).ready(function() {
    $("#burgerbutton").click(function() {
         $(".list ul").show(200)
         $("#burgerbutton").hide()
         $("#xbutton").show()
        })
    $("#xbutton").click(function(){
        $(".list ul").hide(200)
         $("#burgerbutton").show()
         $("#xbutton").hide()

    })
   displayBanner()
   $("#tabs").tabs()
}) // end of doc ready

banners = new Array (
     'img/img1.png',
     'img/img2.png', 
     'img/img3.png', 
     'img/img4.png', 
     'img/img5.png',
     'img/img6.jpg',
     'img/img7.jpg',
     'img/img8.jpg')

     currentBanner = 0

function displayBanner() {
    currentBanner++

    if (currentBanner == banners.length) {
        currentBanner = 0
    }

    $("#rotateImages").attr({
        src: banners[currentBanner],
        alt: 'cars',
    })

    var t = setTimeout("displayBanner()", 5000)
}
