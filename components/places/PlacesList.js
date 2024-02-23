import {FLatList, StyleSheet} from 'react-native';

const PlacesList = ({places}) => {
  return (
    <FlatList data={places} />
  );
}

const styles = StyleSheet.create({});

export default PlacesList;
