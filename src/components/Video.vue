<template>
    <div class="photoPage">
        <div class="video-container">
            <video-player class="player" src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4" :options="videoOptions"/>
        </div>
        <img src="../assets/graphics/back.png"  @click="$router.back()" class="icon"/>
        <VideoGallery/>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { VideoPlayer } from '@videojs-player/vue'
    import VideoGallery from "./VideoGallery.vue"

    export default defineComponent({
        components: {
        VideoPlayer,
        VideoGallery
        },
        data() {
            return {
                videoOptions: {
                    width: 900,
                    controls: true,
                    loop: false
                }
            }
        }
    })
  
</script>

<style>
    @import 'video.js/dist/video-js.css';
    @import '@/assets/style/index.css';

</style>