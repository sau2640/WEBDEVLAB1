let ajay = prompt ("ajay Enter your age");
 ajay = Number.parseInt(ajay);

let Prashant = prompt ("prashant Enter your age");
 prashant= Number.parseInt(Prashant);

let manish = prompt ("manish Enter your age");
 manish = Number.parseInt(manish);

if((ajay>prashant) && (ajay>manish))
{
 console.log("ajay is youngest among them");
} 

else
{
console.log("ajay is smallest among them"); 
}

if((prashant>ajay) && (prashant>ajay))
{
console.log("prashant is youngest among them");
} 

else
{
console.log("prashant is smallest among them");
}

if((manish>ajay) && (manish>ajay))
{
console.log("manish is youngest among them");
}

else
{
console.log("manish is smallest among them");
}