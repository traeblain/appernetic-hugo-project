"use strict"

var menu = document.getElementsByClassName('mainmenu')
var clicker = document.getElementById('showmenu')
var side = document.getElementById('sideshow')
var closer = document.getElementById('closemenu')

function toggleMenu () {
  for (var i = 0; i < menu.length; ++i) {
    if (menu[i].classList) {
      menu[i].classList.toggle('menu-open')
    } else {
      var classes = menu[i].className.split(' ')
      var existingIndex = classes.indexOf('menu-open')

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1)
      else
        classes.push('menu-open')

      menu[i].className = classes.join(' ')
    }
  }
}

clicker.onclick = function (e) { toggleMenu(); e.preventDefault(); }
closer.onclick = function (e) { toggleMenu(); e.preventDefault(); }
side.onclick = function (e) { toggleMenu(); e.preventDefault(); }

hljs.initHighlightingOnLoad()
