import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
export default function Cards() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [count, setCount] = useState(0);
    const inc = () => {
        setCount(count + 1);
    };
    const dec = () => {
        if (count > 0) setCount(count - 1);
    };
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto'
        }
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                }
            }
        }
    }));
    return (
        <>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    width: '100%',
                    borderRadius: '8px',
                    padding: '6px 8px',
                    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 10%)'
                }}
            >
                <Search style={{ border: '1px solid #d1d1d1', width: '250px', marginBottom: '1rem' }}>
                    <SearchIconWrapper>
                        <SearchIcon style={{ color: 'aeaeae' }} />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Button
                    variant="contained"
                    size="small"
                    style={{
                        float: 'right',
                        padding: '8px',
                        border: 'none',
                        borderRadius: '6px',
                        marginBottom: '8px',
                        cursor: 'Pointer'
                    }}
                    onClick={handleOpen}
                >
                    + New Item
                </Button>
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div
                    style={{
                        border: '1px solid gray',
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '800px',
                        height: '500px',
                        padding: '50px 160px',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        margin: '0 auto',
                        top: '10%',
                        position: 'relative'
                    }}
                >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch', justifyContent: 'center' }
                        }}
                    >
                        <Typography variant="h1" gutterBottom>
                            Add New Items
                        </Typography>
                        <Box
                            style={{
                                marginTop: '30px',
                                display: 'flex',
                                width: 'fit-content',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                height: '230px',
                                alignItems: 'center'
                            }}
                        >
                            <TextField id="outlined-basic" label="Product Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Category" variant="outlined" />
                            <TextField id="outlined-basic" label="Price" type="number" variant="outlined" />
                            <TextField id="outlined-basic" label="Types" variant="outlined" />
                            <TextField id="outlined-basic" label="Quantity" type="number" variant="outlined" />
                            <TextField id="outlined-basic" label="Packages" variant="outlined" />
                        </Box>
                    </Box>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
                        <Button variant="contained" color="error">
                            Cancel
                        </Button>
                        <Button variant="contained" color="success">
                            Add
                        </Button>
                    </div>
                </div>
            </Modal>
            <Card sx={{ maxWidth: 270, marginTop: '10px' }}>
                <CardActionArea style={{ marginBottom: -12 }}>
                    <CardMedia component="img" height="120" image="" alt="smart pump" />
                    <MoreVertIcon
                        style={{
                            float: ' right',
                            top: '-112px',
                            position: 'relative'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Smart Pump
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem ratione nostrum amet in hic dolorem
                            tempore laudantium sed atque.
                        </Typography>
                        <div style={{ color: 'black', marginTop: '8px', fontWeight: 'bold' }}>Price: $20</div>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ display: 'flex', justifyContent: 'center', Padding: '10px' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: 12,
                            top: '6px',
                            position: 'relative'
                        }}
                    >
                        <button
                            component={RemoveIcon}
                            style={{
                                background: '#f0f0f0',
                                borderRadius: '6px',
                                color: 'black',
                                Padding: '4px',
                                marginRight: '10px',
                                border: 'none',
                                cursor: 'pointer',
                                width: '60px'
                            }}
                            onClick={dec}
                        >
                            <RemoveIcon />
                        </button>
                        {count}
                        <button
                            component={AddIcon}
                            style={{
                                background: '#f0f0f0',
                                borderRadius: '6px',
                                color: 'black',
                                Padding: '4px',
                                marginLeft: '10px',
                                border: 'none',
                                cursor: 'pointer',
                                width: '60px'
                            }}
                            onClick={inc}
                        >
                            <AddIcon />
                        </button>
                    </div>
                </CardActions>
            </Card>
        </>
    );
}
