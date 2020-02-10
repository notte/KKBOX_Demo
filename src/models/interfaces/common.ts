export interface IgetTokenRequest {
	grant_type: string;
	client_id: string;
	client_secret: string;
}

export interface IgetTokenReponse {
	access_token: string;
	expires_in: number;
	token_type: string;
}


// 搜尋

export interface ISearchRequest {
	q: string;
	territory: string;
	limit: number;
	type: string;
}


export interface ISearchReponse {
	tracks: ITrack;
	paging: IPaging;
	summary: ISummary;
}

export interface ITrack {
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
	previous: void /* 未知类型 */;
	next: string;
}

export interface IData {
	id: string;
	name: string;
	duration: number;
	isrc: string;
	url: string;
	'track_number': number;
	explicitness: boolean;
	'available_territories': string[];
	album: IAlbum;
}


export interface IAlbum {
	id: string;
	name: string;
	url: string;
	explicitness: boolean;
	'available_territories': string[];
	'release_date': string;
	images: IImag[];
	artist: IArtist;
}


export interface IArtist {
	id: string;
	name: string;
	url: string;
	images: IImag[];
}


interface IImag {
	height: number;
	width: number;
	url: string;
}