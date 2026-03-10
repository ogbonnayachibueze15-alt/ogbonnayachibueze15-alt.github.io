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

// SET ONLINE IMAGES
document.getElementById("profilePhoto").src = "https://images.unsplash.com/photo-1603415526960-fd6d74d71fc1?auto=format&fit=crop&w=400&q=80";
document.getElementById("aboutPhoto").src = "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=500&q=80";
document.getElementById("streamxImg").src = "https://images.unsplash.com/photo-1612831813372-fc28a8e5cf17?auto=format&fit=crop&w=500&q=80";
document.getElementById("portfolioImg").src = "https://images.unsplash.com/photo-1612832020545-51c21f4737f1?auto=format&fit=crop&w=500&q=80";
document.getElementById("landingImg").src = "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=80";