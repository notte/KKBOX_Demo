import Vue from 'vue';
import * as Status from '@/models/status/type';

// 系統訊息，參數為型別（帶入enum）、訊息（帶入response）
export const SystemAlert = (type: Status.SysMessageType, message: string) => {
	// 發送system-alert事件
	EventBus.$emit('system-alert', {
		type,
		message,
	});
};

// 傳遞歌單、專輯、歌手
export const getInfo = (id: string, tab: Status.PopularType) => {
	// 發送事件
	EventBus.$emit('get-info', { id, tab });
};

// 傳遞主題歌單
export const getMain = (id: string, tab: Status.MainType) => {
	// 發送事件
	EventBus.$emit('get-info', { id, tab });
};

const EventBus = new Vue();
export default EventBus;
