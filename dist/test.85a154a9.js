// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = ".skin *, .skin *::after, .skin *::before{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    .skin{\n        background-color: rgb(255,230,0);\n        height: 50vh;\n        position: relative;\n    }\n    .nose{\n        position: absolute;\n        top: 200px;\n        left: 50%;\n        margin-left: -10px;\n    }\n    .nose .san{\n        position: relative;\n        border: 10px solid;\n        border-color: black  transparent transparent;\n        border-bottom: none;\n        width: 0px;\n        height: 0px;\n        z-index: 10;\n    }\n    .nose .circle{\n        position: relative;\n        width: 20px;\n        height: 10px;\n        top: -15px;\n        border-radius: 50%;\n        background-color: black;\n    }\n    .nose .circle::after{\n        content: '';\n        position: absolute;\n        width: 20px;\n        height: 5px;\n        top: 50%;\n        background-color: rgb(255,230,0);\n    }\n    @keyframes wave {\n        0% {\n            transform: rotate(0deg);\n        }\n        25% {\n            transform: rotate(-5deg);\n        }\n        50% {\n            transform: rotate(0deg);\n        }\n        75%{\n            transform: rotate(5deg);\n        }\n        100% {\n            transform: rotate(0deg);\n        }\n    }\n    .nose:hover{\n        animation: wave 300ms infinite linear;\n    }\n    .eye{\n        border: 3px solid black;\n        background-color: rgb(46,46,46);\n        height: 64px;\n        width: 64px;\n        position: absolute;\n        left: 50%;\n        top: 180px;\n        margin-left: -32px;\n        margin-top: -32px;\n        border-radius: 50%;\n    }\n    .eye::before{\n        content: '';\n        display: block;\n        height: 30px;\n        width: 30px;\n        border: 3px solid black;\n        border-radius: 50%;\n        background-color: white;\n        position: absolute;\n        left: 8px;\n    }\n    .eye.left{\n        transform: translateX(-120px);\n    }\n    .eye.right{\n        transform: translateX(120px);\n    }\n    .mouth{\n        width: 180px;\n        height: 180px;\n        position: absolute;\n        top: 230px;\n        left: 50%;\n        margin-left: -90px;\n    }\n    .mouth .up_left{\n        border: 3px solid black;\n        width: 80px;\n        height: 25px;\n        border-top: none;\n        border-right: none;\n        border-bottom-left-radius: 2.5em 1.5em;\n        transform: rotate(-18deg);\n        position: absolute;\n        top: -4px;\n        right: 89px;\n        background-color: rgb(255,230,0);\n        z-index: 5;\n    }\n    .mouth .up_right{\n        border: 3px solid black;\n        width: 80px;\n        height: 25px;\n        border-top: none;\n        border-left: none;\n        border-bottom-right-radius: 2.5em 1.5em;\n        transform: rotate(18deg);\n        position: absolute;\n        top: -4px;\n        left: 89px;\n        background-color: rgb(255,230,0);\n        z-index: 5;\n    }\n    .mouth .down{\n        width: 160px;\n        height: 180px;\n        position: relative;\n        top: 4px;\n        left: 10px;\n        overflow: hidden;\n    }\n    .mouth .down .circle1{\n        border: 3px solid black;\n        height: 800px;\n        width: 100%;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        border-radius: 50%;\n        background-color: rgb(155,0,10);\n        overflow: hidden;\n    }\n    .mouth .down .circle1 .circle2{\n        height: 300px;\n        width: 200px;\n        position: absolute;\n        top: 100%;\n        right: 50%;\n        margin-top: -150px;\n        margin-right: -100px;\n        border-radius: 120px/170px;\n        background-color: rgb(255,72,95);\n    }\n    .face{\n        border: 3px solid black;\n        height: 88px;\n        width: 88px;\n        border-radius: 50%;\n        position: absolute;\n        left: 50%;\n        margin-left: -44px;\n        top: 260px;\n        background-color: rgb(255,0,0);\n    }\n    .face.left{\n        transform: translateX(-160px);\n    }\n    .face.right{\n        transform: translateX(160px);\n    }";

exports.default = string; //导出
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//导入


var player = {
    n: 1,
    time: 50,
    id: undefined,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
    },
    init: function init() {
        player.ui.demo1.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
        player.play();
        player.bindEvents();
    },
    events: {
        '.btnPause': 'pause',
        '.btnPlay': 'playEvent',
        '.btnSlow': 'slow',
        '.btnNormal': 'normal',
        '.btnFast': 'fast'
    },
    run: function run() {
        player.n += 1;
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        player.ui.demo1.innerText = _css2.default.substring(0, player.n);
        player.ui.demo2.innerHTML = _css2.default.substring(0, player.n);
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight;
    },
    play: function play() {
        player.id = setInterval(player.run, player.time);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    playEvent: function playEvent() {
        player.pause();
        player.play();
    },
    slow: function slow() {
        player.pause();
        player.time = 200;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.time = 50;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.time = 0;
        player.play();
    },
    bindEvents: function bindEvents() {
        for (var key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                var value = player.events[key]; //'pause','playEvent'…… 
                document.querySelector(key).onclick = player[value];
            }
        }
    }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.85a154a9.map