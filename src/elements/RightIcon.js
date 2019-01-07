import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import {Icon, Item} from 'native-base';
import { Field } from 'redux-form';
import LayoutStyle from '../assets/style/layout';
import StyleConfig from '../assets/style/config';
import AppImages from '../assets/images/index';

class CustomIcon extends Component {

    render() {
        const {
            name,
            style
        } = this.props;
        return (
            <View style={[{ flex: 1, marginBottom: StyleConfig.countPixelRatio(22) }]}>
                    <Icon name={name} style={style} />
            </View>
        )
    }
}

class RightIcon extends Component {
    focus() {
        this.foo.getRenderedComponent().focusInput()
    }

    render() {
        return (
            <Field
                component={CustomIcon}
            />
        );
    }

}

export default RightIcon;
