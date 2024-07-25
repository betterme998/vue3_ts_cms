<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建部门' : '编辑部门'"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="formData.name" placeholder="请输入部门名称"></el-input>
          </el-form-item>
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="formData.leader" placeholder="请输入部门领导"></el-input>
          </el-form-item>
          <el-form-item label="选择部门" prop="parentId" style="width: 100%">
            <el-select v-model="formData.parentId" placeholder="请选择部门" style="width: 100%">
              <template v-for="item in entireDepartments" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
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

// 1.定义内部的属性
const dialogVisible = ref(false)
// 2.定义表单数据,设置<any>类型，因为formData[key] = itemData[key]行代码会
const formData = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})
// 控制编辑/新建时，密码框是否显示
const isNewRef = ref(true)
const editData = ref()

// 2.获取roles/deparments数据
const mainStore = useMainStore()
const systemStore = userSystemStore()
const { entireDepartments } = storeToRefs(mainStore)
console.log(entireDepartments)

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
      formData[key] = ''
    }
    editData.value = null
  }
}

// 3.点击了确定逻辑
function handleConfirmClick() {
  dialogVisible.value = false
  if (!isNewRef.value && editData.value) {
    // 编辑部门
    systemStore.editPageDataAction('department', editData.value.id, formData)
  } else {
    // 创建新部门
    systemStore.newPageDataAction('department', formData)
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
