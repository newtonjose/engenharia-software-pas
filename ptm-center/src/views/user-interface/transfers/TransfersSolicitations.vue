<script setup>
import americanBank from '@/assets/images/logos/american-bank.png'
import aws from '@/assets/images/logos/aws.png'
import citiBank from '@/assets/images/logos/citi-bank.png'
import digitalOcean from '@/assets/images/logos/digital-ocean.png'
import github from '@/assets/images/logos/github.png'
import google from '@/assets/images/logos/google.png'
import gumroad from '@/assets/images/logos/gumroad.png'
import mastercardLabel from '@/assets/images/logos/mastercard-label.png'
import slack from '@/assets/images/logos/slack.png'
import stripe from '@/assets/images/logos/stripe.png'
import avatar1 from '@/assets/images/avatars/avatar-1.png'
import avatar2 from '@/assets/images/avatars/avatar-2.png'
import avatar3 from '@/assets/images/avatars/avatar-3.png'
import avatar4 from '@/assets/images/avatars/avatar-4.png'

const deposits = [
  {
    title: 'Edwina Ebsworth',
    subtitle: 'Sell UI Kit',
    logo: avatar1,
  },
  {
    title: 'Korrie O\'Crevy',
    subtitle: 'Wallet deposit',
    logo: avatar2,
  },
  {
    title: 'Eileen Diehn',
    subtitle: 'iOS Application',
    logo: avatar3,
  },
  {
    title: 'Stella Ganderton',
    subtitle: 'iOS Application',
    logo: avatar4,
  },
]
const withdraws = [
  {
    title: 'Edwina Ebsworth',
    subtitle: 'Paypal deposit',
    logo: avatar1,
  },
  {
    title: 'Korrie O\'Crevy',
    subtitle: 'Security & compliance',
    logo: avatar2,
  },
  {
    title: 'Eileen Diehn',
    subtitle: 'Debit card deposit',
    logo: avatar3,
  },
  {
    title: 'Stella Ganderton',
    subtitle: 'Debit card deposit',
    logo: avatar4,
  },
]
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="6"
      >
        <VCardItem>
          <VCardTitle>Origem</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="deposit in deposits"
              :key="deposit.logo"
            >
              <template #prepend>
                <VAvatar
                  start
                  rounded
                >
                  <VImg
                    :height="29"
                    :width="28"
                    :src="deposit.logo"
                  />
                </VAvatar>
              </template>

              <VListItemTitle class="text-sm font-weight-semibold mb-1">
                {{ deposit.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-xs">
                {{ deposit.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction class="text-success font-weight-semibold">
                  {{ deposit.amount }}
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>

      <VDivider
        :vertical="$vuetify.display.mdAndUp"
        :inset="$vuetify.display.mdAndUp"
      />

      <VCol
        cols="12"
        md="6"
      >
        <VCardItem>
          <VCardTitle>Destino</VCardTitle>

          <template #append>
            <a
              href="javascript:void(0)"
              class="text-sm font-weight-medium"
            >View All</a>
          </template>
        </VCardItem>

        <VCardText>
          <VList class="card-list">
            <VListItem
              v-for="withdraw in withdraws"
              :key="withdraw.logo"
            >
              <template #prepend>
                <VAvatar
                  start
                  rounded
                >
                  <VImg
                    :height="29"
                    :width="28"
                    :src="withdraw.logo"
                  />
                </VAvatar>
              </template>

              <VListItemTitle class="text-sm font-weight-semibold mb-1">
                {{ withdraw.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-xs">
                {{ withdraw.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction class="text-error font-weight-semibold">
                  {{ withdraw.amount }}
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.5rem;
}
</style>
