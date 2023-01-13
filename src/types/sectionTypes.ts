import { ITask } from "./taskTypes";

export interface ISection {
  id: string;
  name: string;
  tasks: ITask[];
}
