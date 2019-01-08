import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import { Item } from 'native-base';
import { Field } from 'redux-form';
import LayoutStyle from '../assets/style/layout';
import StyleConfig from '../assets/style/config';
import AppImages from '../assets/images/index';

class CustomField extends Component {
    focusInput() {
        if(this.input) {
            this.input.focus();
        }
    }

    _doFormat = (mask, reference) => {
        const { onChangeText } = this.props;
        let newReference = mask;
        let ignoreCount = 0;
        for (let n = 0; n < reference.length; n++) {
            if (reference.charAt(n) != mask.charAt(n)) {
                newReference = newReference.replace('X', reference.charAt(n));
                mask.charAt(n) != 'X' && ignoreCount++;
            }
        }
        newReference = newReference.substr(0, reference.length + ignoreCount);
        onChangeText(newReference);
    }

    render() {
        const {
            refProp,
            input,
            multiline,
            keyboardType,
            inputFormat,
            onChangeText,
            info,
            infoIcon,
            onInfoPress,
            showSideError,
            sideErrorInputStyle,
            changeSuccessColor,
            placeholder,
            labelIcon,
            labelIconSource,
            labelIconStyle,
            label,
            secureTextEntry,
            errorInputStyle,
            rightIcon,
            labelInputStyle,
            labelInputSuccess,
            labelInfo,
            _onFocus,
            _onBlur,
            containerStyle,
            onLayout,
            ellipsizeMode,
            numberOfLines,
            returnKeyType,
            autoFocus,
            onEndEditing,
            inputHeight,
            autoGrow,
            maxLength,
            infoStyle,
            labelInfoStyle,
            autoCapitalize,
            placeholderTextColor,
            autoCorrect,
            style,
            placeholderStyle,
            disabled,
            meta: { touched, error, warning },
            leftSideComponent,
            noInfo,
            onSubmitEditing
        } = this.props;
        const hasError = (typeof error !== 'undefined' ? true : false);
        const itemStyle = (hasError && touched)
            ? LayoutStyle.itemInputError
            : (changeSuccessColor && touched)
                ? LayoutStyle.itemInputSuccess
                : LayoutStyle.itemInput;
        const labelInput = (!hasError && touched && changeSuccessColor) ? [LayoutStyle.labelInputSuccess, labelInputSuccess] : [LayoutStyle.labelInput, labelInputStyle];

        return (
            <View onLayout={onLayout} style={[{ flex: 1, marginBottom: StyleConfig.countPixelRatio(22) }, containerStyle]}>
                <Item style={itemStyle} underline error={hasError && touched}>
                    {
                        (leftSideComponent) &&
                        <View>
                            {leftSideComponent}
                        </View>
                    }
                    <TextInput {...input}
                               ref={refProp ? refProp : (node) => this.input = node}
                               multiline={multiline}
                               keyboardType={keyboardType}
                               placeholder={placeholder}
                               secureTextEntry={secureTextEntry}
                               placeholderTextColor={placeholderTextColor ? placeholderTextColor : StyleConfig.gray}
                               style={Object.assign([LayoutStyle.inputStyle, style])}
                               placeholderStyle={LayoutStyle.placeholder}
                               autoCapitalize={autoCapitalize}
                               autoCorrect={autoCorrect}
                               autoGrow={autoGrow}
                               returnKeyType={returnKeyType}
                               autoFocus={autoFocus}
                               onEndEditing={onEndEditing}
                               onSubmitEditing={onSubmitEditing}
                               numberOfLines={numberOfLines}
                               ellipsizeMode={ellipsizeMode}
                               maxLength={maxLength}
                               // onContentSizeChange={object => this._handleHeight(object)}
                               editable={!disabled}
                               underlineColorAndroid={Platform.OS === 'android' ? 'transparent' : null}
                               onChangeText={(typeof inputFormat != 'undefined') ? this._doFormat.bind(this, inputFormat) : onChangeText}
                               {...(_onFocus) ? { onFocus: () => { _onFocus() } } : {}}
                               {...(_onBlur) ? { onBlur: () => { _onBlur() } } : {}}
                    />
                    {rightIcon}
                </Item>
                <View style={LayoutStyle.sideInputView}>

                        <Text style={hasError && touched ? [LayoutStyle.labelInputError, errorInputStyle] : (!hasError && touched && changeSuccessColor) ? [labelInput, labelInputStyle] : null }>
                            {label}
                        </Text>

                </View>
            </View>
        )
    }
}

class ReduxField extends Component {
    focus() {
        this.foo.getRenderedComponent().focusInput()
    }

    render() {
        return (
            <Field
                {...this.props}
                component={CustomField}
                ref={node => this.foo = node}
                withRef
            />
        );
    }

}

export default ReduxField;
