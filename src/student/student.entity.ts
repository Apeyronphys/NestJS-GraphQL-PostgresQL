import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, JoinColumn, OneToMany } from 'typeorm';
//import { Lesson } from 'src/lesson/lesson.entity';
import { StudentsToLessons } from '../relations/lesson-student.entity';

@Entity()
export class Student extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number; 

    @Column() 
    firstName: string; 

    @Column()
    lastName: string; 
     
    @OneToMany(() => StudentsToLessons, (studentstolessons: StudentsToLessons) => studentstolessons.students)
    studentsToLessons!: StudentsToLessons[];
}
