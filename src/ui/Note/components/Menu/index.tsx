import {MenuItemText, MenuItems, MenuOption} from './styled';
import {Pressable, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export interface IMenu {
  visible: boolean;
  handleCloseMenu: () => void;
}

export function Menu({visible, handleCloseMenu}: IMenu) {
  return (
    <>
      {visible && (
        <MenuOption style={styles.boxShadow}>
          <TouchableWithoutFeedback>
            <MenuItems>
              <Pressable
                onPress={handleCloseMenu}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>add subtasks</MenuItemText>
                )}
              />
              <Pressable
                onPress={handleCloseMenu}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>edit tasks</MenuItemText>
                )}
              />
              <Pressable
                onPress={handleCloseMenu}
                children={({pressed}) => (
                  <MenuItemText $pressed={pressed}>delete tasks</MenuItemText>
                )}
              />
            </MenuItems>
          </TouchableWithoutFeedback>
        </MenuOption>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
