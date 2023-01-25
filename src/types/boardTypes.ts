export interface INewBoard {
  name: string;
  members: string[];
}

export interface INewTask {
  title: string;
  description: string;
  assignee: string[];
  priority: number;
}
