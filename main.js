const input = document.getElementById("password");
const div = document.querySelector(".message");
const password = "xyz";
const message = "Dobrze się spisałeś";

input.addEventListener("input", (e) => {
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = "";
    } else {
        div.textContent = "";
    }
})

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
})

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
})