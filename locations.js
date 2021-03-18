

const locations = new Map();

const ARROWS = 
{
    TOP_LEFT:   'arrow-top-left',
    TOP_CENTER: 'arrow-top-center',
    TOP_RIGHT:  'arrow-top-right',
    CENTER_LEFT:   'arrow-center-left',
    CENTER_RIGHT:  'arrow-center-right',
    BOTTOM_LEFT:   'arrow-bottom-left',
    BOTTOM_CENTER: 'arrow-bottom-center',
    BOTTOM_RIGHT:  'arrow-bottom-right',
}

locations.set('neui-turnhalle',
    new Location(
    {
        interactions: [
            new Interaction({
                dialog: [
                    new Interaction([
                        new Sentence('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'),
                        new Sentence('At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'),
                        new Sentence('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),
                        new Sentence('At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'),
                        new Sentence('- Damer'),
                    ]),
                ],
                character: new Character('ULI', 'images/damer.jpg')}
            ),
        ],
        background: 'neui-turnhalle.jpg',
        arrows: [
            [ ARROWS.BOTTOM_RIGHT, 'igang-süd' ]
        ]
    })
);

locations.set('igang-süd',
    new Location(
    {
        interactions: [
            // new Interaction({
            //     dialog: [
            //         new Interaction([
            //             new Sentence('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'),
            //             new Sentence('At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'),
            //             new Sentence('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. '),
            //             new Sentence('At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'),
            //             new Sentence('- Damer'),
            //         ]),
            //     ],
            //     character: new Character('ULI', 'images/damer.jpg')}
            // ),
        ],
        background: 'igang-süd.jpg',
        arrows: [
            [ ARROWS.TOP_CENTER, 'igang-süd' ]
        ]
    })
);
