
class Sentence
{
    constructor(text)
    {
        this.text = text;
    }
}

class Character
{
    constructor(name, image)
    {
        this.name = name;
        this.image = image;
    }
}

class Level
{
    constructor(dialogue, character, backgroundimage)    
    {
        this.dialogue = dialogue;
        this.character = character;
        this.backgroundimage = "image2.jpg";

        this.dialogueIndex = 0;
    }

    draw()
    {
        document.getElementById('background').innerHTML =
            '<img src=' + this.backgroundimage + '>';
            
        document.getElementById('dialogue').innerHTML =
            '<p><b>' + this.character.name + '</b><br>' + 
            this.dialogue[this.dialogueIndex].text + '</p>';

        document.getElementById('character').innerHTML =
            '<img src=' + this.character.image + '>';
    }

    nextDialogue()
    {
        this.dialogueIndex++;
        this.dialogueIndex %= this.dialogue.length;
    }
}