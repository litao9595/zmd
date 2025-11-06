<template>
  <a-config-provider :theme="theme">
    <div id="app">
      <a-layout style="min-height: 100vh">
        <a-layout-header style="background: #001529; padding: 0 50px">
          <div style="display: flex; align-items: center; height: 100%">
            <div style="color: white; font-size: 20px; font-weight: bold">
              <rocket-outlined style="margin-right: 10px" />
              Electron + Vue3 + Ant Design
            </div>
          </div>
        </a-layout-header>
        
        <a-layout-content style="padding: 50px">
          <div style="background: #fff; padding: 24px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1)">
            <a-space direction="vertical" :size="20" style="width: 100%">
              <div>
                <a-typography-title :level="2">
                  <smile-outlined style="margin-right: 10px" />
                  欢迎使用 Electron + Vue3 + Ant Design
                </a-typography-title>
                <a-typography-paragraph>
                  这是一个集成了 Vue3 和 Ant Design 的 Electron 桌面应用模板。
                </a-typography-paragraph>
              </div>

              <a-card title="系统信息" :bordered="false">
                <a-descriptions :column="1">
                  <a-descriptions-item label="Node.js 版本">
                    {{ versions.node }}
                  </a-descriptions-item>
                  <a-descriptions-item label="Chrome 版本">
                    {{ versions.chrome }}
                  </a-descriptions-item>
                  <a-descriptions-item label="Electron 版本">
                    {{ versions.electron }}
                  </a-descriptions-item>
                  <a-descriptions-item label="Vue 版本">
                    {{ vueVersion }}
                  </a-descriptions-item>
                </a-descriptions>
              </a-card>

              <a-card title="快速开始" :bordered="false">
                <a-space>
                  <a-button type="primary" @click="handlePrimaryClick">
                    <template #icon><check-circle-outlined /></template>
                    主要按钮
                  </a-button>
                  <a-button @click="handleDefaultClick">
                    默认按钮
                  </a-button>
                  <a-button type="dashed" @click="showModal">
                    <template #icon><info-circle-outlined /></template>
                    打开对话框
                  </a-button>
                  <a-button type="link">链接按钮</a-button>
                </a-space>
              </a-card>

              <a-card title="示例表单" :bordered="false">
                <a-form
                  :model="formState"
                  :label-col="{ span: 4 }"
                  :wrapper-col="{ span: 14 }"
                >
                  <a-form-item label="用户名">
                    <a-input v-model:value="formState.username" placeholder="请输入用户名" />
                  </a-form-item>
                  <a-form-item label="选择器">
                    <a-select v-model:value="formState.select" placeholder="请选择">
                      <a-select-option value="option1">选项1</a-select-option>
                      <a-select-option value="option2">选项2</a-select-option>
                      <a-select-option value="option3">选项3</a-select-option>
                    </a-select>
                  </a-form-item>
                  <a-form-item label="开关">
                    <a-switch v-model:checked="formState.switch" />
                  </a-form-item>
                  <a-form-item :wrapper-col="{ offset: 4, span: 14 }">
                    <a-button type="primary" @click="handleSubmit">提交</a-button>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-space>
          </div>
        </a-layout-content>

        <a-layout-footer style="text-align: center">
          Electron + Vue3 + Ant Design ©{{ new Date().getFullYear() }}
        </a-layout-footer>
      </a-layout>

      <!-- 对话框 -->
      <a-modal v-model:open="modalVisible" title="示例对话框" @ok="handleOk">
        <p>这是一个 Ant Design 的对话框示例</p>
        <p>您可以在这里放置任何内容</p>
      </a-modal>
    </div>
  </a-config-provider>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { 
  RocketOutlined, 
  SmileOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons-vue'

// 版本信息 - 兼容浏览器和 Electron 环境
const versions = ref({
  node: window.electronAPI?.versions?.node || 'N/A (浏览器模式)',
  chrome: window.electronAPI?.versions?.chrome || 'N/A (浏览器模式)',
  electron: window.electronAPI?.versions?.electron || 'N/A (浏览器模式)'
})

const vueVersion = ref('3.x')

// 主题配置
const theme = {
  token: {
    colorPrimary: '#1890ff',
  },
}

// 表单状态
const formState = reactive({
  username: '',
  select: undefined,
  switch: false,
})

// 对话框状态
const modalVisible = ref(false)

// 事件处理
const handlePrimaryClick = () => {
  message.success('点击了主要按钮！')
}

const handleDefaultClick = () => {
  message.info('点击了默认按钮！')
}

const showModal = () => {
  modalVisible.value = true
}

const handleOk = () => {
  modalVisible.value = false
  message.success('对话框已关闭')
}

const handleSubmit = () => {
  console.log('表单数据:', formState)
  message.success('表单提交成功！')
}
</script>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>


