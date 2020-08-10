import { IsNotEmpty, IsOptional } from 'class-validator';
import { Student } from 'src/relations/student.entity';

export class CreateLessonDto{
    
    @IsNotEmpty()
    Name: string; 
    
    @IsNotEmpty()
    startDate: string;
    
    @IsNotEmpty()
    endDate: string;
    
}