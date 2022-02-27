import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

const AppRouter = () => {
  return (
      <div className={'ml-16'}>
        <Routes>
            <Route path={'/'} exact element={<Home />} />
        </Routes>
      </div>
  );
};

export default AppRouter;
