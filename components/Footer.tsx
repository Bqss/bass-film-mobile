import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.copyright}>Copyright © Basofi 20232</Text>
    </View>
  );
};

const styles = StyleSheet.create({
 
  footer: {
    padding: 16,

    borderTopWidth: 1,
    borderTopColor: '#333',

    position: 'absolute',
    bottom: 0,

  },
  copyright: {
    color: '#fff',
    fontSize: 12,

    textAlign: 'center',
  },
});

