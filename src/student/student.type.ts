import { ObjectType, Field, ID } from "@nestjs/graphql";
import { LessonType } from "src/lesson/lesson.type";
import { Lesson } from "src/relations/lesson.entity";
import { Student } from "src/relations/student.entity";

@ObjectType('Student')
export class StudentType{
    @Field(type => ID)
    id: number; 
    
    @Field()
    firstName: string;
    
    @Field()
    lastName: string;
    
    @Field(type => LessonType)
    lessons: Lesson[];
    
    @Field(type => StudentType)
    friends: Student[];
}