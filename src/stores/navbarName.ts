import { defineStore } from 'pinia'

export const useNavbarName = defineStore({
  id: 'navbarName',
  state: () => ({
    navbarName: '',
  }),
  actions: {
    changeTitle(param: string) {
      this.navbarName = param
    },
  },
})
