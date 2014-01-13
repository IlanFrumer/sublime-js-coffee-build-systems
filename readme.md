### [Javascript & Coffeescript build systems](https://sublime.wbond.net/packages/JavaScript%20%26%20Coffeescript%20Build%20Systems) (plugin for sublime text)

#### javascript / coffescript syntax
- **ctrl+b**: run any code of _javascript_ or _coffeescript_
- **ctrl+shift+b**: prints compiled code ( **js** to **coffee** _or_ **coffee** to **js** )

#### html / jade syntax

- **ctrl+b**: prints compiled code (**html** to **jade** _or_ **jade** to **html**)

### Dependencies

- [node.js](http://nodejs.org/download/)
- `npm install -g coffee-script js2coffee jade`
- `npm install -g coffee-script html2jade` - __(Windows not supported)__
- [sublime-jade](https://sublime.wbond.net/packages/Jade)
- [sublime-better-coffeescript](https://github.com/aponxi/sublime-better-coffeescript)


## Warning!

Notice, this plugin runs (js/coffee) scripts via the command line but is not responsable to close them. Avoid running scripts with infinite loops (like server connections) or kill them manually(`pkill -f node`).
![infinite loop](http://i.imgur.com/SVQC5hS.png)
