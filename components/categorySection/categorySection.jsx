import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './categorySection.style';
import HeadingSection from '../atoms/headingSection/headingSection';

const CategorySection = () => {
  return (
    <View style={styles.catSectionWrapper}>
      {/* <View style={[styles.leftLines, styles.topLine]}></View>
      <View style={[styles.leftLines, styles.bottomLine]}></View>
      <Text style={styles.sectionTitle}>CATEGORIES</Text> */}
      <HeadingSection title="CATEGORIES" />
      <View style={styles.cardWrapper}>
        <View style={styles.categoryCard}>
          <Image
            style={styles.cardImage}
            src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
            resizeMode={'cover'}
          />
          <Text style={styles.cardText}>Technology</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image
            style={styles.cardImage}
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            resizeMode={'cover'}
          />
          <Text style={styles.cardText}>Jewelery</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image
            style={styles.cardImage}
            src="https://images.unsplash.com/photo-1582404510421-de6290209c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
            resizeMode={'cover'}
          />
          <Text style={styles.cardText} numberOfLines={1}>
            Men's clothing
          </Text>
        </View>
        <View style={styles.categoryCard}>
          <Image
            style={styles.cardImage}
            src="https://images.unsplash.com/photo-1520635343069-34072f52080f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
            resizeMode={'cover'}
          />
          <Text style={styles.cardText} numberOfLines={1}>
            Women's clothing
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CategorySection;
