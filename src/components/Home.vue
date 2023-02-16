<template>
    <div>
		<div class="top"><div class="topImg"></div></div>
        <div class="preTitle">BUILT CULTURAL HERITAGE IN</div>
        <div class="mainTitle"><i>ANTARCTICA</i></div>

		<div class="authors"><i>Jonathan Westin, Gunnar Almevik,<br> Dag Avango & Kati Lindstr&ouml;m</i></div>

        <div class="article">
            <div class="articletext">
                The first Swedish Antarctic Expedition (1901-1903), led by Otto Nordenskjöld, sailed to Antarctica on the ship <i>Antarctic</i> captained by CA Larsen, and established a research station on Snow Hill Island. There six members overwintered and performed paleontological, meteorological, geomagnetic and geological studies, while the rest of the expedition set sail for South Orkney.
                <p>After the winter, on the way back to Snow Hill Island, the Antarctic got stuck in the ice and sank. At this point, the expedition members were divided into three groups. One of these overwintered an extra year on Snow Hill Island, whereas the other two groups were forced to build stone huts in order to overwinter at Hope Bay and Paulet Island. An Argentinean vessel, the Corbeta Uruguay, rescued the expedition in November 1903.</p>                                                                                                                  
                <p>This portal makes available documentation of the historical remains of the First Swedish Antarctic Expedition on the Antarctic Peninsula. The material was collected in January and February 2020 as part of the <a href="https://meltinghistory.org"><i>CHAQ2020</i></a> expedition.
                <i><a href="http://www.raa.se">The Swedish National Heritage Board</a>, the Swedish Research Council</i>, and <i>Instituto Antártico Argentino</i> supported the project. </p>
            </div>
        </div>
        <br/>
        <div >
            <a href="http://raa.diva-portal.org/smash/record.jsf?pid=diva2%3A1589121&dswid=4653"><img src="../assets/graphics/book.png" class="icon"/></a>
        </div>
        
        <a href="http://raa.diva-portal.org/smash/record.jsf?pid=diva2%3A1589121&dswid=4653">Read Full Report</a>
        
		<div style="margin-top:40px" @click="scrollToSites">Scroll down to documentation
            <br/>
            <img src="../assets/graphics/scrollarrow.png" class="icon bounce"/>
        </div>

        <p class="underTitle">The Voyage to Antarctica</p>
        <div class="voyage">
            <video width="700" height="700" autoplay loop muted playsinline>
                <source src="https://antarctica.dh.gu.se/graphics/antarcticavoyage.webm" type="video/webm">
            </video>
        </div>

        <div>
            <div class="underTitle" style="margin-top:100px">The Ship Antarctic's Last Voyage</div>
            <br/>
            <div class="voyage">
                <video width="700" height="700" autoplay loop muted playsinline>
                    <source src="https://antarctica.dh.gu.se/graphics/antarcticaremains.webm" type="video/webm">
                </video>
            </div>
        </div>

        <div ref="documentation">
            <router-link to="/snowhill" class="islandLink">
                <img src="../assets/graphics/map1.png" class="map"/>
            </router-link>
        </div>
        


    </div>
</template>

<script>
    export default ({
    name: "Home",
    methods: {
        // TODO
        scrollToSites() {
            this.$refs["documentation"].scrollIntoView({ behavior: "smooth"})
        }
    }
  })
</script>

<style>
    @import '@/assets/style/index.css';

</style>