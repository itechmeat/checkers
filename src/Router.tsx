import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./views/HomePage";
import { AboutPage } from "./views/AboutPage";
import { GamesListPage } from "./views/games/GamesListPage";
import { CreateGamePage } from "./views/games/CreateGamePage";
import { GamePage } from "./views/games/GamePage";
import { ProfilesListPage } from "./views/profiles/ProfilesListPage";
import { ProfilePage } from "./views/profiles/ProfilePage";
import { NotFoundPage } from "./views/NotFoundPage";

export const Router: FC = () => {
  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="games">
          <Route index element={<GamesListPage />} />
          <Route path="create" element={<CreateGamePage />} />
          <Route path=":gameId" element={<GamePage />} />
        </Route>

        <Route path="profiles">
          <Route index element={<ProfilesListPage />} />
          <Route path=":profileNickname" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
