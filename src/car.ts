import * as yup from "yup";
import  IMask from "imask";

const name1:HTMLInputElement = document.querySelector(".name8")!;
const Username2:HTMLInputElement = document.querySelector("#Username")!;
const some:HTMLInputElement = document.querySelector(".confirmPassword")!;
const phone5:HTMLInputElement = document.querySelector(".Phone")!;
const btn1:HTMLButtonElement = document.querySelector(".btn1")!;
const error11:HTMLParagraphElement = document.querySelector(".error1")!;
const error22:HTMLParagraphElement = document.querySelector(".error2")!;
const error3:HTMLParagraphElement = document.querySelector(".error3")!;
const error4:HTMLParagraphElement = document.querySelector(".error4")!;
const error5:HTMLParagraphElement = document.querySelector(".error5")!;
const error6:HTMLParagraphElement = document.querySelector(".error6")!;
const third_page:HTMLDivElement = document.querySelector(".three")!;
const second_page:HTMLDivElement = document.querySelector(".boxes")!;
const first_page:HTMLDivElement = document.querySelector(".container")!;
const email1:HTMLInputElement = document.querySelector(".form-control")!;
const password1:HTMLInputElement = document.querySelector(".form-control2")!;


  IMask(phone5, {
  mask:Number ," +{998}-000-00-00 ",
  //  // other options are optional with defaults below
  //  scale: 2,  // digits after point, 0 for integers
  //  thousandsSeparator: '',  // any single char
  //  padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
  //  normalizeZeros: true,  // appends or removes zeros at ends
  //  radix: ',',  // fractional delimiter
  //  mapToRadix: ['.'],  // symbols to process as radix

  //  // additional number interval options (e.g.)
  //  min: -10000,
  //  max: 10000,
});


const schematwo = yup.object().shape({

 email: yup.string().email().required(),
 password: yup.string().required().min(8),
 userName: yup.string().required(),
 name: yup.string().required(),
 Phone: yup.number().required(),
 try: yup.string().required(),
 });
 btn1.addEventListener("click", () => {
  const formData = {
 email: email1.value,
 password: password1.value,
 name: name1.value,
 userName: Username2.value,
 Phone: phone5.value,
 try: some.value,
  };



  schematwo
  .validate(formData)
  .then(() => {
    console.log(formData);

    // first_page.style.display ='none';
    second_page.style.display ='none';
    setTimeout(() => {

     third_page.style.display ='block';
    }, 100);


  })

  .catch((error) => {

   second_page.style.display ='block';
   error11.innerText = "Error Name";
   error22.innerText = "Error Username";
   error3.innerText = "Error Email";
   error4.innerText = "Error Password";
   error5.innerText = "Error ConfirmPassword";
   error6.innerText = "Error Phone";
   error11.style.display = "block";
   error22.style.display  = "block";
   error3.style.display  = "block";
   error4.style.display  = "block";
   error5.style.display  = "block";
   error6.style.display  = "block";


 email1.style.border = "1px solid red";
 password1.style.border = "1px solid red";
 console.log(error);
  });
 });

























// const proto1 = {};
// function createBrand(name: string, Yil: string) {
// 	const brand = Object.create(proto1);
//  brand.name = name;
//  brand.Yil = Yil;
// 	return brand;

// }

// const brand = createBrand('Tesla',"2011");
// const proto2 = brand;

// function createCar(name: string) {
// 	const car = Object.create(proto2);

// 	return car;
// }

// const car1 = createCar('Malibu');
// const car2 = createCar('Spark');


// console.log('car1', car1);
// console.log('car2', car2);

