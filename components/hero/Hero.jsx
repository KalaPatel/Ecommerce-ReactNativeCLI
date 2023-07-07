import React from 'react';
import styles from './hero.style';
import {View, Image} from 'react-native';

const Hero = () => {
  return (
    <View style={styles.HeroContainer}>
      <Image
        // Jewely
        src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        style={styles.heroImg}
      />
    </View>
  );
};

export default Hero;
