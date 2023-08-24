import { useState } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, View } from 'react-native';
import RTText from '../custom/rcctext';

export default function Login() {
  const [number, onChangeNumber] = useState('');

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={{ flex: 6, paddingVertical: '6%', alignItems: 'center' }}>
        <RTText
          weight="semiBold"
          style={{
            fontSize: 20,
            lineHeight: 24,
            marginBottom: 57,
            textAlign: 'center',
          }}>
          LOGIN OR SIGNUP
        </RTText>
        <View style={{ alignItems: 'center', width: '70%' }}>
          <RTText
            weight="regular"
            style={{
              paddingBottom: 6,
              fontSize: 14,
              lineHeight: 17,
              alignSelf: 'flex-start',
            }}>
            Enter Mobile Number
          </RTText>
          <TextInput
            style={[{
              borderWidth: 1,
              width: '100%',
              color: "black",
              paddingVertical: 12,
              paddingHorizontal: 20,
            }]}
            onChangeText={onChangeNumber}
            inputMode="tel"
            maxLength={10}
            value={number}></TextInput>
          <TouchableOpacity
            style={{ width: '100%' }}>
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
              Continue
            </RTText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
      </View>
    </KeyboardAvoidingView>
  );
}
