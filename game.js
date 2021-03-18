

let currentLevelIndex = 0;
let currentLevel;

function update()
{
    currentLevelIndex %= levels.length;

    currentLevel = levels[currentLevelIndex];
    currentLevel.draw();
}

setInterval(update, 30); // ???

document.getElementById('dialogue').addEventListener('mouseup', () =>
{
    if (currentLevel)
    {
        currentLevel.nextDialogue();
        // update();
    }
});

window.addEventListener('keydown', (e) =>
{
    if (e.code == 'Enter' || e.code == 'Space')
    {
        if (currentLevel)
        {
            currentLevel.nextDialogue();
            // update();
        }
    }
});

update();
