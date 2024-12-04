import React from 'react';
import { View, TextInput, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MovieCard } from '@/components/MovieCard';
import { MovieCardSkeleton } from '@/components/MovieCardSkeleton';
import { searchMovies } from '@/api/movies';
import type { Movie } from '@/types';
import Header from '@/components/Header';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { Footer } from '@/components/Footer';

const SearchScreen: React.FC = () => {
  const [query, setQuery] = React.useState('');

  const {data: movies, isPending, mutateAsync} = useMutation({
    mutationFn: (query : string) => searchMovies(query),
    onError: (error) => {
      console.error('Search error:', error);
    },
  })

  const handleSearch = React.useCallback(async (searchQuery: string) => {
    await mutateAsync(searchQuery);
  }, []);

  




  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => handleSearch(query)}
          placeholder="Search movies..."
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => handleSearch(query)}
        >
          <Text style={{ color: '#fff' }}>Search</Text>
        </TouchableOpacity>

      </View>

      {isPending ? (
        <FlatList
          data={[1, 2, 3]}
          renderItem={() => <MovieCardSkeleton />}
          keyExtractor={(item) => item.toString()}
        />
      ) : (
        <>
          {!movies ? (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: '#fff', fontSize: 16}}>No movies found</Text>
            </View>
          ) : (
            <FlatList
              data={movies}
              renderItem={({ item }) => (
                <MovieCard movie={item} key={item.imdbID}  />
              )}
              style = {{
                gap: 32,
              }}
              keyExtractor={(item) => item.imdbID}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 36,
  },
  searchInput: {
    backgroundColor: '#fff',
    color: '#000',
    minWidth: 250,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  searchButton: {
    backgroundColor: '#F20000',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,

  },
  card: {
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  poster: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  year: {
    color: '#999',
    fontSize: 14,
    marginTop: 4,
  },

});


export default SearchScreen;