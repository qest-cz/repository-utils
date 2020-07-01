export interface IGetAllByParams<T> {
    query?: Partial<T>;
    limit?: number;
    offset?: number;
    orderBy?: string;
    orderDesc?: boolean;
}

export interface IRepository<T> {
    getAllByParams(params: IGetAllByParams<T>): Promise<T[]>;
    getById(id: any): Promise<T>;
    getByParams(params: Partial<T>): Promise<T>;
    countByParams(params: Partial<T>): Promise<number>;
    insert(entity: Partial<T>): Promise<T>;
    updateById(id: any, data: Partial<T>): Promise<T>;
    updateByParams(params: Partial<T>, data: Partial<T>): Promise<number>;
    upsert(searchParams: Partial<T>, data: Partial<T>): Promise<number>;
    deleteByParams(params: Partial<T>): Promise<number>;
}
