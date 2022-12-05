
const berech = ()=>{
	// Nomal Arbeit zeit 
	    //                27                28                 02                 03     
	let a_zeit = [["15.00 - 22.30"], ["14.19 - 21.56"], ["14.14 - 22.38"], ["14.19 - 22.02"], 
		//    04                  05
		["14.28 - 22.02"], ["14.28 - 22.02"] ];

	// Normal Arbeit zeit berechnung 
	               // 27         28            02           03           04             05
	let a_all = [22.30-15.00, 21.56-14.19, 22.38-14.14, 22.02-14.19, 22.02-14.28,  20.57-14.31];

	// Rauch Pause + Arbeit 30mn Pause 
	            //27    28       02           03         04         05
	let zeit  = [ 30, 8+7+30, 9+8+11+5+30, 9+4+5+5+30, 9+6+8+30, 7+10+9+30 ] ;


	let aZeit00 = document.querySelector(".az00"),
	     aZeit0 = document.querySelector(".az0"),
	     aZeit1 = document.querySelector(".az1"),
	     aZeit2 = document.querySelector(".az2"),
	     aZeit3 = document.querySelector(".az3"),
	     aZeit4 = document.querySelector(".az4");

	aZeit00.innerHTML = a_zeit[0],
	 aZeit0.innerHTML = a_zeit[1],
	 aZeit1.innerHTML = a_zeit[2],
	 aZeit2.innerHTML = a_zeit[3],
	 aZeit3.innerHTML = a_zeit[4],
	 aZeit4.innerHTML = a_zeit[5];

	let a00 = document.querySelector(".a-z00"),
	     a0 = document.querySelector(".a-z0"),
	     a1 = document.querySelector(".a-z1"),
	     a2 = document.querySelector(".a-z2"),
	     a3 = document.querySelector(".a-z3"),
	     a4 = document.querySelector(".a-z4");

    a00.innerHTML = a_all[0].toFixed(2) - 0.30,
     a0.innerHTML = a_all[1].toFixed(2) - 0.45,
     a1.innerHTML = a_all[2].toFixed(2) - 0.63,
     a2.innerHTML = a_all[3].toFixed(2) - 0.53,
     a3.innerHTML = a_all[4].toFixed(2) - 0.53,
     a4.innerHTML = a_all[5].toFixed(1) - 0.56;

	let val00 = document.querySelector(".z00"),
	     val0 = document.querySelector(".z0"),
	     val1 = document.querySelector(".z1"),
	     val2 = document.querySelector(".z2"),
	     val3 = document.querySelector(".z3"),
	     val4 = document.querySelector(".z4");

    val00.innerHTML = zeit[0], val0.innerHTML = zeit[1], val1.innerHTML = zeit[2],
     val2.innerHTML = zeit[3], val3.innerHTML = zeit[4], val4.innerHTML = zeit[5];
	alert("[*] Die WebSeite ist noch in Bearbeitung [*]");
};