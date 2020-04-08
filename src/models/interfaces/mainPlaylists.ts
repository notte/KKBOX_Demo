// 主題類別
export interface IGetMainListCategories {
	data: IData[];
	paging: IPaging;
	summary: ISummary;
}

// 各類別中的清單列表
export interface IGetMainCategory {
	id: string;
	title: string;
	images: IImag[];
	playlists: IPlaylist;
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

export interface IPlaylist {
	data: IMainCateforyListData[];
	paging: IPaging;
	summary: ISummary;
}

export interface IMainCateforyListData {
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
