import React from 'react';
import { AppBar, Button, ToolBar, Typography } from "@mui/material";

function Test() {
    return (
        <div>
            <AppBar>
                <ToolBar>
                    <Typography>Logo</Typography>
                    <Button variant="contained" sx={{ marginLeft: "auto" }} color="warning">Hello</Button>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Test;