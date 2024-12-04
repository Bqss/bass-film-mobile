
import axios from 'axios';

// screens/MovieDetailScreen.tsx
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getMoviesByID } from '@/api/movies';
import { DetailSkeleton } from '@/components/DetailSkeleton';
import { useLocalSearchParams } from 'expo-router';
import { Footer } from '@/components/Footer';



const MovieDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, isLoading } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMoviesByID(id as string),
  });

  if (isLoading) return <DetailSkeleton />;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: movie?.Poster }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{movie?.Title}</Text>

        <Text style={styles.genre}>Genre : {movie?.Genre}</Text>
        <Text style={styles.year}>Released : {movie?.Released}</Text>


        <Text style={styles.plot}>{movie?.Plot}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  content: {
    padding: 16,
  },
  poster: {
    width: '100%',
    height: 450,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  year: {
    color: '#fff',
    fontSize: 13,
  },
  type: {
    color: '#999',
    fontSize: 13,
  },
  genre: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 4,
  },
  released: {
    color: '#999',
    marginBottom: 16,
  },
  plot: {
    marginTop: 16,
    color: '#fff',
    lineHeight: 22,
  }
});