import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Bass Film</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',  
    paddingVertical:8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 56
  },
  logo: {
    fontSize : 28,
    fontWeight: 'bold',
    textAlign: "left",
    color: "#F20000",
  }
})

export default Header