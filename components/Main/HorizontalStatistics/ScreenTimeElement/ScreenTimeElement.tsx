import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Typography} from "@mui/material";

import Image from "next/image";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const displayName: {[index: string]: string} = {
    instagram: "Instagram",
    snapchat: "Snapchat",
    tiktok: "TikTok",
    youtube: "YouTube",
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export const ScreenTimeElement = ({ social, duration, maxDuration } : { social: string, duration: number, maxDuration: number }) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration - hours * 60
    const formattedTime = hours == 0 ? `${minutes}m` : `${hours}h ${minutes}m`
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Image
                        src={`/socials/${social}.png`}
                        alt={`${social} logo`}
                        width={28}
                        height={28}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>{displayName[social]}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={10}>
                                    <BorderLinearProgress variant="determinate" value={100 * duration / maxDuration} />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography sx={{ fontSize: 14 }}>{formattedTime}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1}>
                    <KeyboardArrowRight />
                </Grid>
            </Grid>


        </Box>
    )
}
