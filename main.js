const input = document.querySelector(".inpt");
const form = document.querySelector(".frm");
const list = document.querySelector(".list");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = parseInt(input.value);

    const elm = document.createElement("div");
    const delElm = document.createElement("div");

    delElm.className = "delE"

    delElm.textContent = "Eliminate";

    for (let i = 0; i < value + 1; i++) {

        if ( i == 0) {
            console.log("Starting...")
        } else if (i % 3 == 0 && i % 5 == 0) {

            elm.textContent = "fizzBuzz";

            elm.appendChild(delElm);

            list.append(elm);
        } else if (i % 3 == 0) {

            elm.textContent = "fizz";


            elm.appendChild(delElm);

            list.append(elm);
        } else if (i % 5 == 0){

            elm.textContent = "Buzz";


            elm.appendChild(delElm);

            list.append(elm);
        } else {

            elm.textContent = i;


            elm.appendChild(delElm);

            list.append(elm);
        }

        console.log("Value: "+ value)
    }

    elm.className = "fizzes"

    delElm.addEventListener("click", () => {
        elm.remove();
    })
})

