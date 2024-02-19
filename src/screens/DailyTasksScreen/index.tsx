

import {LayoutView, MainView} from './styled';
import { BackStyle } from '@ui/BackStyle';
import { Header } from '@components/Header';



export function DailyTasksScreen() {


  return (
    <MainView>
      <BackStyle type='apple'/>
      <LayoutView>
        <Header 
          title='Today’s task'
        />
      </LayoutView>
    </MainView>

  );
}
