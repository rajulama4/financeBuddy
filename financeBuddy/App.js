import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ExpenseScreen from './screens/ExpenseScreen'; // Make sure to create this file
import BudgetScreen from './screens/BudgetScreen'; 
import ReportsScreen from './screens/ReportsScreen'; 
import ConfirmExpenseScreen from './screens/ConfirmExpenseScreen'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Auth Screens */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }}
        />
        
        {/* Main App Screens */}
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen 
          name="Expenses" 
          component={ExpenseScreen}
          options={{ title: 'Expense Tracker' }}
        />
         <Stack.Screen 
          name="Budget" 
          component={BudgetScreen}
          options={{ title: 'Budget Tracker' }}
        />

             <Stack.Screen 
          name="Reports" 
          component={ReportsScreen}
          options={{ title: 'Report Tracker' }}
        />

                <Stack.Screen 
          name="ConfirmExpense" 
          component={ConfirmExpenseScreen}
          options={{ 
            title: 'Confirm Expense',
            headerBackTitle: 'Back' // Shows "Back" instead of previous screen name
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}