import React, { useState } from "react";
import KeyBoardIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationIcon from "@mui/icons-material/LocationOn";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModel from "./ProfileModal";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleOpenProfileModle = () => {};
  const handleFollowUser = () => {
    console.log("Hello User");
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);

    if(newValue === 4){
        console.log("like twit")
    }else{
        console.log("user twit")
    }
  };

  return (
    <div>
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95">
        <KeyBoardIcon className="cursor-pointer" onClick={handleBack}>
          <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
            Hinh dep trai
          </h1>
        </KeyBoardIcon>
      </section>

      <section>
        <img className="w-[100%] h-[15rem] object-cover" src="" alt="" />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="code with Hinh"
            src=""
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          ></Avatar>
          {true ? (
            <Button
              onClick={handleOpenProfileModle}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile{" "}
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              className="rounded-full"
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Code with Hinh</h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                viewBox="0 0 22 22"
                src="https://img.freepik.com/premium-vector/facebook-vector-social-media-icon_459124-520.jpg"
              />
            )}
          </div>
          <h1 className="text-gray-500 text-start">@Email.com</h1>
        </div>
        <div className="mt-2 space-y-3 text-start">
          <p>Hello , I'm Van Hinh, you will find full stack profile </p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Location</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationIcon />
              <p className="ml-2 ">Viet Nam</p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarIcon />
              <p className="ml-2">Join in Jun 2025</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>509</span>
              <span className="text-gray-500">Followers</span>
            </div>

            <div className="flex items-center space-x-1 font-semibold">
              <span>10000</span>
              <span className="text-gray-500">Followings</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
               <Tab label=" Tweets" value="1"/>
            <Tab label="Reply" value="2"/>
            <Tab label="Media" value="3"/>
            <Tab label="Like" value="4"/>

       </TabList>
            </Box>
            <TabPanel  value="1">{[1,1,1,1].map((item) => <TweetCard/>)}</TabPanel>
            <TabPanel value="2">User Reply</TabPanel>
            <TabPanel  value="3">Media</TabPanel>
            <TabPanel  value="4">Likes</TabPanel>

          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModel/>
      </section>
    </div>
  );
};

export default Profile;
