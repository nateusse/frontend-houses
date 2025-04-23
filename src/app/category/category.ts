export interface Category {
    id?: number;
    name: string;
    description: string;
}

export interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}
  