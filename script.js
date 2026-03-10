document.querySelector(".hire-btn").addEventListener("click",function(){

document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});

});


document.querySelector(".message-btn").addEventListener("click",function(){

window.location.href="mailto:youremail@email.com";

});


document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Message sent successfully!");

this.reset();

});


document.getElementById("themeToggle").addEventListener("click",function(){

document.body.classList.toggle("light");

});