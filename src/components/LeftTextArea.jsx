import React, {useState, useRef, useEffect} from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { 
    CloseOutlined, 
    KeyboardAltOutlined, 
    KeyboardVoiceOutlined, 
    VolumeUpOutlined 
} from '@mui/icons-material';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

function LeftTextArea ({ enteredText, setEnteredText }) {
    const textareaRef = useRef();

    useEffect(() => {
        const resizeTextarea = () => {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }

        if (textareaRef.current) {
            textareaRef.current.addEventListener("input", resizeTextarea, false);

            return () => {
                textareaRef.current.removeEventListener("input", resizeTextarea, false);
            }
        }
    }, [])

    const [charCount, setCharCount] = useState(0);
    const [keyboardOpen, setKeyboardOpen] = useState(false);

    const handleInputChange = (e) => {
        if (e.target.value.length <= 5000) {
            setEnteredText(e.target.value);
            setCharCount(e.target.value.length);
        }
    }

    const clearTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.value = "";
            textareaRef.current.style.height="auto";
        }
    }

    const toggleKeyboard = () => {
        setKeyboardOpen(!keyboardOpen);
    }

    const handleChange = (input) => {
        setEnteredText(input);
        console.log("input = ", input)
    }

    const handleKeyPress = (button) => {
        console.log(button)
    }

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
                    minHeight:"150px"
                }}
            >
                <div className='input-container' style={{display:"flex"}}>
                    <textarea
                        value={enteredText}
                        ref={textareaRef}
                        style={{
                            marginRight:"5%",
                            border:"none",
                            outline:"none",
                            padding:"10px",
                            fontSize:"20px",
                            width:"90%"
                        }}
                        className='dynamic-textarea'
                        id="myInput"
                        onChange={handleInputChange}
                    >
                    </textarea>
                    <CloseOutlined
                        sx={{color:"gray", m:"5px"}}
                        onClick={clearTextarea}
                    />
                </div>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{
                            display:'flex',
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        <IconButton>
                            <KeyboardVoiceOutlined sx={{color:"gray"}} />
                        </IconButton>

                        {charCount > 0 ? (
                            <IconButton>
                                <VolumeUpOutlined sx={{color:"gray"}} />
                            </IconButton>
                        ): ""}
                    </div>

                    <div style={{display:"flex", alignItems:"center"}}>
                        <Typography
                            component="span"
                            sx={{color:"gray", fontSize:"12px", mr:"0.5rem"}}
                        >
                            {charCount}/5000
                        </Typography>

                        <KeyboardAltOutlined
                            sx={{mr:"1rem", color:"gray"}}
                            onClick={toggleKeyboard}
                        />
                    </div>
                </div>
            </Box>
            {keyboardOpen ? (
                <Keyboard onChange={handleChange} onKeyPress={handleKeyPress} />
            ) : ("")}
        </Box>
    )
}

export default LeftTextArea