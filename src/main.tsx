
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routeConfig } from './shared/config/routeConfig.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './app/styles/theme.ts';

export const router = createBrowserRouter(Object.values(routeConfig));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)
