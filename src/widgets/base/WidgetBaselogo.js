import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const WidgetBaseLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/1250/1250319.png?w=740&t=st=1683808803~exp=1683809403~hmac=b5e5c3985468736fcdcee32ae00e481012e0a4158373e45dab4a222451e03d92",
        }}
      />
      <Text variant="titleMedium">Mobile SISFO Purchasing</Text>
      <Text variant="bodySmall">By Putri {new Date().getFullYear()}</Text>
    </View>
  );
};

export default WidgetBaseLogo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    resizeMode: "center",
    width: 160,
    height: 160,
    alignSelf: "center",
  },
});