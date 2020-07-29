import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity, Column, PrimaryColumn } from 'typeorm';
import { Lesson } from './lesson.entity';
import { Student } from './student.entity';

Entity('students_lessons')
export class StudentsToLessons extends BaseEntity{
    @PrimaryColumn()
    student_id: number; 

    @PrimaryColumn() 
    lesson_id: number;
    
    // @ManyToOne((type) => Lesson/*, (lesson: Lesson) => lesson.studentsToLessons*/)
    // //@JoinColumn({name: 'lesson_id'})
    // lessons: Promise<Lesson>;

    // @ManyToOne((type) => Student/*, (student: Student) => student.studentsToLessons,*/)
    // //@JoinColumn({name: 'student_id'})
    // students: Promise<Student>;
}