Hooks.on('renderChatMessage', (message) => {
  console.log(message.data.flags.pf2e.context.type);
});