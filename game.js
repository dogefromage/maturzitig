
// DOM
const backgroundElement = document.getElementById('background');
const dialogueElement = document.getElementById('dialogue');
const characterElement = document.getElementById('character');
const interactionElement = document.getElementById('interaction');
const arrowContainer = document.getElementById('arrow-container');
const backgroundCharacterContainer = document.getElementById('background-characters');

const fullscreenElement = document.getElementById('fullscreen');
fullscreenElement.addEventListener('click', () =>
{
    fullscreenElement.classList.add('hidden');
    const docElement = document.documentElement;

    if (docElement.requestFullscreen) {
        docElement.requestFullscreen();
    } else if (docElement.webkitRequestFullscreen) { /* Safari */
        docElement.webkitRequestFullscreen();
    } else if (docElement.msRequestFullscreen) { /* IE11 */
        docElement.msRequestFullscreen();
    }
});

// default location
let currentLocationKey = 'hb';
// let currentLocationKey = 'igang-süd';
// location object
let currentLocation;

let currentDialogueIndex = 0;
let currentInteractionIndex = -1;

function loadLocation()
{
    currentLocation = locations.get(currentLocationKey);
    
    if (currentLocation)
    {
        currentLocation.load();
    }
    else
    {
        alert("couldn't find location: " + currentLocationKey);
    }
}

function update()
{
    if (currentLocation)
    {
        currentLocation.update();
    }
}

function nextSentence()
{
    currentDialogueIndex++;
    update();
}
dialogueElement.addEventListener('click', nextSentence);
backgroundElement.addEventListener('click', nextSentence);
characterElement.addEventListener('click', nextSentence);

window.addEventListener('keydown', (e) =>
{
    if (e.code == 'Enter' || e.code == 'Space')
    {
        currentDialogueIndex++;
        update();
    }
});

function changeLocation(arrowID)
{
    if (currentLocation)
    {
        const arrow = currentLocation.arrows.find(a => a[0] == arrowID);
        if (arrow)
        {
            let newLocationKey = arrow[1];

            if (currentLocationKey == 'hb' && newLocationKey == 'igang-süd')
            {
                showLoadingScreen();
            }

            currentLocationKey = newLocationKey;
        }
    }

    loadLocation();
}


const loadingScreen = document.getElementById('loading-screen');
function showLoadingScreen()
{
    loadingScreen.classList.remove('hidden');

    // simulate loading time
    setTimeout(() => 
    {
        loadingScreen.classList.add('hidden');
    }, 3000)
}

loadLocation();

const landscapeOverlay = document.getElementById('landscape-overlay');
setInterval(() =>
{
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (h > w)
    {
        landscapeOverlay.classList.remove('hidden');
    }
    else
    {
        landscapeOverlay.classList.add('hidden');
    }
}, 500);