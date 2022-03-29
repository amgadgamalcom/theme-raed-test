"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[530],{2530:(t,s,o)=>{o.r(s),o.d(s,{salla_button:()=>n});var e=o(3273);const n=class{constructor(t){(0,e.r)(this,t),this.hostAttributes={},this.shape="btn",this.color="primary",this.fill="solid",this.size="medium",this.width="normal",this.loading=!1,this.disabled=!1,this.loaderPosition="after",this.wide=!1,this.wide&&this.host.classList.add("s-button-wide")}async load(){return"center"==this.loaderPosition&&this.text.classList.add("s-button-hide"),this.host.setAttribute("loading",""),this.host}async stop(){return this.host.removeAttribute("loading"),"center"==this.loaderPosition&&this.text.classList.remove("s-button-hide"),this.host}async setText(t){return this.text.innerHTML=t,this.host}async disable(){return this.host.setAttribute("disabled",""),this.host}async enable(){return this.host.removeAttribute("disabled"),this.host}getBtnAttributes(){for(let t=0;t<this.host.attributes.length;t++)["color","fill","size","width","id","loading"].includes(this.host.attributes[t].name)||(this.hostAttributes[this.host.attributes[t].name]=this.host.attributes[t].value);return this.hostAttributes.type=this.hostAttributes.type||"button",this.hostAttributes.class+=" s-button-element s-button-"+this.shape+" s-button-"+("none"==this.fill?"fill-none":this.fill)+("medium"!=this.size?" s-button-"+this.size:"")+("normal"!=this.width?" s-button-"+this.width:"")+("link"==this.shape?" s-button-"+this.color+"-link":"")+("link"!=this.shape&&"outline"!=this.fill?" s-button-"+this.color:"")+("outline"==this.fill?" s-button-"+this.color+"-outline":"")+(this.disabled?" s-button-disabled ":"")+("icon"==this.shape?" s-button-loader-center":" s-button-loader-"+this.loaderPosition),this.hostAttributes}render(){return(0,e.h)(e.H,{class:"s-button-wrap"},(0,e.h)("button",Object.assign({},this.getBtnAttributes(),{disabled:this.disabled}),(0,e.h)("span",{class:"s-button-text",ref:t=>this.text=t},(0,e.h)("slot",null)),this.loading?(0,e.h)("span",{class:"s-button-loader"}):""))}get host(){return(0,e.g)(this)}};n.style="salla-button{pointer-events:none}salla-button[type=submit]{-webkit-appearance:none}salla-button[width=wide]{width:100%}.s-button-wrap[loading]{pointer-events:none}.s-button-wrap[loading] .s-button-element{pointer-events:none !important}.s-button-wrap[loading] .s-button-loader-center .s-button-text{opacity:0}.s-button-wrap .s-button-element[loading]{pointer-events:none !important}.s-button-wrap .s-button-element:not(:disabled){pointer-events:auto}.s-button-wrap .s-button-solid .s-button-loader:before{border-color:#fff #fff rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2)}.s-button-wrap .s-button-outline{border:1px solid currentColor}.s-button-wrap .s-button-outline:hover{border-color:transparent}.s-button-wrap .s-button-outline .s-button-loader:before{border-top-color:currentColor;border-left-color:currentColor}.s-button-wrap .s-button-icon.s-button-large{width:56px;height:56px}.s-button-wrap .s-button-icon.s-button-small{width:24px;height:24px}.s-button-wrap .s-button-icon.s-button-small .s-button-loader:before{width:0.85rem;height:0.85rem}.s-button-wrap .s-button-loader-after .s-button-load{flex-direction:row}.s-button-wrap .s-button-loader-start.s-button-element{padding-right:40px}.s-button-wrap .s-button-loader-start .s-button-loader{position:absolute;right:8px}.s-button-wrap .s-button-loader-start .s-button-loader [dir=ltr]{left:8px;right:auto}.s-button-wrap .s-button-loader-end.s-button-element{padding-left:40px}.s-button-wrap .s-button-loader-end .s-button-loader{position:absolute;left:8px}.s-button-wrap .s-button-loader-end .s-button-loader [dir=ltr]{right:8px;left:auto}.s-button-wrap .s-button-loader-center .s-button-loader{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);margin:0 !important}"}}]);