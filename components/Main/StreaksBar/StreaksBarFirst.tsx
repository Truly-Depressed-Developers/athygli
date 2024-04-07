import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import './../Main.scss';
import { eachStreakType } from './StreaksBar';
import streak from "@/public/responseTime.png"
import Image from 'next/image';

export const StreaksBarFirst = () => {
    return (
        <Box sx={{ width: "100%", display: "flex",  justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
                <Image
                    priority
                    src={streak}
                    alt="streak svg"
                    width={130}
                // height={130}
                />
            </Box>
        </Box>
    )
}
