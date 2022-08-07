import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Goal } from "../goal/goal.entity";

@Entity({name: "entry"})
export class Entry{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    status: boolean;

    @Column({nullable: true})
    goalId: number;

    @Column({ type: 'date' })
    time: string;

    @ManyToOne(() => Goal, goal => goal.entries, {onDelete: 'SET NULL'})
    goal: Goal;

}