import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView
} from 'react-native';

import HTMLView from './misc/HTMLView';

export default class Body extends Component {

  render () {
    const { text } = this.props;

     const bolds = (p) => p.split(/(<\/b>)/g).map((str, i) => {
      if (str.substring(0, 3) === '<b>') {
        // str = str.replace(/(<b[^>]*>|<\/b>)/g, ''); // Remove <b> || </b> from string
        return (<Text key={i} style={styles.b}>{str}</Text>)
      } else if (str.substring(0, 4) === '</b>') {
        return (<Text key={i}> </Text>);
      } else {
        return <Text key={i}>{str}</Text>;
      }
    })

    const italics = (p) => p.split(/(<\/i>)/g).map((str, i) => {
      if (str.substring(0, 3) === '<i>') {
        // str = str.replace(/(<i[^>]*>|<\/i>)/g, ''); // Remove <i> || </i> from string
        // console.log('Italic', str);
        return (<Text key={i} style={styles.i}>{str}</Text>)
      } else if (str.substring(0, 4) === '</i>') {
        return (<Text key={i}> </Text>);
      } else {
        return <Text key={i}>{bolds(str)}</Text>;
      }
    })
    
    const renderParagraphs = () => text.split(/(<\/p>)/g).map((paragraph, index) => {
      paragraph = paragraph.replace(/(<p[^>]*>|<\/p>)/g, ''); // Remove <p> || </p> from string
      return <Text key={index}>{italics(paragraph)}</Text>
    })
    
    return (
      <ScrollView style={styles.container}>
        <HTMLView value={text} stylesheet={styles} />
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  p: {
    color: '#000',
    textAlign: 'justify',
    marginBottom: 10
  }, 
  i: {
    color: 'mediumpurple',
    fontStyle: 'italic'
  },
  b: {
    fontWeight: '500',
    color: 'mediumpurple',
  }
})