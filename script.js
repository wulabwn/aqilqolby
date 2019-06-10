$('.page-scroll').on('click', function(e){

	//ambil isi href
	var href =$(this).attr('href');
	//tangkap elemen yang bersangkutan
	var elemenHref = $(href);
	//-------------------------------------------------------------
		//menampilkan satu elemen atau disini disebut satu section
	// console.log(elemenHref);
		//mennghitung jarak elemen dari atas 
    // console.log("jarak element = " + elemenHref.offset().top);
     // buat 
    // console.log($('body').scrollTop());
    //-------------------------------------------------------
    //pindahkan scrool pada version pertama melalui jquery biasa
    //$('body').scrollTop.(elemenHref.offset().top);

    $('html,body').animate({
    	scrollTop:elemenHref.offset().top -50

    },1500,'easeInOutExpo');



     e.preventDefault();





});

//paralax 

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform':'translate(0px,'+ wScroll/4 +'%)'
    })

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
        'transform':'translate(0px,'+ wScroll/2 +'%)'
    })

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.jumbotron p').css({
        'transform':'translate(0px,'+ wScroll/1.2 +'%)'
    })

});