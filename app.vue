<script setup>
const pwa = useNuxtApp().$pwa
if (pwa) {
  console.log(pwa)
}

pwa.showInstallPrompt = true

</script>

<template>
  <div>
    <InstallPWA />
    <VitePwaManifest />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
