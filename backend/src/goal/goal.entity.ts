import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Award } from "../award/award.entity";
import { Entry } from "../entry/entry.entity";
import { User } from "../user/user.entity";

@Entity({name: "goal"})
export class Goal{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'date' })
    createdTime: string;
    
    @Column({ type: 'date' })
    endTime: string;

    @ManyToOne(() => User, user => user.goals, {onDelete: 'SET NULL'})
    user: User;


    @Column({nullable: true})
    userId: number;


    @OneToMany(() => Award, award => award.goal)
    awards: Award[]

    @OneToMany(() => Entry, entry => entry.goal)
    entries: Entry[]
}