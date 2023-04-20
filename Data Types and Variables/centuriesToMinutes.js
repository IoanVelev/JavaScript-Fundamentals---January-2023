function centuriesToMinutes(centuries){
 let years = centuries * 100;
 let days = Math.trunc(years * 365.2422);
 let hours = Math.trunc(days * 24);
 let minutes = Math.trunc(hours * 60);
 console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1)
centuriesToMinutes(5)