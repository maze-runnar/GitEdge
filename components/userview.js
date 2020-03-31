import { ListItem } from 'react-native-elements';
import React from 'react';
import { Image, Text, View, StyleSheet ,ScrollView, TouchableOpacity, Alert} from 'react-native';
export default class Userview extends React.Component {

  render() {
    const list = [
  {
    name: 'Sundaram Dubey',
    avatar_url: 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
    subtitle: 'User'
  },
  {
    name: 'Favourite Movie',
    avatar_url: 'https://www.stickershoppe.com/mm5/graphics/00000001/M-REC-WTSTAR_640x640.jpg',
    subtitle: 'Shawshank Redemption'
  },
  {
    name: 'Buy redemption',
    avatar_url: 'https://icons.iconarchive.com/icons/iconsmind/outline/512/Money-2-icon.png',
    subtitle: 'a package of benifit'
  },
  {
    name: 'Share unlimited',
    avatar_url: 'https://cdn.clipart.email/95f61e6a70b90ee45eac3ec257fc0f31_instagram-share-icon-png-clipart-png-download-instagram-paper-_860-900.png',
    subtitle: 'Shawshank Redemption'
  },
  {
    name: 'FAQ',
    avatar_url: 'https://lh3.googleusercontent.com/proxy/AGCF94KyAqxCxehNyupmiG6o6H_dnG9PDHYDPYRRKMq6LXpX7oTRIdnZ89VeHa7YNHhlUr55k_-gKtin1MELDrXNqkIi4wjkq2dA_6aL-HOzSoZdDAfADBHGkMyVxpxnqjAYglY',
    subtitle: 'Know why to go with us',
    
  },
 
];

    return (
      <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}

              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
              chevron
            />
          ))
        }
      </View>
    );
  }
}