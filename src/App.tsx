import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import { ThemeButton } from "./ThemeButton";
import { dances } from "./dances";
import { Dance } from "./pages/Dance";
import { Home } from "./pages/Home";

import "./App.css";
import "material-symbols/outlined.css";

const root = document.getElementById("root")!;

createRoot(root).render(
  <HashRouter>
    <StrictMode>
      <div className="flex flex-col gap-4 p-4 text-neutral-800 dark:text-neutral-200">
        <ThemeButton />
        <Routes>
          <Route index element={<Home />} />
          {dances.map((dance) => (
            <Route
              key={dance.key}
              path={dance.key}
              element={<Dance dance={dance} />}
            />
          ))}
        </Routes>
      </div>
    </StrictMode>
  </HashRouter>,
);
