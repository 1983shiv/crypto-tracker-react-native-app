import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import styles from "./styles"

export default function CoinIte({ marketCoin }) {
  const { name, market_cap_rank, image, market_cap, symbol, current_price, price_change_percentage_24h } = marketCoin

  const normalizeMCap = (marketCap) => {
    if(marketCap > 1000000000000){
      return `${Math.floor(marketCap / 1000000000000)} T`;
    } else if (marketCap > 1000000000) {
      return `${Math.floor(marketCap / 1000000000)} B`;
    } else if( marketCap > 1000000000 ){
      return `${Math.floor(marketCap / 1000000)} M`;
    } else {
      return marketCap;
    }
  }

  const upDownColor = (price_change_percentage_24h < 0) ? 'red' : 'green' ;
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 50,
          width: 50,
          paddingLeft: 40,
          marginRight: 20,
          alignSelf: 'center'
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textOne}>{market_cap_rank}</Text>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign name={(price_change_percentage_24h < 0) ? "caretdown" : "caretup" } size={12} color={upDownColor} style={{ alignSelf: 'center', marginHorizontal: 4, marginTop: 4 }} />
          <Text style={{ color: upDownColor, fontSize: 10, fontWeight: 'bold', marginTop: 4}}>{price_change_percentage_24h.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', marginRight: 2, alignItems: 'flex-end' }}>
        <Text style={styles.title}>{current_price.toFixed(2)}</Text>
        <Text style={styles.text}>MCap: {normalizeMCap(market_cap)}</Text>
      </View>
    </View>
  );
}
