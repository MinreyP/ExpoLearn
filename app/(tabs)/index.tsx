import { View, StyleSheet } from "react-native"
import ImageViewer from "@/components/ImageViewer"
import Button from "@/components/Button"

const PlaceHolderImage = require("@/assets/images/background-image.png")

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceHolderImage} />
            </View>
            <View style={styles.footerContainer}>
                <Button label="Choose a photo" theme="primary" />
                <Button label="Use this photo" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
        paddingTop: 10,
        paddingBottom: 10,
    },
    imageContainer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
    },
})
