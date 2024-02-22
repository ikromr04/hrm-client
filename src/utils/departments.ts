import { Department, Departments } from '@/types/departments'

export const removeCategoryById = (tree: Departments, categoryId: number): Departments => {
  let removed = false

  const removeCategoryRecursive = (node: Department): Department | null => {
    if (+node.id === categoryId) {
      removed = true
      return null
    }

    if (node.children && node.children.length > 0) {
      node.children = node.children.filter(child => {
        const result = removeCategoryRecursive(child)
        return result !== null
      })

      return node
    }

    return node
  }

  tree = tree.filter(node => {
    const result = removeCategoryRecursive(node)
    return result !== null
  })

  if (!removed) {
    // eslint-disable-next-line no-console
    console.log('Category not found.')
  }

  return tree
}
