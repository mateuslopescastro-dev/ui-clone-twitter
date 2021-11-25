import React from 'react'

import { Feed } from '../Feed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles'

export const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Mateus Castro</h1>
        <h2>@mateuslopescastro_dev</h2>

        <p>Software Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Belo Horizonte, Brazil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 11 de julho de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>59</strong>
          </span>

          <span>
            <strong>56 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  )
}
