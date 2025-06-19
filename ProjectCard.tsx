import { View, Image, Text, ImageSourcePropType, StyleSheet } from "react-native";

interface ProjectCardProps {
    image: ImageSourcePropType;
    title: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <View>
            <Image source={props.image} style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        aspectRatio: 16 / 9,
        borderRadius: 10,
    },
    title: {
        fontSize: 14,
        color: "dimgray",
        marginTop: 10,
    }
})