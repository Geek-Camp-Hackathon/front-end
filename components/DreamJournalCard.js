import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function DreamJournalCard({ entry }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {/* <Image source={{ uri: entry.profileImage }} style={styles.profileImage} /> */}
        <Text style={styles.name}>{entry.name}</Text>
        <Text style={styles.date}>{entry.date}</Text>
      </View>
      {/* <Image source={{ uri: entry.image }} style={styles.dreamImage} /> */}
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.details}>{entry.details}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    width: '85%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    flex: 1,
  },
  date: {
    color: '#aaa',
  },
  dreamImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});
