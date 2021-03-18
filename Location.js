
/**
 * satz
 */
class Sentence
{
    constructor(text)
    {
        this.text = text;
    }
}

/**
 * person
 */
class Character
{
    constructor(name, image)
    {
        this.name = name;
        this.image = image;
    }
}


/**
 * e interaktion mit ennere person: dialog, games etc.
 */
class Interaction
{
    constructor({ dialog, character })
    {
        this.dialog = dialog;
        this.character = character;
    }

    display(dialogIndex)
    {
        const dialogElement = document.getElementById('dialogue');
        const characterElement = document.getElementById('character');

        dialogElement.innerHTML = 
            '<p><b>' + this.character.name + '</b><br>' + 
            this.dialog[dialogIndex].text + '</p>';
        
        characterElement.innerHTML =
            '<img src=' + this.character.image + ' class="unselectable">';
    }
}

// arrow IDs
const ARROWS = 
{
    TOP_LEFT:      'arrow-top-left',
    TOP_CENTER:    'arrow-top-center',
    TOP_RIGHT:     'arrow-top-right',
    CENTER_LEFT:   'arrow-center-left',
    CENTER_RIGHT:  'arrow-center-right',
    BOTTOM_LEFT:   'arrow-bottom-left',
    BOTTOM_CENTER: 'arrow-bottom-center',
    BOTTOM_RIGHT:  'arrow-bottom-right',
}

/**
 * ort wo me lüt cha träffe (interactions)
 */
class Location
{
    constructor({ interactions, background, arrows })    
    {
        this.interactions = interactions;
        this.background = background;
        this.arrows = arrows;
    }

    display(currentInteractionIndex, currentDialogIndex)
    {
        const backgroundElement = document.getElementById('background');
        backgroundElement.innerHTML = '<img src=' + this.background + ' class="unselectable">';
        
        const dialogElement = document.getElementById('dialogue');
        const characterElement = document.getElementById('character');  
        const arrowContainer = document.getElementById('arrow-container');
        
        if (currentInteractionIndex >= 0) // interaction is happening
        {
            arrowContainer.classList.add('hidden');
            dialogElement.classList.remove('hidden');
            characterElement.classList.remove('hidden');

            const interaction = this.interactions[currentInteractionIndex];

            if (currentDialogIndex < interaction.dialog.length)
            {
                interaction.display(currentDialogIndex);
            }
            else
            {
                /**
                 * end discussion, no more lines to say
                 */
                currentInteractionIndex = -1;
                currentDialogIndex = 0;
            }
        }
        else
        {
            dialogElement.classList.add('hidden');
            characterElement.classList.add('hidden');
            arrowContainer.classList.remove('hidden');

            // UPDATE ARROWS
            for (const key in ARROWS)
            {
                const id = ARROWS[key];
                const arrowElement = document.getElementById(id);
                if (this.arrows.find(arrow => arrow[0] == id))
                {
                    arrowElement.classList.remove('hidden');
                }
                else
                {
                    arrowElement.classList.add('hidden');
                }
            }
        }
    }

    changeLocation(arrowID)
    {
        const arrow = this.arrows.find(a => a[0] == arrowID);
        if (arrow)
        {
            currentLocationKey = arrow[1];
        }
    }
}