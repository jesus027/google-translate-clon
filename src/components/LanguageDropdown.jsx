import React, {useState} from 'react'
import { ExpandMoreOutlined } from '@mui/icons-material'
import { IconButton, Menu, MenuItem, Tab, Tabs } from '@mui/material'

const LanguageDropdown = ({languages, setLanguage, currentLanguage}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (lang) => {
        setLanguage(lang);
        setAnchorEl(null);
    }

    return (
        <>
            <Tabs
                sx={{border:"none"}}
                value={currentLanguage}
                onChange={(event, newValue) => setLanguage(newValue)}
                aria-label="custom tabs example"
            >
                {languages.map((lang) => (
                    <Tab
                        sx={{
                            textTransform:"none",
                            fontWeight:600,
                            display:{
                                xs:currentLanguage === lang.id ? "initial" : "none",
                                md:"initial"
                            }
                        }}
                        label={lang.label}
                        value={lang.id}
                    />
                ))}
                
                <IconButton sx={{width:50, height:50}} onClick={handleClick}>
                    <ExpandMoreOutlined />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    keepMounted
                    onClose={()=>setAnchorEl(null)}
                >
                    {languages.map((lang) => (
                        <MenuItem onClick={()=>handleClose(lang.id)}>{lang.label}</MenuItem>
                    ))}
                </Menu>
            </Tabs>
        </>
    )
}

export default LanguageDropdown