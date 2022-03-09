import { Bit } from './type'

export type EightBit = [Bit, Bit, Bit, Bit, Bit, Bit, Bit, Bit];

export default class Byte {
  bits: EightBit = [0, 0, 0, 0, 0, 0, 0, 0]

  static from(bits: EightBit | string) {
    const b = new Byte()
    if (typeof bits === 'string') {
      const s = bits.slice(-8).padStart(8, '0')
      b.bits = s.split('').map(n => parseInt(n)) as EightBit
    } else {
      b.bits = bits
    }
    return b
  }

  static zero() {
    return new Byte()
  }

  static ones() {
    const b = new Byte()
    b.bits.fill(1)
    return b
  }

  set(index: number, bit: Bit) {
    if (index > -1 && index < 8)
      this.bits[index] = bit
  }

  get(index: number) {
    if (index > -1 && index < 8) return this.bits[index]
    else return null
  }

  clear() {
    this.bits.fill(0)
    return this
  }

  str() {
    return this.bits.join('')
  }
}
