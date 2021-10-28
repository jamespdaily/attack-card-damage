Hooks.on('renderChatMessage', (message, html, data) => {
  if (typeof message.data.flags.pf2e.context !== 'undefined') {
    if (message.data.flags.pf2e.context.type === 'attack-roll') {
      let actor = game.actors.get(message.data.speaker.actor);

      const damageButton = $(`<button type="button" data-action="strikeDamage">Damage</button>`);
      const criticalButton = $(`<button type="button" data-action="strikeCritical">Critical</button>`);

      const damageButtons = $(`<div class="pf2e chat-card action-card"> <div class="card-buttons" data-visibility="owner"> <div class="card-buttons-two-column"></div></div>`);

      damageButtons.find('.card-buttons-two-column').append(damageButton);
      damageButtons.find('.card-buttons-two-column').append(criticalButton);

      const attackRollElement = html.find('.dice-roll').after(damageButtons);

      damageButton.click(e => {
        let actor = game.actors.get(message.data.speaker.actor);
        let weaponId = (message.data.flags.pf2e.origin.uuid).split(".")[3]
        const options = actor.getRollOptions(['all', 'damage-roll']);

        console.log(weaponId);
        console.log(actor.data);
    
        e.stopPropagation();
    
        actor.data.data.actions.find(s => s.name.toLowerCase().includes('dagger'))?.damage(event, options);
      })

      criticalButton.click(e => {
        e.stopPropagation();
        console.log('clicky');
      })
    }
  }
});
