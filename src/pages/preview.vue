<template>
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
       
        <v-card class="w-100 layout wrap mx-auto bg-transparent pa-5">
            <div class="preview">
                <div class="result">
                    <h2 class="text-center" style="letter-spacing: .2em;">SCAN ANALYSIS</h2>
                    <div class="d-flex ga-4 mt-8">
                        <div class="score">
                            <span>3</span>
                            <hr class="w-100">
                            <span>10</span>
                        </div>
                        <div class="remarks">
                            <h2 style="letter-spacing: .2em;">Remark:</h2>
                            Warning, this url consist of suspicious link and should be careful.
                        </div>
                    </div>
                    <v-btn class="mt-5 w-100 rounded-xl bg-primary" @click.prevent="Home">
                        <v-icon>mdi-arrow-left</v-icon> Scan another url</v-btn>
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
            <div class="details w-100">
                <div class="snap-shot"></div>
            </div>
        </v-card>
    </v-main>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const items = ref(['danger', 'danger', 'danger'])
const router = useRouter()
const url = ref('')

const urlValidation = (value) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    if (!value) return 'URL is required';
    if (!urlPattern.test(value)) return 'Please enter a valid URL';
    return true
}

const isFormValid = computed(() => {
    return url.value && urlValidation(url.value) === true
})

const scanUrl = () => {
    console.log(form.value);

    if (!form.value) return;
    router.push('preview')
}

const Home = () => {
    router.push('/')
}


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

.preview {
    width: 30em;
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
    background-image: url('../assets/img3.webp');
    height: 40em;
    background-size: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.score {
    border: 12px solid #00E676;
    height: 150px;
    min-width: 100px;
    border-radius: 50%;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: lightgrey;

}

@media (min-width:760px) {
    .wrap {
        width: 85% !important;
    }
}
</style>