import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, View } from 'react-native';
import RTText from '../custom/rcctext';

export default function Login() {
  const [eId, onChangeEId] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={{flex: 6, paddingVertical: '6%', alignItems: 'center'}}>
        <Image
          style={{
            width: '50%',
            height: '50%',
            resizeMode: 'contain',
          }}
          source={require('../assets/logo.png')}
        />
        <RTText
          weight="semiBold"
          style={{
            fontSize: 20,
            lineHeight: 24,
            marginBottom: 17,
            textAlign: 'center',
          }}>
        </RTText>
        <View style={{alignItems: 'center', width: '70%'}}>
          <RTText
            weight="regular"
            style={{
              paddingVertical: 6,
              fontSize: 14,
              lineHeight: 17,
              alignSelf: 'flex-start',
            }}>
            Enter Employee ID
          </RTText>
          <TextInput
            style={[
              {
                borderWidth: 1,
                width: '100%',
                color: 'black',
                paddingVertical: 12,
                paddingHorizontal: 20,
              },
            ]}
            onChangeText={onChangeEId}
            inputMode="text"
            maxLength={10}
            value={eId}></TextInput>
          <RTText
            weight="regular"
            style={{
              paddingVertical: 6,
              fontSize: 14,
              lineHeight: 17,
              alignSelf: 'flex-start',
            }}>
            Enter Password
          </RTText>
          <TextInput
            style={[
              {
                borderWidth: 1,
                width: '100%',
                color: 'black',
                paddingVertical: 12,
                paddingHorizontal: 20,
              },
            ]}
            onChangeText={onChangePassword}
            inputMode="text"
            maxLength={10}
            value={password}></TextInput>
          <TouchableOpacity style={{width: '100%'}}>
            <RTText
              weight="medium"
              style={{
                marginTop: 20,
                color: 'white',
                backgroundColor: 'black',
                paddingVertical: 12,
                width: '100%',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Login
            </RTText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 3, justifyContent: 'space-evenly'}}></View>
    </KeyboardAvoidingView>
  );
}
