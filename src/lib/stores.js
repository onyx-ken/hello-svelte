import { writable } from 'svelte/store';

// count의 초기값을 10으로 설정
export const countStore = writable(10);