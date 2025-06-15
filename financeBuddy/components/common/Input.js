import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Input = ({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry, 
  leftIcon, 
  rightIcon,
  containerStyle,
  ...props 
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && (
        <View style={styles.iconLeft}>
          {leftIcon}
        </View>
      )}
      <TextInput
        style={[
          styles.input, 
          leftIcon && { paddingLeft: 40 },
          rightIcon && { paddingRight: 40 }
        ]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {rightIcon && (
        <View style={styles.iconRight}>
          {rightIcon}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    position: 'relative',
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
  iconLeft: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 1,
  },
  iconRight: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,
  },
});

export default Input;