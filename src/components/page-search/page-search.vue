<template>
  <div class="userSearch" v-if="isQuery">
    <!-- 1.输入搜索关键字的表单 -->
    <el-form :model="searchForm" ref="formRef" label-width="80px" size="large">
      <el-row :gutter="15">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <!-- 我们使用内置方法resetFields（）重置需要配合prop，不然他不知道要重置那个 -->
            <el-form-item :label="item.label" :prop="item.name">
              <template v-if="item.type === 'input'">
                <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>

    <!-- 2.重置和搜索的按钮 -->
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleQueryClick">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import usePermissions from '@/hooks/usePermissions'
import type { ElForm } from 'element-plus'
import { reactive, ref, toRef } from 'vue'

// 定义自定义事件/接受的属性
interface IProps {
  searchConfig: {
    pageName: string
    labelWidth?: string
    formItems: any[]
  }
}
const emit = defineEmits(['queryClick', 'resetClick'])
const props = defineProps<IProps>()

// 获取权限
const isQuery = usePermissions(toRef(props, 'searchConfig').value.pageName + ':query')

// 定义form表单数据
const initialForm: any = {}

for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const searchForm = reactive(initialForm)

// 1.重置操作
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
  // 内置方法，form中的数据全部重置
  formRef.value?.resetFields()

  // 2.将事件传递出去，发送网络请求
  emit('resetClick')
}
// 2.查询方法
// 先将方法发送出去，在父组件中调用，在通过父组件转到子组件中调用（查询方法在兄弟组件）
function handleQueryClick() {
  console.log(searchForm.createAt)

  emit('queryClick', searchForm)
}
</script>
<style lang="less" scoped>
.userSearch {
  background-color: #fff;
  padding: 20px;
  .el-form-item {
    padding: 20px;
    margin-bottom: 0;
  }
  .btns {
    text-align: right;
    padding: 0 50px 10px 0;
    .el-button {
      height: 36px;
    }
  }
}
</style>
