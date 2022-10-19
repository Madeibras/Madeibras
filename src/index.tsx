import { CarrouselProvider } from 'Common/Carrousel.d';
import { WhatsAppProvider } from 'Common/WhatsApp.d';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterDOM from 'Router';
import {DarkThemeProvider} from './Common/darkModeContext.d'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <WhatsAppProvider>
          <CarrouselProvider>
            <DarkThemeProvider>
                <RouterDOM basename={baseUrl} />
            </DarkThemeProvider>
          </CarrouselProvider>
        </WhatsAppProvider>
    </React.StrictMode>
  
);

