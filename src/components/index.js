import ImageView from './ImageView/index.vue'
import XtuSku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    // app.component('componentName', componentName)
    app.component('ImageView', ImageView)
    app.component('XtuSku', XtuSku)
  }
}