import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// CRITICAL: Define environment-specific variables needed by the application structure.
// This ensures that structural requirements (like API key handling) are met.
const canvasGlobalProps = {
    // These keys are expected to be available in the execution environment
    __app_id: typeof __app_id !== 'undefined' ? __app_id : 'default-app-id',
    __firebase_config: typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {},
    __initial_auth_token: typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Pass environment props to App component */}
    <App canvasProps={canvasGlobalProps} />
  </React.StrictMode>
);
