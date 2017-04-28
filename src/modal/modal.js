import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './modal.less';
import view from './modal.stache';
import canEvent from 'can-event';

let eventObj = {};
Object.assign(eventObj, canEvent);

// Modal Content:
export const ViewModel = DefineMap.extend({
  el: { type: '*' },
  parent: { type: '*' },
  open (el) {
    this.el = el;
    this.parent = el.parentElement;
    eventObj.dispatch('open', [el]);
  },
  close () {
    if (this.parent) {
      // Move element to its original parent (e.g. if it was rendered with `#if` helper):
      this.parent.appendChild(this.el);
    } else {
      // Otherwise let ModalRoot to remove it:
      eventObj.dispatch('close');
    }
  }
});
export default Component.extend({
  tag: 'bootstrap-modal-content',
  ViewModel,
  events: {
    inserted (el) {
      // console.log('bootstrap-modal-content inserted!');
      this.viewModel.open(el);
    }
  }
});

// Modal Root:
const RootViewModel = DefineMap.extend({
  el: {
    type: '*'
  },
  doOpen (ev, el) {
    this.el.appendChild(el);
  },
  doClose () {
    this.el.removeChild(this.el.firstChild);
  }
});
export const ModalRoot = Component.extend({
  tag: 'bootstrap-modal',
  ViewModel: RootViewModel,
  view,
  events: {
    inserted (el) {
      // console.log('bootstrap-modal inserted!');
      this.viewModel.el = el.querySelector('.modal-content');
      eventObj.addEventListener('open', (ev, el) => this.viewModel.doOpen(ev, el));
      eventObj.addEventListener('close', () => this.viewModel.doClose());
    }
  }
});
