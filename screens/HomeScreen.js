import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import Journal from '../components/Journal';
import { doc, setDoc } from '@firebase/firestore';
import { collection, addDoc } from '@firebase/firestore';

import { auth, db } from '../config';

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  const handleCreateNewJournal = async () => {
    try {
      const userUid = auth.currentUser?.uid;
      if (userUid) {
        const timestamp = new Date().toISOString();
        const username = 'example-username';

        const skincareCollection = collection(db, 'users', userUid, 'skincare'); // Reference to the skincare collection

    await addDoc(skincareCollection, {
      username,
      timestamp,
      items: [],
        });
      }
    } catch (error) {
      console.error('Error creating new journal:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={handleLogout} />
      <Button title='Create New Journal' onPress={handleCreateNewJournal} />
      <Journal/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
