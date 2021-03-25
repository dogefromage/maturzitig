

let currentLocationKey = 'neui-turnhalle';
let currentLocation;

let currentDialogIndex = 0;
let currentInteractionIndex = -1;

function update()
{
    currentLocation = locations.get(currentLocationKey);
    if (currentLocation)
    {
        currentLocation.display(currentInteractionIndex, currentDialogIndex);
    }
    else
    {
        console.log("couldn't find location: " + currentLocationKey);
    }
}

// setInterval(update, 500); // necessary ???

document.getElementById('dialogue').addEventListener('mouseup', () =>
{
    currentDialogIndex++;
    update();
});

window.addEventListener('keydown', (e) =>
{
    if (e.code == 'Enter' || e.code == 'Space')
    {
        currentDialogIndex++;
        update();
    }
});

function changeLocation(arrowID)
{
    if (currentLocation)
    {
        currentLocation.changeLocation(arrowID);
    }
    update();
}

// simulate loading time
setTimeout(() => 
{
    update();
    document.getElementById('loading-screen').classList.add('hidden');
}, 300)
