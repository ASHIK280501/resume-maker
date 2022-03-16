//========nav hide======//
let navBar = document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navBar-collapse.collapse');
navBar.forEach(function(a){
	a.addEventListener("cilck",function(){
		navCollapse.classList.remove("show");
	})
});


//======ADD FIELD=======//

function addEqField(){
	let newNode = document.createElement('textarea');
	newNode.classList.add("form-control");
	newNode.classList.add("eqfield");
	newNode.classList.add("mt-3");
	newNode.setAttribute("row",3);

let eqOb = document.getElementById("eq");
let eqAddButtonOb = document.getElementById("eqBtn");

eqOb.insertBefore(newNode, eqAddButtonOb);

}

/*====================*/

function addSkField() {

	let newNode = document.createElement("INPUT");
	newNode.setAttribute("type","text");
	newNode.classList.add("form-control");
	newNode.classList.add("skfield");
	newNode.classList.add("mt-3");
    
	let skOb = document.getElementById("sk");
	let skAddButtonOb = document.getElementById("skBtn");
   
   skOb.insertBefore(newNode,skAddButtonOb);
}


/*====================*/

function addPsField() {

	let newNode = document.createElement("INPUT");
	newNode.setAttribute("type","text");
	newNode.classList.add("form-control");
	newNode.classList.add("psfield");
	newNode.classList.add("mt-3");
    
	let psOb = document.getElementById("ps");
	let psAddButtonOb = document.getElementById("psBtn");
   
   psOb.insertBefore(newNode,psAddButtonOb);
}


/*======================*/

function addWeField(){
	let newNode = document.createElement('textarea');
	newNode.classList.add("form-control");
	newNode.classList.add("wefield");
	newNode.classList.add("mt-3");
	newNode.setAttribute("row",3);

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weBtn");
weOb.insertBefore(newNode, weAddButtonOb);
}


/*======================*/

function addPrField(){

let newOne = document.createElement('INPUT');
	newOne.classList.add("form-control");
	newOne.classList.add("mt-3");
	newOne.classList.add("prfield");
	newOne.setAttribute("type","text");
	newOne.setAttribute("placeholder","PROJECT NAME");

	let weOb = document.getElementById("pr");
    let weAddButtonOb = document.getElementById("prBtn");
    weOb.insertBefore(newOne, weAddButtonOb);

	let newNode = document.createElement('textarea');
	newNode.classList.add("form-control");
	newNode.classList.add("prfield");
	newNode.classList.add("mt-3");
	newNode.setAttribute("row",3);

weOb.insertBefore(newNode, weAddButtonOb);
}

/*==================
DELETE FIELD
===================*/

function pDelete() {
	document.getElementById("pr").style.display="none";
	document.getElementById("prF").style.display="none";

}


function weDelete() {
	document.getElementById("we").style.display="none";
	document.getElementById("weF").style.display="none";
}


/*===========
resume print
=============*/

function generateCV() {
// name
document.getElementById("nameT").innerHTML=document.getElementById("your_name").value;

// experience
document.getElementById("weT").innerHTML=document.getElementById("wefield1").value;

//mail
document.getElementById("emailT").innerHTML=document.getElementById("email").value;

//contact
document.getElementById("contactT").innerHTML=document.getElementById("mobile_no").value;

//address
document.getElementById("addressT").innerHTML=document.getElementById("address").value;

//name
document.getElementById("nameT2").innerHTML=document.getElementById("your_name").value;

//skills
document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;

//work exp
let wes = document.getElementsByClassName("wefield");
let wtr = "";
for(let e of wes){
	wtr = wtr + `<li>${e.value}</li>`;
}
document.getElementById("weT1").innerHTML = wtr;


//projects
let prs = document.getElementsByClassName("prfield");
let prr = "";
for(let e of prs){
	prr = prr + `<li>${e.value}</li>`;
}
document.getElementById("prT").innerHTML = prr;

//academic
let eqs = document.getElementsByClassName("eqfield");
let str1 ="";
for(let e of eqs){
	str1 += `<li> ${e.value} </li>`;
}
document.getElementById("eqT").innerHTML = str1;


//skills
let sks = document.getElementsByClassName("skfield");
let str2 ="";
for (let e of sks){
	str2 += `<li> ${e.value} </li>`
}
document.getElementById("skT").innerHTML = str2;


//personnel skills
let pss = document.getElementsByClassName("psfield");
let psr2 ="";
for (let e of pss){
	psr2 += `<li> ${e.value} </li>`
}
document.getElementById("psT").innerHTML = psr2;



//upload image
let file = document.getElementById("imgfield").files[0];
let reader=new FileReader();
reader.readAsDataURL(file);

//set the image
reader.onloadend= function(){
	document.getElementById("imgT").src=reader.result;
}


//show cv template

document.getElementById("cv_template").style.display = "block";
document.getElementById("ptBtn").style.display = "block";
document.getElementById("header_1").style.display = "none";
document.getElementById("footer_1").style.display = "none";
document.getElementById("cvForm1").style.display = "none";
document.getElementById("cvForm2").style.display = "none";

}


//print resume
function printCV(){
document.getElementById("cv_template").style.padding = "0px";
document.getElementById("ptBtn").style.display = "none";

	// window.print();
	window.print();


window.location.reload();
document.getElementById("cv_template").style.display = "none";
document.getElementById("ptBtn").style.display = "none";
document.getElementById("header_1").style.display = "block";
document.getElementById("footer_1").style.display = "block";
document.getElementById("cvForm1").style.display = "block";
document.getElementById("cvForm2").style.display = "block";

}