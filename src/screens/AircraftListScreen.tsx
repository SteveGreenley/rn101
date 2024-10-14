import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AircraftListScreenNavigationProps } from '../navigation/types';
// https://www.pexels.com/api/documentation/#photos-search
import { pexelsAPIKey } from '../../pexels.apikey.json';

type Aircraft = {
  id: number;
  description: string;
  thumbnailUrl: string;
  imageUrl: string;
}

type PexelsPhoto = {
  id: number;
  src: {
    tiny: string;
    large: string;
  },
  alt: string;
};

// A simple function that uses Axios to fetch a list of Aircraft from a remote server
const fetchAircraftList = async (): Promise<Aircraft[]> => {
  const response = await axios.get('https://api.pexels.com/v1/search?query=aircraft', {
    headers: {
      Authorization: pexelsAPIKey,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const { data } = response;

  const aircraftList: Aircraft[] = data.photos.map((photo: PexelsPhoto) => ({
    id: photo.id,
    description: photo.alt,
    thumbnailUrl: photo.src.tiny,
    imageUrl: photo.src.large,
  }));
  return aircraftList;
};

const NoAircraft = () => {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title style={styles.infoText}>
          There are no aircraft
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const ListFooter = () => {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title style={styles.infoText}>
          https://www.pexels.com
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

const AircraftListScreen = (): JSX.Element => {
  const { navigate } = useNavigation<AircraftListScreenNavigationProps>();
  const [aircraftList, setAircraftList] = useState<Aircraft[]>([]);


  useEffect(() => {
    fetchAircraftList().then((data) => {
      setAircraftList(data);
    });
  }, []);

  const goToAircraftDetail = (aircraft: Aircraft) => () => {
    navigate('AircraftDetail', {
      description: aircraft.description,
      imageUrl: aircraft.imageUrl,
    });
  };

  const renderItem = ({ item }: { item: Aircraft }) => {
    return (
      <ListItem
        bottomDivider
        onPress={goToAircraftDetail(item)}>
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={styles.thumbnailImage} />
        <ListItem.Content>
          <ListItem.Title>{item.description}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList<Aircraft>
        data={aircraftList}
        renderItem={renderItem}
        ListEmptyComponent={NoAircraft}
        ListFooterComponent={ListFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoText: {
    color: 'dodgerblue',
  },
  thumbnailImage: {
    width: 140,
    height: 100,
  },
});

export default AircraftListScreen;
