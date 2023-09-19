import { createRoot } from 'react-dom/client';
import './index.css';
import {NextUIProvider} from '@nextui-org/react' 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Show from './pages/Show.jsx';
import Header from './compoenets/Header';

createRoot(document.getElementById('root')).render(
  <NextUIProvider>
  {/* <main className="dark text-foreground bg-background"> */}

  <BrowserRouter>
  <div className='bg-slate-200 font-Montserrat'>
  <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Show />} />
    </Routes>
  </div>
  </BrowserRouter>
  {/* </main> */}
  </NextUIProvider>
);

