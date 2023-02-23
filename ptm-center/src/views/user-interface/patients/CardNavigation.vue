<script setup>
import PatientsTableInfo from '@/views/user-interface/patients/PatientsTableInfo.vue'

const navigationTab = ref('ITEM ONE')
const tabItems = [
  'ITEM ONE',
  'ITEM TWO',
  'ITEM THREE',
]

// const tabContent =
</script>

<template>
  <VRow>
    <VCol
      md="12"
      cols="12"
    >
      <VCard>
        <VTabs v-model="navigationTab">
          <VTab
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            {{ item }}
          </VTab>
        </VTabs>

        <VDivider />

        <!-- tabs content -->
        <VWindow v-model="navigationTab">
          <VWindowItem
            v-for="item in tabItems"
            :key="item"
            :value="item"
          >
            <PatientsTableInfo />
<!--            TODO: pass data to table /> -->
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
  </VRow>
</template>
