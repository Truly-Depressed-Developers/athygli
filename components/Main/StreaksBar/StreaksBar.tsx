import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import './../Main.scss';
import { StreaksBarFirst } from './StreaksBarFirst';

export type eachStreakType = {
    streak: number,
    type: string
}

export const StreaksBar: React.FC<{ streaksData: eachStreakType[] }> = ({ streaksData }) => {
    return (
        <Paper className="paperStyle" elevation={2}>
            <Typography sx={{ margin: 2 }}>Speed of response to notifications</Typography>
            <Box sx={{ width: "100%", display: "flex" }}>
                <Box sx={{ width: "40%" }}><StreaksBarFirst ></StreaksBarFirst></Box>
                <Box sx={{ width: "60%", marginTop: -2 }}>
                    <Box  sx={{ display: "flex", flexDirection:"column", justifyContent: "space-between", margin: 2, gap:0.5 }}>
                        {/*<Typography className='smallText'>{eachStreak.type}</Typography>*/}
                        {/*<Typography className='smallText'>{eachStreak.streak} days</Typography>*/}

                        <Typography>Fastest avarage response</Typography>
                        <div style={{display:"flex", justifyContent:"space-between"}}> <Typography style={{fontSize:10}}>Messenger</Typography> <Typography style={{fontSize:10}}>3.45 s</Typography></div>
                        <div style={{display:"flex", justifyContent:"space-between"}}> <Typography style={{fontSize:10}}>Instagram</Typography> <Typography style={{fontSize:10}}>3.45 s</Typography></div>
                        <div style={{display:"flex", justifyContent:"space-between"}}> <Typography style={{fontSize:10}}>Gmail</Typography> <Typography style={{fontSize:10}}>3.45 s</Typography></div>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}
