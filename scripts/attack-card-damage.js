Hooks.on('renderChatMessage', (message) => {
  if (!message.data.flags.pf2e.context.type) return;

  if (message.data.flags.pf2e.context.type === 'attack-roll') {
    console.log(message.data.flags.pf2e.context.type);
  }
});