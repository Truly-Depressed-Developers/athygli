import {SeverityType, AppState} from "@/types/SeverityType";

export const addictions: AppState = [
    {
        addiction: SeverityType.drinking,
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
        addiction: SeverityType.smoking,
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
        addiction: SeverityType.music,
        data: []
    },
    {
        addiction: SeverityType.energyDrinks,
        data: []
    },
    {
        addiction: SeverityType.drugs,
        data: []
    },
];