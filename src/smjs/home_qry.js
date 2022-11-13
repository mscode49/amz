$().ready( function(){
	let titr    = $('#titr-h1'),
	    btn     = $('#btn_all'),
	    btnUl   = $('#btn_all ul'),
	    btnLi   = $('#btn_all ul li'),
	    btn_La1 = $('.btn0'),
	    tabl    = $('table');

// DEFINITION DU NAVIGATEUR CHROME 

if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ){

// DEFINITION DU NAVIGATEUR CHROME 
}else if(navigator.userAgent.indexOf("Chrome") != -1 ){
	if ( $(window).width() == 360 && $(window).height() == 617 ){
           btnUl.css({
        	'marginLeft': '-53px'
           });

           alert("Google - Chrome");
        }else if ( $(window).width() >= 361 && $(window).height() > 617 ){}else{}
// DEFINITION DU NAVIGATEUR SAFARIE 
}else if(navigator.userAgent.indexOf("Safari") != -1){

// DEFINITION DU NAVIGATEUR FIREFOX 
}else if(navigator.userAgent.indexOf("Firefox") != -1 ){
	if ( $(window).width() == 360 && $(window).height() == 617 ){
           btnUl.css({
        	'marginLeft': '-53px'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
           titr.css({
		'fontSize': '35px',
		'border': 'solid 1px yellow'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
	   $('.b0').css({
		'fontSize': '30px'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
           btn.css({
           	'marginLeft': '20%'
           }) ;
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
           $('#btn_all .btn0 a').css({
               'paddingRight' : '30px',
	       'paddingLeft' : '35px'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
           $('#btn_all .btn1 a').css({});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
           $('#btn_all .btn2 a').css({
               'paddingRight' : '30px',
	       'paddingLeft' : '35px'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 	
           alert("Mozila - Firefox");
        }else if ( $(window).width() >= 361 && $(window).height() > 617 ){

           $('th').css({
            'fontSize': '22px'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
           $('td').css({
            'fontSize': '18px'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
           btnUl.css({
        	'marginLeft': '7.5%'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
           titr.css({
		    'fontSize': '43px',
		    'border': 'solid 1px yellow'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
	       $('.b0').css({
		      'fontSize': '30px',
		      'color': 'red',
		      'textShadow': '1px 0.5px 1px white'
            });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
           tabl.css({
               'marginLeft': '0px'
           });
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	   alert("Mozila - Firefox");
        }else{}
// DEFINITION DU NAVIGATEUR INTERNET EXPLOER 
}else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
// DEFINITION DU NAVIGATEUR INCONUE
}else{}
});

/*
if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ){

}else if(navigator.userAgent.indexOf("Chrome") != -1 ){

}else if(navigator.userAgent.indexOf("Safari") != -1){

}else if(navigator.userAgent.indexOf("Firefox") != -1 ){

}else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
    //IF IE > 10
}else{}
*/
