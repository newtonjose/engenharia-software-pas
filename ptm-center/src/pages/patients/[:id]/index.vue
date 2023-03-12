<script setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'

import { onMounted } from 'vue'
import { checkAR, onButtonClickedAr } from '@/plugins/webxr/session-ar'
import { checkVR, onButtonClickedVr } from '@/plugins/webxr/session-vr'

let isSessionSupportedAr = false
let isSessionSupportedVr = false

function enterToSceneAr() {
  if (isSessionSupportedAr) {
    onButtonClickedAr()
  }
}

function enterToSceneVr() {
  if (isSessionSupportedVr) {
    onButtonClickedVr()
  }
}


onMounted(() => {
  isSessionSupportedAr = checkAR()
  isSessionSupportedVr = checkVR()
})
</script>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
}
</script>

<template>
  <div>
    <p class="text-2xl mb-6">
      Prontuário
    </p>
  </div>
  <VRow>
    <VCol
      cols="12"
      sm="6"
      md="6"
    >
      <VCard>
        <div class="d-flex flex-column-reverse flex-md-row">
          <div>
            <VCardItem>
              <VCardTitle>Edwina Ebsworth</VCardTitle>
              <VCardSubtitle class="text-caption pa-0">
                Goiânia, GO
              </VCardSubtitle>
            </VCardItem>

            <!--            <VCardText class="d-flex align-center flex-wrap body-1"> -->
            <!--              <span>5 Star | 98 reviews</span> -->
            <!--            </VCardText> -->

            <VCardText>
              Before there was a United States of America, there were coffee houses, because how are you supposed to
              build.
            </VCardText>

            <VCardActions>
              <VBtn
                id="vr-button"
                color="primary"
                @click="enterToSceneVr"
              />
              <RouterLink
                :to="{ name: 'patients-:id-avatar', params: {id: $route.params.id}}"
                target="_blank"
              >
                <VBtn
                  id="ar-button"
                  color="primary"
                />
              </RouterLink>
            </VCardActions>
          </div>

          <div class="ma-auto pa-5">
            <VImg
              :width="176"
              :src="avatar1"
              class="rounded"
            />
          </div>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
