import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuperHeroeModule } from './superheroe/superheroe.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';


@Module({
  imports: [InMemoryDBModule.forRoot({}),
    SuperHeroeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
