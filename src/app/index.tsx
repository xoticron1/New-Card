import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import ProfileCard from '../components/ProfileCard';

// Sample profile data pool
const sampleProfiles = [
  { name: 'Peter Parker', role: 'Janitor', desc: 'Secretly Gagambino' },
  { name: 'Gwen Stacy', role: 'Drummer', desc: 'Secretly Ghost-Spider' },
  { name: 'Miles Morales', role: 'Student', desc: 'Secretly Brooklyn Spider' },
  { name: 'Tony Stark', role: 'Engineer', desc: 'Genius, Billionaire, Playboy' },
  { name: 'Bruce Banner', role: 'Scientist', desc: "Don't make him angry" },
];

export default function Home() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Peter Parker', role: 'Janitor', desc: 'Secretly Gagambino' }
  ]);

  const addProfile = () => {
    const randomItem = sampleProfiles[Math.floor(Math.random() * sampleProfiles.length)];
    const newProfile = {
      id: Date.now(),
      ...randomItem,
    };
    setProfiles((prev) => [newProfile, ...prev]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile Generator</Text>
      
      <CustomButton title="+ Add Profile Card" onPress={addProfile} />

      <ScrollView style={styles.scrollArea} showsVerticalScrollIndicator={false}>
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            desc={profile.desc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#1A1A1A',
  },
  scrollArea: {
    flex: 1,
    marginTop: 10,
  },
});