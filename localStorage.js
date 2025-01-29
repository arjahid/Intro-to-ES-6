//^ frist check is there any data in local storage
//!json a data string hisebe take,tai amar data parse kore felbo json.parse diye
const getStoredCart=()=>{
    const storedCart=localStorage.getItem('cart')
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return []
}
//^then add data to local storage
const saveCart=cart=>{
    const cartStringify=JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}
// ^then add data to local storage
const addToLs=(id)=>{
    const cart=getStoredCart()
    cart.push(id)
    saveCart(cart)
}