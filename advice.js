export const adviceContent = [
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
            {
                header: 'ny',
                title: '## ny',
                text: 'ny info',
            },
        ]
    },
    {
        name: '1-semester-info',
        description: 'Find relevante informationer om semesteret her.',
        content: [
            {
                header: 'Procesportfolio indhold',
                title: '## Procesportfolio indhold',
                text: 'Her mangler indhold',
            },
            {
                header: 'Header 2',
                title: '## Header 2',
                text: 'Her mangler indhold',
            },
            {
                header: 'Header 3',
                title: '## Header 3',
                text: 'Her mangler indhold',
            },
        ]
    },
    {
        name: 'anbefalinger',
        description: 'Bliv inspireret af diverse relevante multimediedesign anbefalinger.',
        content: [
            {
                header: 'Figma auto layout',
                title: '## Figma auto layout',
                text: 'Vil du gerne blive en haj til at arbejde effektivt i Figma? Så er auto layout lige noget for dig! \n',
            },
            {
                header: 'Header 2',
                title: '## Hello!!!!',
                text: '2',
            },
            {
                header: 'Header 3',
                title: '## Hello!!!!',
                text: '3',
            },
        ]
    },
]