import { View, Text, StyleSheet } from 'react-native';

import OutlinedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';

const LocationPicker = () => {
  const getLocationHandler = () => {};
  const pickOnMapHandler = () => {};

  return (
    <View>
      <View>
        <Text>No location chosen yet!</Text>
      </View>
      <View>
        <OutlinedButton icon='location' onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon='map' onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  action: {},
});

export default LocationPicker;
