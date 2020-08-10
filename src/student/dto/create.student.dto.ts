import { IsNotEmpty, IsOptional } from 'class-validator';
import { Lesson } from 'src/relations/lesson.entity';
import { Student } from 'src/relations/student.entity';
import { Column } from 'typeorm';

export class CreateStudentDto{
    @IsNotEmpty()
    firstName: string; 
    
    @IsNotEmpty()
    lastName: string; 

    @IsOptional()
    @IsNotEmpty()
    lessons: number[];


    @IsOptional()
    @IsNotEmpty()
    friends: number[]; 
}