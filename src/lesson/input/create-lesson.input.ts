import { InputType, Field, ID } from "@nestjs/graphql";
import { MinLength, IsOptional } from "class-validator";

@InputType()
export class CreateLessonInput{
    @MinLength(1)
    @Field()
    Name: string; 

    @MinLength(1)
    @Field()
    startDate: string; 

    @MinLength(1)
    @Field()
    endDate: string;

    @IsOptional()
    @Field(() => [ID], {defaultValue : []})
    students: number[];
}