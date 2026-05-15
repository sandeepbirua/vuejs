<template>
  <!-- Main dashboard shell: sidebar + content area -->
  <div class="layout" :class="{ collapsed: isSidebarCollapsed }">
    <Sidebar
      :is-collapsed="isSidebarCollapsed"
      :is-mobile-open="isMobileSidebarOpen"
      @close-mobile="isMobileSidebarOpen = false"
    />

    <div class="main-area">
      <Header
        :is-sidebar-collapsed="isSidebarCollapsed"
        @toggle-sidebar="toggleSidebar"
        @toggle-mobile-sidebar="toggleMobileSidebar"
      />

      <!-- Dynamic page area controlled by Vue Router -->
      <main class="page-area">
        <router-view />
      </main>
    </div>

    <!-- Backdrop closes sidebar in mobile view -->
    <button
      v-if="isMobileSidebarOpen"
      class="sidebar-backdrop"
      type="button"
      aria-label="Close sidebar"
      @click="isMobileSidebarOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'

// Controls desktop collapse/expand state.
const isSidebarCollapsed = ref(false)

// Controls mobile off-canvas sidebar visibility.
const isMobileSidebarOpen = ref(false)

function toggleSidebar() {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

function toggleMobileSidebar() {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value
}
</script>
