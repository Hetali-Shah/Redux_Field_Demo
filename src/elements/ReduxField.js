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
                {
                    label != null &&
                    !noInfo && ((showSideError)
                            ? (hasError && touched)
                                ? <View style={LayoutStyle.sideInputView}>
                                    <View style={LayoutStyle.labelInputView}>
                                        {
                                            labelIcon
                                                ? labelIcon
                                                : <Image
                                                    source={AppImages[`${labelIconSource}Error`]}
                                                    style={[labelIconStyle]}
                                                />
                                        }
                                        <Text style={[LayoutStyle.labelInputError, errorInputStyle]}>{label}</Text>
                                    </View>
                                    <Text style={[LayoutStyle.sideErrorInput, sideErrorInputStyle]}>{error}</Text>
                                </View>
                                : (!hasError && touched && changeSuccessColor)
                                    ? <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[`${labelIconSource}Success`]}
                                                        style={[labelIconStyle]}
                                                    />
                                            }
                                            <Text style={[labelInput]}>
                                                <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                <Text style={[LayoutStyle.labelInfo, labelInfoStyle]}>
                                                    {labelInfo}
                                                </Text>
                                            </Text>
                                        </View>
                                        {(info) && <Text style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>}
                                    </View>
                                    : <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[labelIconSource]}
                                                        style={[labelIconStyle]}
                                                    />
                                            }
                                            <Text style={[labelInput]}>
                                                <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                <Text style={[LayoutStyle.labelInfo, labelInfoStyle]}>
                                                    {labelInfo}
                                                </Text>
                                            </Text>
                                        </View>
                                        {(info) && <Text style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>}
                                    </View>
                            : (hasError && touched)
                                ? <View style={LayoutStyle.sideInputView}>
                                    <Text style={[LayoutStyle.labelInputError, errorInputStyle]}>{error}</Text>
                                    {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => { }} style={{ flexDirection: 'row' }}>
                                        <Text style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>
                                        {infoIcon}
                                    </TouchableOpacity>}
                                </View>
                                : (!hasError && touched && changeSuccessColor)
                                    ? <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[`${labelIconSource}Success`]}
                                                        style={[labelIconStyle]}
                                                    />
                                            }
                                            <Text style={[labelInput]}>
                                                <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                <Text style={[LayoutStyle.labelInfo, labelInfoStyle]}>
                                                    {labelInfo}
                                                </Text>
                                            </Text>
                                        </View>
                                        {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => { }} style={{ flexDirection: 'row' }}>
                                            <Text style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>
                                            {infoIcon}
                                        </TouchableOpacity>}
                                    </View>
                                    : <View style={LayoutStyle.sideInputView}>
                                        <View style={LayoutStyle.labelInputView}>
                                            {
                                                labelIcon
                                                    ? labelIcon
                                                    : <Image
                                                        source={AppImages[labelIconSource]}
                                                        style={[labelIconStyle]}
                                                    />
                                            }
                                            <Text style={[labelInput]}>
                                                <Text style={[labelInput, labelInputStyle]}>{label}</Text>
                                                <Text style={[LayoutStyle.labelInfo, labelInfoStyle]}>
                                                    {labelInfo}
                                                </Text>
                                            </Text>
                                        </View>
                                        {(info) && <TouchableOpacity disabled={!onInfoPress} onPress={(onInfoPress) ? onInfoPress : () => { }} style={{ flexDirection: 'row' }}>
                                            <Text style={[LayoutStyle.sideInputInfo, infoStyle, sideErrorInputStyle]}>{info}</Text>
                                            {infoIcon}
                                        </TouchableOpacity>}
                                    </View>
                    )
                }
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
