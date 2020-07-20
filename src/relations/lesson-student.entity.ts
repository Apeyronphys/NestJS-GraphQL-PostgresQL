import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity, Column } from "typeorm";
import { Student } from "../student/student.entity";
import { Lesson } from "../lesson/lesson.entity";

Entity()
export class StudentsToLessons extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    student_id: number; 

    @Column() 
    lesson_id: number; 

    @ManyToOne(() => Student, (student: Student) => student.studentsToLessons)
    //@JoinColumn({name: 'student_id'})
    students!: Student;
    
    @ManyToOne(() => Lesson, (lesson: Lesson) => lesson.studentsToLessons)
    //@JoinColumn({name: 'lesson_id'})
    lessons!: Lesson;
}