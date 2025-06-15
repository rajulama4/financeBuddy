import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import BudgetScreen from '../screens/BudgetScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ExpenseScreen from '../screens/ExpenseScreen'; // Make sure this is imported
import ConfirmExpenseScreen from '../screens/ConfirmExpenseScreen'; // Add this import

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Existing screens */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Dashboard' }}/>
      <Stack.Screen name="Budget" component={BudgetScreen} options={{ title: 'My Budget' }}/>
      <Stack.Screen name="Expenses" component={ExpenseScreen} options={{ title: 'Expense Tracker' }}/>
      <Stack.Screen name="Reports" component={ReportsScreen} options={{ title: 'Report' }}/>
      
      {/* Add this new screen */}
      <Stack.Screen 
        name="ConfirmExpense" 
        component={ConfirmExpenseScreen}
        options={{ title: 'Confirm Expense' }}
      />
    </Stack.Navigator>
  );
}