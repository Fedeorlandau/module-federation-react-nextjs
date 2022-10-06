import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root2');
const anotherContainer = document.getElementById('root');
const root = createRoot(container);
const anotherRoot = createRoot(anotherContainer);

root.render(<App />);
// anotherRoot.render(<App />);
