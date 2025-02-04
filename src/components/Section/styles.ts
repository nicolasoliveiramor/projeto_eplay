import styled from 'styled-components'

import { cores } from '../../styles'
import { Card } from '../Product/styles'

import { Props } from './'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preta : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preta};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding-top: 40px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
