<template>
  <div class="user-card-main-container">
    <div class="user-card-background">
      <div class="user-card-left-container">
        <img class="user-card-profile-image"
             :src="profileImage"
             alt="Profile image"
        >
      </div>
      <div class="user-card-right-container">
        <div class="user-card-right-sub-container">
          <div class="user-card-title">
            {{ displayName }}
          </div>
          <div class="user-card-sub-title">
            <span>{{ role }}</span>
          </div>
          <div class="user-card-sub-text">
            Dernière connexion: <b>{{ displayLastConnection }}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserItem',
  props: {
    firstname: {
      type: String,
      default() {
        return 'John'
      }
    },
    lastname: {
      type: String,
      default() {
        return 'Doe'
      }
    },
    role: {
      type: String,
      default() {
        return 'Unknown'
      }
    },
    lastConnection: {
      type: Date,
      default() {
        return new Date();
      }
    },
    profileImage: {
      type: String,
      default() {
        return 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
    }
  },
  data() {
    return {
      MONTH_NAMES: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    }
  },
  computed: {
    displayName(): string {
      const lastname = this.lastname.substring(0, 1) + '.';
      return `${this.firstname} ${lastname}`;
    },
    displayLastConnection(): string {
      return this.timeAgo(this.lastConnection);
    }
  },
  methods: {
    getFormattedDate(date: Date, preformattedDate: boolean|string = false, hideYear = false) {
      const day = date.getDate();
      const month = this.MONTH_NAMES[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours();
      let minutes = date.getMinutes() + '';

      if (date.getMinutes() < 10) {
        // Adding leading zero to minutes
        minutes = `0${ minutes }`;
      }

      if (preformattedDate) {
        // Today at 10:20
        // Yesterday at 10:20
        return `${ preformattedDate } at ${ hours }:${ minutes }`;
      }

      if (hideYear) {
        // 10. January at 10:20
        return `${ day }. ${ month } at ${ hours }:${ minutes }`;
      }

      // 10. January 2017. at 10:20
      return `${ day }. ${ month } ${ year }. at ${ hours }:${ minutes }`;
    },
    timeAgo(dateParam: Date): string {
      if (!dateParam) {
        return "Unknown time";
      }

      const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
      const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
      const today = new Date();
      const yesterday = new Date(today.getTime() - DAY_IN_MS);
      const seconds = Math.round((today.getTime() - date.getTime()) / 1000);
      const minutes = Math.round(seconds / 60);
      const isToday = today.toDateString() === date.toDateString();
      const isYesterday = yesterday.toDateString() === date.toDateString();
      const isThisYear = today.getFullYear() === date.getFullYear();

      if (seconds < 5) {
        return 'now';
      } else if (seconds < 60) {
        return `${ seconds } seconds ago`;
      } else if (seconds < 90) {
        return 'about a minute ago';
      } else if (minutes < 60) {
        return `${ minutes } minutes ago`;
      } else if (isToday) {
        return this.getFormattedDate(date, 'Today'); // Today at 10:20
      } else if (isYesterday) {
        return this.getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
      } else if (isThisYear) {
        return this.getFormattedDate(date, false, true); // 10. January at 10:20
      }
      return this.getFormattedDate(date); // 10. January 2017. at 10:20
    }
  }
});
</script>

<style lang="scss" scoped>
.user-card-main-container {
  @apply w-1/3 mx-4 my-2;
}
.user-card-background {
  @apply rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased;
}
.user-card-left-container {
  @apply md:w-1/3 w-full;
}
.user-card-profile-image {
  @apply rounded-lg shadow-lg antialiased;
}
.user-card-right-container {
  @apply md:w-2/3 w-full px-3 flex flex-row flex-wrap;
}
.user-card-right-sub-container {
  @apply w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0;
}
.user-card-title {
  @apply text-2xl text-white leading-tight;
}
.user-card-sub-title {
  @apply font-normal text-gray-300 hover:text-gray-400 cursor-pointer;
}
.user-card-sub-title span {
  @apply border-b border-dashed border-gray-500 pb-1;
}
.user-card-sub-text {
  @apply text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0;
}
</style>