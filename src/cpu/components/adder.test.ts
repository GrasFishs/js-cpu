import Byte from "../base/Byte";
import { adder, fullAdder, halfAdder } from "./adder"

describe("adder", () => {
  it("half-adder", () => {
    expect(halfAdder(1, 1)).toStrictEqual([1, 0]);
    expect(halfAdder(1, 0)).toStrictEqual([0, 1]);
    expect(halfAdder(0, 1)).toStrictEqual([0, 1]);
    expect(halfAdder(0, 0)).toStrictEqual([0, 0]);
  })

  it("full-adder", () => {
    expect(fullAdder(0, 0, 1)).toStrictEqual([0, 1]);
    expect(fullAdder(0, 1, 1)).toStrictEqual([1, 0]);
    expect(fullAdder(1, 0, 1)).toStrictEqual([1, 0]);
    expect(fullAdder(1, 1, 1)).toStrictEqual([1, 1]);
  })

  it('add', () => {
    expect(adder(Byte.from("1"), Byte.from("1")).str()).toBe("00000010")
    expect(adder(Byte.from("1"), Byte.from("0")).str()).toBe("00000001")
    expect(adder(Byte.from("1"), Byte.from("11")).str()).toBe("00000100")
    expect(adder(Byte.from("11111111"), Byte.from("1")).str()).toBe("00000000")
  })
})