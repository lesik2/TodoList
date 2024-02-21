

import {LayoutView, MainView} from './styled';
import { BackStyle } from '@ui/BackStyle';
import { Header } from '@components/Header';
import { AddNoteButton } from '@ui/AddNoteButton';
import { useState } from 'react';
import { CreateNoteModal } from '@components/CreateNoteModal';




export function DailyTasksScreen() {

  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  }

  return (
    <MainView>
      <BackStyle type='apple'/>
      <LayoutView>
        <Header 
          title='Today’s task'
        />
        <AddNoteButton  handlePress={handleOpenModal}/>
        <CreateNoteModal visible={visible} setVisible={setVisible}/>
      </LayoutView>
    </MainView>

  );
}
