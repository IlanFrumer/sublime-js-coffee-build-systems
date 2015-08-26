### [Javascript & Coffeescript build systems](https://sublime.wbond.net/packages/JavaScript%20%26%20Coffeescript%20Build%20Systems) (plugin for sublime text)

#### javascript

- **ctrl+b**: execute code.
- **ctrl+shift+b**: compile & output (js2coffee).
- **ctrl+shift+h**: execute code in ec6(Harmony) mode.

#### javascript(babel)

- **ctrl+b**: execute code.
- **ctrl+shift+b**: compile & output (babel).

#### coffeescript
- **ctrl+b**: execute code.
- **ctrl+shift+b**: compile & output (coffee).

#### html
- **ctrl+b**: compile & output (html2jade).

#### jade
- **ctrl+b**: compile & output (jade).

#### typescript
- **ctrl+b**: compile & execute code (typescript).
- **ctrl+shift+b**: compile (typescript).

### Dependencies

- [node.js](http://nodejs.org/download/)
- `npm install -g coffee-script js2coffee`
- `npm install -g jade html2jade`
- `npm install -g typescript`
- `npm install -g babel`
- [sublime-jade](https://sublime.wbond.net/packages/Jade)
- [sublime-better-coffeescript](https://github.com/aponxi/sublime-better-coffeescript)

## Update npm gloabl packages

- `sudo npm update -g`

## Warning!

Notice, this plugin runs (js/coffee) scripts via the command line but it is not responsable for terminating them. Avoid running scripts with infinite loops (like server connections) or kill them manually(`pkill -f node`).
![infinite loop](http://i.imgur.com/SVQC5hS.png)
