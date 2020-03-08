/**
 * Copyright (c) 2020 Xvezda <xvezda@naver.com>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import loadable from '@loadable/component'

import React from 'react'
import ReactDOM from 'react-dom'

// import TerminalizerPlayer from '.'
const TerminalizerPlayer = loadable(() => import('./TerminalizerPlayer'));

ReactDOM.render(
  <TerminalizerPlayer
    recordingFile="data.json"
    controls={false}
    autoplay={true}
    repeat={true}
  />,
  document.getElementById('root')
)

