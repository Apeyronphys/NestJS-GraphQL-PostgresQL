import { IsNotEmpty, IsOptional } from 'class-validator';
import { Lesson } from 'src/relations/lesson.entity';

export class CreateStudentDto{
    @IsNotEmpty()
    firstName: string; 
    
    @IsNotEmpty()
    lastName: string; 

    @IsOptional()
    @IsNotEmpty()
    lessons: number[]; 
}