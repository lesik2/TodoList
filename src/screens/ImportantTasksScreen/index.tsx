import {LayoutView, MainView} from './styled';
import { BackStyle } from '@ui/BackStyle';
import { Header } from '@components/Header';

export function ImportantTasksScreen() {
  return (
    <MainView>
    <BackStyle type='apple'/>
    <LayoutView>
      <Header 
        title='Important tasks'
      />
    </LayoutView>
  </MainView>
  );
}
