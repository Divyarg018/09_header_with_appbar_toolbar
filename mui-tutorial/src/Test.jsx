import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';

function Test() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>Logo</Typography>
                    <Button variant="contained" sx={{ marginLeft: "auto" }} color="warning">Hello</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Test;
