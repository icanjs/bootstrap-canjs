import { assert } from 'chai/chai';
import 'steal-mocha';
import plugin from './bootstrap-canjs';

describe('bootstrap-canjs', function () {
  it('should initialized the plugin', function () {
    assert.equal(plugin(), 'This is the bootstrap-canjs plugin');
  });
});
