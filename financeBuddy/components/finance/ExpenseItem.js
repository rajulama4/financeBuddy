import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ExpenseItem = ({ expense }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.category}>{expense.category}</Text>
        <Text style={styles.description}>{expense.description}</Text>
      </View>
      <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  leftContainer: {
    flex: 1,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#666',
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#e74c3c',
  },
});