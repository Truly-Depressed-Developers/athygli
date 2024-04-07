'use client'

import {Box, Divider, Paper, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {Integration} from "@/types/Integration";
import {SettingsGroup} from "@/app/settings/SettingsGroup/SettingsGroup";
import {Severity} from "@/types/Severity";
import {SeverityType} from "@/types/SeverityType";
import {SeverityLevel} from "@/types/SeverityLevel";
import {resolveSeverityEffect} from "@/util/resolveSeverityEffect";
import Button from "@mui/material/Button";

const mockIntegrations: Integration[] = [
  {name: "This device", description: "Some information about device, what type of information this device collect. Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum."},
  {name: "Amazfit GTS 2 Mini", description: "Tracks movement, heartbeat, pressure; detects drunkenness and addiction related to physical activity"},
  {name: "Google Chrome - Home", description: "Lorem ipsum"},
  {name: "Google Chrome - Samsung", description: "Lorem ipsum"},
  // {name: "ScreenTime", description: "Tracks usage of apps on your phone and addictions associated with them"},
]

const mockSeverity: Severity[] = [
  {type: SeverityType.notifications, level: SeverityLevel.medium},
  {type: SeverityType.screenTime, level: SeverityLevel.none},
  {type: SeverityType.activities, level: SeverityLevel.none},
]

const Page: React.FC = () => {
  return(
    <div>
      <Paper elevation={2}>
        <Box
          sx={{paddingX: 2, paddingY: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center"}}
        >
          <Typography>Integrations</Typography>
          <Button sx={{textTransform: "none", color: "#018cfe", fontSize: 16}}>Add new</Button>
        </Box>
        <Divider/>
        <SettingsGroup
          items={mockIntegrations}
          addButton={false}
          header={item => item.name}
          summary={item => <Typography sx={{color: "#929292", fontSize: 12}}>{item.description}</Typography>}
        />
      </Paper>

      <Box sx={{p: 2}} />

      <Paper elevation={2}>
        <Box
          sx={{paddingX: 2, paddingY: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center"}}
        >
          <Typography>Sensitivity</Typography>
        </Box>
        <Divider/>
        <SettingsGroup
          items={mockSeverity}
          addButton={true}
          header={item => item.type}
          summary={item =>
            <>
              <ToggleButtonGroup fullWidth color="primary" value={item.level}>
                <ToggleButton value={"none"}>None</ToggleButton>
                <ToggleButton value={"low"}>Low</ToggleButton>
                <ToggleButton value={"medium"}>Medium</ToggleButton>
                <ToggleButton value={"high"}>High</ToggleButton>
              </ToggleButtonGroup>

              <Box sx={{p: 1}} />

              <Typography sx={{color: "#929292", fontSize: 12}}>{resolveSeverityEffect(item.type, item.level)}</Typography>
            </>
          }
        />
      </Paper>
      <Paper></Paper>
    </div>
  );
}

export default Page;