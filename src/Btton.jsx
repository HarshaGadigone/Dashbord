import React from 'react'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import menu from '../src/Images/menu.png'
import Delete from '../src/Images/Delete.png'
import edit from '../src/Images/Edit.png'
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <img src={menu}/>
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
        
        <MenuItem onClick={handleClose} style={{backgroundColor:"#ADD8E6" ,color:"blue"}}> <img src={edit}/>Edit</MenuItem>
        <MenuItem onClick={handleClose} style={{backgroundColor:"#FFA07A",  color:"red"}}><img src={Delete}/>Delete</MenuItem>
      </Menu>
    </div>
  );
}

