import React from 'react'
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../themes";

const Header = ({title, subTitle}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box mb='30px'>
        <Typography>{title} </Typography>
        <Typography>{subTitle}</Typography>
    </Box>
  )
}

export default Header