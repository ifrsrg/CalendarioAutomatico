




var meses = new Array("janeiro","fevereiro","marco","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro");

var d = new Date();


function comecaMes1(n){
  
  d.setFullYear(2017  ,n,1);
  var diaSemana = d.getDay();
  comecaMes(diaSemana,n);   
}

function comecaMes(diaSemana,n){     
     var x = '';
     var janeiro = 1;
     reseta(n);
  for(var i=diaSemana;i<=7;i++){
    if (i==0){
      i=7;
    }
    if (i==1){
      x =0; 
    }
    if (i==2){
      x =1; 
    }
    if (i==3){
      x =2;
    }
    if (i==4){
      x =3;
    }
    if (i==5){
      x =4;
    }
    if (i==6){
      x =5; 
    }
     if (i==7){
      x =6;
    }
    
    document.getElementById(meses[n]).rows[1].cells[x].innerHTML= janeiro;
    janeiro++;
 
  }
  janeiro=0;
}

function reseta(n){
  
  document.getElementById(meses[n]).rows[1].cells[0].innerHTML= "";
  document.getElementById(meses[n]).rows[1].cells[1].innerHTML= "";
  document.getElementById(meses[n]).rows[1].cells[2].innerHTML= "";
  document.getElementById(meses[n]).rows[1].cells[3].innerHTML= "";
  document.getElementById(meses[n]).rows[1].cells[4].innerHTML= "";
  document.getElementById(meses[n]).rows[1].cells[5].innerHTML= "";
  document.getElementById(meses[n]).rows[1].cells[6].innerHTML= "";

}


function preenche(n){
    var x = parseInt(document.getElementById(meses[n]).rows[1].cells[6].innerHTML);
 	var c1 = 2;
 	var c2 = 0;
 	var c3 = 0;
 	var c4 = 31;

 	if(n%2!=0){
 		c4=30;
 	}
 	if(n==1){
 		c4=28;
 	}
 	if(leapYear(d.getFullYear()) && n==1){
 		c4=29;

 	}



		 while(c1<7 && x<c4){
		 	c2=0;
		 	while(c2<7 && x<c4){
		 		document.getElementById(meses[n]).rows[c1].cells[c2].innerHTML= x+1;
		 		x = x+1;
		 		c2++;
		 	}
		 	c1++;

		 }
	
}


comecaMes1(0);
preenche(0);
comecaMes1(1);
preenche(1);
comecaMes1(2);
preenche(2);
comecaMes1(3);
preenche(3);
comecaMes1(4);
preenche(4);
comecaMes1(5);
preenche(5);
comecaMes1(6);
preenche(6);
comecaMes1(7);
preenche(7);
comecaMes1(8);
preenche(8);
comecaMes1(9);
preenche(9);
comecaMes1(10);
preenche(10);
comecaMes1(11);
preenche(11);
feriados(d);

function leapYear(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function pascoa( y ) {

        var date, a, b, c, m, d;

        // Instantiate the date object.
        date = new Date;

        // Set the timestamp to midnight.
        date.setHours( 0, 0, 0, 0 );

        // Set the year.
        date.setFullYear( y );

        // Find the golden number.
        a = y % 19;

        // Choose which version of the algorithm to use based on the given year.
        b = ( 2200 <= y && y <= 2299 ) ?
            ( ( 11 * a ) + 4 ) % 30 :
            ( ( 11 * a ) + 5 ) % 30;

        // Determine whether or not to compensate for the previous step.
        c = ( ( b === 0 ) || ( b === 1 && a > 10 ) ) ?
            ( b + 1 ) :
            b;

        // Use c first to find the month: April or March.
        m = ( 1 <= c && c <= 19 ) ? 3 : 2;

        // Then use c to find the full moon after the northward equinox.
        d = ( 50 - c ) % 31;

        // Mark the date of that full moon—the "Paschal" full moon.
        date.setMonth( m, d );

        // Count forward the number of days until the following Sunday (Easter).
        date.setMonth( m, d + ( 7 - date.getDay() ) );

        // Gregorian Western Easter Sunday
        return date;

    }

function feriados(date){
    document.getElementById(meses[11]).rows[5].cells[0].style.backgroundColor = 'red';//natal
    
    var pasc = pascoa(2017);

    document.getElementById(meses[pasc.getMonth()]).rows[pasc.getDate()/7].cells[date.getDay()].style.backgroundColor = 'red';//pascoa


}




