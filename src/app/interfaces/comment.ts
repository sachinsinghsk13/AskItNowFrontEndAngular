import { EmbeddedUser } from './embedded-user';

export interface Comment {
    id: number;
    body: string;
    postedBy: EmbeddedUser;
    duration: string;
    postedTime: number;
    answerId: number;
}