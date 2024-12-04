// components/DetailSkeleton.tsx
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const DetailSkeleton = () => {
  const opacity = React.useRef(new Animated.Value(0.3)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.poster, { opacity }]} />
      <Animated.View style={[styles.titleBlock, { opacity }]} />
      <Animated.View style={[styles.infoBlock, { opacity }]} />
      <Animated.View style={[styles.plotBlock, { opacity }]} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    padding: 16,
  },
  poster: {
    width: '100%',
    height: 450,
  },

  titleBlock: {
    height: 30,
    backgroundColor: '#333',
    marginBottom: 8,
    borderRadius: 4,
  },
  infoBlock: {
    height: 20,
    backgroundColor: '#333',
    marginBottom: 16,
    borderRadius: 4,
    width: '60%',
  },
  plotBlock: {
    height: 100,
    backgroundColor: '#333',
    borderRadius: 4,
  },

})