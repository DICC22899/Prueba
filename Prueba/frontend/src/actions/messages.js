import { CREATE_MESSAGE } from './types';

//CREATE MESSAGE
export const createMesssage = msg => {
    return {
        type: CREATE_MESSAGE, 
        payload:msg
    };
};