import { useNavigation } from "@react-navigation/native";
import { format, parseISO } from "date-fns";
import React, { useMemo } from "react";
import { ITv } from "../../services/types";
import { getMovieImg } from "../../services/useTrendingService";

import { Container, Image, Label, Title, Year } from "./styles";

interface Props {
  data: ITv;
}

const CardTv: React.FC<Props> = ({ data }) => {
  const { navigate } = useNavigation();

  function handleDetails() {
    const routeName = `DetailsTv` as never;
    const params = {
      tv: data,
    } as never;

    navigate(routeName, params);
  }

  const year = useMemo(() => {
    const parsed = parseISO(data.first_air_date);

    return format(parsed, `yyyy`);
  }, [data.first_air_date]);

  const image = useMemo(
    () => getMovieImg(data.backdrop_path),
    [data.backdrop_path],
  );

  const title = useMemo(() => {
    if (data.name.length > 12) {
      return `${data.name.substring(0, 13)}...`;
    }

    return data.name;
  }, [data.name]);

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

export default CardTv;
