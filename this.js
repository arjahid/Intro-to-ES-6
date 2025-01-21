class person{
    constructor(name,age,address,phone,email){
        this.name=name;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.email=email;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}
const jahid=new person('jahid',23,'sirajgonj','01782885378')
jahid.sleep();