<template>
  <v-card class="py-12" light>
    <v-row>
      <v-spacer/>
      <v-col cols="10">
        <h1 class="display-2"> The Band </h1>
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
        <br>
        <v-row>
          <v-col
            v-for="person in persons"
            cols="12"
            lg="3"
            md="3"
          >
            <v-card
              class="mx-2 avatar"
              hover
            >
              <v-img
                @click.stop="loadDialog(person)"
                :src="person.src"
                contain
              />
            </v-card>
          </v-col>
        </v-row>
        <v-dialog
          v-model="dialog"
          max-width="290"
          light
        >
          <v-card>
            <v-row class="px-4">
              <v-card-title
                class="headline"
              >
                {{dialogData.title}}
              </v-card-title>
              <v-spacer />
              <v-avatar
                class="my-3"
              >
                <img
                  :src="dialogData.img"
                  alt="J"
                >
              </v-avatar>
            </v-row>
            <v-card-text>
              {{dialogData.text}}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-2"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-card>
</template>

<script>
    export default {
      name: "biography",
      data() {
        return {
          dialog: false,
          dialogData: {
            title: null,
            text: null,
            img: null,
          },
          persons: [
            {
              src: require('static/images/band-members/taylor.jpg'),
              headline: 'Vocals / Keys',
              bio: 'This is taylor'
            },
            {
              src: require('static/images/band-members/jonny.jpg'),
              headline: 'Guitar',
              bio: 'This is jonny'
            },
            {
              src: require('static/images/band-members/james.jpg'),
              headline: 'Bass',
              bio: 'This is james'
            },
            {
              src: require('static/images/band-members/nate.jpg'),
              headline: 'Drums',
              bio: 'This is nate'
            }
          ],
        }
      },
      methods: {
          loadDialog(person) {
            this.dialog = true;
            this.dialogData.title = person.headline;
            this.dialogData.text = person.bio;
            this.dialogData.img = person.src;
          }
      }
    }
</script>

<style scoped>
  p {
    word-spacing: 2px;
    line-height: 1.7;
  }
  h1 {
    text-align: center;
  }
  .avatar {
    border-radius: 50% !important;
  }
</style>
