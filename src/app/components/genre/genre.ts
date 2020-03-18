import { Comm } from '../comm/comm';

export interface Genre {
    id: string;
    name: string;
    macro: string;
    comments: Comm[];
    SOPs: Genre[]; 
    restrictions: Genre[];
    subGenres: Genre[];
}
