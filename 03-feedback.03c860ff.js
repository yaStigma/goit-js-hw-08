function e(e,t){localStorage.setItem(e,JSON.stringify(t))}function t(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const m={formELem:document.querySelector(".feedback-form")};m.formELem.addEventListener("input",(function(t){const m=t.target.name,a=t.target.value;e(m,a)})),m.formELem.addEventListener("submit",(function(e){e.preventDefault();const t=m.formELem.elements.email.value,a=m.formELem.elements.message.value,o={email:t,massage:a};console.log(o),e.target.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),function(){const e=t("email"),a=t("message");m.formELem.elements.email.value=e,m.formELem.elements.message.value=a}();
//# sourceMappingURL=03-feedback.03c860ff.js.map