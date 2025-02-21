import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { FeaturedCard, Card } from "@/components/Cards";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";

export default function Index() {

  const {user} = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[1, 2,3, 4]}
        renderItem={({item}) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32 "
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={

          <View className="px-5 ">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row">
                <Image source={{uri: user?.avatar}} className="size-12 rounded-full"/>
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">Hello</Text>
                  <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6"/>
            </View>

            <Search />


            <View className="my-5 ">
              <View className="flex flex-row items-center justify-between ">
                <Text className="text-lx font-rubik-bold text-black-300">Featured</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See all</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                horizontal
                data={[1, 2, 3]}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => <FeaturedCard />}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            <View className="mt-5">
              <View className="flex flex-row items-center justify-between ">
                <Text className="text-lx font-rubik-bold text-black-300">Our recomendations</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">See all</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Filters />
          </View>
        }
      />
    </SafeAreaView>
  );
}
