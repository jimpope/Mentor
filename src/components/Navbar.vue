<template>
    <nav>
        <v-app-bar
        app
        color="primary"
        >
        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="white--text">
            <span>Mentor Qualification</span>
        </v-toolbar-title>
            
        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
            <v-btn text v-on="on" color="white">
                <v-icon left>mdi-chevron-down</v-icon>
                Menu
            </v-btn>
            </template>
            <v-list-item-group>
            <v-list color="secondary">
                <v-list-item color="grey darken-2" v-for="(link,index) in links" :key="index" router :to="link.route">
                <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-list-item-group>
            
        </v-menu>

        <v-btn text color="white">
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-layout column align-center>
                <v-layout column align-center>
                    <v-flex class="mt-5">
                        <v-avatar size="100">
                            <img src="/pepe.png">
                        </v-avatar>
                        <p class="white--text subheading mt-1">
                            Driver Applications
                        </p>
                    </v-flex>
                </v-layout>
            </v-layout>
            <v-list class="secondary">
                <v-list-item-group>
                    <v-list-item
                        v-for="(item,i) in links"
                        :key="i"
                        router :to="item.route"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon" color="white"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="black--text" v-html="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            snackbar: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                { icon: 'mdi-account', text: 'Pending Approval', route: '/pending'},
                { icon: 'mdi-cog-outline', text: 'Settings', route: '/settings'},
            ]
        }
    }
}
</script>