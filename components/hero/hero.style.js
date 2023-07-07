import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  HeroContainer: {
    height: 200,
    // borderColor: 'blue',
    // borderWidth: 2,
    elevation: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: 'black',
  },
  heroImg: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});

export default styles;
