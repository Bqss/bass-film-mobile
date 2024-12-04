import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export const MovieCardSkeleton: React.FC = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.skeletonCard}>
      <Animated.View 
        style={[
          styles.skeletonPoster,
          {
            opacity: animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0.3, 0.7],
            }),
          },
        ]} 
      />
      <View style={styles.skeletonInfo}>
        <Animated.View 
          style={[
            styles.skeletonText,
            {
              opacity: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 0.7],
              }),
            },
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonCard: {
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  skeletonPoster: {
    width: '100%',
    height: 200,
    backgroundColor: '#333',
  },
  skeletonInfo: {
    padding: 12,
  },
  skeletonText: {
    height: 20,
    backgroundColor: '#333',
    borderRadius: 4,
  }
})