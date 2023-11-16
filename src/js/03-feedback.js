import throttle from "lodash.throttle";

import { saveToLS, loadFromLS } from "./helpers";
const THROTTLE_TIME = 500;

const refs = {
    formELem: document.querySelector(".feedback-form"),
};

refs.formELem.addEventListener("input", throttle(onFormInput, THROTTLE_TIME));
refs.formELem.addEventListener("submit", onFormSubmit)


function onFormInput(e) {
    const key = e.target.name;
    const value = e.target.value;
        // saveToLS(key, value);
     const feedbackFormState = loadFromLS("feedback-form-state") || {};
    feedbackFormState[key] = value;
    
saveToLS("feedback-form-state", feedbackFormState);
}

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
    localStorage.removeItem("feedback-form-state");
    
}

function onLoad() {
   const feedbackFormState = loadFromLS("feedback-form-state");

    refs.formELem.elements.email.value = feedbackFormState.email ; //   || 'Введіть Email'
    refs.formELem.elements.message.value = feedbackFormState.message;

}

onLoad();