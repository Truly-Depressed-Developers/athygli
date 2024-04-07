'use client'
import Box from '@mui/material/Box'
import React, { useEffect } from 'react'
import { HorizontalStatisticsChart } from './HorizontalStatisticsChart'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import ButtonGroup from '@mui/material/ButtonGroup'
import CSS from 'csstype';
import { Typography } from '@mui/material'
import { AppState, LabelType } from '@/types/SeverityType'
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
        youtube: 24,
    },
    weekly: {
        instagram: 185,
        snapchat: 83,
        tiktok: 58,
        youtube: 45,
    },
    monthly: {
        instagram: 204,
        snapchat: 85,
        tiktok: 59,
        youtube: 38,
    },
    yearly: {
        instagram: 176,
        snapchat: 96,
        tiktok: 75,
        youtube: 58,
    },
}

type Duration = "daily" | "weekly" | "monthly" | "yearly"
const initialDuration = "weekly"

function shortDate(date: Date): string {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return `${day} ${monthNames[monthIndex]}`;
}

export const GREY = "#bbbbbb"

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

    const totalDuration = Object.values(data).reduce((acc, cur) => acc + cur, 0)
    const totalHours = Math.floor(totalDuration / 60)
    const totalMinutes = totalDuration - totalHours * 60
    const totalFormattedTime = totalHours == 0 ? `${totalMinutes}m` : `${totalHours}h ${totalMinutes}m`

    const now = new Date()
    let dateRange = ''
    if (activeDuration == "daily") {
        dateRange = shortDate(now)
    } else if (activeDuration == "weekly") {
        const prevDate = new Date(now)
        prevDate.setDate(now.getDate() - 6);
        dateRange = `${shortDate(prevDate)} - ${shortDate(now)}`
    } else if (activeDuration == "monthly") {
        const prevDate = new Date(now)
        prevDate.setDate(now.getDate() - 30);
        dateRange = `${shortDate(prevDate)} - ${shortDate(now)}`
    } else if (activeDuration == "yearly") {
        const prevDate = new Date(now)
        prevDate.setDate(now.getDate() - 365);
        dateRange = `${shortDate(prevDate)} - ${shortDate(now)}`
    }

    return (
        <Box sx={{
            width: "100%"
        }}>
            <Paper sx={{ width: "100%", padding: 2, marginTop: 2, marginBottom: 2 }} elevation={2}>
                <SectionTitle title={"Statistics"}/>
                <Box sx={{ width: "100%", marginTop: 2, display: "flex" }}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <Button
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            {/* Back */}
                        </Button>
                        {/*<Typography sx={{ display: "flex", alignItems: "center" }}>{appStateProps[activeStep].addiction}</Typography>*/}
                        <Typography sx={{ display: "flex", alignItems: "center" }}>Screen time per app</Typography>
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
                { appStateProps[activeStep] != null &&
                    <div>
                        <Box sx={{mt: 1}}>
                            <Typography sx={{fontSize: 10, color: GREY}}>Average daily screen time</Typography>
                            <Typography sx={{fontSize: 20}}>{totalFormattedTime}</Typography>
                            <Typography sx={{fontSize: 8, color: GREY}}>{dateRange}</Typography>
                        </Box>
                        <br/>
                        <Box sx={{width: "100%", display: "flex"}}>
                            <ButtonGroup
                                sx={{
                                    borderRadius: "8px",
                                    backgroundColor: "#343434",
                                    padding: 0,
                                    width: '100%',
                                }}
                                variant="contained"
                                aria-label="outlined primary button group"
                            >
                                <Button
                                    style={inactiveButton}
                                    sx={{
                                        backgroundColor: activeDuration === "daily" ? "white" : "transparent",
                                        color: activeDuration === "daily" ? "black" : "white",
                                        "&:hover": {
                                            backgroundColor: "white",
                                        },
                                        flexGrow: 1
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
                                        flexGrow: 1
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
                                        flexGrow: 1
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
                                        flexGrow: 1
                                    }}
                                    onClick={(e) => handleInfoChange(e, "yearly")}
                                >
                                    Y
                                </Button>
                            </ButtonGroup>
                        </Box>
                        <br/>
                        <HorizontalStatisticsChart data={data}></HorizontalStatisticsChart>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 2
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex'
                                }}
                            >
                                <Typography sx={{fontSize: 12}}>Show more</Typography><KeyboardArrowDown />
                            </Box>
                        </Box>
                    </div>
                }
            </Paper>
        </Box>
    )
}
