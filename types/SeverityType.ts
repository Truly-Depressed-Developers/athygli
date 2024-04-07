export enum SeverityType {
  notifications = "Notifications",
  screenTime = "Screen time",
  activities = "Activities",
}

export type AppState = AddictionData[];
type AddictionData = { addiction: SeverityType, data: AddictionOccurences[] }

type AddictionOccurences = {
  date: string,
  times: number
}

export type LabelType = {
  date: string,
  label: string
}