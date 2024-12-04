import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import type { Movie } from '@/types';
import { Link } from 'expo-router';

interface MovieCardProps {
  movie: Movie;

}

export const MovieCard: React.FC<MovieCardProps> = ({ movie}) => {
  return (
    <Link href={`/detail/${movie.imdbID}`} style={styles.card}>
      <Image
        source={{ uri: movie.Poster }}
        style={styles.poster}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.Title}</Text>
        <Text style={styles.year}>{movie.Year}</Text>
        <Link href={`detail/${movie.imdbID}`} style={styles.button} >
          <Text style={styles.buttonText}>Lihat Detail</Text>
        </Link>
      </View>
    </Link>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 24,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 12,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  year: {
    color: '#000',
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    width: 150
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  }
})