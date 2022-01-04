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
    this.actor.data.data.actions.find((action) => this.weaponId === (action.item || action.sourceId)).damage({ event });
  }

  rollCritical() {
    this.actor.data.data.actions
      .find((action) => this.weaponId === (action.item || action.sourceId))
      .critical({ event });
  }
}
