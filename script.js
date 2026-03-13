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

function toggleTheme(){

const body=document.getElementById("body");

if(body.classList.contains("dark")){
body.classList.remove("dark");
body.classList.add("light");
}else{
body.classList.remove("light");
body.classList.add("dark");
}

}

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:1},
line_linked:{enable:true},
color:{value:"#3b82f6"}
}
});

const text=[
"Booting System...",
"Accessing Developer Profile...",
"Loading Projects...",
"Initializing Portfolio...",
"Welcome Chibueze Ogbonnaya"
];

let i=0;

function typeLine(){

if(i<text.length){

document.getElementById("terminal-text").innerHTML+=text[i]+"\n";

i++;

setTimeout(typeLine,800);

}else{

setTimeout(()=>{
document.getElementById("terminal").style.display="none";
},1000)

}

}

typeLine();

/* 3D TECH GLOBE */

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
75,
420/420,
0.1,
1000
);

const renderer=new THREE.WebGLRenderer({alpha:true});

renderer.setSize(420,420);

document
.getElementById("globe-container")
.appendChild(renderer.domElement);

const geometry=new THREE.SphereGeometry(2,64,64);

const textureLoader=new THREE.TextureLoader();

const texture=textureLoader.load(
"https://threejsfundamentals.org/threejs/resources/images/earth-day.jpg"
);

const material=new THREE.MeshBasicMaterial({
map:texture
});

const globe=new THREE.Mesh(geometry,material);

scene.add(globe);

camera.position.z=5;

function animate(){

requestAnimationFrame(animate);

globe.rotation.y+=0.003;

renderer.render(scene,camera);

}

animate();