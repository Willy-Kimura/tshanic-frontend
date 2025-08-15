import router from '@/router'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import { useShare } from '@vueuse/core'
import { useCartStore } from '@/stores/cart'
import { useProductsStore } from '@/stores/products'

const { share, isSupported } = useShare()

export function load() {
  const productStore = useProductsStore()

  if (productStore.data.length <= 0) {
    productStore.get()
  }
}

export function parseImages() {
  if (this.product !== null) return JSON.parse(this.product.images)
  else return []
}

export function onShowCartDrawer() {
  this.qty = 1
}

export function navigate(product) {
  this.product = product

  router.push({
    path: '/shop/' + product.name.replace(/\s/g, '-'),
  })
}

export function getImageLink(imageFile) {
  return window.location.href + '/assets/images/products/' + imageFile
}

export function getRandomRating() {
  let min = Math.ceil(4.5)
  let max = Math.floor(5)
  this.productRating = Math.floor(Math.random() * (max - min + 1)) + min
  return this.productRating
}

export function getRandomRatingCount() {
  let min = Math.ceil(4)
  let max = Math.floor(247)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomPurchaseCount() {
  let min = Math.ceil(3)
  let max = Math.floor(31)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getProductWeight(name) {
  let splits = name.split(' ')
  return splits[splits.length - 1]
}

export function getProductNameOnly(name) {
  let splits = name.split(' ')
  splits.pop()
  return splits.join(' ')
}

export function shareThis(product) {
  if (isSupported) {
    share({
      title: `Checkout ${product}`,
      text: `Hi, checkout ${product}.\n${location.href}`,
      url: location.href,
    })
  } else {
    console.log('The share feature is not supported in your browser.')
  }
}

export function getPerfumeType(name) {
  if (name.includes('EDP')) {
    return 'Eau De Perfum'
  } else if (name.includes('EDT')) {
    return 'Eau De Toilette'
  } else if (name.includes('EDC')) {
    return 'Eau De Cologne'
  } else {
    if (name.includes('Parfum') || name.includes('Perfume')) {
      return 'Luxury Perfume'
    } else if (name.includes('Cologne')) {
      return 'Luxury Cologne'
    } else if (name.includes('Spray')) {
      return 'Luxury Perfume'
    } else {
      return 'Cosmetic'
    }
  }
}

export function getHDImageLink(imageFile) {
  return window.location.origin + '/assets/images/products/' + imageFile
}

export function getBrandImageLink(imageFile) {
  return window.location.origin + '/assets/images/brands/' + imageFile
}

export function message(content) {
  Toastify({
    text: content,
    position: 'center',
    style: {
      color: 'black',
      background: '#F0C633',
    },
  }).showToast()
}
