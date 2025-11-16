'use client'

import { createTheme } from '@mui/material/styles'

import palette from './app.pallete'
import typography from './app.typography'

export const theme = createTheme({
  palette,
  typography,
  components: {
    // MuiSvgIcon: svgIcon,
    // MuiButton: button,
    // MuiCheckbox: checkbox,
    // MuiTextField: textField,
    // MuiTooltip: tooltip,
    // MuiMenuItem: menuItem,
    // MuiMenu: menuList,
    // MuiTableRow: table
  }
})
