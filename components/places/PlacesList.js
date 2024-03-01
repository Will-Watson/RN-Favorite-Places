import {FlatList, StyleSheet} from 'react-native';

const PlacesList = ({places}) => {
  return (
    <FlatList data={places} keyExtractor={(item) => item.id} renderItem={({item}) => {}} />
  );
}

const styles = StyleSheet.create({});

export default PlacesList;
