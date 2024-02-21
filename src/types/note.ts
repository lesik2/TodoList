


export interface ISubNote{
  id:number;
  text: string;
  checked: boolean;
}

export interface INote{
  id: number;
  title: string;
  text: string;
  subNotes: ISubNote[];
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  checked: boolean;
  category: string;
  importance: boolean;
}