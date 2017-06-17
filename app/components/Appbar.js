import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Appbar extends Component {

  render () {
    const { chapterNo, title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title} ({chapterNo})</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'sandybrown'
  },
  title: {
    color: 'white',
    fontSize: 24
  }
})