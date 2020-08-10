import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany } from "typeorm";
import { Type } from 'class-transformer';
//import { Student } from "src/student/student.entity";
import { Student } from "./student.entity";


@Entity()
export class Lesson extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    lessonId: string;

    @Column() 
    Name: string; 

    @Column()
    startDate: string; 

    @Column() 
    endDate: string;
    
    @ManyToMany(type => Student, student => student.lessons)
    students: Student[]; 

    // @OneToMany(() => StudentsToLessons, (studentstolessons: StudentsToLessons) => studentstolessons.lessons)
    // @Type((t) => StudentsToLessons)
    // @JoinColumn()
    // studentsToLessons?: Promise<StudentsToLessons[]>;
}