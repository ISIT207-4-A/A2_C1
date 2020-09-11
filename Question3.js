//apply function
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Mary",
  lastName: "Doe"
}
 
console.log(person.fullName.apply(person1));
var per = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe"
}
console.log(per.fullName.apply(person2, ["Oslo", "Norway"]));
//call function
var per2 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person3 = {
  firstName:"John",
  lastName: "Doe"
}
console.log(per2.fullName.call(person3, "Oslo", "Norway"));
var per3 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person4 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(per3.fullName.call(person4));
//bind function
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}
var myCarDetails = car.displayDetails.bind(car); 
myCarDetails();

var x="JS ";
function f() { 
                         return this.x; 
 } 
var  f1 = f.bind({x:"JavaScript"}); 
console.log(f1());