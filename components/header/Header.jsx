import {TouchableOpacity, TextInput, Image, View} from 'react-native';
import hamburgerMenu from '../../assets/icons/icons8-circled-menu-24.png';
import cartIcons from '../../assets/icons/icons8-shopping-cart-48.png';
import React from 'react';

import styles from './header.style';
export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={hamburgerMenu}
          resizeMode="contain"
          style={styles.icons}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.searchBar}
        value=""
        // onChangeText={() => {
        //   console.log('ciao');
        // }}
        placeholder="Seach"
      />
      <TouchableOpacity>
        <Image source={cartIcons} resizeMode="cover" style={styles.icons} />
      </TouchableOpacity>
    </View>
  );
}
