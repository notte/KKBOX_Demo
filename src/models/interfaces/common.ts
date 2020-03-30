// models > interfaces，為管理資料型別的檔案

// get Token API

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

// Search API

export interface ISearchRequest {
	q: string;
	territory: string;
	type: string;
	limit?: number;
}

export interface ISearchReponse {
	tracks: ITrack;
	paging: IPaging;
	summary: ISummary;
}


// getPlaylist，取得歌單列表

export interface IgetPlaylistReponse {
	tracks: ITrack;
	id: string;
	title: string;
	description: string;
	url: string;
	images: IImag[];
	updated_at: string;
	owner: IOwner;
}

// 取得專輯

export interface IAlbum {
	id: string;
	name: string;
	url: string;
	explicitness: boolean;
	available_territories: string[];
	release_date: string;
	images: IImag[];
	artist: IArtist;
}

// 取得歌手

export interface IArtist {
	id: string;
	name: string;
	url: string;
	images: IImag[];
}

export interface ISummary {
	total: number;
}

export interface IPaging {
	offset: number;
	limit: number;
	previous: void;
	next: string;
}

export interface IData {
	id: string;
	name: string;
	duration: number;
	isrc: string;
	url: string;
	track_number: number;
	explicitness: boolean;
	available_territories: string[];
	album: IAlbum;
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

export interface ITrack {
	data: IData[];
	paging: IPaging;
	summary: ISummary;
}

export interface IPlaylist {
	id: string;
	name: string;
	release_date: string;
	artist: object;
}

export interface IArtistTrack {
	data: ITrackData[];
	paging: IPaging;
	summary: ISummary;
}


export interface ITrackData {
	// id: string;
	// name: string;
	// duration: number;
	// isrc: string;
	// url: string;
	// 'track_number': number;
	// explicitness: boolean;
	// 'available_territories': string[];
	id: string;
	name: string;
	url: string;
	explicitness: boolean;
	'available_territories': void[];
	'release_date': string;
	images: IImag[];
	artist: IArtist;
}

