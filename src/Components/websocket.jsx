import React, { useState, useEffect } from 'react';
import axios from 'axios'
const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const [apiResponse , apiResponseSet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/game-server', {
          playerAddress: "1234567890",
          gameMode: "challenge",
          gameId: "1",
          tournamentId: null,
          entryId: "1"
        });
        // Assuming response.data.data.data is the structure of your response
        console.log("=================================================================" , response.data.data);
        apiResponseSet(response.data.data);
        console.log(response.data); // Log the entire response object
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors
      }
    };

    fetchData();
    return () => {
        // Cleanup function (optional)
        // You can perform any cleanup here, like cancelling pending requests
      };
    }, []); 

  useEffect(() => {
    if(!apiResponse) return
    console.log("url",`ws://aae5-124-123-24-242.ngrok-free.app/api/v1/?token=${apiResponse?.data}`);
    const newWebSocket = new WebSocket("ws://aae5-124-123-24-242.ngrok-free.app/api/v1/?token="+apiResponse?.data);
    
    newWebSocket.onopen = () => {
      console.log('WebSocket connected');
    };

    newWebSocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    newWebSocket.onclose = () => {
      console.log('WebSocket disconnected');
    };
    newWebSocket.onerror = (e) => {
        console.log('WebSocket eeeee',e);
      };
    setWs(newWebSocket);

    // Cleanup WebSocket connection on unmount
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [apiResponse]);

  const sendMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    } else {
      console.log('WebSocket not connected');
    }
  };

  return (
    <div>
      <h1>WebSocket Component</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <button onClick={() => sendMessage('Hello from client')}>Send Message</button>
    </div>
  );
};

export default WebSocketComponent;
