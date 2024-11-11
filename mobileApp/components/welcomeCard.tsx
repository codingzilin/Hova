import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const WelcomeCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>Welcome to Rewards!</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>All your rewards in one place</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.termsText}>Terms of Use</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: width,
    padding: 24,
    paddingTop: 32,
    flex: 0.6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#414141',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#6F6F6F',
    paddingBottom: 25,
  },
  loginButton: {
    backgroundColor: '#0162F1',
    borderRadius: 40,
    padding: 15,
    marginBottom: 10,
    width: width * 0.7,
    alignSelf: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Poppins',
  },
  signupButtonText: {
    color: '#414141',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Poppins',
  },
  signupButton: {
    backgroundColor: '#ECECEC',
    borderRadius: 40,
    padding: 15,
    width: width * 0.7,
    alignSelf: 'center',
  },
  termsText: {
    color: '#414141',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins',
    marginTop: 15,
  }
});
export default WelcomeCard;
