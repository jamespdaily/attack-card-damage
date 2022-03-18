/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
Hooks.once('ready', () => {
  const content = `\
          <large>
          <p>PF2e Attack Card Damage is now a part of the PF2e system by default.</p>
          <p>You should uninstall this module, it will no longer be maintained.</p>
          <p>I love you.</p>
          </large>`;

  new Dialog({
    title: 'PF2e Attack Card Damage',
    content,
    buttons: {
      ok: { icon: '<i class="fas fa-check"></i>', label: 'Understood' },
    },
  }).render(true);
});
