import { ref } from 'vue'
import type PageModal from '@/components/page-modal/page-modal.vue'
type EditFnType = (data: any) => void
// editCallback参数是为了让传过来的值传出去
function usePageModal(editCallback?: EditFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewClick() {
    modalRef.value?.setModalVisible()
  }
  function handleEditClick(itemData: any) {
    modalRef.value?.setModalVisible(false, itemData)
    if (editCallback) editCallback(itemData)
  }
  return {
    modalRef,
    handleNewClick,
    handleEditClick
  }
}

export default usePageModal
