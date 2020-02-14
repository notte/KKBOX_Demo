// import { IError } from '@/models/interfaces/error';
// import EventBus from '@/utilities/event-bus';
import Vue from 'vue';
// import Cookies from 'js-cookie';

/*
 * axios error handler
 */

const responseSuccess = (response: any) => {};

/*
 * axios error handler
 */

const responseFail = (errorData: any) => {};

/*
 * axios error handler
 */

const requestSuccess = (config: any) => {
	return config;
};

/*
 * axios error handler
 */

const requestFail = (error: any) => {};

// let err: IError = {};

export { requestSuccess, requestFail, responseSuccess, responseFail };
