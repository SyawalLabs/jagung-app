import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Tipe untuk data hama
type HamaItem = {
  id: number;
  nama: string;
  gejala: string;
  pengendalian: string;
  icon: string;
  tingkat: 'Tinggi' | 'Sedang' | 'Rendah';
  warna: string;
};

const HamaScreen = () => {
  const daftarHama: HamaItem[] = [
    {
      id: 1,
      nama: 'Penggerek Batang',
      gejala: 'Lubang gerekan pada batang, batang mudah patah, daun layu',
      pengendalian:
        'Gunakan insektisida berbahan aktif karbofuran, tanam varietas tahan',
      icon: 'bug-report',
      tingkat: 'Tinggi',
      warna: '#F44336',
    },
    {
      id: 2,
      nama: 'Ulat Grayak',
      gejala:
        'Daun berlubang tidak teratur, ulat bergerombol di pagi/sore hari',
      pengendalian:
        'Semprot insektisida berbahan aktif sipermetrin, gunakan perangkap feromon',
      icon: 'pest-control',
      tingkat: 'Sedang',
      warna: '#FF9800',
    },
    {
      id: 3,
      nama: 'Penyakit Bulai',
      gejala:
        'Daun muda berwarna kuning pucat hingga putih, pertumbuhan terhambat',
      pengendalian:
        'Cabut tanaman terserang, tanam varietas tahan bulai, perlakuan benih',
      icon: 'sick',
      tingkat: 'Rendah',
      warna: '#4CAF50',
    },
    {
      id: 4,
      nama: 'Busuk Tongkol',
      gejala: 'Tongkol jagung membusuk, tumbuh jamur berwarna merah muda/putih',
      pengendalian:
        'Panen tepat waktu, jemur hingga kering, simpan di tempat kering',
      icon: 'warning',
      tingkat: 'Sedang',
      warna: '#FF9800',
    },
  ];

  const getTingkatColor = (tingkat: string): string => {
    switch (tingkat) {
      case 'Tinggi':
        return '#F44336';
      case 'Sedang':
        return '#FF9800';
      case 'Rendah':
        return '#4CAF50';
      default:
        return '#999';
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="bug-report" size={50} color="#fff" />
        <Text style={styles.headerTitle}>Deteksi Hama & Penyakit</Text>
        <Text style={styles.headerSubtitle}>
          Kenali gejala dan cara pengendaliannya
        </Text>
      </View>

      {/* Peringatan Musim */}
      <View style={styles.warningCard}>
        <Icon name="warning" size={24} color="#fff" />
        <View style={styles.warningText}>
          <Text style={styles.warningTitle}>Musim Rawan Hama!</Text>
          <Text style={styles.warningDesc}>
            Kemarau meningkatkan risiko serangan penggerek batang. Lakukan
            pemeriksaan rutin.
          </Text>
        </View>
      </View>

      {/* Tombol Deteksi Cepat */}
      <TouchableOpacity style={styles.deteksiButton}>
        <Icon name="camera-alt" size={24} color="#2E7D32" />
        <View style={styles.deteksiText}>
          <Text style={styles.deteksiTitle}>Deteksi dengan Kamera</Text>
          <Text style={styles.deteksiDesc}>
            Foto gejala pada tanaman untuk analisis cepat
          </Text>
        </View>
        <Icon name="arrow-forward" size={20} color="#2E7D32" />
      </TouchableOpacity>

      {/* Daftar Hama */}
      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Daftar Hama & Penyakit</Text>

        {daftarHama.map(hama => (
          <View key={hama.id} style={styles.hamaCard}>
            <View style={styles.hamaHeader}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: hama.warna + '20' },
                ]}
              >
                <Icon name={hama.icon} size={24} color={hama.warna} />
              </View>
              <View style={styles.hamaTitle}>
                <Text style={styles.hamaNama}>{hama.nama}</Text>
                <View
                  style={[
                    styles.tingkatBadge,
                    { backgroundColor: getTingkatColor(hama.tingkat) + '20' },
                  ]}
                >
                  <Text
                    style={[
                      styles.tingkatText,
                      { color: getTingkatColor(hama.tingkat) },
                    ]}
                  >
                    Risiko {hama.tingkat}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.hamaDetail}>
              <View style={styles.detailItem}>
                <Icon name="info" size={16} color="#666" />
                <Text style={styles.detailLabel}>Gejala:</Text>
              </View>
              <Text style={styles.detailText}>{hama.gejala}</Text>

              <View style={[styles.detailItem, styles.marginTop]}>
                <Icon name="medical-services" size={16} color="#666" />
                <Text style={styles.detailLabel}>Pengendalian:</Text>
              </View>
              <Text style={styles.detailText}>{hama.pengendalian}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Kontak Darurat */}
      <View style={styles.kontakContainer}>
        <Text style={styles.kontakTitle}>Butuh Bantuan?</Text>
        <View style={styles.kontakButtons}>
          <TouchableOpacity style={styles.kontakButton}>
            <Icon name="phone" size={20} color="#fff" />
            <Text style={styles.kontakButtonText}>Hubungi PPL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.kontakButton, styles.konsulButton]}>
            <Icon name="chat" size={20} color="#2E7D32" />
            <Text style={[styles.kontakButtonText, styles.konsulText]}>
              Konsultasi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9,
    marginTop: 5,
  },
  warningCard: {
    backgroundColor: '#F44336',
    flexDirection: 'row',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  warningText: {
    flex: 1,
    marginLeft: 12,
  },
  warningTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  warningDesc: {
    color: '#fff',
    fontSize: 12,
    marginTop: 3,
    opacity: 0.9,
  },
  deteksiButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
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
  deteksiText: {
    flex: 1,
    marginLeft: 12,
  },
  deteksiTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  deteksiDesc: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  listContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  hamaCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  hamaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  hamaTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hamaNama: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tingkatBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tingkatText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  hamaDetail: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
    marginLeft: 4,
  },
  detailText: {
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
    marginBottom: 8,
    paddingLeft: 20,
  },
  marginTop: {
    marginTop: 8,
  },
  kontakContainer: {
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 5,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  kontakTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  kontakButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  kontakButton: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    width: '45%',
    justifyContent: 'center',
  },
  konsulButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2E7D32',
  },
  kontakButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  konsulText: {
    color: '#2E7D32',
  },
});

export default HamaScreen;
