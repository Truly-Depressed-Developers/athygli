import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Typography} from "@mui/material";

import Image from "next/image";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import {GREY} from "@/components/Main/HorizontalStatistics/HorizontalStatistics";

const displayName: {[index: string]: string} = {
    instagram: "Instagram",
    snapchat: "Snapchat",
    tiktok: "TikTok",
    youtube: "YouTube",
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "#e65900",
    },
}));

export const ScreenTimeElement = ({ social, duration, maxDuration } : { social: string, duration: number, maxDuration: number }) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration - hours * 60
    const formattedTime = hours == 0 ? `${minutes}m` : `${hours}h ${minutes}m`
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={1.5}>
                    <Image
                        src={`/socials/${social}.png`}
                        alt={`${social} logo`}
                        width={32}
                        height={32}
                    />
                </Grid>
                <Grid item xs={9.75}>
                    <Grid container rowSpacing={0} columnSpacing={1}>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: 12 }}>{displayName[social]}</Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                            }}>
                                <BorderLinearProgress variant="determinate" value={100 * duration / maxDuration} />
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{ fontSize: 10, color: GREY }}>{formattedTime}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0.75}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                    }}>
                        <KeyboardArrowRight />
                    </Box>
                </Grid>
            </Grid>


        </Box>
    )
}
