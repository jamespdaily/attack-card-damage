/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export default class DamageButton {
  damageLabel: string;
  criticalLabel: string;
  actor: Actor;
  weaponId: string;
  weaponSlug: string;
  actions: Action;

  constructor(data) {
    const uuid = data.flags.pf2e.origin.uuid.split('.');
    const actor = game.actors.get(data.speaker.actor);
    const weaponId = uuid[uuid.indexOf('Item') + 1];

    this.damageLabel = game.i18n.localize('PF2E.DamageLabel');
    this.criticalLabel = game.i18n.localize('PF2E.CriticalDamageLabel');
    this.actor = actor;
    this.weaponId = weaponId;

    if (data.flags.pf2e.modifierName === 'Strike: Unarmed Attack') {
      this.weaponSlug = 'basic-unarmed';
    } else {
      this.weaponSlug = actor.physicalItems?.filter((item) => item.data._id === weaponId)[0]?.data.data.slug;
    }
  }

  rollDamage() {
    this.actor.data.data.actions.find(
      (action) => this.weaponSlug === action.slug || this.weaponId === (action.item || action.sourceId),
    );
  }

  rollCritical() {
    this.actor.data.data.actions.find(
      (action) => (this.weaponSlug === action.slug) | (this.weaponId === (action.item || action.sourceId)),
    );
  }
}
