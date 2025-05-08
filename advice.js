export const adviceContent = [
    // ************************************ DISCORD MARKDOWN ************************************
    {
        name: 'discord-markdown',
        description: 'Lær at tilføje formatering til dine tekstsamtaler.',
        content: [
            {
                header: 'Tekst formatering',
                title: '## Tekst formatering',
                text: `
Det er muligt at kombinere underline med de tre første tekst formateringstyper.

*Italics* = \`*Italics*\`
**Bold** = \`**Bold**\`
***Bold Italics*** = \`***Bold Italics***\`
__Underline__ = \`__Underline__\`
~~Gennemstreget~~ = \`~~Gennemstreget~~\` 

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Headers',
                title: '## Headers',
                text: `
For at oprette en header skal man gøre brug af et specifikt antal hashtags.

# Stor header
## Mellem header
### Lille header
\`# Stor header\`
\`## Mellem header\`
\`### Lille header\`

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Maskerede links',
                title: '## Maskerede links',
                text: `
Omgiv linkteksten med firkantede parenteser [ ], og selve linket med almindelige parenteser ( ).

\`[This is Google](https://www.google.com/)\`
[This is Google](https://www.google.com/)

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Lister',
                title: '## Lister',
                text: `
Du kan oprette punkt lister ved at gøre brug af - eller * efterfulgt af et mellemrum i starten af hver linje.
Se eksempler her:
\`- Listepunkt 1\`
\`- Listepunkt 2\`
\`* Listepunkt 3\`

- Listepunkt 1
- Listepunkt 2
* Listepunkt 3

Det er også muligt at lave indtryk i sin liste ved at tilføje 2 mellemrum før - eller * i starten af linjen.
Sådan her:
\`* Listepunkt 4\`
\`  * Indrykket listepunkt 1\`
\`  - Indrykket listepunkt 2\`

* Listepunkt 4
  * Indrykket listepunkt 1
  - Indrykket listepunkt 2

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Kodeblokke',
                title: '## Kodeblokke',
                text: `
Du kan lave dine egne kodeblokke ved at wrappe din tekst i backticks \`(\`\`)\`

\`Her er et eksempel på en enkelt linje kodeblok\`

Hvis du vil oprette en flerlinjet kodeklok, kan du gøre det ved at wrappe din tekst i tre backticks \`(\`\`\`)\`

\`\`\`Her er et eksempel på en flerlinjet kodeblok. Er den ikke flot? Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst. Mere tekst.\`\`\`

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Spoiler tags',
                title: '## Spoiler tags',
                text: `
Omgiv din tekst med to lodrette streger for at markere det som en spoiler \`||skriv tekst her||\`.
En spoiler gør at brugere skal klikke på teksten for at afsløre den.

Her kan du se et eksempel på en spoiler:
||BØH||

-# Har du brug for flere råd?
`,
            },
        ]
    },
    // ************************************ GRUNDLÆGGENDE DISCORD INFO ************************************
    {
        name: 'grundlæggende-discord-info',
        description: 'Lær de basale ting i og om discord.',
        content: [
            {
                header: 'Basic Discord Info',
                title: '## Basic Discord Info',
                text: `
Man kan forklare Discord som hvis det var en række bygninger (kaldet servere).Længst til venstre er der en liste over bygninger, som du har nøgler til at gå ind i. (Dette er servere, som du er medlem af).

Ejeren af bygningen kan give nøgler til hvem som helst (vedkommende der joiner en server). De kan også udpege andre personer, der er i stand til at uddele nøgler.

Ejeren af en server er den, der har oprettet den. Alle kan oprette en server, og du kan oprette mere end én. Når du starter, har du din egen server, som du kan invitere folk til.

Inden i hver bygning (server) er der rum (kaldet kanaler). Kanalerne for den server, du er i lige nu, er listet til venstre lige til højre for din liste af servere.

Der er to typer rum: tekstkanaler og stemmekanaler. Tekstkanaler er en kæmpe teksttråd, der typisk er synlig for alle med adgang til serveren. Stemmekanaler ligner et Zoom-opkald, hvor alle i rummet er i det samme opkald.

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Din brugerkonto og status',
                title: '## Din brugerkonto og status',
                text: `
Din Discord-konto er din personlige identitet på platformen.
- **Brugernavn og Tag:** Dit unikke Discord-navn består af et brugernavn og et #-tag med fire cifre (f.eks. \`BrugerNavn#1234\`). *(Bemærk: Discord er ved at rulle et nyt system ud, hvor tags fjernes, og brugernavne bliver unikke som \`@brugernavn\`)*. Du kan se dit fulde navn nederst til venstre.

- **Avatar/Profilbillede:** Det billede, der repræsenterer dig. Du kan ændre det i Brugerindstillinger (⚙️) -> "User Profile".

- **Status:** Fortæller andre, om you er tilgængelig. Klik på dit profilbillede nederst til venstre for at vælge:
  - \`Online\` (Grøn prik): Du er aktiv.
  - \`Idle\` (Gul måne): Du har været inaktiv ved computeren i et stykke tid.
  - \`Do Not Disturb\` (Rød cirkel med streg): Du modtager ingen notifikationer på skrivebordet.
  - \`Invisible\` (Grå prik): Du fremstår offline, men kan stadig bruge Discord fuldt ud.
  - \`Custom Status\`: Sæt din egen statusbesked med en valgfri emoji.

- **Brugerindstillinger (⚙️):** Tandhjulet nederst til venstre åbner dine personlige indstillinger, hvor du kan justere alt fra profil og privatliv til stemme/video, notifikationer, udseende og meget mere.

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Håndtering af notifikationer',
                title: '## Håndtering af notifikationer',
                text: `
Discord kan sende mange notifikationer. Her er hvordan du styrer dem:

- **Notifikationstyper:** Du får typisk en notifikation (lyd og/eller visuelt mærke), når nogen nævner dig specifikt (\`@ditnavn\`), nævner en rolle du har (\`@rollenavn\`), eller bruger \`@everyone\`/\`@here\`. &nbsp;
- **Mute en Server:** Hvis en server er for støjende, kan du højreklikke på serverikonet i venstre side -> "Gør kanal stum" -> vælg hvor længe (f.eks. "Indtil jeg slår det til igen"). Dette dæmper de fleste notifikationer fra serveren, men du vil stadig se et mærke, hvis du bliver direkte nævnt. &ThinSpace;
- **Mute en Kanal:** Hvis en specifik kanal er for aktiv, højreklik på kanalnavnet i kanallisten -> "Gør kanal stum" -> vælg varighed. Nyttigt for f.eks. off-topic eller andre gruppers kanaler. &ensp;
- **Notifikationsindstillinger (Server):** Højreklik på serverikonet -> "Notification Settings". Her kan du finjustere, om du vil have notifikationer for alle beskeder, kun @mentions, eller ingen. Du kan også undertrykke \`@everyone\` og \`@here\` for den specifikke server. &emsp;
- **Globale Notifikationsindstillinger:** Findes i Brugerindstillinger (⚙️) -> "Notifications". Her styrer du de overordnede indstillinger for lyde, skrivebordsnotifikationer, ulæst-mærker osv.

-# Har du brug for flere råd?
`,
            },
        ]
    },
    // ************************************ 1 SEMESTER INFO ************************************
    {
        name: '1-semester-info',
        description: 'Find relevante informationer om semesteret her.',
        content: [
            {
                header: 'Procesportfolio indhold',
                title: '## Procesportfolio indhold',
                text: `
Dit procesportfolio er et **vigtigt værktøj** til at dokumentere din proces, din udvikling og dine refleksioner gennem dit studie. Det er en del af eksamen på **alle 3 semestre**. Formålet er at vise **vejen til målet**, resultatet er sekundært i procesdokumentationen.

Vi anbefaler kraftigt, at du bruger det **løbende** og ikke venter til sidst!

**Format og Tekniske Krav:**
- Skal laves i **WordPress**.
- Skal installeres som et **subdomæne** kaldet "**proces**" under dit primære domæne (f.eks. \`proces.ditdomaene.nu\`).

**Nødvendige Menupunkter:**
- **1.semester:** Vis proces fra 1. semester.
- **2.semester:** Vis proces fra 2. semester (senere).
- **3.semester:** Vis proces fra 3. semester (senere).
- **Studiemakker:** Reflekter over møder/feedback fra din studiegruppe.
- **Om mig:** Billede og tekst om dig selv/grund til MMD.

**Krav til Hvert Enkelt Indlæg**
*Hvert indlæg skal som minimum indeholde:*
- En **titel**.
- En **procesbeskrivelse** (teorier/metoder/værktøjer).
- **Billeder**, der viser processen.
- **Reflektioner** over:
    - Hvad du har lært.
    - Din proces (nemt/svært?).
    - Hvordan viden er tilegnet.
    - Næste trin.
    - **OBS: Reflektioner SKAL være dybdegående, ikke kun et par linjer!**

**Dette SKAL der skrives om i procesportfolio på 1. sem**
*Vis proces fra:*
- Alle **projekter** (Intro, P1, P2, P3).
- Alle **workshops** (Tone of Voice, Prototyping, InDesign, MovingArt, Animation).
- **Individuelle opgaver**.
Suppler gerne med noter/fritidsprojekter.

**Husk:** Link til procesportfolio skal stå på forsiden af dit Afleveringsdokument!

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Effektive Studieteknikker',
                title: '## Effektive Studieteknikker',
                text: `
At finde gode studieteknikker kan gøre en stor forskel for din læring og dit udbytte af studiet. Her er et par ideer:

* **Pomodoro-teknikken:** Arbejd fokuseret i 25 minutter, hold 5 minutters pause. Gentag. Efter 4 "pomodoros", tag en længere pause.
* **Aktiv genkaldelse (Active Recall):** I stedet for passivt at læse noter, prøv at genfortælle stoffet for dig selv eller en medstuderende uden at kigge.
* **Mindmaps:** Visualiser komplekse emner og deres sammenhænge.
* **Planlægning:** Lav en realistisk studieplan og overhold den. Bryd store opgaver ned i mindre, overkommelige dele.
* **Find din læringsstil:** Er du visuel, auditiv, kinæstetisk? Tilpas dine metoder.

**VIGTIG PÅMINDELSE (fra dine undervisere):**
Inden du stiller et spørgsmål til en underviser, så spørg dig selv:
1.  Har jeg læst **projektbeskrivelsen** grundigt?
2.  Har jeg konsulteret den **akademiske metode PDF** (hvis relevant)?
3.  Har jeg tjekket **studieordningen**?
4.  Har jeg søgt information på **Itslearning** eller **mitUCL**?

*At lære at finde information selvstændigt er en **kernekompetence** på en videregående uddannelse. Det er okay at være usikker, men vis initiativ og prøv først! Når du så har gjort en indsats, er underviserne selvfølgelig klar til at hjælpe med det, du stadig er i tvivl om.*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Bliv klogere på din usikkerhed',
                title: '## Bliv klogere på din usikkerhed',
                text: `
Det er helt normalt at føle sig usikker som studerende - især når man starter på noget nyt, eller når kravene stiger. Du er bestemt ikke alene!

**Husk på:**
* **Alle har det svært med noget:** Ingen er ekspert i alt fra dag ét. Det er en del af læringsprocessen at møde udfordringer.
* **Sammenlign dig ikke for meget med andre:** Alle lærer i forskelligt tempo og har forskellige styrker. Fokuser på din egen udvikling.
* **Fejl er en del af læringen:** Man lærer ofte mest af de fejl, man begår. Vær ikke bange for at prøve og fejle.
* **Tal om det:** Snak med dine medstuderende, venner, familie eller en studievejleder, hvis usikkerheden fylder for meget. Ofte hjælper det at dele sine tanker.
* **Små succeser tæller:** Ros dig selv for de små fremskridt, du gør. Det styrker selvtilliden.

*Husk, at dine undervisere er der for at hjælpe dig med at lære og udvikle dig. De forventer ikke, at du kan alt, men de forventer, at du prøver og er åben for at lære.*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Bange for eksamen?',
                title: '## Bange for eksamen?',
                text: `
Eksamensnervøsitet er meget almindeligt. Her er et par råd til at håndtere det:

* **God forberedelse:** Jo bedre forberedt du er fagligt, jo mere tryg vil du typisk føle dig. Lav en god læseplan.
* **Kend rammerne:** Sæt dig ind i eksamensformen, varighed, hjælpemidler osv. Det fjerner unødig usikkerhed.
* **Øv dig:** Hvis muligt, øv dig på gamle eksamenssæt eller lignende opgaver.
* **Tal om det:** Del dine bekymringer med medstuderende, venner eller studievejledningen. Det kan lette presset at vide, man ikke er alene.
* **Plej dig selv:** Sørg for nok søvn, sund mad og motion op til eksamen. Undgå for meget koffein.
* **På selve dagen:** Kom i god tid. Træk vejret dybt. Husk, at censor og eksaminator er der for at høre, hvad du kan - ikke for at "fælde" dig.
* **Husk, det er okay at være nervøs:** Lidt nervøsitet kan endda skærpe din koncentration.

*Hvis eksamensangsten er meget overvældende, så tøv ikke med at kontakte studievejledningen eller SPS-vejlederen. De kan have redskaber og støtte at tilbyde.*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Projekt 3',
                title: '## Projekt 3',
                text: `
Dette er din individuelle, mundtlige 1. semesters eksamen, baseret på din **Procesportfolio**, **Præsentationsportfolio** og **Plakat**.

**Vigtige datoer:**
- Aflevering: 28/05/2025 kl. 13.00 (WISEFLOW)
- Ordinær Eksamen: 10/06/2025 & 13/06/2025
- Silent Feedback: 05/05/2025

**Afleveringsliste (ALT skal med for at bestå!):**
- PDF Afleveringsdokument (InDesign, m/ refleksion max 3600 anslag)
- Link til Procesportfolio (på Afleveringsdok)
- Link til Præsentationsportfolio (på Afleveringsdok)
- Link til GitHub repo (på Afleveringsdok)
- ZIP fil med Præsentationsportfolio (Kode + indhold, WiseFlow)
- PDF Plakat (WiseFlow)
- Marketingvideo fra P1 (WiseFlow)

**!!! VIGTIGT !!!**
ALLE afleveringer SKAL med, og ALLE links på afleveringsdokumentet SKAL virke for at bestå! En enkelt fejl her dumper dig. Du må IKKE ændre efter deadline.

**Præsentationsportfolio (Krav):**
- Kodes fra bunden i HTML/CSS (JS ok, **ingen frameworks/libraries!**).
- Skal **validere** (W3C), være **responsiv**, bruge **BEM** & **CRAP**. Min. 6 projekter, brand/skills, kontaktinfo.

**Plakat (Krav):**
- PDF (InDesign/Illustrator).
- Vis **PROCES, TEORI** & **BEGRUNDELSE** for Præsentationsportfolio vha. **Design Thinking**. Skal **PRINTES** (A0-A3) til eksamen.
- **AI MÅ IKKE BRUGES TIL INDHOLD PÅ PLAKATEN!**

**Brug af Generativ AI:**
- Tilladt som **værktøj** (ikke plakatindhold).
- **SKAL DOKUMENTERES** som bilag WiseFlow: Prompts + hvordan brugt. Nummerer prompts.

**Studiegruppe:**
- Selvom individuelt, SKAL I danne en studiegruppe til sparring/forberedelse.

**Eksamen (30 min):**
- 10 min Præsentation (Proces via plakat, forbedringer Præsentationsportfolio).
- 10 min Eksamination (Spørgsmål til afleveringer + **HELE SEMESTERETS PENSUM/teori!**).
- 10 min Votering.

**Gode råd:**
- Brug Design Thinking. Øv præsentation. Vær klar til pensum-spørgsmål. **Tjek alle links igen og igen!** Dokumenter AI-brug korrekt.

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Akademisk Rapport & Metode',
                title: '## Akademisk Rapport & Metode',
                text: `
At skrive en god akademisk rapport kræver øvelse. Her er nogle fokuspunkter:

* **Problemformulering:** En klar og præcis problemformulering er fundamentet for din rapport.
* **Struktur:** Følg den gængse struktur for akademiske rapporter (indledning, metode, analyse, konklusion osv.). Tjek jeres "Akademisk Metode PDF" for specifikke krav.
* **Metodeafsnit:** Beskriv grundigt, hvilke metoder I har brugt til at indsamle og analysere data, og hvorfor I har valgt netop disse metoder.
* **Kildekritik og referencer:** Vær omhyggelig med at angive jeres kilder korrekt (følg den påkrævede reference-stil).
* **Akademisk sprog:** Vær objektiv, præcis og velbegrundet i dine formuleringer.

**Husk:** Den **"Akademisk Metode PDF"**, I har fået udleveret, er jeres bedste ven her! Den indeholder detaljerede vejledninger og krav.

**PDF'en kan findes [her](https://esdhweb.ucl.dk/D23-2298529.pdf).**

*Tip: Start med en klar disposition/struktur for rapporten. Det gør skriveprocessen meget nemmere.*

-# Har du brug for flere råd?
`,
            },
        ]
    },
    // ************************************ ANBEFALINGER ************************************
    {
        name: 'anbefalinger',
        description: 'Bliv inspireret af diverse relevante multimediedesign anbefalinger.',
        content: [
            {
                header: 'Figma: auto layout',
                title: '## Figma: auto layout',
                text: `
Vil du bygge brugerflader i Figma, der nemt tilpasser sig ændringer? Så er **Auto Layout** din bedste ven!

**Hvad er det?** En feature i Figma, der lader dig skabe dynamiske beholdere (frames) med indhold, der automatisk justerer placering og afstand baseret på indholdets størrelse eller containerens størrelse. Perfekt til lister, knapper, menuer og responsive sektioner.

**Hvorfor bruge det?** Gør design hurtigere, sikrer konsistens i afstande, og gør det lettere at lave design, der skal fungere på forskellige skærmstørrelser.

**Kom i gang:**
1. Vælg de elementer du vil samle (f.eks. en knap med tekst og ikon).
2. Tryk **Shift + A**. En Auto Layout frame er skabt!
3. Leg med indstillingerne i sidepanelet: Retning (horisontal/vertikal), afstand, padding, justering, "hug content", "fixed/fill".

**Lær mere:** Søg efter "**Figma Auto Layout tutorial for beginners**" på YouTube. Figmas officielle dokumentation er også en god ressource. Prøv at genskabe simple komponenter som knapper eller kort med Auto Layout.

**Tip:** Hvis du får godt styr på auto-layout og opbygger mock-ups med det kan du gøre brug af Figma's 'Dev Tool' som fortæller dig den CSS som skal til for at lave de forskellige elementer - det er vildt smart til når man skal kode sin mock-up. 

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Intro til Motion Graphics i After Effects',
                title: '## Intro til Motion Graphics i After Effects',
                text: `
Vil du pifte din Projekt 1 video op eller lære at lave fede animationer til web/sociale medier? **Adobe After Effects** (tilgængelig via UCL) er standarden for motion graphics og visuelle effekter!

**Hvad er det?** Et program til at skabe animationer, effekter og composite video. Brugt i film, TV, reklamer, web.

**Hvorfor lære basics?** Gør din P1 video mere dynamisk (animeret tekst, grafik). Lær at lave simple logo-animationer, introer eller overgange. Værdifuld skill!

**Kom i gang:**
1. Åbn After Effects, opret projekt/komposition ("lærred").
2. Importer filer, de ligger som "layers" i tidslinjen.
3. Lær at arbejde med **keyframes**. En keyframe gemmer en egenskabs værdi (position, skala, rotation, opacity) på et tidspunkt.
4. Sæt keyframes ved to tidspunkter - AE animerer overgangen.
5. Øv simple animationer: bevægelse (Position), størrelse (Scale), drejning (Rotation), gennemsigtighed (Opacity).

**Lær mere:** Adobes egne hjemmeside har mange tutorials. Søg på "**After Effects motion graphics tutorial for beginners**" eller "**simple text animation After Effects tutorial**" på YouTube. Start småt.

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Illustrator Pen Tool',
                title: '## Illustrator Pen Tool',
                text: `
Vil du tegne egne ikoner, logoer eller illustrationer med præcision? **Pen Tool (P)** i Illustrator er grundlaget for at skabe skalerbar vektorgrafik!

**Hvad er det?** Værktøjet til at tegne vektorkurver (paths) punkt for punkt. Resultatet er skarpe linjer og former, der kan skaleres i det uendelige uden kvalitetstab.

**Hvorfor bruge det?** Essentiel for logodesign, illustration, tracing af skitser/billeder, og opbygning af komplekse former, du ikke kan lave med standardværktøjer. Kræver øvelse, men er uundværligt!

**Kom i gang:**
1.  Vælg Pen Tool (P).
2.  Klik for at sætte lige punkter (ankerpunkter).
3.  Klik og TRÆK for at sætte kurvede punkter (du ser "håndtag"). Træk i håndtagene for at justere kurven.
4.  Luk en form ved at klikke på det første punkt igen.
5.  Hold **Alt/Option** nede for at knække et håndtag og lave et skarpt hjørne efter en kurve. Hold **Ctrl/Cmd** nede for midlertidigt at skifte til Direct Selection Tool (A) og flytte punkter/håndtag.

**Lær mere:** Adobes egne tutorials er gode. Søg på "**Illustrator Pen Tool tutorial for beginners**" eller "**Master Pen Tool Illustrator**" på YouTube. Der findes også online "Pen Tool games" der hjælper dig med at øve. Øv dig i at tegne simple former.

-# Har du brug for flere råd?
`,
            },
            {
                header: 'InDesign Styles',
                title: '## InDesign Styles',
                text: `
Skal du lave en rapport, plakat med meget tekst, eller andet layout med ensartet typografi? Stop med at formatere hver overskrift/brødtekst manuelt! Brug **Paragraph Styles** (Afgr. typografi) og **Character Styles** (Tegn typografi) i InDesign!

**Hvad er det?** Gemte sæt af formateringsindstillinger (skrifttype, størrelse, farve, afstand, justering etc.) som du kan anvende på tekst. Paragraph Styles gælder for hele afsnit (paragraphs), Character Styles gælder for specifikke ord/sætninger i et afsnit (f.eks. fed skrift, kursiv).

**Hvorfor bruge det?** Sikrer 100% ensartethed i din typografi, sparer enormt meget tid (anvend med ét klik), og gør det super nemt at opdatere formatering i hele dokumentet ved kun at ændre ét style. Essentiel for effektive layouts!

**Kom i gang:**
1.  Åbn panelerne: Vælg menuen **Window > Styles > Paragraph Styles** og **Character Styles**.
2.  Klik på "Opret ny typografi" (eller højreklik/menu) i panelet. Dobbeltklik for at redigere indstillingerne.
3.  Definer din typografi (f.eks. "H1", "Brødtekst", "Fremhæv").
4.  Anvend en Paragraph Style ved at placere markøren i afsnittet og klikke på stylen i panelet. Anvend en Character Style ved at markere ord/sætning og klikke på stylen.
5.  Skal du ændre noget? Dobbeltklik på stylen i panelet, lav ændringen, og ALLE steder den style er brugt, opdateres automatisk!

**Lær mere:** Adobes egne tutorials. Søg på "**InDesign Paragraph Styles tutorial**" eller "**InDesign Character Styles tutorial**" på YouTube. Øv dig ved at opsætte styles til en simpel rapport eller folder.

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Photoshop Layer Masks',
                title: '## Photoshop Layer Masks',
                text: `
Skal du kombinere billeder, fritlægge motiver uden at ødelægge originalen, eller kun justere dele af et billede? Lær at bruge **Layer Masks** (Lagmasker) i Photoshop!

**Hvad er det?** En "maske" du tilføjer til et lag. Den bestemmer, hvilke dele af laget der er synlige, og hvilke der er skjult. **Sort skjuler**, **hvid viser**, og gråtoner giver delvis gennemsigtighed. Det geniale er, at det er **ikke-destruktivt** - informationen i laget slettes ikke, den er bare skjult af masken.

**Hvorfor bruge det?** Uundværligt for fotomanipulation, compositing (sammensætning af billeder), præcise justeringer (f.eks. lysstyrke/kontrast kun på et område), og fritlægning af motiver, hvor du nemt kan rette masken bagefter. Giver fleksibilitet!

**Kom i gang:**
1.  Vælg det lag, du vil maskere.
2.  Klik på "Add Layer Mask" ikonet (et rektangel med en cirkel indeni) nederst i Layers-panelet. En hvid maske-thumbnail dukker op ved siden af lagets preview. Hele laget er nu synligt.
3.  Sørg for masken (den hvide/sorte thumbnail) er valgt i Layers-panelet (den har en ramme omkring sig).
4.  Vælg Brush Tool (B). Vælg farven **sort** og mal på billedet der hvor du vil skjule lagets indhold. Vælg farven **hvid** og mal der hvor du vil have indholdet til at være synligt igen. Brug gråtoner for gennemsigtighed.
5.  Skift mellem sort og hvid (genvej X) for nemt at skjule/vise.

**Lær mere:** Adobes egne tutorials er fantastiske. Søg på "**Photoshop Layer Mask tutorial for beginners**" eller "**Non-destructive editing Photoshop**" på YouTube. Prøv at lægge to billeder sammen vha. masker.

-# Har du brug for flere råd?
`,
            },
            {
                header: 'CSS Variables (:root)',
                title: '## CSS Variables (:root)',
                text: `
Vil du gøre din CSS mere organiseret, nemmere at opdatere og undgå at gentage værdier (som farvekoder eller skriftstørrelser) overalt? Lær at bruge **CSS Variables** (også kaldet Custom Properties) sammen med \`:root\`!

**Hvad er det?** CSS Variables lader dig definere dine egne egenskaber (variabler) i CSS, som du kan genbruge i hele dit stylesheet. \`:root\` er en pseudo-klasse, der repræsenterer dokumentets øverste element (\`<html>\`), og er det mest almindelige sted at definere globale CSS variables.

**Hvorfor bruge det?**
1.  **Centralisering:** Saml f.eks. alle dine brandfarver ét sted.
2.  **Nem opdatering:** Skal du skifte en farve? Ændr kun værdien ét sted i \`:root\`, og det opdateres overalt, hvor variablen bruges.
3.  **Konsistens:** Sikrer at du bruger de samme værdier konsekvent.
4.  **Mindre gentagelse:** Gør din CSS "Tør" (DRY - Don't Repeat Yourself).

**Kom i gang:**
1.  I starten af din CSS-fil, tilføj en \`:root { ... }\` blok.
2.  Definer dine variabler indeni med et dobbelt-bindestreg prefix: \`--navn-på-variabel: værdi;\` (f.eks. \`--brand-blue: #2196F3;\`). Giv variablerne sigende navne!
3.  Brug variablen andre steder i din CSS med funktionen \`var()\`: \`selector { property: var(--navn-på-variabel); }\` (f.eks. \`background-color: var(--brand-blue);\`).

**Lær mere:** MDN Web Docs har en fantastisk guide til CSS Custom Properties. Søg på "**CSS-Tricks CSS Variables**" eller "**CSS variables tutorial for beginners**" på YouTube. Begynd med at definere dine primære farver og skriftstørrelser som variabler.

-# Har du brug for flere råd?
`,
            },
        ]
    },
    // ************************************ UCL ************************************
    {
        name: 'ucl',
        description: 'Find relevante informationer om UCL og studiet her.',
        content: [
            {
                header: 'Multimediedesign uddannelsen',
                title: '## Multimediedesign uddannelsen',
                text: `
Multimediedesignuddannelsen er en 2-årig erhvervsakademiuddannelse, der fokuserer på den digitale designproces fra idé til færdigt produkt. Uddannelsen giver dig værktøjer til at udvikle innovative og brugervenlige digitale løsninger, såsom hjemmesider, digitale interfaces og interaktive oplevelser.

**På uddannelsen lærer du blandt andet om:**
* **Brugeroplevelsesdesign (UX):** Metoder til at forstå brugernes behov og skabe intuitive løsninger.
* **Brugergrænsefladedesign (UI):** Design af æstetiske og funktionelle brugergrænseflader.
* **Indholdsproduktion:** Produktion af digitalt indhold i form af tekst, billeder og video ved hjælp af Adobe-programmer.
* **Programmering:** Grundlæggende programmering i HTML, CSS og JavaScript.
* **Forretningsforståelse og projektledelse:** Forståelse for værdiskabelse og overblik i projekter.
* **Teknologi:** Generel forståelse for bagvedliggende teknologier.

Uddannelsen består af en fællesdel og en specialiseringsdel på 3. semester, hvor du kan vælge mellem **Content Produktion** eller **Front-end**.

**Efter multimediedesignuddannelsen har du flere muligheder:**
* **Job:** Du kan arbejde som multimediedesigner med en bred vifte af opgaver inden for digital design og udvikling.
* **Videreuddannelse:** Du har mulighed for at tage en 1,5-årig professionsbacheloroverbygning inden for områder som Digital Konceptudvikling, E-handel, IT-sikkerhed eller Webudvikling hos UCL. Du kan også læse videre på en kandidatuddannelse på universitetet.

**Har du spørgsmål om uddannelsen?**
Kontakt UCL på:
📞 \`63 18 30 00\`
📧 \`ucl@ucl.dk\`
🗓️ Mandag - torsdag kl. 07.30-15.00
🗓️ Fredag kl. 07.30-14.00

*Husk, det er okay at have spørgsmål om uddannelsen - det viser bare, at du er engageret!*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'UCL Kontakter',
                title: '## UCL Kontakter',
                text: `
Har du brug for at komme i kontakt med en bestemt afdeling eller person på UCL?
Den generelle kontaktinformation er:
📞 \`63 18 30 00\`
📧 \`ucl@ucl.dk\`

For specifikke henvendelser, f.eks. til studievejledningen, SPS-vejlederen eller din uddannelsesleder, kan du ofte finde direkte kontaktoplysninger på [mitUCL](https://www.mitucl.dk) eller via din uddannelsesside på Itslearning.

*Tøv ikke med at række ud, hvis du har brug for hjælp eller vejledning. Der er mange på UCL, der er klar til at støtte dig.*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'SPS (Specialpædagogisk Støtte)',
                title: '## SPS (Specialpædagogisk Støtte)',
                text: `
SPS står for Specialpædagogisk Støtte og er en ordning, der skal sikre, at studerende med en fysisk eller psykisk funktionsnedsættelse kan gennemføre en uddannelse på lige fod med andre.
Støtten kan f.eks. være:
* IT-hjælpemidler (f.eks. oplæsningssoftware)
* Studiestøttetimer
* Særlige vilkår til eksamen

**Hvem kan søge?**
Hvis du har en dokumenteret funktionsnedsættelse (f.eks. ordblindhed, ADHD, angst, kronisk sygdom), kan du være berettiget til SPS.

**Hvordan søger man?**
Kontakt SPS-vejlederen på UCL for at høre mere om dine muligheder og ansøgningsprocessen. Du finder typisk information på [mitUCL](https://www.mitucl.dk) under "Støttemuligheder" eller ved at søge på SPS.

*Det er vigtigt at søge i god tid, da sagsbehandlingen kan tage tid. At få den rette støtte kan gøre en stor forskel for dit studieforløb.*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Studieordningen',
                title: '## Studieordningen',
                text: `
Studieordningen er et vigtigt dokument, der beskriver rammerne og reglerne for din uddannelse. Den indeholder information om:
* Uddannelsens formål og struktur
* Læringsmål for de enkelte fag og semestre
* Eksamenskrav og bedømmelseskriterier
* Regler for merit, fravær, og meget mere.

Du finder studieordningen for Multimediedesign (og andre uddannelser) på UCL's hjemmeside, ofte under "Uddannelser" -> din specifikke uddannelse -> "Studieinformation" eller lignende. Den kan også være tilgængelig på [mitUCL](https://www.mitucl.dk).

**Tip fra din underviser:** *Mange af de spørgsmål, studerende stiller, kan findes i studieordningen! Gør det til en vane at tjekke den, før du spørger. Det sparer både din og underviserens tid, og du lærer at navigere i vigtige dokumenter.*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Studievejledningen',
                title: '## Studievejledningen',
                text: `
Studievejledningen på UCL er der for at hjælpe dig med spørgsmål og udfordringer relateret til dit studie. De kan vejlede om:
* Studievalg og karrieremuligheder
* Studieteknik og studieplanlægning
* Personlige eller sociale udfordringer, der påvirker studiet
* Orlov, studieskift eller udmeldelse
* SPS og andre støttemuligheder

Du kan typisk finde kontaktoplysninger og træffetider for studievejledningen på [mitUCL](https://www.mitucl.dk) eller via UCL's hovedhjemmeside.

*Det er helt okay at have brug for vejledning undervejs i studiet. Studievejlederne har tavshedspligt og er vant til at tale om mange forskellige problemstillinger.*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Bookning af lokaler',
                title: '## Bookning af lokaler',
                text: `
Har du brug for et grupperum eller et lokale til projektarbejde? På UCL kan studerende ofte booke lokaler via et online system.
Book et grupperum på [TimeEdit](https://cloud.timeedit.net/ucl/web/?en=t). 

**Steps:**
1. Åbn TimeEdit
2. Tryk på "Bookning - for studerende"
3. Tryk på "Bookning af gruppearbejdsplads UCL Erhvervsakademi og Professionshøjskole"
4. I søgefeltet ved "Gruppearbejdsplads" skriv "see" for Seebladsgade 
5. Tryk på "Dag" knappen til højre for at få et bedre overblik af ledighed
6. For at booke: tryk på et specifikt tidsrum for et specifikt grupperum, og tilpas tiden i pop-up'en. 
7. Tryk reserver! så er det klaret;)


**Vigtige informationer om bookning:**
* Det er ikke nødvendigt at skrive noget i kommentaren når du booker. 
* Hvis det passer bedre for din gruppe og dig at booke et lokale på NBA (Niels Bohrs Allé) kan i sagtens gøre det. Blot skriv "nba" i stedet for "see" i søgefeltet.
* Det er kun muligt at booket et lokale i 4 timer.
* Man kan ikke have flere bookinger på samme tid, og hvis man har en bookning kan man først foretage den næste når det er dagen efter den dag man først bookede. 
* Du kan altid annulere din bookning ved at åbne TimeEdit -> Tryk "Bookning - for studerende" -> Tryk "Mine reservationer" -> Vælg din bookning og tryk "Rediger/ Annulere reservation".

*God planlægning af gruppemøder starter med et godt mødested!*

-# Har du brug for flere råd?
`,
            },
            {
                header: 'Parkering ved UCL',
                title: '## Parkering ved UCL',
                text: `
Parkeringsforholdene varierer afhængigt af UCL's campus. 

Du kan parkere gratis fra kl. 05.00-00.00 alle dage på Seebladsgade. 

Det eneste du skal gøre, er at [registrere din bil](https://p-seebladsgade.ucl.dk/login?ReturnUrl=%2F). Du logger ind med dit almindelige brugernavn og kode.

**Vigtige informationer:**
* P-tilladelsen er kun oprettet og gyldig med en modtaget e-mail kvittering fra APCOA PARKING. Bemærk, din p-tilladelse ophører automatisk ved endt studie. Du modtager ikke en ophørsmail fra APCOA PARKING.
* Der kan registreres én bil/motorcykel pr. person ad gangen.
* Opdatering og ændring af nummerplade sker via linket i kvitteringen fra APCOA PARKING eller [på siden her](https://p-seebladsgade.ucl.dk/login?ReturnUrl=%2F).
* Du må parkere på de almindelige pladser med område 3510, dog ikke gæsterækken med områdenummer 3686 – dette kan medføre et kontrolgebyr.

Mangler du flere informationer om parkering på Seebladsgade kan du gå på [mitUCL](https://www.mitucl.dk).

*Undgå en træls P-bøde - tjek reglerne, før du parkerer!*

-# Har du brug for flere råd?
`,
            },
        ]
    },
]



// {
//     header: 'Titel',
//     title: '## Titel',
//     text: `

// -# Har du brug for flere råd?
// `,
// },

/**
 * 
**Nødvendige Menupunkter**
* **1. semester:** Vis din proces fra 1. semester her.
* **2. semester:** Vis din proces fra 2. semester her (indhold kommer på senere semestre).
* **3. semester:** Vis din proces fra 3. semester her (indhold kommer på senere semestre).
* **Studiemakker:** Reflekter over møder, hjælp og feedback fra din studiegruppe/studiemakkere.
* **Om mig:** Minimum et billede af dig og en kort tekst om hvem du er, og hvorfor du læser MMD.

**Krav til Hvert Enkelt Blogindlæg/Indlæg**
*Hvert indlæg i din procesportfolio skal som minimum indeholde:*
* En titel
* En procesbeskrivelse af, hvordan du har arbejdet med teorier, metoder og værktøjer.
* Billeder, der viser processen og hjælper læseren med at forstå.
* Refleksioner over: 
  - Hvad du har lært.
  - Din proces - hvad var nemt/svært?
  - Hvordan har du tilegnet dig viden til at løse opgaven?
  - Hvad er næste trin?
  - **OBS:** Refleksionsdelen er **VIRKELIG VIGTIG**. To linjer er **ikke** nok. Gå i dybden med dine tanker og læringsprocesser.

**Dette SKAL der skrives om i procesportfolio på 1.sem**
*Dit procesportfolio skal som minimum vise processen fra:*
* Alle de projekter, du har arbejdet på i semesteret (IntroProjekt, Projekt 1, Projekt 2, Projekt 3).
* Alle workshops (Tone of Voice, Prototyping, InDesign, MovingArt, Animation).
* Individuelle opgaver, du skulle aflevere.
* (Du må gerne supplere med noter, fritidsprojekter eller andet MMD-relevant indhold, der viser din proces.)

**Husk:** Linket til din procesportfolio skal stå på forsiden af dit Afleveringsdokument til Projekt 3!

-# Har du brug for flere råd?
 */