const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "laptop", price: 45000 },
];
class Product {
  constructor() {
    this.country = "Bangladesh";
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}
const lenovo = new Product();
console.log(lenovo);
lenovo.speak("laptop");
