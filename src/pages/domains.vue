<!-- <template>
    <v-main>
        <div class="wrap mx-auto py-10 mt-15 pa-5">
            <div class="d-flex ga-3 align-center justify-center pb-3">
                <h1 class=" text-h3 text-sm-h2 font-weight-black">PhishGuard</h1>
                <v-icon size="50">mdi-shield-check</v-icon>
            </div>
            <p class="mx-auto mb-5 text-h6 w-sm-75 text-center">Stay Safe Online – Instantly Detect Malicious and
                Phishing
                Links</p>
        </div>

        <div class="mx-auto w-100" style="position: fixed; top: 0%;">
           <search-bar></search-bar>
        </div>



        <v-card class="w-100 layout wrap mx-auto bg-transparent pa-5">
            <div class="preview w-25">
                <div class="result">
                    <h2 class="text-center" style="letter-spacing: .2em;">SCAN ANALYSIS</h2>
                    <div class="d-flex align-items-center justify-center mt-8">
                        <div class="score">
                            <span style="font-size: 3em; color: #00E676; font-weight: 900;">{{ result?.phishing_detection }}</span>
                            <div style="font-size: 20px;">
                                /10
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-5">
                        <strong>Remark:</strong> {{ result?.comment?.responce }}
                    </div>
                    
                </div>
                <v-list class="bg-transparent">
                    <v-list-item class="px-0" v-for="(item) in items">
                        <div class="d-flex text-h6 aligh-center justify-space-between ga-3">
                            <span>{{ item }}</span>
                            <v-icon color="red-lighten-3 text-h4">mdi-account-heart</v-icon>
                        </div>
                        <v-divider></v-divider>
                    </v-list-item>
                </v-list>
            </div>
            <div class="details w-75">
                <div   v-if="result" class="snap-shot" :style="{ backgroundImage: `url(${result?.screenshot})` }"></div>
            </div>
        </v-card>
    </v-main>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import searchBar from '@/components/searchBar.vue';
import { useMessagesStore } from '@/utils/states';
import { storeToRefs } from 'pinia';
const items = ref(['danger', 'danger', 'danger'])
const router = useRouter()
const message = useMessagesStore();
const {result} = storeToRefs(message)

const Home = () => {
    router.push('/')
}
// const image = result?.screenshot

</script>

<style scoped>
.v-main {
    background-color: #0A192F;
    color: white;
}

.searchEngine {
    box-shadow: 0px 0px 20px #b4c3d9;
}

.searchEngine:hover {
    transform: scale(1.02);
    transition: 0.3s;
}

.layout {
    display: flex;
    gap: 30px;
}

.result {
    background-color: #00838F;
    padding: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.snap-shot {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* background-image: url('../assets/img3.webp'); */
    height: 40em;
    background-size: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
}

.score {
    border: 12px solid #00E676;
    height: 160px;
    width: 60%;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: lightgrey;
    line-height: 40px;
}

@media (min-width:760px) {
    .wrap {
        width: 85% !important;
    }
}
</style> -->