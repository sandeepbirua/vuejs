<template>
  <header class="topbar">
    <div class="topbar-left">
      <!-- Mobile toggle only appears on small screens -->
      <button
        class="icon-btn mobile-only"
        type="button"
        aria-label="Toggle mobile sidebar"
        @click="$emit('toggle-mobile-sidebar')"
      >
        ?
      </button>

      <div>
        <p class="topbar-label">Welcome Back</p>
        <h2 class="topbar-title">Operations Dashboard</h2>
      </div>
    </div>

    <div class="topbar-actions">
      <!-- Desktop collapse/expand toggle -->
      <button class="ghost-btn" type="button" @click="$emit('toggle-sidebar')">
        {{ isSidebarCollapsed ? 'Expand Menu' : 'Collapse Menu' }}
      </button>
      <button class="ghost-btn" type="button">Notifications</button>
      <button class="primary-btn" type="button">New Report</button>
    </div>
  </header>
</template>

<script setup>
defineProps({
  isSidebarCollapsed: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-sidebar', 'toggle-mobile-sidebar'])
</script>
