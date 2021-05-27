

// DOM
const backgroundElement = document.getElementById('background');
const dialogueElement = document.getElementById('dialogue');
const characterElement = document.getElementById('character');
const arrowContainer = document.getElementById('arrow-container');
const backgroundCharacterContainer = document.getElementById('background-characters');

// default location
let currentLocationKey = 'neui-turnhalle';
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
        console.log("couldn't find location: " + currentLocationKey);
    }
}

function update()
{
    if (currentLocation)
    {
        currentLocation.update();
    }
}

// clicked on dialogue
document.getElementById('dialogue').addEventListener('mouseup', () =>
{
    currentDialogueIndex++;
    update();
});

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
            currentLocationKey = arrow[1];
        }
    }

    loadLocation();
}

// simulate loading time
setTimeout(() => 
{
    loadLocation();
    document.getElementById('loading-screen').classList.add('hidden');
}, 300)
