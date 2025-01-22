const shop={
    owner:'jahid',
    address:{
        street:'123 main st',
        city:'Dhaka',
        country:'Bangladesh'
    },
    product:['electronics','food','clothing'],
    revineu:100000,
    isOpen:true,
    isNew:false

}
const shopJson=JSON.stringify(shop);
console.log(shopJson);