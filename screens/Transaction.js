import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      domState:"normal",
      hasCameraPermissions:null,
      scanned:false,
      scannedData:"",
    }
  };
  getCameraPermissions=async domState => {
    const{status}=await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      /*status === "granted" is true when user has granted permission 
        status === "granted" is false when user has not granted the permission 
      */
     hasCameraPermissions:status === "granted",
     domState:domState,
     scanned: false
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, { marginTop: 25 }]}
         onPress={() => this.getCameraPermissions("scanner")}> 
           <Text style={styles.buttonText}>Scan QR code</Text>
        </TouchableOpacity>
       
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  button: {
    width: "43%",
    height:55,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F48D20",
    borderRadius:50
  },
  buttonText: {
    color: "#ffff",
    fontSize: 30
  }
});
