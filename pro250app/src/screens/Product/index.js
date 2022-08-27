import React, { useState, useEffect,Component,ScrollView } from "react";
import { Alert, View , Text, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../components/CustomText";

import CustomButton from "../../components/CustomButton";

const Item = ({path, navigation }) => {

  return (
    
    <SafeAreaView style={styles.mainContainer}>
    
      <Text style={{ fontSize: 18, fontWeight: '800',marginTop:50,}}>Product : {title}</Text>
      <Text style={{ margin: 10 }}>{desc}</Text>
      <Text style={{ margin: 10 }}>Price : {unit_price}</Text>

      <Button title="Add to Cart"
        onPress={() => addToCart(id)}
      />

      <CustomText
        label="Product"
        fontSize={22}
        alignSelf="center"
        fontWeight="bold"
      />

      <CustomButton
        text="Go To Cart"
        alignSelf="center"
        marginTop={verticalScale(50)}
        onPress={() => navigation.navigate("Cart")}
      />
    </SafeAreaView>
  );
};

export default class Product extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.itemCount();
    this.grabItems();
  }

  addToCart(id){
    const BASE_URL = 'http://localhost:5000/CartAPI/';
    const PARAMS = id;
    let FETCH_URL = `${BASE_URL}${PARAMS}`;

    console.log(FETCH_URL)
    //TODO post method needed
  }

  itemCount(){

    const BASE_URL = 'http://localhost:5000/InventoryAPI/';
    const PARAMS = `getInventory`;
    let FETCH_URL = `${BASE_URL}${PARAMS}`;

    console.log(FETCH_URL)
    fetch(FETCH_URL, { method: 'GET' })

      .then((response) => response.json())
      .then((json) => {

        this.setState({ totalResults: json.totalResults});

      });
  }

  grabItems(){

    const BASE_URL = 'http://localhost:5000/InventoryAPI/';

    for (let i = 0; i < this.state.totalResults; i += 1){
      const PARAMS = `getItem/${i}`;
      let FETCH_URL = `${BASE_URL}${PARAMS}`;
      console.log(FETCH_URL)
      fetch(FETCH_URL, { method: 'GET' })

      .then((response) => response.json())
      .then((json) => {

        for (let i = 0; i < this.state.totalResults; i += 1) {
          
          this.setState({ [`id_${i}`]: json.Id});
          this.setState({ [`title_${i}`]: json.Title});
          this.setState({ [`desc_${i}`]: json.Description });
          this.setState({ [`price_${i}`]: json.Unit_price });
        }
      });
    }
  }

  render(){
    let item_holder = []

    for (let i = 0; i < this.state.totalResults; i += 1) {

      item_holder.push(
        <Item
          id={this.state[`Id_${i}`]}
          title={this.state[`tittle_${i}`]}
          unit_price={this.state[`price_${i}`]}
          desc={this.state[`desc_${i}`]}
        />
      );
    }

    return(
      <ScrollView>

      <SafeAreaView style={styles.mainContainer}>
      <CustomText
        label="Product"
        fontSize={22}
        alignSelf="center"
        fontWeight="bold"
      />

      <CustomButton
        text="Go To Cart"
        alignSelf="center"
        marginTop={verticalScale(50)}
        onPress={() => navigation.navigate("Cart")}
      />

      </SafeAreaView>
        {item_holder}
      </ScrollView>
    );
  }

}

const styles = ScaledSheet.create({
  mainContainer: {
    padding: "20@ms",
  },
});
