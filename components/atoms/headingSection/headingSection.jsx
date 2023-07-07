import React from 'react';
import styles from './headingSection.style';
import {View, Text} from 'react-native';

const HeadingSection = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.leftLines, styles.topLine]} />
      <View style={[styles.leftLines, styles.bottomLine]} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};

export default HeadingSection;
