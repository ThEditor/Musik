import SlashCommand, { SlashCommandOptions } from '@/lib/structures/SlashCommandPiece';
import { ApplyOptions } from '@sapphire/decorators';
import { CommandInteraction } from 'discord.js';

@ApplyOptions<SlashCommandOptions>({
  guildOnly: true,
  commandData: {
    name: 'play',
    description: 'Play a song',
    options: [
      {
        name: 'query',
        type: 'STRING',
        description: 'The song to queue',
        required: true
      }
    ]
  }
})
export default class PlaySlashCommand extends SlashCommand {
  async run(interaction: CommandInteraction) {
    interaction.reply({
      content: `You searched for ${interaction.options.getString('query')}`,
      ephemeral: true
    });
  }
}
