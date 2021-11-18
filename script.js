// XHR - XMLHttpRequest
//Why XHR?
// get the date from the server

const getBlogs = ()=>{
    //creating a request
    const xhr = new XMLHttpRequest();
    //method & url
    // GET method - for retrive the data
    xhr.open("GET", "https://60c98aa8772a760017203b57.mockapi.io/blogs");
    //what type of response(json)
    xhr.responseType = "json";
    //after getting the respose, what should we do? print on consol
    xhr.onload = ()=>{
        console.log(xhr.response);
        const blogs = xhr.response;  //.response is a keyword
        //display only the heading
        for( let blog of blogs){
            //console.log(blog.heading);// gives only heading
            if(blog.id >= 8){
                console.log(blog)
            }
            //console.log(blog);// it gives seperate seperate objects
        }

    };
    //send the request
    xhr.send();
};
getBlogs();

//OOPS - Object Oriented Programming

//cars
/*      wheels doors  engine
ferrari   4     2      v8
venue     4     4      v3
bmw       4     4      v12
toyota    4     5      v6 */

//Car is a blueprint which we can create different types of cars
//class is a blueprint which we can create different types of Objects

class Car{
    constructor(name, wheels, doors, engine){
        this.name = name;
        this.wheels = wheels;
        this.doors = doors;
        this.engine = engine;
    }
}
//creating a object (model of the car)- instantiating - creating a object
//when you do "new" constructor function is called
const ferrari = new Car("ferrari", 4, 2, "v8");
console.log(ferrari); //{name: 'ferrari', wheels: 4, doors: 2, engine: 'v8'}

//Bank
class Account{
    constructor(name, accno, balance){
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    // class methods
    getBalance(){
        return "The balance is: Rs" + this.balance;
    }
    withdraw(amount){
        //console.log(amount, this.balance);
        if(this.balance>= amount){
            this.balance = this.balance - amount;
            return this.getBalance();
        }else{
            return "Insufficient Funds";
        }
    }
}
const Ajith = new Account("Ajith", 11111, 100000000);
const Aravind = new Account("Aravind", 22222, 10000000);
const Sarathy = new Account("Sarathy", 33333, 1000000);

console.log(Ajith.getBalance());
console.log(Aravind.getBalance());
console.log(Sarathy.getBalance());

console.log(Ajith.withdraw(10000));
console.log(Aravind.withdraw(1000000000000));