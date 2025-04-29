<template>
    <v-main>
        <div class="wrap mx-auto py-10 mt-15 pa-5">
            <div class="d-flex ga-1 ga-sm-3 align-center justify-center pb-3">
                <h1 class="text-h4 text-sm-h2 font-weight-black">PhishGuard</h1>
                <v-icon class="text-h4 text-sm-h2">mdi-shield-check</v-icon>
            </div>
            <p class="mx-auto mb-5 text-sm-h6 w-sm-75 text-center">
                Stay Safe Online – Instantly Detect Malicious and Phishing Links
            </p>
        </div>

        <div class="mx-auto w-100" style="position: fixed; top: 0%; z-index: 99; background-color: #0A192F;">
            <search-bar></search-bar>
        </div>

        <v-card class="w-100 layout md-nowrap mx-auto bg-transparent pa-5 px-sm-10 px-md-15">
            <div class="preview ">
                <div class="result bg-primary">
                    <h2 class="text-center scanHead" style="letter-spacing: .2em;">SCAN ANALYSIS</h2>

                    <div class="d-flex align-center justify-center mt-8 flex-column">
                        <div v-if="loading" class="skeleton-transparent score"></div>
                        <div v-else class="score">
                            <span style="font-size: 3em; color: #00E676; font-weight: 900;">
                                {{ result?.phishing_detection }}
                            </span>
                            <div style="font-size: 20px;">/10</div>
                        </div>

                        <div v-if="!loading && badge.text" class="badge mt-4" :style="{ backgroundColor: badge.color }">
                            {{ badge.text }}
                        </div>
                        <div v-else class="skeleton-transparent badge mt-4" style="width: 120px; height: 40px;"></div>
                    </div>

                    <div class="text-center mt-5 font-weight-black">
                        <strong class="text-h5 font-weight-black">Remark:</strong>
                        <div v-if="loading" class="skeleton-transparent my-3"
                            style="height: 30px; width: 70%; margin: auto;"></div>
                        <p v-else v-html="result?.comment?.responce"></p>
                    </div>
                </div>

                <v-divider class="my-5"></v-divider>

                <div>
                    <h3 class="text-h6 font-weight-bold mb-2">🌐 Domain Information</h3>
                    <v-skeleton-loader v-if="loading" class="bg-transparent"
                        type="list-item-two-line"></v-skeleton-loader>
                    <p v-else>{{ result?.domain_age }}</p>
                </div>
            </div>

            <div class="details w-100">
                <div v-if="loading" class="snap-shot d-flex align-center justify-center">
                    <v-progress-circular indeterminate size="50" color="green" />
                </div>
                <div v-else-if="!loading" class="snap-shot">
                    <v-img :src="result?.screenshot" class="fill-parent"></v-img>
                </div>
                <v-list dense class="bg-transparent mt-10">
                    <template v-if="!loading && description.list">
                        <p>{{ description.text }}</p>
                        <v-list-item v-for="(note, i) in description.list" :key="i" class="px-0 d-flex align-center">
                            <span>{{ note }}</span>
                        </v-list-item>
                        <p>{{ description.caption }}</p>
                    </template>
                    <template v-else>
                        <v-skeleton-loader class="bg-transparent" type="list-item"></v-skeleton-loader>
                    </template>
                    <v-divider class="mt-7"></v-divider>
                </v-list>
                <div v-if="!loading && result" class="my-8">
                    <div class="font-weight-black text-sm-h5">Disclaimer: </div>
                    <p>
                        Evaluate every submitted URL. The results and recommendations provided are based on real-time
                        scrutiny and
                        data-driven models.
                        While PhishGuard aims to enhance user safety, users are advised to exercise caution and verify
                        senders
                        independently before interacting with any links.
                        ⚠️ PhishGuard will not be held liable for any loss, damage, or harm resulting from the use of
                        links analyzed
                        by this platform, including those marked as safe. Always prioritize secure browsing practices.
                    </p>
                </div>
            </div>
        </v-card>

        <div class="d-flex w-100 mx-auto align-center justify-space-between px-5 px-sm-10 px-md-15 ga-5 mt-15 mb-5">
            <hr class="w-25">
            <small class="text-center">© PhishGuard. Your Security, Our Priority.</small>
            <hr class="w-25">
        </div>
    </v-main>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import searchBar from '@/components/searchBar.vue';
import { useMessagesStore } from '@/utils/states';
import { storeToRefs } from 'pinia';

const router = useRouter();
const message = useMessagesStore();
const { result, loading } = storeToRefs(message);

const badge = computed(() => {
    const score = result.value?.phishing_detection;
    if (score <= 3) {
        return { text: '🟢 SAFE', color: '#4CAF50' };
    } else if (score <= 6) {
        return { text: '🟡 SUSPICIOUS', color: '#FFEB3B' };
    } else if (score <= 10) {
        return { text: '🔴 DANGEROUS', color: '#F44336' };
    } else {
        return { text: '', color: '' };
    }
});
const description = computed(() => {
    const score = result.value?.phishing_detection;
    if (score <= 3) {
        return {
            text: 'This URL has been identified as safe based on the following indicators: ',
            list: result.value?.comment['good traits'],
            caption: '✅ You may proceed to click this link if it is from a trusted source.'
        };
    } else if (score <= 6) {
        return {
            text: 'This URL has been flagged as suspicious due to the following risk factors:',
            list: result.value?.comment['bad traints'],
            caption: '⚠️Only click this link if you are certain about the source. Proceed with caution.'
        };
    } else if (score <= 10) {
        return {
            text: '❌ This URL has been classified as malicious based on multiple high-risk indicators: ',
            list: result.value?.comment['bad traints'],
            caption: '🚫 Do not click on this link, even if it appears to come from a known source. It poses a serious security threat.'
        };
    } else {
        return {
            text: '',
            list: [],
            caption: ''
        };
    }
});
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
    min-height: 10em;
    background-color: rgba(0, 0, 0, 0.5);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    overflow: hidden;
    position: relative;
}

.fill-parent {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.details {
    flex: 1;
}
.score {
    border: 12px solid #388E3C;
    height: 220px;
    width: 50%;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: lightgrey;
    line-height: 40px;
}

.badge {
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 1.2em;
    font-weight: bold;
    color: black;
    text-align: center;
}

.skeleton-transparent {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% {
        opacity: 0.1;
    }

    50% {
        opacity: 0.4;
    }

    100% {
        opacity: 0.1;
    }
}

@media (min-width: 1060px) {
    .preview {
        width: 400px !important;
        min-width: 350px !important;
    }
}
@media (min-width: 560px) {
    .preview {
        width: 300px;
        min-width: 250px;
    }
}
@media (max-width: 560px) {
    .layout {
        flex-direction: column;
    }

    .preview,
    .details {
        width: 100%;
    }

    .preview {
        min-width: 100%;
    }

    .snap-shot {
        min-height: 10em;
    }
    .scanHead{
        font-size: 20px;
    }
}





</style>
