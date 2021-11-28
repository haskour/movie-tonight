import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "react-native";
import axios from "../services/axiosConfig";
import Rating from "../components/Rating";
export default function MovieDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [movie, setMovie] = useState();
  const screen = Dimensions.get("screen");

  useEffect(() => {
    axios
      .get("/movie/" + id, {
        params: {
          api_key: "b2168bae3a2c67509eb6b97572f521c2",
        },
      })
      .then((resp) => {
        setMovie(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      {movie && (
        <ScrollView>
          <View style={{ position: "relative" }}>
            <View
              style={{
                borderBottomLeftRadius: 30,
                position: "relative",
              }}
            >
              <View
                style={{
                  borderBottomLeftRadius: 30,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  source={{
                    uri:
                      "https://image.tmdb.org/t/p/original" + movie.poster_path,
                    height: 100,
                    width: screen.width,
                    height: screen.height * 0.6,
                  }}
                />
              </View>

              <View
                style={{
                  position: "absolute",
                  bottom: -120,
                  left: 25,
                  borderWidth: 8,
                  borderColor: "#fff",
                  borderRadius: 20,
                  zIndex: 99,
                }}
              >
                <View
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: "#000",
                  }}
                >
                  <Image
                    source={{
                      uri:
                        "https://image.tmdb.org/t/p/original" +
                        movie.poster_path,
                      width: 100,
                      height: 150,
                    }}
                  />
                </View>
              </View>

              <Pressable
                style={{ position: "absolute", bottom: -30, right: 20 }}
              >
                <Image source={require("../assets/button_play.png")} />
              </Pressable>
            </View>

            <View
              style={{
                paddingLeft: 165,
                paddingTop: 30,
                paddingHorizontal: 30,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {movie.title}
              </Text>
              <Text style={{ color: "#555", fontSize: 18 }}>
                Francis ford coppola
              </Text>
              <Rating range={movie.vote_average / 2} />
            </View>

            <View style={{ paddingTop: 40, paddingHorizontal: 25, paddingBottom: 120 }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                Synopsis
              </Text>
              <Text style={{ fontSize: 16, color: "#999" }}>
                {movie.overview}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          // height: 50,
          width: screen.width,
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingVertical: 20
        }}
      >
        <TouchableOpacity
          style={{
            height: 50,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#EB7660',
            borderRadius: 15
      
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Visit website</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
