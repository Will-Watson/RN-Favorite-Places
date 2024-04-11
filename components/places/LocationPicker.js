import { View, Text, StyleSheet } from 'react-native';

import OutlinedButton from '../UI/OutlinedButton';

const LocationPicker = () => {
  return (
    <View>
      <View >
        <Text>No location chosen yet!</Text>
      </View>
      <View>
        <OutlinedButton icon='location'>Locate User</OutlinedButton>
        <OutlinedButton icon='map'>Pick on Map</OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default LocationPicker;
