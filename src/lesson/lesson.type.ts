import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType('Lesson')
export class LessonType{
    
    @Field()
    Name: string;
    
    @Field()
    startDate: string; 

    @Field()
    endDate: string; 
}