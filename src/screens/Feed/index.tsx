import React from "react";
import { View, ScrollView } from "react-native";
import { useRem } from "responsive-native";
import { Container, Title, HiglightTitle, TitleBox, Wrapper } from "./styles";
import Highlight from "../../components/Highlight";
import { SearchBar } from 'react-native-elements';


const Feed: React.FC = () => {

  const rem = useRem();
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: rem(1),
        }}
      >
        <Wrapper>
          <TitleBox>           
            <Title>Find Movies, Tv series and more...</Title>
          </TitleBox>

          <SearchBar
            placeholder="Dora Aventureira"
            round
            containerStyle={{backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent'}}            
          />         
        </Wrapper>

        

        

        
      </ScrollView>
    </Container>
  );
  
};

export default Feed;
