import { Publication } from './publication';

export interface Publications {
    "current_page": 1,
    "data": Publication[],
    "per_page": number,
    "prev_page_url": string,
    "to": number,
    "total": number,
    "next_page_url": string,
    "path": string,
    "last_page": number,
    "last_page_url": string,
    "first_page_url": string
    "from": number,
}
