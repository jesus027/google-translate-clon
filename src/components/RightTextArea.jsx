import React, {useState, useRef, useEffect} from 'react';
import { ContentCopyOutlined, VolumeUpOutlined, ThumbsUpDownOutlined, ShareOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

function RightTextArea({ fetchedText, setFetchedText }) {
    const textareaRef = useRef();
    const resizeTextarea = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.addEventListener("input", resizeTextarea, false);

            // Clean up the event listener when the component unmounts
            return () => {
                textareaRef.current.removeEventListener("input", resizeTextarea, false);
            };
        }
    }, []);

    useEffect(() => {
        if (textareaRef.current) {
        resizeTextarea();
        }
    }, [fetchedText]);

    return (
        <Box>
            <Box 
                sx={{
                    border:1,
                    borderColor:"divider",
                    width:"98%",
                    borderRadius:2,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-between",
                    minHeight:"150px",
                    backgroundColor:"#f5f5f5"
                }}
            >
                <div className='input-container' style={{display:"flex"}}>
                    <textarea
                        disabled
                        value={fetchedText}
                        ref={textareaRef}
                        style={{
                            marginRight:"5%",
                            border:"none",
                            outline:"none",
                            padding:"10px",
                            fontSize:"20px",
                            width:"90%",
                            backgroundColor:"#f5f5f5",
                        }}
                        className='dynamic-textarea'
                        id="myInput"
                    >
                    </textarea>
                </div>

                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{marginBottom:"0.5rem", marginLeft:"0.7rem"}}>
                        <IconButton>
                            <VolumeUpOutlined sx={{color:"gray"}} />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton sx={{mr:2}}>
                            <ContentCopyOutlined sx={{color:"gray"}} />
                        </IconButton>

                        <IconButton sx={{mr:2}}>
                            <ThumbsUpDownOutlined sx={{color:"gray"}} />
                        </IconButton>

                        <IconButton sx={{mr:2}}>
                            <ShareOutlined sx={{color:"gray"}} />
                        </IconButton>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default RightTextArea