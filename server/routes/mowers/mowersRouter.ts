import * as express from 'express';
import {Request, Response} from 'express';

import { mowersController } from '../../controllers';

export const router = express.Router({
    strict: true,
    mergeParams: true
});

router.post('/command',(req: Request, res: Response) => {
    mowersController.sendCommand(req, res);
});
