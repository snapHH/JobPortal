
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import * as ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />,
)
