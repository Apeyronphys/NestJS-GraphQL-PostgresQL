import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Student } from "src/student/student.entity";

@Entity()
export class Lesson extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string; 

    @Column() 
    Name: string; 

    @Column()
    startDate: string; 

    @Column() 
    endDate: string; 

    @ManyToMany(type => Student, student => student.lessons)
    students: Student[]; 
}