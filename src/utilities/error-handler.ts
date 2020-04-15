import { IError, IErrorData } from '@/models/interfaces/error';
import EventBus from '@/utilities/event-bus';

//  請求成功，把config直接帶入
const requestSuccess = (config: any) => {
	return config;
};

//  請求失敗，超時
const requestFail = (error: any) => {
	err.message = '[token null] request fail';
	// 發送api-error事件，並帶入err物件
	EventBus.$emit('api-error', err);
	// 返回給Promise
	return Promise.reject(error);
};

// 回應成功，通過response
const responseSuccess = (response: any) => {
	return Promise.resolve(response);
};

// 回應失敗
const responseFail = (errorData: any) => {
	const { traceId, error } = <IError>errorData.response.data;
	// 有錯誤物件
	if (errorData.response) {
		// 有這兩個資料
		if (traceId && error) {
			// 直接把錯誤物件帶入
			err.message = errorData.response.data.error.message;
		} else {
			// 將errorData.response的錯誤狀態碼、訊息等分別宣告
			const { status, data, statusText } = errorData.response;
			// 賦值
			err.code = status;
			err.message = `${data} ${statusText}`;
		}
	} else {
		// 如果都沒有，只帶入訊息
		err.message = JSON.stringify(errorData);
	}
	// 發送api-error事件，並帶入err物件
	EventBus.$emit('api-error', err);
	// 返回給Promise物件
	return Promise.reject(err);
};

// 宣告err類別為IError，然後預設為空值
const err: IErrorData = {
	code: '',
	message: '',
};

export { requestSuccess, requestFail, responseSuccess, responseFail };
