"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[536],{2536:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var r=function(){var e=this,s=e._self._c;return s("div",{staticClass:"container-wrapper animated fadeIn"},[e._m(0),s("div",{staticClass:"login-form"},[s("LoginForm",{on:{success:e.onLoginSucceed}}),e.resetPasswordButtonVisible?s("router-link",{staticClass:"tip",attrs:{to:{name:"ResetPassword"}}},[e._v(" 找回密码 ")]):e._e()],1)])},o=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"halo-logo"},[s("img",{attrs:{alt:"Halo Logo",src:"/images/logo.svg"}})])}],n=(t(57658),t(20629)),i=t(11322),a={components:{LoginForm:i.Z},data(){return{resetPasswordButtonVisible:!1}},beforeMount(){document.addEventListener("keydown",this.onRegisterResetPasswordKeydown)},beforeDestroy(){document.removeEventListener("keydown",this.onRegisterResetPasswordKeydown)},methods:{...(0,n.nv)(["refreshUserCache","refreshOptionsCache"]),onRegisterResetPasswordKeydown(e){72===e.keyCode&&(e.altKey||e.metaKey)&&e.shiftKey&&(e.preventDefault(),this.resetPasswordButtonVisible=!this.resetPasswordButtonVisible)},onLoginSucceed(){this.refreshUserCache(),this.refreshOptionsCache(),this.$route.query.redirect?this.$router.push(this.$route.query.redirect):this.$router.push({name:"Dashboard"})}}},u=a,d=t(1001),h=(0,d.Z)(u,r,o,!1,null,null,null),c=h.exports}}]);