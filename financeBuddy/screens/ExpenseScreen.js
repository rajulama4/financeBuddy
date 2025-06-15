import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExpenseScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Food');

  const handleAddExpense = () => {
    // Validate inputs
    if (!amount || isNaN(parseFloat(amount))) {
      Alert.alert('Invalid Amount', 'Please enter a valid number for the amount');
      return;
    }

    if (!description.trim()) {
      Alert.alert('Missing Description', 'Please enter a description for the expense');
      return;
    }

    const newExpense = {
      id: Math.random().toString(),
      amount: parseFloat(amount),
      description: description.trim(),
      category,
      date: new Date().toLocaleDateString(),
    };

    // Navigate to confirmation screen
    navigation.navigate('ConfirmExpense', { expense: newExpense });

    // Clear form (optional)
    setAmount('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Expense</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Amount (e.g., 25.99)"
        keyboardType="decimal-pad"
        value={amount}
        onChangeText={setAmount}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Description (e.g., Dinner with friends)"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      
      <View style={styles.categoryContainer}>
        <Text style={styles.label}>Category:</Text>
        <View style={styles.categoryButtons}>
          {['Food', 'Transport', 'Shopping', 'Bills', 'Other'].map((cat) => (
            <Button
              key={cat}
              title={cat}
              color={category === cat ? '#4CAF50' : '#CCCCCC'}
              onPress={() => setCategory(cat)}
            />
          ))}
        </View>
      </View>
      
      <Button
        title="Review Expense"
        onPress={handleAddExpense}
        color="#2196F3"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  categoryButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
});

export default ExpenseScreen;