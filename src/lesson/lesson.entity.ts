import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, OneToMany } from "typeorm";
//import { Student } from "src/student/student.entity";
import { StudentsToLessons } from "../relations/lesson-student.entity";

@Entity()
export class Lesson extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column() 
    Name: string; 

    @Column()
    startDate: string; 

    @Column() 
    endDate: string; 


    @OneToMany(() => StudentsToLessons, (studentstolessons: StudentsToLessons) => studentstolessons.lessons)
    studentsToLessons!: StudentsToLessons[];
}