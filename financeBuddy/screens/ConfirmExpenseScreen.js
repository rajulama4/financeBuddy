import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmExpenseScreen = ({ route }) => {
  const navigation = useNavigation();
  const { expense } = route.params;

  const handleConfirm = () => {

    
    Alert.alert(
      'Success!',
      'Expense added successfully',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home') // Navigate to Home after OK
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Your Expense</Text>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Amount:</Text>
        <Text style={styles.value}>${expense.amount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{expense.description}</Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{expense.category}</Text>
      </View>
      
      <View style={styles.detailRow}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{expense.date}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Confirm Expense"
          onPress={handleConfirm}
          color="#4CAF50"
        />
      </View>
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
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 30,
  },
});

export default ConfirmExpenseScreen;