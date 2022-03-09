import { DLatch, RSLatch } from "./latch"

describe("latch", () => {

  it("RS Latch set", () => {
    const rs = new RSLatch()
    expect(rs.setup(1, 0)).toEqual(1)
    expect(rs.setup(0, 0)).toEqual(1)
  })

  it("RS Latch reset", () => {
    const rs = new RSLatch()
    expect(rs.setup(0, 1)).toEqual(0)
    expect(rs.setup(0, 0)).toEqual(0)
  })
  
  it("D Latch set 1 -> 0, clk 1 -> 0", () => {
    const d = new DLatch();
    expect(d.setup(1, 1)).toEqual(1)
    expect(d.setup(0, 1)).toEqual(0)
    
    expect(d.setup(1, 1)).toEqual(1)
    expect(d.setup(0, 0)).toEqual(1)
    expect(d.setup(1, 0)).toEqual(1)
  })

  it("D Latch set 1, clk 1 -> 0 ", () => {
    const d = new DLatch();
    expect(d.setup(1, 1)).toEqual(1)
    expect(d.setup(0, 0)).toEqual(1)
    expect(d.setup(1, 0)).toEqual(1)
  })

  it("D Latch set 1, clk 0 ", () => {
    const d = new DLatch();
    expect(d.setup(1, 0)).toEqual(0)
    expect(d.setup(0, 0)).toEqual(0)
    expect(d.setup(1, 0)).toEqual(0)
  })
})