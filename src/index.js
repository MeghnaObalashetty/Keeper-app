import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './components/App';
// react dom . render is depreciated
// ReactDOM.render(
//   <App/>,document.getElementById("root")
// );
createRoot(document.getElementById('root')).render(<App />);