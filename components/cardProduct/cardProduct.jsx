import React from 'react';
import cartIcon from '../../assets/icons/icons8-shopping-cart-48.png';
import {Text, View, Image} from 'react-native';
import styles from './cardProduct.style';
// import {useEffect, useState} from 'react';
// import GET from '../../utils/https';
function CardProduct() {
  //   const [popularData, setPopularData] = useState([]);
  //   useEffect(() => {
  //     GET('products').then(data => {
  //       const filterByRate = data.filter(item => item.rating.rate >= 4);
  //       setPopularData(filterByRate);
  //     });
  //   }, []);
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.iconWrapper}>
        <Text style={styles.ratingText}>⭐ 3.9</Text>
        <Text style={styles.heartIcon}>🤍</Text>
      </View>
      <Image
        style={styles.cardImage}
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      />
      <Text style={styles.productTitle} numberOfLines={1}>
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </Text>
      <View style={styles.bottomInfoWrapper}>
        <Text style={styles.priceText}>$109.95</Text>
        <Image source={cartIcon} resizeMode="contain" style={styles.cartImg} />
      </View>
    </View>
  );
}

export default CardProduct;
