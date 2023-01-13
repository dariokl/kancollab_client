export interface INewBoard {
  name: string;
  description: string;
  members: string[];
}

export interface INewTask {
  title: string;
  description: string;
  assignee: string[];
  priority: number;
}
