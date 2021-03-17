
class Sprite 
{
    constructor(path, totalWidth, totalHeight, numberSubsprites = 1)
    {
        this.path = path;
        this.totalWidth = totalWidth; // of single subsprite
        this.totalHeight = totalHeight;
        this.numberSubsprites = numberSubsprites;
        if (this.numberSubsprites < 1) this.numberSubsprites = 1;

        this.image = new Image(this.totalWidth, this.totalHeight);
        this.image.src = path;
    }

    draw(ctx, subspriteIndex, x, y, rotation = 0, scale = 1, mirrored = false)
    {
        ctx.save();

        ctx.translate(x, y);

        ctx.rotate(rotation * 0.01745329251994);

        if (mirrored)
        {
            ctx.scale(-scale, scale);
        }
        else
        {
            ctx.scale(scale, scale);
        }

        let widthStep = this.totalWidth / this.numberSubsprites;
        let xOffset = subspriteIndex * widthStep;

        ctx.drawImage(this.image, 
            xOffset, 0, widthStep, this.totalHeight, 
            -0.5 * widthStep, -0.5 * this.totalHeight, widthStep, this.totalHeight);
        
        ctx.restore();
    }

    drawCover(ctx, width, height, mirrored = false)
    {
        // choose larger scale which is needed to cover whole screen
        let scale = Math.max(
            width / this.totalWidth, 
            height / this.totalHeight
        );

        ctx.save();

        ctx.translate(width / 2, height / 2);

        if (mirrored)
        {
            ctx.scale(-scale, scale);
        }
        else
        {
            ctx.scale(scale, scale);
        }
        
        const x = -0.5 * this.totalWidth;
        const y = -0.5 * this.totalHeight;

        ctx.drawImage(this.image, 
            0, 0, this.totalWidth, this.totalHeight, 
            x, y, this.totalWidth, this.totalHeight);

        ctx.restore();
    }
}
