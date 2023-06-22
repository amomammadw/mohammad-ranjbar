<template>
  <header class="bg-gray-100 py-4 sticky top-0 rounded-b-lg">
    <nav class="container flex items-center justify-between">
      <Icon name="mdi:account-circle" size="3rem" class="text-blue-700" />

      <LayoutHeaderList class="lg:flex hidden" :items="headerLinks" />

      <div class="lg:block hidden space-x-3">
        <InputsButton variant="outline" to="/auth/login">Login</InputsButton>
        <InputsButton variant="flat" to="/auth/signup">Signup</InputsButton>
      </div>

      <button @click="showMenu = !showMenu" class="lg:hidden block">
        <Icon
          :name="
            showMenu ? 'mdi:close' : 'heroicons:bars-3-bottom-right-20-solid'
          "
          size="2rem"
        />
      </button>
    </nav>
    <TransitionExpand>
      <div v-if="showMenu">
        <LayoutHeaderList class="lg:hidden flex mt-3" :items="headerLinks" />
      </div>
    </TransitionExpand>
  </header>
</template>

<script setup lang="ts">
const headerLinks: ILinkItem[] = [
  {
    link: "/",
    text: "Home",
    icon: "uil:home-alt",
  },
  {
    link: "/contact",
    text: "Contact",
    icon: "uil:phone",
  },
  {
    link: "/about",
    text: "About",
    icon: "mdi:account-group-outline",
  },
];

const showMenu = ref(false);
</script>
