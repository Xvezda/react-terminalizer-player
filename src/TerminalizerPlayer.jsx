/**
 * Copyright (c) 2020 Xvezda <xvezda@naver.com>
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */
import { Terminalizer } from 'terminalizer-player/src/js/terminalizer'
import React, { Component } from 'react'

export default class TerminalizerPlayer extends Component {
  componentDidMount () {
    this.$el = new Terminalizer(this.el, this.props)
  }

  render () {
    return (
      <div ref={el => (this.el = el)} />
    )
  }
}
