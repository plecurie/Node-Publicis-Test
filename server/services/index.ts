import { FileService } from './files/fileService';
import { InstructionService } from "./instructions/instructionService";

const fileService = new FileService();
const instructionService = new InstructionService();

export {
    fileService,
    instructionService
}
