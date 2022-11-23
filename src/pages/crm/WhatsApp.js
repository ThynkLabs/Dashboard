import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function DataGridDemo() {
    const [open, setOpen] = React.useState(false);

    const [rowClick, setRowClick] = React.useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [number, setNumber] = React.useState('');
    const handlenumber = (event) => {
        setNumber(event.target.value);
    };
    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        return (
            <>
                <Button variant="contained" color="primary" onClick={handleOpen} style={{ width: '200px', right: '-140px' }}>
                    Next
                </Button>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box
                        style={{
                            border: '1px solid gray',
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '800px',
                            height: '600px',
                            padding: '50px 160px',
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            margin: '0 auto',
                            top: '0%',
                            position: 'relative',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography variant="h2">Senders</Typography>
                        <FormControl style={{ minWidth: '100px', top: '-150px' }}>
                            <InputLabel id="demo-simple-select-label" style={{ fonSize: '10px' }}>
                                Senders Number
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={number}
                                label="Number"
                                onChange={handlenumber}
                            >
                                <MenuItem value={10}>9900022332</MenuItem>
                                <MenuItem value={20}>9934222332</MenuItem>
                                <MenuItem value={30}>9986722332</MenuItem>
                            </Select>
                        </FormControl>
                        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button onClick={handleClose} variant="contained" color="error" startIcon={<ArrowBackIcon />}>
                                Back
                            </Button>
                            <Button variant="contained" color="success" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </>
        );
    }
    const col = [
        {
            field: 'username',
            headerName: 'UserName',
            type: 'string',
            width: 210,
            flex: 0.3
        },
        {
            field: 'number',
            headerName: 'Number',
            type: 'string',
            width: 110,
            flex: 0.3
        }
    ];
    const columns = [
        {
            field: 'template',
            headerName: 'Template',
            type: 'string',
            width: 210,
            flex: 0.3
        },
        {
            field: 'language',
            headerName: 'Language',
            type: 'string',
            width: 110,
            flex: 0.3
        },
        {
            renderCell: (cell) => {
                if (rowClick.id === cell.row.id) {
                    return (
                        <Button variant="contained" color="primary" size="small" onClick={handleOpen}>
                            Send
                        </Button>
                    );
                }
            }
        }
    ];

    const rows = [
        { id: 1, template: 'Template 1', language: 'Hindi' },
        { id: 2, template: 'Template 2', language: 'English' },
        { id: 3, template: 'Template 3', language: 'Hindi' },
        { id: 4, template: 'Template 4', language: 'English' },
        { id: 5, template: 'Template 5', language: 'Hindi' },
        { id: 6, template: 'Template 6', language: 'English' }
    ];
    const row = [
        { id: 1, username: 'User 1', number: '9902383732' },
        { id: 2, username: 'User 2', number: '9902383732' },
        { id: 3, username: 'User 3', number: '9902383732' },
        { id: 4, username: 'User 4', number: '9902383732' },
        { id: 5, username: 'User 5', number: '9902383732' },
        { id: 6, username: 'User 6', number: '9902383732' }
    ];

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
        <Box style={{ backgroundColor: 'white', padding: '20px' }} sx={{ height: 400, width: '100%' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography variant="h4">Whatsapp</Typography>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    <Search style={{ border: '1px solid #d1d1d1', width: '250px', marginBottom: '1rem', right: '10px', height: '42px' }}>
                        <SearchIconWrapper>
                            <SearchIcon style={{ color: 'aeaeae' }} />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                    <FormControl sx={{ minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-label" style={{ fonSize: '10px' }}>
                            Language
                        </InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
                            <MenuItem value={10}>Hindi</MenuItem>
                            <MenuItem value={20}>English</MenuItem>
                            <MenuItem value={30}>Marathi</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box
                    style={{
                        border: '1px solid gray',
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '800px',
                        height: '600px',
                        padding: '50px 160px',
                        borderRadius: '10px',
                        backgroundColor: 'white',
                        margin: '0 auto',
                        top: '0%',
                        position: 'relative',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <Search style={{ border: '1px solid #d1d1d1', marginBottom: '1rem', width: '40%', right: '140px', height: '50px' }}>
                            <SearchIconWrapper>
                                <SearchIcon style={{ color: 'aeaeae' }} />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                        <FormControl style={{ width: '40%', top: '-66px', right: '-64px' }}>
                            <InputLabel id="demo-simple-select-label" style={{ fonSize: '10px' }}>
                                Language
                            </InputLabel>
                            <Select
                                style={{ height: '50px' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Hindi</MenuItem>
                                <MenuItem value={20}>English</MenuItem>
                                <MenuItem value={30}>Marathi</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            style={{ maxWidth: '40%', top: '-66px', right: '-70px' }}
                            id="outlined-multiline-static"
                            label="Custom Numbers"
                            multiline
                            rows={1}
                        />
                    </Box>
                    <DataGrid
                        sx={{ width: '160%', float: 'left', position: 'relative', left: '-140px', height: '150%' }}
                        rows={row}
                        columns={col}
                        pageSize={4}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        experimentalFeatures={{ newEditingApi: true }}
                        checkboxSelection
                    />
                    <ChildModal />
                </Box>
            </Modal>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                experimentalFeatures={{ newEditingApi: true }}
                disableSelectionOnClick
                checkboxSelection
                onRowClick={(click) => {
                    setRowClick(click.row);
                }}
            />
        </Box>
    );
}
