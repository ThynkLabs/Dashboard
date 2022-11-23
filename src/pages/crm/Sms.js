import { useState } from 'react';
import React from 'react';
// material-ui
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// project import
import Templatetable from '../dashboard/TemplateTable';
import Headertable from '../dashboard/HeaderTable';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');
    const [openTemp, setOpenTemp] = useState(false);
    const handleOpenTemp = () => setOpenTemp(true);
    const handleCloseTemp = () => setOpenTemp(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h4">SMS</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Template " count="4,42,236" percentage={59.3} extra="35,000" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item style={{ display: 'flex', justifyContent: 'space-between', flex: 'auto' }}>
                        <Typography variant="h5">Templates</Typography>
                        <Button variant="contained" size="small" onClick={handleOpenTemp}>
                            Add +
                        </Button>
                        <Modal
                            open={openTemp}
                            onClose={handleCloseTemp}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
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
                                    Templates
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    type="number"
                                    label="Template Id"
                                    variant="outlined"
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField id="outlined-basic" label="Template Name" variant="outlined" style={{ marginBottom: '1rem' }} />
                                <TextField
                                    id="outlined-basic"
                                    type="number"
                                    label="Flow Id"
                                    variant="outlined"
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField id="outlined-multiline-static" label="Template Message" multiline rows={4} />
                                <Button style={{ marginTop: '1rem' }} size="small" variant="contained">
                                    ADD
                                </Button>
                            </Box>
                        </Modal>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Box>
                        <Templatetable />
                    </Box>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={3} lg={4}>
                <Grid container alignItems="right" justifyContent="space-between">
                    <Grid item style={{ display: 'flex', justifyContent: 'space-between', flex: 'auto' }}>
                        <Typography variant="h5">Headers</Typography>
                        <Button variant="contained" size="small" onClick={handleOpen}>
                            Add +
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
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
                                <Typography variant="h2" gutterBottom>
                                    Headers
                                </Typography>
                                <TextField
                                    id="outlined-basic"
                                    type="number"
                                    label="Header No."
                                    variant="outlined"
                                    style={{ marginBottom: '1rem' }}
                                />
                                <TextField id="outlined-basic" label="Headers Name" variant="outlined" style={{ marginBottom: '1rem' }} />
                                <Button style={{ marginTop: '1rem' }} size="small" variant="contained">
                                    ADD
                                </Button>
                            </div>
                        </Modal>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Headertable />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
