import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { StudentService } from "./student.service";
import { StudentType } from "./student.type";
import { CreateStudentDto } from "./dto/create.student.dto";
import { CreateStudentInput } from "./input/create-student.input";
import { UpdateStudentInput } from "./input/update-student.input";

@Resolver(of => StudentType)
export class StudentResolver{
    constructor(
        private studentService: StudentService, 
    ){}

    @Query(returns => StudentType)
    student(
        @Args('id')id: number,
    ){
        return this.studentService.getStudent(id); 
    }

    @Query(returns => [StudentType])
    students(){
        return this.studentService.getStudents(); 
    }

    @Mutation(returns => StudentType)
    createStudent(
        @Args('createStudentInput')createStudentInput: CreateStudentInput
    ){
        return this.studentService.createStudent(createStudentInput);
    }

    @Mutation(returns => StudentType)
    updateStudent(
        @Args('id') id: number, 
        @Args('updateStudentInput') updateStudentInput: UpdateStudentInput
    ){
        return this.studentService.updateStudent(id, updateStudentInput);
    }

    @Mutation(returns => StudentType)
    deleteStudent(
        @Args('id') id: number,
    ){
        return this.studentService.deleteUser(id);
    }


}