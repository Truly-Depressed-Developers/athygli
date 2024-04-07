'use client'
import Box from '@mui/material/Box'
import React, { useEffect } from 'react'
import { HorizontalStatisticsChart } from './HorizontalStatisticsChart'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import ButtonGroup from '@mui/material/ButtonGroup'
import CSS from 'csstype';
import { Typography } from '@mui/material'
import { AppState, LabelType } from '@/types/Addiction'
import moment from 'moment'
import {SectionTitle} from "@/components/Main/SectionTitle/SectionTitle";

export type Data = {
    instagram: number,
    snapchat: number,
    tiktok: number,
    youtube: number,
}

type ScreenTimes = {
    daily: Data,
    weekly: Data,
    monthly: Data,
    yearly: Data,
}

const screenTimes: ScreenTimes = {
    daily: {
        instagram: 157,
        snapchat: 112,
        tiktok: 63,
        youtube: 54,
    },
    weekly: {
        instagram: 185,
        snapchat: 83,
        tiktok: 98,
        youtube: 45,
    },
    monthly: {
        instagram: 163,
        snapchat: 85,
        tiktok: 59,
        youtube: 38,
    },
    yearly: {
        instagram: 98,
        snapchat: 56,
        tiktok: 35,
        youtube: 78,
    },
}

type Duration = "daily" | "weekly" | "monthly" | "yearly"
const initialDuration = "weekly"

export const HorizontalStatistics: React.FC<{ appStateProps: AppState }> = ({ appStateProps }) => {
    const theme = useTheme();
    const [maxSteps, setSteps] = React.useState(appStateProps.length);
    const [activeStep, setActiveStep] = React.useState(0);
    const [activeDuration, setActiveDuration] = React.useState<Duration>(initialDuration);
    let [data, setData] = React.useState<Data>(screenTimes[initialDuration]);

    useEffect(() => {
        update();
    }, []);

    const update = () => {
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        update();
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        update();
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const handleInfoChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, val: Duration) => {
        setActiveDuration(val);
        setData(screenTimes[val])
    }

    const inactiveButton: CSS.Properties = {
        border: "none",
        fontSize: "12px",
        height: "18px",
        borderRadius: "8px",
        margin: 0,
        width: "65px"
    };

    return (
        <Box sx={{
            width: "100%"
        }}>
            <Paper sx={{ width: "100%", padding: 2, marginTop: 2, marginBottom: 2 }} elevation={2}>
                <SectionTitle title={"Statistics"}/>
                <Box sx={{ width: "100%", marginTop: 2, display: "flex", justifyContent: "center" }}>
                    <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            {/* Back */}
                        </Button>
                        {/*<Typography sx={{ display: "flex", alignItems: "center" }}>{appStateProps[activeStep].addiction}</Typography>*/}
                        <Typography sx={{ display: "flex", alignItems: "center" }}>Screen time on apps</Typography>
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            {/* Next */}
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    </Box>

                </Box>
                {
                    appStateProps[activeStep] != null ?
                        <div>
                            <HorizontalStatisticsChart data={data}></HorizontalStatisticsChart>
                            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <ButtonGroup sx={{ borderRadius: "8px", backgroundColor: "#343434", padding: 0 }} variant="contained" aria-label="outlined primary button group">
                                    <Button
                                        style={inactiveButton}
                                        sx={{
                                            backgroundColor: activeDuration === "daily" ? "white" : "transparent",
                                            color: activeDuration === "daily" ? "black" : "white",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        onClick={(e) => handleInfoChange(e, "daily")}
                                    >
                                        D
                                    </Button>
                                    <Button
                                        style={inactiveButton}
                                        sx={{
                                            backgroundColor: activeDuration === "weekly" ? "white" : "transparent",
                                            color: activeDuration === "weekly" ? "black" : "white",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        onClick={(e) => handleInfoChange(e, "weekly")}
                                    >
                                        W
                                    </Button>
                                    <Button
                                        style={inactiveButton}
                                        sx={{
                                            backgroundColor: activeDuration === "monthly" ? "white" : "transparent",
                                            color: activeDuration === "monthly" ? "black" : "white",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        onClick={(e) => handleInfoChange(e, "monthly")}
                                    >
                                        M
                                    </Button>
                                    <Button
                                        style={inactiveButton}
                                        sx={{
                                            backgroundColor: activeDuration === "yearly" ? "white" : "transparent",
                                            color: activeDuration === "yearly" ? "black" : "white",
                                            "&:hover": {
                                                backgroundColor: "white",
                                            },
                                        }}
                                        onClick={(e) => handleInfoChange(e, "yearly")}
                                    >
                                        Y
                                    </Button>
                                </ButtonGroup>
                            </Box>

                        </div>
                        :
                        null


                }


            </Paper>
        </Box>
    )
}
