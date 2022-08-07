import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Goal } from "../goal/goal.entity";

@Entity({name: "award"})
export class Award{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({ type: 'date' })
    time: string;

    @Column({nullable: true})
    goalId: number;

    @ManyToOne(() => Goal, goal => goal.awards, {onDelete: 'SET NULL'})
    goal: Goal;
}