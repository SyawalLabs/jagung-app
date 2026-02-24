import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../App';

// Tipe untuk props navigation
type HomeScreenProps = {
  navigation: BottomTabNavigationProp<RootTabParamList, 'Beranda'>;
};

// Tipe untuk data ringkasan
type RingkasanItem = {
  id: number;
  title: string;
  value: string;
  icon: string;
  color: string;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // Data dummy untuk ringkasan
  const ringkasanData: RingkasanItem[] = [
    {
      id: 1,
      title: 'Harga Jagung',
      value: 'Rp 5.200/kg',
      icon: 'trending-up',
      color: '#4CAF50',
    },
    {
      id: 2,
      title: 'Luas Tanam',
      value: '125 Ha',
      icon: 'agriculture',
      color: '#FF9800',
    },
    {
      id: 3,
      title: 'Musim Tanam',
      value: 'Kemarau',
      icon: 'wb-sunny',
      color: '#F44336',
    },
    {
      id: 4,
      title: 'Prediksi Panen',
      value: '15 Hari',
      icon: 'timer',
      color: '#2196F3',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Selamat Datang */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Selamat Datang,</Text>
        <Text style={styles.userName}>Petani Jagung!</Text>
        <Text style={styles.dateText}>
          {new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>

      {/* Card Ringkasan */}
      <View style={styles.ringkasanContainer}>
        {ringkasanData.map(item => (
          <View
            key={item.id}
            style={[styles.ringkasanCard, { borderColor: item.color }]}
          >
            <Icon name={item.icon} size={30} color={item.color} />
            <Text style={styles.ringkasanTitle}>{item.title}</Text>
            <Text style={[styles.ringkasanValue, { color: item.color }]}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>

      {/* Info Cuaca */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>🌤️ Prakiraan Cuaca Hari Ini</Text>
        <View style={styles.weatherInfo}>
          <Icon name="wb-sunny" size={40} color="#FF9800" />
          <View style={styles.weatherText}>
            <Text style={styles.tempText}>32°C / 24°C</Text>
            <Text style={styles.descText}>
              Cerah berawan, cocok untuk aktivitas di ladang
            </Text>
          </View>
        </View>
      </View>

      {/* Tips Hari Ini */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>💡 Tips Hari Ini</Text>
        <Text style={styles.tipText}>
          "Periksa tanaman jagung secara rutin untuk mendeteksi dini gejala
          serangan hama penggerek batang. Lakukan penyemprotan insektisida jika
          diperlukan."
        </Text>
      </View>

      {/* Tombol Cepat */}
      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Harga')}
        >
          <Icon name="attach-money" size={24} color="#fff" />
          <Text style={styles.actionText}>Cek Harga</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Kalender')}
        >
          <Icon name="calendar-today" size={24} color="#fff" />
          <Text style={styles.actionText}>Kalender Tanam</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Hama')}
        >
          <Icon name="bug-report" size={24} color="#fff" />
          <Text style={styles.actionText}>Deteksi Hama</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeSection: {
    backgroundColor: '#2E7D32',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  ringkasanContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: -20,
  },
  ringkasanCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  ringkasanTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  ringkasanValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  sectionCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherText: {
    marginLeft: 15,
    flex: 1,
  },
  tempText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descText: {
    color: '#666',
  },
  tipText: {
    lineHeight: 20,
    color: '#333',
    fontStyle: 'italic',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#2E7D32',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '30%',
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
