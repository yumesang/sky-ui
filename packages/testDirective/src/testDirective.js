export default {
  bind: () => {
    console.log(`directive bind`)
  },
  inserted: (el, binding) => {
    console.log(`el:`, el),
    console.log(`binding:`, binding)
  },
}