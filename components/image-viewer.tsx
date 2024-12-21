import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imageSource: ImageSource,
  selectedImage?: string;
}

export default function ImageViewer({ imageSource, selectedImage }: Props) {
  const source = selectedImage ? selectedImage : imageSource;

  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})