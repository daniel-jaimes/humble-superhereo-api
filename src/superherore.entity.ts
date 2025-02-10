import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SuperHeroe implements InMemoryDBEntity {
    id: string;
    name: string;
    superPower: string;
    humilityScore: number;
}