import 'dotenv/config';
import express from 'express';
import {
  ButtonStyleTypes,
  InteractionResponseFlags,
  InteractionResponseType,
  InteractionType,
  MessageComponentTypes,
  verifyKeyMiddleware,
} from 'discord-interactions';
import { adviceContent } from './advice.js';

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 * Parse request body and verifies incoming requests using discord-interactions package
 */
app.post('/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY), async (req, res) => {
  // Interaction id, type and data
  const { type, data } = req.body;

  /**
   * Handle verification requests
   */
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  /**
   * Handle slash command requests
   * See https://discord.com/developers/docs/interactions/application-commands#slash-commands
   */
  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;

    // "test" command
    if (name === 'test') {
      // Send a message into the channel where command was triggered from
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `hello world`,
        },
      });
    }

    // "need advice" command
    if (name === 'need-advice') {
      const { options } = data;

      // Bruger Array.find til at finde den category som har navnet som blev specificeret i options.
      const currentCategory = adviceContent.find((category) => {
        return category.name === options[0].name;
      })

      // Får den valge subcategoryIndex fra værdien i options... options... 
      // PS: Discord kunne godt gøre det her lidt mere nemt..
      const choosenSubCategoryIndex = options[0].options[0].value;

      // Får den valgte subcategory fra currentCategory, med choosenSubCategoryIndex
      const currentSubCategory = currentCategory.content[choosenSubCategoryIndex]
      
      // Får title og text fra currentSubCategory
      const title = currentSubCategory.title;
      const text = currentSubCategory.text;

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          // \n gør så det kommer på en 'new line'
          content: `${title}\n${text}`,
          flags: InteractionResponseFlags.EPHEMERAL // Gør så beskeder kun kan ses af brugeren som har kaldt kommandoen, gør beskeden midlertidig, så kun den bruger, der kaldte kommandoen, kan se den. Andre brugere i kanalen vil ikke kunne se denne besked.
        },
      });
    }

    console.error(`unknown command: ${name}`);
    return res.status(400).json({ error: 'unknown command' });
  }

  console.error('unknown interaction type', type);
  return res.status(400).json({ error: 'unknown interaction type' });
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});