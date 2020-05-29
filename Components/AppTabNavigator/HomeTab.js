import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView, 
} from "react-native";

import { Container, Content, Thumbnail,Icon, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../CardComponent'
import CardComponent2 from '../CardComponent2'
import CardComponent3 from '../CardComponent3'

class HomeTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor:'white'}}>
                    <Left><Icon name ="camera" style={{ paddingLeft: 10}} /></Left>
                    <Body><Text style={{ fontSize: 34, fontFamily: 'Billabong', paddingTop: 13 }}>Instagram</Text></Body>
                    <Right><Icon style={{ paddingRight: 10 }} name="ios-send" /></Right>
                </Header>
                <Content>

                    <View style={{ height: 90 }}>
                        
                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}

                            >
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../assets/StoriesHeaderThumbnails/1.png')}/> 

                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../assets/StoriesHeaderThumbnails/2.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../assets/StoriesHeaderThumbnails/3.png')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../assets/StoriesHeaderThumbnails/4.jpg')} />

                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../assets/StoriesHeaderThumbnails/5.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../assets/StoriesHeaderThumbnails/6.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../assets/StoriesHeaderThumbnails/7.jpg')} />

                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource="1" likes="112" />
                    <CardComponent2 imageSource="2" likes="298" />
                    <CardComponent3 imageSource="3" likes="145" />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});