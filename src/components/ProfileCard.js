import { StyleSheet, Text, View } from 'react-native';

export default function ProfileCard({ name, role, desc }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EEFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: { fontSize: 20, fontWeight: 'bold', color: '#111' },
  role: { color: '#666', fontSize: 14, marginBottom: 6 },
  desc: { fontSize: 14, color: '#333' },
});