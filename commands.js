import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';
import { adviceContent } from './advice.js';

// New command
const NEED_ADVICE_COMMAND = {
  name: 'need-advice',
  description: 'Få råd, hvis du mangler hjælp.',
  type: 1, // Betyder at det er en tekst baseret komando som kommer op når brugeren skriver '/'
  integration_types: [0, 1], // Må installeres både på Server og på Brugeren
  contexts: [0, 1, 2], // Må bruges både i Servere, Chat med Bot og Private DMs

  options: adviceContent.map((currentCategory, currentIndex) => {
    return {
      type: 1, // Type 1 indicates a subcommand
      name: currentCategory.name,
      description: currentCategory.description,
      options: [
        {
          type: 4, // Type 4 indicates an integer
          name: 'råd',
          description: "Vælg det råd, som du ønsker",
          required: true, // betyder at brugeren skal vælge en værdi for denne option, før de kan sende kommandoen.
          choices: adviceContent[currentIndex].content.map((currentSubCategory, currentSubIndex) => {
            return {
              name: currentSubCategory.header,
              value: currentSubIndex,
            } // Det her genererer de mulige valgmuligheder (dropdown-menu) for den integer-option.
          })
        }
      ],
    };
  }),
};

const ALL_COMMANDS = [NEED_ADVICE_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
