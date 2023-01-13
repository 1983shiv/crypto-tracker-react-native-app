import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import styles from "./styles"

export default function CoinIte() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
          }}
          style={{ 
            height: 50, 
            width: 50, 
            paddingLeft: 40, 
            marginRight: 20,
            alignSelf: 'center' }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textOne}>1</Text>
            <Text style={styles.text}>BTC</Text>
            <AntDesign name="caretdown" size={12} color="red" style={{alignSelf: 'center', marginHorizontal: 4}} />
            <Text style={styles.text}>0.63%</Text>
          </View>          
        </View>
        <View style={{ marginLeft: 'auto', marginRight: 2}}>
            <Text style={styles.title}>56265.09</Text>
            <Text style={styles.text}>MCap 1.076 T</Text>
          </View>
      </View>
    </View>
  );
}
