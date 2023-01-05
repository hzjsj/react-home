import 'antd/dist/reset.css';
import './app.css'
import { RouterProvider } from "react-router-dom";

import router from './router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
