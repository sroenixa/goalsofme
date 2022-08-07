import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Goal } from "../goal/goal.entity";

@Entity({name: "user"})
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    surname: string;

    @Column({nullable: true, unique: true})
    mail: string;

    @Column({nullable: true})
    password: string;

    @OneToMany(() => Goal, goal => goal.user)
    goals: Goal[];
}