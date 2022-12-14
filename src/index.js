/* eslint-disable */
// import AdminButton from './components/AdminButton.vue'
// import AdminLayout from "./components/layout/AdminLayout.vue";
// import AdminHeader from "./components/layout/AdminHeader.vue";
// import AdminSidebar from "./components/layout/AdminSidebar.vue";
// import AdminNav from "./components/layout/AdminNav.vue";
// import AdminSearch from "./components/common/AdminSearch.vue";
import HelloWorld from './components/HelloWorld.vue'

import AdminHeader from './components/layout/AdminHeader.vue'
import AdminSidebar from './components/layout/AdminSidebar.vue'
import AdminNav from './components/layout/AdminNav.vue'
import AdminLayout from './components/layout/AdminLayout.vue'
import AdminFooter from './components/layout/AdminFooter.vue'

import AdminSearch from './components/common/AdminSearch.vue'
import AdminDropdown from './components/common/AdminDropdown.vue'
import AdminUploadWidget from './components/common/AdminUploadWidget.vue'

import AdminFormError from './components/form/AdminFormError.vue'
import AdminTags from './components/form/AdminTags.vue'

import AdminToggleMenuIcon from './components/icons/AdminToggleMenuIcon.vue'

export {
    HelloWorld,
    AdminSearch,
    AdminDropdown,
    AdminHeader,
    AdminToggleMenuIcon,
    AdminSidebar,
    AdminNav,
    AdminLayout,
    AdminUploadWidget,
    AdminFooter,
    AdminFormError,
    AdminTags
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