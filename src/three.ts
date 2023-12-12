import * as yup from "yup";

const btn3: HTMLButtonElement = document.querySelector(".btn3")!;
const errorE: HTMLParagraphElement = document.querySelector(".num1")!;
const errorP: HTMLParagraphElement = document.querySelector(".num2")!;
const errorT: HTMLParagraphElement = document.querySelector(".num3")!;
const second_page: HTMLDivElement = document.querySelector(".boxes")!;
const third_page: HTMLDivElement = document.querySelector(".three")!;
const first_page: HTMLDivElement = document.querySelector(".container")!;
const email3: HTMLInputElement = document.querySelector("#email5")!;
const password3: HTMLInputElement = document.querySelector(".pas2")!;
const try3: HTMLInputElement = document.querySelector(".try")!;

const schemathree = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(8),
	try: yup.string().required(),
});
btn3.addEventListener("click", () => {
	const formData = {
		email: email3.value,
		password: password3.value,
		try: try3.value,

	}

	schemathree
		.validate(formData)
		.then(() => {
			console.log(formData);

			first_page.style.display = "block";
			second_page.style.display = "none";
			third_page.style.display = "none";
		})

		.catch((error) => {

			third_page.style.display = "block";
			errorE.innerText = "Error Email";
			errorP.innerText = "Error Password";
			errorT.innerText = "Try again password";
			errorE.style.display = "block";
			errorP.style.display = "block";
			errorT.style.display = "block";

			email3.style.border = "1px solid red";
			password3.style.border = "1px solid red";
			console.log(error);
		});
});
