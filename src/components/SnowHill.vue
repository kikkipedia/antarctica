<template>

    <div class="back" @click="$router.back()"></div>

    <div class="siteTitle" style="">SNOW<br> HILL<br> ISLAND</div>
    <div class="subTitle">Isla Cerro Nevado
        <p><a href="https://goo.gl/maps/JEU4t7GhyBppM6YbA">64&#186; 22&#39; 00&#34; S 56&#186; 59&#39; 00&#34; W</a></p>
    </div>

    <div class="article">
        <div class="articletext">
            The wooden hut (HSM 38) was prefabricated in Sweden to function as a research station and dwelling during the Antarctic winter. The hut was called "the Winter Station" by the expeditioners, but is today named "Nordenskj&ouml;ld&#39;s hut" or "Casa Suecia" or "Refugio Suecia". The Winter Station was erected in February 1902 on a hill between the sea and the mountains on the west side of Snow Hill Island. Six of the expedition members, including Otto Nordenskj&ouml;ld and the Argentinian lieutenant Jos&eacute; Mar&iacute;a Sobral, stayed in the hut for 22 months, until the Argentine ship Uruguay came for their rescue in November 1903.
            <p>During the stay, the group performed research in geography, geology, bacteriology and meteorology. The near surrounding landscape was set up like a laboratory with various sheds and installations for observation and measurements. The effects of climate change with meltwater erosion and land drift have destroyed and even erased many of these remains.   </p>
            <p>The Winter Station, a 4.0 x 6.3 metre wooden building, has, however, endured time and is well preserved, but the hill on which it stands is acutely threatened by the melting of permafrost and meltwater ero- sion. Efforts by the IAA from the 1990s up until the mid-2010s to reinforce the hill have probably kept the building from drifting and tumbling. Terraces were made of reused aluminium elements from temporary American aircraft runways used in Vietnam. The Winter Station has been maintained with many layers of tarred paper and new window sashes.   </p> 
            <p>If the building is to stand for the next 30 to 50 years, the recommendation is to continue regular building maintenance and to resume to reinforce the hill using the same methods that the DNA-IAA have applied in the past. The sites with remains from Nordenskj&ouml;ld's fieldwork are disappearing and require direct rescue archaeology.  </p>
        </div>
    </div>

    <div>
        <a href="http://raa.diva-portal.org/smash/record.jsf?pid=diva2%3A1589121&dswid=4653"><img src="../assets/graphics/book.png" class="icon"/></a>
    </div>
    <a href="http://raa.diva-portal.org/smash/record.jsf?pid=diva2%3A1589121&dswid=4653">Read Full Report</a>

    <div class="masonry" id="galleries">
    <div class="fancyArrowInv"></div>
    <div class="sectionTitle">Photographs</div>
    <div class="documentationArticleSolo">The photographs were shot by the team members using a diverse set of equipments and techniques.</div>
      <PhotoGallery/>
      <div class="sectionTitle">Videos</div>
            <div class="documentationArticleSolo">
                The videos were recorded using a DJI Mavic 2 Pro drone. The first four videos were captured on January 12 and 13 2020 to provide material for photogrammetric triangulation and the creation of a structure-from-motion model of the Winter station and the hill.
            </div>
      <VideoGallery/>

   </div>     


</template>

<script>
import PhotoGallery from "./PhotoGallery.vue"
import VideoGallery from "./VideoGallery.vue"

export default ({
  components: {
    PhotoGallery,
    VideoGallery
  },
})
</script> 

<style scoped>
    


</style> 