module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    workboxOptions: {   
      importWorkboxFrom: 'local',
    },
  },
}