export interface IgetMaiinListCategories {
    data: IData[];
    paging: IPaging;
    summary: ISummary;
}

export interface ISummary {
    total: number;
}


export interface IPaging {
    offset: number;
    limit: number;
    previous: void;
    next: void;
}


export interface IData {
    id: string;
    title: string;
    images: IImag[];
}


export interface IImag {
    height: number;
    width: number;
    url: string;
}