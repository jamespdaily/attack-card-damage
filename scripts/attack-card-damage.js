class AttackCardDamage {
    static ID = 'attack-card-damage';

    /**
     * A small helper function which leverages developer mode flags to gate debug logs.
     * 
     * @param {boolean} force - forces the log even if the debug flag is not on
     * @param  {...any} args - what to log
     */
    static log(force, ...args) {  
      const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);
  
      if (shouldLog) {
        console.log(this.ID, '|', ...args);
      }
    }
  }
  
  /**
   * Register our module's debug flag with developer mode's custom hook
   */
  Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    registerPackageDebugFlag(AttackCardDamage.ID);
  });

  Hooks.on('renderChatMessage', ( message, data, html ) => {
    console.log(arguments);
      //console.log(message.data.flags.pf2e.context.type);

      //const currentMessageDataItem = html.find(`[data-message-id=]`)
      console.log(html);

  });