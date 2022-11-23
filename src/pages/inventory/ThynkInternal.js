import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { randomInt, randomUserName } from '@mui/x-data-grid-generator';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
function createData(ProductName, category, price, types, Quantity, Packages) {
    return {
        ProductName,
        category,
        price,
        types,
        Quantity,
        Packages
    };
}
const columns = [{ field: 'id' }, { field: 'username', width: 150 }, { field: 'age', width: 80, type: 'number' }];
let idCounter = 0;
const createRandomRow = () => {
    idCounter += 1;
    return { id: idCounter, username: randomUserName(), age: randomInt(10, 80) };
};

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [editorState, seteditorState] = useState(EditorState.createEmpty());
    const _onEditorStateChange = (state) => {
        seteditorState(state);
    };

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.ProductName}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.types}</TableCell>
                <TableCell align="right">{row.Quantity}</TableCell>
                <TableCell align="right">{row.Packages}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={_onEditorStateChange}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired
    }).isRequired
};

const rows = [
    createData('Html Press', 'Hardware', '$2.5k', 'Devices', 10, 'IC'),
    createData('Html Press', 'Hardware', '$2.5k', 'Devices', 10, 'IC'),
    createData('Html Press', 'Hardware', '$2.5k', 'Devices', 10, 'IC'),
    createData('Html Press', 'Hardware', '$2.5k', 'Devices', 10, 'IC'),
    createData('Html Press', 'Hardware', '$2.5k', 'Devices', 10, 'IC'),
    createData('Html Press', 'Hardware', '$2.5k', 'Devices', 10, 'IC')
];

export default function CollapsibleTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                        <Typography variant="h2" gutterBottom>
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
            <TableContainer component={Paper} style={{ marginTop: '10px' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Types</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Packages</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.ProductName} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
