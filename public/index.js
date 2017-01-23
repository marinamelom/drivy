'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//Exercice1
 function convertDate(str){
	var re = /[0-9]+/g;
	var result= re[Symbol.match](str);
	var dateLoc =  new Date(result[0], result[1], result[2]);
	return dateLoc;
}

function getDays (BeginDate, returnDate)
{
	var MS_PER_DAY;
	var begin = convertDate(BeginDate).getTime();
	var end = convertDate(returnDate).getTime();
	

	return Math.floor(end- begin) / MS_PER_DAY +1;
}


function exo1(rentals)
{
	var i = 0;
	var j =0;
	var day = 0;
	
	while(j<cars.length)
			{
				 day = getTime(rentals[i].pickupDate, rentals[i].returnDate);
				
				rentals[i].price = cars[j].pricePerDay * day + cars[j].pricePerKilo*rentals[i].dist;
				console.log(rentals[i].price);
				
			j++	;
			i++;
	}
	
}
Exercice2
 
function calculRentalPrice(){
  cars.forEach(function(value){
       if (value.id == carId){
        var time = (days_between(stringToDate(entry.pickupDate,"yyyy-mm-dd","-"),stringToDate(entry.returnDate,"yyyy-mm-dd","-"))+ 1);
       var time = days_between(stringToDate(entry.pickupDate,"yyyy-mm-dd","-"),stringToDate(entry.returnDate,"yyyy-mm-dd","-"))+ 1;

        if (time>=1)
          value.pricePerDay = value.pricePerDay*0.9;
        
        else if (time >=4)
          value.pricePerDay = value.pricePerDay*0.7;

        else if (time >=10)
          value.pricePerDay = value.pricePerDay*0.5;

        console.log("The priceperday is " , value.pricePerDay);
        if (time>1 && time<4){
          value.pricePerDay *= 0.9;
        }
        if (time >4 && time<10){
          value.pricePerDay *= 0.7;
        }
        if (time >10){
          value.pricePerDay *= 0.5;
        }
 
         var timeComponent= value.pricePerDay * time;
        console.log("time",timeComponent);

         var dayComponement = entry.day*value.pricePerKm;
        console.log(dayComponement);
         var rentalPrice = timeComponent + dayComponement;
         console.log("The rental price is ", rentalPrice);

        

       }
     })
   })


 // Exercise 3 - Give me all your money
 
        var commission = rentalPrice*0.70;
        var Comission.assurance = commission*0.5;
        var Comission.assistance = time; // 1$ / day
        var Comission.drivy = commission - Comission.assistance - Comission.asssurance;

        console.log("Comission :  ",commission);
        console.log("Comission pour l'assurance :  ",Comissionassurance);
       console.log("Comission pour l'assistance :  ",Comissionassistance );
        console.log("Comission pour drivy :  ", Comissiondrivy);
      console.log("The new rental price less comission is ", rentalPrice);
       }
     })
   })

   
   // Exercise 4 - The famous deductible
function exo4(rentals)
{

	var i = 0;
	var j =0;
	var y =0;
	var day = 0;
	var new_price = 0;

	while(j<cars.length)
			{
				 d = getDays(rentals[i].pickupDate, rentals[i].returnDate);
				 new_price = 0;
				for(y =1; y<=d ; y++)
					{
						if(y==1)
						{
							new_price += cars[j].pricePerDay;
						}
						if(y>1 && y<5)
						{	
							new_price += cars[j].pricePerDay*0.9;	
						}	
						if(y>4 && y<11 )
						{
							new_price += cars[j].pricePerDay*0.7;
						}
						if(y>10)
						{
								new_price += cars[j].pricePerDay*0.5;		
						}
				}
				rentals[i].price = new_price+cars[j].pricePerKm*rentals[i].day;
				rentals[i].Comission.assurance= 15*rentals[i].price / 100;
				rentals[i].commission.assistance = 1*d;
				rentals[i].commission.drivy = rentals[i].commission.insurance - rentals[i].commission.assistance;

				

				if(rentals[i].options.deductibleReduction == true)
				{
					rentals[i].commission.drivy+= 4*d;
				}
				
				console.log("price: " + rentals[i].commission.drivy);
			j++	;
			i++;
	}
}

      
 
// Exercise 5 - Pay the actors
function Exo5(){
  Exo4();
  for (var i=0; i<rentals.length;i++){
    actors[searchplayactor(rentals[i].id)].payment[0].amount=rentals[i].price;
    actors[searchplayactor(rentals[i].id)].payment[1].amount=rentals[i].price-rentals[i].commission.insurance*2;
    actors[searchplayactor(rentals[i].id)].payment[2].amount=rentals[i].commission.insurance;
    actors[searchplayactor(rentals[i].id)].payment[3].amount=rentals[i].commission.assistance;
    actors[searchplayactor(rentals[i].id)].payment[4].amount=rentals[i].commission.drivy;
  }
  //console.log(actors);
}




//            Exercice 6
//Search a rental in rentals using its id
function searchRental(str){
  for (var i=0; i<rentals.length;i++){
    if (rentals[i].id==str)
      return i;
  }
}
//Using a "hard" method : we update rentals and do everything all over again
function Exo6(){
  for (var i=0; i<rentalModifications.length;i++){
    if (rentalModifications[i].pickupDate) rentals[searchRental(rentalModifications[i].rentalId)].pickupDate=rentalModifications[i].pickupDate;
    if (rentalModifications[i].day) rentals[searchRental(rentalModifications[i].rentalId)].day=rentalModifications[i].day;
    if (rentalModifications[i].returnDate) rentals[searchRental(rentalModifications[i].rentalId)].returnDate=rentalModifications[i].returnDate;
  }
  Exo5();
  console.log(actors)
}

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
