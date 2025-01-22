const greeting = (greetingHandeler, name) => {
  greetingHandeler(name);
};
const greetingHandeler = (name) => {
  console.log("good morning", name);
};
greetingHandeler(greetingHandeler, "jahid");
