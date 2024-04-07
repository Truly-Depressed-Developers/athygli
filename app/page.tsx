'use client'
import {QuoteBar} from '@/components/Main/QuoteBar/QuoteBar';
import {HorizontalStatistics} from '@/components/Main/HorizontalStatistics/HorizontalStatistics';
import {StatusBar} from '@/components/Main/StatusBar/StatusBar';
import {eachStreakType, StreaksBar} from '@/components/Main/StreaksBar/StreaksBar';
import {AppState} from '@/types/Addiction';
import {Box} from '@mui/material';
import React, {useEffect, useState} from 'react';
import moment from "moment";
import {addictions} from "@/app/addictions";
// import { useState } from 'react';

const quoteData = [
  'In a time equal to 30 minutes you are able to watch about 1/3 of a movie like Shrek',
];

let streaksDataDefault: eachStreakType[] = [
  // {
  //   streak: 12,
  //   type: "Not drinking"
  // },
]

// const addictions: AppState = [
//   {
//     addiction: "Alcohol",
//     info: {
//       weekly: [
//         { label: "mon", times: 0 },
//         { label: "tue", times: 0 },
//         { label: "wed", times: 4 },
//         { label: "thu", times: 10 },
//         { label: "fri", times: 5 },
//         { label: "sat", times: 1 },
//         { label: "sun", times: 3 }
//       ],
//       monthly: [
//         { label: "1 week", times: 9 },
//         { label: "2 week", times: 9 },
//         { label: "3 week", times: 3 },
//         { label: "4 week", times: 4 }
//       ],
//       yearly: [
//         { label: "jan", times: 6 },
//         { label: "feb", times: 6 },
//         { label: "mar", times: 2 },
//         { label: "apr", times: 6 },
//         { label: "may", times: 9 },
//         { label: "jun", times: 7 },
//         { label: "jul", times: 3 },
//         { label: "aug", times: 10 },
//         { label: "sep", times: 0 },
//         { label: "oct", times: 10 },
//         { label: "nov", times: 5 },
//         { label: "dec", times: 8 }
//       ]
//     }
//   },
// ];


const Page: React.FC = () => {
  const [streaksData, setStreaksData] = useState<eachStreakType[]>(streaksDataDefault);
  const [appStateData, setAppStateData] = useState<AppState>(addictions);
  useEffect(() => {
    streaksData.sort((a, b) => b.streak - a.streak);
    // console.log(streaksData);
    addStateData();
    setAppStateData(addictions);
    setStreaksData(streaksData);
  }, [streaksData, appStateData])

  const [activeQuote, _] = useState(0);

  const addStateData = () => {
    // console.log(moment());
  }
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <StatusBar></StatusBar>
      <QuoteBar quoteData={{ text: quoteData[activeQuote] }}></QuoteBar>
      <StreaksBar streaksData={streaksData}></StreaksBar>
      <HorizontalStatistics appStateProps={appStateData}></HorizontalStatistics>

    </Box>
  );
}

export default Page;