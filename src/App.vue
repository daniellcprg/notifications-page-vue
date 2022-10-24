<script lang="ts" setup>
import { ref } from "vue";

import NotificationItem from "./components/NotificationItem.vue";
import notificationsData from "./data/notifications";

const notifications = ref(notificationsData);

const markAllAsRead = () => {
  notifications.value.forEach((notification) => {
    notification.read = true;
  });
};
</script>

<template>
  <div
    class="flex min-h-screen w-full font-plusJakartaSans bg-snow sm:pt-[64px] sm:justify-center"
  >
    <main
      class="flex flex-col w-full px-4 bg-white sm:px-8 sm:max-w-[730px] sm:max-h-[840px] sm:rounded-[15px] sm:overflow-y-auto"
    >
      <header
        class="flex justify-between w-full sticky top-0 py-6 z-10 bg-white sm:py-8"
      >
        <div class="flex items-center gap-2">
          <h1 class="text-[20px] font-extrabold text-veryDarkGreyBlue">
            Notifications
          </h1>
          <div class="pt-[2px] px-[12px] rounded-[6px] bg-blue">
            <span class="text-white font-extrabold">
              {{
                notifications.filter((notification) => !notification.read)
                  .length
              }}
            </span>
          </div>
        </div>
        <button
          @click="markAllAsRead"
          class="text-[14px] text-darkGreyBlue hover:text-blue transition-colors"
        >
          Mark all as read
        </button>
      </header>
      <NotificationItem
        v-for="(notification, index) in notifications"
        :key="index"
        :user="notification.user"
        :post="notification.post"
        :group="notification.group"
        :message="notification.message"
        :picture="notification.picture"
        :event="notification.event"
        :read="notification.read"
        :createdAt="notification.createdAt"
      />
    </main>
  </div>
</template>
