const input = document.getElementById("password");
const div = document.getElementsByClassName("message");
const password = document.getElementsByClassName("password");
input.addEventListener("input", (e) => {
    console.log(e.target.value)
})