let myJobs = [];
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const jobsFromLocalStorage = JSON.parse(localStorage.getItem("myJobs"));

if(jobsFromLocalStorage){
    myJobs = jobsFromLocalStorage;
    render(myJobs);
}

tabBtn.addEventListener("click", function(){
    //use the google chrome api to fetch the current tab 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myJobs.push(tabs[0].url);
        localStorage.setItem("myJobs", JSON.stringify(myJobs));
        render(myJobs);
    });
});

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myJobs = [];
    render(myJobs);
});

inputBtn.addEventListener("click", function(){
    myJobs.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myJobs", JSON.stringify(myJobs));
    render(myJobs);
});

function render(jobs){
    let listItem = "";
    for(let i = 0; i < jobs.length; i++){
        listItem += `<li><a href="${jobs[i]}" target="_blank">${jobs[i]}</li>`;
    }
    ulEl.innerHTML = listItem;
}