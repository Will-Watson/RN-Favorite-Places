import { FlatList, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places }) => {
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem />}
    />
  );
};

const styles = StyleSheet.create({});

export default PlacesList;
