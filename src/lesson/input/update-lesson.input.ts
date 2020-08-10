import { InputType, Field, ID } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateLessonInput{
    @IsOptional()
    @IsNotEmpty()
    @Field()
    Name: string;
    
    @IsOptional()
    @IsNotEmpty()
    @Field()
    startDate: string;

    @IsOptional()
    @IsNotEmpty()
    @Field()
    endDate: string;

    @IsOptional()
    @IsNotEmpty()
    @Field(() => [ID], {defaultValue : []})
    students: number[];
}