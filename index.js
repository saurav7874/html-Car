document.getElementById("mybutton").addEventListener("click", function(){
    var button = document.getElementById("mybutton");
    button.innerText = "Submitted";

    var contactDiv = document.getElementById("Contact");
    var Popupdiv = document.getElementById("Popupbox");
    Popupdiv.style.display = "block";
    contactDiv.classList.add("fade-out");
}
)
document.getElementById("Popbtn").addEventListener("click", function(){
    var button = document.getElementById("mybutton");
    button.innerText = "Submit";

    var contactDiv = document.getElementById("Contact"); 
    contactDiv.classList.add("fade-in");

    var Popupdiv = document.getElementById("Popupbox");
    Popupdiv.style.display = "none";
});