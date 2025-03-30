import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/Explore"
import NotificationIcon from "@mui/icons-material/Notifications"
import MessageIcon from "@mui/icons-material/Message"
import ListAltIcon from "@mui/icons-material/ListAlt"
import GroupIcon from "@mui/icons-material/Group"
import VerificationIcon from "@mui/icons-material/Verified"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import PendingIcon from "@mui/icons-material/Pending"
import React from "react"

const navigationMenu =[

    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/home"
    },
    {
        title: "Explore",
        icon: <ExploreIcon />,
        path: "/explore"
    },
    {
        title: "Notifications",
        icon: <NotificationIcon />,
        path: "/notification"
    },
    {
        title: "Message",
        icon: <MessageIcon />,
        path: "/message"
    },
    {
        title: "List",
        icon: <ListAltIcon />,
        path: "/list"
    },
    {
        title: "Communities",
        icon: <GroupIcon />,
        path: "/community"
    },
    {
        title: "Verified",
        icon: <VerificationIcon />,
        path: "/verified"
    },
    {
        title: "Account",
        icon: <AccountCircleIcon />,
        path: "/account"
    },
    {
        title: "More",
        icon: <PendingIcon />,
        path: "/more"
    }
]
export default navigationMenu;