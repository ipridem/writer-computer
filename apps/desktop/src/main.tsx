import "./wdyr";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "./components/error-boundary";
import { detectPlatform } from "./lib/platform";
import { mark } from "./lib/startup-metrics";

mark("script-eval");

// Platform-specific chrome (title bar insets, backgrounds) keys off this in CSS.
document.documentElement.dataset.platform = detectPlatform();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
