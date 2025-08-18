import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import NavBar from '@/components/NavBar.vue'
import VueMobileDetection from 'vue-mobile-detection'
import piniaPersist from 'pinia-plugin-persistedstate'

import topbar from 'topbar'
import Tab from 'primevue/tab'
import Row from 'primevue/row'
import Tag from 'primevue/tag'
import Chip from 'primevue/chip'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import Column from 'primevue/column'
import Drawer from 'primevue/drawer'
import Dialog from 'primevue/dialog'
import Select from 'primevue/select'
import 'toastify-js/src/toastify.css'
import Rating from 'primevue/rating'
import TabList from 'primevue/tablist'
import Tooltip from 'primevue/tooltip'
import Divider from 'primevue/divider'
import Message from 'primevue/message'
import Inplace from 'primevue/inplace'
import Popover from 'primevue/popover'
import Menubar from 'primevue/menubar'
import BlockUI from 'primevue/blockui'
import TabPanel from 'primevue/tabpanel'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'
import Password from 'primevue/password'
import Galleria from 'primevue/galleria'
import Skeleton from 'primevue/skeleton'
import TabPanels from 'primevue/tabpanels'
import IftaLabel from 'primevue/iftalabel'
import InputText from 'primevue/inputtext'
import DataTable from 'primevue/datatable'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import ScrollTop from 'primevue/scrolltop'
import { definePreset } from '@primeuix/themes'
import FloatLabel from 'primevue/floatlabel'
import InputGroup from 'primevue/inputgroup'
import InputNumber from 'primevue/inputnumber'
import SplitButton from 'primevue/splitbutton'
import ColumnGroup from 'primevue/columngroup'
import ContextMenu from 'primevue/contextmenu'
import ToggleSwitch from 'primevue/toggleswitch'
import ConfirmPopup from 'primevue/confirmpopup'
import OverlayBadge from 'primevue/overlaybadge'
import AutoComplete from 'primevue/autocomplete'
import ToggleButton from 'primevue/togglebutton'
import AppFooter from './components/AppFooter.vue'
import CheckboxGroup from 'primevue/checkboxgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import VirtualScroller from 'primevue/virtualscroller'
import CartComponent from '@/components/CartComponent.vue'
import ConfirmationService from 'primevue/confirmationservice'
import OrderConfirmation from '@/components/OrderConfirmation.vue'
import ProgressSpinner from 'primevue/progressspinner'
import VueVirtualScroller from 'vue-virtual-scroller'
import { defineAsyncComponent } from 'vue'
import VueLazyload from 'vue-lazyload'
import VueMeta from '../node_modules/vue-meta/dist/vue-meta'

const app = createApp(App)

topbar.config({
  autoRun: false,
  barThickness: 3,
  barColors: {
    0: 'crimson',
    '.3': 'crimson',
    '1.0': '#FF6969',
  },
  shadowBlur: 5,
  shadowColor: 'rgba(0, 0, 0, .5)',
  className: 'topbar',
})

app.component('vTab', Tab)
app.component('vTabs', Tabs)
app.component('vTabList', TabList)
app.component('vTabPanel', TabPanel)
app.component('vTabPanels', TabPanels)

app.component('vTag', Tag)
app.component('vRow', Row)

app.component('vCard', Card)
app.component('vChip', Chip)
app.component('vBadge', Badge)
app.component('NavBar', NavBar)
app.component('vRating', Rating)
app.component('vSelect', Select)
app.component('vColumn', Column)
app.component('vDialog', Dialog)
app.component('vButton', Button)
app.component('vDrawer', Drawer)
app.component('vBlockUI', BlockUI)
app.component('vMenubar', Menubar)
app.component('vInplace', Inplace)
app.component('vMessage', Message)
app.component('vPopover', Popover)
app.component('vDivider', Divider)
app.component('AppFooter', AppFooter)
app.component('vSkeleton', Skeleton)
app.component('vGalleria', Galleria)
app.component('vCheckbox', Checkbox)
app.component('vPassword', Password)
app.component('vTextarea', Textarea)
app.component('IconField', IconField)
app.component('InputText', InputText)
app.component('IftaLabel', IftaLabel)
app.component('InputIcon', InputIcon)
app.component('vScrollTop', ScrollTop)
app.component('vDataTable', DataTable)
app.component('vInputGroup', InputGroup)
app.component('vFloatLabel', FloatLabel)
app.component('vInputNumber', InputNumber)
app.component('vContextMenu', ContextMenu)
app.component('vColumnGroup', ColumnGroup)
app.component('vSplitButton', SplitButton)
app.component('ToggleSwitch', ToggleSwitch)
app.component('ConfirmPopup', ConfirmPopup)
app.component('AutoComplete', AutoComplete)
app.component('vToggleButton', ToggleButton)
app.component('vOverlayBadge', OverlayBadge)
app.component('CartComponent', CartComponent)
app.component('VirtualScroller', VirtualScroller)
app.component('vInputGroupAddon', InputGroupAddon)
app.component('vProgressSpinner', ProgressSpinner)
app.component('OrderConfirmation', OrderConfirmation)
app.component(
  'ProductItem',
  defineAsyncComponent(() => import('./components/ProductItem.vue')),
)

const LaraMod = definePreset(Aura, {
  semantic: {
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{accent.color}',
      offset: '2px',
    },
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '2px',
        paddingX: '20px',
      },
    },
    inputtext: {
      root: {
        borderRadius: '2px',
      },
    },
    drawer: {
      footer: {
        padding: '0px',
      },
    },
  },
})

app.directive('tooltip', Tooltip)

app.use(PrimeVue, {
  theme: {
    preset: LaraMod,
    options: {
      darkModeSelector: false || 'none',
    },
  },
})

app.use(createPinia().use(piniaPersist))
app.use(ConfirmationService)
app.use(VueVirtualScroller)
app.use(VueMobileDetection)
app.use(VueMeta)
app.use(VueLazyload, {
  lazyComponent: true,
})
app.use(router)

app.mount('#app')
