import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {path} from 'app-root-path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:`${path}/uploads`,
      serveRoot:'/uploads',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
