import { Module } from '@nestjs/common';
import { SuperHeroesController } from './superheroes.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';


@Module({
    imports: [InMemoryDBModule.forFeature('superheroe', {})],
    controllers: [SuperHeroesController],
    providers: [],
})
export class SuperHeroeModule { }