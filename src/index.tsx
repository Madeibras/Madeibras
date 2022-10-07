import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDOM from 'Router';
import {DarkThemeProvider} from './Common/darkModeContext.d'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <DarkThemeProvider>
          <RouterDOM />
      </DarkThemeProvider>
    </React.StrictMode>
  
);

