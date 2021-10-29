Hooks.on('renderChatMessage', (message, html) => {
  if (typeof message.data.flags.pf2e.context !== 'undefined') {
    if (message.data.flags.pf2e.context.type === 'attack-roll') {
      let actor = game.actors.get(message.data.speaker.actor);

      const criticalLabel = game.i18n.localize("PF2E.CriticalDamageLabel");
      const damageLabel = game.i18n.localize("PF2E.DamageLabel")
      const damageButton = $(`<button type="button" data-action="strikeDamage">${damageLabel}</button>`);
      const criticalButton = $(`<button type="button" data-action="strikeCritical">${criticalLabel}</button>`);

      const damageButtons = $(`<div class="pf2e chat-card action-card"> <div class="card-buttons" data-visibility="owner"> <div class="card-buttons-two-column"></div></div>`);

      damageButtons.find('.card-buttons-two-column').append(damageButton);
      damageButtons.find('.card-buttons-two-column').append(criticalButton);

      const attackRollElement = html.find('.dice-roll').after(damageButtons);

      damageButton.click(e => {
        let actor = game.actors.get(message.data.speaker.actor);
        let weaponName;
        const options = actor.getRollOptions(['all', 'damage-roll']);

        if (typeof message.data.flags.pf2e.modifierName !== 'undefined') {
          weaponName = (message.data.flags.pf2e.modifierName).split(": ")[1].toLowerCase();
        } 
        else 
        { 
          weaponName = (message.data.flags.pf2e.flavor).split(" - ")[0].toLowerCase(); 
        }
    
        e.stopPropagation();
    
        actor.data.data.actions.find(s => s.name.toLowerCase().includes(weaponName))?.damage(event, options);
      })

      criticalButton.click(e => {
        let actor = game.actors.get(message.data.speaker.actor);
        let weaponName;
        const options = actor.getRollOptions(['all', 'damage-roll']);

        if (typeof message.data.flags.pf2e.modifierName !== 'undefined') {
          weaponName = (message.data.flags.pf2e.modifierName).split(": ")[1].toLowerCase();
        } 
        else 
        { 
          weaponName = (message.data.flags.pf2e.flavor).split(" - ")[0].toLowerCase(); 
        }
    
        e.stopPropagation();
    
        actor.data.data.actions.find(s => s.name.toLowerCase().includes(weaponName))?.damage(event, options);
      })
    }
  }
});
