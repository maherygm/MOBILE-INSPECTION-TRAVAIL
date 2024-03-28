import {StyleSheet} from 'react-native';
import {color} from '../../constantes/color';
const IndexStyles = StyleSheet.create({
  appBar: {
    backgroundColor: color.primary,
    height: 200,
    justifyContent: 'center',
    marginBottom: 100,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: color.darkFontColor,
  },

  TextInputContainer: {
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
  },
  textInput: {
    width: '87%',
    backgroundColor: color.lighFontColor,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: color.primary,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    padding: 10,
  },

  card: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '100%',
    gap: 20,
  },
});
export default IndexStyles;
