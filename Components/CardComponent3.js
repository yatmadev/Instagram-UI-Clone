import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

class CardComponent3 extends Component {

    render() {

        const images = {

            "3": require('./assets/feed_images/3.png')
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('./assets/sunil.jpg')} />
                        <Body>
                            <Text style={{fontWeight:'bold'}}>the_blue_meek </Text>
                            <Text note>Somewhere on the earth</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{ height: 340, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-empty" style={{ color: 'black', fontSize: 18 }} />
                        </Button>
                        <Button transparent>
                            <Icon name="md-chatbubbles" style={{ color: 'black', fontSize: 18 }} />
                        </Button>
                        <Button transparent>
                            <Icon name="md-send" style={{ color: 'black', fontSize: 18 }} />
                        </Button>


                    </Left>
                </CardItem>

                <CardItem style={{ height: 20, fontWeight:'bold', paddingBottom: 5 }}>
                    <Text style={{fontWeight:'bold'}}>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontWeight: "bold", fontSize:16 }}>the_blue_meek </Text>
                            Sometimes life can surprise you with a happy coincidence.
                        </Text>
                        <Text style={{fontSize: 11, paddingTop: 8}}> May 11, 2020 </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});