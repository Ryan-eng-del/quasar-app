<template>
  <AuthorizationLayout
    :codeImg="data?.codeImg || '验证码'"
    name="login"
    pic="src/assets/img/back-authForm.png"
    :isLoading="isLoading"
  />
</template>

<script setup lang="ts">
import { useGetCaptcha } from '../../server/fetchUser/index';
import { onMounted } from 'vue';
import AuthorizationLayout from '../../layouts/AuthorizationLayout.vue';
const { mutateAsync: getCaptcha, data, isLoading } = useGetCaptcha();

onMounted(async () => {
  getCaptcha();
});
</script>
