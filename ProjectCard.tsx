import { View, Image, Text, ImageSourcePropType } from "react-native";

interface ProjectCardProps {
    image: ImageSourcePropType;
    title: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
      <View>
        <Image source={props.image} style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 10 }} />
        <Text style={{ fontSize: 14, color: "dimgray", marginTop: 10 }}>{props.title}</Text>
      </View>
    );
  }