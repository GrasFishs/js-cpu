import Byte from '../base/Byte'
import { and, or, xor } from '../base/gate'
import { Bit } from '../base/type'

// [进位， 加和]
export const halfAdder = (a: Bit, b: Bit) => [and(a, b), xor(a, b)]

export function fullAdder(a: Bit, b: Bit, curry: Bit): [Bit, Bit] {
  const x = xor(a, b)
  return [or(and(a, b), and(x, curry)), xor(x, curry)]
}

export function adder(a: Byte, b: Byte): Byte {
  const byte = new Byte()
  let curry: Bit = 0
  for (let i = 7; i >= 0; i--) {
    const res = fullAdder(a.get(i)!, b.get(i)!, curry)
    curry = res[0]
    byte.set(i, res[1])
  }
  return byte
}