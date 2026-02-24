import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Tipe untuk data harga
type HargaItem = {
  id: number;
  daerah: string;
  harga: number;
  perubahan: string;
  status: 'naik' | 'turun' | 'stabil';
};

const HargaScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Jawa Timur');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Data dummy harga jagung
  const hargaData: HargaItem[] = [
    {
      id: 1,
      daerah: 'Jawa Timur',
      harga: 5200,
      perubahan: '+100',
      status: 'naik',
    },
    {
      id: 2,
      daerah: 'Jawa Tengah',
      harga: 5100,
      perubahan: '-50',
      status: 'turun',
    },
    {
      id: 3,
      daerah: 'Jawa Barat',
      harga: 5300,
      perubahan: '+200',
      status: 'naik',
    },
    { id: 4, daerah: 'Lampung', harga: 5000, perubahan: '0', status: 'stabil' },
    {
      id: 5,
      daerah: 'Sulawesi Selatan',
      harga: 4900,
      perubahan: '-100',
      status: 'turun',
    },
    {
      id: 6,
      daerah: 'Sumatera Utara',
      harga: 5150,
      perubahan: '+50',
      status: 'naik',
    },
  ];

  // Filter data berdasarkan pencarian
  const filteredData = hargaData.filter(item =>
    item.daerah.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({ item }: { item: HargaItem }) => (
    <TouchableOpacity
      style={styles.hargaCard}
      onPress={() => setSelectedRegion(item.daerah)}
    >
      <View style={styles.hargaHeader}>
        <Text style={styles.daerahText}>{item.daerah}</Text>
        <View
          style={[
            styles.statusBadge,
            item.status === 'naik'
              ? styles.statusNaik
              : item.status === 'turun'
              ? styles.statusTurun
              : styles.statusStabil,
          ]}
        >
          <Text style={styles.statusText}>
            {item.status === 'naik' ? '▲' : item.status === 'turun' ? '▼' : '■'}
          </Text>
        </View>
      </View>

      <View style={styles.hargaDetail}>
        <Text style={styles.hargaValue}>
          Rp {item.harga.toLocaleString()}/kg
        </Text>
        <Text
          style={[
            styles.perubahanText,
            item.status === 'naik'
              ? styles.perubahanNaik
              : item.status === 'turun'
              ? styles.perubahanTurun
              : styles.perubahanStabil,
          ]}
        >
          {item.perubahan}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari daerah..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Icon name="close" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      {/* Info Harga Rata-rata */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Harga Rata-rata Nasional</Text>
        <Text style={styles.infoValue}>Rp 5.108/kg</Text>
        <Text style={styles.infoUpdate}>Update: Hari ini, 08:00 WIB</Text>
      </View>

      {/* Daftar Harga */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      {/* Tips Pasar */}
      <View style={styles.tipsContainer}>
        <Icon name="lightbulb" size={20} color="#FFC107" />
        <Text style={styles.tipsText}>
          Harga jagung cenderung naik di musim kemarau. Pertimbangkan untuk
          menyimpan hasil panen jika harga sedang rendah.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  infoContainer: {
    backgroundColor: '#2E7D32',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoTitle: {
    color: '#fff',
    fontSize: 14,
  },
  infoValue: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  infoUpdate: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
  listContainer: {
    padding: 10,
  },
  hargaCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  hargaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  daerahText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusNaik: {
    backgroundColor: '#E8F5E9',
  },
  statusTurun: {
    backgroundColor: '#FFEBEE',
  },
  statusStabil: {
    backgroundColor: '#FFF3E0',
  },
  statusText: {
    fontSize: 16,
  },
  hargaDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hargaValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  perubahanText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  perubahanNaik: {
    color: '#4CAF50',
  },
  perubahanTurun: {
    color: '#F44336',
  },
  perubahanStabil: {
    color: '#FF9800',
  },
  tipsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF3E0',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  tipsText: {
    flex: 1,
    marginLeft: 10,
    color: '#666',
    fontSize: 12,
  },
});

export default HargaScreen;
