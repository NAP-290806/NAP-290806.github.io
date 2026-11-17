/* Portfolio of Naufal Abiyyu Permana. Three.js (MIT), GSAP (GreenSock standard license), simplex noise by Ian McEwan and Stefan Gustavson (MIT). */
var hp=0,Ch=1,fp=2;var Mo=1,dp=2,ua=3,Gr=0,_n=1,qi=2,ps=0,ha=1,Rh=2,Ph=3,Ih=4,pp=5;var ms=100,mp=101,gp=102,_p=103,xp=104,vp=200,yp=201,Sp=202,Mp=203,Lh=204,Dh=205,bp=206,Tp=207,wp=208,Ep=209,Ap=210,Cp=211,Rp=212,Pp=213,Ip=214,Vl=0,Gl=1,Hl=2,ea=3,Wl=4,Xl=5,ql=6,Yl=7,_c=0,Lp=1,Dp=2,Yi=0,Nh=1,Uh=2,Fh=3,bo=4,Oh=5,Bh=6,zh=7;var kh=300,gs=301,fa=302,xc=303,vc=304,Zl=1e3,Vi=1001,Jl=1002,fn=1003,Np=1004;var To=1005;var Bn=1006,yc=1007;var dr=1008;var Zn=1009,Vh=1010,Gh=1011,da=1012,Sc=1013,Ui=1014,Mi=1015,Fi=1016,Mc=1017,bc=1018,_s=1020,Hh=35902,Wh=35899,Xh=1021,qh=1022,Oi=1023,ur=1026,pr=1027,Tc=1028,wc=1029,Hr=1030,Ec=1031;var Ac=1033,wo=33776,Eo=33777,Ao=33778,Co=33779,Cc=35840,Rc=35841,Pc=35842,Ic=35843,Lc=36196,Dc=37492,Nc=37496,Uc=37488,Fc=37489,Ro=37490,Oc=37491,Bc=37808,zc=37809,kc=37810,Vc=37811,Gc=37812,Hc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,Zc=37818,Jc=37819,$c=37820,Kc=37821,Qc=36492,jc=36494,eu=36495,tu=36283,nu=36284,Po=36285,iu=36286;var $a=2300,$l=2301,zl=2302,vh=2303,yh=2400,Sh=2401,Mh=2402;var Up=3200;var Io=0,Fp=1,mr="",Fn="srgb",Ka="srgb-linear",Qa="linear",xt="srgb";var kl=7680;var Op=519,Bp=512,zp=513,kp=514,Yh=515,Vp=516,Gp=517,Zh=518,Jh=519,Hp=35044;var $h="300 es",xi=2e3,ta=2001;function R0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function P0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wp(){let r=ja("canvas");return r.style.display="block",r}var Od={},na=null;function Kh(...r){let e="THREE."+r.shift();na?na("log",e,...r):console.log(e,...r)}function Xp(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ve(...r){r=Xp(r);let e="THREE."+r.shift();if(na)na("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function We(...r){r=Xp(r);let e="THREE."+r.shift();if(na)na("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function us(...r){let e=r.join(" ");e in Od||(Od[e]=!0,Ve(...r))}function qp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Yp={[Vl]:Vl,[Hl]:ql,[Wl]:Wl,[ea]:Xl,[Gl]:Gl,[ql]:Hl,[Yl]:Yl,[Xl]:ea},Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=1234567,Za=Math.PI/180,ia=180/Math.PI;function pa(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function Qh(r,e){return(r%e+e)%e}function I0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function L0(r,e,t){return r!==e?(t-r)/(e-r):0}function Ja(r,e,t){return(1-t)*r+t*e}function D0(r,e,t,n){return Ja(r,e,1-Math.exp(-t*n))}function N0(r,e=1){return e-Math.abs(Qh(r,e*2)-e)}function U0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function F0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function O0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function B0(r,e){return r+Math.random()*(e-r)}function z0(r){return r*(.5-Math.random())}function k0(r){r!==void 0&&(Bd=r);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(r){return r*Za}function G0(r){return r*ia}function H0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function W0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function X0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*g,l*h,o*c);break;case"YXY":r.set(l*h,o*u,l*g,o*c);break;case"ZYZ":r.set(l*g,l*h,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ef(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zp(r,e){if(e.constructor===Float32Array)return r;let t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Jp(r,e){if(e.constructor===Float32Array)return r;let t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var tf={DEG2RAD:Za,RAD2DEG:ia,generateUUID:pa,clamp:rt,euclideanModulo:Qh,mapLinear:I0,inverseLerp:L0,lerp:Ja,damp:D0,pingpong:N0,smoothstep:U0,smootherstep:F0,randInt:O0,randFloat:B0,randFloatSpread:z0,seededRandom:k0,degToRad:V0,radToDeg:G0,isPowerOfTwo:H0,ceilPowerOfTwo:W0,floorPowerOfTwo:jh,setQuaternionFromProperEuler:X0,normalize:Jp,denormalize:Zp},of=class of{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};of.prototype.isVector2=!0;var Je=of,vi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=s[a+0],h=s[a+1],g=s[a+2],x=s[a+3];if(f!==x||l!==d||c!==h||u!==g){let p=l*d+c*h+u*g+f*x;p<0&&(d=-d,h=-h,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);m=Math.sin(m*v)/T,o=Math.sin(o*v)/T,l=l*m+d*o,c=c*m+h*o,u=u*m+g*o,f=f*m+x*o}else{l=l*m+d*o,c=c*m+h*o,u=u*m+g*o,f=f*m+x*o;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lf=class lf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lf.prototype.isVector3=!0;var Y=lf,ju=new Y,zd=new vi,cf=class cf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],x=i[0],p=i[3],m=i[6],v=i[1],T=i[4],y=i[7],S=i[2],w=i[5],_=i[8];return s[0]=a*x+o*v+l*S,s[3]=a*p+o*T+l*w,s[6]=a*m+o*y+l*_,s[1]=c*x+u*v+f*S,s[4]=c*p+u*T+f*w,s[7]=c*m+u*y+f*_,s[2]=d*x+h*v+g*S,s[5]=d*p+h*T+g*w,s[8]=d*m+h*y+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=h*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eh.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cf.prototype.isMatrix3=!0;var qe=cf,eh=new qe,kd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q0(){let r={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?Qa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ka]:{primaries:e,whitePoint:n,transfer:Qa,toXYZ:kd,fromXYZ:Vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:kd,fromXYZ:Vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}var lt=q0();function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var zs,Kl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=ja("canvas")),zs.width=e.width,zs.height=e.height;let i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ja("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Y0=0,ra=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(th(i[a].image)):s.push(th(i[a]))}else s=th(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function th(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var Z0=0,nh=new Y,zn=class r extends Gi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Vi,i=Vi,s=Bn,a=dr,o=Oi,l=Zn,c=r.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=pa(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=kh;zn.DEFAULT_ANISOTROPY=1;var uf=class uf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(h+1)/2,S=(m+1)/2,w=(u+d)/4,_=(f+x)/4,M=(g+p)/4;return T>y&&T>S?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=w/n,s=_/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=_/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uf.prototype.isVector4=!0;var Dt=uf,Ql=class extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new zn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},eo=class extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gc=class gc{constructor(e,t,n,i,s,a,o,l,c,u,f,d,h,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,x,p)}set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*u,h=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,g=c*u,x=c*f;t[0]=d+x*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,g=c*u,x=c*f;t[0]=d-x*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*f,g=o*u,x=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*l,h=a*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J0,e,$0)}lookAt(e,t,n){let i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Rr.crossVectors(n,ii),Rr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Rr.crossVectors(n,ii)),Rr.normalize(),gl.crossVectors(ii,Rr),i[0]=Rr.x,i[4]=gl.x,i[8]=ii.x,i[1]=Rr.y,i[5]=gl.y,i[9]=ii.y,i[2]=Rr.z,i[6]=gl.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],x=n[6],p=n[10],m=n[14],v=n[3],T=n[7],y=n[11],S=n[15],w=i[0],_=i[4],M=i[8],I=i[12],A=i[1],D=i[5],L=i[9],B=i[13],P=i[2],z=i[6],W=i[10],F=i[14],X=i[3],V=i[7],R=i[11],Q=i[15];return s[0]=a*w+o*A+l*P+c*X,s[4]=a*_+o*D+l*z+c*V,s[8]=a*M+o*L+l*W+c*R,s[12]=a*I+o*B+l*F+c*Q,s[1]=u*w+f*A+d*P+h*X,s[5]=u*_+f*D+d*z+h*V,s[9]=u*M+f*L+d*W+h*R,s[13]=u*I+f*B+d*F+h*Q,s[2]=g*w+x*A+p*P+m*X,s[6]=g*_+x*D+p*z+m*V,s[10]=g*M+x*L+p*W+m*R,s[14]=g*I+x*B+p*F+m*Q,s[3]=v*w+T*A+y*P+S*X,s[7]=v*_+T*D+y*z+S*V,s[11]=v*M+T*L+y*W+S*R,s[15]=v*I+T*B+y*F+S*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],p=e[11],m=e[15],v=l*h-c*d,T=o*h-c*f,y=o*d-l*f,S=a*h-c*u,w=a*d-l*u,_=a*f-o*u;return t*(x*v-p*T+m*y)-n*(g*v-p*S+m*w)+i*(g*T-x*S+m*_)-s*(g*y-x*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=t*o-n*a,T=t*l-i*a,y=t*c-s*a,S=n*l-i*o,w=n*c-s*o,_=i*c-s*l,M=u*x-f*g,I=u*p-d*g,A=u*m-h*g,D=f*p-d*x,L=f*m-h*x,B=d*m-h*p,P=v*B-T*L+y*D+S*A-w*I+_*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/P;return e[0]=(o*B-l*L+c*D)*z,e[1]=(i*L-n*B-s*D)*z,e[2]=(x*_-p*w+m*S)*z,e[3]=(d*w-f*_-h*S)*z,e[4]=(l*A-a*B-c*I)*z,e[5]=(t*B-i*A+s*I)*z,e[6]=(p*y-g*_-m*T)*z,e[7]=(u*_-d*y+h*T)*z,e[8]=(a*L-o*A+c*M)*z,e[9]=(n*A-t*L-s*M)*z,e[10]=(g*w-x*y+m*v)*z,e[11]=(f*y-u*w-h*v)*z,e[12]=(o*I-a*D-l*M)*z,e[13]=(t*D-n*I+i*M)*z,e[14]=(x*T-g*S-p*v)*z,e[15]=(u*S-f*T+d*v)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,x=a*u,p=a*f,m=o*f,v=l*c,T=l*u,y=l*f,S=n.x,w=n.y,_=n.z;return i[0]=(1-(x+m))*S,i[1]=(h+y)*S,i[2]=(g-T)*S,i[3]=0,i[4]=(h-y)*w,i[5]=(1-(d+m))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(g+T)*_,i[9]=(p-v)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ks.set(i[0],i[1],i[2]).length(),o=ks.set(i[4],i[5],i[6]).length(),l=ks.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ii.copy(this);let c=1/a,u=1/o,f=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,t.setFromRotationMatrix(Ii),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=xi,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===xi)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ta)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=xi,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===xi)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===ta)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gc.prototype.isMatrix4=!0;var St=gc,ks=new Y,Ii=new St,J0=new Y(0,0,0),$0=new Y(1,1,1),Rr=new Y,gl=new Y,ii=new Y,Gd=new St,Hd=new vi,Hi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},K0=0,Wd=new Y,Vs=new vi,rr=new St,_l=new Y,Ga=new Y,Q0=new Y,j0=new vi,Xd=new Y(1,0,0),qd=new Y(0,1,0),Yd=new Y(0,0,1),Zd={type:"added"},e_={type:"removed"},Gs={type:"childadded",child:null},ih={type:"childremoved",child:null},dn=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Y,t=new Hi,n=new vi,i=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_l.copy(e):_l.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Ga,_l,this.up):rr.lookAt(_l,Ga,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),Vs.setFromRotationMatrix(rr),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e_),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,j0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new Y(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cs=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},t_={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function rh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Qh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=rh(a,s,e+1/3),this.g=rh(a,s,e),this.b=rh(a,s,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){let n=$p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return lt.workingToColorSpace(wn.copy(this),e),Math.round(rt(wn.r*255,0,255))*65536+Math.round(rt(wn.g*255,0,255))*256+Math.round(rt(wn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,s=wn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Fn){lt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(xl);let n=Ja(Pr.h,xl.h,t),i=Ja(Pr.s,xl.s,t),s=Ja(Pr.l,xl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Xe;Xe.NAMES=$p;var hs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new Y,sr=new Y,sh=new Y,ar=new Y,Hs=new Y,Ws=new Y,Jd=new Y,ah=new Y,oh=new Y,lh=new Y,ch=new Dt,uh=new Dt,hh=new Dt,Nr=class r{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Li.subVectors(e,t),i.cross(Li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Li.subVectors(i,t),sr.subVectors(n,t),sh.subVectors(e,t);let a=Li.dot(Li),o=Li.dot(sr),l=Li.dot(sh),c=sr.dot(sr),u=sr.dot(sh),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(a,ar.y),l.addScaledVector(o,ar.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return ch.setScalar(0),uh.setScalar(0),hh.setScalar(0),ch.fromBufferAttribute(e,t),uh.fromBufferAttribute(e,n),hh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ch,s.x),a.addScaledVector(uh,s.y),a.addScaledVector(hh,s.z),a}static isFrontFacing(e,t,n,i){return Li.subVectors(n,t),sr.subVectors(e,t),Li.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Li.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Hs.subVectors(i,n),Ws.subVectors(s,n),ah.subVectors(e,n);let l=Hs.dot(ah),c=Ws.dot(ah);if(l<=0&&c<=0)return t.copy(n);oh.subVectors(e,i);let u=Hs.dot(oh),f=Ws.dot(oh);if(u>=0&&f<=u)return t.copy(i);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Hs,a);lh.subVectors(e,s);let h=Hs.dot(lh),g=Ws.dot(lh);if(g>=0&&h<=g)return t.copy(s);let x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ws,o);let p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return Jd.subVectors(s,i),o=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(Jd,o);let m=1/(p+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Hs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wi=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Di):Di.fromBufferAttribute(s,a),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vl.copy(n.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),yl.subVectors(this.max,Ha),Xs.subVectors(e.a,Ha),qs.subVectors(e.b,Ha),Ys.subVectors(e.c,Ha),Ir.subVectors(qs,Xs),Lr.subVectors(Ys,qs),ss.subVectors(Xs,Ys);let t=[0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,0,-ss.z,ss.y,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,ss.z,0,-ss.x,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0,-ss.y,ss.x,0];return!fh(t,Xs,qs,Ys,yl)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,Xs,qs,Ys,yl))?!1:(Sl.crossVectors(Ir,Lr),t=[Sl.x,Sl.y,Sl.z],fh(t,Xs,qs,Ys,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Di=new Y,vl=new Wi,Xs=new Y,qs=new Y,Ys=new Y,Ir=new Y,Lr=new Y,ss=new Y,Ha=new Y,yl=new Y,Sl=new Y,as=new Y;function fh(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){as.fromArray(r,s);let o=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=n.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var jt=new Y,Ml=new Je,n_=0,si=class extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hp,this.updateRanges=[],this.gpuType=Mi,this.version=0,this._normalizationScale=e!==void 0?ef(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Jp(e,this.array)}};var no=class extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var io=class extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var On=class extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}},i_=new Wi,Wa=new Y,dh=new Y,hr=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):i_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);let t=Wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(dh)),this.expandByPoint(Wa.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},r_=0,_i=new St,ph=new dn,Zs=new Y,ri=new Wi,Xa=new Wi,hn=new Y,yi=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R0(e)?io:no)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new On(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(ri.min,Xa.min),ri.expandByPoint(hn),hn.addVectors(ri.max,Xa.max),ri.expandByPoint(hn)):(ri.expandByPoint(Xa.min),ri.expandByPoint(Xa.max))}ri.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),hn.add(Zs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new Y,l[I]=new Y;let u=new Y,f=new Y,d=new Y,h=new Je,g=new Je,x=new Je,p=new Y,m=new Y;function v(I,A,D){c[I]=c[A]=c[D]=1,u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,D),h.fromBufferAttribute(s,I),g.fromBufferAttribute(s,A),x.fromBufferAttribute(s,D),f.sub(u),d.sub(u),g.sub(h),x.sub(h);let L=1/(g.x*x.y-x.x*g.y);isFinite(L)&&(p.copy(f).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(L),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(L),o[I].add(p),o[A].add(p),o[D].add(p),l[I].add(m),l[A].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,A=T.length;I<A;++I){let D=T[I],L=D.start,B=D.count;for(let P=L,z=L+B;P<z;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new Y,S=new Y,w=new Y,_=new Y;function M(I){w.fromBufferAttribute(i,I),_.copy(w);let A=o[I];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(_,A);let L=S.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,L)}for(let I=0,A=n.count;I<A;++I)c[I]&&M(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),h=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new si(d,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mh=new Y,s_=new Y,a_=new qe,Ni=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=mh.subVectors(n,t).cross(s_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(mh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||a_.getNormalMatrix(e),i=this.coplanarPoint(mh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},o_=0,Xi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=ha,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kl,this.stencilZFail=kl,this.stencilZPass=kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var lr=new Y,gh=new Y,bl=new Y,Tl=new Y,ro=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gh.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Tl.copy(this.origin).sub(gh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(bl),o=Tl.dot(this.direction),l=-Tl.dot(bl),c=Tl.lengthSq(),u=Math.abs(1-a*a),f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){let x=1/u;f*=x,d*=x,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(gh).addScaledVector(bl,d),h}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);let n=lr.dot(this.direction),i=lr.dot(lr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=n.x-a.x,v=n.y-a.y,T=n.z-a.z,y=Math.abs(l),S=Math.abs(c),w=Math.abs(u),_,M,I,A,D,L,B,P,z,W,F,X;if(y>=S&&y>=w?(I=l,L=f,z=g,X=m,l>=0?(_=c,M=u,A=d,D=h,B=x,P=p,W=v,F=T):(_=u,M=c,A=h,D=d,B=p,P=x,W=T,F=v)):S>=w?(I=c,L=d,z=x,X=v,c>=0?(_=u,M=l,A=h,D=f,B=p,P=g,W=T,F=m):(_=l,M=u,A=f,D=h,B=g,P=p,W=m,F=T)):(I=u,L=h,z=p,X=T,u>=0?(_=l,M=c,A=f,D=d,B=g,P=x,W=m,F=v):(_=c,M=l,A=d,D=f,B=x,P=g,W=v,F=m)),I===0)return null;let V=_/I,R=M/I,Q=1/I,xe=A-V*L,Be=D-R*L,Z=B-V*z,oe=P-R*z,pe=W-V*X,ye=F-R*X,he=pe*oe-ye*Z,Ne=xe*ye-Be*pe,st=Z*Be-oe*xe;if(i){if(he<0||Ne<0||st<0)return null}else if((he<0||Ne<0||st<0)&&(he>0||Ne>0||st>0))return null;let Pe=he+Ne+st;if(Pe===0)return null;let Ge=Q*(he*L+Ne*z+st*X);return(Pe>0?Ge<0:Ge>0)?null:this.at(Ge/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},aa=class extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$d=new St,os=new ro,wl=new hr,Kd=new Y,El=new Y,Al=new Y,Cl=new Y,_h=new Y,Rl=new Y,Qd=new Y,Pl=new Y,Rt=class extends dn{constructor(e=new yi,t=new aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],f=s[l];u!==0&&(_h.fromBufferAttribute(f,e),a?Rl.addScaledVector(_h,u):Rl.addScaledVector(_h.sub(t),u))}t.add(Rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(wl.containsPoint(os.origin)===!1&&(os.intersectSphere(wl,Kd)===null||os.origin.distanceToSquared(Kd)>(e.far-e.near)**2))&&($d.copy(s).invert(),os.copy(e.ray).applyMatrix4($d),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],v=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,S=T;y<S;y+=3){let w=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);i=Il(this,m,e,n,c,u,f,w,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){let v=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=Il(this,a,e,n,c,u,f,v,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],v=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,S=T;y<S;y+=3){let w=y,_=y+1,M=y+2;i=Il(this,m,e,n,c,u,f,w,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){let v=p,T=p+1,y=p+2;i=Il(this,a,e,n,c,u,f,v,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function l_(r,e,t,n,i,s,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Gr,o),l===null)return null;Pl.copy(o),Pl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Pl);return c<t.near||c>t.far?null:{distance:c,point:Pl.clone(),object:r}}function Il(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,El),r.getVertexPosition(l,Al),r.getVertexPosition(c,Cl);let u=l_(r,e,t,n,El,Al,Cl,Qd);if(u){let f=new Y;Nr.getBarycoord(Qd,El,Al,Cl,f),i&&(u.uv=Nr.getInterpolatedAttribute(i,o,l,c,f,new Je)),s&&(u.uv1=Nr.getInterpolatedAttribute(s,o,l,c,f,new Je)),a&&(u.normal=Nr.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new Y,materialIndex:0};Nr.getNormal(El,Al,Cl,d.normal),u.face=d,u.barycoord=f}return u}var so=class extends zn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=fn,u=fn,f,d){super(null,a,o,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=class extends si{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new St,jd=new St,Ll=[],ep=new Wi,c_=new St,qa=new Rt,Ya=new hr,oo=class extends Rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,c_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),ep.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Ya.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(qa.geometry=this.geometry,qa.material=this.material,qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(n),e.ray.intersectsSphere(Ya)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Js),jd.multiplyMatrices(n,Js),qa.matrixWorld=jd,qa.raycast(e,Ll);for(let a=0,o=Ll.length;a<o;a++){let l=Ll[a];l.instanceId=s,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new so(new Float32Array(i*this.count),i,this.count,Tc,Mi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new hr,u_=new Je(.5,.5),Dl=new Y,Ur=class{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],x=s[9],p=s[10],m=s[11],v=s[12],T=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-a,h-u,m-g,S-v).normalize(),i[1].setComponents(c+a,h+u,m+g,S+v).normalize(),i[2].setComponents(c+o,h+f,m+x,S+T).normalize(),i[3].setComponents(c-o,h-f,m-x,S-T).normalize(),n)i[4].setComponents(l,d,p,y).normalize(),i[5].setComponents(c-l,h-d,m-p,S-y).normalize();else if(i[4].setComponents(c-l,h-d,m-p,S-y).normalize(),t===xi)i[5].setComponents(c+l,h+d,m+p,S+y).normalize();else if(t===ta)i[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=u_.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Dl.x=i.normal.x>0?e.max.x:e.min.x,Dl.y=i.normal.y>0?e.max.y:e.min.y,Dl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tp=new St,ec=class r{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];tp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ur),n[i].setFromProjectionMatrix(tp,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ur),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var oa=class extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},np=new St,bh=new ro,Nl=new hr,Ul=new Y,lo=class extends dn{constructor(e=new yi,t=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(i),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;np.copy(i).invert(),bh.copy(e.ray).applyMatrix4(np);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=d,x=h;g<x;g++){let p=c.getX(g);Ul.fromBufferAttribute(f,p),ip(Ul,p,l,i,e,t,this)}}else{let d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=d,x=h;g<x;g++)Ul.fromBufferAttribute(f,g),ip(Ul,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ip(r,e,t,n,i,s,a){let o=bh.distanceSqToPoint(r);if(o<t){let l=new Y;bh.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var co=class extends zn{constructor(e=[],t=gs,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uo=class extends zn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fr=class extends zn{constructor(e,t,n=Ui,i,s,a,o=fn,l=fn,c,u=ur,f=1){if(u!==ur&&u!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ho=class extends fr{constructor(e,t=Ui,n=gs,i,s,a=fn,o=fn,l,c=ur){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fo=class extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fr=class r extends yi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(u,3)),this.setAttribute("uv",new On(f,2));function g(x,p,m,v,T,y,S,w,_,M,I){let A=y/_,D=S/M,L=y/2,B=S/2,P=w/2,z=_+1,W=M+1,F=0,X=0,V=new Y;for(let R=0;R<W;R++){let Q=R*D-B;for(let xe=0;xe<z;xe++){let Be=xe*A-L;V[x]=Be*v,V[p]=Q*T,V[m]=P,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[m]=w>0?1:-1,u.push(V.x,V.y,V.z),f.push(xe/_),f.push(1-R/M),F+=1}}for(let R=0;R<M;R++)for(let Q=0;Q<_;Q++){let xe=d+Q+z*R,Be=d+Q+z*(R+1),Z=d+(Q+1)+z*(R+1),oe=d+(Q+1)+z*R;l.push(xe,Be,oe),l.push(Be,Z,oe),X+=6}o.addGroup(h,X,I),h+=X,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tc=class r extends yi{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new On(s,3)),this.setAttribute("normal",new On(s.slice(),3)),this.setAttribute("uv",new On(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new Y,y=new Y,S=new Y;for(let w=0;w<t.length;w+=3)h(t[w+0],T),h(t[w+1],y),h(t[w+2],S),l(T,y,S,v)}function l(v,T,y,S){let w=S+1,_=[];for(let M=0;M<=w;M++){_[M]=[];let I=v.clone().lerp(y,M/w),A=T.clone().lerp(y,M/w),D=w-M;for(let L=0;L<=D;L++)L===0&&M===w?_[M][L]=I:_[M][L]=I.clone().lerp(A,L/D)}for(let M=0;M<w;M++)for(let I=0;I<2*(w-M)-1;I++){let A=Math.floor(I/2);I%2===0?(d(_[M][A+1]),d(_[M+1][A]),d(_[M][A])):(d(_[M][A+1]),d(_[M+1][A+1]),d(_[M+1][A]))}}function c(v){let T=new Y;for(let y=0;y<s.length;y+=3)T.x=s[y+0],T.y=s[y+1],T.z=s[y+2],T.normalize().multiplyScalar(v),s[y+0]=T.x,s[y+1]=T.y,s[y+2]=T.z}function u(){let v=new Y;for(let T=0;T<s.length;T+=3){v.x=s[T+0],v.y=s[T+1],v.z=s[T+2];let y=p(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;a.push(y,1-S)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){let T=a[v+0],y=a[v+2],S=a[v+4],w=Math.max(T,y,S),_=Math.min(T,y,S);w>.9&&_<.1&&(T<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function h(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){let v=new Y,T=new Y,y=new Y,S=new Y,w=new Je,_=new Je,M=new Je;for(let I=0,A=0;I<s.length;I+=9,A+=6){v.set(s[I+0],s[I+1],s[I+2]),T.set(s[I+3],s[I+4],s[I+5]),y.set(s[I+6],s[I+7],s[I+8]),w.set(a[A+0],a[A+1]),_.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),S.copy(v).add(T).add(y).divideScalar(3);let D=p(S);x(w,A+0,v,D),x(_,A+2,T,D),x(M,A+4,y,D)}}function x(v,T,y,S){S<0&&v.x===1&&(a[T]=v.x-1),y.x===0&&y.z===0&&(a[T]=S/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var fs=class r extends tc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var Or=class r extends yi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],x=[],p=[];for(let m=0;m<u;m++){let v=m*d-a;for(let T=0;T<c;T++){let y=T*f-s;g.push(y,-v,0),x.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let T=v+c*m,y=v+c*(m+1),S=v+1+c*(m+1),w=v+1+c*m;h.push(T,y,w),h.push(y,S,w)}this.setIndex(h),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function xs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(rp(i))i.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(rp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function An(r){let e={};for(let t=0;t<r.length;t++){let n=xs(r[t]);for(let i in n)e[i]=n[i]}return e}function rp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function h_(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Kp={clone:xs,merge:An},f_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new St().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nc=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ds=class extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},po=class extends ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var mo=class extends Xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=_c,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ic=class extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $s(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Fl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Br=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sc=class extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sh:s=e,o=2*t-n;break;case Mh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sh:a=e,l=2*n-t;break;case Mh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,v=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,T=(-1-h)*p+(1.5+h)*x+.5*g,y=h*p-h*x;for(let S=0;S!==o;++S)s[S]=m*a[u+S]+v*a[c+S]+T*a[l+S]+y*a[f+S];return s}},ac=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*u;return s}},oc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},lc=class extends Br{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-t)/(i-t),x=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*x+a[l+p]*g;return s}let d=o*2,h=e-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=h*d+g*2,v=f[m],T=f[m+1],y=e*d+g*2,S=u[y],w=u[y+1],_=m_(n,t,v,S,i);s[g]=Qp(_,x,T,w,p)}return s}};function Qp(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function p_(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function m_(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Qp(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=p_(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var oi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Fl(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new lc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case $l:t=this.InterpolantFactoryMethodLinear;break;case zl:t=this.InterpolantFactoryMethodSmooth;break;case vh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return $l;case this.InterpolantFactoryMethodSmooth:return zl;case this.InterpolantFactoryMethodBezier:return vh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Fl(this.settings)&&(sp(this.settings.inTangents,e),sp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Fl(this.settings)&&(ap(this.settings.inTangents,e),ap(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&P0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let f=o*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[h+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Fl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function sp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function ap(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=$l;var zr=class extends oi{constructor(e,t,n){super(e,t,n)}};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=$a;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};cc.prototype.ValueTypeName="color";var uc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};uc.prototype.ValueTypeName="number";var hc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)vi.slerpFlat(s,0,a,c-o,a,c,l);return s}},go=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new hc(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends oi{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=$a;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};fc.prototype.ValueTypeName="vector";var dc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jp=new dc,pc=class{constructor(e){this.manager=e!==void 0?e:jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var la=class extends dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var xh=new St,op=new Y,lp=new Y,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===ta||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ol=new Y,Bl=new vi,ki=new Y,xo=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,Bl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ol,Bl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new Y,cp=new Je,up=new Je,En=class extends xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,cp,up),t.subVectors(up,cp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Za*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Th=class extends _o{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends la{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vo=class extends xo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wh=class extends _o{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},So=class extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ks=-90,Qs=1,ca=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new En(Ks,Qs,e,t);i.layers=this.layers,this.add(i);let s=new En(Ks,Qs,e,t);s.layers=this.layers,this.add(s);let a=new En(Ks,Qs,e,t);a.layers=this.layers,this.add(a);let o=new En(Ks,Qs,e,t);o.layers=this.layers,this.add(o);let l=new En(Ks,Qs,e,t);l.layers=this.layers,this.add(l);let c=new En(Ks,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},mc=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var rf="\\[\\]\\.:\\/",g_=new RegExp("["+rf+"]","g"),sf="[^"+rf+"]",__="[^"+rf.replace("\\.","")+"]",x_=/((?:WC+[\/:])*)/.source.replace("WC",sf),v_=/(WCOD+)?/.source.replace("WCOD",__),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),S_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),M_=new RegExp("^"+x_+v_+y_+S_+"$"),b_=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g_,"")}static parseTrackName(e){let t=M_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);b_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Eh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P1=new Float32Array(1);var hf=class hf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};hf.prototype.isMatrix2=!0;var Ah=hf;function af(r,e,t,n){let i=T_(n);switch(t){case Xh:return r*e;case Tc:return r*e/i.components*i.byteLength;case wc:return r*e/i.components*i.byteLength;case Hr:return r*e*2/i.components*i.byteLength;case Ec:return r*e*2/i.components*i.byteLength;case qh:return r*e*3/i.components*i.byteLength;case Oi:return r*e*4/i.components*i.byteLength;case Ac:return r*e*4/i.components*i.byteLength;case wo:case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Ic:return Math.max(r,16)*Math.max(e,8)/4;case Cc:case Pc:return Math.max(r,8)*Math.max(e,8)/2;case Lc:case Dc:case Uc:case Fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Ro:case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qc:case jc:case eu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Po:case iu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T_(r){switch(r){case Zn:case Vh:return{byteLength:1,components:1};case da:case Gh:case Fi:return{byteLength:2,components:1};case Mc:case bc:return{byteLength:2,components:4};case Ui:case Sc:case Mi:return{byteLength:4,components:1};case Hh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sm(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function E_(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){let g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){let x=f[h];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var A_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,F_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_x=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ny=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ry=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:A_,alphahash_pars_fragment:C_,alphamap_fragment:R_,alphamap_pars_fragment:P_,alphatest_fragment:I_,alphatest_pars_fragment:L_,aomap_fragment:D_,aomap_pars_fragment:N_,batching_pars_vertex:U_,batching_vertex:F_,begin_vertex:O_,beginnormal_vertex:B_,bsdfs:z_,iridescence_fragment:k_,bumpmap_pars_fragment:V_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:H_,clipping_planes_pars_vertex:W_,clipping_planes_vertex:X_,color_fragment:q_,color_pars_fragment:Y_,color_pars_vertex:Z_,color_vertex:J_,common:$_,defaultnormal_vertex:K_,displacementmap_pars_vertex:Q_,displacementmap_vertex:j_,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:rx,envmap_common_pars_fragment:sx,envmap_pars_fragment:ax,envmap_pars_vertex:ox,envmap_physical_pars_fragment:xx,envmap_vertex:lx,fog_vertex:cx,fog_pars_vertex:ux,fog_fragment:hx,fog_pars_fragment:fx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:_x,lights_toon_fragment:vx,lights_toon_pars_fragment:yx,lights_phong_fragment:Sx,lights_phong_pars_fragment:Mx,lights_physical_fragment:bx,lights_physical_pars_fragment:Tx,lights_fragment_begin:wx,lights_fragment_maps:Ex,lights_fragment_end:Ax,lightprobes_pars_fragment:Cx,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Px,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Lx,map_fragment:Dx,map_pars_fragment:Nx,map_particle_fragment:Ux,map_particle_pars_fragment:Fx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:Bx,morphinstance_vertex:zx,morphcolor_vertex:kx,morphnormal_vertex:Vx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Hx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:qx,normal_pars_vertex:Yx,normal_vertex:Zx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:jx,opaque_fragment:ev,packing:tv,premultiplied_alpha_fragment:nv,project_vertex:iv,dithering_fragment:rv,dithering_pars_fragment:sv,roughnessmap_fragment:av,roughnessmap_pars_fragment:ov,shadowmap_pars_fragment:lv,shadowmap_pars_vertex:cv,shadowmap_vertex:uv,shadowmask_pars_fragment:hv,skinbase_vertex:fv,skinning_pars_vertex:dv,skinning_vertex:pv,skinnormal_vertex:mv,specularmap_fragment:gv,specularmap_pars_fragment:_v,tonemapping_fragment:xv,tonemapping_pars_fragment:vv,transmission_fragment:yv,transmission_pars_fragment:Sv,uv_pars_fragment:Mv,uv_pars_vertex:bv,uv_vertex:Tv,worldpos_vertex:wv,background_vert:Ev,background_frag:Av,backgroundCube_vert:Cv,backgroundCube_frag:Rv,cube_vert:Pv,cube_frag:Iv,depth_vert:Lv,depth_frag:Dv,distance_vert:Nv,distance_frag:Uv,equirect_vert:Fv,equirect_frag:Ov,linedashed_vert:Bv,linedashed_frag:zv,meshbasic_vert:kv,meshbasic_frag:Vv,meshlambert_vert:Gv,meshlambert_frag:Hv,meshmatcap_vert:Wv,meshmatcap_frag:Xv,meshnormal_vert:qv,meshnormal_frag:Yv,meshphong_vert:Zv,meshphong_frag:Jv,meshphysical_vert:$v,meshphysical_frag:Kv,meshtoon_vert:Qv,meshtoon_frag:jv,points_vert:ey,points_frag:ty,shadow_vert:ny,shadow_frag:iy,sprite_vert:ry,sprite_frag:sy},Ee={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ji={basic:{uniforms:An([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:An([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:An([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:An([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:An([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:An([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:An([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:An([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:An([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:An([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:An([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:An([Ee.common,Ee.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:An([Ee.lights,Ee.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ji.physical={uniforms:An([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var ru={r:0,b:0,g:0},ay=new St,Mm=new qe;Mm.set(-1,0,0,0,1,0,0,0,1);function oy(r,e,t,n,i,s){let a=new Xe(0),o=i===!0?0:1,l,c,u=null,f=0,d=null;function h(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function g(v){let T=!1,y=h(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,T){let y=h(T);y&&y.isCubeTexture?(c===void 0&&(c=new Rt(new Fr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:xs(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ay.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mm),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,(u!==y||f!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Rt(new Or(2,2),new Si({name:"BackgroundMaterial",uniforms:xs(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(ru,nf(r)),t.buffers.color.setClear(ru.r,ru.g,ru.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:x,dispose:m}}function ly(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(D,L,B,P,z){let W=!1,F=f(D,P,B,L);s!==F&&(s=F,c(s.object)),W=h(D,P,B,z),W&&g(D,P,B,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(D,L,B,P),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function f(D,L,B,P){let z=P.wireframe===!0,W=n[L.id];W===void 0&&(W={},n[L.id]=W);let F=D.isInstancedMesh===!0?D.id:0,X=W[F];X===void 0&&(X={},W[F]=X);let V=X[B.id];V===void 0&&(V={},X[B.id]=V);let R=V[z];return R===void 0&&(R=d(l()),V[z]=R),R}function d(D){let L=[],B=[],P=[];for(let z=0;z<t;z++)L[z]=0,B[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:P,object:D,attributes:{},index:null}}function h(D,L,B,P){let z=s.attributes,W=L.attributes,F=0,X=B.getAttributes();for(let V in X)if(X[V].location>=0){let Q=z[V],xe=W[V];if(xe===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),Q===void 0||Q.attribute!==xe||xe&&Q.data!==xe.data)return!0;F++}return s.attributesNum!==F||s.index!==P}function g(D,L,B,P){let z={},W=L.attributes,F=0,X=B.getAttributes();for(let V in X)if(X[V].location>=0){let Q=W[V];Q===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let xe={};xe.attribute=Q,Q&&Q.data&&(xe.data=Q.data),z[V]=xe,F++}s.attributes=z,s.attributesNum=F,s.index=P}function x(){let D=s.newAttributes;for(let L=0,B=D.length;L<B;L++)D[L]=0}function p(D){m(D,0)}function m(D,L){let B=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;B[D]=1,P[D]===0&&(r.enableVertexAttribArray(D),P[D]=1),z[D]!==L&&(r.vertexAttribDivisor(D,L),z[D]=L)}function v(){let D=s.newAttributes,L=s.enabledAttributes;for(let B=0,P=L.length;B<P;B++)L[B]!==D[B]&&(r.disableVertexAttribArray(B),L[B]=0)}function T(D,L,B,P,z,W,F){F===!0?r.vertexAttribIPointer(D,L,B,z,W):r.vertexAttribPointer(D,L,B,P,z,W)}function y(D,L,B,P){x();let z=P.attributes,W=B.getAttributes(),F=L.defaultAttributeValues;for(let X in W){let V=W[X];if(V.location>=0){let R=z[X];if(R===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let Q=R.normalized,xe=R.itemSize,Be=e.get(R);if(Be===void 0)continue;let Z=Be.buffer,oe=Be.type,pe=Be.bytesPerElement,ye=oe===r.INT||oe===r.UNSIGNED_INT||R.gpuType===Sc;if(R.isInterleavedBufferAttribute){let he=R.data,Ne=he.isInterleavedBuffer===!0?he.stride:he.itemSize,st=R.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe,he.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)p(V.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let Pe=0;Pe<V.locationSize;Pe++)T(V.location+Pe,xe/V.locationSize,oe,Q,Ne*pe,(st+xe/V.locationSize*Pe)*pe,ye)}else{if(R.isInstancedBufferAttribute){for(let he=0;he<V.locationSize;he++)m(V.location+he,R.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let he=0;he<V.locationSize;he++)p(V.location+he);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let he=0;he<V.locationSize;he++)T(V.location+he,xe/V.locationSize,oe,Q,xe*pe,xe/V.locationSize*he*pe,ye)}}else if(F!==void 0){let Q=F[X];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(V.location,Q);break;case 3:r.vertexAttrib3fv(V.location,Q);break;case 4:r.vertexAttrib4fv(V.location,Q);break;default:r.vertexAttrib1fv(V.location,Q)}}}}v()}function S(){I();for(let D in n){let L=n[D];for(let B in L){let P=L[B];for(let z in P){let W=P[z];for(let F in W)u(W[F].object),delete W[F];delete P[z]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let B in L){let P=L[B];for(let z in P){let W=P[z];for(let F in W)u(W[F].object),delete W[F];delete P[z]}}delete n[D.id]}function _(D){for(let L in n){let B=n[L];for(let P in B){let z=B[P];if(z[D.id]===void 0)continue;let W=z[D.id];for(let F in W)u(W[F].object),delete W[F];delete z[D.id]}}}function M(D){for(let L in n){let B=n[L],P=D.isInstancedMesh===!0?D.id:0,z=B[P];if(z!==void 0){for(let W in z){let F=z[W];for(let X in F)u(F[X].object),delete F[X];delete z[W]}delete B[P],Object.keys(B).length===0&&delete n[L]}}}function I(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function cy(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function uy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Oi&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Zn&&_!==Mi&&!M&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:S,samples:w}}function hy(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Ni,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let v=s?0:n,T=v*4,y=m.clippingState||null;l.value=y,y=u(g,d,T,h);for(let S=0;S!==T;++S)y[S]=t[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=h+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=h;T!==x;++T,y+=4)a.copy(f[T]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var No=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new co(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fr(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ps});s.uniforms.tEquirect.value=t;let a=new Rt(i,s),o=t.minFilter;return t.minFilter===dr&&(t.minFilter=Bn),new ca(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},em=256,fy=3,dy=20,bm=256,Tm=16,py=3,my=new Y,gy=new Xe,ga=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ca(1,10,null),this._boxMesh=new Rt(new Fr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=my}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(gy));let p=new ca(n,i,u);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=g,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(em,jh(e))}_fromTexture(e,t){e.mapping===gs||e.mapping===fa?this._setSize(e.image.length===0?em:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=tm(e,!1,!1),n=Math.log2(e)-fy;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=tm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gs||e.mapping===fa?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_y(),this._integrationMaterial=xy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Tm);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-py)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(bm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vy());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function tm(r,e,t){return new No(r,{minFilter:dr,generateMipmaps:e,type:Fi,colorSpace:Ka,depthBuffer:t})}function Uo(r,e,t){return new Si({name:r,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:_n,blending:ps,depthTest:!1,depthWrite:!1})}function _y(){return Uo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xy(){return Uo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vy(){return Uo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function nm(){return Uo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function im(){return Uo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yy(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){let h=d.mapping;if(h===xc||h===vc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new No(g.height);return x.fromEquirectangularTexture(r,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let h=d.mapping,g=h===xc||h===vc,x=h===gs||h===fa;if(g||x){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new ga(r)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new ga(r)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,h){return h===xc?d.mapping=gs:h===vc&&(d.mapping=fa),d}function l(d){let h=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function c(d){let h=d.target;h.removeEventListener("dispose",c);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Sy(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&us("WebGLRenderer: "+n+" extension not supported."),i}}}function My(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let x=s.get(g);x&&(e.remove(x),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(g){let x=g.attributes;for(let p in x)e.update(x[p],r.ARRAY_BUFFER)}function f(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?io:no,y=new T(Math.ceil(v/3)*6,1),S=y.array;if(x!==null){let _=x.array;m=x.version;for(let M=0,I=0;M<v;M+=3){let A=_[M+0],D=_[M+1],L=_[M+2];S[I++]=A,S[I++]=D,S[I++]=D,S[I++]=L,S[I++]=L,S[I++]=A}}else{m=p.version;for(let _=0,M=0;_<v;_+=3){let I=_+0,A=_+1,D=_+2;S[M++]=I,S[M++]=A,S[M++]=A,S[M++]=D,S[M++]=D,S[M++]=I}}y.version=m;let w=s.get(g);w&&e.remove(w),s.set(g,y)}function d(g){let x=s.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&f(g)}else f(g);return s.get(g)}function h(){for(let g in i){let x=i[g].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function by(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,h){h!==0&&(r.drawElementsInstanced(n,d,s,f*a,h),t.update(d,n,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,h);let x=0;for(let p=0;p<h;p++)x+=d[p];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ty(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wy(r,e,t){let n=new WeakMap,i=new Dt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;h===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*S*4*f),_=new eo(w,y,S,f);_.type=Mi,_.needsUpdate=!0;let M=T*4;for(let A=0;A<f;A++){let D=p[A],L=m[A],B=v[A],P=y*S*4*A;for(let z=0;z<D.count;z++){let W=z*M;h===!0&&(i.fromBufferAttribute(D,z),w[P+W+0]=i.x,w[P+W+1]=i.y,w[P+W+2]=i.z,w[P+W+3]=0),g===!0&&(i.fromBufferAttribute(L,z),w[P+W+4]=i.x,w[P+W+5]=i.y,w[P+W+6]=i.z,w[P+W+7]=0),x===!0&&(i.fromBufferAttribute(B,z),w[P+W+8]=i.x,w[P+W+9]=i.y,w[P+W+10]=i.z,w[P+W+11]=B.itemSize===4?i.w:1)}}d={count:f,texture:_,size:new Je(y,S)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ey(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ay={[Nh]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Fh]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function Cy(r,e,t,n,i,s){let a=new ai(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new yi;u.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new On([0,2,0,0,2,0],2));let f=new nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Rt(u,f),h=new vo(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,v=null,T=[],y=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),l!==null&&l.setSize(S,w);for(let _=0;_<T.length;_++){let M=T[_];M.setSize&&M.setSize(S,w)}},this.setEffects=function(S){T=S,y=T.length>0&&T[0].isRenderPass===!0;let w=a.width,_=a.height;T.length>0&&o===null&&(o=new ai(w,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new ai(w,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&T.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new fr(w,_),s===!0&&(c.format=pr,c.type=_s)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<T.length;I++){let A=T[I];A.setSize&&A.setSize(w,_),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,w){if(p||S.toneMapping===Yi&&T.length===0)return!1;if(v=w,w!==null){let _=w.width,M=w.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Yi,!0},this.hasRenderPass=function(){return y},this.end=function(S,w){S.toneMapping=m,p=!0;let _=a,M=o;for(let I=0;I<T.length;I++){let A=T[I];A.enabled!==!1&&(A.render(S,M,_,w),A.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(g!==S.outputColorSpace||x!==S.toneMapping){g=S.outputColorSpace,x=S.toneMapping,f.defines={},lt.getTransfer(g)===xt&&(f.defines.SRGB_TRANSFER="");let I=Ay[x];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,S.setRenderTarget(v),S.render(d,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var wm=new zn,Em=new fr(1,1),Am=new ho(1),Cm=new eo,Rm=new jl,Pm=new co,rm=[],sm=[],am=new Float32Array(16),om=new Float32Array(9),lm=new Float32Array(4);function _a(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=rm[i];if(s===void 0&&(s=new Float32Array(i),rm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ou(r,e){let t=sm[e];t===void 0&&(t=new Int32Array(e),sm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ry(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Py(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function Iy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function Ly(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function Dy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;lm.set(n),r.uniformMatrix2fv(this.addr,!1,lm),on(t,n)}}function Ny(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;om.set(n),r.uniformMatrix3fv(this.addr,!1,om),on(t,n)}}function Uy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;am.set(n),r.uniformMatrix4fv(this.addr,!1,am),on(t,n)}}function Fy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Oy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function By(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function zy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function ky(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Vy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function Gy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function Hy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function lu(r){return r.version===0&&(r.compareFunction=Jh,r.needsUpdate=!0),r}function Wy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=lu(Em):s=wm,t.setTexture2D(e||s,i)}function Xy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rm,i)}function qy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=lu(Am):s=Pm,t.setTextureCube(e||s,i)}function Yy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cm,i)}function Zy(r){switch(r){case 5126:return Ry;case 35664:return Py;case 35665:return Iy;case 35666:return Ly;case 35674:return Dy;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return By;case 35669:case 35673:return zy;case 5125:return ky;case 36294:return Vy;case 36295:return Gy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function Jy(r,e){r.uniform1fv(this.addr,e)}function $y(r,e){let t=_a(e,this.size,2);r.uniform2fv(this.addr,t)}function Ky(r,e){let t=_a(e,this.size,3);r.uniform3fv(this.addr,t)}function Qy(r,e){let t=_a(e,this.size,4);r.uniform4fv(this.addr,t)}function jy(r,e){let t=_a(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function eS(r,e){let t=_a(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tS(r,e){let t=_a(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nS(r,e){r.uniform1iv(this.addr,e)}function iS(r,e){r.uniform2iv(this.addr,e)}function rS(r,e){r.uniform3iv(this.addr,e)}function sS(r,e){r.uniform4iv(this.addr,e)}function aS(r,e){r.uniform1uiv(this.addr,e)}function oS(r,e){r.uniform2uiv(this.addr,e)}function lS(r,e){r.uniform3uiv(this.addr,e)}function cS(r,e){r.uniform4uiv(this.addr,e)}function uS(r,e,t){let n=this.cache,i=e.length,s=ou(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=lu(Em):a=wm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function hS(r,e,t){let n=this.cache,i=e.length,s=ou(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rm,s[a])}function fS(r,e,t){let n=this.cache,i=e.length,s=ou(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=lu(Am):a=Pm;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function dS(r,e,t){let n=this.cache,i=e.length,s=ou(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cm,s[a])}function pS(r){switch(r){case 5126:return Jy;case 35664:return $y;case 35665:return Ky;case 35666:return Qy;case 35674:return jy;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return rS;case 35669:case 35673:return sS;case 5125:return aS;case 36294:return oS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return dS}}var pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zy(t.type)}},mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pS(t.type)}},gf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},ff=/(\w+)(\])?(\[|\.)?/g;function cm(r,e){r.seq.push(e),r.map[e.id]=e}function mS(r,e,t){let n=r.name,i=n.length;for(ff.lastIndex=0;;){let s=ff.exec(n),a=ff.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){cm(t,c===void 0?new pf(o,r,e):new mf(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new gf(o),cm(t,f)),t=f}}}var ma=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function um(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var gS=37297,_S=0;function xS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var hm=new qe;function vS(r){lt._getMatrix(hm,lt.workingColorSpace,r);let e=`mat3( ${hm.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case Qa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fm(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xS(r.getShaderSource(e),o)}else return s}function yS(r,e){let t=vS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var SS={[Nh]:"Linear",[Uh]:"Reinhard",[Fh]:"Cineon",[bo]:"ACESFilmic",[Bh]:"AgX",[zh]:"Neutral",[Oh]:"Custom"};function MS(r,e){let t=SS[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var su=new Y;function bS(){lt.getLuminanceCoefficients(su);let r=su.x.toFixed(4),e=su.y.toFixed(4),t=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function wS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ES(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Do(r){return r!==""}function dm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function pm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(r){return r.replace(AS,CS)}function CS(r,e){let t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}var RS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(r){return r.replace(RS,PS)}function PS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var IS={[Mo]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function LS(r){return IS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var DS={[fa]:"ENVMAP_MODE_REFRACTION"};function NS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":DS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var US={[_c]:"ENVMAP_BLENDING_MULTIPLY",[Lp]:"ENVMAP_BLENDING_MIX",[Dp]:"ENVMAP_BLENDING_ADD"};function FS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":US[r.combine]||"ENVMAP_BLENDING_NONE"}function OS(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=LS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=NS(t),f=FS(t),d=TS(t),h=wS(s),g=i.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Do).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Do).join(`
`),p.length>0&&(p+=`
`)):(x=[gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),p=[gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Yi?MS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,yS("linearToOutputTexel",t.outputColorSpace),bS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),a=_f(a),a=dm(a,t),a=pm(a,t),o=_f(o),o=dm(o,t),o=pm(o,t),a=mm(a),o=mm(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+x+a,T=m+p+o,y=um(i,i.VERTEX_SHADER,v),S=um(i,i.FRAGMENT_SHADER,T);i.attachShader(g,y),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(A){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",L=i.getShaderInfoLog(y)||"",B=i.getShaderInfoLog(S)||"",P=D.trim(),z=L.trim(),W=B.trim(),F=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,S);else{let V=fm(i,y,"vertex"),R=fm(i,S,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+V+`
`+R)}else P!==""?Ve("WebGLProgram: Program Info Log:",P):(z===""||W==="")&&(X=!1);X&&(A.diagnostics={runnable:F,programLog:P,vertexShader:{log:z,prefix:x},fragmentShader:{log:W,prefix:p}})}i.deleteShader(y),i.deleteShader(S),_=new ma(i,g),M=ES(i,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(g,gS)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=S,this}var BS=0,xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vf(e),t.set(e,n)),n}},vf=class{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}};function zS(r){return r===Hr||r===Ro||r===Po}function kS(r,e,t,n,i,s){let a=new to,o=new xf,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,M,I,A,D,L){let B=A.fog,P=D.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||z,W),X=d[_.type],V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let R=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=R!==void 0?R.length:0,xe=0;P.morphAttributes.position!==void 0&&(xe=1),P.morphAttributes.normal!==void 0&&(xe=2),P.morphAttributes.color!==void 0&&(xe=3);let Be,Z,oe,pe;if(X){let ne=Ji[X];Be=ne.vertexShader,Z=ne.fragmentShader}else{Be=_.vertexShader,Z=_.fragmentShader;let ne=o.getVertexShaderStage(_),Ae=o.getFragmentShaderStage(_);o.update(_,ne,Ae),oe=ne.id,pe=Ae.id}let ye=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,Pe=!!_.map,Ge=!!_.matcap,Ie=!!F,Re=Ie&&F.isPMREMTexture===!0,ct=!!_.aoMap,ut=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,et=!!_.normalMap,Ft=!!_.displacementMap,gt=!!_.emissiveMap,$e=!!_.metalnessMap,Pt=!!_.roughnessMap,Ot=_.anisotropy>0,O=_.clearcoat>0,Se=_.diffuseRoughness>0,Le=_.dispersion>0,Te=_.retroreflectivity>0,se=_.iridescence>0,He=_.sheen>0,we=_.transmission>0,ze=Ot&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,b=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,ae=Se&&!!_.diffuseRoughnessMap,ie=se&&!!_.iridescenceMap,le=se&&!!_.iridescenceThicknessMap,ue=He&&!!_.sheenColorMap,G=He&&!!_.sheenRoughnessMap,j=!!_.specularMap,de=!!_.specularColorMap,N=!!_.specularIntensityMap,ee=we&&!!_.transmissionMap,K=we&&!!_.thicknessMap,me=!!_.gradientMap,fe=!!_.alphaMap,ge=_.alphaTest>0,ce=!!_.alphaHash,_e=!!_.extensions,re=Yi;_.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(re=r.toneMapping);let te=Re?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,ve={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:Z,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:pe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:st,batchingColor:st&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:Ge,envMap:Ie,envMapMode:Ie&&F.mapping,envMapPMREM:Re,envMapMaxLod:Re?te.length-1:null,envMapSize:Re?te[0].width:null,aoMap:ct,lightMap:ut,bumpMap:$,normalMap:et,displacementMap:Ft,emissiveMap:gt,normalMapObjectSpace:et&&_.normalMapType===Fp,normalMapTangentSpace:et&&_.normalMapType===Io,packedNormalMap:et&&_.normalMapType===Io&&zS(_.normalMap.format),metalnessMap:$e,roughnessMap:Pt,anisotropy:Ot,anisotropyMap:ze,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:k,diffuseRoughness:Se,diffuseRoughnessMap:ae,dispersion:Le,retroreflection:Te,iridescence:se,iridescenceMap:ie,iridescenceThicknessMap:le,sheen:He,sheenColorMap:ue,sheenRoughnessMap:G,specularMap:j,specularColorMap:de,specularIntensityMap:N,transmission:we,transmissionMap:ee,thicknessMap:K,gradientMap:me,opaque:_.transparent===!1&&_.blending===ha&&_.alphaToCoverage===!1,alphaMap:fe,alphaTest:ge,alphaHash:ce,combine:_.combine,mapUv:Pe&&h(_.map.channel),aoMapUv:ct&&h(_.aoMap.channel),lightMapUv:ut&&h(_.lightMap.channel),bumpMapUv:$&&h(_.bumpMap.channel),normalMapUv:et&&h(_.normalMap.channel),displacementMapUv:Ft&&h(_.displacementMap.channel),emissiveMapUv:gt&&h(_.emissiveMap.channel),metalnessMapUv:$e&&h(_.metalnessMap.channel),roughnessMapUv:Pt&&h(_.roughnessMap.channel),anisotropyMapUv:ze&&h(_.anisotropyMap.channel),clearcoatMapUv:C&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&h(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&h(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:G&&h(_.sheenRoughnessMap.channel),specularMapUv:j&&h(_.specularMap.channel),specularColorMapUv:de&&h(_.specularColorMap.channel),specularIntensityMapUv:N&&h(_.specularIntensityMap.channel),transmissionMapUv:ee&&h(_.transmissionMap.channel),thicknessMapUv:K&&h(_.thicknessMap.channel),alphaMapUv:fe&&h(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(et||Ot),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Pe||fe),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&lt.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:gt&&_.emissiveMap.isVideoTexture===!0&&lt.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qi,flipSided:_.side===_n,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)M.push(I),M.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let M=d[_.type],I;if(M){let A=Ji[M];I=Kp.clone(A.uniforms)}else I=_.uniforms;return I}function T(_,M){let I=u.get(M);return I!==void 0?++I.usedTimes:(I=new OS(r,M,_,i),c.push(I),u.set(M,I)),I}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:w}}function VS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function GS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function _m(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function xm(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,g,x,p,m){let v=r[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},r[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=g,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=p,v.group=m),e++,v}function l(d,h,g,x,p,m,v){v.reversedDepth===!0&&(p=-p);let T=o(d,h,g,x,p,m);g.transmission>0?n.push(T):g.transparent===!0?i.push(T):t.push(T)}function c(d,h,g,x,p,m){let v=o(d,h,g,x,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(d,h){t.length>1&&t.sort(d||GS),n.length>1&&n.sort(h||_m),i.length>1&&i.sort(h||_m)}function f(){for(let d=e,h=r.length;d<h;d++){let g=r[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function HS(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new xm,r.set(n,[a])):i>=s.length?(a=new xm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function WS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new Xe};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function XS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var qS=0;function YS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ZS(r){let e=new WS,t=XS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let i=new Y,s=new St,a=new St;function o(c){let u=0,f=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let h=0,g=0,x=0,p=0,m=0,v=0,T=0,y=0,S=0,w=0,_=0,M=0,I=0,A=0;c.sort(YS);for(let L=0,B=c.length;L<B;L++){let P=c[L],z=P.color,W=P.intensity,F=P.distance,X=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hr?X=P.shadow.map.texture:X=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*W,f+=z.g*W,d+=z.b*W;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],W);A++}else if(P.isSunLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,Q=t.get(P);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=X;let xe=R.getViewportCount();for(let Be=0;Be<xe;Be++)n.sunShadowMatrix[x+Be]=R.getMatrix(Be),n.sunShadowCascade[x+Be]=R._cascadeData[Be];x+=xe,g++}n.sun[h]=V,h++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let R=P.shadow,Q=t.get(P);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=V,p++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(W),V.distance=F,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[v]=V;let R=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,R.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[v]=R.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=X,_++}v++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(z).multiplyScalar(W),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=V,T++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let R=P.shadow,Q=t.get(P);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=V,m++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(W),V.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[y]=V,y++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==h||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==T||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==A)&&(n.sun.length=h,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=A,D.sunLength=h,D.directionalLength=p,D.pointLength=m,D.spotLength=v,D.rectAreaLength=T,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=A,n.version=qS++)}function l(c,u){let f=0,d=0,h=0,g=0,x=0,p=0,m=u.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function vm(r){let e=new ZS(r),t=[],n=[],i=[];function s(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function JS(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new vm(r),e.set(i,[o])):s>=a.length?(o=new vm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var $S=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QS=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],jS=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],ym=new St,Lo=new Y,df=new Y;function eM(r,e,t){let n=new Ur,i=new Je,s=new Je,a=new Dt,o=new ic,l=new rc,c={},u=t.maxTextureSize,f={[Gr]:_n,[_n]:Gr,[qi]:qi},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:$S,fragmentShader:KS}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let g=new yi;g.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Rt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let m=this.type;this.render=function(w,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===dp&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mo);let I=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(ps),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=m!==this.type;B&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=w.length;P<z;P++){let W=w[P],F=W.shadow;if(F===void 0){Ve("WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let X=F.getFrameExtents();i.multiply(X),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,F.mapSize.y=s.y));let V=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ua){if(W.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ai(i.x,i.y,{format:Hr,type:Fi,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),F.map.texture.name=W.name+".shadowMap",F.map.depthTexture=new fr(i.x,i.y,Mi),F.map.depthTexture.name=W.name+".shadowMapDepth",F.map.depthTexture.format=ur,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn}else W.isPointLight?(F.map=new No(i.x),F.map.depthTexture=new ho(i.x,Ui)):(F.map=new ai(i.x,i.y),F.map.depthTexture=new fr(i.x,i.y,Ui)),F.map.depthTexture.name=W.name+".shadowMap",F.map.depthTexture.format=ur,this.type===Mo?(F.map.depthTexture.compareFunction=V?Zh:Yh,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let R=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();W.isPointLight!==!0&&F.updateMatrices(W,M);let Q=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let xe=0;xe<R;xe++){let Be=F.getCamera(xe);if(W.isPointLight){let Z=F.camera,oe=F.matrix,pe=W.distance||Z.far;pe!==Z.far&&(Z.far=pe,Z.updateProjectionMatrix()),Lo.setFromMatrixPosition(W.matrixWorld),Z.position.copy(Lo),df.copy(Z.position),df.add(QS[xe]),Z.up.copy(jS[xe]),Z.lookAt(df),Z.updateMatrixWorld(),oe.makeTranslation(-Lo.x,-Lo.y,-Lo.z),ym.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ym,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,xe),r.clear();else{xe===0&&(r.setRenderTarget(F.map),r.clear());let Z=F.getViewport(xe);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),L.viewport(a)}n=F.getFrustum(xe),y(_,M,Be,W,Q,this.type)}F.isPointLightShadow!==!0&&this.type===ua&&v(F,M),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(I,A,D)};function v(w,_){let M=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new ai(i.x,i.y,{format:Hr,type:Fi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(_,null,M,d,x,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(_,null,M,h,x,null)}function T(w,_,M,I){let A=null,D=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)A=D;else if(A=M.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let L=A.uuid,B=_.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let z=P[B];z===void 0&&(z=A.clone(),P[B]=z,_.addEventListener("dispose",S)),A=z}if(A.visible=_.visible,A.wireframe=_.wireframe,I===ua?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:f[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=r.properties.get(A);L.light=M}return A}function y(w,_,M,I,A,D){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===ua)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let P=e.update(w),z=w.material;if(Array.isArray(z)){let W=P.groups;for(let F=0,X=W.length;F<X;F++){let V=W[F],R=z[V.materialIndex];if(R&&R.visible){let Q=T(w,R,I,D);w.onBeforeShadow(r,w,_,M,P,Q,V),r.renderBufferDirect(M,null,P,Q,w,V),w.onAfterShadow(r,w,_,M,P,Q,V)}}}else if(z.visible){let W=T(w,z,I,D);w.onBeforeShadow(r,w,_,M,P,W,null),r.renderBufferDirect(M,null,P,W,w,null),w.onAfterShadow(r,w,_,M,P,W,null)}}let B=w.children;for(let P=0,z=B.length;P<z;P++)y(B[P],_,M,I,A,D)}function S(w){w.target.removeEventListener("dispose",S);for(let M in c){let I=c[M],A=w.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}function tM(r,e){function t(){let N=!1,ee=new Dt,K=null,me=new Dt(0,0,0,0);return{setMask:function(fe){K!==fe&&!N&&(r.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){N=fe},setClear:function(fe,ge,ce,_e,re){re===!0&&(fe*=_e,ge*=_e,ce*=_e),ee.set(fe,ge,ce,_e),me.equals(ee)===!1&&(r.clearColor(fe,ge,ce,_e),me.copy(ee))},reset:function(){N=!1,K=null,me.set(-1,0,0,0)}}}function n(){let N=!1,ee=!1,K=null,me=null,fe=null;return{setReversed:function(ge){if(ee!==ge){let ce=e.get("EXT_clip_control");ge?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),ee=ge;let _e=fe;fe=null,this.setClear(_e)}},getReversed:function(){return ee},setTest:function(ge){ge?he(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(ge){K!==ge&&!N&&(r.depthMask(ge),K=ge)},setFunc:function(ge){if(ee&&(ge=Yp[ge]),me!==ge){switch(ge){case Vl:r.depthFunc(r.NEVER);break;case Gl:r.depthFunc(r.ALWAYS);break;case Hl:r.depthFunc(r.LESS);break;case ea:r.depthFunc(r.LEQUAL);break;case Wl:r.depthFunc(r.EQUAL);break;case Xl:r.depthFunc(r.GEQUAL);break;case ql:r.depthFunc(r.GREATER);break;case Yl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=ge}},setLocked:function(ge){N=ge},setClear:function(ge){fe!==ge&&(fe=ge,ee&&(ge=1-ge),r.clearDepth(ge))},reset:function(){N=!1,K=null,me=null,fe=null,ee=!1}}}function i(){let N=!1,ee=null,K=null,me=null,fe=null,ge=null,ce=null,_e=null,re=null;return{setTest:function(te){N||(te?he(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(te){ee!==te&&!N&&(r.stencilMask(te),ee=te)},setFunc:function(te,ve,ne){(K!==te||me!==ve||fe!==ne)&&(r.stencilFunc(te,ve,ne),K=te,me=ve,fe=ne)},setOp:function(te,ve,ne){(ge!==te||ce!==ve||_e!==ne)&&(r.stencilOp(te,ve,ne),ge=te,ce=ve,_e=ne)},setLocked:function(te){N=te},setClear:function(te){re!==te&&(r.clearStencil(te),re=te)},reset:function(){N=!1,ee=null,K=null,me=null,fe=null,ge=null,ce=null,_e=null,re=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,u={},f={},d={},h=new WeakMap,g=[],x=null,p=!1,m=null,v=null,T=null,y=null,S=null,w=null,_=null,M=new Xe(0,0,0),I=0,A=!1,D=null,L=null,B=null,P=null,z=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,X=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=X>=2);let R=null,Q={},xe=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),Z=new Dt().fromArray(xe),oe=new Dt().fromArray(Be);function pe(N,ee,K,me){let fe=new Uint8Array(4),ge=r.createTexture();r.bindTexture(N,ge),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<K;ce++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(ee+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ge}let ye={};ye[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(r.DEPTH_TEST),a.setFunc(ea),$(!1),et(Ch),he(r.CULL_FACE),ct(ps);function he(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function Ne(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function st(N,ee){return d[N]!==ee?(r.bindFramebuffer(N,ee),d[N]=ee,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ee),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function Pe(N,ee){let K=g,me=!1;if(N){K=h.get(ee),K===void 0&&(K=[],h.set(ee,K));let fe=N.textures;if(K.length!==fe.length||K[0]!==r.COLOR_ATTACHMENT0){for(let ge=0,ce=fe.length;ge<ce;ge++)K[ge]=r.COLOR_ATTACHMENT0+ge;K.length=fe.length,me=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,me=!0);me&&r.drawBuffers(K)}function Ge(N){return x!==N?(r.useProgram(N),x=N,!0):!1}let Ie={[ms]:r.FUNC_ADD,[mp]:r.FUNC_SUBTRACT,[gp]:r.FUNC_REVERSE_SUBTRACT};Ie[_p]=r.MIN,Ie[xp]=r.MAX;let Re={[vp]:r.ZERO,[yp]:r.ONE,[Sp]:r.SRC_COLOR,[Lh]:r.SRC_ALPHA,[Ap]:r.SRC_ALPHA_SATURATE,[wp]:r.DST_COLOR,[bp]:r.DST_ALPHA,[Mp]:r.ONE_MINUS_SRC_COLOR,[Dh]:r.ONE_MINUS_SRC_ALPHA,[Ep]:r.ONE_MINUS_DST_COLOR,[Tp]:r.ONE_MINUS_DST_ALPHA,[Cp]:r.CONSTANT_COLOR,[Rp]:r.ONE_MINUS_CONSTANT_COLOR,[Pp]:r.CONSTANT_ALPHA,[Ip]:r.ONE_MINUS_CONSTANT_ALPHA};function ct(N,ee,K,me,fe,ge,ce,_e,re,te){if(N===ps){p===!0&&(Ne(r.BLEND),p=!1);return}if(p===!1&&(he(r.BLEND),p=!0),N!==pp){if(N!==m||te!==A){if((v!==ms||S!==ms)&&(r.blendEquation(r.FUNC_ADD),v=ms,S=ms),te)switch(N){case ha:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rh:r.blendFunc(r.ONE,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ih:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case ha:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ph:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ih:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}T=null,y=null,w=null,_=null,M.set(0,0,0),I=0,m=N,A=te}return}fe=fe||ee,ge=ge||K,ce=ce||me,(ee!==v||fe!==S)&&(r.blendEquationSeparate(Ie[ee],Ie[fe]),v=ee,S=fe),(K!==T||me!==y||ge!==w||ce!==_)&&(r.blendFuncSeparate(Re[K],Re[me],Re[ge],Re[ce]),T=K,y=me,w=ge,_=ce),(_e.equals(M)===!1||re!==I)&&(r.blendColor(_e.r,_e.g,_e.b,re),M.copy(_e),I=re),m=N,A=!1}function ut(N,ee){N.side===qi?Ne(r.CULL_FACE):he(r.CULL_FACE);let K=N.side===_n;ee&&(K=!K),$(K),N.blending===ha&&N.transparent===!1?ct(ps):ct(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let me=N.stencilWrite;o.setTest(me),me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function et(N){N!==hp?(he(r.CULL_FACE),N!==L&&(N===Ch?r.cullFace(r.BACK):N===fp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),L=N}function Ft(N){N!==B&&(F&&r.lineWidth(N),B=N)}function gt(N,ee,K){N?(he(r.POLYGON_OFFSET_FILL),(P!==ee||z!==K)&&(P=ee,z=K,a.getReversed()&&(ee=-ee,K=-K),r.polygonOffset(ee,K))):Ne(r.POLYGON_OFFSET_FILL)}function $e(N){N?he(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function Pt(N){N===void 0&&(N=r.TEXTURE0+W-1),R!==N&&(r.activeTexture(N),R=N)}function Ot(N,ee,K){K===void 0&&(R===null?K=r.TEXTURE0+W-1:K=R);let me=Q[K];me===void 0&&(me={type:void 0,texture:void 0},Q[K]=me),(me.type!==N||me.texture!==ee)&&(R!==K&&(r.activeTexture(K),R=K),r.bindTexture(N,ee||ye[N]),me.type=N,me.texture=ee)}function O(){let N=Q[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Se(){try{r.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function Le(){try{r.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Te(){try{r.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function se(){try{r.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function He(){try{r.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function we(){try{r.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function ze(){try{r.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function C(){try{r.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function b(){try{r.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function k(){try{r.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function ae(N){return f[N]!==void 0?f[N]:r.getParameter(N)}function ie(N,ee){f[N]!==ee&&(r.pixelStorei(N,ee),f[N]=ee)}function le(N){Z.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Z.copy(N))}function ue(N){oe.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),oe.copy(N))}function G(N,ee){let K=c.get(ee);K===void 0&&(K=new WeakMap,c.set(ee,K));let me=K.get(N);me===void 0&&(me=r.getUniformBlockIndex(ee,N.name),r.uniformBlockBinding(ee,me,me),K.set(N,me))}function j(N,ee,K){let fe=c.get(ee).get(N);l[fe]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,fe,K),l[fe]=K)}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},R=null,Q={},d={},l={},h=new WeakMap,g=[],x=null,p=!1,m=null,v=null,T=null,y=null,S=null,w=null,_=null,M=new Xe(0,0,0),I=0,A=!1,D=null,L=null,B=null,P=null,z=null,Z.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Ne,bindFramebuffer:st,drawBuffers:Pe,useProgram:Ge,setBlending:ct,setMaterial:ut,setFlipSided:$,setCullFace:et,setLineWidth:Ft,setPolygonOffset:gt,setScissorTest:$e,activeTexture:Pt,bindTexture:Ot,unbindTexture:O,compressedTexImage2D:Se,compressedTexImage3D:Le,texImage2D:b,texImage3D:k,pixelStorei:ie,getParameter:ae,updateUBOMapping:G,uniformBlockBinding:j,texStorage2D:ze,texStorage3D:C,texSubImage2D:Te,texSubImage3D:se,compressedTexSubImage2D:He,compressedTexSubImage3D:we,scissor:le,viewport:ue,reset:de}}function nM(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap,f=new Set,d,h=new WeakMap,g=new Set,x=new FinalizationRegistry(C=>g.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return p?new OffscreenCanvas(C,b):ja("canvas")}function v(C,b,k){let ae=1,ie=ze(C);if((ie.width>k||ie.height>k)&&(ae=k/Math.max(ie.width,ie.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let le=Math.floor(ae*ie.width),ue=Math.floor(ae*ie.height);d===void 0&&(d=m(le,ue));let G=b?m(le,ue):d;return G.width=le,G.height=ue,G.getContext("2d").drawImage(C,0,0,le,ue),Ve("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+le+"x"+ue+")."),G}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function T(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,b,k,ae,ie,le=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue;ae&&(ue=e.get("EXT_texture_norm16"),ue||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let G=b;if(b===r.RED&&(k===r.FLOAT&&(G=r.R32F),k===r.HALF_FLOAT&&(G=r.R16F),k===r.UNSIGNED_BYTE&&(G=r.R8),k===r.UNSIGNED_SHORT&&ue&&(G=ue.R16_EXT),k===r.SHORT&&ue&&(G=ue.R16_SNORM_EXT)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.R8UI),k===r.UNSIGNED_SHORT&&(G=r.R16UI),k===r.UNSIGNED_INT&&(G=r.R32UI),k===r.BYTE&&(G=r.R8I),k===r.SHORT&&(G=r.R16I),k===r.INT&&(G=r.R32I)),b===r.RG&&(k===r.FLOAT&&(G=r.RG32F),k===r.HALF_FLOAT&&(G=r.RG16F),k===r.UNSIGNED_BYTE&&(G=r.RG8),k===r.UNSIGNED_SHORT&&ue&&(G=ue.RG16_EXT),k===r.SHORT&&ue&&(G=ue.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RG8UI),k===r.UNSIGNED_SHORT&&(G=r.RG16UI),k===r.UNSIGNED_INT&&(G=r.RG32UI),k===r.BYTE&&(G=r.RG8I),k===r.SHORT&&(G=r.RG16I),k===r.INT&&(G=r.RG32I)),b===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGB8UI),k===r.UNSIGNED_SHORT&&(G=r.RGB16UI),k===r.UNSIGNED_INT&&(G=r.RGB32UI),k===r.BYTE&&(G=r.RGB8I),k===r.SHORT&&(G=r.RGB16I),k===r.INT&&(G=r.RGB32I)),b===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),k===r.UNSIGNED_INT&&(G=r.RGBA32UI),k===r.BYTE&&(G=r.RGBA8I),k===r.SHORT&&(G=r.RGBA16I),k===r.INT&&(G=r.RGBA32I)),b===r.RGB&&(k===r.UNSIGNED_SHORT&&ue&&(G=ue.RGB16_EXT),k===r.SHORT&&ue&&(G=ue.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),b===r.RGBA){let j=le?Qa:lt.getTransfer(ie);k===r.FLOAT&&(G=r.RGBA32F),k===r.HALF_FLOAT&&(G=r.RGBA16F),k===r.UNSIGNED_BYTE&&(G=j===xt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ue&&(G=ue.RGBA16_EXT),k===r.SHORT&&ue&&(G=ue.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function _(C,b){let k;return C?b===null||b===Ui||b===_s?k=r.DEPTH24_STENCIL8:b===Mi?k=r.DEPTH32F_STENCIL8:b===da&&(k=r.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ui||b===_s?k=r.DEPTH_COMPONENT24:b===Mi?k=r.DEPTH_COMPONENT32F:b===da&&(k=r.DEPTH_COMPONENT16),k}function M(C,b){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function I(C){let b=new WeakRef(C);n.get(C).__ref=b,g.add(b),x.register(C,b,b)}function A(C){let b=n.get(C).__ref;b!==void 0&&(g.delete(b),x.unregister(b))}function D(C){B(C.target)}function L(C){P(C.target)}function B(C){C.removeEventListener("dispose",D),A(C),W(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&f.delete(C)}function P(C){C.removeEventListener("dispose",L),A(C),X(C)}function z(){for(let C of g){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?P(b):B(b))}g.clear(),f.clear()}function W(C){let b=n.get(C);if(b.__webglInit===void 0)return;let k=C.source,ae=h.get(k);if(ae){let ie=ae[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(C),Object.keys(ae).length===0&&h.delete(k)}n.remove(C)}function F(C){let b=n.get(C);r.deleteTexture(b.__webglTexture);let k=C.source,ae=h.get(k);delete ae[b.__cacheKey],a.memory.textures--}function X(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let k=C.depthTexture;if(k&&k.renderTarget===C&&B(k),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let le=0;le<b.__webglFramebuffer[ie].length;le++)r.deleteFramebuffer(b.__webglFramebuffer[ie][le]);else r.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)r.deleteFramebuffer(b.__webglFramebuffer[ie]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ae=C.textures;for(let ie=0,le=ae.length;ie<le;ie++){let ue=n.get(ae[ie]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(ae[ie])}n.remove(C)}let V=0;function R(){V=0}function Q(){return V}function xe(C){V=C}function Be(){let C=V;return C>=i.maxTextures&&Ve("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,C}function Z(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function oe(C,b){let k=n.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let ae=C.image;if(ae===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(k,C,b);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}function pe(C,b){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ut(k,C,b);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)}function ye(C,b){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ut(k,C,b);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)}function he(C,b){let k=n.get(C);if(C.version>0&&k.__version!==C.version){$(k,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)}let Ne={[Zl]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[Jl]:r.MIRRORED_REPEAT},st={[fn]:r.NEAREST,[Np]:r.NEAREST_MIPMAP_NEAREST,[To]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[yc]:r.LINEAR_MIPMAP_NEAREST,[dr]:r.LINEAR_MIPMAP_LINEAR},Pe={[Bp]:r.NEVER,[Jh]:r.ALWAYS,[zp]:r.LESS,[Yh]:r.LEQUAL,[kp]:r.EQUAL,[Zh]:r.GEQUAL,[Vp]:r.GREATER,[Gp]:r.NOTEQUAL};function Ge(C,b){if(b.type===Mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===yc||b.magFilter===To||b.magFilter===dr||b.minFilter===Bn||b.minFilter===yc||b.minFilter===To||b.minFilter===dr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Ne[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Ne[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Ne[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,st[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,st[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Pe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==To&&b.minFilter!==dr||b.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ie(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D),I(b));let ae=b.source,ie=h.get(ae);ie===void 0&&(ie={},h.set(ae,ie));let le=Z(b);if(le!==C.__cacheKey){ie[le]===void 0&&(ie[le]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ie[le].usedTimes++;let ue=ie[C.__cacheKey];ue!==void 0&&(ie[C.__cacheKey].usedTimes--,ue.usedTimes===0&&F(b)),C.__cacheKey=le,C.__webglTexture=ie[le].texture}return k}function Re(C,b,k){return Math.floor(Math.floor(C/k)/b)}function ct(C,b,k,ae){let le=C.updateRanges;if(le.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,k,ae,b.data);else{le.sort((N,ee)=>N.start-ee.start);let ue=0;for(let N=1;N<le.length;N++){let ee=le[ue],K=le[N],me=ee.start+ee.count,fe=Re(K.start,b.width,4),ge=Re(ee.start,b.width,4);K.start<=me+1&&fe===ge&&Re(K.start+K.count-1,b.width,4)===fe?ee.count=Math.max(ee.count,K.start+K.count-ee.start):(++ue,le[ue]=K)}le.length=ue+1;let G=t.getParameter(r.UNPACK_ROW_LENGTH),j=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let N=0,ee=le.length;N<ee;N++){let K=le[N],me=Math.floor(K.start/4),fe=Math.ceil(K.count/4),ge=me%b.width,ce=Math.floor(me/b.width),_e=fe,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,ce),t.texSubImage2D(r.TEXTURE_2D,0,ge,ce,_e,re,k,ae,b.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,G),t.pixelStorei(r.UNPACK_SKIP_PIXELS,j),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function ut(C,b,k){let ae=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=r.TEXTURE_3D);let ie=Ie(C,b),le=b.source;t.bindTexture(ae,C.__webglTexture,r.TEXTURE0+k);let ue=n.get(le);if(le.version!==ue.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let re=lt.getPrimaries(lt.workingColorSpace),te=b.colorSpace===mr?null:lt.getPrimaries(b.colorSpace),ve=b.colorSpace===mr||re===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let j=v(b.image,!1,i.maxTextureSize);j=we(b,j);let de=s.convert(b.format,b.colorSpace),N=s.convert(b.type),ee=w(b.internalFormat,de,N,b.normalized,b.colorSpace,b.isVideoTexture);Ge(ae,b);let K,me=b.mipmaps,fe=b.isVideoTexture!==!0,ge=ue.__version===void 0||ie===!0,ce=le.dataReady,_e=M(b,j);if(b.isDepthTexture)ee=_(b.format===pr,b.type),ge&&(fe?t.texStorage2D(r.TEXTURE_2D,1,ee,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,ee,j.width,j.height,0,de,N,null));else if(b.isDataTexture)if(me.length>0){fe&&ge&&t.texStorage2D(r.TEXTURE_2D,_e,ee,me[0].width,me[0].height);for(let re=0,te=me.length;re<te;re++)K=me[re],fe?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,de,N,K.data):t.texImage2D(r.TEXTURE_2D,re,ee,K.width,K.height,0,de,N,K.data);b.generateMipmaps=!1}else fe?(ge&&t.texStorage2D(r.TEXTURE_2D,_e,ee,j.width,j.height),ce&&ct(b,j,de,N)):t.texImage2D(r.TEXTURE_2D,0,ee,j.width,j.height,0,de,N,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){fe&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ee,me[0].width,me[0].height,j.depth);for(let re=0,te=me.length;re<te;re++)if(K=me[re],b.format!==Oi)if(de!==null)if(fe){if(ce)if(b.layerUpdates.size>0){let ve=af(K.width,K.height,b.format,b.type);for(let ne of b.layerUpdates){let Ae=K.data.subarray(ne*ve/K.data.BYTES_PER_ELEMENT,(ne+1)*ve/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ne,K.width,K.height,1,de,Ae)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,de,K.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,ee,K.width,K.height,j.depth,0,K.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,de,N,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,ee,K.width,K.height,j.depth,0,de,N,K.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{fe&&ge&&t.texStorage2D(r.TEXTURE_2D,_e,ee,me[0].width,me[0].height);for(let re=0,te=me.length;re<te;re++)K=me[re],b.format!==Oi?de!==null?fe?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,de,K.data):t.compressedTexImage2D(r.TEXTURE_2D,re,ee,K.width,K.height,0,K.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,de,N,K.data):t.texImage2D(r.TEXTURE_2D,re,ee,K.width,K.height,0,de,N,K.data)}else if(b.isDataArrayTexture)if(fe){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,ee,j.width,j.height,j.depth),ce)if(b.layerUpdates.size>0){let re=af(j.width,j.height,b.format,b.type);for(let te of b.layerUpdates){let ve=j.data.subarray(te*re/j.data.BYTES_PER_ELEMENT,(te+1)*re/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,j.width,j.height,1,de,N,ve)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,de,N,j.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,j.width,j.height,j.depth,0,de,N,j.data);else if(b.isData3DTexture)fe?(ge&&t.texStorage3D(r.TEXTURE_3D,_e,ee,j.width,j.height,j.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,de,N,j.data)):t.texImage3D(r.TEXTURE_3D,0,ee,j.width,j.height,j.depth,0,de,N,j.data);else if(b.isFramebufferTexture){if(ge)if(fe)t.texStorage2D(r.TEXTURE_2D,_e,ee,j.width,j.height);else{let re=j.width,te=j.height;for(let ve=0;ve<_e;ve++)t.texImage2D(r.TEXTURE_2D,ve,ee,re,te,0,de,N,null),re>>=1,te>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),f.add(b),re.onpaint=te=>{let ve=te.changedElements;for(let ne of f)ve.includes(ne.image)&&(ne.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let ve=r.RGBA,ne=r.RGBA,Ae=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,ve,ne,Ae,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(me.length>0){if(fe&&ge){let re=ze(me[0]);t.texStorage2D(r.TEXTURE_2D,_e,ee,re.width,re.height)}for(let re=0,te=me.length;re<te;re++)K=me[re],fe?ce&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,de,N,K):t.texImage2D(r.TEXTURE_2D,re,ee,de,N,K);b.generateMipmaps=!1}else if(fe){if(ge){let re=ze(j);t.texStorage2D(r.TEXTURE_2D,_e,ee,re.width,re.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,N,j)}else t.texImage2D(r.TEXTURE_2D,0,ee,de,N,j);T(b)&&b.mipmapsAutoUpdate===!0&&y(ae),ue.__version=le.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function $(C,b,k){if(b.image.length!==6)return;let ae=Ie(C,b),ie=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);let le=n.get(ie);if(ie.version!==le.__version||ae===!0){t.activeTexture(r.TEXTURE0+k);let ue=lt.getPrimaries(lt.workingColorSpace),G=b.colorSpace===mr?null:lt.getPrimaries(b.colorSpace),j=b.colorSpace===mr||ue===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let de=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!de&&!N?ee[ne]=v(b.image[ne],!0,i.maxCubemapSize):ee[ne]=N?b.image[ne].image:b.image[ne],ee[ne]=we(b,ee[ne]);let K=ee[0],me=s.convert(b.format,b.colorSpace),fe=s.convert(b.type),ge=w(b.internalFormat,me,fe,b.normalized,b.colorSpace),ce=b.isVideoTexture!==!0,_e=le.__version===void 0||ae===!0,re=ie.dataReady,te=M(b,K);Ge(r.TEXTURE_CUBE_MAP,b);let ve;if(b.isDepthTexture){if(ge=_(b.format===pr,b.type),_e)if(ce)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,ge,K.width,K.height);else for(let ne=0;ne<6;ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,K.width,K.height,0,me,fe,null)}else if(de){ce&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ge,K.width,K.height);for(let ne=0;ne<6;ne++){ve=ee[ne].mipmaps;for(let Ae=0;Ae<ve.length;Ae++){let it=ve[Ae];b.format!==Oi?me!==null?ce?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,it.width,it.height,me,it.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,ge,it.width,it.height,0,it.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,it.width,it.height,me,fe,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,ge,it.width,it.height,0,me,fe,it.data)}}}else{if(ve=b.mipmaps,ce&&_e){ve.length>0&&te++;let ne=ze(ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(N){ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,me,fe,ee[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,ee[ne].width,ee[ne].height,0,me,fe,ee[ne].data);for(let Ae=0;Ae<ve.length;Ae++){let Ye=ve[Ae].image[ne].image;ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Ye.width,Ye.height,me,fe,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,ge,Ye.width,Ye.height,0,me,fe,Ye.data)}}else{ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me,fe,ee[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ge,me,fe,ee[ne]);for(let Ae=0;Ae<ve.length;Ae++){let it=ve[Ae];ce?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,me,fe,it.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,ge,me,fe,it.image[ne])}}}T(b)&&b.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),le.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function et(C,b,k,ae,ie,le){let ue=s.convert(k.format,k.colorSpace),G=s.convert(k.type),j=w(k.internalFormat,ue,G,k.normalized,k.colorSpace),de=n.get(b),N=n.get(k);if(N.__renderTarget=b,!de.__hasExternalTextures){let ee=Math.max(1,b.width>>le),K=Math.max(1,b.height>>le);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,le,j,ee,K,b.depth,0,ue,G,null):t.texImage2D(ie,le,j,ee,K,0,ue,G,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),se(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ie,N.__webglTexture,0,Te(b)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,ie,N.__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ft(C,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){let ae=b.depthTexture,ie=ae&&ae.isDepthTexture?ae.type:null,le=_(b.stencilBuffer,ie),ue=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;se(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te(b),le,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te(b),le,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,le,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ue,r.RENDERBUFFER,C)}else{let ae=b.textures;for(let ie=0;ie<ae.length;ie++){let le=ae[ie],ue=s.convert(le.format,le.colorSpace),G=s.convert(le.type),j=w(le.internalFormat,ue,G,le.normalized,le.colorSpace);se(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te(b),j,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te(b),j,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,j,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(C,b,k){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(b.depthTexture);ie.__renderTarget=b;let le=ae?b.depthTexture.image[0]:b.depthTexture.image;(!ie.__webglTexture||le.width!==b.width||le.height!==b.height)&&(le.width=b.width,le.height=b.height,b.depthTexture.needsUpdate=!0),ae?he(b.depthTexture,0):oe(b.depthTexture,0);let ue=ie.__webglTexture,G=Te(b),j=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,de=b.depthTexture.format===pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ur)se(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,j,ue,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,de,j,ue,0);else if(b.depthTexture.format===pr)se(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,j,ue,0,G):r.framebufferTexture2D(r.FRAMEBUFFER,de,j,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(C){let b=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ae=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ie)};ae.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=ae}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let ae=0;ae<6;ae++)gt(b.__webglFramebuffer[ae],C,ae);else C.texture.mipmaps.length>0?gt(b.__webglFramebuffer[0],C,0):gt(b.__webglFramebuffer,C,0);else if(k){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=r.createRenderbuffer(),Ft(b.__webglDepthbuffer[ae],C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,le)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ft(b.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,le)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(C,b,k){let ae=n.get(C);b!==void 0&&et(ae.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&$e(C)}function Ot(C){let b=C.texture,k=n.get(C),ae=n.get(b);C.addEventListener("dispose",L),I(C);let ie=C.textures,le=C.isWebGLCubeRenderTarget===!0,ue=ie.length>1;if(ue||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=b.version,a.memory.textures++),le){k.__webglFramebuffer=[];for(let G=0;G<6;G++)if(b.mipmaps.length>0){k.__webglFramebuffer[G]=[];for(let j=0;j<b.mipmaps.length;j++)k.__webglFramebuffer[G][j]=r.createFramebuffer()}else k.__webglFramebuffer[G]=r.createFramebuffer()}else{if(b.mipmaps.length>0){k.__webglFramebuffer=[];for(let G=0;G<b.mipmaps.length;G++)k.__webglFramebuffer[G]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ue)for(let G=0,j=ie.length;G<j;G++){let de=n.get(ie[G]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&se(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<ie.length;G++){let j=ie[G];k.__webglColorRenderbuffer[G]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[G]);let de=s.convert(j.format,j.colorSpace),N=s.convert(j.type),ee=w(j.internalFormat,de,N,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),K=Te(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,ee,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+G,r.RENDERBUFFER,k.__webglColorRenderbuffer[G])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ft(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Ge(r.TEXTURE_CUBE_MAP,b);for(let G=0;G<6;G++)if(b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)et(k.__webglFramebuffer[G][j],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,j);else et(k.__webglFramebuffer[G],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);T(b)?y(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let G=0,j=ie.length;G<j;G++){let de=ie[G],N=n.get(de),ee=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,N.__webglTexture),Ge(ee,de),et(k.__webglFramebuffer,C,de,r.COLOR_ATTACHMENT0+G,ee,0),T(de)&&y(ee)}t.unbindTexture()}else{let G=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(G=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(G,ae.__webglTexture),Ge(G,b),b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)et(k.__webglFramebuffer[j],C,b,r.COLOR_ATTACHMENT0,G,j);else et(k.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,G,0);T(b)?y(G):b.mipmaps.length>0&&r.texParameteri(G,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&$e(C)}function O(C){let b=C.textures;for(let k=0,ae=b.length;k<ae;k++){let ie=b[k];if(T(ie)&&ie.mipmapsAutoUpdate===!0){let le=S(C),ue=n.get(ie).__webglTexture;t.bindTexture(le,ue),y(le),t.unbindTexture()}}}let Se=[];function Le(C){if(C.samples>0){if(se(C)===!1){let b=C.textures,k=C.width,ae=C.height,ie=r.COLOR_BUFFER_BIT,le=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(C),G=b.length>1;if(G)for(let de=0;de<b.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<b.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),G){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let N=n.get(b[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,k,ae,0,0,k,ae,ie,r.NEAREST),l===!0&&(Se.length=0,Se.push(r.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Se.push(le),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),G)for(let de=0;de<b.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);let N=n.get(b[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Te(C){return Math.min(i.maxSamples,C.samples)}function se(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function He(C){let b=a.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function we(C,b){let k=C.colorSpace,ae=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ka&&k!==mr&&(lt.getTransfer(k)===xt?(ae!==Oi||ie!==Zn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",k)),b}function ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=R,this.getTextureUnits=Q,this.setTextureUnits=xe,this.setTexture2D=oe,this.setTexture2DArray=pe,this.setTexture3D=ye,this.setTextureCube=he,this.rebindTextures=Pt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=et,this.useMultisampledRTT=se,this.dispose=z}function iM(r,e){function t(n,i=mr){let s,a=lt.getTransfer(i);if(n===Zn)return r.UNSIGNED_BYTE;if(n===Mc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return r.BYTE;if(n===Gh)return r.SHORT;if(n===da)return r.UNSIGNED_SHORT;if(n===Sc)return r.INT;if(n===Ui)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===Xh)return r.ALPHA;if(n===qh)return r.RGB;if(n===Oi)return r.RGBA;if(n===ur)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===Tc)return r.RED;if(n===wc)return r.RED_INTEGER;if(n===Hr)return r.RG;if(n===Ec)return r.RG_INTEGER;if(n===Ac)return r.RGBA_INTEGER;if(n===wo||n===Eo||n===Ao||n===Co)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Rc||n===Pc||n===Ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Ro||n===Oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lc||n===Dc)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return s.COMPRESSED_R11_EAC;if(n===Fc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return s.COMPRESSED_RG11_EAC;if(n===Oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Jc||n===$c||n===Kc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===jc||n===eu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qc)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===nu||n===Po||n===iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===tu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Si({vertexShader:rM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sf=class extends Gi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null,x=typeof XRWebGLBinding<"u",p=new yf,m={},v=t.getContextAttributes(),T=null,y=null,S=[],w=[],_=new Je,M=null,I=null,A=new En;A.viewport=new Dt;let D=new En;D.viewport=new Dt;let L=[A,D],B=new mc,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=S[Z];return oe===void 0&&(oe=new sa,S[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=S[Z];return oe===void 0&&(oe=new sa,S[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=S[Z];return oe===void 0&&(oe=new sa,S[Z]=oe),oe.getHandSpace()};function W(Z){let oe=w.indexOf(Z.inputSource);if(oe===-1)return;let pe=S[oe];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,c||a),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",X);for(let Z=0;Z<S.length;Z++){let oe=w[Z];oe!==null&&(w[Z]=null,S[Z].disconnect(oe))}P=null,z=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(T),h=null,d=null,f=null,i=null,y=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",F),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ye=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?pr:ur,ye=v.stencil?_s:Ui);let Ne={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ai(d.textureWidth,d.textureHeight,{format:Oi,type:Zn,depthTexture:new fr(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,pe),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new ai(h.framebufferWidth,h.framebufferHeight,{format:Oi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(Z){for(let oe=0;oe<Z.removed.length;oe++){let pe=Z.removed[oe],ye=w.indexOf(pe);ye>=0&&(w[ye]=null,S[ye].disconnect(pe))}for(let oe=0;oe<Z.added.length;oe++){let pe=Z.added[oe],ye=w.indexOf(pe);if(ye===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=w.length){w.push(pe),ye=Ne;break}else if(w[Ne]===null){w[Ne]=pe,ye=Ne;break}if(ye===-1)break}let he=S[ye];he&&he.connect(pe)}}function V(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let oe=Z.near,pe=Z.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),B.near=D.near=A.near=oe,B.far=D.far=A.far=pe,(P!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,z=B.far),B.layers.mask=Z.layers.mask|6,A.layers.mask=B.layers.mask&-5,D.layers.mask=B.layers.mask&-3;let ye=Z.parent,he=B.cameras;V(B,ye);for(let Ne=0;Ne<he.length;Ne++)V(he[Ne],ye);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),R(Z,B,ye)};function R(Z,oe,pe){pe===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ia*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(Z){return m[Z]};let Q=null;function xe(Z,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){let pe=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let ye=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,ye=!0);for(let Pe=0;Pe<pe.length;Pe++){let Ge=pe[Pe],Ie=null;if(h!==null)Ie=h.getViewport(Ge);else{let ct=f.getViewSubImage(d,Ge);Ie=ct.viewport,Pe===0&&(e.setRenderTargetTextures(y,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(y))}let Re=L[Pe];Re===void 0&&(Re=new En,Re.layers.enable(Pe),Re.viewport=new Dt,L[Pe]=Re),Re.matrix.fromArray(Ge.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ge.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Pe===0&&(B.matrix.copy(Re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ye===!0&&B.cameras.push(Re)}let he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Pe=f.getDepthInformation(pe[0]);Pe&&Pe.isValid&&Pe.texture&&p.init(Pe,i.renderState)}if(he&&he.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Pe=0;Pe<pe.length;Pe++){let Ge=pe[Pe].camera;if(Ge){let Ie=m[Ge];Ie||(Ie=new fo,m[Ge]=Ie);let Re=f.getCameraImage(Ge);Ie.sourceTexture=Re}}}}for(let pe=0;pe<S.length;pe++){let ye=w[pe],he=S[pe];ye!==null&&he!==void 0&&he.update(ye,oe,c||a)}Q&&Q(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Be=new Sm;Be.setAnimationLoop(xe),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}},aM=new St,Im=new qe;Im.set(-1,0,0,0,1,0,0,0,1);function oM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,T,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),T=v.envMap,y=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(aM.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Im),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lM(r,e,t,n){let i={},s={};function a(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,T){let y=i[v.id];y===void 0&&(g(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let S=T.program;n.updateUBOMapping(v,S);let w=e.render.frame;s[v.id]!==w&&(c(v),s[v.id]=w)}function l(v){let T=r.createBuffer(),y=v.__size,S=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,y,S),r.bindBuffer(r.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let w=0,_=y.length;w<_;w++){let M=y[w];if(Array.isArray(M))for(let I=0,A=M.length;I<A;I++)u(M[I],w,I,S);else u(M,w,0,S)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,T,y,S){if(d(v,T,y,S)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let I=0;I<_.length;I++){let A=_[I],D=x(A,!0);f(A,v.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,v.__data)}}function f(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function d(v,T,y,S){let w=v.value,_=T+"_"+y;if(Array.isArray(w)){S[_]===void 0&&(S[_]=[]);let M=S[_],I=!1;for(let A=0;A<w.length;A++)h(w[A],M,A)===!0&&(I=!0);return I}return h(w,S,_)}function h(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let S=T[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function g(v){let T=v.uniforms,y=0,S=16;for(let _=0,M=T.length;_<M;_++){let I=Array.isArray(T[_])?T[_]:[T[_]];for(let A=0,D=I.length;A<D;A++){let L=I[A],B=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(T[_])||Array.isArray(L.value),z=y;for(let F=0,X=B.length;F<X;F++){let V=B[F],R=x(V,P),Q=y%S,xe=Q%R.boundary,Be=Q+xe;y+=xe,Be!==0&&S-Be<R.storage&&(y+=S-Be),F===0&&(z=y),y+=R.storage}let W=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new W((y-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}let w=y%S;return w>0&&(y+=S-w),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let T=v.target;T.removeEventListener("dispose",p),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function m(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:m}}var cM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function uM(){return Zi===null&&(Zi=new so(cM,16,16,Hr,Fi),Zi.name="DFG_LUT",Zi.minFilter=Bn,Zi.magFilter=Bn,Zi.wrapS=Vi,Zi.wrapT=Vi,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var au=class{constructor(e={}){let{canvas:t=Wp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Zn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=h,p=new Set([Ac,Ec,wc]),m=new Set([Zn,Ui,da,_s,Mc,bc]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,w=null,_=[],M=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,L=null,B=null,P=null,z=null;this._outputColorSpace=Fn;let W=0,F=0,X=null,V=-1,R=null,Q=new Dt,xe=new Dt,Be=null,Z=new Xe(0),oe=0,pe=t.width,ye=t.height,he=1,Ne=null,st=null,Pe=new Dt(0,0,pe,ye),Ge=new Dt(0,0,pe,ye),Ie=!1,Re=new Ur,ct=new ec,ut=!1,$=!1,et=new St,Ft=new Y,gt=new Dt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Ot(){return X===null?he:1}let O=n;function Se(E,U){return t.getContext(E,U)}let Le,Te,se,He,we,ze,C,b,k,ae,ie,le,ue,G,j,de,N,ee,K,me,fe,ge,ce;try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ne,!1),O===null){let U="webgl2";if(O=Se(U,E),O===null)throw Se(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_e()}catch(E){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),We("WebGLRenderer: "+E.message),E}function _e(){Le=new Sy(O),Le.init(),fe=new iM(O,Le),Te=new uy(O,Le,e,fe),se=new tM(O,Le),Te.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),B=O.createFramebuffer(),P=O.createFramebuffer(),z=O.createFramebuffer(),He=new Ty(O),we=new VS,ze=new nM(O,Le,se,we,Te,fe,He),C=new yy(A),b=new E_(O),ge=new ly(O,b),k=new My(O,b,He,ge),ae=new Ey(O,k,b,ge,He),ee=new wy(O,Te,ze),j=new hy(we),ie=new kS(A,C,Le,Te,ge,j),le=new oM(A,we),ue=new HS,G=new JS(Le),N=new oy(A,C,se,ae,g,l),de=new eM(A,ae,Te),ce=new lM(O,He,Te,se),K=new cy(O,Le,He),me=new by(O,Le,He),He.programs=ie.programs,A.capabilities=Te,A.extensions=Le,A.properties=we,A.renderLists=ue,A.shadowMap=de,A.state=se,A.info=He}x!==Zn&&(I=new Cy(x,t.width,t.height,o,i,s));let re=new Sf(A,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(E){E!==void 0&&(he=E,this.setSize(pe,ye,!1))},this.getSize=function(E){return E.set(pe,ye)},this.setSize=function(E,U,J=!0){if(re.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=E,ye=U,t.width=Math.floor(E*he),t.height=Math.floor(U*he),J===!0&&(t.style.width=E+"px",t.style.height=U+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(pe*he,ye*he).floor()},this.setDrawingBufferSize=function(E,U,J){pe=E,ye=U,he=J,t.width=Math.floor(E*J),t.height=Math.floor(U*J),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===Zn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(Pe)},this.setViewport=function(E,U,J,H){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,U,J,H),se.viewport(Q.copy(Pe).multiplyScalar(Ot()).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,U,J,H){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,U,J,H),se.scissor(xe.copy(Ge).multiplyScalar(Ot()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(E){se.setScissorTest(Ie=E)},this.setOpaqueSort=function(E){Ne=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,J=!0){let H=0;if(E){let q=!1;if(X!==null){let be=X.texture.format;q=p.has(be)}if(q){let be=X.texture.type,Ue=m.has(be),Me=N.getClearColor(),Ce=N.getClearAlpha(),ke=Me.r,Ze=Me.g,at=Me.b;Ue?(v[0]=ke,v[1]=Ze,v[2]=at,v[3]=Ce,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=ke,T[1]=Ze,T[2]=at,T[3]=Ce,O.clearBufferiv(O.COLOR,0,T))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),N.dispose(),ue.dispose(),G.dispose(),ze.dispose(),we.dispose(),C.dispose(),ae.dispose(),k.dispose(),ge.dispose(),ce.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",bt),re.removeEventListener("sessionend",_t),nn.stop()};function te(E){E.preventDefault(),Kh("WebGLRenderer: Context Lost."),D=!0}function ve(){Kh("WebGLRenderer: Context Restored."),D=!1;let E=He.autoReset,U=de.enabled,J=de.autoUpdate,H=de.needsUpdate,q=de.type;_e(),He.autoReset=E,de.enabled=U,de.autoUpdate=J,de.needsUpdate=H,de.type=q}function ne(E){We("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){let U=E.target;U.removeEventListener("dispose",Ae),it(U)}function it(E){Ye(E),we.remove(E)}function Ye(E){let U=we.get(E).programs;U!==void 0&&(U.forEach(function(J){ie.releaseProgram(J)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,J,H,q,be){U===null&&(U=$e);let Ue=q.isMesh&&q.matrixWorld.determinantAffine()<0,Me=gi(E,U,J,H,q);se.setMaterial(H,Ue);let Ce=J.index,ke=1;if(H.wireframe===!0){if(Ce=k.getWireframeAttribute(J),Ce===void 0)return;ke=2}let Ze=J.drawRange,at=J.attributes.position,Fe=Ze.start*ke,ot=(Ze.start+Ze.count)*ke;be!==null&&(Fe=Math.max(Fe,be.start*ke),ot=Math.min(ot,(be.start+be.count)*ke)),Ce!==null?(Fe=Math.max(Fe,0),ot=Math.min(ot,Ce.count)):at!=null&&(Fe=Math.max(Fe,0),ot=Math.min(ot,at.count));let Qt=ot-Fe;if(Qt<0||Qt===1/0)return;ge.setup(q,H,Me,J,Ce);let At,wt=K;if(Ce!==null&&(At=b.get(Ce),wt=me,wt.setIndex(At)),q.isMesh)H.wireframe===!0?(se.setLineWidth(H.wireframeLinewidth*Ot()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(q.isLine){let Mn=H.linewidth;Mn===void 0&&(Mn=1),se.setLineWidth(Mn*Ot()),q.isLineSegments?wt.setMode(O.LINES):q.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else q.isPoints?wt.setMode(O.POINTS):q.isSprite&&wt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))wt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Mn=q._multiDrawStarts,Oe=q._multiDrawCounts,Un=q._multiDrawCount,pt=Ce?b.get(Ce).bytesPerElement:1,is=we.get(H).currentProgram.getUniforms();for(let bn=0;bn<Un;bn++)is.setValue(O,"_gl_DrawID",bn),wt.render(Mn[bn]/pt,Oe[bn])}else if(q.isInstancedMesh)wt.renderInstances(Fe,Qt,q.count);else if(J.isInstancedBufferGeometry){let Mn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Oe=Math.min(J.instanceCount,Mn);wt.renderInstances(Fe,Qt,Oe)}else wt.render(Fe,Qt)};function It(E,U,J,H){L!==null&&E.isNodeMaterial&&L.setObject(H,E),ut===!0&&j.setState(E,J,!1),E.transparent===!0&&E.side===qi&&E.forceSinglePass===!1?(E.side=_n,E.needsUpdate=!0,ni(E,U,H),E.side=Gr,E.needsUpdate=!0,ni(E,U,H),E.side=qi):ni(E,U,H)}this.compile=function(E,U,J=null){J===null&&(J=E),L!==null&&L.renderStart(E,U,J),w=G.get(J),w.init(U),M.push(w),J.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),E!==J&&E.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),$=this.localClippingEnabled,ut=j.init(this.clippingPlanes,$),ut===!0&&j.setGlobalState(this.clippingPlanes,U),L!==null&&de.render(w.state.shadowsArray,J,U);let H=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let be=q.material;if(be)if(Array.isArray(be))for(let Ue=0;Ue<be.length;Ue++){let Me=be[Ue];It(Me,J,U,q),H.add(Me)}else It(be,J,U,q),H.add(be)}),w=M.pop(),L!==null&&L.renderEnd(),H},this.compileAsync=function(E,U,J=null){let H=this.compile(E,U,J);return new Promise(q=>{function be(){if(H.forEach(function(Ue){let Ce=we.get(Ue).currentProgram;(Ce===void 0||Ce.isReady())&&H.delete(Ue)}),H.size===0){q(E);return}setTimeout(be,10)}Le.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let $t=null;function Lt(E){$t&&$t(E)}function bt(){nn.stop()}function _t(){nn.start()}let nn=new Sm;nn.setAnimationLoop(Lt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(E){$t=E,re.setAnimationLoop(E),E===null?nn.stop():nn.start()},re.addEventListener("sessionstart",bt),re.addEventListener("sessionend",_t),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,U);let J=re.enabled===!0&&re.isPresenting===!0,H=I!==null&&(X===null||J)&&I.begin(A,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,U,X),w=G.get(E,M.length),w.init(U),w.state.textureUnits=ze.getTextureUnits(),M.push(w),et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ct.setFromArrayCamera(U):Re.setFromProjectionMatrix(et,xi,U.reversedDepth),$=this.localClippingEnabled,ut=j.init(this.clippingPlanes,$),S=ue.get(E,_.length),S.init(),_.push(S),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ue=A.xr.getDepthSensingMesh();Ue!==null&&Tt(Ue,U,-1/0,A.sortObjects)}Tt(E,U,0,A.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),A.sortObjects===!0&&S.sort(Ne,st),Pt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Pt&&N.addToRenderList(S,E),this.info.autoReset===!0&&this.info.reset(),ut===!0&&j.beginShadows();let q=w.state.shadowsArray;if(de.render(q,E,U),ut===!0&&j.endShadows(),(H&&I.hasRenderPass())===!1){let Ue=S.opaque,Me=S.transmissive;if(w.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(Me.length>0)for(let ke=0,Ze=Ce.length;ke<Ze;ke++){let at=Ce[ke];ti(Ue,Me,E,at)}Pt&&N.render(E);for(let ke=0,Ze=Ce.length;ke<Ze;ke++){let at=Ce[ke];Sn(S,E,at,at.viewport)}}else Me.length>0&&ti(Ue,Me,E,U),Pt&&N.render(E),Sn(S,E,U)}X!==null&&F===0&&(ze.updateMultisampleRenderTarget(X),ze.updateRenderTargetMipmap(X)),H&&I.end(A),E.isScene===!0&&E.onAfterRender(A,E,U),ge.resetDefaultState(),V=-1,R=null,M.pop(),M.length>0?(w=M[M.length-1],ze.setTextureUnits(w.state.textureUnits),ut===!0&&j.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?S=_[_.length-1]:S=null,L!==null&&L.renderEnd()};function Tt(E,U,J,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Ue=U.isArrayCamera?ct:Re;if(!E.frustumCulled||E.intersectsFrustum(Ue)){H&&gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(et);let Me=ae.update(E),Ce=E.material;Ce.visible&&S.push(E,Me,Ce,J,gt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){let Ue=U.isArrayCamera?ct:Re;if(!E.frustumCulled||E.intersectsFrustum(Ue)){let Me=ae.update(E),Ce=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),gt.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),gt.copy(Me.boundingSphere.center)),gt.applyMatrix4(E.matrixWorld).applyMatrix4(et)),Array.isArray(Ce)){let ke=Me.groups;for(let Ze=0,at=ke.length;Ze<at;Ze++){let Fe=ke[Ze],ot=Ce[Fe.materialIndex];ot&&ot.visible&&S.push(E,Me,ot,J,gt.z,Fe,U)}}else Ce.visible&&S.push(E,Me,Ce,J,gt.z,null,U)}}}let be=E.children;for(let Ue=0,Me=be.length;Ue<Me;Ue++)Tt(be[Ue],U,J,H)}function Sn(E,U,J,H){let{opaque:q,transmissive:be,transparent:Ue}=E;w.setupLightsView(J),ut===!0&&j.setGlobalState(A.clippingPlanes,J),H&&se.viewport(Q.copy(H)),q.length>0&&Gt(q,U,J),be.length>0&&Gt(be,U,J),Ue.length>0&&Gt(Ue,U,J),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function ti(E,U,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Fe=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:Fe?Fi:Zn,minFilter:dr,samples:Math.max(4,Te.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let be=w.state.transmissionRenderTarget[H.id],Ue=H.viewport||Q;be.setSize(Ue.z*A.transmissionResolutionScale,Ue.w*A.transmissionResolutionScale);let Me=A.getRenderTarget(),Ce=A.getActiveCubeFace(),ke=A.getActiveMipmapLevel();A.setRenderTarget(be),A.getClearColor(Z),oe=A.getClearAlpha(),oe<1&&A.setClearColor(16777215,.5),A.clear(),Pt&&N.render(J);let Ze=A.toneMapping;A.toneMapping=Yi;let at=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),ut===!0&&j.setGlobalState(A.clippingPlanes,H),Gt(E,J,H),ze.updateMultisampleRenderTarget(be),ze.updateRenderTargetMipmap(be),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ot=0,Qt=U.length;ot<Qt;ot++){let At=U[ot],{object:wt,geometry:Mn,material:Oe,group:Un}=At;if(Oe.side===qi&&wt.layers.test(H.layers)){let pt=Oe.side;Oe.side=_n,Oe.needsUpdate=!0,Kt(wt,J,H,Mn,Oe,Un),Oe.side=pt,Oe.needsUpdate=!0,Fe=!0}}Fe===!0&&(ze.updateMultisampleRenderTarget(be),ze.updateRenderTargetMipmap(be))}A.setRenderTarget(Me,Ce,ke),A.setClearColor(Z,oe),at!==void 0&&(H.viewport=at),A.toneMapping=Ze}function Gt(E,U,J){let H=U.isScene===!0?U.overrideMaterial:null;for(let q=0,be=E.length;q<be;q++){let Ue=E[q],{object:Me,geometry:Ce,group:ke}=Ue,Ze=Ue.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),Me.layers.test(J.layers)&&Kt(Me,U,J,Ce,Ze,ke)}}function Kt(E,U,J,H,q,be){L!==null&&q.isNodeMaterial&&L.setObject(E,q),E.onBeforeRender(A,U,J,H,q,be),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(A,U,J,H,E,be),q.transparent===!0&&q.side===qi&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,A.renderBufferDirect(J,U,H,q,E,be),q.side=Gr,q.needsUpdate=!0,A.renderBufferDirect(J,U,H,q,E,be),q.side=qi):A.renderBufferDirect(J,U,H,q,E,be),E.onAfterRender(A,U,J,H,q,be)}function rn(E){let U=0;for(let J of E)J.texture!==null&&U++;return U}function ni(E,U,J){U.isScene!==!0&&(U=$e);let H=we.get(E),q=w.state.lights,be=w.state.shadowsArray,Ue=q.state.version,Me=ie.getParameters(E,q.state,be,U,J,w.state.lightProbeGridArray),Ce=ie.getProgramCacheKey(Me),ke=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=C.get(E.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Ae),ke=new Map,H.programs=ke,H.programVariants=new Map);let at=ke.get(Ce);if(at!==void 0){if(H.currentProgram===at&&H.lightsStateVersion===Ue)return Ht(E,Me),at}else Me.uniforms=ie.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,J,Me),E.onBeforeCompile(Me,A),at=ie.acquireProgram(Me,Ce),ke.set(Ce,at),H.uniforms=Me.uniforms;let Fe=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=j.uniform),Ht(E,Me),H.needsLights=pl(E),H.lightsStateVersion=Ue,H.needsLights&&(Fe.ambientLightColor.value=q.state.ambient,Fe.lightProbe.value=q.state.probe,Fe.sunLights.value=q.state.sun,Fe.sunLightShadows.value=q.state.sunShadow,Fe.directionalLights.value=q.state.directional,Fe.directionalLightShadows.value=q.state.directionalShadow,Fe.spotLights.value=q.state.spot,Fe.spotLightShadows.value=q.state.spotShadow,Fe.rectAreaLights.value=q.state.rectArea,Fe.ltc_1.value=q.state.rectAreaLTC1,Fe.ltc_2.value=q.state.rectAreaLTC2,Fe.pointLights.value=q.state.point,Fe.pointLightShadows.value=q.state.pointShadow,Fe.hemisphereLights.value=q.state.hemi,Fe.sunShadowMatrix.value=q.state.sunShadowMatrix,Fe.sunShadowCascade.value=q.state.sunShadowCascade,Fe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Fe.spotLightMatrix.value=q.state.spotLightMatrix,Fe.spotLightMap.value=q.state.spotLightMap,Fe.pointShadowMatrix.value=q.state.pointShadowMatrix),H.numLightProbeGrids=rn(w.state.lightProbeGridArray),H.currentProgram=at,H.uniformsList=null,at}function Bs(E,U,J,H,q){let be=we.get(E),Ue=be.currentProgram.id+","+H+","+q,Me=be.programVariants.get(Ue);return Me===void 0?(Me=ni(E,U,J),be.programVariants.set(Ue,Me)):(be.currentProgram=Me,be.uniformsList=null,be.outputColorSpace=H,be.toneMapping=q),Me}function sn(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=ma.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ht(E,U){let J=we.get(E);J.outputColorSpace=U.outputColorSpace,J.batching=U.batching,J.batchingColor=U.batchingColor,J.instancing=U.instancing,J.instancingColor=U.instancingColor,J.instancingMorph=U.instancingMorph,J.skinning=U.skinning,J.morphTargets=U.morphTargets,J.morphNormals=U.morphNormals,J.morphColors=U.morphColors,J.morphTargetsCount=U.morphTargetsCount,J.numClippingPlanes=U.numClippingPlanes,J.numIntersection=U.numClipIntersection,J.vertexAlphas=U.vertexAlphas,J.vertexTangents=U.vertexTangents,J.toneMapping=U.toneMapping}function gi(E,U,J,H,q){U.isScene!==!0&&(U=$e),ze.resetTextureUnits();let be=U.fog,Ue=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Me=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:lt.workingColorSpace,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,ke=C.get(H.envMap||Ue,Ce),Ze=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,at=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Fe=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,Qt=!!J.morphAttributes.color,At=Yi;H.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(At=A.toneMapping);let wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mn=wt!==void 0?wt.length:0,Oe=we.get(H),Un=w.state.lights;if(ut===!0&&($===!0||E!==R)){let Bt=E===R&&H.id===V;j.setState(H,E,Bt)}let pt=!1,is=!1;H.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Un.state.version||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==ke||H.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==j.numPlanes||Oe.numIntersection!==j.numIntersection)||Oe.vertexAlphas!==Ze||Oe.vertexTangents!==at||Oe.morphTargets!==Fe||Oe.morphNormals!==ot||Oe.morphColors!==Qt||Oe.morphTargetsCount!==Mn||Oe.numLightProbeGrids!==rn(w.state.lightProbeGridArray)?pt=!0:(Oe.outputColorSpace!==Me||Oe.toneMapping!==At)&&(is=!0):(pt=!0,Oe.__version=H.version);let bn=Oe.currentProgram;(pt===!0||is===!0)&&(bn=is===!0?Bs(H,U,q,Me,At):ni(H,U,q),L&&H.isNodeMaterial&&L.onUpdateProgram(H,bn,Oe));let ml=!1,Cr=!1,rs=!1,ft=bn.getUniforms(),gn=Oe.uniforms;if(se.useProgram(bn.program)&&(ml=!0,Cr=!0,rs=!0),H.id!==V&&(V=H.id,Cr=!0),ml||R!==E){se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",E.projectionMatrix),ft.setValue(O,"viewMatrix",E.matrixWorldInverse);let un=ft.map.cameraPosition;un!==void 0&&un.setValue(O,Ft.setFromMatrixPosition(E.matrixWorld)),Te.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),R!==E&&(R=E,Cr=!0,rs=!0)}if(Oe.needsLights&&(Un.state.sunShadowMap.length>0&&ft.setValue(O,"sunShadowMap",Un.state.sunShadowMap,ze),Un.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",Un.state.directionalShadowMap,ze),Un.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",Un.state.spotShadowMap,ze),Un.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",Un.state.pointShadowMap,ze)),q.isSkinnedMesh){ft.setOptional(O,q,"bindMatrix"),ft.setOptional(O,q,"bindMatrixInverse");let Bt=q.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ft.setValue(O,"boneTexture",Bt.boneTexture,ze))}q.isBatchedMesh&&(ft.setOptional(O,q,"batchingTexture"),ft.setValue(O,"batchingTexture",q._matricesTexture,ze),ft.setOptional(O,q,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",q._indirectTexture,ze),ft.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",q._colorsTexture,ze));let Pi=J.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&ee.update(q,J,bn),(Cr||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,ft.setValue(O,"receiveShadow",q.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=uM()),Cr){if(ft.setValue(O,"toneMappingExposure",A.toneMappingExposure),Oe.needsLights&&Va(gn,rs),be&&H.fog===!0&&le.refreshFogUniforms(gn,be),le.refreshMaterialUniforms(gn,H,he,ye,w.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Bt=y,un=0;for(let ir of w.state.lightProbeGridArray)ir.texture!==null&&(Bt.textures[un]=ir.texture,Bt.min[un]=ir.boundingBox.min,Bt.max[un]=ir.boundingBox.max,Bt.resolution[un]=ir.resolution,un++);for(let ir in Bt)Bt[ir].length=un;gn.probesSH.value=Bt.textures,gn.probesMin.value=Bt.min,gn.probesMax.value=Bt.max,gn.probesResolution.value=Bt.resolution}ma.upload(O,sn(Oe),gn,ze)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ma.upload(O,sn(Oe),gn,ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(O,"center",q.center),ft.setValue(O,"modelViewMatrix",q.modelViewMatrix),ft.setValue(O,"normalMatrix",q.normalMatrix),ft.setValue(O,"modelMatrix",q.matrixWorld),H.uniformsGroups!==void 0){let Bt=H.uniformsGroups;for(let un=0,ir=Bt.length;un<ir;un++){let Fd=Bt[un];ce.update(Fd,bn),ce.bind(Fd,bn)}}return bn}function Va(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function pl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,U,J){let H=we.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),we.get(E.texture).__webglTexture=U,we.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let J=we.get(E);J.__webglFramebuffer=U,J.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,J=0){X=E,W=U,F=J;let H=null,q=!1,be=!1;if(E){let Me=we.get(E);if(Me.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(O.FRAMEBUFFER,Me.__webglFramebuffer),Q.copy(E.viewport),xe.copy(E.scissor),Be=E.scissorTest,se.viewport(Q),se.scissor(xe),se.setScissorTest(Be),V=-1;return}else if(Me.__webglFramebuffer===void 0)ze.setupRenderTarget(E);else if(Me.__hasExternalTextures)ze.rebindTextures(E,we.get(E.texture).__webglTexture,we.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ze=E.depthTexture;if(Me.__boundDepthTexture!==Ze){if(Ze!==null&&we.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(E)}}let Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);let ke=we.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?H=ke[U][J]:H=ke[U],q=!0):E.samples>0&&ze.useMultisampledRTT(E)===!1?H=we.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[J]:H=ke,Q.copy(E.viewport),xe.copy(E.scissor),Be=E.scissorTest}else Q.copy(Pe).multiplyScalar(he).floor(),xe.copy(Ge).multiplyScalar(he).floor(),Be=Ie;if(J!==0&&(H=B),se.bindFramebuffer(O.FRAMEBUFFER,H)&&se.drawBuffers(E,H),se.viewport(Q),se.scissor(xe),se.setScissorTest(Be),q){let Me=we.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,J)}else if(be){let Me=U;for(let Ce=0;Ce<E.textures.length;Ce++){let ke=we.get(E.textures[Ce]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ce,ke.__webglTexture,J,Me)}}else if(E!==null&&J!==0){let Me=we.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Me.__webglTexture,J)}V=-1};function Ar(E){let U=we.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=Te.textureFormatReadable(E.format),U.__typeReadable=Te.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,J,H,q,be,Ue,Me=0){if(!(E&&E.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ce=Ce[Ue],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){se.bindFramebuffer(O.FRAMEBUFFER,Ce);try{let ke=E.textures[Me],Ze=ke.format,at=ke.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Me);let Fe=Ar(ke);if(Fe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&J>=0&&J<=E.height-q&&O.readPixels(U,J,H,q,fe.convert(Ze),fe.convert(at),be)}finally{let ke=X!==null?we.get(X).__webglFramebuffer:null;se.bindFramebuffer(O.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,U,J,H,q,be,Ue,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=we.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ce=Ce[Ue],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(U>=0&&U<=E.width-H&&J>=0&&J<=E.height-q){se.bindFramebuffer(O.FRAMEBUFFER,Ce);let ke=E.textures[Me],Ze=ke.format,at=ke.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Me);let Fe=Ar(ke);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(U,J,H,q,fe.convert(Ze),fe.convert(at),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Qt=X!==null?we.get(X).__webglFramebuffer:null;se.bindFramebuffer(O.FRAMEBUFFER,Qt);let At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await qp(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ot),O.deleteSync(At),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,J=0){let H=Math.pow(2,-J),q=Math.floor(E.image.width*H),be=Math.floor(E.image.height*H),Ue=U!==null?U.x:0,Me=U!==null?U.y:0;ze.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Ue,Me,q,be),se.unbindTexture()},this.copyTextureToTexture=function(E,U,J=null,H=null,q=0,be=0){let Ue,Me,Ce,ke,Ze,at,Fe,ot,Qt,At=E.isCompressedTexture?E.mipmaps[be]:E.image;if(J!==null)Ue=J.max.x-J.min.x,Me=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,ke=J.min.x,Ze=J.min.y,at=J.isBox3?J.min.z:0;else{let ft=Math.pow(2,-q);Ue=Math.floor(At.width*ft),Me=Math.floor(At.height*ft),E.isDataArrayTexture?Ce=At.depth:E.isData3DTexture?Ce=Math.floor(At.depth*ft):Ce=1,ke=0,Ze=0,at=0}H!==null?(Fe=H.x,ot=H.y,Qt=H.z):(Fe=0,ot=0,Qt=0);let wt=fe.convert(U.format),Mn=fe.convert(U.type),Oe;U.isData3DTexture?(ze.setTexture3D(U,0),Oe=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ze.setTexture2DArray(U,0),Oe=O.TEXTURE_2D_ARRAY):(ze.setTexture2D(U,0),Oe=O.TEXTURE_2D),se.activeTexture(O.TEXTURE0),se.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),se.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),se.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=se.getParameter(O.UNPACK_ROW_LENGTH),pt=se.getParameter(O.UNPACK_IMAGE_HEIGHT),is=se.getParameter(O.UNPACK_SKIP_PIXELS),bn=se.getParameter(O.UNPACK_SKIP_ROWS),ml=se.getParameter(O.UNPACK_SKIP_IMAGES);se.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),se.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),se.pixelStorei(O.UNPACK_SKIP_PIXELS,ke),se.pixelStorei(O.UNPACK_SKIP_ROWS,Ze),se.pixelStorei(O.UNPACK_SKIP_IMAGES,at);let Cr=E.isDataArrayTexture||E.isData3DTexture,rs=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let ft=we.get(E),gn=we.get(U),Pi=we.get(ft.__renderTarget),Bt=we.get(gn.__renderTarget);se.bindFramebuffer(O.READ_FRAMEBUFFER,Pi.__webglFramebuffer),se.bindFramebuffer(O.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let un=0;un<Ce;un++)Cr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(E).__webglTexture,q,at+un),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(U).__webglTexture,be,Qt+un)),O.blitFramebuffer(ke,Ze,ke+Ue,Ze+Me,Fe,ot,Fe+Ue,ot+Me,O.DEPTH_BUFFER_BIT,O.NEAREST);se.bindFramebuffer(O.READ_FRAMEBUFFER,null),se.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||we.has(E)){let ft=we.get(E),gn=we.get(U);se.bindFramebuffer(O.READ_FRAMEBUFFER,P),se.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Pi=0;Pi<Ce;Pi++)Cr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.__webglTexture,q,at+Pi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,q),rs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,gn.__webglTexture,be,Qt+Pi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,gn.__webglTexture,be),q!==0?O.blitFramebuffer(ke,Ze,ke+Ue,Ze+Me,Fe,ot,Fe+Ue,ot+Me,O.COLOR_BUFFER_BIT,O.NEAREST):rs?O.copyTexSubImage3D(Oe,be,Fe,ot,Qt+Pi,ke,Ze,Ue,Me):O.copyTexSubImage2D(Oe,be,Fe,ot,ke,Ze,Ue,Me);se.bindFramebuffer(O.READ_FRAMEBUFFER,null),se.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else rs?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Oe,be,Fe,ot,Qt,Ue,Me,Ce,wt,Mn,At.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,be,Fe,ot,Qt,Ue,Me,Ce,wt,At.data):O.texSubImage3D(Oe,be,Fe,ot,Qt,Ue,Me,Ce,wt,Mn,At):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,Fe,ot,Ue,Me,wt,Mn,At.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,Fe,ot,At.width,At.height,wt,At.data):O.texSubImage2D(O.TEXTURE_2D,be,Fe,ot,Ue,Me,wt,Mn,At);se.pixelStorei(O.UNPACK_ROW_LENGTH,Un),se.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),se.pixelStorei(O.UNPACK_SKIP_PIXELS,is),se.pixelStorei(O.UNPACK_SKIP_ROWS,bn),se.pixelStorei(O.UNPACK_SKIP_IMAGES,ml),be===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&O.generateMipmap(Oe),se.unbindTexture()},this.initRenderTarget=function(E){we.get(E).__webglFramebuffer===void 0&&ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){W=0,F=0,X=null,se.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var cu=class extends hs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Fr;e.deleteAttribute("uv");let t=new ds({side:_n}),n=new ds,i=new Vr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Rt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new oo(e,n,6),o=new dn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Rt(e,xa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Rt(e,xa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Rt(e,xa(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Rt(e,xa(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new Rt(e,xa(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let h=new Rt(e,xa(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function xa(r){return new mo({color:0,emissive:16777215,emissiveIntensity:r})}function gr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function km(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vo={duration:.5,overwrite:!1,delay:0},Of,xn,Nt,Ti=1e8,Mt=1/Ti,Rf=Math.PI*2,fM=Rf/4,dM=0,Vm=Math.sqrt,pM=Math.cos,mM=Math.sin,ln=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},Su=function(e){return typeof e>"u"},Qi=function(e){return typeof e=="object"},Kn=function(e){return e!==!1},Bf=function(){return typeof window<"u"},uu=function(e){return Wt(e)||ln(e)},Gm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,gM=/random\([^)]+\)/g,_M=/,\s*/g,Lm=/(?:-?\.?\d|\.)+/gi,zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kf=/[+-]=-?[.\d]+/,xM=/[^,'"\[\]\s]+/gi,vM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,$i,Pf,Vf,ci={},pu={},Hm,Wm=function(e){return(pu=ya(e,ci))&&Pn},Mu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Go=function(e,t){return!t&&console.warn(e)},Xm=function(e,t){return e&&(ci[e]=t)&&pu&&(pu[e]=t)||ci},Ho=function(){return 0},yM={suppressEvents:!0,isStart:!0,kill:!1},hu={suppressEvents:!0,kill:!1},SM={suppressEvents:!0},Gf={},Xr=[],If={},qm,Jn={},bf={},Dm=30,fu=[],Hf="",Wf=function(e){var t=e[0],n,i;if(Qi(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fu.length;i--&&!fu[i].targetTest(t););n=fu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zf(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||Wf(wi(e))[0]._gsap},Xf=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():Su(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},MM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},mu=function(){var e=Xr.length,t=Xr.slice(0),n,i;for(If={},Xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qf=function(e){return!!(e._initted||e._startAt||e.add)},Ym=function(e,t,n,i){Xr.length&&!xn&&mu(),e.render(t,n,i||!!(xn&&t<0&&qf(e))),Xr.length&&!xn&&mu()},Zm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(xM).length<2?t:ln(e)?e.trim():e},Jm=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ya=function(e,t){for(var n in t)e[n]=t[n];return e},Nm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Qi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},gu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Bo=function(e){var t=e.parent||kt,n=e.keyframes?bM(Rn(e.keyframes)):ui;if(Kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},TM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$m=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},bu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lf=function(e,t,n,i){return e._startAt&&(xn?e._startAt.revert(hu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},EM=function r(e){return!e||e._ts&&r(e.parent)},Um=function(e){return e._repeat?Sa(e._tTime,e=e.duration()+e._rDelay)*e:0},Sa=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},_u=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Tu=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},wu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Tu(e),n._dirty||vs(n,e)),e},Km=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_u(e.rawTime(),t),(!t._dur||Yo(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Ki=function(e,t,n,i){return t.parent&&Yr(t),t._start=zt((xr(n)?n:!n&&xu(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==kt?bi(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$m(e,t,"_first","_last",e._sort?"_start":0),xu(t)||(e._recent=t),i||Km(e,t),e._ts<0&&wu(e,e._tTime),e},Qm=function(e,t){return(ci.ScrollTrigger||Mu("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},jm=function(e,t,n,i,s){if(Kf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&qm!==$n.frame)return Xr.push(e),e._lazy=[s,i],1},AM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},CM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&AM(e)&&!(!e._initted&&xu(e))||(e._ts<0||e._dp._ts<0)&&!xu(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Yo(0,e._tDur,t),u=Sa(l,o),e._yoyo&&u&1&&(a=1-a),u!==Sa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||xn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&jm(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Lf(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yr(e,1),!n&&!xn&&(li(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},RM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ma=function(e,t,n,i){var s=e._repeat,a=zt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:zt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&wu(e,e._tTime=e._tDur*o),e.parent&&Tu(e),n||vs(e.parent,e),e},Fm=function(e){return e instanceof Cn?vs(e):Ma(e,e._dur)},PM={_start:0,endTime:Ho,totalDuration:Ho},bi=function r(e,t,n){var i=e.labels,s=e._recent||PM,a=e.duration()>=Ti?s.endTime(!1):e._dur,o,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},zo=function(e,t,n){var i=xr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;a.immediateRender=Kn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Jt(t[0],a,t[s+1])},Zr=function(e,t){return e||e===0?t(e):t},Yo=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!ln(e)||!(t=vM.exec(e))?"":t[1]},IM=function(e,t,n){return Zr(n,function(i){return Yo(e,t,i)})},Df=[].slice,eg=function(e,t){return e&&Qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Qi(e[0]))&&!e.nodeType&&e!==$i},LM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||eg(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):ln(e)&&!n&&(Pf||!ba())?Df.call((t||Vf).querySelectorAll(e),0):Rn(e)?LM(e,n):eg(e)?Df.call(e,0):e?[e]:[]},Nf=function(e){return e=wi(e)[0]||Go("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?Go("Invalid scope")||Vf.createElement("div"):e)}},tg=function(e){return e.sort(function(){return .5-Math.random()})},ng=function(e){if(Wt(e))return e;var t=Qi(e)?e:{each:e},n=ys(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return ln(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,g){var x=(g||t).length,p=a[x],m,v,T,y,S,w,_,M,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!I){for(_=-Ti;_<(_=g[I++].getBoundingClientRect().left)&&I<x;);I<x&&I--}for(p=a[x]=[],m=l?Math.min(I,x)*u-.5:i%I,v=I===Ti?0:l?x*f/I-.5:i/I|0,_=0,M=Ti,w=0;w<x;w++)T=w%I-m,y=v-(w/I|0),p[w]=S=c?Math.abs(c==="y"?y:T):Vm(T*T+y*y),S>_&&(_=S),S<M&&(M=S);i==="random"&&tg(p),p.max=_-M,p.min=M,p.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(I>x?x-1:c?c==="y"?x/I:I:Math.max(I,x/I))||0)*(i==="edges"?-1:1),p.b=x<0?s-x:s,p.u=vn(t.amount||t.each)||0,n=n&&x<0?XM(n):n}return x=(p[d]-p.min)/p.max||0,zt(p.b+(n?n(x):x)*p.v)+p.u}},Uf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xr(n)?0:vn(n))}},ig=function(e,t){var n=Rn(e),i,s;return!n&&Qi(e)&&(i=n=e.radius||Ti,e.values?(e=wi(e.values),(s=!xr(e[0]))&&(i*=i)):e=Uf(e.increment)),Zr(t,n?Wt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,s||u===a||xr(a)?u:u+vn(a)}:Uf(e))},rg=function(e,t,n,i){return Zr(Rn(e)?!t:n===!0?!!(n=0):!i,function(){return Rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},DM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},NM=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},UM=function(e,t,n){return ag(e,t,0,1,n)},sg=function(e,t,n){return Zr(n,function(i){return e[~~t(i)]})},FM=function r(e,t,n){var i=t-e;return Rn(e)?sg(e,r(0,e.length),t):Zr(n,function(s){return(i+(s-e)%i)%i+e})},OM=function r(e,t,n){var i=t-e,s=i*2;return Rn(e)?sg(e,r(0,e.length-1),t):Zr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ta=function(e){return e.replace(gM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_M);return rg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ag=function(e,t,n,i,s){var a=t-e,o=i-n;return Zr(s,function(l){return n+((l-e)/a*o||0)})},BM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=ln(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Rn(e)&&!Rn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var x=Math.min(d,~~g);return u[x](g-x)},n=t}else i||(e=ya(Rn(e)?[]:{},e));if(!u){for(l in t)Jf.call(o,e,l,"get",t[l]);s=function(g){return ed(g,o)||(a?e.p:e)}}}return Zr(n,s)},Om=function(e,t,n){var i=e.labels,s=Ti,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},li=function(e,t,n){var i=e.vars,s=i[t],a=Nt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xr.length&&mu(),o&&(Nt=o),u=l?s.apply(c,l):s.call(c),Nt=a,u},Fo=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&li(e,"onInterrupt"),e},va,og=[],lg=function(e){if(e)if(e=!e.name&&e.default||e,Bf()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ho,render:ed,add:Jf,kill:tb,modifier:eb,rawVars:0},a={targetTest:0,get:0,getSetter:Eu,aliases:{},register:0};if(ba(),e!==i){if(Jn[t])return;ui(i,ui(gu(e,s),a)),ya(i.prototype,ya(s,gu(e,a))),Jn[i.prop=t]=i,e.targetTest&&(fu.push(i),Gf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xm(t,i),e.register&&e.register(Pn,i,Vn)}else og.push(e)},Et=255,Oo={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Tf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},cg=function(e,t,n){var i=e?xr(e)?[e>>16,e>>8&Et,e&Et]:0:Oo.black,s,a,o,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Oo[e])i=Oo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Lm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Tf(l+1/3,s,a),i[1]=Tf(l,s,a),i[2]=Tf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(zf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lm)||Oo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Et,a=i[1]/Et,o=i[2]/Et,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ug=function(e){var t=[],n=[],i=-1;return e.split(_r).forEach(function(s){var a=s.match(Ms)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Bm=function(e,t,n){var i="",s=(e+i).match(_r),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=cg(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ug(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(_r,"1").split(Ms),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(_r),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},_r=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Oo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),zM=/hsl[a]?\(/,Yf=function(e){var t=e.join(" "),n;if(_r.lastIndex=0,_r.test(t))return n=zM.test(t),e[1]=Bm(e[1],n),e[0]=Bm(e[0],n,ug(e[1])),!0},Wo,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,g=function x(p){var m=r()-i,v=p===!0,T,y,S,w;if((m>e||m<0)&&(n+=m-t),i+=m,S=i-n,T=S-a,(T>0||v)&&(w=++f.frame,d=S-f.time*1e3,f.time=S=S/1e3,a+=T+(T>=s?0:s-T),y=1),v||(l=c(x)),y)for(h=0;h<o.length;h++)o[h](S,d,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Hm&&(!Pf&&Bf()&&($i=Pf=window,Vf=$i.document||{},ci.gsap=Pn,($i.gsapVersions||($i.gsapVersions=[])).push(Pn.version),Wm(pu||$i.GreenSockGlobals||!$i.gsap&&$i||{}),og.forEach(lg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Wo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wo=0,c=Ho},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,v){var T=m?function(y,S,w,_){p(y,S,w,_),f.remove(T)}:p;return f.remove(p),o[v?"unshift":"push"](T),ba(),T},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},f})(),ba=function(){return!Wo&&$n.wake()},ht={},kM=/^[\d.\-M][\d.\-,\s]/,VM=/["']/g,GM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(VM,"").trim():+c,i=l.substr(o+1).trim();return t},HM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},WM=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[GM(t[1])]:HM(e).split(",").map(Zm)):ht._CE&&kM.test(e)?ht._CE("",e):n},XM=function(e){return function(t){return 1-e(1-t)}},ys=function(e,t){return e&&(Wt(e)?e:ht[e]||WM(e))||t},Ts=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return kn(e,function(o){ht[o]=ci[o]=s,ht[a=o.toLowerCase()]=n;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},hg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Rf*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*mM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:hg(o);return s=Rf/s,l.config=function(c,u){return r(e,c,u)},l},Ef=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:hg(n);return i.config=function(s){return r(e,s)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ts(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Ts("Elastic",wf("in"),wf("out"),wf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ts("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ts("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ts("Circ",function(r){return-(Vm(1-r*r)-1)});Ts("Sine",function(r){return r===1?1:-pM(r*fM)+1});Ts("Back",Ef("in"),Ef("out"),Ef());ht.SteppedEase=ht.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Mt;return function(o){return((i*Yo(0,a,o)|0)+s)*n}}};Vo.ease=ht["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Hf+=r+","+r+"Params,"});var Zf=function(e,t){this.id=dM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xf,this.set=t?t.getSetter:Eu},Xo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ma(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Wo||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ma(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ba(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wu(this,n),!s._dp||s.parent||Km(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ym(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Um(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Um(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Sa(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?_u(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Yo(-Math.abs(this._delay),o,s),i!==!1),Tu(this),wM(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ba(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Mt,a;if(s)for(this._tTime-=Mt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Mt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ki(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_u(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=SM);var i=xn;return xn=n,qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),Kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Wt(n)?n:Jm,l=function(){var u=i.then;i.then=null,s&&s(),Wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Fo(this)},r})();ui(Xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){km(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),kt&&Ki(n.parent||kt,gr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qm(gr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return zo(0,arguments,this),this},t.from=function(i,s,a){return zo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return zo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Bo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(i,s,bi(this,a),1),this},t.call=function(i,s,a){return Ki(this,Jt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Jt(i,a,bi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Bo(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Bo(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,x,p,m,v,T,y,S,w,_;if(this!==kt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,y=this._start,T=this._ts,m=!T,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=zt(u%p),u===l?(x=this._repeat,d=c):(S=zt(u/p),x=~~S,x&&x===S&&(d=c,x--),d>c&&(d=c)),S=Sa(this._tTime,p),!o&&this._tTime&&S!==x&&this._tTime-S*p-this._dur<=0&&(S=x),w&&x&1&&(d=c-d,_=1),x!==S&&!this._lock){var M=w&&S&1,I=M===(w&&x&1);if(x<S&&(M=!M),o=M?0:u%c?c:u,this._lock=1,this.render(o||(_?0:zt(x*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,S=x),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=RM(this,zt(o),zt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!S&&(li(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-Mt);break}}h=g}else{h=this._last;for(var A=i<0?i:d;h;){if(g=h._prev,(h._act||A<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(A-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(A-h._start)*h._ts,s,a||xn&&qf(h)),d!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=A?-Mt:Mt);break}}h=g}}if(v&&!s&&(this.pause(),v.render(d>=o?0:-Mt)._zTime=d>=o?1:-1,this._ts))return this._start=y,Tu(this),this.render(i,s,a);this._onUpdate&&!s&&li(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(li(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(xr(s)||(s=bi(this,s,i)),!(i instanceof Xo)){if(Rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ln(i))return this.addLabel(i,s);if(Wt(i))i=Jt.delayedCall(0,i);else return this}return this!==i?Ki(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Jt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return ln(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&bu(this,i),i===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Jt.delayedCall(0,s||Ho,a);return o.data="isPause",this._hasPause=1,Ki(this,o,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Wr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=wi(i),l=this._first,c=xr(s),u;l;)l instanceof Jt?MM(l._targets,o)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=bi(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Jt.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Mt,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ma(g,p,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ui({startAt:{time:bi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Om(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Om(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=zt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return vs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ti,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ki(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=zt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ma(a,a===kt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(kt._ts&&(Ym(kt,_u(i,kt)),qm=$n.frame),$n.frame>=Dm){Dm+=Qn.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(Xo);ui(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qM=function(e,t,n,i,s,a,o){var l=new Vn(this._pt,e,t,0,1,jf,null,s),c=0,u=0,f,d,h,g,x,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ta(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),d=n.match(Mf)||[];f=Mf.exec(i);)g=f[0],x=i.substring(c,f.index),h?h=(h+1)%5:x.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:",",s:p,c:g.charAt(1)==="="?bs(p,g)-p:parseFloat(g)-p,m:h&&h<4?Math.round:0},c=Mf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(kf.test(i)||m)&&(l.e=0),this._pt=l,l},Jf=function(e,t,n,i,s,a,o,l,c,u){Wt(i)&&(i=i(s||0,e,a));var f=e[t],d=n!=="get"?n:Wt(f)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Wt(f)?c?KM:dg:Qf,g;if(ln(i)&&(~i.indexOf("random(")&&(i=Ta(i)),i.charAt(1)==="="&&(g=bs(d,i)+(vn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Ff)return!isNaN(d*i)&&i!==""?(g=new Vn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?jM:pg,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Mu(t,i),qM.call(this,e,t,d,i,h,l||Qn.stringFilter,c))},YM=function(e,t,n,i,s){if(Wt(e)&&(e=ko(e,s,t,n,i)),!Qi(e)||e.style&&e.nodeType||Rn(e)||Gm(e))return ln(e)?ko(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ko(e[o],s,t,n,i);return a},$f=function(e,t,n,i,s,a){var o,l,c,u;if(Jn[e]&&(o=new Jn[e]).init(s,o.rawVars?t[e]:YM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Vn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==va))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Wr,Ff,Kf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,x=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,T=e._overwrite==="auto"&&!Of,y=e.timeline,S=i.easeReverse||f,w,_,M,I,A,D,L,B,P,z,W,F,X;if(y&&(!d||!s)&&(s="none"),e._ease=ys(s,Vo.ease),e._rEase=S&&(ys(S)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||d&&!i.stagger){if(B=p[0]?qr(p[0]).harness:0,F=B&&i[B.prop],w=gu(i,Gf),x&&(x._zTime<0&&x.progress(1),t<0&&u&&o&&!h?x.render(-1,!0):x.revert(u&&g?hu:yM),x._lazy=0),a){if(Yr(e._startAt=Jt.set(p,ui({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!x&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return li(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!o&&!h)&&e._startAt.revert(hu),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!x){if(t&&(o=!1),M=ui({overwrite:!1,data:"isFromStart",lazy:o&&!x&&Kn(l),immediateRender:o,stagger:0,parent:m},w),F&&(M[B.prop]=F),Yr(e._startAt=Jt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(hu):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Kn(l)||l&&!g,_=0;_<p.length;_++){if(A=p[_],L=A._gsap||Wf(p)[_]._gsap,e._ptLookup[_]=z={},If[L.id]&&Xr.length&&mu(),W=v===p?_:v.indexOf(A),B&&(P=new B).init(A,F||w,e,W,v)!==!1&&(e._pt=I=new Vn(e._pt,A,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(V){z[V]=I}),P.priority&&(D=1)),!B||F)for(M in w)Jn[M]&&(P=$f(M,w,e,W,A,v))?P.priority&&(D=1):z[M]=I=Jf.call(e,A,M,"get",w[M],W,v,0,i.stringFilter);e._op&&e._op[_]&&e.kill(A,e._op[_]),T&&e._pt&&(Wr=e,kt.killTweensOf(A,z,e.globalTime(t)),X=!e.parent,Wr=0),e._pt&&l&&(If[L.id]=1)}D&&td(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,d&&t<=0&&y.render(Ti,!0,!0)},ZM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ff=1,e.vars[t]="+=0",Kf(e,o),Ff=0,l?Go(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Xt(n)+vn(f.e)),f.b&&(f.b=u.s+vn(f.b))},JM=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ya({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$M=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ko=function(e,t,n,i,s){return Wt(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?Ta(e):e},vu=Hf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",fg={};kn(vu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return fg[r]=1});vu=vu.split(",");var Jt=(function(r){km(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Bo(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,x=l.defaults,p=l.scrollTrigger,m=i.parent||kt,v=(Rn(n)||Gm(n)?xr(n[0]):"length"in i)?[n]:wi(n),T,y,S,w,_,M,I,A;if(o._targets=v.length?Wf(v):Go("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||d||uu(c)||uu(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(T=o.timeline=new Cn({data:"nested",defaults:x||{},targets:m&&m.data==="nested"?m.vars.targets:v}),T.kill(),T.parent=T._dp=gr(o),T._start=0,d||uu(c)||uu(u)){if(w=v.length,I=d&&ng(d),Qi(d))for(_ in d)~vu.indexOf(_)&&(A||(A={}),A[_]=d[_]);for(y=0;y<w;y++)S=gu(i,fg),S.stagger=0,D&&(S.easeReverse=D),A&&ya(S,A),M=v[y],S.duration=+ko(c,gr(o),y,M,v),S.delay=(+ko(u,gr(o),y,M,v)||0)-o._delay,!d&&w===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),T.to(M,S,I?I(y,M,v):0),T._ease=ht.none;T.duration()?c=u=0:o.timeline=0}else if(g){Bo(ui(T.vars.defaults,{ease:"none"})),T._ease=ys(g.ease||i.ease||"none");var L=0,B,P,z;if(Rn(g))g.forEach(function(W){return T.to(v,W,">")}),T.duration();else{S={};for(_ in g)_==="ease"||_==="easeEach"||$M(_,g[_],S,g.easeEach);for(_ in S)for(B=S[_].sort(function(W,F){return W.t-F.t}),L=0,y=0;y<B.length;y++)P=B[y],z={ease:P.e,duration:(P.t-(y?B[y-1].t:0))/100*c},z[_]=P.v,T.to(v,z,L),L+=z.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return h===!0&&!Of&&(Wr=gr(o),kt.killTweensOf(v),Wr=0),Ki(m,gr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===zt(m._time)&&Kn(f)&&EM(gr(o))&&m.data!=="nested")&&(o._tTime=-Mt,o.render(Math.max(0,-u)||0)),p&&Qm(gr(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Mt&&!u?l:i<Mt?0:i,d,h,g,x,p,m,v,T;if(!c)CM(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+i,s,a);if(d=zt(f%x),f===l?(g=this._repeat,d=c):(p=zt(f/x),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(d=c-d),p=Sa(this._tTime,x),d===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==x&&this._initted&&(this._lock=a=1,this.render(zt(x*g),!0).invalidate()._lock=0)}if(!this._initted){if(jm(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=d<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/c);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(li(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Lf(this,i,s,a),li(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Lf(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Yr(this,1),!s&&!(u&&!o)&&(f||o||m)&&(li(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Wo||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Kf(this,c),u=this._ease(c/this._dur),ZM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(wu(this,0),this.parent||$m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wr&&Wr.vars.overwrite!==!0)._first||Fo(this),this.parent&&a!==this.timeline.totalDuration()&&Ma(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?wi(i):o,c=this._ptLookup,u=this._pt,f,d,h,g,x,p,m;if((!s||s==="all")&&TM(o,l))return s==="all"&&(this._pt=0),Fo(this);for(f=this._op=this._op||[],s!=="all"&&(ln(s)&&(x={},kn(s,function(v){return x[v]=1}),s=x),s=JM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(f[m]=s,g=d,h={}):(h=f[m]=f[m]||{},g=s);for(x in g)p=d&&d[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&bu(this,p,"_pt"),delete d[x]),h!=="all"&&(h[x]=1)}return this._initted&&!this._pt&&u&&Fo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return zo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return zo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return kt.killTweensOf(i,s,a)},e})(Xo);ui(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var e=new Cn,t=Df.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qf=function(e,t,n){return e[t]=n},dg=function(e,t,n){return e[t](n)},KM=function(e,t,n,i){return e[t](i.fp,n)},QM=function(e,t,n){return e.setAttribute(t,n)},Eu=function(e,t){return Wt(e[t])?dg:Su(e[t])&&e.setAttribute?QM:Qf},pg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ed=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},eb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},tb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?bu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},nb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},td=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Vn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||pg,this.d=l||this,this.set=c||Qf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=nb,this.m=n,this.mt=s,this.tween=i},r})();kn(Hf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gf[r]=1});ci.TweenMax=ci.TweenLite=Jt;ci.TimelineLite=ci.TimelineMax=Cn;kt=new Cn({sortChildren:!1,defaults:Vo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Yf;var Ss=[],du={},ib=[],zm=0,rb=0,Af=function(e){return(du[e]||ib).map(function(t){return t()})},qo=function(){var e=Date.now(),t=[];e-zm>2&&(Af("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=$i.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Af("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zm=e,Af("matchMedia"))},mg=(function(){function r(t,n){this.selector=n&&Nf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Wt(n)&&(s=i,i=n,n=Wt);var a=this,o=function(){var c=Nt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Nf(s)),Nt=a,f=i.apply(a,arguments),Wt(f)&&a._r.push(f),Nt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Wt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Jt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ss.length;a--;)Ss[a].id===this.id&&Ss.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(qo):o.removeEventListener("change",qo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),sb=(function(){function r(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Qi(n)||(n={matches:n});var a=new mg(0,s||this.scope),o=a.conditions={},l,c,u;Nt&&!a.selector&&(a.selector=Nt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=$i.matchMedia(n[c]),l&&(Ss.indexOf(a)<0&&Ss.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(qo):l.addEventListener("change",qo),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),yu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return lg(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=wi(e)[0]);var s=qr(e||{}).get,a=n?Jm:Zm;return n==="native"&&(n=""),e&&(t?a((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Jn[o]&&Jn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(u){return Pn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Jn[t],o=qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;va._pt=0,f.init(e,n?u+n:u,va,0,[e]),f.render(1,f),va._pt&&ed(1,va)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Pn.to(e,ui((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ys(e.ease,Vo.ease)),Nm(Vo,e||{})},config:function(e){return Nm(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jn[o]&&!ci[o]&&Go(t+" effect requires "+o+" plugin.")}),bf[t]=function(o,l,c){return n(wi(o),ui(l||{},s),c)},a&&(Cn.prototype[t]=function(o,l,c){return this.add(bf[t](o,Qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=ys(t)},parseEase:function(e,t){return arguments.length?ys(e,t):ht},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=Kn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]))&&Ki(n,i,i._start-i._delay),i=s;return Ki(kt,n,0),n},context:function(e,t){return e?new mg(e,t):Nt},matchMedia:function(e){return new sb(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qo()},addEventListener:function(e,t){var n=du[e]||(du[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=du[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:FM,wrapYoyo:OM,distribute:ng,random:rg,snap:ig,normalize:UM,getUnit:vn,clamp:IM,splitColor:cg,toArray:wi,selector:Nf,mapRange:ag,pipe:DM,unitize:NM,interpolate:BM,shuffle:tg},install:Wm,effects:bf,ticker:$n,updateRoot:Cn.updateRoot,plugins:Jn,globalTimeline:kt,core:{PropTween:Vn,globals:Xm,Tween:Jt,Timeline:Cn,Animation:Xo,getCache:qr,_removeLinkedListItem:bu,reverting:function(){return xn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return Of=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return yu[r]=Jt[r]});$n.add(Cn.updateRoot);va=yu.to({},{duration:0});var ab=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ob=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ab(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Cf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ln(s)&&(l={},kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ob(o,s)}}}},Pn=yu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)xn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cf("roundProps",Uf),Cf("modifiers"),Cf("snap",ig))||yu;Jt.version=Cn.version=Pn.version="3.15.1";Hm=1;Bf()&&ba();var lb=ht.Power0,cb=ht.Power1,ub=ht.Power2,hb=ht.Power3,fb=ht.Power4,db=ht.Linear,pb=ht.Quad,mb=ht.Cubic,gb=ht.Quart,_b=ht.Quint,xb=ht.Strong,vb=ht.Elastic,yb=ht.Back,Sb=ht.SteppedEase,Mb=ht.Bounce,bb=ht.Sine,Tb=ht.Expo,wb=ht.Circ;var gg,Jr,Ea,od,Cs,Eb,_g,ld,Ab=function(){return typeof window<"u"},yr={},As=180/Math.PI,Aa=Math.PI/180,wa=Math.atan2,xg=1e8,cd=/([A-Z])/g,Cb=/(left|right|width|margin|padding|x)/i,Rb=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},id=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Pb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ib=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Lb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Db=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Eg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ag=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Nb=function(e,t,n){return e.style[t]=n},Ub=function(e,t,n){return e.style.setProperty(t,n)},Fb=function(e,t,n){return e._gsap[t]=n},Ob=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Bb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},zb=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Vt="transform",jn=Vt+"Origin",kb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vr(i,o)}):this.tfm[e]=a.x?a[e]:vr(i,e),e===jn&&(this.tfm.zOrigin=a.zOrigin);else return ji.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},Cg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Vb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ld(),(!s||!s.isStart)&&!n[Vt]&&(Cg(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Rg=function(e,t){var n={target:e,props:[],revert:Vb,save:kb};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Pg,rd=function(e,t){var n=Jr.createElementNS?Jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jr.createElement(e);return n&&n.style?n:Jr.createElement(e)},hi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ca(t)||t,1)||""},vg="O,Moz,ms,Ms,Webkit".split(","),Ca=function(e,t,n){var i=t||Cs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(vg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?vg[a]:"")+e},sd=function(){Ab()&&window.document&&(gg=window,Jr=gg.document,Ea=Jr.documentElement,Cs=rd("div")||{style:{}},Eb=rd("div"),Vt=Ca(Vt),jn=Vt+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pg=!!Ca("perspective"),ld=Pn.core.reverting,od=1)},yg=function(e){var t=e.ownerSVGElement,n=rd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ea.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ea.removeChild(n),s},Sg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ig=function(e){var t,n;try{t=e.getBBox()}catch{t=yg(e),n=1}return t&&(t.width||t.height)||n||(t=yg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Sg(e,["x","cx","x1"])||0,y:+Sg(e,["y","cy","y1"])||0,width:0,height:0}:t},Lg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ig(e))},Kr=function(e,t){if(t){var n=e.style,i;t in yr&&t!==jn&&(t=Vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cd,"-$1").toLowerCase())):n.removeAttribute(t)}},$r=function(e,t,n,i,s,a){var o=new Vn(e._pt,t,n,0,1,a?Ag:Eg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Mg={deg:1,rad:1,turn:1},Gb={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Cs.style,l=Cb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,x,p,m;if(i===a||!s||Mg[i]||Mg[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&Lg(e),(h||a==="%")&&(yr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Xt(h?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(d?a:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Jr||!x.appendChild)&&(x=Jr.body),p=x._gsap,p&&h&&p.width&&l&&p.time===$n.time&&!p.uncache)return Xt(s/p.width*f);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+i,g=e[u],v?e.style[t]=v:Kr(e,t)}else(h||a==="%")&&!Gb[hi(x,"display")]&&(o.position=hi(e,"position")),x===e&&(o.position="static"),x.appendChild(Cs),g=Cs[u],x.removeChild(Cs),o.position="absolute";return l&&h&&(p=qr(x),p.time=$n.time,p.width=x[u]),Xt(d?g*s/f:g&&s?f/g*s:0)},vr=function(e,t,n,i){var s;return od||sd(),t in ji&&t!=="transform"&&(t=ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(s=$o(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Cu(hi(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Au[t]&&Au[t](e,t,n)||hi(e,t)||Xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},Hb=function(e,t,n,i){if(!n||n==="none"){var s=Ca(t,e,1),a=s&&hi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var o=new Vn(this._pt,e.style,t,0,1,jf),l=0,c=0,u,f,d,h,g,x,p,m,v,T,y,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=hi(e,t)||i,x?e.style[t]=x:Kr(e,t)),u=[n,i],Yf(u),n=u[0],i=u[1],d=n.match(Ms)||[],S=i.match(Ms)||[],S.length){for(;f=Ms.exec(i);)p=f[0],v=i.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(x=d[c++]||"")&&(h=parseFloat(x)||0,y=x.substr((h+"").length),p.charAt(1)==="="&&(p=bs(h,p)+y),m=parseFloat(p),T=p.substr((m+"").length),l=Ms.lastIndex-T.length,T||(T=T||Qn.units[t]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(h=Qr(e,t,x,T)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:h,c:m-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Ag:Eg;return kf.test(i)&&(o.e=0),this._pt=o,o},bg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=bg[n]||n,t[1]=bg[i]||i,t.join(" ")},Xb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],yr[o]&&(l=1,o=o==="transformOrigin"?jn:Vt),Kr(n,o);l&&(Kr(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",$o(n,1),a.uncache=1,Cg(i)))}},Au={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Vn(e._pt,t,n,0,0,Xb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Jo=[1,0,0,1,0,0],Dg={},Ng=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tg=function(e){var t=hi(e,Vt);return Ng(t)?Jo:t.substr(7).match(zf).map(Xt)},ud=function(e,t){var n=e._gsap||qr(e),i=e.style,s=Tg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Jo:s):(s===Jo&&!e.offsetParent&&e!==Ea&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ea.appendChild(e)),s=Tg(e),l?i.display=l:Kr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ea.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ad=function(e,t,n,i,s,a){var o=e._gsap,l=s||ud(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],g=l[1],x=l[2],p=l[3],m=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,S=parseFloat(T[1])||0,w,_,M,I;n?l!==Jo&&(_=h*p-g*x)&&(M=y*(p/_)+S*(-x/_)+(x*v-p*m)/_,I=y*(-g/_)+S*(h/_)-(h*v-g*m)/_,y=M,S=I):(w=Ig(e),y=w.x+(~T[0].indexOf("%")?y/100*w.width:y),S=w.y+(~(T[1]||T[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(m=y-c,v=S-u,o.xOffset=f+(m*h+v*x)-m,o.yOffset=d+(m*g+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[jn]="0px 0px",a&&($r(a,o,"xOrigin",c,y),$r(a,o,"yOrigin",u,S),$r(a,o,"xOffset",f,o.xOffset),$r(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},$o=function(e,t){var n=e._gsap||new Zf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=hi(e,jn)||"0",u,f,d,h,g,x,p,m,v,T,y,S,w,_,M,I,A,D,L,B,P,z,W,F,X,V,R,Q,xe,Be,Z,oe;return u=f=d=x=p=m=v=T=y=0,h=g=1,n.svg=!!(e.getCTM&&Lg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),_=ud(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),ad(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,_)),S=n.xOrigin||0,w=n.yOrigin||0,_!==Jo&&(D=_[0],L=_[1],B=_[2],P=_[3],u=z=_[4],f=W=_[5],_.length===6?(h=Math.sqrt(D*D+L*L),g=Math.sqrt(P*P+B*B),x=D||L?wa(L,D)*As:0,v=B||P?wa(B,P)*As+x:0,v&&(g*=Math.abs(Math.cos(v*Aa))),n.svg&&(u-=S-(S*D+w*B),f-=w-(S*L+w*P))):(oe=_[6],Be=_[7],R=_[8],Q=_[9],xe=_[10],Z=_[11],u=_[12],f=_[13],d=_[14],M=wa(oe,xe),p=M*As,M&&(I=Math.cos(-M),A=Math.sin(-M),F=z*I+R*A,X=W*I+Q*A,V=oe*I+xe*A,R=z*-A+R*I,Q=W*-A+Q*I,xe=oe*-A+xe*I,Z=Be*-A+Z*I,z=F,W=X,oe=V),M=wa(-B,xe),m=M*As,M&&(I=Math.cos(-M),A=Math.sin(-M),F=D*I-R*A,X=L*I-Q*A,V=B*I-xe*A,Z=P*A+Z*I,D=F,L=X,B=V),M=wa(L,D),x=M*As,M&&(I=Math.cos(M),A=Math.sin(M),F=D*I+L*A,X=z*I+W*A,L=L*I-D*A,W=W*I-z*A,D=F,z=X),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,m=180-m),h=Xt(Math.sqrt(D*D+L*L+B*B)),g=Xt(Math.sqrt(W*W+oe*oe)),M=wa(z,W),v=Math.abs(M)>2e-4?M*As:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ng(hi(e,Vt)),F&&e.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Xt(h),n.scaleY=Xt(g),n.rotation=Xt(x)+o,n.rotationX=Xt(p)+o,n.rotationY=Xt(m)+o,n.skewX=v+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=Cu(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?Yb:Pg?Ug:qb,n.uncache=0,n},Cu=function(e){return(e=e.split(" "))[0]+" "+e[1]},nd=function(e,t,n){var i=vn(t);return Xt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},qb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ug(e,t)},ws="0deg",Zo="0px",Es=") ",Ug=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,x=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,T=n.zOrigin,y="",S=m==="auto"&&e&&e!==1||m===!0;if(T&&(f!==ws||u!==ws)){var w=parseFloat(u)*Aa,_=Math.sin(w),M=Math.cos(w),I;w=parseFloat(f)*Aa,I=Math.cos(w),a=nd(v,a,_*I*-T),o=nd(v,o,-Math.sin(w)*-T),l=nd(v,l,M*I*-T+T)}p!==Zo&&(y+="perspective("+p+Es),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||a!==Zo||o!==Zo||l!==Zo)&&(y+=l!==Zo||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Es),c!==ws&&(y+="rotate("+c+Es),u!==ws&&(y+="rotateY("+u+Es),f!==ws&&(y+="rotateX("+f+Es),(d!==ws||h!==ws)&&(y+="skew("+d+", "+h+Es),(g!==1||x!==1)&&(y+="scale("+g+", "+x+Es),v.style[Vt]=y||"translate(0, 0)"},Yb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,x=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,T=parseFloat(a),y=parseFloat(o),S,w,_,M,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Aa,c*=Aa,S=Math.cos(l)*f,w=Math.sin(l)*f,_=Math.sin(l-c)*-d,M=Math.cos(l-c)*d,c&&(u*=Aa,I=Math.tan(c-u),I=Math.sqrt(1+I*I),_*=I,M*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),S*=I,w*=I)),S=Xt(S),w=Xt(w),_=Xt(_),M=Xt(M)):(S=f,M=d,w=_=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=Qr(h,"x",a,"px"),y=Qr(h,"y",o,"px")),(g||x||p||m)&&(T=Xt(T+g-(g*S+x*_)+p),y=Xt(y+x-(g*w+x*M)+m)),(i||s)&&(I=h.getBBox(),T=Xt(T+i/100*I.width),y=Xt(y+s/100*I.height)),I="matrix("+S+","+w+","+_+","+M+","+T+","+y+")",h.setAttribute("transform",I),v&&(h.style[Vt]=I)},Zb=function(e,t,n,i,s){var a=360,o=ln(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?As:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*xg)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*xg)%a-~~(c/a)*a)),e._pt=d=new Vn(e._pt,t,n,i,c,Pb),d.e=u,d.u="deg",e._props.push(n),d},wg=function(e,t){for(var n in t)e[n]=t[n];return e},Jb=function(e,t,n){var i=wg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=$o(n,1),Kr(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],a[Vt]=t,o=$o(n,1),a[Vt]=c);for(l in yr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=vn(c),g=vn(u),f=h!==g?Qr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Vn(e._pt,o,l,f,d-f,id),e._pt.u=g||0,e._props.push(l));wg(o,i)};kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Au[e>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(g){return vr(o,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(g,x){return h[g]=d[x]=d[x]||d[(x-1)/2|0]}),o.init(l,h,f)}});var hd={name:"css",register:sd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,g,x,p,m,v,T,y,S,w,_,M,I;od||sd(),this.styles=this.styles||Rg(e),M=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(u=t[x],!(Jn[x]&&$f(x,t,n,i,e,s)))){if(h=typeof u,g=Au[x],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ta(u)),g)g(this,e,x,u,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),u+="",_r.lastIndex=0,_r.test(c)||(p=vn(c),m=vn(u),m?p!==m&&(c=Qr(e,x,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,x),a.push(x),M.push(x,0,o[x]);else if(h!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,s):l[x],ln(c)&&~c.indexOf("random(")&&(c=Ta(c)),vn(c+"")||c==="auto"||(c+=Qn.units[x]||vn(vr(e,x))||""),(c+"").charAt(1)==="="&&(c=vr(e,x))):c=vr(e,x),d=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),x in ji&&(x==="autoAlpha"&&(d===1&&vr(e,"visibility")==="hidden"&&f&&(d=0),M.push("visibility",0,o.visibility),$r(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),x!=="scale"&&x!=="transform"&&(x=ji[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in yr,T){if(this.styles.save(x),I=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=hi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=hi(e,"perspective"),A?e.style.perspective=A:Kr(e,"perspective")}f=parseFloat(u)}if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||$o(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new Vn(this._pt,o,Vt,0,1,S.renderTransform,S,0,-1),y.dep=1),x==="scale")this._pt=new Vn(this._pt,S,"scaleY",S.scaleY,(v?bs(S.scaleY,v+f):f)-S.scaleY||0,id),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){M.push(jn,0,o[jn]),u=Wb(u),S.svg?ad(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==S.zOrigin&&$r(this,S,"zOrigin",S.zOrigin,m),$r(this,o,x,Cu(c),Cu(u)));continue}else if(x==="svgOrigin"){ad(e,u,1,w,0,this);continue}else if(x in Dg){Zb(this,S,x,d,v?bs(d,v+u):u);continue}else if(x==="smoothOrigin"){$r(this,S,"smooth",S.smooth,u);continue}else if(x==="force3D"){S[x]=u;continue}else if(x==="transform"){Jb(this,u,e);continue}}else x in o||(x=Ca(x)||x);if(T||(f||f===0)&&(d||d===0)&&!Rb.test(u)&&x in o)p=(c+"").substr((d+"").length),f||(f=0),m=vn(u)||(x in Qn.units?Qn.units[x]:p),p!==m&&(d=Qr(e,x,c,m)),this._pt=new Vn(this._pt,T?S:o,x,d,(v?bs(d,v+f):f)-d,!T&&(m==="px"||x==="zIndex")&&t.autoRound!==!1?Db:id),this._pt.u=m||0,T&&I!==u?(this._pt.b=c,this._pt.e=I,this._pt.r=Lb):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Ib);else if(x in o)Hb.call(this,e,x,c,v?v+u:u);else if(x in e)this.add(e,x,c||e[x],v?v+u:u,i,s);else if(x!=="parseTransform"){Mu(x,u);continue}T||(x in o?M.push(x,0,o[x]):typeof e[x]=="function"?M.push(x,2,e[x]()):M.push(x,1,c||e[x])),a.push(x)}}_&&td(this)},render:function(e,t){if(t.tween._time||!ld())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vr,aliases:ji,getSetter:function(e,t,n){var i=ji[t];return i&&i.indexOf(",")<0&&(t=i),t in yr&&t!==jn&&(e._gsap.x||vr(e,"x"))?n&&_g===n?t==="scale"?Ob:Fb:(_g=n||{})&&(t==="scale"?Bb:zb):e.style&&!Su(e.style[t])?Nb:~t.indexOf("-")?Ub:Eu(e,t)},core:{_removeProperty:Kr,_getMatrix:ud}};Pn.utils.checkPrefix=Ca;Pn.core.getStyleSaver=Rg;(function(r,e,t,n){var i=kn(r+","+e+","+t,function(s){yr[s]=1});kn(e,function(s){Qn.units[s]="deg",Dg[s]=1}),ji[i[13]]=r+","+e,kn(n,function(s){var a=s.split(":");ji[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});Pn.registerPlugin(hd);var mt=Pn.registerPlugin(hd)||Pn,dA=mt.core.Tween;function Fg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function $b(r,e,t){return e&&Fg(r.prototype,e),t&&Fg(r,t),r}var yn,Iu,Kb,ei,jr,es,Pa,Bg,Rs,Ia,zg,Sr,Bi,kg,Vg=function(){return yn||typeof window<"u"&&(yn=window.gsap)&&yn.registerPlugin&&yn},Gg=1,Ra=[],Qe=[],zi=[],Qo=Date.now,fd=function(e,t){return t},Qb=function(){var e=Ia.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,zi),Qe=n,zi=i,fd=function(a,o){return t[a](o)}},br=function(e,t){return~zi.indexOf(e)&&zi[zi.indexOf(e)+1][t]},jo=function(e){return!!~zg.indexOf(e)},Hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Gn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ru="scrollLeft",Pu="scrollTop",dd=function(){return Sr&&Sr.isPressed||Qe.cache++},Lu=function(e,t){var n=function i(s){if(s||s===0){Gg&&ei.history.scrollRestoration!=="manual"&&(ei.history.scrollRestoration="manual");var a=Sr&&Sr.isPressed;s=i.v=Math.round(s)||(Sr&&Sr.iOS?1:0),e(s),i.cacheID=Qe.cache,a&&fd("ss",s)}else(t||Qe.cache!==i.cacheID||fd("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},In={s:Ru,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Lu(function(r){return arguments.length?ei.scrollTo(r,en.sc()):ei.pageXOffset||jr[Ru]||es[Ru]||Pa[Ru]||0})},en={s:Pu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Lu(function(r){return arguments.length?ei.scrollTo(In.sc(),r):ei.pageYOffset||jr[Pu]||es[Pu]||Pa[Pu]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||yn.utils.toArray)(e)[0]||(typeof e=="string"&&yn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},jb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Mr=function(e,t){var n=t.s,i=t.sc;jo(e)&&(e=jr.scrollingElement||es);var s=Qe.indexOf(e),a=i===en.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+a]||Hn(e,"scroll",dd);var o=Qe[s+a],l=o||(Qe[s+a]=Lu(br(e,n),!0)||(jo(e)?i:Lu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=yn.getProperty(e,"scrollBehavior")==="smooth"),l},Du=function(e,t,n){var i=e,s=e,a=Qo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,x){var p=Qo();x||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(g){var x=o,p=s,m=Qo();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-x)*1e3};return{update:u,reset:f,getVelocity:d}},Ko=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Og=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Hg=function(){Ia=yn.core.globals().ScrollTrigger,Ia&&Ia.core&&Qb()},Wg=function(e){return yn=e||Vg(),!Iu&&yn&&typeof document<"u"&&document.body&&(ei=window,jr=document,es=jr.documentElement,Pa=jr.body,zg=[ei,jr,es,Pa],Kb=yn.utils.clamp,kg=yn.core.context||function(){},Rs="onpointerenter"in Pa?"pointer":"mouse",Bg=qt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=qt.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gg=0},500),Iu=1),Ia||Hg(),Iu};In.op=en;Qe.cache=0;var qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Iu||Wg(yn)||console.warn("Please gsap.registerPlugin(Observer)"),Ia||Hg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,x=n.event,p=n.onDragStart,m=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,S=n.onRight,w=n.onLeft,_=n.onUp,M=n.onDown,I=n.onChangeX,A=n.onChangeY,D=n.onChange,L=n.onToggleX,B=n.onToggleY,P=n.onHover,z=n.onHoverEnd,W=n.onMove,F=n.ignoreCheck,X=n.isNormalizer,V=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,xe=n.onEnable,Be=n.onDisable,Z=n.onClick,oe=n.scrollSpeed,pe=n.capture,ye=n.allowClicks,he=n.lockAxis,Ne=n.onLockAxis;this.target=o=Wn(o)||es,this.vars=n,h&&(h=yn.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,oe=oe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(Pa).lineHeight)||22);var st,Pe,Ge,Ie,Re,ct,ut,$=this,et=0,Ft=0,gt=n.passive||!u&&n.passive!==!1,$e=Mr(o,In),Pt=Mr(o,en),Ot=$e(),O=Pt(),Se=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Bi[0]==="pointerdown",Le=jo(o),Te=o.ownerDocument||jr,se=[0,0,0],He=[0,0,0],we=0,ze=function(){return we=Qo()},C=function(_e,re){return($.event=_e)&&h&&jb(_e.target,h)||re&&Se&&_e.pointerType!=="touch"||F&&F(_e,re)},b=function(){$._vx.reset(),$._vy.reset(),Pe.pause(),f&&f($)},k=function(){var _e=$.deltaX=Og(se),re=$.deltaY=Og(He),te=Math.abs(_e)>=i,ve=Math.abs(re)>=i;D&&(te||ve)&&D($,_e,re,se,He),te&&(S&&$.deltaX>0&&S($),w&&$.deltaX<0&&w($),I&&I($),L&&$.deltaX<0!=et<0&&L($),et=$.deltaX,se[0]=se[1]=se[2]=0),ve&&(M&&$.deltaY>0&&M($),_&&$.deltaY<0&&_($),A&&A($),B&&$.deltaY<0!=Ft<0&&B($),Ft=$.deltaY,He[0]=He[1]=He[2]=0),(Ie||Ge)&&(W&&W($),Ge&&(p&&Ge===1&&p($),v&&v($),Ge=0),Ie=!1),ct&&!(ct=!1)&&Ne&&Ne($),Re&&(Q($),Re=!1),st=0},ae=function(_e,re,te){se[te]+=_e,He[te]+=re,$._vx.update(_e),$._vy.update(re),c?st||(st=requestAnimationFrame(k)):k()},ie=function(_e,re){he&&!ut&&($.axis=ut=Math.abs(_e)>Math.abs(re)?"x":"y",ct=!0),ut!=="y"&&(se[2]+=_e,$._vx.update(_e,!0)),ut!=="x"&&(He[2]+=re,$._vy.update(re,!0)),c?st||(st=requestAnimationFrame(k)):k()},le=function(_e){if(!C(_e,1)){_e=Ko(_e,u);var re=_e.clientX,te=_e.clientY,ve=re-$.x,ne=te-$.y,Ae=$.isDragging;$.x=re,$.y=te,(Ae||(ve||ne)&&(Math.abs($.startX-re)>=s||Math.abs($.startY-te)>=s))&&(Ge||(Ge=Ae?2:1),Ae||($.isDragging=!0),ie(ve,ne))}},ue=$.onPress=function(ce){C(ce,1)||ce&&ce.button||($.axis=ut=null,Pe.pause(),$.isPressed=!0,ce=Ko(ce),et=Ft=0,$.startX=$.x=ce.clientX,$.startY=$.y=ce.clientY,$._vx.reset(),$._vy.reset(),Hn(X?o:Te,Bi[1],le,gt,!0),$.deltaX=$.deltaY=0,T&&T($))},G=$.onRelease=function(ce){if(!C(ce,1)){Gn(X?o:Te,Bi[1],le,!0);var _e=!isNaN($.y-$.startY),re=$.isDragging,te=re&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),ve=Ko(ce);!te&&_e&&($._vx.reset(),$._vy.reset(),u&&ye&&yn.delayedCall(.08,function(){if(Qo()-we>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(Te.createEvent){var ne=Te.createEvent("MouseEvents");ne.initMouseEvent("click",!0,!0,ei,1,ve.screenX,ve.screenY,ve.clientX,ve.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(ne)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,f&&re&&!X&&Pe.restart(!0),Ge&&k(),m&&re&&m($),y&&y($,te)}},j=function(_e){return _e.touches&&_e.touches.length>1&&($.isGesturing=!0)&&V(_e,$.isDragging)},de=function(){return($.isGesturing=!1)||R($)},N=function(_e){if(!C(_e)){var re=$e(),te=Pt();ae((re-Ot)*oe,(te-O)*oe,1),Ot=re,O=te,f&&Pe.restart(!0)}},ee=function(_e){if(!C(_e)){_e=Ko(_e,u),Q&&(Re=!0);var re=(_e.deltaMode===1?l:_e.deltaMode===2?ei.innerHeight:1)*g;ae(_e.deltaX*re,_e.deltaY*re,0),f&&!X&&Pe.restart(!0)}},K=function(_e){if(!C(_e)){var re=_e.clientX,te=_e.clientY,ve=re-$.x,ne=te-$.y;$.x=re,$.y=te,Ie=!0,f&&Pe.restart(!0),(ve||ne)&&ie(ve,ne)}},me=function(_e){$.event=_e,P($)},fe=function(_e){$.event=_e,z($)},ge=function(_e){return C(_e)||Ko(_e,u)&&Z($)};Pe=$._dc=yn.delayedCall(d||.25,b).pause(),$.deltaX=$.deltaY=0,$._vx=Du(0,50,!0),$._vy=Du(0,50,!0),$.scrollX=$e,$.scrollY=Pt,$.isDragging=$.isGesturing=$.isPressed=!1,kg(this),$.enable=function(ce){return $.isEnabled||(Hn(Le?Te:o,"scroll",dd),a.indexOf("scroll")>=0&&Hn(Le?Te:o,"scroll",N,gt,pe),a.indexOf("wheel")>=0&&Hn(o,"wheel",ee,gt,pe),(a.indexOf("touch")>=0&&Bg||a.indexOf("pointer")>=0)&&(Hn(o,Bi[0],ue,gt,pe),Hn(Te,Bi[2],G),Hn(Te,Bi[3],G),ye&&Hn(o,"click",ze,!0,!0),Z&&Hn(o,"click",ge),V&&Hn(Te,"gesturestart",j),R&&Hn(Te,"gestureend",de),P&&Hn(o,Rs+"enter",me),z&&Hn(o,Rs+"leave",fe),W&&Hn(o,Rs+"move",K)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Ie=Ge=!1,$._vx.reset(),$._vy.reset(),Ot=$e(),O=Pt(),ce&&ce.type&&ue(ce),xe&&xe($)),$},$.disable=function(){$.isEnabled&&(Ra.filter(function(ce){return ce!==$&&jo(ce.target)}).length||Gn(Le?Te:o,"scroll",dd),$.isPressed&&($._vx.reset(),$._vy.reset(),Gn(X?o:Te,Bi[1],le,!0)),Gn(Le?Te:o,"scroll",N,pe),Gn(o,"wheel",ee,pe),Gn(o,Bi[0],ue,pe),Gn(Te,Bi[2],G),Gn(Te,Bi[3],G),Gn(o,"click",ze,!0),Gn(o,"click",ge),Gn(Te,"gesturestart",j),Gn(Te,"gestureend",de),Gn(o,Rs+"enter",me),Gn(o,Rs+"leave",fe),Gn(o,Rs+"move",K),$.isEnabled=$.isPressed=$.isDragging=!1,Be&&Be($))},$.kill=$.revert=function(){$.disable();var ce=Ra.indexOf($);ce>=0&&Ra.splice(ce,1),Sr===$&&(Sr=0)},Ra.push($),X&&jo(o)&&(Sr=$),$.enable(x)},$b(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();qt.version="3.15.1";qt.create=function(r){return new qt(r)};qt.register=Wg;qt.getAll=function(){return Ra.slice()};qt.getById=function(r){return Ra.filter(function(e){return e.vars.id===r})[0]};Vg()&&yn.registerPlugin(qt);var De,Ua,nt,yt,pi,vt,Ad,Ju,fl,al,tl,Nu,Ln,Qu,yd,qn,Xg,qg,Fa,l0,pd,c0,Xn,Sd,u0,h0,ts,Md,Cd,Oa,Rd,ns,bd,md,Uu=1,Dn=Date.now,gd=Dn(),Ci=0,nl=0,Yg=function(e,t,n){var i=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Zg=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},e1=function r(){return nl&&requestAnimationFrame(r)},Jg=function(){return Qu=1},$g=function(){return Qu=0},er=function(e){return e},il=function(e){return Math.round(e*1e5)/1e5||0},f0=function(){return typeof window<"u"},d0=function(){return De||f0()&&(De=window.gsap)&&De.registerPlugin&&De},Us=function(e){return!!~Ad.indexOf(e)},p0=function(e){return(e==="Height"?Rd:nt["inner"+e])||pi["client"+e]||vt["client"+e]},m0=function(e){return br(e,"getBoundingClientRect")||(Us(e)?function(){return Zu.width=nt.innerWidth,Zu.height=Rd,Zu}:function(){return Tr(e)})},t1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=br(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?p0(s):e["client"+s])||0}},n1=function(e,t){return!t||~zi.indexOf(e)?m0(e):function(){return Zu}},tr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=br(e,n))?a()-m0(e)()[s]:Us(e)?(pi[n]||vt[n])-p0(i):e[n]-e["offset"+i])},Fu=function(e,t){for(var n=0;n<Fa.length;n+=3)(!t||~t.indexOf(Fa[n+1]))&&e(Fa[n],Fa[n+1],Fa[n+2])},di=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},rl=function(e){return typeof e=="number"},Ps=function(e){return typeof e=="object"},el=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},La=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Da=Math.abs,g0="left",_0="top",Pd="right",Id="bottom",Ls="width",Ds="height",ol="Right",ll="Left",cl="Top",ul="Bottom",tn="padding",Ei="margin",za="Width",Ld="Height",cn="px",Ai=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},i1=function(e){var t=Ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Kg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tr=function(e,t){var n=t&&Ai(e)[yd]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},$u=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},x0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},r1=function(e){return function(t){return De.utils.snap(x0(e),t)}},Dd=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},s1=function(e){return function(t,n){return Dd(x0(e))(t,n.direction)}},Ou=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Qg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zu={toggleActions:"play",anticipatePin:0},Ku={top:0,left:0,center:.5,bottom:1,right:1},Wu=function(e,t){if(di(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ku?Ku[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ku=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=yt.createElement("div"),x=Us(n)||br(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=x?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,T=v?c:u,y="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(y+=(i===en?Pd:Id)+":"+(a+parseFloat(d))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Xu(g,0,i,v),g},Xu=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+za]=1,s["border"+o+za]=0,s[n.p]=t+"px",De.set(e,s)},tt=[],Td={},dl,jg=function(){return Dn()-Ci>34&&(dl||(dl=requestAnimationFrame(wr)))},Na=function(){(!Xn||!Xn.isPressed||Xn.startX>vt.clientWidth)&&(Qe.cache++,Xn?dl||(dl=requestAnimationFrame(wr)):wr(),Ci||Os("scrollStart"),Ci=Dn())},_d=function(){h0=nt.innerWidth,u0=nt.innerHeight},sl=function(e){Qe.cache++,(e===!0||!Ln&&!c0&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Sd||h0!==nt.innerWidth||Math.abs(nt.innerHeight-u0)>nt.innerHeight*.25))&&Ju.restart(!0)},Fs={},a1=[],v0=function r(){return pn(je,"scrollEnd",r)||Is(!0)},Os=function(e){return Fs[e]&&Fs[e].map(function(t){return t()})||a1},fi=[],y0=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},S0=function(){Qe.cache++,Qe.forEach(function(e){return Nn(e)&&(e.rec=e())})},Nd=function(e,t){var n;for(qn=0;qn<tt.length;qn++)n=tt[qn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ns=!0,t&&y0(t),t||Os("revert")},M0=function(e,t){Qe.cache++,(t||!Yn)&&Qe.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(Cd=e,nt.history.scrollRestoration!==e&&(nt.history.scrollRestoration=e))},Yn,Ns=0,e0,o1=function(){if(e0!==Ns){var e=e0=Ns;requestAnimationFrame(function(){return e===Ns&&Is(!0)})}},b0=function(){vt.appendChild(Oa),Rd=!Xn&&Oa.offsetHeight||nt.innerHeight,vt.removeChild(Oa)},t0=function(e){return fl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Is=function(e,t){if(pi=yt.documentElement,vt=yt.body,Ad=[nt,yt,pi,vt],Ci&&!e&&!ns){mn(je,"scrollEnd",v0);return}b0(),Yn=je.isRefreshing=!0,ns||S0();var n=Os("refreshInit");l0&&je.sort(),t||Nd(),Qe.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),ns=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),bd=1,t0(!0),tt.forEach(function(i){var s=tr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),t0(!1),bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),M0(Cd,1),Ju.pause(),Ns++,Yn=2,wr(2),tt.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=je.isRefreshing=!1,Os("refresh")},wd=0,qu=1,hl,wr=function(e){if(e===2||!Yn&&!ns){je.isUpdating=!0,hl&&hl.update(0);var t=tt.length,n=Dn(),i=n-gd>=50,s=t&&tt[0].scroll();if(qu=wd>s?-1:1,Yn||(wd=s),i&&(Ci&&!Qu&&n-Ci>200&&(Ci=0,Os("scrollEnd")),tl=gd,gd=n),qu<0){for(qn=t;qn-- >0;)tt[qn]&&tt[qn].update(0,i);qu=1}else for(qn=0;qn<t;qn++)tt[qn]&&tt[qn].update(0,i);je.isUpdating=!1}dl=0},Ed=[g0,_0,Id,Pd,Ei+ul,Ei+ol,Ei+cl,Ei+ll,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yu=Ed.concat([Ls,Ds,"boxSizing","max"+za,"max"+Ld,"position",Ei,tn,tn+cl,tn+ol,tn+ul,tn+ll]),l1=function(e,t,n){Ba(n);var i=e._gsap;if(i.spacerIsNative)Ba(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ed.length,a=t.style,o=e.style,l;s--;)l=Ed[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Id]=o[Pd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ls]=$u(e,In)+cn,a[Ds]=$u(e,en)+cn,a[tn]=o[Ei]=o[_0]=o[g0]="0",Ba(i),o[Ls]=o["max"+za]=n[Ls],o[Ds]=o["max"+Ld]=n[Ds],o[tn]=n[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},c1=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(c1,"-$1").toLowerCase())}},Vu=function(e){for(var t=Yu.length,n=e.style,i=[],s=0;s<t;s++)i.push(Yu[s],n[Yu[s]]);return i.t=e,i},u1=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Zu={left:0,top:0},n0=function(e,t,n,i,s,a,o,l,c,u,f,d,h,g){Nn(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Wu("0"+e.substr(3),n):0));var x=h?h.time():0,p,m,v;if(h&&h.seek(0),isNaN(e)||(e=+e),rl(e))h&&(e=De.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Xu(o,n,i,!0);else{Nn(t)&&(t=t(l));var T=(e||"0").split(" "),y,S,w,_;v=Wn(t,l)||vt,y=Tr(v)||{},(!y||!y.left&&!y.top)&&Ai(v).display==="none"&&(_=v.style.display,v.style.display="block",y=Tr(v),_?v.style.display=_:v.style.removeProperty("display")),S=Wu(T[0],y[i.d]),w=Wu(T[1]||"0",n),e=y[i.p]-c[i.p]-u+S+s-w,o&&Xu(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var M=e+n,I=a._isStart;p="scroll"+i.d2,Xu(a,M,i,I&&M>20||!I&&(f?Math.max(vt[p],pi[p]):a.parentNode[p])<=M+1),f&&(c=Tr(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+cn))}return h&&v&&(p=Tr(v),h.seek(d),m=Tr(v),h._caScrollDist=p[i.p]-m[i.p],e=e/h._caScrollDist*d),h&&h.seek(x),h?e:Math.round(e)},h1=/(webkit|moz|length|cssText|inset)/i,i0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=Ai(e);for(a in o)!+a&&!h1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},T0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Gu=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},r0=function(e,t){var n=Mr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,g={};c=c||n();var x=T0(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return x(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){Qe.cache++,a.tween&&wr()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=De.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",n.wheelHandler),je.isTouch&&mn(e,"touchmove",n.wheelHandler),s},je=(function(){function r(t,n){Ua||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Md(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nl){this.update=this.refresh=this.kill=er;return}n=Kg(di(n)||rl(n)||n.nodeType?{trigger:n}:n,zu);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,v=s.onSnapComplete,T=s.once,y=s.snap,S=s.pinReparent,w=s.pinSpacer,_=s.containerAnimation,M=s.fastScrollEnd,I=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:en,D=!f&&f!==0,L=Wn(n.scroller||nt),B=De.core.getCache(L),P=Us(L),z=("pinType"in n?n.pinType:br(L,"pinType")||P&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=D&&n.toggleActions.split(" "),X="markers"in n?n.markers:zu.markers,V=P?0:parseFloat(Ai(L)["border"+A.p2+za])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},xe=t1(L,P,A),Be=n1(L,P),Z=0,oe=0,pe=0,ye=Mr(L,A),he,Ne,st,Pe,Ge,Ie,Re,ct,ut,$,et,Ft,gt,$e,Pt,Ot,O,Se,Le,Te,se,He,we,ze,C,b,k,ae,ie,le,ue,G,j,de,N,ee,K,me,fe;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=L,R.scroll=_?_.time.bind(_):ye,Pe=ye(),ns&&ye.rec==null&&(ye.rec=Pe),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(l0=1,n.refreshPriority===-9999&&(hl=R)),B.tweenScroll=B.tweenScroll||{top:r0(L,en),left:r0(L,In)},R.tweenTo=he=B.tweenScroll[A.p],R.scrubDuration=function(te){j=rl(te)&&te,j?G?G.duration(te):G=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return m&&m(R)}}):(G&&G.progress(1).kill(),G=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),le=0,l||(l=i.vars.id)),y&&((!Ps(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in vt.style&&De.set(P?[vt,pi]:L,{scrollBehavior:"auto"}),Qe.forEach(function(te){return Nn(te)&&te.target===(P?yt.scrollingElement||pi:L)&&(te.smooth=!1)}),st=Nn(y.snapTo)?y.snapTo:y.snapTo==="labels"?r1(i):y.snapTo==="labelsDirectional"?s1(i):y.directional!==!1?function(te,ve){return Dd(y.snapTo)(te,Dn()-oe<500?0:ve.direction)}:De.utils.snap(y.snapTo),de=y.duration||{min:.1,max:2},de=Ps(de)?al(de.min,de.max):al(de,de),N=De.delayedCall(y.delay||j/2||.1,function(){var te=ye(),ve=Dn()-oe<500,ne=he.tween;if((ve||Math.abs(R.getVelocity())<10)&&!ne&&!Qu&&Z!==te){var Ae=(te-Ie)/$e,it=i&&!D?i.totalProgress():Ae,Ye=ve?0:(it-ue)/(Dn()-tl)*1e3||0,It=De.utils.clamp(-Ae,1-Ae,Da(Ye/2)*Ye/.185),$t=Ae+(y.inertia===!1?0:It),Lt,bt,_t=y,nn=_t.onStart,Tt=_t.onInterrupt,Sn=_t.onComplete;if(Lt=st($t,R),rl(Lt)||(Lt=$t),bt=Math.max(0,Math.round(Ie+Lt*$e)),te<=Re&&te>=Ie&&bt!==te){if(ne&&!ne._initted&&ne.data<=Da(bt-te))return;y.inertia===!1&&(It=Lt-Ae),he(bt,{duration:de(Da(Math.max(Da($t-it),Da(Lt-it))*.185/Ye/.05||0)),ease:y.ease||"power3",data:Da(bt-te),onInterrupt:function(){return N.restart(!0)&&Tt&&La(R,Tt)},onComplete:function(){R.update(),Z=ye(),i&&!D&&(G?G.resetTo("totalProgress",Lt,i._tTime/i._tDur):i.progress(Lt)),le=ue=i&&!D?i.totalProgress():R.progress,v&&v(R),Sn&&La(R,Sn)}},te,It*$e,bt-te-It*$e),nn&&La(R,nn,he.tween)}}else R.isActive&&Z!==te&&N.restart(!0)}).pause()),l&&(Td[l]=R),d=R.trigger=Wn(d||h!==!0&&h),fe=d&&d._gsap&&d._gsap.stRevert,fe&&(fe=fe(R)),h=h===!0?d:Wn(h),di(o)&&(o={targets:d,className:o}),h&&(g===!1||g===Ei||(g=!g&&h.parentNode&&h.parentNode.style&&Ai(h.parentNode).display==="flex"?!1:tn),R.pin=h,Ne=De.core.getCache(h),Ne.spacer?Pt=Ne.pinState:(w&&(w=Wn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ne.spacerIsNative=!!w,w&&(Ne.spacerState=Vu(w))),Ne.spacer=Se=w||yt.createElement("div"),Se.classList.add("pin-spacer"),l&&Se.classList.add("pin-spacer-"+l),Ne.pinState=Pt=Vu(h)),n.force3D!==!1&&De.set(h,{force3D:!0}),R.spacer=Se=Ne.spacer,ie=Ai(h),ze=ie[g+A.os2],Te=De.getProperty(h),se=De.quickSetter(h,A.a,cn),xd(h,Se,ie),O=Vu(h)),X){Ft=Ps(X)?Kg(X,Qg):Qg,$=ku("scroller-start",l,L,A,Ft,0),et=ku("scroller-end",l,L,A,Ft,0,$),Le=$["offset"+A.op.d2];var ge=Wn(br(L,"content")||L);ct=this.markerStart=ku("start",l,ge,A,Ft,Le,0,_),ut=this.markerEnd=ku("end",l,ge,A,Ft,Le,0,_),_&&(me=De.quickSetter([ct,ut],A.a,cn)),!z&&!(zi.length&&br(L,"fixedMarkers")===!0)&&(i1(P?vt:L),De.set([$,et],{force3D:!0}),b=De.quickSetter($,A.a,cn),ae=De.quickSetter(et,A.a,cn))}if(_){var ce=_.vars.onUpdate,_e=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){R.update(0,0,1),ce&&ce.apply(_,_e||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(te,ve){if(!ve)return R.kill(!0);var ne=te!==!1||!R.enabled,Ae=Ln;ne!==R.isReverted&&(ne&&(ee=Math.max(ye(),R.scroll.rec||0),pe=R.progress,K=i&&i.progress()),ct&&[ct,ut,$,et].forEach(function(it){return it.style.display=ne?"none":"block"}),ne&&(Ln=R,R.update(ne)),h&&(!S||!R.isActive)&&(ne?l1(h,Se,Pt):xd(h,Se,Ai(h),C)),ne||R.update(ne),Ln=Ae,R.isReverted=ne)},R.refresh=function(te,ve,ne,Ae){if(!((Ln||!R.enabled)&&!ve)){if(h&&te&&Ci){mn(r,"scrollEnd",v0);return}!Yn&&Q&&Q(R),Ln=R,he.tween&&!ne&&(he.tween.kill(),he.tween=0),G&&G.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(H){return H.vars.immediateRender&&H.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var it=xe(),Ye=Be(),It=_?_.duration():tr(L,A),$t=$e<=.01||!$e,Lt=0,bt=Ae||0,_t=Ps(ne)?ne.end:n.end,nn=n.endTrigger||d,Tt=Ps(ne)?ne.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),Sn=R.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,R),ti=d&&Math.max(0,tt.indexOf(R))||0,Gt=ti,Kt,rn,ni,Bs,sn,Ht,gi,Va,pl,Ar,E,U,J;for(X&&Ps(ne)&&(U=De.getProperty($,A.p),J=De.getProperty(et,A.p));Gt-- >0;)Ht=tt[Gt],Ht.end||Ht.refresh(0,1)||(Ln=R),gi=Ht.pin,gi&&(gi===d||gi===h||gi===Sn)&&!Ht.isReverted&&(Ar||(Ar=[]),Ar.unshift(Ht),Ht.revert(!0,!0)),Ht!==tt[Gt]&&(ti--,Gt--);for(Nn(Tt)&&(Tt=Tt(R)),Tt=Yg(Tt,"start",R),Ie=n0(Tt,d,it,A,ye(),ct,$,R,Ye,V,z,It,_,R._startClamp&&"_startClamp")||(h?-.001:0),Nn(_t)&&(_t=_t(R)),di(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(di(Tt)?Tt.split(" ")[0]:"")+_t:(Lt=Wu(_t.substr(2),it),_t=di(Tt)?Tt:(_?De.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Ie):Ie)+Lt,nn=d)),_t=Yg(_t,"end",R),Re=Math.max(Ie,n0(_t||(nn?"100% 0":It),nn,it,A,ye()+Lt,ut,et,R,Ye,V,z,It,_,R._endClamp&&"_endClamp"))||-.001,Lt=0,Gt=ti;Gt--;)Ht=tt[Gt]||{},gi=Ht.pin,gi&&Ht.start-Ht._pinPush<=Ie&&!_&&Ht.end>0&&(Kt=Ht.end-(R._startClamp?Math.max(0,Ht.start):Ht.start),(gi===d&&Ht.start-Ht._pinPush<Ie||gi===Sn)&&isNaN(Tt)&&(Lt+=Kt*(1-Ht.progress)),gi===h&&(bt+=Kt));if(Ie+=Lt,Re+=Lt,R._startClamp&&(R._startClamp+=Lt),R._endClamp&&!Yn&&(R._endClamp=Re||-.001,Re=Math.min(Re,tr(L,A))),$e=Re-Ie||(Ie-=.01)&&.001,$t&&(pe=De.utils.clamp(0,1,De.utils.normalize(Ie,Re,ee))),R._pinPush=bt,ct&&Lt&&(Kt={},Kt[A.a]="+="+Lt,Sn&&(Kt[A.p]="-="+ye()),De.set([ct,ut],Kt)),h&&!(bd&&R.end>=tr(L,A)))Kt=Ai(h),Bs=A===en,ni=ye(),He=parseFloat(Te(A.a))+bt,!It&&Re>1&&(E=(P?yt.scrollingElement||pi:L).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},P&&Ai(vt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),xd(h,Se,Kt),O=Vu(h),rn=Tr(h,!0),Va=z&&Mr(L,Bs?In:en)(),g?(C=[g+A.os2,$e+bt+cn],C.t=Se,Gt=g===tn?$u(h,A)+$e+bt:0,Gt&&(C.push(A.d,Gt+cn),Se.style.flexBasis!=="auto"&&(Se.style.flexBasis=Gt+cn)),Ba(C),Sn&&tt.forEach(function(H){H.pin===Sn&&H.vars.pinSpacing!==!1&&(H._subPinOffset=!0)}),z&&ye(ee)):(Gt=$u(h,A),Gt&&Se.style.flexBasis!=="auto"&&(Se.style.flexBasis=Gt+cn)),z&&(sn={top:rn.top+(Bs?ni-Ie:Va)+cn,left:rn.left+(Bs?Va:ni-Ie)+cn,boxSizing:"border-box",position:"fixed"},sn[Ls]=sn["max"+za]=Math.ceil(rn.width)+cn,sn[Ds]=sn["max"+Ld]=Math.ceil(rn.height)+cn,sn[Ei]=sn[Ei+cl]=sn[Ei+ol]=sn[Ei+ul]=sn[Ei+ll]="0",sn[tn]=Kt[tn],sn[tn+cl]=Kt[tn+cl],sn[tn+ol]=Kt[tn+ol],sn[tn+ul]=Kt[tn+ul],sn[tn+ll]=Kt[tn+ll],Ot=u1(Pt,sn,S),Yn&&ye(0)),i?(pl=i._initted,pd(1),i.render(i.duration(),!0,!0),we=Te(A.a)-He+$e+bt,k=Math.abs($e-we)>1,z&&k&&Ot.splice(Ot.length-2,2),i.render(0,!0,!0),pl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pd(0)):we=$e,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(d&&ye()&&!_)for(rn=d.parentNode;rn&&rn!==vt;)rn._pinOffset&&(Ie-=rn._pinOffset,Re-=rn._pinOffset),rn=rn.parentNode;Ar&&Ar.forEach(function(H){return H.revert(!1,!0)}),R.start=Ie,R.end=Re,Pe=Ge=Yn?ee:ye(),!_&&!Yn&&!ns&&(Pe<ee&&ye(ee),R.scroll.rec=0),R.revert(!1,!0),oe=Dn(),N&&(Z=-1,N.restart(!0)),Ln=0,i&&D&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),($t||pe!==R.progress||_||x||i&&!i._initted)&&(i&&!D&&(i._initted||pe||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Ie<-.001&&!pe?De.utils.normalize(Ie,Re,0):pe,!0),R.progress=$t||(Pe-Ie)/$e===pe?0:pe),h&&g&&(Se._pinOffset=Math.round(R.progress*we)),G&&G.invalidate(),isNaN(U)||(U-=De.getProperty($,A.p),J-=De.getProperty(et,A.p),Gu($,A,U),Gu(ct,A,U-(Ae||0)),Gu(et,A,J),Gu(ut,A,J-(Ae||0))),$t&&!Yn&&R.update(),u&&!Yn&&!gt&&(gt=!0,u(R),gt=!1)}},R.getVelocity=function(){return(ye()-Ge)/(Dn()-tl)*1e3||0},R.endAnimation=function(){el(R.callbackAnimation),i&&(G?G.progress(1):i.paused()?D||el(i,R.direction<0,1):el(i,i.reversed()))},R.labelToScroll=function(te){return i&&i.labels&&(Ie||R.refresh()||Ie)+i.labels[te]/i.duration()*$e||0},R.getTrailing=function(te){var ve=tt.indexOf(R),ne=R.direction>0?tt.slice(0,ve).reverse():tt.slice(ve+1);return(di(te)?ne.filter(function(Ae){return Ae.vars.preventOverlaps===te}):ne).filter(function(Ae){return R.direction>0?Ae.end<=Ie:Ae.start>=Re})},R.update=function(te,ve,ne){if(!(_&&!ne&&!te)){var Ae=Yn===!0?ee:R.scroll(),it=te?0:(Ae-Ie)/$e,Ye=it<0?0:it>1?1:it||0,It=R.progress,$t,Lt,bt,_t,nn,Tt,Sn,ti;if(ve&&(Ge=Pe,Pe=_?ye():Ae,y&&(ue=le,le=i&&!D?i.totalProgress():Ye)),p&&h&&!Ln&&!Uu&&Ci&&(!Ye&&Ie<Ae+(Ae-Ge)/(Dn()-tl)*p?Ye=1e-4:Ye===1&&Re>Ae+(Ae-Ge)/(Dn()-tl)*p&&(Ye=.9999)),Ye!==It&&R.enabled){if($t=R.isActive=!!Ye&&Ye<1,Lt=!!It&&It<1,Tt=$t!==Lt,nn=Tt||!!Ye!=!!It,R.direction=Ye>It?1:-1,R.progress=Ye,nn&&!Ln&&(bt=Ye&&!It?0:Ye===1?1:It===1?2:3,D&&(_t=!Tt&&F[bt+1]!=="none"&&F[bt+1]||F[bt],ti=i&&(_t==="complete"||_t==="reset"||_t in i))),I&&(Tt||ti)&&(ti||f||!i)&&(Nn(I)?I(R):R.getTrailing(I).forEach(function(ni){return ni.endAnimation()})),D||(G&&!Ln&&!Uu?(G._dp._time-G._start!==G._time&&G.render(G._dp._time-G._start),G.resetTo?G.resetTo("totalProgress",Ye,i._tTime/i._tDur):(G.vars.totalProgress=Ye,G.invalidate().restart())):i&&i.totalProgress(Ye,!!(Ln&&(oe||te)))),h){if(te&&g&&(Se.style[g+A.os2]=ze),!z)se(il(He+we*Ye));else if(nn){if(Sn=!te&&Ye>It&&Re+1>Ae&&Ae+1>=tr(L,A),S)if(!te&&($t||Sn)){var Gt=Tr(h,!0),Kt=Ae-Ie;i0(h,vt,Gt.top+(A===en?Kt:0)+cn,Gt.left+(A===en?0:Kt)+cn)}else i0(h,Se);Ba($t||Sn?Ot:O),k&&Ye<1&&$t||se(He+(Ye===1&&!Sn?we:0))}}y&&!he.tween&&!Ln&&!Uu&&N.restart(!0),o&&(Tt||T&&Ye&&(Ye<1||!md))&&fl(o.targets).forEach(function(ni){return ni.classList[$t||T?"add":"remove"](o.className)}),a&&!D&&!te&&a(R),nn&&!Ln?(D&&(ti&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),a&&a(R)),(Tt||!md)&&(c&&Tt&&La(R,c),W[bt]&&La(R,W[bt]),T&&(Ye===1?R.kill(!1,1):W[bt]=0),Tt||(bt=Ye===1?1:3,W[bt]&&La(R,W[bt]))),M&&!$t&&Math.abs(R.getVelocity())>(rl(M)?M:2500)&&(el(R.callbackAnimation),G?G.progress(1):el(i,_t==="reverse"?1:!Ye,1))):D&&a&&!Ln&&a(R)}if(ae){var rn=_?Ae/_.duration()*(_._caScrollDist||0):Ae;b(rn+($._isFlipped?1:0)),ae(rn)}me&&me(-Ae/_.duration()*(_._caScrollDist||0))}},R.enable=function(te,ve){R.enabled||(R.enabled=!0,mn(L,"resize",sl),P||mn(L,"scroll",Na),Q&&mn(r,"refreshInit",Q),te!==!1&&(R.progress=pe=0,Pe=Ge=Z=ye()),ve!==!1&&R.refresh())},R.getTween=function(te){return te&&he?he.tween:G},R.setPositions=function(te,ve,ne,Ae){if(_){var it=_.scrollTrigger,Ye=_.duration(),It=it.end-it.start;te=it.start+It*te/Ye,ve=it.start+It*ve/Ye}R.refresh(!1,!1,{start:Zg(te,ne&&!!R._startClamp),end:Zg(ve,ne&&!!R._endClamp)},Ae),R.update()},R.adjustPinSpacing=function(te){if(C&&te){var ve=C.indexOf(A.d)+1;C[ve]=parseFloat(C[ve])+te+cn,C[1]=parseFloat(C[1])+te+cn,Ba(C)}},R.disable=function(te,ve){if(te!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,ve||G&&G.pause(),ee=0,Ne&&(Ne.uncache=1),Q&&pn(r,"refreshInit",Q),N&&(N.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!P)){for(var ne=tt.length;ne--;)if(tt[ne].scroller===L&&tt[ne]!==R)return;pn(L,"resize",sl),P||pn(L,"scroll",Na)}},R.kill=function(te,ve){R.disable(te,ve),G&&!ve&&G.kill(),l&&delete Td[l];var ne=tt.indexOf(R);ne>=0&&tt.splice(ne,1),ne===qn&&qu>0&&qn--,ne=0,tt.forEach(function(Ae){return Ae.scroller===R.scroller&&(ne=1)}),ne||Yn||ns||(R.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),ve||i.kill()),ct&&[ct,ut,$,et].forEach(function(Ae){return Ae.parentNode&&Ae.parentNode.removeChild(Ae)}),hl===R&&(hl=0),h&&(Ne&&(Ne.uncache=1),ne=0,tt.forEach(function(Ae){return Ae.pin===h&&ne++}),ne||(Ne.spacer=0)),n.onKill&&n.onKill(R)},tt.push(R),R.enable(!1,!1),fe&&fe(R),i&&i.add&&!$e){var re=R.update;R.update=function(){R.update=re,Qe.cache++,Ie||Re||R.refresh()},De.delayedCall(.01,R.update),$e=.01,Ie=Re=0}else R.refresh();h&&o1()},r.register=function(n){return Ua||(De=n||d0(),f0()&&window.document&&r.enable(),Ua=nl),Ua},r.defaults=function(n){if(n)for(var i in n)zu[i]=n[i];return zu},r.disable=function(n,i){nl=0,tt.forEach(function(a){return a[i?"kill":"disable"](n)}),pn(nt,"wheel",Na),pn(yt,"scroll",Na),clearInterval(Nu),pn(yt,"touchcancel",er),pn(vt,"touchstart",er),Ou(pn,yt,"pointerdown,touchstart,mousedown",Jg),Ou(pn,yt,"pointerup,touchend,mouseup",$g),Ju.kill(),Fu(pn);for(var s=0;s<Qe.length;s+=3)Bu(pn,Qe[s],Qe[s+1]),Bu(pn,Qe[s],Qe[s+2])},r.enable=function(){if(nt=window,yt=document,pi=yt.documentElement,vt=yt.body,De){if(fl=De.utils.toArray,al=De.utils.clamp,Md=De.core.context||er,pd=De.core.suppressOverwrites||er,Cd=nt.history.scrollRestoration||"auto",wd=nt.pageYOffset||0,De.core.globals("ScrollTrigger",r),vt){nl=1,Oa=document.createElement("div"),Oa.style.height="100vh",Oa.style.position="absolute",b0(),e1(),qt.register(De),r.isTouch=qt.isTouch,ts=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=qt.isTouch===1,mn(nt,"wheel",Na),Ad=[nt,yt,pi,vt],De.matchMedia?(r.matchMedia=function(u){var f=De.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},De.addEventListener("matchMediaInit",function(){S0(),Nd()}),De.addEventListener("matchMediaRevert",function(){return y0()}),De.addEventListener("matchMedia",function(){Is(0,1),Os("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return _d(),_d})):console.warn("Requires GSAP 3.11.0 or later"),_d(),mn(yt,"scroll",Na);var n=vt.hasAttribute("style"),i=vt.style,s=i.borderTopStyle,a=De.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Tr(vt),en.m=Math.round(o.top+en.sc())||0,In.m=Math.round(o.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Nu=setInterval(jg,250),De.delayedCall(.5,function(){return Uu=0}),mn(yt,"touchcancel",er),mn(vt,"touchstart",er),Ou(mn,yt,"pointerdown,touchstart,mousedown",Jg),Ou(mn,yt,"pointerup,touchend,mouseup",$g),yd=De.utils.checkPrefix("transform"),Yu.push(yd),Ua=Dn(),Ju=De.delayedCall(.2,Is).pause(),Fa=[yt,"visibilitychange",function(){var u=nt.innerWidth,f=nt.innerHeight;yt.hidden?(Xg=u,qg=f):(Xg!==u||qg!==f)&&sl()},yt,"DOMContentLoaded",Is,nt,"load",Is,nt,"resize",sl],Fu(mn),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<Qe.length;l+=3)Bu(pn,Qe[l],Qe[l+1]),Bu(pn,Qe[l],Qe[l+2])}else if(yt){var c=function u(){r.enable(),yt.removeEventListener("DOMContentLoaded",u)};yt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(md=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Nu)||(Nu=i)&&setInterval(jg,i),"ignoreMobileResize"in n&&(Sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fu(pn)||Fu(mn,n.autoRefreshEvents||"none"),c0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Wn(n),a=Qe.indexOf(s),o=Us(s);~a&&Qe.splice(a,o?6:2),i&&(o?zi.unshift(nt,i,vt,i,pi,i):zi.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(di(n)?Wn(n):n).getBoundingClientRect(),o=a[s?Ls:Ds]*i||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},r.positionInViewport=function(n,i,s){di(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),o=a[s?Ls:Ds],l=i==null?o/2:i in Ku?Ku[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fs.killAll||[];Fs={},i.forEach(function(s){return s()})}},r})();je.version="3.15.1";je.saveStyles=function(r){return r?fl(r).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),Md())}}):fi};je.revert=function(r,e){return Nd(!r,e)};je.create=function(r,e){return new je(r,e)};je.refresh=function(r){return r?sl(!0):(Ua||je.register())&&Is(!0)};je.update=function(r){return++Qe.cache&&wr(r===!0?2:0)};je.clearScrollMemory=M0;je.maxScroll=function(r,e){return tr(r,e?In:en)};je.getScrollFunc=function(r,e){return Mr(Wn(r),e?In:en)};je.getById=function(r){return Td[r]};je.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!Ci};je.snapDirectional=Dd;je.addEventListener=function(r,e){var t=Fs[r]||(Fs[r]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(r,e){var t=Fs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=De.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Nn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Nn(s)&&(s=s(),mn(je,"refresh",function(){return s=e.batchMax()})),fl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(je.create(c))}),t};var s0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(qt.isTouch?" pinch-zoom":""):"none",e===pi&&r(vt,t)},Hu={auto:1,scroll:1},f1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=Dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hu[(l=Ai(s)).overflowY]||Hu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Us(s)&&(Hu[(l=Ai(s)).overflowY]||Hu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},w0=function(e,t,n,i){return qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&f1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(yt,qt.eventTypes[0],o0,!1,!0)},onDisable:function(){return pn(yt,qt.eventTypes[0],o0,!0)}})},d1=/(input|label|select|textarea)/i,a0,o0=function(e){var t=d1.test(e.target.tagName);(t||a0)&&(e._gsapAllow=!0,a0=t)},p1=function(e){Ps(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Wn(e.target)||pi,u=De.core.globals().ScrollSmoother,f=u&&u.get(),d=ts&&(e.content&&Wn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Mr(c,en),g=Mr(c,In),x=1,p=(qt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,m=0,v=Nn(i)?function(){return i(o)}:function(){return i||2.8},T,y,S=w0(c,e.type,!0,s),w=function(){return y=!1},_=er,M=er,I=function(){l=tr(c,en),M=al(ts?1:0,l),n&&(_=al(0,tr(c,In))),T=Ns},A=function(){d._gsap.y=il(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var X=il(o.deltaY/2),V=M(h.v-X);if(d&&V!==h.v+h.offset){h.offset=V-h.v;var R=il((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",h.cacheID=Qe.cache,wr()}return!0}h.offset&&A(),y=!0},L,B,P,z,W=function(){I(),L.isActive()&&L.vars.scrollY>l&&(h()>l?L.progress(1)&&h(l):L.resetTo("scrollY",l))};return d&&De.set(d,{y:"+=0"}),e.ignoreCheck=function(F){return ts&&F.type==="touchmove"&&D(F)||x>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=x;x=il((nt.visualViewport&&nt.visualViewport.scale||1)/p),L.pause(),F!==x&&vd(c,x>1.01?!0:n?!1:"x"),B=g(),P=h(),I(),T=Ns},e.onRelease=e.onGestureStart=function(F,X){if(h.offset&&A(),!X)z.restart(!0);else{Qe.cache++;var V=v(),R,Q;n&&(R=g(),Q=R+V*.05*-F.velocityX/.227,V*=s0(g,R,Q,tr(c,In)),L.vars.scrollX=_(Q)),R=h(),Q=R+V*.05*-F.velocityY/.227,V*=s0(h,R,Q,tr(c,en)),L.vars.scrollY=M(Q),L.invalidate().duration(V).play(.01),(ts&&L.vars.scrollY>=l||R>=l-1)&&De.to({},{onUpdate:W,duration:V})}a&&a(F)},e.onWheel=function(){L._ts&&L.pause(),Dn()-m>1e3&&(T=0,m=Dn())},e.onChange=function(F,X,V,R,Q){if(Ns!==T&&I(),X&&n&&g(_(R[2]===X?B+(F.startX-F.x):g()+X-R[1])),V){h.offset&&A();var xe=Q[2]===V,Be=xe?P+F.startY-F.y:h()+V-Q[1],Z=M(Be);xe&&Be!==Z&&(P+=Z-Be),h(Z)}(V||X)&&wr()},e.onEnable=function(){vd(c,n?!1:"x"),je.addEventListener("refresh",W),mn(nt,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){vd(c,!0),pn(nt,"resize",W),je.removeEventListener("refresh",W),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new qt(e),o.iOS=ts,ts&&!h()&&h(1),ts&&De.ticker.add(er),z=o._dc,L=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:T0(h,h(),function(){return L.pause()})},onUpdate:wr,onComplete:z.vars.onComplete}),o};je.sort=function(r){if(Nn(r))return tt.sort(r);var e=nt.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(r){return new qt(r)};je.normalizeScroll=function(r){if(typeof r>"u")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var e=r instanceof qt?r:p1(r);return Xn&&Xn.target===e.target&&Xn.kill(),Us(e.target)&&(Xn=e),e};je.core={_getVelocityProp:Du,_inputObserver:w0,_scrollers:Qe,_proxies:zi,bridge:{ss:function(){Ci||Os("scrollStart"),Ci=Dn()},ref:function(){return Ln}}};d0()&&De.registerPlugin(je);function m1(r,e){let t=r.createBuffer(1,Math.ceil(r.sampleRate*e),r.sampleRate),n=t.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return t}function g1(r,e,t){let n=Math.ceil(r.sampleRate*e),i=r.createBuffer(2,n,r.sampleRate);for(let s=0;s<2;s++){let a=i.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,t)}return i}function E0(r,e,t=3.4){let n=r.currentTime+.05,i=D=>n+D*t,s=1e-4,a=r.createDynamicsCompressor();a.threshold.value=-14,a.knee.value=10,a.ratio.value=2.5,a.attack.value=.006,a.release.value=.35;let o=r.createDynamicsCompressor();o.threshold.value=-2,o.knee.value=0,o.ratio.value=20,o.attack.value=.001,o.release.value=.12;let l=r.createGain();l.gain.value=.75,a.connect(l),l.connect(o),o.connect(e);let c=r.createConvolver();c.buffer=g1(r,3.2,2.3);let u=r.createGain();u.gain.value=.45,c.connect(u),u.connect(a);let f=(D,L=1,B=.3)=>{if(L){let P=r.createGain();P.gain.value=L,D.connect(P),P.connect(a)}if(B){let P=r.createGain();P.gain.value=B,D.connect(P),P.connect(c)}},d=m1(r,2.5),h=(D,L,B=0)=>{let P=r.createOscillator();return P.type=D,P.frequency.value=L,P.detune.value=B,P},g=[],x=r.createGain();x.gain.value=1,f(x,1,.35);let p=r.createGain();p.gain.setValueAtTime(.006,n),p.gain.exponentialRampToValueAtTime(.13,i(.92));let m=r.createBiquadFilter();m.type="lowpass",m.Q.value=.8,m.frequency.setValueAtTime(110,n),m.frequency.exponentialRampToValueAtTime(1400,i(1));for(let[D,L]of[[73.42,-9],[73.42,9],[110,4]]){let B=h("sawtooth",D,L),P=r.createGain();P.gain.value=.33,B.connect(P),P.connect(m),B.start(n),g.push(B)}let v=h("sine",36.71),T=r.createGain();T.gain.value=.9,v.connect(T),T.connect(p),v.start(n),g.push(v),m.connect(p),p.connect(x);let y=r.createBufferSource();y.buffer=d,y.loop=!0;let S=r.createBiquadFilter();S.type="bandpass",S.Q.value=.9,S.frequency.setValueAtTime(320,n),S.frequency.exponentialRampToValueAtTime(7200,i(1));let w=r.createGain();w.gain.setValueAtTime(.002,n),w.gain.exponentialRampToValueAtTime(.11,i(1)),y.connect(S),S.connect(w),w.connect(x),y.start(n),g.push(y);let _=h("triangle",146.83);_.frequency.setValueAtTime(146.83,n),_.frequency.exponentialRampToValueAtTime(587.33,i(1));let M=r.createGain();M.gain.setValueAtTime(s,n),M.gain.exponentialRampToValueAtTime(.045,i(.95)),_.connect(M),M.connect(x),_.start(n),g.push(_);let I=[.02,.26,.46,.61,.72,.8,.86,.905,.94,.965,.985];I.forEach((D,L)=>{let B=i(D),P=.22+.33*(L/(I.length-1)),z=h("sine",150);z.frequency.setValueAtTime(150,B),z.frequency.exponentialRampToValueAtTime(44,B+.22);let W=r.createGain();W.gain.setValueAtTime(s,B),W.gain.exponentialRampToValueAtTime(P,B+.006),W.gain.exponentialRampToValueAtTime(s,B+.45),z.connect(W),W.connect(x),z.start(B),z.stop(B+.5)});let A=!1;return{hit(D){if(A)return;A=!0;let L=Math.max(D??r.currentTime+.06,r.currentTime+.03);x.gain.setValueAtTime(1,Math.max(L-.06,r.currentTime)),x.gain.exponentialRampToValueAtTime(s,L-.004);for(let xe of g)xe.stop(L+.1);let B=h("sine",118);B.frequency.setValueAtTime(118,L),B.frequency.exponentialRampToValueAtTime(34,L+.7);let P=r.createGain();P.gain.setValueAtTime(s,L),P.gain.exponentialRampToValueAtTime(1.3,L+.008),P.gain.exponentialRampToValueAtTime(s,L+2.8),B.connect(P),f(P,1,.18),B.start(L),B.stop(L+3);let z=h("triangle",70);z.frequency.setValueAtTime(70,L),z.frequency.exponentialRampToValueAtTime(38,L+.5);let W=r.createGain();W.gain.setValueAtTime(s,L),W.gain.exponentialRampToValueAtTime(.4,L+.006),W.gain.exponentialRampToValueAtTime(s,L+1.6),z.connect(W),f(W,1,.1),z.start(L),z.stop(L+1.7);let F=r.createBufferSource();F.buffer=d;let X=r.createBiquadFilter();X.type="lowpass",X.frequency.setValueAtTime(3600,L),X.frequency.exponentialRampToValueAtTime(900,L+1.6);let V=r.createGain();V.gain.setValueAtTime(s,L),V.gain.exponentialRampToValueAtTime(.6,L+.004),V.gain.exponentialRampToValueAtTime(s,L+1.9),F.connect(X),X.connect(V),f(V,.8,.9),F.start(L),F.stop(L+2.2);let R=r.createGain();R.gain.setValueAtTime(s,L),R.gain.exponentialRampToValueAtTime(1.3,L+.035),R.gain.setValueAtTime(1.3,L+.5),R.gain.exponentialRampToValueAtTime(s,L+3.9);let Q=r.createBiquadFilter();Q.type="lowpass",Q.Q.value=1.2,Q.frequency.setValueAtTime(320,L),Q.frequency.exponentialRampToValueAtTime(2600,L+.08),Q.frequency.exponentialRampToValueAtTime(650,L+2.6),Q.connect(R),f(R,1,.6);for(let[xe,Be]of[[73.42,.11],[110,.09],[146.83,.08],[220,.065],[293.66,.055],[369.99,.045],[440,.04]])for(let Z of[-7,7]){let oe=h("sawtooth",xe,Z),pe=r.createGain();pe.gain.value=Be,oe.connect(pe),pe.connect(Q),oe.start(L),oe.stop(L+4.1)}return[[1174.66,.035],[1760,.028],[2349.32,.02],[2959.96,.012]].forEach(([xe,Be],Z)=>{let oe=h("sine",xe,Z%2?4:-4),pe=r.createGain(),ye=L+.02+Z*.015;pe.gain.setValueAtTime(s,ye),pe.gain.exponentialRampToValueAtTime(Be,ye+.01),pe.gain.exponentialRampToValueAtTime(s,L+3.2),oe.connect(pe),f(pe,.6,1),oe.start(ye),oe.stop(L+3.3)}),L},stop(){let D=r.currentTime;if(l.gain.setValueAtTime(l.gain.value,D),l.gain.linearRampToValueAtTime(0,D+.15),!A){A=!0;for(let L of g)L.stop(D+.2)}}}}mt.registerPlugin(je);var dt=(r,e=document)=>e.querySelector(r),mi=(r,e=document)=>[...e.querySelectorAll(r)],Ut=matchMedia("(prefers-reduced-motion: reduce)").matches,A0=matchMedia("(pointer: coarse)").matches,Ri=(r,e,t)=>Math.min(t,Math.max(e,r)),ka=(r,e,t)=>r+(e-r)*t,nr=(r,e,t,n)=>ka(r,e,1-Math.exp(-t*n)),_1=r=>r*r*(3-2*r),Ud=r=>new Promise(e=>setTimeout(e,r)),Yt={x:innerWidth*.6,y:innerHeight*.35,nx:.2,ny:-.3},Er={y:scrollY,v:0};addEventListener("pointermove",r=>{Yt.x=r.clientX,Yt.y=r.clientY,Yt.nx=r.clientX/innerWidth*2-1,Yt.ny=r.clientY/innerHeight*2-1},{passive:!0});{let r=scrollY,e=performance.now();addEventListener("scroll",()=>{let t=performance.now();Er.v=(scrollY-r)/Math.max(t-e,1)*1e3,Er.y=scrollY,r=scrollY,e=t},{passive:!0})}var x1=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;function v1(){let r=dt("#scene"),e=matchMedia("(max-width: 900px)").matches||A0,t=new au({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),n=Math.min(devicePixelRatio||1,e?1.5:1.25);t.setPixelRatio(n),t.toneMapping=bo,t.toneMappingExposure=1.05,t.setClearColor(264732,1),t.transmissionResolutionScale=e?.6:.85;let i=new hs,s=new En(35,1,.1,60);s.position.set(0,0,9);let a=Math.tan(tf.degToRad(s.fov/2)),o=new ga(t);i.environment=o.fromScene(new cu,.04).texture,i.environmentIntensity=.8,o.dispose();let l={uTime:{value:0},uScroll:{value:0},uAspect:{value:1},uPointer:{value:new Je}},c=new Rt(new Or(1,1),new Si({uniforms:l,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime; uniform float uScroll; uniform float uAspect; uniform vec2 uPointer;
      float glow(vec2 p, vec2 c, float r){ float d=length(p-c); return exp(-d*d/(r*r)); }
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      void main(){
        vec2 p=(vUv-0.5)*vec2(uAspect,1.0); float t=uTime*0.06;
        vec3 col=mix(vec3(0.016,0.039,0.110),vec3(0.035,0.082,0.200),smoothstep(-0.6,0.6,p.y+0.2*sin(t)));
        col+=vec3(0.10,0.28,0.85)*glow(p,vec2(0.25+0.42*sin(t*1.3+uScroll*2.0),0.28*cos(t*1.1)),0.42)*0.55;
        col+=vec3(0.10,0.62,0.95)*glow(p,vec2(-0.55+0.20*cos(t*1.7),-0.22+0.25*sin(t*1.4+uScroll*3.0)),0.36)*0.34;
        col+=vec3(0.42,0.30,0.98)*glow(p,vec2(0.10+0.50*cos(t*0.9+2.0),0.42*sin(t*0.8+1.0+uScroll*2.0)),0.30)*0.30;
        col+=vec3(0.95,0.74,0.36)*glow(p,vec2(-0.20+0.60*sin(t*0.7+4.0),0.30+0.20*cos(t*1.2)),0.16)*0.16;
        col+=vec3(0.50,0.70,1.00)*glow(p,uPointer*vec2(uAspect,1.0)*0.5,0.22)*0.10;
        col+=(hash(gl_FragCoord.xy+fract(uTime))-0.5)*0.012;
        gl_FragColor=vec4(pow(max(col,0.0),vec3(2.2)),1.0);
        #include <colorspace_fragment>
      }`}));c.position.z=-9,c.renderOrder=-10,i.add(c);let u=dt("#hero-name"),f=document.createElement("canvas"),d=new uo(f);d.colorSpace=Fn,d.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());let h=new Xe("#06102a"),g=new Xe("#ffffff"),x=new aa({map:d,alphaTest:.5,alphaToCoverage:!0,toneMapped:!1,color:h.clone()}),p=new Rt(new Or(1,1),x),m=-2.2;p.position.z=m,i.add(p);function v(){let Se=u.getBoundingClientRect();if(Se.width<2)return;let Le=Math.min(devicePixelRatio||1,2),Te=getComputedStyle(u);f.width=Math.ceil(Se.width*Le),f.height=Math.ceil(Se.height*Le);let se=f.getContext("2d");se.setTransform(Le,0,0,Le,0,0),se.clearRect(0,0,Se.width,Se.height),se.font=`${Te.fontWeight} ${Te.fontSize} ${Te.fontFamily}`,"letterSpacing"in se&&(se.letterSpacing=Te.letterSpacing);let He=se.createLinearGradient(0,0,0,Se.height);He.addColorStop(0,"#ffffff"),He.addColorStop(1,"#bcd6ff"),se.fillStyle=He,se.textBaseline="alphabetic";for(let we of mi(".line",u)){let ze=we.getBoundingClientRect(),C=se.measureText(we.textContent),b=C.fontBoundingBoxAscent??C.actualBoundingBoxAscent,k=C.fontBoundingBoxDescent??C.actualBoundingBoxDescent;se.fillText(we.textContent,ze.left-Se.left,ze.top-Se.top+(ze.height-(b+k))/2+b)}d.needsUpdate=!0}let T={uTime:{value:0},uAmp:{value:.2},uFreq:{value:.95},uPointer:{value:new Y(0,0,1)},uBulge:{value:0}},y=new po({color:16777215,metalness:0,roughness:.08,transmission:1,ior:1.45,thickness:2,clearcoat:1,clearcoatRoughness:.06,iridescence:.4,iridescenceIOR:1.3,iridescenceThicknessMinimum:120,iridescenceThicknessMaximum:420,dispersion:3,attenuationColor:new Xe("#d3e8ff"),attenuationDistance:16,envMapIntensity:1.5,specularIntensity:1});y.onBeforeCompile=Se=>{Object.assign(Se.uniforms,T),Se.vertexShader=Se.vertexShader.replace("#include <common>",`#include <common>
        ${x1}
        uniform float uTime; uniform float uAmp; uniform float uFreq; uniform vec3 uPointer; uniform float uBulge;
        vec3 liquid(vec3 p){
          vec3 n=normalize(p);
          float d=snoise(n*uFreq+vec3(0.0,uTime*0.30,uTime*0.19))*0.78+snoise(n*uFreq*1.9+vec3(uTime*0.42,0.0,-uTime*0.26))*0.13;
          float b=pow(max(dot(n,normalize(uPointer)),0.0),5.0)*uBulge;
          return p+n*(d*uAmp+b);
        }`).replace("#include <beginnormal_vertex>",`
        vec3 lqN=normalize(position);
        vec3 lqT=normalize(cross(lqN,abs(lqN.y)<0.99?vec3(0.0,1.0,0.0):vec3(1.0,0.0,0.0)));
        vec3 lqB=cross(lqN,lqT);
        float lqR=length(position);
        vec3 lq0=liquid(position);
        vec3 lq1=liquid(normalize(position+lqT*0.02)*lqR);
        vec3 lq2=liquid(normalize(position+lqB*0.02)*lqR);
        vec3 objectNormal=normalize(cross(lq1-lq0,lq2-lq0));
        #ifdef USE_TANGENT
          vec3 objectTangent=vec3(tangent.xyz);
        #endif`).replace("#include <begin_vertex>","vec3 transformed=lq0;")},y.customProgramCacheKey=()=>"liquid-glass-v1";let S=e?20:40,w=new Rt(new fs(1,S),y);i.add(w);let _=new fs(1,10),M=[0,1,2].map(Se=>{let Le=new Rt(_,y);return Le.userData={r:1.55+Se*.32,sp:.22+Se*.07,ph:Se*2.1,s:.13-Se*.025,tilt:.5+Se*.4},i.add(Le),Le});i.add(new So(9417983,.35));let I=new yo(16777215,2.4);I.position.set(-3,4,5),i.add(I);let A=new Vr(5017087,46,30);A.position.set(4,-2,3),i.add(A);let D=new Vr(15321207,22,30);D.position.set(-2,1,4),i.add(D);let L=e?140:280,B=new Float32Array(L*3);for(let Se=0;Se<L;Se++)B[Se*3]=(Math.random()-.5)*20,B[Se*3+1]=(Math.random()-.5)*13,B[Se*3+2]=-7+Math.random()*9;let P=new yi;P.setAttribute("position",new si(B,3));let z=new lo(P,new oa({color:12575743,size:.035,transparent:!0,opacity:.5,depthWrite:!1,sizeAttenuation:!0}));i.add(z);let W=[["#top",{x:.06,y:.13,s:1,a:.2},{x:.4,y:.33,s:.78,a:.19}],["#about",{x:-.37,y:-.2,s:.62,a:.2},{x:.3,y:-.3,s:.7,a:.2}],["#research",{x:.41,y:.27,s:.5,a:.24},{x:-.3,y:.34,s:.6,a:.22}],["#experience",{x:-.4,y:.04,s:.6,a:.2},{x:.32,y:-.05,s:.62,a:.2}],["#credentials",{x:.4,y:-.22,s:.52,a:.22},{x:-.3,y:.3,s:.6,a:.22}],["#toolkit",{x:-.3,y:.25,s:.5,a:.2},{x:.3,y:.2,s:.6,a:.2}],["#contact",{x:.24,y:.04,s:1.12,a:.2},{x:.12,y:.12,s:1.05,a:.2}]],F=[],X={x:.06,y:.13,s:1,a:.2,intro:Ut?1:0,name:Ut?1:0,bulge:0,rx:0,ry:0,cx:0,cy:0},V=1,R=1,Q=!1;function xe(){V=r.clientWidth,R=r.clientHeight,Q=V/R<.85,t.setSize(V,R,!1),s.aspect=V/R,s.updateProjectionMatrix();let Se=2*(s.position.z-c.position.z)*a;c.scale.set(Se*s.aspect*1.3,Se*1.3,1),l.uAspect.value=s.aspect,F=W.map(([Le,Te,se],He)=>{let we=dt(Le);return{at:He===0?0:we.offsetTop+we.offsetHeight/2-innerHeight/2,...Q||V<900?se:Te}}).sort((Le,Te)=>Le.at-Te.at),v()}function Be(Se){if(Se<=F[0].at)return F[0];for(let Le=0;Le<F.length-1;Le++){let Te=F[Le],se=F[Le+1];if(Se<=se.at){let He=_1(Ri((Se-Te.at)/Math.max(se.at-Te.at,1),0,1));return{x:ka(Te.x,se.x,He),y:ka(Te.y,se.y,He),s:ka(Te.s,se.s,He),a:ka(Te.a,se.a,He)}}}return F[F.length-1]}let Z=new Y,oe=new vi,pe=.46,ye=performance.now(),he=!0,Ne=!1,st=0,Pe=0,Ge=0,Ie=0,Re=null,ct=0,ut=[.024,.034,.05],$=[14,20,30],et=new Uint8Array(4),Ft=()=>{document.documentElement.dataset.quality=String(Ie)};Ft();function gt(){Ie++,Ie===1?(n=Math.max(1,n*.72),t.setPixelRatio(n),t.transmissionResolutionScale=.5,t.setSize(V,R,!1),v()):Ie===2?(w.geometry.dispose(),w.geometry=new fs(1,14),M.forEach(Se=>{Se.visible=!1})):(y.transmission=0,y.transparent=!0,y.opacity=.42,y.dispersion=0,y.needsUpdate=!0,n=1,t.setPixelRatio(1),t.setSize(V,R,!1),v()),Ft()}function $e(Se){if(!he)return;requestAnimationFrame($e);let Le=Math.max(0,(Se-ye)/1e3);ye=Se;let Te=Math.min(Le,.05);st+=Te*(Ut?.15:1),Er.v*=Math.exp(-5*Te);let se=2*s.position.z*a,He=se*s.aspect,we=Be(Er.y),ze=Ut?30:3.2;X.x=nr(X.x,we.x+Yt.nx*.03,ze,Te),X.y=nr(X.y,we.y-Yt.ny*.03,ze,Te),X.s=nr(X.s,we.s,ze,Te),X.a=nr(X.a,we.a+Ri(Math.abs(Er.v)*7e-5,0,.12),4,Te);let C=Math.min(.21*se,.3*He)*X.s*X.intro;w.position.set(X.x*He,X.y*se,0);let b=Math.max(C,1e-4);w.scale.set(b,b,b*pe),X.rx=nr(X.rx,Yt.ny*.22,3,Te),X.ry=nr(X.ry,Yt.nx*.3,3,Te),w.rotation.set(X.rx,X.ry,Math.sin(st*.1)*.25);let k=Yt.nx*He*.5,ae=-Yt.ny*se*.5,ie=Math.hypot(k-w.position.x,ae-w.position.y);X.bulge=nr(X.bulge,ie<C*1.9&&!A0?.2:0,5,Te),Z.set(k-w.position.x,ae-w.position.y,C*1.1).normalize().applyQuaternion(oe.copy(w.quaternion).invert()),Z.z/=pe,Z.normalize(),T.uPointer.value.copy(Z),T.uBulge.value=X.bulge,T.uAmp.value=X.a,T.uTime.value=st,T.uFreq.value=.9+Ri(Er.y/Math.max(document.documentElement.scrollHeight-innerHeight,1),0,1)*.35;for(let ue of M){let G=ue.userData,j=st*G.sp+G.ph;ue.position.set(w.position.x+Math.cos(j)*G.r*C,w.position.y+Math.sin(j*1.3)*G.r*C*.6*Math.cos(G.tilt),Math.sin(j)*G.r*C*.7),ue.scale.setScalar(Math.max(G.s*(C/1.19+.35)*X.intro,1e-4))}let le=u.getBoundingClientRect();if(p.visible=le.bottom>-40&&le.top<R+40,p.visible){let ue=2*(s.position.z-m)*a,G=ue*s.aspect;p.scale.set(le.width/V*G,le.height/R*ue,1),p.position.x=((le.left+le.width/2)/V-.5)*G,p.position.y=-((le.top+le.height/2)/R-.5)*ue,x.color.copy(h).lerp(g,X.name)}if(X.cx=nr(X.cx,Yt.nx*.22,2.5,Te),X.cy=nr(X.cy,-Yt.ny*.16,2.5,Te),s.position.x=Ut?0:X.cx,s.position.y=Ut?0:X.cy,s.lookAt(0,0,0),D.position.set(k*.8,ae*.8,4),z.rotation.y=st*.01,z.position.y=Er.y/Math.max(innerHeight,1)*.35,l.uTime.value=st,l.uScroll.value=Er.y/Math.max(innerHeight,1)*.35,l.uPointer.value.set(Yt.nx,-Yt.ny),t.render(i,s),X.intro>.6&&Ie<3){if(Re)Ot(Se);else if(Se>ct&&(Ge+=Math.min(Le,.25),Pe++,Pe>=30)){let ue=Ge/Pe;Pe=0,Ge=0,ue>ut[Ie]&&Pt(Se)}}}function Pt(Se){let Le=t.getContext();Re={fence:Le.fenceSync(Le.SYNC_GPU_COMMANDS_COMPLETE,0),since:Se,samples:[]},Le.flush()}function Ot(Se){let Le=t.getContext();if(Re.fence){if(Le.getSyncParameter(Re.fence,Le.SYNC_STATUS)!==Le.SIGNALED){Se-Re.since>1e3&&(Le.deleteSync(Re.fence),Re=null,gt());return}Le.deleteSync(Re.fence),Re.fence=null}let Te=performance.now();if(Le.readPixels(0,0,1,1,Le.RGBA,Le.UNSIGNED_BYTE,et),Re.samples.push(performance.now()-Te),Re.samples.length===3){let se=Re.samples.sort((He,we)=>He-we)[1]>$[Ie];Re=null,se?gt():ct=Se+15e3}}xe();let O=0;return addEventListener("resize",()=>{clearTimeout(O),O=setTimeout(xe,120)}),new ResizeObserver(()=>{clearTimeout(O),O=setTimeout(xe,120)}).observe(dt("main")),document.fonts.ready.then(v),document.addEventListener("visibilitychange",()=>{let Se=!document.hidden;Se&&!he&&!Ne?(he=!0,ye=performance.now(),requestAnimationFrame($e)):Se||(he=!1)}),r.addEventListener("webglcontextlost",Se=>{Se.preventDefault(),he=!1,document.documentElement.classList.replace("webgl","no-webgl")}),requestAnimationFrame($e),{firstFrame:()=>new Promise(Se=>requestAnimationFrame(()=>requestAnimationFrame(Se))),hold(){Ne=!0,he=!1},go(){Ne=!1,!he&&!document.hidden&&(he=!0,ye=performance.now(),requestAnimationFrame($e))},intro(){Ut||(mt.to(X,{intro:1,duration:1.9,ease:"elastic.out(1, 0.55)",delay:.1}),mt.to(X,{name:1,duration:1.3,ease:"power2.out",delay:.2}))}}}function y1(){let r=new Set,e=new IntersectionObserver(s=>s.forEach(a=>a.isIntersecting?r.add(a.target):r.delete(a.target)),{rootMargin:"80px"});mi(".glass").forEach(s=>e.observe(s));let t=0,n=()=>{t=0;for(let s of r){let a=s.getBoundingClientRect(),o=Math.max(a.left-Yt.x,0,Yt.x-a.right),l=Math.max(a.top-Yt.y,0,Yt.y-a.bottom);s.style.setProperty("--mx",`${(Yt.x-a.left).toFixed(1)}px`),s.style.setProperty("--my",`${(Yt.y-a.top).toFixed(1)}px`),s.style.setProperty("--rim",Ri(1-Math.hypot(o,l)/150,0,1).toFixed(3))}},i=()=>{t||(t=requestAnimationFrame(n))};addEventListener("pointermove",i,{passive:!0}),addEventListener("scroll",i,{passive:!0})}function S1(){if(Ut)return;let r=170,e=13,t=new Map,n=!1,i=0,s=o=>{let l=Math.min((o-i)/1e3,.032);i=o;let c=!1;for(let[u,f]of t){let d=0;for(let h of["rx","ry","sc"]){let g=h==="sc"?100:1;f.v[h]+=((f.t[h]-f.p[h])*r-f.v[h]*e)*l,f.p[h]+=f.v[h]*l,d+=(Math.abs(f.t[h]-f.p[h])+Math.abs(f.v[h])*.05)*g}u.style.setProperty("--rx",`${f.p.rx.toFixed(3)}deg`),u.style.setProperty("--ry",`${f.p.ry.toFixed(3)}deg`),u.style.setProperty("--sc",f.p.sc.toFixed(4)),d>.02?c=!0:t.delete(u)}c?requestAnimationFrame(s):n=!1},a=(o,l)=>{t.set(o,l),n||(n=!0,i=performance.now(),requestAnimationFrame(s))};mi("[data-spring]").forEach(o=>{let l=o.matches(".card, .tl-item, .fact, .cert"),c=l?4.5:0,u=l?1.014:1.045,f={p:{rx:0,ry:0,sc:1},v:{rx:0,ry:0,sc:0},t:{rx:0,ry:0,sc:1},down:!1};o.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let h=o.getBoundingClientRect();f.t.ry=((d.clientX-h.left)/h.width-.5)*c*2,f.t.rx=-((d.clientY-h.top)/h.height-.5)*c*2,f.t.sc=f.down?.97:u,a(o,f)}),o.addEventListener("pointerleave",()=>{f.t.rx=0,f.t.ry=0,f.t.sc=1,f.down=!1,a(o,f)}),o.addEventListener("pointerdown",()=>{f.down=!0,f.t.sc=.965,a(o,f)}),o.addEventListener("pointerup",d=>{f.down=!1,f.t.sc=d.pointerType==="touch"?1:u,a(o,f)}),o.addEventListener("pointercancel",()=>{f.down=!1,f.t.sc=1,f.t.rx=0,f.t.ry=0,a(o,f)})})}var Zt=(()=>{let r=null,e=null,t=!0,n=!1;try{t=localStorage.getItem("nap-sound")!=="off"}catch{}let i=()=>{try{localStorage.setItem("nap-sound",t?"on":"off")}catch{}},s=()=>{if(!r){let c=window.AudioContext||window.webkitAudioContext;if(!c)return null;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}r=new c,e=r.createGain(),e.gain.value=.5,e.connect(r.createDynamicsCompressor()).connect(r.destination);let u=r.createBuffer(1,1,r.sampleRate),f=r.createBufferSource();f.buffer=u,f.connect(r.destination),f.start(0)}return r.state!=="running"&&r.resume().catch(()=>{}),r},a=()=>{n=!0,t&&s()};for(let c of["pointerdown","touchend","click","keydown"])addEventListener(c,a,{passive:!0});let o=(c,u,f,d,h="sine",g=0)=>{if(!t||!n)return;let x=s();if(!x)return;let p=x.currentTime+g,m=x.createOscillator(),v=x.createGain();m.type=h,m.frequency.setValueAtTime(c,p),m.frequency.exponentialRampToValueAtTime(u,p+f),v.gain.setValueAtTime(1e-4,p),v.gain.exponentialRampToValueAtTime(d,p+.012),v.gain.exponentialRampToValueAtTime(1e-4,p+f),m.connect(v).connect(e),m.start(p),m.stop(p+f+.05)},l={get on(){return t},get live(){return t&&n},enable(){return t=!0,n=!0,i(),s()},mute(){t=!1,i()},context(){return t?s():null},toggle(){return t=!t,i(),t&&(n=!0,l.pop()),t},bubble(c=1,u=.3,f=0){o(420*c,980*c,.13,u,"sine",f)},pop(){o(760,1500,.07,.28),o(380,620,.09,.11)},drop(){o(880,360,.17,.24)},lift(){o(300,540,.1,.15,"triangle")},ting(){o(1568,1560,.6,.11),o(2349,2340,.45,.06,"sine",.01),o(3136,3120,.3,.03,"sine",.02)},bubbles(c=5){for(let u=0;u<c;u++)l.bubble(.8+Math.random()*1.3,.05+Math.random()*.07,u*.075+Math.random()*.05)},open(){l.bubble(.75,.28),l.ting()}};return l})(),M1=(()=>{let r=16,e=performance.now();return mt.ticker.add(()=>{let t=performance.now();r+=(Math.min(t-e,2e3)-r)*.3,e=t}),()=>r})();function C0(r,{items:e,onPick:t}){let n=dt(".liquid-track",r),i=dt(".lens",r),s={x:0,y:0,w:0,h:0,sx:1,sy:1,o:0,lift:0},a=new Map,o=null,l=null,c=!1,u=S=>({x:S.offsetLeft,y:S.offsetTop,w:S.offsetWidth,h:S.offsetHeight}),f=()=>{let S=n.offsetLeft-n.scrollLeft+s.x,w=n.offsetTop+s.y,_=Ri(s.lift,0,1);i.style.width=`${s.w.toFixed(2)}px`,i.style.height=`${s.h.toFixed(2)}px`,i.style.opacity=Ri(s.o,0,1).toFixed(3),i.style.transform=`translate3d(${S.toFixed(2)}px, ${w.toFixed(2)}px, 0) scale(${s.sx.toFixed(4)}, ${s.sy.toFixed(4)})`,i.style.setProperty("--lift",_.toFixed(3));let M=s.w*s.sx/2,I=s.x+s.w/2;for(let A of e){let D=A.offsetLeft,L=A.offsetWidth||1,B=Math.max(0,Math.min(I+M,D+L)-Math.max(I-M,D))/L,P=1+.13*_*B*s.o;Math.abs((a.get(A)||1)-P)>8e-4&&(A.style.transform=P>1.0008?`scale(${P.toFixed(4)})`:"",a.set(A,P))}},d=(S,w)=>{if(o=S,mt.killTweensOf(s),!S){mt.to(s,{o:0,lift:0,duration:.25,onUpdate:f});return}let _=u(S);if(w||Ut||M1()>120){Object.assign(s,_,{sx:1,sy:1,o:1,lift:0}),f();return}if(s.o<.05){Object.assign(s,_,{sx:.6,sy:.6,lift:0}),mt.to(s,{sx:1,sy:1,o:1,duration:.75,ease:"elastic.out(1, 0.5)",onUpdate:f});return}mt.timeline({onUpdate:f}).to(s,{sy:1.2,sx:1.08,lift:.85,duration:.15,ease:"power2.out"}).to(s,{x:_.x,y:_.y,w:_.w,h:_.h,o:1,duration:.5,ease:"power3.inOut"},.04).to(s,{sx:1.22,duration:.2,ease:"sine.out"},.1).to(s,{sx:1,sy:1,lift:0,duration:.85,ease:"elastic.out(1, 0.45)"},.48)},h=S=>S-n.getBoundingClientRect().left+n.scrollLeft,g=S=>S.offsetLeft+S.offsetWidth/2,x=S=>e.reduce((w,_)=>{let M=Math.abs(g(_)-S);return!w||M<w.d?{el:_,d:M}:w},null).el,p=S=>e.forEach(w=>w.classList.toggle("under",w===S)),m=()=>n.scrollWidth<=n.clientWidth+1,v=S=>{p(null),Zt.pop(),t(S),d(S)};r.addEventListener("dragstart",S=>S.preventDefault()),r.addEventListener("pointerdown",S=>{S.button||Ut||!S.target.closest(".liquid-track")||S.pointerType==="touch"&&!m()||(l={id:S.pointerId,x0:S.clientX,last:S.clientX,moved:!1,under:null})}),addEventListener("pointermove",S=>{if(!l||S.pointerId!==l.id)return;if(!l.moved){if(Math.abs(S.clientX-l.x0)<7)return;l.moved=!0,Zt.lift(),mt.killTweensOf(s),s.o<.05&&Object.assign(s,u(x(h(S.clientX)))),mt.to(s,{o:1,sy:1.24,lift:1,duration:.3,ease:"back.out(2.2)",onUpdate:f})}let w=Ri(h(S.clientX),g(e[0]),g(e[e.length-1])),_=x(w);_!==l.under&&(l.under=_,p(_),mt.to(s,{w:_.offsetWidth,h:_.offsetHeight,y:_.offsetTop,duration:.25,ease:"power2.out",overwrite:"auto",onUpdate:f}),Zt.live&&Zt.bubble(1.5,.06)),s.sx=1.1+Ri(Math.abs(S.clientX-l.last)*.012,0,.24),l.last=S.clientX,s.x=w-s.w/2,f(),mt.to(s,{sx:1.1,duration:.35,ease:"power2.out",overwrite:"auto",onUpdate:f})},{passive:!0});let T=S=>{if(!l||S.pointerId!==l.id)return;let w=l;l=null,w.moved&&(c=!0,setTimeout(()=>{c=!1},0),v(w.under||x(h(S.clientX))))};addEventListener("pointerup",T),addEventListener("pointercancel",T),r.addEventListener("click",S=>{c&&(S.preventDefault(),S.stopPropagation())},!0);let y=()=>{let S=m();n.classList.toggle("is-fit",S),n.style.touchAction=S?"pan-y":"pan-x pan-y",o&&!l&&d(o,!0)};return n.addEventListener("scroll",f,{passive:!0}),addEventListener("resize",y),document.fonts.ready.then(y),window.ResizeObserver&&new ResizeObserver(y).observe(n),y(),{moveTo:d,pick:v,reveal(S){m()||n.scrollTo({left:S.offsetLeft-n.clientWidth/2+S.offsetWidth/2,behavior:Ut?"auto":"smooth"})}}}function b1(){let r=dt("#nav"),e=mi(".liquid-track a",r),t=new Map(e.map(m=>[m.getAttribute("href").slice(1),m])),n={toolkit:"credentials"},i=mi("main section[id]"),s=null,a=null,o=0,l=0;function c(m){s=m,e.forEach(v=>m&&v===t.get(m)?v.setAttribute("aria-current","true"):v.removeAttribute("aria-current"))}let u=()=>{let m=innerHeight*.45,v=null;for(let T of i)T.getBoundingClientRect().top<=m&&(v=T.id);return innerHeight+scrollY>=document.documentElement.scrollHeight-4&&(v=i[i.length-1].id),!v||v==="top"?null:n[v]||v},f=C0(r,{items:e,onPick:m=>{d(m),dt(m.getAttribute("href")).scrollIntoView({behavior:Ut?"auto":"smooth"})}});function d(m){let v=m.getAttribute("href").slice(1);a=v,o=performance.now()+2500,c(v)}let h=()=>{l=0;let m=u();if(a)if(m===a||performance.now()>o)a=null;else return;if(m===s)return;c(m);let v=m&&t.get(m);f.moveTo(v||null),v&&f.reveal(v)},g=()=>{l||(l=requestAnimationFrame(h))};addEventListener("scroll",g,{passive:!0}),addEventListener("resize",g),e.forEach(m=>m.addEventListener("click",()=>{Zt.pop(),d(m),f.moveTo(m)})),h();let x=dt("#sound"),p=()=>{x.setAttribute("aria-pressed",String(Zt.on)),x.title=Zt.on?"Sound on":"Sound off"};x.addEventListener("click",()=>{Zt.toggle(),p()}),p()}function T1(){mi(".tabs").forEach(r=>{let e=mi(".tab",r),t=(s,a)=>{e.forEach(o=>{let l=o===s;o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1;let c=document.getElementById(o.getAttribute("aria-controls"));c.hidden=!l,l&&!Ut&&mt.fromTo(mi("[data-spring], [data-tabitem]",c),{opacity:0,"--ty":"30px"},{opacity:1,"--ty":"0px",duration:.75,ease:"back.out(1.7)",stagger:.06,overwrite:!0})}),a&&s.focus(),je.refresh()},n=C0(r,{items:e,onPick:s=>t(s)});e.forEach((s,a)=>{s.addEventListener("click",()=>{s.getAttribute("aria-selected")!=="true"&&(Zt.pop(),t(s),n.moveTo(s),n.reveal(s))}),s.addEventListener("keydown",o=>{let l=o.key==="ArrowRight"?1:o.key==="ArrowLeft"?-1:0;if(l){o.preventDefault();let c=e[(a+l+e.length)%e.length];Zt.pop(),t(c,!0),n.moveTo(c),n.reveal(c)}})});let i=()=>n.moveTo(e.find(s=>s.getAttribute("aria-selected")==="true"),!0);i(),document.fonts.ready.then(i)})}function w1(){let r=new Set(["research","credentials"]),e=new Map,t=new IntersectionObserver(n=>n.forEach(i=>{if(!i.isIntersecting||!Zt.live)return;let s=performance.now();s-(e.get(i.target.id)||-1e9)<9e3||(e.set(i.target.id,s),Zt.bubbles(r.has(i.target.id)?6:3))}),{rootMargin:"-35% 0px -45% 0px"});mi("main section[id]:not(#top)").forEach(n=>t.observe(n))}function E1(){let r=dt("#sheet"),e=dt("#sheet-body"),t=dt("#lightbox"),n=null,i=a=>{n=document.activeElement,a.showModal(),a===r?Zt.open():Zt.ting(),Ut||mt.fromTo(a,{opacity:0,scale:.9,y:40},{opacity:1,scale:1,y:0,duration:.85,ease:"elastic.out(1, 0.72)",overwrite:!0})},s=a=>{Zt.drop();let o=()=>{a.close(),mt.set(a,{clearProps:"opacity,transform"}),n&&n.focus&&n.focus({preventScroll:!0})};Ut?o():mt.to(a,{opacity:0,scale:.96,y:14,duration:.2,ease:"power2.in",overwrite:!0,onComplete:o})};mi(".card").forEach(a=>a.addEventListener("click",()=>{let o=document.getElementById(`tpl-${a.dataset.card}`);if(!o)return;e.replaceChildren(o.content.cloneNode(!0));let l=dt(".sheet-title",e);l&&(l.id="sheet-heading"),i(r),e.scrollTop=0})),mi(".cert").forEach(a=>a.addEventListener("click",()=>{let o=dt("#lb-img");o.src=a.dataset.zoom,o.width=+a.dataset.w,o.height=+a.dataset.h,o.alt=`Certificate: ${a.dataset.title}`,dt("#lb-title").textContent=a.dataset.title,dt("#lb-meta").textContent=a.dataset.meta,i(t)}));for(let a of[r,t])a.addEventListener("click",o=>{(o.target===a||o.target.closest("[data-close]"))&&s(a)}),a.addEventListener("cancel",o=>{o.preventDefault(),s(a)})}function A1(){let r=dt("#lanyard"),e=dt(".lanyard-swing",r),t=dt(".idcard",r),n={a:0,w:0,drag:!1,ry:0,on:!0};if(Ut)return{drop(){}};let i=()=>{let c=r.getBoundingClientRect();return{x:c.left+c.width/2,y:c.top}},s=null,a=performance.now();t.addEventListener("pointerdown",c=>{c.pointerType!=="touch"&&(n.drag=!0,t.setPointerCapture(c.pointerId))}),t.addEventListener("pointermove",c=>{if(!n.drag)return;let u=i(),f=Ri(-Math.atan2(c.clientX-u.x,Math.max(c.clientY-u.y,60))*180/Math.PI,-48,48);n.w=(f-n.a)*10,n.a=ka(n.a,f,.5)});let o=()=>{n.drag&&Zt.bubble(1.2,.2),n.drag=!1};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),addEventListener("pointermove",c=>{if(s!=null&&!n.drag&&c.pointerType!=="touch"){let u=r.getBoundingClientRect();c.clientX>u.left-150&&c.clientX<u.right+150&&c.clientY>u.top-40&&c.clientY<u.bottom+150&&(n.w-=Ri((c.clientX-s)*.3,-12,12))}s=c.clientX},{passive:!0}),new IntersectionObserver(([c])=>{n.on=c.isIntersecting,n.on&&(a=performance.now(),requestAnimationFrame(l))}).observe(r);function l(c){if(!n.on)return;requestAnimationFrame(l);let u=Math.min((c-a)/1e3,.032);a=c,n.drag||(n.w+=Ri(Er.v*.004,-40,40)*u,n.w+=(-46*n.a-3.3*n.w)*u,n.a+=n.w*u),e.style.transform=`rotate(${n.a.toFixed(3)}deg)`,n.ry=nr(n.ry,Ri(Yt.nx,-1,1)*8-n.w*.1,6,u),t.style.transform=`rotateY(${n.ry.toFixed(2)}deg) rotateX(${(-Yt.ny*4).toFixed(2)}deg)`,t.style.setProperty("--hx",`${(50+n.ry*4+n.a*1.5).toFixed(1)}%`)}return{drop(){n.a=-24,n.w=0,mt.fromTo(r,{y:-560},{y:0,duration:1.05,ease:"power3.out",delay:.15})}}}function C1(){Ut||mi("[data-reveal]").forEach(r=>{mt.fromTo(r,{opacity:0,"--ty":"44px"},{opacity:1,"--ty":"0px",duration:.95,ease:"back.out(1.6)",scrollTrigger:{trigger:r,start:"top 90%",once:!0}})})}async function R1(){window.__napBooted=!0;let r=document.documentElement,e=dt("#loader"),t=[dt("#nav"),dt("main"),dt(".foot"),dt(".skip")].filter(Boolean),n=null,i={drop(){}};try{y1(),S1(),b1(),T1(),E1(),w1(),mi(".btn").forEach(y=>y.addEventListener("pointerdown",()=>Zt.bubble(1.1,.16))),i=A1()}catch(y){console.error(y)}let s=(async()=>{try{await Promise.race([Promise.all([document.fonts.load("560 96px Fraunces"),document.fonts.load("400 16px Geist")]),Ud(2500)]);try{n=v1(),r.classList.add("webgl")}catch(S){console.warn("WebGL is not available, using the static backdrop.",S),r.classList.add("no-webgl")}let y=dt(".id-photo");await Promise.race([y.decode?y.decode().catch(()=>{}):Promise.resolve(),Ud(2500)]),n&&(await n.firstFrame(),e&&e.isConnected&&n.hold())}catch(y){console.error(y)}})(),a=()=>{r.classList.remove("gated"),t.forEach(S=>{S.inert=!1}),n&&(n.go(),n.intro()),i.drop(),C1(),Ut||(mt.fromTo(".hero-lede, .hero-open",{opacity:0,y:26},{opacity:1,y:0,duration:.9,ease:"back.out(1.5)",stagger:.12,delay:.3}),mt.fromTo(".hero-cta > *",{opacity:0,"--ty":"26px"},{opacity:1,"--ty":"0px",duration:.9,ease:"back.out(1.7)",stagger:.09,delay:.4}),mt.fromTo("#nav",{y:-90},{y:0,duration:1.1,ease:"elastic.out(1, 0.7)",delay:.25})),je.refresh();let y=location.hash.length>1&&document.getElementById(decodeURIComponent(location.hash.slice(1)));y&&setTimeout(()=>y.scrollIntoView({behavior:"auto"}),60)};if(!e||!e.isConnected){await s,a();return}t.forEach(y=>{y.inert=!0});let o=dt("#enter-sound"),l=dt("#enter-quiet"),c=await new Promise(y=>{o.addEventListener("click",()=>{Zt.enable(),y(!0)},{once:!0}),l.addEventListener("click",()=>{Zt.mute(),y(!1)},{once:!0})}),u=dt("#sound");u&&(u.setAttribute("aria-pressed",String(Zt.on)),u.title=Zt.on?"Sound on":"Sound off");let f=dt("#gate"),d=dt("#count"),h=dt("#loader-count"),g=dt("#loader-fill"),x=Ut?1.2:c?3.4:1.6,p=null;if(c)try{let y=Zt.context();y&&(p=E0(y,y.destination,x))}catch(y){console.warn(y)}mt.to(f,{opacity:0,y:-12,duration:Ut?0:.25,onComplete:()=>{f.hidden=!0}}),d.hidden=!1,Ut||mt.fromTo(d,{opacity:0,scale:.94},{opacity:1,scale:1,duration:.45,ease:"back.out(1.6)"});let m={p:0},v=()=>{h.textContent=Math.round(m.p),g.style.transform=`scaleX(${m.p/100})`};mt.ticker.lagSmoothing(0),await Promise.all([mt.to(m,{p:99,duration:x,ease:c?"power1.in":"power1.inOut",onUpdate:v}),s]),m.p=100,v(),mt.ticker.lagSmoothing(500,33),p&&(p.hit(),await Ud(60));let T=document.createElement("div");T.className="flash",T.setAttribute("aria-hidden","true"),document.body.appendChild(T),mt.timeline({onComplete:()=>T.remove()}).to(T,{opacity:Ut?0:.85,duration:.07}).to(T,{opacity:0,duration:.7,ease:"power2.out"}),Ut||mt.to(".loader-num",{scale:1.14,duration:.3,ease:"power2.out"}),mt.to(e,{opacity:0,duration:Ut?0:.65,delay:.05,ease:"power2.inOut",onComplete:()=>e.remove()}),a()}R1();
