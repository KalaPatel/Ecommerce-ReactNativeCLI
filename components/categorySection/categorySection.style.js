import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  catSectionWrapper: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    position: 'relative',
  },
  cardWrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  categoryCard: {
    width: 80,
    height: 80,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardText: {
    textAlign: 'center',
    color: '#414241',
  },
});
export default styles;
