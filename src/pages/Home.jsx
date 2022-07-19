import React from 'react'
import { Container, Grid } from '@mui/material'
import { Hero, ItemCard } from '../components'

function Home() {
  return (
    <div>
      <Hero />
      <Container>
      <Grid container spacing={5}>
        <ItemCard
          url='/images/fire.jpg'
          prodname="Chicken Biryani"
          prodspicelevel="Extra Spicy"
          prodstars="4"
          prodreviews="244"
          prodprice="2.99"
        />
        <ItemCard url='/images/fire.jpg'
          prodname="Beef Biryani"
          prodspicelevel="Medium Spicy"
          prodstars="4.5"
          prodreviews="402"
          prodprice="2.49"
        />
        <ItemCard url='/images/fire.jpg'
          prodname="Nihari"
          prodspicelevel="Extra Spicy"
          prodstars="5"
          prodreviews="984"
          prodprice="2.99"
        />
        <ItemCard url='/images/fire.jpg'
          prodname="Haleem"
          prodspicelevel="Medium Spicy"
          prodstars="4"
          prodreviews="223"
          prodprice="2.49"
        />
        <ItemCard url='/images/fire.jpg'
          prodname="Aloo Bhaji"
          prodspicelevel="Mild Spicy"
          prodstars="4"
          prodreviews="142"
          prodprice="1.99"
        />
        <ItemCard url='/images/fire.jpg'
          prodname="Variety Mix"
          prodspicelevel="Mild and Extra Spicy"
          prodstars="4.5"
          prodreviews="320"
          prodprice="9.99"
        />
      </Grid>
      </Container>
    </div>
  )
}

export default Home
