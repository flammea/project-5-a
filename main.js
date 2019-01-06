const input = document.getElementById("password");
const div = document.querySelector(".message");
const password = "xyz";
const message = "Dobrze się spisałeś";

input.addEventListener("input", (e) => {
    if (password === e.target.value) {
        div.textContent = message;
    } else {
        div.textContent = "";
    }
})