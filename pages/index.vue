<script setup>
</script>
<template>
  <div class="mx-auto text-center px-10">
    <div class="text-h3 pt-8 mb-8">{{ $t("hello") }}</div>
    <v-select
      label="Select"
      :items="[
        'zhTw',
        'en',
        'ja',
      ]"
      variant="outlined"
      v-model="$i18n.locale"
      class="d-flex justify-center"
    ></v-select>
  </div>
</template>
<style></style>