import React, { useState, useEffect,Component,ScrollView } from "react";
import { Alert, View , Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../components/CustomText";

import CustomButton from "../../components/CustomButton";

const Item = ({path, navigation }) => {

  return (
    
    <SafeAreaView style={styles.mainContainer}>
      <Text style={{ fontSize: 18, fontWeight: '800',marginTop:50,}}>{title}</Text>
      <Text style={{ margin: 10 }}>Author : {author}</Text>
      <Text style={{ margin: 10 }}>{dec}</Text>
      <Text style={{ margin: 10 }}>Link to the article: {url}</Text>
      <Image
        source={{ uri: pic }}
        style={{ width: 200, height: 200, marginTop: 30 }}
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
    this.state = {
      Product_id : '0' /* product indicator to iterate the list*/
    }
  }

  componentDidMount() {
    this.grabItems();
  }

  grabItems(){
    /* api calls goes here examples below*/

    const APIKEY = 'ed974b1cf4ce4021a84ea7e477f0098e';
    const BASE_URL = 'https://newsapi.org/v2/top-headlines?sources=';
    const PARAMS = `&apiKey=${APIKEY}`;
    let FETCH_URL = `${BASE_URL}${this.state.news_source}${PARAMS}`;
    console.log(FETCH_URL)
    fetch(FETCH_URL, { method: 'GET' })

      .then((response) => response.json())
      .then((json) => {

        this.setState({ totalResults: json.totalResults});

        for (let i = 0; i < this.state.totalResults; i += 1) {
          
          this.setState({ [`headline_${i}`]: json.articles[i].title });
          this.setState({ [`author_${i}`]: json.articles[i].author });
          this.setState({ [`desc_${i}`]: json.articles[i].description });
          this.setState({ [`image_${i}`]: json.articles[i].urlToImage });
          this.setState({ [`linkToArticle_${i}`]: json.articles[i].url });
        }
      });
  }

  render(){
    let item_holder = []

    for (let i = 0; i < this.state.totalResults; i += 1) {
      articles_holder.push(
        <Product
          key={i}
          title={this.state[`headline_${i}`]}
          author={this.state[`author_${i}`]}
          dec={this.state[`desc_${i}`]}
          pic={this.state[`image_${i}`]}
          url={this.state[`linkToArticle_${i}`]}
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
