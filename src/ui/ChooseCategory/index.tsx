import {Pressable, ScrollView, StyleSheet} from 'react-native';
import {
  CategoriesWrapper,
  CategoryItem,
  CategoryText,
  ChooseText,
  IconWrapper,
  Wrapper,
  WrapperButton,
} from './styled';
import {memo, useContext, useState} from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import SvgArrow from '@assets/icons/arrow-option.svg';
import {CategoriesContext} from '@context/contextProvider';
import {INote} from '@customTypes/note';

export interface IChooseCategory {
  newNote: INote;
  setNewNote: React.Dispatch<React.SetStateAction<INote>>;
  setError: React.Dispatch<React.SetStateAction<string>> | undefined;
}

function ChooseCategoryComponent({
  newNote,
  setNewNote,
  setError,
}: IChooseCategory) {
  const categories = useContext(CategoriesContext);
  const [chooseCategory, setChooseCategory] = useState(
    newNote.category || 'Choose category',
  );
  const [visibleList, setVisibleList] = useState(false);

  const handleVisibleList = () => {
    setVisibleList(!visibleList);
  };

  const handleChooseCategory = (category: string) => () => {
    setChooseCategory(category);
    setNewNote({...newNote, category: category});
    setVisibleList(false);
    if (setError) {
      setError('');
    }
  };

  const pressed = useSharedValue(false);

  const tap = Gesture.Tap().onBegin(() => {
    pressed.value = !pressed.value;
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{rotate: withTiming(pressed.value ? '180deg' : '0deg')}],
  }));

  return (
    <Wrapper>
      <GestureHandlerRootView>
        <GestureDetector gesture={tap}>
          <Pressable onPress={handleVisibleList}>
            <WrapperButton>
              <ChooseText>{chooseCategory}</ChooseText>
              <IconWrapper style={[animatedStyles]}>
                <SvgArrow />
              </IconWrapper>
            </WrapperButton>
          </Pressable>
        </GestureDetector>
      </GestureHandlerRootView>

      {visibleList && (
        <CategoriesWrapper style={styles.boxShadow}>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={{flexGrow: 1}}>
            {categories.map((category, index) => {
              const {name} = category;
              if (name) {
                return (
                  <CategoryItem
                    key={index}
                    onPress={handleChooseCategory(name)}>
                    <CategoryText>{name}</CategoryText>
                  </CategoryItem>
                );
              }
            })}
          </ScrollView>
        </CategoriesWrapper>
      )}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
  scroll: {
    marginHorizontal: 10,
  },
});

export const ChooseCategory = memo(ChooseCategoryComponent);
