<template>
  <!-- Sidebar receives collapse/mobile state from MainLayout -->
  <aside class="sidebar" :class="{ collapsed: isCollapsed, 'mobile-open': isMobileOpen }">
    <div class="sidebar-brand">
      <div class="brand-mark">A</div>
      <div v-if="!isCollapsed">
        <h1>Admin Panel</h1>
        <p>Enterprise Suite</p>
      </div>
    </div>

    <!-- Dynamic menu generated from array, not hardcoded one-by-one -->
    <nav class="sidebar-nav">
      <router-link
        v-for="item in menuItems"
        :key="item.name"
        :to="item.path"
        class="menu-link"
        active-class="is-active"
        exact-active-class="is-active"
        :title="item.description || item.name"
        @click="handleLinkClick"
      >
        <span class="menu-icon" aria-hidden="true">{{ item.icon }}</span>

        <span v-if="!isCollapsed" class="menu-text-group">
          <span class="menu-label">{{ item.name }}</span>
          <small v-if="item.description" class="menu-description">{{ item.description }}</small>
        </span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { computed } from 'vue'

// Props let MainLayout control Sidebar behavior.
const props = defineProps({
  isCollapsed: {
    type: Boolean,
    default: false
  },
  isMobileOpen: {
    type: Boolean,
    default: false
  }
})

// Emit is used to close sidebar automatically after menu click in mobile view.
const emit = defineEmits(['close-mobile'])

// Sidebar menu source array with required fields and optional description.
const menuItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'DB',
    description: 'Overview and KPIs'
  },
  {
    name: 'Users',
    path: '/users',
    icon: 'US',
    description: 'User administration'
  },
  {
    name: 'Reports',
    path: '/reports',
    icon: 'RP',
    description: 'Analytics and exports'
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: 'ST',
    description: 'System configuration'
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: 'PR',
    description: 'Personal preferences'
  }
]

const isCollapsed = computed(() => props.isCollapsed)

function handleLinkClick() {
  if (props.isMobileOpen) {
    emit('close-mobile')
  }
}
</script>
