import React from 'react';
import { ArgumentAxis, BarSeries, Chart, ValueAxis } from "@devexpress/dx-react-chart-material-ui";
import Box from "@mui/material/Box";
import {Data} from "@/components/Main/HorizontalStatistics/HorizontalStatistics";
import {ScreenTimeElement} from "./ScreenTimeElement/ScreenTimeElement";


export const HorizontalStatisticsChart = ({ data } : { data: Data }) => {
    const maxDuration = Math.max(...Object.values(data))
    return (
        <Box>
            {
                Object.entries(data).map(([key, value]) =>
                    <ScreenTimeElement
                        key={key}
                        social={key}
                        duration={value}
                        maxDuration={maxDuration}
                    />
                )
            }
        </Box>
    )
}
