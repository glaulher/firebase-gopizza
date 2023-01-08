import { TextInputProps } from 'react-native';
import { Container, TypeProps } from './styles';

type Props = TextInputProps & {
  // eslint-disable-next-line react/require-default-props
  type?: TypeProps;
};

export function Input({ type = 'primary', ...rest }: Props) {
  return <Container type={type} {...rest} />;
}
