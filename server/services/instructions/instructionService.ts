import {Mower} from "../../models/Mower";

export class InstructionService {

    constructor() {}

    private static rotate(mower: Mower, left: boolean) {
        switch (mower.orientation) {
            case 'N': {
                mower.orientation = (left) ? 'W' : 'E';
                break;
            }
            case 'E': {
                mower.orientation = (left) ? 'N' : 'S';
                break;
            }
            case 'W': {
                mower.orientation = (left) ? 'S' : 'N';
                break;
            }
            case 'S': {
                mower.orientation = (left) ? 'E' : 'W';
                break
            }
            default:
                break;
        }
    }

    private static move(board: any[], mower: Mower) {
        switch (mower.orientation) {
            case 'N': {
                if (mower.pos_y + 1 <= board[1])
                    mower.pos_y += 1;
                break;
            }
            case 'E': {
                if (mower.pos_x + 1 <= board[0])
                    mower.pos_x += 1;
                break;
            }
            case 'W': {
                if ((mower.pos_x - 1) >= 0)
                    mower.pos_x -= 1;
                break;
            }
            case 'S': {
                if ((mower.pos_y - 1) >= 0)
                    mower.pos_y -= 1;
                break
            }
            default:
                break;
        }
    }

    public compute(data: String) {
        let lines = data.split('\n');
        const board: any[] = [];
        const array = [];

        lines[0].split(' ').forEach(element => {
            board.push(element[0]);
        });

        for(let i = 1; i < lines.length; i++) {
            if (i % 2 !== 0) {
                const coords: any[] = [];
                lines[i].split(' ').forEach(element=> {
                    coords.push(element[0]);
                });

                const mower: Mower = {
                    pos_x: Number(coords[0]),
                    pos_y: Number(coords[1]),
                    orientation: coords[2]
                };

                if (lines[i + 1]) {
                    for (let instruction of lines[i + 1]) {
                        switch (instruction) {
                            case 'G': {
                                InstructionService.rotate(mower,true);
                                break;
                            }
                            case 'D': {
                                InstructionService.rotate(mower, false);
                                break;
                            }
                            case 'A': {
                                InstructionService.move(board, mower);
                                break;
                            }
                            default:
                                break;
                        }
                    }
                }

                array.push([mower.pos_x, mower.pos_y, mower.orientation]);
            }
        }
        return array;
    }
}
