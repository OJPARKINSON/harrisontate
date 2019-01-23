import React from 'react'
import Header2 from '../components/header2'
import styled from 'styled-components'
import'../components/lookbook.css'
import SEO from '../components/seo'

const Container = styled.div`
    background-color: black;
    height: 2000px;
    width: 100%;
    margin: 0 auto;
`

const SecondPage = props => (
  <Header2 title="Flare">
    <SEO title="Flare"/>
    <Container>
    </Container>
  </Header2>
)


export default SecondPage
