import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
    IsString,
    IsInt,
    Min,
    Max,
} from 'class-validator';

@Entity()
export class SuperHeroe implements InMemoryDBEntity {
    id: string;

    @IsString()
    name: string;

    @IsString()
    superPower: string;

    @IsInt()
    @Min(0, { message: 'Humility Score must be at least 0' })
    @Max(10, { message: "Humility Score must not exceed 10" })
    humilityScore: number;
}