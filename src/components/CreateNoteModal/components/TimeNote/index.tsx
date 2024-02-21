import Icon from "react-native-vector-icons/FontAwesome";
import { ContentView,InfoWrapper,StyledButton,SubTitle,TimeWrapper,Title } from "./styled";


import { TimePicker } from "./components/TimePicker";





export interface ITimeNote{
  title: string;
  text: string;
  setImportance: React.Dispatch<React.SetStateAction<boolean>>;
  importance: boolean;
  startTime: Date;
  setStartTime: React.Dispatch<React.SetStateAction<Date>>;
  endTime: Date;
  setEndTime: React.Dispatch<React.SetStateAction<Date>>;
}

export function TimeNote(
  {
    title, text,importance,setImportance, startTime, setStartTime, endTime, setEndTime
  }:ITimeNote
) {

 
  
  const handleCheckedPress = () => {
    setImportance(!importance);
  }

  const iconName = importance?'star':'star-o';
  const iconColor = importance?'#FFD952':'#CCCCCC';

  return (
      <ContentView>
        <InfoWrapper>
          <Title>{title}</Title>
          <SubTitle>{text}</SubTitle>
        </InfoWrapper>
        <TimeWrapper>
          <TimePicker 
            title="from"
            time={startTime}
            setTime={setStartTime}

          />
          <TimePicker 
            title="till"
            time={endTime}
            setTime={setEndTime}
          />
        </TimeWrapper>
        <StyledButton onPress={handleCheckedPress}>
          <Icon name={iconName} size={45} color={iconColor}/>
        </StyledButton>

      </ContentView>
  )
}


