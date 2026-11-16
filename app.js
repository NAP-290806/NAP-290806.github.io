/* Portfolio of Naufal Abiyyu Permana. Three.js (MIT), GSAP (GreenSock standard license), simplex noise by Ian McEwan and Stefan Gustavson (MIT). */
var hp=0,Cu=1,up=2;var Mo=1,fp=2,ha=3,Vr=0,gn=1,Xi=2,ps=0,ua=1,Ru=2,Pu=3,Iu=4,dp=5;var ms=100,pp=101,mp=102,gp=103,_p=104,xp=200,vp=201,yp=202,Sp=203,Lu=204,Du=205,Mp=206,bp=207,Tp=208,wp=209,Ep=210,Ap=211,Cp=212,Rp=213,Pp=214,Gl=0,Vl=1,Hl=2,ea=3,Wl=4,Xl=5,ql=6,Yl=7,_c=0,Ip=1,Lp=2,qi=0,Nu=1,Uu=2,Fu=3,bo=4,Ou=5,Bu=6,zu=7;var ku=300,gs=301,fa=302,xc=303,vc=304,Zl=1e3,ki=1001,Jl=1002,un=1003,Dp=1004;var To=1005;var Bn=1006,yc=1007;var dr=1008;var Zn=1009,Gu=1010,Vu=1011,da=1012,Sc=1013,Ni=1014,Mi=1015,Ui=1016,Mc=1017,bc=1018,_s=1020,Hu=35902,Wu=35899,Xu=1021,qu=1022,Fi=1023,hr=1026,pr=1027,Tc=1028,wc=1029,Hr=1030,Ec=1031;var Ac=1033,wo=33776,Eo=33777,Ao=33778,Co=33779,Cc=35840,Rc=35841,Pc=35842,Ic=35843,Lc=36196,Dc=37492,Nc=37496,Uc=37488,Fc=37489,Ro=37490,Oc=37491,Bc=37808,zc=37809,kc=37810,Gc=37811,Vc=37812,Hc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,Zc=37818,Jc=37819,$c=37820,Kc=37821,Qc=36492,jc=36494,eh=36495,th=36283,nh=36284,Po=36285,ih=36286;var $a=2300,$l=2301,zl=2302,vu=2303,yu=2400,Su=2401,Mu=2402;var Np=3200;var Io=0,Up=1,mr="",Fn="srgb",Ka="srgb-linear",Qa="linear",xt="srgb";var kl=7680;var Fp=519,Op=512,Bp=513,zp=514,Yu=515,kp=516,Gp=517,Zu=518,Ju=519,Vp=35044;var $u="300 es",xi=2e3,ta=2001;function C0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function R0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hp(){let r=ja("canvas");return r.style.display="block",r}var Fd={},na=null;function Ku(...r){let e="THREE."+r.shift();na?na("log",e,...r):console.log(e,...r)}function Wp(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function He(...r){r=Wp(r);let e="THREE."+r.shift();if(na)na("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Xe(...r){r=Wp(r);let e="THREE."+r.shift();if(na)na("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function hs(...r){let e=r.join(" ");e in Fd||(Fd[e]=!0,He(...r))}function Xp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var qp={[Gl]:Gl,[Hl]:ql,[Wl]:Wl,[ea]:Xl,[Vl]:Vl,[ql]:Hl,[Yl]:Yl,[Xl]:ea},Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=1234567,Za=Math.PI/180,ia=180/Math.PI;function pa(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function Qu(r,e){return(r%e+e)%e}function P0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function I0(r,e,t){return r!==e?(t-r)/(e-r):0}function Ja(r,e,t){return(1-t)*r+t*e}function L0(r,e,t,n){return Ja(r,e,1-Math.exp(-t*n))}function D0(r,e=1){return e-Math.abs(Qu(r,e*2)-e)}function N0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function U0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function F0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function O0(r,e){return r+Math.random()*(e-r)}function B0(r){return r*(.5-Math.random())}function z0(r){r!==void 0&&(Od=r);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function k0(r){return r*Za}function G0(r){return r*ia}function V0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function H0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ju(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function W0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),u=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*u,o*c);break;case"YXY":r.set(l*u,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*u,o*h,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ef(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yp(r,e){if(e.constructor===Float32Array)return r;let t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Zp(r,e){if(e.constructor===Float32Array)return r;let t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var tf={DEG2RAD:Za,RAD2DEG:ia,generateUUID:pa,clamp:st,euclideanModulo:Qu,mapLinear:P0,inverseLerp:I0,lerp:Ja,damp:L0,pingpong:D0,smoothstep:N0,smootherstep:U0,randInt:F0,randFloat:O0,randFloatSpread:B0,seededRandom:z0,degToRad:k0,radToDeg:G0,isPowerOfTwo:V0,ceilPowerOfTwo:H0,floorPowerOfTwo:ju,setQuaternionFromProperEuler:W0,normalize:Zp,denormalize:Yp},of=class of{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};of.prototype.isVector2=!0;var Ke=of,vi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],u=s[a+1],m=s[a+2],x=s[a+3];if(d!==x||l!==f||c!==u||h!==m){let p=l*f+c*u+h*m+d*x;p<0&&(f=-f,u=-u,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);g=Math.sin(g*v)/S,o=Math.sin(o*v)/S,l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+x*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+m*o,d=d*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],u=s[a+2],m=s[a+3];return e[t]=o*m+h*d+l*u-c*f,e[t+1]=l*m+h*f+c*d-o*u,e[t+2]=c*m+h*u+o*f-l*d,e[t+3]=h*m-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),u=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(s-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lf=class lf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jh.copy(this).projectOnVector(e),this.sub(jh)}reflect(e){return this.sub(jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lf.prototype.isVector3=!0;var Z=lf,jh=new Z,Bd=new vi,cf=class cf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],x=i[0],p=i[3],g=i[6],v=i[1],S=i[4],y=i[7],T=i[2],E=i[5],_=i[8];return s[0]=a*x+o*v+l*T,s[3]=a*p+o*S+l*E,s[6]=a*g+o*y+l*_,s[1]=c*x+h*v+d*T,s[4]=c*p+h*S+d*E,s[7]=c*g+h*y+d*_,s[2]=f*x+u*v+m*T,s[5]=f*p+u*S+m*E,s[8]=f*g+u*y+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,u=c*s-a*l,m=t*d+n*f+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=u*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eu.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eu.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cf.prototype.isMatrix3=!0;var Ye=cf,eu=new Ye,zd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X0(){let r={enabled:!0,workingColorSpace:Ka,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?Qa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ka]:{primaries:e,whitePoint:n,transfer:Qa,toXYZ:zd,fromXYZ:kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:zd,fromXYZ:kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}var ht=X0();function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var zs,Kl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=ja("canvas")),zs.width=e.width,zs.height=e.height;let i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ja("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},q0=0,ra=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(tu(i[a].image)):s.push(tu(i[a]))}else s=tu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function tu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Y0=0,nu=new Z,zn=class r extends Gi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=ki,i=ki,s=Bn,a=dr,o=Fi,l=Zn,c=r.DEFAULT_ANISOTROPY,h=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=pa(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=ku;zn.DEFAULT_ANISOTROPY=1;var hf=class hf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(u+1)/2,T=(g+1)/2,E=(h+f)/4,_=(d+x)/4,M=(m+p)/4;return S>y&&S>T?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=E/n,s=_/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=M/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=_/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hf.prototype.isVector4=!0;var Dt=hf,Ql=class extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new zn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends Ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},eo=class extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gc=class gc{constructor(e,t,n,i,s,a,o,l,c,h,d,f,u,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,f,u,m,x,p)}set(e,t,n,i,s,a,o,l,c,h,d,f,u,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=a*h,u=a*d,m=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+m*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=m+u*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,m=c*h,x=c*d;t[0]=f+x*o,t[4]=m*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,m=c*h,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*d,m=o*h,x=o*d;t[0]=l*h,t[4]=m*c-u,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=u*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=m*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+m,t[10]=f-x*d}else if(e.order==="XZY"){let f=a*l,u=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=a*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z0,e,J0)}lookAt(e,t,n){let i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Rr.crossVectors(n,ii),Rr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Rr.crossVectors(n,ii)),Rr.normalize(),gl.crossVectors(ii,Rr),i[0]=Rr.x,i[4]=gl.x,i[8]=ii.x,i[1]=Rr.y,i[5]=gl.y,i[9]=ii.y,i[2]=Rr.z,i[6]=gl.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],x=n[6],p=n[10],g=n[14],v=n[3],S=n[7],y=n[11],T=n[15],E=i[0],_=i[4],M=i[8],P=i[12],A=i[1],D=i[5],N=i[9],G=i[13],I=i[2],k=i[6],q=i[10],O=i[14],X=i[3],V=i[7],R=i[11],ee=i[15];return s[0]=a*E+o*A+l*I+c*X,s[4]=a*_+o*D+l*k+c*V,s[8]=a*M+o*N+l*q+c*R,s[12]=a*P+o*G+l*O+c*ee,s[1]=h*E+d*A+f*I+u*X,s[5]=h*_+d*D+f*k+u*V,s[9]=h*M+d*N+f*q+u*R,s[13]=h*P+d*G+f*O+u*ee,s[2]=m*E+x*A+p*I+g*X,s[6]=m*_+x*D+p*k+g*V,s[10]=m*M+x*N+p*q+g*R,s[14]=m*P+x*G+p*O+g*ee,s[3]=v*E+S*A+y*I+T*X,s[7]=v*_+S*D+y*k+T*V,s[11]=v*M+S*N+y*q+T*R,s[15]=v*P+S*G+y*O+T*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],x=e[7],p=e[11],g=e[15],v=l*u-c*f,S=o*u-c*d,y=o*f-l*d,T=a*u-c*h,E=a*f-l*h,_=a*d-o*h;return t*(x*v-p*S+g*y)-n*(m*v-p*T+g*E)+i*(m*S-x*T+g*_)-s*(m*y-x*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],x=e[13],p=e[14],g=e[15],v=t*o-n*a,S=t*l-i*a,y=t*c-s*a,T=n*l-i*o,E=n*c-s*o,_=i*c-s*l,M=h*x-d*m,P=h*p-f*m,A=h*g-u*m,D=d*p-f*x,N=d*g-u*x,G=f*g-u*p,I=v*G-S*N+y*D+T*A-E*P+_*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return e[0]=(o*G-l*N+c*D)*k,e[1]=(i*N-n*G-s*D)*k,e[2]=(x*_-p*E+g*T)*k,e[3]=(f*E-d*_-u*T)*k,e[4]=(l*A-a*G-c*P)*k,e[5]=(t*G-i*A+s*P)*k,e[6]=(p*y-m*_-g*S)*k,e[7]=(h*_-f*y+u*S)*k,e[8]=(a*N-o*A+c*M)*k,e[9]=(n*A-t*N-s*M)*k,e[10]=(m*E-x*y+g*v)*k,e[11]=(d*y-h*E-u*v)*k,e[12]=(o*P-a*D-l*M)*k,e[13]=(t*D-n*P+i*M)*k,e[14]=(x*S-m*T-p*v)*k,e[15]=(h*T-d*S+f*v)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,u=s*h,m=s*d,x=a*h,p=a*d,g=o*d,v=l*c,S=l*h,y=l*d,T=n.x,E=n.y,_=n.z;return i[0]=(1-(x+g))*T,i[1]=(u+y)*T,i[2]=(m-S)*T,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(f+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(m+S)*_,i[9]=(p-v)*_,i[10]=(1-(f+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ks.set(i[0],i[1],i[2]).length(),o=ks.set(i[4],i[5],i[6]).length(),l=ks.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Pi.copy(this);let c=1/a,h=1/o,d=1/l;return Pi.elements[0]*=c,Pi.elements[1]*=c,Pi.elements[2]*=c,Pi.elements[4]*=h,Pi.elements[5]*=h,Pi.elements[6]*=h,Pi.elements[8]*=d,Pi.elements[9]*=d,Pi.elements[10]*=d,t.setFromRotationMatrix(Pi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=xi,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===xi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ta)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=xi,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),u=-(n+i)/(n-i),m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===xi)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===ta)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gc.prototype.isMatrix4=!0;var Mt=gc,ks=new Z,Pi=new Mt,Z0=new Z(0,0,0),J0=new Z(1,1,1),Rr=new Z,gl=new Z,ii=new Z,Gd=new Mt,Vd=new vi,Vi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vi.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$0=0,Hd=new Z,Gs=new vi,rr=new Mt,_l=new Z,Va=new Z,K0=new Z,Q0=new vi,Wd=new Z(1,0,0),Xd=new Z(0,1,0),qd=new Z(0,0,1),Yd={type:"added"},j0={type:"removed"},Vs={type:"childadded",child:null},iu={type:"childremoved",child:null},fn=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Z,t=new Vi,n=new vi,i=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ye}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Hd.copy(e).applyQuaternion(this.quaternion),this.position.add(Hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_l.copy(e):_l.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(Va,_l,this.up):rr.lookAt(_l,Va,this.up),this.quaternion.setFromRotationMatrix(rr),i&&(rr.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(rr),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,e,K0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Va,Q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new Z(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cs=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},e_={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},xl={h:0,s:0,l:0};function ru(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=Qu(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ru(a,s,e+1/3),this.g=ru(a,s,e),this.b=ru(a,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){let n=Jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ht.workingToColorSpace(wn.copy(this),e),Math.round(st(wn.r*255,0,255))*65536+Math.round(st(wn.g*255,0,255))*256+Math.round(st(wn.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,s=wn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=Fn){ht.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(xl);let n=Ja(Pr.h,xl.h,t),i=Ja(Pr.s,xl.s,t),s=Ja(Pr.l,xl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new qe;qe.NAMES=Jp;var us=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ii=new Z,sr=new Z,su=new Z,ar=new Z,Hs=new Z,Ws=new Z,Zd=new Z,au=new Z,ou=new Z,lu=new Z,cu=new Dt,hu=new Dt,uu=new Dt,Nr=class r{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ii.subVectors(e,t),i.cross(Ii);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ii.subVectors(i,t),sr.subVectors(n,t),su.subVectors(e,t);let a=Ii.dot(Ii),o=Ii.dot(sr),l=Ii.dot(su),c=sr.dot(sr),h=sr.dot(su),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,m=(a*h-o*l)*f;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(a,ar.y),l.addScaledVector(o,ar.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return cu.setScalar(0),hu.setScalar(0),uu.setScalar(0),cu.fromBufferAttribute(e,t),hu.fromBufferAttribute(e,n),uu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(cu,s.x),a.addScaledVector(hu,s.y),a.addScaledVector(uu,s.z),a}static isFrontFacing(e,t,n,i){return Ii.subVectors(n,t),sr.subVectors(e,t),Ii.cross(sr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),sr.subVectors(this.a,this.b),Ii.cross(sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Hs.subVectors(i,n),Ws.subVectors(s,n),au.subVectors(e,n);let l=Hs.dot(au),c=Ws.dot(au);if(l<=0&&c<=0)return t.copy(n);ou.subVectors(e,i);let h=Hs.dot(ou),d=Ws.dot(ou);if(h>=0&&d<=h)return t.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Hs,a);lu.subVectors(e,s);let u=Hs.dot(lu),m=Ws.dot(lu);if(m>=0&&u<=m)return t.copy(s);let x=u*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ws,o);let p=h*m-u*d;if(p<=0&&d-h>=0&&u-m>=0)return Zd.subVectors(s,i),o=(d-h)/(d-h+(u-m)),t.copy(i).addScaledVector(Zd,o);let g=1/(p+x+f);return a=x*g,o=f*g,t.copy(n).addScaledVector(Hs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hi=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Li):Li.fromBufferAttribute(s,a),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vl.copy(n.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),yl.subVectors(this.max,Ha),Xs.subVectors(e.a,Ha),qs.subVectors(e.b,Ha),Ys.subVectors(e.c,Ha),Ir.subVectors(qs,Xs),Lr.subVectors(Ys,qs),ss.subVectors(Xs,Ys);let t=[0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,0,-ss.z,ss.y,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,ss.z,0,-ss.x,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0,-ss.y,ss.x,0];return!fu(t,Xs,qs,Ys,yl)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,Xs,qs,Ys,yl))?!1:(Sl.crossVectors(Ir,Lr),t=[Sl.x,Sl.y,Sl.z],fu(t,Xs,qs,Ys,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},or=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Li=new Z,vl=new Hi,Xs=new Z,qs=new Z,Ys=new Z,Ir=new Z,Lr=new Z,ss=new Z,Ha=new Z,yl=new Z,Sl=new Z,as=new Z;function fu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){as.fromArray(r,s);let o=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Kt=new Z,Ml=new Ke,t_=0,si=class extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vp,this.updateRanges=[],this.gpuType=Mi,this.version=0,this._normalizationScale=e!==void 0?ef(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Yp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zp(e,this.array)}};var no=class extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var io=class extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var On=class extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}},n_=new Hi,Wa=new Z,du=new Z,ur=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):n_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);let t=Wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(du)),this.expandByPoint(Wa.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},i_=0,_i=new Mt,pu=new fn,Zs=new Z,ri=new Hi,Xa=new Hi,hn=new Z,yi=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C0(e)?io:no)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new On(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(ri.min,Xa.min),ri.expandByPoint(hn),hn.addVectors(ri.max,Xa.max),ri.expandByPoint(hn)):(ri.expandByPoint(Xa.min),ri.expandByPoint(Xa.max))}ri.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),hn.add(Zs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new Z,l[P]=new Z;let h=new Z,d=new Z,f=new Z,u=new Ke,m=new Ke,x=new Ke,p=new Z,g=new Z;function v(P,A,D){c[P]=c[A]=c[D]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),u.fromBufferAttribute(s,P),m.fromBufferAttribute(s,A),x.fromBufferAttribute(s,D),d.sub(h),f.sub(h),m.sub(u),x.sub(u);let N=1/(m.x*x.y-x.x*m.y);isFinite(N)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(N),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(N),o[P].add(p),o[A].add(p),o[D].add(p),l[P].add(g),l[A].add(g),l[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,A=S.length;P<A;++P){let D=S[P],N=D.start,G=D.count;for(let I=N,k=N+G;I<k;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let y=new Z,T=new Z,E=new Z,_=new Z;function M(P){E.fromBufferAttribute(i,P),_.copy(E);let A=o[P];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),T.crossVectors(_,A);let N=T.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,N)}for(let P=0,A=n.count;P<A;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let g=0;g<h;g++)f[m++]=c[u++]}return new si(f,h,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mu=new Z,r_=new Z,s_=new Ye,Di=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=mu.subVectors(n,t).cross(r_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(mu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||s_.getNormalMatrix(e),i=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},a_=0,Wi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=pa(),this.name="",this.type="Material",this.blending=ua,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kl,this.stencilZFail=kl,this.stencilZPass=kl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Di().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var lr=new Z,gu=new Z,bl=new Z,Tl=new Z,ro=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gu.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),Tl.copy(this.origin).sub(gu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(bl),o=Tl.dot(this.direction),l=-Tl.dot(bl),c=Tl.lengthSq(),h=Math.abs(1-a*a),d,f,u,m;if(h>0)if(d=a*l-o,f=a*o-l,m=s*h,d>=0)if(f>=-m)if(f<=m){let x=1/h;d*=x,f*=x,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gu).addScaledVector(bl,f),u}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);let n=lr.dot(this.direction),i=lr.dot(lr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,f=e.y-a.y,u=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,S=n.z-a.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),_,M,P,A,D,N,G,I,k,q,O,X;if(y>=T&&y>=E?(P=l,N=d,k=m,X=g,l>=0?(_=c,M=h,A=f,D=u,G=x,I=p,q=v,O=S):(_=h,M=c,A=u,D=f,G=p,I=x,q=S,O=v)):T>=E?(P=c,N=f,k=x,X=v,c>=0?(_=h,M=l,A=u,D=d,G=p,I=m,q=S,O=g):(_=l,M=h,A=d,D=u,G=m,I=p,q=g,O=S)):(P=h,N=u,k=p,X=S,h>=0?(_=l,M=c,A=d,D=f,G=m,I=x,q=g,O=v):(_=c,M=l,A=f,D=d,G=x,I=m,q=v,O=g)),P===0)return null;let V=_/P,R=M/P,ee=1/P,Se=A-V*N,ze=D-R*N,J=G-V*k,ue=I-R*k,xe=q-V*X,Me=O-R*X,ce=xe*ue-Me*J,Ce=Se*Me-ze*xe,ft=J*ze-ue*Se;if(i){if(ce<0||Ce<0||ft<0)return null}else if((ce<0||Ce<0||ft<0)&&(ce>0||Ce>0||ft>0))return null;let Ae=ce+Ce+ft;if(Ae===0)return null;let Ve=ee*(ce*N+Ce*k+ft*X);return(Ae>0?Ve<0:Ve>0)?null:this.at(Ve/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},aa=class extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jd=new Mt,os=new ro,wl=new ur,$d=new Z,El=new Z,Al=new Z,Cl=new Z,_u=new Z,Rl=new Z,Kd=new Z,Pl=new Z,Pt=class extends fn{constructor(e=new yi,t=new aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(_u.fromBufferAttribute(d,e),a?Rl.addScaledVector(_u,h):Rl.addScaledVector(_u.sub(t),h))}t.add(Rl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(wl.containsPoint(os.origin)===!1&&(os.intersectSphere(wl,$d)===null||os.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Jd.copy(s).invert(),os.copy(e.ray).applyMatrix4(Jd),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),S=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=S;y<T;y+=3){let E=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);i=Il(this,g,e,n,c,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){let v=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);i=Il(this,a,e,n,c,h,d,v,S,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let p=f[m],g=a[p.materialIndex],v=Math.max(p.start,u.start),S=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let y=v,T=S;y<T;y+=3){let E=y,_=y+1,M=y+2;i=Il(this,g,e,n,c,h,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let p=m,g=x;p<g;p+=3){let v=p,S=p+1,y=p+2;i=Il(this,a,e,n,c,h,d,v,S,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function o_(r,e,t,n,i,s,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Vr,o),l===null)return null;Pl.copy(o),Pl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Pl);return c<t.near||c>t.far?null:{distance:c,point:Pl.clone(),object:r}}function Il(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,El),r.getVertexPosition(l,Al),r.getVertexPosition(c,Cl);let h=o_(r,e,t,n,El,Al,Cl,Kd);if(h){let d=new Z;Nr.getBarycoord(Kd,El,Al,Cl,d),i&&(h.uv=Nr.getInterpolatedAttribute(i,o,l,c,d,new Ke)),s&&(h.uv1=Nr.getInterpolatedAttribute(s,o,l,c,d,new Ke)),a&&(h.normal=Nr.getInterpolatedAttribute(a,o,l,c,d,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new Z,materialIndex:0};Nr.getNormal(El,Al,Cl,f.normal),h.face=f,h.barycoord=d}return h}var so=class extends zn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=un,h=un,d,f){super(null,a,o,l,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ao=class extends si{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Mt,Qd=new Mt,Ll=[],jd=new Hi,l_=new Mt,qa=new Pt,Ya=new ur,oo=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,l_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),jd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Ya.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(qa.geometry=this.geometry,qa.material=this.material,qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ya.copy(this.boundingSphere),Ya.applyMatrix4(n),e.ray.intersectsSphere(Ya)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Js),Qd.multiplyMatrices(n,Js),qa.matrixWorld=Qd,qa.raycast(e,Ll);for(let a=0,o=Ll.length;a<o;a++){let l=Ll[a];l.instanceId=s,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new so(new Float32Array(i*this.count),i,this.count,Tc,Mi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new ur,c_=new Ke(.5,.5),Dl=new Z,Ur=class{constructor(e=new Di,t=new Di,n=new Di,i=new Di,s=new Di,a=new Di){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],m=s[8],x=s[9],p=s[10],g=s[11],v=s[12],S=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-a,u-h,g-m,T-v).normalize(),i[1].setComponents(c+a,u+h,g+m,T+v).normalize(),i[2].setComponents(c+o,u+d,g+x,T+S).normalize(),i[3].setComponents(c-o,u-d,g-x,T-S).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,u-f,g-p,T-y).normalize();else if(i[4].setComponents(c-l,u-f,g-p,T-y).normalize(),t===xi)i[5].setComponents(c+l,u+f,g+p,T+y).normalize();else if(t===ta)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=c_.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Dl.x=i.normal.x>0?e.max.x:e.min.x,Dl.y=i.normal.y>0?e.max.y:e.min.y,Dl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ep=new Mt,ec=class r{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];ep.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ur),n[i].setFromProjectionMatrix(ep,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ur),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var oa=class extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tp=new Mt,bu=new ro,Nl=new ur,Ul=new Z,lo=class extends fn{constructor(e=new yi,t=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(i),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;tp.copy(i).invert(),bu.copy(e.ray).applyMatrix4(tp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let m=f,x=u;m<x;m++){let p=c.getX(m);Ul.fromBufferAttribute(d,p),np(Ul,p,l,i,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let m=f,x=u;m<x;m++)Ul.fromBufferAttribute(d,m),np(Ul,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function np(r,e,t,n,i,s,a){let o=bu.distanceSqToPoint(r);if(o<t){let l=new Z;bu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var co=class extends zn{constructor(e=[],t=gs,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ho=class extends zn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fr=class extends zn{constructor(e,t,n=Ni,i,s,a,o=un,l=un,c,h=hr,d=1){if(h!==hr&&h!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},uo=class extends fr{constructor(e,t=Ni,n=gs,i,s,a=un,o=un,l,c=hr){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fo=class extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fr=class r extends yi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2));function m(x,p,g,v,S,y,T,E,_,M,P){let A=y/_,D=T/M,N=y/2,G=T/2,I=E/2,k=_+1,q=M+1,O=0,X=0,V=new Z;for(let R=0;R<q;R++){let ee=R*D-G;for(let Se=0;Se<k;Se++){let ze=Se*A-N;V[x]=ze*v,V[p]=ee*S,V[g]=I,c.push(V.x,V.y,V.z),V[x]=0,V[p]=0,V[g]=E>0?1:-1,h.push(V.x,V.y,V.z),d.push(Se/_),d.push(1-R/M),O+=1}}for(let R=0;R<M;R++)for(let ee=0;ee<_;ee++){let Se=f+ee+k*R,ze=f+ee+k*(R+1),J=f+(ee+1)+k*(R+1),ue=f+(ee+1)+k*R;l.push(Se,ze,ue),l.push(ze,J,ue),X+=6}o.addGroup(u,X,P),u+=X,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tc=class r extends yi{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new On(s,3)),this.setAttribute("normal",new On(s.slice(),3)),this.setAttribute("uv",new On(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let S=new Z,y=new Z,T=new Z;for(let E=0;E<t.length;E+=3)u(t[E+0],S),u(t[E+1],y),u(t[E+2],T),l(S,y,T,v)}function l(v,S,y,T){let E=T+1,_=[];for(let M=0;M<=E;M++){_[M]=[];let P=v.clone().lerp(y,M/E),A=S.clone().lerp(y,M/E),D=E-M;for(let N=0;N<=D;N++)N===0&&M===E?_[M][N]=P:_[M][N]=P.clone().lerp(A,N/D)}for(let M=0;M<E;M++)for(let P=0;P<2*(E-M)-1;P++){let A=Math.floor(P/2);P%2===0?(f(_[M][A+1]),f(_[M+1][A]),f(_[M][A])):(f(_[M][A+1]),f(_[M+1][A+1]),f(_[M+1][A]))}}function c(v){let S=new Z;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(v),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function h(){let v=new Z;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];let y=p(v)/2/Math.PI+.5,T=g(v)/Math.PI+.5;a.push(y,1-T)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let S=a[v+0],y=a[v+2],T=a[v+4],E=Math.max(S,y,T),_=Math.min(S,y,T);E>.9&&_<.1&&(S<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),T<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function u(v,S){let y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function m(){let v=new Z,S=new Z,y=new Z,T=new Z,E=new Ke,_=new Ke,M=new Ke;for(let P=0,A=0;P<s.length;P+=9,A+=6){v.set(s[P+0],s[P+1],s[P+2]),S.set(s[P+3],s[P+4],s[P+5]),y.set(s[P+6],s[P+7],s[P+8]),E.set(a[A+0],a[A+1]),_.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),T.copy(v).add(S).add(y).divideScalar(3);let D=p(T);x(E,A+0,v,D),x(_,A+2,S,D),x(M,A+4,y,D)}}function x(v,S,y,T){T<0&&v.x===1&&(a[S]=v.x-1),y.x===0&&y.z===0&&(a[S]=T/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var fs=class r extends tc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var Or=class r extends yi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,u=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let v=g*f-a;for(let S=0;S<c;S++){let y=S*d-s;m.push(y,-v,0),x.push(0,0,1),p.push(S/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let S=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),E=v+1+c*g;u.push(S,y,E),u.push(y,T,E)}this.setIndex(u),this.setAttribute("position",new On(m,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function xs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(ip(i))i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ip(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function An(r){let e={};for(let t=0;t<r.length;t++){let n=xs(r[t]);for(let i in n)e[i]=n[i]}return e}function ip(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function h_(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var $p={clone:xs,merge:An},u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Mt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nc=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ds=class extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},po=class extends ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var mo=class extends Wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=_c,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ic=class extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rc=class extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $s(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Fl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Br=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sc=class extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yu,endingEnd:yu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Su:s=e,o=2*t-n;break;case Mu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Su:a=e,l=2*n-t;break;case Mu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(i-t),x=m*m,p=x*m,g=-f*p+2*f*x-f*m,v=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*m+1,S=(-1-u)*p+(1.5+u)*x+.5*m,y=u*p-u*x;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+v*a[c+T]+S*a[l+T]+y*a[d+T];return s}},ac=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*h;return s}},oc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},lc=class extends Br{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(i-t),x=1-m;for(let p=0;p!==o;++p)s[p]=a[c+p]*x+a[l+p]*m;return s}let f=o*2,u=e-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=u*f+m*2,v=d[g],S=d[g+1],y=e*f+m*2,T=h[y],E=h[y+1],_=p_(n,t,v,T,i);s[m]=Kp(_,x,S,E,p)}return s}};function Kp(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function d_(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function p_(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Kp(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=d_(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var oi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Fl(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new lc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case $l:t=this.InterpolantFactoryMethodLinear;break;case zl:t=this.InterpolantFactoryMethodSmooth;break;case vu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return $l;case this.InterpolantFactoryMethodSmooth:return zl;case this.InterpolantFactoryMethodBezier:return vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Fl(this.settings)&&(rp(this.settings.inTangents,e),rp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Fl(this.settings)&&(sp(this.settings.inTangents,e),sp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&R0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[f+m]||x!==t[u+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Fl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function rp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function sp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=$l;var zr=class extends oi{constructor(e,t,n){super(e,t,n)}};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=$a;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};cc.prototype.ValueTypeName="color";var hc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};hc.prototype.ValueTypeName="number";var uc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(s,0,a,c-o,a,c,l);return s}},go=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends oi{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=$a;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};fc.prototype.ValueTypeName="vector";var dc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qp=new dc,pc=class{constructor(e){this.manager=e!==void 0?e:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var la=class extends fn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var xu=new Mt,ap=new Z,op=new Z,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ap.setFromMatrixPosition(e.matrixWorld),t.position.copy(ap),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xu,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===ta||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ol=new Z,Bl=new vi,zi=new Z,xo=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,Bl,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ol,Bl,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new Z,lp=new Ke,cp=new Ke,En=class extends xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,lp,cp),t.subVectors(cp,lp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Za*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tu=class extends _o{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},Gr=class extends la{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vo=class extends xo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wu=class extends _o{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yo=class extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new wu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},So=class extends la{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ks=-90,Qs=1,ca=class extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new En(Ks,Qs,e,t);i.layers=this.layers,this.add(i);let s=new En(Ks,Qs,e,t);s.layers=this.layers,this.add(s);let a=new En(Ks,Qs,e,t);a.layers=this.layers,this.add(a);let o=new En(Ks,Qs,e,t);o.layers=this.layers,this.add(o);let l=new En(Ks,Qs,e,t);l.layers=this.layers,this.add(l);let c=new En(Ks,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},mc=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var rf="\\[\\]\\.:\\/",m_=new RegExp("["+rf+"]","g"),sf="[^"+rf+"]",g_="[^"+rf.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",sf),x_=/(WCOD+)?/.source.replace("WCOD",g_),v_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),S_=new RegExp("^"+__+x_+v_+y_+"$"),M_=["material","materials","bones","map"],Eu=class{constructor(e,t,n){let i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(m_,"")}static parseTrackName(e){let t=S_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);M_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Eu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var R1=new Float32Array(1);var uf=class uf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};uf.prototype.isMatrix2=!0;var Au=uf;function af(r,e,t,n){let i=b_(n);switch(t){case Xu:return r*e;case Tc:return r*e/i.components*i.byteLength;case wc:return r*e/i.components*i.byteLength;case Hr:return r*e*2/i.components*i.byteLength;case Ec:return r*e*2/i.components*i.byteLength;case qu:return r*e*3/i.components*i.byteLength;case Fi:return r*e*4/i.components*i.byteLength;case Ac:return r*e*4/i.components*i.byteLength;case wo:case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Ic:return Math.max(r,16)*Math.max(e,8)/4;case Cc:case Pc:return Math.max(r,8)*Math.max(e,8)/2;case Lc:case Dc:case Uc:case Fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Ro:case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qc:case jc:case eh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case th:case nh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Po:case ih:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function b_(r){switch(r){case Zn:case Gu:return{byteLength:1,components:1};case da:case Vu:case Ui:return{byteLength:2,components:1};case Mc:case bc:return{byteLength:2,components:4};case Ni:case Sc:case Mi:return{byteLength:4,components:1};case Hu:case Wu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ym(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function w_(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],x=d[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let x=d[u];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var E_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A_=`#ifdef USE_ALPHAHASH
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
#endif`,C_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
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
#endif`,D_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N_=`#ifdef USE_BATCHING
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
#endif`,U_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z_=`#ifdef USE_IRIDESCENCE
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
#endif`,k_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,J_=`#define PI 3.141592653589793
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
} // validated`,$_=`vec3 transformedNormal = objectNormal;
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
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
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
}`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#endif`,bx=`uniform sampler2D dfgLUT;
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
}`,Tx=`
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
#endif`,wx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ux=`#if defined( USE_POINTS_UV )
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
#endif`,Fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zx=`#if defined( USE_MORPHCOLORS )
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
#endif`,kx=`#ifdef USE_MORPHNORMALS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zx=`#ifdef USE_NORMALMAP
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
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vv=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ev=`uniform sampler2D t2D;
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform float backgroundBlurriness;
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
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
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
}`,Lv=`#if DEPTH_PACKING == 3200
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
}`,Dv=`#define DISTANCE
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
}`,Nv=`#define DISTANCE
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,kv=`uniform vec3 diffuse;
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
}`,Vv=`#define LAMBERT
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
}`,Hv=`#define MATCAP
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
}`,Wv=`#define MATCAP
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
}`,Xv=`#define NORMAL
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
}`,qv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,Zv=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,$v=`#define STANDARD
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
}`,Kv=`#define TOON
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
}`,Qv=`#define TOON
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
}`,jv=`uniform float size;
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#include <common>
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
}`,ny=`uniform vec3 color;
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
}`,iy=`uniform float rotation;
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
}`,ry=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:E_,alphahash_pars_fragment:A_,alphamap_fragment:C_,alphamap_pars_fragment:R_,alphatest_fragment:P_,alphatest_pars_fragment:I_,aomap_fragment:L_,aomap_pars_fragment:D_,batching_pars_vertex:N_,batching_vertex:U_,begin_vertex:F_,beginnormal_vertex:O_,bsdfs:B_,iridescence_fragment:z_,bumpmap_pars_fragment:k_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:V_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:W_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:Y_,color_vertex:Z_,common:J_,defaultnormal_vertex:$_,displacementmap_pars_vertex:K_,displacementmap_vertex:Q_,emissivemap_fragment:j_,emissivemap_pars_fragment:ex,colorspace_fragment:tx,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:rx,envmap_pars_fragment:sx,envmap_pars_vertex:ax,envmap_physical_pars_fragment:_x,envmap_vertex:ox,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:hx,fog_pars_fragment:ux,gradientmap_pars_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:px,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:xx,lights_toon_pars_fragment:vx,lights_phong_fragment:yx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Mx,lights_physical_pars_fragment:bx,lights_fragment_begin:Tx,lights_fragment_maps:wx,lights_fragment_end:Ex,lightprobes_pars_fragment:Ax,logdepthbuf_fragment:Cx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Ix,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Nx,map_particle_pars_fragment:Ux,metalnessmap_fragment:Fx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Bx,morphcolor_vertex:zx,morphnormal_vertex:kx,morphtarget_pars_vertex:Gx,morphtarget_vertex:Vx,normal_fragment_begin:Hx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:qx,normal_vertex:Yx,normalmap_pars_fragment:Zx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Kx,iridescence_pars_fragment:Qx,opaque_fragment:jx,packing:ev,premultiplied_alpha_fragment:tv,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:rv,roughnessmap_fragment:sv,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:hv,skinbase_vertex:uv,skinning_pars_vertex:fv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:gv,tonemapping_fragment:_v,tonemapping_pars_fragment:xv,transmission_fragment:vv,transmission_pars_fragment:yv,uv_pars_fragment:Sv,uv_pars_vertex:Mv,uv_vertex:bv,worldpos_vertex:Tv,background_vert:wv,background_frag:Ev,backgroundCube_vert:Av,backgroundCube_frag:Cv,cube_vert:Rv,cube_frag:Pv,depth_vert:Iv,depth_frag:Lv,distance_vert:Dv,distance_frag:Nv,equirect_vert:Uv,equirect_frag:Fv,linedashed_vert:Ov,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:kv,meshlambert_vert:Gv,meshlambert_frag:Vv,meshmatcap_vert:Hv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:Yv,meshphong_frag:Zv,meshphysical_vert:Jv,meshphysical_frag:$v,meshtoon_vert:Kv,meshtoon_frag:Qv,points_vert:jv,points_frag:ey,shadow_vert:ty,shadow_frag:ny,sprite_vert:iy,sprite_frag:ry},be={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Zi={basic:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:An([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:An([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:An([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:An([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:An([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:An([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:An([be.common,be.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:An([be.lights,be.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Zi.physical={uniforms:An([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var rh={r:0,b:0,g:0},sy=new Mt,Sm=new Ye;Sm.set(-1,0,0,0,1,0,0,0,1);function ay(r,e,t,n,i,s){let a=new qe(0),o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function m(v){let S=!1,y=u(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),S=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,S){let y=u(S);y&&y.isCubeTexture?(c===void 0&&(c=new Pt(new Fr(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:xs(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sy.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sm),c.material.toneMapped=ht.getTransfer(y.colorSpace)!==xt,(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new Or(2,2),new Si({name:"BackgroundMaterial",uniforms:xs(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ht.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(rh,nf(r)),t.buffers.color.setClear(rh.r,rh.g,rh.b,S,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:m,addToRenderList:x,dispose:g}}function oy(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(D,N,G,I,k){let q=!1,O=d(D,I,G,N);s!==O&&(s=O,c(s.object)),q=u(D,I,G,k),q&&m(D,I,G,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(D,N,G,I),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,N,G,I){let k=I.wireframe===!0,q=n[N.id];q===void 0&&(q={},n[N.id]=q);let O=D.isInstancedMesh===!0?D.id:0,X=q[O];X===void 0&&(X={},q[O]=X);let V=X[G.id];V===void 0&&(V={},X[G.id]=V);let R=V[k];return R===void 0&&(R=f(l()),V[k]=R),R}function f(D){let N=[],G=[],I=[];for(let k=0;k<t;k++)N[k]=0,G[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function u(D,N,G,I){let k=s.attributes,q=N.attributes,O=0,X=G.getAttributes();for(let V in X)if(X[V].location>=0){let ee=k[V],Se=q[V];if(Se===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),ee===void 0||ee.attribute!==Se||Se&&ee.data!==Se.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function m(D,N,G,I){let k={},q=N.attributes,O=0,X=G.getAttributes();for(let V in X)if(X[V].location>=0){let ee=q[V];ee===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));let Se={};Se.attribute=ee,ee&&ee.data&&(Se.data=ee.data),k[V]=Se,O++}s.attributes=k,s.attributesNum=O,s.index=I}function x(){let D=s.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function p(D){g(D,0)}function g(D,N){let G=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;G[D]=1,I[D]===0&&(r.enableVertexAttribArray(D),I[D]=1),k[D]!==N&&(r.vertexAttribDivisor(D,N),k[D]=N)}function v(){let D=s.newAttributes,N=s.enabledAttributes;for(let G=0,I=N.length;G<I;G++)N[G]!==D[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function S(D,N,G,I,k,q,O){O===!0?r.vertexAttribIPointer(D,N,G,k,q):r.vertexAttribPointer(D,N,G,I,k,q)}function y(D,N,G,I){x();let k=I.attributes,q=G.getAttributes(),O=N.defaultAttributeValues;for(let X in q){let V=q[X];if(V.location>=0){let R=k[X];if(R===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let ee=R.normalized,Se=R.itemSize,ze=e.get(R);if(ze===void 0)continue;let J=ze.buffer,ue=ze.type,xe=ze.bytesPerElement,Me=ue===r.INT||ue===r.UNSIGNED_INT||R.gpuType===Sc;if(R.isInterleavedBufferAttribute){let ce=R.data,Ce=ce.isInterleavedBuffer===!0?ce.stride:ce.itemSize,ft=R.offset;if(ce.isInstancedInterleavedBuffer||ce.isInstancedBufferAttribute){for(let Ae=0;Ae<V.locationSize;Ae++)g(V.location+Ae,ce.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ae=0;Ae<V.locationSize;Ae++)p(V.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,J);for(let Ae=0;Ae<V.locationSize;Ae++)S(V.location+Ae,Se/V.locationSize,ue,ee,Ce*xe,(ft+Se/V.locationSize*Ae)*xe,Me)}else{if(R.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)g(V.location+ce,R.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce);r.bindBuffer(r.ARRAY_BUFFER,J);for(let ce=0;ce<V.locationSize;ce++)S(V.location+ce,Se/V.locationSize,ue,ee,Se*xe,Se/V.locationSize*ce*xe,Me)}}else if(O!==void 0){let ee=O[X];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(V.location,ee);break;case 3:r.vertexAttrib3fv(V.location,ee);break;case 4:r.vertexAttrib4fv(V.location,ee);break;default:r.vertexAttrib1fv(V.location,ee)}}}}v()}function T(){P();for(let D in n){let N=n[D];for(let G in N){let I=N[G];for(let k in I){let q=I[k];for(let O in q)h(q[O].object),delete q[O];delete I[k]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let G in N){let I=N[G];for(let k in I){let q=I[k];for(let O in q)h(q[O].object),delete q[O];delete I[k]}}delete n[D.id]}function _(D){for(let N in n){let G=n[N];for(let I in G){let k=G[I];if(k[D.id]===void 0)continue;let q=k[D.id];for(let O in q)h(q[O].object),delete q[O];delete k[D.id]}}}function M(D){for(let N in n){let G=n[N],I=D.isInstancedMesh===!0?D.id:0,k=G[I];if(k!==void 0){for(let q in k){let O=k[q];for(let X in O)h(O[X].object),delete O[X];delete k[q]}delete G[I],Object.keys(G).length===0&&delete n[N]}}}function P(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function ly(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function cy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Fi&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Zn&&_!==Mi&&!M&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:E}}function hy(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Di,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let v=s?0:n,S=v*4,y=g.clippingState||null;l.value=y,y=h(m,f,S,u);for(let T=0;T!==S;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,m){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=u+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,y=u;S!==x;++S,y+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var No=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new co(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fr(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:ps});s.uniforms.tEquirect.value=t;let a=new Pt(i,s),o=t.minFilter;return t.minFilter===dr&&(t.minFilter=Bn),new ca(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},jp=256,uy=3,fy=20,Mm=256,bm=16,dy=3,py=new Z,my=new qe,ga=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ca(1,10,null),this._boxMesh=new Pt(new Fr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=py}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(my));let p=new ca(n,i,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(jp,ju(e))}_fromTexture(e,t){e.mapping===gs||e.mapping===fa?this._setSize(e.image.length===0?jp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=em(e,!1,!1),n=Math.log2(e)-uy;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=em(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===gs||e.mapping===fa?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=tm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gy(),this._integrationMaterial=_y());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/bm);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-dy)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Mm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xy());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function em(r,e,t){return new No(r,{minFilter:dr,generateMipmaps:e,type:Ui,colorSpace:Ka,depthBuffer:t})}function Uo(r,e,t){return new Si({name:r,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:gn,blending:ps,depthTest:!1,depthWrite:!1})}function gy(){return Uo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mm}u

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
	`)}function _y(){return Uo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bm}},`

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
	`)}function xy(){return Uo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fy}
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
	`)}function tm(){return Uo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function nm(){return Uo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vy(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===xc||u===vc)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new No(m.height);return x.fromEquirectangularTexture(r,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===xc||u===vc,x=u===gs||u===fa;if(m||x){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new ga(r)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new ga(r)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,u){return u===xc?f.mapping=gs:u===vc&&(f.mapping=fa),f}function l(f){let u=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&u++;return u===m}function c(f){let u=f.target;u.removeEventListener("dispose",c);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function yy(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&hs("WebGLRenderer: "+n+" extension not supported."),i}}}function Sy(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);let x=s.get(m);x&&(e.remove(x),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],r.ARRAY_BUFFER)}function d(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,S=p.count>=65535?io:no,y=new S(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){let _=x.array;g=x.version;for(let M=0,P=0;M<v;M+=3){let A=_[M+0],D=_[M+1],N=_[M+2];T[P++]=A,T[P++]=D,T[P++]=D,T[P++]=N,T[P++]=N,T[P++]=A}}else{g=p.version;for(let _=0,M=0;_<v;_+=3){let P=_+0,A=_+1,D=_+2;T[M++]=P,T[M++]=A,T[M++]=A,T[M++]=D,T[M++]=D,T[M++]=P}}y.version=g;let E=s.get(m);E&&e.remove(E),s.set(m,y)}function f(m){let x=s.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&d(m)}else d(m);return s.get(m)}function u(){for(let m in i){let x=i[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function My(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(n,f,s,d*a,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let x=0;for(let p=0;p<u;p++)x+=f[p];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function by(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ty(r,e,t){let n=new WeakMap,i=new Dt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;u===!0&&(S=1),m===!0&&(S=2),x===!0&&(S=3);let y=o.attributes.position.count*S,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*d),_=new eo(E,y,T,d);_.type=Mi,_.needsUpdate=!0;let M=S*4;for(let A=0;A<d;A++){let D=p[A],N=g[A],G=v[A],I=y*T*4*A;for(let k=0;k<D.count;k++){let q=k*M;u===!0&&(i.fromBufferAttribute(D,k),E[I+q+0]=i.x,E[I+q+1]=i.y,E[I+q+2]=i.z,E[I+q+3]=0),m===!0&&(i.fromBufferAttribute(N,k),E[I+q+4]=i.x,E[I+q+5]=i.y,E[I+q+6]=i.z,E[I+q+7]=0),x===!0&&(i.fromBufferAttribute(G,k),E[I+q+8]=i.x,E[I+q+9]=i.y,E[I+q+10]=i.z,E[I+q+11]=G.itemSize===4?i.w:1)}}f={count:d,texture:_,size:new Ke(y,T)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let m=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function wy(r,e,t,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ey={[Nu]:"LINEAR_TONE_MAPPING",[Uu]:"REINHARD_TONE_MAPPING",[Fu]:"CINEON_TONE_MAPPING",[bo]:"ACES_FILMIC_TONE_MAPPING",[Bu]:"AGX_TONE_MAPPING",[zu]:"NEUTRAL_TONE_MAPPING",[Ou]:"CUSTOM_TONE_MAPPING"};function Ay(r,e,t,n,i,s){let a=new ai(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new yi;h.setAttribute("position",new On([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new On([0,2,0,0,2,0],2));let d=new nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(h,d),u=new vo(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,v=null,S=[],y=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let _=0;_<S.length;_++){let M=S[_];M.setSize&&M.setSize(T,E)}},this.setEffects=function(T){S=T,y=S.length>0&&S[0].isRenderPass===!0;let E=a.width,_=a.height;S.length>0&&o===null&&(o=new ai(E,_,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new ai(E,_,{type:Ui,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&S.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new fr(E,_),s===!0&&(c.format=pr,c.type=_s)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<S.length;P++){let A=S[P];A.setSize&&A.setSize(E,_),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===qi&&S.length===0)return!1;if(v=E,E!==null){let _=E.width,M=E.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=qi,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=g,p=!0;let _=a,M=o;for(let P=0;P<S.length;P++){let A=S[P];A.enabled!==!1&&(A.render(T,M,_,E),A.needsSwap!==!1&&(_=M,M=M===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,d.defines={},ht.getTransfer(m)===xt&&(d.defines.SRGB_TRANSFER="");let P=Ey[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(f,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Tm=new zn,wm=new fr(1,1),Em=new uo(1),Am=new eo,Cm=new jl,Rm=new co,im=[],rm=[],sm=new Float32Array(16),am=new Float32Array(9),om=new Float32Array(4);function _a(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=im[i];if(s===void 0&&(s=new Float32Array(i),im[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function oh(r,e){let t=rm[e];t===void 0&&(t=new Int32Array(e),rm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Cy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ry(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function Py(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function Iy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function Ly(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;om.set(n),r.uniformMatrix2fv(this.addr,!1,om),an(t,n)}}function Dy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;am.set(n),r.uniformMatrix3fv(this.addr,!1,am),an(t,n)}}function Ny(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;sm.set(n),r.uniformMatrix4fv(this.addr,!1,sm),an(t,n)}}function Uy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function Oy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function By(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function zy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ky(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function Gy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function Vy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function lh(r){return r.version===0&&(r.compareFunction=Ju,r.needsUpdate=!0),r}function Hy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=lh(wm):s=Tm,t.setTexture2D(e||s,i)}function Wy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cm,i)}function Xy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=lh(Em):s=Rm,t.setTextureCube(e||s,i)}function qy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Am,i)}function Yy(r){switch(r){case 5126:return Cy;case 35664:return Ry;case 35665:return Py;case 35666:return Iy;case 35674:return Ly;case 35675:return Dy;case 35676:return Ny;case 5124:case 35670:return Uy;case 35667:case 35671:return Fy;case 35668:case 35672:return Oy;case 35669:case 35673:return By;case 5125:return zy;case 36294:return ky;case 36295:return Gy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Wy;case 35680:case 36300:case 36308:case 36293:return Xy;case 36289:case 36303:case 36311:case 36292:return qy}}function Zy(r,e){r.uniform1fv(this.addr,e)}function Jy(r,e){let t=_a(e,this.size,2);r.uniform2fv(this.addr,t)}function $y(r,e){let t=_a(e,this.size,3);r.uniform3fv(this.addr,t)}function Ky(r,e){let t=_a(e,this.size,4);r.uniform4fv(this.addr,t)}function Qy(r,e){let t=_a(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jy(r,e){let t=_a(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function eS(r,e){let t=_a(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function tS(r,e){r.uniform1iv(this.addr,e)}function nS(r,e){r.uniform2iv(this.addr,e)}function iS(r,e){r.uniform3iv(this.addr,e)}function rS(r,e){r.uniform4iv(this.addr,e)}function sS(r,e){r.uniform1uiv(this.addr,e)}function aS(r,e){r.uniform2uiv(this.addr,e)}function oS(r,e){r.uniform3uiv(this.addr,e)}function lS(r,e){r.uniform4uiv(this.addr,e)}function cS(r,e,t){let n=this.cache,i=e.length,s=oh(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=lh(wm):a=Tm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function hS(r,e,t){let n=this.cache,i=e.length,s=oh(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cm,s[a])}function uS(r,e,t){let n=this.cache,i=e.length,s=oh(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=lh(Em):a=Rm;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function fS(r,e,t){let n=this.cache,i=e.length,s=oh(t,i);sn(n,s)||(r.uniform1iv(this.addr,s),an(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Am,s[a])}function dS(r){switch(r){case 5126:return Zy;case 35664:return Jy;case 35665:return $y;case 35666:return Ky;case 35674:return Qy;case 35675:return jy;case 35676:return eS;case 5124:case 35670:return tS;case 35667:case 35671:return nS;case 35668:case 35672:return iS;case 35669:case 35673:return rS;case 5125:return sS;case 36294:return aS;case 36295:return oS;case 36296:return lS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}var pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yy(t.type)}},mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}},gf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},ff=/(\w+)(\])?(\[|\.)?/g;function lm(r,e){r.seq.push(e),r.map[e.id]=e}function pS(r,e,t){let n=r.name,i=n.length;for(ff.lastIndex=0;;){let s=ff.exec(n),a=ff.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){lm(t,c===void 0?new pf(o,r,e):new mf(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new gf(o),lm(t,d)),t=d}}}var ma=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);pS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function cm(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var mS=37297,gS=0;function _S(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var hm=new Ye;function xS(r){ht._getMatrix(hm,ht.workingColorSpace,r);let e=`mat3( ${hm.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case Qa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function um(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+_S(r.getShaderSource(e),o)}else return s}function vS(r,e){let t=xS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yS={[Nu]:"Linear",[Uu]:"Reinhard",[Fu]:"Cineon",[bo]:"ACESFilmic",[Bu]:"AgX",[zu]:"Neutral",[Ou]:"Custom"};function SS(r,e){let t=yS[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var sh=new Z;function MS(){ht.getLuminanceCoefficients(sh);let r=sh.x.toFixed(4),e=sh.y.toFixed(4),t=sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function TS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Do(r){return r!==""}function fm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function dm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(r){return r.replace(ES,AS)}function AS(r,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}var CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(r){return r.replace(CS,RS)}function RS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var PS={[Mo]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function IS(r){return PS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var LS={[fa]:"ENVMAP_MODE_REFRACTION"};function DS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":LS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var NS={[_c]:"ENVMAP_BLENDING_MULTIPLY",[Ip]:"ENVMAP_BLENDING_MIX",[Lp]:"ENVMAP_BLENDING_ADD"};function US(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NS[r.combine]||"ENVMAP_BLENDING_NONE"}function FS(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=IS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=DS(t),d=US(t),f=bS(t),u=TS(s),m=i.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Do).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Do).join(`
`),p.length>0&&(p+=`
`)):(x=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),p=[mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==qi?SS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,vS("linearToOutputTexel",t.outputColorSpace),MS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),a=_f(a),a=fm(a,t),a=dm(a,t),o=_f(o),o=fm(o,t),o=dm(o,t),a=pm(a),o=pm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+a,S=g+p+o,y=cm(i,i.VERTEX_SHADER,v),T=cm(i,i.FRAGMENT_SHADER,S);i.attachShader(m,y),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(A){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(m)||"",N=i.getShaderInfoLog(y)||"",G=i.getShaderInfoLog(T)||"",I=D.trim(),k=N.trim(),q=G.trim(),O=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,y,T);else{let V=um(i,y,"vertex"),R=um(i,T,"fragment");Xe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+V+`
`+R)}else I!==""?He("WebGLProgram: Program Info Log:",I):(k===""||q==="")&&(X=!1);X&&(A.diagnostics={runnable:O,programLog:I,vertexShader:{log:k,prefix:x},fragmentShader:{log:q,prefix:p}})}i.deleteShader(y),i.deleteShader(T),_=new ma(i,m),M=wS(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,mS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=T,this}var OS=0,xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vf(e),t.set(e,n)),n}},vf=class{constructor(e){this.id=OS++,this.code=e,this.usedTimes=0}};function BS(r){return r===Hr||r===Ro||r===Po}function zS(r,e,t,n,i,s){let a=new to,o=new xf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,M,P,A,D,N){let G=A.fog,I=D.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||k,q),X=f[_.type],V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=R!==void 0?R.length:0,Se=0;I.morphAttributes.position!==void 0&&(Se=1),I.morphAttributes.normal!==void 0&&(Se=2),I.morphAttributes.color!==void 0&&(Se=3);let ze,J,ue,xe;if(X){let ne=Zi[X];ze=ne.vertexShader,J=ne.fragmentShader}else{ze=_.vertexShader,J=_.fragmentShader;let ne=o.getVertexShaderStage(_),we=o.getFragmentShaderStage(_);o.update(_,ne,we),ue=ne.id,xe=we.id}let Me=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),Ce=D.isInstancedMesh===!0,ft=D.isBatchedMesh===!0,Ae=!!_.map,Ve=!!_.matcap,Re=!!O,De=Re&&O.isPMREMTexture===!0,Te=!!_.aoMap,Ie=!!_.lightMap,H=!!_.bumpMap&&_.wireframe===!1,Fe=!!_.normalMap,at=!!_.displacementMap,it=!!_.emissiveMap,We=!!_.metalnessMap,mt=!!_.roughnessMap,St=_.anisotropy>0,F=_.clearcoat>0,dt=_.diffuseRoughness>0,$e=_.dispersion>0,ke=_.retroreflectivity>0,se=_.iridescence>0,ot=_.sheen>0,Oe=_.transmission>0,Ge=St&&!!_.anisotropyMap,C=F&&!!_.clearcoatMap,b=F&&!!_.clearcoatNormalMap,z=F&&!!_.clearcoatRoughnessMap,ae=dt&&!!_.diffuseRoughnessMap,ie=se&&!!_.iridescenceMap,fe=se&&!!_.iridescenceThicknessMap,ge=ot&&!!_.sheenColorMap,W=ot&&!!_.sheenRoughnessMap,j=!!_.specularMap,he=!!_.specularColorMap,L=!!_.specularIntensityMap,Q=Oe&&!!_.transmissionMap,K=Oe&&!!_.thicknessMap,de=!!_.gradientMap,le=!!_.alphaMap,pe=_.alphaTest>0,oe=!!_.alphaHash,me=!!_.extensions,re=qi;_.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(re=r.toneMapping);let te=De?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,_e={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:ze,fragmentShader:J,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:xe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:ft,batchingColor:ft&&D._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ae,matcap:Ve,envMap:Re,envMapMode:Re&&O.mapping,envMapPMREM:De,envMapMaxLod:De?te.length-1:null,envMapSize:De?te[0].width:null,aoMap:Te,lightMap:Ie,bumpMap:H,normalMap:Fe,displacementMap:at,emissiveMap:it,normalMapObjectSpace:Fe&&_.normalMapType===Up,normalMapTangentSpace:Fe&&_.normalMapType===Io,packedNormalMap:Fe&&_.normalMapType===Io&&BS(_.normalMap.format),metalnessMap:We,roughnessMap:mt,anisotropy:St,anisotropyMap:Ge,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:z,diffuseRoughness:dt,diffuseRoughnessMap:ae,dispersion:$e,retroreflection:ke,iridescence:se,iridescenceMap:ie,iridescenceThicknessMap:fe,sheen:ot,sheenColorMap:ge,sheenRoughnessMap:W,specularMap:j,specularColorMap:he,specularIntensityMap:L,transmission:Oe,transmissionMap:Q,thicknessMap:K,gradientMap:de,opaque:_.transparent===!1&&_.blending===ua&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:pe,alphaHash:oe,combine:_.combine,mapUv:Ae&&u(_.map.channel),aoMapUv:Te&&u(_.aoMap.channel),lightMapUv:Ie&&u(_.lightMap.channel),bumpMapUv:H&&u(_.bumpMap.channel),normalMapUv:Fe&&u(_.normalMap.channel),displacementMapUv:at&&u(_.displacementMap.channel),emissiveMapUv:it&&u(_.emissiveMap.channel),metalnessMapUv:We&&u(_.metalnessMap.channel),roughnessMapUv:mt&&u(_.roughnessMap.channel),anisotropyMapUv:Ge&&u(_.anisotropyMap.channel),clearcoatMapUv:C&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:W&&u(_.sheenRoughnessMap.channel),specularMapUv:j&&u(_.specularMap.channel),specularColorMapUv:he&&u(_.specularColorMap.channel),specularIntensityMapUv:L&&u(_.specularIntensityMap.channel),transmissionMapUv:Q&&u(_.transmissionMap.channel),thicknessMapUv:K&&u(_.thicknessMap.channel),alphaMapUv:le&&u(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Fe||St),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ae||le),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:Ae&&_.map.isVideoTexture===!0&&ht.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:it&&_.emissiveMap.isVideoTexture===!0&&ht.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xi,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function x(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)M.push(P),M.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(M,_),g(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let M=f[_.type],P;if(M){let A=Zi[M];P=$p.clone(A.uniforms)}else P=_.uniforms;return P}function S(_,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new FS(r,M,_,i),c.push(P),h.set(M,P)),P}function y(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function kS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function GS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _m(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,x,p,g){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:u,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},r[e]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=m,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=p,v.group=g),e++,v}function l(f,u,m,x,p,g,v){v.reversedDepth===!0&&(p=-p);let S=o(f,u,m,x,p,g);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):t.push(S)}function c(f,u,m,x,p,g){let v=o(f,u,m,x,p,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,u){t.length>1&&t.sort(f||GS),n.length>1&&n.sort(u||gm),i.length>1&&i.sort(u||gm)}function d(){for(let f=e,u=r.length;f<u;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function VS(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new _m,r.set(n,[a])):i>=s.length?(a=new _m,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function HS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new qe};break;case"SpotLight":t={position:new Z,direction:new Z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=t,t}}}function WS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var XS=0;function qS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function YS(r){let e=new HS,t=WS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new Mt,a=new Mt;function o(c){let h=0,d=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,m=0,x=0,p=0,g=0,v=0,S=0,y=0,T=0,E=0,_=0,M=0,P=0,A=0;c.sort(qS);for(let N=0,G=c.length;N<G;N++){let I=c[N],k=I.color,q=I.intensity,O=I.distance,X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Hr?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*q,d+=k.g*q,f+=k.b*q;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],q);A++}else if(I.isSunLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=X;let Se=R.getViewportCount();for(let ze=0;ze<Se;ze++)n.sunShadowMatrix[x+ze]=R.getMatrix(ze),n.sunShadowCascade[x+ze]=R._cascadeData[ze];x+=Se,m++}n.sun[u]=V,u++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize=R.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=V,p++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(k).multiplyScalar(q),V.distance=O,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[v]=V;let R=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,R.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=R.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize=R.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=X,_++}v++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(k).multiplyScalar(q),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[S]=V,S++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let R=I.shadow,ee=t.get(I);ee.shadowIntensity=R.intensity,ee.shadowBias=R.bias,ee.shadowNormalBias=R.normalBias,ee.shadowRadius=R.radius,ee.shadowMapSize=R.mapSize,ee.shadowCameraNear=R.camera.near,ee.shadowCameraFar=R.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=V,g++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(q),V.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=V,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==S||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==M||D.numLightProbes!==A)&&(n.sun.length=u,n.directional.length=p,n.spot.length=v,n.rectArea.length=S,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,D.sunLength=u,D.directionalLength=p,D.pointLength=g,D.spotLength=v,D.rectAreaLength=S,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=M,D.numLightProbes=A,n.version=XS++)}function l(c,h){let d=0,f=0,u=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let T=n.point[u];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function xm(r){let e=new YS(r),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ZS(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new xm(r),e.set(i,[o])):s>=a.length?(o=new xm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$S=`uniform sampler2D shadow_pass;
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
}`,KS=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],QS=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],vm=new Mt,Lo=new Z,df=new Z;function jS(r,e,t){let n=new Ur,i=new Ke,s=new Ke,a=new Dt,o=new ic,l=new rc,c={},h=t.maxTextureSize,d={[Vr]:gn,[gn]:Vr,[Xi]:Xi},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:JS,fragmentShader:$S}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new yi;m.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let g=this.type;this.render=function(E,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===fp&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mo);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ps),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=g!==this.type;G&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=E.length;I<k;I++){let q=E[I],O=q.shadow;if(O===void 0){He("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let X=O.getFrameExtents();i.multiply(X),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,O.mapSize.y=s.y));let V=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||G===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ha){if(q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ai(i.x,i.y,{format:Hr,type:Ui,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new fr(i.x,i.y,Mi),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=hr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else q.isPointLight?(O.map=new No(i.x),O.map.depthTexture=new uo(i.x,Ni)):(O.map=new ai(i.x,i.y),O.map.depthTexture=new fr(i.x,i.y,Ni)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=hr,this.type===Mo?(O.map.depthTexture.compareFunction=V?Zu:Yu,O.map.depthTexture.minFilter=Bn,O.map.depthTexture.magFilter=Bn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();q.isPointLight!==!0&&O.updateMatrices(q,M);let ee=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:M.layers;for(let Se=0;Se<R;Se++){let ze=O.getCamera(Se);if(q.isPointLight){let J=O.camera,ue=O.matrix,xe=q.distance||J.far;xe!==J.far&&(J.far=xe,J.updateProjectionMatrix()),Lo.setFromMatrixPosition(q.matrixWorld),J.position.copy(Lo),df.copy(J.position),df.add(KS[Se]),J.up.copy(QS[Se]),J.lookAt(df),J.updateMatrixWorld(),ue.makeTranslation(-Lo.x,-Lo.y,-Lo.z),vm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(vm,J.coordinateSystem,J.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(O.map),r.clear());let J=O.getViewport(Se);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),N.viewport(a)}n=O.getFrustum(Se),y(_,M,ze,q,ee,this.type)}O.isPointLightShadow!==!0&&this.type===ha&&v(O,M),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,A,D)};function v(E,_){let M=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new ai(i.x,i.y,{format:Hr,type:Ui}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(_,null,M,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(_,null,M,u,x,null)}function S(E,_,M,P){let A=null,D=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)A=D;else if(A=M.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=A.uuid,G=_.uuid,I=c[N];I===void 0&&(I={},c[N]=I);let k=I[G];k===void 0&&(k=A.clone(),I[G]=k,_.addEventListener("dispose",T)),A=k}if(A.visible=_.visible,A.wireframe=_.wireframe,P===ha?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let N=r.properties.get(A);N.light=M}return A}function y(E,_,M,P,A,D){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===ha)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let I=e.update(E),k=E.material;if(Array.isArray(k)){let q=I.groups;for(let O=0,X=q.length;O<X;O++){let V=q[O],R=k[V.materialIndex];if(R&&R.visible){let ee=S(E,R,P,D);E.onBeforeShadow(r,E,_,M,I,ee,V),r.renderBufferDirect(M,null,I,ee,E,V),E.onAfterShadow(r,E,_,M,I,ee,V)}}}else if(k.visible){let q=S(E,k,P,D);E.onBeforeShadow(r,E,_,M,I,q,null),r.renderBufferDirect(M,null,I,q,E,null),E.onAfterShadow(r,E,_,M,I,q,null)}}let G=E.children;for(let I=0,k=G.length;I<k;I++)y(G[I],_,M,P,A,D)}function T(E){E.target.removeEventListener("dispose",T);for(let M in c){let P=c[M],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function eM(r,e){function t(){let L=!1,Q=new Dt,K=null,de=new Dt(0,0,0,0);return{setMask:function(le){K!==le&&!L&&(r.colorMask(le,le,le,le),K=le)},setLocked:function(le){L=le},setClear:function(le,pe,oe,me,re){re===!0&&(le*=me,pe*=me,oe*=me),Q.set(le,pe,oe,me),de.equals(Q)===!1&&(r.clearColor(le,pe,oe,me),de.copy(Q))},reset:function(){L=!1,K=null,de.set(-1,0,0,0)}}}function n(){let L=!1,Q=!1,K=null,de=null,le=null;return{setReversed:function(pe){if(Q!==pe){let oe=e.get("EXT_clip_control");pe?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Q=pe;let me=le;le=null,this.setClear(me)}},getReversed:function(){return Q},setTest:function(pe){pe?ce(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(pe){K!==pe&&!L&&(r.depthMask(pe),K=pe)},setFunc:function(pe){if(Q&&(pe=qp[pe]),de!==pe){switch(pe){case Gl:r.depthFunc(r.NEVER);break;case Vl:r.depthFunc(r.ALWAYS);break;case Hl:r.depthFunc(r.LESS);break;case ea:r.depthFunc(r.LEQUAL);break;case Wl:r.depthFunc(r.EQUAL);break;case Xl:r.depthFunc(r.GEQUAL);break;case ql:r.depthFunc(r.GREATER);break;case Yl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}de=pe}},setLocked:function(pe){L=pe},setClear:function(pe){le!==pe&&(le=pe,Q&&(pe=1-pe),r.clearDepth(pe))},reset:function(){L=!1,K=null,de=null,le=null,Q=!1}}}function i(){let L=!1,Q=null,K=null,de=null,le=null,pe=null,oe=null,me=null,re=null;return{setTest:function(te){L||(te?ce(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(te){Q!==te&&!L&&(r.stencilMask(te),Q=te)},setFunc:function(te,_e,ne){(K!==te||de!==_e||le!==ne)&&(r.stencilFunc(te,_e,ne),K=te,de=_e,le=ne)},setOp:function(te,_e,ne){(pe!==te||oe!==_e||me!==ne)&&(r.stencilOp(te,_e,ne),pe=te,oe=_e,me=ne)},setLocked:function(te){L=te},setClear:function(te){re!==te&&(r.clearStencil(te),re=te)},reset:function(){L=!1,Q=null,K=null,de=null,le=null,pe=null,oe=null,me=null,re=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],x=null,p=!1,g=null,v=null,S=null,y=null,T=null,E=null,_=null,M=new qe(0,0,0),P=0,A=!1,D=null,N=null,G=null,I=null,k=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,X=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=X>=2);let R=null,ee={},Se=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),J=new Dt().fromArray(Se),ue=new Dt().fromArray(ze);function xe(L,Q,K,de){let le=new Uint8Array(4),pe=r.createTexture();r.bindTexture(L,pe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<K;oe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(Q+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return pe}let Me={};Me[r.TEXTURE_2D]=xe(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=xe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=xe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=xe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),a.setFunc(ea),H(!1),Fe(Cu),ce(r.CULL_FACE),Te(ps);function ce(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Ce(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function ft(L,Q){return f[L]!==Q?(r.bindFramebuffer(L,Q),f[L]=Q,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Q),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ae(L,Q){let K=m,de=!1;if(L){K=u.get(Q),K===void 0&&(K=[],u.set(Q,K));let le=L.textures;if(K.length!==le.length||K[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,oe=le.length;pe<oe;pe++)K[pe]=r.COLOR_ATTACHMENT0+pe;K.length=le.length,de=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,de=!0);de&&r.drawBuffers(K)}function Ve(L){return x!==L?(r.useProgram(L),x=L,!0):!1}let Re={[ms]:r.FUNC_ADD,[pp]:r.FUNC_SUBTRACT,[mp]:r.FUNC_REVERSE_SUBTRACT};Re[gp]=r.MIN,Re[_p]=r.MAX;let De={[xp]:r.ZERO,[vp]:r.ONE,[yp]:r.SRC_COLOR,[Lu]:r.SRC_ALPHA,[Ep]:r.SRC_ALPHA_SATURATE,[Tp]:r.DST_COLOR,[Mp]:r.DST_ALPHA,[Sp]:r.ONE_MINUS_SRC_COLOR,[Du]:r.ONE_MINUS_SRC_ALPHA,[wp]:r.ONE_MINUS_DST_COLOR,[bp]:r.ONE_MINUS_DST_ALPHA,[Ap]:r.CONSTANT_COLOR,[Cp]:r.ONE_MINUS_CONSTANT_COLOR,[Rp]:r.CONSTANT_ALPHA,[Pp]:r.ONE_MINUS_CONSTANT_ALPHA};function Te(L,Q,K,de,le,pe,oe,me,re,te){if(L===ps){p===!0&&(Ce(r.BLEND),p=!1);return}if(p===!1&&(ce(r.BLEND),p=!0),L!==dp){if(L!==g||te!==A){if((v!==ms||T!==ms)&&(r.blendEquation(r.FUNC_ADD),v=ms,T=ms),te)switch(L){case ua:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ru:r.blendFunc(r.ONE,r.ONE);break;case Pu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Iu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case ua:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ru:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Pu:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}S=null,y=null,E=null,_=null,M.set(0,0,0),P=0,g=L,A=te}return}le=le||Q,pe=pe||K,oe=oe||de,(Q!==v||le!==T)&&(r.blendEquationSeparate(Re[Q],Re[le]),v=Q,T=le),(K!==S||de!==y||pe!==E||oe!==_)&&(r.blendFuncSeparate(De[K],De[de],De[pe],De[oe]),S=K,y=de,E=pe,_=oe),(me.equals(M)===!1||re!==P)&&(r.blendColor(me.r,me.g,me.b,re),M.copy(me),P=re),g=L,A=!1}function Ie(L,Q){L.side===Xi?Ce(r.CULL_FACE):ce(r.CULL_FACE);let K=L.side===gn;Q&&(K=!K),H(K),L.blending===ua&&L.transparent===!1?Te(ps):Te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),it(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function H(L){D!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),D=L)}function Fe(L){L!==hp?(ce(r.CULL_FACE),L!==N&&(L===Cu?r.cullFace(r.BACK):L===up?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),N=L}function at(L){L!==G&&(O&&r.lineWidth(L),G=L)}function it(L,Q,K){L?(ce(r.POLYGON_OFFSET_FILL),(I!==Q||k!==K)&&(I=Q,k=K,a.getReversed()&&(Q=-Q,K=-K),r.polygonOffset(Q,K))):Ce(r.POLYGON_OFFSET_FILL)}function We(L){L?ce(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function mt(L){L===void 0&&(L=r.TEXTURE0+q-1),R!==L&&(r.activeTexture(L),R=L)}function St(L,Q,K){K===void 0&&(R===null?K=r.TEXTURE0+q-1:K=R);let de=ee[K];de===void 0&&(de={type:void 0,texture:void 0},ee[K]=de),(de.type!==L||de.texture!==Q)&&(R!==K&&(r.activeTexture(K),R=K),r.bindTexture(L,Q||Me[L]),de.type=L,de.texture=Q)}function F(){let L=ee[R];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function dt(){try{r.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function $e(){try{r.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ke(){try{r.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function se(){try{r.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ot(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Oe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Ge(){try{r.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function C(){try{r.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function b(){try{r.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function z(){try{r.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ae(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function ie(L,Q){d[L]!==Q&&(r.pixelStorei(L,Q),d[L]=Q)}function fe(L){J.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function ge(L){ue.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function W(L,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let de=K.get(L);de===void 0&&(de=r.getUniformBlockIndex(Q,L.name),r.uniformBlockBinding(Q,de,de),K.set(L,de))}function j(L,Q,K){let le=c.get(Q).get(L);l[le]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,le,K),l[le]=K)}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,ee={},f={},l={},u=new WeakMap,m=[],x=null,p=!1,g=null,v=null,S=null,y=null,T=null,E=null,_=null,M=new qe(0,0,0),P=0,A=!1,D=null,N=null,G=null,I=null,k=null,J.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Ce,bindFramebuffer:ft,drawBuffers:Ae,useProgram:Ve,setBlending:Te,setMaterial:Ie,setFlipSided:H,setCullFace:Fe,setLineWidth:at,setPolygonOffset:it,setScissorTest:We,activeTexture:mt,bindTexture:St,unbindTexture:F,compressedTexImage2D:dt,compressedTexImage3D:$e,texImage2D:b,texImage3D:z,pixelStorei:ie,getParameter:ae,updateUBOMapping:W,uniformBlockBinding:j,texStorage2D:Ge,texStorage3D:C,texSubImage2D:ke,texSubImage3D:se,compressedTexSubImage2D:ot,compressedTexSubImage3D:Oe,scissor:fe,viewport:ge,reset:he}}function tM(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,x=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):ja("canvas")}function v(C,b,z){let ae=1,ie=Ge(C);if((ie.width>z||ie.height>z)&&(ae=z/Math.max(ie.width,ie.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let fe=Math.floor(ae*ie.width),ge=Math.floor(ae*ie.height);f===void 0&&(f=g(fe,ge));let W=b?g(fe,ge):f;return W.width=fe,W.height=ge,W.getContext("2d").drawImage(C,0,0,fe,ge),He("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+fe+"x"+ge+")."),W}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function S(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(C,b,z,ae,ie,fe=!1){if(C!==null){if(r[C]!==void 0)return r[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;ae&&(ge=e.get("EXT_texture_norm16"),ge||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=b;if(b===r.RED&&(z===r.FLOAT&&(W=r.R32F),z===r.HALF_FLOAT&&(W=r.R16F),z===r.UNSIGNED_BYTE&&(W=r.R8),z===r.UNSIGNED_SHORT&&ge&&(W=ge.R16_EXT),z===r.SHORT&&ge&&(W=ge.R16_SNORM_EXT)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(W=r.R8UI),z===r.UNSIGNED_SHORT&&(W=r.R16UI),z===r.UNSIGNED_INT&&(W=r.R32UI),z===r.BYTE&&(W=r.R8I),z===r.SHORT&&(W=r.R16I),z===r.INT&&(W=r.R32I)),b===r.RG&&(z===r.FLOAT&&(W=r.RG32F),z===r.HALF_FLOAT&&(W=r.RG16F),z===r.UNSIGNED_BYTE&&(W=r.RG8),z===r.UNSIGNED_SHORT&&ge&&(W=ge.RG16_EXT),z===r.SHORT&&ge&&(W=ge.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(W=r.RG8UI),z===r.UNSIGNED_SHORT&&(W=r.RG16UI),z===r.UNSIGNED_INT&&(W=r.RG32UI),z===r.BYTE&&(W=r.RG8I),z===r.SHORT&&(W=r.RG16I),z===r.INT&&(W=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(W=r.RGB8UI),z===r.UNSIGNED_SHORT&&(W=r.RGB16UI),z===r.UNSIGNED_INT&&(W=r.RGB32UI),z===r.BYTE&&(W=r.RGB8I),z===r.SHORT&&(W=r.RGB16I),z===r.INT&&(W=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(W=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(W=r.RGBA16UI),z===r.UNSIGNED_INT&&(W=r.RGBA32UI),z===r.BYTE&&(W=r.RGBA8I),z===r.SHORT&&(W=r.RGBA16I),z===r.INT&&(W=r.RGBA32I)),b===r.RGB&&(z===r.UNSIGNED_SHORT&&ge&&(W=ge.RGB16_EXT),z===r.SHORT&&ge&&(W=ge.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(W=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(W=r.R11F_G11F_B10F)),b===r.RGBA){let j=fe?Qa:ht.getTransfer(ie);z===r.FLOAT&&(W=r.RGBA32F),z===r.HALF_FLOAT&&(W=r.RGBA16F),z===r.UNSIGNED_BYTE&&(W=j===xt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ge&&(W=ge.RGBA16_EXT),z===r.SHORT&&ge&&(W=ge.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(W=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(W=r.RGB5_A1)}return(W===r.R16F||W===r.R32F||W===r.RG16F||W===r.RG32F||W===r.RGBA16F||W===r.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function _(C,b){let z;return C?b===null||b===Ni||b===_s?z=r.DEPTH24_STENCIL8:b===Mi?z=r.DEPTH32F_STENCIL8:b===da&&(z=r.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ni||b===_s?z=r.DEPTH_COMPONENT24:b===Mi?z=r.DEPTH_COMPONENT32F:b===da&&(z=r.DEPTH_COMPONENT16),z}function M(C,b){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){let b=new WeakRef(C);n.get(C).__ref=b,m.add(b),x.register(C,b,b)}function A(C){let b=n.get(C).__ref;b!==void 0&&(m.delete(b),x.unregister(b))}function D(C){G(C.target)}function N(C){I(C.target)}function G(C){C.removeEventListener("dispose",D),A(C),q(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",N),A(C),X(C)}function k(){for(let C of m){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?I(b):G(b))}m.clear(),d.clear()}function q(C){let b=n.get(C);if(b.__webglInit===void 0)return;let z=C.source,ae=u.get(z);if(ae){let ie=ae[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&O(C),Object.keys(ae).length===0&&u.delete(z)}n.remove(C)}function O(C){let b=n.get(C);r.deleteTexture(b.__webglTexture);let z=C.source,ae=u.get(z);delete ae[b.__cacheKey],a.memory.textures--}function X(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let z=C.depthTexture;if(z&&z.renderTarget===C&&G(z),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let fe=0;fe<b.__webglFramebuffer[ie].length;fe++)r.deleteFramebuffer(b.__webglFramebuffer[ie][fe]);else r.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)r.deleteFramebuffer(b.__webglFramebuffer[ie]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ae=C.textures;for(let ie=0,fe=ae.length;ie<fe;ie++){let ge=n.get(ae[ie]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(ae[ie])}n.remove(C)}let V=0;function R(){V=0}function ee(){return V}function Se(C){V=C}function ze(){let C=V;return C>=i.maxTextures&&He("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,C}function J(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function ue(C,b){let z=n.get(C);if(C.isVideoTexture&&ot(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let ae=C.image;if(ae===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(z,C,b);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function xe(C,b){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Ie(z,C,b);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function Me(C,b){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Ie(z,C,b);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function ce(C,b){let z=n.get(C);if(C.version>0&&z.__version!==C.version){H(z,C,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}let Ce={[Zl]:r.REPEAT,[ki]:r.CLAMP_TO_EDGE,[Jl]:r.MIRRORED_REPEAT},ft={[un]:r.NEAREST,[Dp]:r.NEAREST_MIPMAP_NEAREST,[To]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[yc]:r.LINEAR_MIPMAP_NEAREST,[dr]:r.LINEAR_MIPMAP_LINEAR},Ae={[Op]:r.NEVER,[Ju]:r.ALWAYS,[Bp]:r.LESS,[Yu]:r.LEQUAL,[zp]:r.EQUAL,[Zu]:r.GEQUAL,[kp]:r.GREATER,[Gp]:r.NOTEQUAL};function Ve(C,b){if(b.type===Mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===yc||b.magFilter===To||b.magFilter===dr||b.minFilter===Bn||b.minFilter===yc||b.minFilter===To||b.minFilter===dr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Ce[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Ce[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Ce[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ft[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==To&&b.minFilter!==dr||b.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Re(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D),P(b));let ae=b.source,ie=u.get(ae);ie===void 0&&(ie={},u.set(ae,ie));let fe=J(b);if(fe!==C.__cacheKey){ie[fe]===void 0&&(ie[fe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[fe].usedTimes++;let ge=ie[C.__cacheKey];ge!==void 0&&(ie[C.__cacheKey].usedTimes--,ge.usedTimes===0&&O(b)),C.__cacheKey=fe,C.__webglTexture=ie[fe].texture}return z}function De(C,b,z){return Math.floor(Math.floor(C/z)/b)}function Te(C,b,z,ae){let fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,z,ae,b.data);else{fe.sort((L,Q)=>L.start-Q.start);let ge=0;for(let L=1;L<fe.length;L++){let Q=fe[ge],K=fe[L],de=Q.start+Q.count,le=De(K.start,b.width,4),pe=De(Q.start,b.width,4);K.start<=de+1&&le===pe&&De(K.start+K.count-1,b.width,4)===le?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++ge,fe[ge]=K)}fe.length=ge+1;let W=t.getParameter(r.UNPACK_ROW_LENGTH),j=t.getParameter(r.UNPACK_SKIP_PIXELS),he=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let L=0,Q=fe.length;L<Q;L++){let K=fe[L],de=Math.floor(K.start/4),le=Math.ceil(K.count/4),pe=de%b.width,oe=Math.floor(de/b.width),me=le,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(r.UNPACK_SKIP_ROWS,oe),t.texSubImage2D(r.TEXTURE_2D,0,pe,oe,me,re,z,ae,b.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,W),t.pixelStorei(r.UNPACK_SKIP_PIXELS,j),t.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function Ie(C,b,z){let ae=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=r.TEXTURE_3D);let ie=Re(C,b),fe=b.source;t.bindTexture(ae,C.__webglTexture,r.TEXTURE0+z);let ge=n.get(fe);if(fe.version!==ge.__version||ie===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let re=ht.getPrimaries(ht.workingColorSpace),te=b.colorSpace===mr?null:ht.getPrimaries(b.colorSpace),_e=b.colorSpace===mr||re===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let j=v(b.image,!1,i.maxTextureSize);j=Oe(b,j);let he=s.convert(b.format,b.colorSpace),L=s.convert(b.type),Q=E(b.internalFormat,he,L,b.normalized,b.colorSpace,b.isVideoTexture);Ve(ae,b);let K,de=b.mipmaps,le=b.isVideoTexture!==!0,pe=ge.__version===void 0||ie===!0,oe=fe.dataReady,me=M(b,j);if(b.isDepthTexture)Q=_(b.format===pr,b.type),pe&&(le?t.texStorage2D(r.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,Q,j.width,j.height,0,he,L,null));else if(b.isDataTexture)if(de.length>0){le&&pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,de[0].width,de[0].height);for(let re=0,te=de.length;re<te;re++)K=de[re],le?oe&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,he,L,K.data):t.texImage2D(r.TEXTURE_2D,re,Q,K.width,K.height,0,he,L,K.data);b.generateMipmaps=!1}else le?(pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,j.width,j.height),oe&&Te(b,j,he,L)):t.texImage2D(r.TEXTURE_2D,0,Q,j.width,j.height,0,he,L,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Q,de[0].width,de[0].height,j.depth);for(let re=0,te=de.length;re<te;re++)if(K=de[re],b.format!==Fi)if(he!==null)if(le){if(oe)if(b.layerUpdates.size>0){let _e=af(K.width,K.height,b.format,b.type);for(let ne of b.layerUpdates){let we=K.data.subarray(ne*_e/K.data.BYTES_PER_ELEMENT,(ne+1)*_e/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ne,K.width,K.height,1,he,we)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,he,K.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,j.depth,0,K.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,K.width,K.height,j.depth,he,L,K.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Q,K.width,K.height,j.depth,0,he,L,K.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{le&&pe&&t.texStorage2D(r.TEXTURE_2D,me,Q,de[0].width,de[0].height);for(let re=0,te=de.length;re<te;re++)K=de[re],b.format!==Fi?he!==null?le?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,he,K.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Q,K.width,K.height,0,K.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?oe&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,K.width,K.height,he,L,K.data):t.texImage2D(r.TEXTURE_2D,re,Q,K.width,K.height,0,he,L,K.data)}else if(b.isDataArrayTexture)if(le){if(pe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Q,j.width,j.height,j.depth),oe)if(b.layerUpdates.size>0){let re=af(j.width,j.height,b.format,b.type);for(let te of b.layerUpdates){let _e=j.data.subarray(te*re/j.data.BYTES_PER_ELEMENT,(te+1)*re/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,j.width,j.height,1,he,L,_e)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,he,L,j.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,he,L,j.data);else if(b.isData3DTexture)le?(pe&&t.texStorage3D(r.TEXTURE_3D,me,Q,j.width,j.height,j.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,he,L,j.data)):t.texImage3D(r.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,he,L,j.data);else if(b.isFramebufferTexture){if(pe)if(le)t.texStorage2D(r.TEXTURE_2D,me,Q,j.width,j.height);else{let re=j.width,te=j.height;for(let _e=0;_e<me;_e++)t.texImage2D(r.TEXTURE_2D,_e,Q,re,te,0,he,L,null),re>>=1,te>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),d.add(b),re.onpaint=te=>{let _e=te.changedElements;for(let ne of d)_e.includes(ne.image)&&(ne.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,j);else{let _e=r.RGBA,ne=r.RGBA,we=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_e,ne,we,j)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&pe){let re=Ge(de[0]);t.texStorage2D(r.TEXTURE_2D,me,Q,re.width,re.height)}for(let re=0,te=de.length;re<te;re++)K=de[re],le?oe&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,he,L,K):t.texImage2D(r.TEXTURE_2D,re,Q,he,L,K);b.generateMipmaps=!1}else if(le){if(pe){let re=Ge(j);t.texStorage2D(r.TEXTURE_2D,me,Q,re.width,re.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,L,j)}else t.texImage2D(r.TEXTURE_2D,0,Q,he,L,j);S(b)&&b.mipmapsAutoUpdate===!0&&y(ae),ge.__version=fe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function H(C,b,z){if(b.image.length!==6)return;let ae=Re(C,b),ie=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+z);let fe=n.get(ie);if(ie.version!==fe.__version||ae===!0){t.activeTexture(r.TEXTURE0+z);let ge=ht.getPrimaries(ht.workingColorSpace),W=b.colorSpace===mr?null:ht.getPrimaries(b.colorSpace),j=b.colorSpace===mr||ge===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let he=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!he&&!L?Q[ne]=v(b.image[ne],!0,i.maxCubemapSize):Q[ne]=L?b.image[ne].image:b.image[ne],Q[ne]=Oe(b,Q[ne]);let K=Q[0],de=s.convert(b.format,b.colorSpace),le=s.convert(b.type),pe=E(b.internalFormat,de,le,b.normalized,b.colorSpace),oe=b.isVideoTexture!==!0,me=fe.__version===void 0||ae===!0,re=ie.dataReady,te=M(b,K);Ve(r.TEXTURE_CUBE_MAP,b);let _e;if(b.isDepthTexture){if(pe=_(b.format===pr,b.type),me)if(oe)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,pe,K.width,K.height);else for(let ne=0;ne<6;ne++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,K.width,K.height,0,de,le,null)}else if(he){oe&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,te,pe,K.width,K.height);for(let ne=0;ne<6;ne++){_e=Q[ne].mipmaps;for(let we=0;we<_e.length;we++){let rt=_e[we];b.format!==Fi?de!==null?oe?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,rt.width,rt.height,de,rt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,pe,rt.width,rt.height,0,rt.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,rt.width,rt.height,de,le,rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,pe,rt.width,rt.height,0,de,le,rt.data)}}}else{if(_e=b.mipmaps,oe&&me){_e.length>0&&te++;let ne=Ge(Q[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,te,pe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(L){oe?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,de,le,Q[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,Q[ne].width,Q[ne].height,0,de,le,Q[ne].data);for(let we=0;we<_e.length;we++){let Ze=_e[we].image[ne].image;oe?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,Ze.width,Ze.height,de,le,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,pe,Ze.width,Ze.height,0,de,le,Ze.data)}}else{oe?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de,le,Q[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,pe,de,le,Q[ne]);for(let we=0;we<_e.length;we++){let rt=_e[we];oe?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,de,le,rt.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,pe,de,le,rt.image[ne])}}}S(b)&&b.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),fe.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Fe(C,b,z,ae,ie,fe){let ge=s.convert(z.format,z.colorSpace),W=s.convert(z.type),j=E(z.internalFormat,ge,W,z.normalized,z.colorSpace),he=n.get(b),L=n.get(z);if(L.__renderTarget=b,!he.__hasExternalTextures){let Q=Math.max(1,b.width>>fe),K=Math.max(1,b.height>>fe);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,fe,j,Q,K,b.depth,0,ge,W,null):t.texImage2D(ie,fe,j,Q,K,0,ge,W,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),se(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ie,L.__webglTexture,0,ke(b)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,ie,L.__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(C,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){let ae=b.depthTexture,ie=ae&&ae.isDepthTexture?ae.type:null,fe=_(b.stencilBuffer,ie),ge=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;se(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(b),fe,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(b),fe,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,fe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,C)}else{let ae=b.textures;for(let ie=0;ie<ae.length;ie++){let fe=ae[ie],ge=s.convert(fe.format,fe.colorSpace),W=s.convert(fe.type),j=E(fe.internalFormat,ge,W,fe.normalized,fe.colorSpace);se(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(b),j,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(b),j,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,j,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function it(C,b,z){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(b.depthTexture);ie.__renderTarget=b;let fe=ae?b.depthTexture.image[0]:b.depthTexture.image;(!ie.__webglTexture||fe.width!==b.width||fe.height!==b.height)&&(fe.width=b.width,fe.height=b.height,b.depthTexture.needsUpdate=!0),ae?ce(b.depthTexture,0):ue(b.depthTexture,0);let ge=ie.__webglTexture,W=ke(b),j=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,he=b.depthTexture.format===pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===hr)se(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,j,ge,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,he,j,ge,0);else if(b.depthTexture.format===pr)se(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,j,ge,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,he,j,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(C){let b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let ae=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ie)};ae.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=ae}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let ae=0;ae<6;ae++)it(b.__webglFramebuffer[ae],C,ae);else C.texture.mipmaps.length>0?it(b.__webglFramebuffer[0],C,0):it(b.__webglFramebuffer,C,0);else if(z){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=r.createRenderbuffer(),at(b.__webglDepthbuffer[ae],C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,fe)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),at(b.__webglDepthbuffer,C,!1);else{let ie=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,fe)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function mt(C,b,z){let ae=n.get(C);b!==void 0&&Fe(ae.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&We(C)}function St(C){let b=C.texture,z=n.get(C),ae=n.get(b);C.addEventListener("dispose",N),P(C);let ie=C.textures,fe=C.isWebGLCubeRenderTarget===!0,ge=ie.length>1;if(ge||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=b.version,a.memory.textures++),fe){z.__webglFramebuffer=[];for(let W=0;W<6;W++)if(b.mipmaps.length>0){z.__webglFramebuffer[W]=[];for(let j=0;j<b.mipmaps.length;j++)z.__webglFramebuffer[W][j]=r.createFramebuffer()}else z.__webglFramebuffer[W]=r.createFramebuffer()}else{if(b.mipmaps.length>0){z.__webglFramebuffer=[];for(let W=0;W<b.mipmaps.length;W++)z.__webglFramebuffer[W]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ge)for(let W=0,j=ie.length;W<j;W++){let he=n.get(ie[W]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&se(C)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let W=0;W<ie.length;W++){let j=ie[W];z.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[W]);let he=s.convert(j.format,j.colorSpace),L=s.convert(j.type),Q=E(j.internalFormat,he,L,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),K=ke(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,Q,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,z.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),at(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Ve(r.TEXTURE_CUBE_MAP,b);for(let W=0;W<6;W++)if(b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Fe(z.__webglFramebuffer[W][j],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else Fe(z.__webglFramebuffer[W],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);S(b)?y(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let W=0,j=ie.length;W<j;W++){let he=ie[W],L=n.get(he),Q=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,L.__webglTexture),Ve(Q,he),Fe(z.__webglFramebuffer,C,he,r.COLOR_ATTACHMENT0+W,Q,0),S(he)&&y(Q)}t.unbindTexture()}else{let W=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(W=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(W,ae.__webglTexture),Ve(W,b),b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Fe(z.__webglFramebuffer[j],C,b,r.COLOR_ATTACHMENT0,W,j);else Fe(z.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,W,0);S(b)?y(W):b.mipmaps.length>0&&r.texParameteri(W,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&We(C)}function F(C){let b=C.textures;for(let z=0,ae=b.length;z<ae;z++){let ie=b[z];if(S(ie)&&ie.mipmapsAutoUpdate===!0){let fe=T(C),ge=n.get(ie).__webglTexture;t.bindTexture(fe,ge),y(fe),t.unbindTexture()}}}let dt=[];function $e(C){if(C.samples>0){if(se(C)===!1){let b=C.textures,z=C.width,ae=C.height,ie=r.COLOR_BUFFER_BIT,fe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(C),W=b.length>1;if(W)for(let he=0;he<b.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<b.length;he++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),W){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);let L=n.get(b[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,z,ae,0,0,z,ae,ie,r.NEAREST),l===!0&&(dt.length=0,dt.push(r.COLOR_ATTACHMENT0+he),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&dt.push(fe),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let he=0;he<b.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);let L=n.get(b[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,L,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ke(C){return Math.min(i.maxSamples,C.samples)}function se(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ot(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Oe(C,b){let z=C.colorSpace,ae=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ka&&z!==mr&&(ht.getTransfer(z)===xt?(ae!==Fi||ie!==Zn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",z)),b}function Ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=R,this.getTextureUnits=ee,this.setTextureUnits=Se,this.setTexture2D=ue,this.setTexture2DArray=xe,this.setTexture3D=Me,this.setTextureCube=ce,this.rebindTextures=mt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=se,this.dispose=k}function nM(r,e){function t(n,i=mr){let s,a=ht.getTransfer(i);if(n===Zn)return r.UNSIGNED_BYTE;if(n===Mc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gu)return r.BYTE;if(n===Vu)return r.SHORT;if(n===da)return r.UNSIGNED_SHORT;if(n===Sc)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===Ui)return r.HALF_FLOAT;if(n===Xu)return r.ALPHA;if(n===qu)return r.RGB;if(n===Fi)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===Tc)return r.RED;if(n===wc)return r.RED_INTEGER;if(n===Hr)return r.RG;if(n===Ec)return r.RG_INTEGER;if(n===Ac)return r.RGBA_INTEGER;if(n===wo||n===Eo||n===Ao||n===Co)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Rc||n===Pc||n===Ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Ro||n===Oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Lc||n===Dc)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return s.COMPRESSED_R11_EAC;if(n===Fc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return s.COMPRESSED_RG11_EAC;if(n===Oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===zc||n===kc||n===Gc||n===Vc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Jc||n===$c||n===Kc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Bc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===jc||n===eh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qc)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===nh||n===Po||n===ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===th)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rM=`
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

}`,yf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Si({vertexShader:iM,fragmentShader:rM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sf=class extends Gi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,x=typeof XRWebGLBinding<"u",p=new yf,g={},v=t.getContextAttributes(),S=null,y=null,T=[],E=[],_=new Ke,M=null,P=null,A=new En;A.viewport=new Dt;let D=new En;D.viewport=new Dt;let N=[A,D],G=new mc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=T[J];return ue===void 0&&(ue=new sa,T[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=T[J];return ue===void 0&&(ue=new sa,T[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=T[J];return ue===void 0&&(ue=new sa,T[J]=ue),ue.getHandSpace()};function q(J){let ue=E.indexOf(J.inputSource);if(ue===-1)return;let xe=T[ue];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",X);for(let J=0;J<T.length;J++){let ue=E[J];ue!==null&&(E[J]=null,T[J].disconnect(ue))}I=null,k=null,p.reset();for(let J in g)delete g[J];if(e.setRenderTarget(S),u=null,f=null,d=null,i=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),P!==null){let J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",O),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Me=null,ce=null;v.depth&&(ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?pr:hr,Me=v.stencil?_s:Ni);let Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ai(f.textureWidth,f.textureHeight,{format:Fi,type:Zn,depthTexture:new fr(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ai(u.framebufferWidth,u.framebufferHeight,{format:Fi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(J){for(let ue=0;ue<J.removed.length;ue++){let xe=J.removed[ue],Me=E.indexOf(xe);Me>=0&&(E[Me]=null,T[Me].disconnect(xe))}for(let ue=0;ue<J.added.length;ue++){let xe=J.added[ue],Me=E.indexOf(xe);if(Me===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=E.length){E.push(xe),Me=Ce;break}else if(E[Ce]===null){E[Ce]=xe,Me=Ce;break}if(Me===-1)break}let ce=T[Me];ce&&ce.connect(xe)}}function V(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ue=J.near,xe=J.far;p.texture!==null&&(p.depthNear>0&&(ue=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),G.near=D.near=A.near=ue,G.far=D.far=A.far=xe,(I!==G.near||k!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,k=G.far),G.layers.mask=J.layers.mask|6,A.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Me=J.parent,ce=G.cameras;V(G,Me);for(let Ce=0;Ce<ce.length;Ce++)V(ce[Ce],Me);G.projectionMatrix.copy(A.projectionMatrix),G.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),R(J,G,Me)};function R(J,ue,xe){xe===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ia*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(J){return g[J]};let ee=null;function Se(J,ue){if(h=ue.getViewerPose(c||a),m=ue,h!==null){let xe=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Me=!1;xe.length!==G.cameras.length&&(G.cameras.length=0,Me=!0);for(let Ae=0;Ae<xe.length;Ae++){let Ve=xe[Ae],Re=null;if(u!==null)Re=u.getViewport(Ve);else{let Te=d.getViewSubImage(f,Ve);Re=Te.viewport,Ae===0&&(e.setRenderTargetTextures(y,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(y))}let De=N[Ae];De===void 0&&(De=new En,De.layers.enable(Ae),De.viewport=new Dt,N[Ae]=De),De.matrix.fromArray(Ve.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ve.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Re.x,Re.y,Re.width,Re.height),Ae===0&&(G.matrix.copy(De.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Me===!0&&G.cameras.push(De)}let ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ae=d.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&p.init(Ae,i.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ae=0;Ae<xe.length;Ae++){let Ve=xe[Ae].camera;if(Ve){let Re=g[Ve];Re||(Re=new fo,g[Ve]=Re);let De=d.getCameraImage(Ve);Re.sourceTexture=De}}}}for(let xe=0;xe<T.length;xe++){let Me=E[xe],ce=T[xe];Me!==null&&ce!==void 0&&ce.update(Me,ue,c||a)}ee&&ee(J,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),m=null}let ze=new ym;ze.setAnimationLoop(Se),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}},sM=new Mt,Pm=new Ye;Pm.set(-1,0,0,0,1,0,0,0,1);function aM(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,nf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,S,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&u(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),S=v.envMap,y=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Pm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=S*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function u(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oM(r,e,t,n){let i={},s={};function a(v,S){let y=S.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,S){let y=i[v.id];y===void 0&&(m(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let T=S.program;n.updateUBOMapping(v,T);let E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let S=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),S}function c(v){let S=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let E=0,_=y.length;E<_;E++){let M=y[E];if(Array.isArray(M))for(let P=0,A=M.length;P<A;P++)h(M[P],E,P,T);else h(M,E,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,S,y,T){if(f(v,S,y,T)===!0){let E=v.__offset,_=v.value;if(Array.isArray(_)){let M=0;for(let P=0;P<_.length;P++){let A=_[P],D=x(A,!0);d(A,v.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function f(v,S,y,T){let E=v.value,_=S+"_"+y;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let M=T[_],P=!1;for(let A=0;A<E.length;A++)u(E[A],M,A)===!0&&(P=!0);return P}return u(E,T,_)}function u(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{let T=S[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(v){let S=v.uniforms,y=0,T=16;for(let _=0,M=S.length;_<M;_++){let P=Array.isArray(S[_])?S[_]:[S[_]];for(let A=0,D=P.length;A<D;A++){let N=P[A],G=Array.isArray(N.value)?N.value:[N.value],I=Array.isArray(S[_])||Array.isArray(N.value),k=y;for(let O=0,X=G.length;O<X;O++){let V=G[O],R=x(V,I),ee=y%T,Se=ee%R.boundary,ze=ee+Se;y+=Se,ze!==0&&T-ze<R.storage&&(y+=T-ze),O===0&&(k=y),y+=R.storage}let q=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new q((y-k)/Float32Array.BYTES_PER_ELEMENT),N.__offset=k}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function x(v,S){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let S=v.target;S.removeEventListener("dispose",p),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}var lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function cM(){return Yi===null&&(Yi=new so(lM,16,16,Hr,Ui),Yi.name="DFG_LUT",Yi.minFilter=Bn,Yi.magFilter=Bn,Yi.wrapS=ki,Yi.wrapT=ki,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var ah=class{constructor(e={}){let{canvas:t=Hp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Zn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=u,p=new Set([Ac,Ec,wc]),g=new Set([Zn,Ni,da,_s,Mc,bc]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,N=null,G=null,I=null,k=null;this._outputColorSpace=Fn;let q=0,O=0,X=null,V=-1,R=null,ee=new Dt,Se=new Dt,ze=null,J=new qe(0),ue=0,xe=t.width,Me=t.height,ce=1,Ce=null,ft=null,Ae=new Dt(0,0,xe,Me),Ve=new Dt(0,0,xe,Me),Re=!1,De=new Ur,Te=new ec,Ie=!1,H=!1,Fe=new Mt,at=new Z,it=new Dt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function St(){return X===null?ce:1}let F=n;function dt(w,U){return t.getContext(w,U)}let $e,ke,se,ot,Oe,Ge,C,b,z,ae,ie,fe,ge,W,j,he,L,Q,K,de,le,pe,oe;try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),F===null){let U="webgl2";if(F=dt(U,w),F===null)throw dt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}me()}catch(w){throw t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Xe("WebGLRenderer: "+w.message),w}function me(){$e=new yy(F),$e.init(),le=new nM(F,$e),ke=new cy(F,$e,e,le),se=new eM(F,$e),ke.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),G=F.createFramebuffer(),I=F.createFramebuffer(),k=F.createFramebuffer(),ot=new by(F),Oe=new kS,Ge=new tM(F,$e,se,Oe,ke,le,ot),C=new vy(A),b=new w_(F),pe=new oy(F,b),z=new Sy(F,b,ot,pe),ae=new wy(F,z,b,pe,ot),Q=new Ty(F,ke,Ge),j=new hy(Oe),ie=new zS(A,C,$e,ke,pe,j),fe=new aM(A,Oe),ge=new VS,W=new ZS($e),L=new ay(A,C,se,ae,m,l),he=new jS(A,ae,ke),oe=new oM(F,ot,ke,se),K=new ly(F,$e,ot),de=new My(F,$e,ot),ot.programs=ie.programs,A.capabilities=ke,A.extensions=$e,A.properties=Oe,A.renderLists=ge,A.shadowMap=he,A.state=se,A.info=ot}x!==Zn&&(P=new Ay(x,t.width,t.height,o,i,s));let re=new Sf(A,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=$e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(w){w!==void 0&&(ce=w,this.setSize(xe,Me,!1))},this.getSize=function(w){return w.set(xe,Me)},this.setSize=function(w,U,$=!0){if(re.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=w,Me=U,t.width=Math.floor(w*ce),t.height=Math.floor(U*ce),$===!0&&(t.style.width=w+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(xe*ce,Me*ce).floor()},this.setDrawingBufferSize=function(w,U,$){xe=w,Me=U,ce=$,t.width=Math.floor(w*$),t.height=Math.floor(U*$),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(x===Zn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ee)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,U,$,B){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,U,$,B),se.viewport(ee.copy(Ae).multiplyScalar(St()).round())},this.getScissor=function(w){return w.copy(Ve)},this.setScissor=function(w,U,$,B){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,U,$,B),se.scissor(Se.copy(Ve).multiplyScalar(St()).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){se.setScissorTest(Re=w)},this.setOpaqueSort=function(w){Ce=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,$=!0){let B=0;if(w){let Y=!1;if(X!==null){let ye=X.texture.format;Y=p.has(ye)}if(Y){let ye=X.texture.type,Le=g.has(ye),ve=L.getClearColor(),Ee=L.getClearAlpha(),Be=ve.r,Je=ve.g,lt=ve.b;Le?(v[0]=Be,v[1]=Je,v[2]=lt,v[3]=Ee,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=Be,S[1]=Je,S[2]=lt,S[3]=Ee,F.clearBufferiv(F.COLOR,0,S))}else B|=F.COLOR_BUFFER_BIT}U&&(B|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),L.dispose(),ge.dispose(),W.dispose(),Ge.dispose(),Oe.dispose(),C.dispose(),ae.dispose(),z.dispose(),pe.dispose(),oe.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",Tt),re.removeEventListener("sessionend",_t),tn.stop()};function te(w){w.preventDefault(),Ku("WebGLRenderer: Context Lost."),D=!0}function _e(){Ku("WebGLRenderer: Context Restored."),D=!1;let w=ot.autoReset,U=he.enabled,$=he.autoUpdate,B=he.needsUpdate,Y=he.type;me(),ot.autoReset=w,he.enabled=U,he.autoUpdate=$,he.needsUpdate=B,he.type=Y}function ne(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function we(w){let U=w.target;U.removeEventListener("dispose",we),rt(U)}function rt(w){Ze(w),Oe.remove(w)}function Ze(w){let U=Oe.get(w).programs;U!==void 0&&(U.forEach(function($){ie.releaseProgram($)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,$,B,Y,ye){U===null&&(U=We);let Le=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ve=gi(w,U,$,B,Y);se.setMaterial(B,Le);let Ee=$.index,Be=1;if(B.wireframe===!0){if(Ee=z.getWireframeAttribute($),Ee===void 0)return;Be=2}let Je=$.drawRange,lt=$.attributes.position,Ne=Je.start*Be,ct=(Je.start+Je.count)*Be;ye!==null&&(Ne=Math.max(Ne,ye.start*Be),ct=Math.min(ct,(ye.start+ye.count)*Be)),Ee!==null?(Ne=Math.max(Ne,0),ct=Math.min(ct,Ee.count)):lt!=null&&(Ne=Math.max(Ne,0),ct=Math.min(ct,lt.count));let $t=ct-Ne;if($t<0||$t===1/0)return;pe.setup(Y,B,ve,$,Ee);let Ct,Et=K;if(Ee!==null&&(Ct=b.get(Ee),Et=de,Et.setIndex(Ct)),Y.isMesh)B.wireframe===!0?(se.setLineWidth(B.wireframeLinewidth*St()),Et.setMode(F.LINES)):Et.setMode(F.TRIANGLES);else if(Y.isLine){let Mn=B.linewidth;Mn===void 0&&(Mn=1),se.setLineWidth(Mn*St()),Y.isLineSegments?Et.setMode(F.LINES):Y.isLineLoop?Et.setMode(F.LINE_LOOP):Et.setMode(F.LINE_STRIP)}else Y.isPoints?Et.setMode(F.POINTS):Y.isSprite&&Et.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Mn=Y._multiDrawStarts,Ue=Y._multiDrawCounts,Un=Y._multiDrawCount,gt=Ee?b.get(Ee).bytesPerElement:1,is=Oe.get(B).currentProgram.getUniforms();for(let bn=0;bn<Un;bn++)is.setValue(F,"_gl_DrawID",bn),Et.render(Mn[bn]/gt,Ue[bn])}else if(Y.isInstancedMesh)Et.renderInstances(Ne,$t,Y.count);else if($.isInstancedBufferGeometry){let Mn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ue=Math.min($.instanceCount,Mn);Et.renderInstances(Ne,$t,Ue)}else Et.render(Ne,$t)};function It(w,U,$,B){N!==null&&w.isNodeMaterial&&N.setObject(B,w),Ie===!0&&j.setState(w,$,!1),w.transparent===!0&&w.side===Xi&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,ni(w,U,B),w.side=Vr,w.needsUpdate=!0,ni(w,U,B),w.side=Xi):ni(w,U,B)}this.compile=function(w,U,$=null){$===null&&($=w),N!==null&&N.renderStart(w,U,$),E=W.get($),E.init(U),M.push(E),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),H=this.localClippingEnabled,Ie=j.init(this.clippingPlanes,H),Ie===!0&&j.setGlobalState(this.clippingPlanes,U),N!==null&&he.render(E.state.shadowsArray,$,U);let B=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ye=Y.material;if(ye)if(Array.isArray(ye))for(let Le=0;Le<ye.length;Le++){let ve=ye[Le];It(ve,$,U,Y),B.add(ve)}else It(ye,$,U,Y),B.add(ye)}),E=M.pop(),N!==null&&N.renderEnd(),B},this.compileAsync=function(w,U,$=null){let B=this.compile(w,U,$);return new Promise(Y=>{function ye(){if(B.forEach(function(Le){let Ee=Oe.get(Le).currentProgram;(Ee===void 0||Ee.isReady())&&B.delete(Le)}),B.size===0){Y(w);return}setTimeout(ye,10)}$e.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Zt=null;function Lt(w){Zt&&Zt(w)}function Tt(){tn.stop()}function _t(){tn.start()}let tn=new ym;tn.setAnimationLoop(Lt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(w){Zt=w,re.setAnimationLoop(w),w===null?tn.stop():tn.start()},re.addEventListener("sessionstart",Tt),re.addEventListener("sessionend",_t),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(w,U);let $=re.enabled===!0&&re.isPresenting===!0,B=P!==null&&(X===null||$)&&P.begin(A,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,U,X),E=W.get(w,M.length),E.init(U),E.state.textureUnits=Ge.getTextureUnits(),M.push(E),Fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Te.setFromArrayCamera(U):De.setFromProjectionMatrix(Fe,xi,U.reversedDepth),H=this.localClippingEnabled,Ie=j.init(this.clippingPlanes,H),T=ge.get(w,_.length),T.init(),_.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Le=A.xr.getDepthSensingMesh();Le!==null&&wt(Le,U,-1/0,A.sortObjects)}wt(w,U,0,A.sortObjects),T.finish(),N!==null&&N.updateLights(E.state.lightsArray),A.sortObjects===!0&&T.sort(Ce,ft),mt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,mt&&L.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),Ie===!0&&j.beginShadows();let Y=E.state.shadowsArray;if(he.render(Y,w,U),Ie===!0&&j.endShadows(),(B&&P.hasRenderPass())===!1){let Le=T.opaque,ve=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(ve.length>0)for(let Be=0,Je=Ee.length;Be<Je;Be++){let lt=Ee[Be];ti(Le,ve,w,lt)}mt&&L.render(w);for(let Be=0,Je=Ee.length;Be<Je;Be++){let lt=Ee[Be];Sn(T,w,lt,lt.viewport)}}else ve.length>0&&ti(Le,ve,w,U),mt&&L.render(w),Sn(T,w,U)}X!==null&&O===0&&(Ge.updateMultisampleRenderTarget(X),Ge.updateRenderTargetMipmap(X)),B&&P.end(A),w.isScene===!0&&w.onAfterRender(A,w,U),pe.resetDefaultState(),V=-1,R=null,M.pop(),M.length>0?(E=M[M.length-1],Ge.setTextureUnits(E.state.textureUnits),Ie===!0&&j.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,N!==null&&N.renderEnd()};function wt(w,U,$,B){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Le=U.isArrayCamera?Te:De;if(!w.frustumCulled||w.intersectsFrustum(Le)){B&&it.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Fe);let ve=ae.update(w),Ee=w.material;Ee.visible&&T.push(w,ve,Ee,$,it.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let Le=U.isArrayCamera?Te:De;if(!w.frustumCulled||w.intersectsFrustum(Le)){let ve=ae.update(w),Ee=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),it.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),it.copy(ve.boundingSphere.center)),it.applyMatrix4(w.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ee)){let Be=ve.groups;for(let Je=0,lt=Be.length;Je<lt;Je++){let Ne=Be[Je],ct=Ee[Ne.materialIndex];ct&&ct.visible&&T.push(w,ve,ct,$,it.z,Ne,U)}}else Ee.visible&&T.push(w,ve,Ee,$,it.z,null,U)}}}let ye=w.children;for(let Le=0,ve=ye.length;Le<ve;Le++)wt(ye[Le],U,$,B)}function Sn(w,U,$,B){let{opaque:Y,transmissive:ye,transparent:Le}=w;E.setupLightsView($),Ie===!0&&j.setGlobalState(A.clippingPlanes,$),B&&se.viewport(ee.copy(B)),Y.length>0&&Gt(Y,U,$),ye.length>0&&Gt(ye,U,$),Le.length>0&&Gt(Le,U,$),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function ti(w,U,$,B){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Ne=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new ai(1,1,{generateMipmaps:!0,type:Ne?Ui:Zn,minFilter:dr,samples:Math.max(4,ke.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}let ye=E.state.transmissionRenderTarget[B.id],Le=B.viewport||ee;ye.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);let ve=A.getRenderTarget(),Ee=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(ye),A.getClearColor(J),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),mt&&L.render($);let Je=A.toneMapping;A.toneMapping=qi;let lt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),Ie===!0&&j.setGlobalState(A.clippingPlanes,B),Gt(w,$,B),Ge.updateMultisampleRenderTarget(ye),Ge.updateRenderTargetMipmap(ye),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ct=0,$t=U.length;ct<$t;ct++){let Ct=U[ct],{object:Et,geometry:Mn,material:Ue,group:Un}=Ct;if(Ue.side===Xi&&Et.layers.test(B.layers)){let gt=Ue.side;Ue.side=gn,Ue.needsUpdate=!0,Jt(Et,$,B,Mn,Ue,Un),Ue.side=gt,Ue.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ge.updateMultisampleRenderTarget(ye),Ge.updateRenderTargetMipmap(ye))}A.setRenderTarget(ve,Ee,Be),A.setClearColor(J,ue),lt!==void 0&&(B.viewport=lt),A.toneMapping=Je}function Gt(w,U,$){let B=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,ye=w.length;Y<ye;Y++){let Le=w[Y],{object:ve,geometry:Ee,group:Be}=Le,Je=Le.material;Je.allowOverride===!0&&B!==null&&(Je=B),ve.layers.test($.layers)&&Jt(ve,U,$,Ee,Je,Be)}}function Jt(w,U,$,B,Y,ye){N!==null&&Y.isNodeMaterial&&N.setObject(w,Y),w.onBeforeRender(A,U,$,B,Y,ye),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(A,U,$,B,w,ye),Y.transparent===!0&&Y.side===Xi&&Y.forceSinglePass===!1?(Y.side=gn,Y.needsUpdate=!0,A.renderBufferDirect($,U,B,Y,w,ye),Y.side=Vr,Y.needsUpdate=!0,A.renderBufferDirect($,U,B,Y,w,ye),Y.side=Xi):A.renderBufferDirect($,U,B,Y,w,ye),w.onAfterRender(A,U,$,B,Y,ye)}function nn(w){let U=0;for(let $ of w)$.texture!==null&&U++;return U}function ni(w,U,$){U.isScene!==!0&&(U=We);let B=Oe.get(w),Y=E.state.lights,ye=E.state.shadowsArray,Le=Y.state.version,ve=ie.getParameters(w,Y.state,ye,U,$,E.state.lightProbeGridArray),Ee=ie.getProgramCacheKey(ve),Be=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=C.get(w.envMap||B.environment,Je),B.envMapRotation=B.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",we),Be=new Map,B.programs=Be,B.programVariants=new Map);let lt=Be.get(Ee);if(lt!==void 0){if(B.currentProgram===lt&&B.lightsStateVersion===Le)return Vt(w,ve),lt}else ve.uniforms=ie.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,$,ve),w.onBeforeCompile(ve,A),lt=ie.acquireProgram(ve,Ee),Be.set(Ee,lt),B.uniforms=ve.uniforms;let Ne=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ne.clippingPlanes=j.uniform),Vt(w,ve),B.needsLights=pl(w),B.lightsStateVersion=Le,B.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.sunLights.value=Y.state.sun,Ne.sunLightShadows.value=Y.state.sunShadow,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ne.sunShadowCascade.value=Y.state.sunShadowCascade,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix),B.numLightProbeGrids=nn(E.state.lightProbeGridArray),B.currentProgram=lt,B.uniformsList=null,lt}function Bs(w,U,$,B,Y){let ye=Oe.get(w),Le=ye.currentProgram.id+","+B+","+Y,ve=ye.programVariants.get(Le);return ve===void 0?(ve=ni(w,U,$),ye.programVariants.set(Le,ve)):(ye.currentProgram=ve,ye.uniformsList=null,ye.outputColorSpace=B,ye.toneMapping=Y),ve}function rn(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=ma.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Vt(w,U){let $=Oe.get(w);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function gi(w,U,$,B,Y){U.isScene!==!0&&(U=We),Ge.resetTextureUnits();let ye=U.fog,Le=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ve=X===null?A.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ht.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Be=C.get(B.envMap||Le,Ee),Je=B.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ne=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,$t=!!$.morphAttributes.color,Ct=qi;B.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ct=A.toneMapping);let Et=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Mn=Et!==void 0?Et.length:0,Ue=Oe.get(B),Un=E.state.lights;if(Ie===!0&&(H===!0||w!==R)){let Ft=w===R&&B.id===V;j.setState(B,w,Ft)}let gt=!1,is=!1;B.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==Un.state.version||Y.isBatchedMesh&&Ue.batching===!1||!Y.isBatchedMesh&&Ue.batching===!0||Y.isBatchedMesh&&Ue.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ue.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Y.isInstancedMesh&&Ue.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ue.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ue.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ue.instancingMorph===!1&&Y.morphTexture!==null||Ue.envMap!==Be||B.fog===!0&&Ue.fog!==ye||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==j.numPlanes||Ue.numIntersection!==j.numIntersection)||Ue.vertexAlphas!==Je||Ue.vertexTangents!==lt||Ue.morphTargets!==Ne||Ue.morphNormals!==ct||Ue.morphColors!==$t||Ue.morphTargetsCount!==Mn||Ue.numLightProbeGrids!==nn(E.state.lightProbeGridArray)?gt=!0:(Ue.outputColorSpace!==ve||Ue.toneMapping!==Ct)&&(is=!0):(gt=!0,Ue.__version=B.version);let bn=Ue.currentProgram;(gt===!0||is===!0)&&(bn=is===!0?Bs(B,U,Y,ve,Ct):ni(B,U,Y),N&&B.isNodeMaterial&&N.onUpdateProgram(B,bn,Ue));let ml=!1,Cr=!1,rs=!1,pt=bn.getUniforms(),mn=Ue.uniforms;if(se.useProgram(bn.program)&&(ml=!0,Cr=!0,rs=!0),B.id!==V&&(V=B.id,Cr=!0),ml||R!==w){se.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pt.setValue(F,"projectionMatrix",w.projectionMatrix),pt.setValue(F,"viewMatrix",w.matrixWorldInverse);let cn=pt.map.cameraPosition;cn!==void 0&&cn.setValue(F,at.setFromMatrixPosition(w.matrixWorld)),ke.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Cr=!0,rs=!0)}if(Ue.needsLights&&(Un.state.sunShadowMap.length>0&&pt.setValue(F,"sunShadowMap",Un.state.sunShadowMap,Ge),Un.state.directionalShadowMap.length>0&&pt.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,Ge),Un.state.spotShadowMap.length>0&&pt.setValue(F,"spotShadowMap",Un.state.spotShadowMap,Ge),Un.state.pointShadowMap.length>0&&pt.setValue(F,"pointShadowMap",Un.state.pointShadowMap,Ge)),Y.isSkinnedMesh){pt.setOptional(F,Y,"bindMatrix"),pt.setOptional(F,Y,"bindMatrixInverse");let Ft=Y.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),pt.setValue(F,"boneTexture",Ft.boneTexture,Ge))}Y.isBatchedMesh&&(pt.setOptional(F,Y,"batchingTexture"),pt.setValue(F,"batchingTexture",Y._matricesTexture,Ge),pt.setOptional(F,Y,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",Y._indirectTexture,Ge),pt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",Y._colorsTexture,Ge));let Ri=$.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Q.update(Y,$,bn),(Cr||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,pt.setValue(F,"receiveShadow",Y.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=cM()),Cr){if(pt.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ue.needsLights&&Ga(mn,rs),ye&&B.fog===!0&&fe.refreshFogUniforms(mn,ye),fe.refreshMaterialUniforms(mn,B,ce,Me,E.state.transmissionRenderTarget[w.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){let Ft=y,cn=0;for(let ir of E.state.lightProbeGridArray)ir.texture!==null&&(Ft.textures[cn]=ir.texture,Ft.min[cn]=ir.boundingBox.min,Ft.max[cn]=ir.boundingBox.max,Ft.resolution[cn]=ir.resolution,cn++);for(let ir in Ft)Ft[ir].length=cn;mn.probesSH.value=Ft.textures,mn.probesMin.value=Ft.min,mn.probesMax.value=Ft.max,mn.probesResolution.value=Ft.resolution}ma.upload(F,rn(Ue),mn,Ge)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ma.upload(F,rn(Ue),mn,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(F,"center",Y.center),pt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(F,"normalMatrix",Y.normalMatrix),pt.setValue(F,"modelMatrix",Y.matrixWorld),B.uniformsGroups!==void 0){let Ft=B.uniformsGroups;for(let cn=0,ir=Ft.length;cn<ir;cn++){let Ud=Ft[cn];oe.update(Ud,bn),oe.bind(Ud,bn)}}return bn}function Ga(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function pl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,U,$){let B=Oe.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Oe.get(w.texture).__webglTexture=U,Oe.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:$,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let $=Oe.get(w);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,$=0){X=w,q=U,O=$;let B=null,Y=!1,ye=!1;if(w){let ve=Oe.get(w);if(ve.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),ee.copy(w.viewport),Se.copy(w.scissor),ze=w.scissorTest,se.viewport(ee),se.scissor(Se),se.setScissorTest(ze),V=-1;return}else if(ve.__webglFramebuffer===void 0)Ge.setupRenderTarget(w);else if(ve.__hasExternalTextures)Ge.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Je=w.depthTexture;if(ve.__boundDepthTexture!==Je){if(Je!==null&&Oe.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(w)}}let Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ye=!0);let Be=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?B=Be[U][$]:B=Be[U],Y=!0):w.samples>0&&Ge.useMultisampledRTT(w)===!1?B=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[$]:B=Be,ee.copy(w.viewport),Se.copy(w.scissor),ze=w.scissorTest}else ee.copy(Ae).multiplyScalar(ce).floor(),Se.copy(Ve).multiplyScalar(ce).floor(),ze=Re;if($!==0&&(B=G),se.bindFramebuffer(F.FRAMEBUFFER,B)&&se.drawBuffers(w,B),se.viewport(ee),se.scissor(Se),se.setScissorTest(ze),Y){let ve=Oe.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,$)}else if(ye){let ve=U;for(let Ee=0;Ee<w.textures.length;Ee++){let Be=Oe.get(w.textures[Ee]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ee,Be.__webglTexture,$,ve)}}else if(w!==null&&$!==0){let ve=Oe.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,$)}V=-1};function Ar(w){let U=Oe.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=ke.textureFormatReadable(w.format),U.__typeReadable=ke.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,$,B,Y,ye,Le,ve=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ee=Ee[Le],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){se.bindFramebuffer(F.FRAMEBUFFER,Ee);try{let Be=w.textures[ve],Je=Be.format,lt=Be.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);let Ne=Ar(Be);if(Ne.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-B&&$>=0&&$<=w.height-Y&&F.readPixels(U,$,B,Y,le.convert(Je),le.convert(lt),ye)}finally{let Be=X!==null?Oe.get(X).__webglFramebuffer:null;se.bindFramebuffer(F.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,U,$,B,Y,ye,Le,ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ee=Ee[Le],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(U>=0&&U<=w.width-B&&$>=0&&$<=w.height-Y){se.bindFramebuffer(F.FRAMEBUFFER,Ee);let Be=w.textures[ve],Je=Be.format,lt=Be.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);let Ne=Ar(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,ye.byteLength,F.STREAM_READ),F.readPixels(U,$,B,Y,le.convert(Je),le.convert(lt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $t=X!==null?Oe.get(X).__webglFramebuffer:null;se.bindFramebuffer(F.FRAMEBUFFER,$t);let Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Xp(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ye),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ct),F.deleteSync(Ct),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,$=0){let B=Math.pow(2,-$),Y=Math.floor(w.image.width*B),ye=Math.floor(w.image.height*B),Le=U!==null?U.x:0,ve=U!==null?U.y:0;Ge.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Le,ve,Y,ye),se.unbindTexture()},this.copyTextureToTexture=function(w,U,$=null,B=null,Y=0,ye=0){let Le,ve,Ee,Be,Je,lt,Ne,ct,$t,Ct=w.isCompressedTexture?w.mipmaps[ye]:w.image;if($!==null)Le=$.max.x-$.min.x,ve=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,Je=$.min.y,lt=$.isBox3?$.min.z:0;else{let pt=Math.pow(2,-Y);Le=Math.floor(Ct.width*pt),ve=Math.floor(Ct.height*pt),w.isDataArrayTexture?Ee=Ct.depth:w.isData3DTexture?Ee=Math.floor(Ct.depth*pt):Ee=1,Be=0,Je=0,lt=0}B!==null?(Ne=B.x,ct=B.y,$t=B.z):(Ne=0,ct=0,$t=0);let Et=le.convert(U.format),Mn=le.convert(U.type),Ue;U.isData3DTexture?(Ge.setTexture3D(U,0),Ue=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ge.setTexture2DArray(U,0),Ue=F.TEXTURE_2D_ARRAY):(Ge.setTexture2D(U,0),Ue=F.TEXTURE_2D),se.activeTexture(F.TEXTURE0),se.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),se.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),se.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=se.getParameter(F.UNPACK_ROW_LENGTH),gt=se.getParameter(F.UNPACK_IMAGE_HEIGHT),is=se.getParameter(F.UNPACK_SKIP_PIXELS),bn=se.getParameter(F.UNPACK_SKIP_ROWS),ml=se.getParameter(F.UNPACK_SKIP_IMAGES);se.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),se.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),se.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),se.pixelStorei(F.UNPACK_SKIP_ROWS,Je),se.pixelStorei(F.UNPACK_SKIP_IMAGES,lt);let Cr=w.isDataArrayTexture||w.isData3DTexture,rs=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let pt=Oe.get(w),mn=Oe.get(U),Ri=Oe.get(pt.__renderTarget),Ft=Oe.get(mn.__renderTarget);se.bindFramebuffer(F.READ_FRAMEBUFFER,Ri.__webglFramebuffer),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let cn=0;cn<Ee;cn++)Cr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(w).__webglTexture,Y,lt+cn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Oe.get(U).__webglTexture,ye,$t+cn)),F.blitFramebuffer(Be,Je,Be+Le,Je+ve,Ne,ct,Ne+Le,ct+ve,F.DEPTH_BUFFER_BIT,F.NEAREST);se.bindFramebuffer(F.READ_FRAMEBUFFER,null),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Oe.has(w)){let pt=Oe.get(w),mn=Oe.get(U);se.bindFramebuffer(F.READ_FRAMEBUFFER,I),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,k);for(let Ri=0;Ri<Ee;Ri++)Cr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pt.__webglTexture,Y,lt+Ri):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pt.__webglTexture,Y),rs?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,ye,$t+Ri):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,ye),Y!==0?F.blitFramebuffer(Be,Je,Be+Le,Je+ve,Ne,ct,Ne+Le,ct+ve,F.COLOR_BUFFER_BIT,F.NEAREST):rs?F.copyTexSubImage3D(Ue,ye,Ne,ct,$t+Ri,Be,Je,Le,ve):F.copyTexSubImage2D(Ue,ye,Ne,ct,Be,Je,Le,ve);se.bindFramebuffer(F.READ_FRAMEBUFFER,null),se.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else rs?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Ue,ye,Ne,ct,$t,Le,ve,Ee,Et,Mn,Ct.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ue,ye,Ne,ct,$t,Le,ve,Ee,Et,Ct.data):F.texSubImage3D(Ue,ye,Ne,ct,$t,Le,ve,Ee,Et,Mn,Ct):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ye,Ne,ct,Le,ve,Et,Mn,Ct.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ye,Ne,ct,Ct.width,Ct.height,Et,Ct.data):F.texSubImage2D(F.TEXTURE_2D,ye,Ne,ct,Le,ve,Et,Mn,Ct);se.pixelStorei(F.UNPACK_ROW_LENGTH,Un),se.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt),se.pixelStorei(F.UNPACK_SKIP_PIXELS,is),se.pixelStorei(F.UNPACK_SKIP_ROWS,bn),se.pixelStorei(F.UNPACK_SKIP_IMAGES,ml),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ue),se.unbindTexture()},this.initRenderTarget=function(w){Oe.get(w).__webglFramebuffer===void 0&&Ge.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ge.setTextureCube(w,0):w.isData3DTexture?Ge.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ge.setTexture2DArray(w,0):Ge.setTexture2D(w,0),se.unbindTexture()},this.resetState=function(){q=0,O=0,X=null,se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var ch=class extends us{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Fr;e.deleteAttribute("uv");let t=new ds({side:gn}),n=new ds,i=new Gr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Pt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new oo(e,n,6),o=new fn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Pt(e,xa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Pt(e,xa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Pt(e,xa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Pt(e,xa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Pt(e,xa(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let u=new Pt(e,xa(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function xa(r){return new mo({color:0,emissive:16777215,emissiveIntensity:r})}function gr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function zm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Go={duration:.5,overwrite:!1,delay:0},Of,_n,Nt,Ti=1e8,bt=1/Ti,Rf=Math.PI*2,uM=Rf/4,fM=0,km=Math.sqrt,dM=Math.cos,pM=Math.sin,on=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},Sh=function(e){return typeof e>"u"},Ki=function(e){return typeof e=="object"},Kn=function(e){return e!==!1},Bf=function(){return typeof window<"u"},hh=function(e){return Ht(e)||on(e)},Gm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rn=Array.isArray,mM=/random\([^)]+\)/g,gM=/,\s*/g,Im=/(?:-?\.?\d|\.)+/gi,zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kf=/[+-]=-?[.\d]+/,_M=/[^,'"\[\]\s]+/gi,xM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Ji,Pf,Gf,ci={},ph={},Vm,Hm=function(e){return(ph=ya(e,ci))&&Pn},Mh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Vo=function(e,t){return!t&&console.warn(e)},Wm=function(e,t){return e&&(ci[e]=t)&&ph&&(ph[e]=t)||ci},Ho=function(){return 0},vM={suppressEvents:!0,isStart:!0,kill:!1},uh={suppressEvents:!0,kill:!1},yM={suppressEvents:!0},Vf={},Xr=[],If={},Xm,Jn={},bf={},Lm=30,fh=[],Hf="",Wf=function(e){var t=e[0],n,i;if(Ki(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fh.length;i--&&!fh[i].targetTest(t););n=fh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zf(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||Wf(wi(e))[0]._gsap},Xf=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Sh(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},bs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},SM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},mh=function(){var e=Xr.length,t=Xr.slice(0),n,i;for(If={},Xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qf=function(e){return!!(e._initted||e._startAt||e.add)},qm=function(e,t,n,i){Xr.length&&!_n&&mh(),e.render(t,n,i||!!(_n&&t<0&&qf(e))),Xr.length&&!_n&&mh()},Ym=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(_M).length<2?t:on(e)?e.trim():e},Zm=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},MM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ya=function(e,t){for(var n in t)e[n]=t[n];return e},Dm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ki(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},gh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Bo=function(e){var t=e.parent||Bt,n=e.keyframes?MM(Rn(e.keyframes)):hi;if(Kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},bM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Jm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},bh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},TM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lf=function(e,t,n,i){return e._startAt&&(_n?e._startAt.revert(uh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},wM=function r(e){return!e||e._ts&&r(e.parent)},Nm=function(e){return e._repeat?Sa(e._tTime,e=e.duration()+e._rDelay)*e:0},Sa=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},_h=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Th=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},wh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Th(e),n._dirty||vs(n,e)),e},$m=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_h(e.rawTime(),t),(!t._dur||Yo(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},$i=function(e,t,n,i){return t.parent&&Yr(t),t._start=Ot((xr(n)?n:!n&&xh(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Bt?bi(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Jm(e,t,"_first","_last",e._sort?"_start":0),xh(t)||(e._recent=t),i||$m(e,t),e._ts<0&&wh(e,e._tTime),e},Km=function(e,t){return(ci.ScrollTrigger||Mh("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},Qm=function(e,t,n,i,s){if(Kf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xm!==$n.frame)return Xr.push(e),e._lazy=[s,i],1},EM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},AM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&EM(e)&&!(!e._initted&&xh(e))||(e._ts<0||e._dp._ts<0)&&!xh(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Yo(0,e._tDur,t),h=Sa(l,o),e._yoyo&&h&1&&(a=1-a),h!==Sa(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||_n||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Qm(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Lf(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yr(e,1),!n&&!_n&&(li(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},CM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ma=function(e,t,n,i){var s=e._repeat,a=Ot(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ot(a*(s+1)+e._rDelay*s):a,o>0&&!i&&wh(e,e._tTime=e._tDur*o),e.parent&&Th(e),n||vs(e.parent,e),e},Um=function(e){return e instanceof Cn?vs(e):Ma(e,e._dur)},RM={_start:0,endTime:Ho,totalDuration:Ho},bi=function r(e,t,n){var i=e.labels,s=e._recent||RM,a=e.duration()>=Ti?s.endTime(!1):e._dur,o,l,c;return on(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Rn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},zo=function(e,t,n){var i=xr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;a.immediateRender=Kn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Yt(t[0],a,t[s+1])},Zr=function(e,t){return e||e===0?t(e):t},Yo=function(e,t,n){return n<e?e:n>t?t:n},xn=function(e,t){return!on(e)||!(t=xM.exec(e))?"":t[1]},PM=function(e,t,n){return Zr(n,function(i){return Yo(e,t,i)})},Df=[].slice,jm=function(e,t){return e&&Ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ki(e[0]))&&!e.nodeType&&e!==Ji},IM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return on(i)&&!t||jm(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t,n){return Nt&&!t&&Nt.selector?Nt.selector(e):on(e)&&!n&&(Pf||!ba())?Df.call((t||Gf).querySelectorAll(e),0):Rn(e)?IM(e,n):jm(e)?Df.call(e,0):e?[e]:[]},Nf=function(e){return e=wi(e)[0]||Vo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?Vo("Invalid scope")||Gf.createElement("div"):e)}},eg=function(e){return e.sort(function(){return .5-Math.random()})},tg=function(e){if(Ht(e))return e;var t=Ki(e)?e:{each:e},n=ys(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return on(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(f,u,m){var x=(m||t).length,p=a[x],g,v,S,y,T,E,_,M,P;if(!p){if(P=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!P){for(_=-Ti;_<(_=m[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(p=a[x]=[],g=l?Math.min(P,x)*h-.5:i%P,v=P===Ti?0:l?x*d/P-.5:i/P|0,_=0,M=Ti,E=0;E<x;E++)S=E%P-g,y=v-(E/P|0),p[E]=T=c?Math.abs(c==="y"?y:S):km(S*S+y*y),T>_&&(_=T),T<M&&(M=T);i==="random"&&eg(p),p.max=_-M,p.min=M,p.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),p.b=x<0?s-x:s,p.u=xn(t.amount||t.each)||0,n=n&&x<0?WM(n):n}return x=(p[f]-p.min)/p.max||0,Ot(p.b+(n?n(x):x)*p.v)+p.u}},Uf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xr(n)?0:xn(n))}},ng=function(e,t){var n=Rn(e),i,s;return!n&&Ki(e)&&(i=n=e.radius||Ti,e.values?(e=wi(e.values),(s=!xr(e[0]))&&(i*=i)):e=Uf(e.increment)),Zr(t,n?Ht(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,h=0,d=e.length,f,u;d--;)s?(f=e[d].x-o,u=e[d].y-l,f=f*f+u*u):f=Math.abs(e[d]-o),f<c&&(c=f,h=d);return h=!i||c<=i?e[h]:a,s||h===a||xr(a)?h:h+xn(a)}:Uf(e))},ig=function(e,t,n,i){return Zr(Rn(e)?!t:n===!0?!!(n=0):!i,function(){return Rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},LM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},DM=function(e,t){return function(n){return e(parseFloat(n))+(t||xn(n))}},NM=function(e,t,n){return sg(e,t,0,1,n)},rg=function(e,t,n){return Zr(n,function(i){return e[~~t(i)]})},UM=function r(e,t,n){var i=t-e;return Rn(e)?rg(e,r(0,e.length),t):Zr(n,function(s){return(i+(s-e)%i)%i+e})},FM=function r(e,t,n){var i=t-e,s=i*2;return Rn(e)?rg(e,r(0,e.length-1),t):Zr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ta=function(e){return e.replace(mM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(gM);return ig(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},sg=function(e,t,n,i,s){var a=t-e,o=i-n;return Zr(s,function(l){return n+((l-e)/a*o||0)})},OM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var a=on(e),o={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Rn(e)&&!Rn(t)){for(h=[],d=e.length,f=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(m){m*=d;var x=Math.min(f,~~m);return h[x](m-x)},n=t}else i||(e=ya(Rn(e)?[]:{},e));if(!h){for(l in t)Jf.call(o,e,l,"get",t[l]);s=function(m){return ed(m,o)||(a?e.p:e)}}}return Zr(n,s)},Fm=function(e,t,n){var i=e.labels,s=Ti,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},li=function(e,t,n){var i=e.vars,s=i[t],a=Nt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xr.length&&mh(),o&&(Nt=o),h=l?s.apply(c,l):s.call(c),Nt=a,h},Fo=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&li(e,"onInterrupt"),e},va,ag=[],og=function(e){if(e)if(e=!e.name&&e.default||e,Bf()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ho,render:ed,add:Jf,kill:eb,modifier:jM,rawVars:0},a={targetTest:0,get:0,getSetter:Eh,aliases:{},register:0};if(ba(),e!==i){if(Jn[t])return;hi(i,hi(gh(e,s),a)),ya(i.prototype,ya(s,gh(e,a))),Jn[i.prop=t]=i,e.targetTest&&(fh.push(i),Vf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wm(t,i),e.register&&e.register(Pn,i,Gn)}else ag.push(e)},At=255,Oo={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Tf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},lg=function(e,t,n){var i=e?xr(e)?[e>>16,e>>8&At,e&At]:0:Oo.black,s,a,o,l,c,h,d,f,u,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Oo[e])i=Oo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Im),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Tf(l+1/3,s,a),i[1]=Tf(l,s,a),i[2]=Tf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(zf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Im)||Oo.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/At,a=i[1]/At,o=i[2]/At,d=Math.max(s,a,o),f=Math.min(s,a,o),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},cg=function(e){var t=[],n=[],i=-1;return e.split(_r).forEach(function(s){var a=s.match(Ms)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Om=function(e,t,n){var i="",s=(e+i).match(_r),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(f){return(f=lg(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=cg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(_r,"1").split(Ms),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(_r),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},_r=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Oo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),BM=/hsl[a]?\(/,Yf=function(e){var t=e.join(" "),n;if(_r.lastIndex=0,_r.test(t))return n=BM.test(t),e[1]=Om(e[1],n),e[0]=Om(e[0],n,cg(e[1])),!0},Wo,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,f,u,m=function x(p){var g=r()-i,v=p===!0,S,y,T,E;if((g>e||g<0)&&(n+=g-t),i+=g,T=i-n,S=T-a,(S>0||v)&&(E=++d.frame,f=T-d.time*1e3,d.time=T=T/1e3,a+=S+(S>=s?0:s-S),y=1),v||(l=c(x)),y)for(u=0;u<o.length;u++)o[u](T,f,E,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Vm&&(!Pf&&Bf()&&(Ji=Pf=window,Gf=Ji.document||{},ci.gsap=Pn,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(Pn.version),Hm(ph||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),ag.forEach(og)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Wo=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Wo=0,c=Ho},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,v){var S=g?function(y,T,E,_){p(y,T,E,_),d.remove(S)}:p;return d.remove(p),o[v?"unshift":"push"](S),ba(),S},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&u>=g&&u--},_listeners:o},d})(),ba=function(){return!Wo&&$n.wake()},ut={},zM=/^[\d.\-M][\d.\-,\s]/,kM=/["']/g,GM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(kM,"").trim():+c,i=l.substr(o+1).trim();return t},VM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},HM=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[GM(t[1])]:VM(e).split(",").map(Ym)):ut._CE&&zM.test(e)?ut._CE("",e):n},WM=function(e){return function(t){return 1-e(1-t)}},ys=function(e,t){return e&&(Ht(e)?e:ut[e]||HM(e))||t},Ts=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return kn(e,function(o){ut[o]=ci[o]=s,ut[a=o.toLowerCase()]=n;for(var l in s)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=s[l]}),s},hg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Rf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*pM((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:hg(o);return s=Rf/s,l.config=function(c,h){return r(e,c,h)},l},Ef=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:hg(n);return i.config=function(s){return r(e,s)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ts(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Ts("Elastic",wf("in"),wf("out"),wf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ts("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ts("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ts("Circ",function(r){return-(km(1-r*r)-1)});Ts("Sine",function(r){return r===1?1:-dM(r*uM)+1});Ts("Back",Ef("in"),Ef("out"),Ef());ut.SteppedEase=ut.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-bt;return function(o){return((i*Yo(0,a,o)|0)+s)*n}}};Go.ease=ut["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Hf+=r+","+r+"Params,"});var Zf=function(e,t){this.id=fM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xf,this.set=t?t.getSetter:Eh},Xo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ma(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Wo||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ma(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ba(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wh(this,n),!s._dp||s.parent||$m(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Sa(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?_h(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Yo(-Math.abs(this._delay),o,s),i!==!1),Th(this),TM(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ba(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==bt,a;if(s)for(this._tTime-=bt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+bt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$i(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_h(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=yM);var i=_n;return _n=n,qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Um(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Um(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),Kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ht(n)?n:Zm,l=function(){var h=i.then;i.then=null,s&&s(),Ht(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Fo(this)},r})();hi(Xo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){zm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),Bt&&$i(n.parent||Bt,gr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Km(gr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return zo(0,arguments,this),this},t.from=function(i,s,a){return zo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return zo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Bo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(i,s,bi(this,a),1),this},t.call=function(i,s,a){return $i(this,Yt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Yt(i,a,bi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Bo(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Bo(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ot(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,m,x,p,g,v,S,y,T,E,_;if(this!==Bt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),f=h,y=this._start,S=this._ts,g=!S,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Ot(h%p),h===l?(x=this._repeat,f=c):(T=Ot(h/p),x=~~T,x&&x===T&&(f=c,x--),f>c&&(f=c)),T=Sa(this._tTime,p),!o&&this._tTime&&T!==x&&this._tTime-T*p-this._dur<=0&&(T=x),E&&x&1&&(f=c-f,_=1),x!==T&&!this._lock){var M=E&&T&1,P=M===(E&&x&1);if(x<T&&(M=!M),o=M?0:h%c?c:h,this._lock=1,this.render(o||(_?0:Ot(x*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,T=x),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=CM(this,Ot(o),Ot(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!T&&(li(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(u=this._first;u;){if(m=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,s,a),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=-bt);break}}u=m}else{u=this._last;for(var A=i<0?i:f;u;){if(m=u._prev,(u._act||A<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(A-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(A-u._start)*u._ts,s,a||_n&&qf(u)),f!==this._time||!this._ts&&!g){v=0,m&&(h+=this._zTime=A?-bt:bt);break}}u=m}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-bt)._zTime=f>=o?1:-1,this._ts))return this._start=y,Th(this),this.render(i,s,a);this._onUpdate&&!s&&li(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(li(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(xr(s)||(s=bi(this,s,i)),!(i instanceof Xo)){if(Rn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(on(i))return this.addLabel(i,s);if(Ht(i))i=Yt.delayedCall(0,i);else return this}return this!==i?$i(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Yt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return on(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&bh(this,i),i===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Yt.delayedCall(0,s||Ho,a);return o.data="isPause",this._hasPause=1,$i(this,o,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Wr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=wi(i),l=this._first,c=xr(s),h;l;)l instanceof Yt?SM(l._targets,o)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=bi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,m=Yt.to(a,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!u){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Ma(m,p,0,1).render(m._time,!0,!0),u=1}h&&h.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,hi({startAt:{time:bi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Fm(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Fm(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ot(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return vs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ti,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$i(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ot(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ma(a,a===Bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Bt._ts&&(qm(Bt,_h(i,Bt)),Xm=$n.frame),$n.frame>=Lm){Lm+=Qn.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(Xo);hi(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var XM=function(e,t,n,i,s,a,o){var l=new Gn(this._pt,e,t,0,1,jf,null,s),c=0,h=0,d,f,u,m,x,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ta(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),f=n.match(Mf)||[];d=Mf.exec(i);)m=d[0],x=i.substring(c,d.index),u?u=(u+1)%5:x.substr(-5)==="rgba("&&(u=1),m!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:x||h===1?x:",",s:p,c:m.charAt(1)==="="?bs(p,m)-p:parseFloat(m)-p,m:u&&u<4?Math.round:0},c=Mf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(kf.test(i)||g)&&(l.e=0),this._pt=l,l},Jf=function(e,t,n,i,s,a,o,l,c,h){Ht(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Ht(d)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,u=Ht(d)?c?$M:fg:Qf,m;if(on(i)&&(~i.indexOf("random(")&&(i=Ta(i)),i.charAt(1)==="="&&(m=bs(f,i)+(xn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||Ff)return!isNaN(f*i)&&i!==""?(m=new Gn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?QM:dg,0,u),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&Mh(t,i),XM.call(this,e,t,f,i,u,l||Qn.stringFilter,c))},qM=function(e,t,n,i,s){if(Ht(e)&&(e=ko(e,s,t,n,i)),!Ki(e)||e.style&&e.nodeType||Rn(e)||Gm(e))return on(e)?ko(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ko(e[o],s,t,n,i);return a},$f=function(e,t,n,i,s,a){var o,l,c,h;if(Jn[e]&&(o=new Jn[e]).init(s,o.rawVars?t[e]:qM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Gn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==va))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Wr,Ff,Kf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,m=e._dur,x=e._startAt,p=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:p,S=e._overwrite==="auto"&&!Of,y=e.timeline,T=i.easeReverse||d,E,_,M,P,A,D,N,G,I,k,q,O,X;if(y&&(!f||!s)&&(s="none"),e._ease=ys(s,Go.ease),e._rEase=T&&(ys(T)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(G=p[0]?qr(p[0]).harness:0,O=G&&i[G.prop],E=gh(i,Vf),x&&(x._zTime<0&&x.progress(1),t<0&&h&&o&&!u?x.render(-1,!0):x.revert(h&&m?uh:vM),x._lazy=0),a){if(Yr(e._startAt=Yt.set(p,hi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return li(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!o&&!u)&&e._startAt.revert(uh),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!x){if(t&&(o=!1),M=hi({overwrite:!1,data:"isFromStart",lazy:o&&!x&&Kn(l),immediateRender:o,stagger:0,parent:g},E),O&&(M[G.prop]=O),Yr(e._startAt=Yt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(uh):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Kn(l)||l&&!m,_=0;_<p.length;_++){if(A=p[_],N=A._gsap||Wf(p)[_]._gsap,e._ptLookup[_]=k={},If[N.id]&&Xr.length&&mh(),q=v===p?_:v.indexOf(A),G&&(I=new G).init(A,O||E,e,q,v)!==!1&&(e._pt=P=new Gn(e._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(V){k[V]=P}),I.priority&&(D=1)),!G||O)for(M in E)Jn[M]&&(I=$f(M,E,e,q,A,v))?I.priority&&(D=1):k[M]=P=Jf.call(e,A,M,"get",E[M],q,v,0,i.stringFilter);e._op&&e._op[_]&&e.kill(A,e._op[_]),S&&e._pt&&(Wr=e,Bt.killTweensOf(A,k,e.globalTime(t)),X=!e.parent,Wr=0),e._pt&&l&&(If[N.id]=1)}D&&td(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(Ti,!0,!0)},YM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,f,u;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,u=e._targets.length;u--;){if(h=f[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ff=1,e.vars[t]="+=0",Kf(e,o),Ff=0,l?Vo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Wt(n)+xn(d.e)),d.b&&(d.b=h.s+xn(d.b))},ZM=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ya({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},JM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Rn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ko=function(e,t,n,i,s){return Ht(e)?e.call(t,n,i,s):on(e)&&~e.indexOf("random(")?Ta(e):e},vh=Hf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ug={};kn(vh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ug[r]=1});vh=vh.split(",");var Yt=(function(r){zm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Bo(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,m=l.keyframes,x=l.defaults,p=l.scrollTrigger,g=i.parent||Bt,v=(Rn(n)||Gm(n)?xr(n[0]):"length"in i)?[n]:wi(n),S,y,T,E,_,M,P,A;if(o._targets=v.length?Wf(v):Vo("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,m||f||hh(c)||hh(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(S=o.timeline=new Cn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:v}),S.kill(),S.parent=S._dp=gr(o),S._start=0,f||hh(c)||hh(h)){if(E=v.length,P=f&&tg(f),Ki(f))for(_ in f)~vh.indexOf(_)&&(A||(A={}),A[_]=f[_]);for(y=0;y<E;y++)T=gh(i,ug),T.stagger=0,D&&(T.easeReverse=D),A&&ya(T,A),M=v[y],T.duration=+ko(c,gr(o),y,M,v),T.delay=(+ko(h,gr(o),y,M,v)||0)-o._delay,!f&&E===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),S.to(M,T,P?P(y,M,v):0),S._ease=ut.none;S.duration()?c=h=0:o.timeline=0}else if(m){Bo(hi(S.vars.defaults,{ease:"none"})),S._ease=ys(m.ease||i.ease||"none");var N=0,G,I,k;if(Rn(m))m.forEach(function(q){return S.to(v,q,">")}),S.duration();else{T={};for(_ in m)_==="ease"||_==="easeEach"||JM(_,m[_],T,m.easeEach);for(_ in T)for(G=T[_].sort(function(q,O){return q.t-O.t}),N=0,y=0;y<G.length;y++)I=G[y],k={ease:I.e,duration:(I.t-(y?G[y-1].t:0))/100*c},k[_]=I.v,S.to(v,k,N),N+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return u===!0&&!Of&&(Wr=gr(o),Bt.killTweensOf(v),Wr=0),$i(g,gr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!m&&o._start===Ot(g._time)&&Kn(d)&&wM(gr(o))&&g.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-h)||0)),p&&Km(gr(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-bt&&!h?l:i<bt?0:i,f,u,m,x,p,g,v,S;if(!c)AM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,S=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,s,a);if(f=Ot(d%x),d===l?(m=this._repeat,f=c):(p=Ot(d/x),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(f=c-f),p=Sa(this._tTime,x),f===o&&!a&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==x&&this._initted&&(this._lock=a=1,this.render(Ot(x*m),!0).invalidate()._lock=0)}if(!this._initted){if(Qm(this,h?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var T=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(li(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Lf(this,i,s,a),li(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Lf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Yr(this,1),!s&&!(h&&!o)&&(d||o||g)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Wo||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Kf(this,c),h=this._ease(c/this._dur),YM(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(wh(this,0),this.parent||Jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wr&&Wr.vars.overwrite!==!0)._first||Fo(this),this.parent&&a!==this.timeline.totalDuration()&&Ma(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?wi(i):o,c=this._ptLookup,h=this._pt,d,f,u,m,x,p,g;if((!s||s==="all")&&bM(o,l))return s==="all"&&(this._pt=0),Fo(this);for(d=this._op=this._op||[],s!=="all"&&(on(s)&&(x={},kn(s,function(v){return x[v]=1}),s=x),s=ZM(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(d[g]=s,m=f,u={}):(u=d[g]=d[g]||{},m=s);for(x in m)p=f&&f[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&bh(this,p,"_pt"),delete f[x]),u!=="all"&&(u[x]=1)}return this._initted&&!this._pt&&h&&Fo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return zo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return zo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Bt.killTweensOf(i,s,a)},e})(Xo);hi(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(r){Yt[r]=function(){var e=new Cn,t=Df.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qf=function(e,t,n){return e[t]=n},fg=function(e,t,n){return e[t](n)},$M=function(e,t,n,i){return e[t](i.fp,n)},KM=function(e,t,n){return e.setAttribute(t,n)},Eh=function(e,t){return Ht(e[t])?fg:Sh(e[t])&&e.setAttribute?KM:Qf},dg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},QM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ed=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},eb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?bh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},tb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},td=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Gn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||dg,this.d=l||this,this.set=c||Qf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tb,this.m=n,this.mt=s,this.tween=i},r})();kn(Hf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Vf[r]=1});ci.TweenMax=ci.TweenLite=Yt;ci.TimelineLite=ci.TimelineMax=Cn;Bt=new Cn({sortChildren:!1,defaults:Go,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Yf;var Ss=[],dh={},nb=[],Bm=0,ib=0,Af=function(e){return(dh[e]||nb).map(function(t){return t()})},qo=function(){var e=Date.now(),t=[];e-Bm>2&&(Af("matchMediaInit"),Ss.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ji.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Af("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bm=e,Af("matchMedia"))},pg=(function(){function r(t,n){this.selector=n&&Nf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ib++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ht(n)&&(s=i,i=n,n=Ht);var a=this,o=function(){var c=Nt,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Nf(s)),Nt=a,d=i.apply(a,arguments),Ht(d)&&a._r.push(d),Nt=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===Ht?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Nt;Nt=null,n(this),Nt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ss.length;a--;)Ss[a].id===this.id&&Ss.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(qo):o.removeEventListener("change",qo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),rb=(function(){function r(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ki(n)||(n={matches:n});var a=new pg(0,s||this.scope),o=a.conditions={},l,c,h;Nt&&!a.selector&&(a.selector=Nt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ji.matchMedia(n[c]),l&&(Ss.indexOf(a)<0&&Ss.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(qo):l.addEventListener("change",qo),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),yh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return og(i)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){on(e)&&(e=wi(e)[0]);var s=qr(e||{}).get,a=n?Zm:Ym;return n==="native"&&(n=""),e&&(t?a((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Jn[o]&&Jn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(h){return Pn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=Jn[t],o=qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;va._pt=0,d.init(e,n?h+n:h,va,0,[e]),d.render(1,d),va._pt&&ed(1,va)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=Pn.to(e,hi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ys(e.ease,Go.ease)),Dm(Go,e||{})},config:function(e){return Dm(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jn[o]&&!ci[o]&&Vo(t+" effect requires "+o+" plugin.")}),bf[t]=function(o,l,c){return n(wi(o),hi(l||{},s),c)},a&&(Cn.prototype[t]=function(o,l,c){return this.add(bf[t](o,Ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=ys(t)},parseEase:function(e,t){return arguments.length?ys(e,t):ut},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Cn(e),i,s;for(n.smoothChildTiming=Kn(e.smoothChildTiming),Bt.remove(n),n._dp=0,n._time=n._tTime=Bt._time,i=Bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Yt&&i.vars.onComplete===i._targets[0]))&&$i(n,i,i._start-i._delay),i=s;return $i(Bt,n,0),n},context:function(e,t){return e?new pg(e,t):Nt},matchMedia:function(e){return new rb(e)},matchMediaRefresh:function(){return Ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qo()},addEventListener:function(e,t){var n=dh[e]||(dh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=dh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:UM,wrapYoyo:FM,distribute:tg,random:ig,snap:ng,normalize:NM,getUnit:xn,clamp:PM,splitColor:lg,toArray:wi,selector:Nf,mapRange:sg,pipe:LM,unitize:DM,interpolate:OM,shuffle:eg},install:Hm,effects:bf,ticker:$n,updateRoot:Cn.updateRoot,plugins:Jn,globalTimeline:Bt,core:{PropTween:Gn,globals:Wm,Tween:Yt,Timeline:Cn,Animation:Xo,getCache:qr,_removeLinkedListItem:bh,reverting:function(){return _n},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return Of=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return yh[r]=Yt[r]});$n.add(Cn.updateRoot);va=yh.to({},{duration:0});var sb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ab=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=sb(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Cf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(on(s)&&(l={},kn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ab(o,s)}}}},Pn=yh.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cf("roundProps",Uf),Cf("modifiers"),Cf("snap",ng))||yh;Yt.version=Cn.version=Pn.version="3.15.1";Vm=1;Bf()&&ba();var ob=ut.Power0,lb=ut.Power1,cb=ut.Power2,hb=ut.Power3,ub=ut.Power4,fb=ut.Linear,db=ut.Quad,pb=ut.Cubic,mb=ut.Quart,gb=ut.Quint,_b=ut.Strong,xb=ut.Elastic,vb=ut.Back,yb=ut.SteppedEase,Sb=ut.Bounce,Mb=ut.Sine,bb=ut.Expo,Tb=ut.Circ;var mg,Jr,Ea,od,Cs,wb,gg,ld,Eb=function(){return typeof window<"u"},yr={},As=180/Math.PI,Aa=Math.PI/180,wa=Math.atan2,_g=1e8,cd=/([A-Z])/g,Ab=/(left|right|width|margin|padding|x)/i,Cb=/[\s,\(]\S/,Qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},id=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Rb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Pb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ib=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Lb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Eg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Db=function(e,t,n){return e.style[t]=n},Nb=function(e,t,n){return e.style.setProperty(t,n)},Ub=function(e,t,n){return e._gsap[t]=n},Fb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ob=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Bb=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},zt="transform",jn=zt+"Origin",zb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vr(i,o)}):this.tfm[e]=a.x?a[e]:vr(i,e),e===jn&&(this.tfm.zOrigin=a.zOrigin);else return Qi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(zt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},Ag=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},kb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ld(),(!s||!s.isStart)&&!n[zt]&&(Ag(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cg=function(e,t){var n={target:e,props:[],revert:kb,save:zb};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Rg,rd=function(e,t){var n=Jr.createElementNS?Jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jr.createElement(e);return n&&n.style?n:Jr.createElement(e)},ui=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ca(t)||t,1)||""},xg="O,Moz,ms,Ms,Webkit".split(","),Ca=function(e,t,n){var i=t||Cs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(xg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?xg[a]:"")+e},sd=function(){Eb()&&window.document&&(mg=window,Jr=mg.document,Ea=Jr.documentElement,Cs=rd("div")||{style:{}},wb=rd("div"),zt=Ca(zt),jn=zt+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rg=!!Ca("perspective"),ld=Pn.core.reverting,od=1)},vg=function(e){var t=e.ownerSVGElement,n=rd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ea.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ea.removeChild(n),s},yg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pg=function(e){var t,n;try{t=e.getBBox()}catch{t=vg(e),n=1}return t&&(t.width||t.height)||n||(t=vg(e)),t&&!t.width&&!t.x&&!t.y?{x:+yg(e,["x","cx","x1"])||0,y:+yg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ig=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pg(e))},Kr=function(e,t){if(t){var n=e.style,i;t in yr&&t!==jn&&(t=zt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cd,"-$1").toLowerCase())):n.removeAttribute(t)}},$r=function(e,t,n,i,s,a){var o=new Gn(e._pt,t,n,0,1,a?Eg:wg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Sg={deg:1,rad:1,turn:1},Gb={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Cs.style,l=Ab.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",m,x,p,g;if(i===a||!s||Sg[i]||Sg[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&Ig(e),(u||a==="%")&&(yr[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[h],Wt(u?s/m*d:s/100*m);if(o[l?"width":"height"]=d+(f?a:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Jr||!x.appendChild)&&(x=Jr.body),p=x._gsap,p&&u&&p.width&&l&&p.time===$n.time&&!p.uncache)return Wt(s/p.width*d);if(u&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,m=e[h],v?e.style[t]=v:Kr(e,t)}else(u||a==="%")&&!Gb[ui(x,"display")]&&(o.position=ui(e,"position")),x===e&&(o.position="static"),x.appendChild(Cs),m=Cs[h],x.removeChild(Cs),o.position="absolute";return l&&u&&(p=qr(x),p.time=$n.time,p.width=x[h]),Wt(f?m*s/d:m&&s?d/m*s:0)},vr=function(e,t,n,i){var s;return od||sd(),t in Qi&&t!=="transform"&&(t=Qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(s=$o(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ch(ui(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ah[t]&&Ah[t](e,t,n)||ui(e,t)||Xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},Vb=function(e,t,n,i){if(!n||n==="none"){var s=Ca(t,e,1),a=s&&ui(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ui(e,"borderTopColor"))}var o=new Gn(this._pt,e.style,t,0,1,jf),l=0,c=0,h,d,f,u,m,x,p,g,v,S,y,T;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=ui(e,t)||i,x?e.style[t]=x:Kr(e,t)),h=[n,i],Yf(h),n=h[0],i=h[1],f=n.match(Ms)||[],T=i.match(Ms)||[],T.length){for(;d=Ms.exec(i);)p=d[0],v=i.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(x=f[c++]||"")&&(u=parseFloat(x)||0,y=x.substr((u+"").length),p.charAt(1)==="="&&(p=bs(u,p)+y),g=parseFloat(p),S=p.substr((g+"").length),l=Ms.lastIndex-S.length,S||(S=S||Qn.units[t]||y,l===i.length&&(i+=S,o.e+=S)),y!==S&&(u=Qr(e,t,x,S)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:u,c:g-u,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Eg:wg;return kf.test(i)&&(o.e=0),this._pt=o,o},Mg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Mg[n]||n,t[1]=Mg[i]||i,t.join(" ")},Wb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],yr[o]&&(l=1,o=o==="transformOrigin"?jn:zt),Kr(n,o);l&&(Kr(n,zt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",$o(n,1),a.uncache=1,Ag(i)))}},Ah={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Gn(e._pt,t,n,0,0,Wb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Jo=[1,0,0,1,0,0],Lg={},Dg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bg=function(e){var t=ui(e,zt);return Dg(t)?Jo:t.substr(7).match(zf).map(Wt)},hd=function(e,t){var n=e._gsap||qr(e),i=e.style,s=bg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Jo:s):(s===Jo&&!e.offsetParent&&e!==Ea&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ea.appendChild(e)),s=bg(e),l?i.display=l:Kr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ea.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ad=function(e,t,n,i,s,a){var o=e._gsap,l=s||hd(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,u=l[0],m=l[1],x=l[2],p=l[3],g=l[4],v=l[5],S=t.split(" "),y=parseFloat(S[0])||0,T=parseFloat(S[1])||0,E,_,M,P;n?l!==Jo&&(_=u*p-m*x)&&(M=y*(p/_)+T*(-x/_)+(x*v-p*g)/_,P=y*(-m/_)+T*(u/_)-(u*v-m*g)/_,y=M,T=P):(E=Pg(e),y=E.x+(~S[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(S[1]||S[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&o.smooth?(g=y-c,v=T-h,o.xOffset=d+(g*u+v*x)-g,o.yOffset=f+(g*m+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[jn]="0px 0px",a&&($r(a,o,"xOrigin",c,y),$r(a,o,"yOrigin",h,T),$r(a,o,"xOffset",d,o.xOffset),$r(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},$o=function(e,t){var n=e._gsap||new Zf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ui(e,jn)||"0",h,d,f,u,m,x,p,g,v,S,y,T,E,_,M,P,A,D,N,G,I,k,q,O,X,V,R,ee,Se,ze,J,ue;return h=d=f=x=p=g=v=S=y=0,u=m=1,n.svg=!!(e.getCTM&&Ig(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),i.scale=i.rotate=i.translate="none"),_=hd(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),ad(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,_)),T=n.xOrigin||0,E=n.yOrigin||0,_!==Jo&&(D=_[0],N=_[1],G=_[2],I=_[3],h=k=_[4],d=q=_[5],_.length===6?(u=Math.sqrt(D*D+N*N),m=Math.sqrt(I*I+G*G),x=D||N?wa(N,D)*As:0,v=G||I?wa(G,I)*As+x:0,v&&(m*=Math.abs(Math.cos(v*Aa))),n.svg&&(h-=T-(T*D+E*G),d-=E-(T*N+E*I))):(ue=_[6],ze=_[7],R=_[8],ee=_[9],Se=_[10],J=_[11],h=_[12],d=_[13],f=_[14],M=wa(ue,Se),p=M*As,M&&(P=Math.cos(-M),A=Math.sin(-M),O=k*P+R*A,X=q*P+ee*A,V=ue*P+Se*A,R=k*-A+R*P,ee=q*-A+ee*P,Se=ue*-A+Se*P,J=ze*-A+J*P,k=O,q=X,ue=V),M=wa(-G,Se),g=M*As,M&&(P=Math.cos(-M),A=Math.sin(-M),O=D*P-R*A,X=N*P-ee*A,V=G*P-Se*A,J=I*A+J*P,D=O,N=X,G=V),M=wa(N,D),x=M*As,M&&(P=Math.cos(M),A=Math.sin(M),O=D*P+N*A,X=k*P+q*A,N=N*P-D*A,q=q*P-k*A,D=O,k=X),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,g=180-g),u=Wt(Math.sqrt(D*D+N*N+G*G)),m=Wt(Math.sqrt(q*q+ue*ue)),M=wa(k,q),v=Math.abs(M)>2e-4?M*As:0,y=J?1/(J<0?-J:J):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dg(ui(e,zt)),O&&e.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(u*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Wt(u),n.scaleY=Wt(m),n.rotation=Wt(x)+o,n.rotationX=Wt(p)+o,n.rotationY=Wt(g)+o,n.skewX=v+o,n.skewY=S+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=Ch(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?qb:Rg?Ng:Xb,n.uncache=0,n},Ch=function(e){return(e=e.split(" "))[0]+" "+e[1]},nd=function(e,t,n){var i=xn(t);return Wt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},Xb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ng(e,t)},ws="0deg",Zo="0px",Es=") ",Ng=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,m=n.scaleX,x=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,S=n.zOrigin,y="",T=g==="auto"&&e&&e!==1||g===!0;if(S&&(d!==ws||h!==ws)){var E=parseFloat(h)*Aa,_=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*Aa,P=Math.cos(E),a=nd(v,a,_*P*-S),o=nd(v,o,-Math.sin(E)*-S),l=nd(v,l,M*P*-S+S)}p!==Zo&&(y+="perspective("+p+Es),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||a!==Zo||o!==Zo||l!==Zo)&&(y+=l!==Zo||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Es),c!==ws&&(y+="rotate("+c+Es),h!==ws&&(y+="rotateY("+h+Es),d!==ws&&(y+="rotateX("+d+Es),(f!==ws||u!==ws)&&(y+="skew("+f+", "+u+Es),(m!==1||x!==1)&&(y+="scale("+m+", "+x+Es),v.style[zt]=y||"translate(0, 0)"},qb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,m=n.xOrigin,x=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,S=parseFloat(a),y=parseFloat(o),T,E,_,M,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Aa,c*=Aa,T=Math.cos(l)*d,E=Math.sin(l)*d,_=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(h*=Aa,P=Math.tan(c-h),P=Math.sqrt(1+P*P),_*=P,M*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=Wt(T),E=Wt(E),_=Wt(_),M=Wt(M)):(T=d,M=f,E=_=0),(S&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(S=Qr(u,"x",a,"px"),y=Qr(u,"y",o,"px")),(m||x||p||g)&&(S=Wt(S+m-(m*T+x*_)+p),y=Wt(y+x-(m*E+x*M)+g)),(i||s)&&(P=u.getBBox(),S=Wt(S+i/100*P.width),y=Wt(y+s/100*P.height)),P="matrix("+T+","+E+","+_+","+M+","+S+","+y+")",u.setAttribute("transform",P),v&&(u.style[zt]=P)},Yb=function(e,t,n,i,s){var a=360,o=on(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?As:1),c=l-i,h=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*_g)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*_g)%a-~~(c/a)*a)),e._pt=f=new Gn(e._pt,t,n,i,c,Rb),f.e=h,f.u="deg",e._props.push(n),f},Tg=function(e,t){for(var n in t)e[n]=t[n];return e},Zb=function(e,t,n){var i=Tg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,f,u,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[zt]=t,o=$o(n,1),Kr(n,zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[zt],a[zt]=t,o=$o(n,1),a[zt]=c);for(l in yr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(u=xn(c),m=xn(h),d=u!==m?Qr(n,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new Gn(e._pt,o,l,d,f-d,id),e._pt.u=m||0,e._props.push(l));Tg(o,i)};kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ah[e>1?"border"+r:r]=function(o,l,c,h,d){var f,u;if(arguments.length<4)return f=a.map(function(m){return vr(o,m,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},a.forEach(function(m,x){return u[m]=f[x]=f[x]||f[(x-1)/2|0]}),o.init(l,u,d)}});var ud={name:"css",register:sd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,f,u,m,x,p,g,v,S,y,T,E,_,M,P;od||sd(),this.styles=this.styles||Cg(e),M=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(h=t[x],!(Jn[x]&&$f(x,t,n,i,e,s)))){if(u=typeof h,m=Ah[x],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Ta(h)),m)m(this,e,x,h,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),h+="",_r.lastIndex=0,_r.test(c)||(p=xn(c),g=xn(h),g?p!==g&&(c=Qr(e,x,c,g)+g):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,x),a.push(x),M.push(x,0,o[x]);else if(u!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,s):l[x],on(c)&&~c.indexOf("random(")&&(c=Ta(c)),xn(c+"")||c==="auto"||(c+=Qn.units[x]||xn(vr(e,x))||""),(c+"").charAt(1)==="="&&(c=vr(e,x))):c=vr(e,x),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),x in Qi&&(x==="autoAlpha"&&(f===1&&vr(e,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,o.visibility),$r(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=Qi[x],~x.indexOf(",")&&(x=x.split(",")[0]))),S=x in yr,S){if(this.styles.save(x),P=h,u==="string"&&h.substring(0,6)==="var(--"){if(h=ui(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=ui(e,"perspective"),A?e.style.perspective=A:Kr(e,"perspective")}d=parseFloat(h)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||$o(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new Gn(this._pt,o,zt,0,1,T.renderTransform,T,0,-1),y.dep=1),x==="scale")this._pt=new Gn(this._pt,T,"scaleY",T.scaleY,(v?bs(T.scaleY,v+d):d)-T.scaleY||0,id),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){M.push(jn,0,o[jn]),h=Hb(h),T.svg?ad(e,h,0,E,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==T.zOrigin&&$r(this,T,"zOrigin",T.zOrigin,g),$r(this,o,x,Ch(c),Ch(h)));continue}else if(x==="svgOrigin"){ad(e,h,1,E,0,this);continue}else if(x in Lg){Yb(this,T,x,f,v?bs(f,v+h):h);continue}else if(x==="smoothOrigin"){$r(this,T,"smooth",T.smooth,h);continue}else if(x==="force3D"){T[x]=h;continue}else if(x==="transform"){Zb(this,h,e);continue}}else x in o||(x=Ca(x)||x);if(S||(d||d===0)&&(f||f===0)&&!Cb.test(h)&&x in o)p=(c+"").substr((f+"").length),d||(d=0),g=xn(h)||(x in Qn.units?Qn.units[x]:p),p!==g&&(f=Qr(e,x,c,g)),this._pt=new Gn(this._pt,S?T:o,x,f,(v?bs(f,v+d):d)-f,!S&&(g==="px"||x==="zIndex")&&t.autoRound!==!1?Lb:id),this._pt.u=g||0,S&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Ib):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Pb);else if(x in o)Vb.call(this,e,x,c,v?v+h:h);else if(x in e)this.add(e,x,c||e[x],v?v+h:h,i,s);else if(x!=="parseTransform"){Mh(x,h);continue}S||(x in o?M.push(x,0,o[x]):typeof e[x]=="function"?M.push(x,2,e[x]()):M.push(x,1,c||e[x])),a.push(x)}}_&&td(this)},render:function(e,t){if(t.tween._time||!ld())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vr,aliases:Qi,getSetter:function(e,t,n){var i=Qi[t];return i&&i.indexOf(",")<0&&(t=i),t in yr&&t!==jn&&(e._gsap.x||vr(e,"x"))?n&&gg===n?t==="scale"?Fb:Ub:(gg=n||{})&&(t==="scale"?Ob:Bb):e.style&&!Sh(e.style[t])?Db:~t.indexOf("-")?Nb:Eh(e,t)},core:{_removeProperty:Kr,_getMatrix:hd}};Pn.utils.checkPrefix=Ca;Pn.core.getStyleSaver=Cg;(function(r,e,t,n){var i=kn(r+","+e+","+t,function(s){yr[s]=1});kn(e,function(s){Qn.units[s]="deg",Lg[s]=1}),Qi[i[13]]=r+","+e,kn(n,function(s){var a=s.split(":");Qi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});Pn.registerPlugin(ud);var Ut=Pn.registerPlugin(ud)||Pn,fA=Ut.core.Tween;function Ug(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Jb(r,e,t){return e&&Ug(r.prototype,e),t&&Ug(r,t),r}var vn,Ih,$b,ei,jr,es,Pa,Og,Rs,Ia,Bg,Sr,Oi,zg,kg=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Gg=1,Ra=[],je=[],Bi=[],Qo=Date.now,fd=function(e,t){return t},Kb=function(){var e=Ia.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,je),i.push.apply(i,Bi),je=n,Bi=i,fd=function(a,o){return t[a](o)}},br=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},jo=function(e){return!!~Bg.indexOf(e)},Hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Rh="scrollLeft",Ph="scrollTop",dd=function(){return Sr&&Sr.isPressed||je.cache++},Lh=function(e,t){var n=function i(s){if(s||s===0){Gg&&ei.history.scrollRestoration!=="manual"&&(ei.history.scrollRestoration="manual");var a=Sr&&Sr.isPressed;s=i.v=Math.round(s)||(Sr&&Sr.iOS?1:0),e(s),i.cacheID=je.cache,a&&fd("ss",s)}else(t||je.cache!==i.cacheID||fd("ref"))&&(i.cacheID=je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},In={s:Rh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Lh(function(r){return arguments.length?ei.scrollTo(r,Qt.sc()):ei.pageXOffset||jr[Rh]||es[Rh]||Pa[Rh]||0})},Qt={s:Ph,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Lh(function(r){return arguments.length?ei.scrollTo(In.sc(),r):ei.pageYOffset||jr[Ph]||es[Ph]||Pa[Ph]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Qb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Mr=function(e,t){var n=t.s,i=t.sc;jo(e)&&(e=jr.scrollingElement||es);var s=je.indexOf(e),a=i===Qt.sc?1:2;!~s&&(s=je.push(e)-1),je[s+a]||Hn(e,"scroll",dd);var o=je[s+a],l=o||(je[s+a]=Lh(br(e,n),!0)||(jo(e)?i:Lh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},Dh=function(e,t,n){var i=e,s=e,a=Qo(),o=a,l=t||50,c=Math.max(500,l*3),h=function(m,x){var p=Qo();x||p-a>l?(s=i,i=m,o=a,a=p):n?i+=m:i=s+(m-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(m){var x=o,p=s,g=Qo();return(m||m===0)&&m!==i&&h(m),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-x)*1e3};return{update:h,reset:d,getVelocity:f}},Ko=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Fg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Vg=function(){Ia=vn.core.globals().ScrollTrigger,Ia&&Ia.core&&Kb()},Hg=function(e){return vn=e||kg(),!Ih&&vn&&typeof document<"u"&&document.body&&(ei=window,jr=document,es=jr.documentElement,Pa=jr.body,Bg=[ei,jr,es,Pa],$b=vn.utils.clamp,zg=vn.core.context||function(){},Rs="onpointerenter"in Pa?"pointer":"mouse",Og=Xt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=Xt.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gg=0},500),Ih=1),Ia||Vg(),Ih};In.op=Qt;je.cache=0;var Xt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ih||Hg(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Ia||Vg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,m=n.wheelSpeed,x=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,S=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,_=n.onUp,M=n.onDown,P=n.onChangeX,A=n.onChangeY,D=n.onChange,N=n.onToggleX,G=n.onToggleY,I=n.onHover,k=n.onHoverEnd,q=n.onMove,O=n.ignoreCheck,X=n.isNormalizer,V=n.onGestureStart,R=n.onGestureEnd,ee=n.onWheel,Se=n.onEnable,ze=n.onDisable,J=n.onClick,ue=n.scrollSpeed,xe=n.capture,Me=n.allowClicks,ce=n.lockAxis,Ce=n.onLockAxis;this.target=o=Wn(o)||es,this.vars=n,u&&(u=vn.utils.toArray(u)),i=i||1e-9,s=s||0,m=m||1,ue=ue||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(Pa).lineHeight)||22);var ft,Ae,Ve,Re,De,Te,Ie,H=this,Fe=0,at=0,it=n.passive||!h&&n.passive!==!1,We=Mr(o,In),mt=Mr(o,Qt),St=We(),F=mt(),dt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Oi[0]==="pointerdown",$e=jo(o),ke=o.ownerDocument||jr,se=[0,0,0],ot=[0,0,0],Oe=0,Ge=function(){return Oe=Qo()},C=function(me,re){return(H.event=me)&&u&&Qb(me.target,u)||re&&dt&&me.pointerType!=="touch"||O&&O(me,re)},b=function(){H._vx.reset(),H._vy.reset(),Ae.pause(),d&&d(H)},z=function(){var me=H.deltaX=Fg(se),re=H.deltaY=Fg(ot),te=Math.abs(me)>=i,_e=Math.abs(re)>=i;D&&(te||_e)&&D(H,me,re,se,ot),te&&(T&&H.deltaX>0&&T(H),E&&H.deltaX<0&&E(H),P&&P(H),N&&H.deltaX<0!=Fe<0&&N(H),Fe=H.deltaX,se[0]=se[1]=se[2]=0),_e&&(M&&H.deltaY>0&&M(H),_&&H.deltaY<0&&_(H),A&&A(H),G&&H.deltaY<0!=at<0&&G(H),at=H.deltaY,ot[0]=ot[1]=ot[2]=0),(Re||Ve)&&(q&&q(H),Ve&&(p&&Ve===1&&p(H),v&&v(H),Ve=0),Re=!1),Te&&!(Te=!1)&&Ce&&Ce(H),De&&(ee(H),De=!1),ft=0},ae=function(me,re,te){se[te]+=me,ot[te]+=re,H._vx.update(me),H._vy.update(re),c?ft||(ft=requestAnimationFrame(z)):z()},ie=function(me,re){ce&&!Ie&&(H.axis=Ie=Math.abs(me)>Math.abs(re)?"x":"y",Te=!0),Ie!=="y"&&(se[2]+=me,H._vx.update(me,!0)),Ie!=="x"&&(ot[2]+=re,H._vy.update(re,!0)),c?ft||(ft=requestAnimationFrame(z)):z()},fe=function(me){if(!C(me,1)){me=Ko(me,h);var re=me.clientX,te=me.clientY,_e=re-H.x,ne=te-H.y,we=H.isDragging;H.x=re,H.y=te,(we||(_e||ne)&&(Math.abs(H.startX-re)>=s||Math.abs(H.startY-te)>=s))&&(Ve||(Ve=we?2:1),we||(H.isDragging=!0),ie(_e,ne))}},ge=H.onPress=function(oe){C(oe,1)||oe&&oe.button||(H.axis=Ie=null,Ae.pause(),H.isPressed=!0,oe=Ko(oe),Fe=at=0,H.startX=H.x=oe.clientX,H.startY=H.y=oe.clientY,H._vx.reset(),H._vy.reset(),Hn(X?o:ke,Oi[1],fe,it,!0),H.deltaX=H.deltaY=0,S&&S(H))},W=H.onRelease=function(oe){if(!C(oe,1)){Vn(X?o:ke,Oi[1],fe,!0);var me=!isNaN(H.y-H.startY),re=H.isDragging,te=re&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),_e=Ko(oe);!te&&me&&(H._vx.reset(),H._vy.reset(),h&&Me&&vn.delayedCall(.08,function(){if(Qo()-Oe>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(ke.createEvent){var ne=ke.createEvent("MouseEvents");ne.initMouseEvent("click",!0,!0,ei,1,_e.screenX,_e.screenY,_e.clientX,_e.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(ne)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,d&&re&&!X&&Ae.restart(!0),Ve&&z(),g&&re&&g(H),y&&y(H,te)}},j=function(me){return me.touches&&me.touches.length>1&&(H.isGesturing=!0)&&V(me,H.isDragging)},he=function(){return(H.isGesturing=!1)||R(H)},L=function(me){if(!C(me)){var re=We(),te=mt();ae((re-St)*ue,(te-F)*ue,1),St=re,F=te,d&&Ae.restart(!0)}},Q=function(me){if(!C(me)){me=Ko(me,h),ee&&(De=!0);var re=(me.deltaMode===1?l:me.deltaMode===2?ei.innerHeight:1)*m;ae(me.deltaX*re,me.deltaY*re,0),d&&!X&&Ae.restart(!0)}},K=function(me){if(!C(me)){var re=me.clientX,te=me.clientY,_e=re-H.x,ne=te-H.y;H.x=re,H.y=te,Re=!0,d&&Ae.restart(!0),(_e||ne)&&ie(_e,ne)}},de=function(me){H.event=me,I(H)},le=function(me){H.event=me,k(H)},pe=function(me){return C(me)||Ko(me,h)&&J(H)};Ae=H._dc=vn.delayedCall(f||.25,b).pause(),H.deltaX=H.deltaY=0,H._vx=Dh(0,50,!0),H._vy=Dh(0,50,!0),H.scrollX=We,H.scrollY=mt,H.isDragging=H.isGesturing=H.isPressed=!1,zg(this),H.enable=function(oe){return H.isEnabled||(Hn($e?ke:o,"scroll",dd),a.indexOf("scroll")>=0&&Hn($e?ke:o,"scroll",L,it,xe),a.indexOf("wheel")>=0&&Hn(o,"wheel",Q,it,xe),(a.indexOf("touch")>=0&&Og||a.indexOf("pointer")>=0)&&(Hn(o,Oi[0],ge,it,xe),Hn(ke,Oi[2],W),Hn(ke,Oi[3],W),Me&&Hn(o,"click",Ge,!0,!0),J&&Hn(o,"click",pe),V&&Hn(ke,"gesturestart",j),R&&Hn(ke,"gestureend",he),I&&Hn(o,Rs+"enter",de),k&&Hn(o,Rs+"leave",le),q&&Hn(o,Rs+"move",K)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Re=Ve=!1,H._vx.reset(),H._vy.reset(),St=We(),F=mt(),oe&&oe.type&&ge(oe),Se&&Se(H)),H},H.disable=function(){H.isEnabled&&(Ra.filter(function(oe){return oe!==H&&jo(oe.target)}).length||Vn($e?ke:o,"scroll",dd),H.isPressed&&(H._vx.reset(),H._vy.reset(),Vn(X?o:ke,Oi[1],fe,!0)),Vn($e?ke:o,"scroll",L,xe),Vn(o,"wheel",Q,xe),Vn(o,Oi[0],ge,xe),Vn(ke,Oi[2],W),Vn(ke,Oi[3],W),Vn(o,"click",Ge,!0),Vn(o,"click",pe),Vn(ke,"gesturestart",j),Vn(ke,"gestureend",he),Vn(o,Rs+"enter",de),Vn(o,Rs+"leave",le),Vn(o,Rs+"move",K),H.isEnabled=H.isPressed=H.isDragging=!1,ze&&ze(H))},H.kill=H.revert=function(){H.disable();var oe=Ra.indexOf(H);oe>=0&&Ra.splice(oe,1),Sr===H&&(Sr=0)},Ra.push(H),X&&jo(o)&&(Sr=H),H.enable(x)},Jb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Xt.version="3.15.1";Xt.create=function(r){return new Xt(r)};Xt.register=Hg;Xt.getAll=function(){return Ra.slice()};Xt.getById=function(r){return Ra.filter(function(e){return e.vars.id===r})[0]};kg()&&vn.registerPlugin(Xt);var Pe,Ua,tt,yt,pi,vt,Ad,Jh,fl,al,tl,Nh,Ln,Qh,yd,qn,Wg,Xg,Fa,o0,pd,l0,Xn,Sd,c0,h0,ts,Md,Cd,Oa,Rd,ns,bd,md,Uh=1,Dn=Date.now,gd=Dn(),Ci=0,nl=0,qg=function(e,t,n){var i=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Yg=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},jb=function r(){return nl&&requestAnimationFrame(r)},Zg=function(){return Qh=1},Jg=function(){return Qh=0},ji=function(e){return e},il=function(e){return Math.round(e*1e5)/1e5||0},u0=function(){return typeof window<"u"},f0=function(){return Pe||u0()&&(Pe=window.gsap)&&Pe.registerPlugin&&Pe},Us=function(e){return!!~Ad.indexOf(e)},d0=function(e){return(e==="Height"?Rd:tt["inner"+e])||pi["client"+e]||vt["client"+e]},p0=function(e){return br(e,"getBoundingClientRect")||(Us(e)?function(){return Zh.width=tt.innerWidth,Zh.height=Rd,Zh}:function(){return Tr(e)})},e1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=br(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?d0(s):e["client"+s])||0}},t1=function(e,t){return!t||~Bi.indexOf(e)?p0(e):function(){return Zh}},er=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=br(e,n))?a()-p0(e)()[s]:Us(e)?(pi[n]||vt[n])-d0(i):e[n]-e["offset"+i])},Fh=function(e,t){for(var n=0;n<Fa.length;n+=3)(!t||~t.indexOf(Fa[n+1]))&&e(Fa[n],Fa[n+1],Fa[n+2])},di=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},rl=function(e){return typeof e=="number"},Ps=function(e){return typeof e=="object"},el=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},La=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Da=Math.abs,m0="left",g0="top",Pd="right",Id="bottom",Ls="width",Ds="height",ol="Right",ll="Left",cl="Top",hl="Bottom",jt="padding",Ei="margin",za="Width",Ld="Height",ln="px",Ai=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},n1=function(e){var t=Ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$g=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tr=function(e,t){var n=t&&Ai(e)[yd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},$h=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},_0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},i1=function(e){return function(t){return Pe.utils.snap(_0(e),t)}},Dd=function(e){var t=Pe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},r1=function(e){return function(t,n){return Dd(_0(e))(t,n.direction)}},Oh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},dn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zh={toggleActions:"play",anticipatePin:0},Kh={top:0,left:0,center:.5,bottom:1,right:1},Wh=function(e,t){if(di(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Kh?Kh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},kh=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,f=s.indent,u=s.fontWeight,m=yt.createElement("div"),x=Us(n)||br(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=x?vt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,S=v?c:h,y="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(y+=(i===Qt?Pd:Id)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],Xh(m,0,i,v),m},Xh=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+za]=1,s["border"+o+za]=0,s[n.p]=t+"px",Pe.set(e,s)},et=[],Td={},dl,Qg=function(){return Dn()-Ci>34&&(dl||(dl=requestAnimationFrame(wr)))},Na=function(){(!Xn||!Xn.isPressed||Xn.startX>vt.clientWidth)&&(je.cache++,Xn?dl||(dl=requestAnimationFrame(wr)):wr(),Ci||Os("scrollStart"),Ci=Dn())},_d=function(){h0=tt.innerWidth,c0=tt.innerHeight},sl=function(e){je.cache++,(e===!0||!Ln&&!l0&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Sd||h0!==tt.innerWidth||Math.abs(tt.innerHeight-c0)>tt.innerHeight*.25))&&Jh.restart(!0)},Fs={},s1=[],x0=function r(){return dn(nt,"scrollEnd",r)||Is(!0)},Os=function(e){return Fs[e]&&Fs[e].map(function(t){return t()})||s1},fi=[],v0=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},y0=function(){je.cache++,je.forEach(function(e){return Nn(e)&&(e.rec=e())})},Nd=function(e,t){var n;for(qn=0;qn<et.length;qn++)n=et[qn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ns=!0,t&&v0(t),t||Os("revert")},S0=function(e,t){je.cache++,(t||!Yn)&&je.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(Cd=e,tt.history.scrollRestoration!==e&&(tt.history.scrollRestoration=e))},Yn,Ns=0,jg,a1=function(){if(jg!==Ns){var e=jg=Ns;requestAnimationFrame(function(){return e===Ns&&Is(!0)})}},M0=function(){vt.appendChild(Oa),Rd=!Xn&&Oa.offsetHeight||tt.innerHeight,vt.removeChild(Oa)},e0=function(e){return fl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Is=function(e,t){if(pi=yt.documentElement,vt=yt.body,Ad=[tt,yt,pi,vt],Ci&&!e&&!ns){pn(nt,"scrollEnd",x0);return}M0(),Yn=nt.isRefreshing=!0,ns||y0();var n=Os("refreshInit");o0&&nt.sort(),t||Nd(),je.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),ns=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),bd=1,e0(!0),et.forEach(function(i){var s=er(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),e0(!1),bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),je.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),S0(Cd,1),Jh.pause(),Ns++,Yn=2,wr(2),et.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=nt.isRefreshing=!1,Os("refresh")},wd=0,qh=1,ul,wr=function(e){if(e===2||!Yn&&!ns){nt.isUpdating=!0,ul&&ul.update(0);var t=et.length,n=Dn(),i=n-gd>=50,s=t&&et[0].scroll();if(qh=wd>s?-1:1,Yn||(wd=s),i&&(Ci&&!Qh&&n-Ci>200&&(Ci=0,Os("scrollEnd")),tl=gd,gd=n),qh<0){for(qn=t;qn-- >0;)et[qn]&&et[qn].update(0,i);qh=1}else for(qn=0;qn<t;qn++)et[qn]&&et[qn].update(0,i);nt.isUpdating=!1}dl=0},Ed=[m0,g0,Id,Pd,Ei+hl,Ei+ol,Ei+cl,Ei+ll,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yh=Ed.concat([Ls,Ds,"boxSizing","max"+za,"max"+Ld,"position",Ei,jt,jt+cl,jt+ol,jt+hl,jt+ll]),o1=function(e,t,n){Ba(n);var i=e._gsap;if(i.spacerIsNative)Ba(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ed.length,a=t.style,o=e.style,l;s--;)l=Ed[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Id]=o[Pd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ls]=$h(e,In)+ln,a[Ds]=$h(e,Qt)+ln,a[jt]=o[Ei]=o[g0]=o[m0]="0",Ba(i),o[Ls]=o["max"+za]=n[Ls],o[Ds]=o["max"+Ld]=n[Ds],o[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},l1=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Pe.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(l1,"-$1").toLowerCase())}},Gh=function(e){for(var t=Yh.length,n=e.style,i=[],s=0;s<t;s++)i.push(Yh[s],n[Yh[s]]);return i.t=e,i},c1=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Zh={left:0,top:0},t0=function(e,t,n,i,s,a,o,l,c,h,d,f,u,m){Nn(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Wh("0"+e.substr(3),n):0));var x=u?u.time():0,p,g,v;if(u&&u.seek(0),isNaN(e)||(e=+e),rl(e))u&&(e=Pe.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,e)),o&&Xh(o,n,i,!0);else{Nn(t)&&(t=t(l));var S=(e||"0").split(" "),y,T,E,_;v=Wn(t,l)||vt,y=Tr(v)||{},(!y||!y.left&&!y.top)&&Ai(v).display==="none"&&(_=v.style.display,v.style.display="block",y=Tr(v),_?v.style.display=_:v.style.removeProperty("display")),T=Wh(S[0],y[i.d]),E=Wh(S[1]||"0",n),e=y[i.p]-c[i.p]-h+T+s-E,o&&Xh(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(m&&(l[m]=e||-.001,e<0&&(e=0)),a){var M=e+n,P=a._isStart;p="scroll"+i.d2,Xh(a,M,i,P&&M>20||!P&&(d?Math.max(vt[p],pi[p]):a.parentNode[p])<=M+1),d&&(c=Tr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+ln))}return u&&v&&(p=Tr(v),u.seek(f),g=Tr(v),u._caScrollDist=p[i.p]-g[i.p],e=e/u._caScrollDist*f),u&&u.seek(x),u?e:Math.round(e)},h1=/(webkit|moz|length|cssText|inset)/i,n0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===vt){e._stOrig=s.cssText,o=Ai(e);for(a in o)!+a&&!h1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Pe.core.getCache(e).uncache=1,t.appendChild(e)}},b0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Vh=function(e,t,n){var i={};i[t.p]="+="+n,Pe.set(e,i)},i0=function(e,t){var n=Mr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,d){var f=a.tween,u=l.onComplete,m={};c=c||n();var x=b0(n,c,function(){f.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=m,m[i]=function(){return x(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){je.cache++,a.tween&&wr()},l.onComplete=function(){a.tween=0,u&&u.call(f)},f=a.tween=Pe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},pn(e,"wheel",n.wheelHandler),nt.isTouch&&pn(e,"touchmove",n.wheelHandler),s},nt=(function(){function r(t,n){Ua||r.register(Pe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Md(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nl){this.update=this.refresh=this.kill=ji;return}n=$g(di(n)||rl(n)||n.nodeType?{trigger:n}:n,zh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,f=s.trigger,u=s.pin,m=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,S=s.once,y=s.snap,T=s.pinReparent,E=s.pinSpacer,_=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:Qt,D=!d&&d!==0,N=Wn(n.scroller||tt),G=Pe.core.getCache(N),I=Us(N),k=("pinType"in n?n.pinType:br(N,"pinType")||I&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=D&&n.toggleActions.split(" "),X="markers"in n?n.markers:zh.markers,V=I?0:parseFloat(Ai(N)["border"+A.p2+za])||0,R=this,ee=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Se=e1(N,I,A),ze=t1(N,I),J=0,ue=0,xe=0,Me=Mr(N,A),ce,Ce,ft,Ae,Ve,Re,De,Te,Ie,H,Fe,at,it,We,mt,St,F,dt,$e,ke,se,ot,Oe,Ge,C,b,z,ae,ie,fe,ge,W,j,he,L,Q,K,de,le;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=N,R.scroll=_?_.time.bind(_):Me,Ae=Me(),ns&&Me.rec==null&&(Me.rec=Ae),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(o0=1,n.refreshPriority===-9999&&(ul=R)),G.tweenScroll=G.tweenScroll||{top:i0(N,Qt),left:i0(N,In)},R.tweenTo=ce=G.tweenScroll[A.p],R.scrubDuration=function(te){j=rl(te)&&te,j?W?W.duration(te):W=Pe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:j,paused:!0,onComplete:function(){return g&&g(R)}}):(W&&W.progress(1).kill(),W=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),fe=0,l||(l=i.vars.id)),y&&((!Ps(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in vt.style&&Pe.set(I?[vt,pi]:N,{scrollBehavior:"auto"}),je.forEach(function(te){return Nn(te)&&te.target===(I?yt.scrollingElement||pi:N)&&(te.smooth=!1)}),ft=Nn(y.snapTo)?y.snapTo:y.snapTo==="labels"?i1(i):y.snapTo==="labelsDirectional"?r1(i):y.directional!==!1?function(te,_e){return Dd(y.snapTo)(te,Dn()-ue<500?0:_e.direction)}:Pe.utils.snap(y.snapTo),he=y.duration||{min:.1,max:2},he=Ps(he)?al(he.min,he.max):al(he,he),L=Pe.delayedCall(y.delay||j/2||.1,function(){var te=Me(),_e=Dn()-ue<500,ne=ce.tween;if((_e||Math.abs(R.getVelocity())<10)&&!ne&&!Qh&&J!==te){var we=(te-Re)/We,rt=i&&!D?i.totalProgress():we,Ze=_e?0:(rt-ge)/(Dn()-tl)*1e3||0,It=Pe.utils.clamp(-we,1-we,Da(Ze/2)*Ze/.185),Zt=we+(y.inertia===!1?0:It),Lt,Tt,_t=y,tn=_t.onStart,wt=_t.onInterrupt,Sn=_t.onComplete;if(Lt=ft(Zt,R),rl(Lt)||(Lt=Zt),Tt=Math.max(0,Math.round(Re+Lt*We)),te<=De&&te>=Re&&Tt!==te){if(ne&&!ne._initted&&ne.data<=Da(Tt-te))return;y.inertia===!1&&(It=Lt-we),ce(Tt,{duration:he(Da(Math.max(Da(Zt-rt),Da(Lt-rt))*.185/Ze/.05||0)),ease:y.ease||"power3",data:Da(Tt-te),onInterrupt:function(){return L.restart(!0)&&wt&&La(R,wt)},onComplete:function(){R.update(),J=Me(),i&&!D&&(W?W.resetTo("totalProgress",Lt,i._tTime/i._tDur):i.progress(Lt)),fe=ge=i&&!D?i.totalProgress():R.progress,v&&v(R),Sn&&La(R,Sn)}},te,It*We,Tt-te-It*We),tn&&La(R,tn,ce.tween)}}else R.isActive&&J!==te&&L.restart(!0)}).pause()),l&&(Td[l]=R),f=R.trigger=Wn(f||u!==!0&&u),le=f&&f._gsap&&f._gsap.stRevert,le&&(le=le(R)),u=u===!0?f:Wn(u),di(o)&&(o={targets:f,className:o}),u&&(m===!1||m===Ei||(m=!m&&u.parentNode&&u.parentNode.style&&Ai(u.parentNode).display==="flex"?!1:jt),R.pin=u,Ce=Pe.core.getCache(u),Ce.spacer?mt=Ce.pinState:(E&&(E=Wn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ce.spacerIsNative=!!E,E&&(Ce.spacerState=Gh(E))),Ce.spacer=dt=E||yt.createElement("div"),dt.classList.add("pin-spacer"),l&&dt.classList.add("pin-spacer-"+l),Ce.pinState=mt=Gh(u)),n.force3D!==!1&&Pe.set(u,{force3D:!0}),R.spacer=dt=Ce.spacer,ie=Ai(u),Ge=ie[m+A.os2],ke=Pe.getProperty(u),se=Pe.quickSetter(u,A.a,ln),xd(u,dt,ie),F=Gh(u)),X){at=Ps(X)?$g(X,Kg):Kg,H=kh("scroller-start",l,N,A,at,0),Fe=kh("scroller-end",l,N,A,at,0,H),$e=H["offset"+A.op.d2];var pe=Wn(br(N,"content")||N);Te=this.markerStart=kh("start",l,pe,A,at,$e,0,_),Ie=this.markerEnd=kh("end",l,pe,A,at,$e,0,_),_&&(de=Pe.quickSetter([Te,Ie],A.a,ln)),!k&&!(Bi.length&&br(N,"fixedMarkers")===!0)&&(n1(I?vt:N),Pe.set([H,Fe],{force3D:!0}),b=Pe.quickSetter(H,A.a,ln),ae=Pe.quickSetter(Fe,A.a,ln))}if(_){var oe=_.vars.onUpdate,me=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){R.update(0,0,1),oe&&oe.apply(_,me||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(te,_e){if(!_e)return R.kill(!0);var ne=te!==!1||!R.enabled,we=Ln;ne!==R.isReverted&&(ne&&(Q=Math.max(Me(),R.scroll.rec||0),xe=R.progress,K=i&&i.progress()),Te&&[Te,Ie,H,Fe].forEach(function(rt){return rt.style.display=ne?"none":"block"}),ne&&(Ln=R,R.update(ne)),u&&(!T||!R.isActive)&&(ne?o1(u,dt,mt):xd(u,dt,Ai(u),C)),ne||R.update(ne),Ln=we,R.isReverted=ne)},R.refresh=function(te,_e,ne,we){if(!((Ln||!R.enabled)&&!_e)){if(u&&te&&Ci){pn(r,"scrollEnd",x0);return}!Yn&&ee&&ee(R),Ln=R,ce.tween&&!ne&&(ce.tween.kill(),ce.tween=0),W&&W.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(B){return B.vars.immediateRender&&B.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var rt=Se(),Ze=ze(),It=_?_.duration():er(N,A),Zt=We<=.01||!We,Lt=0,Tt=we||0,_t=Ps(ne)?ne.end:n.end,tn=n.endTrigger||f,wt=Ps(ne)?ne.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),Sn=R.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,R),ti=f&&Math.max(0,et.indexOf(R))||0,Gt=ti,Jt,nn,ni,Bs,rn,Vt,gi,Ga,pl,Ar,w,U,$;for(X&&Ps(ne)&&(U=Pe.getProperty(H,A.p),$=Pe.getProperty(Fe,A.p));Gt-- >0;)Vt=et[Gt],Vt.end||Vt.refresh(0,1)||(Ln=R),gi=Vt.pin,gi&&(gi===f||gi===u||gi===Sn)&&!Vt.isReverted&&(Ar||(Ar=[]),Ar.unshift(Vt),Vt.revert(!0,!0)),Vt!==et[Gt]&&(ti--,Gt--);for(Nn(wt)&&(wt=wt(R)),wt=qg(wt,"start",R),Re=t0(wt,f,rt,A,Me(),Te,H,R,Ze,V,k,It,_,R._startClamp&&"_startClamp")||(u?-.001:0),Nn(_t)&&(_t=_t(R)),di(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(di(wt)?wt.split(" ")[0]:"")+_t:(Lt=Wh(_t.substr(2),rt),_t=di(wt)?wt:(_?Pe.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Re):Re)+Lt,tn=f)),_t=qg(_t,"end",R),De=Math.max(Re,t0(_t||(tn?"100% 0":It),tn,rt,A,Me()+Lt,Ie,Fe,R,Ze,V,k,It,_,R._endClamp&&"_endClamp"))||-.001,Lt=0,Gt=ti;Gt--;)Vt=et[Gt]||{},gi=Vt.pin,gi&&Vt.start-Vt._pinPush<=Re&&!_&&Vt.end>0&&(Jt=Vt.end-(R._startClamp?Math.max(0,Vt.start):Vt.start),(gi===f&&Vt.start-Vt._pinPush<Re||gi===Sn)&&isNaN(wt)&&(Lt+=Jt*(1-Vt.progress)),gi===u&&(Tt+=Jt));if(Re+=Lt,De+=Lt,R._startClamp&&(R._startClamp+=Lt),R._endClamp&&!Yn&&(R._endClamp=De||-.001,De=Math.min(De,er(N,A))),We=De-Re||(Re-=.01)&&.001,Zt&&(xe=Pe.utils.clamp(0,1,Pe.utils.normalize(Re,De,Q))),R._pinPush=Tt,Te&&Lt&&(Jt={},Jt[A.a]="+="+Lt,Sn&&(Jt[A.p]="-="+Me()),Pe.set([Te,Ie],Jt)),u&&!(bd&&R.end>=er(N,A)))Jt=Ai(u),Bs=A===Qt,ni=Me(),ot=parseFloat(ke(A.a))+Tt,!It&&De>1&&(w=(I?yt.scrollingElement||pi:N).style,w={style:w,value:w["overflow"+A.a.toUpperCase()]},I&&Ai(vt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+A.a.toUpperCase()]="scroll")),xd(u,dt,Jt),F=Gh(u),nn=Tr(u,!0),Ga=k&&Mr(N,Bs?In:Qt)(),m?(C=[m+A.os2,We+Tt+ln],C.t=dt,Gt=m===jt?$h(u,A)+We+Tt:0,Gt&&(C.push(A.d,Gt+ln),dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Gt+ln)),Ba(C),Sn&&et.forEach(function(B){B.pin===Sn&&B.vars.pinSpacing!==!1&&(B._subPinOffset=!0)}),k&&Me(Q)):(Gt=$h(u,A),Gt&&dt.style.flexBasis!=="auto"&&(dt.style.flexBasis=Gt+ln)),k&&(rn={top:nn.top+(Bs?ni-Re:Ga)+ln,left:nn.left+(Bs?Ga:ni-Re)+ln,boxSizing:"border-box",position:"fixed"},rn[Ls]=rn["max"+za]=Math.ceil(nn.width)+ln,rn[Ds]=rn["max"+Ld]=Math.ceil(nn.height)+ln,rn[Ei]=rn[Ei+cl]=rn[Ei+ol]=rn[Ei+hl]=rn[Ei+ll]="0",rn[jt]=Jt[jt],rn[jt+cl]=Jt[jt+cl],rn[jt+ol]=Jt[jt+ol],rn[jt+hl]=Jt[jt+hl],rn[jt+ll]=Jt[jt+ll],St=c1(mt,rn,T),Yn&&Me(0)),i?(pl=i._initted,pd(1),i.render(i.duration(),!0,!0),Oe=ke(A.a)-ot+We+Tt,z=Math.abs(We-Oe)>1,k&&z&&St.splice(St.length-2,2),i.render(0,!0,!0),pl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pd(0)):Oe=We,w&&(w.value?w.style["overflow"+A.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+A.a));else if(f&&Me()&&!_)for(nn=f.parentNode;nn&&nn!==vt;)nn._pinOffset&&(Re-=nn._pinOffset,De-=nn._pinOffset),nn=nn.parentNode;Ar&&Ar.forEach(function(B){return B.revert(!1,!0)}),R.start=Re,R.end=De,Ae=Ve=Yn?Q:Me(),!_&&!Yn&&!ns&&(Ae<Q&&Me(Q),R.scroll.rec=0),R.revert(!1,!0),ue=Dn(),L&&(J=-1,L.restart(!0)),Ln=0,i&&D&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Zt||xe!==R.progress||_||x||i&&!i._initted)&&(i&&!D&&(i._initted||xe||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Re<-.001&&!xe?Pe.utils.normalize(Re,De,0):xe,!0),R.progress=Zt||(Ae-Re)/We===xe?0:xe),u&&m&&(dt._pinOffset=Math.round(R.progress*Oe)),W&&W.invalidate(),isNaN(U)||(U-=Pe.getProperty(H,A.p),$-=Pe.getProperty(Fe,A.p),Vh(H,A,U),Vh(Te,A,U-(we||0)),Vh(Fe,A,$),Vh(Ie,A,$-(we||0))),Zt&&!Yn&&R.update(),h&&!Yn&&!it&&(it=!0,h(R),it=!1)}},R.getVelocity=function(){return(Me()-Ve)/(Dn()-tl)*1e3||0},R.endAnimation=function(){el(R.callbackAnimation),i&&(W?W.progress(1):i.paused()?D||el(i,R.direction<0,1):el(i,i.reversed()))},R.labelToScroll=function(te){return i&&i.labels&&(Re||R.refresh()||Re)+i.labels[te]/i.duration()*We||0},R.getTrailing=function(te){var _e=et.indexOf(R),ne=R.direction>0?et.slice(0,_e).reverse():et.slice(_e+1);return(di(te)?ne.filter(function(we){return we.vars.preventOverlaps===te}):ne).filter(function(we){return R.direction>0?we.end<=Re:we.start>=De})},R.update=function(te,_e,ne){if(!(_&&!ne&&!te)){var we=Yn===!0?Q:R.scroll(),rt=te?0:(we-Re)/We,Ze=rt<0?0:rt>1?1:rt||0,It=R.progress,Zt,Lt,Tt,_t,tn,wt,Sn,ti;if(_e&&(Ve=Ae,Ae=_?Me():we,y&&(ge=fe,fe=i&&!D?i.totalProgress():Ze)),p&&u&&!Ln&&!Uh&&Ci&&(!Ze&&Re<we+(we-Ve)/(Dn()-tl)*p?Ze=1e-4:Ze===1&&De>we+(we-Ve)/(Dn()-tl)*p&&(Ze=.9999)),Ze!==It&&R.enabled){if(Zt=R.isActive=!!Ze&&Ze<1,Lt=!!It&&It<1,wt=Zt!==Lt,tn=wt||!!Ze!=!!It,R.direction=Ze>It?1:-1,R.progress=Ze,tn&&!Ln&&(Tt=Ze&&!It?0:Ze===1?1:It===1?2:3,D&&(_t=!wt&&O[Tt+1]!=="none"&&O[Tt+1]||O[Tt],ti=i&&(_t==="complete"||_t==="reset"||_t in i))),P&&(wt||ti)&&(ti||d||!i)&&(Nn(P)?P(R):R.getTrailing(P).forEach(function(ni){return ni.endAnimation()})),D||(W&&!Ln&&!Uh?(W._dp._time-W._start!==W._time&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",Ze,i._tTime/i._tDur):(W.vars.totalProgress=Ze,W.invalidate().restart())):i&&i.totalProgress(Ze,!!(Ln&&(ue||te)))),u){if(te&&m&&(dt.style[m+A.os2]=Ge),!k)se(il(ot+Oe*Ze));else if(tn){if(Sn=!te&&Ze>It&&De+1>we&&we+1>=er(N,A),T)if(!te&&(Zt||Sn)){var Gt=Tr(u,!0),Jt=we-Re;n0(u,vt,Gt.top+(A===Qt?Jt:0)+ln,Gt.left+(A===Qt?0:Jt)+ln)}else n0(u,dt);Ba(Zt||Sn?St:F),z&&Ze<1&&Zt||se(ot+(Ze===1&&!Sn?Oe:0))}}y&&!ce.tween&&!Ln&&!Uh&&L.restart(!0),o&&(wt||S&&Ze&&(Ze<1||!md))&&fl(o.targets).forEach(function(ni){return ni.classList[Zt||S?"add":"remove"](o.className)}),a&&!D&&!te&&a(R),tn&&!Ln?(D&&(ti&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),a&&a(R)),(wt||!md)&&(c&&wt&&La(R,c),q[Tt]&&La(R,q[Tt]),S&&(Ze===1?R.kill(!1,1):q[Tt]=0),wt||(Tt=Ze===1?1:3,q[Tt]&&La(R,q[Tt]))),M&&!Zt&&Math.abs(R.getVelocity())>(rl(M)?M:2500)&&(el(R.callbackAnimation),W?W.progress(1):el(i,_t==="reverse"?1:!Ze,1))):D&&a&&!Ln&&a(R)}if(ae){var nn=_?we/_.duration()*(_._caScrollDist||0):we;b(nn+(H._isFlipped?1:0)),ae(nn)}de&&de(-we/_.duration()*(_._caScrollDist||0))}},R.enable=function(te,_e){R.enabled||(R.enabled=!0,pn(N,"resize",sl),I||pn(N,"scroll",Na),ee&&pn(r,"refreshInit",ee),te!==!1&&(R.progress=xe=0,Ae=Ve=J=Me()),_e!==!1&&R.refresh())},R.getTween=function(te){return te&&ce?ce.tween:W},R.setPositions=function(te,_e,ne,we){if(_){var rt=_.scrollTrigger,Ze=_.duration(),It=rt.end-rt.start;te=rt.start+It*te/Ze,_e=rt.start+It*_e/Ze}R.refresh(!1,!1,{start:Yg(te,ne&&!!R._startClamp),end:Yg(_e,ne&&!!R._endClamp)},we),R.update()},R.adjustPinSpacing=function(te){if(C&&te){var _e=C.indexOf(A.d)+1;C[_e]=parseFloat(C[_e])+te+ln,C[1]=parseFloat(C[1])+te+ln,Ba(C)}},R.disable=function(te,_e){if(te!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,_e||W&&W.pause(),Q=0,Ce&&(Ce.uncache=1),ee&&dn(r,"refreshInit",ee),L&&(L.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!I)){for(var ne=et.length;ne--;)if(et[ne].scroller===N&&et[ne]!==R)return;dn(N,"resize",sl),I||dn(N,"scroll",Na)}},R.kill=function(te,_e){R.disable(te,_e),W&&!_e&&W.kill(),l&&delete Td[l];var ne=et.indexOf(R);ne>=0&&et.splice(ne,1),ne===qn&&qh>0&&qn--,ne=0,et.forEach(function(we){return we.scroller===R.scroller&&(ne=1)}),ne||Yn||ns||(R.scroll.rec=0),i&&(i.scrollTrigger=null,te&&i.revert({kill:!1}),_e||i.kill()),Te&&[Te,Ie,H,Fe].forEach(function(we){return we.parentNode&&we.parentNode.removeChild(we)}),ul===R&&(ul=0),u&&(Ce&&(Ce.uncache=1),ne=0,et.forEach(function(we){return we.pin===u&&ne++}),ne||(Ce.spacer=0)),n.onKill&&n.onKill(R)},et.push(R),R.enable(!1,!1),le&&le(R),i&&i.add&&!We){var re=R.update;R.update=function(){R.update=re,je.cache++,Re||De||R.refresh()},Pe.delayedCall(.01,R.update),We=.01,Re=De=0}else R.refresh();u&&a1()},r.register=function(n){return Ua||(Pe=n||f0(),u0()&&window.document&&r.enable(),Ua=nl),Ua},r.defaults=function(n){if(n)for(var i in n)zh[i]=n[i];return zh},r.disable=function(n,i){nl=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),dn(tt,"wheel",Na),dn(yt,"scroll",Na),clearInterval(Nh),dn(yt,"touchcancel",ji),dn(vt,"touchstart",ji),Oh(dn,yt,"pointerdown,touchstart,mousedown",Zg),Oh(dn,yt,"pointerup,touchend,mouseup",Jg),Jh.kill(),Fh(dn);for(var s=0;s<je.length;s+=3)Bh(dn,je[s],je[s+1]),Bh(dn,je[s],je[s+2])},r.enable=function(){if(tt=window,yt=document,pi=yt.documentElement,vt=yt.body,Pe){if(fl=Pe.utils.toArray,al=Pe.utils.clamp,Md=Pe.core.context||ji,pd=Pe.core.suppressOverwrites||ji,Cd=tt.history.scrollRestoration||"auto",wd=tt.pageYOffset||0,Pe.core.globals("ScrollTrigger",r),vt){nl=1,Oa=document.createElement("div"),Oa.style.height="100vh",Oa.style.position="absolute",M0(),jb(),Xt.register(Pe),r.isTouch=Xt.isTouch,ts=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=Xt.isTouch===1,pn(tt,"wheel",Na),Ad=[tt,yt,pi,vt],Pe.matchMedia?(r.matchMedia=function(h){var d=Pe.matchMedia(),f;for(f in h)d.add(f,h[f]);return d},Pe.addEventListener("matchMediaInit",function(){y0(),Nd()}),Pe.addEventListener("matchMediaRevert",function(){return v0()}),Pe.addEventListener("matchMedia",function(){Is(0,1),Os("matchMedia")}),Pe.matchMedia().add("(orientation: portrait)",function(){return _d(),_d})):console.warn("Requires GSAP 3.11.0 or later"),_d(),pn(yt,"scroll",Na);var n=vt.hasAttribute("style"),i=vt.style,s=i.borderTopStyle,a=Pe.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Tr(vt),Qt.m=Math.round(o.top+Qt.sc())||0,In.m=Math.round(o.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),Nh=setInterval(Qg,250),Pe.delayedCall(.5,function(){return Uh=0}),pn(yt,"touchcancel",ji),pn(vt,"touchstart",ji),Oh(pn,yt,"pointerdown,touchstart,mousedown",Zg),Oh(pn,yt,"pointerup,touchend,mouseup",Jg),yd=Pe.utils.checkPrefix("transform"),Yh.push(yd),Ua=Dn(),Jh=Pe.delayedCall(.2,Is).pause(),Fa=[yt,"visibilitychange",function(){var h=tt.innerWidth,d=tt.innerHeight;yt.hidden?(Wg=h,Xg=d):(Wg!==h||Xg!==d)&&sl()},yt,"DOMContentLoaded",Is,tt,"load",Is,tt,"resize",sl],Fh(pn),et.forEach(function(h){return h.enable(0,1)}),l=0;l<je.length;l+=3)Bh(dn,je[l],je[l+1]),Bh(dn,je[l],je[l+2])}else if(yt){var c=function h(){r.enable(),yt.removeEventListener("DOMContentLoaded",h)};yt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(md=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Nh)||(Nh=i)&&setInterval(Qg,i),"ignoreMobileResize"in n&&(Sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fh(dn)||Fh(pn,n.autoRefreshEvents||"none"),l0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Wn(n),a=je.indexOf(s),o=Us(s);~a&&je.splice(a,o?6:2),i&&(o?Bi.unshift(tt,i,vt,i,pi,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(di(n)?Wn(n):n).getBoundingClientRect(),o=a[s?Ls:Ds]*i||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},r.positionInViewport=function(n,i,s){di(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),o=a[s?Ls:Ds],l=i==null?o/2:i in Kh?Kh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fs.killAll||[];Fs={},i.forEach(function(s){return s()})}},r})();nt.version="3.15.1";nt.saveStyles=function(r){return r?fl(r).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Pe.core.getCache(e),Md())}}):fi};nt.revert=function(r,e){return Nd(!r,e)};nt.create=function(r,e){return new nt(r,e)};nt.refresh=function(r){return r?sl(!0):(Ua||nt.register())&&Is(!0)};nt.update=function(r){return++je.cache&&wr(r===!0?2:0)};nt.clearScrollMemory=S0;nt.maxScroll=function(r,e){return er(r,e?In:Qt)};nt.getScrollFunc=function(r,e){return Mr(Wn(r),e?In:Qt)};nt.getById=function(r){return Td[r]};nt.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Ci};nt.snapDirectional=Dd;nt.addEventListener=function(r,e){var t=Fs[r]||(Fs[r]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(r,e){var t=Fs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],f=[],u=Pe.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(m){d.length||u.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&u.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Nn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Nn(s)&&(s=s(),pn(nt,"refresh",function(){return s=e.batchMax()})),fl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(nt.create(c))}),t};var r0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===pi&&r(vt,t)},Hh={auto:1,scroll:1},u1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Pe.core.getCache(s),o=Dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hh[(l=Ai(s)).overflowY]||Hh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Us(s)&&(Hh[(l=Ai(s)).overflowY]||Hh[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},T0=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&u1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&pn(yt,Xt.eventTypes[0],a0,!1,!0)},onDisable:function(){return dn(yt,Xt.eventTypes[0],a0,!0)}})},f1=/(input|label|select|textarea)/i,s0,a0=function(e){var t=f1.test(e.target.tagName);(t||s0)&&(e._gsapAllow=!0,s0=t)},d1=function(e){Ps(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Wn(e.target)||pi,h=Pe.core.globals().ScrollSmoother,d=h&&h.get(),f=ts&&(e.content&&Wn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),u=Mr(c,Qt),m=Mr(c,In),x=1,p=(Xt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,g=0,v=Nn(i)?function(){return i(o)}:function(){return i||2.8},S,y,T=T0(c,e.type,!0,s),E=function(){return y=!1},_=ji,M=ji,P=function(){l=er(c,Qt),M=al(ts?1:0,l),n&&(_=al(0,er(c,In))),S=Ns},A=function(){f._gsap.y=il(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},D=function(){if(y){requestAnimationFrame(E);var X=il(o.deltaY/2),V=M(u.v-X);if(f&&V!==u.v+u.offset){u.offset=V-u.v;var R=il((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",u.cacheID=je.cache,wr()}return!0}u.offset&&A(),y=!0},N,G,I,k,q=function(){P(),N.isActive()&&N.vars.scrollY>l&&(u()>l?N.progress(1)&&u(l):N.resetTo("scrollY",l))};return f&&Pe.set(f,{y:"+=0"}),e.ignoreCheck=function(O){return ts&&O.type==="touchmove"&&D(O)||x>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){y=!1;var O=x;x=il((tt.visualViewport&&tt.visualViewport.scale||1)/p),N.pause(),O!==x&&vd(c,x>1.01?!0:n?!1:"x"),G=m(),I=u(),P(),S=Ns},e.onRelease=e.onGestureStart=function(O,X){if(u.offset&&A(),!X)k.restart(!0);else{je.cache++;var V=v(),R,ee;n&&(R=m(),ee=R+V*.05*-O.velocityX/.227,V*=r0(m,R,ee,er(c,In)),N.vars.scrollX=_(ee)),R=u(),ee=R+V*.05*-O.velocityY/.227,V*=r0(u,R,ee,er(c,Qt)),N.vars.scrollY=M(ee),N.invalidate().duration(V).play(.01),(ts&&N.vars.scrollY>=l||R>=l-1)&&Pe.to({},{onUpdate:q,duration:V})}a&&a(O)},e.onWheel=function(){N._ts&&N.pause(),Dn()-g>1e3&&(S=0,g=Dn())},e.onChange=function(O,X,V,R,ee){if(Ns!==S&&P(),X&&n&&m(_(R[2]===X?G+(O.startX-O.x):m()+X-R[1])),V){u.offset&&A();var Se=ee[2]===V,ze=Se?I+O.startY-O.y:u()+V-ee[1],J=M(ze);Se&&ze!==J&&(I+=J-ze),u(J)}(V||X)&&wr()},e.onEnable=function(){vd(c,n?!1:"x"),nt.addEventListener("refresh",q),pn(tt,"resize",q),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=m.smooth=!1),T.enable()},e.onDisable=function(){vd(c,!0),dn(tt,"resize",q),nt.removeEventListener("refresh",q),T.kill()},e.lockAxis=e.lockAxis!==!1,o=new Xt(e),o.iOS=ts,ts&&!u()&&u(1),ts&&Pe.ticker.add(ji),k=o._dc,N=Pe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:b0(u,u(),function(){return N.pause()})},onUpdate:wr,onComplete:k.vars.onComplete}),o};nt.sort=function(r){if(Nn(r))return et.sort(r);var e=tt.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(r){return new Xt(r)};nt.normalizeScroll=function(r){if(typeof r>"u")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var e=r instanceof Xt?r:d1(r);return Xn&&Xn.target===e.target&&Xn.kill(),Us(e.target)&&(Xn=e),e};nt.core={_getVelocityProp:Dh,_inputObserver:T0,_scrollers:je,_proxies:Bi,bridge:{ss:function(){Ci||Os("scrollStart"),Ci=Dn()},ref:function(){return Ln}}};f0()&&Pe.registerPlugin(nt);Ut.registerPlugin(nt);var kt=(r,e=document)=>e.querySelector(r),mi=(r,e=document)=>[...e.querySelectorAll(r)],en=matchMedia("(prefers-reduced-motion: reduce)").matches,w0=matchMedia("(pointer: coarse)").matches,nr=(r,e,t)=>Math.min(t,Math.max(e,r)),ka=(r,e,t)=>r+(e-r)*t,tr=(r,e,t,n)=>ka(r,e,1-Math.exp(-t*n)),p1=r=>r*r*(3-2*r),E0=r=>new Promise(e=>setTimeout(e,r)),qt={x:innerWidth*.6,y:innerHeight*.35,nx:.2,ny:-.3},Er={y:scrollY,v:0};addEventListener("pointermove",r=>{qt.x=r.clientX,qt.y=r.clientY,qt.nx=r.clientX/innerWidth*2-1,qt.ny=r.clientY/innerHeight*2-1},{passive:!0});{let r=scrollY,e=performance.now();addEventListener("scroll",()=>{let t=performance.now();Er.v=(scrollY-r)/Math.max(t-e,1)*1e3,Er.y=scrollY,r=scrollY,e=t},{passive:!0})}var m1=`
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
}`;function g1(){let r=kt("#scene"),e=matchMedia("(max-width: 900px)").matches||w0,t=new ah({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),n=Math.min(devicePixelRatio||1,1.5);t.setPixelRatio(n),t.toneMapping=bo,t.toneMappingExposure=1.05,t.setClearColor(264732,1),t.transmissionResolutionScale=e?.6:.85;let i=new us,s=new En(35,1,.1,60);s.position.set(0,0,9);let a=Math.tan(tf.degToRad(s.fov/2)),o=new ga(t);i.environment=o.fromScene(new ch,.04).texture,i.environmentIntensity=.8,o.dispose();let l={uTime:{value:0},uScroll:{value:0},uAspect:{value:1},uPointer:{value:new Ke}},c=new Pt(new Or(1,1),new Si({uniforms:l,depthWrite:!1,toneMapped:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
      }`}));c.position.z=-9,c.renderOrder=-10,i.add(c);let h=kt("#hero-name"),d=document.createElement("canvas"),f=new ho(d);f.colorSpace=Fn,f.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());let u=new qe("#06102a"),m=new qe("#ffffff"),x=new aa({map:f,alphaTest:.5,alphaToCoverage:!0,toneMapped:!1,color:u.clone()}),p=new Pt(new Or(1,1),x),g=-2.2;p.position.z=g,i.add(p);function v(){let Te=h.getBoundingClientRect();if(Te.width<2)return;let Ie=Math.min(devicePixelRatio||1,2),H=getComputedStyle(h);d.width=Math.ceil(Te.width*Ie),d.height=Math.ceil(Te.height*Ie);let Fe=d.getContext("2d");Fe.setTransform(Ie,0,0,Ie,0,0),Fe.clearRect(0,0,Te.width,Te.height),Fe.font=`${H.fontWeight} ${H.fontSize} ${H.fontFamily}`,"letterSpacing"in Fe&&(Fe.letterSpacing=H.letterSpacing);let at=Fe.createLinearGradient(0,0,0,Te.height);at.addColorStop(0,"#ffffff"),at.addColorStop(1,"#bcd6ff"),Fe.fillStyle=at,Fe.textBaseline="alphabetic";for(let it of mi(".line",h)){let We=it.getBoundingClientRect(),mt=Fe.measureText(it.textContent),St=mt.fontBoundingBoxAscent??mt.actualBoundingBoxAscent,F=mt.fontBoundingBoxDescent??mt.actualBoundingBoxDescent;Fe.fillText(it.textContent,We.left-Te.left,We.top-Te.top+(We.height-(St+F))/2+St)}f.needsUpdate=!0}let S={uTime:{value:0},uAmp:{value:.2},uFreq:{value:.95},uPointer:{value:new Z(0,0,1)},uBulge:{value:0}},y=new po({color:16777215,metalness:0,roughness:.08,transmission:1,ior:1.45,thickness:2,clearcoat:1,clearcoatRoughness:.06,iridescence:.4,iridescenceIOR:1.3,iridescenceThicknessMinimum:120,iridescenceThicknessMaximum:420,dispersion:3,attenuationColor:new qe("#d3e8ff"),attenuationDistance:16,envMapIntensity:1.5,specularIntensity:1});y.onBeforeCompile=Te=>{Object.assign(Te.uniforms,S),Te.vertexShader=Te.vertexShader.replace("#include <common>",`#include <common>
        ${m1}
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
        #endif`).replace("#include <begin_vertex>","vec3 transformed=lq0;")},y.customProgramCacheKey=()=>"liquid-glass-v1";let T=e?20:40,E=new Pt(new fs(1,T),y);i.add(E);let _=new fs(1,10),M=[0,1,2].map(Te=>{let Ie=new Pt(_,y);return Ie.userData={r:1.55+Te*.32,sp:.22+Te*.07,ph:Te*2.1,s:.13-Te*.025,tilt:.5+Te*.4},i.add(Ie),Ie});i.add(new So(9417983,.35));let P=new yo(16777215,2.4);P.position.set(-3,4,5),i.add(P);let A=new Gr(5017087,46,30);A.position.set(4,-2,3),i.add(A);let D=new Gr(15321207,22,30);D.position.set(-2,1,4),i.add(D);let N=e?140:280,G=new Float32Array(N*3);for(let Te=0;Te<N;Te++)G[Te*3]=(Math.random()-.5)*20,G[Te*3+1]=(Math.random()-.5)*13,G[Te*3+2]=-7+Math.random()*9;let I=new yi;I.setAttribute("position",new si(G,3));let k=new lo(I,new oa({color:12575743,size:.035,transparent:!0,opacity:.5,depthWrite:!1,sizeAttenuation:!0}));i.add(k);let q=[["#top",{x:.06,y:.13,s:1,a:.2},{x:.4,y:.33,s:.78,a:.19}],["#about",{x:-.37,y:-.2,s:.62,a:.2},{x:.3,y:-.3,s:.7,a:.2}],["#research",{x:.41,y:.27,s:.5,a:.24},{x:-.3,y:.34,s:.6,a:.22}],["#experience",{x:-.4,y:.04,s:.6,a:.2},{x:.32,y:-.05,s:.62,a:.2}],["#credentials",{x:.4,y:-.22,s:.52,a:.22},{x:-.3,y:.3,s:.6,a:.22}],["#toolkit",{x:-.3,y:.25,s:.5,a:.2},{x:.3,y:.2,s:.6,a:.2}],["#contact",{x:.24,y:.04,s:1.12,a:.2},{x:.12,y:.12,s:1.05,a:.2}]],O=[],X={x:.06,y:.13,s:1,a:.2,intro:en?1:0,name:en?1:0,bulge:0,rx:0,ry:0,cx:0,cy:0},V=1,R=1,ee=!1;function Se(){V=r.clientWidth,R=r.clientHeight,ee=V/R<.85,t.setSize(V,R,!1),s.aspect=V/R,s.updateProjectionMatrix();let Te=2*(s.position.z-c.position.z)*a;c.scale.set(Te*s.aspect*1.3,Te*1.3,1),l.uAspect.value=s.aspect,O=q.map(([Ie,H,Fe],at)=>{let it=kt(Ie);return{at:at===0?0:it.offsetTop+it.offsetHeight/2-innerHeight/2,...ee||V<900?Fe:H}}).sort((Ie,H)=>Ie.at-H.at),v()}function ze(Te){if(Te<=O[0].at)return O[0];for(let Ie=0;Ie<O.length-1;Ie++){let H=O[Ie],Fe=O[Ie+1];if(Te<=Fe.at){let at=p1(nr((Te-H.at)/Math.max(Fe.at-H.at,1),0,1));return{x:ka(H.x,Fe.x,at),y:ka(H.y,Fe.y,at),s:ka(H.s,Fe.s,at),a:ka(H.a,Fe.a,at)}}}return O[O.length-1]}let J=new Z,ue=new vi,xe=.46,Me=performance.now(),ce=!0,Ce=0,ft=0,Ae=0,Ve=0;function Re(Te){if(!ce)return;requestAnimationFrame(Re);let Ie=Math.min((Te-Me)/1e3,.05);Me=Te,Ce+=Ie*(en?.15:1),Er.v*=Math.exp(-5*Ie);let H=2*s.position.z*a,Fe=H*s.aspect,at=ze(Er.y),it=en?30:3.2;X.x=tr(X.x,at.x+qt.nx*.03,it,Ie),X.y=tr(X.y,at.y-qt.ny*.03,it,Ie),X.s=tr(X.s,at.s,it,Ie),X.a=tr(X.a,at.a+nr(Math.abs(Er.v)*7e-5,0,.12),4,Ie);let We=Math.min(.21*H,.3*Fe)*X.s*X.intro;E.position.set(X.x*Fe,X.y*H,0);let mt=Math.max(We,1e-4);E.scale.set(mt,mt,mt*xe),X.rx=tr(X.rx,qt.ny*.22,3,Ie),X.ry=tr(X.ry,qt.nx*.3,3,Ie),E.rotation.set(X.rx,X.ry,Math.sin(Ce*.1)*.25);let St=qt.nx*Fe*.5,F=-qt.ny*H*.5,dt=Math.hypot(St-E.position.x,F-E.position.y);X.bulge=tr(X.bulge,dt<We*1.9&&!w0?.2:0,5,Ie),J.set(St-E.position.x,F-E.position.y,We*1.1).normalize().applyQuaternion(ue.copy(E.quaternion).invert()),J.z/=xe,J.normalize(),S.uPointer.value.copy(J),S.uBulge.value=X.bulge,S.uAmp.value=X.a,S.uTime.value=Ce,S.uFreq.value=.9+nr(Er.y/Math.max(document.documentElement.scrollHeight-innerHeight,1),0,1)*.35;for(let ke of M){let se=ke.userData,ot=Ce*se.sp+se.ph;ke.position.set(E.position.x+Math.cos(ot)*se.r*We,E.position.y+Math.sin(ot*1.3)*se.r*We*.6*Math.cos(se.tilt),Math.sin(ot)*se.r*We*.7),ke.scale.setScalar(Math.max(se.s*(We/1.19+.35)*X.intro,1e-4))}let $e=h.getBoundingClientRect();if(p.visible=$e.bottom>-40&&$e.top<R+40,p.visible){let ke=2*(s.position.z-g)*a,se=ke*s.aspect;p.scale.set($e.width/V*se,$e.height/R*ke,1),p.position.x=(($e.left+$e.width/2)/V-.5)*se,p.position.y=-(($e.top+$e.height/2)/R-.5)*ke,x.color.copy(u).lerp(m,X.name)}if(X.cx=tr(X.cx,qt.nx*.22,2.5,Ie),X.cy=tr(X.cy,-qt.ny*.16,2.5,Ie),s.position.x=en?0:X.cx,s.position.y=en?0:X.cy,s.lookAt(0,0,0),D.position.set(St*.8,F*.8,4),k.rotation.y=Ce*.01,k.position.y=Er.y/Math.max(innerHeight,1)*.35,l.uTime.value=Ce,l.uScroll.value=Er.y/Math.max(innerHeight,1)*.35,l.uPointer.value.set(qt.nx,-qt.ny),t.render(i,s),X.intro>.98&&Ve<2&&(Ae+=Ie,ft++,ft>=50)){let ke=Ae/ft;ft=0,Ae=0,ke>(Ve===0?.024:.034)&&(Ve++,Ve===1?(n=Math.max(1,n*.72),t.setPixelRatio(n),t.transmissionResolutionScale=.5,t.setSize(V,R,!1),v()):(E.geometry.dispose(),E.geometry=new fs(1,14),M.forEach(se=>{se.visible=!1})))}}Se();let De=0;return addEventListener("resize",()=>{clearTimeout(De),De=setTimeout(Se,120)}),new ResizeObserver(()=>{clearTimeout(De),De=setTimeout(Se,120)}).observe(kt("main")),document.fonts.ready.then(v),document.addEventListener("visibilitychange",()=>{let Te=!document.hidden;Te&&!ce?(ce=!0,Me=performance.now(),requestAnimationFrame(Re)):Te||(ce=!1)}),r.addEventListener("webglcontextlost",Te=>{Te.preventDefault(),ce=!1,document.documentElement.classList.replace("webgl","no-webgl")}),requestAnimationFrame(Re),{firstFrame:()=>new Promise(Te=>requestAnimationFrame(()=>requestAnimationFrame(Te))),intro(){en||(Ut.to(X,{intro:1,duration:1.9,ease:"elastic.out(1, 0.55)",delay:.1}),Ut.to(X,{name:1,duration:1.3,ease:"power2.out",delay:.2}))}}}function _1(){let r=new Set,e=new IntersectionObserver(s=>s.forEach(a=>a.isIntersecting?r.add(a.target):r.delete(a.target)),{rootMargin:"80px"});mi(".glass").forEach(s=>e.observe(s));let t=0,n=()=>{t=0;for(let s of r){let a=s.getBoundingClientRect(),o=Math.max(a.left-qt.x,0,qt.x-a.right),l=Math.max(a.top-qt.y,0,qt.y-a.bottom);s.style.setProperty("--mx",`${(qt.x-a.left).toFixed(1)}px`),s.style.setProperty("--my",`${(qt.y-a.top).toFixed(1)}px`),s.style.setProperty("--rim",nr(1-Math.hypot(o,l)/150,0,1).toFixed(3))}},i=()=>{t||(t=requestAnimationFrame(n))};addEventListener("pointermove",i,{passive:!0}),addEventListener("scroll",i,{passive:!0})}function x1(){if(en)return;let r=170,e=13,t=new Map,n=!1,i=0,s=o=>{let l=Math.min((o-i)/1e3,.032);i=o;let c=!1;for(let[h,d]of t){let f=0;for(let u of["rx","ry","sc"]){let m=u==="sc"?100:1;d.v[u]+=((d.t[u]-d.p[u])*r-d.v[u]*e)*l,d.p[u]+=d.v[u]*l,f+=(Math.abs(d.t[u]-d.p[u])+Math.abs(d.v[u])*.05)*m}h.style.setProperty("--rx",`${d.p.rx.toFixed(3)}deg`),h.style.setProperty("--ry",`${d.p.ry.toFixed(3)}deg`),h.style.setProperty("--sc",d.p.sc.toFixed(4)),f>.02?c=!0:t.delete(h)}c?requestAnimationFrame(s):n=!1},a=(o,l)=>{t.set(o,l),n||(n=!0,i=performance.now(),requestAnimationFrame(s))};mi("[data-spring]").forEach(o=>{let l=o.matches(".card, .tl-item, .fact, .cert"),c=l?4.5:0,h=l?1.014:1.045,d={p:{rx:0,ry:0,sc:1},v:{rx:0,ry:0,sc:0},t:{rx:0,ry:0,sc:1},down:!1};o.addEventListener("pointermove",f=>{if(f.pointerType==="touch")return;let u=o.getBoundingClientRect();d.t.ry=((f.clientX-u.left)/u.width-.5)*c*2,d.t.rx=-((f.clientY-u.top)/u.height-.5)*c*2,d.t.sc=d.down?.97:h,a(o,d)}),o.addEventListener("pointerleave",()=>{d.t.rx=0,d.t.ry=0,d.t.sc=1,d.down=!1,a(o,d)}),o.addEventListener("pointerdown",()=>{d.down=!0,d.t.sc=.965,a(o,d)}),o.addEventListener("pointerup",f=>{d.down=!1,d.t.sc=f.pointerType==="touch"?1:h,a(o,d)}),o.addEventListener("pointercancel",()=>{d.down=!1,d.t.sc=1,d.t.rx=0,d.t.ry=0,a(o,d)})})}var yn=(()=>{let r=null,e=null,t=!0,n=!1;try{t=localStorage.getItem("nap-sound")!=="off"}catch{}let i=()=>{if(!r){let l=window.AudioContext||window.webkitAudioContext;if(!l)return null;r=new l,e=r.createGain(),e.gain.value=.5,e.connect(r.createDynamicsCompressor()).connect(r.destination)}return r.state==="suspended"&&r.resume(),r},s=()=>{n=!0,t&&i()};addEventListener("pointerdown",s,{passive:!0}),addEventListener("keydown",s);let a=(l,c,h,d,f="sine",u=0)=>{if(!t||!n)return;let m=i();if(!m)return;let x=m.currentTime+u,p=m.createOscillator(),g=m.createGain();p.type=f,p.frequency.setValueAtTime(l,x),p.frequency.exponentialRampToValueAtTime(c,x+h),g.gain.setValueAtTime(1e-4,x),g.gain.exponentialRampToValueAtTime(d,x+.012),g.gain.exponentialRampToValueAtTime(1e-4,x+h),p.connect(g).connect(e),p.start(x),p.stop(x+h+.05)},o={get on(){return t},get live(){return t&&n},toggle(){t=!t;try{localStorage.setItem("nap-sound",t?"on":"off")}catch{}return t&&(n=!0,o.pop()),t},bubble(l=1,c=.3,h=0){a(420*l,980*l,.13,c,"sine",h)},pop(){a(760,1500,.07,.28),a(380,620,.09,.11)},drop(){a(880,360,.17,.24)},lift(){a(300,540,.1,.15,"triangle")},ting(){a(1568,1560,.6,.11),a(2349,2340,.45,.06,"sine",.01),a(3136,3120,.3,.03,"sine",.02)},bubbles(l=5){for(let c=0;c<l;c++)o.bubble(.8+Math.random()*1.3,.05+Math.random()*.07,c*.075+Math.random()*.05)},open(){o.bubble(.75,.28),o.ting()}};return o})();function v1(r,e){let t=e/2,n=r/2,i=e/2,s=t*.52,a=e*(e<34?.13:.2),o=e<34?.05:.07,l=new Float32Array(r*e),c=new Float32Array(r*e),h=1;for(let m=0;m<e;m++)for(let x=0;x<r;x++){let p=x+.5-n,g=m+.5-i,v=Math.sign(p)*Math.max(Math.abs(p)-(r/2-t),0),S=g,y=Math.hypot(v,S)||1,T=t-y;if(T<=0)continue;let E=Math.pow(1-Math.min(T/s,1),2.6)*a,_=m*r+x;l[_]=-(v/y)*E-p*o,c[_]=-(S/y)*E-g*o,h=Math.max(h,Math.abs(l[_]),Math.abs(c[_]))}let d=document.createElement("canvas");d.width=r,d.height=e;let f=d.getContext("2d"),u=f.createImageData(r,e);for(let m=0;m<r*e;m++)u.data[m*4]=128+127*(l[m]/h),u.data[m*4+1]=128+127*(c[m]/h),u.data[m*4+2]=128,u.data[m*4+3]=255;return f.putImageData(u,0,0),{url:d.toDataURL("image/png"),scale:h*2}}var y1=0,S1=(()=>{try{return/Chrome\/|Chromium\//.test(navigator.userAgent)&&CSS.supports("backdrop-filter","url(#a)")}catch{return!1}})();function A0(r,{items:e,onPick:t}){let n=kt(".liquid-track",r),i=kt(".lens",r),s={x:0,y:0,w:0,h:0,sx:1,sy:1,o:0},a=null,o=null,l=!1,c=null,h=S=>{let y=r.getBoundingClientRect(),T=S.getBoundingClientRect(),E=T.height<34?5:2;return{x:T.left-y.left-E,y:T.top-y.top,w:T.width+E*2,h:T.height}},d=()=>{i.style.width=`${s.w.toFixed(2)}px`,i.style.height=`${s.h.toFixed(2)}px`,i.style.opacity=s.o.toFixed(3),i.style.transform=`translate3d(${s.x.toFixed(2)}px, ${s.y.toFixed(2)}px, 0) scale(${s.sx.toFixed(4)}, ${s.sy.toFixed(4)})`,c&&(c.setAttribute("width",Math.max(s.w,1).toFixed(1)),c.setAttribute("height",Math.max(s.h,1).toFixed(1)))};if(S1){let S=h(e[0]),y=Math.max(Math.round(S.h),24),T=Math.round(y*2.4),E=`lens-${++y1}`,_=v1(T,y),M=_.scale,P=document.createElementNS("http://www.w3.org/2000/svg","svg");P.setAttribute("width","0"),P.setAttribute("height","0"),P.setAttribute("aria-hidden","true"),P.style.cssText="position:absolute;width:0;height:0;pointer-events:none";let A=(D,N,G)=>`<feDisplacementMap in="SourceGraphic" in2="m" scale="${(M*D).toFixed(1)}" xChannelSelector="R" yChannelSelector="G" result="d${G}"/><feColorMatrix in="d${G}" type="matrix" values="${N}" result="${G}"/>`;P.innerHTML=`<filter id="${E}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feImage href="${_.url}" x="0" y="0" width="${T}" height="${y}" preserveAspectRatio="none" result="m"/>${A(1,"1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0","r")}${A(.97,"0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0","g")}${A(.94,"0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0","b")}<feBlend in="r" in2="g" mode="screen" result="rg"/><feBlend in="rg" in2="b" mode="screen"/></filter>`,document.body.appendChild(P),c=P.querySelector("feImage"),i.style.backdropFilter=`url(#${E}) saturate(135%) brightness(1.08)`}let f=(S,y)=>{if(a=S,Ut.killTweensOf(s),!S){Ut.to(s,{o:0,duration:.25,onUpdate:d});return}let T=h(S);if(y||en){Object.assign(s,T,{sx:1,sy:1,o:1}),d();return}if(s.o<.05){Object.assign(s,T,{sx:.55,sy:.55}),Ut.to(s,{sx:1,sy:1,o:1,duration:.75,ease:"elastic.out(1, 0.5)",onUpdate:d});return}Ut.timeline({onUpdate:d}).to(s,{sy:1.36,sx:1.14,duration:.14,ease:"power2.out"}).to(s,{...T,o:1,duration:.46,ease:"power3.inOut"},.04).to(s,{sx:1.3,duration:.2,ease:"sine.out"},.08).to(s,{sx:1,sy:1,duration:.8,ease:"elastic.out(1, 0.42)"},.44)},u=S=>e.reduce((y,T)=>{let E=T.getBoundingClientRect(),_=Math.abs(E.left+E.width/2-S);return!y||_<y.d?{el:T,d:_}:y},null).el,m=S=>e.forEach(y=>y.classList.toggle("under",y===S)),x=()=>n.scrollWidth<=n.clientWidth+1,p=S=>{m(null),yn.pop(),t(S),f(S)};r.addEventListener("dragstart",S=>S.preventDefault()),r.addEventListener("pointerdown",S=>{S.button||en||!S.target.closest(".liquid-track")||S.pointerType==="touch"&&!x()||(o={id:S.pointerId,x0:S.clientX,last:S.clientX,moved:!1,under:null})}),addEventListener("pointermove",S=>{if(!o||S.pointerId!==o.id)return;if(!o.moved){if(Math.abs(S.clientX-o.x0)<7)return;o.moved=!0,yn.lift(),Ut.killTweensOf(s),s.o<.05&&Object.assign(s,h(u(S.clientX))),Ut.to(s,{o:1,sy:1.38,duration:.3,ease:"back.out(2.2)",onUpdate:d})}let y=r.getBoundingClientRect(),T=e[0].getBoundingClientRect(),E=e[e.length-1].getBoundingClientRect(),_=nr(S.clientX,T.left+T.width/2,E.left+E.width/2),M=u(_);M!==o.under&&(o.under=M,m(M),Ut.to(s,{w:h(M).w,duration:.25,ease:"power2.out",overwrite:"auto"}),yn.live&&yn.bubble(1.5,.06)),s.sx=1.16+nr(Math.abs(S.clientX-o.last)*.014,0,.3),o.last=S.clientX,s.x=_-y.left-s.w/2,d()},{passive:!0});let g=S=>{if(!o||S.pointerId!==o.id)return;let y=o;o=null,y.moved&&(l=!0,setTimeout(()=>{l=!1},0),p(y.under||u(S.clientX)))};addEventListener("pointerup",g),addEventListener("pointercancel",g),r.addEventListener("click",S=>{l&&(S.preventDefault(),S.stopPropagation())},!0);let v=()=>{n.style.touchAction=x()?"pan-y":"pan-x pan-y",a&&!o&&f(a,!0)};return n.addEventListener("scroll",()=>{a&&!o&&!Ut.isTweening(s)&&f(a,!0)},{passive:!0}),addEventListener("resize",v),document.fonts.ready.then(v),v(),{moveTo:f,pick:p,reveal(S){n.scrollTo({left:S.offsetLeft-n.clientWidth/2+S.offsetWidth/2,behavior:en?"auto":"smooth"})}}}function M1(){let r=kt("#nav"),e=mi(".liquid-track a",r),t=new Map(e.map(d=>[d.getAttribute("href").slice(1),d])),n={toolkit:"credentials"},i=null,s=0,a=A0(r,{items:e,onPick:d=>{s=performance.now(),o(d.getAttribute("href").slice(1)),kt(d.getAttribute("href")).scrollIntoView({behavior:en?"auto":"smooth"})}});function o(d){i=d,e.forEach(f=>f===t.get(d)?f.setAttribute("aria-current","true"):f.removeAttribute("aria-current"))}e.forEach(d=>d.addEventListener("click",()=>{s=performance.now(),yn.pop(),o(d.getAttribute("href").slice(1)),a.moveTo(d)}));let l=new IntersectionObserver(d=>d.forEach(f=>{if(!f.isIntersecting)return;let u=n[f.target.id]||f.target.id;if(u===i||performance.now()-s<900)return;o(u);let m=t.get(u);a.moveTo(m||null),m&&a.reveal(m)}),{rootMargin:"-45% 0px -50% 0px"});mi("main section[id]").forEach(d=>l.observe(d));let c=kt("#sound"),h=()=>{c.setAttribute("aria-pressed",String(yn.on)),c.title=yn.on?"Sound on":"Sound off"};c.addEventListener("click",()=>{yn.toggle(),h()}),h()}function b1(){mi(".tabs").forEach(r=>{let e=mi(".tab",r),t=(s,a)=>{e.forEach(o=>{let l=o===s;o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1;let c=document.getElementById(o.getAttribute("aria-controls"));c.hidden=!l,l&&!en&&Ut.fromTo(mi("[data-spring], [data-tabitem]",c),{opacity:0,"--ty":"30px"},{opacity:1,"--ty":"0px",duration:.75,ease:"back.out(1.7)",stagger:.06,overwrite:!0})}),a&&s.focus(),nt.refresh()},n=A0(r,{items:e,onPick:s=>t(s)});e.forEach((s,a)=>{s.addEventListener("click",()=>{s.getAttribute("aria-selected")!=="true"&&(yn.pop(),t(s),n.moveTo(s),n.reveal(s))}),s.addEventListener("keydown",o=>{let l=o.key==="ArrowRight"?1:o.key==="ArrowLeft"?-1:0;if(l){o.preventDefault();let c=e[(a+l+e.length)%e.length];yn.pop(),t(c,!0),n.moveTo(c),n.reveal(c)}})});let i=()=>n.moveTo(e.find(s=>s.getAttribute("aria-selected")==="true"),!0);i(),document.fonts.ready.then(i)})}function T1(){let r=new Set(["research","credentials"]),e=new Map,t=new IntersectionObserver(n=>n.forEach(i=>{if(!i.isIntersecting||!yn.live)return;let s=performance.now();s-(e.get(i.target.id)||-1e9)<9e3||(e.set(i.target.id,s),yn.bubbles(r.has(i.target.id)?6:3))}),{rootMargin:"-35% 0px -45% 0px"});mi("main section[id]:not(#top)").forEach(n=>t.observe(n))}function w1(){let r=kt("#sheet"),e=kt("#sheet-body"),t=kt("#lightbox"),n=null,i=a=>{n=document.activeElement,a.showModal(),a===r?yn.open():yn.ting(),en||Ut.fromTo(a,{opacity:0,scale:.9,y:40},{opacity:1,scale:1,y:0,duration:.85,ease:"elastic.out(1, 0.72)",overwrite:!0})},s=a=>{yn.drop();let o=()=>{a.close(),Ut.set(a,{clearProps:"opacity,transform"}),n&&n.focus&&n.focus({preventScroll:!0})};en?o():Ut.to(a,{opacity:0,scale:.96,y:14,duration:.2,ease:"power2.in",overwrite:!0,onComplete:o})};mi(".card").forEach(a=>a.addEventListener("click",()=>{let o=document.getElementById(`tpl-${a.dataset.card}`);if(!o)return;e.replaceChildren(o.content.cloneNode(!0));let l=kt(".sheet-title",e);l&&(l.id="sheet-heading"),i(r),e.scrollTop=0})),mi(".cert").forEach(a=>a.addEventListener("click",()=>{let o=kt("#lb-img");o.src=a.dataset.zoom,o.width=+a.dataset.w,o.height=+a.dataset.h,o.alt=`Certificate: ${a.dataset.title}`,kt("#lb-title").textContent=a.dataset.title,kt("#lb-meta").textContent=a.dataset.meta,i(t)}));for(let a of[r,t])a.addEventListener("click",o=>{(o.target===a||o.target.closest("[data-close]"))&&s(a)}),a.addEventListener("cancel",o=>{o.preventDefault(),s(a)})}function E1(){let r=kt("#lanyard"),e=kt(".lanyard-swing",r),t=kt(".idcard",r),n={a:0,w:0,drag:!1,ry:0,on:!0};if(en)return{drop(){}};let i=()=>{let c=r.getBoundingClientRect();return{x:c.left+c.width/2,y:c.top}},s=null,a=performance.now();t.addEventListener("pointerdown",c=>{c.pointerType!=="touch"&&(n.drag=!0,t.setPointerCapture(c.pointerId))}),t.addEventListener("pointermove",c=>{if(!n.drag)return;let h=i(),d=nr(-Math.atan2(c.clientX-h.x,Math.max(c.clientY-h.y,60))*180/Math.PI,-48,48);n.w=(d-n.a)*10,n.a=ka(n.a,d,.5)});let o=()=>{n.drag&&yn.bubble(1.2,.2),n.drag=!1};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),addEventListener("pointermove",c=>{if(s!=null&&!n.drag&&c.pointerType!=="touch"){let h=r.getBoundingClientRect();c.clientX>h.left-150&&c.clientX<h.right+150&&c.clientY>h.top-40&&c.clientY<h.bottom+150&&(n.w-=nr((c.clientX-s)*.3,-12,12))}s=c.clientX},{passive:!0}),new IntersectionObserver(([c])=>{n.on=c.isIntersecting,n.on&&(a=performance.now(),requestAnimationFrame(l))}).observe(r);function l(c){if(!n.on)return;requestAnimationFrame(l);let h=Math.min((c-a)/1e3,.032);a=c,n.drag||(n.w+=nr(Er.v*.004,-40,40)*h,n.w+=(-46*n.a-3.3*n.w)*h,n.a+=n.w*h),e.style.transform=`rotate(${n.a.toFixed(3)}deg)`,n.ry=tr(n.ry,nr(qt.nx,-1,1)*8-n.w*.1,6,h),t.style.transform=`rotateY(${n.ry.toFixed(2)}deg) rotateX(${(-qt.ny*4).toFixed(2)}deg)`,t.style.setProperty("--hx",`${(50+n.ry*4+n.a*1.5).toFixed(1)}%`)}return{drop(){n.a=-24,n.w=0,Ut.fromTo(r,{y:-560},{y:0,duration:1.05,ease:"power3.out",delay:.15})}}}function A1(){en||mi("[data-reveal]").forEach(r=>{Ut.fromTo(r,{opacity:0,"--ty":"44px"},{opacity:1,"--ty":"0px",duration:.95,ease:"back.out(1.6)",scrollTrigger:{trigger:r,start:"top 90%",once:!0}})})}async function C1(){let r=document.documentElement,e=kt("#loader"),t=kt("#loader-count"),n=kt("#loader-fill"),i={p:0},s=l=>Ut.to(i,{p:l,duration:en?0:.55,ease:"power2.out",overwrite:!0,onUpdate:()=>{t.textContent=Math.round(i.p),n.style.transform=`scaleX(${i.p/100})`}}),a=null,o={drop(){}};try{_1(),x1(),M1(),b1(),w1(),T1(),mi(".btn").forEach(c=>c.addEventListener("pointerdown",()=>yn.bubble(1.1,.16))),o=E1(),s(20),await Promise.race([Promise.all([document.fonts.load("560 96px Fraunces"),document.fonts.load("400 16px Geist")]),E0(2500)]),s(45);try{a=g1(),r.classList.add("webgl")}catch(c){console.warn("WebGL is not available, using the static backdrop.",c),r.classList.add("no-webgl")}s(72);let l=kt(".id-photo");await Promise.race([l.decode?l.decode().catch(()=>{}):Promise.resolve(),E0(2500)]),s(90),a&&await a.firstFrame(),await s(100)}catch(l){console.error(l)}A1(),en||(Ut.fromTo(".hero-lede, .hero-open",{opacity:0,y:26},{opacity:1,y:0,duration:.9,ease:"back.out(1.5)",stagger:.12,delay:.35}),Ut.fromTo(".hero-cta > *",{opacity:0,"--ty":"26px"},{opacity:1,"--ty":"0px",duration:.9,ease:"back.out(1.7)",stagger:.09,delay:.45}),Ut.fromTo("#nav",{y:-90},{y:0,duration:1.1,ease:"elastic.out(1, 0.7)",delay:.3})),Ut.to(e,{opacity:0,duration:en?0:.6,ease:"power2.inOut",onComplete:()=>e.remove()}),a&&a.intro(),o.drop()}C1();
