import { Resolver, Args, Query, Mutation } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { LessonType } from './lesson.type';
import { CreateLessonInput } from "./input/create-lesson.input";
import { UpdateLessonInput } from "./input/update-lesson.input";


@Resolver(of => LessonType)
export class LessonResolver{
    constructor(
        private lessonService: LessonService,
    ){}

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: number, 
    ){
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    lessons(){
        return this.lessonService.getLessons(); 
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('createLessonInput') createLessonInput: CreateLessonInput,
    ){
        return this.lessonService.createlesson(createLessonInput);
    }

    @Mutation(returns => LessonType)
    updateLesson(
        @Args('id') id:number, 
        @Args('updateLessonInput') updateLessonInput: UpdateLessonInput, 
    ){
        return this.lessonService.updateLesson(id, updateLessonInput);
    }

    @Query(returns => LessonType)
    deleteLesson(
        @Args('id') id: number, 
    ){
        return this.lessonService.deleteLesson(id);
    }
}