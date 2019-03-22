import io from "socket.io-client";

export const zplaySocket = io('http://1zplay.com:8080', {
        transports: ['websocket'],
        autoConnect: false
    }
);
export const zplaySocketReserve = io('http://1zplay.com:8080', {
        transports: ['websocket'],
        autoConnect: false
    }
);
