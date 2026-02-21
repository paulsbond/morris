import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { ThemeButton } from "./ThemeButton";
import { dances } from "./dances";
import { DancePage } from "./DancePage";
import { HomePage } from "./HomePage";

import "./App.css";
import "material-symbols/outlined.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <HashRouter>
    <StrictMode>
      <div className="flex flex-col gap-4 p-4 text-neutral-800 dark:text-neutral-200">
        <ThemeButton />
        <Routes>
          <Route index element={<HomePage />} />
          {dances.map((dance) => (
            <Route
              key={dance.key}
              path={dance.key}
              element={<DancePage dance={dance} />}
            />
          ))}
        </Routes>
      </div>
    </StrictMode>
  </HashRouter>,
);
