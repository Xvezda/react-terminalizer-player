# React Terminalizer Player Component
[![License](https://img.shields.io/github/license/Xvezda/react-terminalizer-player)](LICENSE)

> React component for terminalizer player.

Terminalizer player is [here](https://github.com/faressoft/terminalizer-player).

## Usage

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

## License

MIT License.
