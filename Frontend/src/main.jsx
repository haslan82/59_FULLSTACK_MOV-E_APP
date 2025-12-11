
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Bounce, ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
 
   <QueryClientProvider client={queryClient}>
    <App />
  <ToastContainer
position="top-right"
autoClose={900}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
transition={Bounce}
/>
    </QueryClientProvider>
  
)
