import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {LayoutView, MainView} from './styled';
import {Header} from './components/Header';
import {BackStyle} from '@ui/BackStyle';
import {CurrentDay} from './components/CurrentDay';
import {SearchInput} from './components/SearchInput';
import {Filter} from './components/Filter';
import {Categories} from './components/Categories';

export interface IMainScreen {
  navigation: DrawerNavigationHelpers;
}

export function MainScreen({navigation}: IMainScreen) {
  return (
    <MainView>
      <BackStyle />
      <LayoutView>
        <Header />
        <CurrentDay />
        <SearchInput />
        <Filter />
        <Categories />
      </LayoutView>
    </MainView>
  );
}
