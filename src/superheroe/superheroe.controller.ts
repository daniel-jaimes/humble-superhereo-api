import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { SuperHeroe } from './superherore.entity';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';


@Controller("/superheroes")
export class SuperHeroesController {
    constructor(private superHeroeService: InMemoryDBService<SuperHeroe>) { }

    @Get()
    getAllHeroes(): SuperHeroe[] {
        return this.superHeroeService.getAll().slice().sort((a, b) => b.humilityScore - a.humilityScore)
    }

    @Post()
    addSuperHero(@Body(new ValidationPipe()) superHeroe: SuperHeroe): SuperHeroe {
        return this.superHeroeService.create(superHeroe)
    }
}
