import {Addiction, AppState} from "@/types/Addiction";

export const addictions: AppState = [
    {
        addiction: Addiction.drinking,
        data: [
            {date: "21-01-2024", times: 0},
            {date: "20-01-2024", times: 2},
            {date: "19-01-2024", times: 2},
            {date: "18-01-2024", times: 5},
            {date: "17-01-2024", times: 2},
            {date: "16-01-2024", times: 0},
            {date: "15-01-2024", times: 2},
            {date: "14-01-2024", times: 1},
            {date: "13-01-2024", times: 2},
        ]
    },
    {
        addiction: Addiction.smoking,
        data: [
            {date: "21-01-2024", times: 6},
            {date: "20-01-2024", times: 2},
            {date: "19-01-2024", times: 2},
            {date: "18-01-2024", times: 2},
            {date: "17-01-2024", times: 2},
            {date: "16-01-2024", times: 0},
            {date: "15-01-2024", times: 2},
            {date: "14-01-2024", times: 1},
            {date: "13-01-2024", times: 2},
        ]
    },
    {
        addiction: Addiction.music,
        data: []
    },
    {
        addiction: Addiction.energyDrinks,
        data: []
    },
    {
        addiction: Addiction.drugs,
        data: []
    },
];