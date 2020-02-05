import Vue from 'vue';
import { Message } from 'element-ui';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

/**
 * axios API handler
 * 一律透過此呼叫api
 * @author Yoyo
 */

class HttpAxios {
	constructor() {}
	async request<T>(cfg: AxiosRequestConfig) {
		// console.log(cfg);
	}
}

const model = new HttpAxios();

export default model;
