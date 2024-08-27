import useLoginStore from '@/store/login/login'
function usePermissions(permissionsID: string) {
  const loginStore = useLoginStore()
  const { permissions } = loginStore

  // 判断当前登录用户是否拥有该权限
  // 转换成布尔值返回
  return !!permissions.find((item) => item.includes(permissionsID))
}

export default usePermissions
