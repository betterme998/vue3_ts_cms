<template>
  <!-- 用户内容 -->
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button v-if="isCreate" type="primary" @click="handleNewUserClick">
        {{ contentConfig?.header?.brnTitle ?? '新建数据' }}
      </el-button>
    </div>
    <div class="table">
      <!-- 表格,绑定是否展开列 -->
      <el-table :data="pageList" style="width: 100%" v-bind="contentConfig.childrenTree">
        <template v-for="(item, index) in contentConfig.propsList" :key="index">
          <!-- timer，handler都是比较公共的封装，所以不用定制直接写 -->
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <el-button
                  v-if="isUpdate"
                  size="small"
                  icon="Edit"
                  type="primary"
                  text
                  @click="handleEditBtnClick(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  v-if="isDelete"
                  size="small"
                  icon="Delete"
                  type="danger"
                  text
                  @click="handleDeleteBtnClick(scope.row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </template>
          <!-- 定制/高级封装/抽取 这部分配置项被注释了，需要可以打开 -->
          <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <!-- 传递一个作用域对象 -->
              <template #default="scope">
                <!-- 将作用域对象传递给插槽，让插槽可以获取作用域对象，从而获取到作用域对象中的数据 -->
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column show-overflow-tooltip align="center" v-bind="item" />
          </template>
        </template>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue'
import { storeToRefs } from 'pinia'
import userSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format'
import usePermissions from '@/hooks/usePermissions'

// 是否本地登录
import useLoginStore from '@/store/login/login'
const loginStore = useLoginStore()

interface IProps {
  contentConfig: {
    pageName: string
    header?: {
      title?: string
      brnTitle?: string
    }
    propsList: any[]
    childrenTree?: any[]
    num?: string
  }
}
const props = defineProps<IProps>()

// 定义事件
const emit = defineEmits(['newClick', 'editClick'])

// 0.获取是否有对应的增删改查的权限
// hooks函数用于判断是否有对应的增删改查的权限，参数是动态的，通过每个页面的配置传递过来的pageName控制，
const isCreate = usePermissions(toRef(props, 'contentConfig').value.pageName + ':create')
const isDelete = usePermissions(toRef(props, 'contentConfig').value.pageName + ':delete')
const isUpdate = usePermissions(toRef(props, 'contentConfig').value.pageName + ':update')
const isQuery = usePermissions(toRef(props, 'contentConfig').value.pageName + ':query')

// 1.发起active，请求usersList的数据
const systemStore = userSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchPageListData()

// 2.获取pageList数据，进行展示
const { pageList, pageTotalCount } = storeToRefs(systemStore)
// 3.页码相关逻辑
function handleSizeChange() {
  fetchPageListData()
}
function handleCurrentChange() {
  fetchPageListData()
}

// 4.定义函数发送网络请求
function fetchPageListData(formDate: any = {}) {
  // 如果没有查询权限，则直接return
  if (!isQuery) return
  // 1.获取offset/size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset }

  // 发起网络请求
  // 2.获取查询条件
  const queryInfo = { ...pageInfo, ...formDate }
  console.log(queryInfo, 'content')
  if (loginStore.locality) {
    // 本地登录
    systemStore.postPageListAction2(props.contentConfig.num)
  } else {
    // 密码登录,有网络请求
    systemStore.postPageListAction(props.contentConfig.pageName, queryInfo)
  }
}

// 5.删除/编辑/新建的操作
function handleDeleteBtnClick(id: number) {
  //删除
  systemStore.deletePageByIdAction(props.contentConfig.pageName, id)
}
function handleEditBtnClick(itemData: any) {
  //编辑
  emit('editClick', itemData)
}
function handleNewUserClick() {
  //新建
  // 修改兄弟组件，先发出事情给父组件，再由父组件进行修改
  emit('newClick')
}

// 6.监听systemStore中的active被执行
// $onAction 监听store中所有的action执行,官网有
systemStore.$onAction(({ name, after }) => {
  // 当页面进行增删改时，会从新请求表单数据，（回到分页1）
  // 所以对从增删改进行监听，当active执行时，将页码重置为1
  // 但是要保证执行成功后，再重置页码

  // after 当active执行成功后，执行回调函数
  after(() => {
    if (
      name === 'deletePageByIdAction' ||
      name === 'editPageDataAction' ||
      name === 'newPageDataAction'
    ) {
      currentPage.value = 1
    }
  })
})

defineExpose({ fetchPageListData })
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
  .title {
    font-size: 22px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  :deep(.el-button) {
    margin-left: 0;
    padding: 5px 8px;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
