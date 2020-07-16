import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentType{
    
    @Field()
    firstName: string;
    
    @Field()
    lastName: string; 
}