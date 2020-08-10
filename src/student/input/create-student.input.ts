import { InputType, Field, ID } from "@nestjs/graphql";
import { MinLength, IsOptional } from "class-validator";

@InputType()
export class CreateStudentInput{
    @MinLength(1)
    @Field()
    firstName: string;

    @MinLength(1)
    @Field()
    lastName: string;

    @IsOptional()
    @Field(() => [ID], {defaultValue : []})
    lessons: number[];

    @IsOptional()
    @Field(() => [ID], {defaultValue : []})
    friends: number[];

}