
$().ready( function(){

	let titr   = $('#titr-h1'),
	    btn    = $('#btn_all'),
	    btnUl  = $('#btn_all ul'),
	    btnLi  = $('#btn_all ul li'),
	    btnBtn = $('#btn_all ul li'),
	    pImg   = $('.mimg');

	if ( $(window).width() >= 361 && $(window).height() > 617 ){
		$('.mtitl').css({
			'textAlign': 'center'
		});
	}else if ( $(window).width() == 360 && $(window).height() == 617 ){
		$('.mtitl').css({
			'textAlign': 'center'
		});
/*  ########################################################################  */
        $('.b0, .b1').css({
        	'marginLeft': '10%'
        });
	}else{};

});