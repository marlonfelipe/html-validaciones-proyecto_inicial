import { valida } from "./validaciones";

const inputs = document.querySelectorAll("input");

inputs.forEach( input => {
    input.addEventListener("blur", () => {
        valida(input.target);
    })
})