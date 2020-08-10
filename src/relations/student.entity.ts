import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Type } from 'class-transformer';
//import { Lesson } from 'src/lesson/lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';

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

    @ManyToMany(type => Student, student => student.friends)
    @JoinTable({ name: 'student_friends' })
    friends: Student[]; 

    @ManyToMany(type => Lesson, lessons => lessons.students)
    @JoinTable({ name: 'students_lessons' })
    lessons: Lesson[]; 

    // @OneToMany(() => Student, (student: Student) => student.students)
    // @JoinColumn()
    // students: Student[];
}
