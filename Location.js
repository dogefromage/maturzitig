
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

}

/**
 * ort wo me lüt cha träffe (interactions)
 */
class Location
{
    constructor(dialogue, character, backgroundimage, arrows)    
    {
        this.dialogue = dialogue;
        this.character = character;
        this.backgroundimage = "image2.jpg";

        this.dialogueIndex = 0;
        this.inDialog = false;
        this.arrows = arrows;
    }

    draw()
    {
        const backgroundElement = document.getElementById('background');
        backgroundElement.innerHTML = '<img src=' + this.backgroundimage + ' class="unselectable">';
        
        const dialogElement = document.getElementById('dialogue');
        const characterElement = document.getElementById('character');  
        const arrowContainer = document.getElementById('arrow-container');
        
        if (this.inDialog)
        {
            arrowContainer.classList.add('hidden');
            
            dialogElement.classList.remove('hidden');
            dialogElement.innerHTML = 
                '<p><b>' + this.character.name + '</b><br>' + 
                this.dialogue[this.dialogueIndex].text + '</p>';
                
            characterElement.classList.remove('hidden');
            characterElement.innerHTML =
                '<img src=' + this.character.image + ' class="unselectable">';
        }
        else
        {
            dialogElement.classList.add('hidden');
            characterElement.classList.add('hidden');
            arrowContainer.classList.remove('hidden');
        }
    }

    nextDialogue()
    {
        this.dialogueIndex++;
        this.dialogueIndex %= this.dialogue.length;
    }
}