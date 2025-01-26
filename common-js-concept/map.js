const products=[
    {name:'phone',price:365000,brand:"apple",color:"purple"},
    {name:'phone',price:3000,brand:"apple",color:"purple"},
    {name:'phone',price:3000,brand:"apple",color:"purple"},
    {name:'phone',price:3067600,brand:"apple",color:"purple"},
    {name:'phone',price:30676700,brand:"apple",color:"purple"},
    {name:'phone',price:670,brand:"apple",color:"purple"},
    {name:'phone',price:3000,brand:"apple",color:"purple"}
]
const price=products.map(product=>product.price)
 const brands=products.map(p=>p.brand)
 console.log(brands)