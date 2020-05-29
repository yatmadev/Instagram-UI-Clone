import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import { Card, CardItem, Thumbnail, Icon,  Body, Left, Right, Button } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


class CardComponent extends Component {

    render() {

        const images = {

            "1": require('./assets/feed_images/1.png')
            
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('./assets/manish.jpg')} />
                        <Body>
                            <Text style={{fontWeight:'bold', fontSize: 18}}>manishrao0 </Text>
                            <Text note>Gorakhpur, UP</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 320, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-empty" style={{ color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="chatbubbles" style={{ color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="md-send" style={{ color: 'black' }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20, fontWeight:'bold', paddingBottom: 5 }}>
                    <Text style={{fontWeight:'bold'}}>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "bold", fontSize:16 }}>manishrao0 </Text>
                                Quarantine !
                        </Text>
                        <Text style={{fontSize: 11, paddingTop: 8}}> May 20, 2020 </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});