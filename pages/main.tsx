import React from 'react';
import {createRoot} from 'react-dom/client';
import Practice from './practice';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Practice/></React.StrictMode>);
