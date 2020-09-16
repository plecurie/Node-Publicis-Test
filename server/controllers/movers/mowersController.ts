import {Request, Response} from "express";
import {fileService, instructionService} from "../../services";

export class MowersController {
    async sendCommand(req: Request, res: Response) {
        fileService.upload(req, res)
            .then((file) => fileService.read(file))
            .then((data) => instructionService.compute(data as String))
            .then((array) => res.status(200).json({responses: array}))
            .finally(() => fileService.delete())
            .catch((err) => res.status(500).json({error: err}));
    }
}
