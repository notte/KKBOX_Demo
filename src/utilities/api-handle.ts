import Vue from 'vue';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { requestSuccess, requestFail, responseSuccess, responseFail } from './error-handler';

/*
 * axios API handler
 */

class HttpAxios {
	constructor() {}
	async request<T>(cfg: AxiosRequestConfig) {
		// 如果在Storage中取得Token，夾帶在header中
		if (localStorage.getItem('accessToken')) {
			cfg.headers = {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			};
		} else {
			cfg.headers = {
				Accept: 'application/x-www-form-urlencoded',
				'Content-Type': 'application/x-www-form-urlencoded',
			};
		}

		// 建立axios實體
		const instance = axios.create();

		// 請求攔截
		instance.interceptors.request.use(
			config => requestSuccess(config),
			// 將err帶入
			err => requestFail(err)
		);

		// 回應攔截
		instance.interceptors.response.use(
			response => responseSuccess(response),
			errorData => responseFail(errorData)
		);

		let result;
		// 這裡要補足知識
		try {
			result = await instance.request<T>(cfg);
			return Promise.resolve(result);
		} catch (throwError) {
			return Promise.reject(throwError);
		}
	}
}

const model = new HttpAxios();

export default model;
