<template>
  <div>
    <VitePwaManifest />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    PWA Installed: {{ $pwa?.isPWAInstalled }}
    <div
        v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh"
        class="pwa-toast"
        role="alert"
    >
      <div class="message">
          <span>
            Install PWA
          </span>
      </div>
      <button @click="$pwa.install()">
        Install
      </button>
      <button @click="$pwa.cancelInstall()">
        Cancel
      </button>
    </div>
  </div>
</template>
