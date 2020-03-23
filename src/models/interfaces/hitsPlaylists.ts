// 最新主題熱門歌單
export interface IGetNewHitsPlaylistsReponse {
	data: IData[];
	paging: IPaging;
	summary: ISummary;
}

// 共用組件

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
	description: string;
	url: string;
	images: IImag[];
	updated_at: string;
	owner: IOwner;
}

export interface IOwner {
	id: string;
	url: string;
	name: string;
	description: string;
	images: IImag[];
}

export interface IImag {
	height: number;
	width: number;
	url: string;
}
