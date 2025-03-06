import { Link, Stack } from "expo-router"
import { View, StyleSheet, Text } from "react-native"

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <View style={styles.container}>
                <Text style={styles.text}>This screen doesn't exist.</Text>
                <Link href="/" style={styles.link}>
                    <Text style={styles.text}>Go to home screen!</Text>
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#25292e",
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    text: {
        color: "#fff",
    },
})
