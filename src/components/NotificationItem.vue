<script lang="ts" setup>
import moment from "moment";

defineProps<{
  user: { id: number; name: string; avatar: string };
  post?: { id: number; title: string };
  group?: { id: number; name: string };
  message?: { id: number; description: string };
  picture?: { id: number; file: string };
  event: string;
  read: boolean;
  createdAt: string;
}>();
</script>

<template>
  <div
    v-if="event === 'POST_REACTION'"
    class="flex gap-3 w-full p-4 rounded-[8px] mb-3"
    :class="{ 'bg-snow': !read }"
  >
    <img class="w-10 h-10" :src="'../assets/' + user.avatar" alt="Avatar" />
    <div class="text-[14px]">
      <div class="text-darkGreyBlue">
        <button
          class="font-extrabold text-veryDarkGreyBlue hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{ user.name }}
        </button>
        &nbsp; reacted to your recent post &nbsp;
        <a
          class="font-extrabold text-start hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{
            post && post.title.length > 60
              ? post.title.substring(0, 60) + "..."
              : post?.title
          }}
        </a>
        &nbsp;
        <div
          class="w-[8px] h-[8px] rounded-full bg-red inline-block relative bottom-[1px]"
          :class="{ hidden: read }"
        />
      </div>
      <span class="text-greyBlue">
        {{ moment(new Date(createdAt)).fromNow() }}
      </span>
    </div>
  </div>

  <div
    v-if="event === 'FOLLOW'"
    class="flex gap-3 w-full p-4 rounded-[8px] mb-3"
    :class="{ 'bg-snow': !read }"
  >
    <img class="w-10 h-10" :src="'../assets/' + user.avatar" alt="Avatar" />
    <div class="text-[14px]">
      <div class="text-darkGreyBlue">
        <button
          class="font-extrabold text-veryDarkGreyBlue hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{ user.name }}
        </button>
        &nbsp; followed you &nbsp;
        <div
          class="w-[8px] h-[8px] rounded-full bg-red inline-block relative bottom-[1px]"
          :class="{ hidden: read }"
        />
      </div>
      <span class="text-greyBlue">
        {{ moment(new Date(createdAt)).fromNow() }}
      </span>
    </div>
  </div>

  <div
    v-if="event === 'GROUP_JOINING'"
    class="flex gap-3 w-full p-4 rounded-[8px] mb-3"
    :class="{ 'bg-snow': !read }"
  >
    <img class="w-10 h-10" :src="'../assets/' + user.avatar" alt="Avatar" />
    <div class="text-[14px]">
      <div class="text-darkGreyBlue">
        <button
          class="font-extrabold text-veryDarkGreyBlue hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{ user.name }}
        </button>
        &nbsp; has joined your group &nbsp;
        <a
          class="font-extrabold text-start hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{
            group && group.name.length > 20
              ? group.name.substring(0, 20) + "..."
              : group?.name
          }}
        </a>
        &nbsp;
        <div
          class="w-[8px] h-[8px] rounded-full bg-red inline-block relative bottom-[1px]"
          :class="{ hidden: read }"
        />
      </div>
      <span class="text-greyBlue">
        {{ moment(new Date(createdAt)).fromNow() }}
      </span>
    </div>
  </div>

  <div
    v-if="event === 'MESSAGE_SENDING'"
    class="flex gap-3 w-full p-4 rounded-[8px] mb-3"
    :class="{ 'bg-snow': !read }"
  >
    <img class="w-10 h-10" :src="'../assets/' + user.avatar" alt="Avatar" />
    <div class="flex flex-col text-[14px]">
      <div class="text-darkGreyBlue">
        <button
          class="font-extrabold text-veryDarkGreyBlue hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{ user.name }}
        </button>
        &nbsp; sent you a private message &nbsp;
        <div
          class="w-[8px] h-[8px] rounded-full bg-red inline-block relative bottom-[1px]"
          :class="{ hidden: read }"
        />
      </div>
      <span class="text-greyBlue mb-3">
        {{ moment(new Date(createdAt)).fromNow() }}
      </span>
      <button
        class="p-4 border text-start text-[14px] text-darkGreyBlue border-veryLightGreyBlue rounded-[5px] hover:bg-lightGreyBlue transition-colors"
      >
        {{
          message && message.description.length > 150
            ? message.description.substring(0, 150) + "..."
            : message?.description
        }}
      </button>
    </div>
  </div>

  <div
    v-if="event === 'PICTURE_COMMENT'"
    class="flex justify-between w-full p-4 rounded-[8px] mb-3"
    :class="{ 'bg-snow': !read }"
  >
    <div class="flex gap-3">
      <img class="w-10 h-10" :src="'../assets/' + user.avatar" alt="Avatar" />
      <div class="text-[14px]">
        <div class="text-darkGreyBlue">
          <button
            class="font-extrabold text-veryDarkGreyBlue hover:text-blue hover:cursor-pointer transition-colors"
          >
            {{ user.name }}
          </button>
          &nbsp; commented on your picture &nbsp;
          <div
            class="w-[8px] h-[8px] rounded-full bg-red inline-block relative bottom-[1px]"
            :class="{ hidden: read }"
          />
        </div>
        <span class="text-greyBlue">
          {{ moment(new Date(createdAt)).fromNow() }}
        </span>
      </div>
    </div>
    <img
      class="w-10 h-10 hover:cursor-pointer"
      :src="'../assets/' + picture?.file"
      alt="Avatar"
    />
  </div>

  <div
    v-if="event === 'GROUP_LEAVING'"
    class="flex gap-3 w-full p-4 rounded-[8px] mb-3"
    :class="{ 'bg-snow': !read }"
  >
    <img class="w-10 h-10" :src="'../assets/' + user.avatar" alt="Avatar" />
    <div class="text-[14px]">
      <div class="text-darkGreyBlue">
        <button
          class="font-extrabold text-veryDarkGreyBlue hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{ user.name }}
        </button>
        &nbsp; left the group &nbsp;
        <a
          class="font-extrabold text-start hover:text-blue hover:cursor-pointer transition-colors"
        >
          {{
            group && group.name.length > 60
              ? group.name.substring(0, 60) + "..."
              : group?.name
          }}
        </a>
        &nbsp;
        <div
          class="w-[8px] h-[8px] rounded-full bg-red inline-block relative bottom-[1px]"
          :class="{ hidden: read }"
        />
      </div>
      <span class="text-greyBlue">
        {{ moment(new Date(createdAt)).fromNow() }}
      </span>
    </div>
  </div>
</template>
