import { ObjectType, Field } from "@nestjs/graphql";
import { StudentType } from "src/student/student.type";
import { Student } from "src/relations/student.entity";

@ObjectType('Lesson')
export class LessonType{
    
    @Field()
    Name: string;
    
    @Field()
    startDate: string; 

    @Field()
    endDate: string;

    @Field(type => StudentType)
    students: Student[]; 
}