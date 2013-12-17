### [Javascript & Coffeescript build systems](https://sublime.wbond.net/packages/JavaScript%20%26%20Coffeescript%20Build%20Systems) (plugin for sublime text)

- **ctrl+b**: run any code of _javascript_ or _coffeescript_
- **ctrl+shift+b**: prints compiled code ( **js** to **coffee** _or_ **coffee** to **js** )

### Dependencies

- [sublime-better-coffeescript](https://github.com/aponxi/sublime-better-coffeescript)
- [node.js](http://nodejs.org/download/)
- `npm install -g coffee-script js2coffee`


## Warning

Notice that it just running scripts via the command line so avoid running scripts with infinite loops or kill them manually(`pkill -f node`) if you already did !
![infinite loop](http://i.imgur.com/SVQC5hS.png)
