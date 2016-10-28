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
    ScrollView,
    Image,
    ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var TimerMixin = require('react-timer-mixin');
var ImageData = require('./ImageData.json');
var WineData = require('./Wine.json');


var listView2Project = React.createClass({
    render(){
        return(
            <View>
                <Text>1</Text>
            </View>
        )
}
})

AppRegistry.registerComponent('ScrollViewRNProject', () => listView2Project);


// ------- ListView ------- //
// var listViewProject = React.createClass({
//     getInitialState(){
//         var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
//         return{
//             dataSource:ds.cloneWithRows(WineData)
//         }
//     },
//
//     renderRow(rowData,sectionID,rowID,highlightRow){
//         return(
//                 <View style={styles.viewStyle}>
//                     <Image source={{uri:rowData.image}} style = {styles.imageStyle}></Image>
//                     <View style={styles.rightviewStyle}>
//                         <Text style = {styles.titleStyle}>{rowData.name}</Text>
//                         <Text style={styles.moneyStyle}>💰{rowData.money}</Text>
//                     </View>
//                 </View>
//         );
//     },
//     render(){
//         return (
//           <ListView
//               dataSource={this.state.dataSource}
//               renderRow={this.renderRow}
//           />
//             );
//
//     }
// })
//
// const styles = StyleSheet.create({
//     viewStyle:{
//         backgroundColor:'white',
//         flexDirection:'row',
//         borderBottomColor:'#e8e8e8',
//         borderBottomWidth:0.5,
//         padding:10
//     },
//     rightviewStyle:{
//         marginLeft:10,
//         justifyContent:'center'
//     },
//     imageStyle:{
//         width:60,
//         height:60,
//         marginLeft:10
//     },
//     titleStyle:{
//         width:width * 0.7
//     },
//     moneyStyle:{
//         color:'red',
//         marginTop:10
//     }
// });
//
// AppRegistry.registerComponent('ScrollViewRNProject', () => listViewProject);




//-------ScrollView-Image--------//
// var ScrollViewRNProject = React.createClass({
// mixins:[TimerMixin],
//     getDefaultProps(){
//         return{
//             duration:1000
//         }
//     },
//     getInitialState(){
//         return{
//             currentPage:0
//         }
//     },
//   render() {
//     return (
//         <View>
//           <ScrollView
//               ref ="scrollView"
//               scrollEnabled={true}
//               showsHorizontalScrollIndicator={false}
//               horizontal={true}
//               pagingEnabled={true}
//               onMomentumScollEnd = {(e)=>this.onAnimationEnd(e)}
//               onScrollBeginDrag = {this.onScrollBeginDrag}
//               onScrollEndDrag={this.onScrollEndDrag}
//           >
//             {this.renderChildView()}
//           </ScrollView>
//           <View style={styles.pageViewStyle}>{this.renderPageControl()}</View>
//         </View>
//
//     );
//   },
//     onScrollBeginDrag(){
//         this.stopTimer();
//     },
//     onScrollEndDrag(){
//         this.startTimer();
//     },
//     onAnimationEnd(e){
//         var offSetX = e.nativeEvent.contentOffset.x;
//         var currentPage = Math.floor(offSetX / width);
//         this.setState({
//             currentPage:currentPage
//         });
//     },
//     renderChildView(){
//         var allImage = [];
//         var arrayImage = ImageData.data;
//       for (var  i=0;i<arrayImage.length;i++){
//         var eachImg = arrayImage[i];
//         allImage.push(
//             <Image key = {i} source={{uri:eachImg.img}} style = {{width:width,height:120}}></Image>
//         )
//       }
//       return allImage;
//     },
//   renderPageControl(){
//     var allPageControl = [];
//       var style;
//     var arrayImg = ImageData.data;
//     for(var i = 0; i < arrayImg.length; i++){
//         style = (i == this.state.currentPage) ? {color:'orange'} : {color:'#ffffff'};
//       allPageControl.push(
//           <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
//       )
//     }
//   },
//
//     componentDidMount(){
//         this.startTimer();
//     },
//
//     stopTimer(){
//         this.clearInterval(this.timer)
//     },
//
//     startTimer(){
//         var scrollView = this.refs.scrollView;
//         var imgCount = ImageData.data.length;
//
//         this.timer = this.setInterval(function (){
//             var activePage = 0;
//             if((this.state.currentPage + 1) >= imgCount){
//                 activePage = 0;
//             }else {
//                 activePage = this.state.currentPage + 1;
//             }
//
//             this.setState({
//                 currentPage:activePage
//             });
//
//             var offsetX = activePage * width;
//             scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true})
//
//
//         }, this.props.duration);
//     },
// })
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//  pageViewStyle:{
//      width:width,
//      height:25,
//      backgroundColor:'rgba(0,0,0,0.4)',
//      position:'absolute',
//      bottom:0,
//      flexDirection:'row',
//      // 设置侧轴方向的对齐方式
//      alignItems:'center'
//  }
// });
// AppRegistry.registerComponent('ScrollViewRNProject', () => ScrollViewRNProject);
