'use client'

import {Box, FormControl, InputLabel, MenuItem, Select, Input, SelectChangeEvent} from "@mui/material";
import {SeverityType} from "@/types/SeverityType";
import {DatePicker} from "@mui/x-date-pickers";
import moment from "moment";
import {useState} from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {addictions} from "@/app/addictions";

const Page: React.FC = () => {
    const [dateOO, setDateOO] = useState(moment());
    const [add, setAdd] = useState("");
    const [times, setTimes] = useState<number>(0);

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const changeAdd = (event: any) => {
        console.log(event.target.value);
        setAdd(event.target.value);
    }

    const changeTimes = (event: any) => {
        console.log(event.target.value);
        setTimes(event.target.value);
    }

    const handleClick = () => {
        console.log(dateOO.format("DD-MM-YYYY"));
        addictions.forEach(element => {
            if (element.addiction == add) {
                let isAdded = false;
                element.data.forEach(el => {
                    if (el.date == dateOO.format("DD-MM-YYYY")) {
                        el.times = el.times += times;
                        isAdded = true;
                    }
                });
                if (!isAdded) {
                    element.data.push({date: dateOO.format("DD-MM-YYYY"), times: times});
                }
            }
        });
    }

    return (
        <Box>
            <FormControl fullWidth style={{marginBottom: "25px"}}>
                <TextField label="What did you do" variant="outlined"/>
            </FormControl>
            <FormControl fullWidth style={{marginBottom: "25px"}}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Activity"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Lack Of Focus</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth style={{marginBottom: "25px"}}>
                {/*<InputLabel id="demo-simple-select-label">Age</InputLabel>*/}
                <DatePicker
                    label="Date"
                    value={dateOO}
                    onChange={d => d && setDateOO(d)}
                    maxDate={moment()}
                    format="DD-MM-YYYY"
                />
            </FormControl>
            <FormControl fullWidth style={{marginBottom: "25px"}}>
                <TimePicker label="Time from"/>
            </FormControl>
            <FormControl fullWidth style={{marginBottom: "25px"}}>
                <TimePicker label="Time to"/>
            </FormControl>
            <FormControl fullWidth style={{marginBottom: "25px"}}>
                <InputLabel id="demo-simple-select-label-day">Day Moment</InputLabel>
                <Select
                    labelId="demo-simple-select-label-day"
                    id="demo-simple-select-day"
                    value={age}
                    label="Day Moment"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Work</MenuItem>
                </Select>
            </FormControl>

            <Button onClick={() => handleClick()} sx={{width:"100%"}} color="primary" variant="contained">Add</Button>
        </Box>
    );
}

export default Page;