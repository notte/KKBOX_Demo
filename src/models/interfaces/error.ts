// 錯誤物件回傳的型別
export interface IError {
	traceId: string;
	error: IErrorData;
}

// 錯誤code以及訊息型別
export interface IErrorData {
	code: string;
	message: string;
}

// export interface IErrorMessage {
// 	type: string;
// 	message: string;
// 	callback: (...args: []) => void;
// }

// export interface IShowMessage {
// 	show: boolean;
// 	message: string;
// 	callback: (...args: []) => void;
// }

// export interface IShowMessageBasedOnType {
// 	Confirmation: IShowMessage;
// 	ConfirmationWithCancel: IShowMessage;
// 	Error: IShowMessage;
// 	Success: IShowMessage;
// 	Toast: IShowMessage;
// }
