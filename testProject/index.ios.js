/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
Image
} from 'react-native';

class testProject extends Component {
  render() {
    var Dimensions = require('Dimensions');
    var{width,height,scale} = Dimensions.get('window');
    return (
        <View style={{flexDirection:'row',padding:10}}>
            <View style={{height:30,backgroundColor:'green',flex:1}}></View>
            <View style={{height:30,backgroundColor:'red',flex:1}}></View>
            <View style={{height:30,backgroundColor:'blue',flex:1}}></View>
            <View style={{height:30,backgroundColor:'orange',flex:1}}></View>
            <View style ={{height:600,width:300,backgroundColor:'red',alignItems:'center',margin: 50}}>
            <Image source={require('./1537.jpg')} style={{width:100,height:100}}></Image>
                <Image source={{uri:'OBD'}} style={{width:400,height:100}}></Image>

                <Image source={{url:'https://www.baidu.com/img/bd_logo1.png'}} style={{width:200,height:100,resizeMode:Image.resizeMode.contain}}>
                    <Text style={{marginTop:50,backgroundColor:'orange'}}>背景图片添加</Text>
                </Image>
            </View>
        </View>
    );
  }
}

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var BadgeJson = require('./BadgeData.json');
var ViewW = 100;
var vMargin = (width - 3 * ViewW)/4;
var hMargin = 25;
class Demo1 extends Component {
    render() {
        return (
            <View style={viewStyle.topViewStyle}>
                {this.renderAllBadge()}
            </View>
        );
    }


    renderAllBadge() {
        var allBadge = [];
        for(var i = 0;i<BadgeJson.data.length;i++){
            var badge = BadgeJson.data[i];

            allBadge.push(
                <View key = {i} style={viewStyle.outViewStyle}>
                    <Image source={{uri:badge.icon}} style={viewStyle.imageStyle} />
                    <Text style={viewStyle.mainTitleStyle}>
                        {badge.title}
                    </Text>
                </View>
            );
        }
        return allBadge;
    }
}
var viewStyle = StyleSheet.create({
  topViewStyle:{
      flexDirection:'row',
      flexWrap:'wrap'
  },
    outViewStyle:{
        backgroundColor:'yellow',
        alignItems:'center',
        marginLeft:vMargin,
        marginTop:hMargin
  },
    imageStyle:{
        width:ViewW,
        height:ViewW
    },
    mainTitleStyle:{

    }
});
AppRegistry.registerComponent('testProject', () => Demo1);
