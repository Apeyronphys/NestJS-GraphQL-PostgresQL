import { IsNotEmpty, IsOptional } from 'class-validator';
import { Student } from 'src/student/student.entity';

export class CreateLessonDto{
    
    @IsNotEmpty()
    Name: string; 
    
    @IsNotEmpty()
    startDate: string;
    
    @IsNotEmpty()
    endDate: string; 
}