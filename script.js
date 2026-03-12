// typing animation

var typed = new Typed("#typing",{
strings:[
"Full Stack Developer",
"Web Designer",
"Tech Creator",
"Problem Solver"
],
typeSpeed:60,
backSpeed:40,
loop:true
});


// dark light mode

function toggleTheme(){

const body=document.getElementById("body");

if(body.classList.contains("dark")){
body.classList.remove("dark");
body.classList.add("light");
}
else{
body.classList.remove("light");
body.classList.add("dark");
}

}