import {Typography} from "@mui/material";
import React from "react";

export function SectionTitle({title}: { title: string }) {
    return <Typography sx={{marginBottom: 1}}>{title}</Typography>;
}