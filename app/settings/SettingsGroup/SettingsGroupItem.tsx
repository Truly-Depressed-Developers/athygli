'use client'

import {Accordion, AccordionDetails, AccordionSummary, AccordionActions, Button, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props<T> = T & {expanded: boolean, onClick: () => void, addButton: boolean};

const SettingsGroupItem = <T extends Record<string, any>>(props: Props<T>) => {
  return (
    <div>
      <Accordion expanded={props.expanded} elevation={2}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          onClick={() => props.onClick()}
        >
          <Typography sx={{color: "#bbb"}}>{props.name}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          {/*<Typography sx={{color: "#bbb"}}>{props.description}</Typography>*/}
          {props.description}
        </AccordionDetails>

        <AccordionActions>
          {props.addButton ?
              <Button sx={{textTransform: "none", color: "#018cfe", fontSize: 16}}>Select apps to apply</Button>
              :
            <Button variant="outlined" style={{
              borderColor: "#6C2928",
              backgroundColor: "#6C2928",
              color: "white",
              borderRadius: 8,
            }}>Delete</Button>
          }
        </AccordionActions>
      </Accordion>
    </div>
  )
}

export {SettingsGroupItem};