import { addTwo, Sum } from './utils';

it("Testing sum function with single param", ()=>{
    let sumRes = Sum(12);
    expect(sumRes).toBe(NaN)
})

it("Testing sum function with two params", ()=>{
    let sumRes = Sum(12, 12);
    expect(sumRes).toBe(24)
});

it("Testing addTwo function with single param ", ()=>{
    let addTwoInNum = addTwo(50);
    expect(addTwoInNum).toBe(52);
})