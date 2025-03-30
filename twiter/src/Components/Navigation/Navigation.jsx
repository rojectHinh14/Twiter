import React from 'react'
import { useNavigate } from 'react-router-dom'
import navigationMenu from './NavigationMenu'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { blue } from '@mui/material/colors'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div className="h-screen sticky top-0 left-0 w-60 bg-white shadow-lg">
      {/* Menu Items */}
      <div className="py-5 space-y-4">
        {navigationMenu.map((item) => (
          <div
            key={item.title}
            className="cursor-pointer flex space-x-3 items-center p-3 hover:bg-gray-100 rounded-lg"
            onClick={() => { 
                item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path) 
            }}
          >
            {item.icon}
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Tweet Button */}
      <div className="py-5 px-4">
        <Button 
          variant="contained"
          sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5" }}
        >
          Tweet
        </Button>
      </div>

      {/* User Info */}
      <div className="flex items-center justify-between py-5 px-4">
        <div className="flex items-center space-x-3">
          <Avatar alt="username" src="" />
          <div>
            <span className="font-semibold">Hinh dep trai</span>
            <br />
            <span className="opacity-65">@email</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
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
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Navigation
