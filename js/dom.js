const allItems = document.getElementsByClassName('all-items');
const cpuItems = document.getElementsByClassName('cpu-items');
const memoryItems = document.getElementsByClassName('memory-items');
const moboItems = document.getElementsByClassName('mobo-items');
const osItems = document.getElementsByClassName('os-items');
const inputItems = document.getElementsByClassName('input-items');
const outputItems = document.getElementsByClassName('output-items');
const softItems  = document.getElementsByClassName('soft-items');
const othersItems = document.getElementsByClassName('others-items');

const buttons = document.querySelectorAll('button'); // Select all buttons 


document.getElementById('all-btn').addEventListener('click',function(event){
    event.preventDefault();
    // show product
    refresh(allItems);
    doThis(allItems);
    // btn bg set-rmv
    clearActiveButton();
    this.classList.add('all-btn-bg');

})
document.getElementById('cpu-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(cpuItems);
    // btn bg set-rmv
    clearActiveButton();
    this.classList.add('cpu-btn-bg');
});

document.getElementById('memory-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(memoryItems);
     // btn bg set-rmv
     clearActiveButton();
     this.classList.add('memory-btn-bg');
});
document.getElementById('mobo-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(moboItems);
    // btn bg set-rmv
    clearActiveButton();
    this.classList.add('mobo-btn-bg'); 
});
document.getElementById('os-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(osItems);
     // btn bg set-rmv
     clearActiveButton();
     this.classList.add('os-btn-bg');
});
document.getElementById('input-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(inputItems);
     // btn bg set-rmv
     clearActiveButton();
     this.classList.add('input-btn-bg');
});
document.getElementById('output-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(outputItems);
     // btn bg set-rmv
     clearActiveButton();
     this.classList.add('output-btn-bg');
});
document.getElementById('soft-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(softItems);
     // btn bg set-rmv
     clearActiveButton();
     this.classList.add('soft-btn-bg');
});
document.getElementById('others-btn').addEventListener('click', function(event) {
    event.preventDefault();
    refresh(allItems);
    doThis(othersItems);
     // btn bg set-rmv
     clearActiveButton();
     this.classList.add('others-btn-bg');
});

// search bar

const amdTitle = document.getElementById('amd-title').innerText.toLowerCase()

document.getElementById('search-bar').addEventListener('click',function(){
    const searchText = document.getElementById('search-bar').value;
    const searchTextLower = searchText.toLowerCase()
    refresh(allItems);
    const searchLength = searchTextLower.length;
    for(let s = 0;s<searchLength;s++){
        if(searchText === amdTitle){
            showThisCard('amd-item');
        }
    }


    
})