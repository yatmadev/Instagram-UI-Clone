import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList
} from "react-native";

import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
var { height, width } = Dimensions.get('window');

import CardComponent from '../CardComponent'

var images = [
    require('../assets/ybk/1.png'),
    require('../assets/ybk/2.png'),
    require('../assets/ybk/3.png'),
    require('../assets/ybk/4.png'),
    require('../assets/ybk/5.png'),
    require('../assets/ybk/6.png'),
    require('../assets/ybk/7.png'),
    require('../assets/ybk/8.png'),
    require('../assets/ybk/9.png'),
    require('../assets/ybk/10.png'),
    require('../assets/ybk/11.png'),
    require('../assets/ybk/12.png'),
    require('../assets/ybk/13.png'),
    require('../assets/ybk/14.png'),
    require('../assets/ybk/15.png'),
    require('../assets/ybk/16.png'),
]

class ProfileTab extends Component {

    static navigationOptions = {


        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{ color: tintColor }} />
        )
    }

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    segmentClicked(index) {
        this.setState({
            activeIndex: index
        })
    }
    checkActive = (index) => {
        if (this.state.activeIndex !== index) {
            return (
                { color: 'grey' }
            )
        }
        else {
            return (
                {}
            )
        }

    }

    renderSectionOne() {
        return images.map((image, index) => {
            return (
                <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                    <Image style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        width: undefined,
                        height: undefined,

                    }}
                        source={image}>
                    </Image>

                </View>
            )
        })

    }

    renderSection() {

        if (this.state.activeIndex == 0) {

            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {this.renderSectionOne()}
                </View>
            )

        }
        else if (this.state.activeIndex == 1) {
            return (
                <View>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="101" />
                    <CardComponent imageSource="3" likes="101" />
                </View>
            )
        }
    }

    componentDidMount() {
        console.log(width)
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ paddingLeft: 10, paddingLeft: 10, backgroundColor:'white' }}>
                    <Left>
                        <Text style={{fontSize: 18, fontWeight:'bold'}}> yattu_877 </Text>
                    </Left>
                    <Right>
                        <EntypoIcon name="menu" style={{ fontSize: 26 }} />
                    </Right>
                </Header>

                <Content>

                    <View style={{ paddingTop: 10 }}>

                        {/** User Photo Stats**/}
                        <View style={{ flexDirection: 'row' }}>

                            {/**User photo takes 1/3rd of view horizontally **/}
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image source={require('../assets/yattu.png')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }} />

                            </View>

                            {/**User Stats take 2/3rd of view horizontally **/}
                            <View style={{ flex: 3 }}>

                                {/** Stats **/}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-end'
                                    }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{fontWeight:'bold'}}>16</Text>
                                        <Text style={{ fontSize: 12, color: 'grey', fontWeight:'bold' }}>Posts</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{fontWeight:'bold'}}>245</Text>
                                        <Text style={{ fontSize: 12, color: 'grey',fontWeight:'bold' }}>Followers</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{fontWeight:'bold'}}>165</Text>
                                        <Text style={{ fontSize: 12, color: 'grey',fontWeight:'bold' }}>Following</Text>
                                    </View>
                                </View>

                                {/**Edit profile and Settings Buttons **/}
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

                                    <View
                                        style={{ flexDirection: 'row' }}>

                                        {/** Edit profile takes up 3/4th **/}
                                        <Button bordered dark
                                            style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>


                                        {/** Settings takes up  1/4th place **/}
                                        <Button bordered dark style={{
                                            flex: 1,
                                            height: 30,
                                            marginRight: 10, marginLeft: 5,
                                            justifyContent: 'center'
                                        }}>
                                            <Icon name="settings" style={{ color: 'black' }}></Icon></Button>
                                    </View>
                                </View>{/**End edit profile**/}
                            </View>
                        </View>

                        <View style={{ paddingTop: 13, paddingBottom: 12 }}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, paddingBottom: 5 }}>Yattu Kasturi</Text>
                                <Text style={{  fontSize: 13, paddingBottom: 5 }}>Gemini | Photoholic | Solivagant</Text>
                                <Text style={{color:'blue'}}>youtu.be/CAlwCRi_gdQ</Text>
                            </View>
                        </View>


                    </View>


                    <View >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                            <Button

                                onPress={() => this.segmentClicked(0)}
                                transparent
                                active={this.state.activeIndex == 0}

                            >
                                <Icon name="md-grid"
                                    style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]} >
                                </Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(1)}
                                transparent active={this.state.activeIndex == 1}>
                                <Icon name="ios-list" style={[{ fontSize: 32 }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}></Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(2)}
                                transparent active={this.state.activeIndex == 2}>
                                <Icon name="ios-bookmark" style={this.state.activeIndex == 2 ? {} : { color: 'grey' }}></Icon>
                            </Button>
                            <Button
                                onPress={() => this.segmentClicked(3)}
                                transparent last active={this.state.activeIndex == 3}>
                                <Icon name="ios-contact" style={[{ fontSize: 32 }, this.state.activeIndex == 3 ? {} : { color: 'grey' }]}></Icon>
                            </Button>
                        </View>



                        {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

                        {this.renderSection()}

                    </View>
                </Content>
            </Container >
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

{/**  // <FlatList
            //     horizontal={false}
            //     numColumns={3}
            //     data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }, { key: 'j' }, { key: 'k' }, { key: 'l' }, { key: 'm' }, { key: 'n' }, { key: 'o' }]}
            //     renderItem={({ item, index }) =>
            //         <View style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
            //             <Image style={{
            //                 flex: 1,
            //                 alignSelf: 'stretch',
            //                 width: undefined,
            //                 height: undefined,

            //             }}
            //                 source={images[index]}>
            //             </Image>

            //         </View>
            //     }//end render item
            // />
 **/}