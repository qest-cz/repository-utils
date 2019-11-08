export interface IGetAllByParams<T> {
    query?: Partial<T>;
    limit?: number;
    offset?: number;
    orderBy?: string;
    orderDesc?: boolean;
}

export interface IMapper<T> {
    getAllByParams(args: IGetAllByParams<T>): Promise<T[]>;
    getById(id: any): Promise<T>;
    getByParams(t: Partial<T>): Promise<T>;
    countByParams(t: Partial<T>): Promise<number>;
    insert(t: Partial<T>): Promise<T>;
    updateById(id: any, t: Partial<T>): Promise<T>;
    updateByParams(w: Partial<T>, t: Partial<T>): Promise<number>;
    upsert(w: Partial<T>, t: Partial<T>): Promise<number>;
    deleteByParams(t: Partial<T>): Promise<number>;
}
