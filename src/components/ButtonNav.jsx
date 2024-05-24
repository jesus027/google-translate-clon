import React from 'react'; 
import { Box, Button } from '@mui/material';
import {TranslateOutlined, ImageRounded, InsertDriveFileRounded, LanguageOutlined} from '@mui/icons-material/';

const ButtonNav = () => {
    const buttonStyle = {
        textTransform:"none",
        fontWeight:"bold",
        borderColor:"#e3e3e3",
        marginRight:"8px"
    }

    return (
        <Box sx={{m:"1rem"}}>
            <Button style={buttonStyle} variant="outlined" startIcon={<TranslateOutlined />}>
                Texto
            </Button>
            <Button style={buttonStyle} variant="outlined" startIcon={<ImageRounded />}>
                Imagen
            </Button>
            <Button style={buttonStyle} variant="outlined" startIcon={<InsertDriveFileRounded />}>
                Documento
            </Button>
            <Button style={buttonStyle} variant="outlined" startIcon={<LanguageOutlined />}>
                Sitio Web
            </Button>
        </Box>
    )
}

export default ButtonNav