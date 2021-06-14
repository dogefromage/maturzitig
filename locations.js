

const locations = new Map();

locations.set('neui-turnhalle',
    new Location(
    {
        interactions: 
        [
            new Interaction(
            {
                character: dammerCharacter,
                characterPlacement:
                {
                    size: 20, // in %
                    x: 10,  // in %
                    y: 70, // in %
                },
                dialogue: 
                [
                    new Sentence('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'),
                    new Sentence('At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'),
                    new Sentence('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),
                    new Sentence('At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'),
                    new Sentence('- Damer'),
                ],
            }),
        ],
        background: 'images/locations/neui-turnhalle.jpg',
        arrows: 
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            [ ARROWS.BOTTOM_RIGHT, 'stäge-igang' ],
        ],
    }),
);

locations.set('igang-süd',
    new Location(
    {
        interactions: 
        [
            new Interaction(
            {
                character: rolandCharacter,
                characterPlacement:
                {
                    size: 30, // in %
                    x: 50,  // in %
                    y: 50, // in %
                },
                dialogue: 
                [
                    new Sentence('a'),
                ],
            }),
        ],
        background: 'images/locations/igang-süd.jpg',
        arrows: 
        [
            [ ARROWS.TOP_LEFT, 'bibi' ],
            [ ARROWS.TOP_CENTER, 'stäge-igang' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            [ ARROWS.CENTER_LEFT, 'garte-1' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, 'hb' ],
        ]
    })
);

locations.set('bibi', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/bibi.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'igang-süd' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            [ ARROWS.CENTER_RIGHT, 'e-wand' ],
            [ ARROWS.BOTTOM_LEFT, 'abwart' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('abwart', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/abwart.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'stäge-wasserspender' ],
            [ ARROWS.TOP_RIGHT, 'bibi' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('abwart', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/abwart.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'stäge-wasserspender' ],
            [ ARROWS.TOP_RIGHT, 'bibi' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            [ ARROWS.CENTER_RIGHT, 'e-wand' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('stäge-wasserspender', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/stäge-wasserspender.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'abwart' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('glas-dach', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/glas-dach.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('stäge-ph', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/stäge-ph.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('stei-monument', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/stei-monument.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('garte-1', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/garte-1.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'garte-2' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            [ ARROWS.CENTER_RIGHT, 'igang-süd' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('garte-2', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/garte-2.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'x-holz' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'garte-1' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('x-holz', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/x-holz.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            [ ARROWS.CENTER_LEFT, 'x-kopierer' ],
            [ ARROWS.CENTER_RIGHT, 'igang-west' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            [ ARROWS.BOTTOM_RIGHT, 'garte-2' ],
        ]
    })
);

locations.set('x-kopierer', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/x-kopierer.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            [ ARROWS.CENTER_RIGHT, 'x-holz' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('igang-west', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/igang-west.jpeg',
        arrows:
        [
            [ ARROWS.TOP_LEFT, 'mensa-usse' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            [ ARROWS.CENTER_RIGHT, 'u-stäge' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'x-holz' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('mensa-usse', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/mensa-usse.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            [ ARROWS.CENTER_RIGHT, 'mensa' ],
            [ ARROWS.BOTTOM_LEFT, 'igang-west' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('mensa', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/mensa.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            [ ARROWS.TOP_RIGHT, 'u-büecher' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'mensa-usse' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('schüelerruhm-igang', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/schüelerruhm-igang.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('hb', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/hb2.jpg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'igang-süd' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            [ ARROWS.BOTTOM_LEFT, 'gleis-1' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('u-büecher', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/u-büecher.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'e-wand' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            [ ARROWS.CENTER_RIGHT, 'u-stäge' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'mensa' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('u-stäge', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/u-stäge.jpeg',
        arrows:
        [
            [ ARROWS.TOP_LEFT, 'igang-west' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            [ ARROWS.BOTTOM_LEFT, 'u-büecher' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('chraftruhm', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/chraftruhm.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'u-büecher' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('e-wand',
    new Location(
    {
        interactions: [],
        background: 'images/locations/e-wand.jpeg',
        arrows:
        [
            [ ARROWS.TOP_LEFT, 'abwart' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            [ ARROWS.CENTER_LEFT, 'h11' ],
            [ ARROWS.CENTER_RIGHT, 'liechthof' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'u-büecher' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('stäge-igang', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/stäge-igang.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'neui-turnhalle' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'igang-süd' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('liechthof', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/liechthof.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            [ ARROWS.CENTER_LEFT, 'e-wand' ],
            [ ARROWS.CENTER_RIGHT, 'sekretariat' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('sekretariat',
    new Location(
    {
        interactions: [],
        background: 'images/locations/sekretariat.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'computerrum' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'liechthof' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('computerrum',
    new Location(
    {
        interactions: [],
        background: 'images/locations/computerrum.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            [ ARROWS.TOP_CENTER, 'h-zentral' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            [ ARROWS.BOTTOM_RIGHT, 'sekretariat' ],
        ]
    })
);

locations.set('h-zentral',
    new Location(
    {
        interactions: [],
        background: 'images/locations/h-zentral.jpeg',
        arrows:
        [
            [ ARROWS.TOP_LEFT, 'h11' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'computerrum' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('h11', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/h11.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            [ ARROWS.BOTTOM_CENTER, 'h-zentral' ],
            [ ARROWS.BOTTOM_RIGHT, 'e-wand' ],
        ]
    })
);

locations.set('glasgang',
    new Location(
    {
        interactions: [],
        background: 'images/locations/glasgang.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('h-stäge', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/h-stäge.jpeg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);

locations.set('gleis-1', 
    new Location(
    {
        interactions: [],
        background: 'images/locations/gleis-1.jpg',
        arrows:
        [
            // [ ARROWS.TOP_LEFT, '' ],
            // [ ARROWS.TOP_CENTER, '' ],
            // [ ARROWS.TOP_RIGHT, '' ],
            // [ ARROWS.CENTER_LEFT, '' ],
            // [ ARROWS.CENTER_RIGHT, '' ],
            // [ ARROWS.BOTTOM_LEFT, '' ],
            // [ ARROWS.BOTTOM_CENTER, '' ],
            // [ ARROWS.BOTTOM_RIGHT, '' ],
        ]
    })
);
