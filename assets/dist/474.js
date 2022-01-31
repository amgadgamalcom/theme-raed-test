"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[474],{132:(t,e,s)=>{s.d(e,{H:()=>l});class i extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,e){var s;return null===(s=this.getElement(t))||void 0===s?void 0:s.getAttribute(e)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const l=new i},474:(t,e,s)=>{s.r(e),s.d(e,{salla_product_availability:()=>a});var i=s(302),l=s(132);const a=class{constructor(t){(0,i.r)(this,t),this.isUser=l.H.isUser(),this.buttonText=salla.lang.get("pages.products.notify_availability"),this.countryCode=salla.config.country_code||"SA",this.subscribeText=salla.lang.get("common.elements.submit"),this.cancelText=salla.lang.get("common.elements.cancel"),this.subTitle=salla.lang.get("pages.products.notify_availability_subtitle"),this.mobileLabel=salla.lang.get("common.elements.mobile"),this.emailLabel=salla.lang.get("common.elements.email"),this.mobilePlaceholder=salla.lang.get("common.elements.mobile_placeholder"),this.emailPlaceholder=salla.lang.get("common.elements.email_placeholder"),this.productId=salla.config.page.id,this.subscribedMessage=salla.lang.get("pages.products.notify_availability_success"),this.isSubscribed=!1,this.isUser||(this.channelsWatcher(this.channels),this.title_=this.host.title||salla.lang.get("pages.products.notify_availability_title"),this.host.removeAttribute("title"))}channelsWatcher(t){this.channels_=t.split(",")}async submit(){if(this.isUser)return salla.api.product.availabilitySubscribe(this.productId).then((()=>this.isSubscribed=!0));let t={id:this.productId,country_code:this.countryCode};return""!==this.mobile.value&&(t.mobile=this.mobile.value),""!==this.email.value&&(t.email=this.email.value),this.btn.load().then((()=>this.btn.disable())).then((()=>salla.api.product.availabilitySubscribe(t))).then((()=>this.isSubscribed=!0)).then((()=>this.btn.stop())).then((()=>this.modal.hide())).catch((()=>this.btn.stop()&&this.btn.enable()))}render(){return(0,i.h)(i.H,null,this.isSubscribed?(0,i.h)("div",{class:"s-product-availability-subscribed"},this.subscribedMessage):(0,i.h)("slot",null,(0,i.h)("salla-button",{wide:!0,onClick:()=>this.isUser?this.submit():this.modal.show()},this.buttonText)),this.isUser||this.isSubscribed?"":this.renderModal())}renderModal(){return(0,i.h)("salla-modal",{ref:t=>this.modal=t,title:this.title_,subTitle:this.subTitle,icon:"sicon-bell-ring",width:"md"},(0,i.h)("div",{class:"s-product-availability-body"},this.channels_.includes("email")?[(0,i.h)("label",{class:"s-product-availability-label"},this.emailLabel),(0,i.h)("input",{class:"s-product-availability-input",placeholder:this.emailPlaceholder,ref:t=>this.email=t,type:"email"})]:"",this.channels_.includes("sms")?[(0,i.h)("label",{class:"s-product-availability-label"},this.mobileLabel),(0,i.h)("input",{class:"s-product-availability-input",placeholder:this.mobilePlaceholder,ref:t=>this.mobile=t,type:"text"}),(0,i.h)("input",{type:"hidden",value:this.countryCode})]:""),(0,i.h)("div",{slot:"footer",class:"s-product-availability-footer"},(0,i.h)("salla-button",{wide:!0,ref:t=>this.btn=t,onClick:()=>this.submit()},this.subscribeText),(0,i.h)("salla-button",{wide:!0,"btn-style":"outline"},this.cancelText)))}get host(){return(0,i.g)(this)}static get watchers(){return{channels:["channelsWatcher"]}}}}}]);