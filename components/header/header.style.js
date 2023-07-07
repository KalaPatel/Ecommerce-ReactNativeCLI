/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
    height: 60,
    backgroundColor: '#F8C414',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    width: 200,
    borderRadius: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  icons: {
    width: 25,
    height: 25,
  },
});
export default styles;
