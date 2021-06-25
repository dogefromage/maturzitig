const locations = new Map();

locations.set(
  "neui-turnhalle",
  new Location({
    interactions: [
      new Interaction({
        character: dammerCharacter,
        characterPlacement: {
          size: 20, // in %
          x: 10, // in %
          y: 70, // in %
        },
        dialogue: [
          new Sentence(
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua"
          ),
          new Sentence(
            "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          ),
          new Sentence(
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "
          ),
          new Sentence(
            "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          ),
          new Sentence("- Damer"),
        ],
      }),
    ],
    background: "images/locations/neui-turnhalle.jpg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      [ARROWS.BOTTOM_RIGHT, "stäge-igang"],
    ],
  })
);

locations.set(
  "roti-pfiler",
  new Location({
    interactions: [
      new Interaction({
        character: rolandCharacter,
        characterPlacement: {
          size: 35, // in %
          x: 50, // in %
          y: 45, // in %
        },
        dialogue: [new Sentence("a")],
      }),
    ],
    background: "images/locations/roti-pfiler.jpg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "igang-süd"],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "garte-1"],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "igang-süd",
  new Location({
    interactions: [],
    background: "images/locations/igang-süd.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "schiebetür"],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "roti-pfiler"],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "schiebetür",
  new Location({
    interactions: [],
    background: "images/locations/schiebetür.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "igang-inne"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      [ARROWS.CENTER_RIGHT, "stäge-igang"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "igang-süd"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "igang-inne",
  new Location({
    interactions: [],
    background: "images/locations/igang-inne.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "wasserspänder"],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "schiebetür"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "wasserspänder",
  new Location({
    interactions: [
      new Interaction({
        character: keyCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 40, // in %
          x: 55, // in %
          y: 50, // in %
        },
      }),
    ],
    background: "images/locations/wasserspänder.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "zentrum"],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "igang-inne"],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "zentrum",
  new Location({
    interactions: [
      new Interaction({
        character: elasCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 40, // in %
          x: 55, // in %
          y: 50, // in %
        },
      }),
    ],
    background: "images/locations/zentrum.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "liechthof"],
      [ARROWS.CENTER_RIGHT, "e-stäge"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "wasserspänder"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "e-stäge",
  new Location({
    interactions: [
      new Interaction({
        character: fabiCharacter,
        characterPlacement: {
          size: 60, // in %
          x: 15, // in %
          y: 50, // in %
        },
        dialogue: [new Sentence("Ehre")],
      }),
    ],
    background: "images/locations/e-stäge.jpeg",
    arrows: [
      [ARROWS.TOP_LEFT, "e-hinde"],
      [ARROWS.TOP_CENTER, "h11"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "zentrum"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "e-hinde",
  new Location({
    interactions: [
      new Interaction({
        character: sebCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 35, // in %
          x: 47, // in %
          y: 40, // in %
        },
      }),
    ],
    background: "images/locations/e-hinde.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      [ARROWS.CENTER_RIGHT, "u-stäge"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "e-stäge"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "glas-dach",
  new Location({
    interactions: [
      new Interaction({
        character: samuCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 35, // in %
          x: 47, // in %
          y: 35, // in %
        },
      }),
    ],
    background: "images/locations/glas-dach.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "h-zentral"],
      [ARROWS.CENTER_RIGHT, "computerrum"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "garte-1",
  new Location({
    interactions: [
      new Interaction({
        character: giusiCharacter,
        dialogue: [new Sentence("pfpfffpfpfpfpfffhhhh")],
        characterPlacement: {
          size: 40, // in %
          x: 40, // in %
          y: 40, // in %
        },
      }),
    ],
    background: "images/locations/garte-1.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "garte-2"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      [ARROWS.CENTER_RIGHT, "roti-pfiler"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "garte-2",
  new Location({
    interactions: [
      new Interaction({
        character: dimiCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 40, // in %
          x: 40, // in %
          y: 40, // in %
        },
      }),
    ],
    background: "images/locations/garte-2.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "x-holz"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "garte-1"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "x-holz",
  new Location({
    interactions: [
      new Interaction({
        character: joelCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 55, // in %
          x: 30, // in %
          y: 40, // in %
        },
      }),
    ],
    background: "images/locations/x-holz.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "x-kopierer"],
      [ARROWS.CENTER_RIGHT, "igang-west"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      [ARROWS.BOTTOM_RIGHT, "garte-2"],
    ],
  })
);

locations.set(
  "x-kopierer",
  new Location({
    interactions: [
      new Interaction({
        character: nicoCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 50, // in %
          x: 50, // in %
          y: 20, // in %
        },
      }),
    ],
    background: "images/locations/x-kopierer.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      [ARROWS.CENTER_RIGHT, "x-holz"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "igang-west",
  new Location({
    interactions: [
      new Interaction({
        character: paediCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 40, // in %
          x: 50, // in %
          y: 50, // in %
        },
      }),
    ],
    background: "images/locations/igang-west.jpeg",
    arrows: [
      [ARROWS.TOP_LEFT, "mensa-usse"],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      [ARROWS.CENTER_RIGHT, "u-stäge"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "x-holz"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "mensa-usse",
  new Location({
    interactions: [
      new Interaction({
        character: tobiCharacter,
        dialogue: [new Sentence("Fear me")],
        characterPlacement: {
          size: 30, // in %
          x: 20, // in %
          y: 30, // in %
        },
      }),
    ],
    background: "images/locations/mensa-usse.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      [ARROWS.CENTER_RIGHT, "mensa"],
      [ARROWS.BOTTOM_LEFT, "igang-west"],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "mensa",
  new Location({
    interactions: [
      new Interaction({
        character: marcCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 60, // in %
          x: 35, // in %
          y: 40, // in %
        },
      }),
    ],
    background: "images/locations/mensa.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "u-büecher"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "mensa-usse"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "hb",
  new Location({
    interactions: [],
    background: "images/locations/hb.jpg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "igang-süd"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "u-büecher",
  new Location({
    interactions: [
      new Interaction({
        character: lariCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 40, // in %
          x: 50, // in %
          y: 30, // in %
        },
      }),
    ],
    background: "images/locations/u-büecher.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "chraftruhm"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      [ARROWS.CENTER_RIGHT, "u-stäge"],
      [ARROWS.BOTTOM_LEFT, "mensa"],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "u-stäge",
  new Location({
    interactions: [],
    background: "images/locations/u-stäge.jpeg",
    arrows: [
      [ARROWS.TOP_LEFT, "igang-west"],
      [ARROWS.TOP_CENTER, "e-hinde"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      [ARROWS.BOTTOM_LEFT, "u-büecher"],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "chraftruhm",
  new Location({
    interactions: [
      new Interaction({
        character: martinCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 70, // in %
          x: 35, // in %
          y: 10, // in %
        },
      }),
    ],
    background: "images/locations/chraftruhm.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "u-büecher"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "stäge-igang",
  new Location({
    interactions: [
      new Interaction({
        character: angelaCharacter,
        dialogue: [new Sentence("...")],
        characterPlacement: {
          size: 25, // in %
          x: 20, // in %
          y: 10, // in %
        },
      }),
    ],
    background: "images/locations/stäge-igang.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "neui-turnhalle"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "schiebetür"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "liechthof",
  new Location({
    interactions: [
      new Interaction({
        character: virgilCharacter,
        dialogue: [
          new Sentence(
            "Moooorge. Min Name isch Virgil Notz und ich bin in mim zweite Johr zu dere Klass gstosse. Als Klasseältischte isch mir dEhr zuegstande, d4A als Klassepsrecher zverträtte. In de Discord-Sessions bin ich stets eine vo de Wortfüehrer gsi und bin hi und wieder mitverantwortlich gsi, dass mir chli vom Thema abgschweift sind. "
          ),
          new Sentence(
            "Eppis wiiters wo mich uszeichnet, isch mis Talent, Schlupflöcher in de Ufgabestellig vo Mathetests zfinde. Ungenaui Formulierige in de Frogestellig han ich schamlos usgnützt und bin au nochher stets immer für mini eigene Geistesblitz iigstande. Durch mini Fähigkeit gekonnt z‘argumentiere hani denn meistens dPünkt becho."
          ),
          new Sentence(
            "Ich drink immer mol wieder eine über de Durst, aber das stehts kontrolliert. Usser es ligt grad e Wassermelone ume, denn chani leider für nix garantiere."
          ),
          new Sentence(
            "Während de Mottowuche bini übermotiviert gseh und ha mi füres Globi Köstum komplett blau aagmolt. "
          ),
          new Sentence(
            "Zuesätzlich bin ich inde Füerwehr aktiv und han 4 Johr lang ghofft dass min scheiss Alarm währendere Franzstund abgoht und ich somit die Stund verloh dörf, was aber leider nie de Fall gsi isch."
          ),
        ],
        characterPlacement: {
          size: 40, // in %
          x: 50, // in %
          y: 40, // in %
        },
      }),
    ],
    background: "images/locations/liechthof.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "zentrum"],
      [ARROWS.CENTER_RIGHT, "sekretariat"],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "sekretariat",
  new Location({
    interactions: [],
    background: "images/locations/sekretariat.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "computerrum"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "liechthof"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "computerrum",
  new Location({
    interactions: [
      new Interaction({
        character: daveCharacter,
        dialogue: [
          new Sentence("Grüssgott!"),
          new Sentence(
            "I bi dr David Alexander Pablo Juanito Tejera(Tejero füre Lötscher), abr für mini Amigos: Dave. Memes sin mini Lideschaft, denn 'Schwarzer Humor ist wie das Deutsche Reich - Es hat keine Grenzen'. En mi tiempo libre luegi oft Marvel Filme und spiel gern pokémon go everyday. "
          ),
          new Sentence(
            "League of Legends ischs schlechtiste Game überhaupt, aber ich ha eif nid ufhöre es spiele. Oft spiel ichs eif mit mim ältere Brueder. Am erste Gym Schueltag hem mir usegfunde, dass League of Legends sehr beliebt gseh ish in unsere Klass. Aber ha mit keine rankeds chönne spiele, will mini Liga eif zhöch gseh ish für die noobs."
          ),
          new Sentence(
            "Mini Hobbies sind usserdem Klavier spiele, Brooklynn 99 luege und Giuseppe mobbe (er machts uns zu eifach). Ich verbring zviel Ziit uf 9gag oder uf Reddit. Mini Lieblingskategorie ish natürlich 'Dark Humor'."
          ),
          new Sentence(
            "Ich ha mitm Klavier spiele aagfange, will ich unbedingt es Anime Opening han wölle lerne. Sit dem bini süchtig worde. Jedes mol wenni es Klavier gseh, muess ich mit mine Finger die Taste fühle."
          ),
        ],
        characterPlacement: {
          size: 40, // in %
          x: 20, // in %
          y: 40, // in %
        },
      }),
    ],
    background: "images/locations/computerrum.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      [ARROWS.TOP_CENTER, "glas-dach"],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      // [ ARROWS.BOTTOM_CENTER, '' ],
      [ARROWS.BOTTOM_RIGHT, "sekretariat"],
    ],
  })
);

locations.set(
  "h-zentral",
  new Location({
    interactions: [],
    background: "images/locations/h-zentral.jpeg",
    arrows: [
      [ARROWS.TOP_LEFT, "h11"],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      // [ ARROWS.CENTER_LEFT, '' ],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "glas-dach"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);

locations.set(
  "h11",
  new Location({
    interactions: [
      new Interaction({
        character: fribiCharacter,
        dialogue: [
          new Sentence("Guten Tag zusammen"),
          new Sentence(
            "Ich bin Dr. Christian Freiburghaus und war vier Jahre Lang der Klassenlehrer der 4A. Die Klasse war sehr toll, motiviert und diskussionsfreudig und ich habe die Lektionen mit den Schülerinnen und Schülern meistens  sehr genossen (ausser es haben alle über Schach statt Mathe diskutiert oder es zerbrach gerade eine Bierflasche auf dem Boden des Klassenzimmers)."
          ),
          new Sentence(
            "Guten Tag zusammenBesonders gefallen hat mir die Zusammenarbeit mit Herrn Joe L. Schneider im gemeinsamen Klassenchat. Die wichtige und regelmässige Nachfrage, inwiefern der Taschenrechner in der nächsten Prüfung verwendet werden darf, habe ich stets gerne kurz und knapp beantwortet. Auch einige Scherzantworten liess ich mir nicht entgehen."
          ),
          new Sentence(
            "Ob mit mir 15 Minuten nach beginn der Lektion noch zu Rechnen ist, weiss keiner so genau, auch ich nicht."
          ),
        ],
        characterPlacement: {
          size: 55, // in %
          x: 47, // in %
          y: 20, // in %
        },
      }),
    ],
    background: "images/locations/h11.jpeg",
    arrows: [
      // [ ARROWS.TOP_LEFT, '' ],
      // [ ARROWS.TOP_CENTER, '' ],
      // [ ARROWS.TOP_RIGHT, '' ],
      [ARROWS.CENTER_LEFT, "h-zentral"],
      // [ ARROWS.CENTER_RIGHT, '' ],
      // [ ARROWS.BOTTOM_LEFT, '' ],
      [ARROWS.BOTTOM_CENTER, "e-stäge"],
      // [ ARROWS.BOTTOM_RIGHT, '' ],
    ],
  })
);
