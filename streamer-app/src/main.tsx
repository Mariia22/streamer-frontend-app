import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import theme from "./style/theme.ts";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
