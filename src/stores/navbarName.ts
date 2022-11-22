import { defineStore } from 'pinia'

export const useNavbarName = defineStore({
  id: 'navbarName',
  state: () => ({
    navbarName: 'Dogs Breeds List',
  }),
  actions: {
    changeTitle(param: string) {
      this.navbarName = param
    },
  },
})
