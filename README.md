# React Terminalizer Player Component
[![Version](https://img.shields.io/npm/v/react-terminalizer-player)](https://npmjs.com/package/react-terminalizer-player)
[![License](https://img.shields.io/github/license/Xvezda/react-terminalizer-player)](LICENSE)

> React component for terminalizer player.

Terminalizer player is [here](https://github.com/faressoft/terminalizer-player).

## Installation
```sh
npm install --save react-terminalizer-player
```

Install dependencies:
 - terminalizer-player
 - jquery
 - xterm
```sh
npm install --save terminalizer-player jquery@3 xterm@3.8.1
```
## Usage

Add the following styles inside of `head` tags.

```html
<link rel="stylesheet" type="text/css" href="node_modules/xterm/dist/xterm.css">
<link rel="stylesheet" type="text/css" href="node_modules/terminalizer-player/dist/css/terminalizer.css">
```

Add the following scripts right before end of `body` tag.

```html
<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="node_modules/xterm/dist/xterm.js"></script>
```

Now, you can use terminalizer player in react.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

import TerminalizerPlayer from './TerminalizerPlayer'


ReactDOM.render(
  <TerminalizerPlayer
    recordingFile='data.json'
    controls={false}
    autoplay
    repeat
  />,
  document.getElementById('root')
)
```

> Tip: If you are using bundler, You can also import dependencies to bundle instead of adding it right into HTML.

## License

MIT License.
