import {instructionService} from "../services";

export const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
export const expect = chai.expect;
export const sinon = require("sinon");


test("the data is an array", () => {
    const input = "5 5\n" +
        "1 2 N\n" +
        "GAGAGAGAA\n" +
        "3 3 E\n" +
        "AADAADADDA";

    const output = [ [ 1, 3, 'N' ], [ 5, 1, 'E' ] ];

    expect(instructionService.compute(input)).resolves.toBe(output);
});

