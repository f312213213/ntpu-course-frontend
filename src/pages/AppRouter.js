import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Member from "./Member";

const AppRouter = () => {
  return (
      <div className={'ml-16 bg-custom-100'}>
        <Routes>
          <Route path={'/login'} exact element={<Login />} />
          <Route path={'/member'} exact element={<Member />} />
          <Route path={'/'} exact element={<Home />} />
        </Routes>
      </div>
  );
};

export default AppRouter;
