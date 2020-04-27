// models > status，為管理類別的檔案，例如訊息類型：錯誤、成功、確認等

// 紀錄當前熱門歌單顯示內容
export enum PopularType {
	// 熱門類別列表
	PopularList = 'PopularList',
	// 熱門類別列表歌單
	Playlist = 'PopularPlaylist',
	// 專輯
	Album = 'PopularAlbum',
	// 歌手
	Artist = 'PopularArtist',
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

// 系統訊息回應類型
export enum SysMessageType {
	// 資訊
	Information = 'Information',
	// 警告
	Warning = 'Warning',
	// 錯誤
	Error = 'Error',
	// 完美
	Success = 'Success',
	// 確認
	Confirmation = 'Confirmation',
	// 確認&取消
	ConfirmationWithCancel = 'ConfirmationWithCancel',
}

// 錯誤訊息類型
export enum ErrorPopupContent {
	// 網路錯誤
	InternalServer = 'Error.__internal_server',
	// 輸入錯誤
	IncorrectInputData = 'Error.__Incorrect_Input_Data',
}

// 歌單類型

export enum PlaylistType {
	Popular = 'Popular',
	MainList = 'MainList',
}
