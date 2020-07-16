import { IsNotEmpty, IsOptional } from 'class-validator';

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