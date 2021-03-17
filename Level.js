
class Level
{
    constructor()
    {
        this.arrow = new Sprite("images/comic_arrows.png", 800, 200, 4);
        this.background = new Sprite("image2.jpg", 1200, 800, 1);
    }

    draw(ctx, width, height)
    {
        this.background.drawCover(ctx, width, height, false);
        
        this.arrow.draw(ctx, 0, width / 7, height / 4, 60, .6, true);
        
        ctx.font = '50px serif';
        ctx.fillText(this.text, 50, 90);
    }
}