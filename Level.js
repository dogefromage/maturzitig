
class Level
{
    constructor(text)
    {
        this.text = text;
        this.backgroundimage = "image2.jpg";
        this.character = "images/damer.jpg";
    }

    draw()
    {
        document.getElementById('background').innerHTML =
            '<img src=' + this.backgroundimage + '>';
            
        document.getElementById('dialogue').innerHTML =
            '<p>' + this.text + '</p>';

        document.getElementById('character').innerHTML =
            '<img src=' + this.character + '>';
    }
}