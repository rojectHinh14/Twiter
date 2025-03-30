import { Grid } from "@mui/material";
import React from "react";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TwitDetails from "../TweetDetail/TwitDetails";

const HomePage = () => {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="lg:block w-full relative hidden">
        <p className="text-center">
          <Navigation />
        </p>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        className="lg:block w-full hidden relative px-5 lg:px-9"
      >
          <Routes>
            <Route path="/home" element={<HomeSection />}>
              {" "}
            </Route>
            <Route path="/" element={<HomeSection />}>
              {" "}
            </Route>
            <Route path="/profile/:id" element={<Profile />}>
              {" "}
            </Route>
            <Route path="/twit/:id" element={<TwitDetails />}>
              {" "}
            </Route>
          </Routes>
       
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        <p className="text-center">
          <RightPart />
        </p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
