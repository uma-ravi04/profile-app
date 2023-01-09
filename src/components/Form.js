import { Typography, Card, CardContent, TextField, Grid, Button, CardActions, InputAdornment } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../store/ContextProvider';
import _ from 'lodash';
import { fields } from '../constants';

const Form = () => {
    const { user, register, handleSubmit, saveUser, reset } = useContext(UserContext);

    const handleReset = (e) => {
        e.preventDefault();
        reset(user)
    };

    return (
        <div id="form">
            <Typography variant="h5">Good Morning, {_.get(user, "displayName", "")} </Typography>
            <div className='text' id="date">Jan 2023</div>
            <div className="card-div" id="profile">
                <Typography variant="h6">My Profile</Typography>
                <Card className="card" >
                    <CardContent component="form" sx={{ padding: "50px", flex: '1 1 auto' }}>
                        <Grid container spacing={2} id="container">
                            {_.map(fields, ({ name, label, svg, type }) => {
                                return (
                                    <Grid item xs={12} md={6} key={name}>
                                        <TextField
                                            name={name}
                                            type={type}
                                            label={label}
                                            defaultValue={_.get(user, name, "")}                                            
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">{svg}</InputAdornment>,
                                            }}
                                            {...register(name)}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </CardContent >
                    <CardActions sx={{ mt: "auto", justifyContent: "center", mb: 4 }}>
                        <Button variant='contained' id="reset" type="reset" color="primary" onClick={handleReset}>Reset</Button>
                        <Button variant='contained' id="submit" onClick={handleSubmit(saveUser)} color="error">Save Changes</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Form;