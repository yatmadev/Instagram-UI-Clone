import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

import HomeTab from './Components/AppTabNavigator/HomeTab'
import SearchTab from './Components/AppTabNavigator/SearchTab'
import AddMediaTab from './Components/AppTabNavigator/AddMediaTab'
import LikesTab from './Components/AppTabNavigator/LikesTab'
import ProfileTab from './Components/AppTabNavigator/ProfileTab'
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base'



const RootStack= createBottomTabNavigator({

    Home: {
        screen: HomeTab
    },
    Search: {
        screen: SearchTab

    },
    AddMedia: {
        screen: AddMediaTab
    },
    Likes: {
        screen: LikesTab
    },
    Profile: {
        screen: ProfileTab
    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


const Tabs = createAppContainer(RootStack);

export default Tabs;


   