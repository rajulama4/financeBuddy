import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BudgetCard = ({ category, spent, limit }) => {
  const percentage = Math.min((spent / limit) * 100, 100);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.amount}>
          ${spent.toFixed(2)} / ${limit.toFixed(2)}
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { 
              width: `${percentage}%`,
              backgroundColor: percentage > 80 ? '#e74c3c' : '#2ecc71'
            }
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  amount: {
    fontWeight: 'bold',
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