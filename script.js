//your JS code here. If required.

function daysOfAYear(year) {
	let year=prompt("Enter the year");
	if(year%4==0){
      return 366;
	}else{
     return 365;
	 }
	
}

alert(daysOfAYear(year));
