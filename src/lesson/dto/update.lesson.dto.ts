import { IsNotEmpty, IsOptional } from 'class-validator';
import { Student } from 'src/student/student.entity';

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
    
    @IsOptional()
    @IsNotEmpty()
    students: Student[]; 
}