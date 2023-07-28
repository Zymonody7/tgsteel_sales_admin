import { computed, ref } from 'vue'

export const useSelection = (selectId = 'id') => {
  const isSelected = ref<boolean>(false)
  const selectedList = ref([])
  const selectedListIds = computed((): string[] => {
    const ids: string[] = []
    selectedList.value.forEach((item) => {
      ids.push(item[selectId])
    })
    return ids
  })
  const getRowKeys = (row: any) => {
    return row[selectId]
  }

  /**
   * @description 多选操作
   * @param {Array} rowArr 当前选择的所有数据
   * @return void
   */
  const selectionChange = (rowArr: any) => {
    console.log(rowArr)

    rowArr.length === 0 ? (isSelected.value = false) : (isSelected.value = true)
    selectedList.value = rowArr
  }

  return {
    isSelected,
    selectedList,
    selectedListIds,
    getRowKeys,
    selectionChange,
  }
}
