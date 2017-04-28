import { assert } from 'chai/chai';
import 'steal-mocha';
import './modal';
import stache from 'can-stache';

describe('bootstrap-canjs/modal', function () {
  it('should have message', function (done) {
    let modalFrag = stache('<bootstrap-modal></bootstrap-modal>')({});
    let modalEl = modalFrag.firstChild;
    document.body.appendChild(modalFrag);
    let content = stache('<bootstrap-modal-content>Hello!</bootstrap-modal-content>')({});
    document.body.appendChild(content);
    setTimeout(function () {
      let testContent = modalEl.querySelector('bootstrap-modal-content').textContent;
      assert.equal(testContent, 'Hello!');
      document.body.removeChild(modalEl);
      done();
    }, 0);
  });
});
