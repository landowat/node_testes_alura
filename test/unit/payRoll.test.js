import { extraHourSum, calculateDiscounts } from "../../example.js";

describe('Calculate Hours tests', () => {

    it('Should return the sum of extra hour', () => {
        const expected = 2500
        const returnedValue = extraHourSum( 2000, 500 );

        expect(returnedValue).toBe(expected);
    });

    it('Should return the salary value', () => {
        const expected = 2200
        const returnedValue = calculateDiscounts( 2500, 300 );

        expect(returnedValue).toBe(expected);
    });
});