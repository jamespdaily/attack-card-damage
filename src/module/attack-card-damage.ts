import { preloadTemplates } from './preloadTemplates';
import DamageButton from './damage-buttons';

Hooks.once('init', async () => {
  await preloadTemplates();
});

Hooks.on('renderChatMessage', async (message, html) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (typeof message.data.flags.pf2e.context === 'undefined') {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (message.data.flags.pf2e.context.type !== 'attack-roll') {
    return;
  }

  const buttonTemplate = 'modules/attack-card-damage/templates/damage-buttons.html';
  const attackCardData = new DamageButton(message.data);
  const attackCardHTML = await renderTemplate(buttonTemplate, attackCardData);
  html.find('.dice-roll').after(attackCardHTML);

  html[0].querySelector('#chatCardDamageButton')?.addEventListener('click', () => {
    attackCardData.rollDamage();
  });

  html[0].querySelector('#chatCardCriticalButton')?.addEventListener('click', () => {
    attackCardData.rollCritical();
  });
});
