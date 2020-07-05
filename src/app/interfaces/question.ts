import { Category } from './category';
import { EmbeddedUser } from './embedded-user';
import { ImageAttachment } from './image-attachment';

export interface Question {
    id: number;
    title: string;
    body: string;
    totalAnswers: number;
    postedTime: number;
    duration: string;
    category: Category;
    postedBy: EmbeddedUser;
    imageAttachments: ImageAttachment[];
}
