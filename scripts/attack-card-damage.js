Hooks.on('renderChatMessage', (message, html, data) => {
  if (!message.data.flags.pf2e.context.type) return;

  if (message.data.flags.pf2e.context.type === 'attack-roll') {
    const damageButtons = $(`<div class="pf2e chat-card action-card"> <div class="card-buttons" data-visibility="owner"> <div class="card-buttons-two-column"> <button type="button" data-action="strikeDamage">Damage</button> <button type="button" data-action="strikeCritical">Critical</button> </div></div>`);
    const attackRollElement = html.find('.dice-total').append(damageButtons);
  }
});


