
// 基础依赖
// 框架
import React from 'react';
import Taro from '@tarojs/taro'

import { View } from '@tarojs/components'


interface defauleState {
  content: string,
}

class Demo extends React.Component<any, defauleState> {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    }
  }

  onLoad(options) {
    this.getPageData();
  }

  getPageData() {
    Taro.request({
      url: 'https://mock.gezichenshan.top/mock/5b921496de266131e288aaa6/example/ly/collect',
      method:'post',
      success: (res) => {
        console.log(res)
        if(res.data.success == 1) {
          this.setState({
            content: "请求成功"
          }, () => {
            setTimeout(() => {
              Taro.createSelectorQuery().selectAll('.container').fields({
                dataset: true,
                size: true,
              }, function (res) {
                console.log(res)
              }).exec()
            }, 100);
          })
        }
      }
    }).catch(err => {
    });
  }

  render() {
    const {content} = this.state;
    return <View data-index={1} data-id={123} className={'container'}>
      {content}
    </View>
  }
}

export default Demo;
