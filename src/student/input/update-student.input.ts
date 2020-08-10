import { InputType, Field, ID } from "@nestjs/graphql";
import { IsOptional, IsNotEmpty } from "class-validator";

@InputType()
export class UpdateStudentInput{
    @IsOptional()
    @IsNotEmpty()
    @Field()
    firstName: string; 
    
    @IsOptional()
    @IsNotEmpty()
    @Field()
    lastName: string;
    
    @IsOptional()
    @IsNotEmpty()
    @Field(() => [ID], {defaultValue : []})
    lessons: number[];
    
    @IsOptional()
    @IsNotEmpty()
    @Field(() => [ID], {defaultValue : []})
    friends: number[];

}