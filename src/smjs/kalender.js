const kalender = ()=>{
	let kw = [ 43, 44, 45, 46, 47, 48 ],
	woche  = [{ "Mon": "MONTAG", "Die": "DIENSTAG", "Mit": "MITTWOCH "}];

	let table = document.createElement("table"),
	    tr    = document.createElement("tr"),
	    th    = document.createElement("th"),
	    td    = document.createElement("td");
    function mtabl(){
    	for( var i = 0; i <= woche.lenght(); i++ ){
    		alert(woche[i]);
    	}
    }
}
kalender();