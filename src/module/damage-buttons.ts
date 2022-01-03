/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
export default class DamageButton {
  damageLabel: string;
  criticalLabel: string;
  actor: Actor;
  weaponId: string;
  actions: Action;

  constructor(data) {
    this.damageLabel = game.i18n.localize('PF2E.DamageLabel');
    this.criticalLabel = game.i18n.localize('PF2E.CriticalDamageLabel');
    this.actor = game.actors.get(data.speaker.actor);
    this.weaponId = data.flags.pf2e.origin.uuid.split('.')[3];
  }

  rollDamage() {
    this.actor.data.data.actions.find((action) => this.weaponId === action.item).damage({ event });
  }

  rollCritical() {
    this.actor.data.data.actions.find((action) => this.weaponId === action.item).critical({ event });
  }
}
