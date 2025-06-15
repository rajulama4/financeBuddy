import React from 'react';
import { View, Text } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart
} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ReportsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Monthly Spending</Text>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr'],
          datasets: [
            {
              data: [300, 450, 280, 500]
            }
          ]
        }}
        width={screenWidth - 20}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#667EEA',
          backgroundGradientTo: '#764BA2',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={{ margin: 10, borderRadius: 16 }}
      />
    </View>
  );
};

export default ReportsScreen;