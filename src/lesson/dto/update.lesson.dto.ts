import { IsNotEmpty, IsOptional } from 'class-validator';
import { Student } from 'src/relations/student.entity';

export class UpdateLessonDto{
    
    @IsOptional()
    @IsNotEmpty()
    Name: string; 
    
    @IsOptional()
    @IsNotEmpty()
    startDate: string;
    
    @IsOptional()
    @IsNotEmpty()
    endDate: string;
    
}