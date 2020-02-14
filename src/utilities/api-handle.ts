import Vue from 'vue';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { requestSuccess, requestFail, responseSuccess, responseFail } from './error-handler';
import { Message } from 'element-ui';

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
		const instance = axios.create();
		let result;
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
