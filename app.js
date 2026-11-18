/* Portfolio of Naufal Abiyyu Permana. Three.js (MIT), GSAP (GreenSock standard license), simplex noise by Ian McEwan and Stefan Gustavson (MIT). */
var nm=0,df=1,im=2;var Yo=1,rm=2,wa=3,Zr=0,un=1,Ai=2,Mr=0,Ea=1,pf=2,mf=3,gf=4,sm=5;var bs=100,am=101,om=102,lm=103,cm=104,um=200,hm=201,fm=202,dm=203,_f=204,xf=205,pm=206,mm=207,gm=208,_m=209,xm=210,vm=211,ym=212,Mm=213,Sm=214,pc=0,mc=1,gc=2,ca=3,_c=4,xc=5,vc=6,yc=7,Yc=0,bm=1,Tm=2,er=0,vf=1,yf=2,Mf=3,Zo=4,Sf=5,bf=6,Tf=7;var wf=300,Ts=301,Aa=302,Zc=303,Jc=304,ua=1e3,Yi=1001,Mc=1002,_n=1003,wm=1004;var Jo=1005;var Sn=1006,$c=1007;var pi=1008;var jn=1009,Ef=1010,Af=1011,Ra=1012,Kc=1013,Vi=1014,Ri=1015,Gi=1016,Qc=1017,jc=1018,ws=1020,Rf=35902,Cf=35899,Pf=1021,If=1022,Hi=1023,gr=1026,Sr=1027,eu=1028,tu=1029,Jr=1030,nu=1031;var iu=1033,$o=33776,Ko=33777,Qo=33778,jo=33779,ru=35840,su=35841,au=35842,ou=35843,lu=36196,cu=37492,uu=37496,hu=37488,fu=37489,el=37490,du=37491,pu=37808,mu=37809,gu=37810,_u=37811,xu=37812,vu=37813,yu=37814,Mu=37815,Su=37816,bu=37817,Tu=37818,wu=37819,Eu=37820,Au=37821,Ru=36492,Cu=36494,Pu=36495,Iu=36283,Lu=36284,tl=36285,Du=36286;var fo=2300,Sc=2301,fc=2302,ef=2303,tf=2400,nf=2401,rf=2402;var Em=3200;var nl=0,Am=1,br="",kn="srgb",po="srgb-linear",mo="linear",wt="srgb";var dc=7680;var Rm=519,Cm=512,Pm=513,Im=514,Lf=515,Lm=516,Dm=517,Df=518,Nf=519,Nm=35044;var Uf="300 es",wi=2e3,ha=2001;function C_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function P_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Um(){let r=go("canvas");return r.style.display="block",r}var Sp={},fa=null;function Ff(...r){let e="THREE."+r.shift();fa?fa("log",e,...r):console.log(e,...r)}function Fm(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ke(...r){r=Fm(r);let e="THREE."+r.shift();if(fa)fa("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function je(...r){r=Fm(r);let e="THREE."+r.shift();if(fa)fa("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function _s(...r){let e=r.join(" ");e in Sp||(Sp[e]=!0,Ke(...r))}function Om(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Bm={[pc]:pc,[gc]:vc,[_c]:_c,[ca]:xc,[mc]:mc,[vc]:gc,[yc]:yc,[xc]:ca},Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bp=1234567,lo=Math.PI/180,da=180/Math.PI;function Es(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function ut(r,e,t){return Math.max(e,Math.min(t,r))}function Of(r,e){return(r%e+e)%e}function I_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function L_(r,e,t){return r!==e?(t-r)/(e-r):0}function co(r,e,t){return(1-t)*r+t*e}function D_(r,e,t,n){return co(r,e,1-Math.exp(-t*n))}function N_(r,e=1){return e-Math.abs(Of(r,e*2)-e)}function U_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function F_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function O_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function B_(r,e){return r+Math.random()*(e-r)}function z_(r){return r*(.5-Math.random())}function k_(r){r!==void 0&&(bp=r);let e=bp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V_(r){return r*lo}function G_(r){return r*da}function H_(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function W_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function X_(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*p,l*h,o*c);break;case"YXY":r.set(l*h,o*u,l*p,o*c);break;case"ZYZ":r.set(l*p,l*h,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zm(r,e){if(e.constructor===Float32Array)return r;let t=zf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function km(r,e){if(e.constructor===Float32Array)return r;let t=zf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var kf={DEG2RAD:lo,RAD2DEG:da,generateUUID:Es,clamp:ut,euclideanModulo:Of,mapLinear:I_,inverseLerp:L_,lerp:co,damp:D_,pingpong:N_,smoothstep:U_,smootherstep:F_,randInt:O_,randFloat:B_,randFloatSpread:z_,seededRandom:k_,degToRad:V_,radToDeg:G_,isPowerOfTwo:H_,ceilPowerOfTwo:W_,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:X_,normalize:km,denormalize:zm},qf=class qf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qf.prototype.isVector2=!0;var Ae=qf,Ei=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=s[a+0],h=s[a+1],p=s[a+2],x=s[a+3];if(f!==x||l!==d||c!==h||u!==p){let g=l*d+c*h+u*p+f*x;g<0&&(d=-d,h=-h,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);m=Math.sin(m*y)/S,o=Math.sin(o*y)/S,l=l*m+d*o,c=c*m+h*o,u=u*m+p*o,f=f*m+x*o}else{l=l*m+d*o,c=c*m+h*o,u=u*m+p*o,f=f*m+x*o;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],p=s[a+3];return e[t]=o*p+u*f+l*h-c*d,e[t+1]=l*p+u*d+c*f-o*h,e[t+2]=c*p+u*h+o*d-l*f,e[t+3]=u*p-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"YXZ":this._x=d*u*f+c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"ZXY":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f-d*h*p;break;case"ZYX":this._x=d*u*f-c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f+d*h*p;break;case"YZX":this._x=d*u*f+c*h*p,this._y=c*h*f+d*u*p,this._z=c*u*p-d*h*f,this._w=c*u*f-d*h*p;break;case"XZY":this._x=d*u*f-c*h*p,this._y=c*h*f-d*u*p,this._z=c*u*p+d*h*f,this._w=c*u*f+d*h*p;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yf=class Yf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yf.prototype.isVector3=!0;var V=Yf,Ih=new V,Tp=new Ei,Zf=class Zf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],p=n[8],x=i[0],g=i[3],m=i[6],y=i[1],S=i[4],v=i[7],M=i[2],T=i[5],_=i[8];return s[0]=a*x+o*y+l*M,s[3]=a*g+o*S+l*T,s[6]=a*m+o*v+l*_,s[1]=c*x+u*y+f*M,s[4]=c*g+u*S+f*T,s[7]=c*m+u*v+f*_,s[2]=d*x+h*y+p*M,s[5]=d*g+h*S+p*T,s[8]=d*m+h*v+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,p=t*f+n*d+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=f*x,e[1]=(i*c-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=h*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zf.prototype.isMatrix3=!0;var tt=Zf,Lh=new tt,wp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ep=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q_(){let r={enabled:!0,workingColorSpace:po,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===wt&&(i.r=mr(i.r),i.g=mr(i.g),i.b=mr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(i.r=la(i.r),i.g=la(i.g),i.b=la(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===br?mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[po]:{primaries:e,whitePoint:n,transfer:mo,toXYZ:wp,fromXYZ:Ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:wp,fromXYZ:Ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),r}var gt=q_();function mr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function la(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Zs,bc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=go("canvas")),Zs.width=e.width,Zs.height=e.height;let i=Zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=go("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=mr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Y_=0,pa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Dh(i[a].image)):s.push(Dh(i[a]))}else s=Dh(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Z_=0,Nh=new V,Vn=class r extends Ji{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Yi,i=Yi,s=Sn,a=pi,o=Hi,l=jn,c=r.DEFAULT_ANISOTROPY,u=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Es(),this.name="",this.source=new pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=wf;Vn.DEFAULT_ANISOTROPY=1;var Jf=class Jf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(h+1)/2,M=(m+1)/2,T=(u+d)/4,_=(f+x)/4,b=(p+g)/4;return S>v&&S>M?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=_/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=b/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=_/s,i=b/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(f-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jf.prototype.isVector4=!0;var Nt=Jf,Tc=class extends Ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Vn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new pa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_o=class extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends Vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qc=class qc{constructor(e,t,n,i,s,a,o,l,c,u,f,d,h,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,d,h,p,x,g)}set(e,t,n,i,s,a,o,l,c,u,f,d,h,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Js.setFromMatrixColumn(e,0).length(),s=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*u,h=a*f,p=o*u,x=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=p+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d+x*o,t[4]=p*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-p,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,p=c*u,x=c*f;t[0]=d-x*o,t[4]=-a*f,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*f,p=o*u,x=o*f;t[0]=l*u,t[4]=p*c-h,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,p=o*l,x=o*c;t[0]=l*u,t[4]=x-d*f,t[8]=p*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+p,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*l,h=a*c,p=o*l,x=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+x,t[5]=a*u,t[9]=h*f-p,t[2]=p*f-h,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,$_)}lookAt(e,t,n){let i=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Or.crossVectors(n,ci),Or.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Or.crossVectors(n,ci)),Or.normalize(),Vl.crossVectors(ci,Or),i[0]=Or.x,i[4]=Vl.x,i[8]=ci.x,i[1]=Or.y,i[5]=Vl.y,i[9]=ci.y,i[2]=Or.z,i[6]=Vl.z,i[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],S=n[7],v=n[11],M=n[15],T=i[0],_=i[4],b=i[8],P=i[12],A=i[1],L=i[5],D=i[9],H=i[13],R=i[2],U=i[6],z=i[10],F=i[14],J=i[3],X=i[7],I=i[11],ne=i[15];return s[0]=a*T+o*A+l*R+c*J,s[4]=a*_+o*L+l*U+c*X,s[8]=a*b+o*D+l*z+c*I,s[12]=a*P+o*H+l*F+c*ne,s[1]=u*T+f*A+d*R+h*J,s[5]=u*_+f*L+d*U+h*X,s[9]=u*b+f*D+d*z+h*I,s[13]=u*P+f*H+d*F+h*ne,s[2]=p*T+x*A+g*R+m*J,s[6]=p*_+x*L+g*U+m*X,s[10]=p*b+x*D+g*z+m*I,s[14]=p*P+x*H+g*F+m*ne,s[3]=y*T+S*A+v*R+M*J,s[7]=y*_+S*L+v*U+M*X,s[11]=y*b+S*D+v*z+M*I,s[15]=y*P+S*H+v*F+M*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],p=e[3],x=e[7],g=e[11],m=e[15],y=l*h-c*d,S=o*h-c*f,v=o*d-l*f,M=a*h-c*u,T=a*d-l*u,_=a*f-o*u;return t*(x*y-g*S+m*v)-n*(p*y-g*M+m*T)+i*(p*S-x*M+m*_)-s*(p*v-x*T+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=t*o-n*a,S=t*l-i*a,v=t*c-s*a,M=n*l-i*o,T=n*c-s*o,_=i*c-s*l,b=u*x-f*p,P=u*g-d*p,A=u*m-h*p,L=f*g-d*x,D=f*m-h*x,H=d*m-h*g,R=y*H-S*D+v*L+M*A-T*P+_*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/R;return e[0]=(o*H-l*D+c*L)*U,e[1]=(i*D-n*H-s*L)*U,e[2]=(x*_-g*T+m*M)*U,e[3]=(d*T-f*_-h*M)*U,e[4]=(l*A-a*H-c*P)*U,e[5]=(t*H-i*A+s*P)*U,e[6]=(g*v-p*_-m*S)*U,e[7]=(u*_-d*v+h*S)*U,e[8]=(a*D-o*A+c*b)*U,e[9]=(n*A-t*D-s*b)*U,e[10]=(p*T-x*v+m*y)*U,e[11]=(f*v-u*T-h*y)*U,e[12]=(o*P-a*L-l*b)*U,e[13]=(t*L-n*P+i*b)*U,e[14]=(x*S-p*M-g*y)*U,e[15]=(u*M-f*S+d*y)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,p=s*f,x=a*u,g=a*f,m=o*f,y=l*c,S=l*u,v=l*f,M=n.x,T=n.y,_=n.z;return i[0]=(1-(x+m))*M,i[1]=(h+v)*M,i[2]=(p-S)*M,i[3]=0,i[4]=(h-v)*T,i[5]=(1-(d+m))*T,i[6]=(g+y)*T,i[7]=0,i[8]=(p+S)*_,i[9]=(g-y)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Js.set(i[0],i[1],i[2]).length(),o=Js.set(i[4],i[5],i[6]).length(),l=Js.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Fi.copy(this);let c=1/a,u=1/o,f=1/l;return Fi.elements[0]*=c,Fi.elements[1]*=c,Fi.elements[2]*=c,Fi.elements[4]*=u,Fi.elements[5]*=u,Fi.elements[6]*=u,Fi.elements[8]*=f,Fi.elements[9]*=f,Fi.elements[10]*=f,t.setFromRotationMatrix(Fi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=wi,l=!1){let c=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),p,x;if(l)p=s/(a-s),x=a*s/(a-s);else if(o===wi)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ha)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=wi,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),p,x;if(l)p=1/(a-s),x=a/(a-s);else if(o===wi)p=-2/(a-s),x=-(a+s)/(a-s);else if(o===ha)p=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qc.prototype.isMatrix4=!0;var Pt=qc,Js=new V,Fi=new Pt,J_=new V(0,0,0),$_=new V(1,1,1),Or=new V,Vl=new V,ci=new V,Ap=new Pt,Rp=new Ei,$i=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$i.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},K_=0,Cp=new V,$s=new Ei,ur=new Pt,Gl=new V,to=new V,Q_=new V,j_=new Ei,Pp=new V(1,0,0),Ip=new V(0,1,0),Lp=new V(0,0,1),Dp={type:"added"},ex={type:"removed"},Ks={type:"childadded",child:null},Uh={type:"childremoved",child:null},xn=class r extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new V,t=new $i,n=new Ei,i=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new tt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,t){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gl.copy(e):Gl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(to,Gl,this.up):ur.lookAt(Gl,to,this.up),this.quaternion.setFromRotationMatrix(ur),i&&(ur.extractRotation(i.matrixWorld),$s.setFromRotationMatrix(ur),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dp),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,Q_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xn.DEFAULT_UP=new V(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zi=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},tx={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&d>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Fh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=Of(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fh(a,s,e+1/3),this.g=Fh(a,s,e),this.b=Fh(a,s,e-1/3)}return gt.colorSpaceToWorking(this,i),this}setStyle(e,t=kn){function n(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kn){let n=Vm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return gt.workingToColorSpace(Cn.copy(this),e),Math.round(ut(Cn.r*255,0,255))*65536+Math.round(ut(Cn.g*255,0,255))*256+Math.round(ut(Cn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,i=Cn.g,s=Cn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=kn){gt.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,i=Cn.b;return e!==kn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(Hl);let n=co(Br.h,Hl.h,t),i=co(Br.s,Hl.s,t),s=co(Br.l,Hl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new et;et.NAMES=Vm;var _r=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Oi=new V,hr=new V,Oh=new V,fr=new V,Qs=new V,js=new V,Np=new V,Bh=new V,zh=new V,kh=new V,Vh=new Nt,Gh=new Nt,Hh=new Nt,Gr=class r{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Oi.subVectors(e,t),i.cross(Oi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Oi.subVectors(i,t),hr.subVectors(n,t),Oh.subVectors(e,t);let a=Oi.dot(Oi),o=Oi.dot(hr),l=Oi.dot(Oh),c=hr.dot(hr),u=hr.dot(Oh),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(c*l-o*u)*d,p=(a*u-o*l)*d;return s.set(1-h-p,p,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(a,fr.y),l.addScaledVector(o,fr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Vh.setScalar(0),Gh.setScalar(0),Hh.setScalar(0),Vh.fromBufferAttribute(e,t),Gh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vh,s.x),a.addScaledVector(Gh,s.y),a.addScaledVector(Hh,s.z),a}static isFrontFacing(e,t,n,i){return Oi.subVectors(n,t),hr.subVectors(e,t),Oi.cross(hr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Oi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Qs.subVectors(i,n),js.subVectors(s,n),Bh.subVectors(e,n);let l=Qs.dot(Bh),c=js.dot(Bh);if(l<=0&&c<=0)return t.copy(n);zh.subVectors(e,i);let u=Qs.dot(zh),f=js.dot(zh);if(u>=0&&f<=u)return t.copy(i);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Qs,a);kh.subVectors(e,s);let h=Qs.dot(kh),p=js.dot(kh);if(p>=0&&h<=p)return t.copy(s);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(js,o);let g=u*p-h*f;if(g<=0&&f-u>=0&&h-p>=0)return Np.subVectors(s,i),o=(f-u)/(f-u+(h-p)),t.copy(i).addScaledVector(Np,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Qs,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ki=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bi):Bi.fromBufferAttribute(s,a),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wl.copy(n.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Xl.subVectors(this.max,no),ea.subVectors(e.a,no),ta.subVectors(e.b,no),na.subVectors(e.c,no),zr.subVectors(ta,ea),kr.subVectors(na,ta),fs.subVectors(ea,na);let t=[0,-zr.z,zr.y,0,-kr.z,kr.y,0,-fs.z,fs.y,zr.z,0,-zr.x,kr.z,0,-kr.x,fs.z,0,-fs.x,-zr.y,zr.x,0,-kr.y,kr.x,0,-fs.y,fs.x,0];return!Wh(t,ea,ta,na,Xl)||(t=[1,0,0,0,1,0,0,0,1],!Wh(t,ea,ta,na,Xl))?!1:(ql.crossVectors(zr,kr),t=[ql.x,ql.y,ql.z],Wh(t,ea,ta,na,Xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},dr=[new V,new V,new V,new V,new V,new V,new V,new V],Bi=new V,Wl=new Ki,ea=new V,ta=new V,na=new V,zr=new V,kr=new V,fs=new V,no=new V,Xl=new V,ql=new V,ds=new V;function Wh(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ds.fromArray(r,s);let o=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var sn=new V,Yl=new Ae,nx=0,hi=class extends Ji{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nm,this.updateRanges=[],this.gpuType=Ri,this.version=0,this._normalizationScale=e!==void 0?zf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zm(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):km(e,this.array)}};var vo=class extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xt=class extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}},ix=new Ki,io=new V,Xh=new V,xr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ix.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(io,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Xh)),this.expandByPoint(io.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},rx=0,Ti=new Pt,qh=new xn,ia=new V,ui=new Ki,ro=new Ki,gn=new V,Hn=class r extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?yo:vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,n){return Ti.makeTranslation(e,t,n),this.applyMatrix4(Ti),this}scale(e,t,n){return Ti.makeScale(e,t,n),this.applyMatrix4(Ti),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ro.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(ui.min,ro.min),ui.expandByPoint(gn),gn.addVectors(ui.max,ro.max),ui.expandByPoint(gn)):(ui.expandByPoint(ro.min),ui.expandByPoint(ro.max))}ui.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(ia.fromBufferAttribute(e,c),gn.add(ia)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new V,l[P]=new V;let u=new V,f=new V,d=new V,h=new Ae,p=new Ae,x=new Ae,g=new V,m=new V;function y(P,A,L){c[P]=c[A]=c[L]=1,u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,L),f.sub(u),d.sub(u),p.sub(h),x.sub(h);let D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(g.copy(f).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-x.x).multiplyScalar(D),o[P].add(g),o[A].add(g),o[L].add(g),l[P].add(m),l[A].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,A=S.length;P<A;++P){let L=S[P],D=L.start,H=L.count;for(let R=D,U=D+H;R<U;R+=3)y(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let v=new V,M=new V,T=new V,_=new V;function b(P){T.fromBufferAttribute(i,P),_.copy(T);let A=o[P];v.copy(A),v.sub(T.multiplyScalar(T.dot(A))).normalize(),M.crossVectors(_,A);let D=M.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,D)}for(let P=0,A=n.count;P<A;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new V,s=new V,a=new V,o=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let d=0,h=e.count;d<h;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),h=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*u;for(let m=0;m<u;m++)d[p++]=c[h++]}return new hi(d,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Yh=new V,sx=new V,ax=new tt,zi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Yh.subVectors(n,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Yh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ax.getNormalMatrix(e),i=this.coplanarPoint(Yh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ox=0,Qi=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Ea,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=xf,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dc,this.stencilZFail=dc,this.stencilZPass=dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pr=new V,Zh=new V,Zl=new V,Jl=new V,Mo=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pr.copy(this.origin).addScaledVector(this.direction,t),pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zh.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Jl.copy(this.origin).sub(Zh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Zl),o=Jl.dot(this.direction),l=-Jl.dot(Zl),c=Jl.lengthSq(),u=Math.abs(1-a*a),f,d,h,p;if(u>0)if(f=a*l-o,d=a*o-l,p=s*u,f>=0)if(d>=-p)if(d<=p){let x=1/u;f*=x,d*=x,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Zh).addScaledVector(Zl,d),h}intersectSphere(e,t){if(e.radius<0)return null;pr.subVectors(e.center,this.origin);let n=pr.dot(this.direction),i=pr.dot(pr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,p=t.x-a.x,x=t.y-a.y,g=t.z-a.z,m=n.x-a.x,y=n.y-a.y,S=n.z-a.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(u),_,b,P,A,L,D,H,R,U,z,F,J;if(v>=M&&v>=T?(P=l,D=f,U=p,J=m,l>=0?(_=c,b=u,A=d,L=h,H=x,R=g,z=y,F=S):(_=u,b=c,A=h,L=d,H=g,R=x,z=S,F=y)):M>=T?(P=c,D=d,U=x,J=y,c>=0?(_=u,b=l,A=h,L=f,H=g,R=p,z=S,F=m):(_=l,b=u,A=f,L=h,H=p,R=g,z=m,F=S)):(P=u,D=h,U=g,J=S,u>=0?(_=l,b=c,A=f,L=d,H=p,R=x,z=m,F=y):(_=c,b=l,A=d,L=f,H=x,R=p,z=y,F=m)),P===0)return null;let X=_/P,I=b/P,ne=1/P,_e=A-X*D,De=L-I*D,K=H-X*U,he=R-I*U,Ee=z-X*J,Ce=F-I*J,ge=Ee*he-Ce*K,Re=_e*Ce-De*Ee,Qe=K*De-he*_e;if(i){if(ge<0||Re<0||Qe<0)return null}else if((ge<0||Re<0||Qe<0)&&(ge>0||Re>0||Qe>0))return null;let ce=ge+Re+Qe;if(ce===0)return null;let ze=ne*(ge*D+Re*U+Qe*J);return(ce>0?ze<0:ze>0)?null:this.at(ze/ce,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vr=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Up=new Pt,ps=new Mo,$l=new xr,Fp=new V,Kl=new V,Ql=new V,jl=new V,Jh=new V,ec=new V,Op=new V,tc=new V,Mt=class extends xn{constructor(e=new Hn,t=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],f=s[l];u!==0&&(Jh.fromBufferAttribute(f,e),a?ec.addScaledVector(Jh,u):ec.addScaledVector(Jh.sub(t),u))}t.add(ec)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(s),ps.copy(e.ray).recast(e.near),!($l.containsPoint(ps.origin)===!1&&(ps.intersectSphere($l,Fp)===null||ps.origin.distanceToSquared(Fp)>(e.far-e.near)**2))&&(Up.copy(s).invert(),ps.copy(e.ray).applyMatrix4(Up),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let v=y,M=S;v<M;v+=3){let T=o.getX(v),_=o.getX(v+1),b=o.getX(v+2);i=nc(this,m,e,n,c,u,f,T,_,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);i=nc(this,a,e,n,c,u,f,y,S,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=y,M=S;v<M;v+=3){let T=v,_=v+1,b=v+2;i=nc(this,m,e,n,c,u,f,T,_,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let y=g,S=g+1,v=g+2;i=nc(this,a,e,n,c,u,f,y,S,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function lx(r,e,t,n,i,s,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Zr,o),l===null)return null;tc.copy(o),tc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(tc);return c<t.near||c>t.far?null:{distance:c,point:tc.clone(),object:r}}function nc(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Kl),r.getVertexPosition(l,Ql),r.getVertexPosition(c,jl);let u=lx(r,e,t,n,Kl,Ql,jl,Op);if(u){let f=new V;Gr.getBarycoord(Op,Kl,Ql,jl,f),i&&(u.uv=Gr.getInterpolatedAttribute(i,o,l,c,f,new Ae)),s&&(u.uv1=Gr.getInterpolatedAttribute(s,o,l,c,f,new Ae)),a&&(u.normal=Gr.getInterpolatedAttribute(a,o,l,c,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new V,materialIndex:0};Gr.getNormal(Kl,Ql,jl,d.normal),u.face=d,u.barycoord=f}return u}var So=class extends Vn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=_n,u=_n,f,d){super(null,a,o,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class extends hi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ra=new Pt,Bp=new Pt,ic=[],zp=new Ki,cx=new Pt,so=new Mt,ao=new xr,To=class extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),zp.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(zp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),ao.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(ao)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),e.ray.intersectsSphere(ao)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ra),Bp.multiplyMatrices(n,ra),so.matrixWorld=Bp,so.raycast(e,ic);for(let a=0,o=ic.length;a<o;a++){let l=ic[a];l.instanceId=s,l.object=this,t.push(l)}ic.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new So(new Float32Array(i*this.count),i,this.count,eu,Ri));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new xr,ux=new Ae(.5,.5),rc=new V,Hr=class{constructor(e=new zi,t=new zi,n=new zi,i=new zi,s=new zi,a=new zi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],p=s[8],x=s[9],g=s[10],m=s[11],y=s[12],S=s[13],v=s[14],M=s[15];if(i[0].setComponents(c-a,h-u,m-p,M-y).normalize(),i[1].setComponents(c+a,h+u,m+p,M+y).normalize(),i[2].setComponents(c+o,h+f,m+x,M+S).normalize(),i[3].setComponents(c-o,h-f,m-x,M-S).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,h-d,m-g,M-v).normalize();else if(i[4].setComponents(c-l,h-d,m-g,M-v).normalize(),t===wi)i[5].setComponents(c+l,h+d,m+g,M+v).normalize();else if(t===ha)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=ux.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(rc.x=i.normal.x>0?e.max.x:e.min.x,rc.y=i.normal.y>0?e.max.y:e.min.y,rc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},kp=new Pt,Ec=class r{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];kp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Hr),n[i].setFromProjectionMatrix(kp,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Hr),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var ga=class extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vp=new Pt,sf=new Mo,sc=new xr,ac=new V,wo=class extends xn{constructor(e=new Hn,t=new ga){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=s,e.ray.intersectsSphere(sc)===!1)return;Vp.copy(i).invert(),sf.copy(e.ray).applyMatrix4(Vp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let p=d,x=h;p<x;p++){let g=c.getX(p);ac.fromBufferAttribute(f,g),Gp(ac,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let p=d,x=h;p<x;p++)ac.fromBufferAttribute(f,p),Gp(ac,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Gp(r,e,t,n,i,s,a){let o=sf.distanceSqToPoint(r);if(o<t){let l=new V;sf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Eo=class extends Vn{constructor(e=[],t=Ts,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xs=class extends Vn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yr=class extends Vn{constructor(e,t,n=Vi,i,s,a,o=_n,l=_n,c,u=gr,f=1){if(u!==gr&&u!==Sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ao=class extends yr{constructor(e,t=Vi,n=Ts,i,s,a=_n,o=_n,l,c=gr){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ro=class extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class r extends Hn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,h=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function p(x,g,m,y,S,v,M,T,_,b,P){let A=v/_,L=M/b,D=v/2,H=M/2,R=T/2,U=_+1,z=b+1,F=0,J=0,X=new V;for(let I=0;I<z;I++){let ne=I*L-H;for(let _e=0;_e<U;_e++){let De=_e*A-D;X[x]=De*y,X[g]=ne*S,X[m]=R,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=T>0?1:-1,u.push(X.x,X.y,X.z),f.push(_e/_),f.push(1-I/b),F+=1}}for(let I=0;I<b;I++)for(let ne=0;ne<_;ne++){let _e=d+ne+U*I,De=d+ne+U*(I+1),K=d+(ne+1)+U*(I+1),he=d+(ne+1)+U*I;l.push(_e,De,he),l.push(De,K,he),J+=6}o.addGroup(h,J,P),h+=J,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ac=class r extends Hn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(s.slice(),3)),this.setAttribute("uv",new Xt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new V,v=new V,M=new V;for(let T=0;T<t.length;T+=3)h(t[T+0],S),h(t[T+1],v),h(t[T+2],M),l(S,v,M,y)}function l(y,S,v,M){let T=M+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let P=y.clone().lerp(v,b/T),A=S.clone().lerp(v,b/T),L=T-b;for(let D=0;D<=L;D++)D===0&&b===T?_[b][D]=P:_[b][D]=P.clone().lerp(A,D/L)}for(let b=0;b<T;b++)for(let P=0;P<2*(T-b)-1;P++){let A=Math.floor(P/2);P%2===0?(d(_[b][A+1]),d(_[b+1][A]),d(_[b][A])):(d(_[b][A+1]),d(_[b+1][A+1]),d(_[b+1][A]))}}function c(y){let S=new V;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(y),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function u(){let y=new V;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];let v=g(y)/2/Math.PI+.5,M=m(y)/Math.PI+.5;a.push(v,1-M)}p(),f()}function f(){for(let y=0;y<a.length;y+=6){let S=a[y+0],v=a[y+2],M=a[y+4],T=Math.max(S,v,M),_=Math.min(S,v,M);T>.9&&_<.1&&(S<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,S){let v=y*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let y=new V,S=new V,v=new V,M=new V,T=new Ae,_=new Ae,b=new Ae;for(let P=0,A=0;P<s.length;P+=9,A+=6){y.set(s[P+0],s[P+1],s[P+2]),S.set(s[P+3],s[P+4],s[P+5]),v.set(s[P+6],s[P+7],s[P+8]),T.set(a[A+0],a[A+1]),_.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),M.copy(y).add(S).add(v).divideScalar(3);let L=g(M);x(T,A+0,y,L),x(_,A+2,S,L),x(b,A+4,v,L)}}function x(y,S,v,M){M<0&&y.x===1&&(a[S]=y.x-1),v.x===0&&v.z===0&&(a[S]=M/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let u=n[i],d=n[i+1]-u,h=(a-u)/d;return(i+h)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Ae:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,i=[],s=[],a=[],o=new V,l=new Pt;for(let h=0;h<=e;h++){let p=h/e;i[h]=this.getTangentAt(p,new V)}s[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(i[h-1],i[h]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ut(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,p))}a[h].crossVectors(i[h],s[h])}if(t===!0){let h=Math.acos(ut(s[0].dot(s[e]),-1,1));h/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],h*p)),a[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},_a=class extends Wn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ae){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rc=class extends _a{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vf(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,i(a,o,d,h)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var Hp=new V,Wp=new V,$h=new Vf,Kh=new Vf,Qh=new Vf,vs=class extends Wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new V){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Wp.subVectors(i[0],i[1]).add(i[0]),c=Wp);let f=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Hp.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Hp),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),$h.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,p,x,g),Kh.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,p,x,g),Qh.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,p,x,g)}else this.curveType==="catmullrom"&&($h.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Kh.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Qh.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set($h.calc(l),Kh.calc(l),Qh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new V().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xp(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function hx(r,e){let t=1-r;return t*t*e}function fx(r,e){return 2*(1-r)*r*e}function dx(r,e){return r*r*e}function uo(r,e,t,n){return hx(r,e)+fx(r,t)+dx(r,n)}function px(r,e){let t=1-r;return t*t*t*e}function mx(r,e){let t=1-r;return 3*t*t*r*e}function gx(r,e){return 3*(1-r)*r*r*e}function _x(r,e){return r*r*r*e}function ho(r,e,t,n,i){return px(r,e)+mx(r,t)+gx(r,n)+_x(r,i)}var Co=class extends Wn{constructor(e=new Ae,t=new Ae,n=new Ae,i=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ae){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ho(e,i.x,s.x,a.x,o.x),ho(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends Wn{constructor(e=new V,t=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ho(e,i.x,s.x,a.x,o.x),ho(e,i.y,s.y,a.y,o.y),ho(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Po=class extends Wn{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Wn{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends Wn{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(uo(e,i.x,s.x,a.x),uo(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Wn{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(uo(e,i.x,s.x,a.x),uo(e,i.y,s.y,a.y),uo(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Xp(o,l.x,c.x,u.x,f.x),Xp(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ae().fromArray(i))}return this}},Pc=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:vs,CubicBezierCurve:Co,CubicBezierCurve3:Cc,EllipseCurve:_a,LineCurve:Po,LineCurve3:xa,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Lo,SplineCurve:Do}),Ic=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Pc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},No=class extends Ic{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Po(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Io(this.currentPoint.clone(),new Ae(e,t),new Ae(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Co(this.currentPoint.clone(),new Ae(e,t),new Ae(n,i),new Ae(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Do(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new _a(e,t,n,i,s,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},va=class extends No{constructor(e){super(e),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new No().fromJSON(i))}return this}};function xx(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Gm(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=bx(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let u=o,f=l;for(let d=t;d<i;d+=t){let h=r[d],p=r[d+1];h<o&&(o=h),p<l&&(l=p),h>u&&(u=h),p>f&&(f=p)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Uo(s,a,t,o,l,c,0),a}function Gm(r,e,t,n,i){let s;if(i===Nx(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=qp(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=qp(a/n|0,r[a],r[a+1],s);return s&&ya(s,s.next)&&(Oo(s),s=s.next),s}function ys(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(ya(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Uo(r,e,t,n,i,s,a){if(!r)return;!a&&s&&Rx(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?yx(r,n,i,s):vx(r)){e.push(l.i,r.i,c.i),Oo(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Mx(ys(r),e),Uo(r,e,t,n,i,s,2)):a===2&&Sx(r,e,t,n,i,s):Uo(ys(r),e,t,n,i,s,1);break}}}function vx(r){let e=r.prev,t=r,n=r.next;if(Wt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,s,a),f=Math.min(o,l,c),d=Math.max(i,s,a),h=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=f&&p.y<=h&&oo(i,o,s,l,a,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function yx(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Wt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,u=i.y,f=s.y,d=a.y,h=Math.min(o,l,c),p=Math.min(u,f,d),x=Math.max(o,l,c),g=Math.max(u,f,d),m=af(h,p,e,t,n),y=af(x,g,e,t,n),S=r.prevZ,v=r.nextZ;for(;S&&S.z>=m&&v&&v.z<=y;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=g&&S!==i&&S!==a&&oo(o,u,l,f,c,d,S.x,S.y)&&Wt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&oo(o,u,l,f,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=h&&S.x<=x&&S.y>=p&&S.y<=g&&S!==i&&S!==a&&oo(o,u,l,f,c,d,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&oo(o,u,l,f,c,d,v.x,v.y)&&Wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mx(r,e){let t=r;do{let n=t.prev,i=t.next.next;!ya(n,i)&&Wm(n,t,t.next,i)&&Fo(n,i)&&Fo(i,n)&&(e.push(n.i,t.i,i.i),Oo(t),Oo(t.next),t=r=i),t=t.next}while(t!==r);return ys(t)}function Sx(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ix(a,o)){let l=Xm(a,o);a=ys(a,a.next),l=ys(l,l.next),Uo(a,e,t,n,i,s,0),Uo(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function bx(r,e,t,n){let i=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Gm(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Px(c))}i.sort(Tx);for(let s=0;s<i.length;s++)t=wx(i[s],t);return t}function Tx(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function wx(r,e){let t=Ex(r,e);if(!t)return e;let n=Xm(t,r);return ys(n,n.next),ys(t,t.next)}function Ex(r,e){let t=e,n=r.x,i=r.y,s=-1/0,a;if(ya(r,t))return t;do{if(ya(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Hm(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let f=Math.abs(i-t.y)/(n-t.x);Fo(t,r)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Ax(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Ax(r,e){return Wt(r.prev,r,e.prev)<0&&Wt(e.next,r,r.next)<0}function Rx(r,e,t,n){let i=r;do i.z===0&&(i.z=af(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Cx(i)}function Cx(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function af(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Px(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Hm(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function oo(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Hm(r,e,t,n,i,s,a,o)}function Ix(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Lx(r,e)&&(Fo(r,e)&&Fo(e,r)&&Dx(r,e)&&(Wt(r.prev,r,e.prev)||Wt(r,e.prev,e))||ya(r,e)&&Wt(r.prev,r,r.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ya(r,e){return r.x===e.x&&r.y===e.y}function Wm(r,e,t,n){let i=lc(Wt(r,e,t)),s=lc(Wt(r,e,n)),a=lc(Wt(t,n,r)),o=lc(Wt(t,n,e));return!!(i!==s&&a!==o||i===0&&oc(r,t,e)||s===0&&oc(r,n,e)||a===0&&oc(t,r,n)||o===0&&oc(t,e,n))}function oc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function lc(r){return r>0?1:r<0?-1:0}function Lx(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Wm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Fo(r,e){return Wt(r.prev,r,r.next)<0?Wt(r,e,r.next)>=0&&Wt(r,r.prev,e)>=0:Wt(r,e,r.prev)<0||Wt(r,r.next,e)<0}function Dx(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Xm(r,e){let t=of(r.i,r.x,r.y),n=of(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function qp(r,e,t,n){let i=of(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Oo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function of(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nx(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var lf=class{static triangulate(e,t,n=2){return xx(e,t,n)}},gs=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Yp(e),Zp(n,e);let a=e.length;t.forEach(Yp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Zp(n,t[l]);let o=lf.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Yp(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Zp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Bo=class r extends Hn{constructor(e=new va([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:h-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ux,S,v=!1,M,T,_,b;if(m){S=m.getSpacedPoints(u),v=!0,d=!1;let re=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(u,re),T=new V,_=new V,b=new V}d||(g=0,h=0,p=0,x=0);let P=o.extractPoints(c),A=P.shape,L=P.holes;if(!gs.isClockWise(A)){A=A.reverse();for(let re=0,de=L.length;re<de;re++){let pe=L[re];gs.isClockWise(pe)&&(L[re]=pe.reverse())}}function H(re){let pe=10000000000000001e-36,k=re[0];for(let Se=1;Se<=re.length;Se++){let xe=Se%re.length,Oe=re[xe],Ge=Oe.x-k.x,Je=Oe.y-k.y,it=Ge*Ge+Je*Je,O=Math.max(Math.abs(Oe.x),Math.abs(Oe.y),Math.abs(k.x),Math.abs(k.y)),rt=pe*O*O;if(it<=rt){re.splice(xe,1),Se--;continue}k=Oe}}H(A),L.forEach(H);let R=L.length,U=A;for(let re=0;re<R;re++){let de=L[re];A=A.concat(de)}function z(re,de,pe){return de||je("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(de,pe)}let F=A.length;function J(re,de,pe){let k,Se,xe,Oe=re.x-de.x,Ge=re.y-de.y,Je=pe.x-re.x,it=pe.y-re.y,O=Oe*Oe+Ge*Ge,rt=Oe*it-Ge*Je;if(Math.abs(rt)>Number.EPSILON){let Ze=Math.sqrt(O),$e=Math.sqrt(Je*Je+it*it),ye=de.x-Ge/Ze,st=de.y+Oe/Ze,Fe=pe.x-it/$e,Ye=pe.y+Je/$e,C=((Fe-ye)*it-(Ye-st)*Je)/(Oe*it-Ge*Je);k=ye+Oe*C-re.x,Se=st+Ge*C-re.y;let w=k*k+Se*Se;if(w<=2)return new Ae(k,Se);xe=Math.sqrt(w/2)}else{let Ze=!1;Oe>Number.EPSILON?Je>Number.EPSILON&&(Ze=!0):Oe<-Number.EPSILON?Je<-Number.EPSILON&&(Ze=!0):Math.sign(Ge)===Math.sign(it)&&(Ze=!0),Ze?(k=-Ge,Se=Oe,xe=Math.sqrt(O)):(k=Oe,Se=Ge,xe=Math.sqrt(O/2))}return new Ae(k/xe,Se/xe)}let X=[];for(let re=0,de=U.length,pe=de-1,k=re+1;re<de;re++,pe++,k++)pe===de&&(pe=0),k===de&&(k=0),X[re]=J(U[re],U[pe],U[k]);let I=[],ne,_e=X.concat();for(let re=0,de=R;re<de;re++){let pe=L[re];ne=[];for(let k=0,Se=pe.length,xe=Se-1,Oe=k+1;k<Se;k++,xe++,Oe++)xe===Se&&(xe=0),Oe===Se&&(Oe=0),ne[k]=J(pe[k],pe[xe],pe[Oe]);I.push(ne),_e=_e.concat(ne)}let De;if(g===0)De=gs.triangulateShape(U,L);else{let re=[],de=[];for(let pe=0;pe<g;pe++){let k=pe/g,Se=h*Math.cos(k*Math.PI/2),xe=p*Math.sin(k*Math.PI/2)+x;for(let Oe=0,Ge=U.length;Oe<Ge;Oe++){let Je=z(U[Oe],X[Oe],xe);Re(Je.x,Je.y,-Se),k===0&&re.push(Je)}for(let Oe=0,Ge=R;Oe<Ge;Oe++){let Je=L[Oe];ne=I[Oe];let it=[];for(let O=0,rt=Je.length;O<rt;O++){let Ze=z(Je[O],ne[O],xe);Re(Ze.x,Ze.y,-Se),k===0&&it.push(Ze)}k===0&&de.push(it)}}De=gs.triangulateShape(re,de)}let K=De.length,he=p+x;for(let re=0;re<F;re++){let de=d?z(A[re],_e[re],he):A[re];v?(_.copy(M.normals[0]).multiplyScalar(de.x),T.copy(M.binormals[0]).multiplyScalar(de.y),b.copy(S[0]).add(_).add(T),Re(b.x,b.y,b.z)):Re(de.x,de.y,0)}for(let re=1;re<=u;re++)for(let de=0;de<F;de++){let pe=d?z(A[de],_e[de],he):A[de];v?(_.copy(M.normals[re]).multiplyScalar(pe.x),T.copy(M.binormals[re]).multiplyScalar(pe.y),b.copy(S[re]).add(_).add(T),Re(b.x,b.y,b.z)):Re(pe.x,pe.y,f/u*re)}for(let re=g-1;re>=0;re--){let de=re/g,pe=h*Math.cos(de*Math.PI/2),k=p*Math.sin(de*Math.PI/2)+x;for(let Se=0,xe=U.length;Se<xe;Se++){let Oe=z(U[Se],X[Se],k);Re(Oe.x,Oe.y,f+pe)}for(let Se=0,xe=L.length;Se<xe;Se++){let Oe=L[Se];ne=I[Se];for(let Ge=0,Je=Oe.length;Ge<Je;Ge++){let it=z(Oe[Ge],ne[Ge],k);v?Re(it.x,it.y+S[u-1].y,S[u-1].x+pe):Re(it.x,it.y,f+pe)}}}Ee(),Ce();function Ee(){let re=i.length/3;if(d){let de=0,pe=F*de;for(let k=0;k<K;k++){let Se=De[k];Qe(Se[2]+pe,Se[1]+pe,Se[0]+pe)}de=u+g*2,pe=F*de;for(let k=0;k<K;k++){let Se=De[k];Qe(Se[0]+pe,Se[1]+pe,Se[2]+pe)}}else{for(let de=0;de<K;de++){let pe=De[de];Qe(pe[2],pe[1],pe[0])}for(let de=0;de<K;de++){let pe=De[de];Qe(pe[0]+F*u,pe[1]+F*u,pe[2]+F*u)}}n.addGroup(re,i.length/3-re,0)}function Ce(){let re=i.length/3,de=0;ge(U,de),de+=U.length;for(let pe=0,k=L.length;pe<k;pe++){let Se=L[pe];ge(Se,de),de+=Se.length}n.addGroup(re,i.length/3-re,1)}function ge(re,de){let pe=re.length;for(;--pe>=0;){let k=pe,Se=pe-1;Se<0&&(Se=re.length-1);for(let xe=0,Oe=u+g*2;xe<Oe;xe++){let Ge=F*xe,Je=F*(xe+1),it=de+k+Ge,O=de+Se+Ge,rt=de+Se+Je,Ze=de+k+Je;ce(it,O,rt,Ze)}}}function Re(re,de,pe){l.push(re),l.push(de),l.push(pe)}function Qe(re,de,pe){ze(re),ze(de),ze(pe);let k=i.length/3,Se=y.generateTopUV(n,i,k-3,k-2,k-1);Pe(Se[0]),Pe(Se[1]),Pe(Se[2])}function ce(re,de,pe,k){ze(re),ze(de),ze(k),ze(de),ze(pe),ze(k);let Se=i.length/3,xe=y.generateSideWallUV(n,i,Se-6,Se-3,Se-2,Se-1);Pe(xe[0]),Pe(xe[1]),Pe(xe[3]),Pe(xe[1]),Pe(xe[2]),Pe(xe[3])}function ze(re){i.push(l[re*3+0]),i.push(l[re*3+1]),i.push(l[re*3+2])}function Pe(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fx(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Pc[i.type]().fromJSON(i)),new r(n,e.options)}},Ux={generateTopUV:function(r,e,t,n,i){let s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Ae(s,a),new Ae(o,l),new Ae(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[i*3],h=e[i*3+1],p=e[i*3+2],x=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ae(a,1-l),new Ae(c,1-f),new Ae(d,1-p),new Ae(x,1-m)]:[new Ae(o,1-l),new Ae(u,1-f),new Ae(h,1-p),new Ae(g,1-m)]}};function Fx(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ms=class r extends Ac{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var ki=class r extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,h=[],p=[],x=[],g=[];for(let m=0;m<u;m++){let y=m*d-a;for(let S=0;S<c;S++){let v=S*f-s;p.push(v,-y,0),x.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let S=y+c*m,v=y+c*(m+1),M=y+1+c*(m+1),T=y+1+c*m;h.push(S,v,T),h.push(v,M,T)}this.setIndex(h),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var zo=class r extends Hn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new V,d=new V,h=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],S=m/n,v=a+S*o,M=e*Math.cos(v),T=Math.sqrt(e*e-M*M),_=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let P=b/t,A=i+P*s;f.x=-T*Math.cos(A),f.y=M,f.z=T*Math.sin(A),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(P+_,1-S),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let S=u[m][y+1],v=u[m][y],M=u[m+1][y],T=u[m+1][y+1];(m!==0||a>0)&&h.push(S,v,T),(m!==n-1||l<Math.PI)&&h.push(v,M,T)}this.setIndex(h),this.setAttribute("position",new Xt(p,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ma=class r extends Hn{constructor(e=new Lo(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new V,l=new V,c=new Ae,u=new V,f=[],d=[],h=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(h,2));function x(){for(let S=0;S<t;S++)g(S);g(s===!1?t:0),y(),m()}function g(S){u=e.getPointAt(S/t,u);let v=a.normals[S],M=a.binormals[S];for(let T=0;T<=i;T++){let _=T/i*Math.PI*2,b=Math.sin(_),P=-Math.cos(_);l.x=P*v.x+b*M.x,l.y=P*v.y+b*M.y,l.z=P*v.z+b*M.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let v=1;v<=i;v++){let M=(i+1)*(S-1)+(v-1),T=(i+1)*S+(v-1),_=(i+1)*S+v,b=(i+1)*(S-1)+v;p.push(M,T,b),p.push(T,_,b)}}function y(){for(let S=0;S<=t;S++)for(let v=0;v<=i;v++)c.x=S/t,c.y=v/i,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Pc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function As(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(Jp(i))i.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Jp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function In(r){let e={};for(let t=0;t<r.length;t++){let n=As(r[t]);for(let i in n)e[i]=n[i]}return e}function Jp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ox(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Gf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var qm={clone:As,merge:In},Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ae().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new tt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Lc=class extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ss=class extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends Ss{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return _s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){_s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ko=class extends Qi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Yc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dc=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nc=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function cc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Wr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uc=class extends Wr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tf,endingEnd:tf}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case nf:s=e,o=2*t-n;break;case rf:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nf:a=e,l=2*n-t;break;case rf:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,p=(n-t)/(i-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-h)*g+(1.5+h)*x+.5*p,v=h*g-h*x;for(let M=0;M!==o;++M)s[M]=m*a[u+M]+y*a[c+M]+S*a[l+M]+v*a[f+M];return s}},Fc=class extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*u;return s}},Oc=class extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Bc=class extends Wr{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(i-t),x=1-p;for(let g=0;g!==o;++g)s[g]=a[c+g]*x+a[l+g]*p;return s}let d=o*2,h=e-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=h*d+p*2,y=f[m],S=f[m+1],v=e*d+p*2,M=u[v],T=u[v+1],_=Vx(n,t,y,M,i);s[p]=Ym(_,x,S,T,g)}return s}};function Ym(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function kx(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Vx(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Ym(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=kx(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var di=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),cc(e.settings)&&(n.settings={inTangents:sa(e.settings.inTangents,Array),outTangents:sa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case Sc:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break;case ef:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return fc;case this.InterpolantFactoryMethodBezier:return ef}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;cc(this.settings)&&($p(this.settings.inTangents,e),$p(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;cc(this.settings)&&(Kp(this.settings.inTangents,e),Kp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&P_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fc,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let f=o*n,d=f-n,h=f+n;for(let p=0;p!==n;++p){let x=t[f+p];if(x!==t[d+p]||x!==t[h+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,cc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function $p(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function Kp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Sc;var Xr=class extends di{constructor(e,t,n){super(e,t,n)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=fo;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends di{constructor(e,t,n,i){super(e,t,n,i)}};zc.prototype.ValueTypeName="color";var kc=class extends di{constructor(e,t,n,i){super(e,t,n,i)}};kc.prototype.ValueTypeName="number";var Vc=class extends Wr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ei.slerpFlat(s,0,a,c-o,a,c,l);return s}},Vo=class extends di{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Vc(this.times,this.values,this.getValueSize(),e)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends di{constructor(e,t,n){super(e,t,n)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=fo;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends di{constructor(e,t,n,i){super(e,t,n,i)}};Gc.prototype.ValueTypeName="vector";var Hc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],p=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zm=new Hc,Wc=class{constructor(e){this.manager=e!==void 0?e:Zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ba=class extends xn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var jh=new Pt,Qp=new V,jp=new V,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(jh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===ha||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=new V,hc=new Ei,qi=new V,Ho=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uc,hc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,hc,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(uc,hc,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,hc,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vr=new V,em=new Ae,tm=new Ae,Pn=class extends Ho{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,em,tm),t.subVectors(tm,em)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var cf=class extends Go{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}},Yr=class extends ba{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wo=class extends Ho{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uf=class extends Go{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xo=class extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new uf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},qo=class extends ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var aa=-90,oa=1,Ta=class extends xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pn(aa,oa,e,t);i.layers=this.layers,this.add(i);let s=new Pn(aa,oa,e,t);s.layers=this.layers,this.add(s);let a=new Pn(aa,oa,e,t);a.layers=this.layers,this.add(a);let o=new Pn(aa,oa,e,t);o.layers=this.layers,this.add(o);let l=new Pn(aa,oa,e,t);l.layers=this.layers,this.add(l);let c=new Pn(aa,oa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Xc=class extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Hf="\\[\\]\\.:\\/",Gx=new RegExp("["+Hf+"]","g"),Wf="[^"+Hf+"]",Hx="[^"+Hf.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",Wf),Xx=/(WCOD+)?/.source.replace("WCOD",Hx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),Zx=new RegExp("^"+Wx+Xx+qx+Yx+"$"),Jx=["material","materials","bones","map"],hf=class{constructor(e,t,n){let i=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gx,"")}static parseTrackName(e){let t=Zx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Jx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=hf;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nw=new Float32Array(1);var $f=class $f{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};$f.prototype.isMatrix2=!0;var ff=$f;function Xf(r,e,t,n){let i=$x(n);switch(t){case Pf:return r*e;case eu:return r*e/i.components*i.byteLength;case tu:return r*e/i.components*i.byteLength;case Jr:return r*e*2/i.components*i.byteLength;case nu:return r*e*2/i.components*i.byteLength;case If:return r*e*3/i.components*i.byteLength;case Hi:return r*e*4/i.components*i.byteLength;case iu:return r*e*4/i.components*i.byteLength;case $o:case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qo:case jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case su:case ou:return Math.max(r,16)*Math.max(e,8)/4;case ru:case au:return Math.max(r,8)*Math.max(e,8)/2;case lu:case cu:case hu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uu:case el:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _u:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Su:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case wu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Cu:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Iu:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case tl:case Du:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $x(r){switch(r){case jn:case Ef:return{byteLength:1,components:1};case Ra:case Af:case Gi:return{byteLength:2,components:1};case Qc:case jc:return{byteLength:2,components:4};case Vi:case Kc:case Ri:return{byteLength:4,components:1};case Rf:case Cf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function gg(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qx(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,p)=>h.start-p.start);let d=0;for(let h=1;h<f.length;h++){let p=f[d],x=f[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,p=f.length;h<p;h++){let x=f[h];r.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ev=`#ifdef USE_ALPHAHASH
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
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sv=`#ifdef USE_AOMAP
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
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
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
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fv=`#ifdef USE_IRIDESCENCE
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
#endif`,dv=`#ifdef USE_BUMPMAP
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
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sv=`#define PI 3.141592653589793
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
} // validated`,bv=`vec3 transformedNormal = objectNormal;
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
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zv=`#ifdef USE_GRADIENTMAP
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
}`,kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
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
#endif`,$v=`uniform sampler2D dfgLUT;
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
}`,Kv=`
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
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ny=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ly=`#if defined( USE_POINTS_UV )
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
#endif`,cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fy=`#if defined( USE_MORPHCOLORS )
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
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
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
#endif`,my=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,My=`#ifdef USE_NORMALMAP
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
#endif`,Sy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,by=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ly=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oy=`float getShadowMask() {
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
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zy=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
#endif`,Yy=`#ifdef USE_TRANSMISSION
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform float backgroundBlurriness;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
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
}`,sM=`#if DEPTH_PACKING == 3200
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
}`,aM=`#define DISTANCE
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
}`,oM=`#define DISTANCE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
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
}`,hM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,dM=`uniform vec3 diffuse;
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define MATCAP
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
}`,_M=`#define MATCAP
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
}`,xM=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,yM=`#define PHONG
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
}`,MM=`#define PHONG
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
}`,SM=`#define STANDARD
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
}`,bM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,wM=`#define TOON
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
}`,EM=`uniform float size;
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
}`,AM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,CM=`uniform vec3 color;
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
}`,PM=`uniform float rotation;
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
}`,IM=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:jx,alphahash_pars_fragment:ev,alphamap_fragment:tv,alphamap_pars_fragment:nv,alphatest_fragment:iv,alphatest_pars_fragment:rv,aomap_fragment:sv,aomap_pars_fragment:av,batching_pars_vertex:ov,batching_vertex:lv,begin_vertex:cv,beginnormal_vertex:uv,bsdfs:hv,iridescence_fragment:fv,bumpmap_pars_fragment:dv,clipping_planes_fragment:pv,clipping_planes_pars_fragment:mv,clipping_planes_pars_vertex:gv,clipping_planes_vertex:_v,color_fragment:xv,color_pars_fragment:vv,color_pars_vertex:yv,color_vertex:Mv,common:Sv,defaultnormal_vertex:bv,displacementmap_pars_vertex:Tv,displacementmap_vertex:wv,emissivemap_fragment:Ev,emissivemap_pars_fragment:Av,colorspace_fragment:Rv,colorspace_pars_fragment:Cv,envmap_fragment:Pv,envmap_common_pars_fragment:Iv,envmap_pars_fragment:Lv,envmap_pars_vertex:Dv,envmap_physical_pars_fragment:Wv,envmap_vertex:Nv,fog_vertex:Uv,fog_pars_vertex:Fv,fog_fragment:Ov,fog_pars_fragment:Bv,gradientmap_pars_fragment:zv,lightmap_pars_fragment:kv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Gv,lights_pars_begin:Hv,lights_toon_fragment:Xv,lights_toon_pars_fragment:qv,lights_phong_fragment:Yv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Jv,lights_physical_pars_fragment:$v,lights_fragment_begin:Kv,lights_fragment_maps:Qv,lights_fragment_end:jv,lightprobes_pars_fragment:ey,logdepthbuf_fragment:ty,logdepthbuf_pars_fragment:ny,logdepthbuf_pars_vertex:iy,logdepthbuf_vertex:ry,map_fragment:sy,map_pars_fragment:ay,map_particle_fragment:oy,map_particle_pars_fragment:ly,metalnessmap_fragment:cy,metalnessmap_pars_fragment:uy,morphinstance_vertex:hy,morphcolor_vertex:fy,morphnormal_vertex:dy,morphtarget_pars_vertex:py,morphtarget_vertex:my,normal_fragment_begin:gy,normal_fragment_maps:_y,normal_pars_fragment:xy,normal_pars_vertex:vy,normal_vertex:yy,normalmap_pars_fragment:My,clearcoat_normal_fragment_begin:Sy,clearcoat_normal_fragment_maps:by,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:wy,opaque_fragment:Ey,packing:Ay,premultiplied_alpha_fragment:Ry,project_vertex:Cy,dithering_fragment:Py,dithering_pars_fragment:Iy,roughnessmap_fragment:Ly,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:Ny,shadowmap_pars_vertex:Uy,shadowmap_vertex:Fy,shadowmask_pars_fragment:Oy,skinbase_vertex:By,skinning_pars_vertex:zy,skinning_vertex:ky,skinnormal_vertex:Vy,specularmap_fragment:Gy,specularmap_pars_fragment:Hy,tonemapping_fragment:Wy,tonemapping_pars_fragment:Xy,transmission_fragment:qy,transmission_pars_fragment:Yy,uv_pars_fragment:Zy,uv_pars_vertex:Jy,uv_vertex:$y,worldpos_vertex:Ky,background_vert:Qy,background_frag:jy,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:rM,depth_frag:sM,distance_vert:aM,distance_frag:oM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:hM,meshbasic_vert:fM,meshbasic_frag:dM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:_M,meshnormal_vert:xM,meshnormal_frag:vM,meshphong_vert:yM,meshphong_frag:MM,meshphysical_vert:SM,meshphysical_frag:bM,meshtoon_vert:TM,meshtoon_frag:wM,points_vert:EM,points_frag:AM,shadow_vert:RM,shadow_frag:CM,sprite_vert:PM,sprite_frag:IM},Ne={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},nr={basic:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:In([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:In([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:In([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new et(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:In([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:In([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:In([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:In([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:In([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:In([Ne.common,Ne.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:In([Ne.lights,Ne.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};nr.physical={uniforms:In([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Nu={r:0,b:0,g:0},LM=new Pt,_g=new tt;_g.set(-1,0,0,0,1,0,0,0,1);function DM(r,e,t,n,i,s){let a=new et(0),o=i===!0?0:1,l,c,u=null,f=0,d=null;function h(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function p(y){let S=!1,v=h(y);v===null?g(a,o):v&&v.isColor&&(g(v,1),S=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(y,S){let v=h(S);v&&v.isCubeTexture?(c===void 0&&(c=new Mt(new ji(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:As(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_g),c.material.toneMapped=gt.getTransfer(v.colorSpace)!==wt,(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Mt(new ki(2,2),new fi({name:"BackgroundMaterial",uniforms:As(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=gt.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(Nu,Gf(r)),t.buffers.color.setClear(Nu.r,Nu.g,Nu.b,S,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:p,addToRenderList:x,dispose:m}}function NM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(L,D,H,R,U){let z=!1,F=f(L,R,H,D);s!==F&&(s=F,c(s.object)),z=h(L,R,H,U),z&&p(L,R,H,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(L,D,H,R),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function f(L,D,H,R){let U=R.wireframe===!0,z=n[D.id];z===void 0&&(z={},n[D.id]=z);let F=L.isInstancedMesh===!0?L.id:0,J=z[F];J===void 0&&(J={},z[F]=J);let X=J[H.id];X===void 0&&(X={},J[H.id]=X);let I=X[U];return I===void 0&&(I=d(l()),X[U]=I),I}function d(L){let D=[],H=[],R=[];for(let U=0;U<t;U++)D[U]=0,H[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:R,object:L,attributes:{},index:null}}function h(L,D,H,R){let U=s.attributes,z=D.attributes,F=0,J=H.getAttributes();for(let X in J)if(J[X].location>=0){let ne=U[X],_e=z[X];if(_e===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),ne===void 0||ne.attribute!==_e||_e&&ne.data!==_e.data)return!0;F++}return s.attributesNum!==F||s.index!==R}function p(L,D,H,R){let U={},z=D.attributes,F=0,J=H.getAttributes();for(let X in J)if(J[X].location>=0){let ne=z[X];ne===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));let _e={};_e.attribute=ne,ne&&ne.data&&(_e.data=ne.data),U[X]=_e,F++}s.attributes=U,s.attributesNum=F,s.index=R}function x(){let L=s.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function g(L){m(L,0)}function m(L,D){let H=s.newAttributes,R=s.enabledAttributes,U=s.attributeDivisors;H[L]=1,R[L]===0&&(r.enableVertexAttribArray(L),R[L]=1),U[L]!==D&&(r.vertexAttribDivisor(L,D),U[L]=D)}function y(){let L=s.newAttributes,D=s.enabledAttributes;for(let H=0,R=D.length;H<R;H++)D[H]!==L[H]&&(r.disableVertexAttribArray(H),D[H]=0)}function S(L,D,H,R,U,z,F){F===!0?r.vertexAttribIPointer(L,D,H,U,z):r.vertexAttribPointer(L,D,H,R,U,z)}function v(L,D,H,R){x();let U=R.attributes,z=H.getAttributes(),F=D.defaultAttributeValues;for(let J in z){let X=z[J];if(X.location>=0){let I=U[J];if(I===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(I=L.instanceColor)),I!==void 0){let ne=I.normalized,_e=I.itemSize,De=e.get(I);if(De===void 0)continue;let K=De.buffer,he=De.type,Ee=De.bytesPerElement,Ce=he===r.INT||he===r.UNSIGNED_INT||I.gpuType===Kc;if(I.isInterleavedBufferAttribute){let ge=I.data,Re=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,Qe=I.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce,ge.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce);r.bindBuffer(r.ARRAY_BUFFER,K);for(let ce=0;ce<X.locationSize;ce++)S(X.location+ce,_e/X.locationSize,he,ne,Re*Ee,(Qe+_e/X.locationSize*ce)*Ee,Ce)}else{if(I.isInstancedBufferAttribute){for(let ge=0;ge<X.locationSize;ge++)m(X.location+ge,I.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ge=0;ge<X.locationSize;ge++)g(X.location+ge);r.bindBuffer(r.ARRAY_BUFFER,K);for(let ge=0;ge<X.locationSize;ge++)S(X.location+ge,_e/X.locationSize,he,ne,_e*Ee,_e/X.locationSize*ge*Ee,Ce)}}else if(F!==void 0){let ne=F[J];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(X.location,ne);break;case 3:r.vertexAttrib3fv(X.location,ne);break;case 4:r.vertexAttrib4fv(X.location,ne);break;default:r.vertexAttrib1fv(X.location,ne)}}}}y()}function M(){P();for(let L in n){let D=n[L];for(let H in D){let R=D[H];for(let U in R){let z=R[U];for(let F in z)u(z[F].object),delete z[F];delete R[U]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let H in D){let R=D[H];for(let U in R){let z=R[U];for(let F in z)u(z[F].object),delete z[F];delete R[U]}}delete n[L.id]}function _(L){for(let D in n){let H=n[D];for(let R in H){let U=H[R];if(U[L.id]===void 0)continue;let z=U[L.id];for(let F in z)u(z[F].object),delete z[F];delete U[L.id]}}}function b(L){for(let D in n){let H=n[D],R=L.isInstancedMesh===!0?L.id:0,U=H[R];if(U!==void 0){for(let z in U){let F=U[z];for(let J in F)u(F[J].object),delete F[J];delete U[z]}delete H[R],Object.keys(H).length===0&&delete n[D]}}}function P(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function UM(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function FM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==Hi&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==jn&&_!==Ri&&!b&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:T}}function OM(r){let e=this,t=null,n=0,i=!1,s=!1,a=new zi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=r.get(f);if(!i||p===null||p.length===0||s&&!g)s?u(null):c();else{let y=s?0:n,S=y*4,v=m.clippingState||null;l.value=v,v=u(p,d,S,h);for(let M=0;M!==S;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=h;S!==x;++S,v+=4)a.copy(f[S]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var sl=class extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ji(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Mr});s.uniforms.tEquirect.value=t;let a=new Mt(i,s),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=Sn),new Ta(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Jm=256,BM=3,zM=20,xg=256,vg=16,kM=3,VM=new V,GM=new et,$r=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ta(1,10,null),this._boxMesh=new Mt(new ji(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=VM}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(GM));let g=new Ta(n,i,u);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=p,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jm,Bf(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===Aa?this._setSize(e.image.length===0?Jm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=$m(e,!1,!1),n=Math.log2(e)-BM;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$m(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===Aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Km()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=HM(),this._integrationMaterial=WM());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/vg);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-kM)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(xg*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=XM());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function $m(r,e,t){return new sl(r,{minFilter:pi,generateMipmaps:e,type:Gi,colorSpace:po,depthBuffer:t})}function al(r,e,t){return new fi({name:r,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:un,blending:Mr,depthTest:!1,depthWrite:!1})}function HM(){return al("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xg}u

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
	`)}function WM(){return al("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:vg}},`

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
	`)}function XM(){return al("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zM}
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
	`)}function Km(){return al("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Qm(){return al("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qM(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){let h=d.mapping;if(h===Zc||h===Jc)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new sl(p.height);return x.fromEquirectangularTexture(r,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let h=d.mapping,p=h===Zc||h===Jc,x=h===Ts||h===Aa;if(p||x){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new $r(r)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new $r(r)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,h){return h===Zc?d.mapping=Ts:h===Jc&&(d.mapping=Aa),d}function l(d){let h=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&h++;return h===p}function c(d){let h=d.target;h.removeEventListener("dispose",c);let p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function YM(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&_s("WebGLRenderer: "+n+" extension not supported."),i}}}function ZM(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let x=s.get(p);x&&(e.remove(x),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function u(p){let x=p.attributes;for(let g in x)e.update(x[g],r.ARRAY_BUFFER)}function f(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let y=x!==null?x.array.length:g.array.length/3-1,S=g.count>=65535?yo:vo,v=new S(Math.ceil(y/3)*6,1),M=v.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,P=0;b<y;b+=3){let A=_[b+0],L=_[b+1],D=_[b+2];M[P++]=A,M[P++]=L,M[P++]=L,M[P++]=D,M[P++]=D,M[P++]=A}}else{m=g.version;for(let _=0,b=0;_<y;_+=3){let P=_+0,A=_+1,L=_+2;M[b++]=P,M[b++]=A,M[b++]=A,M[b++]=L,M[b++]=L,M[b++]=P}}v.version=m;let T=s.get(p);T&&e.remove(T),s.set(p,v)}function d(p){let x=s.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&f(p)}else f(p);return s.get(p)}function h(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function JM(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),t.update(d,n,1)}function c(f,d,h){h!==0&&(r.drawElementsInstanced(n,d,s,f*a,h),t.update(d,n,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,h);let x=0;for(let g=0;g<h;g++)x+=d[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $M(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function KM(r,e,t){let n=new WeakMap,i=new Nt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;h===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=o.attributes.position.count*S,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*M*4*f),_=new _o(T,v,M,f);_.type=Ri,_.needsUpdate=!0;let b=S*4;for(let A=0;A<f;A++){let L=g[A],D=m[A],H=y[A],R=v*M*4*A;for(let U=0;U<L.count;U++){let z=U*b;h===!0&&(i.fromBufferAttribute(L,U),T[R+z+0]=i.x,T[R+z+1]=i.y,T[R+z+2]=i.z,T[R+z+3]=0),p===!0&&(i.fromBufferAttribute(D,U),T[R+z+4]=i.x,T[R+z+5]=i.y,T[R+z+6]=i.z,T[R+z+7]=0),x===!0&&(i.fromBufferAttribute(H,U),T[R+z+8]=i.x,T[R+z+9]=i.y,T[R+z+10]=i.z,T[R+z+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:_,size:new Ae(v,M)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function QM(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var jM={[vf]:"LINEAR_TONE_MAPPING",[yf]:"REINHARD_TONE_MAPPING",[Mf]:"CINEON_TONE_MAPPING",[Zo]:"ACES_FILMIC_TONE_MAPPING",[bf]:"AGX_TONE_MAPPING",[Tf]:"NEUTRAL_TONE_MAPPING",[Sf]:"CUSTOM_TONE_MAPPING"};function eS(r,e,t,n,i,s){let a=new Gn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Hn;u.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let f=new Lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Mt(u,f),h=new Wo(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,y=null,S=[],v=!1;this.setSize=function(M,T){a.setSize(M,T),o!==null&&o.setSize(M,T),l!==null&&l.setSize(M,T);for(let _=0;_<S.length;_++){let b=S[_];b.setSize&&b.setSize(M,T)}},this.setEffects=function(M){S=M,v=S.length>0&&S[0].isRenderPass===!0;let T=a.width,_=a.height;S.length>0&&o===null&&(o=new Gn(T,_,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(T,_,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&S.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new yr(T,_),s===!0&&(c.format=Sr,c.type=ws)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<S.length;P++){let A=S[P];A.setSize&&A.setSize(T,_),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(M,T){if(g||M.toneMapping===er&&S.length===0)return!1;if(y=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return v===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=er,!0},this.hasRenderPass=function(){return v},this.end=function(M,T){M.toneMapping=m,g=!0;let _=a,b=o;for(let P=0;P<S.length;P++){let A=S[P];A.enabled!==!1&&(A.render(M,b,_,T),A.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(p!==M.outputColorSpace||x!==M.toneMapping){p=M.outputColorSpace,x=M.toneMapping,f.defines={},gt.getTransfer(p)===wt&&(f.defines.SRGB_TRANSFER="");let P=jM[x];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,M.setRenderTarget(y),M.render(d,h),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var yg=new Vn,Mg=new yr(1,1),Sg=new Ao(1),bg=new _o,Tg=new wc,wg=new Eo,jm=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function Pa(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=jm[i];if(s===void 0&&(s=new Float32Array(i),jm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ou(r,e){let t=eg[e];t===void 0&&(t=new Int32Array(e),eg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function iS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function rS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function sS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;ig.set(n),r.uniformMatrix2fv(this.addr,!1,ig),fn(t,n)}}function aS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;ng.set(n),r.uniformMatrix3fv(this.addr,!1,ng),fn(t,n)}}function oS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;tg.set(n),r.uniformMatrix4fv(this.addr,!1,tg),fn(t,n)}}function lS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function uS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function hS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function fS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function pS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function mS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function Bu(r){return r.version===0&&(r.compareFunction=Nf,r.needsUpdate=!0),r}function gS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Bu(Mg):s=yg,t.setTexture2D(e||s,i)}function _S(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tg,i)}function xS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Bu(Sg):s=wg,t.setTextureCube(e||s,i)}function vS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bg,i)}function yS(r){switch(r){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return aS;case 35676:return oS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return hS;case 5125:return fS;case 36294:return dS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return vS}}function MS(r,e){r.uniform1fv(this.addr,e)}function SS(r,e){let t=Pa(e,this.size,2);r.uniform2fv(this.addr,t)}function bS(r,e){let t=Pa(e,this.size,3);r.uniform3fv(this.addr,t)}function TS(r,e){let t=Pa(e,this.size,4);r.uniform4fv(this.addr,t)}function wS(r,e){let t=Pa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ES(r,e){let t=Pa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AS(r,e){let t=Pa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function RS(r,e){r.uniform1iv(this.addr,e)}function CS(r,e){r.uniform2iv(this.addr,e)}function PS(r,e){r.uniform3iv(this.addr,e)}function IS(r,e){r.uniform4iv(this.addr,e)}function LS(r,e){r.uniform1uiv(this.addr,e)}function DS(r,e){r.uniform2uiv(this.addr,e)}function NS(r,e){r.uniform3uiv(this.addr,e)}function US(r,e){r.uniform4uiv(this.addr,e)}function FS(r,e,t){let n=this.cache,i=e.length,s=Ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Bu(Mg):a=yg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function OS(r,e,t){let n=this.cache,i=e.length,s=Ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Tg,s[a])}function BS(r,e,t){let n=this.cache,i=e.length,s=Ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Bu(Sg):a=wg;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function zS(r,e,t){let n=this.cache,i=e.length,s=Ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bg,s[a])}function kS(r){switch(r){case 5126:return MS;case 35664:return SS;case 35665:return bS;case 35666:return TS;case 35674:return wS;case 35675:return ES;case 35676:return AS;case 5124:case 35670:return RS;case 35667:case 35671:return CS;case 35668:case 35672:return PS;case 35669:case 35673:return IS;case 5125:return LS;case 36294:return DS;case 36295:return NS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}var jf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yS(t.type)}},ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kS(t.type)}},td=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Kf=/(\w+)(\])?(\[|\.)?/g;function rg(r,e){r.seq.push(e),r.map[e.id]=e}function VS(r,e,t){let n=r.name,i=n.length;for(Kf.lastIndex=0;;){let s=Kf.exec(n),a=Kf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rg(t,c===void 0?new jf(o,r,e):new ed(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new td(o),rg(t,f)),t=f}}}var Ca=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);VS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function sg(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var GS=37297,HS=0;function WS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ag=new tt;function XS(r){gt._getMatrix(ag,gt.workingColorSpace,r);let e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(r)){case mo:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function og(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+WS(r.getShaderSource(e),o)}else return s}function qS(r,e){let t=XS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var YS={[vf]:"Linear",[yf]:"Reinhard",[Mf]:"Cineon",[Zo]:"ACESFilmic",[bf]:"AgX",[Tf]:"Neutral",[Sf]:"Custom"};function ZS(r,e){let t=YS[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uu=new V;function JS(){gt.getLuminanceCoefficients(Uu);let r=Uu.x.toFixed(4),e=Uu.y.toFixed(4),t=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $S(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function KS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function QS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function rl(r){return r!==""}function lg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function cg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jS=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(r){return r.replace(jS,eb)}function eb(r,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nd(t)}var tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(r){return r.replace(tb,nb)}function nb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var ib={[Yo]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function rb(r){return ib[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sb={[Aa]:"ENVMAP_MODE_REFRACTION"};function ab(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":sb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ob={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[bm]:"ENVMAP_BLENDING_MIX",[Tm]:"ENVMAP_BLENDING_ADD"};function lb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ob[r.combine]||"ENVMAP_BLENDING_NONE"}function cb(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rb(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ab(t),f=lb(t),d=$S(t),h=KS(s),p=i.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(rl).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(rl).join(`
`),g.length>0&&(g+=`
`)):(x=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),g=[hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?at.tonemapping_pars_fragment:"",t.toneMapping!==er?ZS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,qS("linearToOutputTexel",t.outputColorSpace),JS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),a=nd(a),a=lg(a,t),a=cg(a,t),o=nd(o),o=lg(o,t),o=cg(o,t),a=ug(a),o=ug(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=m+x+a,S=m+g+o,v=sg(i,i.VERTEX_SHADER,y),M=sg(i,i.FRAGMENT_SHADER,S);i.attachShader(p,v),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function T(A){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(v)||"",H=i.getShaderInfoLog(M)||"",R=L.trim(),U=D.trim(),z=H.trim(),F=!0,J=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,v,M);else{let X=og(i,v,"vertex"),I=og(i,M,"fragment");je("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+R+`
`+X+`
`+I)}else R!==""?Ke("WebGLProgram: Program Info Log:",R):(U===""||z==="")&&(J=!1);J&&(A.diagnostics={runnable:F,programLog:R,vertexShader:{log:U,prefix:x},fragmentShader:{log:z,prefix:g}})}i.deleteShader(v),i.deleteShader(M),_=new Ca(i,p),b=QS(i,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,GS)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=M,this}var ub=0,id=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rd(e),t.set(e,n)),n}},rd=class{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}};function hb(r){return r===Jr||r===el||r===tl}function fb(r,e,t,n,i,s){let a=new xo,o=new id,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,P,A,L,D){let H=A.fog,R=L.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||U,z),J=d[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Ke("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let I=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ne=I!==void 0?I.length:0,_e=0;R.morphAttributes.position!==void 0&&(_e=1),R.morphAttributes.normal!==void 0&&(_e=2),R.morphAttributes.color!==void 0&&(_e=3);let De,K,he,Ee;if(J){let j=nr[J];De=j.vertexShader,K=j.fragmentShader}else{De=_.vertexShader,K=_.fragmentShader;let j=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,j,fe),he=j.id,Ee=fe.id}let Ce=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,Qe=L.isBatchedMesh===!0,ce=!!_.map,ze=!!_.matcap,Pe=!!F,re=Pe&&F.isPMREMTexture===!0,de=!!_.aoMap,pe=!!_.lightMap,k=!!_.bumpMap&&_.wireframe===!1,Se=!!_.normalMap,xe=!!_.displacementMap,Oe=!!_.emissiveMap,Ge=!!_.metalnessMap,Je=!!_.roughnessMap,it=_.anisotropy>0,O=_.clearcoat>0,rt=_.diffuseRoughness>0,Ze=_.dispersion>0,$e=_.retroreflectivity>0,ye=_.iridescence>0,st=_.sheen>0,Fe=_.transmission>0,Ye=it&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,w=O&&!!_.clearcoatNormalMap,Y=O&&!!_.clearcoatRoughnessMap,ue=rt&&!!_.diffuseRoughnessMap,se=ye&&!!_.iridescenceMap,Me=ye&&!!_.iridescenceThicknessMap,Te=st&&!!_.sheenColorMap,$=st&&!!_.sheenRoughnessMap,oe=!!_.specularMap,ve=!!_.specularColorMap,N=!!_.specularIntensityMap,ae=Fe&&!!_.transmissionMap,ie=Fe&&!!_.thicknessMap,we=!!_.gradientMap,me=!!_.alphaMap,be=_.alphaTest>0,W=!!_.alphaHash,ee=!!_.extensions,q=er;_.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(q=r.toneMapping);let G=re?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,le={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:K,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Qe,batchingColor:Qe&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ce,matcap:ze,envMap:Pe,envMapMode:Pe&&F.mapping,envMapPMREM:re,envMapMaxLod:re?G.length-1:null,envMapSize:re?G[0].width:null,aoMap:de,lightMap:pe,bumpMap:k,normalMap:Se,displacementMap:xe,emissiveMap:Oe,normalMapObjectSpace:Se&&_.normalMapType===Am,normalMapTangentSpace:Se&&_.normalMapType===nl,packedNormalMap:Se&&_.normalMapType===nl&&hb(_.normalMap.format),metalnessMap:Ge,roughnessMap:Je,anisotropy:it,anisotropyMap:Ye,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:Y,diffuseRoughness:rt,diffuseRoughnessMap:ue,dispersion:Ze,retroreflection:$e,iridescence:ye,iridescenceMap:se,iridescenceThicknessMap:Me,sheen:st,sheenColorMap:Te,sheenRoughnessMap:$,specularMap:oe,specularColorMap:ve,specularIntensityMap:N,transmission:Fe,transmissionMap:ae,thicknessMap:ie,gradientMap:we,opaque:_.transparent===!1&&_.blending===Ea&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:be,alphaHash:W,combine:_.combine,mapUv:ce&&h(_.map.channel),aoMapUv:de&&h(_.aoMap.channel),lightMapUv:pe&&h(_.lightMap.channel),bumpMapUv:k&&h(_.bumpMap.channel),normalMapUv:Se&&h(_.normalMap.channel),displacementMapUv:xe&&h(_.displacementMap.channel),emissiveMapUv:Oe&&h(_.emissiveMap.channel),metalnessMapUv:Ge&&h(_.metalnessMap.channel),roughnessMapUv:Je&&h(_.roughnessMap.channel),anisotropyMapUv:Ye&&h(_.anisotropyMap.channel),clearcoatMapUv:C&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&h(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&h(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&h(_.sheenRoughnessMap.channel),specularMapUv:oe&&h(_.specularMap.channel),specularColorMapUv:ve&&h(_.specularColorMap.channel),specularIntensityMapUv:N&&h(_.specularIntensityMap.channel),transmissionMapUv:ae&&h(_.transmissionMap.channel),thicknessMapUv:ie&&h(_.thicknessMap.channel),alphaMapUv:me&&h(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Se||it),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(ce||me),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Se===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:_e,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.filter(j=>j.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:q,decodeVideoTexture:ce&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===wt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ai,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(b,_),m(b,_),b.push(r.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let b=d[_.type],P;if(b){let A=nr[b];P=qm.clone(A.uniforms)}else P=_.uniforms;return P}function S(_,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new cb(r,b,_,i),c.push(P),u.set(b,P)),P}function v(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:M,programs:c,dispose:T}}function db(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function pb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function fg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,p,x,g,m){let y=r[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},r[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=p,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=g,y.group=m),e++,y}function l(d,h,p,x,g,m,y){y.reversedDepth===!0&&(g=-g);let S=o(d,h,p,x,g,m);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):t.push(S)}function c(d,h,p,x,g,m){let y=o(d,h,p,x,g,m);p.transmission>0?n.unshift(y):p.transparent===!0?i.unshift(y):t.unshift(y)}function u(d,h){t.length>1&&t.sort(d||pb),n.length>1&&n.sort(h||fg),i.length>1&&i.sort(h||fg)}function f(){for(let d=e,h=r.length;d<h;d++){let p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function mb(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new dg,r.set(n,[a])):i>=s.length?(a=new dg,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function gb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new et};break;case"SpotLight":t={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function _b(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var xb=0;function vb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yb(r){let e=new gb,t=_b(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let i=new V,s=new Pt,a=new Pt;function o(c){let u=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,y=0,S=0,v=0,M=0,T=0,_=0,b=0,P=0,A=0;c.sort(vb);for(let D=0,H=c.length;D<H;D++){let R=c[D],U=R.color,z=R.intensity,F=R.distance,J=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Jr?J=R.shadow.map.texture:J=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=U.r*z,f+=U.g*z,d+=U.b*z;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],z);A++}else if(R.isSunLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let I=R.shadow,ne=t.get(R);ne.shadowIntensity=I.intensity,ne.shadowBias=I.bias,ne.shadowNormalBias=I.normalBias,ne.shadowRadius=I.radius,ne.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[p]=ne,n.sunShadowMap[p]=J;let _e=I.getViewportCount();for(let De=0;De<_e;De++)n.sunShadowMatrix[x+De]=I.getMatrix(De),n.sunShadowCascade[x+De]=I._cascadeData[De];x+=_e,p++}n.sun[h]=X,h++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let I=R.shadow,ne=t.get(R);ne.shadowIntensity=I.intensity,ne.shadowBias=I.bias,ne.shadowNormalBias=I.normalBias,ne.shadowRadius=I.radius,ne.shadowMapSize=I.mapSize,n.directionalShadow[g]=ne,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=R.shadow.matrix,M++}n.directional[g]=X,g++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(U).multiplyScalar(z),X.distance=F,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[y]=X;let I=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,I.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[y]=I.matrix,R.castShadow){let ne=t.get(R);ne.shadowIntensity=I.intensity,ne.shadowBias=I.bias,ne.shadowNormalBias=I.normalBias,ne.shadowRadius=I.radius,ne.shadowMapSize=I.mapSize,n.spotShadow[y]=ne,n.spotShadowMap[y]=J,_++}y++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(U).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[S]=X,S++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let I=R.shadow,ne=t.get(R);ne.shadowIntensity=I.intensity,ne.shadowBias=I.bias,ne.shadowNormalBias=I.normalBias,ne.shadowRadius=I.radius,ne.shadowMapSize=I.mapSize,ne.shadowCameraNear=I.camera.near,ne.shadowCameraFar=I.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=X,m++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(z),X.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[v]=X,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let L=n.hash;(L.sunLength!==h||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==_||L.numSpotMaps!==b||L.numLightProbes!==A)&&(n.sun.length=h,n.directional.length=g,n.spot.length=y,n.rectArea.length=S,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,L.sunLength=h,L.directionalLength=g,L.pointLength=m,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=_,L.numSpotMaps=b,L.numLightProbes=A,n.version=xb++)}function l(c,u){let f=0,d=0,h=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function pg(r){let e=new yb(r),t=[],n=[],i=[];function s(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),i.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Mb(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new pg(r),e.set(i,[o])):s>=a.length?(o=new pg(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bb=`uniform sampler2D shadow_pass;
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
}`,Tb=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],wb=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],mg=new Pt,il=new V,Qf=new V;function Eb(r,e,t){let n=new Hr,i=new Ae,s=new Ae,a=new Nt,o=new Dc,l=new Nc,c={},u=t.maxTextureSize,f={[Zr]:un,[un]:Zr,[Ai]:Ai},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Sb,fragmentShader:bb}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let p=new Hn;p.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Mt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let m=this.type;this.render=function(T,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===rm&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yo);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Mr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=m!==this.type;H&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=T.length;R<U;R++){let z=T[R],F=z.shadow;if(F===void 0){Ke("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let J=F.getFrameExtents();i.multiply(J),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,F.mapSize.y=s.y));let X=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||H===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===wa){if(z.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Gn(i.x,i.y,{format:Jr,type:Gi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new yr(i.x,i.y,Ri),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=gr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=_n,F.map.depthTexture.magFilter=_n}else z.isPointLight?(F.map=new sl(i.x),F.map.depthTexture=new Ao(i.x,Vi)):(F.map=new Gn(i.x,i.y),F.map.depthTexture=new yr(i.x,i.y,Vi)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=gr,this.type===Yo?(F.map.depthTexture.compareFunction=X?Df:Lf,F.map.depthTexture.minFilter=Sn,F.map.depthTexture.magFilter=Sn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=_n,F.map.depthTexture.magFilter=_n);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let I=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();z.isPointLight!==!0&&F.updateMatrices(z,b);let ne=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let _e=0;_e<I;_e++){let De=F.getCamera(_e);if(z.isPointLight){let K=F.camera,he=F.matrix,Ee=z.distance||K.far;Ee!==K.far&&(K.far=Ee,K.updateProjectionMatrix()),il.setFromMatrixPosition(z.matrixWorld),K.position.copy(il),Qf.copy(K.position),Qf.add(Tb[_e]),K.up.copy(wb[_e]),K.lookAt(Qf),K.updateMatrixWorld(),he.makeTranslation(-il.x,-il.y,-il.z),mg.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(mg,K.coordinateSystem,K.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,_e),r.clear();else{_e===0&&(r.setRenderTarget(F.map),r.clear());let K=F.getViewport(_e);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),D.viewport(a)}n=F.getFrustum(_e),v(_,b,De,z,ne,this.type)}F.isPointLightShadow!==!0&&this.type===wa&&y(F,b),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(P,A,L)};function y(T,_){let b=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new Gn(i.x,i.y,{format:Jr,type:Gi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(_,null,b,d,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(_,null,b,h,x,null)}function S(T,_,b,P){let A=null,L=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)A=L;else if(A=b.isPointLight===!0?l:o,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let D=A.uuid,H=_.uuid,R=c[D];R===void 0&&(R={},c[D]=R);let U=R[H];U===void 0&&(U=A.clone(),R[H]=U,_.addEventListener("dispose",M)),A=U}if(A.visible=_.visible,A.wireframe=_.wireframe,P===wa?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:f[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=b}return A}function v(T,_,b,P,A,L){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===wa)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let R=e.update(T),U=T.material;if(Array.isArray(U)){let z=R.groups;for(let F=0,J=z.length;F<J;F++){let X=z[F],I=U[X.materialIndex];if(I&&I.visible){let ne=S(T,I,P,L);T.onBeforeShadow(r,T,_,b,R,ne,X),r.renderBufferDirect(b,null,R,ne,T,X),T.onAfterShadow(r,T,_,b,R,ne,X)}}}else if(U.visible){let z=S(T,U,P,L);T.onBeforeShadow(r,T,_,b,R,z,null),r.renderBufferDirect(b,null,R,z,T,null),T.onAfterShadow(r,T,_,b,R,z,null)}}let H=T.children;for(let R=0,U=H.length;R<U;R++)v(H[R],_,b,P,A,L)}function M(T){T.target.removeEventListener("dispose",M);for(let b in c){let P=c[b],A=T.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function Ab(r,e){function t(){let N=!1,ae=new Nt,ie=null,we=new Nt(0,0,0,0);return{setMask:function(me){ie!==me&&!N&&(r.colorMask(me,me,me,me),ie=me)},setLocked:function(me){N=me},setClear:function(me,be,W,ee,q){q===!0&&(me*=ee,be*=ee,W*=ee),ae.set(me,be,W,ee),we.equals(ae)===!1&&(r.clearColor(me,be,W,ee),we.copy(ae))},reset:function(){N=!1,ie=null,we.set(-1,0,0,0)}}}function n(){let N=!1,ae=!1,ie=null,we=null,me=null;return{setReversed:function(be){if(ae!==be){let W=e.get("EXT_clip_control");be?W.clipControlEXT(W.LOWER_LEFT_EXT,W.ZERO_TO_ONE_EXT):W.clipControlEXT(W.LOWER_LEFT_EXT,W.NEGATIVE_ONE_TO_ONE_EXT),ae=be;let ee=me;me=null,this.setClear(ee)}},getReversed:function(){return ae},setTest:function(be){be?ge(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(be){ie!==be&&!N&&(r.depthMask(be),ie=be)},setFunc:function(be){if(ae&&(be=Bm[be]),we!==be){switch(be){case pc:r.depthFunc(r.NEVER);break;case mc:r.depthFunc(r.ALWAYS);break;case gc:r.depthFunc(r.LESS);break;case ca:r.depthFunc(r.LEQUAL);break;case _c:r.depthFunc(r.EQUAL);break;case xc:r.depthFunc(r.GEQUAL);break;case vc:r.depthFunc(r.GREATER);break;case yc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}we=be}},setLocked:function(be){N=be},setClear:function(be){me!==be&&(me=be,ae&&(be=1-be),r.clearDepth(be))},reset:function(){N=!1,ie=null,we=null,me=null,ae=!1}}}function i(){let N=!1,ae=null,ie=null,we=null,me=null,be=null,W=null,ee=null,q=null;return{setTest:function(G){N||(G?ge(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(G){ae!==G&&!N&&(r.stencilMask(G),ae=G)},setFunc:function(G,le,j){(ie!==G||we!==le||me!==j)&&(r.stencilFunc(G,le,j),ie=G,we=le,me=j)},setOp:function(G,le,j){(be!==G||W!==le||ee!==j)&&(r.stencilOp(G,le,j),be=G,W=le,ee=j)},setLocked:function(G){N=G},setClear:function(G){q!==G&&(r.clearStencil(G),q=G)},reset:function(){N=!1,ae=null,ie=null,we=null,me=null,be=null,W=null,ee=null,q=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,u={},f={},d={},h=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,v=null,M=null,T=null,_=null,b=new et(0,0,0),P=0,A=!1,L=null,D=null,H=null,R=null,U=null,z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,J=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=J>=2);let I=null,ne={},_e=r.getParameter(r.SCISSOR_BOX),De=r.getParameter(r.VIEWPORT),K=new Nt().fromArray(_e),he=new Nt().fromArray(De);function Ee(N,ae,ie,we){let me=new Uint8Array(4),be=r.createTexture();r.bindTexture(N,be),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let W=0;W<ie;W++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,me):r.texImage2D(ae+W,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,me);return be}let Ce={};Ce[r.TEXTURE_2D]=Ee(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=Ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[r.TEXTURE_2D_ARRAY]=Ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=Ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(r.DEPTH_TEST),a.setFunc(ca),k(!1),Se(df),ge(r.CULL_FACE),de(Mr);function ge(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function Re(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function Qe(N,ae){return d[N]!==ae?(r.bindFramebuffer(N,ae),d[N]=ae,N===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ae),N===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function ce(N,ae){let ie=p,we=!1;if(N){ie=h.get(ae),ie===void 0&&(ie=[],h.set(ae,ie));let me=N.textures;if(ie.length!==me.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let be=0,W=me.length;be<W;be++)ie[be]=r.COLOR_ATTACHMENT0+be;ie.length=me.length,we=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,we=!0);we&&r.drawBuffers(ie)}function ze(N){return x!==N?(r.useProgram(N),x=N,!0):!1}let Pe={[bs]:r.FUNC_ADD,[am]:r.FUNC_SUBTRACT,[om]:r.FUNC_REVERSE_SUBTRACT};Pe[lm]=r.MIN,Pe[cm]=r.MAX;let re={[um]:r.ZERO,[hm]:r.ONE,[fm]:r.SRC_COLOR,[_f]:r.SRC_ALPHA,[xm]:r.SRC_ALPHA_SATURATE,[gm]:r.DST_COLOR,[pm]:r.DST_ALPHA,[dm]:r.ONE_MINUS_SRC_COLOR,[xf]:r.ONE_MINUS_SRC_ALPHA,[_m]:r.ONE_MINUS_DST_COLOR,[mm]:r.ONE_MINUS_DST_ALPHA,[vm]:r.CONSTANT_COLOR,[ym]:r.ONE_MINUS_CONSTANT_COLOR,[Mm]:r.CONSTANT_ALPHA,[Sm]:r.ONE_MINUS_CONSTANT_ALPHA};function de(N,ae,ie,we,me,be,W,ee,q,G){if(N===Mr){g===!0&&(Re(r.BLEND),g=!1);return}if(g===!1&&(ge(r.BLEND),g=!0),N!==sm){if(N!==m||G!==A){if((y!==bs||M!==bs)&&(r.blendEquation(r.FUNC_ADD),y=bs,M=bs),G)switch(N){case Ea:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pf:r.blendFunc(r.ONE,r.ONE);break;case mf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:je("WebGLState: Invalid blending: ",N);break}else switch(N){case Ea:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pf:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mf:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gf:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",N);break}S=null,v=null,T=null,_=null,b.set(0,0,0),P=0,m=N,A=G}return}me=me||ae,be=be||ie,W=W||we,(ae!==y||me!==M)&&(r.blendEquationSeparate(Pe[ae],Pe[me]),y=ae,M=me),(ie!==S||we!==v||be!==T||W!==_)&&(r.blendFuncSeparate(re[ie],re[we],re[be],re[W]),S=ie,v=we,T=be,_=W),(ee.equals(b)===!1||q!==P)&&(r.blendColor(ee.r,ee.g,ee.b,q),b.copy(ee),P=q),m=N,A=!1}function pe(N,ae){N.side===Ai?Re(r.CULL_FACE):ge(r.CULL_FACE);let ie=N.side===un;ae&&(ie=!ie),k(ie),N.blending===Ea&&N.transparent===!1?de(Mr):de(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let we=N.stencilWrite;o.setTest(we),we&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function k(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function Se(N){N!==nm?(ge(r.CULL_FACE),N!==D&&(N===df?r.cullFace(r.BACK):N===im?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),D=N}function xe(N){N!==H&&(F&&r.lineWidth(N),H=N)}function Oe(N,ae,ie){N?(ge(r.POLYGON_OFFSET_FILL),(R!==ae||U!==ie)&&(R=ae,U=ie,a.getReversed()&&(ae=-ae,ie=-ie),r.polygonOffset(ae,ie))):Re(r.POLYGON_OFFSET_FILL)}function Ge(N){N?ge(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Je(N){N===void 0&&(N=r.TEXTURE0+z-1),I!==N&&(r.activeTexture(N),I=N)}function it(N,ae,ie){ie===void 0&&(I===null?ie=r.TEXTURE0+z-1:ie=I);let we=ne[ie];we===void 0&&(we={type:void 0,texture:void 0},ne[ie]=we),(we.type!==N||we.texture!==ae)&&(I!==ie&&(r.activeTexture(ie),I=ie),r.bindTexture(N,ae||Ce[N]),we.type=N,we.texture=ae)}function O(){let N=ne[I];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function rt(){try{r.compressedTexImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function Ze(){try{r.compressedTexImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function $e(){try{r.texSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function ye(){try{r.texSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function st(){try{r.compressedTexSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function Fe(){try{r.compressedTexSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function Ye(){try{r.texStorage2D(...arguments)}catch(N){je("WebGLState:",N)}}function C(){try{r.texStorage3D(...arguments)}catch(N){je("WebGLState:",N)}}function w(){try{r.texImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function Y(){try{r.texImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function ue(N){return f[N]!==void 0?f[N]:r.getParameter(N)}function se(N,ae){f[N]!==ae&&(r.pixelStorei(N,ae),f[N]=ae)}function Me(N){K.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function Te(N){he.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),he.copy(N))}function $(N,ae){let ie=c.get(ae);ie===void 0&&(ie=new WeakMap,c.set(ae,ie));let we=ie.get(N);we===void 0&&(we=r.getUniformBlockIndex(ae,N.name),r.uniformBlockBinding(ae,we,we),ie.set(N,we))}function oe(N,ae,ie){let me=c.get(ae).get(N);l[me]!==ie&&(r.bindBufferBase(r.UNIFORM_BUFFER,me,ie),l[me]=ie)}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},I=null,ne={},d={},l={},h=new WeakMap,p=[],x=null,g=!1,m=null,y=null,S=null,v=null,M=null,T=null,_=null,b=new et(0,0,0),P=0,A=!1,L=null,D=null,H=null,R=null,U=null,K.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ge,disable:Re,bindFramebuffer:Qe,drawBuffers:ce,useProgram:ze,setBlending:de,setMaterial:pe,setFlipSided:k,setCullFace:Se,setLineWidth:xe,setPolygonOffset:Oe,setScissorTest:Ge,activeTexture:Je,bindTexture:it,unbindTexture:O,compressedTexImage2D:rt,compressedTexImage3D:Ze,texImage2D:w,texImage3D:Y,pixelStorei:se,getParameter:ue,updateUBOMapping:$,uniformBlockBinding:oe,texStorage2D:Ye,texStorage3D:C,texSubImage2D:$e,texSubImage3D:ye,compressedTexSubImage2D:st,compressedTexSubImage3D:Fe,scissor:Me,viewport:Te,reset:ve}}function Rb(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap,f=new Set,d,h=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,w){return g?new OffscreenCanvas(C,w):go("canvas")}function y(C,w,Y){let ue=1,se=Ye(C);if((se.width>Y||se.height>Y)&&(ue=Y/Math.max(se.width,se.height)),ue<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Me=Math.floor(ue*se.width),Te=Math.floor(ue*se.height);d===void 0&&(d=m(Me,Te));let $=w?m(Me,Te):d;return $.width=Me,$.height=Te,$.getContext("2d").drawImage(C,0,0,Me,Te),Ke("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Me+"x"+Te+")."),$}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function S(C){return C.generateMipmaps}function v(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(C,w,Y,ue,se,Me=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Te;ue&&(Te=e.get("EXT_texture_norm16"),Te||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=w;if(w===r.RED&&(Y===r.FLOAT&&($=r.R32F),Y===r.HALF_FLOAT&&($=r.R16F),Y===r.UNSIGNED_BYTE&&($=r.R8),Y===r.UNSIGNED_SHORT&&Te&&($=Te.R16_EXT),Y===r.SHORT&&Te&&($=Te.R16_SNORM_EXT)),w===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&($=r.R8UI),Y===r.UNSIGNED_SHORT&&($=r.R16UI),Y===r.UNSIGNED_INT&&($=r.R32UI),Y===r.BYTE&&($=r.R8I),Y===r.SHORT&&($=r.R16I),Y===r.INT&&($=r.R32I)),w===r.RG&&(Y===r.FLOAT&&($=r.RG32F),Y===r.HALF_FLOAT&&($=r.RG16F),Y===r.UNSIGNED_BYTE&&($=r.RG8),Y===r.UNSIGNED_SHORT&&Te&&($=Te.RG16_EXT),Y===r.SHORT&&Te&&($=Te.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&($=r.RG8UI),Y===r.UNSIGNED_SHORT&&($=r.RG16UI),Y===r.UNSIGNED_INT&&($=r.RG32UI),Y===r.BYTE&&($=r.RG8I),Y===r.SHORT&&($=r.RG16I),Y===r.INT&&($=r.RG32I)),w===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&($=r.RGB8UI),Y===r.UNSIGNED_SHORT&&($=r.RGB16UI),Y===r.UNSIGNED_INT&&($=r.RGB32UI),Y===r.BYTE&&($=r.RGB8I),Y===r.SHORT&&($=r.RGB16I),Y===r.INT&&($=r.RGB32I)),w===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&($=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&($=r.RGBA16UI),Y===r.UNSIGNED_INT&&($=r.RGBA32UI),Y===r.BYTE&&($=r.RGBA8I),Y===r.SHORT&&($=r.RGBA16I),Y===r.INT&&($=r.RGBA32I)),w===r.RGB&&(Y===r.UNSIGNED_SHORT&&Te&&($=Te.RGB16_EXT),Y===r.SHORT&&Te&&($=Te.RGB16_SNORM_EXT),Y===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),w===r.RGBA){let oe=Me?mo:gt.getTransfer(se);Y===r.FLOAT&&($=r.RGBA32F),Y===r.HALF_FLOAT&&($=r.RGBA16F),Y===r.UNSIGNED_BYTE&&($=oe===wt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT&&Te&&($=Te.RGBA16_EXT),Y===r.SHORT&&Te&&($=Te.RGBA16_SNORM_EXT),Y===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(C,w){let Y;return C?w===null||w===Vi||w===ws?Y=r.DEPTH24_STENCIL8:w===Ri?Y=r.DEPTH32F_STENCIL8:w===Ra&&(Y=r.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===ws?Y=r.DEPTH_COMPONENT24:w===Ri?Y=r.DEPTH_COMPONENT32F:w===Ra&&(Y=r.DEPTH_COMPONENT16),Y}function b(C,w){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==_n&&C.minFilter!==Sn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function P(C){let w=new WeakRef(C);n.get(C).__ref=w,p.add(w),x.register(C,w,w)}function A(C){let w=n.get(C).__ref;w!==void 0&&(p.delete(w),x.unregister(w))}function L(C){H(C.target)}function D(C){R(C.target)}function H(C){C.removeEventListener("dispose",L),A(C),z(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&f.delete(C)}function R(C){C.removeEventListener("dispose",D),A(C),J(C)}function U(){for(let C of p){let w=C.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):H(w))}p.clear(),f.clear()}function z(C){let w=n.get(C);if(w.__webglInit===void 0)return;let Y=C.source,ue=h.get(Y);if(ue){let se=ue[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&F(C),Object.keys(ue).length===0&&h.delete(Y)}n.remove(C)}function F(C){let w=n.get(C);r.deleteTexture(w.__webglTexture);let Y=C.source,ue=h.get(Y);delete ue[w.__cacheKey],a.memory.textures--}function J(C){let w=n.get(C);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Y=C.depthTexture;if(Y&&Y.renderTarget===C&&H(Y),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let Me=0;Me<w.__webglFramebuffer[se].length;Me++)r.deleteFramebuffer(w.__webglFramebuffer[se][Me]);else r.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)r.deleteFramebuffer(w.__webglFramebuffer[se]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ue=C.textures;for(let se=0,Me=ue.length;se<Me;se++){let Te=n.get(ue[se]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(ue[se])}n.remove(C)}let X=0;function I(){X=0}function ne(){return X}function _e(C){X=C}function De(){let C=X;return C>=i.maxTextures&&Ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,C}function K(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function he(C,w){let Y=n.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&Y.__version!==C.version){let ue=C.image;if(ue===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Y,C,w);return}}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+w)}function Ee(C,w){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){pe(Y,C,w);return}else C.isExternalTexture&&(Y.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+w)}function Ce(C,w){let Y=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){pe(Y,C,w);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+w)}function ge(C,w){let Y=n.get(C);if(C.version>0&&Y.__version!==C.version){k(Y,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+w)}let Re={[ua]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[Mc]:r.MIRRORED_REPEAT},Qe={[_n]:r.NEAREST,[wm]:r.NEAREST_MIPMAP_NEAREST,[Jo]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[$c]:r.LINEAR_MIPMAP_NEAREST,[pi]:r.LINEAR_MIPMAP_LINEAR},ce={[Cm]:r.NEVER,[Nf]:r.ALWAYS,[Pm]:r.LESS,[Lf]:r.LEQUAL,[Im]:r.EQUAL,[Df]:r.GEQUAL,[Lm]:r.GREATER,[Dm]:r.NOTEQUAL};function ze(C,w){if(w.type===Ri&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Sn||w.magFilter===$c||w.magFilter===Jo||w.magFilter===pi||w.minFilter===Sn||w.minFilter===$c||w.minFilter===Jo||w.minFilter===pi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Re[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Re[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Re[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,Qe[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,Qe[w.minFilter]),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==Jo&&w.minFilter!==pi||w.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Pe(C,w){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",L),P(w));let ue=w.source,se=h.get(ue);se===void 0&&(se={},h.set(ue,se));let Me=K(w);if(Me!==C.__cacheKey){se[Me]===void 0&&(se[Me]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),se[Me].usedTimes++;let Te=se[C.__cacheKey];Te!==void 0&&(se[C.__cacheKey].usedTimes--,Te.usedTimes===0&&F(w)),C.__cacheKey=Me,C.__webglTexture=se[Me].texture}return Y}function re(C,w,Y){return Math.floor(Math.floor(C/Y)/w)}function de(C,w,Y,ue){let Me=C.updateRanges;if(Me.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,Y,ue,w.data);else{Me.sort((N,ae)=>N.start-ae.start);let Te=0;for(let N=1;N<Me.length;N++){let ae=Me[Te],ie=Me[N],we=ae.start+ae.count,me=re(ie.start,w.width,4),be=re(ae.start,w.width,4);ie.start<=we+1&&me===be&&re(ie.start+ie.count-1,w.width,4)===me?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++Te,Me[Te]=ie)}Me.length=Te+1;let $=t.getParameter(r.UNPACK_ROW_LENGTH),oe=t.getParameter(r.UNPACK_SKIP_PIXELS),ve=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let N=0,ae=Me.length;N<ae;N++){let ie=Me[N],we=Math.floor(ie.start/4),me=Math.ceil(ie.count/4),be=we%w.width,W=Math.floor(we/w.width),ee=me,q=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,be),t.pixelStorei(r.UNPACK_SKIP_ROWS,W),t.texSubImage2D(r.TEXTURE_2D,0,be,W,ee,q,Y,ue,w.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,$),t.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function pe(C,w,Y){let ue=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=r.TEXTURE_3D);let se=Pe(C,w),Me=w.source;t.bindTexture(ue,C.__webglTexture,r.TEXTURE0+Y);let Te=n.get(Me);if(Me.version!==Te.__version||se===!0){if(t.activeTexture(r.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let q=gt.getPrimaries(gt.workingColorSpace),G=w.colorSpace===br?null:gt.getPrimaries(w.colorSpace),le=w.colorSpace===br||q===G?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let oe=y(w.image,!1,i.maxTextureSize);oe=Fe(w,oe);let ve=s.convert(w.format,w.colorSpace),N=s.convert(w.type),ae=T(w.internalFormat,ve,N,w.normalized,w.colorSpace,w.isVideoTexture);ze(ue,w);let ie,we=w.mipmaps,me=w.isVideoTexture!==!0,be=Te.__version===void 0||se===!0,W=Me.dataReady,ee=b(w,oe);if(w.isDepthTexture)ae=_(w.format===Sr,w.type),be&&(me?t.texStorage2D(r.TEXTURE_2D,1,ae,oe.width,oe.height):t.texImage2D(r.TEXTURE_2D,0,ae,oe.width,oe.height,0,ve,N,null));else if(w.isDataTexture)if(we.length>0){me&&be&&t.texStorage2D(r.TEXTURE_2D,ee,ae,we[0].width,we[0].height);for(let q=0,G=we.length;q<G;q++)ie=we[q],me?W&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ie.width,ie.height,ve,N,ie.data):t.texImage2D(r.TEXTURE_2D,q,ae,ie.width,ie.height,0,ve,N,ie.data);w.generateMipmaps=!1}else me?(be&&t.texStorage2D(r.TEXTURE_2D,ee,ae,oe.width,oe.height),W&&de(w,oe,ve,N)):t.texImage2D(r.TEXTURE_2D,0,ae,oe.width,oe.height,0,ve,N,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){me&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,ae,we[0].width,we[0].height,oe.depth);for(let q=0,G=we.length;q<G;q++)if(ie=we[q],w.format!==Hi)if(ve!==null)if(me){if(W)if(w.layerUpdates.size>0){let le=Xf(ie.width,ie.height,w.format,w.type);for(let j of w.layerUpdates){let fe=ie.data.subarray(j*le/ie.data.BYTES_PER_ELEMENT,(j+1)*le/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,j,ie.width,ie.height,1,ve,fe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ie.width,ie.height,oe.depth,ve,ie.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,ae,ie.width,ie.height,oe.depth,0,ie.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?W&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ie.width,ie.height,oe.depth,ve,N,ie.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,ae,ie.width,ie.height,oe.depth,0,ve,N,ie.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{me&&be&&t.texStorage2D(r.TEXTURE_2D,ee,ae,we[0].width,we[0].height);for(let q=0,G=we.length;q<G;q++)ie=we[q],w.format!==Hi?ve!==null?me?W&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ie.width,ie.height,ve,ie.data):t.compressedTexImage2D(r.TEXTURE_2D,q,ae,ie.width,ie.height,0,ie.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?W&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ie.width,ie.height,ve,N,ie.data):t.texImage2D(r.TEXTURE_2D,q,ae,ie.width,ie.height,0,ve,N,ie.data)}else if(w.isDataArrayTexture)if(me){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ee,ae,oe.width,oe.height,oe.depth),W)if(w.layerUpdates.size>0){let q=Xf(oe.width,oe.height,w.format,w.type);for(let G of w.layerUpdates){let le=oe.data.subarray(G*q/oe.data.BYTES_PER_ELEMENT,(G+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,G,oe.width,oe.height,1,ve,N,le)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,N,oe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ae,oe.width,oe.height,oe.depth,0,ve,N,oe.data);else if(w.isData3DTexture)me?(be&&t.texStorage3D(r.TEXTURE_3D,ee,ae,oe.width,oe.height,oe.depth),W&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,N,oe.data)):t.texImage3D(r.TEXTURE_3D,0,ae,oe.width,oe.height,oe.depth,0,ve,N,oe.data);else if(w.isFramebufferTexture){if(be)if(me)t.texStorage2D(r.TEXTURE_2D,ee,ae,oe.width,oe.height);else{let q=oe.width,G=oe.height;for(let le=0;le<ee;le++)t.texImage2D(r.TEXTURE_2D,le,ae,q,G,0,ve,N,null),q>>=1,G>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let q=r.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),oe.parentNode!==q){q.appendChild(oe),f.add(w),q.onpaint=G=>{let le=G.changedElements;for(let j of f)le.includes(j.image)&&(j.needsUpdate=!0)},q.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,oe);else{let le=r.RGBA,j=r.RGBA,fe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,le,j,fe,oe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(we.length>0){if(me&&be){let q=Ye(we[0]);t.texStorage2D(r.TEXTURE_2D,ee,ae,q.width,q.height)}for(let q=0,G=we.length;q<G;q++)ie=we[q],me?W&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,ve,N,ie):t.texImage2D(r.TEXTURE_2D,q,ae,ve,N,ie);w.generateMipmaps=!1}else if(me){if(be){let q=Ye(oe);t.texStorage2D(r.TEXTURE_2D,ee,ae,q.width,q.height)}W&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,N,oe)}else t.texImage2D(r.TEXTURE_2D,0,ae,ve,N,oe);S(w)&&w.mipmapsAutoUpdate===!0&&v(ue),Te.__version=Me.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function k(C,w,Y){if(w.image.length!==6)return;let ue=Pe(C,w),se=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);let Me=n.get(se);if(se.version!==Me.__version||ue===!0){t.activeTexture(r.TEXTURE0+Y);let Te=gt.getPrimaries(gt.workingColorSpace),$=w.colorSpace===br?null:gt.getPrimaries(w.colorSpace),oe=w.colorSpace===br||Te===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let ve=w.isCompressedTexture||w.image[0].isCompressedTexture,N=w.image[0]&&w.image[0].isDataTexture,ae=[];for(let j=0;j<6;j++)!ve&&!N?ae[j]=y(w.image[j],!0,i.maxCubemapSize):ae[j]=N?w.image[j].image:w.image[j],ae[j]=Fe(w,ae[j]);let ie=ae[0],we=s.convert(w.format,w.colorSpace),me=s.convert(w.type),be=T(w.internalFormat,we,me,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,ee=Me.__version===void 0||ue===!0,q=se.dataReady,G=b(w,ie);ze(r.TEXTURE_CUBE_MAP,w);let le;if(w.isDepthTexture){if(be=_(w.format===Sr,w.type),ee)if(W)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,be,ie.width,ie.height);else for(let j=0;j<6;j++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,be,ie.width,ie.height,0,we,me,null)}else if(ve){W&&ee&&t.texStorage2D(r.TEXTURE_CUBE_MAP,G,be,ie.width,ie.height);for(let j=0;j<6;j++){le=ae[j].mipmaps;for(let fe=0;fe<le.length;fe++){let Be=le[fe];w.format!==Hi?we!==null?W?q&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,Be.width,Be.height,we,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,be,Be.width,Be.height,0,Be.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,Be.width,Be.height,we,me,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,be,Be.width,Be.height,0,we,me,Be.data)}}}else{if(le=w.mipmaps,W&&ee){le.length>0&&G++;let j=Ye(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,G,be,j.width,j.height)}for(let j=0;j<6;j++)if(N){W?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ae[j].width,ae[j].height,we,me,ae[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,be,ae[j].width,ae[j].height,0,we,me,ae[j].data);for(let fe=0;fe<le.length;fe++){let Xe=le[fe].image[j].image;W?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Xe.width,Xe.height,we,me,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,be,Xe.width,Xe.height,0,we,me,Xe.data)}}else{W?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,me,ae[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,be,we,me,ae[j]);for(let fe=0;fe<le.length;fe++){let Be=le[fe];W?q&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,we,me,Be.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,be,we,me,Be.image[j])}}}S(w)&&w.mipmapsAutoUpdate===!0&&v(r.TEXTURE_CUBE_MAP),Me.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Se(C,w,Y,ue,se,Me){let Te=s.convert(Y.format,Y.colorSpace),$=s.convert(Y.type),oe=T(Y.internalFormat,Te,$,Y.normalized,Y.colorSpace),ve=n.get(w),N=n.get(Y);if(N.__renderTarget=w,!ve.__hasExternalTextures){let ae=Math.max(1,w.width>>Me),ie=Math.max(1,w.height>>Me);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,Me,oe,ae,ie,w.depth,0,Te,$,null):t.texImage2D(se,Me,oe,ae,ie,0,Te,$,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ye(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,se,N.__webglTexture,0,$e(w)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ue,se,N.__webglTexture,Me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(C,w,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer){let ue=w.depthTexture,se=ue&&ue.isDepthTexture?ue.type:null,Me=_(w.stencilBuffer,se),Te=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ye(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e(w),Me,w.width,w.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e(w),Me,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Me,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,C)}else{let ue=w.textures;for(let se=0;se<ue.length;se++){let Me=ue[se],Te=s.convert(Me.format,Me.colorSpace),$=s.convert(Me.type),oe=T(Me.internalFormat,Te,$,Me.normalized,Me.colorSpace);ye(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$e(w),oe,w.width,w.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,$e(w),oe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,oe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Oe(C,w,Y){let ue=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(w.depthTexture);se.__renderTarget=w;let Me=ue?w.depthTexture.image[0]:w.depthTexture.image;(!se.__webglTexture||Me.width!==w.width||Me.height!==w.height)&&(Me.width=w.width,Me.height=w.height,w.depthTexture.needsUpdate=!0),ue?ge(w.depthTexture,0):he(w.depthTexture,0);let Te=se.__webglTexture,$=$e(w),oe=ue?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,ve=w.depthTexture.format===Sr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===gr)ye(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,oe,Te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,ve,oe,Te,0);else if(w.depthTexture.format===Sr)ye(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,oe,Te,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,ve,oe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(C){let w=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let ue=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){let se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",se)};ue.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ue}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let ue=0;ue<6;ue++)Oe(w.__webglFramebuffer[ue],C,ue);else C.texture.mipmaps.length>0?Oe(w.__webglFramebuffer[0],C,0):Oe(w.__webglFramebuffer,C,0);else if(Y){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=r.createRenderbuffer(),xe(w.__webglDepthbuffer[ue],C,!1);else{let se=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[ue];r.bindRenderbuffer(r.RENDERBUFFER,Me),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,Me)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),xe(w.__webglDepthbuffer,C,!1);else{let se=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Me),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,Me)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(C,w,Y){let ue=n.get(C);w!==void 0&&Se(ue.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Ge(C)}function it(C){let w=C.texture,Y=n.get(C),ue=n.get(w);C.addEventListener("dispose",D),P(C);let se=C.textures,Me=C.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture()),ue.__version=w.version,a.memory.textures++),Me){Y.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps.length>0){Y.__webglFramebuffer[$]=[];for(let oe=0;oe<w.mipmaps.length;oe++)Y.__webglFramebuffer[$][oe]=r.createFramebuffer()}else Y.__webglFramebuffer[$]=r.createFramebuffer()}else{if(w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)Y.__webglFramebuffer[$]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Te)for(let $=0,oe=se.length;$<oe;$++){let ve=n.get(se[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ye(C)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let $=0;$<se.length;$++){let oe=se[$];Y.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[$]);let ve=s.convert(oe.format,oe.colorSpace),N=s.convert(oe.type),ae=T(oe.internalFormat,ve,N,oe.normalized,oe.colorSpace,C.isXRRenderTarget===!0),ie=$e(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$,r.RENDERBUFFER,Y.__webglColorRenderbuffer[$])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Me){t.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),ze(r.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Se(Y.__webglFramebuffer[$][oe],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe);else Se(Y.__webglFramebuffer[$],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);S(w)?v(r.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let $=0,oe=se.length;$<oe;$++){let ve=se[$],N=n.get(ve),ae=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,N.__webglTexture),ze(ae,ve),Se(Y.__webglFramebuffer,C,ve,r.COLOR_ATTACHMENT0+$,ae,0),S(ve)&&v(ae)}t.unbindTexture()}else{let $=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture($,ue.__webglTexture),ze($,w),w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)Se(Y.__webglFramebuffer[oe],C,w,r.COLOR_ATTACHMENT0,$,oe);else Se(Y.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,$,0);S(w)?v($):w.mipmaps.length>0&&r.texParameteri($,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ge(C)}function O(C){let w=C.textures;for(let Y=0,ue=w.length;Y<ue;Y++){let se=w[Y];if(S(se)&&se.mipmapsAutoUpdate===!0){let Me=M(C),Te=n.get(se).__webglTexture;t.bindTexture(Me,Te),v(Me),t.unbindTexture()}}}let rt=[];function Ze(C){if(C.samples>0){if(ye(C)===!1){let w=C.textures,Y=C.width,ue=C.height,se=r.COLOR_BUFFER_BIT,Me=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(C),$=w.length>1;if($)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),$){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let N=n.get(w[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,Y,ue,0,0,Y,ue,se,r.NEAREST),l===!0&&(rt.length=0,rt.push(r.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&rt.push(Me),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let N=n.get(w[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,N,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let w=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function $e(C){return Math.min(i.maxSamples,C.samples)}function ye(C){let w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function st(C){let w=a.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Fe(C,w){let Y=C.colorSpace,ue=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==po&&Y!==br&&(gt.getTransfer(Y)===wt?(ue!==Hi||se!==jn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",Y)),w}function Ye(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=I,this.getTextureUnits=ne,this.setTextureUnits=_e,this.setTexture2D=he,this.setTexture2DArray=Ee,this.setTexture3D=Ce,this.setTextureCube=ge,this.rebindTextures=Je,this.setupRenderTarget=it,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ye,this.dispose=U}function Cb(r,e){function t(n,i=br){let s,a=gt.getTransfer(i);if(n===jn)return r.UNSIGNED_BYTE;if(n===Qc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Rf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Cf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ef)return r.BYTE;if(n===Af)return r.SHORT;if(n===Ra)return r.UNSIGNED_SHORT;if(n===Kc)return r.INT;if(n===Vi)return r.UNSIGNED_INT;if(n===Ri)return r.FLOAT;if(n===Gi)return r.HALF_FLOAT;if(n===Pf)return r.ALPHA;if(n===If)return r.RGB;if(n===Hi)return r.RGBA;if(n===gr)return r.DEPTH_COMPONENT;if(n===Sr)return r.DEPTH_STENCIL;if(n===eu)return r.RED;if(n===tu)return r.RED_INTEGER;if(n===Jr)return r.RG;if(n===nu)return r.RG_INTEGER;if(n===iu)return r.RGBA_INTEGER;if(n===$o||n===Ko||n===Qo||n===jo)if(a===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ru||n===su||n===au||n===ou)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lu||n===cu||n===uu||n===hu||n===fu||n===el||n===du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lu||n===cu)return a===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hu)return s.COMPRESSED_R11_EAC;if(n===fu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===el)return s.COMPRESSED_RG11_EAC;if(n===du)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pu||n===mu||n===gu||n===_u||n===xu||n===vu||n===yu||n===Mu||n===Su||n===bu||n===Tu||n===wu||n===Eu||n===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_u)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Su)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eu)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ru||n===Cu||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ru)return a===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===Lu||n===tl||n===Du)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Iu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ib=`
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

}`,sd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ro(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fi({vertexShader:Pb,fragmentShader:Ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ad=class extends Ji{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new sd,m={},y=t.getContextAttributes(),S=null,v=null,M=[],T=[],_=new Ae,b=null,P=null,A=new Pn;A.viewport=new Nt;let L=new Pn;L.viewport=new Nt;let D=[A,L],H=new Xc,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=M[K];return he===void 0&&(he=new ma,M[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=M[K];return he===void 0&&(he=new ma,M[K]=he),he.getGripSpace()},this.getHand=function(K){let he=M[K];return he===void 0&&(he=new ma,M[K]=he),he.getHandSpace()};function z(K){let he=T.indexOf(K.inputSource);if(he===-1)return;let Ee=M[he];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,c||a),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",J);for(let K=0;K<M.length;K++){let he=T[K];he!==null&&(T[K]=null,M[K].disconnect(he))}R=null,U=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(S),h=null,d=null,f=null,i=null,v=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),P!==null){let K=P.camera;K.fov=P.fov,K.zoom=P.zoom,K.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",F),i.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ce=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=y.stencil?Sr:gr,Ce=y.stencil?ws:Vi);let Re={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Gn(d.textureWidth,d.textureHeight,{format:Hi,type:jn,depthTexture:new yr(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Gn(h.framebufferWidth,h.framebufferHeight,{format:Hi,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(K){for(let he=0;he<K.removed.length;he++){let Ee=K.removed[he],Ce=T.indexOf(Ee);Ce>=0&&(T[Ce]=null,M[Ce].disconnect(Ee))}for(let he=0;he<K.added.length;he++){let Ee=K.added[he],Ce=T.indexOf(Ee);if(Ce===-1){for(let Re=0;Re<M.length;Re++)if(Re>=T.length){T.push(Ee),Ce=Re;break}else if(T[Re]===null){T[Re]=Ee,Ce=Re;break}if(Ce===-1)break}let ge=M[Ce];ge&&ge.connect(Ee)}}function X(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let he=K.near,Ee=K.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),H.near=L.near=A.near=he,H.far=L.far=A.far=Ee,(R!==H.near||U!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),R=H.near,U=H.far),H.layers.mask=K.layers.mask|6,A.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Ce=K.parent,ge=H.cameras;X(H,Ce);for(let Re=0;Re<ge.length;Re++)X(ge[Re],Ce);H.projectionMatrix.copy(A.projectionMatrix),H.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&K.isPerspectiveCamera&&(P={camera:K,fov:K.fov,zoom:K.zoom}),I(K,H,Ce)};function I(K,he,Ee){Ee===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=da*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(K){return m[K]};let ne=null;function _e(K,he){if(u=he.getViewerPose(c||a),p=he,u!==null){let Ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let Ce=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,Ce=!0);for(let ce=0;ce<Ee.length;ce++){let ze=Ee[ce],Pe=null;if(h!==null)Pe=h.getViewport(ze);else{let de=f.getViewSubImage(d,ze);Pe=de.viewport,ce===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let re=D[ce];re===void 0&&(re=new Pn,re.layers.enable(ce),re.viewport=new Nt,D[ce]=re),re.matrix.fromArray(ze.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ze.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ce===0&&(H.matrix.copy(re.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ce===!0&&H.cameras.push(re)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ce=f.getDepthInformation(Ee[0]);ce&&ce.isValid&&ce.texture&&g.init(ce,i.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let ce=0;ce<Ee.length;ce++){let ze=Ee[ce].camera;if(ze){let Pe=m[ze];Pe||(Pe=new Ro,m[ze]=Pe);let re=f.getCameraImage(ze);Pe.sourceTexture=re}}}}for(let Ee=0;Ee<M.length;Ee++){let Ce=T[Ee],ge=M[Ee];Ce!==null&&ge!==void 0&&ge.update(Ce,he,c||a)}ne&&ne(K,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),p=null}let De=new gg;De.setAnimationLoop(_e),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}},Lb=new Pt,Eg=new tt;Eg.set(-1,0,0,0,1,0,0,0,1);function Db(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Gf(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===un&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===un&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m),S=y.envMap,v=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Eg),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,y){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nb(r,e,t,n){let i={},s={};function a(y,S){let v=S.program;n.uniformBlockBinding(y,v,i[y.id])}function o(y,S){let v=i[y.id];v===void 0&&(p(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",g));let M=S.program;n.updateUBOMapping(y,M);let T=e.render.frame;s[y.id]!==T&&(c(y),s[y.id]=T)}function l(y){let S=r.createBuffer(),v=y.__size,M=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,v,M),r.bindBuffer(r.UNIFORM_BUFFER,null),S}function c(y){let S=i[y.id],v=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,_=v.length;T<_;T++){let b=v[T];if(Array.isArray(b))for(let P=0,A=b.length;P<A;P++)u(b[P],T,P,M);else u(b,T,0,M)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,S,v,M){if(d(y,S,v,M)===!0){let T=y.__offset,_=y.value;if(Array.isArray(_)){let b=0;for(let P=0;P<_.length;P++){let A=_[P],L=x(A,!0);f(A,y.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,y.__data)}}function f(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function d(y,S,v,M){let T=y.value,_=S+"_"+v;if(Array.isArray(T)){M[_]===void 0&&(M[_]=[]);let b=M[_],P=!1;for(let A=0;A<T.length;A++)h(T[A],b,A)===!0&&(P=!0);return P}return h(T,M,_)}function h(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let M=S[v];if(typeof y=="number"||typeof y=="boolean"){if(M!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(M.equals(y)===!1)return M.copy(y),!0}}return!1}function p(y){let S=y.uniforms,v=0,M=16;for(let _=0,b=S.length;_<b;_++){let P=Array.isArray(S[_])?S[_]:[S[_]];for(let A=0,L=P.length;A<L;A++){let D=P[A],H=Array.isArray(D.value)?D.value:[D.value],R=Array.isArray(S[_])||Array.isArray(D.value),U=v;for(let F=0,J=H.length;F<J;F++){let X=H[F],I=x(X,R),ne=v%M,_e=ne%I.boundary,De=ne+_e;v+=_e,De!==0&&M-De<I.storage&&(v+=M-De),F===0&&(U=v),v+=I.storage}let z=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new z((v-U)/Float32Array.BYTES_PER_ELEMENT),D.__offset=U}}let T=v%M;return T>0&&(v+=M-T),y.__size=v,y.__cache={},this}function x(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(y){let S=y.target;S.removeEventListener("dispose",g),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function m(){for(let y in i)r.deleteBuffer(i[y]);i={},s={}}return{bind:a,update:o,dispose:m}}var Ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tr=null;function Fb(){return tr===null&&(tr=new So(Ub,16,16,Jr,Gi),tr.name="DFG_LUT",tr.minFilter=Sn,tr.magFilter=Sn,tr.wrapS=Yi,tr.wrapT=Yi,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}var Fu=class{constructor(e={}){let{canvas:t=Um(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=jn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=h,g=new Set([iu,nu,tu]),m=new Set([jn,Vi,Ra,ws,Qc,jc]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},M=null,T=null,_=[],b=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,H=null,R=null,U=null;this._outputColorSpace=kn;let z=0,F=0,J=null,X=-1,I=null,ne=new Nt,_e=new Nt,De=null,K=new et(0),he=0,Ee=t.width,Ce=t.height,ge=1,Re=null,Qe=null,ce=new Nt(0,0,Ee,Ce),ze=new Nt(0,0,Ee,Ce),Pe=!1,re=new Hr,de=new Ec,pe=!1,k=!1,Se=new Pt,xe=new V,Oe=new Nt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function it(){return J===null?ge:1}let O=n;function rt(E,B){return t.getContext(E,B)}let Ze,$e,ye,st,Fe,Ye,C,w,Y,ue,se,Me,Te,$,oe,ve,N,ae,ie,we,me,be,W;try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",G,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",j,!1),O===null){let B="webgl2";if(O=rt(B,E),O===null)throw rt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(E){throw t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",j,!1),je("WebGLRenderer: "+E.message),E}function ee(){Ze=new YM(O),Ze.init(),me=new Cb(O,Ze),$e=new FM(O,Ze,e,me),ye=new Ab(O,Ze),$e.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),H=O.createFramebuffer(),R=O.createFramebuffer(),U=O.createFramebuffer(),st=new $M(O),Fe=new db,Ye=new Rb(O,Ze,ye,Fe,$e,me,st),C=new qM(A),w=new Qx(O),be=new NM(O,w),Y=new ZM(O,w,st,be),ue=new QM(O,Y,w,be,st),ae=new KM(O,$e,Ye),oe=new OM(Fe),se=new fb(A,C,Ze,$e,be,oe),Me=new Db(A,Fe),Te=new mb,$=new Mb(Ze),N=new DM(A,C,ye,ue,p,l),ve=new Eb(A,ue,$e),W=new Nb(O,st,$e,ye),ie=new UM(O,Ze,st),we=new JM(O,Ze,st),st.programs=se.programs,A.capabilities=$e,A.extensions=Ze,A.properties=Fe,A.renderLists=Te,A.shadowMap=ve,A.state=ye,A.info=st}x!==jn&&(P=new eS(x,t.width,t.height,o,i,s));let q=new ad(A,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(E){E!==void 0&&(ge=E,this.setSize(Ee,Ce,!1))},this.getSize=function(E){return E.set(Ee,Ce)},this.setSize=function(E,B,te=!0){if(q.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=E,Ce=B,t.width=Math.floor(E*ge),t.height=Math.floor(B*ge),te===!0&&(t.style.width=E+"px",t.style.height=B+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Ee*ge,Ce*ge).floor()},this.setDrawingBufferSize=function(E,B,te){Ee=E,Ce=B,ge=te,t.width=Math.floor(E*te),t.height=Math.floor(B*te),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(x===jn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(ce)},this.setViewport=function(E,B,te,Z){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,B,te,Z),ye.viewport(ne.copy(ce).multiplyScalar(it()).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,B,te,Z){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,B,te,Z),ye.scissor(_e.copy(ze).multiplyScalar(it()).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(E){ye.setScissorTest(Pe=E)},this.setOpaqueSort=function(E){Re=E},this.setTransparentSort=function(E){Qe=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,te=!0){let Z=0;if(E){let Q=!1;if(J!==null){let Le=J.texture.format;Q=g.has(Le)}if(Q){let Le=J.texture.type,Ve=m.has(Le),Ie=N.getClearColor(),Ue=N.getClearAlpha(),qe=Ie.r,nt=Ie.g,pt=Ie.b;Ve?(y[0]=qe,y[1]=nt,y[2]=pt,y[3]=Ue,O.clearBufferuiv(O.COLOR,0,y)):(S[0]=qe,S[1]=nt,S[2]=pt,S[3]=Ue,O.clearBufferiv(O.COLOR,0,S))}else Z|=O.COLOR_BUFFER_BIT}B&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",G,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",j,!1),N.dispose(),Te.dispose(),$.dispose(),Ye.dispose(),Fe.dispose(),C.dispose(),ue.dispose(),Y.dispose(),be.dispose(),W.dispose(),se.dispose(),q.dispose(),q.removeEventListener("sessionstart",dt),q.removeEventListener("sessionend",vt),en.stop()};function G(E){E.preventDefault(),Ff("WebGLRenderer: Context Lost."),L=!0}function le(){Ff("WebGLRenderer: Context Restored."),L=!1;let E=st.autoReset,B=ve.enabled,te=ve.autoUpdate,Z=ve.needsUpdate,Q=ve.type;ee(),st.autoReset=E,ve.enabled=B,ve.autoUpdate=te,ve.needsUpdate=Z,ve.type=Q}function j(E){je("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function fe(E){let B=E.target;B.removeEventListener("dispose",fe),Be(B)}function Be(E){Xe(E),Fe.remove(E)}function Xe(E){let B=Fe.get(E).programs;B!==void 0&&(B.forEach(function(te){se.releaseProgram(te)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,te,Z,Q,Le){B===null&&(B=Ge);let Ve=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ie=bi(E,B,te,Z,Q);ye.setMaterial(Z,Ve);let Ue=te.index,qe=1;if(Z.wireframe===!0){if(Ue=Y.getWireframeAttribute(te),Ue===void 0)return;qe=2}let nt=te.drawRange,pt=te.attributes.position,He=nt.start*qe,mt=(nt.start+nt.count)*qe;Le!==null&&(He=Math.max(He,Le.start*qe),mt=Math.min(mt,(Le.start+Le.count)*qe)),Ue!==null?(He=Math.max(He,0),mt=Math.min(mt,Ue.count)):pt!=null&&(He=Math.max(He,0),mt=Math.min(mt,pt.count));let rn=mt-He;if(rn<0||rn===1/0)return;be.setup(Q,Z,Ie,te,Ue);let zt,Ft=ie;if(Ue!==null&&(zt=w.get(Ue),Ft=we,Ft.setIndex(zt)),Q.isMesh)Z.wireframe===!0?(ye.setLineWidth(Z.wireframeLinewidth*it()),Ft.setMode(O.LINES)):Ft.setMode(O.TRIANGLES);else if(Q.isLine){let En=Z.linewidth;En===void 0&&(En=1),ye.setLineWidth(En*it()),Q.isLineSegments?Ft.setMode(O.LINES):Q.isLineLoop?Ft.setMode(O.LINE_LOOP):Ft.setMode(O.LINE_STRIP)}else Q.isPoints?Ft.setMode(O.POINTS):Q.isSprite&&Ft.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let En=Q._multiDrawStarts,We=Q._multiDrawCounts,zn=Q._multiDrawCount,bt=Ue?w.get(Ue).bytesPerElement:1,us=Fe.get(Z).currentProgram.getUniforms();for(let An=0;An<zn;An++)us.setValue(O,"_gl_DrawID",An),Ft.render(En[An]/bt,We[An])}else if(Q.isInstancedMesh)Ft.renderInstances(He,rn,Q.count);else if(te.isInstancedBufferGeometry){let En=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,We=Math.min(te.instanceCount,En);Ft.renderInstances(He,rn,We)}else Ft.render(He,rn)};function xt(E,B,te,Z){D!==null&&E.isNodeMaterial&&D.setObject(Z,E),pe===!0&&oe.setState(E,te,!1),E.transparent===!0&&E.side===Ai&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,li(E,B,Z),E.side=Zr,E.needsUpdate=!0,li(E,B,Z),E.side=Ai):li(E,B,Z)}this.compile=function(E,B,te=null){te===null&&(te=E),D!==null&&D.renderStart(E,B,te),T=$.get(te),T.init(B),b.push(T),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),E!==te&&E.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),k=this.localClippingEnabled,pe=oe.init(this.clippingPlanes,k),pe===!0&&oe.setGlobalState(this.clippingPlanes,B),D!==null&&ve.render(T.state.shadowsArray,te,B);let Z=new Set;return E.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Le=Q.material;if(Le)if(Array.isArray(Le))for(let Ve=0;Ve<Le.length;Ve++){let Ie=Le[Ve];xt(Ie,te,B,Q),Z.add(Ie)}else xt(Le,te,B,Q),Z.add(Le)}),T=b.pop(),D!==null&&D.renderEnd(),Z},this.compileAsync=function(E,B,te=null){let Z=this.compile(E,B,te);return new Promise(Q=>{function Le(){if(Z.forEach(function(Ve){let Ue=Fe.get(Ve).currentProgram;(Ue===void 0||Ue.isReady())&&Z.delete(Ve)}),Z.size===0){Q(E);return}setTimeout(Le,10)}Ze.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Lt=null;function Dt(E){Lt&&Lt(E)}function dt(){en.stop()}function vt(){en.start()}let en=new gg;en.setAnimationLoop(Dt),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(E){Lt=E,q.setAnimationLoop(E),E===null?en.stop():en.start()},q.addEventListener("sessionstart",dt),q.addEventListener("sessionend",vt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,B);let te=q.enabled===!0&&q.isPresenting===!0,Z=P!==null&&(J===null||te)&&P.begin(A,J);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,B,J),T=$.get(E,b.length),T.init(B),T.state.textureUnits=Ye.getTextureUnits(),b.push(T),Se.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?de.setFromArrayCamera(B):re.setFromProjectionMatrix(Se,wi,B.reversedDepth),k=this.localClippingEnabled,pe=oe.init(this.clippingPlanes,k),M=Te.get(E,_.length),M.init(),_.push(M),this.info.render.frame++,q.enabled===!0&&q.isPresenting===!0){let Ve=A.xr.getDepthSensingMesh();Ve!==null&&Rt(Ve,B,-1/0,A.sortObjects)}Rt(E,B,0,A.sortObjects),M.finish(),D!==null&&D.updateLights(T.state.lightsArray),A.sortObjects===!0&&M.sort(Re,Qe),Je=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Je&&N.addToRenderList(M,E),this.info.autoReset===!0&&this.info.reset(),pe===!0&&oe.beginShadows();let Q=T.state.shadowsArray;if(ve.render(Q,E,B),pe===!0&&oe.endShadows(),(Z&&P.hasRenderPass())===!1){let Ve=M.opaque,Ie=M.transmissive;if(T.setupLights(),B.isArrayCamera){let Ue=B.cameras;if(Ie.length>0)for(let qe=0,nt=Ue.length;qe<nt;qe++){let pt=Ue[qe];Ct(Ve,Ie,E,pt)}Je&&N.render(E);for(let qe=0,nt=Ue.length;qe<nt;qe++){let pt=Ue[qe];Tt(M,E,pt,pt.viewport)}}else Ie.length>0&&Ct(Ve,Ie,E,B),Je&&N.render(E),Tt(M,E,B)}J!==null&&F===0&&(Ye.updateMultisampleRenderTarget(J),Ye.updateRenderTargetMipmap(J)),Z&&P.end(A),E.isScene===!0&&E.onAfterRender(A,E,B),be.resetDefaultState(),X=-1,I=null,b.pop(),b.length>0?(T=b[b.length-1],Ye.setTextureUnits(T.state.textureUnits),pe===!0&&oe.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?M=_[_.length-1]:M=null,D!==null&&D.renderEnd()};function Rt(E,B,te,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Ve=B.isArrayCamera?de:re;if(!E.frustumCulled||E.intersectsFrustum(Ve)){Z&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);let Ie=ue.update(E),Ue=E.material;Ue.visible&&M.push(E,Ie,Ue,te,Oe.z,null,B)}}else if(E.isMesh||E.isLine||E.isPoints){let Ve=B.isArrayCamera?de:re;if(!E.frustumCulled||E.intersectsFrustum(Ve)){let Ie=ue.update(E),Ue=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Oe.copy(Ie.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(Ue)){let qe=Ie.groups;for(let nt=0,pt=qe.length;nt<pt;nt++){let He=qe[nt],mt=Ue[He.materialIndex];mt&&mt.visible&&M.push(E,Ie,mt,te,Oe.z,He,B)}}else Ue.visible&&M.push(E,Ie,Ue,te,Oe.z,null,B)}}}let Le=E.children;for(let Ve=0,Ie=Le.length;Ve<Ie;Ve++)Rt(Le[Ve],B,te,Z)}function Tt(E,B,te,Z){let{opaque:Q,transmissive:Le,transparent:Ve}=E;T.setupLightsView(te),pe===!0&&oe.setGlobalState(A.clippingPlanes,te),Z&&ye.viewport(ne.copy(Z)),Q.length>0&&Bt(Q,B,te),Le.length>0&&Bt(Le,B,te),Ve.length>0&&Bt(Ve,B,te),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ct(E,B,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let He=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new Gn(1,1,{generateMipmaps:!0,type:He?Gi:jn,minFilter:pi,samples:Math.max(4,$e.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Le=T.state.transmissionRenderTarget[Z.id],Ve=Z.viewport||ne;Le.setSize(Ve.z*A.transmissionResolutionScale,Ve.w*A.transmissionResolutionScale);let Ie=A.getRenderTarget(),Ue=A.getActiveCubeFace(),qe=A.getActiveMipmapLevel();A.setRenderTarget(Le),A.getClearColor(K),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),Je&&N.render(te);let nt=A.toneMapping;A.toneMapping=er;let pt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),pe===!0&&oe.setGlobalState(A.clippingPlanes,Z),Bt(E,te,Z),Ye.updateMultisampleRenderTarget(Le),Ye.updateRenderTargetMipmap(Le),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let mt=0,rn=B.length;mt<rn;mt++){let zt=B[mt],{object:Ft,geometry:En,material:We,group:zn}=zt;if(We.side===Ai&&Ft.layers.test(Z.layers)){let bt=We.side;We.side=un,We.needsUpdate=!0,nn(Ft,te,Z,En,We,zn),We.side=bt,We.needsUpdate=!0,He=!0}}He===!0&&(Ye.updateMultisampleRenderTarget(Le),Ye.updateRenderTargetMipmap(Le))}A.setRenderTarget(Ie,Ue,qe),A.setClearColor(K,he),pt!==void 0&&(Z.viewport=pt),A.toneMapping=nt}function Bt(E,B,te){let Z=B.isScene===!0?B.overrideMaterial:null;for(let Q=0,Le=E.length;Q<Le;Q++){let Ve=E[Q],{object:Ie,geometry:Ue,group:qe}=Ve,nt=Ve.material;nt.allowOverride===!0&&Z!==null&&(nt=Z),Ie.layers.test(te.layers)&&nn(Ie,B,te,Ue,nt,qe)}}function nn(E,B,te,Z,Q,Le){D!==null&&Q.isNodeMaterial&&D.setObject(E,Q),E.onBeforeRender(A,B,te,Z,Q,Le),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Q.onBeforeRender(A,B,te,Z,E,Le),Q.transparent===!0&&Q.side===Ai&&Q.forceSinglePass===!1?(Q.side=un,Q.needsUpdate=!0,A.renderBufferDirect(te,B,Z,Q,E,Le),Q.side=Zr,Q.needsUpdate=!0,A.renderBufferDirect(te,B,Z,Q,E,Le),Q.side=Ai):A.renderBufferDirect(te,B,Z,Q,E,Le),E.onAfterRender(A,B,te,Z,Q,Le)}function ln(E){let B=0;for(let te of E)te.texture!==null&&B++;return B}function li(E,B,te){B.isScene!==!0&&(B=Ge);let Z=Fe.get(E),Q=T.state.lights,Le=T.state.shadowsArray,Ve=Q.state.version,Ie=se.getParameters(E,Q.state,Le,B,te,T.state.lightProbeGridArray),Ue=se.getProgramCacheKey(Ie),qe=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,Z.fog=B.fog;let nt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=C.get(E.envMap||Z.environment,nt),Z.envMapRotation=Z.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",fe),qe=new Map,Z.programs=qe,Z.programVariants=new Map);let pt=qe.get(Ue);if(pt!==void 0){if(Z.currentProgram===pt&&Z.lightsStateVersion===Ve)return $t(E,Ie),pt}else Ie.uniforms=se.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,te,Ie),E.onBeforeCompile(Ie,A),pt=se.acquireProgram(Ie,Ue),qe.set(Ue,pt),Z.uniforms=Ie.uniforms;let He=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=oe.uniform),$t(E,Ie),Z.needsLights=zl(E),Z.lightsStateVersion=Ve,Z.needsLights&&(He.ambientLightColor.value=Q.state.ambient,He.lightProbe.value=Q.state.probe,He.sunLights.value=Q.state.sun,He.sunLightShadows.value=Q.state.sunShadow,He.directionalLights.value=Q.state.directional,He.directionalLightShadows.value=Q.state.directionalShadow,He.spotLights.value=Q.state.spot,He.spotLightShadows.value=Q.state.spotShadow,He.rectAreaLights.value=Q.state.rectArea,He.ltc_1.value=Q.state.rectAreaLTC1,He.ltc_2.value=Q.state.rectAreaLTC2,He.pointLights.value=Q.state.point,He.pointLightShadows.value=Q.state.pointShadow,He.hemisphereLights.value=Q.state.hemi,He.sunShadowMatrix.value=Q.state.sunShadowMatrix,He.sunShadowCascade.value=Q.state.sunShadowCascade,He.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,He.spotLightMatrix.value=Q.state.spotLightMatrix,He.spotLightMap.value=Q.state.spotLightMap,He.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.numLightProbeGrids=ln(T.state.lightProbeGridArray),Z.currentProgram=pt,Z.uniformsList=null,pt}function Ys(E,B,te,Z,Q){let Le=Fe.get(E),Ve=Le.currentProgram.id+","+Z+","+Q,Ie=Le.programVariants.get(Ve);return Ie===void 0?(Ie=li(E,B,te),Le.programVariants.set(Ve,Ie)):(Le.currentProgram=Ie,Le.uniformsList=null,Le.outputColorSpace=Z,Le.toneMapping=Q),Ie}function cn(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Ca.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function $t(E,B){let te=Fe.get(E);te.outputColorSpace=B.outputColorSpace,te.batching=B.batching,te.batchingColor=B.batchingColor,te.instancing=B.instancing,te.instancingColor=B.instancingColor,te.instancingMorph=B.instancingMorph,te.skinning=B.skinning,te.morphTargets=B.morphTargets,te.morphNormals=B.morphNormals,te.morphColors=B.morphColors,te.morphTargetsCount=B.morphTargetsCount,te.numClippingPlanes=B.numClippingPlanes,te.numIntersection=B.numClipIntersection,te.vertexAlphas=B.vertexAlphas,te.vertexTangents=B.vertexTangents,te.toneMapping=B.toneMapping}function bi(E,B,te,Z,Q){B.isScene!==!0&&(B=Ge),Ye.resetTextureUnits();let Le=B.fog,Ve=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?B.environment:null,Ie=J===null?A.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:gt.workingColorSpace,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,qe=C.get(Z.envMap||Ve,Ue),nt=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pt=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,rn=!!te.morphAttributes.color,zt=er;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(zt=A.toneMapping);let Ft=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,En=Ft!==void 0?Ft.length:0,We=Fe.get(Z),zn=T.state.lights;if(pe===!0&&(k===!0||E!==I)){let Ht=E===I&&Z.id===X;oe.setState(Z,E,Ht)}let bt=!1,us=!1;Z.version===We.__version?We.needsLights&&We.lightsStateVersion!==zn.state.version||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==qe||Z.fog===!0&&We.fog!==Le||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==oe.numPlanes||We.numIntersection!==oe.numIntersection)||We.vertexAlphas!==nt||We.vertexTangents!==pt||We.morphTargets!==He||We.morphNormals!==mt||We.morphColors!==rn||We.morphTargetsCount!==En||We.numLightProbeGrids!==ln(T.state.lightProbeGridArray)?bt=!0:(We.outputColorSpace!==Ie||We.toneMapping!==zt)&&(us=!0):(bt=!0,We.__version=Z.version);let An=We.currentProgram;(bt===!0||us===!0)&&(An=us===!0?Ys(Z,B,Q,Ie,zt):li(Z,B,Q),D&&Z.isNodeMaterial&&D.onUpdateProgram(Z,An,We));let kl=!1,Fr=!1,hs=!1,yt=An.getUniforms(),Mn=We.uniforms;if(ye.useProgram(An.program)&&(kl=!0,Fr=!0,hs=!0),Z.id!==X&&(X=Z.id,Fr=!0),kl||I!==E){ye.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(O,"projectionMatrix",E.projectionMatrix),yt.setValue(O,"viewMatrix",E.matrixWorldInverse);let mn=yt.map.cameraPosition;mn!==void 0&&mn.setValue(O,xe.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&yt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,Fr=!0,hs=!0)}if(We.needsLights&&(zn.state.sunShadowMap.length>0&&yt.setValue(O,"sunShadowMap",zn.state.sunShadowMap,Ye),zn.state.directionalShadowMap.length>0&&yt.setValue(O,"directionalShadowMap",zn.state.directionalShadowMap,Ye),zn.state.spotShadowMap.length>0&&yt.setValue(O,"spotShadowMap",zn.state.spotShadowMap,Ye),zn.state.pointShadowMap.length>0&&yt.setValue(O,"pointShadowMap",zn.state.pointShadowMap,Ye)),Q.isSkinnedMesh){yt.setOptional(O,Q,"bindMatrix"),yt.setOptional(O,Q,"bindMatrixInverse");let Ht=Q.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),yt.setValue(O,"boneTexture",Ht.boneTexture,Ye))}Q.isBatchedMesh&&(yt.setOptional(O,Q,"batchingTexture"),yt.setValue(O,"batchingTexture",Q._matricesTexture,Ye),yt.setOptional(O,Q,"batchingIdTexture"),yt.setValue(O,"batchingIdTexture",Q._indirectTexture,Ye),yt.setOptional(O,Q,"batchingColorTexture"),Q._colorsTexture!==null&&yt.setValue(O,"batchingColorTexture",Q._colorsTexture,Ye));let Ui=te.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&ae.update(Q,te,An),(Fr||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,yt.setValue(O,"receiveShadow",Q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&B.environment!==null&&(Mn.envMapIntensity.value=B.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=Fb()),Fr){if(yt.setValue(O,"toneMappingExposure",A.toneMappingExposure),We.needsLights&&eo(Mn,hs),Le&&Z.fog===!0&&Me.refreshFogUniforms(Mn,Le),Me.refreshMaterialUniforms(Mn,Z,ge,Ce,T.state.transmissionRenderTarget[E.id]),We.needsLights&&We.numLightProbeGrids>0){let Ht=v,mn=0;for(let cr of T.state.lightProbeGridArray)cr.texture!==null&&(Ht.textures[mn]=cr.texture,Ht.min[mn]=cr.boundingBox.min,Ht.max[mn]=cr.boundingBox.max,Ht.resolution[mn]=cr.resolution,mn++);for(let cr in Ht)Ht[cr].length=mn;Mn.probesSH.value=Ht.textures,Mn.probesMin.value=Ht.min,Mn.probesMax.value=Ht.max,Mn.probesResolution.value=Ht.resolution}Ca.upload(O,cn(We),Mn,Ye)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ca.upload(O,cn(We),Mn,Ye),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&yt.setValue(O,"center",Q.center),yt.setValue(O,"modelViewMatrix",Q.modelViewMatrix),yt.setValue(O,"normalMatrix",Q.normalMatrix),yt.setValue(O,"modelMatrix",Q.matrixWorld),Z.uniformsGroups!==void 0){let Ht=Z.uniformsGroups;for(let mn=0,cr=Ht.length;mn<cr;mn++){let Mp=Ht[mn];W.update(Mp,An),W.bind(Mp,An)}}return An}function eo(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function zl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(E,B,te){let Z=Fe.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Fe.get(E.texture).__webglTexture=B,Fe.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let te=Fe.get(E);te.__webglFramebuffer=B,te.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,te=0){J=E,z=B,F=te;let Z=null,Q=!1,Le=!1;if(E){let Ie=Fe.get(E);if(Ie.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(O.FRAMEBUFFER,Ie.__webglFramebuffer),ne.copy(E.viewport),_e.copy(E.scissor),De=E.scissorTest,ye.viewport(ne),ye.scissor(_e),ye.setScissorTest(De),X=-1;return}else if(Ie.__webglFramebuffer===void 0)Ye.setupRenderTarget(E);else if(Ie.__hasExternalTextures)Ye.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let nt=E.depthTexture;if(Ie.__boundDepthTexture!==nt){if(nt!==null&&Fe.has(nt)&&(E.width!==nt.image.width||E.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(E)}}let Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);let qe=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?Z=qe[B][te]:Z=qe[B],Q=!0):E.samples>0&&Ye.useMultisampledRTT(E)===!1?Z=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[te]:Z=qe,ne.copy(E.viewport),_e.copy(E.scissor),De=E.scissorTest}else ne.copy(ce).multiplyScalar(ge).floor(),_e.copy(ze).multiplyScalar(ge).floor(),De=Pe;if(te!==0&&(Z=H),ye.bindFramebuffer(O.FRAMEBUFFER,Z)&&ye.drawBuffers(E,Z),ye.viewport(ne),ye.scissor(_e),ye.setScissorTest(De),Q){let Ie=Fe.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ie.__webglTexture,te)}else if(Le){let Ie=B;for(let Ue=0;Ue<E.textures.length;Ue++){let qe=Fe.get(E.textures[Ue]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ue,qe.__webglTexture,te,Ie)}}else if(E!==null&&te!==0){let Ie=Fe.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,te)}X=-1};function Ur(E){let B=Fe.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=$e.textureFormatReadable(E.format),B.__typeReadable=$e.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,te,Z,Q,Le,Ve,Ie=0){if(!(E&&E.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ue=Ue[Ve],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){ye.bindFramebuffer(O.FRAMEBUFFER,Ue);try{let qe=E.textures[Ie],nt=qe.format,pt=qe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ie);let He=Ur(qe);if(He.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&te>=0&&te<=E.height-Q&&O.readPixels(B,te,Z,Q,me.convert(nt),me.convert(pt),Le)}finally{let qe=J!==null?Fe.get(J).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,B,te,Z,Q,Le,Ve,Ie=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ue=Ue[Ve],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(B>=0&&B<=E.width-Z&&te>=0&&te<=E.height-Q){ye.bindFramebuffer(O.FRAMEBUFFER,Ue);let qe=E.textures[Ie],nt=qe.format,pt=qe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ie);let He=Ur(qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.bufferData(O.PIXEL_PACK_BUFFER,Le.byteLength,O.STREAM_READ),O.readPixels(B,te,Z,Q,me.convert(nt),me.convert(pt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let rn=J!==null?Fe.get(J).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,rn);let zt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Om(O,zt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Le),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(mt),O.deleteSync(zt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,te=0){let Z=Math.pow(2,-te),Q=Math.floor(E.image.width*Z),Le=Math.floor(E.image.height*Z),Ve=B!==null?B.x:0,Ie=B!==null?B.y:0;Ye.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,Ve,Ie,Q,Le),ye.unbindTexture()},this.copyTextureToTexture=function(E,B,te=null,Z=null,Q=0,Le=0){let Ve,Ie,Ue,qe,nt,pt,He,mt,rn,zt=E.isCompressedTexture?E.mipmaps[Le]:E.image;if(te!==null)Ve=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,nt=te.min.y,pt=te.isBox3?te.min.z:0;else{let yt=Math.pow(2,-Q);Ve=Math.floor(zt.width*yt),Ie=Math.floor(zt.height*yt),E.isDataArrayTexture?Ue=zt.depth:E.isData3DTexture?Ue=Math.floor(zt.depth*yt):Ue=1,qe=0,nt=0,pt=0}Z!==null?(He=Z.x,mt=Z.y,rn=Z.z):(He=0,mt=0,rn=0);let Ft=me.convert(B.format),En=me.convert(B.type),We;B.isData3DTexture?(Ye.setTexture3D(B,0),We=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ye.setTexture2DArray(B,0),We=O.TEXTURE_2D_ARRAY):(Ye.setTexture2D(B,0),We=O.TEXTURE_2D),ye.activeTexture(O.TEXTURE0),ye.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),ye.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ye.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let zn=ye.getParameter(O.UNPACK_ROW_LENGTH),bt=ye.getParameter(O.UNPACK_IMAGE_HEIGHT),us=ye.getParameter(O.UNPACK_SKIP_PIXELS),An=ye.getParameter(O.UNPACK_SKIP_ROWS),kl=ye.getParameter(O.UNPACK_SKIP_IMAGES);ye.pixelStorei(O.UNPACK_ROW_LENGTH,zt.width),ye.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt.height),ye.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),ye.pixelStorei(O.UNPACK_SKIP_ROWS,nt),ye.pixelStorei(O.UNPACK_SKIP_IMAGES,pt);let Fr=E.isDataArrayTexture||E.isData3DTexture,hs=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let yt=Fe.get(E),Mn=Fe.get(B),Ui=Fe.get(yt.__renderTarget),Ht=Fe.get(Mn.__renderTarget);ye.bindFramebuffer(O.READ_FRAMEBUFFER,Ui.__webglFramebuffer),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let mn=0;mn<Ue;mn++)Fr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(E).__webglTexture,Q,pt+mn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(B).__webglTexture,Le,rn+mn)),O.blitFramebuffer(qe,nt,qe+Ve,nt+Ie,He,mt,He+Ve,mt+Ie,O.DEPTH_BUFFER_BIT,O.NEAREST);ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||E.isRenderTargetTexture||Fe.has(E)){let yt=Fe.get(E),Mn=Fe.get(B);ye.bindFramebuffer(O.READ_FRAMEBUFFER,R),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let Ui=0;Ui<Ue;Ui++)Fr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,Q,pt+Ui):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,Q),hs?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mn.__webglTexture,Le,rn+Ui):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mn.__webglTexture,Le),Q!==0?O.blitFramebuffer(qe,nt,qe+Ve,nt+Ie,He,mt,He+Ve,mt+Ie,O.COLOR_BUFFER_BIT,O.NEAREST):hs?O.copyTexSubImage3D(We,Le,He,mt,rn+Ui,qe,nt,Ve,Ie):O.copyTexSubImage2D(We,Le,He,mt,qe,nt,Ve,Ie);ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else hs?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(We,Le,He,mt,rn,Ve,Ie,Ue,Ft,En,zt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(We,Le,He,mt,rn,Ve,Ie,Ue,Ft,zt.data):O.texSubImage3D(We,Le,He,mt,rn,Ve,Ie,Ue,Ft,En,zt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Le,He,mt,Ve,Ie,Ft,En,zt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Le,He,mt,zt.width,zt.height,Ft,zt.data):O.texSubImage2D(O.TEXTURE_2D,Le,He,mt,Ve,Ie,Ft,En,zt);ye.pixelStorei(O.UNPACK_ROW_LENGTH,zn),ye.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt),ye.pixelStorei(O.UNPACK_SKIP_PIXELS,us),ye.pixelStorei(O.UNPACK_SKIP_ROWS,An),ye.pixelStorei(O.UNPACK_SKIP_IMAGES,kl),Le===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&O.generateMipmap(We),ye.unbindTexture()},this.initRenderTarget=function(E){Fe.get(E).__webglFramebuffer===void 0&&Ye.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ye.setTextureCube(E,0):E.isData3DTexture?Ye.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ye.setTexture2DArray(E,0):Ye.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){z=0,F=0,J=null,ye.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var zu=class extends _r{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ji;e.deleteAttribute("uv");let t=new Ss({side:un}),n=new Ss,i=new Yr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Mt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new To(e,n,6),o=new xn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Mt(e,Ia(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Mt(e,Ia(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Mt(e,Ia(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Mt(e,Ia(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new Mt(e,Ia(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let h=new Mt(e,Ia(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ia(r){return new ko({color:0,emissive:16777215,emissiveIntensity:r})}function Tr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fl={duration:.5,overwrite:!1,delay:0},Sd,bn,Vt,Pi=1e8,Ut=1/Pi,pd=Math.PI*2,Ob=pd/4,Bb=0,Og=Math.sqrt,zb=Math.cos,kb=Math.sin,dn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},Er=function(e){return typeof e=="number"},Ku=function(e){return typeof e>"u"},sr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},bd=function(){return typeof window<"u"},ku=function(e){return Kt(e)||dn(e)},Bg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Vb=/random\([^)]+\)/g,Gb=/,\s*/g,Rg=/(?:-?\.?\d|\.)+/gi,Td=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,od=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wd=/[+-]=-?[.\d]+/,Hb=/[^,'"\[\]\s]+/gi,Wb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,ir,md,Ed,gi={},Wu={},zg,kg=function(e){return(Wu=Da(e,gi))&&Nn},Qu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},dl=function(e,t){return!t&&console.warn(e)},Vg=function(e,t){return e&&(gi[e]=t)&&Wu&&(Wu[e]=t)||gi},pl=function(){return 0},Xb={suppressEvents:!0,isStart:!0,kill:!1},Vu={suppressEvents:!0,kill:!1},qb={suppressEvents:!0},Ad={},Qr=[],gd={},Gg,ei={},ld={},Cg=30,Gu=[],Rd="",Cd=function(e){var t=e[0],n,i;if(sr(t)||Kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Gu.length;i--&&!Gu[i].targetTest(t););n=Gu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Dd(e[i],n)))||e.splice(i,1);return e},jr=function(e){return e._gsap||Cd(Ii(e))[0]._gsap},Pd=function(e,t,n){return(n=e[t])&&Kt(n)?e[t]():Ku(n)&&e.getAttribute&&e.getAttribute(t)||n},Xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Qt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Yb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Xu=function(){var e=Qr.length,t=Qr.slice(0),n,i;for(gd={},Qr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Id=function(e){return!!(e._initted||e._startAt||e.add)},Hg=function(e,t,n,i){Qr.length&&!bn&&Xu(),e.render(t,n,i||!!(bn&&t<0&&Id(e))),Qr.length&&!bn&&Xu()},Wg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hb).length<2?t:dn(e)?e.trim():e},Xg=function(e){return e},_i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Da=function(e,t){for(var n in t)e[n]=t[n];return e},Pg=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=sr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},qu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},cl=function(e){var t=e.parent||Yt,n=e.keyframes?Zb(Dn(e.keyframes)):_i;if(ni(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},qg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ju=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},es=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$b=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_d=function(e,t,n,i){return e._startAt&&(bn?e._startAt.revert(Vu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Kb=function r(e){return!e||e._ts&&r(e.parent)},Ig=function(e){return e._repeat?Na(e._tTime,e=e.duration()+e._rDelay)*e:0},Na=function(e,t){var n=Math.floor(e=qt(e/t));return e&&n===e?n-1:n},Yu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},eh=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},th=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),eh(e),n._dirty||Rs(n,e)),e},Yg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Yu(e.rawTime(),t),(!t._dur||xl(0,t.totalDuration(),n)-t._tTime>Ut)&&t.render(n,!0)),Rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ut}},rr=function(e,t,n,i){return t.parent&&es(t),t._start=qt((Er(n)?n:!n&&Zu(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Yt?Ci(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qg(e,t,"_first","_last",e._sort?"_start":0),Zu(t)||(e._recent=t),i||Yg(e,t),e._ts<0&&th(e,e._tTime),e},Zg=function(e,t){return(gi.ScrollTrigger||Qu("scrollTrigger",t))&&gi.ScrollTrigger.create(t,e)},Jg=function(e,t,n,i,s){if(Fd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gg!==ti.frame)return Qr.push(e),e._lazy=[s,i],1},Qb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Zu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},jb=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Qb(e)&&!(!e._initted&&Zu(e))||(e._ts<0||e._dp._ts<0)&&!Zu(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=xl(0,e._tDur,t),u=Na(l,o),e._yoyo&&u&1&&(a=1-a),u!==Na(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||bn||i||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&Jg(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ut:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&_d(e,t,n,!0),e._onUpdate&&!n&&mi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&es(e,1),!n&&!bn&&(mi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},e1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ua=function(e,t,n,i){var s=e._repeat,a=qt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:qt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&th(e,e._tTime=e._tDur*o),e.parent&&eh(e),n||Rs(e.parent,e),e},Lg=function(e){return e instanceof Ln?Rs(e):Ua(e,e._dur)},t1={_start:0,endTime:pl,totalDuration:pl},Ci=function r(e,t,n){var i=e.labels,s=e._recent||t1,a=e.duration()>=Pi?s.endTime(!1):e._dur,o,l,c;return dn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Dn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ul=function(e,t,n){var i=Er(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;a.immediateRender=ni(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new tn(t[0],a,t[s+1])},ts=function(e,t){return e||e===0?t(e):t},xl=function(e,t,n){return n<e?e:n>t?t:n},Tn=function(e,t){return!dn(e)||!(t=Wb.exec(e))?"":t[1]},n1=function(e,t,n){return ts(n,function(i){return xl(e,t,i)})},xd=[].slice,$g=function(e,t){return e&&sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&sr(e[0]))&&!e.nodeType&&e!==ir},i1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return dn(i)&&!t||$g(i,1)?(s=n).push.apply(s,Ii(i)):n.push(i)})||n},Ii=function(e,t,n){return Vt&&!t&&Vt.selector?Vt.selector(e):dn(e)&&!n&&(md||!Fa())?xd.call((t||Ed).querySelectorAll(e),0):Dn(e)?i1(e,n):$g(e)?xd.call(e,0):e?[e]:[]},vd=function(e){return e=Ii(e)[0]||dl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ii(t,n.querySelectorAll?n:n===e?dl("Invalid scope")||Ed.createElement("div"):e)}},Kg=function(e){return e.sort(function(){return .5-Math.random()})},Qg=function(e){if(Kt(e))return e;var t=sr(e)?e:{each:e},n=Cs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return dn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,p){var x=(p||t).length,g=a[x],m,y,S,v,M,T,_,b,P;if(!g){if(P=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!P){for(_=-Pi;_<(_=p[P++].getBoundingClientRect().left)&&P<x;);P<x&&P--}for(g=a[x]=[],m=l?Math.min(P,x)*u-.5:i%P,y=P===Pi?0:l?x*f/P-.5:i/P|0,_=0,b=Pi,T=0;T<x;T++)S=T%P-m,v=y-(T/P|0),g[T]=M=c?Math.abs(c==="y"?v:S):Og(S*S+v*v),M>_&&(_=M),M<b&&(b=M);i==="random"&&Kg(g),g.max=_-b,g.min=b,g.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(P>x?x-1:c?c==="y"?x/P:P:Math.max(P,x/P))||0)*(i==="edges"?-1:1),g.b=x<0?s-x:s,g.u=Tn(t.amount||t.each)||0,n=n&&x<0?g1(n):n}return x=(g[d]-g.min)/g.max||0,qt(g.b+(n?n(x):x)*g.v)+g.u}},yd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Er(n)?0:Tn(n))}},jg=function(e,t){var n=Dn(e),i,s;return!n&&sr(e)&&(i=n=e.radius||Pi,e.values?(e=Ii(e.values),(s=!Er(e[0]))&&(i*=i)):e=yd(e.increment)),ts(t,n?Kt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Pi,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Er(a)?u:u+Tn(a)}:yd(e))},e0=function(e,t,n,i){return ts(Dn(e)?!t:n===!0?!!(n=0):!i,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},r1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},s1=function(e,t){return function(n){return e(parseFloat(n))+(t||Tn(n))}},a1=function(e,t,n){return n0(e,t,0,1,n)},t0=function(e,t,n){return ts(n,function(i){return e[~~t(i)]})},o1=function r(e,t,n){var i=t-e;return Dn(e)?t0(e,r(0,e.length),t):ts(n,function(s){return(i+(s-e)%i)%i+e})},l1=function r(e,t,n){var i=t-e,s=i*2;return Dn(e)?t0(e,r(0,e.length-1),t):ts(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Oa=function(e){return e.replace(Vb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Gb);return e0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},n0=function(e,t,n,i,s){var a=t-e,o=i-n;return ts(s,function(l){return n+((l-e)/a*o||0)})},c1=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=dn(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var x=Math.min(d,~~p);return u[x](p-x)},n=t}else i||(e=Da(Dn(e)?[]:{},e));if(!u){for(l in t)Nd.call(o,e,l,"get",t[l]);s=function(p){return zd(p,o)||(a?e.p:e)}}}return ts(n,s)},Dg=function(e,t,n){var i=e.labels,s=Pi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},mi=function(e,t,n){var i=e.vars,s=i[t],a=Vt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Qr.length&&Xu(),o&&(Vt=o),u=l?s.apply(c,l):s.call(c),Vt=a,u},ol=function(e){return es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&mi(e,"onInterrupt"),e},La,i0=[],r0=function(e){if(e)if(e=!e.name&&e.default||e,bd()||e.headless){var t=e.name,n=Kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:pl,render:zd,add:Nd,kill:E1,modifier:w1,rawVars:0},a={targetTest:0,get:0,getSetter:nh,aliases:{},register:0};if(Fa(),e!==i){if(ei[t])return;_i(i,_i(qu(e,s),a)),Da(i.prototype,Da(s,qu(e,a))),ei[i.prop=t]=i,e.targetTest&&(Gu.push(i),Ad[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Vg(t,i),e.register&&e.register(Nn,i,qn)}else i0.push(e)},Ot=255,ll={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},cd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ot+.5|0},s0=function(e,t,n){var i=e?Er(e)?[e>>16,e>>8&Ot,e&Ot]:0:ll.black,s,a,o,l,c,u,f,d,h,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ll[e])i=ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ot,i&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(Rg),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=cd(l+1/3,s,a),i[1]=cd(l,s,a),i[2]=cd(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Td),n&&i.length<4&&(i[3]=1),i}else i=e.match(Rg)||ll.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Ot,a=i[1]/Ot,o=i[2]/Ot,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},a0=function(e){var t=[],n=[],i=-1;return e.split(wr).forEach(function(s){var a=s.match(Is)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ng=function(e,t,n){var i="",s=(e+i).match(wr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=s0(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=a0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(wr,"1").split(Is),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(wr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},wr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ll)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),u1=/hsl[a]?\(/,Ld=function(e){var t=e.join(" "),n;if(wr.lastIndex=0,wr.test(t))return n=u1.test(t),e[1]=Ng(e[1],n),e[0]=Ng(e[0],n,a0(e[1])),!0},ml,ti=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,p=function x(g){var m=r()-i,y=g===!0,S,v,M,T;if((m>e||m<0)&&(n+=m-t),i+=m,M=i-n,S=M-a,(S>0||y)&&(T=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,a+=S+(S>=s?0:s-S),v=1),y||(l=c(x)),v)for(h=0;h<o.length;h++)o[h](M,d,T,g)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){zg&&(!md&&bd()&&(ir=md=window,Ed=ir.document||{},gi.gsap=Nn,(ir.gsapVersions||(ir.gsapVersions=[])).push(Nn.version),kg(Wu||ir.GreenSockGlobals||!ir.gsap&&ir||{}),i0.forEach(r0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(g){return setTimeout(g,a-f.time*1e3+1|0)},ml=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ml=0,c=pl},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,m,y){var S=m?function(v,M,T,_){g(v,M,T,_),f.remove(S)}:g;return f.remove(g),o[y?"unshift":"push"](S),Fa(),S},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},f})(),Fa=function(){return!ml&&ti.wake()},_t={},h1=/^[\d.\-M][\d.\-,\s]/,f1=/["']/g,d1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(f1,"").trim():+c,i=l.substr(o+1).trim();return t},p1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},m1=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[d1(t[1])]:p1(e).split(",").map(Wg)):_t._CE&&h1.test(e)?_t._CE("",e):n},g1=function(e){return function(t){return 1-e(1-t)}},Cs=function(e,t){return e&&(Kt(e)?e:_t[e]||m1(e))||t},Ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Xn(e,function(o){_t[o]=gi[o]=s,_t[a=o.toLowerCase()]=n;for(var l in s)_t[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[o+"."+l]=s[l]}),s},o0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ud=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/pd*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*kb((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:o0(o);return s=pd/s,l.config=function(c,u){return r(e,c,u)},l},hd=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:o0(n);return i.config=function(s){return r(e,s)},i};Xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ds(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Ds("Elastic",ud("in"),ud("out"),ud());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Ds("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ds("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ds("Circ",function(r){return-(Og(1-r*r)-1)});Ds("Sine",function(r){return r===1?1:-zb(r*Ob)+1});Ds("Back",hd("in"),hd("out"),hd());_t.SteppedEase=_t.steps=gi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ut;return function(o){return((i*xl(0,a,o)|0)+s)*n}}};fl.ease=_t["quad.out"];Xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rd+=r+","+r+"Params,"});var Dd=function(e,t){this.id=Bb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pd,this.set=t?t.getSetter:nh},gl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ua(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),ml||ti.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ua(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Fa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(th(this,n),!s._dp||s.parent||Yg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ut||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ig(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ig(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Na(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Yu(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(xl(-Math.abs(this._delay),o,s),i!==!1),eh(this),$b(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Fa(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Ut,a;if(s)for(this._tTime-=Ut,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Ut){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=qt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&rr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yu(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=qb);var i=bn;return bn=n,Id(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ci(this,n),ni(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ni(i)),this._dur||(this._zTime=-Ut),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ut)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Kt(n)?n:Xg,l=function(){var u=i.then;i.then=null,s&&s(),Kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ol(this)},r})();_i(gl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Ln=(function(r){Fg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ni(n.sortChildren),Yt&&rr(n.parent||Yt,Tr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zg(Tr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ul(0,arguments,this),this},t.from=function(i,s,a){return ul(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ul(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,cl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(i,s,Ci(this,a),1),this},t.call=function(i,s,a){return rr(this,tn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new tn(i,a,Ci(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,cl(a).immediateRender=ni(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,cl(o).immediateRender=ni(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:qt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,p,x,g,m,y,S,v,M,T,_;if(this!==Yt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,S=this._ts,m=!S,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(d=qt(u%g),u===l?(x=this._repeat,d=c):(M=qt(u/g),x=~~M,x&&x===M&&(d=c,x--),d>c&&(d=c)),M=Na(this._tTime,g),!o&&this._tTime&&M!==x&&this._tTime-M*g-this._dur<=0&&(M=x),T&&x&1&&(d=c-d,_=1),x!==M&&!this._lock){var b=T&&M&1,P=b===(T&&x&1);if(x<M&&(b=!b),o=b?0:u%c?c:u,this._lock=1,this.render(o||(_?0:qt(x*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,M=x),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=e1(this,qt(o),qt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!M&&(mi(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(p=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!m){y=0,p&&(u+=this._zTime=-Ut);break}}h=p}else{h=this._last;for(var A=i<0?i:d;h;){if(p=h._prev,(h._act||A<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(A-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(A-h._start)*h._ts,s,a||bn&&Id(h)),d!==this._time||!this._ts&&!m){y=0,p&&(u+=this._zTime=A?-Ut:Ut);break}}h=p}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-Ut)._zTime=d>=o?1:-1,this._ts))return this._start=v,eh(this),this.render(i,s,a);this._onUpdate&&!s&&mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&es(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(mi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Er(s)||(s=Ci(this,s,i)),!(i instanceof gl)){if(Dn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(dn(i))return this.addLabel(i,s);if(Kt(i))i=tn.delayedCall(0,i);else return this}return this!==i?rr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof tn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return dn(i)?this.removeLabel(i):Kt(i)?this.killTweensOf(i):(i.parent===this&&ju(this,i),i===this._recent&&(this._recent=this._last),Rs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=tn.delayedCall(0,s||pl,a);return o.data="isPause",this._hasPause=1,rr(this,o,Ci(this,i))},t.removePause=function(i){var s=this._first;for(i=Ci(this,i);s;)s._start===i&&s.data==="isPause"&&es(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Kr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ii(i),l=this._first,c=Er(s),u;l;)l instanceof tn?Yb(l._targets,o)&&(c?(!Kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Ci(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,p=tn.to(a,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ut,onStart:function(){if(a.pause(),!h){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==g&&Ua(p,g,0,1).render(p._time,!0,!0),h=1}u&&u.apply(p,f||[])}},s));return d?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,_i({startAt:{time:Ci(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Dg(this,Ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Dg(this,Ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ut)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=qt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Rs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Rs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Pi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,rr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=qt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ua(a,a===Yt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Yt._ts&&(Hg(Yt,Yu(i,Yt)),Gg=ti.frame),ti.frame>=Cg){Cg+=ii.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&ii.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},e})(gl);_i(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var _1=function(e,t,n,i,s,a,o){var l=new qn(this._pt,e,t,0,1,Bd,null,s),c=0,u=0,f,d,h,p,x,g,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Oa(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),d=n.match(od)||[];f=od.exec(i);)p=f[0],x=i.substring(c,f.index),h?h=(h+1)%5:x.substr(-5)==="rgba("&&(h=1),p!==d[u++]&&(g=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:x||u===1?x:",",s:g,c:p.charAt(1)==="="?Ls(g,p)-g:parseFloat(p)-g,m:h&&h<4?Math.round:0},c=od.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(wd.test(i)||m)&&(l.e=0),this._pt=l,l},Nd=function(e,t,n,i,s,a,o,l,c,u){Kt(i)&&(i=i(s||0,e,a));var f=e[t],d=n!=="get"?n:Kt(f)?c?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Kt(f)?c?S1:c0:Od,p;if(dn(i)&&(~i.indexOf("random(")&&(i=Oa(i)),i.charAt(1)==="="&&(p=Ls(d,i)+(Tn(d)||0),(p||p===0)&&(i=p))),!u||d!==i||Md)return!isNaN(d*i)&&i!==""?(p=new qn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?T1:u0,0,h),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!f&&!(t in e)&&Qu(t,i),_1.call(this,e,t,d,i,h,l||ii.stringFilter,c))},x1=function(e,t,n,i,s){if(Kt(e)&&(e=hl(e,s,t,n,i)),!sr(e)||e.style&&e.nodeType||Dn(e)||Bg(e))return dn(e)?hl(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=hl(e[o],s,t,n,i);return a},Ud=function(e,t,n,i,s,a){var o,l,c,u;if(ei[e]&&(o=new ei[e]).init(s,o.rawVars?t[e]:x1(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new qn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==La))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Kr,Md,Fd=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,p=e._dur,x=e._startAt,g=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:g,S=e._overwrite==="auto"&&!Sd,v=e.timeline,M=i.easeReverse||f,T,_,b,P,A,L,D,H,R,U,z,F,J;if(v&&(!d||!s)&&(s="none"),e._ease=Cs(s,fl.ease),e._rEase=M&&(Cs(M)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(H=g[0]?jr(g[0]).harness:0,F=H&&i[H.prop],T=qu(i,Ad),x&&(x._zTime<0&&x.progress(1),t<0&&u&&o&&!h?x.render(-1,!0):x.revert(u&&p?Vu:Xb),x._lazy=0),a){if(es(e._startAt=tn.set(g,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!x&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return mi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!o&&!h)&&e._startAt.revert(Vu),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!x){if(t&&(o=!1),b=_i({overwrite:!1,data:"isFromStart",lazy:o&&!x&&ni(l),immediateRender:o,stagger:0,parent:m},T),F&&(b[H.prop]=F),es(e._startAt=tn.set(g,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(Vu):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ut,Ut);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ni(l)||l&&!p,_=0;_<g.length;_++){if(A=g[_],D=A._gsap||Cd(g)[_]._gsap,e._ptLookup[_]=U={},gd[D.id]&&Qr.length&&Xu(),z=y===g?_:y.indexOf(A),H&&(R=new H).init(A,F||T,e,z,y)!==!1&&(e._pt=P=new qn(e._pt,A,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(X){U[X]=P}),R.priority&&(L=1)),!H||F)for(b in T)ei[b]&&(R=Ud(b,T,e,z,A,y))?R.priority&&(L=1):U[b]=P=Nd.call(e,A,b,"get",T[b],z,y,0,i.stringFilter);e._op&&e._op[_]&&e.kill(A,e._op[_]),S&&e._pt&&(Kr=e,Yt.killTweensOf(A,U,e.globalTime(t)),J=!e.parent,Kr=0),e._pt&&l&&(gd[D.id]=1)}L&&kd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,d&&t<=0&&v.render(Pi,!0,!0)},v1=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Md=1,e.vars[t]="+=0",Fd(e,o),Md=0,l?dl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Qt(n)+Tn(f.e)),f.b&&(f.b=u.s+Tn(f.b))},y1=function(e,t){var n=e[0]?jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Da({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},M1=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Dn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},hl=function(e,t,n,i,s){return Kt(e)?e.call(t,n,i,s):dn(e)&&~e.indexOf("random(")?Oa(e):e},Ju=Rd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",l0={};Xn(Ju+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return l0[r]=1});Ju=Ju.split(",");var tn=(function(r){Fg(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:cl(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,p=l.keyframes,x=l.defaults,g=l.scrollTrigger,m=i.parent||Yt,y=(Dn(n)||Bg(n)?Er(n[0]):"length"in i)?[n]:Ii(n),S,v,M,T,_,b,P,A;if(o._targets=y.length?Cd(y):dl("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,p||d||ku(c)||ku(u)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(S=o.timeline=new Ln({data:"nested",defaults:x||{},targets:m&&m.data==="nested"?m.vars.targets:y}),S.kill(),S.parent=S._dp=Tr(o),S._start=0,d||ku(c)||ku(u)){if(T=y.length,P=d&&Qg(d),sr(d))for(_ in d)~Ju.indexOf(_)&&(A||(A={}),A[_]=d[_]);for(v=0;v<T;v++)M=qu(i,l0),M.stagger=0,L&&(M.easeReverse=L),A&&Da(M,A),b=y[v],M.duration=+hl(c,Tr(o),v,b,y),M.delay=(+hl(u,Tr(o),v,b,y)||0)-o._delay,!d&&T===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),S.to(b,M,P?P(v,b,y):0),S._ease=_t.none;S.duration()?c=u=0:o.timeline=0}else if(p){cl(_i(S.vars.defaults,{ease:"none"})),S._ease=Cs(p.ease||i.ease||"none");var D=0,H,R,U;if(Dn(p))p.forEach(function(z){return S.to(y,z,">")}),S.duration();else{M={};for(_ in p)_==="ease"||_==="easeEach"||M1(_,p[_],M,p.easeEach);for(_ in M)for(H=M[_].sort(function(z,F){return z.t-F.t}),D=0,v=0;v<H.length;v++)R=H[v],U={ease:R.e,duration:(R.t-(v?H[v-1].t:0))/100*c},U[_]=R.v,S.to(y,U,D),D+=U.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return h===!0&&!Sd&&(Kr=Tr(o),Yt.killTweensOf(y),Kr=0),rr(m,Tr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!p&&o._start===qt(m._time)&&ni(f)&&Kb(Tr(o))&&m.data!=="nested")&&(o._tTime=-Ut,o.render(Math.max(0,-u)||0)),g&&Zg(Tr(o),g),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ut&&!u?l:i<Ut?0:i,d,h,p,x,g,m,y,S;if(!c)jb(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,S=this.timeline,this._repeat){if(x=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(x*100+i,s,a);if(d=qt(f%x),f===l?(p=this._repeat,d=c):(g=qt(f/x),p=~~g,p&&p===g?(d=c,p--):d>c&&(d=c)),m=this._yoyo&&p&1,m&&(d=c-d),g=Na(this._tTime,x),d===o&&!a&&this._initted&&p===g)return this._tTime=f,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==x&&this._initted&&(this._lock=a=1,this.render(qt(x*p),!0).invalidate()._lock=0)}if(!this._initted){if(Jg(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var M=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!g&&(mi(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_d(this,i,s,a),mi(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&mi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&_d(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&es(this,1),!s&&!(u&&!o)&&(f||o||m)&&(mi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ml||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Fd(this,c),u=this._ease(c/this._dur),v1(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(th(this,0),this.parent||qg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ol(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Kr&&Kr.vars.overwrite!==!0)._first||ol(this),this.parent&&a!==this.timeline.totalDuration()&&Ua(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ii(i):o,c=this._ptLookup,u=this._pt,f,d,h,p,x,g,m;if((!s||s==="all")&&Jb(o,l))return s==="all"&&(this._pt=0),ol(this);for(f=this._op=this._op||[],s!=="all"&&(dn(s)&&(x={},Xn(s,function(y){return x[y]=1}),s=x),s=y1(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(f[m]=s,p=d,h={}):(h=f[m]=f[m]||{},p=s);for(x in p)g=d&&d[x],g&&((!("kill"in g.d)||g.d.kill(x)===!0)&&ju(this,g,"_pt"),delete d[x]),h!=="all"&&(h[x]=1)}return this._initted&&!this._pt&&u&&ol(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ul(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ul(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Yt.killTweensOf(i,s,a)},e})(gl);_i(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xn("staggerTo,staggerFrom,staggerFromTo",function(r){tn[r]=function(){var e=new Ln,t=xd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Od=function(e,t,n){return e[t]=n},c0=function(e,t,n){return e[t](n)},S1=function(e,t,n,i){return e[t](i.fp,n)},b1=function(e,t,n){return e.setAttribute(t,n)},nh=function(e,t){return Kt(e[t])?c0:Ku(e[t])&&e.setAttribute?b1:Od},u0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},T1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},zd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},w1=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},E1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ju(this,t,"_pt"):t.dep||(n=1),t=i;return!n},A1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},kd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},qn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||u0,this.d=l||this,this.set=c||Od,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=A1,this.m=n,this.mt=s,this.tween=i},r})();Xn(Rd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Ad[r]=1});gi.TweenMax=gi.TweenLite=tn;gi.TimelineLite=gi.TimelineMax=Ln;Yt=new Ln({sortChildren:!1,defaults:fl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=Ld;var Ps=[],Hu={},R1=[],Ug=0,C1=0,fd=function(e){return(Hu[e]||R1).map(function(t){return t()})},_l=function(){var e=Date.now(),t=[];e-Ug>2&&(fd("matchMediaInit"),Ps.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ir.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),fd("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ug=e,fd("matchMedia"))},h0=(function(){function r(t,n){this.selector=n&&vd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=C1++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Kt(n)&&(s=i,i=n,n=Kt);var a=this,o=function(){var c=Vt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=vd(s)),Vt=a,f=i.apply(a,arguments),Kt(f)&&a._r.push(f),Vt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Kt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Vt;Vt=null,n(this),Vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ps.length;a--;)Ps[a].id===this.id&&Ps.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(_l):o.removeEventListener("change",_l)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),P1=(function(){function r(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){sr(n)||(n={matches:n});var a=new h0(0,s||this.scope),o=a.conditions={},l,c,u;Vt&&!a.selector&&(a.selector=Vt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ir.matchMedia(n[c]),l&&(Ps.indexOf(a)<0&&Ps.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(_l):l.addEventListener("change",_l),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),$u={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return r0(i)})},timeline:function(e){return new Ln(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){dn(e)&&(e=Ii(e)[0]);var s=jr(e||{}).get,a=n?Xg:Wg;return n==="native"&&(n=""),e&&(t?a((ei[t]&&ei[t].get||s)(e,t,n,i)):function(o,l,c){return a((ei[o]&&ei[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ii(e),e.length>1){var i=e.map(function(u){return Nn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=ei[t],o=jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;La._pt=0,f.init(e,n?u+n:u,La,0,[e]),f.render(1,f),La._pt&&zd(1,La)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Nn.to(e,_i((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,fl.ease)),Pg(fl,e||{})},config:function(e){return Pg(ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ei[o]&&!gi[o]&&dl(t+" effect requires "+o+" plugin.")}),ld[t]=function(o,l,c){return n(Ii(o),_i(l||{},s),c)},a&&(Ln.prototype[t]=function(o,l,c){return this.add(ld[t](o,sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):_t},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ln(e),i,s;for(n.smoothChildTiming=ni(e.smoothChildTiming),Yt.remove(n),n._dp=0,n._time=n._tTime=Yt._time,i=Yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&rr(n,i,i._start-i._delay),i=s;return rr(Yt,n,0),n},context:function(e,t){return e?new h0(e,t):Vt},matchMedia:function(e){return new P1(e)},matchMediaRefresh:function(){return Ps.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||_l()},addEventListener:function(e,t){var n=Hu[e]||(Hu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Hu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:o1,wrapYoyo:l1,distribute:Qg,random:e0,snap:jg,normalize:a1,getUnit:Tn,clamp:n1,splitColor:s0,toArray:Ii,selector:vd,mapRange:n0,pipe:r1,unitize:s1,interpolate:c1,shuffle:Kg},install:kg,effects:ld,ticker:ti,updateRoot:Ln.updateRoot,plugins:ei,globalTimeline:Yt,core:{PropTween:qn,globals:Vg,Tween:tn,Timeline:Ln,Animation:gl,getCache:jr,_removeLinkedListItem:ju,reverting:function(){return bn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return Sd=e}}};Xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return $u[r]=tn[r]});ti.add(Ln.updateRoot);La=$u.to({},{duration:0});var I1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},L1=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=I1(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},dd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(dn(s)&&(l={},Xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}L1(o,s)}}}},Nn=$u.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},dd("roundProps",yd),dd("modifiers"),dd("snap",jg))||$u;tn.version=Ln.version=Nn.version="3.15.1";zg=1;bd()&&Fa();var D1=_t.Power0,N1=_t.Power1,U1=_t.Power2,F1=_t.Power3,O1=_t.Power4,B1=_t.Linear,z1=_t.Quad,k1=_t.Cubic,V1=_t.Quart,G1=_t.Quint,H1=_t.Strong,W1=_t.Elastic,X1=_t.Back,q1=_t.SteppedEase,Y1=_t.Bounce,Z1=_t.Sine,J1=_t.Expo,$1=_t.Circ;var f0,ns,za,qd,Os,K1,d0,Yd,Q1=function(){return typeof window<"u"},Rr={},Fs=180/Math.PI,ka=Math.PI/180,Ba=Math.atan2,p0=1e8,Zd=/([A-Z])/g,j1=/(left|right|width|margin|padding|x)/i,eT=/[\s,\(]\S/,ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},S0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},b0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sT=function(e,t,n){return e.style[t]=n},aT=function(e,t,n){return e.style.setProperty(t,n)},oT=function(e,t,n){return e._gsap[t]=n},lT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},cT=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},uT=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Zt="transform",ri=Zt+"Origin",hT=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Rr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ar[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ar(i,o)}):this.tfm[e]=a.x?a[e]:Ar(i,e),e===ri&&(this.tfm.zOrigin=a.zOrigin);else return ar.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Zt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Zt}(s||t)&&this.props.push(e,t,s[e])},T0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},fT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Zd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yd(),(!s||!s.isStart)&&!n[Zt]&&(T0(n),i.zOrigin&&n[ri]&&(n[ri]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},w0=function(e,t){var n={target:e,props:[],revert:fT,save:hT};return e._gsap||Nn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},E0,Hd=function(e,t){var n=ns.createElementNS?ns.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ns.createElement(e);return n&&n.style?n:ns.createElement(e)},xi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Zd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Va(t)||t,1)||""},m0="O,Moz,ms,Ms,Webkit".split(","),Va=function(e,t,n){var i=t||Os,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(m0[a]+e in s););return a<0?null:(a===3?"ms":a>=0?m0[a]:"")+e},Wd=function(){Q1()&&window.document&&(f0=window,ns=f0.document,za=ns.documentElement,Os=Hd("div")||{style:{}},K1=Hd("div"),Zt=Va(Zt),ri=Zt+"Origin",Os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",E0=!!Va("perspective"),Yd=Nn.core.reverting,qd=1)},g0=function(e){var t=e.ownerSVGElement,n=Hd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),za.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),za.removeChild(n),s},_0=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},A0=function(e){var t,n;try{t=e.getBBox()}catch{t=g0(e),n=1}return t&&(t.width||t.height)||n||(t=g0(e)),t&&!t.width&&!t.x&&!t.y?{x:+_0(e,["x","cx","x1"])||0,y:+_0(e,["y","cy","y1"])||0,width:0,height:0}:t},R0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&A0(e))},rs=function(e,t){if(t){var n=e.style,i;t in Rr&&t!==ri&&(t=Zt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Zd,"-$1").toLowerCase())):n.removeAttribute(t)}},is=function(e,t,n,i,s,a){var o=new qn(e._pt,t,n,0,1,a?b0:S0);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},x0={deg:1,rad:1,turn:1},dT={grid:1,flex:1},ss=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Os.style,l=j1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",p,x,g,m;if(i===a||!s||x0[i]||x0[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&R0(e),(h||a==="%")&&(Rr[t]||~t.indexOf("adius")))return p=m?e.getBBox()[l?"width":"height"]:e[u],Qt(h?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(d?a:i),x=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===ns||!x.appendChild)&&(x=ns.body),g=x._gsap,g&&h&&g.width&&l&&g.time===ti.time&&!g.uncache)return Qt(s/g.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,p=e[u],y?e.style[t]=y:rs(e,t)}else(h||a==="%")&&!dT[xi(x,"display")]&&(o.position=xi(e,"position")),x===e&&(o.position="static"),x.appendChild(Os),p=Os[u],x.removeChild(Os),o.position="absolute";return l&&h&&(g=jr(x),g.time=ti.time,g.width=x[u]),Qt(d?p*s/f:p&&s?f/p*s:0)},Ar=function(e,t,n,i){var s;return qd||Wd(),t in ar&&t!=="transform"&&(t=ar[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rr[t]&&t!=="transform"?(s=Ml(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rh(xi(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ih[t]&&ih[t](e,t,n)||xi(e,t)||Pd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ss(e,t,s,n)+n:s},pT=function(e,t,n,i){if(!n||n==="none"){var s=Va(t,e,1),a=s&&xi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=xi(e,"borderTopColor"))}var o=new qn(this._pt,e.style,t,0,1,Bd),l=0,c=0,u,f,d,h,p,x,g,m,y,S,v,M;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=xi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=e.style[t],e.style[t]=i,i=xi(e,t)||i,x?e.style[t]=x:rs(e,t)),u=[n,i],Ld(u),n=u[0],i=u[1],d=n.match(Is)||[],M=i.match(Is)||[],M.length){for(;f=Is.exec(i);)g=f[0],y=i.substring(l,f.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),g!==(x=d[c++]||"")&&(h=parseFloat(x)||0,v=x.substr((h+"").length),g.charAt(1)==="="&&(g=Ls(h,g)+v),m=parseFloat(g),S=g.substr((m+"").length),l=Is.lastIndex-S.length,S||(S=S||ii.units[t]||v,l===i.length&&(i+=S,o.e+=S)),v!==S&&(h=ss(e,t,x,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:h,c:m-h,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?b0:S0;return wd.test(i)&&(o.e=0),this._pt=o,o},v0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=v0[n]||n,t[1]=v0[i]||i,t.join(" ")},gT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Rr[o]&&(l=1,o=o==="transformOrigin"?ri:Zt),rs(n,o);l&&(rs(n,Zt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ml(n,1),a.uncache=1,T0(i)))}},ih={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new qn(e._pt,t,n,0,0,gT);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},yl=[1,0,0,1,0,0],C0={},P0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},y0=function(e){var t=xi(e,Zt);return P0(t)?yl:t.substr(7).match(Td).map(Qt)},Jd=function(e,t){var n=e._gsap||jr(e),i=e.style,s=y0(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?yl:s):(s===yl&&!e.offsetParent&&e!==za&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,za.appendChild(e)),s=y0(e),l?i.display=l:rs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):za.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xd=function(e,t,n,i,s,a){var o=e._gsap,l=s||Jd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],p=l[1],x=l[2],g=l[3],m=l[4],y=l[5],S=t.split(" "),v=parseFloat(S[0])||0,M=parseFloat(S[1])||0,T,_,b,P;n?l!==yl&&(_=h*g-p*x)&&(b=v*(g/_)+M*(-x/_)+(x*y-g*m)/_,P=v*(-p/_)+M*(h/_)-(h*y-p*m)/_,v=b,M=P):(T=A0(e),v=T.x+(~S[0].indexOf("%")?v/100*T.width:v),M=T.y+(~(S[1]||S[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&o.smooth?(m=v-c,y=M-u,o.xOffset=f+(m*h+y*x)-m,o.yOffset=d+(m*p+y*g)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ri]="0px 0px",a&&(is(a,o,"xOrigin",c,v),is(a,o,"yOrigin",u,M),is(a,o,"xOffset",f,o.xOffset),is(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},Ml=function(e,t){var n=e._gsap||new Dd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=xi(e,ri)||"0",u,f,d,h,p,x,g,m,y,S,v,M,T,_,b,P,A,L,D,H,R,U,z,F,J,X,I,ne,_e,De,K,he;return u=f=d=x=g=m=y=S=v=0,h=p=1,n.svg=!!(e.getCTM&&R0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Zt]!=="none"?l[Zt]:"")),i.scale=i.rotate=i.translate="none"),_=Jd(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Xd(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,_)),M=n.xOrigin||0,T=n.yOrigin||0,_!==yl&&(L=_[0],D=_[1],H=_[2],R=_[3],u=U=_[4],f=z=_[5],_.length===6?(h=Math.sqrt(L*L+D*D),p=Math.sqrt(R*R+H*H),x=L||D?Ba(D,L)*Fs:0,y=H||R?Ba(H,R)*Fs+x:0,y&&(p*=Math.abs(Math.cos(y*ka))),n.svg&&(u-=M-(M*L+T*H),f-=T-(M*D+T*R))):(he=_[6],De=_[7],I=_[8],ne=_[9],_e=_[10],K=_[11],u=_[12],f=_[13],d=_[14],b=Ba(he,_e),g=b*Fs,b&&(P=Math.cos(-b),A=Math.sin(-b),F=U*P+I*A,J=z*P+ne*A,X=he*P+_e*A,I=U*-A+I*P,ne=z*-A+ne*P,_e=he*-A+_e*P,K=De*-A+K*P,U=F,z=J,he=X),b=Ba(-H,_e),m=b*Fs,b&&(P=Math.cos(-b),A=Math.sin(-b),F=L*P-I*A,J=D*P-ne*A,X=H*P-_e*A,K=R*A+K*P,L=F,D=J,H=X),b=Ba(D,L),x=b*Fs,b&&(P=Math.cos(b),A=Math.sin(b),F=L*P+D*A,J=U*P+z*A,D=D*P-L*A,z=z*P-U*A,L=F,U=J),g&&Math.abs(g)+Math.abs(x)>359.9&&(g=x=0,m=180-m),h=Qt(Math.sqrt(L*L+D*D+H*H)),p=Qt(Math.sqrt(z*z+he*he)),b=Ba(U,z),y=Math.abs(b)>2e-4?b*Fs:0,v=K?1/(K<0?-K:K):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!P0(xi(e,Zt)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=x<=0?180:-180,x+=x<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Qt(h),n.scaleY=Qt(p),n.rotation=Qt(x)+o,n.rotationX=Qt(g)+o,n.rotationY=Qt(m)+o,n.skewX=y+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ri]=rh(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?xT:E0?I0:_T,n.uncache=0,n},rh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vd=function(e,t,n){var i=Tn(t);return Qt(parseFloat(t)+parseFloat(ss(e,"x",n+"px",i)))+i},_T=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,I0(e,t)},Ns="0deg",vl="0px",Us=") ",I0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,p=n.scaleX,x=n.scaleY,g=n.transformPerspective,m=n.force3D,y=n.target,S=n.zOrigin,v="",M=m==="auto"&&e&&e!==1||m===!0;if(S&&(f!==Ns||u!==Ns)){var T=parseFloat(u)*ka,_=Math.sin(T),b=Math.cos(T),P;T=parseFloat(f)*ka,P=Math.cos(T),a=Vd(y,a,_*P*-S),o=Vd(y,o,-Math.sin(T)*-S),l=Vd(y,l,b*P*-S+S)}g!==vl&&(v+="perspective("+g+Us),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||a!==vl||o!==vl||l!==vl)&&(v+=l!==vl||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Us),c!==Ns&&(v+="rotate("+c+Us),u!==Ns&&(v+="rotateY("+u+Us),f!==Ns&&(v+="rotateX("+f+Us),(d!==Ns||h!==Ns)&&(v+="skew("+d+", "+h+Us),(p!==1||x!==1)&&(v+="scale("+p+", "+x+Us),y.style[Zt]=v||"translate(0, 0)"},xT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,p=n.xOrigin,x=n.yOrigin,g=n.xOffset,m=n.yOffset,y=n.forceCSS,S=parseFloat(a),v=parseFloat(o),M,T,_,b,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ka,c*=ka,M=Math.cos(l)*f,T=Math.sin(l)*f,_=Math.sin(l-c)*-d,b=Math.cos(l-c)*d,c&&(u*=ka,P=Math.tan(c-u),P=Math.sqrt(1+P*P),_*=P,b*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),M*=P,T*=P)),M=Qt(M),T=Qt(T),_=Qt(_),b=Qt(b)):(M=f,b=d,T=_=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=ss(h,"x",a,"px"),v=ss(h,"y",o,"px")),(p||x||g||m)&&(S=Qt(S+p-(p*M+x*_)+g),v=Qt(v+x-(p*T+x*b)+m)),(i||s)&&(P=h.getBBox(),S=Qt(S+i/100*P.width),v=Qt(v+s/100*P.height)),P="matrix("+M+","+T+","+_+","+b+","+S+","+v+")",h.setAttribute("transform",P),y&&(h.style[Zt]=P)},vT=function(e,t,n,i,s){var a=360,o=dn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Fs:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*p0)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*p0)%a-~~(c/a)*a)),e._pt=d=new qn(e._pt,t,n,i,c,tT),d.e=u,d.u="deg",e._props.push(n),d},M0=function(e,t){for(var n in t)e[n]=t[n];return e},yT=function(e,t,n){var i=M0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Zt]=t,o=Ml(n,1),rs(n,Zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Zt],a[Zt]=t,o=Ml(n,1),a[Zt]=c);for(l in Rr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=Tn(c),p=Tn(u),f=h!==p?ss(n,l,c,p):parseFloat(c),d=parseFloat(u),e._pt=new qn(e._pt,o,l,f,d-f,Gd),e._pt.u=p||0,e._props.push(l));M0(o,i)};Xn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ih[e>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(p){return Ar(o,p,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(p,x){return h[p]=d[x]=d[x]||d[(x-1)/2|0]}),o.init(l,h,f)}});var $d={name:"css",register:Wd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,p,x,g,m,y,S,v,M,T,_,b,P;qd||Wd(),this.styles=this.styles||w0(e),b=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(u=t[x],!(ei[x]&&Ud(x,t,n,i,e,s)))){if(h=typeof u,p=ih[x],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Oa(u)),p)p(this,e,x,u,n)&&(_=1);else if(x.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(x)+"").trim(),u+="",wr.lastIndex=0,wr.test(c)||(g=Tn(c),m=Tn(u),m?g!==m&&(c=ss(e,x,c,m)+m):g&&(u+=g)),this.add(o,"setProperty",c,u,i,s,0,0,x),a.push(x),b.push(x,0,o[x]);else if(h!=="undefined"){if(l&&x in l?(c=typeof l[x]=="function"?l[x].call(n,i,e,s):l[x],dn(c)&&~c.indexOf("random(")&&(c=Oa(c)),Tn(c+"")||c==="auto"||(c+=ii.units[x]||Tn(Ar(e,x))||""),(c+"").charAt(1)==="="&&(c=Ar(e,x))):c=Ar(e,x),d=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),x in ar&&(x==="autoAlpha"&&(d===1&&Ar(e,"visibility")==="hidden"&&f&&(d=0),b.push("visibility",0,o.visibility),is(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),x!=="scale"&&x!=="transform"&&(x=ar[x],~x.indexOf(",")&&(x=x.split(",")[0]))),S=x in Rr,S){if(this.styles.save(x),P=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=xi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=u,u=xi(e,"perspective"),A?e.style.perspective=A:rs(e,"perspective")}f=parseFloat(u)}if(v||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ml(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new qn(this._pt,o,Zt,0,1,M.renderTransform,M,0,-1),v.dep=1),x==="scale")this._pt=new qn(this._pt,M,"scaleY",M.scaleY,(y?Ls(M.scaleY,y+f):f)-M.scaleY||0,Gd),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){b.push(ri,0,o[ri]),u=mT(u),M.svg?Xd(e,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&is(this,M,"zOrigin",M.zOrigin,m),is(this,o,x,rh(c),rh(u)));continue}else if(x==="svgOrigin"){Xd(e,u,1,T,0,this);continue}else if(x in C0){vT(this,M,x,d,y?Ls(d,y+u):u);continue}else if(x==="smoothOrigin"){is(this,M,"smooth",M.smooth,u);continue}else if(x==="force3D"){M[x]=u;continue}else if(x==="transform"){yT(this,u,e);continue}}else x in o||(x=Va(x)||x);if(S||(f||f===0)&&(d||d===0)&&!eT.test(u)&&x in o)g=(c+"").substr((d+"").length),f||(f=0),m=Tn(u)||(x in ii.units?ii.units[x]:g),g!==m&&(d=ss(e,x,c,m)),this._pt=new qn(this._pt,S?M:o,x,d,(y?Ls(d,y+f):f)-d,!S&&(m==="px"||x==="zIndex")&&t.autoRound!==!1?rT:Gd),this._pt.u=m||0,S&&P!==u?(this._pt.b=c,this._pt.e=P,this._pt.r=iT):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=nT);else if(x in o)pT.call(this,e,x,c,y?y+u:u);else if(x in e)this.add(e,x,c||e[x],y?y+u:u,i,s);else if(x!=="parseTransform"){Qu(x,u);continue}S||(x in o?b.push(x,0,o[x]):typeof e[x]=="function"?b.push(x,2,e[x]()):b.push(x,1,c||e[x])),a.push(x)}}_&&kd(this)},render:function(e,t){if(t.tween._time||!Yd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ar,aliases:ar,getSetter:function(e,t,n){var i=ar[t];return i&&i.indexOf(",")<0&&(t=i),t in Rr&&t!==ri&&(e._gsap.x||Ar(e,"x"))?n&&d0===n?t==="scale"?lT:oT:(d0=n||{})&&(t==="scale"?cT:uT):e.style&&!Ku(e.style[t])?sT:~t.indexOf("-")?aT:nh(e,t)},core:{_removeProperty:rs,_getMatrix:Jd}};Nn.utils.checkPrefix=Va;Nn.core.getStyleSaver=w0;(function(r,e,t,n){var i=Xn(r+","+e+","+t,function(s){Rr[s]=1});Xn(e,function(s){ii.units[s]="deg",C0[s]=1}),ar[i[13]]=r+","+e,Xn(n,function(s){var a=s.split(":");ar[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ii.units[r]="px"});Nn.registerPlugin($d);var ot=Nn.registerPlugin($d)||Nn,MR=ot.core.Tween;function L0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function MT(r,e,t){return e&&L0(r.prototype,e),t&&L0(r,t),r}var wn,oh,ST,si,as,os,Ha,N0,Bs,Wa,U0,Cr,Wi,F0,O0=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},B0=1,Ga=[],lt=[],Xi=[],bl=Date.now,Kd=function(e,t){return t},bT=function(){var e=Wa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Xi),lt=n,Xi=i,Kd=function(a,o){return t[a](o)}},Ir=function(e,t){return~Xi.indexOf(e)&&Xi[Xi.indexOf(e)+1][t]},Tl=function(e){return!!~U0.indexOf(e)},Zn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sh="scrollLeft",ah="scrollTop",Qd=function(){return Cr&&Cr.isPressed||lt.cache++},lh=function(e,t){var n=function i(s){if(s||s===0){B0&&si.history.scrollRestoration!=="manual"&&(si.history.scrollRestoration="manual");var a=Cr&&Cr.isPressed;s=i.v=Math.round(s)||(Cr&&Cr.iOS?1:0),e(s),i.cacheID=lt.cache,a&&Kd("ss",s)}else(t||lt.cache!==i.cacheID||Kd("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Un={s:sh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:lh(function(r){return arguments.length?si.scrollTo(r,an.sc()):si.pageXOffset||as[sh]||os[sh]||Ha[sh]||0})},an={s:ah,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:lh(function(r){return arguments.length?si.scrollTo(Un.sc(),r):si.pageYOffset||as[ah]||os[ah]||Ha[ah]||0})},Jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},TT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Pr=function(e,t){var n=t.s,i=t.sc;Tl(e)&&(e=as.scrollingElement||os);var s=lt.indexOf(e),a=i===an.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+a]||Zn(e,"scroll",Qd);var o=lt[s+a],l=o||(lt[s+a]=lh(Ir(e,n),!0)||(Tl(e)?i:lh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},ch=function(e,t,n){var i=e,s=e,a=bl(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,x){var g=bl();x||g-a>l?(s=i,i=p,o=a,a=g):n?i+=p:i=s+(p-s)/(g-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(p){var x=o,g=s,m=bl();return(p||p===0)&&p!==i&&u(p),a===o||m-o>c?0:(i+(n?g:-g))/((n?m:a)-x)*1e3};return{update:u,reset:f,getVelocity:d}},Sl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},D0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},z0=function(){Wa=wn.core.globals().ScrollTrigger,Wa&&Wa.core&&bT()},k0=function(e){return wn=e||O0(),!oh&&wn&&typeof document<"u"&&document.body&&(si=window,as=document,os=as.documentElement,Ha=as.body,U0=[si,as,os,Ha],ST=wn.utils.clamp,F0=wn.core.context||function(){},Bs="onpointerenter"in Ha?"pointer":"mouse",N0=jt.isTouch=si.matchMedia&&si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Wi=jt.eventTypes=("ontouchstart"in os?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in os?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return B0=0},500),oh=1),Wa||z0(),oh};Un.op=an;lt.cache=0;var jt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){oh||k0(wn)||console.warn("Please gsap.registerPlugin(Observer)"),Wa||z0();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,p=n.wheelSpeed,x=n.event,g=n.onDragStart,m=n.onDragEnd,y=n.onDrag,S=n.onPress,v=n.onRelease,M=n.onRight,T=n.onLeft,_=n.onUp,b=n.onDown,P=n.onChangeX,A=n.onChangeY,L=n.onChange,D=n.onToggleX,H=n.onToggleY,R=n.onHover,U=n.onHoverEnd,z=n.onMove,F=n.ignoreCheck,J=n.isNormalizer,X=n.onGestureStart,I=n.onGestureEnd,ne=n.onWheel,_e=n.onEnable,De=n.onDisable,K=n.onClick,he=n.scrollSpeed,Ee=n.capture,Ce=n.allowClicks,ge=n.lockAxis,Re=n.onLockAxis;this.target=o=Jn(o)||os,this.vars=n,h&&(h=wn.utils.toArray(h)),i=i||1e-9,s=s||0,p=p||1,he=he||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(si.getComputedStyle(Ha).lineHeight)||22);var Qe,ce,ze,Pe,re,de,pe,k=this,Se=0,xe=0,Oe=n.passive||!u&&n.passive!==!1,Ge=Pr(o,Un),Je=Pr(o,an),it=Ge(),O=Je(),rt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Wi[0]==="pointerdown",Ze=Tl(o),$e=o.ownerDocument||as,ye=[0,0,0],st=[0,0,0],Fe=0,Ye=function(){return Fe=bl()},C=function(ee,q){return(k.event=ee)&&h&&TT(ee.target,h)||q&&rt&&ee.pointerType!=="touch"||F&&F(ee,q)},w=function(){k._vx.reset(),k._vy.reset(),ce.pause(),f&&f(k)},Y=function(){var ee=k.deltaX=D0(ye),q=k.deltaY=D0(st),G=Math.abs(ee)>=i,le=Math.abs(q)>=i;L&&(G||le)&&L(k,ee,q,ye,st),G&&(M&&k.deltaX>0&&M(k),T&&k.deltaX<0&&T(k),P&&P(k),D&&k.deltaX<0!=Se<0&&D(k),Se=k.deltaX,ye[0]=ye[1]=ye[2]=0),le&&(b&&k.deltaY>0&&b(k),_&&k.deltaY<0&&_(k),A&&A(k),H&&k.deltaY<0!=xe<0&&H(k),xe=k.deltaY,st[0]=st[1]=st[2]=0),(Pe||ze)&&(z&&z(k),ze&&(g&&ze===1&&g(k),y&&y(k),ze=0),Pe=!1),de&&!(de=!1)&&Re&&Re(k),re&&(ne(k),re=!1),Qe=0},ue=function(ee,q,G){ye[G]+=ee,st[G]+=q,k._vx.update(ee),k._vy.update(q),c?Qe||(Qe=requestAnimationFrame(Y)):Y()},se=function(ee,q){ge&&!pe&&(k.axis=pe=Math.abs(ee)>Math.abs(q)?"x":"y",de=!0),pe!=="y"&&(ye[2]+=ee,k._vx.update(ee,!0)),pe!=="x"&&(st[2]+=q,k._vy.update(q,!0)),c?Qe||(Qe=requestAnimationFrame(Y)):Y()},Me=function(ee){if(!C(ee,1)){ee=Sl(ee,u);var q=ee.clientX,G=ee.clientY,le=q-k.x,j=G-k.y,fe=k.isDragging;k.x=q,k.y=G,(fe||(le||j)&&(Math.abs(k.startX-q)>=s||Math.abs(k.startY-G)>=s))&&(ze||(ze=fe?2:1),fe||(k.isDragging=!0),se(le,j))}},Te=k.onPress=function(W){C(W,1)||W&&W.button||(k.axis=pe=null,ce.pause(),k.isPressed=!0,W=Sl(W),Se=xe=0,k.startX=k.x=W.clientX,k.startY=k.y=W.clientY,k._vx.reset(),k._vy.reset(),Zn(J?o:$e,Wi[1],Me,Oe,!0),k.deltaX=k.deltaY=0,S&&S(k))},$=k.onRelease=function(W){if(!C(W,1)){Yn(J?o:$e,Wi[1],Me,!0);var ee=!isNaN(k.y-k.startY),q=k.isDragging,G=q&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),le=Sl(W);!G&&ee&&(k._vx.reset(),k._vy.reset(),u&&Ce&&wn.delayedCall(.08,function(){if(bl()-Fe>300&&!W.defaultPrevented){if(W.target.click)W.target.click();else if($e.createEvent){var j=$e.createEvent("MouseEvents");j.initMouseEvent("click",!0,!0,si,1,le.screenX,le.screenY,le.clientX,le.clientY,!1,!1,!1,!1,0,null),W.target.dispatchEvent(j)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,f&&q&&!J&&ce.restart(!0),ze&&Y(),m&&q&&m(k),v&&v(k,G)}},oe=function(ee){return ee.touches&&ee.touches.length>1&&(k.isGesturing=!0)&&X(ee,k.isDragging)},ve=function(){return(k.isGesturing=!1)||I(k)},N=function(ee){if(!C(ee)){var q=Ge(),G=Je();ue((q-it)*he,(G-O)*he,1),it=q,O=G,f&&ce.restart(!0)}},ae=function(ee){if(!C(ee)){ee=Sl(ee,u),ne&&(re=!0);var q=(ee.deltaMode===1?l:ee.deltaMode===2?si.innerHeight:1)*p;ue(ee.deltaX*q,ee.deltaY*q,0),f&&!J&&ce.restart(!0)}},ie=function(ee){if(!C(ee)){var q=ee.clientX,G=ee.clientY,le=q-k.x,j=G-k.y;k.x=q,k.y=G,Pe=!0,f&&ce.restart(!0),(le||j)&&se(le,j)}},we=function(ee){k.event=ee,R(k)},me=function(ee){k.event=ee,U(k)},be=function(ee){return C(ee)||Sl(ee,u)&&K(k)};ce=k._dc=wn.delayedCall(d||.25,w).pause(),k.deltaX=k.deltaY=0,k._vx=ch(0,50,!0),k._vy=ch(0,50,!0),k.scrollX=Ge,k.scrollY=Je,k.isDragging=k.isGesturing=k.isPressed=!1,F0(this),k.enable=function(W){return k.isEnabled||(Zn(Ze?$e:o,"scroll",Qd),a.indexOf("scroll")>=0&&Zn(Ze?$e:o,"scroll",N,Oe,Ee),a.indexOf("wheel")>=0&&Zn(o,"wheel",ae,Oe,Ee),(a.indexOf("touch")>=0&&N0||a.indexOf("pointer")>=0)&&(Zn(o,Wi[0],Te,Oe,Ee),Zn($e,Wi[2],$),Zn($e,Wi[3],$),Ce&&Zn(o,"click",Ye,!0,!0),K&&Zn(o,"click",be),X&&Zn($e,"gesturestart",oe),I&&Zn($e,"gestureend",ve),R&&Zn(o,Bs+"enter",we),U&&Zn(o,Bs+"leave",me),z&&Zn(o,Bs+"move",ie)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=Pe=ze=!1,k._vx.reset(),k._vy.reset(),it=Ge(),O=Je(),W&&W.type&&Te(W),_e&&_e(k)),k},k.disable=function(){k.isEnabled&&(Ga.filter(function(W){return W!==k&&Tl(W.target)}).length||Yn(Ze?$e:o,"scroll",Qd),k.isPressed&&(k._vx.reset(),k._vy.reset(),Yn(J?o:$e,Wi[1],Me,!0)),Yn(Ze?$e:o,"scroll",N,Ee),Yn(o,"wheel",ae,Ee),Yn(o,Wi[0],Te,Ee),Yn($e,Wi[2],$),Yn($e,Wi[3],$),Yn(o,"click",Ye,!0),Yn(o,"click",be),Yn($e,"gesturestart",oe),Yn($e,"gestureend",ve),Yn(o,Bs+"enter",we),Yn(o,Bs+"leave",me),Yn(o,Bs+"move",ie),k.isEnabled=k.isPressed=k.isDragging=!1,De&&De(k))},k.kill=k.revert=function(){k.disable();var W=Ga.indexOf(k);W>=0&&Ga.splice(W,1),Cr===k&&(Cr=0)},Ga.push(k),J&&Tl(o)&&(Cr=k),k.enable(x)},MT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();jt.version="3.15.1";jt.create=function(r){return new jt(r)};jt.register=k0;jt.getAll=function(){return Ga.slice()};jt.getById=function(r){return Ga.filter(function(e){return e.vars.id===r})[0]};O0()&&wn.registerPlugin(jt);var ke,Za,ft,It,Mi,Et,fp,wh,Ol,Il,El,uh,Fn,Rh,sp,Kn,V0,G0,Ja,r_,jd,s_,$n,ap,a_,o_,ls,op,dp,$a,pp,cs,lp,ep,hh=1,On=Date.now,tp=On(),Ni=0,Al=0,H0=function(e,t,n){var i=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},W0=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},wT=function r(){return Al&&requestAnimationFrame(r)},X0=function(){return Rh=1},q0=function(){return Rh=0},or=function(e){return e},Rl=function(e){return Math.round(e*1e5)/1e5||0},l_=function(){return typeof window<"u"},c_=function(){return ke||l_()&&(ke=window.gsap)&&ke.registerPlugin&&ke},Ws=function(e){return!!~fp.indexOf(e)},u_=function(e){return(e==="Height"?pp:ft["inner"+e])||Mi["client"+e]||Et["client"+e]},h_=function(e){return Ir(e,"getBoundingClientRect")||(Ws(e)?function(){return Th.width=ft.innerWidth,Th.height=pp,Th}:function(){return Lr(e)})},ET=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Ir(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?u_(s):e["client"+s])||0}},AT=function(e,t){return!t||~Xi.indexOf(e)?h_(e):function(){return Th}},lr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ir(e,n))?a()-h_(e)()[s]:Ws(e)?(Mi[n]||Et[n])-u_(i):e[n]-e["offset"+i])},fh=function(e,t){for(var n=0;n<Ja.length;n+=3)(!t||~t.indexOf(Ja[n+1]))&&e(Ja[n],Ja[n+1],Ja[n+2])},yi=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},Cl=function(e){return typeof e=="number"},zs=function(e){return typeof e=="object"},wl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Xa=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},qa=Math.abs,f_="left",d_="top",mp="right",gp="bottom",Vs="width",Gs="height",Ll="Right",Dl="Left",Nl="Top",Ul="Bottom",on="padding",Li="margin",Qa="Width",_p="Height",pn="px",Di=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},RT=function(e){var t=Di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Y0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lr=function(e,t){var n=t&&Di(e)[sp]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Eh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},p_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},CT=function(e){return function(t){return ke.utils.snap(p_(e),t)}},xp=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},PT=function(e){return function(t,n){return xp(p_(e))(t,n.direction)}},dh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ph=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Z0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},mh={toggleActions:"play",anticipatePin:0},Ah={top:0,left:0,center:.5,bottom:1,right:1},yh=function(e,t){if(yi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Ah?Ah[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},gh=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,p=It.createElement("div"),x=Ws(n)||Ir(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=x?Et:n.tagName==="IFRAME"?n.contentDocument.body:n,y=e.indexOf("start")!==-1,S=y?c:u,v="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&x?"fixed;":"absolute;"),(g||l||!x)&&(v+=(i===an?mp:gp)+":"+(a+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],Mh(p,0,i,y),p},Mh=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Qa]=1,s["border"+o+Qa]=0,s[n.p]=t+"px",ke.set(e,s)},ht=[],cp={},Bl,J0=function(){return On()-Ni>34&&(Bl||(Bl=requestAnimationFrame(Dr)))},Ya=function(){(!$n||!$n.isPressed||$n.startX>Et.clientWidth)&&(lt.cache++,$n?Bl||(Bl=requestAnimationFrame(Dr)):Dr(),Ni||qs("scrollStart"),Ni=On())},np=function(){o_=ft.innerWidth,a_=ft.innerHeight},Pl=function(e){lt.cache++,(e===!0||!Fn&&!s_&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!ap||o_!==ft.innerWidth||Math.abs(ft.innerHeight-a_)>ft.innerHeight*.25))&&wh.restart(!0)},Xs={},IT=[],m_=function r(){return vn(ct,"scrollEnd",r)||ks(!0)},qs=function(e){return Xs[e]&&Xs[e].map(function(t){return t()})||IT},vi=[],g_=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},__=function(){lt.cache++,lt.forEach(function(e){return Bn(e)&&(e.rec=e())})},vp=function(e,t){var n;for(Kn=0;Kn<ht.length;Kn++)n=ht[Kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));cs=!0,t&&g_(t),t||qs("revert")},x_=function(e,t){lt.cache++,(t||!Qn)&&lt.forEach(function(n){return Bn(n)&&n.cacheID++&&(n.rec=0)}),yi(e)&&(dp=e,ft.history.scrollRestoration!==e&&(ft.history.scrollRestoration=e))},Qn,Hs=0,$0,LT=function(){if($0!==Hs){var e=$0=Hs;requestAnimationFrame(function(){return e===Hs&&ks(!0)})}},v_=function(){Et.appendChild($a),pp=!$n&&$a.offsetHeight||ft.innerHeight,Et.removeChild($a)},K0=function(e){return Ol(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ks=function(e,t){if(Mi=It.documentElement,Et=It.body,fp=[ft,It,Mi,Et],Ni&&!e&&!cs){yn(ct,"scrollEnd",m_);return}v_(),Qn=ct.isRefreshing=!0,cs||__();var n=qs("refreshInit");r_&&ct.sort(),t||vp(),lt.forEach(function(i){Bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ht.slice(0).forEach(function(i){return i.refresh()}),cs=!1,ht.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),lp=1,K0(!0),ht.forEach(function(i){var s=lr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),K0(!1),lp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),x_(dp,1),wh.pause(),Hs++,Qn=2,Dr(2),ht.forEach(function(i){return Bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Qn=ct.isRefreshing=!1,qs("refresh")},up=0,Sh=1,Fl,Dr=function(e){if(e===2||!Qn&&!cs){ct.isUpdating=!0,Fl&&Fl.update(0);var t=ht.length,n=On(),i=n-tp>=50,s=t&&ht[0].scroll();if(Sh=up>s?-1:1,Qn||(up=s),i&&(Ni&&!Rh&&n-Ni>200&&(Ni=0,qs("scrollEnd")),El=tp,tp=n),Sh<0){for(Kn=t;Kn-- >0;)ht[Kn]&&ht[Kn].update(0,i);Sh=1}else for(Kn=0;Kn<t;Kn++)ht[Kn]&&ht[Kn].update(0,i);ct.isUpdating=!1}Bl=0},hp=[f_,d_,gp,mp,Li+Ul,Li+Ll,Li+Nl,Li+Dl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],bh=hp.concat([Vs,Gs,"boxSizing","max"+Qa,"max"+_p,"position",Li,on,on+Nl,on+Ll,on+Ul,on+Dl]),DT=function(e,t,n){Ka(n);var i=e._gsap;if(i.spacerIsNative)Ka(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ip=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=hp.length,a=t.style,o=e.style,l;s--;)l=hp[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[gp]=o[mp]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Vs]=Eh(e,Un)+pn,a[Gs]=Eh(e,an)+pn,a[on]=o[Li]=o[d_]=o[f_]="0",Ka(i),o[Vs]=o["max"+Qa]=n[Vs],o[Gs]=o["max"+_p]=n[Gs],o[on]=n[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},NT=/([A-Z])/g,Ka=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(NT,"-$1").toLowerCase())}},_h=function(e){for(var t=bh.length,n=e.style,i=[],s=0;s<t;s++)i.push(bh[s],n[bh[s]]);return i.t=e,i},UT=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Th={left:0,top:0},Q0=function(e,t,n,i,s,a,o,l,c,u,f,d,h,p){Bn(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?yh("0"+e.substr(3),n):0));var x=h?h.time():0,g,m,y;if(h&&h.seek(0),isNaN(e)||(e=+e),Cl(e))h&&(e=ke.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Mh(o,n,i,!0);else{Bn(t)&&(t=t(l));var S=(e||"0").split(" "),v,M,T,_;y=Jn(t,l)||Et,v=Lr(y)||{},(!v||!v.left&&!v.top)&&Di(y).display==="none"&&(_=y.style.display,y.style.display="block",v=Lr(y),_?y.style.display=_:y.style.removeProperty("display")),M=yh(S[0],v[i.d]),T=yh(S[1]||"0",n),e=v[i.p]-c[i.p]-u+M+s-T,o&&Mh(o,T,i,n-T<20||o._isStart&&T>20),n-=n-T}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var b=e+n,P=a._isStart;g="scroll"+i.d2,Mh(a,b,i,P&&b>20||!P&&(f?Math.max(Et[g],Mi[g]):a.parentNode[g])<=b+1),f&&(c=Lr(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+pn))}return h&&y&&(g=Lr(y),h.seek(d),m=Lr(y),h._caScrollDist=g[i.p]-m[i.p],e=e/h._caScrollDist*d),h&&h.seek(x),h?e:Math.round(e)},FT=/(webkit|moz|length|cssText|inset)/i,j0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===Et){e._stOrig=s.cssText,o=Di(e);for(a in o)!+a&&!FT.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},y_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},xh=function(e,t,n){var i={};i[t.p]="+="+n,ke.set(e,i)},e_=function(e,t){var n=Pr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,p={};c=c||n();var x=y_(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return x(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){lt.cache++,a.tween&&Dr()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=ke.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},yn(e,"wheel",n.wheelHandler),ct.isTouch&&yn(e,"touchmove",n.wheelHandler),s},ct=(function(){function r(t,n){Za||r.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),op(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Al){this.update=this.refresh=this.kill=or;return}n=Y0(yi(n)||Cl(n)||n.nodeType?{trigger:n}:n,mh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,p=s.pinSpacing,x=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,S=s.once,v=s.snap,M=s.pinReparent,T=s.pinSpacer,_=s.containerAnimation,b=s.fastScrollEnd,P=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:an,L=!f&&f!==0,D=Jn(n.scroller||ft),H=ke.core.getCache(D),R=Ws(D),U=("pinType"in n?n.pinType:Ir(D,"pinType")||R&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=L&&n.toggleActions.split(" "),J="markers"in n?n.markers:mh.markers,X=R?0:parseFloat(Di(D)["border"+A.p2+Qa])||0,I=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(I)},_e=ET(D,R,A),De=AT(D,R),K=0,he=0,Ee=0,Ce=Pr(D,A),ge,Re,Qe,ce,ze,Pe,re,de,pe,k,Se,xe,Oe,Ge,Je,it,O,rt,Ze,$e,ye,st,Fe,Ye,C,w,Y,ue,se,Me,Te,$,oe,ve,N,ae,ie,we,me;if(I._startClamp=I._endClamp=!1,I._dir=A,g*=45,I.scroller=D,I.scroll=_?_.time.bind(_):Ce,ce=Ce(),cs&&Ce.rec==null&&(Ce.rec=ce),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(r_=1,n.refreshPriority===-9999&&(Fl=I)),H.tweenScroll=H.tweenScroll||{top:e_(D,an),left:e_(D,Un)},I.tweenTo=ge=H.tweenScroll[A.p],I.scrubDuration=function(G){oe=Cl(G)&&G,oe?$?$.duration(G):$=ke.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return m&&m(I)}}):($&&$.progress(1).kill(),$=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(f),Me=0,l||(l=i.vars.id)),v&&((!zs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Et.style&&ke.set(R?[Et,Mi]:D,{scrollBehavior:"auto"}),lt.forEach(function(G){return Bn(G)&&G.target===(R?It.scrollingElement||Mi:D)&&(G.smooth=!1)}),Qe=Bn(v.snapTo)?v.snapTo:v.snapTo==="labels"?CT(i):v.snapTo==="labelsDirectional"?PT(i):v.directional!==!1?function(G,le){return xp(v.snapTo)(G,On()-he<500?0:le.direction)}:ke.utils.snap(v.snapTo),ve=v.duration||{min:.1,max:2},ve=zs(ve)?Il(ve.min,ve.max):Il(ve,ve),N=ke.delayedCall(v.delay||oe/2||.1,function(){var G=Ce(),le=On()-he<500,j=ge.tween;if((le||Math.abs(I.getVelocity())<10)&&!j&&!Rh&&K!==G){var fe=(G-Pe)/Ge,Be=i&&!L?i.totalProgress():fe,Xe=le?0:(Be-Te)/(On()-El)*1e3||0,xt=ke.utils.clamp(-fe,1-fe,qa(Xe/2)*Xe/.185),Lt=fe+(v.inertia===!1?0:xt),Dt,dt,vt=v,en=vt.onStart,Rt=vt.onInterrupt,Tt=vt.onComplete;if(Dt=Qe(Lt,I),Cl(Dt)||(Dt=Lt),dt=Math.max(0,Math.round(Pe+Dt*Ge)),G<=re&&G>=Pe&&dt!==G){if(j&&!j._initted&&j.data<=qa(dt-G))return;v.inertia===!1&&(xt=Dt-fe),ge(dt,{duration:ve(qa(Math.max(qa(Lt-Be),qa(Dt-Be))*.185/Xe/.05||0)),ease:v.ease||"power3",data:qa(dt-G),onInterrupt:function(){return N.restart(!0)&&Rt&&Xa(I,Rt)},onComplete:function(){I.update(),K=Ce(),i&&!L&&($?$.resetTo("totalProgress",Dt,i._tTime/i._tDur):i.progress(Dt)),Me=Te=i&&!L?i.totalProgress():I.progress,y&&y(I),Tt&&Xa(I,Tt)}},G,xt*Ge,dt-G-xt*Ge),en&&Xa(I,en,ge.tween)}}else I.isActive&&K!==G&&N.restart(!0)}).pause()),l&&(cp[l]=I),d=I.trigger=Jn(d||h!==!0&&h),me=d&&d._gsap&&d._gsap.stRevert,me&&(me=me(I)),h=h===!0?d:Jn(h),yi(o)&&(o={targets:d,className:o}),h&&(p===!1||p===Li||(p=!p&&h.parentNode&&h.parentNode.style&&Di(h.parentNode).display==="flex"?!1:on),I.pin=h,Re=ke.core.getCache(h),Re.spacer?Je=Re.pinState:(T&&(T=Jn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Re.spacerIsNative=!!T,T&&(Re.spacerState=_h(T))),Re.spacer=rt=T||It.createElement("div"),rt.classList.add("pin-spacer"),l&&rt.classList.add("pin-spacer-"+l),Re.pinState=Je=_h(h)),n.force3D!==!1&&ke.set(h,{force3D:!0}),I.spacer=rt=Re.spacer,se=Di(h),Ye=se[p+A.os2],$e=ke.getProperty(h),ye=ke.quickSetter(h,A.a,pn),ip(h,rt,se),O=_h(h)),J){xe=zs(J)?Y0(J,Z0):Z0,k=gh("scroller-start",l,D,A,xe,0),Se=gh("scroller-end",l,D,A,xe,0,k),Ze=k["offset"+A.op.d2];var be=Jn(Ir(D,"content")||D);de=this.markerStart=gh("start",l,be,A,xe,Ze,0,_),pe=this.markerEnd=gh("end",l,be,A,xe,Ze,0,_),_&&(we=ke.quickSetter([de,pe],A.a,pn)),!U&&!(Xi.length&&Ir(D,"fixedMarkers")===!0)&&(RT(R?Et:D),ke.set([k,Se],{force3D:!0}),w=ke.quickSetter(k,A.a,pn),ue=ke.quickSetter(Se,A.a,pn))}if(_){var W=_.vars.onUpdate,ee=_.vars.onUpdateParams;_.eventCallback("onUpdate",function(){I.update(0,0,1),W&&W.apply(_,ee||[])})}if(I.previous=function(){return ht[ht.indexOf(I)-1]},I.next=function(){return ht[ht.indexOf(I)+1]},I.revert=function(G,le){if(!le)return I.kill(!0);var j=G!==!1||!I.enabled,fe=Fn;j!==I.isReverted&&(j&&(ae=Math.max(Ce(),I.scroll.rec||0),Ee=I.progress,ie=i&&i.progress()),de&&[de,pe,k,Se].forEach(function(Be){return Be.style.display=j?"none":"block"}),j&&(Fn=I,I.update(j)),h&&(!M||!I.isActive)&&(j?DT(h,rt,Je):ip(h,rt,Di(h),C)),j||I.update(j),Fn=fe,I.isReverted=j)},I.refresh=function(G,le,j,fe){if(!((Fn||!I.enabled)&&!le)){if(h&&G&&Ni){yn(r,"scrollEnd",m_);return}!Qn&&ne&&ne(I),Fn=I,ge.tween&&!j&&(ge.tween.kill(),ge.tween=0),$&&$.pause(),x&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Z){return Z.vars.immediateRender&&Z.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Be=_e(),Xe=De(),xt=_?_.duration():lr(D,A),Lt=Ge<=.01||!Ge,Dt=0,dt=fe||0,vt=zs(j)?j.end:n.end,en=n.endTrigger||d,Rt=zs(j)?j.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),Tt=I.pinnedContainer=n.pinnedContainer&&Jn(n.pinnedContainer,I),Ct=d&&Math.max(0,ht.indexOf(I))||0,Bt=Ct,nn,ln,li,Ys,cn,$t,bi,eo,zl,Ur,E,B,te;for(J&&zs(j)&&(B=ke.getProperty(k,A.p),te=ke.getProperty(Se,A.p));Bt-- >0;)$t=ht[Bt],$t.end||$t.refresh(0,1)||(Fn=I),bi=$t.pin,bi&&(bi===d||bi===h||bi===Tt)&&!$t.isReverted&&(Ur||(Ur=[]),Ur.unshift($t),$t.revert(!0,!0)),$t!==ht[Bt]&&(Ct--,Bt--);for(Bn(Rt)&&(Rt=Rt(I)),Rt=H0(Rt,"start",I),Pe=Q0(Rt,d,Be,A,Ce(),de,k,I,Xe,X,U,xt,_,I._startClamp&&"_startClamp")||(h?-.001:0),Bn(vt)&&(vt=vt(I)),yi(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(yi(Rt)?Rt.split(" ")[0]:"")+vt:(Dt=yh(vt.substr(2),Be),vt=yi(Rt)?Rt:(_?ke.utils.mapRange(0,_.duration(),_.scrollTrigger.start,_.scrollTrigger.end,Pe):Pe)+Dt,en=d)),vt=H0(vt,"end",I),re=Math.max(Pe,Q0(vt||(en?"100% 0":xt),en,Be,A,Ce()+Dt,pe,Se,I,Xe,X,U,xt,_,I._endClamp&&"_endClamp"))||-.001,Dt=0,Bt=Ct;Bt--;)$t=ht[Bt]||{},bi=$t.pin,bi&&$t.start-$t._pinPush<=Pe&&!_&&$t.end>0&&(nn=$t.end-(I._startClamp?Math.max(0,$t.start):$t.start),(bi===d&&$t.start-$t._pinPush<Pe||bi===Tt)&&isNaN(Rt)&&(Dt+=nn*(1-$t.progress)),bi===h&&(dt+=nn));if(Pe+=Dt,re+=Dt,I._startClamp&&(I._startClamp+=Dt),I._endClamp&&!Qn&&(I._endClamp=re||-.001,re=Math.min(re,lr(D,A))),Ge=re-Pe||(Pe-=.01)&&.001,Lt&&(Ee=ke.utils.clamp(0,1,ke.utils.normalize(Pe,re,ae))),I._pinPush=dt,de&&Dt&&(nn={},nn[A.a]="+="+Dt,Tt&&(nn[A.p]="-="+Ce()),ke.set([de,pe],nn)),h&&!(lp&&I.end>=lr(D,A)))nn=Di(h),Ys=A===an,li=Ce(),st=parseFloat($e(A.a))+dt,!xt&&re>1&&(E=(R?It.scrollingElement||Mi:D).style,E={style:E,value:E["overflow"+A.a.toUpperCase()]},R&&Di(Et)["overflow"+A.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+A.a.toUpperCase()]="scroll")),ip(h,rt,nn),O=_h(h),ln=Lr(h,!0),eo=U&&Pr(D,Ys?Un:an)(),p?(C=[p+A.os2,Ge+dt+pn],C.t=rt,Bt=p===on?Eh(h,A)+Ge+dt:0,Bt&&(C.push(A.d,Bt+pn),rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=Bt+pn)),Ka(C),Tt&&ht.forEach(function(Z){Z.pin===Tt&&Z.vars.pinSpacing!==!1&&(Z._subPinOffset=!0)}),U&&Ce(ae)):(Bt=Eh(h,A),Bt&&rt.style.flexBasis!=="auto"&&(rt.style.flexBasis=Bt+pn)),U&&(cn={top:ln.top+(Ys?li-Pe:eo)+pn,left:ln.left+(Ys?eo:li-Pe)+pn,boxSizing:"border-box",position:"fixed"},cn[Vs]=cn["max"+Qa]=Math.ceil(ln.width)+pn,cn[Gs]=cn["max"+_p]=Math.ceil(ln.height)+pn,cn[Li]=cn[Li+Nl]=cn[Li+Ll]=cn[Li+Ul]=cn[Li+Dl]="0",cn[on]=nn[on],cn[on+Nl]=nn[on+Nl],cn[on+Ll]=nn[on+Ll],cn[on+Ul]=nn[on+Ul],cn[on+Dl]=nn[on+Dl],it=UT(Je,cn,M),Qn&&Ce(0)),i?(zl=i._initted,jd(1),i.render(i.duration(),!0,!0),Fe=$e(A.a)-st+Ge+dt,Y=Math.abs(Ge-Fe)>1,U&&Y&&it.splice(it.length-2,2),i.render(0,!0,!0),zl||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),jd(0)):Fe=Ge,E&&(E.value?E.style["overflow"+A.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+A.a));else if(d&&Ce()&&!_)for(ln=d.parentNode;ln&&ln!==Et;)ln._pinOffset&&(Pe-=ln._pinOffset,re-=ln._pinOffset),ln=ln.parentNode;Ur&&Ur.forEach(function(Z){return Z.revert(!1,!0)}),I.start=Pe,I.end=re,ce=ze=Qn?ae:Ce(),!_&&!Qn&&!cs&&(ce<ae&&Ce(ae),I.scroll.rec=0),I.revert(!1,!0),he=On(),N&&(K=-1,N.restart(!0)),Fn=0,i&&L&&(i._initted||ie)&&i.progress()!==ie&&i.progress(ie||0,!0).render(i.time(),!0,!0),(Lt||Ee!==I.progress||_||x||i&&!i._initted)&&(i&&!L&&(i._initted||Ee||i.vars.immediateRender!==!1)&&i.totalProgress(_&&Pe<-.001&&!Ee?ke.utils.normalize(Pe,re,0):Ee,!0),I.progress=Lt||(ce-Pe)/Ge===Ee?0:Ee),h&&p&&(rt._pinOffset=Math.round(I.progress*Fe)),$&&$.invalidate(),isNaN(B)||(B-=ke.getProperty(k,A.p),te-=ke.getProperty(Se,A.p),xh(k,A,B),xh(de,A,B-(fe||0)),xh(Se,A,te),xh(pe,A,te-(fe||0))),Lt&&!Qn&&I.update(),u&&!Qn&&!Oe&&(Oe=!0,u(I),Oe=!1)}},I.getVelocity=function(){return(Ce()-ze)/(On()-El)*1e3||0},I.endAnimation=function(){wl(I.callbackAnimation),i&&($?$.progress(1):i.paused()?L||wl(i,I.direction<0,1):wl(i,i.reversed()))},I.labelToScroll=function(G){return i&&i.labels&&(Pe||I.refresh()||Pe)+i.labels[G]/i.duration()*Ge||0},I.getTrailing=function(G){var le=ht.indexOf(I),j=I.direction>0?ht.slice(0,le).reverse():ht.slice(le+1);return(yi(G)?j.filter(function(fe){return fe.vars.preventOverlaps===G}):j).filter(function(fe){return I.direction>0?fe.end<=Pe:fe.start>=re})},I.update=function(G,le,j){if(!(_&&!j&&!G)){var fe=Qn===!0?ae:I.scroll(),Be=G?0:(fe-Pe)/Ge,Xe=Be<0?0:Be>1?1:Be||0,xt=I.progress,Lt,Dt,dt,vt,en,Rt,Tt,Ct;if(le&&(ze=ce,ce=_?Ce():fe,v&&(Te=Me,Me=i&&!L?i.totalProgress():Xe)),g&&h&&!Fn&&!hh&&Ni&&(!Xe&&Pe<fe+(fe-ze)/(On()-El)*g?Xe=1e-4:Xe===1&&re>fe+(fe-ze)/(On()-El)*g&&(Xe=.9999)),Xe!==xt&&I.enabled){if(Lt=I.isActive=!!Xe&&Xe<1,Dt=!!xt&&xt<1,Rt=Lt!==Dt,en=Rt||!!Xe!=!!xt,I.direction=Xe>xt?1:-1,I.progress=Xe,en&&!Fn&&(dt=Xe&&!xt?0:Xe===1?1:xt===1?2:3,L&&(vt=!Rt&&F[dt+1]!=="none"&&F[dt+1]||F[dt],Ct=i&&(vt==="complete"||vt==="reset"||vt in i))),P&&(Rt||Ct)&&(Ct||f||!i)&&(Bn(P)?P(I):I.getTrailing(P).forEach(function(li){return li.endAnimation()})),L||($&&!Fn&&!hh?($._dp._time-$._start!==$._time&&$.render($._dp._time-$._start),$.resetTo?$.resetTo("totalProgress",Xe,i._tTime/i._tDur):($.vars.totalProgress=Xe,$.invalidate().restart())):i&&i.totalProgress(Xe,!!(Fn&&(he||G)))),h){if(G&&p&&(rt.style[p+A.os2]=Ye),!U)ye(Rl(st+Fe*Xe));else if(en){if(Tt=!G&&Xe>xt&&re+1>fe&&fe+1>=lr(D,A),M)if(!G&&(Lt||Tt)){var Bt=Lr(h,!0),nn=fe-Pe;j0(h,Et,Bt.top+(A===an?nn:0)+pn,Bt.left+(A===an?0:nn)+pn)}else j0(h,rt);Ka(Lt||Tt?it:O),Y&&Xe<1&&Lt||ye(st+(Xe===1&&!Tt?Fe:0))}}v&&!ge.tween&&!Fn&&!hh&&N.restart(!0),o&&(Rt||S&&Xe&&(Xe<1||!ep))&&Ol(o.targets).forEach(function(li){return li.classList[Lt||S?"add":"remove"](o.className)}),a&&!L&&!G&&a(I),en&&!Fn?(L&&(Ct&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),a&&a(I)),(Rt||!ep)&&(c&&Rt&&Xa(I,c),z[dt]&&Xa(I,z[dt]),S&&(Xe===1?I.kill(!1,1):z[dt]=0),Rt||(dt=Xe===1?1:3,z[dt]&&Xa(I,z[dt]))),b&&!Lt&&Math.abs(I.getVelocity())>(Cl(b)?b:2500)&&(wl(I.callbackAnimation),$?$.progress(1):wl(i,vt==="reverse"?1:!Xe,1))):L&&a&&!Fn&&a(I)}if(ue){var ln=_?fe/_.duration()*(_._caScrollDist||0):fe;w(ln+(k._isFlipped?1:0)),ue(ln)}we&&we(-fe/_.duration()*(_._caScrollDist||0))}},I.enable=function(G,le){I.enabled||(I.enabled=!0,yn(D,"resize",Pl),R||yn(D,"scroll",Ya),ne&&yn(r,"refreshInit",ne),G!==!1&&(I.progress=Ee=0,ce=ze=K=Ce()),le!==!1&&I.refresh())},I.getTween=function(G){return G&&ge?ge.tween:$},I.setPositions=function(G,le,j,fe){if(_){var Be=_.scrollTrigger,Xe=_.duration(),xt=Be.end-Be.start;G=Be.start+xt*G/Xe,le=Be.start+xt*le/Xe}I.refresh(!1,!1,{start:W0(G,j&&!!I._startClamp),end:W0(le,j&&!!I._endClamp)},fe),I.update()},I.adjustPinSpacing=function(G){if(C&&G){var le=C.indexOf(A.d)+1;C[le]=parseFloat(C[le])+G+pn,C[1]=parseFloat(C[1])+G+pn,Ka(C)}},I.disable=function(G,le){if(G!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,le||$&&$.pause(),ae=0,Re&&(Re.uncache=1),ne&&vn(r,"refreshInit",ne),N&&(N.pause(),ge.tween&&ge.tween.kill()&&(ge.tween=0)),!R)){for(var j=ht.length;j--;)if(ht[j].scroller===D&&ht[j]!==I)return;vn(D,"resize",Pl),R||vn(D,"scroll",Ya)}},I.kill=function(G,le){I.disable(G,le),$&&!le&&$.kill(),l&&delete cp[l];var j=ht.indexOf(I);j>=0&&ht.splice(j,1),j===Kn&&Sh>0&&Kn--,j=0,ht.forEach(function(fe){return fe.scroller===I.scroller&&(j=1)}),j||Qn||cs||(I.scroll.rec=0),i&&(i.scrollTrigger=null,G&&i.revert({kill:!1}),le||i.kill()),de&&[de,pe,k,Se].forEach(function(fe){return fe.parentNode&&fe.parentNode.removeChild(fe)}),Fl===I&&(Fl=0),h&&(Re&&(Re.uncache=1),j=0,ht.forEach(function(fe){return fe.pin===h&&j++}),j||(Re.spacer=0)),n.onKill&&n.onKill(I)},ht.push(I),I.enable(!1,!1),me&&me(I),i&&i.add&&!Ge){var q=I.update;I.update=function(){I.update=q,lt.cache++,Pe||re||I.refresh()},ke.delayedCall(.01,I.update),Ge=.01,Pe=re=0}else I.refresh();h&&LT()},r.register=function(n){return Za||(ke=n||c_(),l_()&&window.document&&r.enable(),Za=Al),Za},r.defaults=function(n){if(n)for(var i in n)mh[i]=n[i];return mh},r.disable=function(n,i){Al=0,ht.forEach(function(a){return a[i?"kill":"disable"](n)}),vn(ft,"wheel",Ya),vn(It,"scroll",Ya),clearInterval(uh),vn(It,"touchcancel",or),vn(Et,"touchstart",or),dh(vn,It,"pointerdown,touchstart,mousedown",X0),dh(vn,It,"pointerup,touchend,mouseup",q0),wh.kill(),fh(vn);for(var s=0;s<lt.length;s+=3)ph(vn,lt[s],lt[s+1]),ph(vn,lt[s],lt[s+2])},r.enable=function(){if(ft=window,It=document,Mi=It.documentElement,Et=It.body,ke){if(Ol=ke.utils.toArray,Il=ke.utils.clamp,op=ke.core.context||or,jd=ke.core.suppressOverwrites||or,dp=ft.history.scrollRestoration||"auto",up=ft.pageYOffset||0,ke.core.globals("ScrollTrigger",r),Et){Al=1,$a=document.createElement("div"),$a.style.height="100vh",$a.style.position="absolute",v_(),wT(),jt.register(ke),r.isTouch=jt.isTouch,ls=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ap=jt.isTouch===1,yn(ft,"wheel",Ya),fp=[ft,It,Mi,Et],ke.matchMedia?(r.matchMedia=function(u){var f=ke.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},ke.addEventListener("matchMediaInit",function(){__(),vp()}),ke.addEventListener("matchMediaRevert",function(){return g_()}),ke.addEventListener("matchMedia",function(){ks(0,1),qs("matchMedia")}),ke.matchMedia().add("(orientation: portrait)",function(){return np(),np})):console.warn("Requires GSAP 3.11.0 or later"),np(),yn(It,"scroll",Ya);var n=Et.hasAttribute("style"),i=Et.style,s=i.borderTopStyle,a=ke.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Lr(Et),an.m=Math.round(o.top+an.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Et.setAttribute("style",""),Et.removeAttribute("style")),uh=setInterval(J0,250),ke.delayedCall(.5,function(){return hh=0}),yn(It,"touchcancel",or),yn(Et,"touchstart",or),dh(yn,It,"pointerdown,touchstart,mousedown",X0),dh(yn,It,"pointerup,touchend,mouseup",q0),sp=ke.utils.checkPrefix("transform"),bh.push(sp),Za=On(),wh=ke.delayedCall(.2,ks).pause(),Ja=[It,"visibilitychange",function(){var u=ft.innerWidth,f=ft.innerHeight;It.hidden?(V0=u,G0=f):(V0!==u||G0!==f)&&Pl()},It,"DOMContentLoaded",ks,ft,"load",ks,ft,"resize",Pl],fh(yn),ht.forEach(function(u){return u.enable(0,1)}),l=0;l<lt.length;l+=3)ph(vn,lt[l],lt[l+1]),ph(vn,lt[l],lt[l+2])}else if(It){var c=function u(){r.enable(),It.removeEventListener("DOMContentLoaded",u)};It.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ep=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(uh)||(uh=i)&&setInterval(J0,i),"ignoreMobileResize"in n&&(ap=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(fh(vn)||fh(yn,n.autoRefreshEvents||"none"),s_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Jn(n),a=lt.indexOf(s),o=Ws(s);~a&&lt.splice(a,o?6:2),i&&(o?Xi.unshift(ft,i,Et,i,Mi,i):Xi.unshift(s,i))},r.clearMatchMedia=function(n){ht.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(yi(n)?Jn(n):n).getBoundingClientRect(),o=a[s?Vs:Gs]*i||0;return s?a.right-o>0&&a.left+o<ft.innerWidth:a.bottom-o>0&&a.top+o<ft.innerHeight},r.positionInViewport=function(n,i,s){yi(n)&&(n=Jn(n));var a=n.getBoundingClientRect(),o=a[s?Vs:Gs],l=i==null?o/2:i in Ah?Ah[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ft.innerWidth:(a.top+l)/ft.innerHeight},r.killAll=function(n){if(ht.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Xs.killAll||[];Xs={},i.forEach(function(s){return s()})}},r})();ct.version="3.15.1";ct.saveStyles=function(r){return r?Ol(r).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),op())}}):vi};ct.revert=function(r,e){return vp(!r,e)};ct.create=function(r,e){return new ct(r,e)};ct.refresh=function(r){return r?Pl(!0):(Za||ct.register())&&ks(!0)};ct.update=function(r){return++lt.cache&&Dr(r===!0?2:0)};ct.clearScrollMemory=x_;ct.maxScroll=function(r,e){return lr(r,e?Un:an)};ct.getScrollFunc=function(r,e){return Pr(Jn(r),e?Un:an)};ct.getById=function(r){return cp[r]};ct.getAll=function(){return ht.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!Ni};ct.snapDirectional=xp;ct.addEventListener=function(r,e){var t=Xs[r]||(Xs[r]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(r,e){var t=Xs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=ke.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(p){f.length||h.restart(!0),f.push(p.trigger),d.push(p),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Bn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Bn(s)&&(s=s(),yn(ct,"refresh",function(){return s=e.batchMax()})),Ol(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ct.create(c))}),t};var t_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},rp=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===Mi&&r(Et,t)},vh={auto:1,scroll:1},OT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ke.core.getCache(s),o=On(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Et&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(vh[(l=Di(s)).overflowY]||vh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ws(s)&&(vh[(l=Di(s)).overflowY]||vh[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},M_=function(e,t,n,i){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&OT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&yn(It,jt.eventTypes[0],i_,!1,!0)},onDisable:function(){return vn(It,jt.eventTypes[0],i_,!0)}})},BT=/(input|label|select|textarea)/i,n_,i_=function(e){var t=BT.test(e.target.tagName);(t||n_)&&(e._gsapAllow=!0,n_=t)},zT=function(e){zs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Jn(e.target)||Mi,u=ke.core.globals().ScrollSmoother,f=u&&u.get(),d=ls&&(e.content&&Jn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Pr(c,an),p=Pr(c,Un),x=1,g=(jt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,y=Bn(i)?function(){return i(o)}:function(){return i||2.8},S,v,M=M_(c,e.type,!0,s),T=function(){return v=!1},_=or,b=or,P=function(){l=lr(c,an),b=Il(ls?1:0,l),n&&(_=Il(0,lr(c,Un))),S=Hs},A=function(){d._gsap.y=Rl(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(v){requestAnimationFrame(T);var J=Rl(o.deltaY/2),X=b(h.v-J);if(d&&X!==h.v+h.offset){h.offset=X-h.v;var I=Rl((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",h.cacheID=lt.cache,Dr()}return!0}h.offset&&A(),v=!0},D,H,R,U,z=function(){P(),D.isActive()&&D.vars.scrollY>l&&(h()>l?D.progress(1)&&h(l):D.resetTo("scrollY",l))};return d&&ke.set(d,{y:"+=0"}),e.ignoreCheck=function(F){return ls&&F.type==="touchmove"&&L(F)||x>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){v=!1;var F=x;x=Rl((ft.visualViewport&&ft.visualViewport.scale||1)/g),D.pause(),F!==x&&rp(c,x>1.01?!0:n?!1:"x"),H=p(),R=h(),P(),S=Hs},e.onRelease=e.onGestureStart=function(F,J){if(h.offset&&A(),!J)U.restart(!0);else{lt.cache++;var X=y(),I,ne;n&&(I=p(),ne=I+X*.05*-F.velocityX/.227,X*=t_(p,I,ne,lr(c,Un)),D.vars.scrollX=_(ne)),I=h(),ne=I+X*.05*-F.velocityY/.227,X*=t_(h,I,ne,lr(c,an)),D.vars.scrollY=b(ne),D.invalidate().duration(X).play(.01),(ls&&D.vars.scrollY>=l||I>=l-1)&&ke.to({},{onUpdate:z,duration:X})}a&&a(F)},e.onWheel=function(){D._ts&&D.pause(),On()-m>1e3&&(S=0,m=On())},e.onChange=function(F,J,X,I,ne){if(Hs!==S&&P(),J&&n&&p(_(I[2]===J?H+(F.startX-F.x):p()+J-I[1])),X){h.offset&&A();var _e=ne[2]===X,De=_e?R+F.startY-F.y:h()+X-ne[1],K=b(De);_e&&De!==K&&(R+=K-De),h(K)}(X||J)&&Dr()},e.onEnable=function(){rp(c,n?!1:"x"),ct.addEventListener("refresh",z),yn(ft,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),M.enable()},e.onDisable=function(){rp(c,!0),vn(ft,"resize",z),ct.removeEventListener("refresh",z),M.kill()},e.lockAxis=e.lockAxis!==!1,o=new jt(e),o.iOS=ls,ls&&!h()&&h(1),ls&&ke.ticker.add(or),U=o._dc,D=ke.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y_(h,h(),function(){return D.pause()})},onUpdate:Dr,onComplete:U.vars.onComplete}),o};ct.sort=function(r){if(Bn(r))return ht.sort(r);var e=ft.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ht.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ct.observe=function(r){return new jt(r)};ct.normalizeScroll=function(r){if(typeof r>"u")return $n;if(r===!0&&$n)return $n.enable();if(r===!1){$n&&$n.kill(),$n=r;return}var e=r instanceof jt?r:zT(r);return $n&&$n.target===e.target&&$n.kill(),Ws(e.target)&&($n=e),e};ct.core={_getVelocityProp:ch,_inputObserver:M_,_scrollers:lt,_proxies:Xi,bridge:{ss:function(){Ni||qs("scrollStart"),Ni=On()},ref:function(){return Fn}}};c_()&&ke.registerPlugin(ct);function kT(r,e){let t=r.createBuffer(1,Math.ceil(r.sampleRate*e),r.sampleRate),n=t.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return t}function VT(r,e=2048){let t=new Float32Array(e+1),n=Math.tanh(r);for(let i=0;i<=e;i++)t[i]=Math.tanh(r*(2*i/e-1))/n;return t}function GT(r,e,t){let n=Math.ceil(r.sampleRate*e),i=r.createBuffer(2,n,r.sampleRate);for(let s=0;s<2;s++){let a=i.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/n,t)}return i}function S_(r,e,t=3.4){let n=r.currentTime+.05,i=H=>n+H*t,s=1e-4,a=r.createDynamicsCompressor();a.threshold.value=-22,a.knee.value=8,a.ratio.value=3.5,a.attack.value=.005,a.release.value=.3;let o=r.createDynamicsCompressor();o.threshold.value=-3,o.knee.value=0,o.ratio.value=20,o.attack.value=.001,o.release.value=.1;let l=r.createGain();l.gain.value=1;let c=r.createWaveShaper();c.curve=VT(1.6),c.oversample="2x";let u=r.createGain();u.gain.value=.96,a.connect(l),l.connect(o),o.connect(c),c.connect(u),u.connect(e);let f=r.createConvolver();f.buffer=GT(r,3.2,2.3);let d=r.createGain();d.gain.value=.45,f.connect(d),d.connect(a);let h=(H,R=1,U=.3)=>{if(R){let z=r.createGain();z.gain.value=R,H.connect(z),z.connect(a)}if(U){let z=r.createGain();z.gain.value=U,H.connect(z),z.connect(f)}},p=kT(r,2.5),x=(H,R,U=0)=>{let z=r.createOscillator();return z.type=H,z.frequency.value=R,z.detune.value=U,z},g=[],m=r.createGain();m.gain.value=1,h(m,1,.35);let y=r.createGain();y.gain.setValueAtTime(.04,n),y.gain.exponentialRampToValueAtTime(.12,i(.92));let S=r.createBiquadFilter();S.type="lowpass",S.Q.value=.8,S.frequency.setValueAtTime(360,n),S.frequency.exponentialRampToValueAtTime(2400,i(1));for(let[H,R]of[[73.42,-9],[73.42,9],[110,4]]){let U=x("sawtooth",H,R),z=r.createGain();z.gain.value=.33,U.connect(z),z.connect(S),U.start(n),g.push(U)}let v=x("sine",36.71),M=r.createGain();M.gain.value=.9,v.connect(M),M.connect(y),v.start(n),g.push(v),S.connect(y),y.connect(m);let T=r.createBufferSource();T.buffer=p,T.loop=!0;let _=r.createBiquadFilter();_.type="bandpass",_.Q.value=.9,_.frequency.setValueAtTime(320,n),_.frequency.exponentialRampToValueAtTime(7200,i(1));let b=r.createGain();b.gain.setValueAtTime(.02,n),b.gain.exponentialRampToValueAtTime(.1,i(1)),T.connect(_),_.connect(b),b.connect(m),T.start(n),g.push(T);let P=x("triangle",146.83);P.frequency.setValueAtTime(146.83,n),P.frequency.exponentialRampToValueAtTime(587.33,i(1));let A=r.createGain();A.gain.setValueAtTime(.004,n),A.gain.exponentialRampToValueAtTime(.06,i(.95)),P.connect(A),A.connect(m),P.start(n),g.push(P);let L=[.02,.26,.46,.61,.72,.8,.86,.905,.94,.965,.985];L.forEach((H,R)=>{let U=i(H),z=.22+.33*(R/(L.length-1)),F=x("sine",150);F.frequency.setValueAtTime(150,U),F.frequency.exponentialRampToValueAtTime(44,U+.22);let J=r.createGain();J.gain.setValueAtTime(s,U),J.gain.exponentialRampToValueAtTime(z,U+.006),J.gain.exponentialRampToValueAtTime(s,U+.45),F.connect(J),J.connect(m),F.start(U),F.stop(U+.5);let X=x("triangle",260);X.frequency.setValueAtTime(260,U),X.frequency.exponentialRampToValueAtTime(110,U+.09);let I=r.createGain();I.gain.setValueAtTime(s,U),I.gain.exponentialRampToValueAtTime(z*.55,U+.004),I.gain.exponentialRampToValueAtTime(s,U+.16),X.connect(I),I.connect(m),X.start(U),X.stop(U+.2);let ne=r.createBufferSource();ne.buffer=p;let _e=r.createBiquadFilter();_e.type="bandpass",_e.frequency.value=2400,_e.Q.value=1.4;let De=r.createGain();De.gain.setValueAtTime(s,U),De.gain.exponentialRampToValueAtTime(z*.5,U+.002),De.gain.exponentialRampToValueAtTime(s,U+.035),ne.connect(_e),_e.connect(De),De.connect(m),ne.start(U,R*.137%2),ne.stop(U+.05)});let D=!1;return{hit(H){if(D)return;D=!0;let R=Math.max(H??r.currentTime+.06,r.currentTime+.03);m.gain.setValueAtTime(1,Math.max(R-.06,r.currentTime)),m.gain.exponentialRampToValueAtTime(s,R-.004);for(let Ee of g)Ee.stop(R+.1);let U=x("sine",118);U.frequency.setValueAtTime(118,R),U.frequency.exponentialRampToValueAtTime(34,R+.7);let z=r.createGain();z.gain.setValueAtTime(s,R),z.gain.exponentialRampToValueAtTime(1.3,R+.008),z.gain.exponentialRampToValueAtTime(s,R+2.8),U.connect(z),h(z,1,.18),U.start(R),U.stop(R+3);let F=x("triangle",240);F.frequency.setValueAtTime(240,R),F.frequency.exponentialRampToValueAtTime(90,R+.25);let J=r.createGain();J.gain.setValueAtTime(s,R),J.gain.exponentialRampToValueAtTime(1,R+.005),J.gain.exponentialRampToValueAtTime(s,R+.7),F.connect(J),h(J,1,.25),F.start(R),F.stop(R+.7);let X=x("triangle",70);X.frequency.setValueAtTime(70,R),X.frequency.exponentialRampToValueAtTime(38,R+.5);let I=r.createGain();I.gain.setValueAtTime(s,R),I.gain.exponentialRampToValueAtTime(.4,R+.006),I.gain.exponentialRampToValueAtTime(s,R+1.6),X.connect(I),h(I,1,.1),X.start(R),X.stop(R+1.7);let ne=r.createBufferSource();ne.buffer=p;let _e=r.createBiquadFilter();_e.type="lowpass",_e.frequency.setValueAtTime(3600,R),_e.frequency.exponentialRampToValueAtTime(900,R+1.6);let De=r.createGain();De.gain.setValueAtTime(s,R),De.gain.exponentialRampToValueAtTime(.78,R+.004),De.gain.exponentialRampToValueAtTime(s,R+1.9),ne.connect(_e),_e.connect(De),h(De,.8,.9),ne.start(R),ne.stop(R+2.2);let K=r.createGain();K.gain.setValueAtTime(s,R),K.gain.exponentialRampToValueAtTime(1.5,R+.035),K.gain.setValueAtTime(1.5,R+.5),K.gain.exponentialRampToValueAtTime(s,R+3.9);let he=r.createBiquadFilter();he.type="lowpass",he.Q.value=1.2,he.frequency.setValueAtTime(320,R),he.frequency.exponentialRampToValueAtTime(3200,R+.08),he.frequency.exponentialRampToValueAtTime(650,R+2.6),he.connect(K),h(K,1,.6);for(let[Ee,Ce]of[[73.42,.11],[110,.09],[146.83,.08],[220,.065],[293.66,.055],[369.99,.045],[440,.04]])for(let ge of[-7,7]){let Re=x("sawtooth",Ee,ge),Qe=r.createGain();Qe.gain.value=Ce,Re.connect(Qe),Qe.connect(he),Re.start(R),Re.stop(R+4.1)}return[[1174.66,.035],[1760,.028],[2349.32,.02],[2959.96,.012]].forEach(([Ee,Ce],ge)=>{let Re=x("sine",Ee,ge%2?4:-4),Qe=r.createGain(),ce=R+.02+ge*.015;Qe.gain.setValueAtTime(s,ce),Qe.gain.exponentialRampToValueAtTime(Ce,ce+.01),Qe.gain.exponentialRampToValueAtTime(s,R+3.2),Re.connect(Qe),h(Qe,.6,1),Re.start(ce),Re.stop(R+3.3)}),R},stop(){let H=r.currentTime;if(l.gain.setValueAtTime(l.gain.value,H),l.gain.linearRampToValueAtTime(0,H+.15),!D){D=!0;for(let R of g)R.stop(H+.2)}}}}function b_(r,e,t,{loop:n=84.7059,overlap:i=3,level:s=.85}={}){let a=r.createGain();a.gain.value=0,a.connect(e);let o=null,l=null,c=!1,u=0,f=0,d=[],h=0,p=()=>l||(l=fetch(t).then(m=>{if(!m.ok)throw new Error(`backsound ${m.status}`);return m.arrayBuffer()}).then(m=>new Promise((y,S)=>r.decodeAudioData(m,y,S))).then(m=>(o=m,m)).catch(m=>{throw l=null,m}));function x(m,y){let S=r.createBufferSource(),v=r.createGain();S.buffer=o,S.connect(v),v.connect(a);let M=m+Math.min(o.duration,n+i);y?v.gain.setValueAtTime(1,m):(v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(1,m+i)),v.gain.setValueAtTime(1,m+n),v.gain.linearRampToValueAtTime(0,Math.min(M,m+n+i)),S.start(m),S.stop(M);let T={s:S,g:v};d.push(T),S.onended=()=>{d=d.filter(_=>_!==T);try{v.disconnect()}catch{}}}function g(){if(c){for(;f<r.currentTime+4;)x(f,!1),f+=n;u=setTimeout(g,1e3)}}return{load:p,get playing(){return c},start(m=r.currentTime+.1,y=3){if(c)return;c=!0;let S=++h;p().then(()=>{if(!c||S!==h)return;let v=Math.max(m,r.currentTime+.08);a.gain.cancelScheduledValues(r.currentTime),a.gain.setValueAtTime(a.gain.value,r.currentTime),a.gain.setValueAtTime(0,v),a.gain.linearRampToValueAtTime(s,v+y),x(v,!0),f=v+n,g()}).catch(v=>{c=!1,console.warn("The backsound could not be loaded.",v)})},stop(m=.8){if(!c)return;c=!1,h++,clearTimeout(u);let y=r.currentTime;a.gain.cancelScheduledValues(y),a.gain.setValueAtTime(a.gain.value,y),a.gain.linearRampToValueAtTime(0,y+m);for(let{s:S}of d)try{S.stop(y+m+.05)}catch{}}}}var yp=class extends Wn{constructor(e,t,n,i,s,a,o){super(),Object.assign(this,{c:e,r0:t,r1:n,turns:i,a0:s,dir:a,z:o})}getPoint(e,t=new V){let n=this.a0+this.dir*this.turns*Math.PI*2*e,i=this.r0+(this.r1-this.r0)*e;return t.set(this.c.x+i*Math.cos(n),this.c.y+i*Math.sin(n),this.z)}};function T_(r,e,t,n){let i=[],s=r/2-t,a=e/2-t,o=[[s,a,0],[-s,a,Math.PI/2],[-s,-a,Math.PI],[s,-a,Math.PI*1.5]];return o.forEach(([l,c,u],f)=>{let d=Math.max(4,Math.round(t*Math.PI/2/n));for(let M=0;M<=d;M++){let T=u+M/d*(Math.PI/2);i.push(new V(l+t*Math.cos(T),c+t*Math.sin(T),0))}let[h,p]=o[(f+1)%4],x=Math.hypot(h-l,p-c),g=Math.max(1,Math.round(x/n)),m=l+t*Math.cos(u+Math.PI/2),y=c+t*Math.sin(u+Math.PI/2),S=h+t*Math.cos(u+Math.PI/2),v=p+t*Math.sin(u+Math.PI/2);for(let M=1;M<g;M++)i.push(new V(m+(S-m)*M/g,y+(v-y)*M/g,0))}),new vs(i,!0,"centripetal")}function w_(r,e,t,n=.62){let i=new va;i.moveTo(0,0),i.bezierCurveTo(e*.95,r*.16,e*.9,r*n,0,r),i.bezierCurveTo(-e*.9,r*n,-e*.95,r*.16,0,0);let s=new Bo(i,{depth:t,bevelEnabled:!0,bevelThickness:t*.9,bevelSize:e*.16,bevelSegments:3,curveSegments:16});return s.translate(0,0,-t/2),s}function E_(r){let e=new _r;e.add(new Mt(new ji(24,24,24),new vr({color:1447446,side:un})));let t=(s,a,o,l,c,u)=>{let f=new Mt(new ki(s,a),new vr({color:new et(u,u,u),side:Ai}));f.position.set(o,l,c),f.lookAt(0,0,0),e.add(f)};t(10,2.4,0,8,4,4),t(2.2,12,-9,1,3,2.6),t(2.2,12,9,-1,1,1.8),t(12,1.2,0,-7,5,.9),t(4,4,5,5,-9,1.2),t(16,9,0,1,11,.55),t(6,2,-3,3,10.5,2.2);let n=new $r(r),i=n.fromScene(e,.03).texture;return n.dispose(),e.traverse(s=>{s.isMesh&&(s.geometry.dispose(),s.material.dispose())}),i}function A_({w:r,h:e,material:t}){let n=new Zi,i=.1*Math.min(r,e),s=[],a=[],o=[],l=(v,M,T,_=8,b=!1)=>{let P=new Ma(v,M,T,_,b);o.push(P);let A=new Mt(P,t);return n.add(A),a.push({mesh:A,count:P.index.count}),A},c=w_(i,.4*i,.06*i),u=w_(i,.36*i,.07*i,.5);o.push(c,u);let f=new xa(new V(0,.08*i,.06*i),new V(0,.86*i,.06*i)),d=new Ma(f,6,.018*i,5,!1);o.push(d);let h=(v,M,T,_=1,b=!1,P=.07)=>{let A=new Zi;A.position.set(v,M,.02*i);let L=T-Math.PI/2;A.rotation.z=L;let D=new Mt(b?u:c,t);D.scale.set(_,_*(b?1.45:1),_);let H=new Mt(d,t);return H.scale.copy(D.scale),A.add(D,H),n.add(A),s.push({pivot:A,base:L,swing:P,ph:Math.random()*Math.PI*2,rate:.9+Math.random()*.6,size:_}),A},p=(v,M,T,_,b,P=1.6)=>l(new yp(new Ae(v,M),T,T*.18,P,_,b,0),90,.028*i,6),x=(v,M,T)=>{let _=new zo(T,18,12);o.push(_);let b=new Mt(_,t);b.position.set(v,M,.03*i),n.add(b)};l(T_(r,e,.45*i,.06*i),520,.065*i,8,!0),l(T_(r-.62*i,e-.62*i,.3*i,.06*i),520,.03*i,8,!0);for(let v of[1,-1])for(let M of[1,-1]){let T=v*r/2,_=M*e/2,b=Math.atan2(M,v);h(T-v*.12*i,_-M*.12*i,b,1.15,!0,.04),h(T-v*.05*i,_-M*.05*i,b+.85,.82,!1,.09),h(T-v*.05*i,_-M*.05*i,b-.85,.82,!1,.09),p(T-v*1.25*i,_+M*.46*i,.38*i,M>0?-Math.PI/2:Math.PI/2,v*M>0?1:-1,1.8),p(T+v*.46*i,_-M*1.25*i,.38*i,v>0?Math.PI:0,v*M>0?-1:1,1.8),x(T,_,.13*i)}let g=[[0,e/2,Math.PI/2],[0,-e/2,-Math.PI/2],[r/2,0,0],[-r/2,0,Math.PI]];for(let[v,M,T]of g)h(v,M,T+.55,.95,!1,.1),h(v,M,T-.55,.95,!1,.1),h(v,M,T+Math.PI+.6,.6,!1,.06),h(v,M,T+Math.PI-.6,.6,!1,.06),x(v,M,.12*i);let m=(v,M,T,_,b,P)=>{let A=Math.hypot(T-v,_-M);if(A<2.4*i)return;let L=(T-v)/A,D=(_-M)/A,H=.42*i,R=.22*i,U=[];for(let J=0;J<=24;J++){let X=J/24,I=Math.sin(X*Math.PI*2)*R;U.push(new V(v+L*A*X+b*(H+I),M+D*A*X+P*(H+I),0))}l(new vs(U),120,.024*i,6);let z=A>5*i?4:2;for(let J=0;J<z;J++){let X=(J+.5)/z,I=Math.sin(X*Math.PI*2)*R,ne=v+L*A*X+b*(H+I),_e=M+D*A*X+P*(H+I);h(ne,_e,Math.atan2(P,b)+(J%2?-.6:.6),J%2?.5:.58,!1,.12)}let F=new Ae(T+b*H,_+P*H);p(F.x+b*.2*i,F.y+P*.2*i,.2*i,Math.atan2(-P,-b),1,1.3)},y=r/2,S=e/2;for(let v of[1,-1])m(-y+1.6*i,v*S,-1*i,v*S,0,v),m(y-1.6*i,v*S,1*i,v*S,0,v);for(let v of[1,-1])m(v*y,-S+1.6*i,v*y,-1*i,v,0),m(v*y,S-1.6*i,v*y,1*i,v,0);return{group:n,leaves:s,tubes:a,grow(v){for(let M of a)M.mesh.geometry.setDrawRange(0,Math.floor(M.count*Math.min(1,v*1.25)/6)*6);s.forEach((M,T)=>{let _=Math.min(1,Math.max(0,(v-.25-T%9*.03)/.45));M.open=_})},sway(v,M=1){for(let T of s){let _=T.open??1;T.pivot.rotation.z=T.base+Math.sin(v*T.rate+T.ph)*T.swing*M,T.pivot.rotation.x=Math.sin(v*T.rate*.7+T.ph*1.3)*T.swing*.8*M,T.pivot.scale.setScalar(Math.max(1e-4,_<1?_*(1+.15*Math.sin(_*Math.PI)):1))}},dispose(){for(let v of o)v.dispose();for(let v of a)v.mesh.geometry.dispose();n.removeFromParent()}}}ot.registerPlugin(ct);var St=(r,e=document)=>e.querySelector(r),oi=(r,e=document)=>[...e.querySelectorAll(r)],At=matchMedia("(prefers-reduced-motion: reduce)").matches,Ch=matchMedia("(pointer: coarse)").matches,Si=(r,e,t)=>Math.min(t,Math.max(e,r)),ja=(r,e,t)=>r+(e-r)*t,ai=(r,e,t,n)=>ja(r,e,1-Math.exp(-t*n)),HT=r=>r*r*(3-2*r),Ph=r=>new Promise(e=>setTimeout(e,r)),Gt={x:innerWidth*.6,y:innerHeight*.35,nx:.2,ny:-.3},Nr={y:scrollY,v:0};addEventListener("pointermove",r=>{Gt.x=r.clientX,Gt.y=r.clientY,Gt.nx=r.clientX/innerWidth*2-1,Gt.ny=r.clientY/innerHeight*2-1},{passive:!0});{let r=scrollY,e=performance.now();addEventListener("scroll",()=>{let t=performance.now();Nr.v=(scrollY-r)/Math.max(t-e,1)*1e3,Nr.y=scrollY,r=scrollY,e=t},{passive:!0})}var WT=`
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
}`;function XT(){let r=St("#scene"),e=matchMedia("(max-width: 900px)").matches||Ch,t=new Fu({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),n=Math.min(devicePixelRatio||1,e?2.5:2),i=n;t.setPixelRatio(i),t.toneMapping=Zo,t.toneMappingExposure=1.05,t.setClearColor(394758,1),t.transmissionResolutionScale=e?.5:.6;let s=new _r,a=new Pn(35,1,.1,60);a.position.set(0,0,9);let o=Math.tan(kf.degToRad(a.fov/2)),l=new $r(t);s.environment=l.fromScene(new zu,.04).texture,s.environmentIntensity=.8,l.dispose();let c={uTime:{value:0},uScroll:{value:0},uAspect:{value:1},uReady:{value:0},uLight:{value:new Ae(.3,.15)},uGround:{value:null},uOrn0:{value:null},uOrn1:{value:null},uOrn2:{value:null},uBox:{value:[new Nt,new Nt,new Nt]},uFade:{value:[0,0,0]},uTile:{value:.1},uInk:{value:.4}},u=new fi({uniforms:c,depthWrite:!1,toneMapped:!1,defines:{RELIEF:1},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
      varying vec2 vUv;
      uniform float uTime, uScroll, uAspect, uReady, uTile, uInk;
      uniform vec2 uLight;
      uniform sampler2D uOrn0, uOrn1, uOrn2, uGround;
      uniform vec4 uBox[3];   // centre x, centre y on the cloth, width, height (viewport heights); width 0 = empty
      uniform float uFade[3];
      float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      // Each texel holds the wax line (r), its cover (a) and the slope of the softened line (g, b),
      // worked out once when a motif loads, so a frame reads one texel per motif here.
      // Gradients come from the continuous cloth position, so mip levels stay clean at motif edges.
      float line = 0.0, cover = 0.0; vec2 slope = vec2(0.0);
      void layer(sampler2D tex, vec4 box, float fade, vec2 P, vec2 dx, vec2 dy){
        if (box.z <= 0.0 || fade <= 0.0) return;
        vec2 uv = (P - box.xy) / box.zw + 0.5;
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return;
        vec4 t = textureGrad(tex, uv, dx / box.zw, dy / box.zw);
        float c = t.a * fade;
        line = t.r * c + line * (1.0 - c);
        slope = (2.0 * t.gb - 1.0) * fade + slope * (1.0 - c);
        cover = c + cover * (1.0 - c);
      }
      void main(){
        vec2 view = (vUv - 0.5) * vec2(uAspect, 1.0) * 1.3;   // viewport heights, origin at the centre (the plane is 1.3 times the view)
        vec2 P = view - vec2(0.0, uScroll);                  // position on the cloth
        vec2 dx = dFdx(P), dy = dFdy(P);
        layer(uOrn0, uBox[0], uFade[0], P, dx, dy);
        layer(uOrn1, uBox[1], uFade[1], P, dx, dy);
        layer(uOrn2, uBox[2], uFade[2], P, dx, dy);
        float g = texture2D(uGround, P / uTile).r * (1.0 - cover);
        vec3 N = vec3(0.0, 0.0, 1.0);
        #if RELIEF
          N = normalize(vec3(slope * 2.2, 1.0));
        #endif
        vec3 Lv = vec3(uLight - view, 0.42), L = normalize(Lv);
        float att = 1.0 / (1.0 + 3.0 * dot(Lv.xy, Lv.xy));
        float diff = max(dot(N, L), 0.0);
        float spec = pow(max(dot(N, normalize(L + vec3(0.0, 0.0, 1.0))), 0.0), 40.0);
        float ink = (line * uInk + g * 0.11) * uReady;
        vec3 col = vec3(0.016) + vec3(0.97, 0.96, 0.93) * ink * (0.5 + 1.15 * diff * att);
        col += vec3(spec * att * line * 0.55 * uReady) + vec3(0.03) * att;
        vec2 vn = view / vec2(0.5 * uAspect, 0.5);
        col *= 1.0 - 0.2 * dot(vn, vn);
        col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) * 0.008;
        gl_FragColor = vec4(pow(max(col, 0.0), vec3(2.2)), 1.0);
        #include <colorspace_fragment>
      }`}),f=new Mt(new ki(1,1),u);f.position.z=-9,f.renderOrder=-10,s.add(f);let d=async(W,ee,q)=>{let G=(await(await fetch(W)).text()).replace(/width="[\d.]+" height="[\d.]+"/,`width="${ee}" height="${q}"`),le=new Image,j=new Promise((Be,Xe)=>{le.onload=Be,le.onerror=()=>Xe(new Error(`could not load ${W}`))});le.src=URL.createObjectURL(new Blob([G],{type:"image/svg+xml"}));try{await j,le.decode&&await le.decode().catch(()=>{})}finally{setTimeout(()=>URL.revokeObjectURL(le.src),0)}let fe=document.createElement("canvas");return fe.width=ee,fe.height=q,fe.getContext("2d").drawImage(le,0,0,ee,q),fe},h=(W,ee,q)=>{let G=new Gn(ee,q,{depthBuffer:!1,generateMipmaps:!0,minFilter:pi,magFilter:Sn});G.texture.anisotropy=W.anisotropy;let le=e?4.8:3.5,j=e?3.2:2.6,fe=new fi({uniforms:{uSrc:{value:W},uStep:{value:new Ae(le/ee,le/q)},uSoft:{value:j}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D uSrc; uniform vec2 uStep; uniform float uSoft;
        float line(vec2 p){ vec4 s = textureLod(uSrc, p, uSoft); return s.r * s.a; }
        void main(){
          vec4 c = textureLod(uSrc, vUv, 0.0);
          float hx = line(vUv - vec2(uStep.x, 0.0)) - line(vUv + vec2(uStep.x, 0.0));
          float hy = line(vUv - vec2(0.0, uStep.y)) - line(vUv + vec2(0.0, uStep.y));
          gl_FragColor = vec4(c.r, 0.5 + 0.5 * clamp(hx, -1.0, 1.0), 0.5 + 0.5 * clamp(hy, -1.0, 1.0), c.a);
        }`,depthTest:!1,depthWrite:!1,blending:Mr,toneMapped:!1}),Be=new Mt(new ki(2,2),fe);Be.frustumCulled=!1;let Xe=t.getRenderTarget();return t.setRenderTarget(G),t.render(Be,a),t.setRenderTarget(Xe),Be.geometry.dispose(),fe.dispose(),G.texture},p={},x=Math.min(8,t.capabilities.getMaxAnisotropy()),m=(navigator.deviceMemory||8)<=2?1024:e?1536:2048,y=Math.round(m/1.4),S=async W=>{let ee=await d(`batik-${W}.svg?v=${r.dataset.v||""}`,m,y),q=new xs(ee);q.anisotropy=x,q.minFilter=pi;let G=q;try{G=h(q,m,y),q.dispose(),ee.width=ee.height=0}catch(j){u.defines.RELIEF=0,u.needsUpdate=!0,console.warn("The batik relief could not be prepared, the batik stays flat.",j)}let le={tex:G,fade:0};p[W]=le,ot.to(le,{fade:1,duration:1.1,ease:"power2.out"})},v=(async()=>{let W=await d(r.dataset.ground,256,256),ee=new xs(W);ee.anisotropy=x,ee.minFilter=pi,ee.wrapS=ee.wrapT=ua,c.uGround.value=ee,await S("megamendung"),await S("garuda"),ot.to(c.uReady,{value:1,duration:1.2,ease:"power2.out"})})().catch(W=>console.warn("The batik could not be drawn, the cloth stays plain.",W)),M=v.then(async()=>{for(let W of["kawung","parang","truntum"])await S(W).catch(ee=>console.warn(`The ${W} batik could not be drawn.`,ee))}),T=St("#hero-name"),_=document.createElement("canvas"),b=new xs(_);b.colorSpace=kn,b.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());let P=new et("#060606"),A=new et("#ffffff"),L=new vr({map:b,alphaTest:.5,alphaToCoverage:!0,toneMapped:!1,color:P.clone()}),D=new Mt(new ki(1,1),L),H=-2.2;D.position.z=H,s.add(D);function R(){let W=T.getBoundingClientRect();if(W.width<2)return;let ee=n,q=getComputedStyle(T);_.width=Math.ceil(W.width*ee),_.height=Math.ceil(W.height*ee);let G=_.getContext("2d");G.setTransform(ee,0,0,ee,0,0),G.clearRect(0,0,W.width,W.height),G.font=`${q.fontWeight} ${q.fontSize} ${q.fontFamily}`,"letterSpacing"in G&&(G.letterSpacing=q.letterSpacing);let le=G.createLinearGradient(0,0,0,W.height);le.addColorStop(0,"#ffffff"),le.addColorStop(1,"#d2cec7"),G.fillStyle=le,G.textBaseline="alphabetic";for(let j of oi(".line",T)){let fe=j.getBoundingClientRect(),Be=G.measureText(j.textContent),Xe=Be.fontBoundingBoxAscent??Be.actualBoundingBoxAscent,xt=Be.fontBoundingBoxDescent??Be.actualBoundingBoxDescent;G.fillText(j.textContent,fe.left-W.left,fe.top-W.top+(fe.height-(Xe+xt))/2+Xe)}b.needsUpdate=!0}let U={uTime:{value:0},uAmp:{value:.2},uFreq:{value:.95},uPointer:{value:new V(0,0,1)},uBulge:{value:0}},z=new Sa({color:16777215,metalness:0,roughness:.08,transmission:1,ior:1.45,thickness:2,clearcoat:1,clearcoatRoughness:.06,dispersion:.25,attenuationColor:new et("#ffffff"),attenuationDistance:16,envMapIntensity:1.5,specularIntensity:1});z.onBeforeCompile=W=>{Object.assign(W.uniforms,U),W.vertexShader=W.vertexShader.replace("#include <common>",`#include <common>
        ${WT}
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
        #endif`).replace("#include <begin_vertex>","vec3 transformed=lq0;")},z.customProgramCacheKey=()=>"liquid-glass-v1";let F=e?20:40,J=new Mt(new Ms(1,F),z);s.add(J);let X=new Ms(1,10),I=[0,1,2].map(W=>{let ee=new Mt(X,z);return ee.userData={r:1.55+W*.32,sp:.22+W*.07,ph:W*2.1,s:.13-W*.025,tilt:.5+W*.4},s.add(ee),ee});s.add(new qo(16777215,.3));let ne=new Xo(16777215,2.4);ne.position.set(-3,4,5),s.add(ne);let _e=new Yr(16777215,30,30);_e.position.set(4,-2,3),s.add(_e);let De=new Yr(16777215,18,30);De.position.set(-2,1,4),s.add(De);let K=e?140:280,he=new Float32Array(K*3);for(let W=0;W<K;W++)he[W*3]=(Math.random()-.5)*20,he[W*3+1]=(Math.random()-.5)*13,he[W*3+2]=-7+Math.random()*9;let Ee=new Hn;Ee.setAttribute("position",new hi(he,3));let Ce=new wo(Ee,new ga({color:16777215,size:.03,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0}));s.add(Ce);let ge=[["#top",{x:.06,y:.13,s:1,a:.2},{x:.4,y:.33,s:.78,a:.19}],["#about",{x:-.37,y:-.2,s:.62,a:.2},{x:.3,y:-.3,s:.7,a:.2}],["#research",{x:.41,y:.27,s:.5,a:.24},{x:-.3,y:.34,s:.6,a:.22}],["#experience",{x:-.4,y:.04,s:.6,a:.2},{x:.32,y:-.05,s:.62,a:.2}],["#credentials",{x:.4,y:-.22,s:.52,a:.22},{x:-.3,y:.3,s:.6,a:.22}],["#toolkit",{x:-.3,y:.25,s:.5,a:.2},{x:.3,y:.2,s:.6,a:.2}],["#contact",{x:.24,y:.04,s:1.12,a:.2},{x:.12,y:.12,s:1.05,a:.2}]],Re=[],Qe=!!document.getElementById("loader"),ce={x:.06,y:.13,s:1,a:.2,intro:At&&!Qe?1:0,name:At&&!Qe?1:0,bulge:0,rx:0,ry:0,cx:0,cy:0,lx:.3,ly:.15,gate:0,ink:.4},ze=1,Pe=1,re=!1,de=.78,pe=2.4,k=[];function Se(W,ee){let q=Math.min(.8,.9*W/1.4),G=[{name:"megamendung",cx:0,cy:pe,h:Math.min(.95,.94*W/1.4)},{name:"garuda",cx:ee?0:.13*W,cy:ee?.28:.02,h:Math.min(.96,.98*W/1.4)}],le=Math.max(document.documentElement.scrollHeight-innerHeight,1),j=-1;for(let fe of oi("[data-batik]")){if(fe.id==="top")continue;let Be=fe.offsetTop,Xe=fe.offsetHeight,xt=Math.max(1,Math.round(Xe/innerHeight/2.2));for(let Lt=0;Lt<xt;Lt++){let Dt=Si(Be+Xe*(Lt+.5)/xt-innerHeight/2,0,le);G.push({name:fe.dataset.batik,cx:ee?0:j*.12*W,cy:-(Dt/innerHeight)*de,h:q}),j=-j}}G.sort((fe,Be)=>Be.cy-fe.cy),G.forEach((fe,Be)=>{let Xe=Math.min(Be>0?G[Be-1].cy-fe.cy:1/0,Be<G.length-1?fe.cy-G[Be+1].cy:1/0);fe.h=Math.min(fe.h,.92*Xe)}),k=G}let xe={on:Qe,shown:!1,loading:!1,frame:null,grow:0,load:0,approach:0,spin:0,turn:0,tx:0,ty:0,glow:Qe?1:0};ce.gate=Qe?pe:0;let Oe=null;function Ge(){Oe||(Oe=new Sa({color:15921906,metalness:1,roughness:.2,clearcoat:.7,clearcoatRoughness:.08,envMap:E_(t),envMapIntensity:1})),xe.frame&&xe.frame.dispose();let W=2*(a.position.z-.4)*o,ee=W*a.aspect,q=a.aspect<.9,G=q?.72*ee:.7*ee,le=q?Math.min(.6*W,1.6*G):(Pe<520?.76:.68)*W;xe.frame=A_({w:G,h:le,material:Oe}),xe.frame.grow(xe.grow),s.add(xe.frame.group)}let Je=[];function it(W){let ee=-W-.62,q=-W+.62;Je.length=0;for(let G of k)p[G.name]&&G.h>.02&&G.cy+G.h/2>ee&&G.cy-G.h/2<q&&Je.push(G);Je.sort((G,le)=>Math.abs(G.cy+W)-Math.abs(le.cy+W));for(let G=0;G<3;G++){let le=Je[G],j=c.uBox.value[G];le?(j.set(le.cx,le.cy,le.h*1.4,le.h),c.uFade.value[G]=p[le.name].fade,c[`uOrn${G}`].value=p[le.name].tex):(j.set(0,0,0,0),c.uFade.value[G]=0)}}function O(){ze=r.clientWidth,Pe=r.clientHeight,re=ze/Pe<.85,t.setSize(ze,Pe,!1),a.aspect=ze/Pe,a.updateProjectionMatrix();let W=2*(a.position.z-f.position.z)*o;f.scale.set(W*a.aspect*1.3,W*1.3,1),c.uAspect.value=a.aspect;let ee=a.aspect,q=ee<.9;ce.ink=q?.32:.4,c.uTile.value=q?.07:.1,Se(ee,q),xe.on&&xe.shown&&Ge(),Re=ge.map(([G,le,j],fe)=>{let Be=St(G);return{at:fe===0?0:Be.offsetTop+Be.offsetHeight/2-innerHeight/2,...re||ze<900?j:le}}).sort((G,le)=>G.at-le.at),R()}function rt(W){if(W<=Re[0].at)return Re[0];for(let ee=0;ee<Re.length-1;ee++){let q=Re[ee],G=Re[ee+1];if(W<=G.at){let le=HT(Si((W-q.at)/Math.max(G.at-q.at,1),0,1));return{x:ja(q.x,G.x,le),y:ja(q.y,G.y,le),s:ja(q.s,G.s,le),a:ja(q.a,G.a,le)}}}return Re[Re.length-1]}let Ze=new V,$e=new Ei,ye=.46,st=performance.now(),Fe=!0,Ye=!1,C=0,w=0,Y=0,ue=0,se=null,Me=0,Te=!1,$=[.024,.034,.05],oe=[14,20,30],ve=new Uint8Array(4),N=()=>{document.documentElement.dataset.quality=String(ue)};N();function ae(){ue++,Te=!1,ue===1?(i=Math.max(1,n*.8),t.setPixelRatio(i),t.transmissionResolutionScale=.42,t.setSize(ze,Pe,!1),R()):ue===2?(J.geometry.dispose(),J.geometry=new Ms(1,14),I.forEach(W=>{W.visible=!1}),i=Math.max(1,n*.67),t.setPixelRatio(i),t.setSize(ze,Pe,!1),R()):(z.transmission=0,z.transparent=!0,z.opacity=.42,z.dispersion=0,z.needsUpdate=!0,i=1,t.setPixelRatio(1),t.setSize(ze,Pe,!1),R()),N()}function ie(W){if(!Fe)return;requestAnimationFrame(ie);let ee=Math.max(0,(W-st)/1e3);st=W;let q=Math.min(ee,.05);C+=q*(At?.15:1),Nr.v*=Math.exp(-5*q);let G=2*a.position.z*o,le=G*a.aspect,j=rt(Nr.y),fe=At?30:3.2;ce.x=ai(ce.x,j.x+Gt.nx*.03,fe,q),ce.y=ai(ce.y,j.y-Gt.ny*.03,fe,q),ce.s=ai(ce.s,j.s,fe,q),ce.a=ai(ce.a,j.a+Si(Math.abs(Nr.v)*7e-5,0,.12),4,q);let Be=Math.min(.21*G,.3*le)*ce.s*ce.intro;J.visible=ce.intro>.002,J.position.set(ce.x*le,ce.y*G,0);let Xe=Math.max(Be,1e-4);J.scale.set(Xe,Xe,Xe*ye),ce.rx=ai(ce.rx,Gt.ny*.22,3,q),ce.ry=ai(ce.ry,Gt.nx*.3,3,q),J.rotation.set(ce.rx,ce.ry,Math.sin(C*.1)*.25);let xt=Gt.nx*le*.5,Lt=-Gt.ny*G*.5,Dt=Math.hypot(xt-J.position.x,Lt-J.position.y);ce.bulge=ai(ce.bulge,Dt<Be*1.9&&!Ch?.2:0,5,q),Ze.set(xt-J.position.x,Lt-J.position.y,Be*1.1).normalize().applyQuaternion($e.copy(J.quaternion).invert()),Ze.z/=ye,Ze.normalize(),U.uPointer.value.copy(Ze),U.uBulge.value=ce.bulge,U.uAmp.value=ce.a,U.uTime.value=C,U.uFreq.value=.9+Si(Nr.y/Math.max(document.documentElement.scrollHeight-innerHeight,1),0,1)*.35;for(let Tt of I){Tt.visible=ue<2&&ce.intro>.002;let Ct=Tt.userData,Bt=C*Ct.sp+Ct.ph;Tt.position.set(J.position.x+Math.cos(Bt)*Ct.r*Be,J.position.y+Math.sin(Bt*1.3)*Ct.r*Be*.6*Math.cos(Ct.tilt),Math.sin(Bt)*Ct.r*Be*.7),Tt.scale.setScalar(Math.max(Ct.s*(Be/1.19+.35)*ce.intro,1e-4))}let dt=T.getBoundingClientRect();if(D.visible=!xe.on&&dt.bottom>-40&&dt.top<Pe+40,D.visible){let Tt=2*(a.position.z-H)*o,Ct=Tt*a.aspect;D.scale.set(dt.width/ze*Ct,dt.height/Pe*Tt,1),D.position.x=((dt.left+dt.width/2)/ze-.5)*Ct,D.position.y=-((dt.top+dt.height/2)/Pe-.5)*Tt,L.color.copy(P).lerp(A,ce.name)}ce.cx=ai(ce.cx,Gt.nx*.22,2.5,q),ce.cy=ai(ce.cy,-Gt.ny*.16,2.5,q),a.position.x=At?0:ce.cx,a.position.y=At?0:ce.cy,a.lookAt(0,0,0),De.position.set(xt*.8,Lt*.8,4),Ce.rotation.y=C*.01,Ce.position.y=Nr.y/Math.max(innerHeight,1)*.35;let vt=Nr.y/Math.max(innerHeight,1)*de-ce.gate;c.uTime.value=C,c.uScroll.value=vt,it(vt);let en=Ch?Math.sin(C*.13)*.32*a.aspect:Gt.nx*.5*a.aspect,Rt=Ch?.1+Math.cos(C*.11)*.24:-Gt.ny*.5;if(ce.lx=ai(ce.lx,en,4,q),ce.ly=ai(ce.ly,Rt,4,q),c.uLight.value.set(ce.lx,ce.ly),c.uInk.value=ce.ink*(1+.35*xe.glow),xe.frame){let Tt=xe.frame.group,Ct=At?0:1;xe.tx=ai(xe.tx,-Gt.ny*.16,2.2,q),xe.ty=ai(xe.ty,Gt.nx*.24,2.2,q),Tt.position.set(0,Math.sin(C*.8)*.05*Ct,.4+xe.approach),Tt.rotation.set((xe.tx+Math.sin(C*.43)*.035)*Ct,(xe.ty+Math.sin(C*.31)*.06)*Ct+xe.turn,xe.spin),xe.frame.sway(C,Ct*(1+xe.load*1.5))}if(t.render(s,a),ce.intro>.6&&ue<3){if(se)me(W);else if(W>Me&&(Y+=Math.min(ee,.25),w++,w>=30)){let Tt=Y/w;w=0,Y=0,Tt>$[ue]&&we(W)}}}function we(W){let ee=t.getContext();se={fence:ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0),since:W,waited:0,samples:[]},ee.flush()}function me(W){let ee=t.getContext();if(se.fence){if(ee.getSyncParameter(se.fence,ee.SYNC_STATUS)!==ee.SIGNALED){W-se.since>1e3&&++se.waited>=2&&(ee.deleteSync(se.fence),se=null,ae());return}ee.deleteSync(se.fence),se.fence=null}let q=performance.now();if(ee.readPixels(0,0,1,1,ee.RGBA,ee.UNSIGNED_BYTE,ve),se.samples.push(performance.now()-q),se.samples.length===3){let G=se.samples.sort((j,fe)=>j-fe)[1],le=oe[ue];se=null,G>le*2||G>le&&Te?ae():G>le?Te=!0:(Te=!1,Me=W+15e3)}}O();let be=0;return addEventListener("resize",()=>{clearTimeout(be),be=setTimeout(O,120)}),new ResizeObserver(()=>{clearTimeout(be),be=setTimeout(O,120)}).observe(St("main")),document.fonts.ready.then(R),document.addEventListener("visibilitychange",()=>{let W=!document.hidden;W&&!Fe&&!Ye?(Fe=!0,st=performance.now(),requestAnimationFrame(ie)):W||(Fe=!1)}),r.addEventListener("webglcontextlost",W=>{W.preventDefault(),Fe=!1,document.documentElement.classList.replace("webgl","no-webgl")}),requestAnimationFrame(ie),{batik:v,firstFrame:()=>new Promise(W=>requestAnimationFrame(()=>requestAnimationFrame(W))),hold(){Ye=!0,Fe=!1},showGate(){if(!(!xe.on||xe.shown)){if(xe.shown=!0,Ge(),At){xe.grow=1,xe.frame.grow(1);return}ot.to(xe,{grow:1,duration:xe.loading?.8:2.4,ease:"power2.inOut",onUpdate:()=>xe.frame&&xe.frame.grow(xe.grow)})}},gateLoad(W){xe.loading=!0,!At&&(ot.to(xe,{load:1,duration:W,ease:"none"}),ot.to(xe,{approach:1.3,spin:.16,turn:.38,duration:W,ease:"power1.in"}))},gatePass(){xe.on=!1;let W=()=>{xe.frame&&(xe.frame.dispose(),xe.frame=null)};if(At||!xe.frame){W(),ce.gate=0,xe.glow=0;return}ot.to(xe,{approach:9.6,spin:.55,turn:0,duration:.85,ease:"power3.in",onComplete:W}),ot.to(ce,{gate:0,duration:1.5,ease:"power2.inOut"}),ot.to(xe,{glow:0,duration:1.5,ease:"power2.inOut"})},go(){Ye=!1,!Fe&&!document.hidden&&(Fe=!0,st=performance.now(),requestAnimationFrame(ie))},intro(){if(At){ce.intro=1,ce.name=1;return}ot.to(ce,{intro:1,duration:1.9,ease:"elastic.out(1, 0.55)",delay:.1}),ot.to(ce,{name:1,duration:1.3,ease:"power2.out",delay:.2})}}}function qT(){let r=new Set,e=new IntersectionObserver(s=>s.forEach(a=>a.isIntersecting?r.add(a.target):r.delete(a.target)),{rootMargin:"80px"});oi(".glass").forEach(s=>e.observe(s));let t=0,n=()=>{t=0;for(let s of r){let a=s.getBoundingClientRect(),o=Math.max(a.left-Gt.x,0,Gt.x-a.right),l=Math.max(a.top-Gt.y,0,Gt.y-a.bottom);s.style.setProperty("--mx",`${(Gt.x-a.left).toFixed(1)}px`),s.style.setProperty("--my",`${(Gt.y-a.top).toFixed(1)}px`),s.style.setProperty("--rim",Si(1-Math.hypot(o,l)/150,0,1).toFixed(3))}},i=()=>{t||(t=requestAnimationFrame(n))};addEventListener("pointermove",i,{passive:!0}),addEventListener("scroll",i,{passive:!0})}function YT(){if(At)return;let r=170,e=13,t=new Map,n=!1,i=0,s=o=>{let l=Math.min((o-i)/1e3,.032);i=o;let c=!1;for(let[u,f]of t){let d=0;for(let h of["rx","ry","sc"]){let p=h==="sc"?100:1;f.v[h]+=((f.t[h]-f.p[h])*r-f.v[h]*e)*l,f.p[h]+=f.v[h]*l,d+=(Math.abs(f.t[h]-f.p[h])+Math.abs(f.v[h])*.05)*p}d>.02?(c=!0,u.style.setProperty("--tilt",`perspective(900px) rotateX(${f.p.rx.toFixed(3)}deg) rotateY(${f.p.ry.toFixed(3)}deg)`),u.style.setProperty("--sc",f.p.sc.toFixed(4))):(t.delete(u),f.t.rx===0&&f.t.ry===0&&f.t.sc===1&&(Object.assign(f.p,f.t),Object.assign(f.v,{rx:0,ry:0,sc:0}),u.style.removeProperty("--tilt"),u.style.removeProperty("--sc")))}c?requestAnimationFrame(s):n=!1},a=(o,l)=>{t.set(o,l),n||(n=!0,i=performance.now(),requestAnimationFrame(s))};oi("[data-spring]").forEach(o=>{let l=o.matches(".card, .tl-item, .fact, .cert"),c=l?4.5:0,u=l?1.014:1.045,f={p:{rx:0,ry:0,sc:1},v:{rx:0,ry:0,sc:0},t:{rx:0,ry:0,sc:1},down:!1};o.addEventListener("pointermove",d=>{if(d.pointerType==="touch")return;let h=o.getBoundingClientRect();f.t.ry=((d.clientX-h.left)/h.width-.5)*c*2,f.t.rx=-((d.clientY-h.top)/h.height-.5)*c*2,f.t.sc=f.down?.97:u,a(o,f)}),o.addEventListener("pointerleave",()=>{f.t.rx=0,f.t.ry=0,f.t.sc=1,f.down=!1,a(o,f)}),o.addEventListener("pointerdown",()=>{f.down=!0,f.t.sc=.965,a(o,f)}),o.addEventListener("pointerup",d=>{f.down=!1,f.t.sc=d.pointerType==="touch"?1:u,a(o,f)}),o.addEventListener("pointercancel",()=>{f.down=!1,f.t.sc=1,f.t.rx=0,f.t.ry=0,a(o,f)})})}var Jt=(()=>{let r=null,e=null,t=!0,n=!1,i=null,s=!1;try{t=localStorage.getItem("nap-sound")!=="off"}catch{}let a=()=>{try{localStorage.setItem("nap-sound",t?"on":"off")}catch{}},o=()=>{if(!r){let h=window.AudioContext||window.webkitAudioContext;if(!h)return null;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}r=new h,e=r.createGain(),e.gain.value=.5,e.connect(r.createDynamicsCompressor()).connect(r.destination);let p=r.createBuffer(1,1,r.sampleRate),x=r.createBufferSource();x.buffer=p,x.connect(r.destination),x.start(0)}return r.state!=="running"&&r.resume().catch(()=>{}),r},l=()=>{n=!0,t&&o()};for(let h of["pointerdown","touchend","click","keydown"])addEventListener(h,l,{passive:!0});let c=(h,p,x,g,m="sine",y=0)=>{if(!t||!n)return;let S=o();if(!S)return;let v=S.currentTime+y,M=S.createOscillator(),T=S.createGain();M.type=m,M.frequency.setValueAtTime(h,v),M.frequency.exponentialRampToValueAtTime(p,v+x),T.gain.setValueAtTime(1e-4,v),T.gain.exponentialRampToValueAtTime(g,v+.012),T.gain.exponentialRampToValueAtTime(1e-4,v+x),M.connect(T).connect(e),M.start(v),M.stop(v+x+.05)},u=()=>`backsound.mp3?v=${document.getElementById("scene")?.dataset.v||""}`,f=()=>{if(!i){let h=o();h&&(i=b_(h,h.destination,u()))}return i};document.addEventListener("visibilitychange",()=>{i&&(document.hidden?i.stop(.3):s&&t&&(r.state!=="running"&&r.resume().catch(()=>{}),i.start(r.currentTime+.25,2)))});let d={get on(){return t},music(h,p){if(s=h,h&&t&&!document.hidden){let x=f();x&&x.start(p??r.currentTime+.3,p?3:2.5)}else i&&i.stop(.7)},get live(){return t&&n},enable(){t=!0,n=!0,a();let h=o(),p=f();return p&&p.load().catch(()=>{}),h},mute(){t=!1,a()},context(){return t?o():null},toggle(){return t=!t,a(),t&&(n=!0,d.pop()),d.music(t),t},bubble(h=1,p=.3,x=0){c(420*h,980*h,.13,p,"sine",x)},pop(){c(760,1500,.07,.28),c(380,620,.09,.11)},drop(){c(880,360,.17,.24)},lift(){c(300,540,.1,.15,"triangle")},ting(){c(1568,1560,.6,.11),c(2349,2340,.45,.06,"sine",.01),c(3136,3120,.3,.03,"sine",.02)},bubbles(h=5){for(let p=0;p<h;p++)d.bubble(.8+Math.random()*1.3,.05+Math.random()*.07,p*.075+Math.random()*.05)},open(){d.bubble(.75,.28),d.ting()}};return d})(),ZT=(()=>{let r=16,e=performance.now();return ot.ticker.add(()=>{let t=performance.now();r+=(Math.min(t-e,2e3)-r)*.3,e=t}),()=>r})();function R_(r,{items:e,onPick:t}){let n=St(".liquid-track",r),i=St(".lens",r),s={x:0,y:0,w:0,h:0,sx:1,sy:1,o:0,lift:0},a=new Map,o=null,l=null,c=!1,u=M=>({x:M.offsetLeft,y:M.offsetTop,w:M.offsetWidth,h:M.offsetHeight}),f=()=>{let M=n.offsetLeft-n.scrollLeft+s.x,T=n.offsetTop+s.y,_=Si(s.lift,0,1);i.style.width=`${s.w.toFixed(2)}px`,i.style.height=`${s.h.toFixed(2)}px`,i.style.opacity=Si(s.o,0,1).toFixed(3),i.style.transform=`translate3d(${M.toFixed(2)}px, ${T.toFixed(2)}px, 0) scale(${s.sx.toFixed(4)}, ${s.sy.toFixed(4)})`,i.style.setProperty("--lift",_.toFixed(3));let b=s.w*s.sx/2,P=s.x+s.w/2;for(let A of e){let L=A.offsetLeft,D=A.offsetWidth||1,H=Math.max(0,Math.min(P+b,L+D)-Math.max(P-b,L))/D,R=1+.13*_*H*s.o;Math.abs((a.get(A)||1)-R)>8e-4&&(A.style.transform=R>1.0008?`scale(${R.toFixed(4)})`:"",a.set(A,R))}},d=(M,T)=>{if(o=M,ot.killTweensOf(s),!M){ot.to(s,{o:0,lift:0,duration:.25,onUpdate:f});return}let _=u(M);if(T||At||ZT()>120){Object.assign(s,_,{sx:1,sy:1,o:1,lift:0}),f();return}if(s.o<.05){Object.assign(s,_,{sx:.6,sy:.6,lift:0}),ot.to(s,{sx:1,sy:1,o:1,duration:.75,ease:"elastic.out(1, 0.5)",onUpdate:f});return}ot.timeline({onUpdate:f}).to(s,{sy:1.2,sx:1.08,lift:.85,duration:.15,ease:"power2.out"}).to(s,{x:_.x,y:_.y,w:_.w,h:_.h,o:1,duration:.5,ease:"power3.inOut"},.04).to(s,{sx:1.22,duration:.2,ease:"sine.out"},.1).to(s,{sx:1,sy:1,lift:0,duration:.85,ease:"elastic.out(1, 0.45)"},.48)},h=M=>M-n.getBoundingClientRect().left+n.scrollLeft,p=M=>M.offsetLeft+M.offsetWidth/2,x=M=>e.reduce((T,_)=>{let b=Math.abs(p(_)-M);return!T||b<T.d?{el:_,d:b}:T},null).el,g=M=>e.forEach(T=>T.classList.toggle("under",T===M)),m=()=>n.scrollWidth<=n.clientWidth+1,y=M=>{g(null),Jt.pop(),t(M),d(M)};r.addEventListener("dragstart",M=>M.preventDefault()),r.addEventListener("pointerdown",M=>{M.button||At||!M.target.closest(".liquid-track")||M.pointerType==="touch"&&!m()||(l={id:M.pointerId,x0:M.clientX,last:M.clientX,moved:!1,under:null})}),addEventListener("pointermove",M=>{if(!l||M.pointerId!==l.id)return;if(!l.moved){if(Math.abs(M.clientX-l.x0)<7)return;l.moved=!0,Jt.lift(),ot.killTweensOf(s),s.o<.05&&Object.assign(s,u(x(h(M.clientX)))),ot.to(s,{o:1,sy:1.24,lift:1,duration:.3,ease:"back.out(2.2)",onUpdate:f})}let T=Si(h(M.clientX),p(e[0]),p(e[e.length-1])),_=x(T);_!==l.under&&(l.under=_,g(_),ot.to(s,{w:_.offsetWidth,h:_.offsetHeight,y:_.offsetTop,duration:.25,ease:"power2.out",overwrite:"auto",onUpdate:f}),Jt.live&&Jt.bubble(1.5,.06)),s.sx=1.1+Si(Math.abs(M.clientX-l.last)*.012,0,.24),l.last=M.clientX,s.x=T-s.w/2,f(),ot.to(s,{sx:1.1,duration:.35,ease:"power2.out",overwrite:"auto",onUpdate:f})},{passive:!0});let S=M=>{if(!l||M.pointerId!==l.id)return;let T=l;l=null,T.moved&&(c=!0,setTimeout(()=>{c=!1},0),y(T.under||x(h(M.clientX))))};addEventListener("pointerup",S),addEventListener("pointercancel",S),r.addEventListener("click",M=>{c&&(M.preventDefault(),M.stopPropagation())},!0);let v=()=>{let M=m();n.classList.toggle("is-fit",M),n.style.touchAction=M?"pan-y":"pan-x pan-y",o&&!l&&d(o,!0)};return n.addEventListener("scroll",f,{passive:!0}),addEventListener("resize",v),document.fonts.ready.then(v),window.ResizeObserver&&new ResizeObserver(v).observe(n),v(),{moveTo:d,pick:y,reveal(M){m()||n.scrollTo({left:M.offsetLeft-n.clientWidth/2+M.offsetWidth/2,behavior:At?"auto":"smooth"})}}}function JT(){let r=St("#nav"),e=oi(".liquid-track a",r),t=new Map(e.map(m=>[m.getAttribute("href").slice(1),m])),n={toolkit:"credentials"},i=oi("main section[id]"),s=null,a=null,o=0,l=0;function c(m){s=m,e.forEach(y=>m&&y===t.get(m)?y.setAttribute("aria-current","true"):y.removeAttribute("aria-current"))}let u=()=>{let m=innerHeight*.45,y=null;for(let S of i)S.getBoundingClientRect().top<=m&&(y=S.id);return innerHeight+scrollY>=document.documentElement.scrollHeight-4&&(y=i[i.length-1].id),!y||y==="top"?null:n[y]||y},f=R_(r,{items:e,onPick:m=>{d(m),St(m.getAttribute("href")).scrollIntoView({behavior:At?"auto":"smooth"})}});function d(m){let y=m.getAttribute("href").slice(1);a=y,o=performance.now()+2500,c(y)}let h=()=>{l=0;let m=u();if(a)if(m===a||performance.now()>o)a=null;else return;if(m===s)return;c(m);let y=m&&t.get(m);f.moveTo(y||null),y&&f.reveal(y)},p=()=>{l||(l=requestAnimationFrame(h))};addEventListener("scroll",p,{passive:!0}),addEventListener("resize",p),e.forEach(m=>m.addEventListener("click",()=>{Jt.pop(),d(m),f.moveTo(m)})),h();let x=St("#sound"),g=()=>{x.setAttribute("aria-pressed",String(Jt.on)),x.title=Jt.on?"Sound on":"Sound off"};x.addEventListener("click",()=>{Jt.toggle(),g()}),g()}function $T(){oi(".tabs").forEach(r=>{let e=oi(".tab",r),t=(s,a)=>{e.forEach(o=>{let l=o===s;o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1;let c=document.getElementById(o.getAttribute("aria-controls"));c.hidden=!l,l&&!At&&ot.fromTo(oi("[data-spring], [data-tabitem]",c),{opacity:0,"--ty":"30px"},{opacity:1,"--ty":"0px",duration:.75,ease:"back.out(1.7)",stagger:.06,overwrite:!0})}),a&&s.focus(),ct.refresh()},n=R_(r,{items:e,onPick:s=>t(s)});e.forEach((s,a)=>{s.addEventListener("click",()=>{s.getAttribute("aria-selected")!=="true"&&(Jt.pop(),t(s),n.moveTo(s),n.reveal(s))}),s.addEventListener("keydown",o=>{let l=o.key==="ArrowRight"?1:o.key==="ArrowLeft"?-1:0;if(l){o.preventDefault();let c=e[(a+l+e.length)%e.length];Jt.pop(),t(c,!0),n.moveTo(c),n.reveal(c)}})});let i=()=>n.moveTo(e.find(s=>s.getAttribute("aria-selected")==="true"),!0);i(),document.fonts.ready.then(i)})}function KT(){let r=new Set(["research","credentials"]),e=new Map,t=new IntersectionObserver(n=>n.forEach(i=>{if(!i.isIntersecting||!Jt.live)return;let s=performance.now();s-(e.get(i.target.id)||-1e9)<9e3||(e.set(i.target.id,s),Jt.bubbles(r.has(i.target.id)?6:3))}),{rootMargin:"-35% 0px -45% 0px"});oi("main section[id]:not(#top)").forEach(n=>t.observe(n))}function QT(){let r=St("#sheet"),e=St("#sheet-body"),t=St("#lightbox"),n=null,i=a=>{n=document.activeElement,a.showModal(),a===r?Jt.open():Jt.ting(),At||ot.fromTo(a,{opacity:0,scale:.9,y:40},{opacity:1,scale:1,y:0,duration:.85,ease:"elastic.out(1, 0.72)",overwrite:!0})},s=a=>{Jt.drop();let o=()=>{a.close(),ot.set(a,{clearProps:"opacity,transform"}),n&&n.focus&&n.focus({preventScroll:!0})};At?o():ot.to(a,{opacity:0,scale:.96,y:14,duration:.2,ease:"power2.in",overwrite:!0,onComplete:o})};oi(".card").forEach(a=>a.addEventListener("click",()=>{let o=document.getElementById(`tpl-${a.dataset.card}`);if(!o)return;e.replaceChildren(o.content.cloneNode(!0));let l=St(".sheet-title",e);l&&(l.id="sheet-heading"),i(r),e.scrollTop=0})),oi(".cert").forEach(a=>a.addEventListener("click",()=>{let o=St("#lb-img");o.src=a.dataset.zoom,o.width=+a.dataset.w,o.height=+a.dataset.h,o.alt=`Certificate: ${a.dataset.title}`,t.style.setProperty("--ar",(+a.dataset.w/+a.dataset.h).toFixed(4)),St("#lb-title").textContent=a.dataset.title,St("#lb-meta").textContent=a.dataset.meta,i(t)}));for(let a of[r,t])a.addEventListener("click",o=>{(o.target===a||o.target.closest("[data-close]"))&&s(a)}),a.addEventListener("cancel",o=>{o.preventDefault(),s(a)})}function jT(){let r=St("#lanyard"),e=St(".lanyard-swing",r),t=St(".idcard",r),n={a:0,w:0,drag:!1,ry:0,on:!0};if(At)return{drop(){}};let i=()=>{let c=r.getBoundingClientRect();return{x:c.left+c.width/2,y:c.top}},s=null,a=performance.now();t.addEventListener("pointerdown",c=>{c.pointerType==="touch"||c.target.closest("a")||(n.drag=!0,t.setPointerCapture(c.pointerId))}),t.addEventListener("pointermove",c=>{if(!n.drag)return;let u=i(),f=Si(-Math.atan2(c.clientX-u.x,Math.max(c.clientY-u.y,60))*180/Math.PI,-48,48);n.w=(f-n.a)*10,n.a=ja(n.a,f,.5)});let o=()=>{n.drag&&Jt.bubble(1.2,.2),n.drag=!1};t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),addEventListener("pointermove",c=>{if(s!=null&&!n.drag&&c.pointerType!=="touch"){let u=r.getBoundingClientRect();c.clientX>u.left-150&&c.clientX<u.right+150&&c.clientY>u.top-40&&c.clientY<u.bottom+150&&(n.w-=Si((c.clientX-s)*.3,-12,12))}s=c.clientX},{passive:!0}),new IntersectionObserver(([c])=>{n.on=c.isIntersecting,n.on&&(a=performance.now(),requestAnimationFrame(l))}).observe(r);function l(c){if(!n.on)return;requestAnimationFrame(l);let u=Math.min((c-a)/1e3,.032);a=c,n.drag||(n.w+=Si(Nr.v*.004,-40,40)*u,n.w+=(-46*n.a-3.3*n.w)*u,n.a+=n.w*u),e.style.transform=`rotate(${n.a.toFixed(3)}deg)`,n.ry=ai(n.ry,Si(Gt.nx,-1,1)*8-n.w*.1,6,u),t.style.transform=`rotateY(${n.ry.toFixed(2)}deg) rotateX(${(-Gt.ny*4).toFixed(2)}deg)`,t.style.setProperty("--hx",`${(50+n.ry*4+n.a*1.5).toFixed(1)}%`)}return{drop(){n.a=-24,n.w=0,ot.fromTo(r,{y:-560},{y:0,duration:1.05,ease:"power3.out",delay:.15})}}}function ew(){At||oi("[data-reveal]").forEach(r=>{ot.fromTo(r,{opacity:0,"--ty":"44px"},{opacity:1,"--ty":"0px",duration:.95,ease:"back.out(1.6)",scrollTrigger:{trigger:r,start:"top 90%",once:!0}})})}async function tw(){window.__napBooted=!0;let r=document.documentElement,e=St("#loader"),t=[St("#nav"),St("main"),St(".foot"),St(".skip")].filter(Boolean),n=null,i={drop(){}};try{qT(),YT(),JT(),$T(),QT(),KT(),oi(".btn").forEach(M=>M.addEventListener("pointerdown",()=>Jt.bubble(1.1,.16))),i=jT()}catch(M){console.error(M)}let s=(async()=>{try{await Promise.race([Promise.all([document.fonts.load("560 96px Fraunces"),document.fonts.load("400 16px Geist")]),Ph(2500)]);try{n=XT(),r.classList.add("webgl")}catch(T){console.warn("WebGL is not available, using the static backdrop.",T),r.classList.add("no-webgl")}let M=St(".id-photo");await Promise.race([M.decode?M.decode().catch(()=>{}):Promise.resolve(),Ph(2500)]),n&&(await Promise.race([n.batik,Ph(4e3)]),await n.firstFrame(),e&&e.isConnected&&(n.showGate(),r.classList.add("gate3d")))}catch(M){console.error(M)}})(),a=()=>{r.classList.remove("gated"),t.forEach(T=>{T.inert=!1}),n&&(n.go(),n.intro()),i.drop(),ew(),At||(ot.fromTo(".hero-lede, .hero-open",{opacity:0,y:26},{opacity:1,y:0,duration:.9,ease:"back.out(1.5)",stagger:.12,delay:.3}),ot.fromTo(".hero-cta > *",{opacity:0,"--ty":"26px"},{opacity:1,"--ty":"0px",duration:.9,ease:"back.out(1.7)",stagger:.09,delay:.4}),ot.fromTo("#nav",{y:-90},{y:0,duration:1.1,ease:"elastic.out(1, 0.7)",delay:.25})),ct.refresh();let M=location.hash.length>1&&document.getElementById(decodeURIComponent(location.hash.slice(1)));M&&setTimeout(()=>M.scrollIntoView({behavior:"auto"}),60)};if(!e||!e.isConnected){await s,a();return}t.forEach(M=>{M.inert=!0});let o=St("#enter-sound"),l=St("#enter-quiet"),c=await new Promise(M=>{o.addEventListener("click",()=>{Jt.enable(),M(!0)},{once:!0}),l.addEventListener("click",()=>{Jt.mute(),M(!1)},{once:!0})}),u=St("#sound");u&&(u.setAttribute("aria-pressed",String(Jt.on)),u.title=Jt.on?"Sound on":"Sound off");let f=St("#gate"),d=St("#count"),h=St("#loader-count"),p=St("#loader-fill"),x=At?1.2:c?3.4:1.6,g=performance.now();s.then(()=>{n&&n.gateLoad(Math.max(.4,x-(performance.now()-g)/1e3))});let m=null;if(c)try{let M=Jt.context();M&&(m=S_(M,M.destination,x))}catch(M){console.warn(M)}ot.to(f,{opacity:0,y:-12,duration:At?0:.25,onComplete:()=>{f.hidden=!0}}),d.hidden=!1,At||ot.fromTo(d,{opacity:0,scale:.94},{opacity:1,scale:1,duration:.45,ease:"back.out(1.6)"});let y={p:0},S=()=>{h.textContent=Math.round(y.p),p.style.transform=`scaleX(${y.p/100})`};if(ot.ticker.lagSmoothing(0),await Promise.all([ot.to(y,{p:99,duration:x,ease:c?"power1.in":"power1.inOut",onUpdate:S}),s]),y.p=100,S(),ot.ticker.lagSmoothing(500,33),m){let M=m.hit();Jt.music(!0,M+2.6),await Ph(60)}let v=document.createElement("div");v.className="flash",v.setAttribute("aria-hidden","true"),document.body.appendChild(v),ot.timeline({onComplete:()=>v.remove()}).to(v,{opacity:At?0:.85,duration:.07}).to(v,{opacity:0,duration:.7,ease:"power2.out"}),At||ot.to(".loader-num",{scale:1.14,duration:.3,ease:"power2.out"}),At||ot.to(d,{opacity:0,duration:.24,delay:.08,ease:"power2.in"}),ot.to(e,{opacity:0,duration:At?0:.65,delay:.05,ease:"power2.inOut",onComplete:()=>e.remove()}),n&&n.gatePass(),At?a():setTimeout(a,320)}tw();
