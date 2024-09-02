<template>
  <h1 class="text-2xl font-semibold mb-4">Login</h1>
  <form action="#" method="POST">
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-blue-500">
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button @click="onLogin" type="button"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <!-- class="hover:underline" -->
    <RouterLink :to="{ name: 'register' }" class="hover:underline">Login Here</RouterLink>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const onLogin = () => {
  localStorage.setItem("userId", "ABC-123")
  router.replace({
    name: 'home'
  })
}

</script>
