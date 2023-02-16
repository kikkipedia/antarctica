<template>  
    <div class="photoPage">
        <div style="width:100%; height:800px;" id="viewer-image" ref="image"></div>
        <div class="photoPage">
            <h2>Snow Hill Island - The Winter Station</h2>
            <img src="../assets/graphics/back.png"  @click="$router.back()" class="icon"/>
            <PhotoGallery/>
        </div>
    </div>
    
 
</template>

<script>
    import OpenSeadragon from "openseadragon";
    import PhotoGallery from "./PhotoGallery.vue";
    window.OpenSeadragon = OpenSeadragon;

export default {
    name: "Viewer",
    components: {PhotoGallery},
    data() {
        return {
        viewer: null
        };
    },
    mounted() {
        this.initViewer();
    },
    methods: {
        initViewer() {

        var image = [
            {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                type: "image",
                url:"https://antarctica.dh.gu.se/archive/images/snowhill/snowhill1.jpg",
                Format: "jpg",
                Overlap: "1",
                TileSize: "256",
                Size: {
                    Width: "13920",
                    Height: "10200"
                }
            }
        ]
        
        this.viewer = OpenSeadragon({
            id: "viewer-image",
            animationTime: 0.4,
            prefixUrl: "//openseadragon.github.io/openseadragon/images/",
            showNavigator: false,
            sequenceMode: false,
            tileSources: image
        })
        }
    }
}

</script>

<style scoped>
    @import '@/assets/style/snowhill.css';
    @import '@/assets/style/index.css';

    
</style>