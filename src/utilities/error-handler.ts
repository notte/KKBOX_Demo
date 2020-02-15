import { IError } from '@/models/interfaces/error';
import EventBus from '@/utilities/event-bus';
import Vue from 'vue';
// import Cookies from 'js-cookie';
import { Message } from 'element-ui';

//  請求成功，把config直接帶入
const requestSuccess = (config: any) => {
	return config;
};

//  請求失敗，超時
const requestFail = (error: any) => {
	err.error.message = '[token null] request fail';
	EventBus.$emit('api-error', err);
	return Promise.reject(error);
};

// 回應成功，通過response
const responseSuccess = (response: any) => {
	//
	// 試試看呼叫成功訊息
	EventBus.$emit('api-error', response);
	// console.log(response);

	return Promise.resolve(response);
};

// 回應失敗，回傳err物件
const responseFail = (errorData: any) => {
	const { traceId, error } = <IError>errorData.response.data;
	// 有錯誤物件
	if (errorData.response) {
		// 有這兩個資料
		if (traceId && error) {
			// 直接把錯誤物件帶入
			err = <IError>errorData.response.data;
		} else {
			// 將errorData.response的錯誤狀態碼、訊息等分別宣告
			const { status, data, statusText } = errorData.response;
			// 賦值
			err.error.code = status;
			err.error.message = `${data} ${statusText}`;
		}
	} else {
		// 如果都沒有，只帶入訊息
		err.error.message = JSON.stringify(errorData);
	}
	// 用event-bus傳err
	EventBus.$emit('api-error', err);
	// 返回給Promise物件
	return Promise.reject(err);
};

let err: IError = {
	traceId: '',
	error: { code: '', message: '' },
};

export { requestSuccess, requestFail, responseSuccess, responseFail };
