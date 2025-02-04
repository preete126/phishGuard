<template>
    <v-main class="bg pa-3">
        <div class="d-flex ga-1 ga-sm-3 align-center">
            <h1 class="text-h4 text-sm-h2 font-weight-black">PhishGuard</h1>
            <v-icon class="text-h4 text-sm-h2">mdi-shield-check</v-icon>
        </div>
        <p class="mx-auto mb-5 text-sm-h6 w-sm-75 text-center">Stay Safe Online – Instantly Detect Malicious and Phishing
            Links</p>
        <v-card class="py-5 px-2 pa-sm-7 w-100 w-md-75">
            <!-- <v-card-item> -->
                <v-card-title class="text-center mb-2 text-wrap text-subtitle-1 text-sm-h6">Check If a URL is Safe or a Phishing
                    Trap</v-card-title>
                <v-form v-model="form" @submit.prevent="scanUrl" class="d-flex align-center mb-4" style="height: 3em;">
                    <v-text-field v-model="url" :rules="[urlValidation]" class="h-100"
                        style='border: 0.3px solid #b4c3d9 !important;' placeholder="url.com"></v-text-field>
                    <v-btn type="submit" :disabled="!isFormValid" class="h-100 rounded-0 bg-primary">Scan</v-btn>
                </v-form>
            <!-- </v-card-item> -->
        </v-card>
    </v-main>

    <v-main class=" w-100 layout pa-5 mx-auto mb-15">
        <h2 class="text-center mb-10 mb-sm-15 text-h6 text-sm-h4 font-weight-black">Common Types of Dangerous Links You
            Should Avoid</h2>
        <v-row class="gap">
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4" >mdi-web</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Deceptive Websites</p>
                <p class="mt-5">These are fake websites designed to look like legitimate ones. They trick users into
                    entering sensitive information like passwords and credit card details. Always verify the domain name
                    before entering any credentials.</p>
            </v-col>
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4" >mdi-link-variant-remove</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Suspicious Shortened Links</p>
                <p class="mt-5">URL shorteners hide the real destination of a link, making it easy for cybercriminals to
                    disguise malicious sites. Use URL preview tools to check where the link leads before clicking.</p>
            </v-col>
        </v-row>
        <v-row class="gap my-10">
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4">mdi-login-variant</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Fake Login Pages</p>
                <p class="mt-5">These pages mimic real websites and ask for login credentials. Once you enter them,
                    hackers gain access to your accounts. Always check the website’s URL and use two-factor
                    authentication for extra security.</p>
            </v-col>
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4">mdi-bug-outline</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Malware-Infested Links</p>
                <p class="mt-5">These links lead to downloads that install viruses, spyware, or ransomware on your
                    device. Avoid clicking on links from unknown sources, and ensure your antivirus software is
                    up-to-date.</p>
            </v-col>
        </v-row>
        <v-row class="gap my-10">
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4" >mdi-file-alert-outline</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Phishing Links</p>
                <p class="mt-5">Phishing links aim to steal your personal and financial information. These links are
                    often
                    disguised as legitimate emails or websites and ask for sensitive data. Always verify the source and
                    never provide personal information through untrusted links.</p>
            </v-col>
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4" >mdi-virus</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Virus and Trojan Links</p>
                <p class="mt-5">These links often lead to downloads that infect your device with malicious software like
                    viruses or trojans. Be cautious when clicking links from unknown sources, especially those that
                    prompt
                    you to download files.</p>
            </v-col>
        </v-row>
    </v-main>
    <v-main class="mt-0 mt-sm-15 bg-surface pa-3 pa-sm-5 text-justify pt-15">
        <div class="w-100 layout mx-auto mb-15">
            <h1 class="text-center text-h6 text-sm-h4 font-weight-black mb-5 mb-sm-10">How to Stay One Step Ahead of
                Cyber Threats</h1>
            <ul class="custom-bullets">
                <li>
                    <span>🔹</span>
                    <span><strong>Use PhishGuard’s URL Detector Before Clicking:</strong> Never trust a link blindly!
                        Cybercriminals often disguise malicious links to look like legitimate ones, making it difficult
                        to spot phishing attempts. Before clicking on any link—especially those sent via email, SMS, or
                        social media—take a moment to verify its authenticity. Phishing links often mimic trusted
                        websites, tricking users into providing sensitive information. By using our PhishGuard URL
                        Detector, you can instantly analyze the link’s safety and determine whether it’s a phishing trap
                        or a legitimate website. Always double-check shortened URLs, as they can hide dangerous
                        destinations. When in doubt, verify directly from the official website rather than clicking on a
                        suspicious link.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Look for HTTPS Encryption:</strong> Secure websites use <strong>"HTTPS"</strong>
                        instead of <strong>"HTTP"</strong> at the beginning of their URL. The additional
                        <strong>"S"</strong> stands for "Secure" and indicates that the website encrypts your data
                        during transmission. Websites without HTTPS may expose your personal information, making it
                        vulnerable to interception by hackers. However, it’s important to note that <strong>HTTPS alone
                            doesn’t guarantee safety—</strong> some phishing websites also use HTTPS to appear
                        legitimate. Always verify the domain name carefully, looking for small misspellings (e.g.,
                        <strong>faceboook.com</strong> instead of <strong>facebook.com</strong>) before entering any
                        credentials.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Enable Multi-Factor Authentication (MFA):</strong> Even if hackers manage to steal
                        your login credentials, enabling Multi-Factor Authentication <strong>(MFA)</strong> provides an
                        additional layer of security to prevent unauthorized access. MFA requires a second form of
                        verification, <strong>such as a one-time code sent to your phone, a fingerprint scan, or an
                            authentication app</strong>. This means that even if your password is compromised,
                        cybercriminals <strong>still won’t be able to access your account</strong> without the second
                        verification step. Enabling MFA is one of the most effective ways to protect your email,
                        banking, and social media accounts from unauthorized access.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Beware of Urgent Messages:</strong> Cybercriminals often use <strong>scare tactics and
                            urgency</strong> to pressure victims into making quick decisions without thinking. These
                        messages may claim that <strong>your bank account has been locked, your email password needs
                            urgent resetting, or your social media account is about to be deleted</strong>. Scammers
                        rely on fear and panic to manipulate users into clicking malicious links. If you receive an
                        urgent message asking you to take immediate action, <strong>pause and verify</strong> before
                        clicking any links. Always go to the official website and contact customer support directly to
                        confirm whether the alert is genuine. Never trust unexpected messages from unknown senders,
                        especially if they request personal or financial information.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Keep Your Software Updated:</strong> Keeping your <strong>web browser, antivirus
                            software, and operating system up to date</strong> is crucial for protecting against cyber
                        threats. Software updates often include security patches that fix vulnerabilities
                        <strong>exploited by hackers</strong> to install malware, steal data, or take control of your
                        device. <strong>Delaying updates leaves your system exposed to cyberattacks</strong>. Always
                        enable <strong>automatic updates</strong> for your operating system, browsers, and security
                        software to ensure you’re protected against the latest threats. Additionally, be cautious when
                        downloading software—only install apps from official sources like the <strong>Apple App Store,
                            Google Play Store, or the software vendor’s official website.</strong></span>
                </li>
                <div class="mt-5 mb-15">
                    By following these guidelines and using PhishGuard’s URL Detector, you can minimize the risk of
                    falling victim to phishing attacks and other cyber threats.
                </div>
            </ul>
        </div>
        <div class="d-flex w-100 layout mx-auto align-center justify-space-between ga-5 mt-15 mb-5">
            <hr class="w-25">
            <small class="text-center">© PhishGuard. Your Security, Our Priority.</small>
            <hr class="w-25">
        </div>
    </v-main>
</template>

<script setup>
import axios from 'axios';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const form = ref(false)
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

const scanUrl = async() => {
    console.log(form.value);

    if (!form.value) return;
    try {
        const response = await axios.post('https://alaminapi.pythonanywhere.com/Get_Data', {url: url.value}, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
        })
        console.log(response.data);
        
    } catch (error) {
        console.log(error);
        
    }
}
</script>

<style scoped>
.bg {
    background: linear-gradient(180deg, #0A192F 65%, white 0%);
    color: white;
    height: 60vh !important;
    display: flex;
    gap: 1em;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.v-card {
    box-shadow: 0px 0px 20px #b4c3d9;
}

.v-card:hover {
    transform: scale(1.02);
    transition: 0.3s;
}

.gap {
    row-gap: 20px !important;
    column-gap: 20px !important;
}

.custom-bullets {
    list-style: none;
}

.custom-bullets li {
    display: flex;
    align-items: start;
    gap: 10px;
    padding: 10px 0;
}

@media (min-width:760px) {
    .layout {
        width: 85% !important;
    }
}

@media (max-width:540px) {
    .bg {
        background: linear-gradient(180deg, #0A192F 70%, white 5%);
    }
    .v-card {
    box-shadow: 0px 0px 5px #b4c3d9;
}
}

@media (max-width:380px) {
    .bg {
        height: 70vh !important;
    }
}
</style>