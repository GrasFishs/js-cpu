import * as gate from './gate'

describe('gate test', () => {
  it('and', () => {
    expect(gate.and(1, 1)).toBe(1)
    expect(gate.and(1, 0)).toBe(0)
    expect(gate.and(0, 1)).toBe(0)
    expect(gate.and(0, 0)).toBe(0)
  })

  it('or', () => {
    expect(gate.or(1, 1)).toBe(1)
    expect(gate.or(1, 0)).toBe(1)
    expect(gate.or(0, 1)).toBe(1)
    expect(gate.or(0, 0)).toBe(0)
  })

  it('nand', () => {
    expect(gate.nand(1, 1)).toBe(0)
    expect(gate.nand(1, 0)).toBe(1)
    expect(gate.nand(0, 1)).toBe(1)
    expect(gate.nand(0, 0)).toBe(1)
  })

  it('nor', () => {
    expect(gate.nor(1, 1)).toBe(0)
    expect(gate.nor(1, 0)).toBe(0)
    expect(gate.nor(0, 1)).toBe(0)
    expect(gate.nor(0, 0)).toBe(1)
  })

  it('xor', () => {
    expect(gate.xor(1, 1)).toBe(0)
    expect(gate.xor(1, 0)).toBe(1)
    expect(gate.xor(0, 1)).toBe(1)
    expect(gate.xor(0, 0)).toBe(0)
  })

  it('not', () => {
    expect(gate.not(1)).toBe(0)
    expect(gate.not(0)).toBe(1)
  })
})