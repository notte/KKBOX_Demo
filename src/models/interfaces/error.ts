// 錯誤訊息

export interface IError {
	traceId: string;
	error: IErrorData;
}

export interface IErrorData {
	code: string;
	message: string;
}

export interface IErrorMessage {
	type: string;
	message: string;
	callback: (...args: []) => void;
}

export interface IShowMessage {
	show: boolean;
	message: string;
	callback: (...args: []) => void;
}

export interface IShowMessageBasedOnType {
	Confirmation: IShowMessage;
	ConfirmationWithCancel: IShowMessage;
	Error: IShowMessage;
	Success: IShowMessage;
	Toast: IShowMessage;
}
