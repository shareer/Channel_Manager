import { channelData } from "@/mock/mock";
import { defineStore } from "pinia"

export const useChanneltore = defineStore('channel', {
  state: () => {
    return {
      channels:[],
      loading:false
    }
  },
   getters: {
    getChannelData: (state) => {
      return state.channels
    },
  },
  actions: {
    async fetchData() {
      this.loading = true;
      try {
        const results = channelData;
        this.channels = results;
      } catch (error) {
        console.error("Error fetching channels:", error);
      } finally {
        this.loading = false;
      }
    },  

    updateChannel(channels){
      this.channels = channels;
    }
  }
});
