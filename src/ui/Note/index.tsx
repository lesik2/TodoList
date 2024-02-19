import {
  Gesture,
  GestureDetector,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  AllNotesView,
  CheckBox,
  InfoWrapper,
  MainWrapper,
  NoteView,
  OptionButton,
  SubTaskInfoWrapper,
  SubTaskWrapper,
  SubTitle,
  TimeText,
  TimeWrapper,
  Title,
  Wrapper,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {Menu} from './components/Menu';
import {Pressable} from 'react-native';

export interface INote {
  startTime: string;
  endTime: string;
  title: string;
  text: string;
  status: 'completed' | 'in-progress';
  subTasks?: string[];
}

export function Note({
  startTime,
  endTime,
  title,
  text,
  status,
  subTasks = [],
}: INote) {
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showSubTasks, setShowSubTasks] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleOpenMenu = () => {
    setVisible(true);
  };

  const handleCloseMenu = () => {
    setVisible(false);
  };
  const handlePressShowSubTasks = () => {
    setShowSubTasks(!showSubTasks);
  };

  return (
    <AllNotesView>
      <Pressable onPress={handlePressShowSubTasks}>
        <NoteView>
          <Wrapper>
            <TimeWrapper>
              <TimeText>{startTime}</TimeText>
              <TimeText>{endTime}</TimeText>
            </TimeWrapper>
            <MainWrapper>
              <CheckBox onPress={handleCheck} activeOpacity={1}>
                {checked && <Icon name="check" size={27} color="#8785F6" />}
              </CheckBox>
              <InfoWrapper>
                <Title>{title}</Title>
                <SubTitle>{text}</SubTitle>
              </InfoWrapper>
            </MainWrapper>
          </Wrapper>
          <OptionButton onPress={handleOpenMenu}>
            <Icon name="ellipsis-v" size={28} color="#CCCCCC" />
          </OptionButton>
          <Menu visible={visible} handleCloseMenu={handleCloseMenu} />
        </NoteView>
      </Pressable>
      {showSubTasks && subTasks.length > 0 && (
        <SubTaskWrapper>
          {subTasks.map(task => (
            <SubTaskInfoWrapper>
              <CheckBox onPress={handleCheck} activeOpacity={1} $subTask={true}>
                {checked && <Icon name="check" size={23} color="#8785F6" />}
              </CheckBox>
              <Title $subTask={true}>{task}</Title>
            </SubTaskInfoWrapper>
          ))}
        </SubTaskWrapper>
      )}
    </AllNotesView>
  );
}
