import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 600,
          createdAt: new Date('2022-01-10 19:00:00')
        },
        {
          id: 2,
          title: 'Comida',
          type: 'withdraw',
          category: 'Casa',
          amount: 100,
          createdAt: new Date('2022-06-10 19:00:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
     const data = JSON.parse(request.requestBody)

     return schema.create('transaction', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
