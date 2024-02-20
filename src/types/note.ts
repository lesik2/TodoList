
export type IStatus = 'completed'|'in-progress';

export interface ISubNote{
  text: string;
  status: IStatus;
}

export interface INote{
  title: string;
  text: string;
  subNotes: ISubNote[];
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  status: IStatus;
  category: string;
  importance: boolean;
}