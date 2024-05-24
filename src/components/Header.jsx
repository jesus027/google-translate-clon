import React from 'react';
import { Box } from "@mui/material";
import {MenuOutlined, AppsOutlined} from '@mui/icons-material/';
import {Avatar} from '@mui/material';
import logo from "../img/logo.png"

const Header = () => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
            height: "4.5%",
            borderBottom: "1px solid rgba(0,0,0,0.12)",
            p:2
        }}>
            <Box className="header__left" sx={{display:"flex", alignItems:"center"}}>
                <MenuOutlined sx={{ml:"1rem", mr:"1.3rem", color:"gray", fontSize:"26px"}} />
                <Box
                    component="img"
                    src={logo}
                    alt='logo.png'
                    sx={{width:"250px", height:"auto", display:{xs:"none", sm:"block"}}}
                />
            </Box>

            <Box 
                className="header__right" 
                sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"flex-start",
                    mr:"1rem"
                }}
            >
                <AppsOutlined sx={{mr:"1.2rem", color:"gray", fontSize:"26px"}} />
                <Avatar alt="Jesús Piñero" sx={{width:"32px", height:"32px"}} />
            </Box>
        </Box>
    )
}

export default Header