import { and, nor, not } from '../base/gate'
import { Bit } from '../base/type'

// 
export class RSLatch {
  Q: Bit = 1
  _Q: Bit = 1


  setup(set: Bit, reset: Bit) {
    this.Q = nor(reset, this._Q)
    this._Q = nor(set, this.Q)
    this.Q = nor(reset, this._Q)
    this._Q = nor(set, this.Q)
    return this.Q
  }
}

// D锁存器
// 特点：只有在Clk为1时，Q随着D变化，Clk为0时，Q保持上一次状态
export class DLatch extends RSLatch {

  setup(d: Bit, clk: Bit) {
    const r = and(not(d), clk)
    const s = and(d, clk)
    return super.setup(s, r)
  }
}