import React, {Component} from 'react';
import {Image, TouchableOpacity, Text, Platform} from 'react-native';
import {Col, Grid, Icon, Row} from "native-base";
import {reduxForm} from 'redux-form';
import ReduxField from '../elements/ReduxField';
import RightIcon from '../elements/RightIcon'
import LayoutStyle from '../assets/style/layout';
import LoginStyle from '../assets/style/login';
import AppImages from '../assets/images/index';
import {
    emailRegex,
} from '../common/global';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            showPassword: false,
        };
    }

    onSubmit = (formData) => {
        console.log("formData", formData)
    }

    _clearEmail = () => {
        const {change} = this.props;
        change('email', '');
        this.setState({email: ''});
    }

    render() {
        const {invalid, handleSubmit} = this.props;
        const {email, showPassword } = this.state;
        return (
            <Grid style={LoginStyle.gridView}>
                <Row style={LoginStyle.inputRow}>
                    <Col>
                        <ReduxField
                            onChangeText={(email) => this.setState({email})}
                            name="email"
                            placeholder="Type Here"
                            label="Email"
                            changeSuccessColor={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType={"next"}
                            keyboardType={"email-address"}
                            ellipsizeMode='tail'
                            numberOfLines={1}
                            onSubmitEditing={() => this.passwordRef.focus()}
                            rightIcon={
                                email != '' &&
                                <TouchableOpacity onPress={this._clearEmail.bind(this)} style={LoginStyle.inputIconBtn}>
                                    <RightIcon  style={{ fontSize: 18, borderWidth: 3 }} name="remove-circle" />
                                </TouchableOpacity>
                            }
                        />
                        <ReduxField
                            refProp={ref => this.passwordRef = ref}
                            name="password"
                            changeSuccessColor={true}
                            placeholder="Type Here"
                            label="Password"
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType={"done"}
                            onSubmitEditing={() => {
                                if (!invalid) {
                                    handleSubmit(this.onSubmit)();
                                }
                            }}
                            rightIcon={
                                <TouchableOpacity onPress={() => this.setState({showPassword: !showPassword})}
                                                  style={LoginStyle.inputIconBtn}>
                                    <Image source={AppImages[!showPassword ? 'visibleEye' : 'unvisibleEye']}/>
                                </TouchableOpacity>
                            }
                        />
                    </Col>
                </Row>
                <Row style={LoginStyle.loginBtnRow}>
                    <Col style={LoginStyle.loginBtnCol}>
                        <TouchableOpacity
                            style={[LayoutStyle.buttonH1, (invalid) ? LoginStyle.btnDisabled : LoginStyle.btnEnabled]}
                            disabled={invalid}
                            onPress={handleSubmit(this.onSubmit)}>
                            <Text
                                style={[LayoutStyle.buttonH1Text, (invalid) ? LoginStyle.btnTextDisabled : LoginStyle.btnTextEnabled]}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const validate = values => {
    let errors = {};
    errors.email = !values.email
        ? "Email Required"
        : !emailRegex.test(values.email)
            ? "Inavlid Email"
            : undefined;

    errors.password = !values.password
        ? "Password Required"
        : undefined;
    return errors;
};

// const initialState = {
//     email: 'hetali.shah@jarvis.com',
//     password: '1234abcd'
// };

const withForm = reduxForm({
    form: 'loginForm',
    validate,
   // initialValues: initialState
});

export default withForm(Login);
