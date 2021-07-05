
import PropTypes from 'prop-types';
import React from 'react';
import { Keyboard, StyleSheet, TextInput, TouchableOpacity, View, Image } from 'react-native';


const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 16,
        justifyContent: 'flex-start',

    },
    searchBarInput: {
        flex: 1,
        fontSize: 14,
        color: '#263238',
        backgroundColor: '#FFF',
        borderRadius: 16
    },
});


export default class SearchBar extends React.Component {
    static propTypes = {
        height: PropTypes.number.isRequired,
        autoCorrect: PropTypes.bool,
        returnKeyType: PropTypes.string,
        onSearchChange: PropTypes.func,
        onEndEditing: PropTypes.func,
        onSubmitEditing: PropTypes.func,
        placeholder: PropTypes.string,
        padding: PropTypes.number,
        inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        iconCloseComponent: PropTypes.object,
        iconSearchComponent: PropTypes.object,
        iconBackComponent: PropTypes.object,
        iconCloseName: PropTypes.string,
        iconSearchName: PropTypes.string,
        iconBackName: PropTypes.string,
        placeholderColor: PropTypes.string,
        iconColor: PropTypes.string,
        textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        inputProps: PropTypes.object,
        onBackPress: PropTypes.func,
        alwaysShowBackButton: PropTypes.bool,
        autofocus: PropTypes.bool
    };

    static defaultProps = {
        onSearchChange: () => { },
        onEndEditing: () => { },
        onSubmitEditing: () => { },
        inputStyle: {},
        iconCloseName: 'md-close',
        iconSearchName: 'md-search',
        iconBackName: 'md-arrow-back',
        iconBackName: 'md-arrow-back',
        placeholder: 'Search...',
        returnKeyType: 'search',
        padding: 5,
        placeholderColor: '#90A4AE',
        iconColor: '#455A64',
        textStyle: {},
        alwaysShowBackButton: false,
        searchValue: '',
        autofocus: true
    };

    constructor(props) {
        super(props);
        this.state = {
            isOnFocus: false,
            wait: true,
            searchValue: props.searchValue,
        };
        this._onSearchChange = this._onSearchChange.bind(this);
        this._onSubmitEditing = this._onSubmitEditing.bind(this);
        this._onClear = this._onClear.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }

    _onSearchChange(searchValue) {
        this.setState({ searchValue });
        this.props.onSearchChange && this.props.onSearchChange(searchValue);
    }

    _onSubmitEditing = () => {
        this.props.onSubmitEditing && this.props.onSubmitEditing(this.state.searchValue);
    }

    _onClear() {
        this.setState({
            searchValue: ''
        }, () => {
            this.props.onSearchChange && this.props.onSearchChange('');
            this._onBlur();
            this.props.onClear && this.props.onClear();
        })

    }

    _onFocus() {
        this.setState({ isOnFocus: true });
        if (this.props.onFocus) {
            this.props.onFocus();
        }
    }

    _onBlur() {
        this.setState({ isOnFocus: false });
        if (this.props.onBlur) {
            this.props.onBlur();
        }
        Keyboard.dismiss();
    }

    _backPressed() {
        Keyboard.dismiss()
        if (this.props.onBackPress) {
            this.props.onBackPress()
        }
    }

    setText(text, focus) {
        this._textInput.setNativeProps({ text: text });
        if (focus) {
            this._onFocus();
        }
    }

    componentDidMount() {
        if (this.props.autofocus) {
            try {
                this._textInput.focus();
            } catch (error) {

            }
        }

    }
    render() {
        const {
            height,
            autoCorrect,
            returnKeyType,
            placeholder,
            padding,
            inputStyle,
            iconColor,
            iconCloseComponent,
            iconSearchComponent,
            iconBackComponent,
            iconBackName,
            iconSearchName,
            iconCloseName,
            placeholderColor,
            textStyle,
        } = this.props;

        let { iconSize, iconPadding } = this.props

        iconSize = typeof iconSize !== 'undefined' ? iconSize : height * 0.5
        iconPadding = typeof iconPadding !== 'undefined' ? iconPadding : height * 0.25

        return (
            <View
                onStartShouldSetResponder={Keyboard.dismiss}
            >
                <View
                    style={
                        [
                            styles.searchBar,
                            {
                                height: height,
                                marginLeft: 16,
                                marginRight: 16,
                                paddingLeft: 8,
                                paddingRight: 8
                            },
                            inputStyle
                        ]
                    }
                >
                    <TouchableOpacity
                        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
                        onPress={this._backPressed.bind(this)}>
                        <Image
                            source={require('../../../assets/ic_search_back.png')}
                            style={{
                                height: height * 0.5, width: height * 0.5, marginRight: 8,
                                marginLeft: 8, tintColor: this.props.iconColor
                            }} />
                    </TouchableOpacity>

                    <TextInput
                        value={this.state.searchValue}
                        autoCorrect={autoCorrect === true}
                        numberOfLines={1}
                        ref={c => this._textInput = c}
                        returnKeyType={returnKeyType}
                        onFocus={this._onFocus}
                        onBlur={this._onBlur}
                        onChangeText={this._onSearchChange}
                        onEndEditing={this.props.onEndEditing}
                        onSubmitEditing={this._onSubmitEditing}
                        placeholder={placeholder}
                        placeholderTextColor={this.props.placeholderColor}
                        underlineColorAndroid="transparent"
                        style={
                            [styles.searchBarInput,
                                textStyle
                            ]
                        }
                        {...this.props.inputProps}
                    />

                    <TouchableOpacity onPress={this._onClear}
                        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
                        {iconCloseComponent ?
                            iconCloseComponent
                            :
                            <Image
                                source={require('../../../assets/ic_search_clear.png')}
                                style={{
                                    height: iconSize, width: iconSize, marginRight: 8,
                                    marginLeft: 8, tintColor: iconColor
                                }} />
                        }
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}