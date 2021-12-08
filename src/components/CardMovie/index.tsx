import { useNavigation } from "@react-navigation/native";
import { format, parseISO } from "date-fns";
import React, { useMemo } from "react";
import { View } from "react-native";
import { useRem } from "responsive-native";
import { IMovie } from "../../services/types";
import { getMovieImg } from "../../services/useTrendingService";

import { Container, Image, Label, Title, Year } from "./styles";

interface Props {
  data: IMovie;
}

const CardMovie: React.FC<Props> = ({ data }) => {
  const rem = useRem();
  const { navigate } = useNavigation();

  function handleDetails() {
    const routeName = `Details` as never;
    const params = {
      movie: data,
    } as never;

    navigate(routeName, params);
  }

  const year = useMemo(() => {
    const parsed = parseISO(data.release_date);

    return format(parsed, `yyyy`);
  }, [data.release_date]);

  const image = useMemo(
    () => getMovieImg(data.backdrop_path),
    [data.backdrop_path],
  );

  const title = useMemo(() => {
    if (data.title.length > 12) {
      return `${data.title.substring(0, 13)}...`;
    }

    return data.title;
  }, [data.title]);

  return (
    <Container onPress={handleDetails}>
      <Image source={{ uri: image }} />

      <Label>
        <Title>{title} </Title>
        <Year>({year}) </Year>
      </Label>
    </Container>
  );
};

export default CardMovie;
