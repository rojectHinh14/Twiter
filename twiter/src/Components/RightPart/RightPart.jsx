import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BrightnessIcon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreHoriz";
const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("Change theme success");
  };
  return (
    <div className="py-5 sticky top">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <BrightnessIcon
          className="ml-3 cursor-pointer"
          onClick={handleChangeTheme}
        />
      </div>
      <section className="my-5 text-start ">
        <h1 className="text-xl font-bold">Get Verify</h1>
        <h1 className="font-bold my-2">Subscribe to unlock new Feature</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get verified
        </Button>
      </section>

      <section className="mt-7 space-y-4 text-start">
        <h1 className="font-bold text-xl py-1">What's happening</h1>
        
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Entertainment · Trending</p>
            <p className="font-bold">#TheMarvels</p>
            <p className="text-sm text-gray-500">34.3k Tweets</p>
          </div>
          <MoreIcon className="text-gray-500 cursor-pointer" />
        </div>
      </section>
    </div>
  );
};

export default RightPart;
