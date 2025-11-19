<template>
  <div>
    <h2>Send Browser Notification</h2>

    <input v-model="title" type="text" placeholder="Notification title" />
    <textarea v-model="body" placeholder="Notification body"></textarea>

    <button @click="sendNotification">
      Send Notification
    </button>

    <p v-if="error">{{ error }}</p>
    <p v-if="success">{{ success }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const body = ref('')
const error = ref('')
const success = ref('')

function sendNotification() {
  error.value = ''
  success.value = ''

  if (!process.client) {
    error.value = 'Notifications only work in the browser.'
    return
  }

  // Request permission if not granted
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification()
      } else {
        error.value = 'Notification permission denied.'
      }
    })
  } else {
    showNotification()
  }
}

function showNotification() {
  new Notification(title.value || 'Notification', {
    body: body.value || '',
    icon: '/icon-192x192.png',
  })
  success.value = 'Notification sent!'
}
</script>
