<template>
  <v-row>
    <v-spacer/>
    <v-col cols="10">
      <h1> The Band </h1>
      <br>
      <p>
        Broken Accord is an Indie Rock band from Provo, UT, consisting of Taylor Purcell, Jonny Tullis, James Hanks,
        and Nate Beck.  Previously involved in a Punk Rock band in 2013, these long time friends reunited in their
        latest project, Broken Accord.  The distinct passion of each member fuels their collective drive to create music
        that will empower their listeners.
      </p>
      <p>
        By examining their roots and seeking inspiration from various artists, Broken Accord strives to share a one
        of a kind music experience with the world.  The group’s first single, Rebel Blood, will release in early 2020,
        as the group vigorously works to add more material to their set list.
      </p>
      <v-row>
        <v-col
          v-for="person in persons"
          cols="12"
          lg="3"
          md="3"
          sm="3"
          style="padding: 0 70px 0 70px"
          class="mt-10"
        >
          <v-layout class="title" justify-center>
            {{ person.name }}
          </v-layout>
          <v-layout justify-center>
            {{ person.instrument }}
          </v-layout>
          <v-card class="mt-2" width="100%" style="border-radius: 50%;" elevation="8">
            <v-img :src="person.src"/>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-spacer/>
  </v-row>
</template>

<script>
    export default {
      name: "biography",
      data() {
        return {
          persons: [
            {
              src: require('static/images/band-members/taylor.jpg'),
              instrument: 'Vocals / Keys',
              name: 'Taylor Purcell'
            },
            {
              src: require('static/images/band-members/jonny.jpg'),
              instrument: 'Guitar',
              name: 'Jonny Tullis'
            },
            {
              src: require('static/images/band-members/james.jpg'),
              instrument: 'Bass',
              name: 'James Hanks'
            },
            {
              src: require('static/images/band-members/nate.jpg'),
              instrument: 'Drums',
              name: 'Nate Beck'
            }
          ],
        }
      }
    }
</script>
