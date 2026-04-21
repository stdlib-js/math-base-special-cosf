"use strict";var c=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var E=c(function(p,P){
var u=require('@stdlib/math-base-special-kernel-cosf/dist'),t=require('@stdlib/math-base-special-kernel-sinf/dist'),q=require('@stdlib/math-base-special-rempio2f/dist'),o=require('@stdlib/number-float32-base-to-word/dist'),r=require('@stdlib/number-float64-base-to-float32/dist'),A=require('@stdlib/constants-float32-abs-mask/dist'),R=require('@stdlib/constants-float32-exponent-mask/dist'),v=require('@stdlib/constants-float64-half-pi/dist'),W=1061752794,d=1075235811,N=1081824209,T=1085271519,D=1088565717,L=964689920,O=v,_=2*v,s=3*v,I=4*v,f=[0];function S(e){var a,i,n;if(a=o(r(e))|0,i=a&A|0,i<=W)return i<L?r(1):u(e);if(i<=N)return i>d?a>0?r(-u(e-_)):r(-u(e+_)):a>0?r(t(O-e)):r(t(O+e));if(i<=D)return i>T?a>0?r(u(e-I)):r(u(e+I)):a>0?r(t(e-s)):r(-t(e+s));if(i>=R)return NaN;switch(n=q(r(e),f),n&3){case 0:return r(u(f[0]));case 1:return r(-t(f[0]));case 2:return r(-u(f[0]));default:return r(t(f[0]))}}P.exports=S
});var F=E();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
