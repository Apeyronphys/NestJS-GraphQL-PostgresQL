import { Resolver } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver{
    constructor(
        private lessonService: LessonService,
    ){}
}