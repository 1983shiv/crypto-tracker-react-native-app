import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import cryptocurrencies from "./assets/data/cryptocurrencies.json";
import CoinItem from "../crypto-tracker/src/components/CoinItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
      />
      {/* <CoinItem />
      <CoinItem />
      <CoinItem /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  }
});
