<template>
    <!-- Masonry videogallery -->

    <div class="masonry" id="galleries">
            <MasonryWall :items="videos" :ssr-columns="1" :column-width="250" :gap="16">
                <template #default="{ item }">
                    <div
                        :style="{ height: `100%` }"
                        class="card cards videoGallery flex-wrap items-center justify-center"
                    >   
                        <img :src="item.imgUrl" alt="item.heading" class="videoThumb" @click="showVideo()"/>
                        <p>{{item.text}}</p>
                
                    </div>
                </template>
            </MasonryWall>   
        </div>

</template>

<script>
    import MasonryWall from '@yeger/vue-masonry-wall'
    import { defineComponent } from 'vue'

    const videos = [
        {
            imgUrl: require('../assets/graphics/videoThumb.jpg'),
            heading: 'The Winter Station',
            text: 'Photogrammetric triangulation (part 1)'
        },
        {
            imgUrl: require('../assets/graphics/videoThumb.jpg'),
            heading: 'The Winter Station',
            text: 'Photogrammetric triangulation (part 1)'
        },
        {
            imgUrl: require('../assets/graphics/videoThumb.jpg'),
            heading: 'The Winter Station',
            text: 'Photogrammetric triangulation (part 1)'
        },
        {
            imgUrl: require('../assets/graphics/videoThumb.jpg'),
            heading: 'The Winter Station',
            text: 'Photogrammetric triangulation (part 1)'
        },
        {
            imgUrl: require('../assets/graphics/videoThumb.jpg'),
            heading: 'The Winter Station',
            text: 'Photogrammetric triangulation (part 1)'
        },
    ]



    export default defineComponent({
        components: {
            MasonryWall,
        },
        data() {
            return {
            videos: videos
            }
        },
        methods: {
            showVideo() {
                return this.$router.push("/video")
            }
        }
        })
</script>