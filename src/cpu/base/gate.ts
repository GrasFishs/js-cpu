import { Bit } from "./type";

export const not = (i: Bit): Bit => i === 1 ? 0 : 1

export const and = (a: Bit, b: Bit): Bit => a === 1 && b === 1 ? 1 : 0

export const nand = (a: Bit, b: Bit): Bit => not(and(a, b))

export const or = (a: Bit, b: Bit): Bit => a === 0 && b === 0 ? 0 : 1

export const nor = (a: Bit, b: Bit): Bit => not(or(a, b))

export const xor = (a: Bit, b: Bit): Bit => a !== b ? 1 : 0