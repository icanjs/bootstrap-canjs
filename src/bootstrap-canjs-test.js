import QUnit from 'steal-qunit';
import plugin from './bootstrap-canjs';

QUnit.module('bootstrap-canjs');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the bootstrap-canjs plugin');
});
