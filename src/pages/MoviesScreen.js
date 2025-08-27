import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate
} from 'react-native-reanimated';

import axios from 'axios';

const Stack = createNativeStackNavigator()
const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7
const imageHeight = imageWidth * 1.76
const spacing = 12;

function Posters({ item, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollX.value, [index - 1, index + 1], [1.6, 1, 1.6])
        },
        {
          rotate: `${interpolate(scrollX.value, [index - 1, index + 1], [15, 1, -15])}deg`
        }
      ]
    }
  })
  return (
    <View style={{ width: imageWidth, height: imageHeight, overflow: 'hidden', borderRadius: 20 }}>
      <Animated.Image source={{ uri: item }} style={[{ flex: 1 }, stylez]} />
    </View>
  )
}

function BackdropPoster({ posters, index, scrollX }) {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, [index - 1, index + 1], [0, 1, 0])
    }
  })

  return (
    <Animated.Image source={{ uri: posters }} style={[StyleSheet.absoluteFillObject, stylez]}
      blurRadius={50} />
  )
}

export default function MoviesScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const scrollX = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x / (imageWidth + spacing)
  })

  useEffect(() => {
    fetchData();
  })

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?s=movie&page=1&apikey=9344bfe8`,
      );
      const moviesCatalog = res.data.Search.map(movie => movie.Poster)
      console.log(moviesCatalog)
      setData(moviesCatalog);
    } catch (error) {
      console.log("Erro ao buscar as imagens: ", error)
    }
  }

  const goBack = async () => {
    navigation.navigate("HomeMovies")
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((poster, index) => (
          <BackdropPoster key={index} posters={poster} index={index} scrollX={scrollX} />
        ))}
      </View>

      <Animated.FlatList
        data={data}
        keyExtractor={(index) => String(index)}
        horizontal
        snapToInterval={imageWidth + spacing}
        decelerationRate={"fast"}
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2,
        }}
        renderItem={({ item, index }) => <Posters item={item} index={index} scrollX={scrollX} />}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text>Return</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 20,
  }
});
