import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {LayoutView, MainView} from './styled';
import {Header} from './components/Header';
import {BackStyle} from '@ui/BackStyle';
import {CurrentDay} from './components/CurrentDay';
import {SearchInput} from './components/SearchInput';
import {Filter} from './components/Filter';
import {Categories} from './components/Categories';
import {NotesDispatchContext, NotesProvider} from '@context/note';
import { useContext, useEffect } from 'react';
import { getAllNotes } from '../../api/notes';
import { NotesActionTypes } from '../../types/actionsNotes';
export interface IMainScreen {
  navigation: DrawerNavigationHelpers;
}

export function MainScreen({navigation}: IMainScreen) {


  const dispatch = useContext(NotesDispatchContext);

  useEffect(()=>{
    getAllNotes().then((notes)=>{
      if(dispatch){
        dispatch({
          type: NotesActionTypes.SET_NOTES,
          payload: notes,
        })
      }
  })
  }, [])


  return (
    <MainView>
      <BackStyle type="circle" />
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
