<template>
    <v-form v-model="form" @submit.prevent="scanUrl" class="d-flex align-center mb-4" style="height: 3em;">
        <v-text-field v-model="url" :rules="[urlValidation]" class="h-100"
            style='border: 0.3px solid #b4c3d9 !important;' placeholder="url.com"></v-text-field>
        <v-btn type="submit" :loading="loading" :disabled="!isFormValid" class="h-100 rounded-0 bg-primary">Scan</v-btn>
    </v-form>
</template>

<script setup>
import { useMessagesStore } from '@/utils/states';
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const form = ref(false)
const router = useRouter()
const route = useRoute()
const messages = useMessagesStore()
const { result, url, navigatedFromScan, loading} = storeToRefs(messages)



const urlValidation = (value) => {
    if (!value) return 'URL is required';
    try {
        const sanitized = sanitizeURL(value);
        const parsed = new URL(sanitized);
        const hostnameParts = parsed.hostname.split('.');
        if (hostnameParts.length < 2 || hostnameParts[hostnameParts.length - 1].length < 2) {
            return 'URL must have a valid domain extension (e.g., .com, .net)';
        }

        return true;
    } catch (e) {
        return 'Invalid URL format';
    }
}

const isFormValid = computed(() => {
    return urlValidation(url.value) === true
})

const sanitizeURL = (input) => {
    let sanitized = input.trim();
    if (!/^https?:\/\//i.test(sanitized)) {
        sanitized = 'http://' + sanitized;
    }
    if (sanitized.endsWith('/')) {
        sanitized = sanitized.slice(0, -1);
    }

    return sanitized;
}

const scanAnalysis = async (finalURL) => {

    try {
        loading.value = true
        const response = await axios.post('https://malikez.pythonanywhere.com/api/analyze', { url: finalURL }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result.value = response.data;
        navigatedFromScan.value = true;
        router.push(`/domain/${encodeURIComponent(finalURL)}`);
    } catch (error) {
        if (error.status) {
            messages.add({ text: "We currently don't have any comments that fit your search", color: 'error' })
            return;
        }
        messages.add({ text: error.message, color: 'error' })        
    } finally {
        loading.value = false
    }
}
watch(() => route.fullPath, (newpath) => {
    const segments = newpath.split('/');
    const domainIndex = segments.indexOf('domain');

    if (domainIndex !== -1 && segments.length > domainIndex + 1) {
        const scannedDomain = decodeURIComponent(segments.slice(domainIndex + 1).join('/'));

        if (navigatedFromScan.value) {
            navigatedFromScan.value = false;
            return;
        }
        const finalURL = sanitizeURL(scannedDomain);
        url.value = finalURL;
        scanAnalysis(finalURL);
    }
}, { immediate: true });


const scanUrl = () => {
    if (!form.value) return;
    const finalURL = sanitizeURL(url.value);
    url.value = finalURL
    scanAnalysis(finalURL)
}
</script>

<style scoped></style>