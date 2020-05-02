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

// const changeTheme = (theme) => {
//     let color = theme == 'light' ? 'white' : 'black';

//     document.getElementById('nameL').style.color = color;
//     document.getElementById('developer').style.color = color;
//     document.getElementById(`${theme}Button`).classList.add('hide');
//     document.getElementById(`${theme}Button`).classList.remove('hide');
// }

const mode = {
    lightMode: () => {
        mainDiv.style.backgroundColor = 'white',
        document.getElementById('nameL').style.color = 'black';
        document.getElementById('developer').style.color = 'black';
        document.getElementById('lightButton').classList.add('hide');
        document.getElementById('darkButton').classList.remove('hide');
    },
    darkMode: () => {
        mainDiv.style.backgroundColor = 'black',
        document.getElementById('nameL').style.color = 'white';
        document.getElementById('developer').style.color = 'white';
        document.getElementById('darkButton').classList.add('hide');
        document.getElementById('lightButton').classList.remove('hide');
    }
}
// dloads the page after 2 seconds
loadedPage = () => {
    setTimeout(() => {
        loadIMG.style.opacity = '0%';
        loadBG.style.opacity = '0%';

        mainPage();
    }, 2000);
    
    
}