class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log(`gari cole na cole nah cole na re gari cole nah`)
    }
}
class bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat=seat;
        this.ticketPrice=ticketPrice;
    }

}
class truct extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
}
const bus1=new bus('tempu',45000,34,550);
bus1.move();
console.log(bus1)