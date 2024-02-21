


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
  startTime: Date;
  endTime: Date;
  date: Date;
  checked: boolean;
  category: string;
  importance: boolean;
}