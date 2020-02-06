import Vue from 'vue';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Message } from 'element-ui';

/**
 * axios API handler
 * 透過此呼叫api
 * @author Yoyo
 */

class HttpAxios {
	constructor() {}
	async request<T>(cfg: AxiosRequestConfig) {
		cfg.headers = {
			Accept: 'application/x-www-form-urlencoded',
			'Content-Type': 'application/x-www-form-urlencoded',
		};
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
