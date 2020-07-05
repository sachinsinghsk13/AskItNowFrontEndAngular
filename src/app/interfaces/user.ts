import { Address } from './address';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    gender: string;
    address: Address;
    dateOfBirth: number;
    profession: string;
    bio: string;
    created: number;
    totalQuestions: number;
    totalAnswers: number;

}