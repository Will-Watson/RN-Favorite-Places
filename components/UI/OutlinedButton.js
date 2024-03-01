import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const OutlinedButton = () => {
  return (
    <Pressable>
      <Ionicons />
      <Text>Button</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default OutlinedButton;
