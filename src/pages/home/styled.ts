import styled from 'styled-components'

import backgroundImageUrl from '../../assets/image.jpeg'

export const SaveTheDateContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #333;
  background-image: url(${backgroundImageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const ContainerTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  align-self: flex-start;

  margin-top: 6rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #333;

  span {
    display: block;
    font-style: italic;
    font-weight: 400;
  }
`

export const DateText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  margin: 1rem 0 0.6rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Names = styled.p`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-top: -2rem;
  margin: 0;
`

export const Location = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-top: 0.12rem;
  text-align: center;
`

export const ContainerNavigate = styled.cite`
  width: 85%;
  align-items: flex-end;

  font-size: 0.8rem;
  color: #777;
  margin-top: 0.12rem;
  text-align: center;

  margin-top: 65%;
  margin-left: 22%;
`

export const Text = styled(Location)`
  margin: 0;
`

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  margin-top: 1rem;
  margin-left: 50%;
`

export const ContentIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 9999px;

    background-color: #333;
  }
`
