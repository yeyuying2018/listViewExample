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
    ListView,
    TouchableOpacity,
    RefreshControl
    } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
var data = {
    'result': [
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsan张三'
        },
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsan'
        },
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsanzhangsan张三'
        },{
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsanzhangsan张三zhangsan张三'
        }
        , {
            'email': ' s.sjfsso@sjf.com',
            'fullName': '张三zhangsan张三zhangsan张三'
        },
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsanzhangsan张三'
        },{
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsanzhangsan张三'
        },{
            'email':' s.sjfsso@sjf.com',
            'fullName': '张三'
        },
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsan张三'
        },
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsan'
        },
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsanzhangsan张三'
        },{
            'email':' s.sjfsso@sjf.com',
                'fullName': '张三zhangsan张三'
        }
        , {
            'email': ' s.sjfsso@sjf.com',
                'fullName': 'an张三zhangsan张三zhangsan张三'
        },
        {
            'email':' s.sjfsso@sjf.com',
            'fullName': 'zhangsanzhangsan张三'
        },{
            'email':' s.sjfsso@sjf.com',
                'fullName': 'zhangsanzhangsan张三'
        },{
            'email':' s.sjfsso@sjf.com',
                'fullName': '张三'
        }
    ]
}
export default class ListViewTest extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1, r2)=>{r1!== r2}});
        this.state = {
           dataSource: ds.cloneWithRows(data.result),
            isLoading: true
        }
        this.onLoad();
    }
    renderRow(item){
        return (
            <TouchableOpacity
                //点击弹窗，这个是 一个插件
                onPress={()=>{
                    this.toast.show('你点击了'+item.fullName, DURATION.LENGTH_LONG)
                }}>
                <View style={styles.row}>
                    <Text style={styles.text}>{item.email}</Text>
                    <Text style={styles.text}>{item.fullName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return (
            <View key={sectionID} style={styles.line}></View>
        )
    }
    renderFooter(){
        return (
            <Image style={{width:400,height: 100}} source ={ {uri:'http://pic.616pic.com/ys_img/00/03/60/sh5iuuOGSe.jpg'}} />
        )
    }
    onLoad(){
        setTimeout(()=>{
            this.setState({
                isLoading: false,

            })
        }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource ={this.state.dataSource}
                    renderRow={(item)=>this.renderRow(item)}
                    //生成一个分隔线
                    renderSeparator ={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                    //底部显示图片
                    renderFooter = {()=>this.renderFooter()}
                    refreshControl = {
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={()=>this.onLoad()}
                         />
                    }
                 />
                <Toast ref={toast=>{this.toast=toast}} />
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
