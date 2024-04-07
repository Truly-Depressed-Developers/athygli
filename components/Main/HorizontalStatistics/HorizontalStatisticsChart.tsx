import React from 'react';
import Box from "@mui/material/Box";
import {Data} from "@/components/Main/HorizontalStatistics/HorizontalStatistics";
import {ScreenTimeElement} from "./ScreenTimeElement/ScreenTimeElement";
import {Grid, Typography} from "@mui/material";


export const HorizontalStatisticsChart = ({data}: { data: Data }) => {
    const maxDuration = Math.max(...Object.values(data))
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={0}>
                {
                    Object.entries(data)
                        .sort((a, b) => b[1] - a[1])
                        .map(([key, value]) =>
                            <Grid item xs={12} key={key}>
                                <ScreenTimeElement
                                    social={key}
                                    duration={value}
                                    maxDuration={maxDuration}
                                />
                            </Grid>
                        )
                }
            </Grid>

        </Box>
    )
}
