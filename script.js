// DARK / LIGHT MODE
document.getElementById("themeToggle").addEventListener("click", function(){
  document.body.classList.toggle("light");
});

// HIRE BUTTON SCROLL
document.querySelector(".hire-btn").addEventListener("click", function(){
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});

// MESSAGE BUTTON
document.querySelector(".message-btn").addEventListener("click", function(){
  window.location.href="mailto:youremail@email.com";
});

// TYPED EFFECT
var typed = new Typed('#typed', {
  strings: ["Frontend Developer 💻", "UI/UX Designer 🎨", "Web Specialist 🌐"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});