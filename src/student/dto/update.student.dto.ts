import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateStudentDto{
    @IsOptional()
    @IsNotEmpty()
    firstName: string; 
    
    @IsOptional()
    @IsNotEmpty()
    lastName: string; 
}