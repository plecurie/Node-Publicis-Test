import {Request, Response} from "express";

const multer = require('multer');
const fs = require('fs');

export class FileService {

    constructor(){}

    public upload(req: Request, res: Response) {

        return new Promise((resolve, reject) => {
            const storage = multer.diskStorage({
                destination: function (req: Request, file: any, callback: (error: Error | null, destination: string) => void) {
                    callback(null, './');
                },
                filename: function (req: Request, file: any, callback: (error: Error | null, destination: string) => void) {
                    callback(null, 'tmpfile');
                }
            });

            const upload = multer({ storage : storage}).single('file');

            upload(req, res, async (err: Error) => {
                if (err)
                    reject('Error uploading file.');

                resolve((req as MulterRequest).file);
            });
        });

    }

    public read(file: any) {
        return new Promise((resolve, reject) => {

            fs.readFile(file.path, (err: Error, data:any) => {
                if (err)
                    reject('Error reading file.');
                resolve(data.toString());
            })
        });
    }


    public delete() {
        return new Promise((resolve, reject) => {
            fs.unlink('./tmpfile', (err: Error) => {
                if (err)
                    reject('Error deleting file.');
                resolve('File Deleted !')
            })
        })
    }

}

interface MulterRequest extends Request {
    file: any;
}
