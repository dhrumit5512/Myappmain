import React from 'react';
import {View, Text, Button} from 'react-native';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
      <Button
        title="Go to Frogs"
        onPress={() => navigation.navigate('Frogs')}
      />
    </View>
  );
}

export default DetailsScreen;