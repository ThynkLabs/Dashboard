import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { DataGrid } from '@mui/x-data-grid';
import SendIcon from '@mui/icons-material/Send';
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },

    {
        field: 'userName',
        headerName: 'User Name',
        sortable: true,
        width: 160,
        align: 'left'
    },
    {
        field: 'contact',
        headerName: 'Contact Number',
        width: 160,
        align: 'left'
    },
    {
        field: 'token',
        headerName: 'Token Number',
        width: 170,
        align: 'left'
    }
];

const rows = [
    { id: 1, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 2, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 3, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 4, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 5, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 6, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 7, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 8, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 9, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' },
    { id: 10, userName: 'Lannister', contact: 9087524344, token: 'ygsvfusf78t3647384jhdbd' }
];

const card = (
    <Box>
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Template 1
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa mollitia praesentium quasi asperiores sapiente molestias
                    voluptas repudiandae, quo facilis tempore.
                </Typography>
            </CardContent>
        </React.Fragment>
    </Box>
);

export default function Notification() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opent, setOpent] = React.useState(false);
    const handleOpent = () => setOpent(true);
    const handleCloset = () => setOpent(false);
    return (
        <>
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h4">Notification</Typography>
                <Button size="small" variant="contained" onClick={handleOpen}>
                    + New Template
                </Button>
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
                            New Template
                        </Typography>
                        <TextField id="outlined-basic" label="Title" variant="outlined" style={{ marginBottom: '1rem' }} />
                        <TextField
                            id="outlined-multiline-static"
                            label="Template Body"
                            multiline
                            rows={4}
                            style={{ marginBottom: '1rem' }}
                        />
                        <Button variant="contained">Add</Button>
                    </Box>
                </Modal>
            </Box>

            <Box style={{ maxWidth: '300px', marginTop: '1rem' }}>
                <Card variant="outlined">
                    {card}
                    <Button style={{ margin: '1rem', top: '-20px' }} variant="contained" size="small" onClick={handleOpent}>
                        Send
                    </Button>
                </Card>
                <Modal open={opent} onClose={handleCloset} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
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
                            Select Users
                        </Typography>
                        <div style={{ height: 600, width: '150%', right: '95px', position: 'relative' }}>
                            <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
                        </div>
                        <Button
                            style={{ width: '150px', right: '-150px' }}
                            color="success"
                            endIcon={<SendIcon />}
                            variant="contained"
                            size="small"
                        >
                            Send
                        </Button>
                    </Box>
                </Modal>
            </Box>
        </>
    );
}
