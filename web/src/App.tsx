import router from './config/router.tsx';
import {
  RouterProvider,
} from "react-router-dom";
import './App.css'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
