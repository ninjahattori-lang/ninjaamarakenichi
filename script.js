document.getElementById("censusForm").addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(this);

const data = {};

for (let [key, value] of formData.entries()) {

if(data[key]){
data[key] += ", " + value;
}
else{
data[key] = value;
}

}

console.log(data);

await fetch("https://script.google.com/macros/s/AKfycbyNf5npWvzgoNSutHpX5Lr5Ut5DzJhObyBCVG4oV19n78zpFAvhD4jfaEp2DkKruQCicA/exec",{

method:"POST",

body:JSON.stringify(data)

});

alert("Survey Saved Successfully!");

document.getElementById("censusForm").reset();

});
