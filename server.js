const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path'); 
const fs = require('fs');
const hash = require('./hash');

// enable EJS
app.set('view engine', 'ejs');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// scenes
const scenesPath = path.join(__dirname, 'scenes.json');
const scenes = JSON.parse(fs.readFileSync(scenesPath, 'utf8'));

// main page
app.get('/', (req, res) =>
{
    let links = [];
    for (let i = 0; i < scenes.length; i++)
    {    
        const h = hash(i);
        links.push("http://localhost:5000/" + h);
        // console.log(h, i);
    }    
        
    res.render('index', { links });
});

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
            // res.sendFile(path.join(__dirname, 'images', 'background.jpg'));
            // app.use(express.static(path.join(__dirname, 'scenes', 'scene1')));

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
