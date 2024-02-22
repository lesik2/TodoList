export interface ISubNote {
  id: number;
  text: string;
  checked: boolean;
}

export interface INote {
  id: string;
  title: string;
  text: string;
  subNotes: ISubNote[];
  startTime: string;
  endTime: string;
  date: string;
  checked: boolean;
  category: string;
  importance: boolean;
}
