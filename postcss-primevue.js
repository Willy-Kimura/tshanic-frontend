export default (options = {}) => {
  const { scale = 0.875 } = options

  return {
    postcssPlugin: 'postcss-primevue',
    Once(root) {
      const filePath = root.source?.input.file
      if (filePath && filePath.includes('primevue')) {
        root.walkDecls((decl) => {
          if (decl.value.includes('rem')) {
            decl.value = decl.value.replace(/(\d*\.?\d+)rem/, (_, num) => `${num * scale}rem`)
          }
        })
      }
    },
  }
}
