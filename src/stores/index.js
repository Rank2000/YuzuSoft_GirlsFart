import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia() // 创建 pinia 实例
pinia.use(persist) // pinia 使用持久化插件

export default pinia

// 统一仓库出口

export * from './modules/user.js'
export * from './modules/story.js'
export * from './modules/girls.js'
