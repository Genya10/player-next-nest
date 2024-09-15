import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
 private _outputDir = './uploads';

 async processVideo(file:Express.Multer.File): Promise<string>{

 }
}
