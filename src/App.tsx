import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";

import { ThemeButton } from "./ThemeButton";
import { Home } from "./pages/Home";

import "./App.css";
import "material-symbols/outlined.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <HashRouter>
    <StrictMode>
      <div className="flex flex-col gap-4 p-4 text-gray-900 dark:text-gray-100">
        <ThemeButton />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </StrictMode>
  </HashRouter>,
);
