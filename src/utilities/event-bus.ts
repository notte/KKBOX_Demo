import Vue from 'vue';
import { SysMessageType } from '@/models/status/type';

// 系統訊息，參數為型別（帶入enum）、訊息（帶入response）
export const SystemAlert = (type: SysMessageType, message: string) => {
	// 發送system-alert事件
	EventBus.$emit('system-alert', {
		type,
		message,
	});
};

const EventBus = new Vue();
export default EventBus;
