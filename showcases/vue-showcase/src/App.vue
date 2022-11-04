<script setup>
import { DBButton, DBIcon } from "../../../output/vue/vue3/src";
</script>

<template>
  <main>
    <h1>Vue</h1>
    <div style="display: flex; gap: 4px; align-items: center">
      <DBButton variant="primary">Test</DBButton>
      <DBButton text="Test" icon="account" />
      <DBIcon icon="account" />
    </div>
  </main>
</template>
