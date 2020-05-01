import React, { useState } from "react"
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { View, Button, Image, Alert, StyleSheet } from "react-native";


const getPermissions = async() => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
  if (status !== "granted") {
    Alert.alert("Sorry, we need camera roll permissions to make this work!")
    return false;
  }
  return true
}

export const PhotoPicker = ({onPick}) => {

  const [image, setImage] = useState(null)

  const takePhoto = async() => {
    const permissions = await getPermissions()
    if (!permissions) {
      return
    }
    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [4, 3]
    })
    setImage(img.uri)
    onPick(img.uri)
  }

  return (
    <View style={styles.wrap}>
      <Button style={styles.btn} title="Take a pic" onPress={takePhoto} />
      {image && <Image style={styles.img} source={{ uri: image }} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 10
  },
  btn: {
    marginVertical: 10
  },
  img: {
    width: '100%',
    height: 300,
    marginTop: 10
  }
})