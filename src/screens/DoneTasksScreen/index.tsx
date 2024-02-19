

import {LayoutView, MainView} from './styled';
import { BackStyle } from '@ui/BackStyle';
import { Header } from '@components/Header';

export function DoneTasksScreen() {
  return (
    <MainView>
    <BackStyle type='apple'/>
    <LayoutView>
      <Header 
        title='Done tasks'
      />
    </LayoutView>
  </MainView>
  );
}
