let myJobs = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    myJobs.push(inputEl.value);
    renderJobs();
    inputEl.value = "";
});

function renderJobs(){
    let listItem = "";
    for(let i = 0; i < myJobs.length; i++){
        listItem += `<li><a href="${myJobs[i]}" target="_blank">${myJobs[i]}</li>`;
    }
    ulEl.innerHTML = listItem;
}