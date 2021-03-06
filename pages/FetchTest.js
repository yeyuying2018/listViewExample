/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
   // ListView,
   /// TouchableOpacity,
    //RefreshControl
    } from 'react-native';
//import Toast, {DURATION} from 'react-native-easy-toast'
import HttpUtil from '../HttpUtil';

export default class FetchTest extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            result: ''
        }
    }
    load(url){
        HttpUtil.get(url)
        .then(result=>{
            this.setState({
                result: JSON.stringify(result)
            })
        })
        .catch((error) => {
                this.setState({
                    result: JSON.stringify(error)
                })
         })
        //fetch(url)
        //.then((response) => response.json())
        //.then((result) =>{
        //    this.setState({
        //        result: JSON.stringify(result)
        //    })
        //})
        //.catch((error) => {
        //    this.setState({
        //        result: JSON.stringify(error)
        //    })
        //});
    }
    submit(url, data){
        //fetch(url,{
        //    method: 'POST',
        //    headers: {
        //        Accept: 'application/json',
        //        'Content-Type': 'application/json',
        //    },
        //    body: JSON.stringify(data)
        //})
        //.then((response) => response.json())
        //.then((result) =>{
        //    this.setState({
        //        result: JSON.stringify(result)
        //    })
        //})
        //.catch((error) => {
        //    this.setState({
        //        result: JSON.stringify(error)
        //    })
        //});
        HttpUtil.post(url,data).then(result=>{
            this.setState({
                result: JSON.stringify(result)
            })
        })
            .catch((error) => {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text
                    onPress={()=>{
                        this.load('http://rap.taobao.org/mockjsdata/11793/test');
                    }}>
                    获取数据</Text>
                <Text
                    onPress={()=>{
                    this.submit('http://rap.taobao.org/mockjsdata/11793/test',{userName: '晓明', 'passWord':'12312312'});
                }}>
                    上传数据</Text>
                <Text>请求结果：{this.state.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    row:{
        height: 50
    },
    text: {
        fontSize: 18,
    },
    line:{
        height:1,
        backgroundColor: '#000',
    }
});
