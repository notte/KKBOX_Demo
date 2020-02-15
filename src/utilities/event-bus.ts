import Vue from 'vue';
import { SysMessageType } from '@/models/status/type';

// 系統訊息
export const SystemAlert = (type: SysMessageType, message: string, callback: any = () => {}) => {
	EventBus.$emit('system-alert', {
		type,
		message,
		callback,
	});
};

const EventBus = new Vue();
export default EventBus;
