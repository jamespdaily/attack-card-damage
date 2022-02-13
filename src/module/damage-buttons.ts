/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export default class DamageButton {
  damageLabel: string;
  criticalLabel: string;
  actor: Actor;
  weaponId: string;
  actions: Action;

  constructor(data) {
    const uuid = data.flags.pf2e.origin.uuid.split('.');

    this.damageLabel = game.i18n.localize('PF2E.DamageLabel');
    this.criticalLabel = game.i18n.localize('PF2E.CriticalDamageLabel');
    this.actor = game.actors.get(data.speaker.actor);
    this.weaponId = uuid[uuid.indexOf('Item') + 1];
  }

  rollDamage() {
    const weaponSlug = this.actor.physicalItems.filter((item) => item.data._id === this.weaponId)[0].data.data.slug;

    this.actor.data.data.actions
      .find((action) => weaponSlug === action.slug || this.weaponId === (action.item || action.sourceId))
      .damage({ event });
  }

  rollCritical() {
    const weaponSlug = this.actor.physicalItems.filter((item) => item.data._id === this.weaponId)[0].data.data.slug;

    this.actor.data.data.actions
      .find((action) => (weaponSlug === action.slug) | (this.weaponId === (action.item || action.sourceId)))
      .critical({ event });
  }
}
