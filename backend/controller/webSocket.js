import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  // Simulated market data update every 5 seconds
  setInterval(() => {
    const markets = [
      {
        market_name: "Bitcoin Market",
        current_price: (Math.random() * 100000).toFixed(2)
      },
      {
        market_name: "Ripple Market",
        current_price: (Math.random() * 10).toFixed(2)
      },
      {
        market_name: "Ethereum Market",
        current_price: (Math.random() * 5000).toFixed(2)
      }
    ];

    // Broadcast market data to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(markets));
      }
    });
  }, 5000);
});

export default wss;
