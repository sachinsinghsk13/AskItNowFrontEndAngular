import { EmbeddedUser } from './embedded-user';
import { ImageAttachment } from './image-attachment';

export interface Answer {
    id: number;
    body: string;
    duration: string;
    postedTime: number;
    postedBy: EmbeddedUser;
    imageAttachments: ImageAttachment[];
    questionId: number;
    totalUpvotes: number;
    totalDownvotes: number;
    totalComments: number;
}