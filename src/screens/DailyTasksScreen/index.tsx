import {Note} from '@ui/Note';
import {Text} from 'react-native';
import {LayoutView} from './styled';

export function DailyTasksScreen() {
  return (
    <LayoutView>
      <Text>Daily tasks screen</Text>
      <Note
        startTime="10:00 am"
        endTime="05:00 pm"
        title="Design todo list"
        text="I should Design  todo list today,Tick the 
        done options."
        status="completed"
        subTasks={['Font', 'color']}
      />
    </LayoutView>
  );
}
