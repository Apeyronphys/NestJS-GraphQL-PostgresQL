import { IsNotEmpty, IsOptional } from 'class-validator';
import { Lesson } from 'src/relations/lesson.entity';

export class UpdateStudentDto{
    @IsOptional()
    @IsNotEmpty()
    firstName: string; 
    
    @IsOptional()
    @IsNotEmpty()
    lastName: string;
    
    @IsOptional()
    @IsNotEmpty()
    lessons: number[];
    
    @IsOptional()
    @IsNotEmpty()
    friends: number[];
}