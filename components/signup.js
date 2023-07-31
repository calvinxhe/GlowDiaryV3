import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { db, auth } from "../config";

const SignUp = () => {
    const handleSignUp = async (email, password, username) => {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;
  
      // Create a user document with the UID
      const userRef = db.collection('users').doc(uid);
  
      // Set the skincare collection with the username field
      await userRef.set({
        skincare: {
          username: username,
        },
      });
    };
  
    return (
      <TouchableOpacity onPress={() => handleSignUp('email@example.com', 'password', 'username')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    );
  };
  
  export default SignUp;