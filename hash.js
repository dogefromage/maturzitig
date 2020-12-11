

module.exports = (x) =>
{
    x = parseInt(x);
    const h = ((x + 1) * 2654435761 % 2**24).toString(16);
    return h;
}