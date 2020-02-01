import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MyTextInput = props => {
    return (
        <View style={styles.textInput}>
            <TextInput
                underlineColorAndroid="transparent"
                placeholder={props.placeholder}
                placeholderTextColor="#007FFF"
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={props.style}
                blurOnSubmit={false}
                value={props.value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput : {
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1
    }
})

export default MyTextInput;