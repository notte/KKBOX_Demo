// 紀錄當前熱門歌單顯示內容
export enum PopularType {
	// 熱門類別列表
	PopularList = 'PopularList',
	// 熱門類別列表歌單
	Playlist = 'Playlist',
	// 專輯
	Album = 'Album',
	// 歌手
	Artist = 'Artist',
}

// 紀錄當前主題歌單顯示內容
export enum MainType {
	// 主題類別列表
	MainList = 'MainList',
	// 主題類別的類別
	MainType = 'MainType',
	// 主題歌單
	Playlist = 'MainPlaylist',
	// 專輯
	Album = 'MainAlbum',
	// 歌手
	Artist = 'MainArtist',
}

// 紀錄當前授權使用者顯示內容
export enum MeType {
	Profile = 'Profile',
}

// 系統訊息回應類型
export enum SysMessageType {
	Information = 'Information',
	Warning = 'Warning',
	Error = 'Error',
	Success = 'Success',
	Confirmation = 'Confirmation',
	ConfirmationWithCancel = 'ConfirmationWithCancel',
}
