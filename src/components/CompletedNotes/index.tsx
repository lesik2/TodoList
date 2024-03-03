import SvgArrow from '@assets/icons/arrow-option.svg';
import {
  Gesture,
  GestureDetector,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Title, WrapperButton, Wrapper, Line, WrapperNotes} from './styled';
import {useState} from 'react';
import {INote} from '@customTypes/note';
import {Note} from '@ui/Note';
import {StyleSheet} from 'react-native';

export interface ICompletedNotes {
  completedNotes: INote[];
}

export function CompletedNotes({completedNotes}: ICompletedNotes) {
  const [isShow, setIsShow] = useState(false);

  const handlePress = () => {
    setIsShow(!isShow);
  };

  return (
    <Wrapper $isOpen={isShow}>
      <Line />
      <TouchableOpacity onPress={handlePress}>
        <WrapperButton>
          <Title>{`done tasks (${completedNotes.length})`}</Title>
          <SvgArrow />
        </WrapperButton>
      </TouchableOpacity>
      <WrapperNotes>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          {isShow &&
            completedNotes.length > 0 &&
            completedNotes.map(note => <Note key={note.id} {...note} />)}
        </ScrollView>
      </WrapperNotes>
    </Wrapper>
  );
}
const styles = StyleSheet.create({
  scrollStyle: {
    flexDirection: 'column',
    gap: 8,
    paddingVertical: 10,
  },
});
