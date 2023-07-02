import { io } from 'socket.io-client';
import { baseURL } from './const';

const URL = baseURL;
export const socket = io(URL, { transports: ['websocket'] });
