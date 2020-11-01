import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FONTS, images, SIZES, COLORS } from '../constants';

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={images.onbd}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>Digital Destination</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: 'center',
            }}>
            Easy solution to buy tickets for your travel, business trips,
            transportation, lodging and culinary
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.shadow, {
            marginTop: SIZES.padding * 2,
            width: '70%',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }]}
          onPress={() => navigation.navigate('Home')}
        >
          <LinearGradient
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
            }}
            colors={['#46aeff', '#5884ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >

            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Begin!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
