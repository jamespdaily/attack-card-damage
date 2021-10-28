Hooks.on('renderChatMessage', (message, html, data) => {
  if (!message.data.flags.pf2e.context.type) return;

  if (message.data.flags.pf2e.context.type === 'attack-roll') {
    const attackRollElement = html.find('.dice-total').append('asdfasdf');
  }
});


