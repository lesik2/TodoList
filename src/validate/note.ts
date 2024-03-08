import { object, string } from 'yup';

export const basicInfoNoteSchema = object({
  title: string().required(),
  text: string().required(),
  category: string().required(),
});
