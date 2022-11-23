import PropTypes from 'prop-types';
import { useState } from 'react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material-ui
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// third-party
import NumberFormat from 'react-number-format';
import { Modal } from '../../../node_modules/@mui/material/index';

function createData(templateId, name, flowId) {
    return { templateId, name, flowId };
}

const rows = [
    createData(84564564, 'Camera Lens', 7566578),
    createData(98764564, 'Laptop', 7566578),
    createData(98756325, 'Mobile', 7566578),
    createData(98652366, 'Handset', 7566578),
    createData(13286564, 'Computer Accessories', 7566578),
    createData(86739658, 'TV', 7566578),
    createData(13256498, 'Keyboard', 7566578),
    createData(98753263, 'Mouse', 7566578),
    createData(98753275, 'Desktop', 7566578),
    createData(98753291, 'Chair', 7566578)
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'templateId',
        align: 'left',
        disablePadding: false,
        label: 'Template ID'
    },
    {
        id: 'name',
        align: 'left',
        disablePadding: true,
        label: 'Template Name'
    },
    {
        id: 'flowId',
        align: 'right',
        disablePadding: false,
        label: 'FlowId'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

export default function Templatetable() {
    const [order] = useState('asc');
    const [orderBy] = useState('templateId');
    const [selected] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isSelected = (templateId) => selected.indexOf(templateId) !== -1;

    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    aria-label="collapsible table"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <OrderTableHead order={order} orderBy={orderBy} />

                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.templateId);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.templateId}
                                    selected={isItemSelected}
                                    onClick={handleOpen}
                                >
                                    <TableCell align="left">{row.templateId}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="right">{row.flowId}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box
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
                            <Typography variant="h2" gutterBottom>
                                Template Message
                            </Typography>
                            <TextField
                                style={{ marginBottom: '1rem' }}
                                id="outlined-read-only-input"
                                label="Template Id"
                                defaultValue="13256498"
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                            <TextField
                                style={{ marginBottom: '1rem' }}
                                id="outlined-read-only-input"
                                label="Template Name"
                                defaultValue="Keyborad"
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                            <TextField
                                style={{ marginBottom: '1rem' }}
                                id="outlined-read-only-input"
                                label="Flow Id"
                                defaultValue="7566578"
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                            <TextField
                                id="outlined-read-only-input"
                                multiline
                                label="Template Message"
                                defaultValue="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa mollitia praesentium quasi asperiores sapiente molestias voluptas repudiandae, quo facilis tempore."
                                InputProps={{
                                    readOnly: true
                                }}
                            />
                        </Box>
                    </Modal>
                </Table>
            </TableContainer>
        </Box>
    );
}
