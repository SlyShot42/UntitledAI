import React from 'react';
import { Button, View, Text } from 'react-native';

export default function App() {
  const [color, setColor] = React.useState('white');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color }}>
      <Button
        onPress={() => setColor('red')}
        title="Change color to red"
      />
    </View>
  );
}
