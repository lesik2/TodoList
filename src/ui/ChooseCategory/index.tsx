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
import {useState} from 'react';
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
export function ChooseCategory() {
  const categories = ['School', 'Work', 'Shop', 'Read', 'Work out'];
  const [chooseCategory, setChooseCategory] = useState('Choose category');
  const [visibleList, setVisibleList] = useState(false);

  const handleVisibleList = () => {
    setVisibleList(!visibleList);
  };

  const handleChooseCategory = (category: string) => () => {
    setChooseCategory(category);
    setVisibleList(false);
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
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                onPress={handleChooseCategory(category)}>
                <CategoryText>{category}</CategoryText>
              </CategoryItem>
            ))}
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
