// 帶入api handler，透過此去call api
import Handler from '@/utilities/api-handle';
// 管理request及reponse型別
import * as Model from '@/models/interfaces/common';

// 共用api

export default {
	// 取得Token
	async getToken(payload: Model.IgetTokenRequest): Promise<Model.IgetTokenReponse> {
		const config = {
			method: 'post',
			url: `/token`,
			data: payload,
		};
		const result = await Handler.request(config);
		return <Model.IgetTokenReponse>result.data;
	},
	// 搜尋
	async Search(payload: Model.ISearchRequest): Promise<Model.ISearchReponse> {
		const config = {
			method: 'get',
			url: `/api/search?q=${payload.q}&territory=${payload.territory}&limit=${payload.limit}&type=${payload.type}`,
			data: payload,
		};
		const result = await Handler.request(config);
		return <Model.ISearchReponse>result.data;
	},
	// 取得歌單
	async getPlaylist(id: string): Promise<Model.IgetPlaylistReponse> {
		const config = {
			method: 'get',
			url: `/api/new-hits-playlists/${id}?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IgetPlaylistReponse>result.data;
	},
	// 取得專輯
	async getAlbum(id: string): Promise<Model.IAlbum> {
		const config = {
			method: 'get',
			url: `/api/albums/${id}?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IAlbum>result.data;
	},
	// 取得專輯曲目
	async getTracks(id: string): Promise<Model.ITrack> {
		const config = {
			method: 'get',
			url: `/api/albums/${id}/tracks?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.ITrack>result.data;
	},
	// 以歌手ID取得歌手專輯列表
	async getArtist(id: string): Promise<Model.IArtistTrack> {
		const config = {
			method: 'get',
			url: `/api/artists/${id}/albums?territory=TW`,
		};
		const result = await Handler.request(config);
		return <Model.IArtistTrack>result.data;
	},
	// async getArtist(id: string): Promise<Model.IArtist> {
	// 	const config = {
	// 		method: 'get',
	// 		url: `/api/artists/${id}?territory=TW`,
	// 	};
	// 	const result = await Handler.request(config);
	// 	return <Model.IArtist>result.data;
	// },
};
