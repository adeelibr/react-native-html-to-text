import React, { Component } from 'react';
import { View } from 'react-native';

// Api
import Inkitt from './api/Inkitt';
// Components
import Appbar from './components/Appbar';
import Body from './components/Body';

export default class MainPage extends Component {

  constructor () {
    super();
    this.state = {
      chapterNo: '0',
      title: 'loading ..',
      text: '<p>loading..</p>',
    };
  }

  componentDidMount () {
    Inkitt.getChapterOne()
      .then(res => {
        this.setState({ 
          chapterNo: res.response.chapter_number,
          title: res.response.name,
          text: res.response.text
        });
      })
      .catch(error => {
        console.log('Error ', error);
      });
  }

  render () {
    const { chapterNo, title, text } = this.state;
    return (
      <View>
        <Appbar chapterNo={chapterNo} title={title} />
        {(text !== '') && <Body text={text} />}
      </View>
    );
  }

}
