import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element in index.html and create a React root
createRoot(document.getElementById("root")!).render(<App />);
