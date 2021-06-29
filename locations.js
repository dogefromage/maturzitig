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
            new Sentence('Guten Tag *tiefes Einatmen* '),
            new Sentence('Mein Name ist Dr. Ulrich Dammer. Einige von euch kennen mich vielleicht auch unter meinem sehr kreativen Schach-Namen. Quellenuli. '),
            new Sentence('Einige fragen sich, wie ich auf einen so kreativen Namen gekommen bin. Naja, ich wohne am Quellenweg und heisse Uli.'),
            new Sentence ('Aber mit meiner Faszination fürs Schachspiel habe ich wohl die ganze Klasse 4A angesteckt, denn im letzten Jahr gab es fast keine Pause, in der keine Partie gespielt wurde.'),
            new Sentence ('In diese Partien war ich auch manchmal verwickelt und habe meistens meine Schachexpertise beweisen können. Sogar gegen Sebastians Schachcomputer habe ich gewonnen.'),
            new Sentence('*tiefes Einatmen*'),
            new Sentence('Ich habe mehrere Kinder und in meiner Freizeit fahre ich gerne Inlineskates. Wenn ich den lieben Herr Joe.L. Schneider in der Nähe meines Hauses entdecke, fühle ich mich gerade von ihm gestalkt. '),
            new Sentence('*tiefes Einatmen* '),
            new Sentence('Wie man merkt, bin ich ein Deutscher, deswegen spreche ich mit dir auch nur Hochdeutsch. Ich bin aus Köln und höre vielleicht auch deswegen leidenschaftlich gerne Kölschrock. Und habe die Klasse auf hits wie Verdamp lang her aufmerksam gemacht, der immerno h an keiner Klassenparty fehlen darf '),
            new Sentence('*tiefes Einatmen*'),
            new Sentence('Wenn bei einem Physikexperiment einmal etwas sehr falsches herauskommt, dann gibt es genau zwei Möglichkeiten für weiteres Vorgehen. '),
            new Sentence('Entweder mir ist wieder einmal ein Fehler unterlaufen…. Oder ich schreibe einfach "naja" oder "uff" an die Wandtafel und rechne mit der nächsten Aufgabe weiter.'),
            new Sentence('Und ich warne dich, mit elektrischer Spannung spielt man nicht. Das durfte ich leider an meinem eigenen Leibe erfahren, als ich der 4A mit voller überzeugung den Van de Graaff Generator demonstrierte.'),
            new Sentence('Aber die vielen Experimente und der anschauliche Unterrichtsstil haben dazu geführt, dass die ganze Klasse in meinen Lektionen immer gut unterhalten war.'),
            new Sentence('Ich bin sehr stolz auf meine Physikprüfungen. Ich kopiere jedoch teilweise Aufgaben von alten Tests und frage mich dann, ob die Schüler eine Facebook-Gruppe führen, in der Tests verteilt werden. '),
            new Sentence('Apropos Test, Wehe ihr habt in euren Antworten im Physiktest Rechtschreibfehler, dann kann es schnell mal sein, dass ich euch einfach so aus dem Nichts heraus einige Punkte abziehe. '),
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
        dialogue: [
            new Sentence('Grüezi. Ich bin Roland Lötscher und ich habe sogar meine eigene Fiche. Obwohl sie nicht so gross ist wie die von Max Frisch, bin ich stolz darauf. '),
            new Sentence('Ich habe die Klasse 4A in Deutsch unterrichtet und kann es immer noch nicht, fassen dass wir die Kommaregeln bis in die 4. Klasse vor uns hergeschoben haben.'),
            new Sentence('Die Namen der Klasse 4A und ich sind ein absolutes Dreamteam. Aber ich verstehe auch nicht, wieso Fabian und Samuel immer nebeneinander sitzen müssen obwohl sie so ähnliche Namen haben - kein Wunder, dass das Verwirrung stiftet. '),
            new Sentence('Auch mit dem italienischen Namen habe ich meine liebe Mühe. Heisst er Giovanni oder  Guiseppe?'),
            new Sentence('Die Tischordnung in meinem Zimmer ist einmalig (leider wurde sie durch Corona unmöglich). '),
            new Sentence('Da ich alle Tische in U-Form an die Wände geschoben habe und die Schüler mit dem Rücken zum Zimmer dasitzen, habe ich es erreicht, dass kein einziger Schüler nach vorne an die Wandtafel sehen kann ohne sich auf seinem Stuhl umzudrehen. '),
            new Sentence('Das nenne ich bewegten Unterricht! Ein weiterer positiver Effekt dieser Sitzordung ist, dass die Schüler weniger dazu verleitet werden miteinander zu reden, da sie beim Schreiben die Wand anstarren. '),
            new Sentence('Und sollte es mal nicht ruhig genug sein, habe ich mit dem Satz „gemeinsames Schreiben ist gemeinsames Schweigen“ immer ein Ass im Ärmel. Und falls das auch nicht hilft, dann schwinge ich noch mein Glöggli und hoffe dass die Gespräche verstummen.'),
        ],
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
        dialogue: [
            new Sentence("Güete Tag. Ich bin der Keanu und han der komischti Akzent vo allnu. Und ja, es isch Walliserdiitsch. "),
            new Sentence("Mängisch versteit mu mich numu halber aber das isch mier egal. Will im schlimmstu Fall chani öi güet ins Baseldyytsch wechslu oder mich verständigu en Español. "),
            new Sentence("Mis Markuzeichu sind mini lockigu, wallendu Haari. In minera Friizit beschäftigu ich mich mit Anime und Star Trek lüegu. "),
            new Sentence("Wenns um Computer oder rechtlichi Fraage geit, chan mu mich immer z'Rat zieh und ich gibu öi gäru Üskunft. "),
            new Sentence("Mis Lebensziel ishs es Mondhotel zbaue. Ich bi scho drah die Päss und Outfits am designe. "),
            new Sentence("Scho sit sehr früeh ish es min Traum gseh Astronaut zwerde um dere Welt zentchoo. "),
            new Sentence("Während em lerne tue ich sehr luut Techno lose. Lerne machi abr seltener, willis eig garnid nötig han. "),
            new Sentence("Ich tue au gern mini Ufgobe uf de letzti Drücker erledige. Will aber mini Technik mir immrno sehr gueti Note bringt, wird ich sie so schnell nid ändere."),
            new Sentence("Usserdem wärde villi vo mini Lehrer am Arsch si wenn ich nümme do bi. Isch irgendöpps mit em Beamer nid gange oder heds irgend es anders technischs Problem geh bi ich immer sofort zur Stell gsi. "),
            new Sentence("So han ich au einige vo mine Mitschüeler*inne ihre Vortrag gretted."),
            new Sentence("In däm Sinn, hebet nu en schöne Abund, ich gang wieder embrüf ins scheena Wallis ga Schiifahru."),
        ],
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
        dialogue: [
            new Sentence('Namaste, ich bi dr Elias, vo villne au Elas (vill chürzer und eifacher) gnennt.'),
            new Sentence('Während ich am Afang vom Gym gärn mitere ufgstellte Frisur, inere Läderjacke und Jeans ufträte bin (und mini chehle immer wider mol mit chli Alkohol befüechtet han), '),
            new Sentence('rock ich hüt e chli längeri Hoor und nutz Yoga und nüm Alkohol als Hauptenergiequelle. Vom Läbensstil vo der alte Legände Bob Marley bini übrigens nid abgneigt. '),
            new Sentence('Was ich mol wärde will: Irgend so öppis ähnlichs wie Guru oder so. Das weissi noni ganz. Aber hey, ich han jo no zitt. '),
            new Sentence('Alli sele mol bitz mehr flexe will s Läbe isch baba, genau so wie sowieso alles baba isch. '),
            new Sentence('Ich han sogar es Ässe gfunde wo "baba ganoush" heisst. Scho nume wäg em Name isch es baba und natürlich vegan.'),
            new Sentence('Au wenn mir beidi mittlerwile s 20. lebensjohr erreicht hend sind de Samu und ich riese Fans vode Kinderserie Gravity Falls. '),
            new Sentence('Also wenn ihr irgendneume im Schuelhus de Bill Cipher finde settät (es gälbs Dreieck mit eim Aug, gseht bitzli us wies Illuminati-Dreieck) denn könnetr euch sichr si dass das vo uns isch.'),
            new Sentence('Zuesätzlich hani gern molle no füren guete Kräutergruch im Unterricht gsorgt.'),

        ],
        characterPlacement: {
          size: 50, // in %
          x: 55, // in %
          y: 35, // in %
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
        dialogue: [
            new Sentence('Eyy, bi de Fabian Martin oder au bekannt als de Jägermeister, weg minere geile Ketti. '),
            new Sentence('Usserdem hani das Wort Gloon in die 4A iihgfühert, uf was ich bsonders stolz bii, will das bis jz no verwendet wird. '),
            new Sentence('Ich fahr gern longboard und tue ab und zue mol chli Alkohol zu mir neh. Am beste beides glichzitig. '),
            new Sentence('Mini accomplishments werde an de Decki vom Kästliruum festghalte. '),
            new Sentence('Zudem han ich‘s gschafft eh Strategie z entwickle zum durchgehend bide migrolino-app chönne z gwünne was zunere regionale Usbütig vom Migrolino z Liestl gführt het.'),
            new Sentence('Ich bi immer d Uswahl Nummer 1, wenn mol im Sportunterricht eppis vorzeigt werde muess, willi in minere Freizit tue Grätturne und Chlättere. '),
            new Sentence('Mini Form bim Ringturne wird vom Rüegg gern bewunderet. Usserdem chani de backflip usem Stand, was ich eif ab und zue mol mega casual drop (flexer).'),
        ],
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
        dialogue: [
            new Sentence('Hallo, ig bi dr Sebastian, aber eigentlich nenne mi alli Seb (usser de Herr Lötscher wo mig vier Johr lang mit Überzügig Sebiiii gnennt het). '),
            new Sentence('In minere Freizit bini immer mit eim Aug am Usschau haute noch Comic Sans, minere absolute Lieblingsschriftart. '),
            new Sentence('Sunst sorgi immer für viel Unterhaltig in de Klass, sig das willi dFachsproch in Mathe vergewaltige'),
            new Sentence('oder will ig wieder irgend e Spieli programmiert ha (wie zum Biespiel <a href="http://www.fledermaus.io">fledermaus.io</a> ) und so de Physikunterricht erträglicher mach.'),
            new Sentence('Schüsch interessier ig mi für alles wo mit Technik ztue het und Musig fingi au e tolli Sach (au wenn mi Musigstil für es paar eher abentürlich isch).'),
            new Sentence('Wenn du mit mir unterwegs bisch, muesch immer druf vorbereitet zsie, das plötzlich und völlig unerwartet e Smirnoff Ice dini Ufmerksamkeit uf sich zieht.'),
            new Sentence('Statt mitem Herr Rüegg go jogge, gang ich lieber mitem Martin in Volg (wo leider grad in dr nöchi vo dr Route gsii isch) go Capri-Sun hole. '),
            new Sentence('Dank däm Gottesgliiche Getränk hani denn au gnueg Energie zum die ganzi Klass (dank ere chline Abchürzig) wider iizhoole und die letschte Meter mit ihne z jogge.'),
        ],
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
        dialogue: 
        [
            new Sentence('Sali zämme, ich bi dr Samu, wobii dr Herr Lötscher doo viellicht nid ganz iverstande isch. In de letschte vier Johr bini vo ihm nämlich immer wieder voller Überzügig mit "Fabian" agsproche worde.'),
            new Sentence('Für Parties bini immer ummee. Mengish eskalierts und es chönnt dezu choo, dassi e Zahn verlier. '),
            new Sentence('In de allerletzte Schuelwuche hani usversehe e Bier Fläsche im Mathe Zimmer zerschmätteret. '),
            new Sentence('Natürlich han ich nid in de Schuel möchte trinke, das wäri unverantwortlich. Die Bier Fläsche wär natürlich für nach de Schuel denkt gseh. '),
        ],
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
        dialogue: [
            new Sentence('Buongiorno, sono Giuseppe; oder schribt mes Guiseppe, bin mr selber grad nümm sicher. '),
            new Sentence('Aber chasch mi au Giovanni nenne, hauptsach e italienische Name wo mit G afangt. De Fribi hät mich immer gern Giusi gnennt.'),
            new Sentence('Ich hör scho us wieter Entfernig, wenn öpper das wort pizza erwähnt, will ich für eini immer ready bi, user es isch mit Ananas, denn sind mir kei Kollege meh '),
            new Sentence('oder wenn du öppis schlechtes übr Taylor Swift seisch, denne bechunnsch e Fust ind Fressi. '),
            new Sentence('Mir sind schnell keini Kollege, wenn du die sache magsch. Wenn du Lamborghinis und Inter magsch, sind mir kei Kollege und ich wird dich nie meh wieder beachte. '),
            new Sentence('Du müesch Ferraris und AC Milan liebe. Denn sind mir gueti Kollege. Ich bi immer voll motiviert fürd Schuel, will wenn Italiäner erwachse werde, ahfange zu schaffe. '),
            new Sentence('Dank minerer Grössi, werd ich wohl nie erwachse und kah mich somit immer ufd Schuel freue und ufs Kinderkrankehuus. '),
            new Sentence('Ah und by the way: Pizza schnidet me mit de Schär, das isch e alti italiänischi Tradition. Alli wo eppis anders behaupte hend kei Ahnig!'),
            new Sentence('E anderi Mahlziit, wo ich lieb sind Hamburgers Ketchup mit Pommes (Nei es isch nid umgekehrt gschriebe). '),
            new Sentence('Als kliises Kind (also kliner als jetzt) han ich unbedingt im McDonalds lebe wölle, will ich Burger so unsterblich lieb.'),
        ],
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
        dialogue: [
            new Sentence('Tschau compagneros, ich bi dr Dimi, in gwüsse Kreise au "Trov" gnennt. In de 4A bini für mini Grössi und min Mordsschwung im Handball bekannt. '),
            new Sentence('Occasionally machi e Bob Schlitte kaputt, willi eif zu engagiert bi im wettrenne und Schanzespringe.'),
            new Sentence('Ich bi gärn verwicklet in diversi Diskussione in dr Klass, sigs über Memes, die negschti Party oder unwichtigers züg wie Mathe. '),
            new Sentence('Zuesätzlich hani die beste Siegerquote wenn me alli 1gg1 in Super Smash Brothers würd betrachte '),
            new Sentence('(do dezue muessi aber au säge dassi als einzige immer mitem Pro-Controller zockt han, was natürli aber nur eh Nebesach iscch). '),
            new Sentence('Aso fallsde s Gfühl hesch du bisch guet in Smash, kumm do ahne und ich zerstör dich, meistens mit es paar schöne Spikes vom Donkey-Kong.'),
        ],
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
        dialogue: [
            new Sentence('Ladies and Gentlemen, …ähm… '),
            new Sentence('Here is your captain speaking. My name is …ähm… Joe L. Schneider and I will be the pilot on this flight to …ähm… New York. '),
            new Sentence('I wish you a pleasant journey and beg you to fasten your seatbelt because this flight is going to be turbulant due to my clumsiness. '),
            new Sentence('Min Name isch mini Spezialität und beschert mir diversi tolli Spitznäme. Und übrigens: Min Name spricht me iooel us, nid Schoel und me schribt mich au nid Joël. '),
            new Sentence('Das und au ziemlich viel Anders diskutier ich gern mit dir us. '),
            new Sentence('Aber Achtung, ich muess dich vorwarne: gege mich wirsch du kei Chance ha, mini Stimm wird dini Argument überflügle au wenni garnid recht ha.'),
            new Sentence('Mis Lieblingsgetränk ish Bier usere Pet-Fläsche. Mis Lieblingsesse sind kehrti Crèpes. Die machi sogar selber an mim Stand und verchauf die während de Fasnacht. '),
            new Sentence('Die 4A ish ab und zue mol verbii choo zum extra Wünsh züssere. '),
            new Sentence('Ich bi eif de verpeiltischti und tollpatschigsti us de 4A.    '),
            new Sentence('In Berlin chan ich mich garnid verirre, will egal wo ane ich lauf, ich chum immer wieder zrug zu minere gliebte Warschauerstross. Und vo döt us kenn ich jedi Richtig uswendig. '),
        ],
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
        dialogue: [
            new Sentence('Tschau ich bin der Nico. Ich bin derfür bekannt in allne Situatione irgendöppis säge z wüsse, oder wie ich s amigs nenn: z bullshitte. '),
            new Sentence('Ich verbring gern sterneklari Nächt bim fotografiere vo Planete vo mim Balkon us. De befindet sich übrigens grad hinter der Schuel. '),
            new Sentence('In Sache Technik bin ich immer uf em neuste Stand. In minere Freizit spiel ich Klavier und es git nid viel Stück woni nid ind Taste chan zaubere. '),
            new Sentence('Nebebii spiel ich no Tennis und nütz de Rest vo minere Ziit zum Anime-Figure zeichne und Rocket League zspiele. Japanisch hani mr übrigens au no selber biibrocht '),
            new Sentence('Du frogsch dich jetzt sicher, wie ich das alles in min Tag inebechum und gliichzitig au no gnueg schloof. D‘Antwort isch relativ eifach: Schloof isch überbewertet. '),
        ],
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
        dialogue: 
        [
            new Sentence('A wild Pädi appeared! '),
            new Sentence('Wenn du mich wettsch iifange, probiers nid mit Gmües, das Züg ghört nid uf e Teller! '),
            new Sentence('Ich bin es eher seltens Pokémon und zeig mich nur ungern in de Öffentlichkeit. '),
            new Sentence('Wenn ich nid grad am Gym bin, verchriech ich mich am liebste in mim Estrich. '),
            new Sentence('Dört, wiit weg vo jeglichem Tagesliecht, fühl ich mich am wohlste und verbring min Tag mit Game und Anime luege. '),
            new Sentence('Mis Gamingsetup besoht us emene riese Gaming-Laptop wo so dick isch, dass er wahrschinlich Chugelesicher wär (hans bis jetzt noni usprobiert). De Laptop het e Touchpad und nid e Trackpad - ganz e grosse Unterschied. '),
            new Sentence('Die japanischi Kultur interessiert mich und ich befass mich gern igehend demit. '),
            new Sentence('Vor allem die zweidimensionale Produkt wo dert produziert werde, findi sehr faszinierend.'),
            new Sentence('Dank mim ältere Brueder han i eusi Klass immer wieder uf s neue chönne mit mine Drögeli versorge. '),
            new Sentence('Nei, es isch nid das wo ihr denket. D Lüt sind lediglich vo mine Tests abhängig gsi. '),
            new Sentence('Mi Brueder het mir do so einigi wertvolli Schriftstück hinterloh. Wenn mir s grad scho vo Schriftstück hend. '),
            new Sentence('Im schribe bin i au e Spezialist. Mit mim 0.5mm Bleistift schaff ich s in Mathe en Bruch wo jewils in Zähler und Nenner sogar Exponenten het, in eis einzigs Kästli inezdrucke. Wie das mini Lehrer chönne lese, weiss ich au nid.'),
        ],

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
        dialogue: 
        [
            new Sentence('Min Name isch Tobias Robert Eeksmann, obwohl ich in mim OneNote mit em Name Agash agmeldet bin. '),
            new Sentence('Die meischte checke au nid, dass "Robert" zu mim Nochname ghört. '),
            new Sentence('Ich han dTaskleiste us Überzügig am obere Bildschirmrand und zeichne am liebste mit de Muus uf mim Computer, was mini Klass immer ufs Neue beidruckt. '),
            new Sentence('Ich ernähr mich am liebste vo Pizza (woni immer genau denn iss wenn mr zeme online lerne). '),
            new Sentence('Als Dessert lösi amix no paar Integral. Me seit vo mir, das es kei Integral uf dere Welt git wo ich nonig glöst han.'),
            new Sentence('Gib mir paar Tröpfli Alk und ich mach Liegestütz ufem Laufband und stand die ganzi Chemie Lektion (will stoh gsund isch) '),

        ],
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
        dialogue: [
            new Sentence('Sali zemme, i bi de Marc.'),
            new Sentence('I bin in dere Klass für einiges bekannt, aber mini grössti Erungeschaft isch, dass ich s nach ganz obe gschafft han. '),
            new Sentence('Ich han mir de Platz als Gschichteerzähler bir wüchentliche Werwolfrundi ergatteret. '),
            new Sentence('Au wenn i immerwieder usversehe gseit han, dass euse gliebte Düsterwald iiwacht oder ufschloft, bin i trotzdem akzeptiert worde. Das macht mi stolz.'),
            new Sentence('In minere Freizit bin i en sehr engagierte OL-Läufer, was au de Grund isch, wieso ich nie in Schuelsport han müsse. I han die Zit denn oft brucht zum lerne.'),
            new Sentence('Während de PRA Reis uf Berlin han ich mis erste Bier kah. Alli säge, dassi verdammt drunk gseh bii, aber ich bi de überzügig, dass das nid de Fall ish. '),
        ],
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
        dialogue: [
            new Sentence('Heiii, mi Name ish Larissa Straumann, aber wird au Lari gnennt. Ich vertritt 50% vo de wibliche Population in de 4A. '),
            new Sentence('Willi in Hölste wohn, ish dWB e guete Kolleg vo mir gseh, woni us tiefstem Herze vermisse wird. '),
            new Sentence('In minere Freizit tue ich gern backe oder mach Rhönrad (und nei, ich erklär nid, was das ish! Hani scho zu oft müesse mache). '),
            new Sentence('Eini vo mine Lieblingsaktivitäte ishs mich au kreativ uszlebe und bi unglaublich talentiert im Zeichne und ufem Kopf schriebe. '),
            new Sentence('In dene Fächer, woni nid gern ufpass bini immer am doodle. '),
            new Sentence('Min Uftritt wird durchs Knackse vo mine Füess aakündigt. Ich weiss immrnoni wieso das passiert. Vlt sötti mol zum Arzt.  '),
            new Sentence('Ich bi immer parat für e lustigi Ziit. Öfters hani müesse dLüt us de 4A dazue überrede mol chli lockerer druf zsii.'),
        ],
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
    interactions: 
    [
      new Interaction({
        character: molinariCharacter,
        dialogue: [
            new Sentence('Bonjour à tous. Je suis Matteo Molinari, le successeur de M. Mina et Mme Fiedler et j‘avais le plaisir d‘enseigner la classe 4A pendent le dernier semestre. '),
            new Sentence('Parfois j‘étais surpris du niveau de cette classe (négativ - ou positiv; c‘est à toi de choisir). '),
            new Sentence('Je suis toujours motivé, même quand la classe ne l‘est pas. Ma phrase préférée? „En français s‘il vous plait.“'),
            new Sentence('Merci pour votre attention, vous avez très bien travaillé!'),
        ],
        characterPlacement: {
          size: 40, // in %
          x: 10, // in %
          y: 25, // in %
        },
      }),
    ],
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
        dialogue: [
            new Sentence('Konnichiwa, ich bin de Martin! Ich präferier Schwitzerdütsch als Unterrichtssproch. '),
            new Sentence('Ich bin erst in de 3. Klass zu de jetzige 4A gstosse. Vorher han ich es Ustuschjohr in Japan gmacht. '),
            new Sentence('Das het mich zwar zumene gekonnte Japanisch-Sprecher gmacht, het aber zu einige Defizit in de dütsche Rechtschriebig (vom Herr Lötscher regelmässig an Ufsetz festgstellt) und in Französisch gfüehrt. '),
            new Sentence('Aber mol ganz ehrlich: Wer brucht scho Französisch im Läbe?! '),
            new Sentence('Wenn ich am Afang vo der Lektion noni im Zimmer sitz gits kei Grund zur Panik. Ich ha zu 99% verschlofe und bim andere 1% de Zug verpasst will mis Velo Verspötig gha het.  '),
        ],
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
        dialogue: [
            new Sentence('Hey ich bi d Angela und vertritt die andere 50% vo de wiibliche Population in de 4A. '),
            new Sentence('Ich bi eher e ruhigi Person und wäge dem au nid so ufgfalle in de letschte 4 Johr. Usserdem findi d Schuel voll langwiilig. '),
            new Sentence('Entweder machemer nume blöds Züg oder de Lehrer isch doof. Usser Änglisch, Bio und Geo. Das isch mängisch no toll gsi. '),
            new Sentence('Trotzdem hani immer probiert mini Mitschüeler*inne ufzmuntere in dem ich si agstupst ha. '),
            new Sentence('Komischerwiis sind si denn immer so zämezuckt wills se anschinend "kützelet" hed. Also für mich isch das es Fremdwort. '),
            new Sentence('Es anders Markezeiche vo mir sind mini Hoor. In de ersche Klass hani mi dezue entschlosse e radikali Veränderig vorzneh und sitthär träg ich mini Churzhoorfrisur mit Stolz. '),
            new Sentence('Süscht duen ich no Chlättere (dinne oder dusse, isch mir egal) und han wäge dem immer ganz kauptti Händ. Min gheime Traum isch mol gsi Regapilotin z wärde, aber pssttt… das weiss (fascht) niemer. '),
            new Sentence('Aber jetzt machi lieber öppis mit Erd- und Klimawissenschaften. Isch jo schliesslich au wichtig.'),
        ],
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
            new Sentence('Moooorge. Min Name isch Virgil Notz und ich bin in mim zweite Johr zu dere Klass gstosse. Als Klasseältischte isch mir dEhr zuegstande, d4A als Klassepsrecher zverträtte. '),
            new Sentence('In de Discord-Sessions bin ich stets eine vo de Wortfüehrer gsi und bin hi und wieder mitverantwortlich gsi, dass mir chli vom Thema abgschweift sind. '),
            new Sentence('Eppis wiiters wo mich uszeichnet, isch mis Talent, Schlupflöcher in de Ufgabestellig vo Mathetests zfinde. '),
            new Sentence('Ungenaui Formulierige in de Frogestellig han ich schamlos usgnützt und bin au nochher stets immer für mini eigene Geistesblitz iigstande. Durch mini Fähigkeit gekonnt z‘argumentiere hani denn meistens dPünkt becho. '),
            new Sentence('Ich drink immer mol wieder eine über de Durst, aber das stehts kontrolliert. Usser es ligt grad e Wassermelone ume, denn chani leider für nix garantiere.'),
            new Sentence('Während de Mottowuche bini übermotiviert gseh und ha mi füres Globi Köstum komplett blau aagmolt. '),
            new Sentence('Zuesätzlich bin ich inde Füerwehr aktiv und han 4 Johr lang ghofft dass min scheiss Alarm währendere Franzstund abgoht und ich somit die Stund verloh dörf, was aber leider nie de Fall gsi isch.'),
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
            new Sentence('Grüssgott! '),
            new Sentence('I bi dr David Alexander Pablo Juanito Tejera (Tejero füre Lötscher), abr für mini Amigos: Dave. '),
            new Sentence('Memes sin mini Lideschaft, denn "Schwarzer Humor ist wie das Deutsche Reich - Es hat keine Grenzen". '),
            new Sentence('En mi tiempo libre luegi oft Marvel Filme und spiel gern pokémon go everyday. '),
            new Sentence('League of Legends ischs schlechtiste Game überhaupt, aber ich ha eif nid ufhöre es spiele. Oft spiel ichs eif mit mim ältere Brueder. '),
            new Sentence('Am erste Gym Schueltag hem mir usegfunde, dass League of Legends sehr beliebt gseh ish in unsere Klass. Aber ha mit keine rankeds chönne spiele, will mini Liga eif zhöch gseh ish für die noobs. '),
            new Sentence('Mini Hobbies sind usserdem Klavier spiele, Brooklynn 99 luege und Giuseppe mobbe (er machts uns zu eifach). '),
            new Sentence('Ich verbring zviel Ziit uf 9gag oder uf Reddit. Mini Lieblingskategorie ish natürlich "Dark Humor".'),
            new Sentence('Ich ha mitm Klavier spiele aagfange, will ich unbedingt es Anime Opening han wölle lerne. Sit dem bini süchtig worde. Jedes mol wenni es Klavier gseh, muess ich mit mine Finger die Taste fühle.'),
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
            new Sentence('Guten Tag zusammen,'),
            new Sentence('Ich bin Dr. Christian Freiburghaus (auch bekannt als Herr Friburghuus oder Fribi) und war vier Jahre lang der Klassenlehrer der 4A. '),
            new Sentence('Die Klasse war sehr toll, motiviert und diskussionsfreudig und ich habe die Lektionen mit den Schülerinnen und Schülern meistens sehr genossen '),
            new Sentence('(ausser es haben alle über Schach statt Mathe diskutiert oder es zerbrach gerade eine Bierflasche auf dem Boden des Klassenzimmers).'),
            new Sentence('Besonders gefallen hat mir die Zusammenarbeit mit Herrn Joe L. Schneider im gemeinsamen Klassenchat. '),
            new Sentence('Die wichtige und regelmässige Nachfrage, inwiefern der Taschenrechner in der nächsten Prüfung verwendet werden darf, habe ich stets gerne kurz und knapp beantwortet. Auch einige Scherzantworten liess ich mir nicht entgehen.'),
            new Sentence('Ob mit mir 15 Minuten nach Beginn der Lektion noch zu Rechnen ist, weiss keiner so genau, auch ich nicht.'),
            new Sentence('In meiner Freizeit bin ich oft am musizieren mit meiner Band (deshalb auch die coolen Photos).'),
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
