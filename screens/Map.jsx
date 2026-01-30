import { useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../Components/Common/IconButton";

export default function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function locationPickHandler(e) {
    const lat = e.nativeEvent.coordinate.latitude;
    const lng = e.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat, lng });

    
  }

  function saveLocationHandler() {

    console.log({selectedLocation})

    if (!selectedLocation) {
      Alert.alert("No Location Picked", "Choose one location");
      return;
    }

    navigation.navigate("Places", {
      pickedLatitude: selectedLocation.lat,
      pickedLongitude: selectedLocation.lng,
    });
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton isMaps={true} onPress={saveLocationHandler} />
      ),
    });
  }, [navigation,selectedLocation]);

  return (
    <MapView
      initialRegion={region}
      style={{ flex: 1 }}
      onPress={locationPickHandler}
    >
      {selectedLocation && (
        <Marker
          title="Sumanth Choosen Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}
