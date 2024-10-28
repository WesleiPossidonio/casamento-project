import React from 'react'
import {
  ContainerIcons,
  ContainerNavigate,
  ContainerTitle,
  ContentIcons,
  DateText,
  Location,
  Names,
  SaveTheDateContainer,
  Text,
  Title,
} from './styled'
import { Check, Gift, MapPin } from '@phosphor-icons/react'

export const SaveTheDateSection = () => {
  return (
    <SaveTheDateContainer>
      <ContainerTitle>
        <Title>
          SAVE <span>the DATE</span>
        </Title>
        <DateText>07 . 09 . 2024</DateText>
        <Names>L & N</Names>
        <Location>Chá de Panelas</Location>
      </ContainerTitle>

      <ContainerNavigate>
        <Text>
          O amor é como uma grande casa que tem que ser construída. Ele pode
          sofrer com as tempestades, entretanto, continuará ali.
        </Text>
      </ContainerNavigate>

      <ContainerIcons>
        <ContentIcons>
          <span>
            <MapPin size={32} color="#fff" />
          </span>
          <Text>Local da Festa</Text>
        </ContentIcons>

        <ContentIcons>
          <span>
            <Check size={32} color="#fff" />
          </span>
          <Text>Lista de Presença</Text>
        </ContentIcons>

        <ContentIcons>
          <span>
            <Gift size={32} color="#fff" />
          </span>
          <Text>Lista de Presente</Text>
        </ContentIcons>
      </ContainerIcons>
    </SaveTheDateContainer>
  )
}
