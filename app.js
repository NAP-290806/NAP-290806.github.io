/* Portfolio of Naufal Abiyyu Permana. Three.js (MIT), GSAP (GreenSock standard license), simplex noise by Ian McEwan and Stefan Gustavson (MIT). */
var pp=0,Lh=1,mp=2;var wo=1,gp=2,fa=3,Gr=0,_n=1,Zi=2,ms=0,da=1,Dh=2,Nh=3,Uh=4,_p=5;var gs=100,xp=101,vp=102,yp=103,Sp=104,Mp=200,bp=201,Tp=202,wp=203,Oh=204,Fh=205,Ep=206,Ap=207,Rp=208,Cp=209,Pp=210,Ip=211,Lp=212,Dp=213,Np=214,Wl=0,Xl=1,ql=2,ta=3,Yl=4,Zl=5,Jl=6,$l=7,vc=0,Up=1,Op=2,Ji=0,Bh=1,zh=2,kh=3,Eo=4,Vh=5,Gh=6,Hh=7;var Wh=300,_s=301,pa=302,yc=303,Sc=304,na=1e3,Hi=1001,Kl=1002,fn=1003,Fp=1004;var Ao=1005;var Bn=1006,Mc=1007;var Oi=1008;var Zn=1009,Xh=1010,qh=1011,ma=1012,bc=1013,Fi=1014,Mi=1015,Bi=1016,Tc=1017,wc=1018,xs=1020,Yh=35902,Zh=35899,Jh=1021,$h=1022,zi=1023,hr=1026,pr=1027,Ec=1028,Ac=1029,Hr=1030,Rc=1031;var Cc=1033,Ro=33776,Co=33777,Po=33778,Io=33779,Pc=35840,Ic=35841,Lc=35842,Dc=35843,Nc=36196,Uc=37492,Oc=37496,Fc=37488,Bc=37489,Lo=37490,zc=37491,kc=37808,Vc=37809,Gc=37810,Hc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,Zc=37816,Jc=37817,$c=37818,Kc=37819,Qc=37820,jc=37821,eu=36492,tu=36494,nu=36495,iu=36283,ru=36284,Do=36285,su=36286;var eo=2300,Ql=2301,Gl=2302,bh=2303,Th=2400,wh=2401,Eh=2402;var Bp=3200;var No=0,zp=1,mr="",On="srgb",to="srgb-linear",no="linear",_t="srgb";var Hl=7680;var kp=519,Vp=512,Gp=513,Hp=514,Kh=515,Wp=516,Xp=517,Qh=518,jh=519,qp=35044;var ef="300 es",xi=2e3,ia=2001;function D0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function N0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function io(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yp(){let r=io("canvas");return r.style.display="block",r}var kd={},ra=null;function tf(...r){let e="THREE."+r.shift();ra?ra("log",e,...r):console.log(e,...r)}function Zp(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ke(...r){r=Zp(r);let e="THREE."+r.shift();if(ra)ra("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ge(...r){r=Zp(r);let e="THREE."+r.shift();if(ra)ra("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function us(...r){let e=r.join(" ");e in kd||(kd[e]=!0,ke(...r))}function Jp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var $p={[Wl]:Wl,[ql]:Jl,[Yl]:Yl,[ta]:Zl,[Xl]:Xl,[Jl]:ql,[$l]:$l,[Zl]:ta},Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=1234567,Qa=Math.PI/180,sa=180/Math.PI;function ga(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function nf(r,e){return(r%e+e)%e}function U0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function O0(r,e,t){return r!==e?(t-r)/(e-r):0}function ja(r,e,t){return(1-t)*r+t*e}function F0(r,e,t,n){return ja(r,e,1-Math.exp(-t*n))}function B0(r,e=1){return e-Math.abs(nf(r,e*2)-e)}function z0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function k0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function V0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function G0(r,e){return r+Math.random()*(e-r)}function H0(r){return r*(.5-Math.random())}function W0(r){r!==void 0&&(Vd=r);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X0(r){return r*Qa}function q0(r){return r*sa}function Y0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Z0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function J0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*h,o*c);break;case"YXY":r.set(l*h,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*h,o*u,o*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kp(r,e){if(e.constructor===Float32Array)return r;let t=sf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function Qp(r,e){if(e.constructor===Float32Array)return r;let t=sf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var af={DEG2RAD:Qa,RAD2DEG:sa,generateUUID:ga,clamp:rt,euclideanModulo:nf,mapLinear:U0,inverseLerp:O0,lerp:ja,damp:F0,pingpong:B0,smoothstep:z0,smootherstep:k0,randInt:V0,randFloat:G0,randFloatSpread:H0,seededRandom:W0,degToRad:X0,radToDeg:q0,isPowerOfTwo:Y0,ceilPowerOfTwo:Z0,floorPowerOfTwo:rf,setQuaternionFromProperEuler:J0,normalize:Qp,denormalize:Kp},hf=class hf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hf.prototype.isVector2=!0;var Ze=hf,vi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],_=s[a+2],x=s[a+3];if(d!==x||l!==f||c!==h||u!==_){let p=l*f+c*h+u*_+d*x;p<0&&(f=-f,h=-h,_=-_,x=-x,p=-p);let g=1-o;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);g=Math.sin(g*v)/T,o=Math.sin(o*v)/T,l=l*g+f*o,c=c*g+h*o,u=u*g+_*o,d=d*g+x*o}else{l=l*g+f*o,c=c*g+h*o,u=u*g+_*o,d=d*g+x*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){let h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){let h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ff=class ff{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ff.prototype.isVector3=!0;var Z=ff,ih=new Z,Gd=new vi,df=class df{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],x=i[0],p=i[3],g=i[6],v=i[1],T=i[4],y=i[7],S=i[2],E=i[5],m=i[8];return s[0]=a*x+o*v+l*S,s[3]=a*p+o*T+l*E,s[6]=a*g+o*y+l*m,s[1]=c*x+u*v+d*S,s[4]=c*p+u*T+d*E,s[7]=c*g+u*y+d*m,s[2]=f*x+h*v+_*S,s[5]=f*p+h*T+_*E,s[8]=f*g+h*y+_*m,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=d*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=h*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rh.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};df.prototype.isMatrix3=!0;var We=df,rh=new We,Hd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $0(){let r={enabled:!0,workingColorSpace:to,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(i.r=ur(i.r),i.g=ur(i.g),i.b=ur(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=ea(i.r),i.g=ea(i.g),i.b=ea(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?no:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[to]:{primaries:e,whitePoint:n,transfer:no,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Hd,fromXYZ:Wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),r}var lt=$0();function ur(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ea(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ks,jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=io("canvas")),ks.width=e.width,ks.height=e.height;let i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=io("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ur(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},K0=0,aa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(sh(i[a].image)):s.push(sh(i[a]))}else s=sh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function sh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Q0=0,ah=new Z,zn=class r extends Wi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Hi,i=Hi,s=Bn,a=Oi,o=zi,l=Zn,c=r.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ga(),this.name="",this.source=new aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ah).x}get height(){return this.source.getSize(ah).y}get depth(){return this.source.getSize(ah).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Wh;zn.DEFAULT_ANISOTROPY=1;var pf=class pf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(h+1)/2,S=(g+1)/2,E=(u+f)/4,m=(d+x)/4,M=(_+p)/4;return T>y&&T>S?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=E/n,s=m/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=m/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pf.prototype.isVector4=!0;var Nt=pf,ec=class extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new zn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new aa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tc=class extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var xc=class xc{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,_,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,x,p)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=f,g[3]=h,g[7]=_,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=a*u,h=a*d,_=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,_=c*u,x=c*d;t[0]=f+x*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,_=c*u,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,h=a*d,_=o*u,x=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,h=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-x*d}else if(e.order==="XZY"){let f=a*l,h=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,e_)}lookAt(e,t,n){let i=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Cr.crossVectors(n,ii),Cr.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Cr.crossVectors(n,ii)),Cr.normalize(),vl.crossVectors(ii,Cr),i[0]=Cr.x,i[4]=vl.x,i[8]=ii.x,i[1]=Cr.y,i[5]=vl.y,i[9]=ii.y,i[2]=Cr.z,i[6]=vl.z,i[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],x=n[6],p=n[10],g=n[14],v=n[3],T=n[7],y=n[11],S=n[15],E=i[0],m=i[4],M=i[8],P=i[12],A=i[1],N=i[5],D=i[9],z=i[13],C=i[2],O=i[6],k=i[10],F=i[14],Q=i[3],G=i[7],I=i[11],H=i[15];return s[0]=a*E+o*A+l*C+c*Q,s[4]=a*m+o*N+l*O+c*G,s[8]=a*M+o*D+l*k+c*I,s[12]=a*P+o*z+l*F+c*H,s[1]=u*E+d*A+f*C+h*Q,s[5]=u*m+d*N+f*O+h*G,s[9]=u*M+d*D+f*k+h*I,s[13]=u*P+d*z+f*F+h*H,s[2]=_*E+x*A+p*C+g*Q,s[6]=_*m+x*N+p*O+g*G,s[10]=_*M+x*D+p*k+g*I,s[14]=_*P+x*z+p*F+g*H,s[3]=v*E+T*A+y*C+S*Q,s[7]=v*m+T*N+y*O+S*G,s[11]=v*M+T*D+y*k+S*I,s[15]=v*P+T*z+y*F+S*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],x=e[7],p=e[11],g=e[15],v=l*h-c*f,T=o*h-c*d,y=o*f-l*d,S=a*h-c*u,E=a*f-l*u,m=a*d-o*u;return t*(x*v-p*T+g*y)-n*(_*v-p*S+g*E)+i*(_*T-x*S+g*m)-s*(_*y-x*E+p*m)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],x=e[13],p=e[14],g=e[15],v=t*o-n*a,T=t*l-i*a,y=t*c-s*a,S=n*l-i*o,E=n*c-s*o,m=i*c-s*l,M=u*x-d*_,P=u*p-f*_,A=u*g-h*_,N=d*p-f*x,D=d*g-h*x,z=f*g-h*p,C=v*z-T*D+y*N+S*A-E*P+m*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return e[0]=(o*z-l*D+c*N)*O,e[1]=(i*D-n*z-s*N)*O,e[2]=(x*m-p*E+g*S)*O,e[3]=(f*E-d*m-h*S)*O,e[4]=(l*A-a*z-c*P)*O,e[5]=(t*z-i*A+s*P)*O,e[6]=(p*y-_*m-g*T)*O,e[7]=(u*m-f*y+h*T)*O,e[8]=(a*D-o*A+c*M)*O,e[9]=(n*A-t*D-s*M)*O,e[10]=(_*E-x*y+g*v)*O,e[11]=(d*y-u*E-h*v)*O,e[12]=(o*P-a*N-l*M)*O,e[13]=(t*N-n*P+i*M)*O,e[14]=(x*T-_*S-p*v)*O,e[15]=(u*S-d*T+f*v)*O,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,x=a*u,p=a*d,g=o*d,v=l*c,T=l*u,y=l*d,S=n.x,E=n.y,m=n.z;return i[0]=(1-(x+g))*S,i[1]=(h+y)*S,i[2]=(_-T)*S,i[3]=0,i[4]=(h-y)*E,i[5]=(1-(f+g))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(_+T)*m,i[9]=(p-v)*m,i[10]=(1-(f+x))*m,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Vs.set(i[0],i[1],i[2]).length(),o=Vs.set(i[4],i[5],i[6]).length(),l=Vs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Li.copy(this);let c=1/a,u=1/o,d=1/l;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=u,Li.elements[5]*=u,Li.elements[6]*=u,Li.elements[8]*=d,Li.elements[9]*=d,Li.elements[10]*=d,t.setFromRotationMatrix(Li),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=xi,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),_,x;if(l)_=s/(a-s),x=a*s/(a-s);else if(o===xi)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ia)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=xi,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i),_,x;if(l)_=1/(a-s),x=a/(a-s);else if(o===xi)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===ia)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xc.prototype.isMatrix4=!0;var St=xc,Vs=new Z,Li=new St,j0=new Z(0,0,0),e_=new Z(1,1,1),Cr=new Z,vl=new Z,ii=new Z,Xd=new St,qd=new vi,Xi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},t_=0,Yd=new Z,Gs=new vi,sr=new St,yl=new Z,qa=new Z,n_=new Z,i_=new vi,Zd=new Z(1,0,0),Jd=new Z(0,1,0),$d=new Z(0,0,1),Kd={type:"added"},r_={type:"removed"},Hs={type:"childadded",child:null},oh={type:"childremoved",child:null},dn=class r extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Z,t=new Xi,n=new vi,i=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new We}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,t){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yl.copy(e):yl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(qa,yl,this.up):sr.lookAt(yl,qa,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(sr),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,e,n_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,i_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new Z(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cs=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},s_={type:"move"},oa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function lh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=nf(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lh(a,s,e+1/3),this.g=lh(a,s,e),this.b=lh(a,s,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){let n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return lt.workingToColorSpace(wn.copy(this),e),Math.round(rt(wn.r*255,0,255))*65536+Math.round(rt(wn.g*255,0,255))*256+Math.round(rt(wn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,s=wn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=On){lt.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,i=wn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Sl);let n=ja(Pr.h,Sl.h,t),i=ja(Pr.s,Sl.s,t),s=ja(Pr.l,Sl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new He;He.NAMES=jp;var hs=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Di=new Z,ar=new Z,ch=new Z,or=new Z,Ws=new Z,Xs=new Z,Qd=new Z,uh=new Z,hh=new Z,fh=new Z,dh=new Nt,ph=new Nt,mh=new Nt,Nr=class r{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Di.subVectors(e,t),i.cross(Di);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Di.subVectors(i,t),ar.subVectors(n,t),ch.subVectors(e,t);let a=Di.dot(Di),o=Di.dot(ar),l=Di.dot(ch),c=ar.dot(ar),u=ar.dot(ch),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,or.x),l.addScaledVector(a,or.y),l.addScaledVector(o,or.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,n),mh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(dh,s.x),a.addScaledVector(ph,s.y),a.addScaledVector(mh,s.z),a}static isFrontFacing(e,t,n,i){return Di.subVectors(n,t),ar.subVectors(e,t),Di.cross(ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Di.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ws.subVectors(i,n),Xs.subVectors(s,n),uh.subVectors(e,n);let l=Ws.dot(uh),c=Xs.dot(uh);if(l<=0&&c<=0)return t.copy(n);hh.subVectors(e,i);let u=Ws.dot(hh),d=Xs.dot(hh);if(u>=0&&d<=u)return t.copy(i);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Ws,a);fh.subVectors(e,s);let h=Ws.dot(fh),_=Xs.dot(fh);if(_>=0&&h<=_)return t.copy(s);let x=h*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Xs,o);let p=u*_-h*d;if(p<=0&&d-u>=0&&h-_>=0)return Qd.subVectors(s,i),o=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(Qd,o);let g=1/(p+x+f);return a=x*g,o=f*g,t.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qi=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ni):Ni.fromBufferAttribute(s,a),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ml.copy(n.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),bl.subVectors(this.max,Ya),qs.subVectors(e.a,Ya),Ys.subVectors(e.b,Ya),Zs.subVectors(e.c,Ya),Ir.subVectors(Ys,qs),Lr.subVectors(Zs,Ys),ss.subVectors(qs,Zs);let t=[0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,0,-ss.z,ss.y,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,ss.z,0,-ss.x,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0,-ss.y,ss.x,0];return!gh(t,qs,Ys,Zs,bl)||(t=[1,0,0,0,1,0,0,0,1],!gh(t,qs,Ys,Zs,bl))?!1:(Tl.crossVectors(Ir,Lr),t=[Tl.x,Tl.y,Tl.z],gh(t,qs,Ys,Zs,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ni=new Z,Ml=new qi,qs=new Z,Ys=new Z,Zs=new Z,Ir=new Z,Lr=new Z,ss=new Z,Ya=new Z,bl=new Z,Tl=new Z,as=new Z;function gh(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){as.fromArray(r,s);let o=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=n.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var jt=new Z,wl=new Ze,a_=0,si=class extends Wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qp,this.updateRanges=[],this.gpuType=Mi,this.version=0,this._normalizationScale=e!==void 0?sf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Kp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Qp(e,this.array)}};var ao=class extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oo=class extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Fn=class extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}},o_=new qi,Za=new Z,_h=new Z,fr=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):o_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);let t=Za.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Za,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(_h)),this.expandByPoint(Za.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},l_=0,_i=new St,xh=new dn,Js=new Z,ri=new qi,Ja=new qi,hn=new Z,yi=class r extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D0(e)?oo:ao)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return xh.lookAt(e),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ja.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(ri.min,Ja.min),ri.expandByPoint(hn),hn.addVectors(ri.max,Ja.max),ri.expandByPoint(hn)):(ri.expandByPoint(Ja.min),ri.expandByPoint(Ja.max))}ri.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)hn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)hn.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(e,c),hn.add(Js)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new Z,l[P]=new Z;let u=new Z,d=new Z,f=new Z,h=new Ze,_=new Ze,x=new Ze,p=new Z,g=new Z;function v(P,A,N){c[P]=c[A]=c[N]=1,u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,N),h.fromBufferAttribute(s,P),_.fromBufferAttribute(s,A),x.fromBufferAttribute(s,N),d.sub(u),f.sub(u),_.sub(h),x.sub(h);let D=1/(_.x*x.y-x.x*_.y);isFinite(D)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(D),g.copy(f).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(D),o[P].add(p),o[A].add(p),o[N].add(p),l[P].add(g),l[A].add(g),l[N].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,A=T.length;P<A;++P){let N=T[P],D=N.start,z=N.count;for(let C=D,O=D+z;C<O;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new Z,S=new Z,E=new Z,m=new Z;function M(P){E.fromBufferAttribute(i,P),m.copy(E);let A=o[P];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),S.crossVectors(m,A);let D=S.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,A=n.count;P<A;++P)c[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,d=new Z;if(e)for(let f=0,h=e.count;f<h;f+=3){let _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),h=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*u;for(let g=0;g<u;g++)f[_++]=c[h++]}return new si(f,u,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vh=new Z,c_=new Z,u_=new We,Ui=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vh.subVectors(n,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(vh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||u_.getNormalMatrix(e),i=this.coplanarPoint(vh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},h_=0,Yi=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=da,this.side=Gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Fh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hl,this.stencilZFail=Hl,this.stencilZPass=Hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var cr=new Z,yh=new Z,El=new Z,Al=new Z,lo=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yh.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),Al.copy(this.origin).sub(yh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(El),o=Al.dot(this.direction),l=-Al.dot(El),c=Al.lengthSq(),u=Math.abs(1-a*a),d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){let x=1/u;d*=x,f*=x,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yh).addScaledVector(El,f),h}intersectSphere(e,t){if(e.radius<0)return null;cr.subVectors(e.center,this.origin);let n=cr.dot(this.direction),i=cr.dot(cr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,_=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=n.x-a.x,v=n.y-a.y,T=n.z-a.z,y=Math.abs(l),S=Math.abs(c),E=Math.abs(u),m,M,P,A,N,D,z,C,O,k,F,Q;if(y>=S&&y>=E?(P=l,D=d,O=_,Q=g,l>=0?(m=c,M=u,A=f,N=h,z=x,C=p,k=v,F=T):(m=u,M=c,A=h,N=f,z=p,C=x,k=T,F=v)):S>=E?(P=c,D=f,O=x,Q=v,c>=0?(m=u,M=l,A=h,N=d,z=p,C=_,k=T,F=g):(m=l,M=u,A=d,N=h,z=_,C=p,k=g,F=T)):(P=u,D=h,O=p,Q=T,u>=0?(m=l,M=c,A=d,N=f,z=_,C=x,k=g,F=v):(m=c,M=l,A=f,N=d,z=x,C=_,k=v,F=g)),P===0)return null;let G=m/P,I=M/P,H=1/P,he=A-G*D,we=N-I*D,J=z-G*O,oe=C-I*O,ve=k-G*Q,Me=F-I*Q,pe=ve*oe-Me*J,Ie=he*Me-we*ve,Xe=J*we-oe*he;if(i){if(pe<0||Ie<0||Xe<0)return null}else if((pe<0||Ie<0||Xe<0)&&(pe>0||Ie>0||Xe>0))return null;let Ee=pe+Ie+Xe;if(Ee===0)return null;let Ve=H*(pe*D+Ie*O+Xe*Q);return(Ee>0?Ve<0:Ve>0)?null:this.at(Ve/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},la=class extends Yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jd=new St,os=new lo,Rl=new fr,ep=new Z,Cl=new Z,Pl=new Z,Il=new Z,Sh=new Z,Ll=new Z,tp=new Z,Dl=new Z,Pt=class extends dn{constructor(e=new yi,t=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(Sh.fromBufferAttribute(d,e),a?Ll.addScaledVector(Sh,u):Ll.addScaledVector(Sh.sub(t),u))}t.add(Ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(Rl.containsPoint(os.origin)===!1&&(os.intersectSphere(Rl,ep)===null||os.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(jd.copy(s).invert(),os.copy(e.ray).applyMatrix4(jd),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let p=f[_],g=a[p.materialIndex],v=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,S=T;y<S;y+=3){let E=o.getX(y),m=o.getX(y+1),M=o.getX(y+2);i=Nl(this,g,e,n,c,u,d,E,m,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let p=_,g=x;p<g;p+=3){let v=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=Nl(this,a,e,n,c,u,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){let p=f[_],g=a[p.materialIndex],v=Math.max(p.start,h.start),T=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,S=T;y<S;y+=3){let E=y,m=y+1,M=y+2;i=Nl(this,g,e,n,c,u,d,E,m,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=_,g=x;p<g;p+=3){let v=p,T=p+1,y=p+2;i=Nl(this,a,e,n,c,u,d,v,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function f_(r,e,t,n,i,s,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Gr,o),l===null)return null;Dl.copy(o),Dl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Dl);return c<t.near||c>t.far?null:{distance:c,point:Dl.clone(),object:r}}function Nl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Cl),r.getVertexPosition(l,Pl),r.getVertexPosition(c,Il);let u=f_(r,e,t,n,Cl,Pl,Il,tp);if(u){let d=new Z;Nr.getBarycoord(tp,Cl,Pl,Il,d),i&&(u.uv=Nr.getInterpolatedAttribute(i,o,l,c,d,new Ze)),s&&(u.uv1=Nr.getInterpolatedAttribute(s,o,l,c,d,new Ze)),a&&(u.normal=Nr.getInterpolatedAttribute(a,o,l,c,d,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new Z,materialIndex:0};Nr.getNormal(Cl,Pl,Il,f.normal),u.face=f,u.barycoord=d}return u}var co=class extends zn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=fn,u=fn,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var uo=class extends si{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new St,np=new St,Ul=[],ip=new qi,d_=new St,$a=new Pt,Ka=new fr,ho=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,d_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),ip.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Ka.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if($a.geometry=this.geometry,$a.material=this.material,$a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(n),e.ray.intersectsSphere(Ka)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,$s),np.multiplyMatrices(n,$s),$a.matrixWorld=np,$a.raycast(e,Ul);for(let a=0,o=Ul.length;a<o;a++){let l=Ul[a];l.instanceId=s,l.object=this,t.push(l)}Ul.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(i*this.count),i,this.count,Ec,Mi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new fr,p_=new Ze(.5,.5),Ol=new Z,Ur=class{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],x=s[9],p=s[10],g=s[11],v=s[12],T=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-a,h-u,g-_,S-v).normalize(),i[1].setComponents(c+a,h+u,g+_,S+v).normalize(),i[2].setComponents(c+o,h+d,g+x,S+T).normalize(),i[3].setComponents(c-o,h-d,g-x,S-T).normalize(),n)i[4].setComponents(l,f,p,y).normalize(),i[5].setComponents(c-l,h-f,g-p,S-y).normalize();else if(i[4].setComponents(c-l,h-f,g-p,S-y).normalize(),t===xi)i[5].setComponents(c+l,h+f,g+p,S+y).normalize();else if(t===ia)i[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=p_.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ol.x=i.normal.x>0?e.max.x:e.min.x,Ol.y=i.normal.y>0?e.max.y:e.min.y,Ol.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},rp=new St,nc=class r{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];rp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ur),n[i].setFromProjectionMatrix(rp,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ur),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var ca=class extends Yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sp=new St,Ah=new lo,Fl=new fr,Bl=new Z,fo=class extends dn{constructor(e=new yi,t=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(i),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;sp.copy(i).invert(),Ah.copy(e.ray).applyMatrix4(sp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=f,x=h;_<x;_++){let p=c.getX(_);Bl.fromBufferAttribute(d,p),ap(Bl,p,l,i,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=f,x=h;_<x;_++)Bl.fromBufferAttribute(d,_),ap(Bl,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ap(r,e,t,n,i,s,a){let o=Ah.distanceSqToPoint(r);if(o<t){let l=new Z;Ah.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var po=class extends zn{constructor(e=[],t=_s,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fs=class extends zn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var dr=class extends zn{constructor(e,t,n=Fi,i,s,a,o=fn,l=fn,c,u=hr,d=1){if(u!==hr&&u!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},mo=class extends dr{constructor(e,t=Fi,n=_s,i,s,a=fn,o=fn,l,c=hr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},go=class extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Or=class r extends yi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(d,2));function _(x,p,g,v,T,y,S,E,m,M,P){let A=y/m,N=S/M,D=y/2,z=S/2,C=E/2,O=m+1,k=M+1,F=0,Q=0,G=new Z;for(let I=0;I<k;I++){let H=I*N-z;for(let he=0;he<O;he++){let we=he*A-D;G[x]=we*v,G[p]=H*T,G[g]=C,c.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[g]=E>0?1:-1,u.push(G.x,G.y,G.z),d.push(he/m),d.push(1-I/M),F+=1}}for(let I=0;I<M;I++)for(let H=0;H<m;H++){let he=f+H+O*I,we=f+H+O*(I+1),J=f+(H+1)+O*(I+1),oe=f+(H+1)+O*I;l.push(he,we,oe),l.push(we,J,oe),Q+=6}o.addGroup(h,Q,P),h+=Q,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ic=class r extends yi{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Fn(s,3)),this.setAttribute("normal",new Fn(s.slice(),3)),this.setAttribute("uv",new Fn(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new Z,y=new Z,S=new Z;for(let E=0;E<t.length;E+=3)h(t[E+0],T),h(t[E+1],y),h(t[E+2],S),l(T,y,S,v)}function l(v,T,y,S){let E=S+1,m=[];for(let M=0;M<=E;M++){m[M]=[];let P=v.clone().lerp(y,M/E),A=T.clone().lerp(y,M/E),N=E-M;for(let D=0;D<=N;D++)D===0&&M===E?m[M][D]=P:m[M][D]=P.clone().lerp(A,D/N)}for(let M=0;M<E;M++)for(let P=0;P<2*(E-M)-1;P++){let A=Math.floor(P/2);P%2===0?(f(m[M][A+1]),f(m[M+1][A]),f(m[M][A])):(f(m[M][A+1]),f(m[M+1][A+1]),f(m[M+1][A]))}}function c(v){let T=new Z;for(let y=0;y<s.length;y+=3)T.x=s[y+0],T.y=s[y+1],T.z=s[y+2],T.normalize().multiplyScalar(v),s[y+0]=T.x,s[y+1]=T.y,s[y+2]=T.z}function u(){let v=new Z;for(let T=0;T<s.length;T+=3){v.x=s[T+0],v.y=s[T+1],v.z=s[T+2];let y=p(v)/2/Math.PI+.5,S=g(v)/Math.PI+.5;a.push(y,1-S)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){let T=a[v+0],y=a[v+2],S=a[v+4],E=Math.max(T,y,S),m=Math.min(T,y,S);E>.9&&m<.1&&(T<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function h(v,T){let y=v*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function _(){let v=new Z,T=new Z,y=new Z,S=new Z,E=new Ze,m=new Ze,M=new Ze;for(let P=0,A=0;P<s.length;P+=9,A+=6){v.set(s[P+0],s[P+1],s[P+2]),T.set(s[P+3],s[P+4],s[P+5]),y.set(s[P+6],s[P+7],s[P+8]),E.set(a[A+0],a[A+1]),m.set(a[A+2],a[A+3]),M.set(a[A+4],a[A+5]),S.copy(v).add(T).add(y).divideScalar(3);let N=p(S);x(E,A+0,v,N),x(m,A+2,T,N),x(M,A+4,y,N)}}function x(v,T,y,S){S<0&&v.x===1&&(a[T]=v.x-1),y.x===0&&y.z===0&&(a[T]=S/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var ds=class r extends ic{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var Fr=class r extends yi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],x=[],p=[];for(let g=0;g<u;g++){let v=g*f-a;for(let T=0;T<c;T++){let y=T*d-s;_.push(y,-v,0),x.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let T=v+c*g,y=v+c*(g+1),S=v+1+c*(g+1),E=v+1+c*g;h.push(T,y,E),h.push(y,S,E)}this.setIndex(h),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(x,3)),this.setAttribute("uv",new Fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function vs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(op(i))i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(op(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function An(r){let e={};for(let t=0;t<r.length;t++){let n=vs(r[t]);for(let i in n)e[i]=n[i]}return e}function op(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function m_(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function of(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var em={clone:vs,merge:An},g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=m_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new We().fromArray(i.value);break;case"m4":this.uniforms[n].value=new St().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rc=class extends Si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ps=class extends Yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_o=class extends ps{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var xo=class extends Yi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=vc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sc=class extends Yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ac=class extends Yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ks(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function zl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Br=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},oc=class extends Br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wh:s=e,o=2*t-n;break;case Eh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wh:a=e,l=2*n-t;break;case Eh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,_=(n-t)/(i-t),x=_*_,p=x*_,g=-f*p+2*f*x-f*_,v=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*_+1,T=(-1-h)*p+(1.5+h)*x+.5*_,y=h*p-h*x;for(let S=0;S!==o;++S)s[S]=g*a[u+S]+v*a[c+S]+T*a[l+S]+y*a[d+S];return s}},lc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*u;return s}},cc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends Br{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(n-t)/(i-t),x=1-_;for(let p=0;p!==o;++p)s[p]=a[c+p]*x+a[l+p]*_;return s}let f=o*2,h=e-1;for(let _=0;_!==o;++_){let x=a[c+_],p=a[l+_],g=h*f+_*2,v=d[g],T=d[g+1],y=e*f+_*2,S=u[y],E=u[y+1],m=v_(n,t,v,S,i);s[_]=tm(m,x,T,E,p)}return s}};function tm(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function x_(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function v_(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=tm(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=x_(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var oi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),zl(e.settings)&&(n.settings={inTangents:Ks(e.settings.inTangents,Array),outTangents:Ks(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case eo:t=this.InterpolantFactoryMethodDiscrete;break;case Ql:t=this.InterpolantFactoryMethodLinear;break;case Gl:t=this.InterpolantFactoryMethodSmooth;break;case bh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return Ql;case this.InterpolantFactoryMethodSmooth:return Gl;case this.InterpolantFactoryMethodBezier:return bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;zl(this.settings)&&(lp(this.settings.inTangents,e),lp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;zl(this.settings)&&(cp(this.settings.inTangents,e),cp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&N0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,f=d-n,h=d+n;for(let _=0;_!==n;++_){let x=t[d+_];if(x!==t[f+_]||x!==t[h+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,zl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function lp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function cp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Ql;var zr=class extends oi{constructor(e,t,n){super(e,t,n)}};zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=eo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};hc.prototype.ValueTypeName="color";var fc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};fc.prototype.ValueTypeName="number";var dc=class extends Br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)vi.slerpFlat(s,0,a,c-o,a,c,l);return s}},vo=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}};vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends oi{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=eo;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};pc.prototype.ValueTypeName="vector";var mc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],_=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nm=new mc,gc=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua=class extends dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Mh=new St,up=new Z,hp=new Z,yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Mh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===ia||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kl=new Z,Vl=new vi,Gi=new Z,So=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,Vl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Vl,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(kl,Vl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,Vl,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Dr=new Z,fp=new Ze,dp=new Ze,En=class extends So{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,fp,dp),t.subVectors(dp,fp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Rh=class extends yo{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends ua{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Mo=class extends So{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ch=class extends yo{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bo=class extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Ch}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},To=class extends ua{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qs=-90,js=1,ha=class extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new En(Qs,js,e,t);i.layers=this.layers,this.add(i);let s=new En(Qs,js,e,t);s.layers=this.layers,this.add(s);let a=new En(Qs,js,e,t);a.layers=this.layers,this.add(a);let o=new En(Qs,js,e,t);o.layers=this.layers,this.add(o);let l=new En(Qs,js,e,t);l.layers=this.layers,this.add(l);let c=new En(Qs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},_c=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var lf="\\[\\]\\.:\\/",y_=new RegExp("["+lf+"]","g"),cf="[^"+lf+"]",S_="[^"+lf.replace("\\.","")+"]",M_=/((?:WC+[\/:])*)/.source.replace("WC",cf),b_=/(WCOD+)?/.source.replace("WCOD",S_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cf),w_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cf),E_=new RegExp("^"+M_+b_+T_+w_+"$"),A_=["material","materials","bones","map"],Ph=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(y_,"")}static parseTrackName(e){let t=E_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);A_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Ph;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X1=new Float32Array(1);var mf=class mf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};mf.prototype.isMatrix2=!0;var Ih=mf;function uf(r,e,t,n){let i=R_(n);switch(t){case Jh:return r*e;case Ec:return r*e/i.components*i.byteLength;case Ac:return r*e/i.components*i.byteLength;case Hr:return r*e*2/i.components*i.byteLength;case Rc:return r*e*2/i.components*i.byteLength;case $h:return r*e*3/i.components*i.byteLength;case zi:return r*e*4/i.components*i.byteLength;case Cc:return r*e*4/i.components*i.byteLength;case Ro:case Co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Po:case Io:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Dc:return Math.max(r,16)*Math.max(e,8)/4;case Pc:case Lc:return Math.max(r,8)*Math.max(e,8)/2;case Nc:case Uc:case Fc:case Bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Lo:case zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case eu:case tu:case nu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case iu:case ru:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Do:case su:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R_(r){switch(r){case Zn:case Xh:return{byteLength:1,components:1};case ma:case qh:case Bi:return{byteLength:2,components:1};case Tc:case wc:return{byteLength:2,components:4};case Fi:case bc:case Mi:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Tm(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function P_(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){let _=d[f],x=d[h];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){let x=d[h];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
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
#endif`,B_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z_=`#ifdef USE_BATCHING
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
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W_=`#ifdef USE_IRIDESCENCE
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
#endif`,X_=`#ifdef USE_BUMPMAP
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ex=`#define PI 3.141592653589793
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
} // validated`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
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
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mx=`#ifdef USE_ENVMAP
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
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
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
#endif`,Rx=`uniform sampler2D dfgLUT;
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
}`,Cx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
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
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
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
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,ev=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mv=`float getShadowMask() {
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
}`,gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_v=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform float backgroundBlurriness;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
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
}`,Fv=`#if DEPTH_PACKING == 3200
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
}`,Bv=`#define DISTANCE
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
}`,zv=`#define DISTANCE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`uniform float scale;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#define LAMBERT
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
}`,Yv=`#define LAMBERT
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
}`,Zv=`#define MATCAP
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
}`,Jv=`#define MATCAP
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
}`,$v=`#define NORMAL
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
}`,Kv=`#define NORMAL
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
}`,Qv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,ey=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ny=`#define TOON
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
}`,iy=`#define TOON
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
}`,ry=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ay=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ly=`uniform float rotation;
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
}`,cy=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:I_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:N_,alphatest_fragment:U_,alphatest_pars_fragment:O_,aomap_fragment:F_,aomap_pars_fragment:B_,batching_pars_vertex:z_,batching_vertex:k_,begin_vertex:V_,beginnormal_vertex:G_,bsdfs:H_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:Z_,clipping_planes_vertex:J_,color_fragment:$_,color_pars_fragment:K_,color_pars_vertex:Q_,color_vertex:j_,common:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:rx,emissivemap_pars_fragment:sx,colorspace_fragment:ax,colorspace_pars_fragment:ox,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:ux,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Mx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:xx,lights_lambert_fragment:vx,lights_lambert_pars_fragment:yx,lights_pars_begin:Sx,lights_toon_fragment:bx,lights_toon_pars_fragment:Tx,lights_phong_fragment:wx,lights_phong_pars_fragment:Ex,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:Px,lights_fragment_end:Ix,lightprobes_pars_fragment:Lx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Ox,map_fragment:Fx,map_pars_fragment:Bx,map_particle_fragment:zx,map_particle_pars_fragment:kx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Hx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:qx,morphtarget_vertex:Yx,normal_fragment_begin:Zx,normal_fragment_maps:Jx,normal_pars_fragment:$x,normal_pars_vertex:Kx,normal_vertex:Qx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:ev,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:nv,iridescence_pars_fragment:iv,opaque_fragment:rv,packing:sv,premultiplied_alpha_fragment:av,project_vertex:ov,dithering_fragment:lv,dithering_pars_fragment:cv,roughnessmap_fragment:uv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:fv,shadowmap_pars_vertex:dv,shadowmap_vertex:pv,shadowmask_pars_fragment:mv,skinbase_vertex:gv,skinning_pars_vertex:_v,skinning_vertex:xv,skinnormal_vertex:vv,specularmap_fragment:yv,specularmap_pars_fragment:Sv,tonemapping_fragment:Mv,tonemapping_pars_fragment:bv,transmission_fragment:Tv,transmission_pars_fragment:wv,uv_pars_fragment:Ev,uv_pars_vertex:Av,uv_vertex:Rv,worldpos_vertex:Cv,background_vert:Pv,background_frag:Iv,backgroundCube_vert:Lv,backgroundCube_frag:Dv,cube_vert:Nv,cube_frag:Uv,depth_vert:Ov,depth_frag:Fv,distance_vert:Bv,distance_frag:zv,equirect_vert:kv,equirect_frag:Vv,linedashed_vert:Gv,linedashed_frag:Hv,meshbasic_vert:Wv,meshbasic_frag:Xv,meshlambert_vert:qv,meshlambert_frag:Yv,meshmatcap_vert:Zv,meshmatcap_frag:Jv,meshnormal_vert:$v,meshnormal_frag:Kv,meshphong_vert:Qv,meshphong_frag:jv,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:ry,points_frag:sy,shadow_vert:ay,shadow_frag:oy,sprite_vert:ly,sprite_frag:cy},Ae={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ki={basic:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:An([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:An([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:An([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:An([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:An([Ae.points,Ae.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:An([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:An([Ae.common,Ae.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:An([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:An([Ae.sprite,Ae.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:An([Ae.common,Ae.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:An([Ae.lights,Ae.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ki.physical={uniforms:An([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var au={r:0,b:0,g:0},uy=new St,wm=new We;wm.set(-1,0,0,0,1,0,0,0,1);function hy(r,e,t,n,i,s){let a=new He(0),o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let y=v.backgroundBlurriness>0;T=e.get(T,y)}return T}function _(v){let T=!1,y=h(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,T){let y=h(T);y&&y.isCubeTexture?(c===void 0&&(c=new Pt(new Or(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:vs(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wm),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,(u!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new Fr(2,2),new Si({name:"BackgroundMaterial",uniforms:vs(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(au,of(r)),t.buffers.color.setClear(au.r,au.g,au.b,T,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:_,addToRenderList:x,dispose:g}}function fy(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,a=!1;function o(N,D,z,C,O){let k=!1,F=d(N,C,z,D);s!==F&&(s=F,c(s.object)),k=h(N,C,z,O),k&&_(N,C,z,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(N,D,z,C),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function u(N){return r.deleteVertexArray(N)}function d(N,D,z,C){let O=C.wireframe===!0,k=n[D.id];k===void 0&&(k={},n[D.id]=k);let F=N.isInstancedMesh===!0?N.id:0,Q=k[F];Q===void 0&&(Q={},k[F]=Q);let G=Q[z.id];G===void 0&&(G={},Q[z.id]=G);let I=G[O];return I===void 0&&(I=f(l()),G[O]=I),I}function f(N){let D=[],z=[],C=[];for(let O=0;O<t;O++)D[O]=0,z[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:C,object:N,attributes:{},index:null}}function h(N,D,z,C){let O=s.attributes,k=D.attributes,F=0,Q=z.getAttributes();for(let G in Q)if(Q[G].location>=0){let H=O[G],he=k[G];if(he===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),H===void 0||H.attribute!==he||he&&H.data!==he.data)return!0;F++}return s.attributesNum!==F||s.index!==C}function _(N,D,z,C){let O={},k=D.attributes,F=0,Q=z.getAttributes();for(let G in Q)if(Q[G].location>=0){let H=k[G];H===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));let he={};he.attribute=H,H&&H.data&&(he.data=H.data),O[G]=he,F++}s.attributes=O,s.attributesNum=F,s.index=C}function x(){let N=s.newAttributes;for(let D=0,z=N.length;D<z;D++)N[D]=0}function p(N){g(N,0)}function g(N,D){let z=s.newAttributes,C=s.enabledAttributes,O=s.attributeDivisors;z[N]=1,C[N]===0&&(r.enableVertexAttribArray(N),C[N]=1),O[N]!==D&&(r.vertexAttribDivisor(N,D),O[N]=D)}function v(){let N=s.newAttributes,D=s.enabledAttributes;for(let z=0,C=D.length;z<C;z++)D[z]!==N[z]&&(r.disableVertexAttribArray(z),D[z]=0)}function T(N,D,z,C,O,k,F){F===!0?r.vertexAttribIPointer(N,D,z,O,k):r.vertexAttribPointer(N,D,z,C,O,k)}function y(N,D,z,C){x();let O=C.attributes,k=z.getAttributes(),F=D.defaultAttributeValues;for(let Q in k){let G=k[Q];if(G.location>=0){let I=O[Q];if(I===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(I=N.instanceColor)),I!==void 0){let H=I.normalized,he=I.itemSize,we=e.get(I);if(we===void 0)continue;let J=we.buffer,oe=we.type,ve=we.bytesPerElement,Me=oe===r.INT||oe===r.UNSIGNED_INT||I.gpuType===bc;if(I.isInterleavedBufferAttribute){let pe=I.data,Ie=pe.isInterleavedBuffer===!0?pe.stride:pe.itemSize,Xe=I.offset;if(pe.isInstancedInterleavedBuffer||pe.isInstancedBufferAttribute){for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee,pe.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,J);for(let Ee=0;Ee<G.locationSize;Ee++)T(G.location+Ee,he/G.locationSize,oe,H,Ie*ve,(Xe+he/G.locationSize*Ee)*ve,Me)}else{if(I.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)g(G.location+pe,I.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let pe=0;pe<G.locationSize;pe++)p(G.location+pe);r.bindBuffer(r.ARRAY_BUFFER,J);for(let pe=0;pe<G.locationSize;pe++)T(G.location+pe,he/G.locationSize,oe,H,he*ve,he/G.locationSize*pe*ve,Me)}}else if(F!==void 0){let H=F[Q];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(G.location,H);break;case 3:r.vertexAttrib3fv(G.location,H);break;case 4:r.vertexAttrib4fv(G.location,H);break;default:r.vertexAttrib1fv(G.location,H)}}}}v()}function S(){P();for(let N in n){let D=n[N];for(let z in D){let C=D[z];for(let O in C){let k=C[O];for(let F in k)u(k[F].object),delete k[F];delete C[O]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let z in D){let C=D[z];for(let O in C){let k=C[O];for(let F in k)u(k[F].object),delete k[F];delete C[O]}}delete n[N.id]}function m(N){for(let D in n){let z=n[D];for(let C in z){let O=z[C];if(O[N.id]===void 0)continue;let k=O[N.id];for(let F in k)u(k[F].object),delete k[F];delete O[N.id]}}}function M(N){for(let D in n){let z=n[D],C=N.isInstancedMesh===!0?N.id:0,O=z[C];if(O!==void 0){for(let k in O){let F=O[k];for(let Q in F)u(F[Q].object),delete F[Q];delete O[k]}delete z[C],Object.keys(z).length===0&&delete n[D]}}}function P(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:m,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function dy(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function py(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let m=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(m){return!(m!==zi&&n.convert(m)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let M=m===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==Zn&&m!==Mi&&!M&&n.convert(m)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:y,maxSamples:S,samples:E}}function my(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Ui,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{let v=s?0:n,T=v*4,y=g.clippingState||null;l.value=y,y=u(_,f,T,h);for(let S=0;S!==T;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,_!==!0||p===null){let g=h+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=h;T!==x;++T,y+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var Fo=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new po(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Or(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:ms});s.uniforms.tEquirect.value=t;let a=new Pt(i,s),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Bn),new ha(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},im=256,gy=3,_y=20,Em=256,Am=16,xy=3,vy=new Z,yy=new He,xa=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ha(1,10,null),this._boxMesh=new Pt(new Or(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=vy}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(yy));let p=new ha(n,i,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=_,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(im,rf(e))}_fromTexture(e,t){e.mapping===_s||e.mapping===pa?this._setSize(e.image.length===0?im:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=rm(e,!1,!1),n=Math.log2(e)-gy;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=rm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_s||e.mapping===pa?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Sy(),this._integrationMaterial=My());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Am);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-xy)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Em*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=by());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function rm(r,e,t){return new Fo(r,{minFilter:Oi,generateMipmaps:e,type:Bi,colorSpace:to,depthBuffer:t})}function Bo(r,e,t){return new Si({name:r,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:t,side:_n,blending:ms,depthTest:!1,depthWrite:!1})}function Sy(){return Bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Em}u

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
	`)}function My(){return Bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Am}},`

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
	`)}function by(){return Bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_y}
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
	`)}function sm(){return Bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function am(){return Bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ty(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===yc||h===Sc)if(e.has(f)){let _=e.get(f).texture;return o(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let x=new Fo(_.height);return x.fromEquirectangularTexture(r,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,_=h===yc||h===Sc,x=h===_s||h===pa;if(_||x){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new xa(r)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let v=f.image;return _&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new xa(r)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===yc?f.mapping=_s:h===Sc&&(f.mapping=pa),f}function l(f){let h=0,_=6;for(let x=0;x<_;x++)f[x]!==void 0&&h++;return h===_}function c(f){let h=f.target;h.removeEventListener("dispose",c);let _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function wy(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&us("WebGLRenderer: "+n+" extension not supported."),i}}}function Ey(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(_=>delete i[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete i[_.id],a.unregister(_);let x=s.get(_);x&&(e.remove(x),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(_){let x=_.attributes;for(let p in x)e.update(x[p],r.ARRAY_BUFFER)}function d(_){let x=_.index,p=_.attributes.position,g=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?oo:ao,y=new T(Math.ceil(v/3)*6,1),S=y.array;if(x!==null){let m=x.array;g=x.version;for(let M=0,P=0;M<v;M+=3){let A=m[M+0],N=m[M+1],D=m[M+2];S[P++]=A,S[P++]=N,S[P++]=N,S[P++]=D,S[P++]=D,S[P++]=A}}else{g=p.version;for(let m=0,M=0;m<v;m+=3){let P=m+0,A=m+1,N=m+2;S[M++]=P,S[M++]=A,S[M++]=A,S[M++]=N,S[M++]=N,S[M++]=P}}y.version=g;let E=s.get(_);E&&e.remove(E),s.set(_,y)}function f(_){let x=s.get(_);if(x){let p=_.index;p!==null&&x.version<p.version&&d(_)}else d(_);return s.get(_)}function h(){for(let _ in i){let x=i[_].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function Ay(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,h){h!==0&&(r.drawElementsInstanced(n,f,s,d*a,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,h);let x=0;for(let p=0;p<h;p++)x+=f[p];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ry(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cy(r,e,t){let n=new WeakMap,i=new Nt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let P=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],T=0;h===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*d),m=new ro(E,y,S,d);m.type=Mi,m.needsUpdate=!0;let M=T*4;for(let A=0;A<d;A++){let N=p[A],D=g[A],z=v[A],C=y*S*4*A;for(let O=0;O<N.count;O++){let k=O*M;h===!0&&(i.fromBufferAttribute(N,O),E[C+k+0]=i.x,E[C+k+1]=i.y,E[C+k+2]=i.z,E[C+k+3]=0),_===!0&&(i.fromBufferAttribute(D,O),E[C+k+4]=i.x,E[C+k+5]=i.y,E[C+k+6]=i.z,E[C+k+7]=0),x===!0&&(i.fromBufferAttribute(z,O),E[C+k+8]=i.x,E[C+k+9]=i.y,E[C+k+10]=i.z,E[C+k+11]=z.itemSize===4?i.w:1)}}f={count:d,texture:m,size:new Ze(y,S)},n.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Py(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Iy={[Bh]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[kh]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[Gh]:"AGX_TONE_MAPPING",[Hh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function Ly(r,e,t,n,i,s){let a=new ai(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new yi;u.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Fn([0,2,0,0,2,0],2));let d=new rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(u,d),h=new Mo(-1,1,1,-1,0,1),_=null,x=null,p=!1,g,v=null,T=[],y=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let m=0;m<T.length;m++){let M=T[m];M.setSize&&M.setSize(S,E)}},this.setEffects=function(S){T=S,y=T.length>0&&T[0].isRenderPass===!0;let E=a.width,m=a.height;T.length>0&&o===null&&(o=new ai(E,m,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new ai(E,m,{type:Bi,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&T.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new dr(E,m),s===!0&&(c.format=pr,c.type=xs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<T.length;P++){let A=T[P];A.setSize&&A.setSize(E,m),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,E){if(p||S.toneMapping===Ji&&T.length===0)return!1;if(v=E,E!==null){let m=E.width,M=E.height;(a.width!==m||a.height!==M)&&this.setSize(m,M)}return y===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Ji,!0},this.hasRenderPass=function(){return y},this.end=function(S,E){S.toneMapping=g,p=!0;let m=a,M=o;for(let P=0;P<T.length;P++){let A=T[P];A.enabled!==!1&&(A.render(S,M,m,E),A.needsSwap!==!1&&(m=M,M=M===o?l:o))}if(_!==S.outputColorSpace||x!==S.toneMapping){_=S.outputColorSpace,x=S.toneMapping,d.defines={},lt.getTransfer(_)===_t&&(d.defines.SRGB_TRANSFER="");let P=Iy[x];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,S.setRenderTarget(v),S.render(f,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Rm=new zn,Cm=new dr(1,1),Pm=new mo(1),Im=new ro,Lm=new tc,Dm=new po,om=[],lm=[],cm=new Float32Array(16),um=new Float32Array(9),hm=new Float32Array(4);function va(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=om[i];if(s===void 0&&(s=new Float32Array(i),om[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cu(r,e){let t=lm[e];t===void 0&&(t=new Int32Array(e),lm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Dy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ny(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function Uy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function Oy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function Fy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;hm.set(n),r.uniformMatrix2fv(this.addr,!1,hm),on(t,n)}}function By(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;um.set(n),r.uniformMatrix3fv(this.addr,!1,um),on(t,n)}}function zy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;cm.set(n),r.uniformMatrix4fv(this.addr,!1,cm),on(t,n)}}function ky(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Vy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function Gy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function Hy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function Wy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function qy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function Yy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function uu(r){return r.version===0&&(r.compareFunction=jh,r.needsUpdate=!0),r}function Zy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=uu(Cm):s=Rm,t.setTexture2D(e||s,i)}function Jy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lm,i)}function $y(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=uu(Pm):s=Dm,t.setTextureCube(e||s,i)}function Ky(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Im,i)}function Qy(r){switch(r){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Oy;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return ky;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Hy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Ky}}function jy(r,e){r.uniform1fv(this.addr,e)}function eS(r,e){let t=va(e,this.size,2);r.uniform2fv(this.addr,t)}function tS(r,e){let t=va(e,this.size,3);r.uniform3fv(this.addr,t)}function nS(r,e){let t=va(e,this.size,4);r.uniform4fv(this.addr,t)}function iS(r,e){let t=va(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function rS(r,e){let t=va(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function sS(r,e){let t=va(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function aS(r,e){r.uniform1iv(this.addr,e)}function oS(r,e){r.uniform2iv(this.addr,e)}function lS(r,e){r.uniform3iv(this.addr,e)}function cS(r,e){r.uniform4iv(this.addr,e)}function uS(r,e){r.uniform1uiv(this.addr,e)}function hS(r,e){r.uniform2uiv(this.addr,e)}function fS(r,e){r.uniform3uiv(this.addr,e)}function dS(r,e){r.uniform4uiv(this.addr,e)}function pS(r,e,t){let n=this.cache,i=e.length,s=cu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=uu(Cm):a=Rm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function mS(r,e,t){let n=this.cache,i=e.length,s=cu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Lm,s[a])}function gS(r,e,t){let n=this.cache,i=e.length,s=cu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=uu(Pm):a=Dm;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function _S(r,e,t){let n=this.cache,i=e.length,s=cu(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Im,s[a])}function xS(r){switch(r){case 5126:return jy;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return aS;case 35667:case 35671:return oS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return hS;case 36295:return fS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return _S}}var xf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qy(t.type)}},vf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xS(t.type)}},yf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},gf=/(\w+)(\])?(\[|\.)?/g;function fm(r,e){r.seq.push(e),r.map[e.id]=e}function vS(r,e,t){let n=r.name,i=n.length;for(gf.lastIndex=0;;){let s=gf.exec(n),a=gf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){fm(t,c===void 0?new xf(o,r,e):new vf(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new yf(o),fm(t,d)),t=d}}}var _a=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);vS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function dm(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var yS=37297,SS=0;function MS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var pm=new We;function bS(r){lt._getMatrix(pm,lt.workingColorSpace,r);let e=`mat3( ${pm.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case no:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function mm(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+MS(r.getShaderSource(e),o)}else return s}function TS(r,e){let t=bS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var wS={[Bh]:"Linear",[zh]:"Reinhard",[kh]:"Cineon",[Eo]:"ACESFilmic",[Gh]:"AgX",[Hh]:"Neutral",[Vh]:"Custom"};function ES(r,e){let t=wS[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ou=new Z;function AS(){lt.getLuminanceCoefficients(ou);let r=ou.x.toFixed(4),e=ou.y.toFixed(4),t=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function CS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function PS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Oo(r){return r!==""}function gm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _m(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var IS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(r){return r.replace(IS,LS)}function LS(r,e){let t=Ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sf(t)}var DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(r){return r.replace(DS,NS)}function NS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var US={[wo]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function OS(r){return US[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FS={[pa]:"ENVMAP_MODE_REFRACTION"};function BS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":FS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zS={[vc]:"ENVMAP_BLENDING_MULTIPLY",[Up]:"ENVMAP_BLENDING_MIX",[Op]:"ENVMAP_BLENDING_ADD"};function kS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zS[r.combine]||"ENVMAP_BLENDING_NONE"}function VS(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=OS(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=BS(t),d=kS(t),f=RS(t),h=CS(s),_=i.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Oo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Oo).join(`
`),p.length>0&&(p+=`
`)):(x=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),p=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ji?ES("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,TS("linearToOutputTexel",t.outputColorSpace),AS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),a=Sf(a),a=gm(a,t),a=_m(a,t),o=Sf(o),o=gm(o,t),o=_m(o,t),a=xm(a),o=xm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=g+x+a,T=g+p+o,y=dm(i,i.VERTEX_SHADER,v),S=dm(i,i.FRAGMENT_SHADER,T);i.attachShader(_,y),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(A){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",D=i.getShaderInfoLog(y)||"",z=i.getShaderInfoLog(S)||"",C=N.trim(),O=D.trim(),k=z.trim(),F=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,S);else{let G=mm(i,y,"vertex"),I=mm(i,S,"fragment");Ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+C+`
`+G+`
`+I)}else C!==""?ke("WebGLProgram: Program Info Log:",C):(O===""||k==="")&&(Q=!1);Q&&(A.diagnostics={runnable:F,programLog:C,vertexShader:{log:O,prefix:x},fragmentShader:{log:k,prefix:p}})}i.deleteShader(y),i.deleteShader(S),m=new _a(i,_),M=PS(i,_)}let m;this.getUniforms=function(){return m===void 0&&E(this),m};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,yS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=S,this}var GS=0,Mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bf(e),t.set(e,n)),n}},bf=class{constructor(e){this.id=GS++,this.code=e,this.usedTimes=0}};function HS(r){return r===Hr||r===Lo||r===Do}function WS(r,e,t,n,i,s){let a=new so,o=new Mf,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(m){return l.add(m),m===0?"uv":`uv${m}`}function _(m,M,P,A,N,D){let z=A.fog,C=N.geometry,O=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?A.environment:null,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,F=e.get(m.envMap||O,k),Q=f[m.type],G=n.precision;m.precision!==null&&(G=n.getMaxPrecision(m.precision),G!==m.precision&&ke("WebGLProgram.getParameters:",m.precision,"not supported, using",G,"instead."));let I=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,H=I!==void 0?I.length:0,he=0;C.morphAttributes.position!==void 0&&(he=1),C.morphAttributes.normal!==void 0&&(he=2),C.morphAttributes.color!==void 0&&(he=3);let we,J,oe,ve;if(Q){let re=Ki[Q];we=re.vertexShader,J=re.fragmentShader}else{we=m.vertexShader,J=m.fragmentShader;let re=o.getVertexShaderStage(m),Ce=o.getFragmentShaderStage(m);o.update(m,re,Ce),oe=re.id,ve=Ce.id}let Me=r.getRenderTarget(),pe=r.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,Xe=N.isBatchedMesh===!0,Ee=!!m.map,Ve=!!m.matcap,Le=!!F,Ue=Le&&F.isPMREMTexture===!0,st=!!m.aoMap,Je=!!m.lightMap,q=!!m.bumpMap&&m.wireframe===!1,$e=!!m.normalMap,Gt=!!m.displacementMap,vt=!!m.emissiveMap,nt=!!m.metalnessMap,Rt=!!m.roughnessMap,It=m.anisotropy>0,B=m.clearcoat>0,ht=m.diffuseRoughness>0,ct=m.dispersion>0,ze=m.retroreflectivity>0,j=m.iridescence>0,Re=m.sheen>0,le=m.transmission>0,ye=It&&!!m.anisotropyMap,R=B&&!!m.clearcoatMap,b=B&&!!m.clearcoatNormalMap,V=B&&!!m.clearcoatRoughnessMap,ae=ht&&!!m.diffuseRoughnessMap,ne=j&&!!m.iridescenceMap,ue=j&&!!m.iridescenceThicknessMap,ge=Re&&!!m.sheenColorMap,X=Re&&!!m.sheenRoughnessMap,te=!!m.specularMap,de=!!m.specularColorMap,L=!!m.specularIntensityMap,ee=le&&!!m.transmissionMap,$=le&&!!m.thicknessMap,me=!!m.gradientMap,fe=!!m.alphaMap,_e=m.alphaTest>0,ce=!!m.alphaHash,xe=!!m.extensions,se=Ji;m.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(se=r.toneMapping);let ie=Ue?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Se={shaderID:Q,shaderType:m.type,shaderName:m.name,vertexShader:we,fragmentShader:J,defines:m.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:G,batching:Xe,batchingColor:Xe&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:Me===null?r.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ee,matcap:Ve,envMap:Le,envMapMode:Le&&F.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?ie.length-1:null,envMapSize:Ue?ie[0].width:null,aoMap:st,lightMap:Je,bumpMap:q,normalMap:$e,displacementMap:Gt,emissiveMap:vt,normalMapObjectSpace:$e&&m.normalMapType===zp,normalMapTangentSpace:$e&&m.normalMapType===No,packedNormalMap:$e&&m.normalMapType===No&&HS(m.normalMap.format),metalnessMap:nt,roughnessMap:Rt,anisotropy:It,anisotropyMap:ye,clearcoat:B,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:V,diffuseRoughness:ht,diffuseRoughnessMap:ae,dispersion:ct,retroreflection:ze,iridescence:j,iridescenceMap:ne,iridescenceThicknessMap:ue,sheen:Re,sheenColorMap:ge,sheenRoughnessMap:X,specularMap:te,specularColorMap:de,specularIntensityMap:L,transmission:le,transmissionMap:ee,thicknessMap:$,gradientMap:me,opaque:m.transparent===!1&&m.blending===da&&m.alphaToCoverage===!1,alphaMap:fe,alphaTest:_e,alphaHash:ce,combine:m.combine,mapUv:Ee&&h(m.map.channel),aoMapUv:st&&h(m.aoMap.channel),lightMapUv:Je&&h(m.lightMap.channel),bumpMapUv:q&&h(m.bumpMap.channel),normalMapUv:$e&&h(m.normalMap.channel),displacementMapUv:Gt&&h(m.displacementMap.channel),emissiveMapUv:vt&&h(m.emissiveMap.channel),metalnessMapUv:nt&&h(m.metalnessMap.channel),roughnessMapUv:Rt&&h(m.roughnessMap.channel),anisotropyMapUv:ye&&h(m.anisotropyMap.channel),clearcoatMapUv:R&&h(m.clearcoatMap.channel),clearcoatNormalMapUv:b&&h(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&h(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&h(m.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&h(m.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&h(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&h(m.sheenColorMap.channel),sheenRoughnessMapUv:X&&h(m.sheenRoughnessMap.channel),specularMapUv:te&&h(m.specularMap.channel),specularColorMapUv:de&&h(m.specularColorMap.channel),specularIntensityMapUv:L&&h(m.specularIntensityMap.channel),transmissionMapUv:ee&&h(m.transmissionMap.channel),thicknessMapUv:$&&h(m.thicknessMap.channel),alphaMapUv:fe&&h(m.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&($e||It),vertexNormals:!!C.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ee||fe),fog:!!z,useFog:m.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||C.attributes.normal===void 0&&$e===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:he,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(re=>re.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:Ee&&m.map.isVideoTexture===!0&&lt.getTransfer(m.map.colorSpace)===_t,decodeVideoTextureEmissive:vt&&m.emissiveMap.isVideoTexture===!0&&lt.getTransfer(m.emissiveMap.colorSpace)===_t,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Zi,flipSided:m.side===_n,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:xe&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&m.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function x(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let P in m.defines)M.push(P),M.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(p(M,m),g(M,m),M.push(r.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function p(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapPMREM),m.push(M.envMapMaxLod),m.push(M.envMapSize),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.diffuseRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.numLightProbeGrids),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function g(m,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function v(m){let M=f[m.type],P;if(M){let A=Ki[M];P=em.clone(A.uniforms)}else P=m.uniforms;return P}function T(m,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new VS(r,M,m,i),c.push(P),u.set(M,P)),P}function y(m){if(--m.usedTimes===0){let M=c.indexOf(m);c[M]=c[c.length-1],c.pop(),u.delete(m.cacheKey),m.destroy()}}function S(m){o.remove(m)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:E}}function XS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function qS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sm(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,x,p,g){let v=r[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:g},r[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=_,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=p,v.group=g),e++,v}function l(f,h,_,x,p,g,v){v.reversedDepth===!0&&(p=-p);let T=o(f,h,_,x,p,g);_.transmission>0?n.push(T):_.transparent===!0?i.push(T):t.push(T)}function c(f,h,_,x,p,g){let v=o(f,h,_,x,p,g);_.transmission>0?n.unshift(v):_.transparent===!0?i.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||qS),n.length>1&&n.sort(h||ym),i.length>1&&i.sort(h||ym)}function d(){for(let f=e,h=r.length;f<h;f++){let _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function YS(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Sm,r.set(n,[a])):i>=s.length?(a=new Sm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ZS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new He};break;case"SpotLight":t={position:new Z,direction:new Z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=t,t}}}function JS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var $S=0;function KS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QS(r){let e=new ZS,t=JS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new St,a=new St;function o(c){let u=0,d=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let h=0,_=0,x=0,p=0,g=0,v=0,T=0,y=0,S=0,E=0,m=0,M=0,P=0,A=0;c.sort(KS);for(let D=0,z=c.length;D<z;D++){let C=c[D],O=C.color,k=C.intensity,F=C.distance,Q=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Hr?Q=C.shadow.map.texture:Q=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=O.r*k,d+=O.g*k,f+=O.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],k);A++}else if(C.isSunLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let I=C.shadow,H=t.get(C);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[_]=H,n.sunShadowMap[_]=Q;let he=I.getViewportCount();for(let we=0;we<he;we++)n.sunShadowMatrix[x+we]=I.getMatrix(we),n.sunShadowCascade[x+we]=I._cascadeData[we];x+=he,_++}n.sun[h]=G,h++}else if(C.isDirectionalLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let I=C.shadow,H=t.get(C);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize=I.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=G,p++}else if(C.isSpotLight){let G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(O).multiplyScalar(k),G.distance=F,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[v]=G;let I=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,I.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[v]=I.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize=I.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=Q,m++}v++}else if(C.isRectAreaLight){let G=e.get(C);G.color.copy(O).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=G,T++}else if(C.isPointLight){let G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){let I=C.shadow,H=t.get(C);H.shadowIntensity=I.intensity,H.shadowBias=I.bias,H.shadowNormalBias=I.normalBias,H.shadowRadius=I.radius,H.shadowMapSize=I.mapSize,H.shadowCameraNear=I.camera.near,H.shadowCameraFar=I.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=G,g++}else if(C.isHemisphereLight){let G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[y]=G,y++}}T>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==h||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==v||N.rectAreaLength!==T||N.hemiLength!==y||N.numSunShadows!==_||N.numDirectionalShadows!==S||N.numPointShadows!==E||N.numSpotShadows!==m||N.numSpotMaps!==M||N.numLightProbes!==A)&&(n.sun.length=h,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,N.sunLength=h,N.directionalLength=p,N.pointLength=g,N.spotLength=v,N.rectAreaLength=T,N.hemiLength=y,N.numSunShadows=_,N.numDirectionalShadows=S,N.numPointShadows=E,N.numSpotShadows=m,N.numSpotMaps=M,N.numLightProbes=A,n.version=$S++)}function l(c,u){let d=0,f=0,h=0,_=0,x=0,p=0,g=u.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let y=c[v];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),f++}else if(y.isSpotLight){let S=n.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),_++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Mm(r){let e=new QS(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jS(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Mm(r),e.set(i,[o])):s>=a.length?(o=new Mm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var eM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
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
}`,nM=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],iM=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],bm=new St,Uo=new Z,_f=new Z;function rM(r,e,t){let n=new Ur,i=new Ze,s=new Ze,a=new Nt,o=new sc,l=new ac,c={},u=t.maxTextureSize,d={[Gr]:_n,[_n]:Gr,[Zi]:Zi},f=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:eM,fragmentShader:tM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let _=new yi;_.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let g=this.type;this.render=function(E,m,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===gp&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wo);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ms),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=g!==this.type;z&&m.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=E.length;C<O;C++){let k=E[C],F=k.shadow;if(F===void 0){ke("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let Q=F.getFrameExtents();i.multiply(Q),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,F.mapSize.y=s.y));let G=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===fa){if(k.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ai(i.x,i.y,{format:Hr,type:Bi,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new dr(i.x,i.y,Mi),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=hr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn}else k.isPointLight?(F.map=new Fo(i.x),F.map.depthTexture=new mo(i.x,Fi)):(F.map=new ai(i.x,i.y),F.map.depthTexture=new dr(i.x,i.y,Fi)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=hr,this.type===wo?(F.map.depthTexture.compareFunction=G?Qh:Kh,F.map.depthTexture.minFilter=Bn,F.map.depthTexture.magFilter=Bn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let I=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();k.isPointLight!==!0&&F.updateMatrices(k,M);let H=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let he=0;he<I;he++){let we=F.getCamera(he);if(k.isPointLight){let J=F.camera,oe=F.matrix,ve=k.distance||J.far;ve!==J.far&&(J.far=ve,J.updateProjectionMatrix()),Uo.setFromMatrixPosition(k.matrixWorld),J.position.copy(Uo),_f.copy(J.position),_f.add(nM[he]),J.up.copy(iM[he]),J.lookAt(_f),J.updateMatrixWorld(),oe.makeTranslation(-Uo.x,-Uo.y,-Uo.z),bm.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(bm,J.coordinateSystem,J.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,he),r.clear();else{he===0&&(r.setRenderTarget(F.map),r.clear());let J=F.getViewport(he);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),D.viewport(a)}n=F.getFrustum(he),y(m,M,we,k,H,this.type)}F.isPointLightShadow!==!0&&this.type===fa&&v(F,M),F.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,A,N)};function v(E,m){let M=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null?E.mapPass=new ai(i.x,i.y,{format:Hr,type:Bi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(m,null,M,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(m,null,M,h,x,null)}function T(E,m,M,P){let A=null,N=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)A=N;else if(A=M.isPointLight===!0?l:o,r.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let D=A.uuid,z=m.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let O=C[z];O===void 0&&(O=A.clone(),C[z]=O,m.addEventListener("dispose",S)),A=O}if(A.visible=m.visible,A.wireframe=m.wireframe,P===fa?A.side=m.shadowSide!==null?m.shadowSide:m.side:A.side=m.shadowSide!==null?m.shadowSide:d[m.side],A.alphaMap=m.alphaMap,A.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,A.map=m.map,A.clipShadows=m.clipShadows,A.clippingPlanes=m.clippingPlanes,A.clipIntersection=m.clipIntersection,A.displacementMap=m.displacementMap,A.displacementScale=m.displacementScale,A.displacementBias=m.displacementBias,A.wireframeLinewidth=m.wireframeLinewidth,A.linewidth=m.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=M}return A}function y(E,m,M,P,A,N){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===fa)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let C=e.update(E),O=E.material;if(Array.isArray(O)){let k=C.groups;for(let F=0,Q=k.length;F<Q;F++){let G=k[F],I=O[G.materialIndex];if(I&&I.visible){let H=T(E,I,P,N);E.onBeforeShadow(r,E,m,M,C,H,G),r.renderBufferDirect(M,null,C,H,E,G),E.onAfterShadow(r,E,m,M,C,H,G)}}}else if(O.visible){let k=T(E,O,P,N);E.onBeforeShadow(r,E,m,M,C,k,null),r.renderBufferDirect(M,null,C,k,E,null),E.onAfterShadow(r,E,m,M,C,k,null)}}let z=E.children;for(let C=0,O=z.length;C<O;C++)y(z[C],m,M,P,A,N)}function S(E){E.target.removeEventListener("dispose",S);for(let M in c){let P=c[M],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function sM(r,e){function t(){let L=!1,ee=new Nt,$=null,me=new Nt(0,0,0,0);return{setMask:function(fe){$!==fe&&!L&&(r.colorMask(fe,fe,fe,fe),$=fe)},setLocked:function(fe){L=fe},setClear:function(fe,_e,ce,xe,se){se===!0&&(fe*=xe,_e*=xe,ce*=xe),ee.set(fe,_e,ce,xe),me.equals(ee)===!1&&(r.clearColor(fe,_e,ce,xe),me.copy(ee))},reset:function(){L=!1,$=null,me.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,$=null,me=null,fe=null;return{setReversed:function(_e){if(ee!==_e){let ce=e.get("EXT_clip_control");_e?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),ee=_e;let xe=fe;fe=null,this.setClear(xe)}},getReversed:function(){return ee},setTest:function(_e){_e?pe(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(_e){$!==_e&&!L&&(r.depthMask(_e),$=_e)},setFunc:function(_e){if(ee&&(_e=$p[_e]),me!==_e){switch(_e){case Wl:r.depthFunc(r.NEVER);break;case Xl:r.depthFunc(r.ALWAYS);break;case ql:r.depthFunc(r.LESS);break;case ta:r.depthFunc(r.LEQUAL);break;case Yl:r.depthFunc(r.EQUAL);break;case Zl:r.depthFunc(r.GEQUAL);break;case Jl:r.depthFunc(r.GREATER);break;case $l:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=_e}},setLocked:function(_e){L=_e},setClear:function(_e){fe!==_e&&(fe=_e,ee&&(_e=1-_e),r.clearDepth(_e))},reset:function(){L=!1,$=null,me=null,fe=null,ee=!1}}}function i(){let L=!1,ee=null,$=null,me=null,fe=null,_e=null,ce=null,xe=null,se=null;return{setTest:function(ie){L||(ie?pe(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(ie){ee!==ie&&!L&&(r.stencilMask(ie),ee=ie)},setFunc:function(ie,Se,re){($!==ie||me!==Se||fe!==re)&&(r.stencilFunc(ie,Se,re),$=ie,me=Se,fe=re)},setOp:function(ie,Se,re){(_e!==ie||ce!==Se||xe!==re)&&(r.stencilOp(ie,Se,re),_e=ie,ce=Se,xe=re)},setLocked:function(ie){L=ie},setClear:function(ie){se!==ie&&(r.clearStencil(ie),se=ie)},reset:function(){L=!1,ee=null,$=null,me=null,fe=null,_e=null,ce=null,xe=null,se=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,u={},d={},f={},h=new WeakMap,_=[],x=null,p=!1,g=null,v=null,T=null,y=null,S=null,E=null,m=null,M=new He(0,0,0),P=0,A=!1,N=null,D=null,z=null,C=null,O=null,k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Q=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=Q>=2);let I=null,H={},he=r.getParameter(r.SCISSOR_BOX),we=r.getParameter(r.VIEWPORT),J=new Nt().fromArray(he),oe=new Nt().fromArray(we);function ve(L,ee,$,me){let fe=new Uint8Array(4),_e=r.createTexture();r.bindTexture(L,_e),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<$;ce++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(ee+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return _e}let Me={};Me[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(r.DEPTH_TEST),a.setFunc(ta),q(!1),$e(Lh),pe(r.CULL_FACE),st(ms);function pe(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function Ie(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Xe(L,ee){return f[L]!==ee?(r.bindFramebuffer(L,ee),f[L]=ee,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ee),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ee(L,ee){let $=_,me=!1;if(L){$=h.get(ee),$===void 0&&($=[],h.set(ee,$));let fe=L.textures;if($.length!==fe.length||$[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,ce=fe.length;_e<ce;_e++)$[_e]=r.COLOR_ATTACHMENT0+_e;$.length=fe.length,me=!0}}else $[0]!==r.BACK&&($[0]=r.BACK,me=!0);me&&r.drawBuffers($)}function Ve(L){return x!==L?(r.useProgram(L),x=L,!0):!1}let Le={[gs]:r.FUNC_ADD,[xp]:r.FUNC_SUBTRACT,[vp]:r.FUNC_REVERSE_SUBTRACT};Le[yp]=r.MIN,Le[Sp]=r.MAX;let Ue={[Mp]:r.ZERO,[bp]:r.ONE,[Tp]:r.SRC_COLOR,[Oh]:r.SRC_ALPHA,[Pp]:r.SRC_ALPHA_SATURATE,[Rp]:r.DST_COLOR,[Ep]:r.DST_ALPHA,[wp]:r.ONE_MINUS_SRC_COLOR,[Fh]:r.ONE_MINUS_SRC_ALPHA,[Cp]:r.ONE_MINUS_DST_COLOR,[Ap]:r.ONE_MINUS_DST_ALPHA,[Ip]:r.CONSTANT_COLOR,[Lp]:r.ONE_MINUS_CONSTANT_COLOR,[Dp]:r.CONSTANT_ALPHA,[Np]:r.ONE_MINUS_CONSTANT_ALPHA};function st(L,ee,$,me,fe,_e,ce,xe,se,ie){if(L===ms){p===!0&&(Ie(r.BLEND),p=!1);return}if(p===!1&&(pe(r.BLEND),p=!0),L!==_p){if(L!==g||ie!==A){if((v!==gs||S!==gs)&&(r.blendEquation(r.FUNC_ADD),v=gs,S=gs),ie)switch(L){case da:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dh:r.blendFunc(r.ONE,r.ONE);break;case Nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",L);break}else switch(L){case da:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Nh:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",L);break}T=null,y=null,E=null,m=null,M.set(0,0,0),P=0,g=L,A=ie}return}fe=fe||ee,_e=_e||$,ce=ce||me,(ee!==v||fe!==S)&&(r.blendEquationSeparate(Le[ee],Le[fe]),v=ee,S=fe),($!==T||me!==y||_e!==E||ce!==m)&&(r.blendFuncSeparate(Ue[$],Ue[me],Ue[_e],Ue[ce]),T=$,y=me,E=_e,m=ce),(xe.equals(M)===!1||se!==P)&&(r.blendColor(xe.r,xe.g,xe.b,se),M.copy(xe),P=se),g=L,A=!1}function Je(L,ee){L.side===Zi?Ie(r.CULL_FACE):pe(r.CULL_FACE);let $=L.side===_n;ee&&($=!$),q($),L.blending===da&&L.transparent===!1?st(ms):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function q(L){N!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),N=L)}function $e(L){L!==pp?(pe(r.CULL_FACE),L!==D&&(L===Lh?r.cullFace(r.BACK):L===mp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),D=L}function Gt(L){L!==z&&(F&&r.lineWidth(L),z=L)}function vt(L,ee,$){L?(pe(r.POLYGON_OFFSET_FILL),(C!==ee||O!==$)&&(C=ee,O=$,a.getReversed()&&(ee=-ee,$=-$),r.polygonOffset(ee,$))):Ie(r.POLYGON_OFFSET_FILL)}function nt(L){L?pe(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function Rt(L){L===void 0&&(L=r.TEXTURE0+k-1),I!==L&&(r.activeTexture(L),I=L)}function It(L,ee,$){$===void 0&&(I===null?$=r.TEXTURE0+k-1:$=I);let me=H[$];me===void 0&&(me={type:void 0,texture:void 0},H[$]=me),(me.type!==L||me.texture!==ee)&&(I!==$&&(r.activeTexture($),I=$),r.bindTexture(L,ee||Me[L]),me.type=L,me.texture=ee)}function B(){let L=H[I];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{r.compressedTexImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}function ct(){try{r.compressedTexImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}function ze(){try{r.texSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}function j(){try{r.texSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}function Re(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}function le(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}function ye(){try{r.texStorage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}function R(){try{r.texStorage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}function b(){try{r.texImage2D(...arguments)}catch(L){Ge("WebGLState:",L)}}function V(){try{r.texImage3D(...arguments)}catch(L){Ge("WebGLState:",L)}}function ae(L){return d[L]!==void 0?d[L]:r.getParameter(L)}function ne(L,ee){d[L]!==ee&&(r.pixelStorei(L,ee),d[L]=ee)}function ue(L){J.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function ge(L){oe.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function X(L,ee){let $=c.get(ee);$===void 0&&($=new WeakMap,c.set(ee,$));let me=$.get(L);me===void 0&&(me=r.getUniformBlockIndex(ee,L.name),r.uniformBlockBinding(ee,me,me),$.set(L,me))}function te(L,ee,$){let fe=c.get(ee).get(L);l[fe]!==$&&(r.bindBufferBase(r.UNIFORM_BUFFER,fe,$),l[fe]=$)}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,H={},f={},l={},h=new WeakMap,_=[],x=null,p=!1,g=null,v=null,T=null,y=null,S=null,E=null,m=null,M=new He(0,0,0),P=0,A=!1,N=null,D=null,z=null,C=null,O=null,J.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Ie,bindFramebuffer:Xe,drawBuffers:Ee,useProgram:Ve,setBlending:st,setMaterial:Je,setFlipSided:q,setCullFace:$e,setLineWidth:Gt,setPolygonOffset:vt,setScissorTest:nt,activeTexture:Rt,bindTexture:It,unbindTexture:B,compressedTexImage2D:ht,compressedTexImage3D:ct,texImage2D:b,texImage3D:V,pixelStorei:ne,getParameter:ae,updateUBOMapping:X,uniformBlockBinding:te,texStorage2D:ye,texStorage3D:R,texSubImage2D:ze,texSubImage3D:j,compressedTexSubImage2D:Re,compressedTexSubImage3D:le,scissor:ue,viewport:ge,reset:de}}function aM(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,d=new Set,f,h=new WeakMap,_=new Set,x=new FinalizationRegistry(R=>_.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return p?new OffscreenCanvas(R,b):io("canvas")}function v(R,b,V){let ae=1,ne=ye(R);if((ne.width>V||ne.height>V)&&(ae=V/Math.max(ne.width,ne.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ue=Math.floor(ae*ne.width),ge=Math.floor(ae*ne.height);f===void 0&&(f=g(ue,ge));let X=b?g(ue,ge):f;return X.width=ue,X.height=ge,X.getContext("2d").drawImage(R,0,0,ue,ge),ke("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+ge+")."),X}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function T(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,b,V,ae,ne,ue=!1){if(R!==null){if(r[R]!==void 0)return r[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;ae&&(ge=e.get("EXT_texture_norm16"),ge||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=b;if(b===r.RED&&(V===r.FLOAT&&(X=r.R32F),V===r.HALF_FLOAT&&(X=r.R16F),V===r.UNSIGNED_BYTE&&(X=r.R8),V===r.UNSIGNED_SHORT&&ge&&(X=ge.R16_EXT),V===r.SHORT&&ge&&(X=ge.R16_SNORM_EXT)),b===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(X=r.R8UI),V===r.UNSIGNED_SHORT&&(X=r.R16UI),V===r.UNSIGNED_INT&&(X=r.R32UI),V===r.BYTE&&(X=r.R8I),V===r.SHORT&&(X=r.R16I),V===r.INT&&(X=r.R32I)),b===r.RG&&(V===r.FLOAT&&(X=r.RG32F),V===r.HALF_FLOAT&&(X=r.RG16F),V===r.UNSIGNED_BYTE&&(X=r.RG8),V===r.UNSIGNED_SHORT&&ge&&(X=ge.RG16_EXT),V===r.SHORT&&ge&&(X=ge.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(X=r.RG8UI),V===r.UNSIGNED_SHORT&&(X=r.RG16UI),V===r.UNSIGNED_INT&&(X=r.RG32UI),V===r.BYTE&&(X=r.RG8I),V===r.SHORT&&(X=r.RG16I),V===r.INT&&(X=r.RG32I)),b===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(X=r.RGB8UI),V===r.UNSIGNED_SHORT&&(X=r.RGB16UI),V===r.UNSIGNED_INT&&(X=r.RGB32UI),V===r.BYTE&&(X=r.RGB8I),V===r.SHORT&&(X=r.RGB16I),V===r.INT&&(X=r.RGB32I)),b===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),V===r.UNSIGNED_INT&&(X=r.RGBA32UI),V===r.BYTE&&(X=r.RGBA8I),V===r.SHORT&&(X=r.RGBA16I),V===r.INT&&(X=r.RGBA32I)),b===r.RGB&&(V===r.UNSIGNED_SHORT&&ge&&(X=ge.RGB16_EXT),V===r.SHORT&&ge&&(X=ge.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),b===r.RGBA){let te=ue?no:lt.getTransfer(ne);V===r.FLOAT&&(X=r.RGBA32F),V===r.HALF_FLOAT&&(X=r.RGBA16F),V===r.UNSIGNED_BYTE&&(X=te===_t?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ge&&(X=ge.RGBA16_EXT),V===r.SHORT&&ge&&(X=ge.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function m(R,b){let V;return R?b===null||b===Fi||b===xs?V=r.DEPTH24_STENCIL8:b===Mi?V=r.DEPTH32F_STENCIL8:b===ma&&(V=r.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===xs?V=r.DEPTH_COMPONENT24:b===Mi?V=r.DEPTH_COMPONENT32F:b===ma&&(V=r.DEPTH_COMPONENT16),V}function M(R,b){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=new WeakRef(R);n.get(R).__ref=b,_.add(b),x.register(R,b,b)}function A(R){let b=n.get(R).__ref;b!==void 0&&(_.delete(b),x.unregister(b))}function N(R){z(R.target)}function D(R){C(R.target)}function z(R){R.removeEventListener("dispose",N),A(R),k(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function C(R){R.removeEventListener("dispose",D),A(R),Q(R)}function O(){for(let R of _){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):z(b))}_.clear(),d.clear()}function k(R){let b=n.get(R);if(b.__webglInit===void 0)return;let V=R.source,ae=h.get(V);if(ae){let ne=ae[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(R),Object.keys(ae).length===0&&h.delete(V)}n.remove(R)}function F(R){let b=n.get(R);r.deleteTexture(b.__webglTexture);let V=R.source,ae=h.get(V);delete ae[b.__cacheKey],a.memory.textures--}function Q(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&z(V),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let ue=0;ue<b.__webglFramebuffer[ne].length;ue++)r.deleteFramebuffer(b.__webglFramebuffer[ne][ue]);else r.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)r.deleteFramebuffer(b.__webglFramebuffer[ne]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let ae=R.textures;for(let ne=0,ue=ae.length;ne<ue;ne++){let ge=n.get(ae[ne]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(ae[ne])}n.remove(R)}let G=0;function I(){G=0}function H(){return G}function he(R){G=R}function we(){let R=G;return R>=i.maxTextures&&ke("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,R}function J(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function oe(R,b){let V=n.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let ae=R.image;if(ae===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Je(V,R,b);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+b)}function ve(R,b){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Je(V,R,b);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+b)}function Me(R,b){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Je(V,R,b);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+b)}function pe(R,b){let V=n.get(R);if(R.version>0&&V.__version!==R.version){q(V,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+b)}let Ie={[na]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[Kl]:r.MIRRORED_REPEAT},Xe={[fn]:r.NEAREST,[Fp]:r.NEAREST_MIPMAP_NEAREST,[Ao]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Mc]:r.LINEAR_MIPMAP_NEAREST,[Oi]:r.LINEAR_MIPMAP_LINEAR},Ee={[Vp]:r.NEVER,[jh]:r.ALWAYS,[Gp]:r.LESS,[Kh]:r.LEQUAL,[Hp]:r.EQUAL,[Qh]:r.GEQUAL,[Wp]:r.GREATER,[Xp]:r.NOTEQUAL};function Ve(R,b){if(b.type===Mi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Mc||b.magFilter===Ao||b.magFilter===Oi||b.minFilter===Bn||b.minFilter===Mc||b.minFilter===Ao||b.minFilter===Oi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Ie[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Ie[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Ie[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Xe[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Xe[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===fn||b.minFilter!==Ao&&b.minFilter!==Oi||b.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Le(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",N),P(b));let ae=b.source,ne=h.get(ae);ne===void 0&&(ne={},h.set(ae,ne));let ue=J(b);if(ue!==R.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[ue].usedTimes++;let ge=ne[R.__cacheKey];ge!==void 0&&(ne[R.__cacheKey].usedTimes--,ge.usedTimes===0&&F(b)),R.__cacheKey=ue,R.__webglTexture=ne[ue].texture}return V}function Ue(R,b,V){return Math.floor(Math.floor(R/V)/b)}function st(R,b,V,ae){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,V,ae,b.data);else{ue.sort((L,ee)=>L.start-ee.start);let ge=0;for(let L=1;L<ue.length;L++){let ee=ue[ge],$=ue[L],me=ee.start+ee.count,fe=Ue($.start,b.width,4),_e=Ue(ee.start,b.width,4);$.start<=me+1&&fe===_e&&Ue($.start+$.count-1,b.width,4)===fe?ee.count=Math.max(ee.count,$.start+$.count-ee.start):(++ge,ue[ge]=$)}ue.length=ge+1;let X=t.getParameter(r.UNPACK_ROW_LENGTH),te=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let L=0,ee=ue.length;L<ee;L++){let $=ue[L],me=Math.floor($.start/4),fe=Math.ceil($.count/4),_e=me%b.width,ce=Math.floor(me/b.width),xe=fe,se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,ce),t.texSubImage2D(r.TEXTURE_2D,0,_e,ce,xe,se,V,ae,b.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,X),t.pixelStorei(r.UNPACK_SKIP_PIXELS,te),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function Je(R,b,V){let ae=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ae=r.TEXTURE_3D);let ne=Le(R,b),ue=b.source;t.bindTexture(ae,R.__webglTexture,r.TEXTURE0+V);let ge=n.get(ue);if(ue.version!==ge.__version||ne===!0){if(t.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let se=lt.getPrimaries(lt.workingColorSpace),ie=b.colorSpace===mr?null:lt.getPrimaries(b.colorSpace),Se=b.colorSpace===mr||se===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let te=v(b.image,!1,i.maxTextureSize);te=le(b,te);let de=s.convert(b.format,b.colorSpace),L=s.convert(b.type),ee=E(b.internalFormat,de,L,b.normalized,b.colorSpace,b.isVideoTexture);Ve(ae,b);let $,me=b.mipmaps,fe=b.isVideoTexture!==!0,_e=ge.__version===void 0||ne===!0,ce=ue.dataReady,xe=M(b,te);if(b.isDepthTexture)ee=m(b.format===pr,b.type),_e&&(fe?t.texStorage2D(r.TEXTURE_2D,1,ee,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,ee,te.width,te.height,0,de,L,null));else if(b.isDataTexture)if(me.length>0){fe&&_e&&t.texStorage2D(r.TEXTURE_2D,xe,ee,me[0].width,me[0].height);for(let se=0,ie=me.length;se<ie;se++)$=me[se],fe?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,$.width,$.height,de,L,$.data):t.texImage2D(r.TEXTURE_2D,se,ee,$.width,$.height,0,de,L,$.data);b.generateMipmaps=!1}else fe?(_e&&t.texStorage2D(r.TEXTURE_2D,xe,ee,te.width,te.height),ce&&st(b,te,de,L)):t.texImage2D(r.TEXTURE_2D,0,ee,te.width,te.height,0,de,L,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){fe&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,ee,me[0].width,me[0].height,te.depth);for(let se=0,ie=me.length;se<ie;se++)if($=me[se],b.format!==zi)if(de!==null)if(fe){if(ce)if(b.layerUpdates.size>0){let Se=uf($.width,$.height,b.format,b.type);for(let re of b.layerUpdates){let Ce=$.data.subarray(re*Se/$.data.BYTES_PER_ELEMENT,(re+1)*Se/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,re,$.width,$.height,1,de,Ce)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,$.width,$.height,te.depth,de,$.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,ee,$.width,$.height,te.depth,0,$.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,$.width,$.height,te.depth,de,L,$.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,ee,$.width,$.height,te.depth,0,de,L,$.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{fe&&_e&&t.texStorage2D(r.TEXTURE_2D,xe,ee,me[0].width,me[0].height);for(let se=0,ie=me.length;se<ie;se++)$=me[se],b.format!==zi?de!==null?fe?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,$.width,$.height,de,$.data):t.compressedTexImage2D(r.TEXTURE_2D,se,ee,$.width,$.height,0,$.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,$.width,$.height,de,L,$.data):t.texImage2D(r.TEXTURE_2D,se,ee,$.width,$.height,0,de,L,$.data)}else if(b.isDataArrayTexture)if(fe){if(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,xe,ee,te.width,te.height,te.depth),ce)if(b.layerUpdates.size>0){let se=uf(te.width,te.height,b.format,b.type);for(let ie of b.layerUpdates){let Se=te.data.subarray(ie*se/te.data.BYTES_PER_ELEMENT,(ie+1)*se/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ie,te.width,te.height,1,de,L,Se)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,de,L,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,te.width,te.height,te.depth,0,de,L,te.data);else if(b.isData3DTexture)fe?(_e&&t.texStorage3D(r.TEXTURE_3D,xe,ee,te.width,te.height,te.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,de,L,te.data)):t.texImage3D(r.TEXTURE_3D,0,ee,te.width,te.height,te.depth,0,de,L,te.data);else if(b.isFramebufferTexture){if(_e)if(fe)t.texStorage2D(r.TEXTURE_2D,xe,ee,te.width,te.height);else{let se=te.width,ie=te.height;for(let Se=0;Se<xe;Se++)t.texImage2D(r.TEXTURE_2D,Se,ee,se,ie,0,de,L,null),se>>=1,ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){let se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),te.parentNode!==se){se.appendChild(te),d.add(b),se.onpaint=ie=>{let Se=ie.changedElements;for(let re of d)Se.includes(re.image)&&(re.needsUpdate=!0)},se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,te);else{let Se=r.RGBA,re=r.RGBA,Ce=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Se,re,Ce,te)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(me.length>0){if(fe&&_e){let se=ye(me[0]);t.texStorage2D(r.TEXTURE_2D,xe,ee,se.width,se.height)}for(let se=0,ie=me.length;se<ie;se++)$=me[se],fe?ce&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,de,L,$):t.texImage2D(r.TEXTURE_2D,se,ee,de,L,$);b.generateMipmaps=!1}else if(fe){if(_e){let se=ye(te);t.texStorage2D(r.TEXTURE_2D,xe,ee,se.width,se.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,L,te)}else t.texImage2D(r.TEXTURE_2D,0,ee,de,L,te);T(b)&&b.mipmapsAutoUpdate===!0&&y(ae),ge.__version=ue.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function q(R,b,V){if(b.image.length!==6)return;let ae=Le(R,b),ne=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);let ue=n.get(ne);if(ne.version!==ue.__version||ae===!0){t.activeTexture(r.TEXTURE0+V);let ge=lt.getPrimaries(lt.workingColorSpace),X=b.colorSpace===mr?null:lt.getPrimaries(b.colorSpace),te=b.colorSpace===mr||ge===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let de=b.isCompressedTexture||b.image[0].isCompressedTexture,L=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let re=0;re<6;re++)!de&&!L?ee[re]=v(b.image[re],!0,i.maxCubemapSize):ee[re]=L?b.image[re].image:b.image[re],ee[re]=le(b,ee[re]);let $=ee[0],me=s.convert(b.format,b.colorSpace),fe=s.convert(b.type),_e=E(b.internalFormat,me,fe,b.normalized,b.colorSpace),ce=b.isVideoTexture!==!0,xe=ue.__version===void 0||ae===!0,se=ne.dataReady,ie=M(b,$);Ve(r.TEXTURE_CUBE_MAP,b);let Se;if(b.isDepthTexture){if(_e=m(b.format===pr,b.type),xe)if(ce)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,_e,$.width,$.height);else for(let re=0;re<6;re++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_e,$.width,$.height,0,me,fe,null)}else if(de){ce&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,_e,$.width,$.height);for(let re=0;re<6;re++){Se=ee[re].mipmaps;for(let Ce=0;Ce<Se.length;Ce++){let it=Se[Ce];b.format!==zi?me!==null?ce?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,it.width,it.height,me,it.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,_e,it.width,it.height,0,it.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,0,0,it.width,it.height,me,fe,it.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce,_e,it.width,it.height,0,me,fe,it.data)}}}else{if(Se=b.mipmaps,ce&&xe){Se.length>0&&ie++;let re=ye(ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,_e,re.width,re.height)}for(let re=0;re<6;re++)if(L){ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ee[re].width,ee[re].height,me,fe,ee[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_e,ee[re].width,ee[re].height,0,me,fe,ee[re].data);for(let Ce=0;Ce<Se.length;Ce++){let qe=Se[Ce].image[re].image;ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,qe.width,qe.height,me,fe,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,_e,qe.width,qe.height,0,me,fe,qe.data)}}else{ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me,fe,ee[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,_e,me,fe,ee[re]);for(let Ce=0;Ce<Se.length;Ce++){let it=Se[Ce];ce?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,0,0,me,fe,it.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ce+1,_e,me,fe,it.image[re])}}}T(b)&&b.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),ue.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function $e(R,b,V,ae,ne,ue){let ge=s.convert(V.format,V.colorSpace),X=s.convert(V.type),te=E(V.internalFormat,ge,X,V.normalized,V.colorSpace),de=n.get(b),L=n.get(V);if(L.__renderTarget=b,!de.__hasExternalTextures){let ee=Math.max(1,b.width>>ue),$=Math.max(1,b.height>>ue);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,ue,te,ee,$,b.depth,0,ge,X,null):t.texImage2D(ne,ue,te,ee,$,0,ge,X,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),j(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ne,L.__webglTexture,0,ze(b)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,ne,L.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(R,b,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let ae=b.depthTexture,ne=ae&&ae.isDepthTexture?ae.type:null,ue=m(b.stencilBuffer,ne),ge=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;j(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(b),ue,b.width,b.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(b),ue,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ue,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,R)}else{let ae=b.textures;for(let ne=0;ne<ae.length;ne++){let ue=ae[ne],ge=s.convert(ue.format,ue.colorSpace),X=s.convert(ue.type),te=E(ue.internalFormat,ge,X,ue.normalized,ue.colorSpace);j(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze(b),te,b.width,b.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze(b),te,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,te,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(R,b,V){let ae=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(b.depthTexture);ne.__renderTarget=b;let ue=ae?b.depthTexture.image[0]:b.depthTexture.image;(!ne.__webglTexture||ue.width!==b.width||ue.height!==b.height)&&(ue.width=b.width,ue.height=b.height,b.depthTexture.needsUpdate=!0),ae?pe(b.depthTexture,0):oe(b.depthTexture,0);let ge=ne.__webglTexture,X=ze(b),te=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,de=b.depthTexture.format===pr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===hr)j(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,te,ge,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,de,te,ge,0);else if(b.depthTexture.format===pr)j(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,te,ge,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,de,te,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(R){let b=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ae=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ae){let ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ae.removeEventListener("dispose",ne)};ae.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=ae}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(V)for(let ae=0;ae<6;ae++)vt(b.__webglFramebuffer[ae],R,ae);else R.texture.mipmaps.length>0?vt(b.__webglFramebuffer[0],R,0):vt(b.__webglFramebuffer,R,0);else if(V){b.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ae]),b.__webglDepthbuffer[ae]===void 0)b.__webglDepthbuffer[ae]=r.createRenderbuffer(),Gt(b.__webglDepthbuffer[ae],R,!1);else{let ne=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,ue)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Gt(b.__webglDepthbuffer,R,!1);else{let ne=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,ue)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(R,b,V){let ae=n.get(R);b!==void 0&&$e(ae.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&nt(R)}function It(R){let b=R.texture,V=n.get(R),ae=n.get(b);R.addEventListener("dispose",D),P(R);let ne=R.textures,ue=R.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=b.version,a.memory.textures++),ue){V.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps.length>0){V.__webglFramebuffer[X]=[];for(let te=0;te<b.mipmaps.length;te++)V.__webglFramebuffer[X][te]=r.createFramebuffer()}else V.__webglFramebuffer[X]=r.createFramebuffer()}else{if(b.mipmaps.length>0){V.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)V.__webglFramebuffer[X]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ge)for(let X=0,te=ne.length;X<te;X++){let de=n.get(ne[X]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&j(R)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let X=0;X<ne.length;X++){let te=ne[X];V.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[X]);let de=s.convert(te.format,te.colorSpace),L=s.convert(te.type),ee=E(te.internalFormat,de,L,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),$=ze(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,ee,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,V.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Ve(r.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)$e(V.__webglFramebuffer[X][te],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te);else $e(V.__webglFramebuffer[X],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);T(b)?y(r.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let X=0,te=ne.length;X<te;X++){let de=ne[X],L=n.get(de),ee=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,L.__webglTexture),Ve(ee,de),$e(V.__webglFramebuffer,R,de,r.COLOR_ATTACHMENT0+X,ee,0),T(de)&&y(ee)}t.unbindTexture()}else{let X=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(X,ae.__webglTexture),Ve(X,b),b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)$e(V.__webglFramebuffer[te],R,b,r.COLOR_ATTACHMENT0,X,te);else $e(V.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,X,0);T(b)?y(X):b.mipmaps.length>0&&r.texParameteri(X,r.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&nt(R)}function B(R){let b=R.textures;for(let V=0,ae=b.length;V<ae;V++){let ne=b[V];if(T(ne)&&ne.mipmapsAutoUpdate===!0){let ue=S(R),ge=n.get(ne).__webglTexture;t.bindTexture(ue,ge),y(ue),t.unbindTexture()}}}let ht=[];function ct(R){if(R.samples>0){if(j(R)===!1){let b=R.textures,V=R.width,ae=R.height,ne=r.COLOR_BUFFER_BIT,ue=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),X=b.length>1;if(X)for(let de=0;de<b.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<b.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),X){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let L=n.get(b[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,L,0)}r.blitFramebuffer(0,0,V,ae,0,0,V,ae,ne,r.NEAREST),l===!0&&(ht.length=0,ht.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ht.push(ue),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let de=0;de<b.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let L=n.get(b[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,L,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ze(R){return Math.min(i.maxSamples,R.samples)}function j(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(R){let b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function le(R,b){let V=R.colorSpace,ae=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==to&&V!==mr&&(lt.getTransfer(V)===_t?(ae!==zi||ne!==Zn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",V)),b}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=we,this.resetTextureUnits=I,this.getTextureUnits=H,this.setTextureUnits=he,this.setTexture2D=oe,this.setTexture2DArray=ve,this.setTexture3D=Me,this.setTextureCube=pe,this.rebindTextures=Rt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=j,this.dispose=O}function oM(r,e){function t(n,i=mr){let s,a=lt.getTransfer(i);if(n===Zn)return r.UNSIGNED_BYTE;if(n===Tc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return r.BYTE;if(n===qh)return r.SHORT;if(n===ma)return r.UNSIGNED_SHORT;if(n===bc)return r.INT;if(n===Fi)return r.UNSIGNED_INT;if(n===Mi)return r.FLOAT;if(n===Bi)return r.HALF_FLOAT;if(n===Jh)return r.ALPHA;if(n===$h)return r.RGB;if(n===zi)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===Ec)return r.RED;if(n===Ac)return r.RED_INTEGER;if(n===Hr)return r.RG;if(n===Rc)return r.RG_INTEGER;if(n===Cc)return r.RGBA_INTEGER;if(n===Ro||n===Co||n===Po||n===Io)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pc||n===Ic||n===Lc||n===Dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nc||n===Uc||n===Oc||n===Fc||n===Bc||n===Lo||n===zc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nc||n===Uc)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Oc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fc)return s.COMPRESSED_R11_EAC;if(n===Bc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return s.COMPRESSED_RG11_EAC;if(n===zc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Jc||n===$c||n===Kc||n===Qc||n===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===kc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eu||n===tu||n===nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===eu)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iu||n===ru||n===Do||n===su)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===iu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
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

}`,Tf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new go(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Si({vertexShader:lM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new Fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wf=class extends Wi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null,x=typeof XRWebGLBinding<"u",p=new Tf,g={},v=t.getContextAttributes(),T=null,y=null,S=[],E=[],m=new Ze,M=null,P=null,A=new En;A.viewport=new Nt;let N=new En;N.viewport=new Nt;let D=[A,N],z=new _c,C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=S[J];return oe===void 0&&(oe=new oa,S[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=S[J];return oe===void 0&&(oe=new oa,S[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=S[J];return oe===void 0&&(oe=new oa,S[J]=oe),oe.getHandSpace()};function k(J){let oe=E.indexOf(J.inputSource);if(oe===-1)return;let ve=S[oe];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||a),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Q);for(let J=0;J<S.length;J++){let oe=E[J];oe!==null&&(E[J]=null,S[J].disconnect(oe))}C=null,O=null,p.reset();for(let J in g)delete g[J];if(e.setRenderTarget(T),h=null,f=null,d=null,i=null,y=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(m.width,m.height,!1),P!==null){let J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Q),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(m),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Me=null,pe=null;v.depth&&(pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?pr:hr,Me=v.stencil?xs:Fi);let Ie={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ie),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new ai(f.textureWidth,f.textureHeight,{format:zi,type:Zn,depthTexture:new dr(f.textureWidth,f.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new ai(h.framebufferWidth,h.framebufferHeight,{format:zi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),we.setContext(i),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(J){for(let oe=0;oe<J.removed.length;oe++){let ve=J.removed[oe],Me=E.indexOf(ve);Me>=0&&(E[Me]=null,S[Me].disconnect(ve))}for(let oe=0;oe<J.added.length;oe++){let ve=J.added[oe],Me=E.indexOf(ve);if(Me===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=E.length){E.push(ve),Me=Ie;break}else if(E[Ie]===null){E[Ie]=ve,Me=Ie;break}if(Me===-1)break}let pe=S[Me];pe&&pe.connect(ve)}}function G(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let oe=J.near,ve=J.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),z.near=N.near=A.near=oe,z.far=N.far=A.far=ve,(C!==z.near||O!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),C=z.near,O=z.far),z.layers.mask=J.layers.mask|6,A.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Me=J.parent,pe=z.cameras;G(z,Me);for(let Ie=0;Ie<pe.length;Ie++)G(pe[Ie],Me);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),I(J,z,Me)};function I(J,oe,ve){ve===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(J){return g[J]};let H=null;function he(J,oe){if(u=oe.getViewerPose(c||a),_=oe,u!==null){let ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Me=!1;ve.length!==z.cameras.length&&(z.cameras.length=0,Me=!0);for(let Ee=0;Ee<ve.length;Ee++){let Ve=ve[Ee],Le=null;if(h!==null)Le=h.getViewport(Ve);else{let st=d.getViewSubImage(f,Ve);Le=st.viewport,Ee===0&&(e.setRenderTargetTextures(y,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(y))}let Ue=D[Ee];Ue===void 0&&(Ue=new En,Ue.layers.enable(Ee),Ue.viewport=new Nt,D[Ee]=Ue),Ue.matrix.fromArray(Ve.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ve.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Le.x,Le.y,Le.width,Le.height),Ee===0&&(z.matrix.copy(Ue.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Me===!0&&z.cameras.push(Ue)}let pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ee=d.getDepthInformation(ve[0]);Ee&&Ee.isValid&&Ee.texture&&p.init(Ee,i.renderState)}if(pe&&pe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ee=0;Ee<ve.length;Ee++){let Ve=ve[Ee].camera;if(Ve){let Le=g[Ve];Le||(Le=new go,g[Ve]=Le);let Ue=d.getCameraImage(Ve);Le.sourceTexture=Ue}}}}for(let ve=0;ve<S.length;ve++){let Me=E[ve],pe=S[ve];Me!==null&&pe!==void 0&&pe.update(Me,oe,c||a)}H&&H(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}let we=new Tm;we.setAnimationLoop(he),this.setAnimationLoop=function(J){H=J},this.dispose=function(){}}},uM=new St,Nm=new We;Nm.set(-1,0,0,0,1,0,0,0,1);function hM(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,of(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,v,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),f(p,g),g.isMeshPhysicalMaterial&&h(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),_(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,v,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===_n&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===_n&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let v=e.get(g),T=v.envMap,y=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Nm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,v,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*v,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function h(p,g,v){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let v=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fM(r,e,t,n){let i={},s={};function a(v,T){let y=T.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,T){let y=i[v.id];y===void 0&&(_(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",p));let S=T.program;n.updateUBOMapping(v,S);let E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function l(v){let T=r.createBuffer(),y=v.__size,S=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,y,S),r.bindBuffer(r.UNIFORM_BUFFER,null),T}function c(v){let T=i[v.id],y=v.uniforms,S=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let E=0,m=y.length;E<m;E++){let M=y[E];if(Array.isArray(M))for(let P=0,A=M.length;P<A;P++)u(M[P],E,P,S);else u(M,E,0,S)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,T,y,S){if(f(v,T,y,S)===!0){let E=v.__offset,m=v.value;if(Array.isArray(m)){let M=0;for(let P=0;P<m.length;P++){let A=m[P],N=x(A,!0);d(A,v.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,v.__data)}}function d(v,T,y){typeof v=="number"||typeof v=="boolean"?T[y]=v:v.isMatrix3?(T[y]=v.elements[0],T[y+1]=v.elements[1],T[y+2]=v.elements[2],T[y+3]=0,T[y+4]=v.elements[3],T[y+5]=v.elements[4],T[y+6]=v.elements[5],T[y+7]=0,T[y+8]=v.elements[6],T[y+9]=v.elements[7],T[y+10]=v.elements[8],T[y+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-y),y):v.toArray(T,y)}function f(v,T,y,S){let E=v.value,m=T+"_"+y;if(Array.isArray(E)){S[m]===void 0&&(S[m]=[]);let M=S[m],P=!1;for(let A=0;A<E.length;A++)h(E[A],M,A)===!0&&(P=!0);return P}return h(E,S,m)}function h(v,T,y){if(T[y]===void 0)return typeof v=="number"||typeof v=="boolean"?T[y]=v:ArrayBuffer.isView(v)?T[y]=v.slice():T[y]=v.clone(),!0;{let S=T[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return T[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function _(v){let T=v.uniforms,y=0,S=16;for(let m=0,M=T.length;m<M;m++){let P=Array.isArray(T[m])?T[m]:[T[m]];for(let A=0,N=P.length;A<N;A++){let D=P[A],z=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(T[m])||Array.isArray(D.value),O=y;for(let F=0,Q=z.length;F<Q;F++){let G=z[F],I=x(G,C),H=y%S,he=H%I.boundary,we=H+he;y+=he,we!==0&&S-we<I.storage&&(y+=S-we),F===0&&(O=y),y+=I.storage}let k=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new k((y-O)/Float32Array.BYTES_PER_ELEMENT),D.__offset=O}}let E=y%S;return E>0&&(y+=S-E),v.__size=y,v.__cache={},this}function x(v,T){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let T=v.target;T.removeEventListener("dispose",p),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function g(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:g}}var dM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$i=null;function pM(){return $i===null&&($i=new co(dM,16,16,Hr,Bi),$i.name="DFG_LUT",$i.minFilter=Bn,$i.magFilter=Bn,$i.wrapS=Hi,$i.wrapT=Hi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var lu=class{constructor(e={}){let{canvas:t=Yp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Zn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let x=h,p=new Set([Cc,Rc,Ac]),g=new Set([Zn,Fi,ma,xs,Tc,wc]),v=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,E=null,m=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,D=null,z=null,C=null,O=null;this._outputColorSpace=On;let k=0,F=0,Q=null,G=-1,I=null,H=new Nt,he=new Nt,we=null,J=new He(0),oe=0,ve=t.width,Me=t.height,pe=1,Ie=null,Xe=null,Ee=new Nt(0,0,ve,Me),Ve=new Nt(0,0,ve,Me),Le=!1,Ue=new Ur,st=new nc,Je=!1,q=!1,$e=new St,Gt=new Z,vt=new Nt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function It(){return Q===null?pe:1}let B=n;function ht(w,U){return t.getContext(w,U)}let ct,ze,j,Re,le,ye,R,b,V,ae,ne,ue,ge,X,te,de,L,ee,$,me,fe,_e,ce;try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),B===null){let U="webgl2";if(B=ht(U,w),B===null)throw ht(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xe()}catch(w){throw t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ge("WebGLRenderer: "+w.message),w}function xe(){ct=new wy(B),ct.init(),fe=new oM(B,ct),ze=new py(B,ct,e,fe),j=new sM(B,ct),ze.reversedDepthBuffer&&f&&j.buffers.depth.setReversed(!0),z=B.createFramebuffer(),C=B.createFramebuffer(),O=B.createFramebuffer(),Re=new Ry(B),le=new XS,ye=new aM(B,ct,j,le,ze,fe,Re),R=new Ty(A),b=new P_(B),_e=new fy(B,b),V=new Ey(B,b,Re,_e),ae=new Py(B,V,b,_e,Re),ee=new Cy(B,ze,ye),te=new my(le),ne=new WS(A,R,ct,ze,_e,te),ue=new hM(A,le),ge=new YS,X=new jS(ct),L=new hy(A,R,j,ae,_,l),de=new rM(A,ae,ze),ce=new fM(B,Re,ze,j),$=new dy(B,ct,Re),me=new Ay(B,ct,Re),Re.programs=ne.programs,A.capabilities=ze,A.extensions=ct,A.properties=le,A.renderLists=ge,A.shadowMap=de,A.state=j,A.info=Re}x!==Zn&&(P=new Ly(x,t.width,t.height,o,i,s));let se=new wf(A,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=ct.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ct.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(ve,Me,!1))},this.getSize=function(w){return w.set(ve,Me)},this.setSize=function(w,U,K=!0){if(se.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=w,Me=U,t.width=Math.floor(w*pe),t.height=Math.floor(U*pe),K===!0&&(t.style.width=w+"px",t.style.height=U+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(ve*pe,Me*pe).floor()},this.setDrawingBufferSize=function(w,U,K){ve=w,Me=U,pe=K,t.width=Math.floor(w*K),t.height=Math.floor(U*K),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(x===Zn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(Ee)},this.setViewport=function(w,U,K,W){w.isVector4?Ee.set(w.x,w.y,w.z,w.w):Ee.set(w,U,K,W),j.viewport(H.copy(Ee).multiplyScalar(It()).round())},this.getScissor=function(w){return w.copy(Ve)},this.setScissor=function(w,U,K,W){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,U,K,W),j.scissor(he.copy(Ve).multiplyScalar(It()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(w){j.setScissorTest(Le=w)},this.setOpaqueSort=function(w){Ie=w},this.setTransparentSort=function(w){Xe=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,K=!0){let W=0;if(w){let Y=!1;if(Q!==null){let Te=Q.texture.format;Y=p.has(Te)}if(Y){let Te=Q.texture.type,Ne=g.has(Te),be=L.getClearColor(),Pe=L.getClearAlpha(),Be=be.r,Ye=be.g,at=be.b;Ne?(v[0]=Be,v[1]=Ye,v[2]=at,v[3]=Pe,B.clearBufferuiv(B.COLOR,0,v)):(T[0]=Be,T[1]=Ye,T[2]=at,T[3]=Pe,B.clearBufferiv(B.COLOR,0,T))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),L.dispose(),ge.dispose(),X.dispose(),ye.dispose(),le.dispose(),R.dispose(),ae.dispose(),V.dispose(),_e.dispose(),ce.dispose(),ne.dispose(),se.dispose(),se.removeEventListener("sessionstart",bt),se.removeEventListener("sessionend",gt),nn.stop()};function ie(w){w.preventDefault(),tf("WebGLRenderer: Context Lost."),N=!0}function Se(){tf("WebGLRenderer: Context Restored."),N=!1;let w=Re.autoReset,U=de.enabled,K=de.autoUpdate,W=de.needsUpdate,Y=de.type;xe(),Re.autoReset=w,de.enabled=U,de.autoUpdate=K,de.needsUpdate=W,de.type=Y}function re(w){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ce(w){let U=w.target;U.removeEventListener("dispose",Ce),it(U)}function it(w){qe(w),le.remove(w)}function qe(w){let U=le.get(w).programs;U!==void 0&&(U.forEach(function(K){ne.releaseProgram(K)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,K,W,Y,Te){U===null&&(U=nt);let Ne=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,be=gi(w,U,K,W,Y);j.setMaterial(W,Ne);let Pe=K.index,Be=1;if(W.wireframe===!0){if(Pe=V.getWireframeAttribute(K),Pe===void 0)return;Be=2}let Ye=K.drawRange,at=K.attributes.position,Oe=Ye.start*Be,ot=(Ye.start+Ye.count)*Be;Te!==null&&(Oe=Math.max(Oe,Te.start*Be),ot=Math.min(ot,(Te.start+Te.count)*Be)),Pe!==null?(Oe=Math.max(Oe,0),ot=Math.min(ot,Pe.count)):at!=null&&(Oe=Math.max(Oe,0),ot=Math.min(ot,at.count));let Qt=ot-Oe;if(Qt<0||Qt===1/0)return;_e.setup(Y,W,be,K,Pe);let At,wt=$;if(Pe!==null&&(At=b.get(Pe),wt=me,wt.setIndex(At)),Y.isMesh)W.wireframe===!0?(j.setLineWidth(W.wireframeLinewidth*It()),wt.setMode(B.LINES)):wt.setMode(B.TRIANGLES);else if(Y.isLine){let Mn=W.linewidth;Mn===void 0&&(Mn=1),j.setLineWidth(Mn*It()),Y.isLineSegments?wt.setMode(B.LINES):Y.isLineLoop?wt.setMode(B.LINE_LOOP):wt.setMode(B.LINE_STRIP)}else Y.isPoints?wt.setMode(B.POINTS):Y.isSprite&&wt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Mn=Y._multiDrawStarts,Fe=Y._multiDrawCounts,Un=Y._multiDrawCount,mt=Pe?b.get(Pe).bytesPerElement:1,is=le.get(W).currentProgram.getUniforms();for(let bn=0;bn<Un;bn++)is.setValue(B,"_gl_DrawID",bn),wt.render(Mn[bn]/mt,Fe[bn])}else if(Y.isInstancedMesh)wt.renderInstances(Oe,Qt,Y.count);else if(K.isInstancedBufferGeometry){let Mn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Fe=Math.min(K.instanceCount,Mn);wt.renderInstances(Oe,Qt,Fe)}else wt.render(Oe,Qt)};function Lt(w,U,K,W){D!==null&&w.isNodeMaterial&&D.setObject(W,w),Je===!0&&te.setState(w,K,!1),w.transparent===!0&&w.side===Zi&&w.forceSinglePass===!1?(w.side=_n,w.needsUpdate=!0,ni(w,U,W),w.side=Gr,w.needsUpdate=!0,ni(w,U,W),w.side=Zi):ni(w,U,W)}this.compile=function(w,U,K=null){K===null&&(K=w),D!==null&&D.renderStart(w,U,K),E=X.get(K),E.init(U),M.push(E),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),w!==K&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(E.pushLight(Y),Y.castShadow&&E.pushShadow(Y))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),q=this.localClippingEnabled,Je=te.init(this.clippingPlanes,q),Je===!0&&te.setGlobalState(this.clippingPlanes,U),D!==null&&de.render(E.state.shadowsArray,K,U);let W=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){let be=Te[Ne];Lt(be,K,U,Y),W.add(be)}else Lt(Te,K,U,Y),W.add(Te)}),E=M.pop(),D!==null&&D.renderEnd(),W},this.compileAsync=function(w,U,K=null){let W=this.compile(w,U,K);return new Promise(Y=>{function Te(){if(W.forEach(function(Ne){let Pe=le.get(Ne).currentProgram;(Pe===void 0||Pe.isReady())&&W.delete(Ne)}),W.size===0){Y(w);return}setTimeout(Te,10)}ct.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let $t=null;function Dt(w){$t&&$t(w)}function bt(){nn.stop()}function gt(){nn.start()}let nn=new Tm;nn.setAnimationLoop(Dt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(w){$t=w,se.setAnimationLoop(w),w===null?nn.stop():nn.start()},se.addEventListener("sessionstart",bt),se.addEventListener("sessionend",gt),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(w,U);let K=se.enabled===!0&&se.isPresenting===!0,W=P!==null&&(Q===null||K)&&P.begin(A,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,U,Q),E=X.get(w,M.length),E.init(U),E.state.textureUnits=ye.getTextureUnits(),M.push(E),$e.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?st.setFromArrayCamera(U):Ue.setFromProjectionMatrix($e,xi,U.reversedDepth),q=this.localClippingEnabled,Je=te.init(this.clippingPlanes,q),S=ge.get(w,m.length),S.init(),m.push(S),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Ne=A.xr.getDepthSensingMesh();Ne!==null&&Tt(Ne,U,-1/0,A.sortObjects)}Tt(w,U,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(E.state.lightsArray),A.sortObjects===!0&&S.sort(Ie,Xe),Rt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Rt&&L.addToRenderList(S,w),this.info.autoReset===!0&&this.info.reset(),Je===!0&&te.beginShadows();let Y=E.state.shadowsArray;if(de.render(Y,w,U),Je===!0&&te.endShadows(),(W&&P.hasRenderPass())===!1){let Ne=S.opaque,be=S.transmissive;if(E.setupLights(),U.isArrayCamera){let Pe=U.cameras;if(be.length>0)for(let Be=0,Ye=Pe.length;Be<Ye;Be++){let at=Pe[Be];ti(Ne,be,w,at)}Rt&&L.render(w);for(let Be=0,Ye=Pe.length;Be<Ye;Be++){let at=Pe[Be];Sn(S,w,at,at.viewport)}}else be.length>0&&ti(Ne,be,w,U),Rt&&L.render(w),Sn(S,w,U)}Q!==null&&F===0&&(ye.updateMultisampleRenderTarget(Q),ye.updateRenderTargetMipmap(Q)),W&&P.end(A),w.isScene===!0&&w.onAfterRender(A,w,U),_e.resetDefaultState(),G=-1,I=null,M.pop(),M.length>0?(E=M[M.length-1],ye.setTextureUnits(E.state.textureUnits),Je===!0&&te.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,m.pop(),m.length>0?S=m[m.length-1]:S=null,D!==null&&D.renderEnd()};function Tt(w,U,K,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Ne=U.isArrayCamera?st:Ue;if(!w.frustumCulled||w.intersectsFrustum(Ne)){W&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4($e);let be=ae.update(w),Pe=w.material;Pe.visible&&S.push(w,be,Pe,K,vt.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let Ne=U.isArrayCamera?st:Ue;if(!w.frustumCulled||w.intersectsFrustum(Ne)){let be=ae.update(w),Pe=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),vt.copy(be.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4($e)),Array.isArray(Pe)){let Be=be.groups;for(let Ye=0,at=Be.length;Ye<at;Ye++){let Oe=Be[Ye],ot=Pe[Oe.materialIndex];ot&&ot.visible&&S.push(w,be,ot,K,vt.z,Oe,U)}}else Pe.visible&&S.push(w,be,Pe,K,vt.z,null,U)}}}let Te=w.children;for(let Ne=0,be=Te.length;Ne<be;Ne++)Tt(Te[Ne],U,K,W)}function Sn(w,U,K,W){let{opaque:Y,transmissive:Te,transparent:Ne}=w;E.setupLightsView(K),Je===!0&&te.setGlobalState(A.clippingPlanes,K),W&&j.viewport(H.copy(W)),Y.length>0&&Ht(Y,U,K),Te.length>0&&Ht(Te,U,K),Ne.length>0&&Ht(Ne,U,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ti(w,U,K,W){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let Oe=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new ai(1,1,{generateMipmaps:!0,type:Oe?Bi:Zn,minFilter:Oi,samples:Math.max(4,ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Te=E.state.transmissionRenderTarget[W.id],Ne=W.viewport||H;Te.setSize(Ne.z*A.transmissionResolutionScale,Ne.w*A.transmissionResolutionScale);let be=A.getRenderTarget(),Pe=A.getActiveCubeFace(),Be=A.getActiveMipmapLevel();A.setRenderTarget(Te),A.getClearColor(J),oe=A.getClearAlpha(),oe<1&&A.setClearColor(16777215,.5),A.clear(),Rt&&L.render(K);let Ye=A.toneMapping;A.toneMapping=Ji;let at=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Je===!0&&te.setGlobalState(A.clippingPlanes,W),Ht(w,K,W),ye.updateMultisampleRenderTarget(Te),ye.updateRenderTargetMipmap(Te),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ot=0,Qt=U.length;ot<Qt;ot++){let At=U[ot],{object:wt,geometry:Mn,material:Fe,group:Un}=At;if(Fe.side===Zi&&wt.layers.test(W.layers)){let mt=Fe.side;Fe.side=_n,Fe.needsUpdate=!0,Kt(wt,K,W,Mn,Fe,Un),Fe.side=mt,Fe.needsUpdate=!0,Oe=!0}}Oe===!0&&(ye.updateMultisampleRenderTarget(Te),ye.updateRenderTargetMipmap(Te))}A.setRenderTarget(be,Pe,Be),A.setClearColor(J,oe),at!==void 0&&(W.viewport=at),A.toneMapping=Ye}function Ht(w,U,K){let W=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,Te=w.length;Y<Te;Y++){let Ne=w[Y],{object:be,geometry:Pe,group:Be}=Ne,Ye=Ne.material;Ye.allowOverride===!0&&W!==null&&(Ye=W),be.layers.test(K.layers)&&Kt(be,U,K,Pe,Ye,Be)}}function Kt(w,U,K,W,Y,Te){D!==null&&Y.isNodeMaterial&&D.setObject(w,Y),w.onBeforeRender(A,U,K,W,Y,Te),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(A,U,K,W,w,Te),Y.transparent===!0&&Y.side===Zi&&Y.forceSinglePass===!1?(Y.side=_n,Y.needsUpdate=!0,A.renderBufferDirect(K,U,W,Y,w,Te),Y.side=Gr,Y.needsUpdate=!0,A.renderBufferDirect(K,U,W,Y,w,Te),Y.side=Zi):A.renderBufferDirect(K,U,W,Y,w,Te),w.onAfterRender(A,U,K,W,Y,Te)}function rn(w){let U=0;for(let K of w)K.texture!==null&&U++;return U}function ni(w,U,K){U.isScene!==!0&&(U=nt);let W=le.get(w),Y=E.state.lights,Te=E.state.shadowsArray,Ne=Y.state.version,be=ne.getParameters(w,Y.state,Te,U,K,E.state.lightProbeGridArray),Pe=ne.getProgramCacheKey(be),Be=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;let Ye=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=R.get(w.envMap||W.environment,Ye),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Ce),Be=new Map,W.programs=Be,W.programVariants=new Map);let at=Be.get(Pe);if(at!==void 0){if(W.currentProgram===at&&W.lightsStateVersion===Ne)return Wt(w,be),at}else be.uniforms=ne.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,K,be),w.onBeforeCompile(be,A),at=ne.acquireProgram(be,Pe),Be.set(Pe,at),W.uniforms=be.uniforms;let Oe=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=te.uniform),Wt(w,be),W.needsLights=_l(w),W.lightsStateVersion=Ne,W.needsLights&&(Oe.ambientLightColor.value=Y.state.ambient,Oe.lightProbe.value=Y.state.probe,Oe.sunLights.value=Y.state.sun,Oe.sunLightShadows.value=Y.state.sunShadow,Oe.directionalLights.value=Y.state.directional,Oe.directionalLightShadows.value=Y.state.directionalShadow,Oe.spotLights.value=Y.state.spot,Oe.spotLightShadows.value=Y.state.spotShadow,Oe.rectAreaLights.value=Y.state.rectArea,Oe.ltc_1.value=Y.state.rectAreaLTC1,Oe.ltc_2.value=Y.state.rectAreaLTC2,Oe.pointLights.value=Y.state.point,Oe.pointLightShadows.value=Y.state.pointShadow,Oe.hemisphereLights.value=Y.state.hemi,Oe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Oe.sunShadowCascade.value=Y.state.sunShadowCascade,Oe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Oe.spotLightMatrix.value=Y.state.spotLightMatrix,Oe.spotLightMap.value=Y.state.spotLightMap,Oe.pointShadowMatrix.value=Y.state.pointShadowMatrix),W.numLightProbeGrids=rn(E.state.lightProbeGridArray),W.currentProgram=at,W.uniformsList=null,at}function zs(w,U,K,W,Y){let Te=le.get(w),Ne=Te.currentProgram.id+","+W+","+Y,be=Te.programVariants.get(Ne);return be===void 0?(be=ni(w,U,K),Te.programVariants.set(Ne,be)):(Te.currentProgram=be,Te.uniformsList=null,Te.outputColorSpace=W,Te.toneMapping=Y),be}function sn(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=_a.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Wt(w,U){let K=le.get(w);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function gi(w,U,K,W,Y){U.isScene!==!0&&(U=nt),ye.resetTextureUnits();let Te=U.fog,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,be=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:lt.workingColorSpace,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Be=R.get(W.envMap||Ne,Pe),Ye=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,at=!!K.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!K.morphAttributes.position,ot=!!K.morphAttributes.normal,Qt=!!K.morphAttributes.color,At=Ji;W.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(At=A.toneMapping);let wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Mn=wt!==void 0?wt.length:0,Fe=le.get(W),Un=E.state.lights;if(Je===!0&&(q===!0||w!==I)){let Ft=w===I&&W.id===G;te.setState(W,w,Ft)}let mt=!1,is=!1;W.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Un.state.version||Y.isBatchedMesh&&Fe.batching===!1||!Y.isBatchedMesh&&Fe.batching===!0||Y.isBatchedMesh&&Fe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Fe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Y.isInstancedMesh&&Fe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Fe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Fe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Fe.instancingMorph===!1&&Y.morphTexture!==null||Fe.envMap!==Be||W.fog===!0&&Fe.fog!==Te||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==te.numPlanes||Fe.numIntersection!==te.numIntersection)||Fe.vertexAlphas!==Ye||Fe.vertexTangents!==at||Fe.morphTargets!==Oe||Fe.morphNormals!==ot||Fe.morphColors!==Qt||Fe.morphTargetsCount!==Mn||Fe.numLightProbeGrids!==rn(E.state.lightProbeGridArray)?mt=!0:(Fe.outputColorSpace!==be||Fe.toneMapping!==At)&&(is=!0):(mt=!0,Fe.__version=W.version);let bn=Fe.currentProgram;(mt===!0||is===!0)&&(bn=is===!0?zs(W,U,Y,be,At):ni(W,U,Y),D&&W.isNodeMaterial&&D.onUpdateProgram(W,bn,Fe));let xl=!1,Rr=!1,rs=!1,ft=bn.getUniforms(),gn=Fe.uniforms;if(j.useProgram(bn.program)&&(xl=!0,Rr=!0,rs=!0),W.id!==G&&(G=W.id,Rr=!0),xl||I!==w){j.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ft.setValue(B,"projectionMatrix",w.projectionMatrix),ft.setValue(B,"viewMatrix",w.matrixWorldInverse);let un=ft.map.cameraPosition;un!==void 0&&un.setValue(B,Gt.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&ft.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,Rr=!0,rs=!0)}if(Fe.needsLights&&(Un.state.sunShadowMap.length>0&&ft.setValue(B,"sunShadowMap",Un.state.sunShadowMap,ye),Un.state.directionalShadowMap.length>0&&ft.setValue(B,"directionalShadowMap",Un.state.directionalShadowMap,ye),Un.state.spotShadowMap.length>0&&ft.setValue(B,"spotShadowMap",Un.state.spotShadowMap,ye),Un.state.pointShadowMap.length>0&&ft.setValue(B,"pointShadowMap",Un.state.pointShadowMap,ye)),Y.isSkinnedMesh){ft.setOptional(B,Y,"bindMatrix"),ft.setOptional(B,Y,"bindMatrixInverse");let Ft=Y.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ft.setValue(B,"boneTexture",Ft.boneTexture,ye))}Y.isBatchedMesh&&(ft.setOptional(B,Y,"batchingTexture"),ft.setValue(B,"batchingTexture",Y._matricesTexture,ye),ft.setOptional(B,Y,"batchingIdTexture"),ft.setValue(B,"batchingIdTexture",Y._indirectTexture,ye),ft.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ft.setValue(B,"batchingColorTexture",Y._colorsTexture,ye));let Ii=K.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ee.update(Y,K,bn),(Rr||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,ft.setValue(B,"receiveShadow",Y.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=pM()),Rr){if(ft.setValue(B,"toneMappingExposure",A.toneMappingExposure),Fe.needsLights&&Xa(gn,rs),Te&&W.fog===!0&&ue.refreshFogUniforms(gn,Te),ue.refreshMaterialUniforms(gn,W,pe,Me,E.state.transmissionRenderTarget[w.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Ft=y,un=0;for(let rr of E.state.lightProbeGridArray)rr.texture!==null&&(Ft.textures[un]=rr.texture,Ft.min[un]=rr.boundingBox.min,Ft.max[un]=rr.boundingBox.max,Ft.resolution[un]=rr.resolution,un++);for(let rr in Ft)Ft[rr].length=un;gn.probesSH.value=Ft.textures,gn.probesMin.value=Ft.min,gn.probesMax.value=Ft.max,gn.probesResolution.value=Ft.resolution}_a.upload(B,sn(Fe),gn,ye)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_a.upload(B,sn(Fe),gn,ye),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(B,"center",Y.center),ft.setValue(B,"modelViewMatrix",Y.modelViewMatrix),ft.setValue(B,"normalMatrix",Y.normalMatrix),ft.setValue(B,"modelMatrix",Y.matrixWorld),W.uniformsGroups!==void 0){let Ft=W.uniformsGroups;for(let un=0,rr=Ft.length;un<rr;un++){let zd=Ft[un];ce.update(zd,bn),ce.bind(zd,bn)}}return bn}function Xa(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function _l(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,U,K){let W=le.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),le.get(w.texture).__webglTexture=U,le.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:K,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let K=le.get(w);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,K=0){Q=w,k=U,F=K;let W=null,Y=!1,Te=!1;if(w){let be=le.get(w);if(be.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(B.FRAMEBUFFER,be.__webglFramebuffer),H.copy(w.viewport),he.copy(w.scissor),we=w.scissorTest,j.viewport(H),j.scissor(he),j.setScissorTest(we),G=-1;return}else if(be.__webglFramebuffer===void 0)ye.setupRenderTarget(w);else if(be.__hasExternalTextures)ye.rebindTextures(w,le.get(w.texture).__webglTexture,le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ye=w.depthTexture;if(be.__boundDepthTexture!==Ye){if(Ye!==null&&le.has(Ye)&&(w.width!==Ye.image.width||w.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(w)}}let Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Te=!0);let Be=le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?W=Be[U][K]:W=Be[U],Y=!0):w.samples>0&&ye.useMultisampledRTT(w)===!1?W=le.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?W=Be[K]:W=Be,H.copy(w.viewport),he.copy(w.scissor),we=w.scissorTest}else H.copy(Ee).multiplyScalar(pe).floor(),he.copy(Ve).multiplyScalar(pe).floor(),we=Le;if(K!==0&&(W=z),j.bindFramebuffer(B.FRAMEBUFFER,W)&&j.drawBuffers(w,W),j.viewport(H),j.scissor(he),j.setScissorTest(we),Y){let be=le.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,K)}else if(Te){let be=U;for(let Pe=0;Pe<w.textures.length;Pe++){let Be=le.get(w.textures[Pe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Pe,Be.__webglTexture,K,be)}}else if(w!==null&&K!==0){let be=le.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,be.__webglTexture,K)}G=-1};function Ar(w){let U=le.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=ze.textureFormatReadable(w.format),U.__typeReadable=ze.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,K,W,Y,Te,Ne,be=0){if(!(w&&w.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){j.bindFramebuffer(B.FRAMEBUFFER,Pe);try{let Be=w.textures[be],Ye=Be.format,at=Be.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Oe=Ar(Be);if(Oe.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&K>=0&&K<=w.height-Y&&B.readPixels(U,K,W,Y,fe.convert(Ye),fe.convert(at),Te)}finally{let Be=Q!==null?le.get(Q).__webglFramebuffer:null;j.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,U,K,W,Y,Te,Ne,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(U>=0&&U<=w.width-W&&K>=0&&K<=w.height-Y){j.bindFramebuffer(B.FRAMEBUFFER,Pe);let Be=w.textures[be],Ye=Be.format,at=Be.type;w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+be);let Oe=Ar(Be);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(U,K,W,Y,fe.convert(Ye),fe.convert(at),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Qt=Q!==null?le.get(Q).__webglFramebuffer:null;j.bindFramebuffer(B.FRAMEBUFFER,Qt);let At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Jp(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ot),B.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,K=0){let W=Math.pow(2,-K),Y=Math.floor(w.image.width*W),Te=Math.floor(w.image.height*W),Ne=U!==null?U.x:0,be=U!==null?U.y:0;ye.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Ne,be,Y,Te),j.unbindTexture()},this.copyTextureToTexture=function(w,U,K=null,W=null,Y=0,Te=0){let Ne,be,Pe,Be,Ye,at,Oe,ot,Qt,At=w.isCompressedTexture?w.mipmaps[Te]:w.image;if(K!==null)Ne=K.max.x-K.min.x,be=K.max.y-K.min.y,Pe=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,Ye=K.min.y,at=K.isBox3?K.min.z:0;else{let ft=Math.pow(2,-Y);Ne=Math.floor(At.width*ft),be=Math.floor(At.height*ft),w.isDataArrayTexture?Pe=At.depth:w.isData3DTexture?Pe=Math.floor(At.depth*ft):Pe=1,Be=0,Ye=0,at=0}W!==null?(Oe=W.x,ot=W.y,Qt=W.z):(Oe=0,ot=0,Qt=0);let wt=fe.convert(U.format),Mn=fe.convert(U.type),Fe;U.isData3DTexture?(ye.setTexture3D(U,0),Fe=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ye.setTexture2DArray(U,0),Fe=B.TEXTURE_2D_ARRAY):(ye.setTexture2D(U,0),Fe=B.TEXTURE_2D),j.activeTexture(B.TEXTURE0),j.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),j.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),j.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=j.getParameter(B.UNPACK_ROW_LENGTH),mt=j.getParameter(B.UNPACK_IMAGE_HEIGHT),is=j.getParameter(B.UNPACK_SKIP_PIXELS),bn=j.getParameter(B.UNPACK_SKIP_ROWS),xl=j.getParameter(B.UNPACK_SKIP_IMAGES);j.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),j.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),j.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),j.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),j.pixelStorei(B.UNPACK_SKIP_IMAGES,at);let Rr=w.isDataArrayTexture||w.isData3DTexture,rs=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let ft=le.get(w),gn=le.get(U),Ii=le.get(ft.__renderTarget),Ft=le.get(gn.__renderTarget);j.bindFramebuffer(B.READ_FRAMEBUFFER,Ii.__webglFramebuffer),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let un=0;un<Pe;un++)Rr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.get(w).__webglTexture,Y,at+un),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,le.get(U).__webglTexture,Te,Qt+un)),B.blitFramebuffer(Be,Ye,Be+Ne,Ye+be,Oe,ot,Oe+Ne,ot+be,B.DEPTH_BUFFER_BIT,B.NEAREST);j.bindFramebuffer(B.READ_FRAMEBUFFER,null),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||le.has(w)){let ft=le.get(w),gn=le.get(U);j.bindFramebuffer(B.READ_FRAMEBUFFER,C),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,O);for(let Ii=0;Ii<Pe;Ii++)Rr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ft.__webglTexture,Y,at+Ii):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ft.__webglTexture,Y),rs?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gn.__webglTexture,Te,Qt+Ii):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gn.__webglTexture,Te),Y!==0?B.blitFramebuffer(Be,Ye,Be+Ne,Ye+be,Oe,ot,Oe+Ne,ot+be,B.COLOR_BUFFER_BIT,B.NEAREST):rs?B.copyTexSubImage3D(Fe,Te,Oe,ot,Qt+Ii,Be,Ye,Ne,be):B.copyTexSubImage2D(Fe,Te,Oe,ot,Be,Ye,Ne,be);j.bindFramebuffer(B.READ_FRAMEBUFFER,null),j.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else rs?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Fe,Te,Oe,ot,Qt,Ne,be,Pe,wt,Mn,At.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Fe,Te,Oe,ot,Qt,Ne,be,Pe,wt,At.data):B.texSubImage3D(Fe,Te,Oe,ot,Qt,Ne,be,Pe,wt,Mn,At):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,Oe,ot,Ne,be,wt,Mn,At.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,Oe,ot,At.width,At.height,wt,At.data):B.texSubImage2D(B.TEXTURE_2D,Te,Oe,ot,Ne,be,wt,Mn,At);j.pixelStorei(B.UNPACK_ROW_LENGTH,Un),j.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt),j.pixelStorei(B.UNPACK_SKIP_PIXELS,is),j.pixelStorei(B.UNPACK_SKIP_ROWS,bn),j.pixelStorei(B.UNPACK_SKIP_IMAGES,xl),Te===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(Fe),j.unbindTexture()},this.initRenderTarget=function(w){le.get(w).__webglFramebuffer===void 0&&ye.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ye.setTextureCube(w,0):w.isData3DTexture?ye.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ye.setTexture2DArray(w,0):ye.setTexture2D(w,0),j.unbindTexture()},this.resetState=function(){k=0,F=0,Q=null,j.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var hu=class extends hs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Or;e.deleteAttribute("uv");let t=new ps({side:_n}),n=new ps,i=new Vr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Pt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new ho(e,n,6),o=new dn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Pt(e,ya(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Pt(e,ya(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Pt(e,ya(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Pt(e,ya(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Pt(e,ya(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let h=new Pt(e,ya(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ya(r){return new xo({color:0,emissive:16777215,emissiveIntensity:r})}function gr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},Vf,xn,Ut,Ti=1e8,Mt=1/Ti,Df=Math.PI*2,gM=Df/4,_M=0,Wm=Math.sqrt,xM=Math.cos,vM=Math.sin,ln=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},bu=function(e){return typeof e>"u"},er=function(e){return typeof e=="object"},Kn=function(e){return e!==!1},Gf=function(){return typeof window<"u"},fu=function(e){return Xt(e)||ln(e)},Xm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,yM=/random\([^)]+\)/g,SM=/,\s*/g,Um=/(?:-?\.?\d|\.)+/gi,Hf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ef=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wf=/[+-]=-?[.\d]+/,MM=/[^,'"\[\]\s]+/gi,bM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Qi,Nf,Xf,ci={},gu={},qm,Ym=function(e){return(gu=Ma(e,ci))&&Pn},Tu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xo=function(e,t){return!t&&console.warn(e)},Zm=function(e,t){return e&&(ci[e]=t)&&gu&&(gu[e]=t)||ci},qo=function(){return 0},TM={suppressEvents:!0,isStart:!0,kill:!1},du={suppressEvents:!0,kill:!1},wM={suppressEvents:!0},qf={},Xr=[],Uf={},Jm,Jn={},Af={},Om=30,pu=[],Yf="",Zf=function(e){var t=e[0],n,i;if(er(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=pu.length;i--&&!pu[i].targetTest(t););n=pu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Qf(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||Zf(wi(e))[0]._gsap},Jf=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():bu(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},qt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},Ts=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},EM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},_u=function(){var e=Xr.length,t=Xr.slice(0),n,i;for(Uf={},Xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$f=function(e){return!!(e._initted||e._startAt||e.add)},$m=function(e,t,n,i){Xr.length&&!xn&&_u(),e.render(t,n,i||!!(xn&&t<0&&$f(e))),Xr.length&&!xn&&_u()},Km=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(MM).length<2?t:ln(e)?e.trim():e},Qm=function(e){return e},ui=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},AM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ma=function(e,t){for(var n in t)e[n]=t[n];return e},Fm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=er(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},xu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Vo=function(e){var t=e.parent||zt,n=e.keyframes?AM(Cn(e.keyframes)):ui;if(Kn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},RM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},wu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},CM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Of=function(e,t,n,i){return e._startAt&&(xn?e._startAt.revert(du):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},PM=function r(e){return!e||e._ts&&r(e.parent)},Bm=function(e){return e._repeat?ba(e._tTime,e=e.duration()+e._rDelay)*e:0},ba=function(e,t){var n=Math.floor(e=Bt(e/t));return e&&n===e?n-1:n},vu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Eu=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Au=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Eu(e),n._dirty||ys(n,e)),e},eg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vu(e.rawTime(),t),(!t._dur||$o(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},ji=function(e,t,n,i){return t.parent&&Yr(t),t._start=Bt((xr(n)?n:!n&&yu(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==zt?bi(e,n,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jm(e,t,"_first","_last",e._sort?"_start":0),yu(t)||(e._recent=t),i||eg(e,t),e._ts<0&&Au(e,e._tTime),e},tg=function(e,t){return(ci.ScrollTrigger||Tu("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},ng=function(e,t,n,i,s){if(td(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Jm!==$n.frame)return Xr.push(e),e._lazy=[s,i],1},IM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},LM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&IM(e)&&!(!e._initted&&yu(e))||(e._ts<0||e._dp._ts<0)&&!yu(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=$o(0,e._tDur,t),u=ba(l,o),e._yoyo&&u&1&&(a=1-a),u!==ba(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||xn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&ng(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Of(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yr(e,1),!n&&!xn&&(li(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},DM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ta=function(e,t,n,i){var s=e._repeat,a=Bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Bt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Au(e,e._tTime=e._tDur*o),e.parent&&Eu(e),n||ys(e.parent,e),e},zm=function(e){return e instanceof Rn?ys(e):Ta(e,e._dur)},NM={_start:0,endTime:qo,totalDuration:qo},bi=function r(e,t,n){var i=e.labels,s=e._recent||NM,a=e.duration()>=Ti?s.endTime(!1):e._dur,o,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Cn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Go=function(e,t,n){var i=xr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;a.immediateRender=Kn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Jt(t[0],a,t[s+1])},Zr=function(e,t){return e||e===0?t(e):t},$o=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!ln(e)||!(t=bM.exec(e))?"":t[1]},UM=function(e,t,n){return Zr(n,function(i){return $o(e,t,i)})},Ff=[].slice,ig=function(e,t){return e&&er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&er(e[0]))&&!e.nodeType&&e!==Qi},OM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||ig(i,1)?(s=n).push.apply(s,wi(i)):n.push(i)})||n},wi=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):ln(e)&&!n&&(Nf||!wa())?Ff.call((t||Xf).querySelectorAll(e),0):Cn(e)?OM(e,n):ig(e)?Ff.call(e,0):e?[e]:[]},Bf=function(e){return e=wi(e)[0]||Xo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?Xo("Invalid scope")||Xf.createElement("div"):e)}},rg=function(e){return e.sort(function(){return .5-Math.random()})},sg=function(e){if(Xt(e))return e;var t=er(e)?e:{each:e},n=Ss(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return ln(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,_){var x=(_||t).length,p=a[x],g,v,T,y,S,E,m,M,P;if(!p){if(P=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!P){for(m=-Ti;m<(m=_[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(p=a[x]=[],g=l?Math.min(P,x)*u-.5:i%P,v=P===Ti?0:l?x*d/P-.5:i/P|0,m=0,M=Ti,E=0;E<x;E++)T=E%P-g,y=v-(E/P|0),p[E]=S=c?Math.abs(c==="y"?y:T):Wm(T*T+y*y),S>m&&(m=S),S<M&&(M=S);i==="random"&&rg(p),p.max=m-M,p.min=M,p.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),p.b=x<0?s-x:s,p.u=vn(t.amount||t.each)||0,n=n&&x<0?JM(n):n}return x=(p[f]-p.min)/p.max||0,Bt(p.b+(n?n(x):x)*p.v)+p.u}},zf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xr(n)?0:vn(n))}},ag=function(e,t){var n=Cn(e),i,s;return!n&&er(e)&&(i=n=e.radius||Ti,e.values?(e=wi(e.values),(s=!xr(e[0]))&&(i*=i)):e=zf(e.increment)),Zr(t,n?Xt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ti,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||xr(a)?u:u+vn(a)}:zf(e))},og=function(e,t,n,i){return Zr(Cn(e)?!t:n===!0?!!(n=0):!i,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},FM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},BM=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},zM=function(e,t,n){return cg(e,t,0,1,n)},lg=function(e,t,n){return Zr(n,function(i){return e[~~t(i)]})},kM=function r(e,t,n){var i=t-e;return Cn(e)?lg(e,r(0,e.length),t):Zr(n,function(s){return(i+(s-e)%i)%i+e})},VM=function r(e,t,n){var i=t-e,s=i*2;return Cn(e)?lg(e,r(0,e.length-1),t):Zr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ea=function(e){return e.replace(yM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(SM);return og(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cg=function(e,t,n,i,s){var a=t-e,o=i-n;return Zr(s,function(l){return n+((l-e)/a*o||0)})},GM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=ln(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var x=Math.min(f,~~_);return u[x](_-x)},n=t}else i||(e=Ma(Cn(e)?[]:{},e));if(!u){for(l in t)jf.call(o,e,l,"get",t[l]);s=function(_){return rd(_,o)||(a?e.p:e)}}}return Zr(n,s)},km=function(e,t,n){var i=e.labels,s=Ti,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},li=function(e,t,n){var i=e.vars,s=i[t],a=Ut,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xr.length&&_u(),o&&(Ut=o),u=l?s.apply(c,l):s.call(c),Ut=a,u},zo=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&li(e,"onInterrupt"),e},Sa,ug=[],hg=function(e){if(e)if(e=!e.name&&e.default||e,Gf()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:qo,render:rd,add:jf,kill:sb,modifier:rb,rawVars:0},a={targetTest:0,get:0,getSetter:Ru,aliases:{},register:0};if(wa(),e!==i){if(Jn[t])return;ui(i,ui(xu(e,s),a)),Ma(i.prototype,Ma(s,xu(e,a))),Jn[i.prop=t]=i,e.targetTest&&(pu.push(i),qf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zm(t,i),e.register&&e.register(Pn,i,Vn)}else ug.push(e)},Et=255,ko={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Rf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},fg=function(e,t,n){var i=e?xr(e)?[e>>16,e>>8&Et,e&Et]:0:ko.black,s,a,o,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ko[e])i=ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Um),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Rf(l+1/3,s,a),i[1]=Rf(l,s,a),i[2]=Rf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Hf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Um)||ko.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Et,a=i[1]/Et,o=i[2]/Et,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dg=function(e){var t=[],n=[],i=-1;return e.split(_r).forEach(function(s){var a=s.match(bs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Vm=function(e,t,n){var i="",s=(e+i).match(_r),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=fg(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=dg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(_r,"1").split(bs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(_r),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},_r=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ko)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),HM=/hsl[a]?\(/,Kf=function(e){var t=e.join(" "),n;if(_r.lastIndex=0,_r.test(t))return n=HM.test(t),e[1]=Vm(e[1],n),e[0]=Vm(e[0],n,dg(e[1])),!0},Yo,$n=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,_=function x(p){var g=r()-i,v=p===!0,T,y,S,E;if((g>e||g<0)&&(n+=g-t),i+=g,S=i-n,T=S-a,(T>0||v)&&(E=++d.frame,f=S-d.time*1e3,d.time=S=S/1e3,a+=T+(T>=s?0:s-T),y=1),v||(l=c(x)),y)for(h=0;h<o.length;h++)o[h](S,f,E,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qm&&(!Nf&&Gf()&&(Qi=Nf=window,Xf=Qi.document||{},ci.gsap=Pn,(Qi.gsapVersions||(Qi.gsapVersions=[])).push(Pn.version),Ym(gu||Qi.GreenSockGlobals||!Qi.gsap&&Qi||{}),ug.forEach(hg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Yo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Yo=0,c=qo},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,g,v){var T=g?function(y,S,E,m){p(y,S,E,m),d.remove(T)}:p;return d.remove(p),o[v?"unshift":"push"](T),wa(),T},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&h>=g&&h--},_listeners:o},d})(),wa=function(){return!Yo&&$n.wake()},ut={},WM=/^[\d.\-M][\d.\-,\s]/,XM=/["']/g,qM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(XM,"").trim():+c,i=l.substr(o+1).trim();return t},YM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ZM=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qM(t[1])]:YM(e).split(",").map(Km)):ut._CE&&WM.test(e)?ut._CE("",e):n},JM=function(e){return function(t){return 1-e(1-t)}},Ss=function(e,t){return e&&(Xt(e)?e:ut[e]||ZM(e))||t},ws=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return kn(e,function(o){ut[o]=ci[o]=s,ut[a=o.toLowerCase()]=n;for(var l in s)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=s[l]}),s},pg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Df*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*vM((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:pg(o);return s=Df/s,l.config=function(c,u){return r(e,c,u)},l},Pf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pg(n);return i.config=function(s){return r(e,s)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ws(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;ws("Elastic",Cf("in"),Cf("out"),Cf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ws("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ws("Circ",function(r){return-(Wm(1-r*r)-1)});ws("Sine",function(r){return r===1?1:-xM(r*gM)+1});ws("Back",Pf("in"),Pf("out"),Pf());ut.SteppedEase=ut.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Mt;return function(o){return((i*$o(0,a,o)|0)+s)*n}}};Wo.ease=ut["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Yf+=r+","+r+"Params,"});var Qf=function(e,t){this.id=_M++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jf,this.set=t?t.getSetter:Ru},Zo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ta(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Yo||$n.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ta(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Au(this,n),!s._dp||s.parent||eg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ji(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$m(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ba(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vu(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime($o(-Math.abs(this._delay),o,s),i!==!1),Eu(this),CM(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{wa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Mt,a;if(s)for(this._tTime-=Mt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Mt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Bt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ji(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=wM);var i=xn;return xn=n,$f(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),Kn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Xt(n)?n:Qm,l=function(){var u=i.then;i.then=null,s&&s(),Xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){zo(this)},r})();ui(Zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Rn=(function(r){Hm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Kn(n.sortChildren),zt&&ji(n.parent||zt,gr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&tg(gr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Go(0,arguments,this),this},t.from=function(i,s,a){return Go(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Go(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Vo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(i,s,bi(this,a),1),this},t.call=function(i,s,a){return ji(this,Jt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Jt(i,a,bi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Vo(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Vo(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Bt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,x,p,g,v,T,y,S,E,m;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,T=this._ts,g=!T,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Bt(u%p),u===l?(x=this._repeat,f=c):(S=Bt(u/p),x=~~S,x&&x===S&&(f=c,x--),f>c&&(f=c)),S=ba(this._tTime,p),!o&&this._tTime&&S!==x&&this._tTime-S*p-this._dur<=0&&(S=x),E&&x&1&&(f=c-f,m=1),x!==S&&!this._lock){var M=E&&S&1,P=M===(E&&x&1);if(x<S&&(M=!M),o=M?0:u%c?c:u,this._lock=1,this.render(o||(m?0:Bt(x*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!m&&(this.invalidate()._lock=1,S=x),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!m&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=DM(this,Bt(o),Bt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!S&&(li(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=-Mt);break}}h=_}else{h=this._last;for(var A=i<0?i:f;h;){if(_=h._prev,(h._act||A<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(A-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(A-h._start)*h._ts,s,a||xn&&$f(h)),f!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=A?-Mt:Mt);break}}h=_}}if(v&&!s&&(this.pause(),v.render(f>=o?0:-Mt)._zTime=f>=o?1:-1,this._ts))return this._start=y,Eu(this),this.render(i,s,a);this._onUpdate&&!s&&li(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(li(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(xr(s)||(s=bi(this,s,i)),!(i instanceof Zo)){if(Cn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ln(i))return this.addLabel(i,s);if(Xt(i))i=Jt.delayedCall(0,i);else return this}return this!==i?ji(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Jt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return ln(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&wu(this,i),i===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Jt.delayedCall(0,s||qo,a);return o.data="isPause",this._hasPause=1,ji(this,o,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&Yr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Wr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=wi(i),l=this._first,c=xr(s),u;l;)l instanceof Jt?EM(l._targets,o)&&(c?(!Wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=bi(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=Jt.to(a,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Mt,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Ta(_,p,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ui({startAt:{time:bi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),km(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),km(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Bt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ys(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ys(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ti,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ji(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Bt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ta(a,a===zt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(zt._ts&&($m(zt,vu(i,zt)),Jm=$n.frame),$n.frame>=Om){Om+=Qn.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||$n.sleep()}}},e})(Zo);ui(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var $M=function(e,t,n,i,s,a,o){var l=new Vn(this._pt,e,t,0,1,id,null,s),c=0,u=0,d,f,h,_,x,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ea(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),f=n.match(Ef)||[];d=Ef.exec(i);)_=d[0],x=i.substring(c,d.index),h?h=(h+1)%5:x.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:",",s:p,c:_.charAt(1)==="="?Ts(p,_)-p:parseFloat(_)-p,m:h&&h<4?Math.round:0},c=Ef.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Wf.test(i)||g)&&(l.e=0),this._pt=l,l},jf=function(e,t,n,i,s,a,o,l,c,u){Xt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:Xt(d)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=Xt(d)?c?tb:gg:nd,_;if(ln(i)&&(~i.indexOf("random(")&&(i=Ea(i)),i.charAt(1)==="="&&(_=Ts(f,i)+(vn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||kf)return!isNaN(f*i)&&i!==""?(_=new Vn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?ib:_g,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Tu(t,i),$M.call(this,e,t,f,i,h,l||Qn.stringFilter,c))},KM=function(e,t,n,i,s){if(Xt(e)&&(e=Ho(e,s,t,n,i)),!er(e)||e.style&&e.nodeType||Cn(e)||Xm(e))return ln(e)?Ho(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ho(e[o],s,t,n,i);return a},ed=function(e,t,n,i,s,a){var o,l,c,u;if(Jn[e]&&(o=new Jn[e]).init(s,o.rawVars?t[e]:KM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Vn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Sa))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Wr,kf,td=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,x=e._startAt,p=e._targets,g=e.parent,v=g&&g.data==="nested"?g.vars.targets:p,T=e._overwrite==="auto"&&!Vf,y=e.timeline,S=i.easeReverse||d,E,m,M,P,A,N,D,z,C,O,k,F,Q;if(y&&(!f||!s)&&(s="none"),e._ease=Ss(s,Wo.ease),e._rEase=S&&(Ss(S)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(z=p[0]?qr(p[0]).harness:0,F=z&&i[z.prop],E=xu(i,qf),x&&(x._zTime<0&&x.progress(1),t<0&&u&&o&&!h?x.render(-1,!0):x.revert(u&&_?du:TM),x._lazy=0),a){if(Yr(e._startAt=Jt.set(p,ui({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!x&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return li(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!o&&!h)&&e._startAt.revert(du),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!x){if(t&&(o=!1),M=ui({overwrite:!1,data:"isFromStart",lazy:o&&!x&&Kn(l),immediateRender:o,stagger:0,parent:g},E),F&&(M[z.prop]=F),Yr(e._startAt=Jt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(du):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Kn(l)||l&&!_,m=0;m<p.length;m++){if(A=p[m],D=A._gsap||Zf(p)[m]._gsap,e._ptLookup[m]=O={},Uf[D.id]&&Xr.length&&_u(),k=v===p?m:v.indexOf(A),z&&(C=new z).init(A,F||E,e,k,v)!==!1&&(e._pt=P=new Vn(e._pt,A,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(G){O[G]=P}),C.priority&&(N=1)),!z||F)for(M in E)Jn[M]&&(C=ed(M,E,e,k,A,v))?C.priority&&(N=1):O[M]=P=jf.call(e,A,M,"get",E[M],k,v,0,i.stringFilter);e._op&&e._op[m]&&e.kill(A,e._op[m]),T&&e._pt&&(Wr=e,zt.killTweensOf(A,O,e.globalTime(t)),Q=!e.parent,Wr=0),e._pt&&l&&(Uf[D.id]=1)}N&&sd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,f&&t<=0&&y.render(Ti,!0,!0)},QM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return kf=1,e.vars[t]="+=0",td(e,o),kf=0,l?Xo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=qt(n)+vn(d.e)),d.b&&(d.b=u.s+vn(d.b))},jM=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ma({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},eb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ho=function(e,t,n,i,s){return Xt(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?Ea(e):e},Su=Yf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",mg={};kn(Su+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return mg[r]=1});Su=Su.split(",");var Jt=(function(r){Hm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Vo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,x=l.defaults,p=l.scrollTrigger,g=i.parent||zt,v=(Cn(n)||Xm(n)?xr(n[0]):"length"in i)?[n]:wi(n),T,y,S,E,m,M,P,A;if(o._targets=v.length?Zf(v):Xo("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||fu(c)||fu(u)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(T=o.timeline=new Rn({data:"nested",defaults:x||{},targets:g&&g.data==="nested"?g.vars.targets:v}),T.kill(),T.parent=T._dp=gr(o),T._start=0,f||fu(c)||fu(u)){if(E=v.length,P=f&&sg(f),er(f))for(m in f)~Su.indexOf(m)&&(A||(A={}),A[m]=f[m]);for(y=0;y<E;y++)S=xu(i,mg),S.stagger=0,N&&(S.easeReverse=N),A&&Ma(S,A),M=v[y],S.duration=+Ho(c,gr(o),y,M,v),S.delay=(+Ho(u,gr(o),y,M,v)||0)-o._delay,!f&&E===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),T.to(M,S,P?P(y,M,v):0),T._ease=ut.none;T.duration()?c=u=0:o.timeline=0}else if(_){Vo(ui(T.vars.defaults,{ease:"none"})),T._ease=Ss(_.ease||i.ease||"none");var D=0,z,C,O;if(Cn(_))_.forEach(function(k){return T.to(v,k,">")}),T.duration();else{S={};for(m in _)m==="ease"||m==="easeEach"||eb(m,_[m],S,_.easeEach);for(m in S)for(z=S[m].sort(function(k,F){return k.t-F.t}),D=0,y=0;y<z.length;y++)C=z[y],O={ease:C.e,duration:(C.t-(y?z[y-1].t:0))/100*c},O[m]=C.v,T.to(v,O,D),D+=O.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return h===!0&&!Vf&&(Wr=gr(o),zt.killTweensOf(v),Wr=0),ji(g,gr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Bt(g._time)&&Kn(d)&&PM(gr(o))&&g.data!=="nested")&&(o._tTime=-Mt,o.render(Math.max(0,-u)||0)),p&&tg(gr(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Mt&&!u?l:i<Mt?0:i,f,h,_,x,p,g,v,T;if(!c)LM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,T=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+i,s,a);if(f=Bt(d%x),d===l?(_=this._repeat,f=c):(p=Bt(d/x),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),g=this._yoyo&&_&1,g&&(f=c-f),p=ba(this._tTime,x),f===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==x&&this._initted&&(this._lock=a=1,this.render(Bt(x*_),!0).invalidate()._lock=0)}if(!this._initted){if(ng(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=f<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(li(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Of(this,i,s,a),li(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Of(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Yr(this,1),!s&&!(u&&!o)&&(d||o||g)&&(li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Yo||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||td(this,c),u=this._ease(c/this._dur),QM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Au(this,0),this.parent||jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wr&&Wr.vars.overwrite!==!0)._first||zo(this),this.parent&&a!==this.timeline.totalDuration()&&Ta(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?wi(i):o,c=this._ptLookup,u=this._pt,d,f,h,_,x,p,g;if((!s||s==="all")&&RM(o,l))return s==="all"&&(this._pt=0),zo(this);for(d=this._op=this._op||[],s!=="all"&&(ln(s)&&(x={},kn(s,function(v){return x[v]=1}),s=x),s=jM(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],s==="all"?(d[g]=s,_=f,h={}):(h=d[g]=d[g]||{},_=s);for(x in _)p=f&&f[x],p&&((!("kill"in p.d)||p.d.kill(x)===!0)&&wu(this,p,"_pt"),delete f[x]),h!=="all"&&(h[x]=1)}return this._initted&&!this._pt&&u&&zo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Go(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Go(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return zt.killTweensOf(i,s,a)},e})(Zo);ui(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(r){Jt[r]=function(){var e=new Rn,t=Ff.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var nd=function(e,t,n){return e[t]=n},gg=function(e,t,n){return e[t](n)},tb=function(e,t,n,i){return e[t](i.fp,n)},nb=function(e,t,n){return e.setAttribute(t,n)},Ru=function(e,t){return Xt(e[t])?gg:bu(e[t])&&e.setAttribute?nb:nd},_g=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ib=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},id=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},rd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},rb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},sb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ab=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},sd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Vn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||_g,this.d=l||this,this.set=c||nd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ab,this.m=n,this.mt=s,this.tween=i},r})();kn(Yf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return qf[r]=1});ci.TweenMax=ci.TweenLite=Jt;ci.TimelineLite=ci.TimelineMax=Rn;zt=new Rn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Kf;var Ms=[],mu={},ob=[],Gm=0,lb=0,If=function(e){return(mu[e]||ob).map(function(t){return t()})},Jo=function(){var e=Date.now(),t=[];e-Gm>2&&(If("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Qi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),If("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gm=e,If("matchMedia"))},xg=(function(){function r(t,n){this.selector=n&&Bf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=lb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Xt(n)&&(s=i,i=n,n=Xt);var a=this,o=function(){var c=Ut,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Bf(s)),Ut=a,d=i.apply(a,arguments),Xt(d)&&a._r.push(d),Ut=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Xt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Jt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ms.length;a--;)Ms[a].id===this.id&&Ms.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Jo):o.removeEventListener("change",Jo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),cb=(function(){function r(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){er(n)||(n={matches:n});var a=new xg(0,s||this.scope),o=a.conditions={},l,c,u;Ut&&!a.selector&&(a.selector=Ut.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qi.matchMedia(n[c]),l&&(Ms.indexOf(a)<0&&Ms.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Jo):l.addEventListener("change",Jo),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Mu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hg(i)})},timeline:function(e){return new Rn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=wi(e)[0]);var s=qr(e||{}).get,a=n?Qm:Km;return n==="native"&&(n=""),e&&(t?a((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Jn[o]&&Jn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var i=e.map(function(u){return Pn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Jn[t],o=qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Sa._pt=0,d.init(e,n?u+n:u,Sa,0,[e]),d.render(1,d),Sa._pt&&rd(1,Sa)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Pn.to(e,ui((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Wo.ease)),Fm(Wo,e||{})},config:function(e){return Fm(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jn[o]&&!ci[o]&&Xo(t+" effect requires "+o+" plugin.")}),Af[t]=function(o,l,c){return n(wi(o),ui(l||{},s),c)},a&&(Rn.prototype[t]=function(o,l,c){return this.add(Af[t](o,er(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):ut},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rn(e),i,s;for(n.smoothChildTiming=Kn(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]))&&ji(n,i,i._start-i._delay),i=s;return ji(zt,n,0),n},context:function(e,t){return e?new xg(e,t):Ut},matchMedia:function(e){return new cb(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Jo()},addEventListener:function(e,t){var n=mu[e]||(mu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=mu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:kM,wrapYoyo:VM,distribute:sg,random:og,snap:ag,normalize:zM,getUnit:vn,clamp:UM,splitColor:fg,toArray:wi,selector:Bf,mapRange:cg,pipe:FM,unitize:BM,interpolate:GM,shuffle:rg},install:Ym,effects:Af,ticker:$n,updateRoot:Rn.updateRoot,plugins:Jn,globalTimeline:zt,core:{PropTween:Vn,globals:Zm,Tween:Jt,Timeline:Rn,Animation:Zo,getCache:qr,_removeLinkedListItem:wu,reverting:function(){return xn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Vf=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Mu[r]=Jt[r]});$n.add(Rn.updateRoot);Sa=Mu.to({},{duration:0});var ub=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hb=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ub(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Lf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ln(s)&&(l={},kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}hb(o,s)}}}},Pn=Mu.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)xn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Lf("roundProps",zf),Lf("modifiers"),Lf("snap",ag))||Mu;Jt.version=Rn.version=Pn.version="3.15.1";qm=1;Gf()&&wa();var fb=ut.Power0,db=ut.Power1,pb=ut.Power2,mb=ut.Power3,gb=ut.Power4,_b=ut.Linear,xb=ut.Quad,vb=ut.Cubic,yb=ut.Quart,Sb=ut.Quint,Mb=ut.Strong,bb=ut.Elastic,Tb=ut.Back,wb=ut.SteppedEase,Eb=ut.Bounce,Ab=ut.Sine,Rb=ut.Expo,Cb=ut.Circ;var vg,Jr,Ra,hd,Cs,Pb,yg,fd,Ib=function(){return typeof window<"u"},yr={},Rs=180/Math.PI,Ca=Math.PI/180,Aa=Math.atan2,Sg=1e8,dd=/([A-Z])/g,Lb=/(left|right|width|margin|padding|x)/i,Db=/[\s,\(]\S/,tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ub=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ob=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Pg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Bb=function(e,t,n){return e.style[t]=n},zb=function(e,t,n){return e.style.setProperty(t,n)},kb=function(e,t,n){return e._gsap[t]=n},Vb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Hb=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},kt="transform",jn=kt+"Origin",Wb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=tr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vr(i,o)}):this.tfm[e]=a.x?a[e]:vr(i,e),e===jn&&(this.tfm.zOrigin=a.zOrigin);else return tr.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},Ig=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(dd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=fd(),(!s||!s.isStart)&&!n[kt]&&(Ig(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Lg=function(e,t){var n={target:e,props:[],revert:Xb,save:Wb};return e._gsap||Pn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Dg,ld=function(e,t){var n=Jr.createElementNS?Jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jr.createElement(e);return n&&n.style?n:Jr.createElement(e)},hi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(dd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Pa(t)||t,1)||""},Mg="O,Moz,ms,Ms,Webkit".split(","),Pa=function(e,t,n){var i=t||Cs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Mg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Mg[a]:"")+e},cd=function(){Ib()&&window.document&&(vg=window,Jr=vg.document,Ra=Jr.documentElement,Cs=ld("div")||{style:{}},Pb=ld("div"),kt=Pa(kt),jn=kt+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dg=!!Pa("perspective"),fd=Pn.core.reverting,hd=1)},bg=function(e){var t=e.ownerSVGElement,n=ld("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ra.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ra.removeChild(n),s},Tg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ng=function(e){var t,n;try{t=e.getBBox()}catch{t=bg(e),n=1}return t&&(t.width||t.height)||n||(t=bg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Tg(e,["x","cx","x1"])||0,y:+Tg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ug=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ng(e))},Kr=function(e,t){if(t){var n=e.style,i;t in yr&&t!==jn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(dd,"-$1").toLowerCase())):n.removeAttribute(t)}},$r=function(e,t,n,i,s,a){var o=new Vn(e._pt,t,n,0,1,a?Pg:Cg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},wg={deg:1,rad:1,turn:1},qb={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Cs.style,l=Lb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,x,p,g;if(i===a||!s||wg[i]||wg[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&Ug(e),(h||a==="%")&&(yr[t]||~t.indexOf("adius")))return _=g?e.getBBox()[l?"width":"height"]:e[u],qt(h?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Jr||!x.appendChild)&&(x=Jr.body),p=x._gsap,p&&h&&p.width&&l&&p.time===$n.time&&!p.uncache)return qt(s/p.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,_=e[u],v?e.style[t]=v:Kr(e,t)}else(h||a==="%")&&!qb[hi(x,"display")]&&(o.position=hi(e,"position")),x===e&&(o.position="static"),x.appendChild(Cs),_=Cs[u],x.removeChild(Cs),o.position="absolute";return l&&h&&(p=qr(x),p.time=$n.time,p.width=x[u]),qt(f?_*s/d:_&&s?d/_*s:0)},vr=function(e,t,n,i){var s;return hd||cd(),t in tr&&t!=="transform"&&(t=tr[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(s=jo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Pu(hi(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Cu[t]&&Cu[t](e,t,n)||hi(e,t)||Jf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},Yb=function(e,t,n,i){if(!n||n==="none"){var s=Pa(t,e,1),a=s&&hi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=hi(e,"borderTopColor"))}var o=new Vn(this._pt,e.style,t,0,1,id),l=0,c=0,u,d,f,h,_,x,p,g,v,T,y,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=hi(e,t)||i,x?e.style[t]=x:Kr(e,t)),u=[n,i],Kf(u),n=u[0],i=u[1],f=n.match(bs)||[],S=i.match(bs)||[],S.length){for(;d=bs.exec(i);)p=d[0],v=i.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(x=f[c++]||"")&&(h=parseFloat(x)||0,y=x.substr((h+"").length),p.charAt(1)==="="&&(p=Ts(h,p)+y),g=parseFloat(p),T=p.substr((g+"").length),l=bs.lastIndex-T.length,T||(T=T||Qn.units[t]||y,l===i.length&&(i+=T,o.e+=T)),y!==T&&(h=Qr(e,t,x,T)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:h,c:g-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Pg:Cg;return Wf.test(i)&&(o.e=0),this._pt=o,o},Eg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Eg[n]||n,t[1]=Eg[i]||i,t.join(" ")},Jb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],yr[o]&&(l=1,o=o==="transformOrigin"?jn:kt),Kr(n,o);l&&(Kr(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",jo(n,1),a.uncache=1,Ig(i)))}},Cu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Vn(e._pt,t,n,0,0,Jb);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Qo=[1,0,0,1,0,0],Og={},Fg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ag=function(e){var t=hi(e,kt);return Fg(t)?Qo:t.substr(7).match(Hf).map(qt)},pd=function(e,t){var n=e._gsap||qr(e),i=e.style,s=Ag(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qo:s):(s===Qo&&!e.offsetParent&&e!==Ra&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ra.appendChild(e)),s=Ag(e),l?i.display=l:Kr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ra.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ud=function(e,t,n,i,s,a){var o=e._gsap,l=s||pd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],x=l[2],p=l[3],g=l[4],v=l[5],T=t.split(" "),y=parseFloat(T[0])||0,S=parseFloat(T[1])||0,E,m,M,P;n?l!==Qo&&(m=h*p-_*x)&&(M=y*(p/m)+S*(-x/m)+(x*v-p*g)/m,P=y*(-_/m)+S*(h/m)-(h*v-_*g)/m,y=M,S=P):(E=Ng(e),y=E.x+(~T[0].indexOf("%")?y/100*E.width:y),S=E.y+(~(T[1]||T[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&o.smooth?(g=y-c,v=S-u,o.xOffset=d+(g*h+v*x)-g,o.yOffset=f+(g*_+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[jn]="0px 0px",a&&($r(a,o,"xOrigin",c,y),$r(a,o,"yOrigin",u,S),$r(a,o,"xOffset",d,o.xOffset),$r(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},jo=function(e,t){var n=e._gsap||new Qf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=hi(e,jn)||"0",u,d,f,h,_,x,p,g,v,T,y,S,E,m,M,P,A,N,D,z,C,O,k,F,Q,G,I,H,he,we,J,oe;return u=d=f=x=p=g=v=T=y=0,h=_=1,n.svg=!!(e.getCTM&&Ug(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),m=pd(e,n.svg),n.svg&&(n.uncache?(Q=e.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),ud(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,m)),S=n.xOrigin||0,E=n.yOrigin||0,m!==Qo&&(N=m[0],D=m[1],z=m[2],C=m[3],u=O=m[4],d=k=m[5],m.length===6?(h=Math.sqrt(N*N+D*D),_=Math.sqrt(C*C+z*z),x=N||D?Aa(D,N)*Rs:0,v=z||C?Aa(z,C)*Rs+x:0,v&&(_*=Math.abs(Math.cos(v*Ca))),n.svg&&(u-=S-(S*N+E*z),d-=E-(S*D+E*C))):(oe=m[6],we=m[7],I=m[8],H=m[9],he=m[10],J=m[11],u=m[12],d=m[13],f=m[14],M=Aa(oe,he),p=M*Rs,M&&(P=Math.cos(-M),A=Math.sin(-M),F=O*P+I*A,Q=k*P+H*A,G=oe*P+he*A,I=O*-A+I*P,H=k*-A+H*P,he=oe*-A+he*P,J=we*-A+J*P,O=F,k=Q,oe=G),M=Aa(-z,he),g=M*Rs,M&&(P=Math.cos(-M),A=Math.sin(-M),F=N*P-I*A,Q=D*P-H*A,G=z*P-he*A,J=C*A+J*P,N=F,D=Q,z=G),M=Aa(D,N),x=M*Rs,M&&(P=Math.cos(M),A=Math.sin(M),F=N*P+D*A,Q=O*P+k*A,D=D*P-N*A,k=k*P-O*A,N=F,O=Q),p&&Math.abs(p)+Math.abs(x)>359.9&&(p=x=0,g=180-g),h=qt(Math.sqrt(N*N+D*D+z*z)),_=qt(Math.sqrt(k*k+oe*oe)),M=Aa(O,k),v=Math.abs(M)>2e-4?M*Rs:0,y=J?1/(J<0?-J:J):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fg(hi(e,kt)),F&&e.setAttribute("transform",F))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=x<=0?180:-180,x+=x<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=qt(h),n.scaleY=qt(_),n.rotation=qt(x)+o,n.rotationX=qt(p)+o,n.rotationY=qt(g)+o,n.skewX=v+o,n.skewY=T+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=Pu(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?Kb:Dg?Bg:$b,n.uncache=0,n},Pu=function(e){return(e=e.split(" "))[0]+" "+e[1]},ad=function(e,t,n){var i=vn(t);return qt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},$b=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Bg(e,t)},Es="0deg",Ko="0px",As=") ",Bg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,x=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,T=n.zOrigin,y="",S=g==="auto"&&e&&e!==1||g===!0;if(T&&(d!==Es||u!==Es)){var E=parseFloat(u)*Ca,m=Math.sin(E),M=Math.cos(E),P;E=parseFloat(d)*Ca,P=Math.cos(E),a=ad(v,a,m*P*-T),o=ad(v,o,-Math.sin(E)*-T),l=ad(v,l,M*P*-T+T)}p!==Ko&&(y+="perspective("+p+As),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||a!==Ko||o!==Ko||l!==Ko)&&(y+=l!==Ko||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+As),c!==Es&&(y+="rotate("+c+As),u!==Es&&(y+="rotateY("+u+As),d!==Es&&(y+="rotateX("+d+As),(f!==Es||h!==Es)&&(y+="skew("+f+", "+h+As),(_!==1||x!==1)&&(y+="scale("+_+", "+x+As),v.style[kt]=y||"translate(0, 0)"},Kb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,x=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,T=parseFloat(a),y=parseFloat(o),S,E,m,M,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ca,c*=Ca,S=Math.cos(l)*d,E=Math.sin(l)*d,m=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(u*=Ca,P=Math.tan(c-u),P=Math.sqrt(1+P*P),m*=P,M*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),S*=P,E*=P)),S=qt(S),E=qt(E),m=qt(m),M=qt(M)):(S=d,M=f,E=m=0),(T&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(T=Qr(h,"x",a,"px"),y=Qr(h,"y",o,"px")),(_||x||p||g)&&(T=qt(T+_-(_*S+x*m)+p),y=qt(y+x-(_*E+x*M)+g)),(i||s)&&(P=h.getBBox(),T=qt(T+i/100*P.width),y=qt(y+s/100*P.height)),P="matrix("+S+","+E+","+m+","+M+","+T+","+y+")",h.setAttribute("transform",P),v&&(h.style[kt]=P)},Qb=function(e,t,n,i,s){var a=360,o=ln(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Rs:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Sg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Sg)%a-~~(c/a)*a)),e._pt=f=new Vn(e._pt,t,n,i,c,Nb),f.e=u,f.u="deg",e._props.push(n),f},Rg=function(e,t){for(var n in t)e[n]=t[n];return e},jb=function(e,t,n){var i=Rg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=jo(n,1),Kr(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=t,o=jo(n,1),a[kt]=c);for(l in yr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=vn(c),_=vn(u),d=h!==_?Qr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Vn(e._pt,o,l,d,f-d,od),e._pt.u=_||0,e._props.push(l));Rg(o,i)};kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Cu[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(_){return vr(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(_,x){return h[_]=f[x]=f[x]||f[(x-1)/2|0]}),o.init(l,h,d)}});var md={name:"css",register:cd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,_,x,p,g,v,T,y,S,E,m,M,P;hd||cd(),this.styles=this.styles||Lg(e),M=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(u=t[x],!(Jn[x]&&ed(x,t,n,i,e,s)))){if(h=typeof u,_=Cu[x],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ea(u)),_)_(this,e,x,u,n)&&(m=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),u+="",_r.lastIndex=0,_r.test(c)||(p=vn(c),g=vn(u),g?p!==g&&(c=Qr(e,x,c,g)+g):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,x),a.push(x),M.push(x,0,o[x]);else if(h!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,s):l[x],ln(c)&&~c.indexOf("random(")&&(c=Ea(c)),vn(c+"")||c==="auto"||(c+=Qn.units[x]||vn(vr(e,x))||""),(c+"").charAt(1)==="="&&(c=vr(e,x))):c=vr(e,x),f=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),x in tr&&(x==="autoAlpha"&&(f===1&&vr(e,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,o.visibility),$r(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),x!=="scale"&&x!=="transform"&&(x=tr[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in yr,T){if(this.styles.save(x),P=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=hi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=hi(e,"perspective"),A?e.style.perspective=A:Kr(e,"perspective")}d=parseFloat(u)}if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||jo(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new Vn(this._pt,o,kt,0,1,S.renderTransform,S,0,-1),y.dep=1),x==="scale")this._pt=new Vn(this._pt,S,"scaleY",S.scaleY,(v?Ts(S.scaleY,v+d):d)-S.scaleY||0,od),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){M.push(jn,0,o[jn]),u=Zb(u),S.svg?ud(e,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==S.zOrigin&&$r(this,S,"zOrigin",S.zOrigin,g),$r(this,o,x,Pu(c),Pu(u)));continue}else if(x==="svgOrigin"){ud(e,u,1,E,0,this);continue}else if(x in Og){Qb(this,S,x,f,v?Ts(f,v+u):u);continue}else if(x==="smoothOrigin"){$r(this,S,"smooth",S.smooth,u);continue}else if(x==="force3D"){S[x]=u;continue}else if(x==="transform"){jb(this,u,e);continue}}else x in o||(x=Pa(x)||x);if(T||(d||d===0)&&(f||f===0)&&!Db.test(u)&&x in o)p=(c+"").substr((f+"").length),d||(d=0),g=vn(u)||(x in Qn.units?Qn.units[x]:p),p!==g&&(f=Qr(e,x,c,g)),this._pt=new Vn(this._pt,T?S:o,x,f,(v?Ts(f,v+d):d)-f,!T&&(g==="px"||x==="zIndex")&&t.autoRound!==!1?Fb:od),this._pt.u=g||0,T&&P!==u?(this._pt.b=c,this._pt.e=P,this._pt.r=Ob):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Ub);else if(x in o)Yb.call(this,e,x,c,v?v+u:u);else if(x in e)this.add(e,x,c||e[x],v?v+u:u,i,s);else if(x!=="parseTransform"){Tu(x,u);continue}T||(x in o?M.push(x,0,o[x]):typeof e[x]=="function"?M.push(x,2,e[x]()):M.push(x,1,c||e[x])),a.push(x)}}m&&sd(this)},render:function(e,t){if(t.tween._time||!fd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vr,aliases:tr,getSetter:function(e,t,n){var i=tr[t];return i&&i.indexOf(",")<0&&(t=i),t in yr&&t!==jn&&(e._gsap.x||vr(e,"x"))?n&&yg===n?t==="scale"?Vb:kb:(yg=n||{})&&(t==="scale"?Gb:Hb):e.style&&!bu(e.style[t])?Bb:~t.indexOf("-")?zb:Ru(e,t)},core:{_removeProperty:Kr,_getMatrix:pd}};Pn.utils.checkPrefix=Pa;Pn.core.getStyleSaver=Lg;(function(r,e,t,n){var i=kn(r+","+e+","+t,function(s){yr[s]=1});kn(e,function(s){Qn.units[s]="deg",Og[s]=1}),tr[i[13]]=r+","+e,kn(n,function(s){var a=s.split(":");tr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qn.units[r]="px"});Pn.registerPlugin(md);var dt=Pn.registerPlugin(md)||Pn,RA=dt.core.Tween;function zg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function e1(r,e,t){return e&&zg(r.prototype,e),t&&zg(r,t),r}var yn,Du,t1,ei,jr,es,La,Vg,Ps,Da,Gg,Sr,ki,Hg,Wg=function(){return yn||typeof window<"u"&&(yn=window.gsap)&&yn.registerPlugin&&yn},Xg=1,Ia=[],Qe=[],Vi=[],tl=Date.now,gd=function(e,t){return t},n1=function(){var e=Da.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,Vi),Qe=n,Vi=i,gd=function(a,o){return t[a](o)}},br=function(e,t){return~Vi.indexOf(e)&&Vi[Vi.indexOf(e)+1][t]},nl=function(e){return!!~Gg.indexOf(e)},Hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Gn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Iu="scrollLeft",Lu="scrollTop",_d=function(){return Sr&&Sr.isPressed||Qe.cache++},Nu=function(e,t){var n=function i(s){if(s||s===0){Xg&&ei.history.scrollRestoration!=="manual"&&(ei.history.scrollRestoration="manual");var a=Sr&&Sr.isPressed;s=i.v=Math.round(s)||(Sr&&Sr.iOS?1:0),e(s),i.cacheID=Qe.cache,a&&gd("ss",s)}else(t||Qe.cache!==i.cacheID||gd("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},In={s:Iu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Nu(function(r){return arguments.length?ei.scrollTo(r,en.sc()):ei.pageXOffset||jr[Iu]||es[Iu]||La[Iu]||0})},en={s:Lu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Nu(function(r){return arguments.length?ei.scrollTo(In.sc(),r):ei.pageYOffset||jr[Lu]||es[Lu]||La[Lu]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||yn.utils.toArray)(e)[0]||(typeof e=="string"&&yn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},i1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Mr=function(e,t){var n=t.s,i=t.sc;nl(e)&&(e=jr.scrollingElement||es);var s=Qe.indexOf(e),a=i===en.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+a]||Hn(e,"scroll",_d);var o=Qe[s+a],l=o||(Qe[s+a]=Nu(br(e,n),!0)||(nl(e)?i:Nu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=yn.getProperty(e,"scrollBehavior")==="smooth"),l},Uu=function(e,t,n){var i=e,s=e,a=tl(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,x){var p=tl();x||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(_){var x=o,p=s,g=tl();return(_||_===0)&&_!==i&&u(_),a===o||g-o>c?0:(i+(n?p:-p))/((n?g:a)-x)*1e3};return{update:u,reset:d,getVelocity:f}},el=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},qg=function(){Da=yn.core.globals().ScrollTrigger,Da&&Da.core&&n1()},Yg=function(e){return yn=e||Wg(),!Du&&yn&&typeof document<"u"&&document.body&&(ei=window,jr=document,es=jr.documentElement,La=jr.body,Gg=[ei,jr,es,La],t1=yn.utils.clamp,Hg=yn.core.context||function(){},Ps="onpointerenter"in La?"pointer":"mouse",Vg=Yt.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=Yt.eventTypes=("ontouchstart"in es?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in es?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Xg=0},500),Du=1),Da||qg(),Du};In.op=en;Qe.cache=0;var Yt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Du||Yg(yn)||console.warn("Please gsap.registerPlugin(Observer)"),Da||qg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,x=n.event,p=n.onDragStart,g=n.onDragEnd,v=n.onDrag,T=n.onPress,y=n.onRelease,S=n.onRight,E=n.onLeft,m=n.onUp,M=n.onDown,P=n.onChangeX,A=n.onChangeY,N=n.onChange,D=n.onToggleX,z=n.onToggleY,C=n.onHover,O=n.onHoverEnd,k=n.onMove,F=n.ignoreCheck,Q=n.isNormalizer,G=n.onGestureStart,I=n.onGestureEnd,H=n.onWheel,he=n.onEnable,we=n.onDisable,J=n.onClick,oe=n.scrollSpeed,ve=n.capture,Me=n.allowClicks,pe=n.lockAxis,Ie=n.onLockAxis;this.target=o=Wn(o)||es,this.vars=n,h&&(h=yn.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,oe=oe||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(La).lineHeight)||22);var Xe,Ee,Ve,Le,Ue,st,Je,q=this,$e=0,Gt=0,vt=n.passive||!u&&n.passive!==!1,nt=Mr(o,In),Rt=Mr(o,en),It=nt(),B=Rt(),ht=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ki[0]==="pointerdown",ct=nl(o),ze=o.ownerDocument||jr,j=[0,0,0],Re=[0,0,0],le=0,ye=function(){return le=tl()},R=function(xe,se){return(q.event=xe)&&h&&i1(xe.target,h)||se&&ht&&xe.pointerType!=="touch"||F&&F(xe,se)},b=function(){q._vx.reset(),q._vy.reset(),Ee.pause(),d&&d(q)},V=function(){var xe=q.deltaX=kg(j),se=q.deltaY=kg(Re),ie=Math.abs(xe)>=i,Se=Math.abs(se)>=i;N&&(ie||Se)&&N(q,xe,se,j,Re),ie&&(S&&q.deltaX>0&&S(q),E&&q.deltaX<0&&E(q),P&&P(q),D&&q.deltaX<0!=$e<0&&D(q),$e=q.deltaX,j[0]=j[1]=j[2]=0),Se&&(M&&q.deltaY>0&&M(q),m&&q.deltaY<0&&m(q),A&&A(q),z&&q.deltaY<0!=Gt<0&&z(q),Gt=q.deltaY,Re[0]=Re[1]=Re[2]=0),(Le||Ve)&&(k&&k(q),Ve&&(p&&Ve===1&&p(q),v&&v(q),Ve=0),Le=!1),st&&!(st=!1)&&Ie&&Ie(q),Ue&&(H(q),Ue=!1),Xe=0},ae=function(xe,se,ie){j[ie]+=xe,Re[ie]+=se,q._vx.update(xe),q._vy.update(se),c?Xe||(Xe=requestAnimationFrame(V)):V()},ne=function(xe,se){pe&&!Je&&(q.axis=Je=Math.abs(xe)>Math.abs(se)?"x":"y",st=!0),Je!=="y"&&(j[2]+=xe,q._vx.update(xe,!0)),Je!=="x"&&(Re[2]+=se,q._vy.update(se,!0)),c?Xe||(Xe=requestAnimationFrame(V)):V()},ue=function(xe){if(!R(xe,1)){xe=el(xe,u);var se=xe.clientX,ie=xe.clientY,Se=se-q.x,re=ie-q.y,Ce=q.isDragging;q.x=se,q.y=ie,(Ce||(Se||re)&&(Math.abs(q.startX-se)>=s||Math.abs(q.startY-ie)>=s))&&(Ve||(Ve=Ce?2:1),Ce||(q.isDragging=!0),ne(Se,re))}},ge=q.onPress=function(ce){R(ce,1)||ce&&ce.button||(q.axis=Je=null,Ee.pause(),q.isPressed=!0,ce=el(ce),$e=Gt=0,q.startX=q.x=ce.clientX,q.startY=q.y=ce.clientY,q._vx.reset(),q._vy.reset(),Hn(Q?o:ze,ki[1],ue,vt,!0),q.deltaX=q.deltaY=0,T&&T(q))},X=q.onRelease=function(ce){if(!R(ce,1)){Gn(Q?o:ze,ki[1],ue,!0);var xe=!isNaN(q.y-q.startY),se=q.isDragging,ie=se&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Se=el(ce);!ie&&xe&&(q._vx.reset(),q._vy.reset(),u&&Me&&yn.delayedCall(.08,function(){if(tl()-le>300&&!ce.defaultPrevented){if(ce.target.click)ce.target.click();else if(ze.createEvent){var re=ze.createEvent("MouseEvents");re.initMouseEvent("click",!0,!0,ei,1,Se.screenX,Se.screenY,Se.clientX,Se.clientY,!1,!1,!1,!1,0,null),ce.target.dispatchEvent(re)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,d&&se&&!Q&&Ee.restart(!0),Ve&&V(),g&&se&&g(q),y&&y(q,ie)}},te=function(xe){return xe.touches&&xe.touches.length>1&&(q.isGesturing=!0)&&G(xe,q.isDragging)},de=function(){return(q.isGesturing=!1)||I(q)},L=function(xe){if(!R(xe)){var se=nt(),ie=Rt();ae((se-It)*oe,(ie-B)*oe,1),It=se,B=ie,d&&Ee.restart(!0)}},ee=function(xe){if(!R(xe)){xe=el(xe,u),H&&(Ue=!0);var se=(xe.deltaMode===1?l:xe.deltaMode===2?ei.innerHeight:1)*_;ae(xe.deltaX*se,xe.deltaY*se,0),d&&!Q&&Ee.restart(!0)}},$=function(xe){if(!R(xe)){var se=xe.clientX,ie=xe.clientY,Se=se-q.x,re=ie-q.y;q.x=se,q.y=ie,Le=!0,d&&Ee.restart(!0),(Se||re)&&ne(Se,re)}},me=function(xe){q.event=xe,C(q)},fe=function(xe){q.event=xe,O(q)},_e=function(xe){return R(xe)||el(xe,u)&&J(q)};Ee=q._dc=yn.delayedCall(f||.25,b).pause(),q.deltaX=q.deltaY=0,q._vx=Uu(0,50,!0),q._vy=Uu(0,50,!0),q.scrollX=nt,q.scrollY=Rt,q.isDragging=q.isGesturing=q.isPressed=!1,Hg(this),q.enable=function(ce){return q.isEnabled||(Hn(ct?ze:o,"scroll",_d),a.indexOf("scroll")>=0&&Hn(ct?ze:o,"scroll",L,vt,ve),a.indexOf("wheel")>=0&&Hn(o,"wheel",ee,vt,ve),(a.indexOf("touch")>=0&&Vg||a.indexOf("pointer")>=0)&&(Hn(o,ki[0],ge,vt,ve),Hn(ze,ki[2],X),Hn(ze,ki[3],X),Me&&Hn(o,"click",ye,!0,!0),J&&Hn(o,"click",_e),G&&Hn(ze,"gesturestart",te),I&&Hn(ze,"gestureend",de),C&&Hn(o,Ps+"enter",me),O&&Hn(o,Ps+"leave",fe),k&&Hn(o,Ps+"move",$)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=Le=Ve=!1,q._vx.reset(),q._vy.reset(),It=nt(),B=Rt(),ce&&ce.type&&ge(ce),he&&he(q)),q},q.disable=function(){q.isEnabled&&(Ia.filter(function(ce){return ce!==q&&nl(ce.target)}).length||Gn(ct?ze:o,"scroll",_d),q.isPressed&&(q._vx.reset(),q._vy.reset(),Gn(Q?o:ze,ki[1],ue,!0)),Gn(ct?ze:o,"scroll",L,ve),Gn(o,"wheel",ee,ve),Gn(o,ki[0],ge,ve),Gn(ze,ki[2],X),Gn(ze,ki[3],X),Gn(o,"click",ye,!0),Gn(o,"click",_e),Gn(ze,"gesturestart",te),Gn(ze,"gestureend",de),Gn(o,Ps+"enter",me),Gn(o,Ps+"leave",fe),Gn(o,Ps+"move",$),q.isEnabled=q.isPressed=q.isDragging=!1,we&&we(q))},q.kill=q.revert=function(){q.disable();var ce=Ia.indexOf(q);ce>=0&&Ia.splice(ce,1),Sr===q&&(Sr=0)},Ia.push(q),Q&&nl(o)&&(Sr=q),q.enable(x)},e1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Yt.version="3.15.1";Yt.create=function(r){return new Yt(r)};Yt.register=Yg;Yt.getAll=function(){return Ia.slice()};Yt.getById=function(r){return Ia.filter(function(e){return e.vars.id===r})[0]};Wg()&&yn.registerPlugin(Yt);var De,Fa,tt,yt,pi,xt,Id,Ku,ml,cl,rl,Ou,Ln,eh,Td,qn,Zg,Jg,Ba,h0,xd,f0,Xn,wd,d0,p0,ts,Ed,Ld,za,Dd,ns,Ad,vd,Fu=1,Dn=Date.now,yd=Dn(),Ri=0,sl=0,$g=function(e,t,n){var i=di(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Kg=function(e,t){return t&&(!di(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},r1=function r(){return sl&&requestAnimationFrame(r)},Qg=function(){return eh=1},jg=function(){return eh=0},nr=function(e){return e},al=function(e){return Math.round(e*1e5)/1e5||0},m0=function(){return typeof window<"u"},g0=function(){return De||m0()&&(De=window.gsap)&&De.registerPlugin&&De},Os=function(e){return!!~Id.indexOf(e)},_0=function(e){return(e==="Height"?Dd:tt["inner"+e])||pi["client"+e]||xt["client"+e]},x0=function(e){return br(e,"getBoundingClientRect")||(Os(e)?function(){return $u.width=tt.innerWidth,$u.height=Dd,$u}:function(){return Tr(e)})},s1=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=br(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?_0(s):e["client"+s])||0}},a1=function(e,t){return!t||~Vi.indexOf(e)?x0(e):function(){return $u}},ir=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=br(e,n))?a()-x0(e)()[s]:Os(e)?(pi[n]||xt[n])-_0(i):e[n]-e["offset"+i])},Bu=function(e,t){for(var n=0;n<Ba.length;n+=3)(!t||~t.indexOf(Ba[n+1]))&&e(Ba[n],Ba[n+1],Ba[n+2])},di=function(e){return typeof e=="string"},Nn=function(e){return typeof e=="function"},ol=function(e){return typeof e=="number"},Is=function(e){return typeof e=="object"},il=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Na=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ua=Math.abs,v0="left",y0="top",Nd="right",Ud="bottom",Ds="width",Ns="height",ul="Right",hl="Left",fl="Top",dl="Bottom",tn="padding",Ei="margin",Va="Width",Od="Height",cn="px",Ai=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},o1=function(e){var t=Ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},e0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Tr=function(e,t){var n=t&&Ai(e)[Td]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Qu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},S0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},l1=function(e){return function(t){return De.utils.snap(S0(e),t)}},Fd=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},c1=function(e){return function(t,n){return Fd(S0(e))(t,n.direction)}},zu=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ku=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},t0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vu={toggleActions:"play",anticipatePin:0},ju={top:0,left:0,center:.5,bottom:1,right:1},qu=function(e,t){if(di(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ju?ju[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Gu=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=yt.createElement("div"),x=Os(n)||br(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,g=x?xt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,T=v?c:u,y="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&x?"fixed;":"absolute;"),(p||l||!x)&&(y+=(i===en?Nd:Ud)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(_,g.children[0]):g.appendChild(_),_._offset=_["offset"+i.op.d2],Yu(_,0,i,v),_},Yu=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Va]=1,s["border"+o+Va]=0,s[n.p]=t+"px",De.set(e,s)},et=[],Rd={},gl,n0=function(){return Dn()-Ri>34&&(gl||(gl=requestAnimationFrame(wr)))},Oa=function(){(!Xn||!Xn.isPressed||Xn.startX>xt.clientWidth)&&(Qe.cache++,Xn?gl||(gl=requestAnimationFrame(wr)):wr(),Ri||Bs("scrollStart"),Ri=Dn())},Sd=function(){p0=tt.innerWidth,d0=tt.innerHeight},ll=function(e){Qe.cache++,(e===!0||!Ln&&!f0&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!wd||p0!==tt.innerWidth||Math.abs(tt.innerHeight-d0)>tt.innerHeight*.25))&&Ku.restart(!0)},Fs={},u1=[],M0=function r(){return pn(je,"scrollEnd",r)||Ls(!0)},Bs=function(e){return Fs[e]&&Fs[e].map(function(t){return t()})||u1},fi=[],b0=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},T0=function(){Qe.cache++,Qe.forEach(function(e){return Nn(e)&&(e.rec=e())})},Bd=function(e,t){var n;for(qn=0;qn<et.length;qn++)n=et[qn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ns=!0,t&&b0(t),t||Bs("revert")},w0=function(e,t){Qe.cache++,(t||!Yn)&&Qe.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),di(e)&&(Ld=e,tt.history.scrollRestoration!==e&&(tt.history.scrollRestoration=e))},Yn,Us=0,i0,h1=function(){if(i0!==Us){var e=i0=Us;requestAnimationFrame(function(){return e===Us&&Ls(!0)})}},E0=function(){xt.appendChild(za),Dd=!Xn&&za.offsetHeight||tt.innerHeight,xt.removeChild(za)},r0=function(e){return ml(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ls=function(e,t){if(pi=yt.documentElement,xt=yt.body,Id=[tt,yt,pi,xt],Ri&&!e&&!ns){mn(je,"scrollEnd",M0);return}E0(),Yn=je.isRefreshing=!0,ns||T0();var n=Bs("refreshInit");h0&&je.sort(),t||Bd(),Qe.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),ns=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Ad=1,r0(!0),et.forEach(function(i){var s=ir(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),r0(!1),Ad=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),w0(Ld,1),Ku.pause(),Us++,Yn=2,wr(2),et.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=je.isRefreshing=!1,Bs("refresh")},Cd=0,Zu=1,pl,wr=function(e){if(e===2||!Yn&&!ns){je.isUpdating=!0,pl&&pl.update(0);var t=et.length,n=Dn(),i=n-yd>=50,s=t&&et[0].scroll();if(Zu=Cd>s?-1:1,Yn||(Cd=s),i&&(Ri&&!eh&&n-Ri>200&&(Ri=0,Bs("scrollEnd")),rl=yd,yd=n),Zu<0){for(qn=t;qn-- >0;)et[qn]&&et[qn].update(0,i);Zu=1}else for(qn=0;qn<t;qn++)et[qn]&&et[qn].update(0,i);je.isUpdating=!1}gl=0},Pd=[v0,y0,Ud,Nd,Ei+dl,Ei+ul,Ei+fl,Ei+hl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ju=Pd.concat([Ds,Ns,"boxSizing","max"+Va,"max"+Od,"position",Ei,tn,tn+fl,tn+ul,tn+dl,tn+hl]),f1=function(e,t,n){ka(n);var i=e._gsap;if(i.spacerIsNative)ka(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Md=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Pd.length,a=t.style,o=e.style,l;s--;)l=Pd[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ud]=o[Nd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ds]=Qu(e,In)+cn,a[Ns]=Qu(e,en)+cn,a[tn]=o[Ei]=o[y0]=o[v0]="0",ka(i),o[Ds]=o["max"+Va]=n[Ds],o[Ns]=o["max"+Od]=n[Ns],o[tn]=n[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},d1=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(d1,"-$1").toLowerCase())}},Hu=function(e){for(var t=Ju.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ju[s],n[Ju[s]]);return i.t=e,i},p1=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},$u={left:0,top:0},s0=function(e,t,n,i,s,a,o,l,c,u,d,f,h,_){Nn(e)&&(e=e(l)),di(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?qu("0"+e.substr(3),n):0));var x=h?h.time():0,p,g,v;if(h&&h.seek(0),isNaN(e)||(e=+e),ol(e))h&&(e=De.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&Yu(o,n,i,!0);else{Nn(t)&&(t=t(l));var T=(e||"0").split(" "),y,S,E,m;v=Wn(t,l)||xt,y=Tr(v)||{},(!y||!y.left&&!y.top)&&Ai(v).display==="none"&&(m=v.style.display,v.style.display="block",y=Tr(v),m?v.style.display=m:v.style.removeProperty("display")),S=qu(T[0],y[i.d]),E=qu(T[1]||"0",n),e=y[i.p]-c[i.p]-u+S+s-E,o&&Yu(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var M=e+n,P=a._isStart;p="scroll"+i.d2,Yu(a,M,i,P&&M>20||!P&&(d?Math.max(xt[p],pi[p]):a.parentNode[p])<=M+1),d&&(c=Tr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+cn))}return h&&v&&(p=Tr(v),h.seek(f),g=Tr(v),h._caScrollDist=p[i.p]-g[i.p],e=e/h._caScrollDist*f),h&&h.seek(x),h?e:Math.round(e)},m1=/(webkit|moz|length|cssText|inset)/i,a0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=Ai(e);for(a in o)!+a&&!m1.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},A0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Wu=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},o0=function(e,t){var n=Mr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,_={};c=c||n();var x=A0(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return x(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Qe.cache++,a.tween&&wr()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=De.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",n.wheelHandler),je.isTouch&&mn(e,"touchmove",n.wheelHandler),s},je=(function(){function r(t,n){Fa||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ed(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!sl){this.update=this.refresh=this.kill=nr;return}n=e0(di(n)||ol(n)||n.nodeType?{trigger:n}:n,Vu);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,x=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,T=s.once,y=s.snap,S=s.pinReparent,E=s.pinSpacer,m=s.containerAnimation,M=s.fastScrollEnd,P=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:en,N=!d&&d!==0,D=Wn(n.scroller||tt),z=De.core.getCache(D),C=Os(D),O=("pinType"in n?n.pinType:br(D,"pinType")||C&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=N&&n.toggleActions.split(" "),Q="markers"in n?n.markers:Vu.markers,G=C?0:parseFloat(Ai(D)["border"+A.p2+Va])||0,I=this,H=n.onRefreshInit&&function(){return n.onRefreshInit(I)},he=s1(D,C,A),we=a1(D,C),J=0,oe=0,ve=0,Me=Mr(D,A),pe,Ie,Xe,Ee,Ve,Le,Ue,st,Je,q,$e,Gt,vt,nt,Rt,It,B,ht,ct,ze,j,Re,le,ye,R,b,V,ae,ne,ue,ge,X,te,de,L,ee,$,me,fe;if(I._startClamp=I._endClamp=!1,I._dir=A,p*=45,I.scroller=D,I.scroll=m?m.time.bind(m):Me,Ee=Me(),ns&&Me.rec==null&&(Me.rec=Ee),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(h0=1,n.refreshPriority===-9999&&(pl=I)),z.tweenScroll=z.tweenScroll||{top:o0(D,en),left:o0(D,In)},I.tweenTo=pe=z.tweenScroll[A.p],I.scrubDuration=function(ie){te=ol(ie)&&ie,te?X?X.duration(ie):X=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return g&&g(I)}}):(X&&X.progress(1).kill(),X=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(d),ue=0,l||(l=i.vars.id)),y&&((!Is(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&De.set(C?[xt,pi]:D,{scrollBehavior:"auto"}),Qe.forEach(function(ie){return Nn(ie)&&ie.target===(C?yt.scrollingElement||pi:D)&&(ie.smooth=!1)}),Xe=Nn(y.snapTo)?y.snapTo:y.snapTo==="labels"?l1(i):y.snapTo==="labelsDirectional"?c1(i):y.directional!==!1?function(ie,Se){return Fd(y.snapTo)(ie,Dn()-oe<500?0:Se.direction)}:De.utils.snap(y.snapTo),de=y.duration||{min:.1,max:2},de=Is(de)?cl(de.min,de.max):cl(de,de),L=De.delayedCall(y.delay||te/2||.1,function(){var ie=Me(),Se=Dn()-oe<500,re=pe.tween;if((Se||Math.abs(I.getVelocity())<10)&&!re&&!eh&&J!==ie){var Ce=(ie-Le)/nt,it=i&&!N?i.totalProgress():Ce,qe=Se?0:(it-ge)/(Dn()-rl)*1e3||0,Lt=De.utils.clamp(-Ce,1-Ce,Ua(qe/2)*qe/.185),$t=Ce+(y.inertia===!1?0:Lt),Dt,bt,gt=y,nn=gt.onStart,Tt=gt.onInterrupt,Sn=gt.onComplete;if(Dt=Xe($t,I),ol(Dt)||(Dt=$t),bt=Math.max(0,Math.round(Le+Dt*nt)),ie<=Ue&&ie>=Le&&bt!==ie){if(re&&!re._initted&&re.data<=Ua(bt-ie))return;y.inertia===!1&&(Lt=Dt-Ce),pe(bt,{duration:de(Ua(Math.max(Ua($t-it),Ua(Dt-it))*.185/qe/.05||0)),ease:y.ease||"power3",data:Ua(bt-ie),onInterrupt:function(){return L.restart(!0)&&Tt&&Na(I,Tt)},onComplete:function(){I.update(),J=Me(),i&&!N&&(X?X.resetTo("totalProgress",Dt,i._tTime/i._tDur):i.progress(Dt)),ue=ge=i&&!N?i.totalProgress():I.progress,v&&v(I),Sn&&Na(I,Sn)}},ie,Lt*nt,bt-ie-Lt*nt),nn&&Na(I,nn,pe.tween)}}else I.isActive&&J!==ie&&L.restart(!0)}).pause()),l&&(Rd[l]=I),f=I.trigger=Wn(f||h!==!0&&h),fe=f&&f._gsap&&f._gsap.stRevert,fe&&(fe=fe(I)),h=h===!0?f:Wn(h),di(o)&&(o={targets:f,className:o}),h&&(_===!1||_===Ei||(_=!_&&h.parentNode&&h.parentNode.style&&Ai(h.parentNode).display==="flex"?!1:tn),I.pin=h,Ie=De.core.getCache(h),Ie.spacer?Rt=Ie.pinState:(E&&(E=Wn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ie.spacerIsNative=!!E,E&&(Ie.spacerState=Hu(E))),Ie.spacer=ht=E||yt.createElement("div"),ht.classList.add("pin-spacer"),l&&ht.classList.add("pin-spacer-"+l),Ie.pinState=Rt=Hu(h)),n.force3D!==!1&&De.set(h,{force3D:!0}),I.spacer=ht=Ie.spacer,ne=Ai(h),ye=ne[_+A.os2],ze=De.getProperty(h),j=De.quickSetter(h,A.a,cn),Md(h,ht,ne),B=Hu(h)),Q){Gt=Is(Q)?e0(Q,t0):t0,q=Gu("scroller-start",l,D,A,Gt,0),$e=Gu("scroller-end",l,D,A,Gt,0,q),ct=q["offset"+A.op.d2];var _e=Wn(br(D,"content")||D);st=this.markerStart=Gu("start",l,_e,A,Gt,ct,0,m),Je=this.markerEnd=Gu("end",l,_e,A,Gt,ct,0,m),m&&(me=De.quickSetter([st,Je],A.a,cn)),!O&&!(Vi.length&&br(D,"fixedMarkers")===!0)&&(o1(C?xt:D),De.set([q,$e],{force3D:!0}),b=De.quickSetter(q,A.a,cn),ae=De.quickSetter($e,A.a,cn))}if(m){var ce=m.vars.onUpdate,xe=m.vars.onUpdateParams;m.eventCallback("onUpdate",function(){I.update(0,0,1),ce&&ce.apply(m,xe||[])})}if(I.previous=function(){return et[et.indexOf(I)-1]},I.next=function(){return et[et.indexOf(I)+1]},I.revert=function(ie,Se){if(!Se)return I.kill(!0);var re=ie!==!1||!I.enabled,Ce=Ln;re!==I.isReverted&&(re&&(ee=Math.max(Me(),I.scroll.rec||0),ve=I.progress,$=i&&i.progress()),st&&[st,Je,q,$e].forEach(function(it){return it.style.display=re?"none":"block"}),re&&(Ln=I,I.update(re)),h&&(!S||!I.isActive)&&(re?f1(h,ht,Rt):Md(h,ht,Ai(h),R)),re||I.update(re),Ln=Ce,I.isReverted=re)},I.refresh=function(ie,Se,re,Ce){if(!((Ln||!I.enabled)&&!Se)){if(h&&ie&&Ri){mn(r,"scrollEnd",M0);return}!Yn&&H&&H(I),Ln=I,pe.tween&&!re&&(pe.tween.kill(),pe.tween=0),X&&X.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(W){return W.vars.immediateRender&&W.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var it=he(),qe=we(),Lt=m?m.duration():ir(D,A),$t=nt<=.01||!nt,Dt=0,bt=Ce||0,gt=Is(re)?re.end:n.end,nn=n.endTrigger||f,Tt=Is(re)?re.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),Sn=I.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,I),ti=f&&Math.max(0,et.indexOf(I))||0,Ht=ti,Kt,rn,ni,zs,sn,Wt,gi,Xa,_l,Ar,w,U,K;for(Q&&Is(re)&&(U=De.getProperty(q,A.p),K=De.getProperty($e,A.p));Ht-- >0;)Wt=et[Ht],Wt.end||Wt.refresh(0,1)||(Ln=I),gi=Wt.pin,gi&&(gi===f||gi===h||gi===Sn)&&!Wt.isReverted&&(Ar||(Ar=[]),Ar.unshift(Wt),Wt.revert(!0,!0)),Wt!==et[Ht]&&(ti--,Ht--);for(Nn(Tt)&&(Tt=Tt(I)),Tt=$g(Tt,"start",I),Le=s0(Tt,f,it,A,Me(),st,q,I,qe,G,O,Lt,m,I._startClamp&&"_startClamp")||(h?-.001:0),Nn(gt)&&(gt=gt(I)),di(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(di(Tt)?Tt.split(" ")[0]:"")+gt:(Dt=qu(gt.substr(2),it),gt=di(Tt)?Tt:(m?De.utils.mapRange(0,m.duration(),m.scrollTrigger.start,m.scrollTrigger.end,Le):Le)+Dt,nn=f)),gt=$g(gt,"end",I),Ue=Math.max(Le,s0(gt||(nn?"100% 0":Lt),nn,it,A,Me()+Dt,Je,$e,I,qe,G,O,Lt,m,I._endClamp&&"_endClamp"))||-.001,Dt=0,Ht=ti;Ht--;)Wt=et[Ht]||{},gi=Wt.pin,gi&&Wt.start-Wt._pinPush<=Le&&!m&&Wt.end>0&&(Kt=Wt.end-(I._startClamp?Math.max(0,Wt.start):Wt.start),(gi===f&&Wt.start-Wt._pinPush<Le||gi===Sn)&&isNaN(Tt)&&(Dt+=Kt*(1-Wt.progress)),gi===h&&(bt+=Kt));if(Le+=Dt,Ue+=Dt,I._startClamp&&(I._startClamp+=Dt),I._endClamp&&!Yn&&(I._endClamp=Ue||-.001,Ue=Math.min(Ue,ir(D,A))),nt=Ue-Le||(Le-=.01)&&.001,$t&&(ve=De.utils.clamp(0,1,De.utils.normalize(Le,Ue,ee))),I._pinPush=bt,st&&Dt&&(Kt={},Kt[A.a]="+="+Dt,Sn&&(Kt[A.p]="-="+Me()),De.set([st,Je],Kt)),h&&!(Ad&&I.end>=ir(D,A)))Kt=Ai(h),zs=A===en,ni=Me(),Re=parseFloat(ze(A.a))+bt,!Lt&&Ue>1&&(w=(C?yt.scrollingElement||pi:D).style,w={style:w,value:w["overflow"+A.a.toUpperCase()]},C&&Ai(xt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+A.a.toUpperCase()]="scroll")),Md(h,ht,Kt),B=Hu(h),rn=Tr(h,!0),Xa=O&&Mr(D,zs?In:en)(),_?(R=[_+A.os2,nt+bt+cn],R.t=ht,Ht=_===tn?Qu(h,A)+nt+bt:0,Ht&&(R.push(A.d,Ht+cn),ht.style.flexBasis!=="auto"&&(ht.style.flexBasis=Ht+cn)),ka(R),Sn&&et.forEach(function(W){W.pin===Sn&&W.vars.pinSpacing!==!1&&(W._subPinOffset=!0)}),O&&Me(ee)):(Ht=Qu(h,A),Ht&&ht.style.flexBasis!=="auto"&&(ht.style.flexBasis=Ht+cn)),O&&(sn={top:rn.top+(zs?ni-Le:Xa)+cn,left:rn.left+(zs?Xa:ni-Le)+cn,boxSizing:"border-box",position:"fixed"},sn[Ds]=sn["max"+Va]=Math.ceil(rn.width)+cn,sn[Ns]=sn["max"+Od]=Math.ceil(rn.height)+cn,sn[Ei]=sn[Ei+fl]=sn[Ei+ul]=sn[Ei+dl]=sn[Ei+hl]="0",sn[tn]=Kt[tn],sn[tn+fl]=Kt[tn+fl],sn[tn+ul]=Kt[tn+ul],sn[tn+dl]=Kt[tn+dl],sn[tn+hl]=Kt[tn+hl],It=p1(Rt,sn,S),Yn&&Me(0)),i?(_l=i._initted,xd(1),i.render(i.duration(),!0,!0),le=ze(A.a)-Re+nt+bt,V=Math.abs(nt-le)>1,O&&V&&It.splice(It.length-2,2),i.render(0,!0,!0),_l||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),xd(0)):le=nt,w&&(w.value?w.style["overflow"+A.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+A.a));else if(f&&Me()&&!m)for(rn=f.parentNode;rn&&rn!==xt;)rn._pinOffset&&(Le-=rn._pinOffset,Ue-=rn._pinOffset),rn=rn.parentNode;Ar&&Ar.forEach(function(W){return W.revert(!1,!0)}),I.start=Le,I.end=Ue,Ee=Ve=Yn?ee:Me(),!m&&!Yn&&!ns&&(Ee<ee&&Me(ee),I.scroll.rec=0),I.revert(!1,!0),oe=Dn(),L&&(J=-1,L.restart(!0)),Ln=0,i&&N&&(i._initted||$)&&i.progress()!==$&&i.progress($||0,!0).render(i.time(),!0,!0),($t||ve!==I.progress||m||x||i&&!i._initted)&&(i&&!N&&(i._initted||ve||i.vars.immediateRender!==!1)&&i.totalProgress(m&&Le<-.001&&!ve?De.utils.normalize(Le,Ue,0):ve,!0),I.progress=$t||(Ee-Le)/nt===ve?0:ve),h&&_&&(ht._pinOffset=Math.round(I.progress*le)),X&&X.invalidate(),isNaN(U)||(U-=De.getProperty(q,A.p),K-=De.getProperty($e,A.p),Wu(q,A,U),Wu(st,A,U-(Ce||0)),Wu($e,A,K),Wu(Je,A,K-(Ce||0))),$t&&!Yn&&I.update(),u&&!Yn&&!vt&&(vt=!0,u(I),vt=!1)}},I.getVelocity=function(){return(Me()-Ve)/(Dn()-rl)*1e3||0},I.endAnimation=function(){il(I.callbackAnimation),i&&(X?X.progress(1):i.paused()?N||il(i,I.direction<0,1):il(i,i.reversed()))},I.labelToScroll=function(ie){return i&&i.labels&&(Le||I.refresh()||Le)+i.labels[ie]/i.duration()*nt||0},I.getTrailing=function(ie){var Se=et.indexOf(I),re=I.direction>0?et.slice(0,Se).reverse():et.slice(Se+1);return(di(ie)?re.filter(function(Ce){return Ce.vars.preventOverlaps===ie}):re).filter(function(Ce){return I.direction>0?Ce.end<=Le:Ce.start>=Ue})},I.update=function(ie,Se,re){if(!(m&&!re&&!ie)){var Ce=Yn===!0?ee:I.scroll(),it=ie?0:(Ce-Le)/nt,qe=it<0?0:it>1?1:it||0,Lt=I.progress,$t,Dt,bt,gt,nn,Tt,Sn,ti;if(Se&&(Ve=Ee,Ee=m?Me():Ce,y&&(ge=ue,ue=i&&!N?i.totalProgress():qe)),p&&h&&!Ln&&!Fu&&Ri&&(!qe&&Le<Ce+(Ce-Ve)/(Dn()-rl)*p?qe=1e-4:qe===1&&Ue>Ce+(Ce-Ve)/(Dn()-rl)*p&&(qe=.9999)),qe!==Lt&&I.enabled){if($t=I.isActive=!!qe&&qe<1,Dt=!!Lt&&Lt<1,Tt=$t!==Dt,nn=Tt||!!qe!=!!Lt,I.direction=qe>Lt?1:-1,I.progress=qe,nn&&!Ln&&(bt=qe&&!Lt?0:qe===1?1:Lt===1?2:3,N&&(gt=!Tt&&F[bt+1]!=="none"&&F[bt+1]||F[bt],ti=i&&(gt==="complete"||gt==="reset"||gt in i))),P&&(Tt||ti)&&(ti||d||!i)&&(Nn(P)?P(I):I.getTrailing(P).forEach(function(ni){return ni.endAnimation()})),N||(X&&!Ln&&!Fu?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",qe,i._tTime/i._tDur):(X.vars.totalProgress=qe,X.invalidate().restart())):i&&i.totalProgress(qe,!!(Ln&&(oe||ie)))),h){if(ie&&_&&(ht.style[_+A.os2]=ye),!O)j(al(Re+le*qe));else if(nn){if(Sn=!ie&&qe>Lt&&Ue+1>Ce&&Ce+1>=ir(D,A),S)if(!ie&&($t||Sn)){var Ht=Tr(h,!0),Kt=Ce-Le;a0(h,xt,Ht.top+(A===en?Kt:0)+cn,Ht.left+(A===en?0:Kt)+cn)}else a0(h,ht);ka($t||Sn?It:B),V&&qe<1&&$t||j(Re+(qe===1&&!Sn?le:0))}}y&&!pe.tween&&!Ln&&!Fu&&L.restart(!0),o&&(Tt||T&&qe&&(qe<1||!vd))&&ml(o.targets).forEach(function(ni){return ni.classList[$t||T?"add":"remove"](o.className)}),a&&!N&&!ie&&a(I),nn&&!Ln?(N&&(ti&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),a&&a(I)),(Tt||!vd)&&(c&&Tt&&Na(I,c),k[bt]&&Na(I,k[bt]),T&&(qe===1?I.kill(!1,1):k[bt]=0),Tt||(bt=qe===1?1:3,k[bt]&&Na(I,k[bt]))),M&&!$t&&Math.abs(I.getVelocity())>(ol(M)?M:2500)&&(il(I.callbackAnimation),X?X.progress(1):il(i,gt==="reverse"?1:!qe,1))):N&&a&&!Ln&&a(I)}if(ae){var rn=m?Ce/m.duration()*(m._caScrollDist||0):Ce;b(rn+(q._isFlipped?1:0)),ae(rn)}me&&me(-Ce/m.duration()*(m._caScrollDist||0))}},I.enable=function(ie,Se){I.enabled||(I.enabled=!0,mn(D,"resize",ll),C||mn(D,"scroll",Oa),H&&mn(r,"refreshInit",H),ie!==!1&&(I.progress=ve=0,Ee=Ve=J=Me()),Se!==!1&&I.refresh())},I.getTween=function(ie){return ie&&pe?pe.tween:X},I.setPositions=function(ie,Se,re,Ce){if(m){var it=m.scrollTrigger,qe=m.duration(),Lt=it.end-it.start;ie=it.start+Lt*ie/qe,Se=it.start+Lt*Se/qe}I.refresh(!1,!1,{start:Kg(ie,re&&!!I._startClamp),end:Kg(Se,re&&!!I._endClamp)},Ce),I.update()},I.adjustPinSpacing=function(ie){if(R&&ie){var Se=R.indexOf(A.d)+1;R[Se]=parseFloat(R[Se])+ie+cn,R[1]=parseFloat(R[1])+ie+cn,ka(R)}},I.disable=function(ie,Se){if(ie!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Se||X&&X.pause(),ee=0,Ie&&(Ie.uncache=1),H&&pn(r,"refreshInit",H),L&&(L.pause(),pe.tween&&pe.tween.kill()&&(pe.tween=0)),!C)){for(var re=et.length;re--;)if(et[re].scroller===D&&et[re]!==I)return;pn(D,"resize",ll),C||pn(D,"scroll",Oa)}},I.kill=function(ie,Se){I.disable(ie,Se),X&&!Se&&X.kill(),l&&delete Rd[l];var re=et.indexOf(I);re>=0&&et.splice(re,1),re===qn&&Zu>0&&qn--,re=0,et.forEach(function(Ce){return Ce.scroller===I.scroller&&(re=1)}),re||Yn||ns||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Se||i.kill()),st&&[st,Je,q,$e].forEach(function(Ce){return Ce.parentNode&&Ce.parentNode.removeChild(Ce)}),pl===I&&(pl=0),h&&(Ie&&(Ie.uncache=1),re=0,et.forEach(function(Ce){return Ce.pin===h&&re++}),re||(Ie.spacer=0)),n.onKill&&n.onKill(I)},et.push(I),I.enable(!1,!1),fe&&fe(I),i&&i.add&&!nt){var se=I.update;I.update=function(){I.update=se,Qe.cache++,Le||Ue||I.refresh()},De.delayedCall(.01,I.update),nt=.01,Le=Ue=0}else I.refresh();h&&h1()},r.register=function(n){return Fa||(De=n||g0(),m0()&&window.document&&r.enable(),Fa=sl),Fa},r.defaults=function(n){if(n)for(var i in n)Vu[i]=n[i];return Vu},r.disable=function(n,i){sl=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),pn(tt,"wheel",Oa),pn(yt,"scroll",Oa),clearInterval(Ou),pn(yt,"touchcancel",nr),pn(xt,"touchstart",nr),zu(pn,yt,"pointerdown,touchstart,mousedown",Qg),zu(pn,yt,"pointerup,touchend,mouseup",jg),Ku.kill(),Bu(pn);for(var s=0;s<Qe.length;s+=3)ku(pn,Qe[s],Qe[s+1]),ku(pn,Qe[s],Qe[s+2])},r.enable=function(){if(tt=window,yt=document,pi=yt.documentElement,xt=yt.body,De){if(ml=De.utils.toArray,cl=De.utils.clamp,Ed=De.core.context||nr,xd=De.core.suppressOverwrites||nr,Ld=tt.history.scrollRestoration||"auto",Cd=tt.pageYOffset||0,De.core.globals("ScrollTrigger",r),xt){sl=1,za=document.createElement("div"),za.style.height="100vh",za.style.position="absolute",E0(),r1(),Yt.register(De),r.isTouch=Yt.isTouch,ts=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wd=Yt.isTouch===1,mn(tt,"wheel",Oa),Id=[tt,yt,pi,xt],De.matchMedia?(r.matchMedia=function(u){var d=De.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},De.addEventListener("matchMediaInit",function(){T0(),Bd()}),De.addEventListener("matchMediaRevert",function(){return b0()}),De.addEventListener("matchMedia",function(){Ls(0,1),Bs("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return Sd(),Sd})):console.warn("Requires GSAP 3.11.0 or later"),Sd(),mn(yt,"scroll",Oa);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,a=De.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Tr(xt),en.m=Math.round(o.top+en.sc())||0,In.m=Math.round(o.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Ou=setInterval(n0,250),De.delayedCall(.5,function(){return Fu=0}),mn(yt,"touchcancel",nr),mn(xt,"touchstart",nr),zu(mn,yt,"pointerdown,touchstart,mousedown",Qg),zu(mn,yt,"pointerup,touchend,mouseup",jg),Td=De.utils.checkPrefix("transform"),Ju.push(Td),Fa=Dn(),Ku=De.delayedCall(.2,Ls).pause(),Ba=[yt,"visibilitychange",function(){var u=tt.innerWidth,d=tt.innerHeight;yt.hidden?(Zg=u,Jg=d):(Zg!==u||Jg!==d)&&ll()},yt,"DOMContentLoaded",Ls,tt,"load",Ls,tt,"resize",ll],Bu(mn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<Qe.length;l+=3)ku(pn,Qe[l],Qe[l+1]),ku(pn,Qe[l],Qe[l+2])}else if(yt){var c=function u(){r.enable(),yt.removeEventListener("DOMContentLoaded",u)};yt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(vd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ou)||(Ou=i)&&setInterval(n0,i),"ignoreMobileResize"in n&&(wd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Bu(pn)||Bu(mn,n.autoRefreshEvents||"none"),f0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Wn(n),a=Qe.indexOf(s),o=Os(s);~a&&Qe.splice(a,o?6:2),i&&(o?Vi.unshift(tt,i,xt,i,pi,i):Vi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(di(n)?Wn(n):n).getBoundingClientRect(),o=a[s?Ds:Ns]*i||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},r.positionInViewport=function(n,i,s){di(n)&&(n=Wn(n));var a=n.getBoundingClientRect(),o=a[s?Ds:Ns],l=i==null?o/2:i in ju?ju[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fs.killAll||[];Fs={},i.forEach(function(s){return s()})}},r})();je.version="3.15.1";je.saveStyles=function(r){return r?ml(r).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),Ed())}}):fi};je.revert=function(r,e){return Bd(!r,e)};je.create=function(r,e){return new je(r,e)};je.refresh=function(r){return r?ll(!0):(Fa||je.register())&&Ls(!0)};je.update=function(r){return++Qe.cache&&wr(r===!0?2:0)};je.clearScrollMemory=w0;je.maxScroll=function(r,e){return ir(r,e?In:en)};je.getScrollFunc=function(r,e){return Mr(Wn(r),e?In:en)};je.getById=function(r){return Rd[r]};je.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!Ri};je.snapDirectional=Fd;je.addEventListener=function(r,e){var t=Fs[r]||(Fs[r]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(r,e){var t=Fs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=De.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Nn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Nn(s)&&(s=s(),mn(je,"refresh",function(){return s=e.batchMax()})),ml(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(je.create(c))}),t};var l0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},bd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===pi&&r(xt,t)},Xu={auto:1,scroll:1},g1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=Dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xu[(l=Ai(s)).overflowY]||Xu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Os(s)&&(Xu[(l=Ai(s)).overflowY]||Xu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},R0=function(e,t,n,i){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&g1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(yt,Yt.eventTypes[0],u0,!1,!0)},onDisable:function(){return pn(yt,Yt.eventTypes[0],u0,!0)}})},_1=/(input|label|select|textarea)/i,c0,u0=function(e){var t=_1.test(e.target.tagName);(t||c0)&&(e._gsapAllow=!0,c0=t)},x1=function(e){Is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Wn(e.target)||pi,u=De.core.globals().ScrollSmoother,d=u&&u.get(),f=ts&&(e.content&&Wn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Mr(c,en),_=Mr(c,In),x=1,p=(Yt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,g=0,v=Nn(i)?function(){return i(o)}:function(){return i||2.8},T,y,S=R0(c,e.type,!0,s),E=function(){return y=!1},m=nr,M=nr,P=function(){l=ir(c,en),M=cl(ts?1:0,l),n&&(m=cl(0,ir(c,In))),T=Us},A=function(){f._gsap.y=al(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var Q=al(o.deltaY/2),G=M(h.v-Q);if(f&&G!==h.v+h.offset){h.offset=G-h.v;var I=al((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",h.cacheID=Qe.cache,wr()}return!0}h.offset&&A(),y=!0},D,z,C,O,k=function(){P(),D.isActive()&&D.vars.scrollY>l&&(h()>l?D.progress(1)&&h(l):D.resetTo("scrollY",l))};return f&&De.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return ts&&F.type==="touchmove"&&N(F)||x>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=x;x=al((tt.visualViewport&&tt.visualViewport.scale||1)/p),D.pause(),F!==x&&bd(c,x>1.01?!0:n?!1:"x"),z=_(),C=h(),P(),T=Us},e.onRelease=e.onGestureStart=function(F,Q){if(h.offset&&A(),!Q)O.restart(!0);else{Qe.cache++;var G=v(),I,H;n&&(I=_(),H=I+G*.05*-F.velocityX/.227,G*=l0(_,I,H,ir(c,In)),D.vars.scrollX=m(H)),I=h(),H=I+G*.05*-F.velocityY/.227,G*=l0(h,I,H,ir(c,en)),D.vars.scrollY=M(H),D.invalidate().duration(G).play(.01),(ts&&D.vars.scrollY>=l||I>=l-1)&&De.to({},{onUpdate:k,duration:G})}a&&a(F)},e.onWheel=function(){D._ts&&D.pause(),Dn()-g>1e3&&(T=0,g=Dn())},e.onChange=function(F,Q,G,I,H){if(Us!==T&&P(),Q&&n&&_(m(I[2]===Q?z+(F.startX-F.x):_()+Q-I[1])),G){h.offset&&A();var he=H[2]===G,we=he?C+F.startY-F.y:h()+G-H[1],J=M(we);he&&we!==J&&(C+=J-we),h(J)}(G||Q)&&wr()},e.onEnable=function(){bd(c,n?!1:"x"),je.addEventListener("refresh",k),mn(tt,"resize",k),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),S.enable()},e.onDisable=function(){bd(c,!0),pn(tt,"resize",k),je.removeEventListener("refresh",k),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new Yt(e),o.iOS=ts,ts&&!h()&&h(1),ts&&De.ticker.add(nr),O=o._dc,D=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:A0(h,h(),function(){return D.pause()})},onUpdate:wr,onComplete:O.vars.onComplete}),o};je.sort=function(r){if(Nn(r))return et.sort(r);var e=tt.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(r){return new Yt(r)};je.normalizeScroll=function(r){if(typeof r>"u")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var e=r instanceof Yt?r:x1(r);return Xn&&Xn.target===e.target&&Xn.kill(),Os(e.target)&&(Xn=e),e};je.core={_getVelocityProp:Uu,_inputObserver:R0,_scrollers:Qe,_proxies:Vi,bridge:{ss:function(){Ri||Bs("scrollStart"),Ri=Dn()},ref:function(){return Ln}}};g0()&&De.registerPlugin(je);function v1(r,e){let t=r.createBuffer(1,Math.ceil(r.sampleRate*e),r.sampleRate),n=t.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return t}function y1(r,e=2048){let t=new Float32Array(e+1),n=Math.tanh(r);for(let i=0;i<=e;i++)t[i]=Math.tanh(r*(2*i/e-1))/n;return t}function S1(r,e,t){let n=Math.ceil(r.sampleRate*e),i=r.createBuffer(2,n,r.sampleRate);for(let s=0;s<2;s++){let a=i.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,t)}return i}function C0(r,e,t=3.4){let n=r.currentTime+.05,i=z=>n+z*t,s=1e-4,a=r.createDynamicsCompressor();a.threshold.value=-22,a.knee.value=8,a.ratio.value=3.5,a.attack.value=.005,a.release.value=.3;let o=r.createDynamicsCompressor();o.threshold.value=-3,o.knee.value=0,o.ratio.value=20,o.attack.value=.001,o.release.value=.1;let l=r.createGain();l.gain.value=1;let c=r.createWaveShaper();c.curve=y1(1.6),c.oversample="2x";let u=r.createGain();u.gain.value=.96,a.connect(l),l.connect(o),o.connect(c),c.connect(u),u.connect(e);let d=r.createConvolver();d.buffer=S1(r,3.2,2.3);let f=r.createGain();f.gain.value=.45,d.connect(f),f.connect(a);let h=(z,C=1,O=.3)=>{if(C){let k=r.createGain();k.gain.value=C,z.connect(k),k.connect(a)}if(O){let k=r.createGain();k.gain.value=O,z.connect(k),k.connect(d)}},_=v1(r,2.5),x=(z,C,O=0)=>{let k=r.createOscillator();return k.type=z,k.frequency.value=C,k.detune.value=O,k},p=[],g=r.createGain();g.gain.value=1,h(g,1,.35);let v=r.createGain();v.gain.setValueAtTime(.04,n),v.gain.exponentialRampToValueAtTime(.12,i(.92));let T=r.createBiquadFilter();T.type="lowpass",T.Q.value=.8,T.frequency.setValueAtTime(360,n),T.frequency.exponentialRampToValueAtTime(2400,i(1));for(let[z,C]of[[73.42,-9],[73.42,9],[110,4]]){let O=x("sawtooth",z,C),k=r.createGain();k.gain.value=.33,O.connect(k),k.connect(T),O.start(n),p.push(O)}let y=x("sine",36.71),S=r.createGain();S.gain.value=.9,y.connect(S),S.connect(v),y.start(n),p.push(y),T.connect(v),v.connect(g);let E=r.createBufferSource();E.buffer=_,E.loop=!0;let m=r.createBiquadFilter();m.type="bandpass",m.Q.value=.9,m.frequency.setValueAtTime(320,n),m.frequency.exponentialRampToValueAtTime(7200,i(1));let M=r.createGain();M.gain.setValueAtTime(.02,n),M.gain.exponentialRampToValueAtTime(.1,i(1)),E.connect(m),m.connect(M),M.connect(g),E.start(n),p.push(E);let P=x("triangle",146.83);P.frequency.setValueAtTime(146.83,n),P.frequency.exponentialRampToValueAtTime(587.33,i(1));let A=r.createGain();A.gain.setValueAtTime(.004,n),A.gain.exponentialRampToValueAtTime(.06,i(.95)),P.connect(A),A.connect(g),P.start(n),p.push(P);let N=[.02,.26,.46,.61,.72,.8,.86,.905,.94,.965,.985];N.forEach((z,C)=>{let O=i(z),k=.22+.33*(C/(N.length-1)),F=x("sine",150);F.frequency.setValueAtTime(150,O),F.frequency.exponentialRampToValueAtTime(44,O+.22);let Q=r.createGain();Q.gain.setValueAtTime(s,O),Q.gain.exponentialRampToValueAtTime(k,O+.006),Q.gain.exponentialRampToValueAtTime(s,O+.45),F.connect(Q),Q.connect(g),F.start(O),F.stop(O+.5);let G=x("triangle",260);G.frequency.setValueAtTime(260,O),G.frequency.exponentialRampToValueAtTime(110,O+.09);let I=r.createGain();I.gain.setValueAtTime(s,O),I.gain.exponentialRampToValueAtTime(k*.55,O+.004),I.gain.exponentialRampToValueAtTime(s,O+.16),G.connect(I),I.connect(g),G.start(O),G.stop(O+.2);let H=r.createBufferSource();H.buffer=_;let he=r.createBiquadFilter();he.type="bandpass",he.frequency.value=2400,he.Q.value=1.4;let we=r.createGain();we.gain.setValueAtTime(s,O),we.gain.exponentialRampToValueAtTime(k*.5,O+.002),we.gain.exponentialRampToValueAtTime(s,O+.035),H.connect(he),he.connect(we),we.connect(g),H.start(O,C*.137%2),H.stop(O+.05)});let D=!1;return{hit(z){if(D)return;D=!0;let C=Math.max(z??r.currentTime+.06,r.currentTime+.03);g.gain.setValueAtTime(1,Math.max(C-.06,r.currentTime)),g.gain.exponentialRampToValueAtTime(s,C-.004);for(let ve of p)ve.stop(C+.1);let O=x("sine",118);O.frequency.setValueAtTime(118,C),O.frequency.exponentialRampToValueAtTime(34,C+.7);let k=r.createGain();k.gain.setValueAtTime(s,C),k.gain.exponentialRampToValueAtTime(1.3,C+.008),k.gain.exponentialRampToValueAtTime(s,C+2.8),O.connect(k),h(k,1,.18),O.start(C),O.stop(C+3);let F=x("triangle",240);F.frequency.setValueAtTime(240,C),F.frequency.exponentialRampToValueAtTime(90,C+.25);let Q=r.createGain();Q.gain.setValueAtTime(s,C),Q.gain.exponentialRampToValueAtTime(1,C+.005),Q.gain.exponentialRampToValueAtTime(s,C+.7),F.connect(Q),h(Q,1,.25),F.start(C),F.stop(C+.7);let G=x("triangle",70);G.frequency.setValueAtTime(70,C),G.frequency.exponentialRampToValueAtTime(38,C+.5);let I=r.createGain();I.gain.setValueAtTime(s,C),I.gain.exponentialRampToValueAtTime(.4,C+.006),I.gain.exponentialRampToValueAtTime(s,C+1.6),G.connect(I),h(I,1,.1),G.start(C),G.stop(C+1.7);let H=r.createBufferSource();H.buffer=_;let he=r.createBiquadFilter();he.type="lowpass",he.frequency.setValueAtTime(3600,C),he.frequency.exponentialRampToValueAtTime(900,C+1.6);let we=r.createGain();we.gain.setValueAtTime(s,C),we.gain.exponentialRampToValueAtTime(.78,C+.004),we.gain.exponentialRampToValueAtTime(s,C+1.9),H.connect(he),he.connect(we),h(we,.8,.9),H.start(C),H.stop(C+2.2);let J=r.createGain();J.gain.setValueAtTime(s,C),J.gain.exponentialRampToValueAtTime(1.5,C+.035),J.gain.setValueAtTime(1.5,C+.5),J.gain.exponentialRampToValueAtTime(s,C+3.9);let oe=r.createBiquadFilter();oe.type="lowpass",oe.Q.value=1.2,oe.frequency.setValueAtTime(320,C),oe.frequency.exponentialRampToValueAtTime(3200,C+.08),oe.frequency.exponentialRampToValueAtTime(650,C+2.6),oe.connect(J),h(J,1,.6);for(let[ve,Me]of[[73.42,.11],[110,.09],[146.83,.08],[220,.065],[293.66,.055],[369.99,.045],[440,.04]])for(let pe of[-7,7]){let Ie=x("sawtooth",ve,pe),Xe=r.createGain();Xe.gain.value=Me,Ie.connect(Xe),Xe.connect(oe),Ie.start(C),Ie.stop(C+4.1)}return[[1174.66,.035],[1760,.028],[2349.32,.02],[2959.96,.012]].forEach(([ve,Me],pe)=>{let Ie=x("sine",ve,pe%2?4:-4),Xe=r.createGain(),Ee=C+.02+pe*.015;Xe.gain.setValueAtTime(s,Ee),Xe.gain.exponentialRampToValueAtTime(Me,Ee+.01),Xe.gain.exponentialRampToValueAtTime(s,C+3.2),Ie.connect(Xe),h(Xe,.6,1),Ie.start(Ee),Ie.stop(C+3.3)}),C},stop(){let z=r.currentTime;if(l.gain.setValueAtTime(l.gain.value,z),l.gain.linearRampToValueAtTime(0,z+.15),!D){D=!0;for(let C of p)C.stop(z+.2)}}}}var M1=[0,125,280,545,680,790,960],b1=293.66,T1=49,Ga=[[2,3,5,3,2,1,2,6,3,5,6,5,3,2,1,2],[5,6,5,3,2,3,5,6,11,6,5,3,5,6,5,6],[6,5,3,2,1,2,3,5,6,11,6,5,3,2,3,5],[3,5,6,5,3,2,1,2,3,3,5,6,5,3,2,6]],Ha=(r,e=0)=>b1*2**((M1[r%10-1]+1200*(e+(r>=10?1:0)))/1200),w1={attack:.004,click:.05,partials:[[1,1,2.6],[2.76,.3,1.1],[5.4,.1,.5],[8.93,.04,.25]]},P0={attack:.006,bend:18,click:.03,partials:[[1,1,1.7],[1,.35,1.7,7],[2.02,.22,.8],[3.05,.07,.4]]},E1={attack:.008,bend:10,partials:[[1,1,3.4],[1,.45,3.4,5],[2.01,.2,1.6],[2.95,.06,.8]]},A1={attack:.015,partials:[[1,1,4.6],[1,.6,4.6,14],[2,.32,2.6],[2.98,.14,1.6],[4.1,.06,.9]]},R1={attack:.03,partials:[[1,1,9],[1,.7,9,40],[2,.5,6.5],[2,.35,6.5,28],[2.93,.26,4.5],[4.12,.15,3],[5.4,.07,2]]},C1={attack:.003,partials:[[1,1,.16],[2.3,.25,.07]]};function P1(r,e){let t=r.createBuffer(1,Math.ceil(r.sampleRate*e),r.sampleRate),n=t.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return t}function I1(r,e,t){let n=Math.ceil(r.sampleRate*e),i=r.createBuffer(2,n,r.sampleRate);for(let s=0;s<2;s++){let a=i.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,t)}return i}function I0(r,e,t=.9){let i=r.createGain();i.gain.value=0;let s=r.createDynamicsCompressor();s.threshold.value=-16,s.ratio.value=3,s.knee.value=10,s.attack.value=.01,s.release.value=.4,i.connect(s),s.connect(e);let a=r.createGain(),o=r.createGain(),l=r.createConvolver(),c=r.createGain();o.gain.value=.8,c.gain.value=.32,l.buffer=I1(r,4.2,2.6),a.connect(o),o.connect(i),a.connect(l),l.connect(c),c.connect(i);let u=P1(r,1);function d(m,M,P,A,N=0){let D=a;if(N&&r.createStereoPanner){let z=r.createStereoPanner();z.pan.value=N,z.connect(a),D=z}for(let[z,C,O,k=0]of P.partials){let F=r.createOscillator(),Q=r.createGain(),G=M*z*2**(k/1200);P.bend?(F.frequency.setValueAtTime(G*2**(P.bend/1200),m),F.frequency.exponentialRampToValueAtTime(G,m+.06)):F.frequency.value=G,Q.gain.setValueAtTime(1e-4,m),Q.gain.exponentialRampToValueAtTime(Math.max(C*A,11e-5),m+P.attack),Q.gain.exponentialRampToValueAtTime(1e-4,m+O),F.connect(Q),Q.connect(D),F.start(m),F.stop(m+O+.05)}if(P.click){let z=r.createBufferSource(),C=r.createBiquadFilter(),O=r.createGain();z.buffer=u,C.type="bandpass",C.frequency.value=3200,C.Q.value=1.2,O.gain.setValueAtTime(P.click*A*4,m),O.gain.exponentialRampToValueAtTime(1e-4,m+.014),z.connect(C),C.connect(O),O.connect(D),z.start(m,Math.random()*.9),z.stop(m+.02)}}let f=!1,h=0,_=15,x=0,p=-1,g=Ga[Ga.length-1],v=!0,T=()=>(Math.random()-.5)*.018;function y(m,M){let P=m%16;P===0&&(p++,g=p<Ga.length?Ga[p]:Ga[Math.floor(Math.random()*Ga.length)],v=p<2||Math.random()<.8);let A=g[P],N=g[(P+1)%16];d(M+T(),Ha(A),w1,.22*(.85+Math.random()*.3),-.12),v&&(d(M+T(),Ha(A,1),P0,.085,.32),d(M+1.25/2+T(),Ha(N,1),P0,.07,.32)),P%4===1&&d(M,Ha(2,-1),C1,.06,.38),(P===7||P===15)&&d(M,Ha(A,1),E1,.1,.16),P===11&&d(M,Ha(A,-1),A1,.2,-.18),P===15&&d(M+.02,T1,R1,.3)}function S(m){for(;x<m;)y(_,x),_++,x+=1.25}function E(){f&&(S(r.currentTime+1.5),h=setTimeout(E,300))}return{get playing(){return f},start(m=r.currentTime+.1,M=3){if(f)return;f=!0;let P=r.currentTime,A=Math.max(m,P+.05);_=15,x=A,i.gain.cancelScheduledValues(P),i.gain.setValueAtTime(i.gain.value,P),i.gain.setValueAtTime(i.gain.value,A),i.gain.linearRampToValueAtTime(t,A+M),E()},stop(m=.8){if(!f)return;f=!1,clearTimeout(h);let M=r.currentTime;i.gain.cancelScheduledValues(M),i.gain.setValueAtTime(i.gain.value,M),i.gain.linearRampToValueAtTime(0,M+m)},fill:S}}dt.registerPlugin(je);var pt=(r,e=document)=>e.querySelector(r),mi=(r,e=document)=>[...e.querySelectorAll(r)],Ot=matchMedia("(prefers-reduced-motion: reduce)").matches,th=matchMedia("(pointer: coarse)").matches,Pi=(r,e,t)=>Math.min(t,Math.max(e,r)),Wa=(r,e,t)=>r+(e-r)*t,Ci=(r,e,t,n)=>Wa(r,e,1-Math.exp(-t*n)),L1=r=>r*r*(3-2*r),nh=r=>new Promise(e=>setTimeout(e,r)),Zt={x:innerWidth*.6,y:innerHeight*.35,nx:.2,ny:-.3},Er={y:scrollY,v:0};addEventListener("pointermove",r=>{Zt.x=r.clientX,Zt.y=r.clientY,Zt.nx=r.clientX/innerWidth*2-1,Zt.ny=r.clientY/innerHeight*2-1},{passive:!0});{let r=scrollY,e=performance.now();addEventListener("scroll",()=>{let t=performance.now();Er.v=(scrollY-r)/Math.max(t-e,1)*1e3,Er.y=scrollY,r=scrollY,e=t},{passive:!0})}var D1=`
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
}`;function N1(){let r=pt("#scene"),e=matchMedia("(max-width: 900px)").matches||th,t=new lu({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),n=Math.min(devicePixelRatio||1,e?1.5:1.25);t.setPixelRatio(n),t.toneMapping=Eo,t.toneMappingExposure=1.05,t.setClearColor(394758,1),t.transmissionResolutionScale=e?.6:.85;let i=new hs,s=new En(35,1,.1,60);s.position.set(0,0,9);let a=Math.tan(af.degToRad(s.fov/2)),o=new xa(t);i.environment=o.fromScene(new hu,.04).texture,i.environmentIntensity=.8,o.dispose();let l={uTime:{value:0},uScroll:{value:0},uAspect:{value:1},uReady:{value:0},uPx:{value:.001},uLight:{value:new Ze(.3,.15)},uOrn:{value:null},uGround:{value:null},uOrnH:{value:.96},uOrnY:{value:.02},uOrnX:{value:new Ze(.15,-.25)},uGap:{value:1.65},uTile:{value:.1},uInk:{value:.4}},c=new Si({uniforms:l,depthWrite:!1,toneMapped:!1,defines:{RELIEF:1},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
      varying vec2 vUv;
      uniform float uTime, uScroll, uAspect, uReady, uPx, uOrnH, uOrnY, uGap, uTile, uInk;
      uniform vec2 uLight, uOrnX;
      uniform sampler2D uOrn, uGround;
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      // The Garuda ornament repeats down the page, alternating sides. Gradients come from the
      // continuous cloth position, so mip levels stay clean across ornament edges; blur widens them.
      vec4 garuda(vec2 P, vec2 dx, vec2 dy, float blur){
        float k = max(floor((uOrnY - P.y) / uGap + 0.5), 0.0);
        vec2 sz = vec2(uOrnH * 1.4, uOrnH);
        vec2 uv = (P - vec2(mod(k, 2.0) < 0.5 ? uOrnX.x : uOrnX.y, uOrnY - k * uGap)) / sz + 0.5;
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        vec4 t = textureGrad(uOrn, clamp(uv, 0.0, 1.0), dx / sz * blur, dy / sz * blur) * inside;
        return vec4(t.r * t.a, 0.0, 0.0, t.a);
      }
      void main(){
        vec2 view = (vUv - 0.5) * vec2(uAspect, 1.0) * 1.3;   // viewport heights, origin at the centre
        vec2 P = view - vec2(0.0, uScroll);                  // position on the cloth
        vec2 dx = dFdx(P), dy = dFdy(P);
        vec4 o = garuda(P, dx, dy, 1.0);
        float g = texture2D(uGround, P / uTile).r * (1.0 - o.a);
        vec3 N = vec3(0.0, 0.0, 1.0);
        #if RELIEF
          float e = uPx * 1.8;
          float hx = garuda(P - vec2(e, 0.0), dx, dy, 2.6).r - garuda(P + vec2(e, 0.0), dx, dy, 2.6).r;
          float hy = garuda(P - vec2(0.0, e), dx, dy, 2.6).r - garuda(P + vec2(0.0, e), dx, dy, 2.6).r;
          N = normalize(vec3(hx * 2.2, hy * 2.2, 1.0));
        #endif
        vec3 Lv = vec3(uLight - view, 0.42), L = normalize(Lv);
        float att = 1.0 / (1.0 + 3.0 * dot(Lv.xy, Lv.xy));
        float diff = max(dot(N, L), 0.0);
        float spec = pow(max(dot(N, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 40.0);
        float ink = (o.r * uInk + g * 0.11) * uReady;
        vec3 col = vec3(0.016) + vec3(0.97, 0.96, 0.93) * ink * (0.5 + 1.15 * diff * att);
        col += vec3(spec * att * o.r * 0.55 * uReady) + vec3(0.03) * att;
        vec2 vn = view / vec2(0.5 * uAspect, 0.5);
        col *= 1.0 - 0.2 * dot(vn, vn);
        col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) * 0.008;
        gl_FragColor = vec4(pow(max(col, 0.0), vec3(2.2)), 1.0);
        #include <colorspace_fragment>
      }`}),u=new Pt(new Fr(1,1),c);u.position.z=-9,u.renderOrder=-10,i.add(u);let d=async(j,Re,le)=>{let ye=(await(await fetch(j)).text()).replace(/width="[\d.]+" height="[\d.]+"/,`width="${Re}" height="${le}"`),R=new Image;R.src=URL.createObjectURL(new Blob([ye],{type:"image/svg+xml"}));try{await R.decode()}finally{setTimeout(()=>URL.revokeObjectURL(R.src),0)}let b=document.createElement("canvas");return b.width=Re,b.height=le,b.getContext("2d").drawImage(R,0,0,Re,le),b},f=(async()=>{let j=e?1536:2048,[Re,le]=await Promise.all([d(r.dataset.garuda,j,Math.round(j/1.4)),d(r.dataset.ground,256,256)]),ye=new fs(Re),R=new fs(le);for(let b of[ye,R])b.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),b.minFilter=Oi;R.wrapS=R.wrapT=na,l.uOrn.value=ye,l.uGround.value=R,dt.to(l.uReady,{value:1,duration:1.2,ease:"power2.out"})})().catch(j=>console.warn("The batik could not be drawn, the cloth stays plain.",j)),h=pt("#hero-name"),_=document.createElement("canvas"),x=new fs(_);x.colorSpace=On,x.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());let p=new He("#060606"),g=new He("#ffffff"),v=new la({map:x,alphaTest:.5,alphaToCoverage:!0,toneMapped:!1,color:p.clone()}),T=new Pt(new Fr(1,1),v),y=-2.2;T.position.z=y,i.add(T);function S(){let j=h.getBoundingClientRect();if(j.width<2)return;let Re=Math.min(devicePixelRatio||1,2),le=getComputedStyle(h);_.width=Math.ceil(j.width*Re),_.height=Math.ceil(j.height*Re);let ye=_.getContext("2d");ye.setTransform(Re,0,0,Re,0,0),ye.clearRect(0,0,j.width,j.height),ye.font=`${le.fontWeight} ${le.fontSize} ${le.fontFamily}`,"letterSpacing"in ye&&(ye.letterSpacing=le.letterSpacing);let R=ye.createLinearGradient(0,0,0,j.height);R.addColorStop(0,"#ffffff"),R.addColorStop(1,"#d2cec7"),ye.fillStyle=R,ye.textBaseline="alphabetic";for(let b of mi(".line",h)){let V=b.getBoundingClientRect(),ae=ye.measureText(b.textContent),ne=ae.fontBoundingBoxAscent??ae.actualBoundingBoxAscent,ue=ae.fontBoundingBoxDescent??ae.actualBoundingBoxDescent;ye.fillText(b.textContent,V.left-j.left,V.top-j.top+(V.height-(ne+ue))/2+ne)}x.needsUpdate=!0}let E={uTime:{value:0},uAmp:{value:.2},uFreq:{value:.95},uPointer:{value:new Z(0,0,1)},uBulge:{value:0}},m=new _o({color:16777215,metalness:0,roughness:.08,transmission:1,ior:1.45,thickness:2,clearcoat:1,clearcoatRoughness:.06,dispersion:.25,attenuationColor:new He("#ffffff"),attenuationDistance:16,envMapIntensity:1.5,specularIntensity:1});m.onBeforeCompile=j=>{Object.assign(j.uniforms,E),j.vertexShader=j.vertexShader.replace("#include <common>",`#include <common>
        ${D1}
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
        #endif`).replace("#include <begin_vertex>","vec3 transformed=lq0;")},m.customProgramCacheKey=()=>"liquid-glass-v1";let M=e?20:40,P=new Pt(new ds(1,M),m);i.add(P);let A=new ds(1,10),N=[0,1,2].map(j=>{let Re=new Pt(A,m);return Re.userData={r:1.55+j*.32,sp:.22+j*.07,ph:j*2.1,s:.13-j*.025,tilt:.5+j*.4},i.add(Re),Re});i.add(new To(16777215,.3));let D=new bo(16777215,2.4);D.position.set(-3,4,5),i.add(D);let z=new Vr(16777215,30,30);z.position.set(4,-2,3),i.add(z);let C=new Vr(16777215,18,30);C.position.set(-2,1,4),i.add(C);let O=e?140:280,k=new Float32Array(O*3);for(let j=0;j<O;j++)k[j*3]=(Math.random()-.5)*20,k[j*3+1]=(Math.random()-.5)*13,k[j*3+2]=-7+Math.random()*9;let F=new yi;F.setAttribute("position",new si(k,3));let Q=new fo(F,new ca({color:16777215,size:.03,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0}));i.add(Q);let G=[["#top",{x:.06,y:.13,s:1,a:.2},{x:.4,y:.33,s:.78,a:.19}],["#about",{x:-.37,y:-.2,s:.62,a:.2},{x:.3,y:-.3,s:.7,a:.2}],["#research",{x:.41,y:.27,s:.5,a:.24},{x:-.3,y:.34,s:.6,a:.22}],["#experience",{x:-.4,y:.04,s:.6,a:.2},{x:.32,y:-.05,s:.62,a:.2}],["#credentials",{x:.4,y:-.22,s:.52,a:.22},{x:-.3,y:.3,s:.6,a:.22}],["#toolkit",{x:-.3,y:.25,s:.5,a:.2},{x:.3,y:.2,s:.6,a:.2}],["#contact",{x:.24,y:.04,s:1.12,a:.2},{x:.12,y:.12,s:1.05,a:.2}]],I=[],H={x:.06,y:.13,s:1,a:.2,intro:Ot?1:0,name:Ot?1:0,bulge:0,rx:0,ry:0,cx:0,cy:0,lx:.3,ly:.15},he=1,we=1,J=!1;function oe(){he=r.clientWidth,we=r.clientHeight,J=he/we<.85,t.setSize(he,we,!1),s.aspect=he/we,s.updateProjectionMatrix();let j=2*(s.position.z-u.position.z)*a;u.scale.set(j*s.aspect*1.3,j*1.3,1),l.uAspect.value=s.aspect,l.uPx.value=1/Math.max(we,1);let Re=s.aspect,le=Re<.9;l.uOrnH.value=Math.min(.96,.98*Re/1.4),l.uOrnY.value=le?.28:.02,l.uInk.value=le?.32:.4,l.uOrnX.value.set(le?0:.13*Re,le?0:-.2*Re),l.uGap.value=le?1.05:1.65,l.uTile.value=le?.07:.1,I=G.map(([ye,R,b],V)=>{let ae=pt(ye);return{at:V===0?0:ae.offsetTop+ae.offsetHeight/2-innerHeight/2,...J||he<900?b:R}}).sort((ye,R)=>ye.at-R.at),S()}function ve(j){if(j<=I[0].at)return I[0];for(let Re=0;Re<I.length-1;Re++){let le=I[Re],ye=I[Re+1];if(j<=ye.at){let R=L1(Pi((j-le.at)/Math.max(ye.at-le.at,1),0,1));return{x:Wa(le.x,ye.x,R),y:Wa(le.y,ye.y,R),s:Wa(le.s,ye.s,R),a:Wa(le.a,ye.a,R)}}}return I[I.length-1]}let Me=new Z,pe=new vi,Ie=.46,Xe=performance.now(),Ee=!0,Ve=!1,Le=0,Ue=0,st=0,Je=0,q=null,$e=0,Gt=[.024,.034,.05],vt=[14,20,30],nt=new Uint8Array(4),Rt=()=>{document.documentElement.dataset.quality=String(Je)};Rt();function It(){Je++,Je===1?(n=Math.max(1,n*.72),t.setPixelRatio(n),t.transmissionResolutionScale=.5,t.setSize(he,we,!1),S()):Je===2?(P.geometry.dispose(),P.geometry=new ds(1,14),N.forEach(j=>{j.visible=!1}),c.defines.RELIEF=0,c.needsUpdate=!0):(m.transmission=0,m.transparent=!0,m.opacity=.42,m.dispersion=0,m.needsUpdate=!0,n=1,t.setPixelRatio(1),t.setSize(he,we,!1),S()),Rt()}function B(j){if(!Ee)return;requestAnimationFrame(B);let Re=Math.max(0,(j-Xe)/1e3);Xe=j;let le=Math.min(Re,.05);Le+=le*(Ot?.15:1),Er.v*=Math.exp(-5*le);let ye=2*s.position.z*a,R=ye*s.aspect,b=ve(Er.y),V=Ot?30:3.2;H.x=Ci(H.x,b.x+Zt.nx*.03,V,le),H.y=Ci(H.y,b.y-Zt.ny*.03,V,le),H.s=Ci(H.s,b.s,V,le),H.a=Ci(H.a,b.a+Pi(Math.abs(Er.v)*7e-5,0,.12),4,le);let ae=Math.min(.21*ye,.3*R)*H.s*H.intro;P.position.set(H.x*R,H.y*ye,0);let ne=Math.max(ae,1e-4);P.scale.set(ne,ne,ne*Ie),H.rx=Ci(H.rx,Zt.ny*.22,3,le),H.ry=Ci(H.ry,Zt.nx*.3,3,le),P.rotation.set(H.rx,H.ry,Math.sin(Le*.1)*.25);let ue=Zt.nx*R*.5,ge=-Zt.ny*ye*.5,X=Math.hypot(ue-P.position.x,ge-P.position.y);H.bulge=Ci(H.bulge,X<ae*1.9&&!th?.2:0,5,le),Me.set(ue-P.position.x,ge-P.position.y,ae*1.1).normalize().applyQuaternion(pe.copy(P.quaternion).invert()),Me.z/=Ie,Me.normalize(),E.uPointer.value.copy(Me),E.uBulge.value=H.bulge,E.uAmp.value=H.a,E.uTime.value=Le,E.uFreq.value=.9+Pi(Er.y/Math.max(document.documentElement.scrollHeight-innerHeight,1),0,1)*.35;for(let ee of N){let $=ee.userData,me=Le*$.sp+$.ph;ee.position.set(P.position.x+Math.cos(me)*$.r*ae,P.position.y+Math.sin(me*1.3)*$.r*ae*.6*Math.cos($.tilt),Math.sin(me)*$.r*ae*.7),ee.scale.setScalar(Math.max($.s*(ae/1.19+.35)*H.intro,1e-4))}let te=h.getBoundingClientRect();if(T.visible=te.bottom>-40&&te.top<we+40,T.visible){let ee=2*(s.position.z-y)*a,$=ee*s.aspect;T.scale.set(te.width/he*$,te.height/we*ee,1),T.position.x=((te.left+te.width/2)/he-.5)*$,T.position.y=-((te.top+te.height/2)/we-.5)*ee,v.color.copy(p).lerp(g,H.name)}H.cx=Ci(H.cx,Zt.nx*.22,2.5,le),H.cy=Ci(H.cy,-Zt.ny*.16,2.5,le),s.position.x=Ot?0:H.cx,s.position.y=Ot?0:H.cy,s.lookAt(0,0,0),C.position.set(ue*.8,ge*.8,4),Q.rotation.y=Le*.01,Q.position.y=Er.y/Math.max(innerHeight,1)*.35,l.uTime.value=Le,l.uScroll.value=Er.y/Math.max(innerHeight,1)*.45;let de=th?Math.sin(Le*.13)*.32*s.aspect:Zt.nx*.5*s.aspect,L=th?.1+Math.cos(Le*.11)*.24:-Zt.ny*.5;if(H.lx=Ci(H.lx,de,4,le),H.ly=Ci(H.ly,L,4,le),l.uLight.value.set(H.lx,H.ly),t.render(i,s),H.intro>.6&&Je<3){if(q)ct(j);else if(j>$e&&(st+=Math.min(Re,.25),Ue++,Ue>=30)){let ee=st/Ue;Ue=0,st=0,ee>Gt[Je]&&ht(j)}}}function ht(j){let Re=t.getContext();q={fence:Re.fenceSync(Re.SYNC_GPU_COMMANDS_COMPLETE,0),since:j,samples:[]},Re.flush()}function ct(j){let Re=t.getContext();if(q.fence){if(Re.getSyncParameter(q.fence,Re.SYNC_STATUS)!==Re.SIGNALED){j-q.since>1e3&&(Re.deleteSync(q.fence),q=null,It());return}Re.deleteSync(q.fence),q.fence=null}let le=performance.now();if(Re.readPixels(0,0,1,1,Re.RGBA,Re.UNSIGNED_BYTE,nt),q.samples.push(performance.now()-le),q.samples.length===3){let ye=q.samples.sort((R,b)=>R-b)[1]>vt[Je];q=null,ye?It():$e=j+15e3}}oe();let ze=0;return addEventListener("resize",()=>{clearTimeout(ze),ze=setTimeout(oe,120)}),new ResizeObserver(()=>{clearTimeout(ze),ze=setTimeout(oe,120)}).observe(pt("main")),document.fonts.ready.then(S),document.addEventListener("visibilitychange",()=>{let j=!document.hidden;j&&!Ee&&!Ve?(Ee=!0,Xe=performance.now(),requestAnimationFrame(B)):j||(Ee=!1)}),r.addEventListener("webglcontextlost",j=>{j.preventDefault(),Ee=!1,document.documentElement.classList.replace("webgl","no-webgl")}),requestAnimationFrame(B),{batik:f,firstFrame:()=>new Promise(j=>requestAnimationFrame(()=>requestAnimationFrame(j))),hold(){Ve=!0,Ee=!1},go(){Ve=!1,!Ee&&!document.hidden&&(Ee=!0,Xe=performance.now(),requestAnimationFrame(B))},intro(){Ot||(dt.to(H,{intro:1,duration:1.9,ease:"elastic.out(1, 0.55)",delay:.1}),dt.to(H,{name:1,duration:1.3,ease:"power2.out",delay:.2}))}}}function U1(){let r=new Set,e=new IntersectionObserver(s=>s.forEach(a=>a.isIntersecting?r.add(a.target):r.delete(a.target)),{rootMargin:"80px"});mi(".glass").forEach(s=>e.observe(s));let t=0,n=()=>{t=0;for(let s of r){let a=s.getBoundingClientRect(),o=Math.max(a.left-Zt.x,0,Zt.x-a.right),l=Math.max(a.top-Zt.y,0,Zt.y-a.bottom);s.style.setProperty("--mx",`${(Zt.x-a.left).toFixed(1)}px`),s.style.setProperty("--my",`${(Zt.y-a.top).toFixed(1)}px`),s.style.setProperty("--rim",Pi(1-Math.hypot(o,l)/150,0,1).toFixed(3))}},i=()=>{t||(t=requestAnimationFrame(n))};addEventListener("pointermove",i,{passive:!0}),addEventListener("scroll",i,{passive:!0})}function O1(){if(Ot)return;let r=170,e=13,t=new Map,n=!1,i=0,s=o=>{let l=Math.min((o-i)/1e3,.032);i=o;let c=!1;for(let[u,d]of t){let f=0;for(let h of["rx","ry","sc"]){let _=h==="sc"?100:1;d.v[h]+=((d.t[h]-d.p[h])*r-d.v[h]*e)*l,d.p[h]+=d.v[h]*l,f+=(Math.abs(d.t[h]-d.p[h])+Math.abs(d.v[h])*.05)*_}u.style.setProperty("--rx",`${d.p.rx.toFixed(3)}deg`),u.style.setProperty("--ry",`${d.p.ry.toFixed(3)}deg`),u.style.setProperty("--sc",d.p.sc.toFixed(4)),f>.02?c=!0:t.delete(u)}c?requestAnimationFrame(s):n=!1},a=(o,l)=>{t.set(o,l),n||(n=!0,i=performance.now(),requestAnimationFrame(s))};mi("[data-spring]").forEach(o=>{let l=o.matches(".card, .tl-item, .fact, .cert"),c=l?4.5:0,u=l?1.014:1.045,d={p:{rx:0,ry:0,sc:1},v:{rx:0,ry:0,sc:0},t:{rx:0,ry:0,sc:1},down:!1};o.addEventListener("pointermove",f=>{if(f.pointerType==="touch")return;let h=o.getBoundingClientRect();d.t.ry=((f.clientX-h.left)/h.width-.5)*c*2,d.t.rx=-((f.clientY-h.top)/h.height-.5)*c*2,d.t.sc=d.down?.97:u,a(o,d)}),o.addEventListener("pointerleave",()=>{d.t.rx=0,d.t.ry=0,d.t.sc=1,d.down=!1,a(o,d)}),o.addEventListener("pointerdown",()=>{d.down=!0,d.t.sc=.965,a(o,d)}),o.addEventListener("pointerup",f=>{d.down=!1,d.t.sc=f.pointerType==="touch"?1:u,a(o,d)}),o.addEventListener("pointercancel",()=>{d.down=!1,d.t.sc=1,d.t.rx=0,d.t.ry=0,a(o,d)})})}var Vt=(()=>{let r=null,e=null,t=!0,n=!1,i=null,s=!1;try{t=localStorage.getItem("nap-sound")!=="off"}catch{}let a=()=>{try{localStorage.setItem("nap-sound",t?"on":"off")}catch{}},o=()=>{if(!r){let f=window.AudioContext||window.webkitAudioContext;if(!f)return null;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}r=new f,e=r.createGain(),e.gain.value=.5,e.connect(r.createDynamicsCompressor()).connect(r.destination);let h=r.createBuffer(1,1,r.sampleRate),_=r.createBufferSource();_.buffer=h,_.connect(r.destination),_.start(0)}return r.state!=="running"&&r.resume().catch(()=>{}),r},l=()=>{n=!0,t&&o()};for(let f of["pointerdown","touchend","click","keydown"])addEventListener(f,l,{passive:!0});let c=(f,h,_,x,p="sine",g=0)=>{if(!t||!n)return;let v=o();if(!v)return;let T=v.currentTime+g,y=v.createOscillator(),S=v.createGain();y.type=p,y.frequency.setValueAtTime(f,T),y.frequency.exponentialRampToValueAtTime(h,T+_),S.gain.setValueAtTime(1e-4,T),S.gain.exponentialRampToValueAtTime(x,T+.012),S.gain.exponentialRampToValueAtTime(1e-4,T+_),y.connect(S).connect(e),y.start(T),y.stop(T+_+.05)},u=()=>{if(!i){let f=o();f&&(i=I0(f,f.destination))}return i};document.addEventListener("visibilitychange",()=>{i&&(document.hidden?i.stop(.3):s&&t&&i.start(r.currentTime+.25,2))});let d={get on(){return t},music(f,h){if(s=f,f&&t&&!document.hidden){let _=u();_&&_.start(h??r.currentTime+.3,h?3:2.5)}else i&&i.stop(.7)},get live(){return t&&n},enable(){return t=!0,n=!0,a(),o()},mute(){t=!1,a()},context(){return t?o():null},toggle(){return t=!t,a(),t&&(n=!0,d.pop()),d.music(t),t},bubble(f=1,h=.3,_=0){c(420*f,980*f,.13,h,"sine",_)},pop(){c(760,1500,.07,.28),c(380,620,.09,.11)},drop(){c(880,360,.17,.24)},lift(){c(300,540,.1,.15,"triangle")},ting(){c(1568,1560,.6,.11),c(2349,2340,.45,.06,"sine",.01),c(3136,3120,.3,.03,"sine",.02)},bubbles(f=5){for(let h=0;h<f;h++)d.bubble(.8+Math.random()*1.3,.05+Math.random()*.07,h*.075+Math.random()*.05)},open(){d.bubble(.75,.28),d.ting()}};return d})(),F1=(()=>{let r=16,e=performance.now();return dt.ticker.add(()=>{let t=performance.now();r+=(Math.min(t-e,2e3)-r)*.3,e=t}),()=>r})();function L0(r,{items:e,onPick:t}){let n=pt(".liquid-track",r),i=pt(".lens",r),s={x:0,y:0,w:0,h:0,sx:1,sy:1,o:0,lift:0},a=new Map,o=null,l=null,c=!1,u=S=>({x:S.offsetLeft,y:S.offsetTop,w:S.offsetWidth,h:S.offsetHeight}),d=()=>{let S=n.offsetLeft-n.scrollLeft+s.x,E=n.offsetTop+s.y,m=Pi(s.lift,0,1);i.style.width=`${s.w.toFixed(2)}px`,i.style.height=`${s.h.toFixed(2)}px`,i.style.opacity=Pi(s.o,0,1).toFixed(3),i.style.transform=`translate3d(${S.toFixed(2)}px, ${E.toFixed(2)}px, 0) scale(${s.sx.toFixed(4)}, ${s.sy.toFixed(4)})`,i.style.setProperty("--lift",m.toFixed(3));let M=s.w*s.sx/2,P=s.x+s.w/2;for(let A of e){let N=A.offsetLeft,D=A.offsetWidth||1,z=Math.max(0,Math.min(P+M,N+D)-Math.max(P-M,N))/D,C=1+.13*m*z*s.o;Math.abs((a.get(A)||1)-C)>8e-4&&(A.style.transform=C>1.0008?`scale(${C.toFixed(4)})`:"",a.set(A,C))}},f=(S,E)=>{if(o=S,dt.killTweensOf(s),!S){dt.to(s,{o:0,lift:0,duration:.25,onUpdate:d});return}let m=u(S);if(E||Ot||F1()>120){Object.assign(s,m,{sx:1,sy:1,o:1,lift:0}),d();return}if(s.o<.05){Object.assign(s,m,{sx:.6,sy:.6,lift:0}),dt.to(s,{sx:1,sy:1,o:1,duration:.75,ease:"elastic.out(1, 0.5)",onUpdate:d});return}dt.timeline({onUpdate:d}).to(s,{sy:1.2,sx:1.08,lift:.85,duration:.15,ease:"power2.out"}).to(s,{x:m.x,y:m.y,w:m.w,h:m.h,o:1,duration:.5,ease:"power3.inOut"},.04).to(s,{sx:1.22,duration:.2,ease:"sine.out"},.1).to(s,{sx:1,sy:1,lift:0,duration:.85,ease:"elastic.out(1, 0.45)"},.48)},h=S=>S-n.getBoundingClientRect().left+n.scrollLeft,_=S=>S.offsetLeft+S.offsetWidth/2,x=S=>e.reduce((E,m)=>{let M=Math.abs(_(m)-S);return!E||M<E.d?{el:m,d:M}:E},null).el,p=S=>e.forEach(E=>E.classList.toggle("under",E===S)),g=()=>n.scrollWidth<=n.clientWidth+1,v=S=>{p(null),Vt.pop(),t(S),f(S)};r.addEventListener("dragstart",S=>S.preventDefault()),r.addEventListener("pointerdown",S=>{S.button||Ot||!S.target.closest(".liquid-track")||S.pointerType==="touch"&&!g()||(l={id:S.pointerId,x0:S.clientX,last:S.clientX,moved:!1,under:null})}),addEventListener("pointermove",S=>{if(!l||S.pointerId!==l.id)return;if(!l.moved){if(Math.abs(S.clientX-l.x0)<7)return;l.moved=!0,Vt.lift(),dt.killTweensOf(s),s.o<.05&&Object.assign(s,u(x(h(S.clientX)))),dt.to(s,{o:1,sy:1.24,lift:1,duration:.3,ease:"back.out(2.2)",onUpdate:d})}let E=Pi(h(S.clientX),_(e[0]),_(e[e.length-1])),m=x(E);m!==l.under&&(l.under=m,p(m),dt.to(s,{w:m.offsetWidth,h:m.offsetHeight,y:m.offsetTop,duration:.25,ease:"power2.out",overwrite:"auto",onUpdate:d}),Vt.live&&Vt.bubble(1.5,.06)),s.sx=1.1+Pi(Math.abs(S.clientX-l.last)*.012,0,.24),l.last=S.clientX,s.x=E-s.w/2,d(),dt.to(s,{sx:1.1,duration:.35,ease:"power2.out",overwrite:"auto",onUpdate:d})},{passive:!0});let T=S=>{if(!l||S.pointerId!==l.id)return;let E=l;l=null,E.moved&&(c=!0,setTimeout(()=>{c=!1},0),v(E.under||x(h(S.clientX))))};addEventListener("pointerup",T),addEventListener("pointercancel",T),r.addEventListener("click",S=>{c&&(S.preventDefault(),S.stopPropagation())},!0);let y=()=>{let S=g();n.classList.toggle("is-fit",S),n.style.touchAction=S?"pan-y":"pan-x pan-y",o&&!l&&f(o,!0)};return n.addEventListener("scroll",d,{passive:!0}),addEventListener("resize",y),document.fonts.ready.then(y),window.ResizeObserver&&new ResizeObserver(y).observe(n),y(),{moveTo:f,pick:v,reveal(S){g()||n.scrollTo({left:S.offsetLeft-n.clientWidth/2+S.offsetWidth/2,behavior:Ot?"auto":"smooth"})}}}function B1(){let r=pt("#nav"),e=mi(".liquid-track a",r),t=new Map(e.map(g=>[g.getAttribute("href").slice(1),g])),n={toolkit:"credentials"},i=mi("main section[id]"),s=null,a=null,o=0,l=0;function c(g){s=g,e.forEach(v=>g&&v===t.get(g)?v.setAttribute("aria-current","true"):v.removeAttribute("aria-current"))}let u=()=>{let g=innerHeight*.45,v=null;for(let T of i)T.getBoundingClientRect().top<=g&&(v=T.id);return innerHeight+scrollY>=document.documentElement.scrollHeight-4&&(v=i[i.length-1].id),!v||v==="top"?null:n[v]||v},d=L0(r,{items:e,onPick:g=>{f(g),pt(g.getAttribute("href")).scrollIntoView({behavior:Ot?"auto":"smooth"})}});function f(g){let v=g.getAttribute("href").slice(1);a=v,o=performance.now()+2500,c(v)}let h=()=>{l=0;let g=u();if(a)if(g===a||performance.now()>o)a=null;else return;if(g===s)return;c(g);let v=g&&t.get(g);d.moveTo(v||null),v&&d.reveal(v)},_=()=>{l||(l=requestAnimationFrame(h))};addEventListener("scroll",_,{passive:!0}),addEventListener("resize",_),e.forEach(g=>g.addEventListener("click",()=>{Vt.pop(),f(g),d.moveTo(g)})),h();let x=pt("#sound"),p=()=>{x.setAttribute("aria-pressed",String(Vt.on)),x.title=Vt.on?"Sound on":"Sound off"};x.addEventListener("click",()=>{Vt.toggle(),p()}),p()}function z1(){mi(".tabs").forEach(r=>{let e=mi(".tab",r),t=(s,a)=>{e.forEach(o=>{let l=o===s;o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1;let c=document.getElementById(o.getAttribute("aria-controls"));c.hidden=!l,l&&!Ot&&dt.fromTo(mi("[data-spring], [data-tabitem]",c),{opacity:0,"--ty":"30px"},{opacity:1,"--ty":"0px",duration:.75,ease:"back.out(1.7)",stagger:.06,overwrite:!0})}),a&&s.focus(),je.refresh()},n=L0(r,{items:e,onPick:s=>t(s)});e.forEach((s,a)=>{s.addEventListener("click",()=>{s.getAttribute("aria-selected")!=="true"&&(Vt.pop(),t(s),n.moveTo(s),n.reveal(s))}),s.addEventListener("keydown",o=>{let l=o.key==="ArrowRight"?1:o.key==="ArrowLeft"?-1:0;if(l){o.preventDefault();let c=e[(a+l+e.length)%e.length];Vt.pop(),t(c,!0),n.moveTo(c),n.reveal(c)}})});let i=()=>n.moveTo(e.find(s=>s.getAttribute("aria-selected")==="true"),!0);i(),document.fonts.ready.then(i)})}function k1(){let r=new Set(["research","credentials"]),e=new Map,t=new IntersectionObserver(n=>n.forEach(i=>{if(!i.isIntersecting||!Vt.live)return;let s=performance.now();s-(e.get(i.target.id)||-1e9)<9e3||(e.set(i.target.id,s),Vt.bubbles(r.has(i.target.id)?6:3))}),{rootMargin:"-35% 0px -45% 0px"});mi("main section[id]:not(#top)").forEach(n=>t.observe(n))}function V1(){let r=pt("#sheet"),e=pt("#sheet-body"),t=pt("#lightbox"),n=null,i=a=>{n=document.activeElement,a.showModal(),a===r?Vt.open():Vt.ting(),Ot||dt.fromTo(a,{opacity:0,scale:.9,y:40},{opacity:1,scale:1,y:0,duration:.85,ease:"elastic.out(1, 0.72)",overwrite:!0})},s=a=>{Vt.drop();let o=()=>{a.close(),dt.set(a,{clearProps:"opacity,transform"}),n&&n.focus&&n.focus({preventScroll:!0})};Ot?o():dt.to(a,{opacity:0,scale:.96,y:14,duration:.2,ease:"power2.in",overwrite:!0,onComplete:o})};mi(".card").forEach(a=>a.addEventListener("click",()=>{let o=document.getElementById(`tpl-${a.dataset.card}`);if(!o)return;e.replaceChildren(o.content.cloneNode(!0));let l=pt(".sheet-title",e);l&&(l.id="sheet-heading"),i(r),e.scrollTop=0})),mi(".cert").forEach(a=>a.addEventListener("click",()=>{let o=pt("#lb-img");o.src=a.dataset.zoom,o.width=+a.dataset.w,o.height=+a.dataset.h,o.alt=`Certificate: ${a.dataset.title}`,pt("#lb-title").textContent=a.dataset.title,pt("#lb-meta").textContent=a.dataset.meta,i(t)}));for(let a of[r,t])a.addEventListener("click",o=>{(o.target===a||o.target.closest("[data-close]"))&&s(a)}),a.addEventListener("cancel",o=>{o.preventDefault(),s(a)})}function G1(){let r=pt("#lanyard"),e=pt(".lanyard-swing",r),t=pt(".idcard",r),n={a:0,w:0,drag:!1,ry:0,on:!0};if(Ot)return{drop(){}};let i=()=>{let c=r.getBoundingClientRect();return{x:c.left+c.width/2,y:c.top}},s=null,a=performance.now();t.addEventListener("pointerdown",c=>{c.pointerType==="touch"||c.target.closest("a")||(n.drag=!0,t.setPointerCapture(c.pointerId))}),t.addEventListener("pointermove",c=>{if(!n.drag)return;let u=i(),d=Pi(-Math.atan2(c.clientX-u.x,Math.max(c.clientY-u.y,60))*180/Math.PI,-48,48);n.w=(d-n.a)*10,n.a=Wa(n.a,d,.5)});let o=()=>{n.drag&&Vt.bubble(1.2,.2),n.drag=!1};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),addEventListener("pointermove",c=>{if(s!=null&&!n.drag&&c.pointerType!=="touch"){let u=r.getBoundingClientRect();c.clientX>u.left-150&&c.clientX<u.right+150&&c.clientY>u.top-40&&c.clientY<u.bottom+150&&(n.w-=Pi((c.clientX-s)*.3,-12,12))}s=c.clientX},{passive:!0}),new IntersectionObserver(([c])=>{n.on=c.isIntersecting,n.on&&(a=performance.now(),requestAnimationFrame(l))}).observe(r);function l(c){if(!n.on)return;requestAnimationFrame(l);let u=Math.min((c-a)/1e3,.032);a=c,n.drag||(n.w+=Pi(Er.v*.004,-40,40)*u,n.w+=(-46*n.a-3.3*n.w)*u,n.a+=n.w*u),e.style.transform=`rotate(${n.a.toFixed(3)}deg)`,n.ry=Ci(n.ry,Pi(Zt.nx,-1,1)*8-n.w*.1,6,u),t.style.transform=`rotateY(${n.ry.toFixed(2)}deg) rotateX(${(-Zt.ny*4).toFixed(2)}deg)`,t.style.setProperty("--hx",`${(50+n.ry*4+n.a*1.5).toFixed(1)}%`)}return{drop(){n.a=-24,n.w=0,dt.fromTo(r,{y:-560},{y:0,duration:1.05,ease:"power3.out",delay:.15})}}}function H1(){Ot||mi("[data-reveal]").forEach(r=>{dt.fromTo(r,{opacity:0,"--ty":"44px"},{opacity:1,"--ty":"0px",duration:.95,ease:"back.out(1.6)",scrollTrigger:{trigger:r,start:"top 90%",once:!0}})})}async function W1(){window.__napBooted=!0;let r=document.documentElement,e=pt("#loader"),t=[pt("#nav"),pt("main"),pt(".foot"),pt(".skip")].filter(Boolean),n=null,i={drop(){}};try{U1(),O1(),B1(),z1(),V1(),k1(),mi(".btn").forEach(y=>y.addEventListener("pointerdown",()=>Vt.bubble(1.1,.16))),i=G1()}catch(y){console.error(y)}let s=(async()=>{try{await Promise.race([Promise.all([document.fonts.load("560 96px Fraunces"),document.fonts.load("400 16px Geist")]),nh(2500)]);try{n=N1(),r.classList.add("webgl")}catch(S){console.warn("WebGL is not available, using the static backdrop.",S),r.classList.add("no-webgl")}let y=pt(".id-photo");await Promise.race([y.decode?y.decode().catch(()=>{}):Promise.resolve(),nh(2500)]),n&&(await Promise.race([n.batik,nh(4e3)]),await n.firstFrame(),e&&e.isConnected&&n.hold())}catch(y){console.error(y)}})(),a=()=>{r.classList.remove("gated"),t.forEach(S=>{S.inert=!1}),n&&(n.go(),n.intro()),i.drop(),H1(),Ot||(dt.fromTo(".hero-lede, .hero-open",{opacity:0,y:26},{opacity:1,y:0,duration:.9,ease:"back.out(1.5)",stagger:.12,delay:.3}),dt.fromTo(".hero-cta > *",{opacity:0,"--ty":"26px"},{opacity:1,"--ty":"0px",duration:.9,ease:"back.out(1.7)",stagger:.09,delay:.4}),dt.fromTo("#nav",{y:-90},{y:0,duration:1.1,ease:"elastic.out(1, 0.7)",delay:.25})),je.refresh();let y=location.hash.length>1&&document.getElementById(decodeURIComponent(location.hash.slice(1)));y&&setTimeout(()=>y.scrollIntoView({behavior:"auto"}),60)};if(!e||!e.isConnected){await s,a();return}t.forEach(y=>{y.inert=!0});let o=pt("#enter-sound"),l=pt("#enter-quiet"),c=await new Promise(y=>{o.addEventListener("click",()=>{Vt.enable(),y(!0)},{once:!0}),l.addEventListener("click",()=>{Vt.mute(),y(!1)},{once:!0})}),u=pt("#sound");u&&(u.setAttribute("aria-pressed",String(Vt.on)),u.title=Vt.on?"Sound on":"Sound off");let d=pt("#gate"),f=pt("#count"),h=pt("#loader-count"),_=pt("#loader-fill"),x=Ot?1.2:c?3.4:1.6,p=null;if(c)try{let y=Vt.context();y&&(p=C0(y,y.destination,x))}catch(y){console.warn(y)}dt.to(d,{opacity:0,y:-12,duration:Ot?0:.25,onComplete:()=>{d.hidden=!0}}),f.hidden=!1,Ot||dt.fromTo(f,{opacity:0,scale:.94},{opacity:1,scale:1,duration:.45,ease:"back.out(1.6)"});let g={p:0},v=()=>{h.textContent=Math.round(g.p),_.style.transform=`scaleX(${g.p/100})`};if(dt.ticker.lagSmoothing(0),await Promise.all([dt.to(g,{p:99,duration:x,ease:c?"power1.in":"power1.inOut",onUpdate:v}),s]),g.p=100,v(),dt.ticker.lagSmoothing(500,33),p){let y=p.hit();Vt.music(!0,y+2.6),await nh(60)}let T=document.createElement("div");T.className="flash",T.setAttribute("aria-hidden","true"),document.body.appendChild(T),dt.timeline({onComplete:()=>T.remove()}).to(T,{opacity:Ot?0:.85,duration:.07}).to(T,{opacity:0,duration:.7,ease:"power2.out"}),Ot||dt.to(".loader-num",{scale:1.14,duration:.3,ease:"power2.out"}),dt.to(e,{opacity:0,duration:Ot?0:.65,delay:.05,ease:"power2.inOut",onComplete:()=>e.remove()}),a()}W1();
