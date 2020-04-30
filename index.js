let loadIMG = document.getElementById('loadingIMG');
let loadBG = document.getElementById('loadingContainer');
let mainDiv = document.getElementById('mainWebPage')
let loadArray = ["./imgs/clock.png", "./imgs/trolley.png"]


choosePic = () => {
    var randomNum = Math.floor(Math.random() * loadArray.length);
    document.getElementById("loadingIMG").src = loadArray[randomNum];
    
}

//sliding in modal  - currently disabled
// setTimeout(() => {
//     document.getElementById('modalBox').classList.remove('hide');
// }, 2300);


//loads the main page div
mainPage = () => {
    mainDiv.style.opacity = '1';
}
// dloads the page after 2 seconds
loadedPage = () => {
    setTimeout(() => {
        loadIMG.style.opacity = '0%';
        loadBG.style.opacity = '0%';

        mainPage();
    }, 2000);
    
    
}