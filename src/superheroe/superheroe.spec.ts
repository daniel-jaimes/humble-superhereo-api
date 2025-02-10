import { Test, TestingModule } from '@nestjs/testing';
import { SuperHeroesController } from './superheroe.controller';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { SuperHeroe } from './superherore.entity';
import { ValidationPipe } from '@nestjs/common';

describe('SuperHeroesController', () => {
    let controller: SuperHeroesController;
    let service: InMemoryDBService<SuperHeroe>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SuperHeroesController],
            providers: [InMemoryDBService],
        }).compile();

        controller = module.get<SuperHeroesController>(SuperHeroesController);
        service = module.get<InMemoryDBService<SuperHeroe>>(InMemoryDBService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    describe('getAllHeroes', () => {
        it('should return an array of superheroes sorted by humilityScore desc', () => {
            const heroes: SuperHeroe[] = [
                { id: '1', name: 'Hero A', superPower: 'Fly', humilityScore: 5 },
                { id: '2', name: 'Hero B', superPower: 'Strength', humilityScore: 8 },
            ];
            jest.spyOn(service, 'getAll').mockReturnValue(heroes);

            const result = controller.getAllHeroes();
            expect(result).toEqual([
                { id: '2', name: 'Hero B', superPower: 'Strength', humilityScore: 8 },
                { id: '1', name: 'Hero A', superPower: 'Fly', humilityScore: 5 },
            ]);
        });
    });

    describe('addSuperHero', () => {
        it('should create and return a superhero', () => {
            const newHero: SuperHeroe = { id: '3', name: 'Hero C', superPower: 'Invisibility', humilityScore: 7 };
            jest.spyOn(service, 'create').mockReturnValue(newHero);

            const result = controller.addSuperHero(newHero);
            expect(result).toEqual(newHero);
        });
    });
});
