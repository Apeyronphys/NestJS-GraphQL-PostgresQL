import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Lesson } from 'src/lesson/lesson.entity';

@Entity()
export class Student extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: string; 

    @Column() 
    firstName: string; 

    @Column()
    lastName: string; 
    
    @ManyToMany(type => Lesson, lesson => lesson.students )
    @JoinTable()
    lessons: Lesson[];
}
