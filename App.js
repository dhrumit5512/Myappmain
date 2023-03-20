import * as React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import logo from './assets/logo.png';
import DetailsScreen from './DetailsScreen';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text style={styles.header}>Trending Recipes</Text>
          <View style={styles.recipeBox}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }}
              style={{ height: 150, resizeMode: 'contain', margin: 10, borderRadius: 10 }} />
            <Text style={styles.homeTitle}>Chicken Tikka Masala</Text>
            <Text style={styles.homeSub}>Chicken in an Orange Sauce</Text>
            <Text style={styles.homeDesc}>Chicken tikka masala is a delicious dish with a thick and creamy sauce that is unforgettable after the first bite.</Text>
            <Text style={styles.homePrep}>Prep Time: 45mins</Text>
            <Text style={styles.homeRating}>&#9733; &#9733; &#9733; &#9733; &#9733; (123)</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>

          <View style={styles.recipeBox}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }}
              style={{ height: 150, resizeMode: 'contain', margin: 10, borderRadius: 10 }} />
            <Text style={styles.homeTitle}>Butter Chicken </Text>
            <Text style={styles.homeSub}>Chicken in a Creamy Sauce</Text>
            <Text style={styles.homeDesc}>Butter chicken is one of the most popular Indian dishes with westerners and Indians alike who love it for its creamy qualities and delicious flavors. </Text>
            <Text style={styles.homePrep}>Prep Time: 49mins</Text>
            <Text style={styles.homeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (113)</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>

          <View style={styles.recipeBox}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }}
              style={{ height: 150, resizeMode: 'contain', margin: 10, borderRadius: 10 }} />
            <Text style={styles.homeTitle}>Rogan Josh </Text>
            <Text style={styles.homeSub}>Lamb Curry</Text>
            <Text style={styles.homeDesc}>lamb chunks cooked with a gravy made from browned onions, yogurt, garlic, ginger, and aromatic spices such as cloves, bay leaves, cardamom, and cinnamon.</Text>
            <Text style={styles.homePrep}>Prep Time: 80mins</Text>
            <Text style={styles.homeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (89)</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>

                    <View style={styles.recipeBox}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }}
              style={{ height: 150, resizeMode: 'contain', margin: 10, borderRadius: 10 }} />
            <Text style={styles.homeTitle}>Chana Masala </Text>
            <Text style={styles.homeSub}>Chickpea Curry</Text>
            <Text style={styles.homeDesc}>Sometimes called chole bhature, this much-loved street food and home-cooked dish is one of the most popular in the country. </Text>
            <Text style={styles.homePrep}>Prep Time: 30mins</Text>
            <Text style={styles.homeRating}>&#9733; &#9733; &#9733; &#9734; &#9734; (88)</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>

          <View style={styles.recipeBox}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }}
              style={{ height: 150, resizeMode: 'contain', margin: 10, borderRadius: 10 }} />
            <Text style={styles.homeTitle}>Biryani</Text>
            <Text style={styles.homeSub}>Spiced Rice with Meat</Text>
            <Text style={styles.homeDesc}>Biryani is an all-time favorite food amongst Indians. This is because there are approximately a hundred types of biryani and every one of them tastes heavenly.</Text>
            <Text style={styles.homePrep}>Prep Time: 15mins</Text>
            <Text style={styles.homeRating}>&#9733; &#9733; &#9733; &#9734; &#9734; (122)</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>

          <View style={styles.recipeBox}>
            <Image source={{ uri: 'https://picsum.photos/200/300' }}
              style={{ height: 150, resizeMode: 'contain', margin: 10, borderRadius: 10 }} />
            <Text style={styles.homeTitle}>Masala Dosa</Text>
            <Text style={styles.homeSub}>Thin Crepe Served with Sauces</Text>
            <Text style={styles.homeDesc}>A dosa is a thin bread that is cooked similarly to a crepe. But, instead of the usual flour, its main ingredients are fermented rice and black lentils. </Text>
            <Text style={styles.homePrep}>Prep Time: 40mins</Text>
            <Text style={styles.homeRating}>&#9733; &#9733; &#9733; &#9733; &#9734; (12)</Text>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function BlogScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

function SavedScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <HomeStack.Screen name="HOME" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const BlogStack = createNativeStackNavigator();

function BlogStackScreen() {
  return (
    <BlogStack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <BlogStack.Screen name="Recent Blog's" component={BlogScreen} />
    </BlogStack.Navigator>
  );
}

const SavedStack = createNativeStackNavigator();

function SavedStackScreen() {
  return (
    <SavedStack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#10591d',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <SavedStack.Screen name="Saved Recipes" component={SavedScreen} />
    </SavedStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#10591d',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <SettingsStack.Screen name="Settings & Options" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  recipeBox: {
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  news: {
    margin: 20,
  },
  newsBody: {
    fontSize: 15,
    marginBottom: 10,
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  homeSub: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  homeDesc: {
    fontSize: 14,
  },

  homePrep: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  homeRating: {
    fontSize: 16,
  },
})

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Blog" component={BlogStackScreen} />
        <Tab.Screen name="Saved" component={SavedStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
