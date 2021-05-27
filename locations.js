
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
            [ ARROWS.BOTTOM_RIGHT, 'igang-süd' ],
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
            [ ARROWS.TOP_CENTER, 'neui-turnhalle' ]
        ]
    })
);
