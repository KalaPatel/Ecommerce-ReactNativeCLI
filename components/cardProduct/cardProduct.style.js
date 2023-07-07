import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardWrapper: {
    height: 235,
    width: 165,
    borderRadius: 8,
    borderColor: 'rgba(93,93,93, 0.8)',
    borderWidth: 0.5,
    // backgroundColor: '#fef9f3',
    // elevation: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'black',
    // shadowOpacity: 0.4,
  },
  iconWrapper: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  ratingText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  heartIcon: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 165,
    height: 110,
    objectFit: 'contain',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
  },
  bottomInfoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    padding: 8,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartImg: {height: 35, width: 35},
});

export default styles;
