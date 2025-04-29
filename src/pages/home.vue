<template>
    <v-main class="bg pa-3">
        <div class="d-flex ga-1 ga-sm-3 align-center">
            <h1 class="text-h4 text-sm-h2 font-weight-black">PhishGuard</h1>
            <v-icon class="text-h4 text-sm-h2">mdi-shield-check</v-icon>
        </div>
        <p class="mx-auto mb-5 text-sm-h6 w-sm-75 text-center">Stay Safe Online – Instantly Detect Malicious and
            Phishing
            Links</p>
        <v-card class="py-5 px-2 pa-sm-7 w-100 w-md-75">
            <!-- <v-card-item> -->
            <v-card-title class="text-center mb-2 text-wrap text-subtitle-1 text-sm-h6">Check If a URL is Safe or a
                Phishing
                Trap</v-card-title>
            <search-bar></search-bar>
            <!-- </v-card-item> -->
        </v-card>
    </v-main>

    <v-main class=" w-100 layout pa-5 mx-auto mb-15">
        <h2 class="text-center mb-10 mb-sm-15 text-h6 text-sm-h4 font-weight-black">Common Types of Dangerous Links You
            Should Avoid</h2>
        <v-row class="gap">
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4">mdi-web</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Deceptive Websites</p>
                <p class="mt-5">These are fake websites designed to look like legitimate ones. They trick users into
                    entering sensitive information like passwords and credit card details. Always verify the domain name
                    before entering any credentials.</p>
            </v-col>
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4">mdi-link-variant-remove</v-icon>
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
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4">mdi-file-alert-outline</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Phishing Links</p>
                <p class="mt-5">Phishing links aim to steal your personal and financial information. These links are
                    often
                    disguised as legitimate emails or websites and ask for sensitive data. Always verify the source and
                    never provide personal information through untrusted links.</p>
            </v-col>
            <v-col cols="12" sm="" class="bg-surface pa-3 pa-sm-5 text-justify rounded-lg">
                <v-icon color="red-lighten-3" class="text-h5 text-sm-h4">mdi-virus</v-icon>
                <p class="mt-5 font-weight-black text-subtitle-1 text-sm-h6">Virus and Trojan Links</p>
                <p class="mt-5">These links often lead to downloads that infect your device with malicious software like
                    viruses or trojans. Be cautious when clicking links from unknown sources, especially those that
                    prompt
                    you to download files.</p>
            </v-col>
        </v-row>
    </v-main>
    <v-main class="mt-0 mt-sm-15 bg-surface pa-3 pa-sm-5 text-justify pt-15">
        <div class="w-100 layout mx-auto mb-8">
            <h1 class="text-center text-h6 text-sm-h4 font-weight-black mb-5 mb-sm-10">How to Stay One Step Ahead of
                Cyber Threats</h1>
            <ul class="custom-bullets">
                <li>
                    <span>🔹</span>
                    <span><strong>Use PhishGuard’s URL Detector Before Clicking:</strong> Don’t trust links blindly.
                        Phishing links often look legit but are dangerous. Use PhishGuard to check if a link is safe
                        before clicking, especially from emails or social media.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Look for HTTPS Encryption:</strong> Secure sites use <strong>HTTPS</strong>. The "S"
                        means your data is encrypted. But HTTPS alone isn’t enough—check for misspelled domains like
                        <strong>faceboook.com</strong> before entering info.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Enable Multi-Factor Authentication (MFA):</strong> MFA adds extra security. Even if
                        your password is stolen, a second verification step helps block unauthorized access to your
                        accounts.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Beware of Urgent Messages:</strong> Scammers use urgency to trick you. Don’t
                        rush—verify claims like “account locked” by visiting the official site or contacting support
                        directly.</span>
                </li>
                <li>
                    <span>🔹</span>
                    <span><strong>Keep Your Software Updated:</strong> Updates fix security holes hackers exploit.
                        Always enable auto-updates and download apps only from trusted sources like app stores or
                        official websites.</span>
                </li>
            </ul>

        </div>
        <div class="w-100 layout mx-auto mb-15">
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
        <div class="d-flex w-100 layout mx-auto align-center justify-space-between ga-5 mt-15 mb-5">
            <hr class="w-25">
            <small class="text-center">© PhishGuard. Your Security, Our Priority.</small>
            <hr class="w-25">
        </div>
    </v-main>
</template>

<script setup>
import searchBar from '@/components/searchBar.vue';
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