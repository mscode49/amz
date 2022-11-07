
let data = {
	uhr: new Date()
};
$().ready( function(){
	let titr   = $('#titr-h1'),
	    btn    = $('#btn_all'),
	    btnUl  = $('#btn_all ul'),
	    btnLi  = $('#btn_all ul li'),
	    btn_La1 = $('.btn0');

	if ( $(window).width() >= 361 && $(window).height() > 617 ){
		alert("SCREEN width"+" "+ $(window).width()+ " "+ $(window).height());
		$('body').css({});
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		titr.css({
			'fontSize': '40px',
			'border': 'solid 5px yellow'
		});
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
        btn.css({});
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
        btnLi.css({});
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
        btn_La1.css({});
/* ################################################################################ */
	}else if ( $(window).width() == 360 && $(window).height() == 617 ){
        btnUl.css({
        	'marginLeft': '-53px'
        });
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		titr.css({
			'fontSize': '35px',
			'border': 'solid 1px yellow'
		});
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

		alert("Hier is "+ " "+ $(window).width()+ " "+ $(window).height());
	}else{} /* FIN DE IF */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	//alert("Try" + data.uhr);
});