import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/ChatBubbleOutline"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import BarChartIcon from "@mui/icons-material/BarChart"
import FavorIcon from "@mui/icons-material/Favorite"

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenReplyModel =() =>{
        console.log("Open Success")
  };
  const hadnleCreateReTweet = () =>{
    console.log("Retweet success");
  };
  const hadnleLikeTweet = () =>{
    console.log("Retweet success");
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    handleClose;
  };
  return (
    <div className=" ">
      <div className="flex items-center font-semibold text-gray-500 py-2">
        <RepeatIcon />
        <p>You retweet</p>
      </div>

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="userName"
          src=""
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Code with Hinh</span>
              <span className="text-gray-600">@email</span>
              <img 
  className="ml-2 w-5 h-5"
  viewBox="0 0 22 22"
  src="https://img.freepik.com/premium-vector/facebook-vector-social-media-icon_459124-520.jpg"
 />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                <MenuItem onClick={handleDelete}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">

                <div className="cursor-pointer" onClick={() => navigate(`/twit/${3}`)}>
                     <p className="mb-2 p-0 text-xl text-start   ">Nice tutorial</p>
                    <img src="https://d19ri4mdy82u9u.cloudfront.net/movies/608e07bead00c46847984e59/hX3jjuDgBqscNJc1NaXp.png" className="w-[28rem] rounded-md border border-gray-400" alt="" />
                </div>


                <div className="py-5 flex-wrap justify-between items-center flex">
                    <div className="space-x-3 flex items-center text-gray-500">
                    <ChatIcon className="cursor-pointer " onClick={handleOpenReplyModel}/>
                    <p>100</p>
                    </div>

                    <div className={`${true ? "text-pink-500" : "text-gray-600"} space-x-3 flex items-center`}>
                        <RepeatIcon className="cursor-pointer"
                        onClick={hadnleCreateReTweet}/>
                        <p>100</p>
                    </div>

                    <div className={`${true ? "text-pink-500" : "text-gray-600"} space-x-3 flex items-center`}>
                        {true ? <FavorIcon className="cursor-pointer"
                        onClick={hadnleLikeTweet}/> : <FavoriteBorderIcon className="cursor-pointer"
                        onClick={hadnleLikeTweet}/>}
                        <p>100</p>
                    </div>

                    <div className="space-x-3 flex items-center text-gray-500">
                    <BarChartIcon className="cursor-pointer " onClick={handleOpenReplyModel}/>
                    <p>200</p>
                    </div>

                    <div className="space-x-3 flex items-center text-gray-500">
                    <FileUploadIcon className="cursor-pointer " onClick={handleOpenReplyModel}/>
                    <p>200</p>
                    </div>

                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
