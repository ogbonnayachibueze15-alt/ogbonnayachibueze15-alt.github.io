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

// CONTACT FORM
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});

// RANDOM PROFILE AND PROJECT IMAGES
function randomImg(query, width, height){
  return `https://source.unsplash.com/${width}x${height}/?${query}&sig=${Math.floor(Math.random()*1000)}`;
}

// Profile photo
document.getElementById("profilePhoto").src = randomImg("portrait,professional", 300, 300);

// About photo
document.getElementById("aboutPhoto").src = randomImg("developer,workspace", 400, 400);

// Projects
document.getElementById("streamxImg").src = randomImg("technology,website", 400, 300);
document.getElementById("portfolioImg").src = randomImg("code,website", 400, 300);
document.getElementById("landingImg").src = randomImg("landing,page", 400, 300);