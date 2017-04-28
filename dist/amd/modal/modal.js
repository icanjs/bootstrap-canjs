/*bootstrap-canjs@0.1.3#modal/modal*/
define([
    'exports',
    'can-component',
    'can-define/map',
    './modal.stache',
    'can-event',
    'css!./modal.less.css'
], function (exports, _canComponent, _map, _modal, _canEvent) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.ModalRoot = exports.ViewModel = undefined;
    var _canComponent2 = _interopRequireDefault(_canComponent);
    var _map2 = _interopRequireDefault(_map);
    var _modal2 = _interopRequireDefault(_modal);
    var _canEvent2 = _interopRequireDefault(_canEvent);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
    var eventObj = {};
    Object.assign(eventObj, _canEvent2.default);
    var ViewModel = exports.ViewModel = _map2.default.extend({
        el: { type: '*' },
        parent: { type: '*' },
        open: function open(el) {
            this.el = el;
            this.parent = el.parentElement;
            eventObj.dispatch('open', [el]);
        },
        close: function close() {
            if (this.parent) {
                this.parent.appendChild(this.el);
            }
            eventObj.dispatch('close');
        }
    });
    exports.default = _canComponent2.default.extend({
        tag: 'bootstrap-modal-content',
        ViewModel: ViewModel,
        events: {
            inserted: function inserted(el) {
                this.viewModel.open(el);
            }
        }
    });
    var RootViewModel = _map2.default.extend({
        el: { type: '*' },
        isVisible: 'boolean',
        doOpen: function doOpen(ev, el) {
            this.el.appendChild(el);
            this.isVisible = true;
        },
        doClose: function doClose() {
            if (this.el.firstChild) {
                this.el.removeChild(this.el.firstChild);
            }
            this.isVisible = false;
        }
    });
    var ModalRoot = exports.ModalRoot = _canComponent2.default.extend({
        tag: 'bootstrap-modal',
        ViewModel: RootViewModel,
        view: _modal2.default,
        events: {
            inserted: function inserted(el) {
                var _this = this;
                this.viewModel.el = el.querySelector('.modal-content');
                eventObj.addEventListener('open', function (ev, el) {
                    return _this.viewModel.doOpen(ev, el);
                });
                eventObj.addEventListener('close', function () {
                    return _this.viewModel.doClose();
                });
            }
        }
    });
});