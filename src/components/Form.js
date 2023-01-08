import { Typography, Card, CardContent, TextField, Grid, Button, CardActions, InputAdornment } from '@mui/material';
import { Person, AssignmentInd, Email, Call, LocationOn } from '@mui/icons-material';
import { useContext } from 'react';
import {UserContext} from '../store/ContextProvider';
import _ from 'lodash';

const Form = () => {
    const {user, disableReset} = useContext(UserContext);

    return (
        <>
            <Typography variant="h5">Good Morning, {_.get(user,"displayName","")} </Typography>
            <div className='text'>Jan 2023</div>
            <div className="card-div">
                <Typography variant="h6">My Profile</Typography>
                <Card className="card" ><CardContent component="form" sx={{ padding: "50px", flex: '1 1 auto' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="firstName"
                                label="First Name"
                                defaultValue={_.get(user,"firstName","")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="lastName"
                                label="Last Name"
                                defaultValue={_.get(user,"lastName","")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="displayName"
                                label="Display Name"
                                defaultValue={_.get(user,"displayName","")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><AssignmentInd /></InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="email"
                                label="Email"
                                defaultValue={_.get(user,"email","")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Email /></InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="phoneNumber"
                                label="Phone Number"
                                type="number"
                                defaultValue={_.get(user,"phoneNumber","")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Call /></InputAdornment>
                                }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="workNumber"
                                label="Work Number"
                                type="number"
                                defaultValue={_.get(user,"workNumber","")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Call /></InputAdornment>
                                }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                id="location"
                                label="Location"
                                defaultValue={_.get(user,"location","")}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><LocationOn /></InputAdornment>
                                }}
                            />
                        </Grid>
                    </Grid>
                </CardContent >
                    <CardActions sx={{ mt: "auto", justifyContent: "center", mb: 4 }}>
                        <Button variant='contained' disabled={disableReset} color="primary">Reset</Button>
                        <Button variant='contained' type='submit' color="error">Save Changes</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default Form;