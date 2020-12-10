const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path'); 
const fs = require('fs');
const hash = require('./hash');

app.set('view engine', 'ejs');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'index.html'));
});

const scenesPath = path.join(__dirname, 'scenes.json');
const scenes = JSON.parse(fs.readFileSync(scenesPath, 'utf8'));
for (const i in scenes)
{
    console.log(`${i}: ${scenes[i].file} - ${hash(i)}`);
}

app.get('/:scene', (req, res) => 
{
    const levelCode = req.params.scene;

    let scene;
    for (let i in scenes)
    {
        if (hash(i) == levelCode)
        {
            scene = scenes[i];
            break;
        }
    }

    if (scene)
    {
        const jsonPath = path.join(__dirname, 'scenes', scene.file);
        let json;
        try
        {
            json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        }
        catch (err)
        {
            console.log(err);
        }
            
        if (json)
        {
            res.render('game', json);
        }
        else
        {
            const message = 'This scene could not be loaded!';
            res.render('error', { message });
            console.log("scene json was not found!: " + jsonPath);
        }
    }
    else
    {
        const message = 'This scene does not exist!';
        res.render('error', { message })
    }
});

const server = app.listen(port, () => 
{
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("Server listening at http://%s:%s", host, port);
});
