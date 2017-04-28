/*[global-shim-start]*/
(function(exports, global, doEval){ // jshint ignore:line
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var set = function(name, val){
		var parts = name.split("."),
			cur = global,
			i, part, next;
		for(i = 0; i < parts.length - 1; i++) {
			part = parts[i];
			next = cur[part];
			if(!next) {
				next = cur[part] = {};
			}
			cur = next;
		}
		part = parts[parts.length - 1];
		cur[part] = val;
	};
	var useDefault = function(mod){
		if(!mod || !mod.__esModule) return false;
		var esProps = { __esModule: true, "default": true };
		for(var p in mod) {
			if(!esProps[p]) return false;
		}
		return true;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		result = module && module.exports ? module.exports : result;
		modules[moduleName] = result;

		// Set global exports
		var globalExport = exports[moduleName];
		if(globalExport && !get(globalExport)) {
			if(useDefault(result)) {
				result = result["default"];
			}
			set(globalExport, result);
		}
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				doEval(__load.source, global);
			}
		};
	});
}
)({},window,function(__$source__, __$global__) { // jshint ignore:line
	eval("(function() { " + __$source__ + " \n }).call(__$global__);");
}
)
/*bootstrap-canjs@0.1.0#modal/modal.stache!steal-stache@3.0.5#steal-stache*/
define('bootstrap-canjs/modal/modal.stache', [
    'module',
    'can-stache',
    'can-stache/src/mustache_core',
    'can-view-import@3.0.7#can-view-import',
    'can-stache-bindings@3.0.19#can-stache-bindings'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['modal fade']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['tabindex']
        },
        {
            'tokenType': 'attrValue',
            'args': ['-1']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['tabindex']
        },
        {
            'tokenType': 'attrStart',
            'args': ['role']
        },
        {
            'tokenType': 'attrValue',
            'args': ['dialog']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['role']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['modal-dialog']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['role']
        },
        {
            'tokenType': 'attrValue',
            'args': ['document']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['role']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'chars',
            'args': ['\n    ']
        },
        {
            'tokenType': 'start',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['modal-content']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'div',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n  ']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'close',
            'args': ['div']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*bootstrap-canjs@0.1.0#modal/modal*/
define('bootstrap-canjs/modal/modal', [
    'exports',
    'can-component',
    'can-define/map/map',
    'bootstrap-canjs/modal/modal.stache',
    'can-event',
    'bootstrap-canjs/modal/modal.less'
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
            } else {
                eventObj.dispatch('close');
            }
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
        doOpen: function doOpen(ev, el) {
            this.el.appendChild(el);
        },
        doClose: function doClose() {
            this.el.removeChild(this.el.firstChild);
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
/*bootstrap-canjs@0.1.0#bootstrap-canjs*/
define('bootstrap-canjs', [
    'exports',
    'bootstrap-canjs/modal/modal'
], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function () {
        return 'This is the bootstrap-canjs plugin';
    };
});
/*[global-shim-end]*/
(function(){ // jshint ignore:line
	window._define = window.define;
	window.define = window.define.orig;
}
)();