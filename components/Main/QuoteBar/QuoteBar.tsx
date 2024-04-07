import {Grid, Paper, Typography} from '@mui/material'
import React from 'react'
import Image from 'next/image';

type QuoteProps = {
    text: string
}

export const QuoteBar: React.FC<{ quoteData: QuoteProps }> = ({ quoteData }) => {
    return (
        <Paper elevation={2} sx={{
            width: "100%",
            margin: 2,
            padding: 2
        }}>
            <Typography sx={{ marginBottom: 0 }}>Saved time</Typography>
            <Grid container spacing={2} sx={{marginTop: 0, marginBottom: 2}}>
                <Grid item xs={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        src={'/home/savedTime.png'}
                        alt={'Saved time'}
                        width={86}
                        height={86}
                    />
                </Grid>
                <Grid item xs={7} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography sx={{fontSize: 14, mb: 1}}>Today you saved <b>60 min</b></Typography>
                    <Typography sx={{fontSize: 14}}>In current month you saved <br/><b>3h 21m</b></Typography>
                </Grid>
            </Grid>
            <Typography sx={{ marginBottom: 1 }}>Did You know?</Typography>
            <Typography fontSize={"14px"} fontStyle={"italic"} color={"#BCBABA"}>{quoteData.text}</Typography>
        </Paper>
    )
}
