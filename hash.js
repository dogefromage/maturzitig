

module.exports = (x) =>
{
    return ((x + 1) * 2654435761 % 2**24).toString(16);
}