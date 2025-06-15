import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import  Button  from '../components/common/Button';

const BudgetScreen = () => {
  const [budgets, setBudgets] = useState([
    { id: '1', category: 'Food', amount: 500, spent: 320 },
    { id: '2', category: 'Transport', amount: 300, spent: 150 },
    { id: '3', category: 'Entertainment', amount: 200, spent: 80 },
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const addBudget = () => {
    if (newCategory && newAmount) {
      setBudgets([
        ...budgets,
        {
          id: Date.now().toString(),
          category: newCategory,
          amount: parseFloat(newAmount),
          spent: 0,
        },
      ]);
      setNewCategory('');
      setNewAmount('');
    }
  };

  const getProgressPercentage = (spent, amount) => {
    return Math.min((spent / amount) * 100, 100);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Management</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Category (e.g., Groceries)"
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount ($)"
          value={newAmount}
          onChangeText={setNewAmount}
          keyboardType="numeric"
        />
        <Button title="Add Budget" onPress={addBudget} />
      </View>

      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.budgetItem}>
            <View style={styles.budgetHeader}>
              <Text style={styles.budgetCategory}>{item.category}</Text>
              <Text style={styles.budgetAmount}>
                ${item.spent.toFixed(2)} / ${item.amount.toFixed(2)}
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${getProgressPercentage(item.spent, item.amount)}%`,
                    backgroundColor:
                      item.spent > item.amount ? '#e74c3c' : '#2ecc71',
                  },
                ]}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  budgetItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  budgetCategory: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  budgetAmount: {
    color: '#7f8c8d',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  },
});

export default BudgetScreen;