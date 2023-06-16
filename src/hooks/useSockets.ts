import { useEffect, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

const useSocket = (url: string): Socket | null => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(url); // Connect to the specified server URL

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect(); // Disconnect on component unmount
      }
    };
  }, [url]);

  return socketRef.current;
};

export default useSocket;
