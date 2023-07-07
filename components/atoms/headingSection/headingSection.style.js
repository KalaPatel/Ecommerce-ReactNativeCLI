import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  leftLines: {
    position: 'absolute',
    height: 1.3,
    width: 42,
    backgroundColor: '#F8BE08',
    left: -21,
  },
  topLine: {
    top: 23,
  },
  bottomLine: {
    top: 26,
  },
  sectionTitle: {
    color: '#414241',
    paddingLeft: 30,
    width: 170,
    paddingVertical: 10,
    borderColor: '#F0EEF0',
    borderWidth: 1.4,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
