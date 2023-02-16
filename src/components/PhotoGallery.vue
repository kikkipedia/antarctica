<template>
    <!-- Masonry photo gallery -->
    <div class="masonry" id="galleries">
            
            <MasonryWall :items="items" :ssr-columns="1" :column-width="300" :gap="16">
                <template #default="{ item }">
                    <div
                        :style="{ height: `${item}px` }"
                        class="card flex items-center justify-center gallery"
                    >   
                        <img :src="item.imgUrl" alt="item.heading" class="photoThumb" @click="showPhoto()"/>
                        <h2>{{ item.heading  }}</h2>
                        <p>Photo of monument</p>
                    </div>
                </template>
            </MasonryWall> 
    </div>
</template>

<script>
    import MasonryWall from '@yeger/vue-masonry-wall'
    import { defineComponent } from 'vue'

    const thumbnails = [
        {
            imgUrl: require('../assets/graphics/8683thumb.jpg'),
            heading: 'Interior',
            equipment: 'iPhone XR',
            date: '2020-01-01',
            photo: 'Xon Xsson'
        },
        {
            imgUrl: require('../assets/graphics/8683thumb.jpg'),
            heading: 'Interior',
            equipment: 'iPhone XR',
            date: '2020-01-01',
            photo: 'Xon Xsson'
        },
        {
            imgUrl: require('../assets/graphics/8683thumb.jpg'),
            heading: 'Interior',
            equipment: 'iPhone XR',
            date: '2020-01-01',
            photo: 'Xon Xsson'
        },
        {
            imgUrl: require('../assets/graphics/8683thumb.jpg'),
            heading: 'Interior',
            equipment: 'iPhone XR',
            date: '2020-01-01',
            photo: 'Xon Xsson'
        },
        {
            imgUrl: require('../assets/graphics/8683thumb.jpg'),
            heading: 'Interior',
            equipment: 'iPhone XR',
            date: '2020-01-01',
            photo: 'Xon Xsson'
        },
        {
            imgUrl: require('../assets/graphics/8683thumb.jpg'),
            heading: 'Interior',
            equipment: 'iPhone XR',
            date: '2020-01-01',
            photo: 'Xon Xsson'
        }
    ]

    export default defineComponent({
        components: {
            MasonryWall,
        },
        data() {
            return {
            items: thumbnails,

            }
        },
        methods: {
            showPhoto() {
                return this.$router.push("/photo")
            }
        }
        })
</script> 
        
<style>
     @import '@/assets/style/snowhill.css';
     @import '@/assets/style/index.css';
</style>