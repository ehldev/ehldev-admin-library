// Layout
import AdminHeader from './components/layout/AdminHeader.vue'
import AdminSidebar from './components/layout/AdminSidebar.vue'
import AdminNav from './components/layout/AdminNav.vue'
import AdminLayout from './components/layout/AdminLayout.vue'
import AdminFooter from './components/layout/AdminFooter.vue'
import GlobalLoader from './components/layout/GlobalLoader.vue'

// Auth
import LoginPage from './components/auth/LoginPage.vue'

// Common
import AdminSearch from './components/common/AdminSearch.vue'
import AdminDropdown from './components/common/AdminDropdown.vue'
import AdminUploadWidget from './components/common/AdminUploadWidget.vue'
import WelcomeBanner from './components/common/WelcomeBanner.vue'
import AdminFilters from './components/common/AdminFilters.vue'

// Form
import AdminFormError from './components/form/AdminFormError.vue'
import AdminTags from './components/form/AdminTags.vue'

// Icons
import AdminToggleMenuIcon from './components/icons/AdminToggleMenuIcon.vue'

export {
    AdminSearch,
    AdminDropdown,
    AdminHeader,
    AdminToggleMenuIcon,
    AdminSidebar,
    AdminNav,
    AdminLayout,
    AdminUploadWidget,
    WelcomeBanner,
    AdminFooter,
    AdminFormError,
    AdminTags,
    GlobalLoader,
    LoginPage,
    AdminFilters
}

// Exportación de los componentes individualmente
// export { AdminButton, AdminLayout, AdminHeader, AdminSidebar, AdminNav, AdminSearch }

// // Instalación de la librería como un plugin
// export function install(Vue) {
//   Vue.component('ButtonComponent', ButtonComponent)
//   Vue.component('OtherButtonComponent', OtherButtonComponent)
//   Vue.component('ButtonGroupComponent', ButtonGroupComponent)
// }

// if (typeof window !== 'undefined' &amp;&amp; window.Vue) {
//   Vue.use({ install });
// }

// // Exportación de la librería como plugin
// export default { install: install }