<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item :label="item.label" :prop="item.name">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  :show-password="item.showPassword"
                />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <!-- 点击确定按钮有两种情况，新建，编辑 -->
          <el-button type="primary" @click="handleConfirmClick()"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import useMainStore from '@/store/main/main'
import userSystemStore from '@/store/main/system/system'
// 0.定义props
import type { IModalProps } from './type'

const props = defineProps<IModalProps>()

// 1.定义内部的属性
const dialogVisible = ref(false)
// 2.定义表单数据,设置<any>类型，因为formData[key] = itemData[key]行代码会
// 表单数据是通过配置项传递进来的，所以要进行for循环拿到表单数据，
const initialData: any = {}
for (const item of props.modalConfig.formItems) {
  initialData[item.prop] = item.initialValue ?? ''
}
// 再将表单数据设置到formData中
const formData = reactive<any>(initialData)
// 控制编辑/新建时，密码框是否显示
const isNewRef = ref(true)
const editData = ref()

// 2.获取roles/deparments数据
const systemStore = userSystemStore()

// 2.定义设置dialogVisible方法
// 控制新建/编辑弹窗，接受两个参数，isNew：是否新建，itemData：编辑数据
function setModalVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true
  isNewRef.value = isNew
  if (!isNew && itemData) {
    //编辑数据
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    //新建数据
    for (const key in formData) {
      // 初始化值
      const item = props.modalConfig.formItems.find((item) => item.prop === key)
      formData[key] = item ? item.initialValue : ''
    }
    editData.value = null
  }
}

// 3.点击了确定逻辑
function handleConfirmClick() {
  dialogVisible.value = false

  let infoData = formData
  // 如果存在传递的额外数据，则合并数据
  if (props.otherInfo) {
    infoData = { ...infoData, ...props.otherInfo }
  }
  if (!isNewRef.value && editData.value) {
    // 编辑部门
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, infoData)
  } else {
    // 创建新部门

    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
    console.log(infoData)
  }
}
// 暴露的属性和方法
defineExpose({ setModalVisible })
</script>

<style scoped lang="less">
.form {
  padding: 0 20px;
}
</style>
