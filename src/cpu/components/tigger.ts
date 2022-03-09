import { not } from "../base/gate";
import { Bit } from "../base/type";
import { DLatch } from "./latch";

class DTrigger {
  d1 = new DLatch()
  d2 = new DLatch()

  setup(d: Bit, clk: Bit) {
    this.d1.setup(d, clk)
    this.d2.setup(this.d1.Q, not(clk))
    return this.d2.Q
  }
}