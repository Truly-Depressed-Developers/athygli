import {SeverityType} from "@/types/SeverityType";
import {SeverityLevel} from "@/types/SeverityLevel";

const EFFECTS: Record<SeverityType, Record<SeverityLevel, string>> = {
  [SeverityType.notifications]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - ",
    [SeverityLevel.medium]: "Medium - These notifications will only appear in the slack hours",
    [SeverityLevel.high]: "High - ",
  },
  [SeverityType.screenTime]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - ",
    [SeverityLevel.medium]: "Medium - ",
    [SeverityLevel.high]: "High - ",
  },
  [SeverityType.activities]: {
    [SeverityLevel.none]: "None - no interaction with the user",
    [SeverityLevel.low]: "Low - ",
    [SeverityLevel.medium]: "Medium - ",
    [SeverityLevel.high]: "High - ",
  },
}

export const resolveSeverityEffect = (addiction: SeverityType, level: SeverityLevel) => {
  return EFFECTS[addiction][level];
}