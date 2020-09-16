import {instructionService} from "../services";
import { expect } from 'chai';

describe('Testing Mowers', function () {
    describe('On computing instructions', function () {
        it('should return an array', function () {
            const input = "5 5\n" +
                "1 2 N\n" +
                "GAGAGAGAA\n" +
                "3 3 E\n" +
                "AADAADADDA";

            expect(instructionService.compute(input)).to.be.a('array');
        });

        it('should return the correct output', function () {

            const input = "5 5\n" +
                "1 2 N\n" +
                "GAGAGAGAA\n" +
                "3 3 E\n" +
                "AADAADADDA";

            const output = [ [ 1, 3, 'N' ], [ 5, 1, 'E' ] ];
            expect(instructionService.compute(input)).to.eql(output);
        });

        it('should not move outside the board', function () {

            const input = "5 5\n" +
                "1 2 N\n" +
                "GAAAAAAAAGAGAGAA\n" +
                "3 3 E\n" +
                "AADAADADDA";

            const output = [ [ 1, 3, 'N' ], [ 5, 1, 'E' ] ];
            expect(instructionService.compute(input)).to.eql(output);
        });
    });
});
