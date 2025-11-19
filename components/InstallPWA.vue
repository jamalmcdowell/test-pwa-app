/* global $pwa*/

<template>
  <ClientOnly>
    PWA Installed: {{ $pwa?.isPWAInstalled }}
    Show install: {{ $pwa?.showInstallPrompt }}
    Offline ready: {{ $pwa?.offlineReady }}
    Need refresh: {{ $pwa?.needRefresh }}
    <div v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh" class="pwa-toast" role="alert">
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
  </ClientOnly>
</template>