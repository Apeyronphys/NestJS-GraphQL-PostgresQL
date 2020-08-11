import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Type } from 'class-transformer';
//import { Lesson } from 'src/lesson/lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { IsUUID } from 'class-validator';

@Entity()
export class Student extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ nullable: true })
    studentId: string;

    @Column({ nullable: true })
    studentId_1: string;

    @Column() 
    firstName: string; 

    @Column()
    lastName: string; 

    @ManyToMany(type => Lesson, lessons => lessons.students)
    @JoinTable({ name: 'students_lessons' })
    lessons: Lesson[]; 

    @ManyToMany(type => Student, student => student.friends)
    @JoinTable({ name: 'students_friends' })
    friends: Student[];  

    // @OneToMany(() => Student, (student: Student) => student.students)
    // @JoinColumn()
    // students: Student[];
}
