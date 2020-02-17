export interface IgetNewHitsPlaylistsReponse {
	data: IData[];
	paging: IPaging;
	summary: ISummary;
}

interface ISummary {
	total: number;
}

interface IPaging {
	offset: number;
	limit: number;
	previous: void;
	next: void;
}

interface IData {
	id: string;
	title: string;
	description: string;
	url: string;
	images: IImag[];
	updated_at: string;
	owner: IOwner;
}

interface IOwner {
	id: string;
	url: string;
	name: string;
	description: string;
	images: IImag[];
}

interface IImag {
	height: number;
	width: number;
	url: string;
}
