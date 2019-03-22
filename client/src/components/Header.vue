<template>
   <nav>
       <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app >
           <v-toolbar >
               <v-list>
                   <v-list-tile :to="'/'">
                       <v-list-tile-title class="title">
                           DOTA2 BETS
                       </v-list-tile-title>
                   </v-list-tile>
               </v-list>
           </v-toolbar>

           <v-divider></v-divider>
           <v-list dense class="pt-0">
               <v-list-tile
                       v-for="item in items"
                       :key="item.title"
                       :to="item.path"
               >
                   <v-list-tile-content>
                       <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                   </v-list-tile-content>
               </v-list-tile>
           </v-list>
       </v-navigation-drawer>
       <v-toolbar fixed app :clipped-left="clipped">
           <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
           <v-spacer></v-spacer>
           <v-btn icon>
               <v-icon>more_vert</v-icon>
           </v-btn>
       </v-toolbar>
   </nav>
</template>

<script>

    export default {
        name: 'Header',
        data() {
            return {
                drawer: false,
                clipped: false,
                items: [
                    {
                        title: 'MATCH',
                        path: '/match',
                        items: [],
                    },
                    {

                        title: 'PLAYERS',
                        path: '/players',
                        items: []
                    }]
            }
        }
    }
</script>
