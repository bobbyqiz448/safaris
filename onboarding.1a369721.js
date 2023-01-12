parcelRequire = (function (init) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  var modules = {};

  function localRequire(name, jumped) {
    if (name in modules) {
      return modules[name];
    }

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

  localRequire.register = function register(id, exports) {
    modules[id] = exports;
  };

  modules = init(localRequire);
  localRequire.modules = modules;
  return localRequire;
})(function (require) {
//vars to store and altetnate login and signup card
// ASSET: javascript/onboarding.js
var $qtEr$var$loginCard = document.querySelector("#login-card");
var $qtEr$var$signupCard = document.querySelector("#signup-card");
var $qtEr$var$loginLink = document.querySelector("#login-link");
var $qtEr$var$signupLink = document.querySelector("#signup-link");
$qtEr$var$signupLink.addEventListener("click", function () {
  $qtEr$var$loginCard.style.visibility = "hidden";
  $qtEr$var$signupCard.style.visibility = "visible";
});
$qtEr$var$loginLink.addEventListener("click", function () {
  $qtEr$var$signupCard.style.visibility = "hidden";
  $qtEr$var$loginCard.style.visibility = "visible";
});
window.addEventListener("scroll", function () {
  $qtEr$var$signupCard.style.visibility = "hidden";
  $qtEr$var$loginCard.style.visibility = "hidden";
});
// toggle onboarding cards based on login /signup text on top right corner
var $qtEr$var$login = document.querySelector("#login");
var $qtEr$var$signup = document.querySelector("#signup");
$qtEr$var$login.addEventListener("click", function () {
  $qtEr$var$loginCard.style.visibility = "visible";
  $qtEr$var$signupCard.style.visibility = "hidden";
});
$qtEr$var$signup.addEventListener("click", function () {
  $qtEr$var$signupCard.style.visibility = "visible";
  $qtEr$var$loginCard.style.visibility = "hidden";
});

//password verification
var $qtEr$var$btnClick = document.querySelector("#signup-submitbtn");
$qtEr$var$btnClick.addEventListener("click", function (e) {
  e.preventDefault;
  var password = document.getElementById("password").value;
  var repassword = document.querySelector("#repassword").value;
  if (password == repassword) {
    var result = window.confirm("Continue with Signup?");
    if (result) {
      window.alert("Signup successful!");
    } else {
      window.alert("Signup was aborted!");
    }
  } else {
    window.alert("Mismatch in passwords!");
  }
});
return {
  "qtEr": {}
};
});