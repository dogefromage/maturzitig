
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
    constructor({ name, dialogueImage, backgroundImage })
    {
        this.name = name;
        this.dialogueImage = dialogueImage;
        this.backgroundImage = backgroundImage;
    }
}

let loadImageEvent = false;

/**
 * e interaktion mitere person: dialog, etc.
 */
class Interaction
{
    constructor({ dialogue, character, characterPlacement })
    {
        this.dialogue = dialogue;
        this.character = character;
        this.characterPlacement = characterPlacement;
    }

    display()
    {
        let dialogText = '<b>' + this.character.name + '</b><br>';

        if (this.dialogue?.length > 0)
        {
            dialogText += this.dialogue[currentDialogueIndex].text;
        }

        dialogueElement.innerHTML = '<p>' + dialogText + '</p>';

        if (!loadImageEvent)
        {
            characterElement.addEventListener('load', () =>
            {
                // only display interaction div after image has fully loaded
                interactionElement.classList.remove('hidden');
            });
            loadImageEvent = true;
        }

        characterElement.src = this.character.dialogueImage;
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
 * ort wo me lüt cha träffe
 */
class Location
{
    constructor({ interactions, background, arrows })    
    {
        this.interactions = interactions;
        this.background = background;
        this.arrows = arrows;
    }

    load()
    {
        interactionElement.classList.add('hidden');

        // background
        backgroundElement.innerHTML = '<img src=' + this.background + ' class="undraggable unselectable">';

        // ARROWS
        arrowContainer.classList.remove('hidden');
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

        // show characters
        backgroundCharacterContainer.classList.remove('hidden');
        // remove old
        while (backgroundCharacterContainer.firstChild) 
        {
            backgroundCharacterContainer.removeChild(backgroundCharacterContainer.firstChild);
        }

        if (this.interactions)
        {
            // add new
            for (let i = 0; i < this.interactions.length; i++)
            {
                const interaction = this.interactions[i];
    
                const imgNode = document.createElement('img');
                imgNode.src = interaction.character.backgroundImage;
                imgNode.classList.add('unselectable');
                imgNode.classList.add('undraggable');
    
                // position
                const placement = interaction.characterPlacement;
                imgNode.style.height = placement.size + "%";
                imgNode.style.left = placement.x + "%";
                imgNode.style.top = placement.y + "%";
    
                // on click
                imgNode.addEventListener('click', (e) =>
                {
                    currentInteractionIndex = i;
                    currentDialogueIndex = 0;
                    update();
                });
    
                backgroundCharacterContainer.appendChild(imgNode); 
            }
        }
    }

    update()
    {
        if (currentInteractionIndex >= 0) // interaction is happening
        {
            arrowContainer.classList.add('hidden');
            backgroundCharacterContainer.classList.add('hidden');

            const interaction = this.interactions[currentInteractionIndex];

            if (currentDialogueIndex < interaction.dialogue.length)
            {
                interaction.display();
            }
            else
            {
                /**
                 * end discussion, no more lines to say
                 */
                currentInteractionIndex = -1;
                currentDialogueIndex = 0;

                this.update(); // recursion lol
                return;
            }
        }
        else
        {
            interactionElement.classList.add('hidden');
            
            arrowContainer.classList.remove('hidden');
            backgroundCharacterContainer.classList.remove('hidden');
        }
    }
}
