import React, { useState } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ButtonBack } from '@components/ButtonBack';
import { Photo } from '@components/Photo';
import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
} from './styles';

type Props = {
  uri: string | null;
};

export function Product() {
  const [image, setImage] = useState('');
  const insets = useSafeAreaInsets();

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header style={{ paddingTop: insets.top + 33 }}>
        <ButtonBack />

        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
      <Upload>
        <Photo uri={image} />
        <PickImageButton
          title="Carregar"
          type="secondary"
          onPress={() => handlePickerImage()}
        />
      </Upload>
    </Container>
  );
}
