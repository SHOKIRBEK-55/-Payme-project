import * as yup from "yup";

const email:HTMLInputElement = document.querySelector("#email")!;
const password:HTMLInputElement = document.querySelector("#password")!;
const btn:HTMLButtonElement = document.querySelector(".btn")!;
const error1:HTMLParagraphElement = document.querySelector(".errorEmail")!;
const error2:HTMLParagraphElement = document.querySelector(".errorPassword")!;
const second_page:HTMLDivElement = document.querySelector(".boxes")!;
const first_page:HTMLDivElement = document.querySelector(".container")!;

//container


// const scrow= yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().required().min(8),
// name:yup.string().required(),
// Username:yup.string().required(),
// confirmPassword:yup.string().required().min(8),
// Phone:yup.number().required()
// })


const schema = yup.object().shape({

email: yup.string().email().required(),
password: yup.string().required().min(8),

});

btn.addEventListener("click", () => {
 const formData = {
email: email.value,
password: password.value,
 };



 schema
 .validate(formData)
 .then(() => {
   console.log(formData);

   first_page.style.display ='none';
   second_page.style.display ='block';

 })

 .catch((error) => {

  second_page.style.display ='none';
error1.innerText = "Error Email";
error2.innerText = "Error Password";

error1.style.display = "block";
error2.style.display = "block";

email.style.border = "1px solid red";
password.style.border = "1px solid red";
console.log(error);
	});
});

















































































// const uzb: HTMLSelectElement = document.querySelector("#uzb")!;
// const btn: HTMLButtonElement = document.querySelector("#btn")!;

























// const proto1 = {};
// const proto2 = {};

// function createBrand(name: string, Yil: string, speed:string) {
// 	const brand = Object.create(proto1);
//  brand.name = name;
//  brand.Yil = Yil;
//  brand.speed = speed;
// 	return brand;

// }

// const brand = createBrand('Tesla',"2011", "200");


// function createCar(name: string, Yil:string, speed:string) {
// 	const car = Object.create(proto2);
//   car.name = name;
//   car.Yil = Yil;
//   car.speed = speed;
// 	return car;

// }

// const car1 = createCar('cobalt', "2023", "200");
// const car2 = createCar('Nexia',"2015", "250");

// console.log('car1', car1);
// console.log('car2', car2);








// const proto1 = {};
// const proto2 = {};

// function createBrand(name: string, Yil: string) {
//   const brand = Object.create(proto1);
//   brand.name = name;
//   brand.Yil = Yil;
//   return brand;
// }

// const brand = createBrand('Tesla', '2011');

// function createCar(name: string, Yil: string) {
//   const car = Object.create(proto2);
//   car.name = name;
//   car.Yil = Yil;
//   return car;
// }

// const car1 = createCar('Malibu', "2020");
// const car2 = createCar('Spark' ,"2021");

// console.log('car1', car1);
// console.log('car2', car2);














//UYga vazifa

// const prototype = {
//  Work(){
//   console.log(`{$this.name} is working...` );
//  },
//  metro() {},
//  Avtobus() {},
//  piyoda() {},
//  dars() {},
//  yolgizlik() {},
//  pulsizlik() {},
//  ochlik() {},
// }

// function createStudent(name:string) {
//  const stud = Object.create(prototype)
//  stud.name = name;
//  stud.Work = () => console.log(`Hello ${name}`);
//  return stud;
// }

// const dow1 = createStudent("Sardor");
// console.log(dow1);
// dow1.Work();
// const dow2 = createStudent("Sanjar");
// console.log(dow2);
// dow2.Work();
// const dow3 = createStudent("Ogabek");
// console.log(dow3);
// dow3.Work();

//1-misol

// function jump() {
// console.log(`${this.name}`);
// }

// const prototype = {jump}

// function title(name: string, rangi: string, Yil:string, Narxi:string) {
// const sam = Object.create(prototype);
// sam.name = name;
// sam.rangi = rangi;
// sam.Yil = Yil;
// sam.narxi = Narxi;
// return sam;
// }
// const dow1 = title("Cobalt","oq", "2023","150-Millon");
// const dow2 = title("Captiva","qora", "2019", "300-Millon");
// const dow3 = title("Malibu2","oq", "2020", "400-Millon");
// const dow4 = title("Damas","oq", "2022", "120-Millon");
// const dow5 = title("Spark","blue", "2018", "100-Millon");
// const dow6 = title("Nexia","oq", "2014", "110-Millon");
// const dow7 = title("Matiz", "oq", "2013", "60-Millon");
// const dow8 = title("Onixe", "qora", "2021","145-Millon");
// const dow9 = title("Tricer2", " qora", "2022", "200-Millon");
// console.log(dow1);
// console.log(dow2);
// console.log(dow3);
// console.log(dow4);
// console.log(dow5);
// console.log(dow6);
// console.log(dow8);
// console.log(dow9);

//2-misol

// function run() {
//  console.log("Car is running .....");
// }
// const prototype = { run };

// function car(model: string, color: string, speed: number) {
//  const same = Object.create(prototype);
// same.model = model;
// same.color = color;
// same.speed = speed;
//  return same;
// }

// const car1 = car("spark", "white", 200);
// const car2 = car("cobalt", "black", 250);
// const car3 = car("tracker", "purple", 250);
// const car4 = car("Malibu2", "black", 300);

// console.log(car3);
// console.log(car1);
// console.log(car2);
// console.log(car4);

// 1-misol
// const tab = {
//  name: "box",
//  color: "green",
//  jump() {
//   console.log(`${this.name} is jumping...`);
//  }
// }
// console.log(tab);

// misol-2
// function title(name:string, color:string) {
//  return {
//   name,color,
// jump() {
//  console.log(`${this.name} is jumping...`);
// }
//  }
// }

// const box1 = title("box1", "green");
// const box2 = title("box2", "blue");
// const box100 = title("box100", "yellow");

// console.log(box1);
// console.log(box2);
// console.log(box100);

// function jump() {
//  console.log( `${this.name} is jumping...`);
// }
// // HM__001

// function cert(name:string , color:string) {
//  return{name, color, jump}
// }

// const title = [];
// for(let  i  = 1; i <= 10; i++){
// const box = cert(`Box-${i}`, `Blue-${i}`);
// title.push(box);
// }

// console.log(title);

// function jump() {
//  console.log(`{this.name} is jumping...`);
// }
// // HM___0001

// function cert(name:string, color:string){
//  return {name, color, jump}
// }

// const box1 = cert("box1", "blue") //HM__002
// const box2 = cert("box1" , "yellow")
// const box100 = cert("box1" , "green");

// console.log(box1);
// console.log(box2);
// console.log(box100);

// function jump() {
//  console.log(`{this.name} is jumping`);
// }

// const prototype = {jump}

// function createBox(name:string, ism:string) {
//  const box = Object.create(prototype);
//  box.name = name;
//  box.ism = ism;
//  return box;
// }

// const box1 = createBox("Xasanov", "shokirbek")
// box1.jump();

// console.log(box1);

// const box2 = createBox("Toshpo'lotov", "Yusufbek")
// box2.jump();

// console.log(box2);

// const box1 =  {
// name: "box1",
// color: "green",

// jump() {
//  console.log(`${this.name} is Jumping...`);
// }
// }

// const box2  = {
//  name: "box2",
//  color: " yellow",

//  jump() {
//   console.log(`${this.name} is Jumping...`);
//  }
// }

// const box100 = {
// name:"box100",
// color:"black",

// jump() {
// console.log(`${this.name} is jumping...`);

// }

// }

// function jump() {
//  console.log(`${this.name} is jumping...`);
// }

// const prototype = {run};

// function prototype(name: string) {
// return {

// }
// }

// function box(add:string,  color:string)   {
// return {
// add,
// color
// }
// }

// const sam = box("sam","red");
// const sam1 = box ("sam1","green");
// console.log('sam');
// console.log('sam1');
