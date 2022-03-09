import Byte from "./Byte"
import type { EightBit } from './Byte'

describe('byte', () => {
  it('create', () => {
    const zero = new Array(8).fill(0)
    const ones = new Array(8).fill(1)
    const one = [0, 0, 0, 0, 0, 0, 0, 1] as EightBit;
    expect(new Byte().bits).toStrictEqual(zero)
    expect(Byte.zero().bits).toStrictEqual(zero);
    expect(Byte.ones().bits).toStrictEqual(ones);
    expect(Byte.from('1').bits).toStrictEqual(one)
    expect(Byte.from(one).bits).toStrictEqual(one)
    expect(Byte.from("11111111").bits).toStrictEqual(ones);
  })

  it ('toString', () => {
    expect(Byte.from("1").str()).toBe("00000001")
    expect(Byte.from("101").str()).toBe("00000101")
    expect(Byte.zero().str()).toBe("00000000")
    expect(Byte.ones().str()).toBe("11111111")
  })
})