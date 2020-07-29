import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany } from 'typeorm';
import { Type } from 'class-transformer';
//import { Lesson } from 'src/lesson/lesson.entity';
import {StudentsToLessons}  from './lesson-student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';

@Entity()
export class Student extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number; 

    @Column() 
    firstName: string; 

    @Column()
    lastName: string; 
     
    @ManyToMany(type => Lesson, lessons => lessons.students)
    lessons: Lesson[]; 

    // @OneToMany(() => StudentsToLessons, (studentstolessons: StudentsToLessons) => studentstolessons.students)
    // @Type((t) => StudentsToLessons)
    // @JoinColumn()
    // studentsToLessons?: Promise<StudentsToLessons[]>;
}
