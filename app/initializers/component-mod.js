import Ember from 'ember';

var Component = {

  loadAttrsHash: Ember.on('didReceiveAttrs', function() {

    if (this.get('attrsHash')) {

      let hash = this.get('attrsHash');

      Object.keys(hash).forEach(key => {
        this.set(key, hash[key]);
      });

    }

  }),

};

export function initialize(/* application */) {
  debugger;
  Ember.Component = Ember.Component.extend(Component);
}

export default {
  name: 'component-mod',
  initialize
};