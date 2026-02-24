import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Tipe untuk jadwal tanam
type JadwalItem = {
  bulan: string;
  aktivitas: string;
  status: 'Berlangsung' | 'Akan Datang' | 'Belum Mulai';
  icon: string;
  warna: string;
};

// Tipe untuk tips musim
type TipsMusim = {
  musim: string;
  tips: string;
  icon: string;
};

const KalenderScreen = () => {
  const bulanIni = new Date().toLocaleDateString('id-ID', {
    month: 'long',
    year: 'numeric',
  });

  const jadwalTanam: JadwalItem[] = [
    {
      bulan: 'Januari',
      aktivitas: 'Persiapan Lahan',
      status: 'Belum Mulai',
      icon: 'build',
      warna: '#FF9800',
    },
    {
      bulan: 'Februari',
      aktivitas: 'Masa Tanam',
      status: 'Berlangsung',
      icon: 'grass',
      warna: '#4CAF50',
    },
    {
      bulan: 'Maret',
      aktivitas: 'Perawatan',
      status: 'Akan Datang',
      icon: 'spa',
      warna: '#2196F3',
    },
    {
      bulan: 'April',
      aktivitas: 'Perawatan',
      status: 'Akan Datang',
      icon: 'spa',
      warna: '#2196F3',
    },
    {
      bulan: 'Mei',
      aktivitas: 'Panen',
      status: 'Akan Datang',
      icon: 'harvest',
      warna: '#F44336',
    },
  ];

  const tipsMusim: TipsMusim[] = [
    {
      musim: 'Kemarau (Mei - September)',
      tips: 'Tanam varietas jagung tahan kering, siapkan irigasi tambahan, waspada hama penggerek batang.',
      icon: 'wb-sunny',
    },
    {
      musim: 'Penghujan (Oktober - April)',
      tips: 'Buat saluran drainase yang baik, waspada penyakit bulai dan busuk batang, pemupukan lebih sering.',
      icon: 'umbrella',
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Berlangsung':
        return styles.statusBerlangsung;
      case 'Akan Datang':
        return styles.statusAkanDatang;
      default:
        return styles.statusBelum;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Bulan Ini */}
      <View style={styles.header}>
        <Icon name="calendar-today" size={40} color="#fff" />
        <Text style={styles.headerText}>{bulanIni}</Text>
      </View>

      {/* Progress Tanam */}
      <View style={styles.progressCard}>
        <Text style={styles.cardTitle}>📊 Progress Musim Tanam</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '60%' }]} />
        </View>
        <Text style={styles.progressText}>
          60% Musim Tanam (Februari - Mei)
        </Text>
      </View>

      {/* Jadwal Tanam */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>📅 Jadwal Tanam 2026</Text>
        {jadwalTanam.map((item, index) => (
          <View key={index} style={styles.jadwalItem}>
            <View
              style={[
                styles.jadwalIcon,
                { backgroundColor: item.warna + '20' },
              ]}
            >
              <Icon name={item.icon} size={24} color={item.warna} />
            </View>
            <View style={styles.jadwalInfo}>
              <Text style={styles.jadwalBulan}>{item.bulan}</Text>
              <Text style={styles.jadwalAktivitas}>{item.aktivitas}</Text>
            </View>
            <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Tips Musim */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>🌾 Tips Berdasarkan Musim</Text>
        {tipsMusim.map((item, index) => (
          <View key={index} style={styles.tipsItem}>
            <Icon name={item.icon} size={24} color="#2E7D32" />
            <View style={styles.tipsContent}>
              <Text style={styles.tipsTitle}>{item.musim}</Text>
              <Text style={styles.tipsText}>{item.tips}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Tombol Cek Rekomendasi */}
      <TouchableOpacity style={styles.rekomendasiButton}>
        <Text style={styles.rekomendasiText}>Dapatkan Rekomendasi Pupuk</Text>
        <Icon name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2E7D32',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  progressCard: {
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2E7D32',
  },
  progressText: {
    marginTop: 8,
    color: '#666',
    fontSize: 12,
  },
  sectionCard: {
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 5,
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
    marginBottom: 15,
  },
  jadwalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  jadwalIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  jadwalInfo: {
    flex: 1,
  },
  jadwalBulan: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  jadwalAktivitas: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusBerlangsung: {
    backgroundColor: '#E8F5E9',
  },
  statusAkanDatang: {
    backgroundColor: '#E3F2FD',
  },
  statusBelum: {
    backgroundColor: '#FFEBEE',
  },
  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  tipsItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tipsContent: {
    flex: 1,
    marginLeft: 12,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  tipsText: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
    lineHeight: 18,
  },
  rekomendasiButton: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginTop: 5,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  rekomendasiText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default KalenderScreen;
