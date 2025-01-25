const show=()=>{
const product=document.getElementById('product').value;
const quantity=document.getElementById('quantity').value;

console.log(product,quantity)
showValue(product,quantity)
saveProduct(product,quantity)
}
const showValue=(product,quantity)=>{
    const ul=document.getElementById('jh')
    const li=document.createElement('li')
    li.innerHTML=`${product}:${quantity}`
    ul.appendChild(li)

}
const getStoredShopingCart=()=>{
    let cart={}
    const storedCart=localStorage.getItem('cart')
    if(storedCart){
            cart=JSON.parse(storedCart)
    }
    return cart;
}

const saveProduct=(product,quantity)=>{
    const cart=getStoredShopingCart()
    cart[product]=quantity;
    
    const cartConvert=JSON.stringify(cart)
    localStorage.setItem('cart',cartConvert)
}
const showData=()=>{
    const save=getStoredShopingCart()
    for(const product in save){
        const quantity=save[product]
        showValue(product);
    }

}
showData()