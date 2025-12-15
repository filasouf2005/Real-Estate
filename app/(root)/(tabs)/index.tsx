import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl font-rubik">Edit app/index.tsx to edit this screen.</Text>
      <Link href='/sign-in' className="border-1 rounded-full px-5 m-5 py-1 text-2xl bg-primary-200">signIn</Link>
    </View>
  );
}
