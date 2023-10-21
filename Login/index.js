const LSbtn = document.getElementById("LS");
const SSbtn = document.getElementById("SS");
const loginswap = document.getElementById("login-swap");
const signupswap = document.getElementById("signup-swap");

LSbtn.addEventListener("click", () => {
        signupswap.style.display = "none";
        loginswap.style.display = "block";
})

SSbtn.addEventListener("click", () => {
    signupswap.style.display = "block";
    loginswap.style.display = "none";
})
