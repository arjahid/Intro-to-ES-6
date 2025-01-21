class Teacher{
    constructor(name, subject, address) {
        this.name = name;
        this.subject = subject;
        this.address = address;
    }
    lecturer() {
        console.log(`I am a teacher`);
    }
}

const jahid = new Teacher('jahid', 'web', 'sirajgonj');
const rashid=new Teacher('rashid','math','dhaka');
console.log(jahid);
console.log(rashid);
jahid.lecturer();
