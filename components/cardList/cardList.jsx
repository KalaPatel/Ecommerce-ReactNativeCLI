import React from 'react';
import HeadingSection from '../atoms/headingSection/headingSection';
import {View} from 'react-native';
import styles from './cardList.style';
import CardProduct from '../cardProduct/cardProduct';

const CardList = () => {
  return (
    <View style={styles.container}>
      <HeadingSection title="POPULAR" />
      <CardProduct />
    </View>
  );
};

export default CardList;
