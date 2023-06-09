import _ from "lodash";
import { useEffect, useState } from "react";
import { Platform, ScrollView, View } from "react-native";
import { Appbar, Divider, TextInput } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  ServiceBaseHumanDate,
  ServiceBaseRandomID,
} from "../../services/ServiceBase";
import WidgetPemasokChoice from "../../widgets/pemasok/WidgetPemasokChoice";

const ScreenPembelianCreate = ({ navigation }) => {

    const [pembelian, setPembelian] = useState({});
    const [daftarItemBeli, setDaftarItemBeli] = useState([]);
    const [pemasok, setPemasok] = useState({});
    const [complete, setComplete] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleInput = (name, value) => {
        if (name === "tanggal") setShowDatePicker(false);
        setPembelian((values) => ({...values, [name]: value}));
    };

    const randomFaktur = () => {
      handleInput("faktur", ServiceBaseRandomID("BELI"));
    };
  

    useEffect(() => {
        setComplete(false);
        const debounce = _.debounce(() => {
          setComplete(true);
        }, 500);
    
        debounce();
      }, []);
    
      return (
        <SafeAreaProvider style={{ flex: 1 }}>
          <Appbar.Header>
            <Appbar.Action icon="arrow-left" onPress={() => {}} />
            <Appbar.Content title="Add Transaksi Pembelian" />
            <Appbar.Action icon="trash-can-outline" onPress={() => {}} />
          </Appbar.Header>
          {complete && (
            <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
              <View style={{ marginHorizontal: 16, gap: 16, marginVertical: 24 }}>
                <TextInput
                  value={pembelian.faktur}
                  onChangeText={(text) => handleInput("faktur", text)}
                  label="Nomor Faktur"
                  editable={false}
                  right={
                    <TextInput.Icon onPress={() => randomFaktur()} icon="reload" />}
                />
                 <TextInput
              label="Tanggal"
              editable={false}
              value={`${ServiceBaseHumanDate(pembelian.tanggal) || ""}`}
              right={
                <TextInput.Icon
                  onPress={() => setShowDatePicker(true)}
                  icon="calendar"
                />
              }/>
              </View>
              <Divider/>
              {showDatePicker && (
                <DateTimePicker
                 value={pembelian.tanggal || new Date()}
                 mode="date"
                 display={Platform.OS === "ios" ? "spinner":"default"}
                 onChange={(event, value) => handleInput("tanggal",value)} 
                />
              )}

<WidgetPemasokChoice />
            </ScrollView>
          )}
        </SafeAreaProvider>
      );
};

export default ScreenPembelianCreate;