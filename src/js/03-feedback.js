
import { saveToLS, loadFromLS } from "./helpers";


const refs = {
    formELem: document.querySelector(".feedback-form"),
};

refs.formELem.addEventListener("input", onFormInput);
refs.formELem.addEventListener("submit", onFormSubmit)


function onFormInput(e) {
    const key = e.target.name;
    const value = e.target.value;
    
    saveToLS(key, value);
};

function onFormSubmit(e) {
    e.preventDefault();
   const email = refs.formELem.elements.email.value;
   const massage = refs.formELem.elements.message.value;

    const obj = {
        email,
        massage,
    };

    console.log(obj);
    e.target.reset();
    localStorage.removeItem("email");
    localStorage.removeItem("message");
}

function onLoad() {
    const email = loadFromLS("email");
    const message = loadFromLS("message");

    refs.formELem.elements.email.value = email ; //   || 'Введіть Email'
    refs.formELem.elements.message.value = message;

}

onLoad();