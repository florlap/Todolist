import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoApp from './components/todoApp.jsx'
//import Footer from './Footer.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Footer/> */}
    <App />
    <TodoApp/>
    

  </React.StrictMode>,
)
