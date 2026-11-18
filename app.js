/* Portfolio of Naufal Abiyyu Permana. Three.js (MIT), GSAP (GreenSock standard license), simplex noise by Ian McEwan and Stefan Gustavson (MIT). */
var xg=0,Md=1,yg=2,Uo=1,Mg=2,Ts=3,qn=0,Ti=1,Ar=2,jn=0,bs=1,Sd=2,Td=3,bd=4,Sg=5,ba=100,Tg=101,bg=102,wg=103,Eg=104,Ag=200,Rg=201,Pg=202,Cg=203,wd=204,Ed=205,Lg=206,Ig=207,Dg=208,Ng=209,Ug=210,Og=211,Fg=212,zg=213,Bg=214,yu=0,Mu=1,Su=2,ws=3,Tu=4,bu=5,wu=6,Eu=7,Au=0,kg=1,Vg=2,en=0,Ad=1,Rd=2,Pd=3,Ru=4,Cd=5,Ld=6,Id=7,Dd=300,wa=301,Es=302,Pu=303,Cu=304,Oo=1e3,tn=1001,Lu=1002,xi=1003,Hg=1004,Fo=1005,Di=1006,Iu=1007,Rr=1008,Qi=1009,Nd=1010,Ud=1011,As=1012,Du=1013,Fr=1014,Pr=1015,zr=1016,Nu=1017,Uu=1018,Ea=1020,Od=35902,Fd=35899,zd=1021,Bd=1022,Br=1023,xn=1026,yn=1027,Ou=1028,Fu=1029,Yn=1030,zu=1031,Bu=1033,zo=33776,Bo=33777,ko=33778,Vo=33779,ku=35840,Vu=35841,Hu=35842,Gu=35843,Wu=36196,Xu=37492,qu=37496,ju=37488,Yu=37489,Ho=37490,Ju=37491,Ku=37808,Zu=37809,$u=37810,Qu=37811,ec=37812,tc=37813,ic=37814,rc=37815,nc=37816,ac=37817,sc=37818,oc=37819,lc=37820,uc=37821,cc=36492,hc=36494,dc=36495,pc=36283,fc=36284,Go=36285,mc=36286,Wo=2300,gc=2301,vc=2302,kd=2303,Vd=2400,Hd=2401,Gd=2402,Gg=3200,Xo=0,Wg=1,Mn="",Hi="srgb",qo="srgb-linear",jo="linear",It="srgb",_c=7680,Xg=519,qg=512,jg=513,Yg=514,Wd=515,Jg=516,Kg=517,Xd=518,qd=519,Zg=35044,jd="300 es",Cr=2e3,Rs=2001;function $g(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Qg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Yo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ev(){let e=Yo("canvas");return e.style.display="block",e}var Yd={},Aa=null;function Jd(...e){let t="THREE."+e.shift();Aa?Aa("log",t,...e):console.log(t,...e)}function Kd(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function tt(...e){e=Kd(e);let t="THREE."+e.shift();if(Aa)Aa("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function rt(...e){e=Kd(e);let t="THREE."+e.shift();if(Aa)Aa("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ra(...e){let t=e.join(" ");t in Yd||(Yd[t]=!0,tt(...e))}function tv(e,t,i){return new Promise(function(r,n){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:r()}}setTimeout(a,i)})}var iv={[yu]:yu,[Su]:wu,[Tu]:Tu,[ws]:bu,[Mu]:Mu,[wu]:Su,[Eu]:Eu,[bu]:ws},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}},bi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,Ps=Math.PI/180,Cs=180/Math.PI;function Kn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bi[e&255]+bi[e>>8&255]+bi[e>>16&255]+bi[e>>24&255]+"-"+bi[t&255]+bi[t>>8&255]+"-"+bi[t>>16&15|64]+bi[t>>24&255]+"-"+bi[i&63|128]+bi[i>>8&255]+"-"+bi[i>>16&255]+bi[i>>24&255]+bi[r&255]+bi[r>>8&255]+bi[r>>16&255]+bi[r>>24&255]).toLowerCase()}function dt(e,t,i){return Math.max(t,Math.min(i,e))}function xc(e,t){return(e%t+t)%t}function rv(e,t,i,r,n){return r+(e-t)*(n-r)/(i-t)}function nv(e,t,i){return e!==t?(i-e)/(t-e):0}function Ls(e,t,i){return(1-i)*e+i*t}function av(e,t,i,r){return Ls(e,t,1-Math.exp(-i*r))}function sv(e,t=1){return t-Math.abs(xc(e,t*2)-t)}function ov(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function lv(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function uv(e,t){return e+Math.floor(Math.random()*(t-e+1))}function cv(e,t){return e+Math.random()*(t-e)}function hv(e){return e*(.5-Math.random())}function dv(e){e!==void 0&&(Zd=e);let t=Zd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pv(e){return e*Ps}function fv(e){return e*Cs}function mv(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function gv(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function $d(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function vv(e,t,i,r,n){let a=Math.cos,s=Math.sin,o=a(i/2),l=s(i/2),u=a((t+r)/2),h=s((t+r)/2),d=a((t-r)/2),c=s((t-r)/2),p=a((r-t)/2),f=s((r-t)/2);switch(n){case"XYX":e.set(o*h,l*d,l*c,o*u);break;case"YZY":e.set(l*c,o*h,l*d,o*u);break;case"ZXZ":e.set(l*d,l*c,o*h,o*u);break;case"XZX":e.set(o*h,l*f,l*p,o*u);break;case"YXY":e.set(l*p,o*h,l*f,o*u);break;case"ZYZ":e.set(l*f,l*p,o*h,o*u);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function yc(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qd(e,t){if(t.constructor===Float32Array)return e;let i=yc(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function ep(e,t){if(t.constructor===Float32Array)return e;let i=yc(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var _v={DEG2RAD:Ps,RAD2DEG:Cs,generateUUID:Kn,clamp:dt,euclideanModulo:xc,mapLinear:rv,inverseLerp:nv,lerp:Ls,damp:av,pingpong:sv,smoothstep:ov,smootherstep:lv,randInt:uv,randFloat:cv,randFloatSpread:hv,seededRandom:dv,degToRad:pv,radToDeg:fv,isPowerOfTwo:mv,ceilPowerOfTwo:gv,floorPowerOfTwo:$d,setQuaternionFromProperEuler:vv,normalize:ep,denormalize:Qd},tp=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6],this.y=n[1]*i+n[4]*r+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=dt(this.x,t.x,i.x),this.y=dt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=dt(this.x,t,i),this.y=dt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(dt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),n=Math.sin(i),a=this.x-t.x,s=this.y-t.y;return this.x=a*r-s*n+t.x,this.y=a*n+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;var Ie=tp,rn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,a,s){let o=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=n[a+0],c=n[a+1],p=n[a+2],f=n[a+3];if(h!==f||o!==d||l!==c||u!==p){let x=o*d+l*c+u*p+h*f;x<0&&(d=-d,c=-c,p=-p,f=-f,x=-x);let _=1-s;if(x<.9995){let m=Math.acos(x),S=Math.sin(m);_=Math.sin(_*m)/S,s=Math.sin(s*m)/S,o=o*_+d*s,l=l*_+c*s,u=u*_+p*s,h=h*_+f*s}else{o=o*_+d*s,l=l*_+c*s,u=u*_+p*s,h=h*_+f*s;let m=1/Math.sqrt(o*o+l*l+u*u+h*h);o*=m,l*=m,u*=m,h*=m}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,n,a){let s=i[r],o=i[r+1],l=i[r+2],u=i[r+3],h=n[a],d=n[a+1],c=n[a+2],p=n[a+3];return e[t]=s*p+u*h+o*c-l*d,e[t+1]=o*p+u*d+l*h-s*c,e[t+2]=l*p+u*c+s*d-o*h,e[t+3]=u*p-s*h-o*d-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,n=e._z,a=e._order,s=Math.cos,o=Math.sin,l=s(i/2),u=s(r/2),h=s(n/2),d=o(i/2),c=o(r/2),p=o(n/2);switch(a){case"XYZ":this._x=d*u*h+l*c*p,this._y=l*c*h-d*u*p,this._z=l*u*p+d*c*h,this._w=l*u*h-d*c*p;break;case"YXZ":this._x=d*u*h+l*c*p,this._y=l*c*h-d*u*p,this._z=l*u*p-d*c*h,this._w=l*u*h+d*c*p;break;case"ZXY":this._x=d*u*h-l*c*p,this._y=l*c*h+d*u*p,this._z=l*u*p+d*c*h,this._w=l*u*h-d*c*p;break;case"ZYX":this._x=d*u*h-l*c*p,this._y=l*c*h+d*u*p,this._z=l*u*p-d*c*h,this._w=l*u*h+d*c*p;break;case"YZX":this._x=d*u*h+l*c*p,this._y=l*c*h+d*u*p,this._z=l*u*p-d*c*h,this._w=l*u*h-d*c*p;break;case"XZY":this._x=d*u*h-l*c*p,this._y=l*c*h-d*u*p,this._z=l*u*p+d*c*h,this._w=l*u*h+d*c*p;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],a=t[1],s=t[5],o=t[9],l=t[2],u=t[6],h=t[10],d=i+s+h;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(u-o)*c,this._y=(n-l)*c,this._z=(a-r)*c}else if(i>s&&i>h){let c=2*Math.sqrt(1+i-s-h);this._w=(u-o)/c,this._x=.25*c,this._y=(r+a)/c,this._z=(n+l)/c}else if(s>h){let c=2*Math.sqrt(1+s-i-h);this._w=(n-l)/c,this._x=(r+a)/c,this._y=.25*c,this._z=(o+u)/c}else{let c=2*Math.sqrt(1+h-i-s);this._w=(a-r)/c,this._x=(n+l)/c,this._y=(o+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,n=e._z,a=e._w,s=t._x,o=t._y,l=t._z,u=t._w;return this._x=i*u+a*s+r*l-n*o,this._y=r*u+a*o+n*s-i*l,this._z=n*u+a*l+i*o-r*s,this._w=a*u-i*s-r*o-n*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,n=e._z,a=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,n=-n,a=-a,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),u=Math.sin(l);o=Math.sin(o*l)/u,t=Math.sin(t*l)/u,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+n*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+n*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ip=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(rp.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(rp.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,n=this.z,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6]*n,this.y=a[1]*i+a[4]*r+a[7]*n,this.z=a[2]*i+a[5]*r+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,n=this.z,a=t.elements,s=1/(a[3]*i+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*i+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*i+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*i+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,n=this.z,a=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*n-o*r),h=2*(o*i-a*n),d=2*(a*r-s*i);return this.x=i+l*u+s*d-o*h,this.y=r+l*h+o*u-a*d,this.z=n+l*d+a*h-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,n=this.z,a=t.elements;return this.x=a[0]*i+a[4]*r+a[8]*n,this.y=a[1]*i+a[5]*r+a[9]*n,this.z=a[2]*i+a[6]*r+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=dt(this.x,t.x,i.x),this.y=dt(this.y,t.y,i.y),this.z=dt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=dt(this.x,t,i),this.y=dt(this.y,t,i),this.z=dt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,n=t.y,a=t.z,s=i.x,o=i.y,l=i.z;return this.x=n*l-a*o,this.y=a*s-r*l,this.z=r*o-n*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Mc.copy(this).projectOnVector(t),this.sub(Mc)}reflect(t){return this.sub(Mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(dt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,n=this.z-t.z;return i*i+r*r+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let n=Math.sin(i)*t;return this.x=n*Math.sin(r),this.y=Math.cos(i)*t,this.z=n*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=n,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ip.prototype.isVector3=!0;var J=ip,Mc=new J,rp=new rn,np=class{constructor(t,i,r,n,a,s,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,n,a,s,o,l,u)}set(t,i,r,n,a,s,o,l,u){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=i,h[4]=a,h[5]=l,h[6]=r,h[7]=s,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,n=i.elements,a=this.elements,s=r[0],o=r[3],l=r[6],u=r[1],h=r[4],d=r[7],c=r[2],p=r[5],f=r[8],x=n[0],_=n[3],m=n[6],S=n[1],M=n[4],v=n[7],y=n[2],w=n[5],g=n[8];return a[0]=s*x+o*S+l*y,a[3]=s*_+o*M+l*w,a[6]=s*m+o*v+l*g,a[1]=u*x+h*S+d*y,a[4]=u*_+h*M+d*w,a[7]=u*m+h*v+d*g,a[2]=c*x+p*S+f*y,a[5]=c*_+p*M+f*w,a[8]=c*m+p*v+f*g,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return i*s*h-i*o*u-r*a*h+r*o*l+n*a*u-n*s*l}invert(){let t=this.elements,i=t[0],r=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=h*s-o*u,c=o*l-h*a,p=u*a-s*l,f=i*d+r*c+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return t[0]=d*x,t[1]=(n*u-h*r)*x,t[2]=(o*r-n*s)*x,t[3]=c*x,t[4]=(h*i-n*l)*x,t[5]=(n*a-o*i)*x,t[6]=p*x,t[7]=(r*l-u*i)*x,t[8]=(s*i-r*a)*x,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,n,a,s,o){let l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*s+u*o)+s+t,-n*u,n*l,-n*(-u*s+l*o)+o+i,0,0,1),this}scale(t,i){return Ra("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sc.makeScale(t,i)),this}rotate(t){return Ra("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sc.makeRotation(-t)),this}translate(t,i){return Ra("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sc.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let n=0;n<9;n++)if(i[n]!==r[n])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;var lt=np,Sc=new lt,ap=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xv(){let e={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===It&&(n.r=nn(n.r),n.g=nn(n.g),n.b=nn(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===It&&(n.r=Pa(n.r),n.g=Pa(n.g),n.b=Pa(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Mn?jo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[s].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[qo]:{primaries:t,whitePoint:r,transfer:jo,toXYZ:ap,fromXYZ:sp,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:t,whitePoint:r,transfer:It,toXYZ:ap,fromXYZ:sp,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}}),e}var Mt=xv();function nn(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Pa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ca,yv=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ca===void 0&&(Ca=Yo("canvas")),Ca.width=e.width,Ca.height=e.height;let r=Ca.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ca}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let a=0;a<n.length;a++)n[a]=nn(n[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nn(t[i]/255)*255):t[i]=nn(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mv=0,Tc=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?n.push(bc(r[a].image)):n.push(bc(r[a]))}else n=bc(r);i.url=n}return t||(e.images[this.uuid]=i),i}};function bc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?yv.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var Sv=0,wc=new J,fr=class _u extends Jn{constructor(t=_u.DEFAULT_IMAGE,i=_u.DEFAULT_MAPPING,r=tn,n=tn,a=Di,s=Rr,o=Br,l=Qi,u=_u.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sv++}),this.uuid=Kn(),this.name="",this.source=new Tc(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){tt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let n=this[i];if(n===void 0){tt(`Texture.setValues(): property '${i}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Lu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Lu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fr.DEFAULT_IMAGE=null,fr.DEFAULT_MAPPING=Dd,fr.DEFAULT_ANISOTROPY=1;var op=class{constructor(t=0,i=0,r=0,n=1){this.x=t,this.y=i,this.z=r,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,n){return this.x=t,this.y=i,this.z=r,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,n=this.z,a=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*i+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*i+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*i+s[7]*r+s[11]*n+s[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,n,a,s=t.elements,o=s[0],l=s[4],u=s[8],h=s[1],d=s[5],c=s[9],p=s[2],f=s[6],x=s[10];if(Math.abs(l-h)<.01&&Math.abs(u-p)<.01&&Math.abs(c-f)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+p)<.1&&Math.abs(c+f)<.1&&Math.abs(o+d+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let m=(o+1)/2,S=(d+1)/2,M=(x+1)/2,v=(l+h)/4,y=(u+p)/4,w=(c+f)/4;return m>S&&m>M?m<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(m),n=v/r,a=y/r):S>M?S<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),r=v/n,a=w/n):M<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),r=y/a,n=w/a),this.set(r,n,a,i),this}let _=Math.sqrt((f-c)*(f-c)+(u-p)*(u-p)+(h-l)*(h-l));return Math.abs(_)<.001&&(_=1),this.x=(f-c)/_,this.y=(u-p)/_,this.z=(h-l)/_,this.w=Math.acos((o+d+x-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=dt(this.x,t.x,i.x),this.y=dt(this.y,t.y,i.y),this.z=dt(this.z,t.z,i.z),this.w=dt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=dt(this.x,t,i),this.y=dt(this.y,t,i),this.z=dt(this.z,t,i),this.w=dt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;var qt=op,Tv=class extends Jn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new fr({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Tc(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lr=class extends Tv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},lp=class extends fr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xi,this.minFilter=xi,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},bv=class extends fr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xi,this.minFilter=xi,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},up=class sg{constructor(t,i,r,n,a,s,o,l,u,h,d,c,p,f,x,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,n,a,s,o,l,u,h,d,c,p,f,x,_)}set(t,i,r,n,a,s,o,l,u,h,d,c,p,f,x,_){let m=this.elements;return m[0]=t,m[4]=i,m[8]=r,m[12]=n,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=c,m[3]=p,m[7]=f,m[11]=x,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sg().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,n=1/La.setFromMatrixColumn(t,0).length(),a=1/La.setFromMatrixColumn(t,1).length(),s=1/La.setFromMatrixColumn(t,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*a,i[5]=r[5]*a,i[6]=r[6]*a,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,n=t.y,a=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),u=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let c=s*h,p=s*d,f=o*h,x=o*d;i[0]=l*h,i[4]=-l*d,i[8]=u,i[1]=p+f*u,i[5]=c-x*u,i[9]=-o*l,i[2]=x-c*u,i[6]=f+p*u,i[10]=s*l}else if(t.order==="YXZ"){let c=l*h,p=l*d,f=u*h,x=u*d;i[0]=c+x*o,i[4]=f*o-p,i[8]=s*u,i[1]=s*d,i[5]=s*h,i[9]=-o,i[2]=p*o-f,i[6]=x+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*h,p=l*d,f=u*h,x=u*d;i[0]=c-x*o,i[4]=-s*d,i[8]=f+p*o,i[1]=p+f*o,i[5]=s*h,i[9]=x-c*o,i[2]=-s*u,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*h,p=s*d,f=o*h,x=o*d;i[0]=l*h,i[4]=f*u-p,i[8]=c*u+x,i[1]=l*d,i[5]=x*u+c,i[9]=p*u-f,i[2]=-u,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,p=s*u,f=o*l,x=o*u;i[0]=l*h,i[4]=x-c*d,i[8]=f*d+p,i[1]=d,i[5]=s*h,i[9]=-o*h,i[2]=-u*h,i[6]=p*d+f,i[10]=c-x*d}else if(t.order==="XZY"){let c=s*l,p=s*u,f=o*l,x=o*u;i[0]=l*h,i[4]=-d,i[8]=u*h,i[1]=c*d+x,i[5]=s*h,i[9]=p*d-f,i[2]=f*d-p,i[6]=o*h,i[10]=x*d+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wv,t,Ev)}lookAt(t,i,r){let n=this.elements;return er.subVectors(t,i),er.lengthSq()===0&&(er.z=1),er.normalize(),Sn.crossVectors(r,er),Sn.lengthSq()===0&&(Math.abs(r.z)===1?er.x+=1e-4:er.z+=1e-4,er.normalize(),Sn.crossVectors(r,er)),Sn.normalize(),Jo.crossVectors(er,Sn),n[0]=Sn.x,n[4]=Jo.x,n[8]=er.x,n[1]=Sn.y,n[5]=Jo.y,n[9]=er.y,n[2]=Sn.z,n[6]=Jo.z,n[10]=er.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,n=i.elements,a=this.elements,s=r[0],o=r[4],l=r[8],u=r[12],h=r[1],d=r[5],c=r[9],p=r[13],f=r[2],x=r[6],_=r[10],m=r[14],S=r[3],M=r[7],v=r[11],y=r[15],w=n[0],g=n[4],b=n[8],R=n[12],N=n[1],L=n[5],k=n[9],K=n[13],C=n[2],O=n[6],H=n[10],F=n[14],de=n[3],P=n[7],$=n[11],ge=n[15];return a[0]=s*w+o*N+l*C+u*de,a[4]=s*g+o*L+l*O+u*P,a[8]=s*b+o*k+l*H+u*$,a[12]=s*R+o*K+l*F+u*ge,a[1]=h*w+d*N+c*C+p*de,a[5]=h*g+d*L+c*O+p*P,a[9]=h*b+d*k+c*H+p*$,a[13]=h*R+d*K+c*F+p*ge,a[2]=f*w+x*N+_*C+m*de,a[6]=f*g+x*L+_*O+m*P,a[10]=f*b+x*k+_*H+m*$,a[14]=f*R+x*K+_*F+m*ge,a[3]=S*w+M*N+v*C+y*de,a[7]=S*g+M*L+v*O+y*P,a[11]=S*b+M*k+v*H+y*$,a[15]=S*R+M*K+v*F+y*ge,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],n=t[8],a=t[12],s=t[1],o=t[5],l=t[9],u=t[13],h=t[2],d=t[6],c=t[10],p=t[14],f=t[3],x=t[7],_=t[11],m=t[15],S=l*p-u*c,M=o*p-u*d,v=o*c-l*d,y=s*p-u*h,w=s*c-l*h,g=s*d-o*h;return i*(x*S-_*M+m*v)-r*(f*S-_*y+m*w)+n*(f*M-x*y+m*g)-a*(f*v-x*w+_*g)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],n=t[8],a=t[1],s=t[5],o=t[9],l=t[2],u=t[6],h=t[10];return i*(s*h-o*u)-r*(a*h-o*l)+n*(a*u-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=i,n[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=t[9],c=t[10],p=t[11],f=t[12],x=t[13],_=t[14],m=t[15],S=i*o-r*s,M=i*l-n*s,v=i*u-a*s,y=r*l-n*o,w=r*u-a*o,g=n*u-a*l,b=h*x-d*f,R=h*_-c*f,N=h*m-p*f,L=d*_-c*x,k=d*m-p*x,K=c*m-p*_,C=S*K-M*k+v*L+y*N-w*R+g*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return t[0]=(o*K-l*k+u*L)*O,t[1]=(n*k-r*K-a*L)*O,t[2]=(x*g-_*w+m*y)*O,t[3]=(c*w-d*g-p*y)*O,t[4]=(l*N-s*K-u*R)*O,t[5]=(i*K-n*N+a*R)*O,t[6]=(_*v-f*g-m*M)*O,t[7]=(h*g-c*v+p*M)*O,t[8]=(s*k-o*N+u*b)*O,t[9]=(r*N-i*k-a*b)*O,t[10]=(f*w-x*v+m*S)*O,t[11]=(d*v-h*w-p*S)*O,t[12]=(o*R-s*L-l*b)*O,t[13]=(i*L-r*R+n*b)*O,t[14]=(x*M-f*y-_*S)*O,t[15]=(h*y-d*M+c*S)*O,this}scale(t){let i=this.elements,r=t.x,n=t.y,a=t.z;return i[0]*=r,i[4]*=n,i[8]*=a,i[1]*=r,i[5]*=n,i[9]*=a,i[2]*=r,i[6]*=n,i[10]*=a,i[3]*=r,i[7]*=n,i[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),n=Math.sin(i),a=1-r,s=t.x,o=t.y,l=t.z,u=a*s,h=a*o;return this.set(u*s+r,u*o-n*l,u*l+n*o,0,u*o+n*l,h*o+r,h*l-n*s,0,u*l-n*o,h*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,n,a,s){return this.set(1,r,a,0,t,1,s,0,i,n,1,0,0,0,0,1),this}compose(t,i,r){let n=this.elements,a=i._x,s=i._y,o=i._z,l=i._w,u=a+a,h=s+s,d=o+o,c=a*u,p=a*h,f=a*d,x=s*h,_=s*d,m=o*d,S=l*u,M=l*h,v=l*d,y=r.x,w=r.y,g=r.z;return n[0]=(1-(x+m))*y,n[1]=(p+v)*y,n[2]=(f-M)*y,n[3]=0,n[4]=(p-v)*w,n[5]=(1-(c+m))*w,n[6]=(_+S)*w,n[7]=0,n[8]=(f+M)*g,n[9]=(_-S)*g,n[10]=(1-(c+x))*g,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,i,r){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let a=this.determinantAffine();if(a===0)return r.set(1,1,1),i.identity(),this;let s=La.set(n[0],n[1],n[2]).length(),o=La.set(n[4],n[5],n[6]).length(),l=La.set(n[8],n[9],n[10]).length();a<0&&(s=-s),Ir.copy(this);let u=1/s,h=1/o,d=1/l;return Ir.elements[0]*=u,Ir.elements[1]*=u,Ir.elements[2]*=u,Ir.elements[4]*=h,Ir.elements[5]*=h,Ir.elements[6]*=h,Ir.elements[8]*=d,Ir.elements[9]*=d,Ir.elements[10]*=d,i.setFromRotationMatrix(Ir),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,n,a,s,o=Cr,l=!1){let u=this.elements,h=2*a/(i-t),d=2*a/(r-n),c=(i+t)/(i-t),p=(r+n)/(r-n),f,x;if(l)f=a/(s-a),x=s*a/(s-a);else if(o===Cr)f=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===Rs)f=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=f,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,i,r,n,a,s,o=Cr,l=!1){let u=this.elements,h=2/(i-t),d=2/(r-n),c=-(i+t)/(i-t),p=-(r+n)/(r-n),f,x;if(l)f=1/(s-a),x=s/(s-a);else if(o===Cr)f=-2/(s-a),x=-(s+a)/(s-a);else if(o===Rs)f=-1/(s-a),x=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=f,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};up.prototype.isMatrix4=!0;var kt=up,La=new J,Ir=new kt,wv=new J(0,0,0),Ev=new J(1,1,1),Sn=new J,Jo=new J,er=new J,cp=new kt,hp=new rn,Zn=class og{constructor(t=0,i=0,r=0,n=og.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,n=this._order){return this._x=t,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let n=t.elements,a=n[0],s=n[4],o=n[8],l=n[1],u=n[5],h=n[9],d=n[2],c=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cp,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return hp.setFromEuler(this),this.setFromQuaternion(hp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var dp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Av=0,pp=new J,Ia=new rn,an=new kt,Ko=new J,Is=new J,Rv=new J,Pv=new rn,fp=new J(1,0,0),mp=new J(0,1,0),gp=new J(0,0,1),vp={type:"added"},Cv={type:"removed"},Da={type:"childadded",child:null},Ec={type:"childremoved",child:null},Ni=class xu extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xu.DEFAULT_UP.clone();let t=new J,i=new Zn,r=new rn,n=new J(1,1,1);function a(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new kt},normalMatrix:{value:new lt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=xu.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xu.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ia.setFromAxisAngle(t,i),this.quaternion.multiply(Ia),this}rotateOnWorldAxis(t,i){return Ia.setFromAxisAngle(t,i),this.quaternion.premultiply(Ia),this}rotateX(t){return this.rotateOnAxis(fp,t)}rotateY(t){return this.rotateOnAxis(mp,t)}rotateZ(t){return this.rotateOnAxis(gp,t)}translateOnAxis(t,i){return pp.copy(t).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fp,t)}translateY(t){return this.translateOnAxis(mp,t)}translateZ(t){return this.translateOnAxis(gp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ko.copy(t):Ko.set(t,i,r);let n=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Is,Ko,this.up):an.lookAt(Ko,Is,this.up),this.quaternion.setFromRotationMatrix(an),n&&(an.extractRotation(n.matrixWorld),Ia.setFromRotationMatrix(an),this.quaternion.premultiply(Ia.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vp),Da.child=t,this.dispatchEvent(Da),Da.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Cv),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vp),Da.child=t,this.dispatchEvent(Da),Da.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,n=this.children.length;r<n;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Pv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,n=t.z,a=this.matrix.elements;a[12]+=i-a[0]*i-a[4]*r-a[8]*n,a[13]+=r-a[1]*i-a[5]*r-a[9]*n,a[14]+=n-a[2]*i-a[6]*r-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let d=l[u];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(a(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),u=s(t.textures),h=s(t.images),d=s(t.shapes),c=s(t.skeletons),p=s(t.animations),f=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),f.length>0&&(r.nodes=f)}return r.object=n,r;function s(o){let l=[];for(let u in o){let h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let n=t.children[r];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ni.DEFAULT_UP=new J(0,1,0),Ni.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=class extends Ni{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lv={type:"move"},Ac=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,a=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let f of e.hand.values()){let x=t.getJointPose(f,i),_=this._getHandJoint(l,f);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),c=.02,p=.005;l.inputState.pinching&&d>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Lv)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Rc(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var at=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=xc(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=Rc(a,n,e+1/3),this.g=Rc(a,n,e),this.b=Rc(a,n,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Hi){function i(n){n!==void 0&&parseFloat(n)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hi){let i=_p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hi){return Mt.workingToColorSpace(wi.copy(this),e),Math.round(dt(wi.r*255,0,255))*65536+Math.round(dt(wi.g*255,0,255))*256+Math.round(dt(wi.b*255,0,255))}getHexString(e=Hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(wi.copy(this),t);let i=wi.r,r=wi.g,n=wi.b,a=Math.max(i,r,n),s=Math.min(i,r,n),o,l,u=(s+a)/2;if(s===a)o=0,l=0;else{let h=a-s;switch(l=u<=.5?h/(a+s):h/(2-a-s),a){case i:o=(r-n)/h+(r<n?6:0);break;case r:o=(n-i)/h+2;break;case n:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(wi.copy(this),t),e.r=wi.r,e.g=wi.g,e.b=wi.b,e}getStyle(e=Hi){Mt.workingToColorSpace(wi.copy(this),e);let t=wi.r,i=wi.g,r=wi.b;return e!==Hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Zo);let i=Ls(Tn.h,Zo.h,t),r=Ls(Tn.s,Zo.s,t),n=Ls(Tn.l,Zo.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wi=new at;at.NAMES=_p;var $o=class extends Ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dr=new J,sn=new J,Pc=new J,on=new J,Na=new J,Ua=new J,xp=new J,Cc=new J,Lc=new J,Ic=new J,Dc=new qt,Nc=new qt,Uc=new qt,Ds=class Ms{constructor(t=new J,i=new J,r=new J){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,n){n.subVectors(r,i),Dr.subVectors(t,i),n.cross(Dr);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,i,r,n,a){Dr.subVectors(n,i),sn.subVectors(r,i),Pc.subVectors(t,i);let s=Dr.dot(Dr),o=Dr.dot(sn),l=Dr.dot(Pc),u=sn.dot(sn),h=sn.dot(Pc),d=s*u-o*o;if(d===0)return a.set(0,0,0),null;let c=1/d,p=(u*l-o*h)*c,f=(s*h-o*l)*c;return a.set(1-p-f,f,p)}static containsPoint(t,i,r,n){return this.getBarycoord(t,i,r,n,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,i,r,n,a,s,o,l){return this.getBarycoord(t,i,r,n,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,on.x),l.addScaledVector(s,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(t,i,r,n,a,s){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(t,i),Nc.fromBufferAttribute(t,r),Uc.fromBufferAttribute(t,n),s.setScalar(0),s.addScaledVector(Dc,a.x),s.addScaledVector(Nc,a.y),s.addScaledVector(Uc,a.z),s}static isFrontFacing(t,i,r,n){return Dr.subVectors(r,i),sn.subVectors(t,i),Dr.cross(sn).dot(n)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,n){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,i,r,n){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dr.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Dr.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ms.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ms.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,n,a){return Ms.getInterpolation(t,this.a,this.b,this.c,i,r,n,a)}containsPoint(t){return Ms.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ms.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,n=this.b,a=this.c,s,o;Na.subVectors(n,r),Ua.subVectors(a,r),Cc.subVectors(t,r);let l=Na.dot(Cc),u=Ua.dot(Cc);if(l<=0&&u<=0)return i.copy(r);Lc.subVectors(t,n);let h=Na.dot(Lc),d=Ua.dot(Lc);if(h>=0&&d<=h)return i.copy(n);let c=l*d-h*u;if(c<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),i.copy(r).addScaledVector(Na,s);Ic.subVectors(t,a);let p=Na.dot(Ic),f=Ua.dot(Ic);if(f>=0&&p<=f)return i.copy(a);let x=p*u-l*f;if(x<=0&&u>=0&&f<=0)return o=u/(u-f),i.copy(r).addScaledVector(Ua,o);let _=h*f-p*d;if(_<=0&&d-h>=0&&p-f>=0)return xp.subVectors(a,n),o=(d-h)/(d-h+(p-f)),i.copy(n).addScaledVector(xp,o);let m=1/(_+x+c);return s=x*m,o=c*m,i.copy(r).addScaledVector(Na,s).addScaledVector(Ua,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qn=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,s=n.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Nr):Nr.fromBufferAttribute(n,a),Nr.applyMatrix4(e.matrixWorld),this.expandByPoint(Nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}let r=e.children;for(let n=0,a=r.length;n<a;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nr),Nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),el.subVectors(this.max,Ns),Oa.subVectors(e.a,Ns),Fa.subVectors(e.b,Ns),za.subVectors(e.c,Ns),bn.subVectors(Fa,Oa),wn.subVectors(za,Fa),ea.subVectors(Oa,za);let t=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-ea.z,ea.y,bn.z,0,-bn.x,wn.z,0,-wn.x,ea.z,0,-ea.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-ea.y,ea.x,0];return!Oc(t,Oa,Fa,za,el)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Oa,Fa,za,el))?!1:(tl.crossVectors(bn,wn),t=[tl.x,tl.y,tl.z],Oc(t,Oa,Fa,za,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ln=[new J,new J,new J,new J,new J,new J,new J,new J],Nr=new J,Qo=new Qn,Oa=new J,Fa=new J,za=new J,bn=new J,wn=new J,ea=new J,Ns=new J,el=new J,tl=new J,ta=new J;function Oc(e,t,i,r,n){for(let a=0,s=e.length-3;a<=s;a+=3){ta.fromArray(e,a);let o=n.x*Math.abs(ta.x)+n.y*Math.abs(ta.y)+n.z*Math.abs(ta.z),l=t.dot(ta),u=i.dot(ta),h=r.dot(ta);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}var si=new J,il=new Ie,Iv=0,kr=class extends Jn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zg,this.updateRanges=[],this.gpuType=Pr,this.version=0,this._normalizationScale=e!==void 0?yc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)il.fromBufferAttribute(this,t),il.applyMatrix3(e),this.setXY(t,il.x,il.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyMatrix3(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ep(e,this.array)}},yp=class extends kr{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Mp=class extends kr{constructor(e,t,i){super(new Uint32Array(e),t,i)}},oi=class extends kr{constructor(e,t,i){super(new Float32Array(e),t,i)}},Dv=new Qn,Us=new J,Fc=new J,Ba=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Dv.setFromPoints(e).getCenter(i);let r=0;for(let n=0,a=e.length;n<a;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Fc)),this.expandByPoint(Us.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nv=0,mr=new kt,zc=new Ni,ka=new J,tr=new Qn,Os=new Qn,fi=new J,gr=class lg extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($g(t)?Mp:yp)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let a=new lt().getNormalMatrix(t);r.applyNormalMatrix(a),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mr.makeRotationFromQuaternion(t),this.applyMatrix4(mr),this}rotateX(t){return mr.makeRotationX(t),this.applyMatrix4(mr),this}rotateY(t){return mr.makeRotationY(t),this.applyMatrix4(mr),this}rotateZ(t){return mr.makeRotationZ(t),this.applyMatrix4(mr),this}translate(t,i,r){return mr.makeTranslation(t,i,r),this.applyMatrix4(mr),this}scale(t,i,r){return mr.makeScale(t,i,r),this.applyMatrix4(mr),this}lookAt(t){return zc.lookAt(t),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ka).negate(),this.translate(ka.x,ka.y,ka.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let n=0,a=t.length;n<a;n++){let s=t[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new oi(r,3))}else{let r=Math.min(t.length,i.count);for(let n=0;n<r;n++){let a=t[n];i.setXYZ(n,a.x,a.y,a.z||0)}t.length>i.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,n=i.length;r<n;r++){let a=i[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(fi.addVectors(this.boundingBox.min,tr.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,tr.max),this.boundingBox.expandByPoint(fi)):(this.boundingBox.expandByPoint(tr.min),this.boundingBox.expandByPoint(tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let r=this.boundingSphere.center;if(tr.setFromBufferAttribute(t),i)for(let a=0,s=i.length;a<s;a++){let o=i[a];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(fi.addVectors(tr.min,Os.min),tr.expandByPoint(fi),fi.addVectors(tr.max,Os.max),tr.expandByPoint(fi)):(tr.expandByPoint(Os.min),tr.expandByPoint(Os.max))}tr.getCenter(r);let n=0;for(let a=0,s=t.count;a<s;a++)fi.fromBufferAttribute(t,a),n=Math.max(n,r.distanceToSquared(fi));if(i)for(let a=0,s=i.length;a<s;a++){let o=i[a],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)fi.fromBufferAttribute(o,u),l&&(ka.fromBufferAttribute(t,u),fi.add(ka)),n=Math.max(n,r.distanceToSquared(fi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,n=i.normal,a=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new kr(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],u=new Uint8Array(r.count);for(let R=0;R<r.count;R++)o[R]=new J,l[R]=new J;let h=new J,d=new J,c=new J,p=new Ie,f=new Ie,x=new Ie,_=new J,m=new J;function S(R,N,L){u[R]=u[N]=u[L]=1,h.fromBufferAttribute(r,R),d.fromBufferAttribute(r,N),c.fromBufferAttribute(r,L),p.fromBufferAttribute(a,R),f.fromBufferAttribute(a,N),x.fromBufferAttribute(a,L),d.sub(h),c.sub(h),f.sub(p),x.sub(p);let k=1/(f.x*x.y-x.x*f.y);isFinite(k)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(c,-f.y).multiplyScalar(k),m.copy(c).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(k),o[R].add(_),o[N].add(_),o[L].add(_),l[R].add(m),l[N].add(m),l[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,N=M.length;R<N;++R){let L=M[R],k=L.start,K=L.count;for(let C=k,O=k+K;C<O;C+=3)S(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let v=new J,y=new J,w=new J,g=new J;function b(R){w.fromBufferAttribute(n,R),g.copy(w);let N=o[R];v.copy(N),v.sub(w.multiplyScalar(w.dot(N))).normalize(),y.crossVectors(g,N);let L=y.dot(l[R])<0?-1:1;s.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,N=r.count;R<N;++R)u[R]&&b(R);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new kr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);let n=new J,a=new J,s=new J,o=new J,l=new J,u=new J,h=new J,d=new J;if(t)for(let c=0,p=t.count;c<p;c+=3){let f=t.getX(c+0),x=t.getX(c+1),_=t.getX(c+2);n.fromBufferAttribute(i,f),a.fromBufferAttribute(i,x),s.fromBufferAttribute(i,_),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(r,f),l.fromBufferAttribute(r,x),u.fromBufferAttribute(r,_),o.add(h),l.add(h),u.add(h),r.setXYZ(f,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(_,u.x,u.y,u.z)}else for(let c=0,p=i.count;c<p;c+=3)n.fromBufferAttribute(i,c+0),a.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),r.setXYZ(c+0,h.x,h.y,h.z),r.setXYZ(c+1,h.x,h.y,h.z),r.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)fi.fromBufferAttribute(t,i),fi.normalize(),t.setXYZ(i,fi.x,fi.y,fi.z)}toNonIndexed(){function t(o,l){let u=o.array,h=o.itemSize,d=o.normalized,c=new u.constructor(l.length*h),p=0,f=0;for(let x=0,_=l.length;x<_;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let m=0;m<h;m++)c[f++]=u[p++]}return new kr(c,h,d)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new lg,r=this.index.array,n=this.attributes;for(let o in n){let l=n[o],u=t(l,r);i.setAttribute(o,u)}let a=this.morphAttributes;for(let o in a){let l=[],u=a[o];for(let h=0,d=u.length;h<d;h++){let c=u[h],p=t(c,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];i.addGroup(u.start,u.count,u.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let u=r[l];t.data.attributes[l]=u.toJSON(t.data)}let n={},a=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],h=[];for(let d=0,c=u.length;d<c;d++){let p=u[d];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let n=t.attributes;for(let u in n){let h=n[u];this.setAttribute(u,h.clone(i))}let a=t.morphAttributes;for(let u in a){let h=[],d=a[u];for(let c=0,p=d.length;c<p;c++)h.push(d[c].clone(i));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,h=s.length;u<h;u++){let d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bc=new J,Uv=new J,Ov=new lt,En=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Bc.subVectors(i,t).cross(Uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Bc),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/n;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ov.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fv=0,ia=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=bs,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Ed,this.blendEquation=ba,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_c,this.stencilZFail=_c,this.stencilZPass=_c,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(n=>n.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){let a=[];for(let s in n){let o=n[s];delete o.metadata,a.push(o)}return a}if(t){let n=r(e.textures),a=r(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new En().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},un=new J,kc=new J,rl=new J,nl=new J,Sp=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){kc.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),nl.copy(this.origin).sub(kc);let n=e.distanceTo(t)*.5,a=-this.direction.dot(rl),s=nl.dot(this.direction),o=-nl.dot(rl),l=nl.lengthSq(),u=Math.abs(1-a*a),h,d,c,p;if(u>0)if(h=a*o-s,d=a*s-o,p=n*u,h>=0)if(d>=-p)if(d<=p){let f=1/u;h*=f,d*=f,c=h*(h+a*d+2*s)+d*(a*h+d+2*o)+l}else d=n,h=Math.max(0,-(a*d+s)),c=-h*h+d*(d+2*o)+l;else d=-n,h=Math.max(0,-(a*d+s)),c=-h*h+d*(d+2*o)+l;else d<=-p?(h=Math.max(0,-(-a*n+s)),d=h>0?-n:Math.min(Math.max(-n,-o),n),c=-h*h+d*(d+2*o)+l):d<=p?(h=0,d=Math.min(Math.max(-n,-o),n),c=d*(d+2*o)+l):(h=Math.max(0,-(a*n+s)),d=h>0?n:Math.min(Math.max(-n,-o),n),c=-h*h+d*(d+2*o)+l);else d=a>0?-n:n,h=Math.max(0,-(a*d+s)),c=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(kc).addScaledVector(rl,d),c}intersectSphere(e,t){if(e.radius<0)return null;un.subVectors(e.center,this.origin);let i=un.dot(this.direction),r=un.dot(un)-i*i,n=e.radius*e.radius;if(r>n)return null;let a=Math.sqrt(n-r),s=i-a,o=i+a;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,a,s,o,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(n=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||n>r||((n>i||isNaN(i))&&(i=n),(a<r||isNaN(r))&&(r=a),h>=0?(s=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,i,r,n){let a=this.origin,s=this.direction,o=s.x,l=s.y,u=s.z,h=e.x-a.x,d=e.y-a.y,c=e.z-a.z,p=t.x-a.x,f=t.y-a.y,x=t.z-a.z,_=i.x-a.x,m=i.y-a.y,S=i.z-a.z,M=Math.abs(o),v=Math.abs(l),y=Math.abs(u),w,g,b,R,N,L,k,K,C,O,H,F;if(M>=v&&M>=y?(b=o,L=h,C=p,F=_,o>=0?(w=l,g=u,R=d,N=c,k=f,K=x,O=m,H=S):(w=u,g=l,R=c,N=d,k=x,K=f,O=S,H=m)):v>=y?(b=l,L=d,C=f,F=m,l>=0?(w=u,g=o,R=c,N=h,k=x,K=p,O=S,H=_):(w=o,g=u,R=h,N=c,k=p,K=x,O=_,H=S)):(b=u,L=c,C=x,F=S,u>=0?(w=o,g=l,R=h,N=d,k=p,K=f,O=_,H=m):(w=l,g=o,R=d,N=h,k=f,K=p,O=m,H=_)),b===0)return null;let de=w/b,P=g/b,$=1/b,ge=R-de*L,Re=N-P*L,ae=k-de*C,pe=K-P*C,Ee=O-de*F,be=H-P*F,Le=Ee*pe-be*ae,xe=ge*be-Re*Ee,Be=ae*Re-pe*ge;if(r){if(Le<0||xe<0||Be<0)return null}else if((Le<0||xe<0||Be<0)&&(Le>0||xe>0||Be>0))return null;let ke=Le+xe+Be;if(ke===0)return null;let fe=$*(Le*L+xe*C+Be*F);return(ke>0?fe<0:fe>0)?null:this.at(fe/ke,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},al=class extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tp=new kt,ra=new Sp,sl=new Ba,bp=new J,ol=new J,ll=new J,ul=new J,Vc=new J,cl=new J,wp=new J,hl=new J,Nt=class extends Ni{constructor(e=new gr,t=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(n&&s){cl.set(0,0,0);for(let o=0,l=n.length;o<l;o++){let u=s[o],h=n[o];u!==0&&(Vc.fromBufferAttribute(h,e),a?cl.addScaledVector(Vc,u):cl.addScaledVector(Vc.sub(t),u))}t.add(cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(n),ra.copy(e.ray).recast(e.near),!(sl.containsPoint(ra.origin)===!1&&(ra.intersectSphere(sl,bp)===null||ra.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(Tp.copy(n).invert(),ra.copy(e.ray).applyMatrix4(Tp),!(i.boundingBox!==null&&ra.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ra)))}_computeIntersections(e,t,i){let r,n=this.geometry,a=this.material,s=n.index,o=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv1,h=n.attributes.normal,d=n.groups,c=n.drawRange;if(s!==null)if(Array.isArray(a))for(let p=0,f=d.length;p<f;p++){let x=d[p],_=a[x.materialIndex],m=Math.max(x.start,c.start),S=Math.min(s.count,Math.min(x.start+x.count,c.start+c.count));for(let M=m,v=S;M<v;M+=3){let y=s.getX(M),w=s.getX(M+1),g=s.getX(M+2);r=dl(this,_,e,i,l,u,h,y,w,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),f=Math.min(s.count,c.start+c.count);for(let x=p,_=f;x<_;x+=3){let m=s.getX(x),S=s.getX(x+1),M=s.getX(x+2);r=dl(this,a,e,i,l,u,h,m,S,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,f=d.length;p<f;p++){let x=d[p],_=a[x.materialIndex],m=Math.max(x.start,c.start),S=Math.min(o.count,Math.min(x.start+x.count,c.start+c.count));for(let M=m,v=S;M<v;M+=3){let y=M,w=M+1,g=M+2;r=dl(this,_,e,i,l,u,h,y,w,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),f=Math.min(o.count,c.start+c.count);for(let x=p,_=f;x<_;x+=3){let m=x,S=x+1,M=x+2;r=dl(this,a,e,i,l,u,h,m,S,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function zv(e,t,i,r,n,a,s,o){let l;if(t.side===Ti?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,t.side===qn,o),l===null)return null;hl.copy(o),hl.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(hl);return u<i.near||u>i.far?null:{distance:u,point:hl.clone(),object:e}}function dl(e,t,i,r,n,a,s,o,l,u){e.getVertexPosition(o,ol),e.getVertexPosition(l,ll),e.getVertexPosition(u,ul);let h=zv(e,t,i,r,ol,ll,ul,wp);if(h){let d=new J;Ds.getBarycoord(wp,ol,ll,ul,d),n&&(h.uv=Ds.getInterpolatedAttribute(n,o,l,u,d,new Ie)),a&&(h.uv1=Ds.getInterpolatedAttribute(a,o,l,u,d,new Ie)),s&&(h.normal=Ds.getInterpolatedAttribute(s,o,l,u,d,new J),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new J,materialIndex:0};Ds.getNormal(ol,ll,ul,c.normal),h.face=c,h.barycoord=d}return h}var Ep=class extends fr{constructor(e=null,t=1,i=1,r,n,a,s,o,l=xi,u=xi,h,d){super(null,a,s,o,l,u,r,n,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ap=class extends kr{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Va=new kt,Rp=new kt,pl=[],Pp=new Qn,Bv=new kt,Fs=new Nt,zs=new Ba,Cp=class extends Nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ap(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Bv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Va),Pp.copy(e.boundingBox).applyMatrix4(Va),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ba),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Va),zs.copy(e.boundingSphere).applyMatrix4(Va),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,a=e*n+1;for(let s=0;s<i.length;s++)i[s]=r[a+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(i),e.ray.intersectsSphere(zs)!==!1))for(let n=0;n<r;n++){this.getMatrixAt(n,Va),Rp.multiplyMatrices(i,Va),Fs.matrixWorld=Rp,Fs.raycast(e,pl);for(let a=0,s=pl.length;a<s;a++){let o=pl[a];o.instanceId=n,o.object=this,t.push(o)}pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ap(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ep(new Float32Array(r*this.count),r,this.count,Ou,Pr));let n=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let s=this.geometry.morphTargetsRelative?1:1-a,o=r*e;return n[o]=s,n.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},na=new Ba,kv=new Ie(.5,.5),fl=new J,Bs=class{constructor(e=new En,t=new En,i=new En,r=new En,n=new En,a=new En){this.planes=[e,t,i,r,n,a]}set(e,t,i,r,n,a){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cr,i=!1){let r=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],u=n[4],h=n[5],d=n[6],c=n[7],p=n[8],f=n[9],x=n[10],_=n[11],m=n[12],S=n[13],M=n[14],v=n[15];if(r[0].setComponents(l-a,c-u,_-p,v-m).normalize(),r[1].setComponents(l+a,c+u,_+p,v+m).normalize(),r[2].setComponents(l+s,c+h,_+f,v+S).normalize(),r[3].setComponents(l-s,c-h,_-f,v-S).normalize(),i)r[4].setComponents(o,d,x,M).normalize(),r[5].setComponents(l-o,c-d,_-x,v-M).normalize();else if(r[4].setComponents(l-o,c-d,_-x,v-M).normalize(),t===Cr)r[5].setComponents(l+o,c+d,_+x,v+M).normalize();else if(t===Rs)r[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(na)}intersectsSprite(e){na.center.set(0,0,0);let t=kv.distanceTo(e.center);return na.radius=.7071067811865476+t,na.applyMatrix4(e.matrixWorld),this.intersectsSphere(na)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lp=new kt,Vv=class ug{constructor(){this.coordinateSystem=Cr,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let n=0;n<i.length;n++){let a=i[n];Lp.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),r[n]===void 0&&(r[n]=new Bs),r[n].setFromProjectionMatrix(Lp,a.coordinateSystem,a.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let n=0;n<t._count;n++)i[n]===void 0&&(i[n]=new Bs),i[n].copy(r[n]);return this._count=t._count,this}clone(){return new ug().copy(this)}},Ip=class extends ia{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new kt,Hc=new Sp,ml=new Ba,gl=new J,Hv=class extends Ni{constructor(e=new gr,t=new Ip){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=n,e.ray.intersectsSphere(ml)===!1)return;Dp.copy(r).invert(),Hc.copy(e.ray).applyMatrix4(Dp);let s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,u=i.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let c=h,p=d;c<p;c++){let f=l.getX(c);gl.fromBufferAttribute(u,f),Np(gl,f,o,r,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let c=h,p=d;c<p;c++)gl.fromBufferAttribute(u,c),Np(gl,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Np(e,t,i,r,n,a,s){let o=Hc.distanceSqToPoint(e);if(o<i){let l=new J;Hc.closestPointToPoint(e,l),l.applyMatrix4(r);let u=n.ray.origin.distanceTo(l);if(u<n.near||u>n.far)return;a.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Up=class extends fr{constructor(e=[],t=wa,i,r,n,a,s,o,l,u){super(e,t,i,r,n,a,s,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vl=class extends fr{constructor(e,t,i,r,n,a,s,o,l){super(e,t,i,r,n,a,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ha=class extends fr{constructor(e,t,i=Fr,r,n,a,s=xi,o=xi,l,u=xn,h=1){if(u!==xn&&u!==yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,n,a,s,o,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Op=class extends Ha{constructor(e,t=Fr,i=wa,r,n,a=xi,s=xi,o,l=xn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,n,a,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fp=class extends fr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ga=class cg extends gr{constructor(t=1,i=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let l=[],u=[],h=[],d=[],c=0,p=0;f("z","y","x",-1,-1,r,i,t,s,a,0),f("z","y","x",1,-1,r,i,-t,s,a,1),f("x","z","y",1,1,t,r,i,n,s,2),f("x","z","y",1,-1,t,r,-i,n,s,3),f("x","y","z",1,-1,t,i,r,n,a,4),f("x","y","z",-1,-1,t,i,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new oi(u,3)),this.setAttribute("normal",new oi(h,3)),this.setAttribute("uv",new oi(d,2));function f(x,_,m,S,M,v,y,w,g,b,R){let N=v/g,L=y/b,k=v/2,K=y/2,C=w/2,O=g+1,H=b+1,F=0,de=0,P=new J;for(let $=0;$<H;$++){let ge=$*L-K;for(let Re=0;Re<O;Re++){let ae=Re*N-k;P[x]=ae*S,P[_]=ge*M,P[m]=C,u.push(P.x,P.y,P.z),P[x]=0,P[_]=0,P[m]=w>0?1:-1,h.push(P.x,P.y,P.z),d.push(Re/g),d.push(1-$/b),F+=1}}for(let $=0;$<b;$++)for(let ge=0;ge<g;ge++){let Re=c+ge+O*$,ae=c+ge+O*($+1),pe=c+(ge+1)+O*($+1),Ee=c+(ge+1)+O*$;l.push(Re,ae,Ee),l.push(ae,pe,Ee),de+=6}o.addGroup(p,de,R),p+=de,c+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cg(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Gv=class hg extends gr{constructor(t=[],i=[],r=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:n};let a=[],s=[];o(n),u(r),h(),this.setAttribute("position",new oi(a,3)),this.setAttribute("normal",new oi(a.slice(),3)),this.setAttribute("uv",new oi(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let M=new J,v=new J,y=new J;for(let w=0;w<i.length;w+=3)p(i[w+0],M),p(i[w+1],v),p(i[w+2],y),l(M,v,y,S)}function l(S,M,v,y){let w=y+1,g=[];for(let b=0;b<=w;b++){g[b]=[];let R=S.clone().lerp(v,b/w),N=M.clone().lerp(v,b/w),L=w-b;for(let k=0;k<=L;k++)k===0&&b===w?g[b][k]=R:g[b][k]=R.clone().lerp(N,k/L)}for(let b=0;b<w;b++)for(let R=0;R<2*(w-b)-1;R++){let N=Math.floor(R/2);R%2===0?(c(g[b][N+1]),c(g[b+1][N]),c(g[b][N])):(c(g[b][N+1]),c(g[b+1][N+1]),c(g[b+1][N]))}}function u(S){let M=new J;for(let v=0;v<a.length;v+=3)M.x=a[v+0],M.y=a[v+1],M.z=a[v+2],M.normalize().multiplyScalar(S),a[v+0]=M.x,a[v+1]=M.y,a[v+2]=M.z}function h(){let S=new J;for(let M=0;M<a.length;M+=3){S.x=a[M+0],S.y=a[M+1],S.z=a[M+2];let v=_(S)/2/Math.PI+.5,y=m(S)/Math.PI+.5;s.push(v,1-y)}f(),d()}function d(){for(let S=0;S<s.length;S+=6){let M=s[S+0],v=s[S+2],y=s[S+4],w=Math.max(M,v,y),g=Math.min(M,v,y);w>.9&&g<.1&&(M<.2&&(s[S+0]+=1),v<.2&&(s[S+2]+=1),y<.2&&(s[S+4]+=1))}}function c(S){a.push(S.x,S.y,S.z)}function p(S,M){let v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function f(){let S=new J,M=new J,v=new J,y=new J,w=new Ie,g=new Ie,b=new Ie;for(let R=0,N=0;R<a.length;R+=9,N+=6){S.set(a[R+0],a[R+1],a[R+2]),M.set(a[R+3],a[R+4],a[R+5]),v.set(a[R+6],a[R+7],a[R+8]),w.set(s[N+0],s[N+1]),g.set(s[N+2],s[N+3]),b.set(s[N+4],s[N+5]),y.copy(S).add(M).add(v).divideScalar(3);let L=_(y);x(w,N+0,S,L),x(g,N+2,M,L),x(b,N+4,v,L)}}function x(S,M,v,y){y<0&&S.x===1&&(s[M]=S.x-1),v.x===0&&v.z===0&&(s[M]=y/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hg(t.vertices,t.indices,t.radius,t.detail)}},Ur=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,n=i.length,a;t?a=t:a=e*i[n-1];let s=0,o=n-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-a,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===a)return r/(n-1);let u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let n=this.getPoint(i),a=this.getPoint(r),s=t||(n.isVector2?new Ie:new J);return s.copy(a).sub(n).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new J,r=[],n=[],a=[],s=new J,o=new kt;for(let c=0;c<=e;c++){let p=c/e;r[c]=this.getTangentAt(p,new J)}n[0]=new J,a[0]=new J;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],s),a[0].crossVectors(r[0],n[0]);for(let c=1;c<=e;c++){if(n[c]=n[c-1].clone(),a[c]=a[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(dt(r[c-1].dot(r[c]),-1,1));n[c].applyMatrix4(o.makeRotationAxis(s,p))}a[c].crossVectors(r[c],n[c])}if(t===!0){let c=Math.acos(dt(n[0].dot(n[e]),-1,1));c/=e,r[0].dot(s.crossVectors(n[0],n[e]))>0&&(c=-c);for(let p=1;p<=e;p++)n[p].applyMatrix4(o.makeRotationAxis(r[p],c*p)),a[p].crossVectors(r[p],n[p])}return{tangents:r,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Gc=class extends Ur{constructor(e=0,t=0,i=1,r=1,n=0,a=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Ie){let i=t,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(a?n=0:n=r),this.aClockwise===!0&&!a&&(n===r?n=-r:n=n-r);let s=this.aStartAngle+e*n,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,c=l-this.aY;o=d*u-c*h+this.aX,l=d*h+c*u+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wv=class extends Gc{constructor(e,t,i,r,n,a){super(e,t,i,i,r,n,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wc(){let e=0,t=0,i=0,r=0;function n(a,s,o,l){e=a,t=o,i=-3*a+3*s-2*o-l,r=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){n(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,h,d){let c=(s-a)/u-(o-a)/(u+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+d)+(l-o)/d;c*=h,p*=h,n(s,o,c,p)},calc:function(a){let s=a*a,o=s*a;return e+t*a+i*s+r*o}}}var zp=new J,Bp=new J,Xc=new Wc,qc=new Wc,jc=new Wc,_l=class extends Ur{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new J){let i=t,r=this.points,n=r.length,a=(n-(this.closed?0:1))*e,s=Math.floor(a),o=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/n)+1)*n:o===0&&s===n-1&&(s=n-2,o=1);let l,u;this.closed||s>0?l=r[(s-1)%n]:(Bp.subVectors(r[0],r[1]).add(r[0]),l=Bp);let h=r[s%n],d=r[(s+1)%n];if(this.closed||s+2<n?u=r[(s+2)%n]:(zp.subVectors(r[n-1],r[n-2]).add(r[n-1]),u=zp),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),c),f=Math.pow(h.distanceToSquared(d),c),x=Math.pow(d.distanceToSquared(u),c);f<1e-4&&(f=1),p<1e-4&&(p=f),x<1e-4&&(x=f),Xc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,f,x),qc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,f,x),jc.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,f,x)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),qc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),jc.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Xc.calc(o),qc.calc(o),jc.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new J().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kp(e,t,i,r,n){let a=(r-t)*.5,s=(n-i)*.5,o=e*e,l=e*o;return(2*i-2*r+a+s)*l+(-3*i+3*r-2*a-s)*o+a*e+i}function Xv(e,t){let i=1-e;return i*i*t}function qv(e,t){return 2*(1-e)*e*t}function jv(e,t){return e*e*t}function ks(e,t,i,r){return Xv(e,t)+qv(e,i)+jv(e,r)}function Yv(e,t){let i=1-e;return i*i*i*t}function Jv(e,t){let i=1-e;return 3*i*i*e*t}function Kv(e,t){return 3*(1-e)*e*e*t}function Zv(e,t){return e*e*e*t}function Vs(e,t,i,r,n){return Yv(e,t)+Jv(e,i)+Kv(e,r)+Zv(e,n)}var Vp=class extends Ur{constructor(e=new Ie,t=new Ie,i=new Ie,r=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ie){let i=t,r=this.v0,n=this.v1,a=this.v2,s=this.v3;return i.set(Vs(e,r.x,n.x,a.x,s.x),Vs(e,r.y,n.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$v=class extends Ur{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){let i=t,r=this.v0,n=this.v1,a=this.v2,s=this.v3;return i.set(Vs(e,r.x,n.x,a.x,s.x),Vs(e,r.y,n.y,a.y,s.y),Vs(e,r.z,n.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hp=class extends Ur{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yc=class extends Ur{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gp=class extends Ur{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){let i=t,r=this.v0,n=this.v1,a=this.v2;return i.set(ks(e,r.x,n.x,a.x),ks(e,r.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wp=class extends Ur{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,r=this.v0,n=this.v1,a=this.v2;return i.set(ks(e,r.x,n.x,a.x),ks(e,r.y,n.y,a.y),ks(e,r.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xp=class extends Ur{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let i=t,r=this.points,n=(r.length-1)*e,a=Math.floor(n),s=n-a,o=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(kp(s,o.x,l.x,u.x,h.x),kp(s,o.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Ie().fromArray(r))}return this}},xl=Object.freeze({__proto__:null,ArcCurve:Wv,CatmullRomCurve3:_l,CubicBezierCurve:Vp,CubicBezierCurve3:$v,EllipseCurve:Gc,LineCurve:Hp,LineCurve3:Yc,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:Wp,SplineCurve:Xp}),Qv=class extends Ur{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),n=0;for(;n<r.length;){if(r[n]>=i){let a=r[n]-i,s=this.curves[n],o=s.getLength(),l=o===0?0:1-a/o;return s.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,n=this.curves;r<n.length;r++){let a=n[r],s=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(s);for(let l=0;l<o.length;l++){let u=o[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new xl[r.type]().fromJSON(r))}return this.cacheLengths=null,this}},Jc=class extends Qv{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Hp(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let n=new Gp(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,a){let s=new Vp(this.currentPoint.clone(),new Ie(e,t),new Ie(i,r),new Ie(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,a){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,n,a),this}absarc(e,t,i,r,n,a){return this.absellipse(e,t,i,i,r,n,a),this}ellipse(e,t,i,r,n,a,s,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,n,a,s,o),this}absellipse(e,t,i,r,n,a,s,o){let l=new Gc(e,t,i,r,n,a,s,o);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Kc=class extends Jc{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Jc().fromJSON(r))}return this}};function e_(e,t,i=2){let r=t&&t.length,n=r?t[0]*i:e.length,a=qp(e,0,n,i,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,u;if(r&&(a=a_(e,t,a,i)),e.length>80*i){o=e[0],l=e[1];let h=o,d=l;for(let c=i;c<n;c+=i){let p=e[c],f=e[c+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>d&&(d=f)}u=Math.max(h-o,d-l),u=u!==0?32767/u:0}return Hs(a,s,i,o,l,u,0),s}function qp(e,t,i,r,n){let a;if(n===g_(e,t,i,r)>0)for(let s=t;s<i;s+=r)a=Kp(s/r|0,e[s],e[s+1],a);else for(let s=i-r;s>=t;s-=r)a=Kp(s/r|0,e[s],e[s+1],a);return a&&Wa(a,a.next)&&(Xs(a),a=a.next),a}function aa(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Wa(i,i.next)||Yt(i.prev,i,i.next)===0)){if(Xs(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Hs(e,t,i,r,n,a,s){if(!e)return;!s&&a&&c_(e,r,n,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,u=e.next;if(a?i_(e,r,n,a):t_(e)){t.push(l.i,e.i,u.i),Xs(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=r_(aa(e),t),Hs(e,t,i,r,n,a,2)):s===2&&n_(e,t,i,r,n,a):Hs(aa(e),t,i,r,n,a,1);break}}}function t_(e){let t=e.prev,i=e,r=e.next;if(Yt(t,i,r)>=0)return!1;let n=t.x,a=i.x,s=r.x,o=t.y,l=i.y,u=r.y,h=Math.min(n,a,s),d=Math.min(o,l,u),c=Math.max(n,a,s),p=Math.max(o,l,u),f=r.next;for(;f!==t;){if(f.x>=h&&f.x<=c&&f.y>=d&&f.y<=p&&Gs(n,o,a,l,s,u,f.x,f.y)&&Yt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function i_(e,t,i,r){let n=e.prev,a=e,s=e.next;if(Yt(n,a,s)>=0)return!1;let o=n.x,l=a.x,u=s.x,h=n.y,d=a.y,c=s.y,p=Math.min(o,l,u),f=Math.min(h,d,c),x=Math.max(o,l,u),_=Math.max(h,d,c),m=Zc(p,f,t,i,r),S=Zc(x,_,t,i,r),M=e.prevZ,v=e.nextZ;for(;M&&M.z>=m&&v&&v.z<=S;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=_&&M!==n&&M!==s&&Gs(o,h,l,d,u,c,M.x,M.y)&&Yt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=x&&v.y>=f&&v.y<=_&&v!==n&&v!==s&&Gs(o,h,l,d,u,c,v.x,v.y)&&Yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=x&&M.y>=f&&M.y<=_&&M!==n&&M!==s&&Gs(o,h,l,d,u,c,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=f&&v.y<=_&&v!==n&&v!==s&&Gs(o,h,l,d,u,c,v.x,v.y)&&Yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function r_(e,t){let i=e;do{let r=i.prev,n=i.next.next;!Wa(r,n)&&Yp(r,i,i.next,n)&&Ws(r,n)&&Ws(n,r)&&(t.push(r.i,i.i,n.i),Xs(i),Xs(i.next),i=e=n),i=i.next}while(i!==e);return aa(i)}function n_(e,t,i,r,n,a){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&p_(s,o)){let l=Jp(s,o);s=aa(s,s.next),l=aa(l,l.next),Hs(s,t,i,r,n,a,0),Hs(l,t,i,r,n,a,0);return}o=o.next}s=s.next}while(s!==e)}function a_(e,t,i,r){let n=[];for(let a=0,s=t.length;a<s;a++){let o=t[a]*r,l=a<s-1?t[a+1]*r:e.length,u=qp(e,o,l,r,!1);u===u.next&&(u.steiner=!0),n.push(d_(u))}n.sort(s_);for(let a=0;a<n.length;a++)i=o_(n[a],i);return i}function s_(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),n=(t.next.y-t.y)/(t.next.x-t.x);i=r-n}return i}function o_(e,t){let i=l_(e,t);if(!i)return t;let r=Jp(i,e);return aa(r,r.next),aa(i,i.next)}function l_(e,t){let i=t,r=e.x,n=e.y,a=-1/0,s;if(Wa(e,i))return i;do{if(Wa(e,i.next))return i.next;if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>a&&(a=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,u=s.y,h=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&jp(n<u?r:a,n,l,u,n<u?a:r,n,i.x,i.y)){let d=Math.abs(n-i.y)/(r-i.x);Ws(i,e)&&(d<h||d===h&&(i.x>s.x||i.x===s.x&&u_(s,i)))&&(s=i,h=d)}i=i.next}while(i!==o);return s}function u_(e,t){return Yt(e.prev,e,t.prev)<0&&Yt(t.next,e,e.next)<0}function c_(e,t,i,r){let n=e;do n.z===0&&(n.z=Zc(n.x,n.y,t,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,h_(n)}function h_(e){let t,i=1;do{let r=e,n;e=null;let a=null;for(t=0;r;){t++;let s=r,o=0;for(let u=0;u<i&&(o++,s=s.nextZ,!!s);u++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(n=r,r=r.nextZ,o--):(n=s,s=s.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=s}a.nextZ=null,i*=2}while(t>1);return e}function Zc(e,t,i,r,n){return e=(e-i)*n|0,t=(t-r)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function d_(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function jp(e,t,i,r,n,a,s,o){return(n-s)*(t-o)>=(e-s)*(a-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(a-o)>=(n-s)*(r-o)}function Gs(e,t,i,r,n,a,s,o){return!(e===s&&t===o)&&jp(e,t,i,r,n,a,s,o)}function p_(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!f_(e,t)&&(Ws(e,t)&&Ws(t,e)&&m_(e,t)&&(Yt(e.prev,e,t.prev)||Yt(e,t.prev,t))||Wa(e,t)&&Yt(e.prev,e,e.next)>0&&Yt(t.prev,t,t.next)>0)}function Yt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Wa(e,t){return e.x===t.x&&e.y===t.y}function Yp(e,t,i,r){let n=Ml(Yt(e,t,i)),a=Ml(Yt(e,t,r)),s=Ml(Yt(i,r,e)),o=Ml(Yt(i,r,t));return!!(n!==a&&s!==o||n===0&&yl(e,i,t)||a===0&&yl(e,r,t)||s===0&&yl(i,e,r)||o===0&&yl(i,t,r))}function yl(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Ml(e){return e>0?1:e<0?-1:0}function f_(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Yp(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Ws(e,t){return Yt(e.prev,e,e.next)<0?Yt(e,t,e.next)>=0&&Yt(e,e.prev,t)>=0:Yt(e,t,e.prev)<0||Yt(e,e.next,t)<0}function m_(e,t){let i=e,r=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&n<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Jp(e,t){let i=$c(e.i,e.x,e.y),r=$c(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,a.next=r,r.prev=a,r}function Kp(e,t,i,r){let n=$c(e,t,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Xs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $c(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function g_(e,t,i,r){let n=0;for(let a=t,s=i-r;a<i;a+=r)n+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return n}var v_=class{static triangulate(e,t,i=2){return e_(e,t,i)}},Sl=class dg{static area(t){let i=t.length,r=0;for(let n=i-1,a=0;a<i;n=a++)r+=t[n].x*t[a].y-t[a].x*t[n].y;return r*.5}static isClockWise(t){return dg.area(t)<0}static triangulateShape(t,i){let r=[],n=[],a=[];Zp(t),$p(r,t);let s=t.length;i.forEach(Zp);for(let l=0;l<i.length;l++)n.push(s),s+=i[l].length,$p(r,i[l]);let o=v_.triangulate(r,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Zp(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function $p(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Qp=class pg extends gr{constructor(t=new Kc([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,n=[],a=[];for(let o=0,l=t.length;o<l;o++){let u=t[o];s(u)}this.setAttribute("position",new oi(n,3)),this.setAttribute("uv",new oi(a,2)),this.computeVertexNormals();function s(o){let l=[],u=i.curveSegments!==void 0?i.curveSegments:12,h=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,f=i.bevelSize!==void 0?i.bevelSize:p-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,_=i.bevelSegments!==void 0?i.bevelSegments:3,m=i.extrudePath,S=i.UVGenerator!==void 0?i.UVGenerator:__,M,v=!1,y,w,g,b;if(m){M=m.getSpacedPoints(h),v=!0,c=!1;let ve=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,ve),w=new J,g=new J,b=new J}c||(_=0,p=0,f=0,x=0);let R=o.extractPoints(u),N=R.shape,L=R.holes;if(!Sl.isClockWise(N)){N=N.reverse();for(let ve=0,Te=L.length;ve<Te;ve++){let Me=L[ve];Sl.isClockWise(Me)&&(L[ve]=Me.reverse())}}function k(ve){let Te=10000000000000001e-36,Me=ve[0];for(let B=1;B<=ve.length;B++){let we=B%ve.length,Fe=ve[we],ye=Fe.x-Me.x,Ve=Fe.y-Me.y,je=ye*ye+Ve*Ve,$e=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Me.x),Math.abs(Me.y)),W=Te*$e*$e;if(je<=W){ve.splice(we,1),B--;continue}Me=Fe}}k(N),L.forEach(k);let K=L.length,C=N;for(let ve=0;ve<K;ve++){let Te=L[ve];N=N.concat(Te)}function O(ve,Te,Me){return Te||rt("ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Te,Me)}let H=N.length;function F(ve,Te,Me){let B,we,Fe,ye=ve.x-Te.x,Ve=ve.y-Te.y,je=Me.x-ve.x,$e=Me.y-ve.y,W=ye*ye+Ve*Ve,st=ye*$e-Ve*je;if(Math.abs(st)>Number.EPSILON){let Ke=Math.sqrt(W),Qe=Math.sqrt(je*je+$e*$e),Ae=Te.x-Ve/Ke,it=Te.y+ye/Ke,He=Me.x-$e/Qe,Xe=Me.y+je/Qe,_e=((He-Ae)*$e-(Xe-it)*je)/(ye*$e-Ve*je);B=Ae+ye*_e-ve.x,we=it+Ve*_e-ve.y;let E=B*B+we*we;if(E<=2)return new Ie(B,we);Fe=Math.sqrt(E/2)}else{let Ke=!1;ye>Number.EPSILON?je>Number.EPSILON&&(Ke=!0):ye<-Number.EPSILON?je<-Number.EPSILON&&(Ke=!0):Math.sign(Ve)===Math.sign($e)&&(Ke=!0),Ke?(B=-Ve,we=ye,Fe=Math.sqrt(W)):(B=ye,we=Ve,Fe=Math.sqrt(W/2))}return new Ie(B/Fe,we/Fe)}let de=[];for(let ve=0,Te=C.length,Me=Te-1,B=ve+1;ve<Te;ve++,Me++,B++)Me===Te&&(Me=0),B===Te&&(B=0),de[ve]=F(C[ve],C[Me],C[B]);let P=[],$,ge=de.concat();for(let ve=0,Te=K;ve<Te;ve++){let Me=L[ve];$=[];for(let B=0,we=Me.length,Fe=we-1,ye=B+1;B<we;B++,Fe++,ye++)Fe===we&&(Fe=0),ye===we&&(ye=0),$[B]=F(Me[B],Me[Fe],Me[ye]);P.push($),ge=ge.concat($)}let Re;if(_===0)Re=Sl.triangulateShape(C,L);else{let ve=[],Te=[];for(let Me=0;Me<_;Me++){let B=Me/_,we=p*Math.cos(B*Math.PI/2),Fe=f*Math.sin(B*Math.PI/2)+x;for(let ye=0,Ve=C.length;ye<Ve;ye++){let je=O(C[ye],de[ye],Fe);xe(je.x,je.y,-we),B===0&&ve.push(je)}for(let ye=0,Ve=K;ye<Ve;ye++){let je=L[ye];$=P[ye];let $e=[];for(let W=0,st=je.length;W<st;W++){let Ke=O(je[W],$[W],Fe);xe(Ke.x,Ke.y,-we),B===0&&$e.push(Ke)}B===0&&Te.push($e)}}Re=Sl.triangulateShape(ve,Te)}let ae=Re.length,pe=f+x;for(let ve=0;ve<H;ve++){let Te=c?O(N[ve],ge[ve],pe):N[ve];v?(g.copy(y.normals[0]).multiplyScalar(Te.x),w.copy(y.binormals[0]).multiplyScalar(Te.y),b.copy(M[0]).add(g).add(w),xe(b.x,b.y,b.z)):xe(Te.x,Te.y,0)}for(let ve=1;ve<=h;ve++)for(let Te=0;Te<H;Te++){let Me=c?O(N[Te],ge[Te],pe):N[Te];v?(g.copy(y.normals[ve]).multiplyScalar(Me.x),w.copy(y.binormals[ve]).multiplyScalar(Me.y),b.copy(M[ve]).add(g).add(w),xe(b.x,b.y,b.z)):xe(Me.x,Me.y,d/h*ve)}for(let ve=_-1;ve>=0;ve--){let Te=ve/_,Me=p*Math.cos(Te*Math.PI/2),B=f*Math.sin(Te*Math.PI/2)+x;for(let we=0,Fe=C.length;we<Fe;we++){let ye=O(C[we],de[we],B);xe(ye.x,ye.y,d+Me)}for(let we=0,Fe=L.length;we<Fe;we++){let ye=L[we];$=P[we];for(let Ve=0,je=ye.length;Ve<je;Ve++){let $e=O(ye[Ve],$[Ve],B);v?xe($e.x,$e.y+M[h-1].y,M[h-1].x+Me):xe($e.x,$e.y,d+Me)}}}Ee(),be();function Ee(){let ve=n.length/3;if(c){let Te=0,Me=H*Te;for(let B=0;B<ae;B++){let we=Re[B];Be(we[2]+Me,we[1]+Me,we[0]+Me)}Te=h+_*2,Me=H*Te;for(let B=0;B<ae;B++){let we=Re[B];Be(we[0]+Me,we[1]+Me,we[2]+Me)}}else{for(let Te=0;Te<ae;Te++){let Me=Re[Te];Be(Me[2],Me[1],Me[0])}for(let Te=0;Te<ae;Te++){let Me=Re[Te];Be(Me[0]+H*h,Me[1]+H*h,Me[2]+H*h)}}r.addGroup(ve,n.length/3-ve,0)}function be(){let ve=n.length/3,Te=0;Le(C,Te),Te+=C.length;for(let Me=0,B=L.length;Me<B;Me++){let we=L[Me];Le(we,Te),Te+=we.length}r.addGroup(ve,n.length/3-ve,1)}function Le(ve,Te){let Me=ve.length;for(;--Me>=0;){let B=Me,we=Me-1;we<0&&(we=ve.length-1);for(let Fe=0,ye=h+_*2;Fe<ye;Fe++){let Ve=H*Fe,je=H*(Fe+1),$e=Te+B+Ve,W=Te+we+Ve,st=Te+we+je,Ke=Te+B+je;ke($e,W,st,Ke)}}}function xe(ve,Te,Me){l.push(ve),l.push(Te),l.push(Me)}function Be(ve,Te,Me){fe(ve),fe(Te),fe(Me);let B=n.length/3,we=S.generateTopUV(r,n,B-3,B-2,B-1);Ne(we[0]),Ne(we[1]),Ne(we[2])}function ke(ve,Te,Me,B){fe(ve),fe(Te),fe(B),fe(Te),fe(Me),fe(B);let we=n.length/3,Fe=S.generateSideWallUV(r,n,we-6,we-3,we-2,we-1);Ne(Fe[0]),Ne(Fe[1]),Ne(Fe[3]),Ne(Fe[1]),Ne(Fe[2]),Ne(Fe[3])}function fe(ve){n.push(l[ve*3+0]),n.push(l[ve*3+1]),n.push(l[ve*3+2])}function Ne(ve){a.push(ve.x),a.push(ve.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return x_(i,r,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let o=i[t.shapes[a]];r.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new xl[n.type]().fromJSON(n)),new pg(r,t.options)}},__={generateTopUV:function(e,t,i,r,n){let a=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],u=t[n*3],h=t[n*3+1];return[new Ie(a,s),new Ie(o,l),new Ie(u,h)]},generateSideWallUV:function(e,t,i,r,n,a){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],u=t[r*3],h=t[r*3+1],d=t[r*3+2],c=t[n*3],p=t[n*3+1],f=t[n*3+2],x=t[a*3],_=t[a*3+1],m=t[a*3+2];return Math.abs(o-h)<Math.abs(s-u)?[new Ie(s,1-l),new Ie(u,1-d),new Ie(c,1-f),new Ie(x,1-m)]:[new Ie(o,1-l),new Ie(h,1-d),new Ie(p,1-f),new Ie(_,1-m)]}};function x_(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let a=e[r];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Qc=class fg extends Gv{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,n=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new fg(t.radius,t.detail)}},Xa=class mg extends gr{constructor(t=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:n};let a=t/2,s=i/2,o=Math.floor(r),l=Math.floor(n),u=o+1,h=l+1,d=t/o,c=i/l,p=[],f=[],x=[],_=[];for(let m=0;m<h;m++){let S=m*c-s;for(let M=0;M<u;M++){let v=M*d-a;f.push(v,-S,0),x.push(0,0,1),_.push(M/o),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let M=S+u*m,v=S+u*(m+1),y=S+1+u*(m+1),w=S+1+u*m;p.push(M,v,w),p.push(v,y,w)}this.setIndex(p),this.setAttribute("position",new oi(f,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mg(t.width,t.height,t.widthSegments,t.heightSegments)}},ef=class gg extends gr{constructor(t=1,i=32,r=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),u=0,h=[],d=new J,c=new J,p=[],f=[],x=[],_=[];for(let m=0;m<=r;m++){let S=[],M=m/r,v=s+M*o,y=t*Math.cos(v),w=Math.sqrt(t*t-y*y),g=0;m===0&&s===0?g=.5/i:m===r&&l===Math.PI&&(g=-.5/i);for(let b=0;b<=i;b++){let R=b/i,N=n+R*a;d.x=-w*Math.cos(N),d.y=y,d.z=w*Math.sin(N),f.push(d.x,d.y,d.z),c.copy(d).normalize(),x.push(c.x,c.y,c.z),_.push(R+g,1-M),S.push(u++)}h.push(S)}for(let m=0;m<r;m++)for(let S=0;S<i;S++){let M=h[m][S+1],v=h[m][S],y=h[m+1][S],w=h[m+1][S+1];(m!==0||s>0)&&p.push(M,v,w),(m!==r-1||l<Math.PI)&&p.push(v,y,w)}this.setIndex(p),this.setAttribute("position",new oi(f,3)),this.setAttribute("normal",new oi(x,3)),this.setAttribute("uv",new oi(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gg(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},eh=class vg extends gr{constructor(t=new Wp(new J(-1,-1,0),new J(-1,1,0),new J(1,1,0)),i=64,r=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:n,closed:a};let s=t.computeFrenetFrames(i,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new J,l=new J,u=new Ie,h=new J,d=[],c=[],p=[],f=[];x(),this.setIndex(f),this.setAttribute("position",new oi(d,3)),this.setAttribute("normal",new oi(c,3)),this.setAttribute("uv",new oi(p,2));function x(){for(let M=0;M<i;M++)_(M);_(a===!1?i:0),S(),m()}function _(M){h=t.getPointAt(M/i,h);let v=s.normals[M],y=s.binormals[M];for(let w=0;w<=n;w++){let g=w/n*Math.PI*2,b=Math.sin(g),R=-Math.cos(g);l.x=R*v.x+b*y.x,l.y=R*v.y+b*y.y,l.z=R*v.z+b*y.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=h.x+r*l.x,o.y=h.y+r*l.y,o.z=h.z+r*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=i;M++)for(let v=1;v<=n;v++){let y=(n+1)*(M-1)+(v-1),w=(n+1)*M+(v-1),g=(n+1)*M+v,b=(n+1)*(M-1)+v;f.push(y,w,b),f.push(w,g,b)}}function S(){for(let M=0;M<=i;M++)for(let v=0;v<=n;v++)u.x=M/i,u.y=v/n,p.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vg(new xl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function qa(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(tf(n))n.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=n.clone();else if(Array.isArray(n))if(tf(n[0])){let a=[];for(let s=0,o=n.length;s<o;s++)a[s]=n[s].clone();t[i][r]=a}else t[i][r]=n.slice();else t[i][r]=n}}return t}function Ui(e){let t={};for(let i=0;i<e.length;i++){let r=qa(e[i]);for(let n in r)t[n]=r[n]}return t}function tf(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function y_(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function rf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Mt.workingColorSpace}var M_={clone:qa,merge:Ui},S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qa(e.uniforms),this.uniformsGroups=y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new at().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"v3":this.uniforms[i].value=new J().fromArray(r.value);break;case"v4":this.uniforms[i].value=new qt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new kt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},b_=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tl=class extends ia{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},th=class extends Tl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ra('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ra('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},w_=class extends ia{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Au,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},E_=class extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},A_=class extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ja(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function bl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var qs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let a;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(n=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=n)){let s=t[1];e<s&&(i=2,n=s);for(let o=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=n,n=t[--i-1],e>=n)break e}a=i,i=0;break t}break i}for(;i<a;){let s=i+a>>>1;e<t[s]?a=s:i=s+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let a=0;a!==r;++a)t[a]=i[n+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},R_=class extends qs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vd,endingEnd:Vd}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,a=e+1,s=r[n],o=r[a];if(s===void 0)switch(this.getSettings_().endingStart){case Hd:n=e,s=2*t-i;break;case Gd:n=r.length-2,s=t+r[n]-r[n+1];break;default:n=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Hd:a=e,o=2*i-t;break;case Gd:a=1,o=i+r[1]-r[0];break;default:a=e-1,o=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=n*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-t)/(r-t),f=p*p,x=f*p,_=-d*x+2*d*f-d*p,m=(1+d)*x+(-1.5-2*d)*f+(-.5+d)*p+1,S=(-1-c)*x+(1.5+c)*f+.5*p,M=c*x-c*f;for(let v=0;v!==s;++v)n[v]=_*a[u+v]+m*a[l+v]+S*a[o+v]+M*a[h+v];return n}},P_=class extends qs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==s;++d)n[d]=a[l+d]*h+a[o+d]*u;return n}},C_=class extends qs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},L_=class extends qs{interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(r-t),f=1-p;for(let x=0;x!==s;++x)n[x]=a[l+x]*f+a[o+x]*p;return n}let d=s*2,c=e-1;for(let p=0;p!==s;++p){let f=a[l+p],x=a[o+p],_=c*d+p*2,m=h[_],S=h[_+1],M=e*d+p*2,v=u[M],y=u[M+1],w=D_(i,t,m,v,r);n[p]=nf(w,f,S,y,x)}return n}};function nf(e,t,i,r,n){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*r+e*e*e*n}function I_(e,t,i,r,n){let a=1-e;return 3*a*a*(i-t)+6*a*e*(r-i)+3*e*e*(n-r)}function D_(e,t,i,r,n){let a=(e-t)/(n-t);for(let s=0;s<8;s++){let o=nf(a,t,i,r,n)-e;if(Math.abs(o)<1e-10)break;let l=I_(a,t,i,r,n);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Vr=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),bl(e.settings)&&(i.settings={inTangents:ja(e.settings.inTangents,Array),outTangents:ja(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new C_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new P_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new R_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new L_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wo:t=this.InterpolantFactoryMethodDiscrete;break;case gc:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break;case kd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return tt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return gc;case this.InterpolantFactoryMethodSmooth:return vc;case this.InterpolantFactoryMethodBezier:return kd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;bl(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;bl(this.settings)&&(sf(this.settings.inTangents,e),sf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,n=0,a=r-1;for(;n!==r&&i[n]<e;)++n;for(;a!==-1&&i[a]>t;)--a;if(++a,n!==0||a!==r){n>=a&&(a=Math.max(a,1),n=a-1);let s=this.getValueSize();this.times=i.slice(n,a),this.values=this.values.slice(n*s,a*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,n=i.length;n===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==n;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){rt("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(a!==null&&a>o){rt("KeyframeTrack: Out of order keys.",this,s,o,a),e=!1;break}a=o}if(r!==void 0&&Qg(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){rt("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===vc,n=e.length-1,a=1;for(let s=1;s<n;++s){let o=!1,l=e[s],u=e[s+1];if(l!==u&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,d=h-i,c=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[c+p]){o=!0;break}}}if(o){if(s!==a){e[a]=e[s];let h=s*i,d=a*i;for(let c=0;c!==i;++c)t[d+c]=t[h+c]}++a}}if(n>0){e[a]=e[n];for(let s=n*i,o=a*i,l=0;l!==i;++l)t[o+l]=t[s+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,bl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function af(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function sf(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Vr.prototype.ValueTypeName="",Vr.prototype.TimeBufferType=Float32Array,Vr.prototype.ValueBufferType=Float32Array,Vr.prototype.DefaultInterpolation=gc;var js=class extends Vr{constructor(e,t,i){super(e,t,i)}};js.prototype.ValueTypeName="bool",js.prototype.ValueBufferType=Array,js.prototype.DefaultInterpolation=Wo,js.prototype.InterpolantFactoryMethodLinear=void 0,js.prototype.InterpolantFactoryMethodSmooth=void 0;var N_=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}};N_.prototype.ValueTypeName="color";var U_=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}};U_.prototype.ValueTypeName="number";var O_=class extends qs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let u=l+s;l!==u;l+=4)rn.slerpFlat(n,0,a,l-s,a,l,o);return n}},of=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new O_(this.times,this.values,this.getValueSize(),e)}};of.prototype.ValueTypeName="quaternion",of.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends Vr{constructor(e,t,i){super(e,t,i)}};Ys.prototype.ValueTypeName="string",Ys.prototype.ValueBufferType=Array,Ys.prototype.DefaultInterpolation=Wo,Ys.prototype.InterpolantFactoryMethodLinear=void 0,Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var F_=class extends Vr{constructor(e,t,i,r){super(e,t,i,r)}};F_.prototype.ValueTypeName="vector";var z_=class{constructor(e,t,i){let r=this,n=!1,a=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){s++,n===!1&&r.onStart!==void 0&&r.onStart(u,a,s),n=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,s),a===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let c=l[h],p=l[h+1];if(c.global&&(c.lastIndex=0),c.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},B_=new z_,k_=class{constructor(e){this.manager=e!==void 0?e:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};k_.DEFAULT_MATERIAL_NAME="__DEFAULT";var ih=class extends Ni{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},rh=new kt,lf=new J,uf=new J,cf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rh,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,a=r?r.z/n.x:1,s=r?r.w/n.y:1,o=r?r.x/n.x:0,l=r?r.y/n.y:0;e.coordinateSystem===Rs||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wl=new J,El=new rn,Hr=new J,hf=class extends Ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wl,El,Hr),Hr.x===1&&Hr.y===1&&Hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,El,Hr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(wl,El,Hr),Hr.x===1&&Hr.y===1&&Hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,El,Hr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},An=new J,df=new Ie,pf=new Ie,vr=class extends hf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,df,pf),t.subVectors(pf,df)}setViewOffset(e,t,i,r,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;n+=a.offsetX*r/o,t-=a.offsetY*i/l,r*=a.width/o,i*=a.height/l}let s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},V_=class extends cf{constructor(){super(new vr(90,1,.5,500)),this.isPointLightShadow=!0}},nh=class extends ih{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ff=class extends hf{constructor(e=-1,t=1,i=1,r=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,a=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,a=n+l*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},H_=class extends cf{constructor(){super(new ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mf=class extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ni.DEFAULT_UP),this.updateMatrix(),this.target=new Ni,this.shadow=new H_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},gf=class extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Ya=-90,Ja=1,ah=class extends Ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vr(Ya,Ja,e,t);r.layers=this.layers,this.add(r);let n=new vr(Ya,Ja,e,t);n.layers=this.layers,this.add(n);let a=new vr(Ya,Ja,e,t);a.layers=this.layers,this.add(a);let s=new vr(Ya,Ja,e,t);s.layers=this.layers,this.add(s);let o=new vr(Ya,Ja,e,t);o.layers=this.layers,this.add(o);let l=new vr(Ya,Ja,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,a,s,o]=t;for(let l of t)this.remove(l);if(e===Cr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[n,a,s,o,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let f=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=f,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},G_=class extends vr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},sh="\\[\\]\\.:\\/",W_=new RegExp("["+sh+"]","g"),oh="[^"+sh+"]",X_="[^"+sh.replace("\\.","")+"]",q_=/((?:WC+[\/:])*)/.source.replace("WC",oh),j_=/(WCOD+)?/.source.replace("WCOD",X_),Y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),K_=new RegExp("^"+q_+j_+Y_+J_+"$"),Z_=["material","materials","bones","map"],$_=class{constructor(e,t,i){let r=i||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Qt=class Ss{constructor(t,i,r){this.path=i,this.parsedPath=r||Ss.parseTrackName(i),this.node=Ss.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Ss.Composite(t,i,r):new Ss(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(W_,"")}static parseTrackName(t){let i=K_.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=r.nodeName.substring(n+1);Z_.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},n=r(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)t[i++]=r[n]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,n=i.propertyName,a=i.propertyIndex;if(t||(t=Ss.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[n];if(s===void 0){let u=i.nodeName;rt("PropertyBinding: Trying to update property for track: "+u+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=$_,Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray],Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iw=new Float32Array(1),vf=class{constructor(t,i,r,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,n){let a=this.elements;return a[0]=t,a[2]=i,a[1]=r,a[3]=n,this}};vf.prototype.isMatrix2=!0;var nw=vf;function _f(e,t,i,r){let n=Q_(r);switch(i){case zd:return e*t;case Ou:return e*t/n.components*n.byteLength;case Fu:return e*t/n.components*n.byteLength;case Yn:return e*t*2/n.components*n.byteLength;case zu:return e*t*2/n.components*n.byteLength;case Bd:return e*t*3/n.components*n.byteLength;case Br:return e*t*4/n.components*n.byteLength;case Bu:return e*t*4/n.components*n.byteLength;case zo:case Bo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ko:case Vo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Vu:case Gu:return Math.max(e,16)*Math.max(t,8)/4;case ku:case Hu:return Math.max(e,8)*Math.max(t,8)/2;case Wu:case Xu:case ju:case Yu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case qu:case Ho:case Ju:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ku:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case $u:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ec:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case cc:case hc:case dc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case pc:case fc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Go:case mc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Q_(e){switch(e){case Qi:case Nd:return{byteLength:1,components:1};case As:case Ud:case zr:return{byteLength:2,components:1};case Nu:case Uu:return{byteLength:2,components:4};case Fr:case Du:case Pr:return{byteLength:4,components:1};case Od:case Fd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}})),typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function xf(){let e=null,t=!1,i=null,r=null;function n(a,s){r=e.requestAnimationFrame(n),i(a,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(n),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function e1(e){let t=new WeakMap;function i(o,l){let u=o.array,h=o.usage,d=u.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=e.SHORT;else if(u instanceof Uint32Array)p=e.UNSIGNED_INT;else if(u instanceof Int32Array)p=e.INT;else if(u instanceof Int8Array)p=e.BYTE;else if(u instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,u){let h=l.array,d=l.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,h);else{d.sort((p,f)=>p.start-f.start);let c=0;for(let p=1;p<d.length;p++){let f=d[c],x=d[p];x.start<=f.start+f.count+1?f.count=Math.max(f.count,x.start+x.count-f.start):(++c,d[c]=x)}d.length=c+1;for(let p=0,f=d.length;p<f;p++){let x=d[p];e.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,i(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,o,l),u.version=o.version}}return{get:n,remove:a,update:s}}var t1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i1=`#ifdef USE_ALPHAHASH
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
#endif`,r1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
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
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u1=`#ifdef USE_BATCHING
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
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f1=`#ifdef USE_IRIDESCENCE
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
#endif`,m1=`#ifdef USE_BUMPMAP
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,b1=`#define PI 3.141592653589793
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
} // validated`,w1=`vec3 transformedNormal = objectNormal;
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
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",L1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V1=`#ifdef USE_GRADIENTMAP
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
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,q1=`#ifdef USE_ENVMAP
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
#endif`,j1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
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
#endif`,$1=`uniform sampler2D dfgLUT;
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
}`,Q1=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
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
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform float backgroundBlurriness;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
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
}`,oy=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
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
}`,py=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,vy=`#define LAMBERT
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
}`,_y=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,yy=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,Ty=`#define PHONG
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
}`,by=`#define STANDARD
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
}`,wy=`#define STANDARD
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
}`,Ey=`#define TOON
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
}`,Ay=`#define TOON
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
}`,Ry=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Iy=`uniform float rotation;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:t1,alphahash_pars_fragment:i1,alphamap_fragment:r1,alphamap_pars_fragment:n1,alphatest_fragment:a1,alphatest_pars_fragment:s1,aomap_fragment:o1,aomap_pars_fragment:l1,batching_pars_vertex:u1,batching_vertex:c1,begin_vertex:h1,beginnormal_vertex:d1,bsdfs:p1,iridescence_fragment:f1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:v1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:x1,color_fragment:y1,color_pars_fragment:M1,color_pars_vertex:S1,color_vertex:T1,common:b1,defaultnormal_vertex:w1,displacementmap_pars_vertex:E1,displacementmap_vertex:A1,emissivemap_fragment:R1,emissivemap_pars_fragment:P1,colorspace_fragment:C1,colorspace_pars_fragment:L1,envmap_fragment:I1,envmap_common_pars_fragment:D1,envmap_pars_fragment:N1,envmap_pars_vertex:U1,envmap_physical_pars_fragment:q1,envmap_vertex:O1,fog_vertex:F1,fog_pars_vertex:z1,fog_fragment:B1,fog_pars_fragment:k1,gradientmap_pars_fragment:V1,lightmap_pars_fragment:H1,lights_lambert_fragment:G1,lights_lambert_pars_fragment:W1,lights_pars_begin:X1,lights_toon_fragment:j1,lights_toon_pars_fragment:Y1,lights_phong_fragment:J1,lights_phong_pars_fragment:K1,lights_physical_fragment:Z1,lights_physical_pars_fragment:$1,lights_fragment_begin:Q1,lights_fragment_maps:ex,lights_fragment_end:tx,lightprobes_pars_fragment:ix,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:sx,map_fragment:ox,map_pars_fragment:lx,map_particle_fragment:ux,map_particle_pars_fragment:cx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:dx,morphinstance_vertex:px,morphcolor_vertex:fx,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:vx,normal_fragment_begin:_x,normal_fragment_maps:xx,normal_pars_fragment:yx,normal_pars_vertex:Mx,normal_vertex:Sx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Ax,opaque_fragment:Rx,packing:Px,premultiplied_alpha_fragment:Cx,project_vertex:Lx,dithering_fragment:Ix,dithering_pars_fragment:Dx,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Fx,shadowmap_vertex:zx,shadowmask_pars_fragment:Bx,skinbase_vertex:kx,skinning_pars_vertex:Vx,skinning_vertex:Hx,skinnormal_vertex:Gx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:qx,tonemapping_pars_fragment:jx,transmission_fragment:Yx,transmission_pars_fragment:Jx,uv_pars_fragment:Kx,uv_pars_vertex:Zx,uv_vertex:$x,worldpos_vertex:Qx,background_vert:ey,background_frag:ty,backgroundCube_vert:iy,backgroundCube_frag:ry,cube_vert:ny,cube_frag:ay,depth_vert:sy,depth_frag:oy,distance_vert:ly,distance_frag:uy,equirect_vert:cy,equirect_frag:hy,linedashed_vert:dy,linedashed_frag:py,meshbasic_vert:fy,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:vy,meshmatcap_vert:_y,meshmatcap_frag:xy,meshnormal_vert:yy,meshnormal_frag:My,meshphong_vert:Sy,meshphong_frag:Ty,meshphysical_vert:by,meshphysical_frag:wy,meshtoon_vert:Ey,meshtoon_frag:Ay,points_vert:Ry,points_frag:Py,shadow_vert:Cy,shadow_frag:Ly,sprite_vert:Iy,sprite_frag:Dy},Oe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Gr={basic:{uniforms:Ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Ui([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Ui([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Ui([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Ui([Oe.points,Oe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Ui([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Ui([Oe.common,Oe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Ui([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Ui([Oe.sprite,Oe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Ui([Oe.common,Oe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Ui([Oe.lights,Oe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gr.physical={uniforms:Ui([Gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Al={r:0,b:0,g:0},Ny=new kt,yf=new lt;yf.set(-1,0,0,0,1,0,0,0,1);function Uy(e,t,i,r,n,a){let s=new at(0),o=n===!0?0:1,l,u,h=null,d=0,c=null;function p(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=t.get(M,v)}return M}function f(S){let M=!1,v=p(S);v===null?_(s,o):v&&v.isColor&&(_(v,1),M=!0);let y=e.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(S,M){let v=p(M);v&&v.isCubeTexture?(u===void 0&&(u=new Nt(new Ga(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:qa(Gr.backgroundCube.uniforms),vertexShader:Gr.backgroundCube.vertexShader,fragmentShader:Gr.backgroundCube.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(yf),u.material.toneMapped=Mt.getTransfer(v.colorSpace)!==It,(h!==v||d!==v.version||c!==e.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,c=e.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new Xa(2,2),new cn({name:"BackgroundMaterial",uniforms:qa(Gr.background.uniforms),vertexShader:Gr.background.vertexShader,fragmentShader:Gr.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(v.colorSpace)!==It,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,c=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function _(S,M){S.getRGB(Al,rf(e)),i.buffers.color.setClear(Al.r,Al.g,Al.b,M,a)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,M=1){s.set(S),o=M,_(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,_(s,o)},render:f,addToRenderList:x,dispose:m}}function Oy(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=c(null),a=n,s=!1;function o(L,k,K,C,O){let H=!1,F=d(L,C,K,k);a!==F&&(a=F,u(a.object)),H=p(L,C,K,O),H&&f(L,C,K,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,v(L,k,K,C),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function u(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function d(L,k,K,C){let O=C.wireframe===!0,H=r[k.id];H===void 0&&(H={},r[k.id]=H);let F=L.isInstancedMesh===!0?L.id:0,de=H[F];de===void 0&&(de={},H[F]=de);let P=de[K.id];P===void 0&&(P={},de[K.id]=P);let $=P[O];return $===void 0&&($=c(l()),P[O]=$),$}function c(L){let k=[],K=[],C=[];for(let O=0;O<i;O++)k[O]=0,K[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:K,attributeDivisors:C,object:L,attributes:{},index:null}}function p(L,k,K,C){let O=a.attributes,H=k.attributes,F=0,de=K.getAttributes();for(let P in de)if(de[P].location>=0){let $=O[P],ge=H[P];if(ge===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),$===void 0||$.attribute!==ge||ge&&$.data!==ge.data)return!0;F++}return a.attributesNum!==F||a.index!==C}function f(L,k,K,C){let O={},H=k.attributes,F=0,de=K.getAttributes();for(let P in de)if(de[P].location>=0){let $=H[P];$===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let ge={};ge.attribute=$,$&&$.data&&(ge.data=$.data),O[P]=ge,F++}a.attributes=O,a.attributesNum=F,a.index=C}function x(){let L=a.newAttributes;for(let k=0,K=L.length;k<K;k++)L[k]=0}function _(L){m(L,0)}function m(L,k){let K=a.newAttributes,C=a.enabledAttributes,O=a.attributeDivisors;K[L]=1,C[L]===0&&(e.enableVertexAttribArray(L),C[L]=1),O[L]!==k&&(e.vertexAttribDivisor(L,k),O[L]=k)}function S(){let L=a.newAttributes,k=a.enabledAttributes;for(let K=0,C=k.length;K<C;K++)k[K]!==L[K]&&(e.disableVertexAttribArray(K),k[K]=0)}function M(L,k,K,C,O,H,F){F===!0?e.vertexAttribIPointer(L,k,K,O,H):e.vertexAttribPointer(L,k,K,C,O,H)}function v(L,k,K,C){x();let O=C.attributes,H=K.getAttributes(),F=k.defaultAttributeValues;for(let de in H){let P=H[de];if(P.location>=0){let $=O[de];if($===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let ge=$.normalized,Re=$.itemSize,ae=t.get($);if(ae===void 0)continue;let pe=ae.buffer,Ee=ae.type,be=ae.bytesPerElement,Le=Ee===e.INT||Ee===e.UNSIGNED_INT||$.gpuType===Du;if($.isInterleavedBufferAttribute){let xe=$.data,Be=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,ke=$.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let fe=0;fe<P.locationSize;fe++)m(P.location+fe,xe.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let fe=0;fe<P.locationSize;fe++)_(P.location+fe);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let fe=0;fe<P.locationSize;fe++)M(P.location+fe,Re/P.locationSize,Ee,ge,Be*be,(ke+Re/P.locationSize*fe)*be,Le)}else{if($.isInstancedBufferAttribute){for(let xe=0;xe<P.locationSize;xe++)m(P.location+xe,$.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let xe=0;xe<P.locationSize;xe++)_(P.location+xe);e.bindBuffer(e.ARRAY_BUFFER,pe);for(let xe=0;xe<P.locationSize;xe++)M(P.location+xe,Re/P.locationSize,Ee,ge,Re*be,Re/P.locationSize*xe*be,Le)}}else if(F!==void 0){let ge=F[de];if(ge!==void 0)switch(ge.length){case 2:e.vertexAttrib2fv(P.location,ge);break;case 3:e.vertexAttrib3fv(P.location,ge);break;case 4:e.vertexAttrib4fv(P.location,ge);break;default:e.vertexAttrib1fv(P.location,ge)}}}}S()}function y(){R();for(let L in r){let k=r[L];for(let K in k){let C=k[K];for(let O in C){let H=C[O];for(let F in H)h(H[F].object),delete H[F];delete C[O]}}delete r[L]}}function w(L){if(r[L.id]===void 0)return;let k=r[L.id];for(let K in k){let C=k[K];for(let O in C){let H=C[O];for(let F in H)h(H[F].object),delete H[F];delete C[O]}}delete r[L.id]}function g(L){for(let k in r){let K=r[k];for(let C in K){let O=K[C];if(O[L.id]===void 0)continue;let H=O[L.id];for(let F in H)h(H[F].object),delete H[F];delete O[L.id]}}}function b(L){for(let k in r){let K=r[k],C=L.isInstancedMesh===!0?L.id:0,O=K[C];if(O!==void 0){for(let H in O){let F=O[H];for(let de in F)h(F[de].object),delete F[de];delete O[H]}delete K[C],Object.keys(K).length===0&&delete r[k]}}}function R(){N(),s=!0,a!==n&&(a=n,u(a.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:_,disableUnusedAttributes:S}}function Fy(e,t,i){let r;function n(l){r=l}function a(l,u){e.drawArrays(r,l,u),i.update(u,r,1)}function s(l,u,h){h!==0&&(e.drawArraysInstanced(r,l,u,h),i.update(u,r,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,u,0,h);let d=0;for(let c=0;c<h;c++)d+=u[c];i.update(d,r,1)}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function zy(e,t,i,r){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(g){return!(g!==Br&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Qi&&g!==Pr&&!b&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=i.precision!==void 0?i.precision:"highp",h=l(u);h!==u&&(tt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=i.logarithmicDepthBuffer===!0&&d===!1;i.reversedDepthBuffer===!0&&d===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&d===!0&&tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),m=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:y,samples:w}}function By(e){let t=this,i=null,r=0,n=!1,a=!1,s=new En,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let p=d.length!==0||c||r!==0||n;return n=c,r=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,c){i=h(d,c,0)},this.setState=function(d,c,p){let f=d.clippingPlanes,x=d.clipIntersection,_=d.clipShadows,m=e.get(d);if(!n||f===null||f.length===0||a&&!_)a?h(null):u();else{let S=a?0:r,M=S*4,v=m.clippingState||null;l.value=v,v=h(f,c,M,p);for(let y=0;y!==M;++y)v[y]=i[y];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(d,c,p,f){let x=d!==null?d.length:0,_=null;if(x!==0){if(_=l.value,f!==!0||_===null){let m=p+x*4,S=c.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<m)&&(_=new Float32Array(m));for(let M=0,v=p;M!==x;++M,v+=4)s.copy(d[M]).applyMatrix4(S,o),s.normal.toArray(_,v),_[v+3]=s.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}var lh=class extends Lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Up(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ga(5,5,5),n=new cn({name:"CubemapFromEquirect",uniforms:qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ti,blending:jn});n.uniforms.tEquirect.value=t;let a=new Nt(r,n),s=t.minFilter;return t.minFilter===Rr&&(t.minFilter=Di),new ah(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(n)}},Mf=256,ky=3,Vy=20,Sf=256,Tf=16,Hy=3,Gy=new J,Wy=new at,Js=class _g{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ah(1,10,null),this._boxMesh=new Nt(new Ga(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,n=100,a={}){let{size:s=256,position:o=Gy}=a,l=this._renderer;this._setSize(s);let u=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,c=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Wy));let _=new ah(r,n,h);return _.position.copy(o),_.update(l,t),l.autoClear=d,l.autoClearColor=c,l.autoClearDepth=p,l.autoClearStencil=f,t.background=x,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,i)),this._applyPMREM(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Mf,$d(t))}_fromTexture(t,i){t.mapping===wa||t.mapping===Es?this._setSize(t.image.length===0?Mf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=bf(t,!1,!1),r=Math.log2(t)-ky;for(let n=0;n<=r;n++)i.texture.mipmaps.push({width:t>>n,height:t>>n});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=bf(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let n=this._boxMesh,a=this._cubeCamera;n.material=r,a.renderTarget=t,a.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),a.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===wa||t.mapping===Es?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wf()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Xy(),this._integrationMaterial=qy());let i=this._cubeSize,r=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(i/Tf);for(let s=0;s<=r;s++){let o=_g.lodToRoughness(s,r);if(s>r-Hy)a.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(Sf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=jy());let r=this._blurMaterial,n=r.uniforms,a=this._sourceTarget;n.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,n.envMap.value=a.texture,this._renderCube(t,0,r),n.envMap.value=t.texture,this._renderCube(a,0,r)}};function bf(e,t,i){return new lh(e,{minFilter:Rr,generateMipmaps:t,type:zr,colorSpace:qo,depthBuffer:i})}function Ks(e,t,i){return new cn({name:e,uniforms:t,vertexShader:ht.cube_vert,fragmentShader:i,side:Ti,blending:jn,depthTest:!1,depthWrite:!1})}function Xy(){return Ks("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sf}u

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
	`)}function qy(){return Ks("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Tf}},`

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
	`)}function jy(){return Ks("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vy}
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
	`)}function wf(){return Ks("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ef(){return Ks("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Yy(e){let t=new WeakMap,i=new WeakMap,r=null;function n(c,p=!1){return c==null?null:p?s(c):a(c)}function a(c){if(c&&c.isTexture){let p=c.mapping;if(p===Pu||p===Cu)if(t.has(c)){let f=t.get(c).texture;return o(f,c.mapping)}else{let f=c.image;if(f&&f.height>0){let x=new lh(f.height);return x.fromEquirectangularTexture(e,c),t.set(c,x),c.addEventListener("dispose",u),o(x.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let p=c.mapping,f=p===Pu||p===Cu,x=p===wa||p===Es;if(f||x){let _=i.get(c),m=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return r===null&&(r=new Js(e)),_=f?r.fromEquirectangular(c,_):r.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,i.set(c,_),_.texture;if(_!==void 0)return _.texture;{let S=c.image;return f&&S&&S.height>0||x&&S&&l(S)?(r===null&&(r=new Js(e)),_=f?r.fromEquirectangular(c):r.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,i.set(c,_),c.addEventListener("dispose",h),_.texture):null}}}return c}function o(c,p){return p===Pu?c.mapping=wa:p===Cu&&(c.mapping=Es),c}function l(c){let p=0,f=6;for(let x=0;x<f;x++)c[x]!==void 0&&p++;return p===f}function u(c){let p=c.target;p.removeEventListener("dispose",u);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(c){let p=c.target;p.removeEventListener("dispose",h);let f=i.get(p);f!==void 0&&(i.delete(p),f.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:d}}function Jy(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);return n===null&&Ra("WebGLRenderer: "+r+" extension not supported."),n}}}function Ky(e,t,i,r){let n={},a=new WeakMap,s=new FinalizationRegistry(f=>delete n[f]);function o(f){l(f.target)}function l(f){f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete n[f.id],s.unregister(f);let x=a.get(f);x&&(t.remove(x),a.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,i.memory.geometries--}function u(f,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),s.register(x,x.id,x),i.memory.geometries++),x}function h(f){let x=f.attributes;for(let _ in x)t.update(x[_],e.ARRAY_BUFFER)}function d(f){let x=f.index,_=f.attributes.position,m=0;if(_===void 0)return;let S=x!==null?x.array.length:_.array.length/3-1,M=_.count>=65535?Mp:yp,v=new M(Math.ceil(S/3)*6,1),y=v.array;if(x!==null){let g=x.array;m=x.version;for(let b=0,R=0;b<S;b+=3){let N=g[b+0],L=g[b+1],k=g[b+2];y[R++]=N,y[R++]=L,y[R++]=L,y[R++]=k,y[R++]=k,y[R++]=N}}else{m=_.version;for(let g=0,b=0;g<S;g+=3){let R=g+0,N=g+1,L=g+2;y[b++]=R,y[b++]=N,y[b++]=N,y[b++]=L,y[b++]=L,y[b++]=R}}v.version=m;let w=a.get(f);w&&t.remove(w),a.set(f,v)}function c(f){let x=a.get(f);if(x){let _=f.index;_!==null&&x.version<_.version&&d(f)}else d(f);return a.get(f)}function p(){for(let f in n){let x=n[f].deref();x!==void 0&&l(x)}}return{get:u,update:h,getWireframeAttribute:c,dispose:p}}function Zy(e,t,i){let r;function n(d){r=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,c){e.drawElements(r,c,a,d*s),i.update(c,r,1)}function u(d,c,p){p!==0&&(e.drawElementsInstanced(r,c,a,d*s,p),i.update(c,r,p))}function h(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,a,d,0,p);let f=0;for(let x=0;x<p;x++)f+=c[x];i.update(f,r,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function $y(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(a/3);break;case e.LINES:i.lines+=o*(a/2);break;case e.LINE_STRIP:i.lines+=o*(a-1);break;case e.LINE_LOOP:i.lines+=o*a;break;case e.POINTS:i.points+=o*a;break;default:rt("WebGLInfo: Unknown draw mode:",s);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function Qy(e,t,i){let r=new WeakMap,n=new qt;function a(s,o,l){let u=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,c=r.get(o);if(c===void 0||c.count!==d){let p=function(){b.dispose(),r.delete(o),o.removeEventListener("dispose",p)};c!==void 0&&c.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;f===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let g=new Float32Array(y*w*4*d),b=new lp(g,y,w,d);b.type=Pr,b.needsUpdate=!0;let R=v*4;for(let N=0;N<d;N++){let L=m[N],k=S[N],K=M[N],C=y*w*4*N;for(let O=0;O<L.count;O++){let H=O*R;f===!0&&(n.fromBufferAttribute(L,O),g[C+H+0]=n.x,g[C+H+1]=n.y,g[C+H+2]=n.z,g[C+H+3]=0),x===!0&&(n.fromBufferAttribute(k,O),g[C+H+4]=n.x,g[C+H+5]=n.y,g[C+H+6]=n.z,g[C+H+7]=0),_===!0&&(n.fromBufferAttribute(K,O),g[C+H+8]=n.x,g[C+H+9]=n.y,g[C+H+10]=n.z,g[C+H+11]=K.itemSize===4?n.w:1)}}c={count:d,texture:b,size:new Ie(y,w)},r.set(o,c),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];let f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",f),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:a}}function eM(e,t,i,r,n){let a=new WeakMap;function s(u){let h=n.render.frame,d=u.geometry,c=t.get(u,d);if(a.get(c)!==h&&(t.update(c),a.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),a.get(u)!==h&&(i.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null&&i.update(u.instanceColor,e.ARRAY_BUFFER),a.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return c}function o(){a=new WeakMap}function l(u){let h=u.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}var tM={[Ad]:"LINEAR_TONE_MAPPING",[Rd]:"REINHARD_TONE_MAPPING",[Pd]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[Ld]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Cd]:"CUSTOM_TONE_MAPPING"};function iM(e,t,i,r,n,a){let s=new Lr(t,i,{type:e,depthBuffer:n,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,h=new gr;h.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new oi([0,2,0,0,2,0],2));let d=new b_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Nt(h,d),p=new ff(-1,1,1,-1,0,1),f=null,x=null,_=!1,m,S=null,M=[],v=!1;this.setSize=function(y,w){s.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let g=0;g<M.length;g++){let b=M[g];b.setSize&&b.setSize(y,w)}},this.setEffects=function(y){M=y,v=M.length>0&&M[0].isRenderPass===!0;let w=s.width,g=s.height;M.length>0&&o===null&&(o=new Lr(w,g,{type:zr,depthBuffer:!1,stencilBuffer:!1}),l=new Lr(w,g,{type:zr,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&M.some(R=>R.needsDepthTexture===!0);b!==(s.depthTexture!==null)&&(b===!0&&u===null&&(u=new Ha(w,g),a===!0&&(u.format=yn,u.type=Ea)),s.dispose(),s.depthTexture=b?u:null,s.resolveDepthBuffer=b,s.storeMultisampledDepthBuffer=b);for(let R=0;R<M.length;R++){let N=M[R];N.setSize&&N.setSize(w,g),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(u)}},this.begin=function(y,w){if(_||y.toneMapping===en&&M.length===0)return!1;if(S=w,w!==null){let g=w.width,b=w.height;(s.width!==g||s.height!==b)&&this.setSize(g,b)}return v===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=en,!0},this.hasRenderPass=function(){return v},this.end=function(y,w){y.toneMapping=m,_=!0;let g=s,b=o;for(let R=0;R<M.length;R++){let N=M[R];N.enabled!==!1&&(N.render(y,b,g,w),N.needsSwap!==!1&&(g=b,b=b===o?l:o))}if(f!==y.outputColorSpace||x!==y.toneMapping){f=y.outputColorSpace,x=y.toneMapping,d.defines={},Mt.getTransfer(f)===It&&(d.defines.SRGB_TRANSFER="");let R=tM[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,y.setRenderTarget(S),y.render(c,p),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Af=new fr,Rf=new Ha(1,1),Pf=new Op(1),Cf=new lp,Lf=new bv,If=new Up,Df=[],Nf=[],Uf=new Float32Array(16),Of=new Float32Array(9),Ff=new Float32Array(4);function Ka(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,a=Df[n];if(a===void 0&&(a=new Float32Array(n),Df[n]=a),t!==0){r.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(a,o)}return a}function ci(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function hi(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Rl(e,t){let i=Nf[t];i===void 0&&(i=new Int32Array(t),Nf[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function rM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function nM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ci(i,t))return;e.uniform2fv(this.addr,t),hi(i,t)}}function aM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ci(i,t))return;e.uniform3fv(this.addr,t),hi(i,t)}}function sM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ci(i,t))return;e.uniform4fv(this.addr,t),hi(i,t)}}function oM(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ci(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),hi(i,t)}else{if(ci(i,r))return;Ff.set(r),e.uniformMatrix2fv(this.addr,!1,Ff),hi(i,r)}}function lM(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ci(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),hi(i,t)}else{if(ci(i,r))return;Of.set(r),e.uniformMatrix3fv(this.addr,!1,Of),hi(i,r)}}function uM(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ci(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),hi(i,t)}else{if(ci(i,r))return;Uf.set(r),e.uniformMatrix4fv(this.addr,!1,Uf),hi(i,r)}}function cM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function hM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ci(i,t))return;e.uniform2iv(this.addr,t),hi(i,t)}}function dM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ci(i,t))return;e.uniform3iv(this.addr,t),hi(i,t)}}function pM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ci(i,t))return;e.uniform4iv(this.addr,t),hi(i,t)}}function fM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function mM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ci(i,t))return;e.uniform2uiv(this.addr,t),hi(i,t)}}function gM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ci(i,t))return;e.uniform3uiv(this.addr,t),hi(i,t)}}function vM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ci(i,t))return;e.uniform4uiv(this.addr,t),hi(i,t)}}function Pl(e){return e.version===0&&(e.compareFunction=qd,e.needsUpdate=!0),e}function _M(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n);let a;this.type===e.SAMPLER_2D_SHADOW?a=Pl(Rf):a=Af,i.setTexture2D(t||a,n)}function xM(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(t||Lf,n)}function yM(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=Pl(Pf):a=If,i.setTextureCube(t||a,n)}function MM(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(t||Cf,n)}function SM(e){switch(e){case 5126:return rM;case 35664:return nM;case 35665:return aM;case 35666:return sM;case 35674:return oM;case 35675:return lM;case 35676:return uM;case 5124:case 35670:return cM;case 35667:case 35671:return hM;case 35668:case 35672:return dM;case 35669:case 35673:return pM;case 5125:return fM;case 36294:return mM;case 36295:return gM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return yM;case 36289:case 36303:case 36311:case 36292:return MM}}function TM(e,t){e.uniform1fv(this.addr,t)}function bM(e,t){let i=Ka(t,this.size,2);e.uniform2fv(this.addr,i)}function wM(e,t){let i=Ka(t,this.size,3);e.uniform3fv(this.addr,i)}function EM(e,t){let i=Ka(t,this.size,4);e.uniform4fv(this.addr,i)}function AM(e,t){let i=Ka(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function RM(e,t){let i=Ka(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function PM(e,t){let i=Ka(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function CM(e,t){e.uniform1iv(this.addr,t)}function LM(e,t){e.uniform2iv(this.addr,t)}function IM(e,t){e.uniform3iv(this.addr,t)}function DM(e,t){e.uniform4iv(this.addr,t)}function NM(e,t){e.uniform1uiv(this.addr,t)}function UM(e,t){e.uniform2uiv(this.addr,t)}function OM(e,t){e.uniform3uiv(this.addr,t)}function FM(e,t){e.uniform4uiv(this.addr,t)}function zM(e,t,i){let r=this.cache,n=t.length,a=Rl(i,n);ci(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));let s;this.type===e.SAMPLER_2D_SHADOW?s=Pl(Rf):s=Af;for(let o=0;o!==n;++o)i.setTexture2D(t[o]||s,a[o])}function BM(e,t,i){let r=this.cache,n=t.length,a=Rl(i,n);ci(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));for(let s=0;s!==n;++s)i.setTexture3D(t[s]||Lf,a[s])}function kM(e,t,i){let r=this.cache,n=t.length,a=Rl(i,n);ci(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=Pl(Pf):s=If;for(let o=0;o!==n;++o)i.setTextureCube(t[o]||s,a[o])}function VM(e,t,i){let r=this.cache,n=t.length,a=Rl(i,n);ci(r,a)||(e.uniform1iv(this.addr,a),hi(r,a));for(let s=0;s!==n;++s)i.setTexture2DArray(t[s]||Cf,a[s])}function HM(e){switch(e){case 5126:return TM;case 35664:return bM;case 35665:return wM;case 35666:return EM;case 35674:return AM;case 35675:return RM;case 35676:return PM;case 5124:case 35670:return CM;case 35667:case 35671:return LM;case 35668:case 35672:return IM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return UM;case 36295:return OM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return VM}}var GM=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}},WM=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HM(t.type)}},XM=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,a=r.length;n!==a;++n){let s=r[n];s.setValue(e,t[s.id],i)}}},uh=/(\w+)(\])?(\[|\.)?/g;function zf(e,t){e.seq.push(t),e.map[t.id]=t}function qM(e,t,i){let r=e.name,n=r.length;for(uh.lastIndex=0;;){let a=uh.exec(r),s=uh.lastIndex,o=a[1],l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===n){zf(i,u===void 0?new GM(o,e,t):new WM(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new XM(o),zf(i,h)),i=h}}}var Cl=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);qM(s,o,this)}let r=[],n=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):n.push(a);r.length>0&&(this.seq=r.concat(n))}setValue(e,t,i,r){let n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,a=t.length;n!==a;++n){let s=t[n],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Bf(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var jM=37297,YM=0;function JM(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let s=n;s<a;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var kf=new lt;function KM(e){Mt._getMatrix(kf,Mt.workingColorSpace,e);let t=`mat3( ${kf.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(e)){case jo:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Vf(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),n=(e.getShaderInfoLog(t)||"").trim();if(r&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let s=parseInt(a[1]);return i.toUpperCase()+`

`+n+`

`+JM(e.getShaderSource(t),s)}else return n}function ZM(e,t){let i=KM(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $M={[Ad]:"Linear",[Rd]:"Reinhard",[Pd]:"Cineon",[Ru]:"ACESFilmic",[Ld]:"AgX",[Id]:"Neutral",[Cd]:"Custom"};function QM(e,t){let i=$M[t];return i===void 0?(tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Ll=new J;function eS(){Mt.getLuminanceCoefficients(Ll);let e=Ll.x.toFixed(4),t=Ll.y.toFixed(4),i=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tS(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function iS(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function rS(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let a=e.getActiveAttrib(t,n),s=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),i[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Zs(e){return e!==""}function Hf(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Gf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(e){return e.replace(nS,aS)}function aS(e,t){let i=ht[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ch(i)}var sS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(e){return e.replace(sS,oS)}function oS(e,t,i,r){let n="";for(let a=parseInt(t);a<parseInt(i);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Xf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var lS={[Uo]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function uS(e){return lS[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cS={[Es]:"ENVMAP_MODE_REFRACTION"};function hS(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":cS[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dS={[Au]:"ENVMAP_BLENDING_MULTIPLY",[kg]:"ENVMAP_BLENDING_MIX",[Vg]:"ENVMAP_BLENDING_ADD"};function pS(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":dS[e.combine]||"ENVMAP_BLENDING_NONE"}function fS(e,t,i,r){let n=e.getContext(),a=i.defines,s=i.vertexShader,o=i.fragmentShader,l=uS(i),u=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=hS(i),d=pS(i),c=tS(i),p=iS(a),f=n.createProgram(),x,_,m=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(Zs).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(Zs).join(`
`),_.length>0&&(_+=`
`)):(x=[Xf(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),_=[Xf(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==en?"#define TONE_MAPPING":"",i.toneMapping!==en?ht.tonemapping_pars_fragment:"",i.toneMapping!==en?QM("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,ZM("linearToOutputTexel",i.outputColorSpace),eS(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zs).join(`
`)),s=ch(s),s=Hf(s,i),s=Gf(s,i),o=ch(o),o=Hf(o,i),o=Gf(o,i),s=Wf(s),o=Wf(o),i.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=m+x+s,M=m+_+o,v=Bf(n,n.VERTEX_SHADER,S),y=Bf(n,n.FRAGMENT_SHADER,M);n.attachShader(f,v),n.attachShader(f,y),i.index0AttributeName!==void 0?n.bindAttribLocation(f,0,i.index0AttributeName):i.hasPositionAttribute===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function w(N){if(e.debug.checkShaderErrors){let L=n.getProgramInfoLog(f)||"",k=n.getShaderInfoLog(v)||"",K=n.getShaderInfoLog(y)||"",C=L.trim(),O=k.trim(),H=K.trim(),F=!0,de=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(n,f,v,y);else{let P=Vf(n,v,"vertex"),$=Vf(n,y,"fragment");rt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+C+`
`+P+`
`+$)}else C!==""?tt("WebGLProgram: Program Info Log:",C):(O===""||H==="")&&(de=!1);de&&(N.diagnostics={runnable:F,programLog:C,vertexShader:{log:O,prefix:x},fragmentShader:{log:H,prefix:_}})}n.deleteShader(v),n.deleteShader(y),g=new Cl(n,f),b=rS(n,f)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(f,jM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YM++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=v,this.fragmentShader=y,this}var mS=0,gS=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vS(e),t.set(e,i)),i}},vS=class{constructor(e){this.id=mS++,this.code=e,this.usedTimes=0}};function _S(e){return e===Yn||e===Ho||e===Go}function xS(e,t,i,r,n,a){let s=new dp,o=new gS,l=new Set,u=[],h=new Map,d=r.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function f(g,b,R,N,L,k){let K=N.fog,C=L.geometry,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=t.get(g.envMap||O,H),de=c[g.type],P=r.precision;g.precision!==null&&(P=r.getMaxPrecision(g.precision),P!==g.precision&&tt("WebGLProgram.getParameters:",g.precision,"not supported, using",P,"instead."));let $=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ge=$!==void 0?$.length:0,Re=0;C.morphAttributes.position!==void 0&&(Re=1),C.morphAttributes.normal!==void 0&&(Re=2),C.morphAttributes.color!==void 0&&(Re=3);let ae,pe,Ee,be;if(de){let se=Gr[de];ae=se.vertexShader,pe=se.fragmentShader}else{ae=g.vertexShader,pe=g.fragmentShader;let se=o.getVertexShaderStage(g),Pe=o.getFragmentShaderStage(g);o.update(g,se,Pe),Ee=se.id,be=Pe.id}let Le=e.getRenderTarget(),xe=e.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,ke=L.isBatchedMesh===!0,fe=!!g.map,Ne=!!g.matcap,ve=!!F,Te=ve&&F.isPMREMTexture===!0,Me=!!g.aoMap,B=!!g.lightMap,we=!!g.bumpMap&&g.wireframe===!1,Fe=!!g.normalMap,ye=!!g.displacementMap,Ve=!!g.emissiveMap,je=!!g.metalnessMap,$e=!!g.roughnessMap,W=g.anisotropy>0,st=g.clearcoat>0,Ke=g.diffuseRoughness>0,Qe=g.dispersion>0,Ae=g.retroreflectivity>0,it=g.iridescence>0,He=g.sheen>0,Xe=g.transmission>0,_e=W&&!!g.anisotropyMap,E=st&&!!g.clearcoatMap,T=st&&!!g.clearcoatNormalMap,U=st&&!!g.clearcoatRoughnessMap,ee=Ke&&!!g.diffuseRoughnessMap,j=it&&!!g.iridescenceMap,ue=it&&!!g.iridescenceThicknessMap,ie=He&&!!g.sheenColorMap,D=He&&!!g.sheenRoughnessMap,ne=!!g.specularMap,me=!!g.specularColorMap,I=!!g.specularIntensityMap,Y=Xe&&!!g.transmissionMap,ce=Xe&&!!g.thicknessMap,Z=!!g.gradientMap,oe=!!g.alphaMap,V=g.alphaTest>0,z=!!g.alphaHash,X=!!g.extensions,q=en;g.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(q=e.toneMapping);let Q=Te?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,le={shaderID:de,shaderType:g.type,shaderName:g.name,vertexShader:ae,fragmentShader:pe,defines:g.defines,customVertexShaderID:Ee,customFragmentShaderID:be,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:P,batching:ke,batchingColor:ke&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:Le===null?e.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:fe,matcap:Ne,envMap:ve,envMapMode:ve&&F.mapping,envMapPMREM:Te,envMapMaxLod:Te?Q.length-1:null,envMapSize:Te?Q[0].width:null,aoMap:Me,lightMap:B,bumpMap:we,normalMap:Fe,displacementMap:ye,emissiveMap:Ve,normalMapObjectSpace:Fe&&g.normalMapType===Wg,normalMapTangentSpace:Fe&&g.normalMapType===Xo,packedNormalMap:Fe&&g.normalMapType===Xo&&_S(g.normalMap.format),metalnessMap:je,roughnessMap:$e,anisotropy:W,anisotropyMap:_e,clearcoat:st,clearcoatMap:E,clearcoatNormalMap:T,clearcoatRoughnessMap:U,diffuseRoughness:Ke,diffuseRoughnessMap:ee,dispersion:Qe,retroreflection:Ae,iridescence:it,iridescenceMap:j,iridescenceThicknessMap:ue,sheen:He,sheenColorMap:ie,sheenRoughnessMap:D,specularMap:ne,specularColorMap:me,specularIntensityMap:I,transmission:Xe,transmissionMap:Y,thicknessMap:ce,gradientMap:Z,opaque:g.transparent===!1&&g.blending===bs&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:V,alphaHash:z,combine:g.combine,mapUv:fe&&p(g.map.channel),aoMapUv:Me&&p(g.aoMap.channel),lightMapUv:B&&p(g.lightMap.channel),bumpMapUv:we&&p(g.bumpMap.channel),normalMapUv:Fe&&p(g.normalMap.channel),displacementMapUv:ye&&p(g.displacementMap.channel),emissiveMapUv:Ve&&p(g.emissiveMap.channel),metalnessMapUv:je&&p(g.metalnessMap.channel),roughnessMapUv:$e&&p(g.roughnessMap.channel),anisotropyMapUv:_e&&p(g.anisotropyMap.channel),clearcoatMapUv:E&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:T&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:D&&p(g.sheenRoughnessMap.channel),specularMapUv:ne&&p(g.specularMap.channel),specularColorMapUv:me&&p(g.specularColorMap.channel),specularIntensityMapUv:I&&p(g.specularIntensityMap.channel),transmissionMapUv:Y&&p(g.transmissionMap.channel),thicknessMapUv:ce&&p(g.thicknessMap.channel),alphaMapUv:oe&&p(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Fe||W),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(fe||oe),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&Fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Re,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.filter(se=>se.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:q,decodeVideoTexture:fe&&g.map.isVideoTexture===!0&&Mt.getTransfer(g.map.colorSpace)===It,decodeVideoTextureEmissive:Ve&&g.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(g.emissiveMap.colorSpace)===It,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ar,flipSided:g.side===Ti,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:X&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X&&g.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function x(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)b.push(R),b.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(_(b,g),m(b,g),b.push(e.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function _(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function m(g,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.diffuseRoughness&&s.enable(25),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function S(g){let b=c[g.type],R;if(b){let N=Gr[b];R=M_.clone(N.uniforms)}else R=g.uniforms;return R}function M(g,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new fS(e,b,g,n),u.push(R),h.set(b,R)),R}function v(g){if(--g.usedTimes===0){let b=u.indexOf(g);u[b]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function y(g){o.remove(g)}function w(){o.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:S,acquireProgram:M,releaseProgram:v,releaseShaderCache:y,programs:u,dispose:w}}function yS(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function n(s,o,l){e.get(s)[o]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:a}}function MS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function qf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function jf(){let e=[],t=0,i=[],r=[],n=[];function a(){t=0,i.length=0,r.length=0,n.length=0}function s(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,f,x,_,m){let S=e[t];return S===void 0?(S={id:c.id,object:c,geometry:p,material:f,materialVariant:s(c),groupOrder:x,renderOrder:c.renderOrder,z:_,group:m},e[t]=S):(S.id=c.id,S.object=c,S.geometry=p,S.material=f,S.materialVariant=s(c),S.groupOrder=x,S.renderOrder=c.renderOrder,S.z=_,S.group=m),t++,S}function l(c,p,f,x,_,m,S){S.reversedDepth===!0&&(_=-_);let M=o(c,p,f,x,_,m);f.transmission>0?r.push(M):f.transparent===!0?n.push(M):i.push(M)}function u(c,p,f,x,_,m){let S=o(c,p,f,x,_,m);f.transmission>0?r.unshift(S):f.transparent===!0?n.unshift(S):i.unshift(S)}function h(c,p){i.length>1&&i.sort(c||MS),r.length>1&&r.sort(p||qf),n.length>1&&n.sort(p||qf)}function d(){for(let c=t,p=e.length;c<p;c++){let f=e[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:i,transmissive:r,transparent:n,init:a,push:l,unshift:u,finish:d,sort:h}}function SS(){let e=new WeakMap;function t(r,n){let a=e.get(r),s;return a===void 0?(s=new jf,e.set(r,[s])):n>=a.length?(s=new jf,a.push(s)):s=a[n],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function TS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new J,color:new at};break;case"SpotLight":i={position:new J,direction:new J,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new at,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new at,groundColor:new at};break;case"RectAreaLight":i={color:new at,position:new J,halfWidth:new J,halfHeight:new J};break}return e[t.id]=i,i}}}function bS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var wS=0;function ES(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function AS(e){let t=new TS,i=bS(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new J);let n=new J,a=new kt,s=new kt;function o(u){let h=0,d=0,c=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let p=0,f=0,x=0,_=0,m=0,S=0,M=0,v=0,y=0,w=0,g=0,b=0,R=0,N=0;u.sort(ES);for(let k=0,K=u.length;k<K;k++){let C=u[k],O=C.color,H=C.intensity,F=C.distance,de=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Yn?de=C.shadow.map.texture:de=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*H,d+=O.g*H,c+=O.b*H;else if(C.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(C.sh.coefficients[P],H);N++}else if(C.isSunLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,ge=i.get(C);ge.shadowIntensity=$.intensity,ge.shadowBias=$.bias,ge.shadowNormalBias=$.normalBias,ge.shadowRadius=$.radius,ge.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[f]=ge,r.sunShadowMap[f]=de;let Re=$.getViewportCount();for(let ae=0;ae<Re;ae++)r.sunShadowMatrix[x+ae]=$.getMatrix(ae),r.sunShadowCascade[x+ae]=$._cascadeData[ae];x+=Re,f++}r.sun[p]=P,p++}else if(C.isDirectionalLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,ge=i.get(C);ge.shadowIntensity=$.intensity,ge.shadowBias=$.bias,ge.shadowNormalBias=$.normalBias,ge.shadowRadius=$.radius,ge.shadowMapSize=$.mapSize,r.directionalShadow[_]=ge,r.directionalShadowMap[_]=de,r.directionalShadowMatrix[_]=C.shadow.matrix,y++}r.directional[_]=P,_++}else if(C.isSpotLight){let P=t.get(C);P.position.setFromMatrixPosition(C.matrixWorld),P.color.copy(O).multiplyScalar(H),P.distance=F,P.coneCos=Math.cos(C.angle),P.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),P.decay=C.decay,r.spot[S]=P;let $=C.shadow;if(C.map&&(r.spotLightMap[b]=C.map,b++,$.updateMatrices(C),C.castShadow&&R++),r.spotLightMatrix[S]=$.matrix,C.castShadow){let ge=i.get(C);ge.shadowIntensity=$.intensity,ge.shadowBias=$.bias,ge.shadowNormalBias=$.normalBias,ge.shadowRadius=$.radius,ge.shadowMapSize=$.mapSize,r.spotShadow[S]=ge,r.spotShadowMap[S]=de,g++}S++}else if(C.isRectAreaLight){let P=t.get(C);P.color.copy(O).multiplyScalar(H),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),r.rectArea[M]=P,M++}else if(C.isPointLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),P.distance=C.distance,P.decay=C.decay,C.castShadow){let $=C.shadow,ge=i.get(C);ge.shadowIntensity=$.intensity,ge.shadowBias=$.bias,ge.shadowNormalBias=$.normalBias,ge.shadowRadius=$.radius,ge.shadowMapSize=$.mapSize,ge.shadowCameraNear=$.camera.near,ge.shadowCameraFar=$.camera.far,r.pointShadow[m]=ge,r.pointShadowMap[m]=de,r.pointShadowMatrix[m]=C.shadow.matrix,w++}r.point[m]=P,m++}else if(C.isHemisphereLight){let P=t.get(C);P.skyColor.copy(C.color).multiplyScalar(H),P.groundColor.copy(C.groundColor).multiplyScalar(H),r.hemi[v]=P,v++}}M>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=c;let L=r.hash;(L.sunLength!==p||L.directionalLength!==_||L.pointLength!==m||L.spotLength!==S||L.rectAreaLength!==M||L.hemiLength!==v||L.numSunShadows!==f||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==g||L.numSpotMaps!==b||L.numLightProbes!==N)&&(r.sun.length=p,r.directional.length=_,r.spot.length=S,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.sunShadow.length=f,r.sunShadowMap.length=f,r.sunShadowMatrix.length=x,r.sunShadowCascade.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.directionalShadowMatrix.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.pointShadowMatrix.length=w,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+b-R,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=N,L.sunLength=p,L.directionalLength=_,L.pointLength=m,L.spotLength=S,L.rectAreaLength=M,L.hemiLength=v,L.numSunShadows=f,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=g,L.numSpotMaps=b,L.numLightProbes=N,r.version=wS++)}function l(u,h){let d=0,c=0,p=0,f=0,x=0,_=0,m=h.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){let v=u[S];if(v.isSunLight){let y=r.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let y=r.directional[c];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),c++}else if(v.isSpotLight){let y=r.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=r.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),s.identity(),a.copy(v.matrixWorld),a.premultiply(m),s.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){let y=r.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){let y=r.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:r}}function Yf(e){let t=new AS(e),i=[],r=[],n=[];function a(d){h.camera=d,i.length=0,r.length=0,n.length=0}function s(d){d.isLightProbeGrid?n.push(d):i.push(d)}function o(d){r.push(d)}function l(){t.setup(i),n.sort((d,c)=>d.priority-c.priority||d.id-c.id)}function u(d){t.setupView(i,d)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function RS(e){let t=new WeakMap;function i(n,a=0){let s=t.get(n),o;return s===void 0?(o=new Yf(e),t.set(n,[o])):a>=s.length?(o=new Yf(e),s.push(o)):o=s[a],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CS=`uniform sampler2D shadow_pass;
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
}`,LS=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],IS=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Jf=new kt,$s=new J,hh=new J;function DS(e,t,i){let r=new Bs,n=new Ie,a=new Ie,s=new qt,o=new E_,l=new A_,u={},h=i.maxTextureSize,d={[qn]:Ti,[Ti]:qn,[Ar]:Ar},c=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:PS,fragmentShader:CS}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let f=new gr;f.setAttribute("position",new kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Nt(f,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let m=this.type;this.render=function(w,g,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===Mg&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Uo);let R=e.getRenderTarget(),N=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),k=e.state;k.setBlending(jn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let K=m!==this.type;K&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=w.length;C<O;C++){let H=w[C],F=H.shadow;if(F===void 0){tt("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let de=F.getFrameExtents();n.multiply(de),a.copy(F.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/de.x),n.x=a.x*de.x,F.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/de.y),n.y=a.y*de.y,F.mapSize.y=a.y));let P=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=P,F.map===null||K===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ts){if(H.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Lr(n.x,n.y,{format:Yn,type:zr,minFilter:Di,magFilter:Di,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Ha(n.x,n.y,Pr),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=xn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=xi,F.map.depthTexture.magFilter=xi}else H.isPointLight?(F.map=new lh(n.x),F.map.depthTexture=new Op(n.x,Fr)):(F.map=new Lr(n.x,n.y),F.map.depthTexture=new Ha(n.x,n.y,Fr)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=xn,this.type===Uo?(F.map.depthTexture.compareFunction=P?Xd:Wd,F.map.depthTexture.minFilter=Di,F.map.depthTexture.magFilter=Di):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=xi,F.map.depthTexture.magFilter=xi);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==n.x||F.map.height!==n.y)&&F.map.setSize(n.x,n.y);let $=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,b);let ge=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let Re=0;Re<$;Re++){let ae=F.getCamera(Re);if(H.isPointLight){let pe=F.camera,Ee=F.matrix,be=H.distance||pe.far;be!==pe.far&&(pe.far=be,pe.updateProjectionMatrix()),$s.setFromMatrixPosition(H.matrixWorld),pe.position.copy($s),hh.copy(pe.position),hh.add(LS[Re]),pe.up.copy(IS[Re]),pe.lookAt(hh),pe.updateMatrixWorld(),Ee.makeTranslation(-$s.x,-$s.y,-$s.z),Jf.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Jf,pe.coordinateSystem,pe.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,Re),e.clear();else{Re===0&&(e.setRenderTarget(F.map),e.clear());let pe=F.getViewport(Re);s.set(a.x*pe.x,a.y*pe.y,a.x*pe.z,a.y*pe.w),k.viewport(s)}r=F.getFrustum(Re),v(g,b,ae,H,ge,this.type)}F.isPointLightShadow!==!0&&this.type===Ts&&S(F,b),F.needsUpdate=!1}m=this.type,_.needsUpdate=!1,e.setRenderTarget(R,N,L)};function S(w,g){let b=t.update(x);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Lr(n.x,n.y,{format:Yn,type:zr}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),c.uniforms.shadow_pass.value=w.map.depthTexture,c.uniforms.resolution.value.set(w.map.width,w.map.height),c.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(g,null,b,c,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(g,null,b,p,x,null)}function M(w,g,b,R){let N=null,L=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)N=L;else if(N=b.isPointLight===!0?l:o,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=N.uuid,K=g.uuid,C=u[k];C===void 0&&(C={},u[k]=C);let O=C[K];O===void 0&&(O=N.clone(),C[K]=O,g.addEventListener("dispose",y)),N=O}if(N.visible=g.visible,N.wireframe=g.wireframe,R===Ts?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:d[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let k=e.properties.get(N);k.light=b}return N}function v(w,g,b,R,N,L){if(w.visible===!1)return;if(w.layers.test(N)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Ts)&&(!w.frustumCulled||w.intersectsFrustum(r))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let K=t.update(w),C=w.material;if(Array.isArray(C)){let O=K.groups;for(let H=0,F=O.length;H<F;H++){let de=O[H],P=C[de.materialIndex];if(P&&P.visible){let $=M(w,P,R,L);w.onBeforeShadow(e,w,g,b,K,$,de),e.renderBufferDirect(b,null,K,$,w,de),w.onAfterShadow(e,w,g,b,K,$,de)}}}else if(C.visible){let O=M(w,C,R,L);w.onBeforeShadow(e,w,g,b,K,O,null),e.renderBufferDirect(b,null,K,O,w,null),w.onAfterShadow(e,w,g,b,K,O,null)}}let k=w.children;for(let K=0,C=k.length;K<C;K++)v(k[K],g,b,R,N,L)}function y(w){w.target.removeEventListener("dispose",y);for(let g in u){let b=u[g],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function NS(e,t){function i(){let I=!1,Y=new qt,ce=null,Z=new qt(0,0,0,0);return{setMask:function(oe){ce!==oe&&!I&&(e.colorMask(oe,oe,oe,oe),ce=oe)},setLocked:function(oe){I=oe},setClear:function(oe,V,z,X,q){q===!0&&(oe*=X,V*=X,z*=X),Y.set(oe,V,z,X),Z.equals(Y)===!1&&(e.clearColor(oe,V,z,X),Z.copy(Y))},reset:function(){I=!1,ce=null,Z.set(-1,0,0,0)}}}function r(){let I=!1,Y=!1,ce=null,Z=null,oe=null;return{setReversed:function(V){if(Y!==V){let z=t.get("EXT_clip_control");V?z.clipControlEXT(z.LOWER_LEFT_EXT,z.ZERO_TO_ONE_EXT):z.clipControlEXT(z.LOWER_LEFT_EXT,z.NEGATIVE_ONE_TO_ONE_EXT),Y=V;let X=oe;oe=null,this.setClear(X)}},getReversed:function(){return Y},setTest:function(V){V?xe(e.DEPTH_TEST):Be(e.DEPTH_TEST)},setMask:function(V){ce!==V&&!I&&(e.depthMask(V),ce=V)},setFunc:function(V){if(Y&&(V=iv[V]),Z!==V){switch(V){case yu:e.depthFunc(e.NEVER);break;case Mu:e.depthFunc(e.ALWAYS);break;case Su:e.depthFunc(e.LESS);break;case ws:e.depthFunc(e.LEQUAL);break;case Tu:e.depthFunc(e.EQUAL);break;case bu:e.depthFunc(e.GEQUAL);break;case wu:e.depthFunc(e.GREATER);break;case Eu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Z=V}},setLocked:function(V){I=V},setClear:function(V){oe!==V&&(oe=V,Y&&(V=1-V),e.clearDepth(V))},reset:function(){I=!1,ce=null,Z=null,oe=null,Y=!1}}}function n(){let I=!1,Y=null,ce=null,Z=null,oe=null,V=null,z=null,X=null,q=null;return{setTest:function(Q){I||(Q?xe(e.STENCIL_TEST):Be(e.STENCIL_TEST))},setMask:function(Q){Y!==Q&&!I&&(e.stencilMask(Q),Y=Q)},setFunc:function(Q,le,se){(ce!==Q||Z!==le||oe!==se)&&(e.stencilFunc(Q,le,se),ce=Q,Z=le,oe=se)},setOp:function(Q,le,se){(V!==Q||z!==le||X!==se)&&(e.stencilOp(Q,le,se),V=Q,z=le,X=se)},setLocked:function(Q){I=Q},setClear:function(Q){q!==Q&&(e.clearStencil(Q),q=Q)},reset:function(){I=!1,Y=null,ce=null,Z=null,oe=null,V=null,z=null,X=null,q=null}}}let a=new i,s=new r,o=new n,l={},u=new WeakMap,h={},d={},c={},p=new WeakMap,f=[],x=null,_=!1,m=null,S=null,M=null,v=null,y=null,w=null,g=null,b=new at(0,0,0),R=0,N=!1,L=null,k=null,K=null,C=null,O=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,de=0,P=e.getParameter(e.VERSION);P.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(P)[1]),F=de>=1):P.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),F=de>=2);let $=null,ge={},Re=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),pe=new qt().fromArray(Re),Ee=new qt().fromArray(ae);function be(I,Y,ce,Z){let oe=new Uint8Array(4),V=e.createTexture();e.bindTexture(I,V),e.texParameteri(I,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(I,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let z=0;z<ce;z++)I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY?e.texImage3D(Y,0,e.RGBA,1,1,Z,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(Y+z,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return V}let Le={};Le[e.TEXTURE_2D]=be(e.TEXTURE_2D,e.TEXTURE_2D,1),Le[e.TEXTURE_CUBE_MAP]=be(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[e.TEXTURE_2D_ARRAY]=be(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Le[e.TEXTURE_3D]=be(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),xe(e.DEPTH_TEST),s.setFunc(ws),we(!1),Fe(Md),xe(e.CULL_FACE),Me(jn);function xe(I){h[I]!==!0&&(e.enable(I),h[I]=!0)}function Be(I){h[I]!==!1&&(e.disable(I),h[I]=!1)}function ke(I,Y){return c[I]!==Y?(e.bindFramebuffer(I,Y),c[I]=Y,I===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=Y),I===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=Y),!0):!1}function fe(I,Y){let ce=f,Z=!1;if(I){ce=p.get(Y),ce===void 0&&(ce=[],p.set(Y,ce));let oe=I.textures;if(ce.length!==oe.length||ce[0]!==e.COLOR_ATTACHMENT0){for(let V=0,z=oe.length;V<z;V++)ce[V]=e.COLOR_ATTACHMENT0+V;ce.length=oe.length,Z=!0}}else ce[0]!==e.BACK&&(ce[0]=e.BACK,Z=!0);Z&&e.drawBuffers(ce)}function Ne(I){return x!==I?(e.useProgram(I),x=I,!0):!1}let ve={[ba]:e.FUNC_ADD,[Tg]:e.FUNC_SUBTRACT,[bg]:e.FUNC_REVERSE_SUBTRACT};ve[wg]=e.MIN,ve[Eg]=e.MAX;let Te={[Ag]:e.ZERO,[Rg]:e.ONE,[Pg]:e.SRC_COLOR,[wd]:e.SRC_ALPHA,[Ug]:e.SRC_ALPHA_SATURATE,[Dg]:e.DST_COLOR,[Lg]:e.DST_ALPHA,[Cg]:e.ONE_MINUS_SRC_COLOR,[Ed]:e.ONE_MINUS_SRC_ALPHA,[Ng]:e.ONE_MINUS_DST_COLOR,[Ig]:e.ONE_MINUS_DST_ALPHA,[Og]:e.CONSTANT_COLOR,[Fg]:e.ONE_MINUS_CONSTANT_COLOR,[zg]:e.CONSTANT_ALPHA,[Bg]:e.ONE_MINUS_CONSTANT_ALPHA};function Me(I,Y,ce,Z,oe,V,z,X,q,Q){if(I===jn){_===!0&&(Be(e.BLEND),_=!1);return}if(_===!1&&(xe(e.BLEND),_=!0),I!==Sg){if(I!==m||Q!==N){if((S!==ba||y!==ba)&&(e.blendEquation(e.FUNC_ADD),S=ba,y=ba),Q)switch(I){case bs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sd:e.blendFunc(e.ONE,e.ONE);break;case Td:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case bd:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt("WebGLState: Invalid blending: ",I);break}else switch(I){case bs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sd:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Td:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bd:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",I);break}M=null,v=null,w=null,g=null,b.set(0,0,0),R=0,m=I,N=Q}return}oe=oe||Y,V=V||ce,z=z||Z,(Y!==S||oe!==y)&&(e.blendEquationSeparate(ve[Y],ve[oe]),S=Y,y=oe),(ce!==M||Z!==v||V!==w||z!==g)&&(e.blendFuncSeparate(Te[ce],Te[Z],Te[V],Te[z]),M=ce,v=Z,w=V,g=z),(X.equals(b)===!1||q!==R)&&(e.blendColor(X.r,X.g,X.b,q),b.copy(X),R=q),m=I,N=!1}function B(I,Y){I.side===Ar?Be(e.CULL_FACE):xe(e.CULL_FACE);let ce=I.side===Ti;Y&&(ce=!ce),we(ce),I.blending===bs&&I.transparent===!1?Me(jn):Me(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),a.setMask(I.colorWrite);let Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?xe(e.SAMPLE_ALPHA_TO_COVERAGE):Be(e.SAMPLE_ALPHA_TO_COVERAGE)}function we(I){L!==I&&(I?e.frontFace(e.CW):e.frontFace(e.CCW),L=I)}function Fe(I){I!==xg?(xe(e.CULL_FACE),I!==k&&(I===Md?e.cullFace(e.BACK):I===yg?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Be(e.CULL_FACE),k=I}function ye(I){I!==K&&(F&&e.lineWidth(I),K=I)}function Ve(I,Y,ce){I?(xe(e.POLYGON_OFFSET_FILL),(C!==Y||O!==ce)&&(C=Y,O=ce,s.getReversed()&&(Y=-Y,ce=-ce),e.polygonOffset(Y,ce))):Be(e.POLYGON_OFFSET_FILL)}function je(I){I?xe(e.SCISSOR_TEST):Be(e.SCISSOR_TEST)}function $e(I){I===void 0&&(I=e.TEXTURE0+H-1),$!==I&&(e.activeTexture(I),$=I)}function W(I,Y,ce){ce===void 0&&($===null?ce=e.TEXTURE0+H-1:ce=$);let Z=ge[ce];Z===void 0&&(Z={type:void 0,texture:void 0},ge[ce]=Z),(Z.type!==I||Z.texture!==Y)&&($!==ce&&(e.activeTexture(ce),$=ce),e.bindTexture(I,Y||Le[I]),Z.type=I,Z.texture=Y)}function st(){let I=ge[$];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ke(){try{e.compressedTexImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function Qe(){try{e.compressedTexImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function it(){try{e.texSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function He(){try{e.compressedTexSubImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function Xe(){try{e.compressedTexSubImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function _e(){try{e.texStorage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function E(){try{e.texStorage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function T(){try{e.texImage2D(...arguments)}catch(I){rt("WebGLState:",I)}}function U(){try{e.texImage3D(...arguments)}catch(I){rt("WebGLState:",I)}}function ee(I){return d[I]!==void 0?d[I]:e.getParameter(I)}function j(I,Y){d[I]!==Y&&(e.pixelStorei(I,Y),d[I]=Y)}function ue(I){pe.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function ie(I){Ee.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function D(I,Y){let ce=u.get(Y);ce===void 0&&(ce=new WeakMap,u.set(Y,ce));let Z=ce.get(I);Z===void 0&&(Z=e.getUniformBlockIndex(Y,I.name),e.uniformBlockBinding(Y,Z,Z),ce.set(I,Z))}function ne(I,Y,ce){let Z=u.get(Y).get(I);l[Z]!==ce&&(e.bindBufferBase(e.UNIFORM_BUFFER,Z,ce),l[Z]=ce)}function me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,ge={},c={},l={},p=new WeakMap,f=[],x=null,_=!1,m=null,S=null,M=null,v=null,y=null,w=null,g=null,b=new at(0,0,0),R=0,N=!1,L=null,k=null,K=null,C=null,O=null,pe.set(0,0,e.canvas.width,e.canvas.height),Ee.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:xe,disable:Be,bindFramebuffer:ke,drawBuffers:fe,useProgram:Ne,setBlending:Me,setMaterial:B,setFlipSided:we,setCullFace:Fe,setLineWidth:ye,setPolygonOffset:Ve,setScissorTest:je,activeTexture:$e,bindTexture:W,unbindTexture:st,compressedTexImage2D:Ke,compressedTexImage3D:Qe,texImage2D:T,texImage3D:U,pixelStorei:j,getParameter:ee,updateUBOMapping:D,uniformBlockBinding:ne,texStorage2D:_e,texStorage3D:E,texSubImage2D:Ae,texSubImage3D:it,compressedTexSubImage2D:He,compressedTexSubImage3D:Xe,scissor:ue,viewport:ie,reset:me}}function US(e,t,i,r,n,a,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,h=new WeakMap,d=new Set,c,p=new WeakMap,f=new Set,x=new FinalizationRegistry(E=>f.delete(E)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,T){return _?new OffscreenCanvas(E,T):Yo("canvas")}function S(E,T,U){let ee=1,j=_e(E);if((j.width>U||j.height>U)&&(ee=U/Math.max(j.width,j.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ue=Math.floor(ee*j.width),ie=Math.floor(ee*j.height);c===void 0&&(c=m(ue,ie));let D=T?m(ue,ie):c;return D.width=ue,D.height=ie,D.getContext("2d").drawImage(E,0,0,ue,ie),tt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ue+"x"+ie+")."),D}else return"data"in E&&tt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function M(E){return E.generateMipmaps}function v(E){e.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(E,T,U,ee,j,ue=!1){if(E!==null){if(e[E]!==void 0)return e[E];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ie;ee&&(ie=t.get("EXT_texture_norm16"),ie||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=T;if(T===e.RED&&(U===e.FLOAT&&(D=e.R32F),U===e.HALF_FLOAT&&(D=e.R16F),U===e.UNSIGNED_BYTE&&(D=e.R8),U===e.UNSIGNED_SHORT&&ie&&(D=ie.R16_EXT),U===e.SHORT&&ie&&(D=ie.R16_SNORM_EXT)),T===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(D=e.R8UI),U===e.UNSIGNED_SHORT&&(D=e.R16UI),U===e.UNSIGNED_INT&&(D=e.R32UI),U===e.BYTE&&(D=e.R8I),U===e.SHORT&&(D=e.R16I),U===e.INT&&(D=e.R32I)),T===e.RG&&(U===e.FLOAT&&(D=e.RG32F),U===e.HALF_FLOAT&&(D=e.RG16F),U===e.UNSIGNED_BYTE&&(D=e.RG8),U===e.UNSIGNED_SHORT&&ie&&(D=ie.RG16_EXT),U===e.SHORT&&ie&&(D=ie.RG16_SNORM_EXT)),T===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(D=e.RG8UI),U===e.UNSIGNED_SHORT&&(D=e.RG16UI),U===e.UNSIGNED_INT&&(D=e.RG32UI),U===e.BYTE&&(D=e.RG8I),U===e.SHORT&&(D=e.RG16I),U===e.INT&&(D=e.RG32I)),T===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(D=e.RGB8UI),U===e.UNSIGNED_SHORT&&(D=e.RGB16UI),U===e.UNSIGNED_INT&&(D=e.RGB32UI),U===e.BYTE&&(D=e.RGB8I),U===e.SHORT&&(D=e.RGB16I),U===e.INT&&(D=e.RGB32I)),T===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(D=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(D=e.RGBA16UI),U===e.UNSIGNED_INT&&(D=e.RGBA32UI),U===e.BYTE&&(D=e.RGBA8I),U===e.SHORT&&(D=e.RGBA16I),U===e.INT&&(D=e.RGBA32I)),T===e.RGB&&(U===e.UNSIGNED_SHORT&&ie&&(D=ie.RGB16_EXT),U===e.SHORT&&ie&&(D=ie.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(D=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(D=e.R11F_G11F_B10F)),T===e.RGBA){let ne=ue?jo:Mt.getTransfer(j);U===e.FLOAT&&(D=e.RGBA32F),U===e.HALF_FLOAT&&(D=e.RGBA16F),U===e.UNSIGNED_BYTE&&(D=ne===It?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&ie&&(D=ie.RGBA16_EXT),U===e.SHORT&&ie&&(D=ie.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(D=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(D=e.RGB5_A1)}return(D===e.R16F||D===e.R32F||D===e.RG16F||D===e.RG32F||D===e.RGBA16F||D===e.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function g(E,T){let U;return E?T===null||T===Fr||T===Ea?U=e.DEPTH24_STENCIL8:T===Pr?U=e.DEPTH32F_STENCIL8:T===As&&(U=e.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Fr||T===Ea?U=e.DEPTH_COMPONENT24:T===Pr?U=e.DEPTH_COMPONENT32F:T===As&&(U=e.DEPTH_COMPONENT16),U}function b(E,T){return M(E)===!0||E.isFramebufferTexture&&E.minFilter!==xi&&E.minFilter!==Di?Math.log2(Math.max(T.width,T.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?T.mipmaps.length:1}function R(E){let T=new WeakRef(E);r.get(E).__ref=T,f.add(T),x.register(E,T,T)}function N(E){let T=r.get(E).__ref;T!==void 0&&(f.delete(T),x.unregister(T))}function L(E){K(E.target)}function k(E){C(E.target)}function K(E){E.removeEventListener("dispose",L),N(E),H(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function C(E){E.removeEventListener("dispose",k),N(E),de(E)}function O(){for(let E of f){let T=E.deref();T!==void 0&&(T.isRenderTarget===!0?C(T):K(T))}f.clear(),d.clear()}function H(E){let T=r.get(E);if(T.__webglInit===void 0)return;let U=E.source,ee=p.get(U);if(ee){let j=ee[T.__cacheKey];j.usedTimes--,j.usedTimes===0&&F(E),Object.keys(ee).length===0&&p.delete(U)}r.remove(E)}function F(E){let T=r.get(E);e.deleteTexture(T.__webglTexture);let U=E.source,ee=p.get(U);delete ee[T.__cacheKey],s.memory.textures--}function de(E){let T=r.get(E);T.__depthDisposeCallback&&T.__depthDisposeCallback();let U=E.depthTexture;if(U&&U.renderTarget===E&&K(U),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let ue=0;ue<T.__webglFramebuffer[j].length;ue++)e.deleteFramebuffer(T.__webglFramebuffer[j][ue]);else e.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)e.deleteFramebuffer(T.__webglFramebuffer[j]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let ee=E.textures;for(let j=0,ue=ee.length;j<ue;j++){let ie=r.get(ee[j]);ie.__webglTexture&&(e.deleteTexture(ie.__webglTexture),s.memory.textures--),r.remove(ee[j])}r.remove(E)}let P=0;function $(){P=0}function ge(){return P}function Re(E){P=E}function ae(){let E=P;return E>=n.maxTextures&&tt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+n.maxTextures),P+=1,E}function pe(E){let T=[];return T.push(E.wrapS),T.push(E.wrapT),T.push(E.wrapR||0),T.push(E.magFilter),T.push(E.minFilter),T.push(E.anisotropy),T.push(E.internalFormat),T.push(E.format),T.push(E.type),T.push(E.generateMipmaps),T.push(E.mipmapsAutoUpdate),T.push(E.premultiplyAlpha),T.push(E.flipY),T.push(E.unpackAlignment),T.push(E.colorSpace),T.join()}function Ee(E,T){let U=r.get(E);if(E.isVideoTexture&&He(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){let ee=E.image;if(ee===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{B(U,E,T);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+T)}function be(E,T){let U=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){B(U,E,T);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+T)}function Le(E,T){let U=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){B(U,E,T);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+T)}function xe(E,T){let U=r.get(E);if(E.version>0&&U.__version!==E.version){we(U,E,T);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+T)}let Be={[Oo]:e.REPEAT,[tn]:e.CLAMP_TO_EDGE,[Lu]:e.MIRRORED_REPEAT},ke={[xi]:e.NEAREST,[Hg]:e.NEAREST_MIPMAP_NEAREST,[Fo]:e.NEAREST_MIPMAP_LINEAR,[Di]:e.LINEAR,[Iu]:e.LINEAR_MIPMAP_NEAREST,[Rr]:e.LINEAR_MIPMAP_LINEAR},fe={[qg]:e.NEVER,[qd]:e.ALWAYS,[jg]:e.LESS,[Wd]:e.LEQUAL,[Yg]:e.EQUAL,[Xd]:e.GEQUAL,[Jg]:e.GREATER,[Kg]:e.NOTEQUAL};function Ne(E,T){if(T.type===Pr&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Di||T.magFilter===Iu||T.magFilter===Fo||T.magFilter===Rr||T.minFilter===Di||T.minFilter===Iu||T.minFilter===Fo||T.minFilter===Rr)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Be[T.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Be[T.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Be[T.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,ke[T.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,ke[T.minFilter]),T.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,fe[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==Fo&&T.minFilter!==Rr||T.type===Pr&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ve(E,T){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,T.addEventListener("dispose",L),R(T));let ee=T.source,j=p.get(ee);j===void 0&&(j={},p.set(ee,j));let ue=pe(T);if(ue!==E.__cacheKey){j[ue]===void 0&&(j[ue]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,U=!0),j[ue].usedTimes++;let ie=j[E.__cacheKey];ie!==void 0&&(j[E.__cacheKey].usedTimes--,ie.usedTimes===0&&F(T)),E.__cacheKey=ue,E.__webglTexture=j[ue].texture}return U}function Te(E,T,U){return Math.floor(Math.floor(E/U)/T)}function Me(E,T,U,ee){let j=E.updateRanges;if(j.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,T.width,T.height,U,ee,T.data);else{j.sort((me,I)=>me.start-I.start);let ue=0;for(let me=1;me<j.length;me++){let I=j[ue],Y=j[me],ce=I.start+I.count,Z=Te(Y.start,T.width,4),oe=Te(I.start,T.width,4);Y.start<=ce+1&&Z===oe&&Te(Y.start+Y.count-1,T.width,4)===Z?I.count=Math.max(I.count,Y.start+Y.count-I.start):(++ue,j[ue]=Y)}j.length=ue+1;let ie=i.getParameter(e.UNPACK_ROW_LENGTH),D=i.getParameter(e.UNPACK_SKIP_PIXELS),ne=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,T.width);for(let me=0,I=j.length;me<I;me++){let Y=j[me],ce=Math.floor(Y.start/4),Z=Math.ceil(Y.count/4),oe=ce%T.width,V=Math.floor(ce/T.width),z=Z;i.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),i.pixelStorei(e.UNPACK_SKIP_ROWS,V),i.texSubImage2D(e.TEXTURE_2D,0,oe,V,z,1,U,ee,T.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,ie),i.pixelStorei(e.UNPACK_SKIP_PIXELS,D),i.pixelStorei(e.UNPACK_SKIP_ROWS,ne)}}function B(E,T,U){let ee=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=e.TEXTURE_3D);let j=ve(E,T),ue=T.source;i.bindTexture(ee,E.__webglTexture,e.TEXTURE0+U);let ie=r.get(ue);if(ue.version!==ie.__version||j===!0){if(i.activeTexture(e.TEXTURE0+U),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let X=Mt.getPrimaries(Mt.workingColorSpace),q=T.colorSpace===Mn?null:Mt.getPrimaries(T.colorSpace),Q=T.colorSpace===Mn||X===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q)}i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment);let D=S(T.image,!1,n.maxTextureSize);D=Xe(T,D);let ne=a.convert(T.format,T.colorSpace),me=a.convert(T.type),I=w(T.internalFormat,ne,me,T.normalized,T.colorSpace,T.isVideoTexture);Ne(ee,T);let Y,ce=T.mipmaps,Z=T.isVideoTexture!==!0,oe=ie.__version===void 0||j===!0,V=ue.dataReady,z=b(T,D);if(T.isDepthTexture)I=g(T.format===yn,T.type),oe&&(Z?i.texStorage2D(e.TEXTURE_2D,1,I,D.width,D.height):i.texImage2D(e.TEXTURE_2D,0,I,D.width,D.height,0,ne,me,null));else if(T.isDataTexture)if(ce.length>0){Z&&oe&&i.texStorage2D(e.TEXTURE_2D,z,I,ce[0].width,ce[0].height);for(let X=0,q=ce.length;X<q;X++)Y=ce[X],Z?V&&i.texSubImage2D(e.TEXTURE_2D,X,0,0,Y.width,Y.height,ne,me,Y.data):i.texImage2D(e.TEXTURE_2D,X,I,Y.width,Y.height,0,ne,me,Y.data);T.generateMipmaps=!1}else Z?(oe&&i.texStorage2D(e.TEXTURE_2D,z,I,D.width,D.height),V&&Me(T,D,ne,me)):i.texImage2D(e.TEXTURE_2D,0,I,D.width,D.height,0,ne,me,D.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Z&&oe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,I,ce[0].width,ce[0].height,D.depth);for(let X=0,q=ce.length;X<q;X++)if(Y=ce[X],T.format!==Br)if(ne!==null)if(Z){if(V)if(T.layerUpdates.size>0){let Q=_f(Y.width,Y.height,T.format,T.type);for(let le of T.layerUpdates){let se=Y.data.subarray(le*Q/Y.data.BYTES_PER_ELEMENT,(le+1)*Q/Y.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,le,Y.width,Y.height,1,ne,se)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Y.width,Y.height,D.depth,ne,Y.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,I,Y.width,Y.height,D.depth,0,Y.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?V&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Y.width,Y.height,D.depth,ne,me,Y.data):i.texImage3D(e.TEXTURE_2D_ARRAY,X,I,Y.width,Y.height,D.depth,0,ne,me,Y.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Z&&oe&&i.texStorage2D(e.TEXTURE_2D,z,I,ce[0].width,ce[0].height);for(let X=0,q=ce.length;X<q;X++)Y=ce[X],T.format!==Br?ne!==null?Z?V&&i.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,Y.width,Y.height,ne,Y.data):i.compressedTexImage2D(e.TEXTURE_2D,X,I,Y.width,Y.height,0,Y.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?V&&i.texSubImage2D(e.TEXTURE_2D,X,0,0,Y.width,Y.height,ne,me,Y.data):i.texImage2D(e.TEXTURE_2D,X,I,Y.width,Y.height,0,ne,me,Y.data)}else if(T.isDataArrayTexture)if(Z){if(oe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,z,I,D.width,D.height,D.depth),V)if(T.layerUpdates.size>0){let X=_f(D.width,D.height,T.format,T.type);for(let q of T.layerUpdates){let Q=D.data.subarray(q*X/D.data.BYTES_PER_ELEMENT,(q+1)*X/D.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,q,D.width,D.height,1,ne,me,Q)}T.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,ne,me,D.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,I,D.width,D.height,D.depth,0,ne,me,D.data);else if(T.isData3DTexture)Z?(oe&&i.texStorage3D(e.TEXTURE_3D,z,I,D.width,D.height,D.depth),V&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,ne,me,D.data)):i.texImage3D(e.TEXTURE_3D,0,I,D.width,D.height,D.depth,0,ne,me,D.data);else if(T.isFramebufferTexture){if(oe)if(Z)i.texStorage2D(e.TEXTURE_2D,z,I,D.width,D.height);else{let X=D.width,q=D.height;for(let Q=0;Q<z;Q++)i.texImage2D(e.TEXTURE_2D,Q,I,X,q,0,ne,me,null),X>>=1,q>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in e){let X=e.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),D.parentNode!==X){X.appendChild(D),d.add(T),X.onpaint=q=>{let Q=q.changedElements;for(let le of d)Q.includes(le.image)&&(le.needsUpdate=!0)},X.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,D);else{let q=e.RGBA,Q=e.RGBA,le=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,q,Q,le,D)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ce.length>0){if(Z&&oe){let X=_e(ce[0]);i.texStorage2D(e.TEXTURE_2D,z,I,X.width,X.height)}for(let X=0,q=ce.length;X<q;X++)Y=ce[X],Z?V&&i.texSubImage2D(e.TEXTURE_2D,X,0,0,ne,me,Y):i.texImage2D(e.TEXTURE_2D,X,I,ne,me,Y);T.generateMipmaps=!1}else if(Z){if(oe){let X=_e(D);i.texStorage2D(e.TEXTURE_2D,z,I,X.width,X.height)}V&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ne,me,D)}else i.texImage2D(e.TEXTURE_2D,0,I,ne,me,D);M(T)&&T.mipmapsAutoUpdate===!0&&v(ee),ie.__version=ue.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function we(E,T,U){if(T.image.length!==6)return;let ee=ve(E,T),j=T.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+U);let ue=r.get(j);if(j.version!==ue.__version||ee===!0){i.activeTexture(e.TEXTURE0+U);let ie=Mt.getPrimaries(Mt.workingColorSpace),D=T.colorSpace===Mn?null:Mt.getPrimaries(T.colorSpace),ne=T.colorSpace===Mn||ie===D?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let me=T.isCompressedTexture||T.image[0].isCompressedTexture,I=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let se=0;se<6;se++)!me&&!I?Y[se]=S(T.image[se],!0,n.maxCubemapSize):Y[se]=I?T.image[se].image:T.image[se],Y[se]=Xe(T,Y[se]);let ce=Y[0],Z=a.convert(T.format,T.colorSpace),oe=a.convert(T.type),V=w(T.internalFormat,Z,oe,T.normalized,T.colorSpace),z=T.isVideoTexture!==!0,X=ue.__version===void 0||ee===!0,q=j.dataReady,Q=b(T,ce);Ne(e.TEXTURE_CUBE_MAP,T);let le;if(T.isDepthTexture){if(V=g(T.format===yn,T.type),X)if(z)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,V,ce.width,ce.height);else for(let se=0;se<6;se++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,V,ce.width,ce.height,0,Z,oe,null)}else if(me){z&&X&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Q,V,ce.width,ce.height);for(let se=0;se<6;se++){le=Y[se].mipmaps;for(let Pe=0;Pe<le.length;Pe++){let Se=le[Pe];T.format!==Br?Z!==null?z?q&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Se.width,Se.height,Z,Se.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,V,Se.width,Se.height,0,Se.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Se.width,Se.height,Z,oe,Se.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,V,Se.width,Se.height,0,Z,oe,Se.data)}}}else{if(le=T.mipmaps,z&&X){le.length>0&&Q++;let se=_e(Y[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Q,V,se.width,se.height)}for(let se=0;se<6;se++)if(I){z?q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Y[se].width,Y[se].height,Z,oe,Y[se].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,V,Y[se].width,Y[se].height,0,Z,oe,Y[se].data);for(let Pe=0;Pe<le.length;Pe++){let Se=le[Pe].image[se].image;z?q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Se.width,Se.height,Z,oe,Se.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,V,Se.width,Se.height,0,Z,oe,Se.data)}}else{z?q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Z,oe,Y[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,V,Z,oe,Y[se]);for(let Pe=0;Pe<le.length;Pe++){let Se=le[Pe];z?q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Z,oe,Se.image[se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,V,Z,oe,Se.image[se])}}}M(T)&&T.mipmapsAutoUpdate===!0&&v(e.TEXTURE_CUBE_MAP),ue.__version=j.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function Fe(E,T,U,ee,j,ue){let ie=a.convert(U.format,U.colorSpace),D=a.convert(U.type),ne=w(U.internalFormat,ie,D,U.normalized,U.colorSpace),me=r.get(T),I=r.get(U);if(I.__renderTarget=T,!me.__hasExternalTextures){let Y=Math.max(1,T.width>>ue),ce=Math.max(1,T.height>>ue);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?i.texImage3D(j,ue,ne,Y,ce,T.depth,0,ie,D,null):i.texImage2D(j,ue,ne,Y,ce,0,ie,D,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),it(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,j,I.__webglTexture,0,Ae(T)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ee,j,I.__webglTexture,ue),i.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(E,T,U){if(e.bindRenderbuffer(e.RENDERBUFFER,E),T.depthBuffer){let ee=T.depthTexture,j=ee&&ee.isDepthTexture?ee.type:null,ue=g(T.stencilBuffer,j),ie=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;it(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(T),ue,T.width,T.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(T),ue,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,ue,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,E)}else{let ee=T.textures;for(let j=0;j<ee.length;j++){let ue=ee[j],ie=a.convert(ue.format,ue.colorSpace),D=a.convert(ue.type),ne=w(ue.internalFormat,ie,D,ue.normalized,ue.colorSpace);it(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(T),ne,T.width,T.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(T),ne,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,ne,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ve(E,T,U){let ee=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=r.get(T.depthTexture);j.__renderTarget=T;let ue=ee?T.depthTexture.image[0]:T.depthTexture.image;(!j.__webglTexture||ue.width!==T.width||ue.height!==T.height)&&(ue.width=T.width,ue.height=T.height,T.depthTexture.needsUpdate=!0),ee?xe(T.depthTexture,0):Ee(T.depthTexture,0);let ie=j.__webglTexture,D=Ae(T),ne=ee?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,me=T.depthTexture.format===yn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(T.depthTexture.format===xn)it(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,me,ne,ie,0,D):e.framebufferTexture2D(e.FRAMEBUFFER,me,ne,ie,0);else if(T.depthTexture.format===yn)it(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,me,ne,ie,0,D):e.framebufferTexture2D(e.FRAMEBUFFER,me,ne,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(E){let T=r.get(E),U=E.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==E.depthTexture){let ee=E.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ee){let j=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ee.removeEventListener("dispose",j)};ee.addEventListener("dispose",j),T.__depthDisposeCallback=j}T.__boundDepthTexture=ee}if(E.depthTexture&&!T.__autoAllocateDepthBuffer)if(U)for(let ee=0;ee<6;ee++)Ve(T.__webglFramebuffer[ee],E,ee);else E.texture.mipmaps.length>0?Ve(T.__webglFramebuffer[0],E,0):Ve(T.__webglFramebuffer,E,0);else if(U){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]===void 0)T.__webglDepthbuffer[ee]=e.createRenderbuffer(),ye(T.__webglDepthbuffer[ee],E,!1);else{let j=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[ee];e.bindRenderbuffer(e.RENDERBUFFER,ue),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,ue)}}else if(E.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=e.createRenderbuffer(),ye(T.__webglDepthbuffer,E,!1);else{let ee=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,j)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function $e(E,T,U){let ee=r.get(E);T!==void 0&&Fe(ee.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&je(E)}function W(E){let T=E.texture,U=r.get(E),ee=r.get(T);E.addEventListener("dispose",k),R(E);let j=E.textures,ue=E.isWebGLCubeRenderTarget===!0,ie=j.length>1;if(ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=e.createTexture()),ee.__version=T.version,s.memory.textures++),ue){U.__webglFramebuffer=[];for(let D=0;D<6;D++)if(T.mipmaps.length>0){U.__webglFramebuffer[D]=[];for(let ne=0;ne<T.mipmaps.length;ne++)U.__webglFramebuffer[D][ne]=e.createFramebuffer()}else U.__webglFramebuffer[D]=e.createFramebuffer()}else{if(T.mipmaps.length>0){U.__webglFramebuffer=[];for(let D=0;D<T.mipmaps.length;D++)U.__webglFramebuffer[D]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(ie)for(let D=0,ne=j.length;D<ne;D++){let me=r.get(j[D]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&it(E)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let D=0;D<j.length;D++){let ne=j[D];U.__webglColorRenderbuffer[D]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[D]);let me=a.convert(ne.format,ne.colorSpace),I=a.convert(ne.type),Y=w(ne.internalFormat,me,I,ne.normalized,ne.colorSpace,E.isXRRenderTarget===!0),ce=Ae(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,ce,Y,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+D,e.RENDERBUFFER,U.__webglColorRenderbuffer[D])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(U.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ue){i.bindTexture(e.TEXTURE_CUBE_MAP,ee.__webglTexture),Ne(e.TEXTURE_CUBE_MAP,T);for(let D=0;D<6;D++)if(T.mipmaps.length>0)for(let ne=0;ne<T.mipmaps.length;ne++)Fe(U.__webglFramebuffer[D][ne],E,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,ne);else Fe(U.__webglFramebuffer[D],E,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);M(T)?v(e.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),i.unbindTexture()}else if(ie){for(let D=0,ne=j.length;D<ne;D++){let me=j[D],I=r.get(me),Y=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(Y,I.__webglTexture),Ne(Y,me),Fe(U.__webglFramebuffer,E,me,e.COLOR_ATTACHMENT0+D,Y,0),M(me)&&v(Y)}i.unbindTexture()}else{let D=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(D=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(D,ee.__webglTexture),Ne(D,T),T.mipmaps.length>0)for(let ne=0;ne<T.mipmaps.length;ne++)Fe(U.__webglFramebuffer[ne],E,T,e.COLOR_ATTACHMENT0,D,ne);else Fe(U.__webglFramebuffer,E,T,e.COLOR_ATTACHMENT0,D,0);M(T)?v(D):T.mipmaps.length>0&&e.texParameteri(D,e.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),i.unbindTexture()}E.depthBuffer&&je(E)}function st(E){let T=E.textures;for(let U=0,ee=T.length;U<ee;U++){let j=T[U];if(M(j)&&j.mipmapsAutoUpdate===!0){let ue=y(E),ie=r.get(j).__webglTexture;i.bindTexture(ue,ie),v(ue),i.unbindTexture()}}}let Ke=[];function Qe(E){if(E.samples>0){if(it(E)===!1){let T=E.textures,U=E.width,ee=E.height,j=e.COLOR_BUFFER_BIT,ue=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ie=r.get(E),D=T.length>1;if(D)for(let ne=0;ne<T.length;ne++)i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ne=0;ne<T.length;ne++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),D){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ie.__webglColorRenderbuffer[ne]);let me=r.get(T[ne]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,me,0)}e.blitFramebuffer(0,0,U,ee,0,0,U,ee,j,e.NEAREST),l===!0&&(Ke.length=0,Ke.push(e.COLOR_ATTACHMENT0+ne),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Ke.push(ue),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ke))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),D)for(let ne=0;ne<T.length;ne++){i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.RENDERBUFFER,ie.__webglColorRenderbuffer[ne]);let me=r.get(T[ne]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ne,e.TEXTURE_2D,me,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let T=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function Ae(E){return Math.min(n.maxSamples,E.samples)}function it(E){let T=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function He(E){let T=s.render.frame;h.get(E)!==T&&(h.set(E,T),E.update())}function Xe(E,T){let U=E.colorSpace,ee=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==qo&&U!==Mn&&(Mt.getTransfer(U)===It?(ee!==Br||j!==Qi)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",U)),T}function _e(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=ae,this.resetTextureUnits=$,this.getTextureUnits=ge,this.setTextureUnits=Re,this.setTexture2D=Ee,this.setTexture2DArray=be,this.setTexture3D=Le,this.setTextureCube=xe,this.rebindTextures=$e,this.setupRenderTarget=W,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=it,this.dispose=O}function OS(e,t){function i(r,n=Mn){let a,s=Mt.getTransfer(n);if(r===Qi)return e.UNSIGNED_BYTE;if(r===Nu)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Uu)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Od)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Fd)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Nd)return e.BYTE;if(r===Ud)return e.SHORT;if(r===As)return e.UNSIGNED_SHORT;if(r===Du)return e.INT;if(r===Fr)return e.UNSIGNED_INT;if(r===Pr)return e.FLOAT;if(r===zr)return e.HALF_FLOAT;if(r===zd)return e.ALPHA;if(r===Bd)return e.RGB;if(r===Br)return e.RGBA;if(r===xn)return e.DEPTH_COMPONENT;if(r===yn)return e.DEPTH_STENCIL;if(r===Ou)return e.RED;if(r===Fu)return e.RED_INTEGER;if(r===Yn)return e.RG;if(r===zu)return e.RG_INTEGER;if(r===Bu)return e.RGBA_INTEGER;if(r===zo||r===Bo||r===ko||r===Vo)if(s===It)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ku||r===Vu||r===Hu||r===Gu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ku)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wu||r===Xu||r===qu||r===ju||r===Yu||r===Ho||r===Ju)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wu||r===Xu)return s===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qu)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===ju)return a.COMPRESSED_R11_EAC;if(r===Yu)return a.COMPRESSED_SIGNED_R11_EAC;if(r===Ho)return a.COMPRESSED_RG11_EAC;if(r===Ju)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ku||r===Zu||r===$u||r===Qu||r===ec||r===tc||r===ic||r===rc||r===nc||r===ac||r===sc||r===oc||r===lc||r===uc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ku)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zu)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$u)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qu)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ec)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tc)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ic)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rc)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nc)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ac)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sc)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===oc)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lc)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uc)return s===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cc||r===hc||r===dc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===cc)return s===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pc||r===fc||r===Go||r===mc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===pc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ea?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
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

}`,BS=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:FS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kS=class extends Jn{constructor(e,t){super();let i=this,r=null,n=1,a=null,s="local-floor",o=1,l=null,u=null,h=null,d=null,c=null,p=null,f=typeof XRWebGLBinding<"u",x=new BS,_={},m=t.getContextAttributes(),S=null,M=null,v=[],y=[],w=new Ie,g=null,b=null,R=new vr;R.viewport=new qt;let N=new vr;N.viewport=new qt;let L=[R,N],k=new G_,K=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let pe=v[ae];return pe===void 0&&(pe=new Ac,v[ae]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ae){let pe=v[ae];return pe===void 0&&(pe=new Ac,v[ae]=pe),pe.getGripSpace()},this.getHand=function(ae){let pe=v[ae];return pe===void 0&&(pe=new Ac,v[ae]=pe),pe.getHandSpace()};function O(ae){let pe=y.indexOf(ae.inputSource);if(pe===-1)return;let Ee=v[pe];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,l||a),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",F);for(let ae=0;ae<v.length;ae++){let pe=y[ae];pe!==null&&(y[ae]=null,v[ae].disconnect(pe))}K=null,C=null,x.reset();for(let ae in _)delete _[ae];if(e.setRenderTarget(S),c=null,d=null,h=null,r=null,M=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(w.width,w.height,!1),b!==null){let ae=b.camera;ae.fov=b.fov,ae.zoom=b.zoom,ae.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){n=ae,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){s=ae,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return h===null&&f&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(w),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ee=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?yn:xn,Ee=m.stencil?Ea:Fr);let Le={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:n};h=this.getBinding(),d=h.createProjectionLayer(Le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Lr(d.textureWidth,d.textureHeight,{format:Br,type:Qi,depthTexture:new Ha(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};c=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),M=new Lr(c.framebufferWidth,c.framebufferHeight,{format:Br,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await r.requestReferenceSpace(s),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(ae){for(let pe=0;pe<ae.removed.length;pe++){let Ee=ae.removed[pe],be=y.indexOf(Ee);be>=0&&(y[be]=null,v[be].disconnect(Ee))}for(let pe=0;pe<ae.added.length;pe++){let Ee=ae.added[pe],be=y.indexOf(Ee);if(be===-1){for(let xe=0;xe<v.length;xe++)if(xe>=y.length){y.push(Ee),be=xe;break}else if(y[xe]===null){y[xe]=Ee,be=xe;break}if(be===-1)break}let Le=v[be];Le&&Le.connect(Ee)}}function de(ae,pe){pe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(pe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let pe=ae.near,Ee=ae.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(Ee=x.depthFar)),k.near=N.near=R.near=pe,k.far=N.far=R.far=Ee,(K!==k.near||C!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),K=k.near,C=k.far),k.layers.mask=ae.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let be=ae.parent,Le=k.cameras;de(k,be);for(let xe=0;xe<Le.length;xe++)de(Le[xe],be);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),b===null&&ae.isPerspectiveCamera&&(b={camera:ae,fov:ae.fov,zoom:ae.zoom}),P(ae,k,be)};function P(ae,pe,Ee){Ee===null?ae.matrix.copy(pe.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(pe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Cs*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&c===null))return o},this.setFoveation=function(ae){o=ae,d!==null&&(d.fixedFoveation=ae),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(ae){return _[ae]};let $=null;function ge(ae,pe){if(u=pe.getViewerPose(l||a),p=pe,u!==null){let Ee=u.views;c!==null&&(e.setRenderTargetFramebuffer(M,c.framebuffer),e.setRenderTarget(M));let be=!1;Ee.length!==k.cameras.length&&(k.cameras.length=0,be=!0);for(let xe=0;xe<Ee.length;xe++){let Be=Ee[xe],ke=null;if(c!==null)ke=c.getViewport(Be);else{let Ne=h.getViewSubImage(d,Be);ke=Ne.viewport,xe===0&&(e.setRenderTargetTextures(M,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(M))}let fe=L[xe];fe===void 0&&(fe=new vr,fe.layers.enable(xe),fe.viewport=new qt,L[xe]=fe),fe.matrix.fromArray(Be.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Be.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ke.x,ke.y,ke.width,ke.height),xe===0&&(k.matrix.copy(fe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),be===!0&&k.cameras.push(fe)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){h=i.getBinding();let xe=h.getDepthInformation(Ee[0]);xe&&xe.isValid&&xe.texture&&x.init(xe,r.renderState)}if(Le&&Le.includes("camera-access")&&f){e.state.unbindTexture(),h=i.getBinding();for(let xe=0;xe<Ee.length;xe++){let Be=Ee[xe].camera;if(Be){let ke=_[Be];ke||(ke=new Fp,_[Be]=ke);let fe=h.getCameraImage(Be);ke.sourceTexture=fe}}}}for(let Ee=0;Ee<v.length;Ee++){let be=y[Ee],Le=v[Ee];be!==null&&Le!==void 0&&Le.update(be,pe,l||a)}$&&$(ae,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),p=null}let Re=new xf;Re.setAnimationLoop(ge),this.setAnimationLoop=function(ae){$=ae},this.dispose=function(){}}},VS=new kt,Kf=new lt;Kf.set(-1,0,0,0,1,0,0,0,1);function HS(e,t){function i(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function r(_,m){m.color.getRGB(_.fogColor.value,rf(e)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function n(_,m,S,M,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(_,m):m.isMeshLambertMaterial?(a(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(_,m),d(_,m)):m.isMeshPhongMaterial?(a(_,m),h(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(_,m),c(_,m),m.isMeshPhysicalMaterial&&p(_,m,v)):m.isMeshMatcapMaterial?(a(_,m),f(_,m)):m.isMeshDepthMaterial?a(_,m):m.isMeshDistanceMaterial?(a(_,m),x(_,m)):m.isMeshNormalMaterial?a(_,m):m.isLineBasicMaterial?(s(_,m),m.isLineDashedMaterial&&o(_,m)):m.isPointsMaterial?l(_,m,S,M):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,i(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,i(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,i(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Ti&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,i(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Ti&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,i(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,i(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let S=t.get(m),M=S.envMap,v=S.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(VS.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Kf),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,_.aoMapTransform))}function s(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,i(m.map,_.mapTransform))}function o(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,S,M){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*S,_.scale.value=M*.5,m.map&&(_.map.value=m.map,i(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,i(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,i(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,i(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function c(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,S){_.ior.value=m.ior,m.diffuseRoughness>0&&(_.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=m.diffuseRoughnessMap,i(m.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ti&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,_.specularIntensityMapTransform))}function f(_,m){m.matcap&&(_.matcap.value=m.matcap)}function x(_,m){let S=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function GS(e,t,i,r){let n={},a={};function s(S,M){let v=M.program;r.uniformBlockBinding(S,v,n[S.id])}function o(S,M){let v=n[S.id];v===void 0&&(f(S),v=l(S),n[S.id]=v,S.addEventListener("dispose",_));let y=M.program;r.updateUBOMapping(S,y);let w=t.render.frame;a[S.id]!==w&&(u(S),a[S.id]=w)}function l(S){let M=e.createBuffer(),v=S.__size,y=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,v,y),e.bindBuffer(e.UNIFORM_BUFFER,null),M}function u(S){let M=n[S.id],v=S.uniforms,y=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let w=0,g=v.length;w<g;w++){let b=v[w];if(Array.isArray(b))for(let R=0,N=b.length;R<N;R++)h(b[R],w,R,y);else h(b,w,0,y)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(S,M,v,y){if(c(S,M,v,y)===!0){let w=S.__offset,g=S.value;if(Array.isArray(g)){let b=0;for(let R=0;R<g.length;R++){let N=g[R],L=x(N,!0);d(N,S.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,S.__data)}}function d(S,M,v){typeof S=="number"||typeof S=="boolean"?M[v]=S:S.isMatrix3?(M[v]=S.elements[0],M[v+1]=S.elements[1],M[v+2]=S.elements[2],M[v+3]=0,M[v+4]=S.elements[3],M[v+5]=S.elements[4],M[v+6]=S.elements[5],M[v+7]=0,M[v+8]=S.elements[6],M[v+9]=S.elements[7],M[v+10]=S.elements[8],M[v+11]=0):ArrayBuffer.isView(S)?M.set(S.subarray(0,M.length-v),v):S.toArray(M,v)}function c(S,M,v,y){let w=S.value,g=M+"_"+v;if(Array.isArray(w)){y[g]===void 0&&(y[g]=[]);let b=y[g],R=!1;for(let N=0;N<w.length;N++)p(w[N],b,N)===!0&&(R=!0);return R}return p(w,y,g)}function p(S,M,v){if(M[v]===void 0)return typeof S=="number"||typeof S=="boolean"?M[v]=S:ArrayBuffer.isView(S)?M[v]=S.slice():M[v]=S.clone(),!0;{let y=M[v];if(typeof S=="number"||typeof S=="boolean"){if(y!==S)return M[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(y.equals(S)===!1)return y.copy(S),!0}}return!1}function f(S){let M=S.uniforms,v=0,y=16;for(let g=0,b=M.length;g<b;g++){let R=Array.isArray(M[g])?M[g]:[M[g]];for(let N=0,L=R.length;N<L;N++){let k=R[N],K=Array.isArray(k.value)?k.value:[k.value],C=Array.isArray(M[g])||Array.isArray(k.value),O=v;for(let F=0,de=K.length;F<de;F++){let P=K[F],$=x(P,C),ge=v%y,Re=ge%$.boundary,ae=ge+Re;v+=Re,ae!==0&&y-ae<$.storage&&(v+=y-ae),F===0&&(O=v),v+=$.storage}let H=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new H((v-O)/Float32Array.BYTES_PER_ELEMENT),k.__offset=O}}let w=v%y;return w>0&&(v+=y-w),S.__size=v,S.__cache={},this}function x(S,M){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",S),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function _(S){let M=S.target;M.removeEventListener("dispose",_),e.deleteBuffer(n[M.id]),delete n[M.id],delete a[M.id]}function m(){for(let S in n)e.deleteBuffer(n[S]);n={},a={}}return{bind:s,update:o,dispose:m}}var WS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wr=null;function XS(){return Wr===null&&(Wr=new Ep(WS,16,16,Yn,zr),Wr.name="DFG_LUT",Wr.minFilter=Di,Wr.magFilter=Di,Wr.wrapS=tn,Wr.wrapT=tn,Wr.generateMipmaps=!1,Wr.needsUpdate=!0),Wr}var Zf=class{constructor(e={}){let{canvas:t=ev(),context:i=null,depth:r=!0,stencil:n=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Qi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let f=c,x=new Set([Bu,zu,Fu]),_=new Set([Qi,Fr,As,Ea,Nu,Uu]),m=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},v=null,y=null,w=[],g=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=en,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,L=null,k=null,K=null,C=null;this._outputColorSpace=Hi;let O=0,H=0,F=null,de=-1,P=null,$=new qt,ge=new qt,Re=null,ae=new at(0),pe=0,Ee=t.width,be=t.height,Le=1,xe=null,Be=null,ke=new qt(0,0,Ee,be),fe=new qt(0,0,Ee,be),Ne=!1,ve=new Bs,Te=new Vv,Me=!1,B=!1,we=new kt,Fe=new J,ye=new qt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function $e(){return F===null?Le:1}let W=i;function st(A,G){return t.getContext(A,G)}let Ke,Qe,Ae,it,He,Xe,_e,E,T,U,ee,j,ue,ie,D,ne,me,I,Y,ce,Z,oe,V;try{let A={alpha:!0,depth:r,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",le,!1),W===null){let G="webgl2";if(W=st(G,A),W===null)throw st(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}z()}catch(A){throw t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",le,!1),rt("WebGLRenderer: "+A.message),A}function z(){Ke=new Jy(W),Ke.init(),Z=new OS(W,Ke),Qe=new zy(W,Ke,e,Z),Ae=new NS(W,Ke),Qe.reversedDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),k=W.createFramebuffer(),K=W.createFramebuffer(),C=W.createFramebuffer(),it=new $y(W),He=new yS,Xe=new US(W,Ke,Ae,He,Qe,Z,it),_e=new Yy(R),E=new e1(W),oe=new Oy(W,E),T=new Ky(W,E,it,oe),U=new eM(W,T,E,oe,it),I=new Qy(W,Qe,Xe),D=new By(He),ee=new xS(R,_e,Ke,Qe,oe,D),j=new HS(R,He),ue=new SS,ie=new RS(Ke),me=new Uy(R,_e,Ae,U,p,o),ne=new DS(R,U,Qe),V=new GS(W,it,Qe,Ae),Y=new Fy(W,Ke,it),ce=new Zy(W,Ke,it),it.programs=ee.programs,R.capabilities=Qe,R.extensions=Ke,R.properties=He,R.renderLists=ue,R.shadowMap=ne,R.state=Ae,R.info=it}f!==Qi&&(b=new iM(f,t.width,t.height,s,r,n));let X=new kS(R,W);this.xr=X,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=Ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(A){A!==void 0&&(Le=A,this.setSize(Ee,be,!1))},this.getSize=function(A){return A.set(Ee,be)},this.setSize=function(A,G,he=!0){if(X.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=A,be=G,t.width=Math.floor(A*Le),t.height=Math.floor(G*Le),he===!0&&(t.style.width=A+"px",t.style.height=G+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Ee*Le,be*Le).floor()},this.setDrawingBufferSize=function(A,G,he){Ee=A,be=G,Le=he,t.width=Math.floor(A*he),t.height=Math.floor(G*he),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(f===Qi){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,G,he,te){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,G,he,te),Ae.viewport($.copy(ke).multiplyScalar($e()).round())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,G,he,te){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,G,he,te),Ae.scissor(ge.copy(fe).multiplyScalar($e()).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Ae.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){xe=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,he=!0){let te=0;if(A){let re=!1;if(F!==null){let Ce=F.texture.format;re=x.has(Ce)}if(re){let Ce=F.texture.type,Ue=_.has(Ce),De=me.getClearColor(),Ge=me.getClearAlpha(),Ze=De.r,_t=De.g,bt=De.b;Ue?(m[0]=Ze,m[1]=_t,m[2]=bt,m[3]=Ge,W.clearBufferuiv(W.COLOR,0,m)):(S[0]=Ze,S[1]=_t,S[2]=bt,S[3]=Ge,W.clearBufferiv(W.COLOR,0,S))}else te|=W.COLOR_BUFFER_BIT}G&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",le,!1),me.dispose(),ue.dispose(),ie.dispose(),Xe.dispose(),He.dispose(),_e.dispose(),U.dispose(),T.dispose(),oe.dispose(),V.dispose(),ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",ut),X.removeEventListener("sessionend",ct),xt.stop()};function q(A){A.preventDefault(),Jd("WebGLRenderer: Context Lost."),N=!0}function Q(){Jd("WebGLRenderer: Context Restored."),N=!1;let A=it.autoReset,G=ne.enabled,he=ne.autoUpdate,te=ne.needsUpdate,re=ne.type;z(),it.autoReset=A,ne.enabled=G,ne.autoUpdate=he,ne.needsUpdate=te,ne.type=re}function le(A){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){let G=A.target;G.removeEventListener("dispose",se),Pe(G)}function Pe(A){Se(A),He.remove(A)}function Se(A){let G=He.get(A).programs;G!==void 0&&(G.forEach(function(he){ee.releaseProgram(he)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,he,te,re,Ce){G===null&&(G=Ve);let Ue=re.isMesh&&re.matrixWorld.determinantAffine()<0,De=ii(A,G,he,te,re);Ae.setMaterial(te,Ue);let Ge=he.index,Ze=1;if(te.wireframe===!0){if(Ge=T.getWireframeAttribute(he),Ge===void 0)return;Ze=2}let _t=he.drawRange,bt=he.attributes.position,qe=_t.start*Ze,Rt=(_t.start+_t.count)*Ze;Ce!==null&&(qe=Math.max(qe,Ce.start*Ze),Rt=Math.min(Rt,(Ce.start+Ce.count)*Ze)),Ge!==null?(qe=Math.max(qe,0),Rt=Math.min(Rt,Ge.count)):bt!=null&&(qe=Math.max(qe,0),Rt=Math.min(Rt,bt.count));let ai=Rt-qe;if(ai<0||ai===1/0)return;oe.setup(re,te,De,he,Ge);let Ot,Bt=Y;if(Ge!==null&&(Ot=E.get(Ge),Bt=ce,Bt.setIndex(Ot)),re.isMesh)te.wireframe===!0?(Ae.setLineWidth(te.wireframeLinewidth*$e()),Bt.setMode(W.LINES)):Bt.setMode(W.TRIANGLES);else if(re.isLine){let $t=te.linewidth;$t===void 0&&($t=1),Ae.setLineWidth($t*$e()),re.isLineSegments?Bt.setMode(W.LINES):re.isLineLoop?Bt.setMode(W.LINE_LOOP):Bt.setMode(W.LINE_STRIP)}else re.isPoints?Bt.setMode(W.POINTS):re.isSprite&&Bt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))Bt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let $t=re._multiDrawStarts,Ye=re._multiDrawCounts,Li=re._multiDrawCount,Gn=Ge?E.get(Ge).bytesPerElement:1,Wn=He.get(te).currentProgram.getUniforms();for(let Si=0;Si<Li;Si++)Wn.setValue(W,"_gl_DrawID",Si),Bt.render($t[Si]/Gn,Ye[Si])}else if(re.isInstancedMesh)Bt.renderInstances(qe,ai,re.count);else if(he.isInstancedBufferGeometry){let $t=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ye=Math.min(he.instanceCount,$t);Bt.renderInstances(qe,ai,Ye)}else Bt.render(qe,ai)};function nt(A,G,he,te){L!==null&&A.isNodeMaterial&&L.setObject(te,A),Me===!0&&D.setState(A,he,!1),A.transparent===!0&&A.side===Ar&&A.forceSinglePass===!1?(A.side=Ti,A.needsUpdate=!0,Et(A,G,te),A.side=qn,A.needsUpdate=!0,Et(A,G,te),A.side=Ar):Et(A,G,te)}this.compile=function(A,G,he=null){he===null&&(he=A),L!==null&&L.renderStart(A,G,he),y=ie.get(he),y.init(G),g.push(y),he.traverseVisible(function(re){re.isLight&&re.layers.test(G.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),A!==he&&A.traverseVisible(function(re){re.isLight&&re.layers.test(G.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(),L!==null&&L.updateLights(y.state.lightsArray),B=this.localClippingEnabled,Me=D.init(this.clippingPlanes,B),Me===!0&&D.setGlobalState(this.clippingPlanes,G),L!==null&&ne.render(y.state.shadowsArray,he,G);let te=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let Ce=re.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){let De=Ce[Ue];nt(De,he,G,re),te.add(De)}else nt(Ce,he,G,re),te.add(Ce)}),y=g.pop(),L!==null&&L.renderEnd(),te},this.compileAsync=function(A,G,he=null){let te=this.compile(A,G,he);return new Promise(re=>{function Ce(){if(te.forEach(function(Ue){let De=He.get(Ue).currentProgram;(De===void 0||De.isReady())&&te.delete(Ue)}),te.size===0){re(A);return}setTimeout(Ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ze=null;function Je(A){ze&&ze(A)}function ut(){xt.stop()}function ct(){xt.start()}let xt=new xf;xt.setAnimationLoop(Je),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(A){ze=A,X.setAnimationLoop(A),A===null?xt.stop():xt.start()},X.addEventListener("sessionstart",ut),X.addEventListener("sessionend",ct),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(A,G);let he=X.enabled===!0&&X.isPresenting===!0,te=b!==null&&(F===null||he)&&b.begin(R,F);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(G),G=X.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,F),y=ie.get(A,g.length),y.init(G),y.state.textureUnits=Xe.getTextureUnits(),g.push(y),we.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?Te.setFromArrayCamera(G):ve.setFromProjectionMatrix(we,Cr,G.reversedDepth),B=this.localClippingEnabled,Me=D.init(this.clippingPlanes,B),v=ue.get(A,w.length),v.init(),w.push(v),this.info.render.frame++,X.enabled===!0&&X.isPresenting===!0){let Ce=R.xr.getDepthSensingMesh();Ce!==null&&yt(Ce,G,-1/0,R.sortObjects)}yt(A,G,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(y.state.lightsArray),R.sortObjects===!0&&v.sort(xe,Be),je=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,je&&me.addToRenderList(v,A),this.info.autoReset===!0&&this.info.reset(),Me===!0&&D.beginShadows();let re=y.state.shadowsArray;if(ne.render(re,A,G),Me===!0&&D.endShadows(),(te&&b.hasRenderPass())===!1){let Ce=v.opaque,Ue=v.transmissive;if(y.setupLights(),G.isArrayCamera){let De=G.cameras;if(Ue.length>0)for(let Ge=0,Ze=De.length;Ge<Ze;Ge++){let _t=De[Ge];Xt(Ce,Ue,A,_t)}je&&me.render(A);for(let Ge=0,Ze=De.length;Ge<Ze;Ge++){let _t=De[Ge];Wt(v,A,_t,_t.viewport)}}else Ue.length>0&&Xt(Ce,Ue,A,G),je&&me.render(A),Wt(v,A,G)}F!==null&&H===0&&(Xe.updateMultisampleRenderTarget(F),Xe.updateRenderTargetMipmap(F)),te&&b.end(R),A.isScene===!0&&A.onAfterRender(R,A,G),oe.resetDefaultState(),de=-1,P=null,g.pop(),g.length>0?(y=g[g.length-1],Xe.setTextureUnits(y.state.textureUnits),Me===!0&&D.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,L!==null&&L.renderEnd()};function yt(A,G,he,te){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)he=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){let Ce=G.isArrayCamera?Te:ve;if(!A.frustumCulled||A.intersectsFrustum(Ce)){te&&ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);let Ue=U.update(A),De=A.material;De.visible&&v.push(A,Ue,De,he,ye.z,null,G)}}else if(A.isMesh||A.isLine||A.isPoints){let Ce=G.isArrayCamera?Te:ve;if(!A.frustumCulled||A.intersectsFrustum(Ce)){let Ue=U.update(A),De=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ye.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ye.copy(Ue.boundingSphere.center)),ye.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(De)){let Ge=Ue.groups;for(let Ze=0,_t=Ge.length;Ze<_t;Ze++){let bt=Ge[Ze],qe=De[bt.materialIndex];qe&&qe.visible&&v.push(A,Ue,qe,he,ye.z,bt,G)}}else De.visible&&v.push(A,Ue,De,he,ye.z,null,G)}}}let re=A.children;for(let Ce=0,Ue=re.length;Ce<Ue;Ce++)yt(re[Ce],G,he,te)}function Wt(A,G,he,te){let{opaque:re,transmissive:Ce,transparent:Ue}=A;y.setupLightsView(he),Me===!0&&D.setGlobalState(R.clippingPlanes,he),te&&Ae.viewport($.copy(te)),re.length>0&&ot(re,G,he),Ce.length>0&&ot(Ce,G,he),Ue.length>0&&ot(Ue,G,he),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Xt(A,G,he,te){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[te.id]===void 0){let bt=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[te.id]=new Lr(1,1,{generateMipmaps:!0,type:bt?zr:Qi,minFilter:Rr,samples:Math.max(4,Qe.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}let re=y.state.transmissionRenderTarget[te.id],Ce=te.viewport||$;re.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);let Ue=R.getRenderTarget(),De=R.getActiveCubeFace(),Ge=R.getActiveMipmapLevel();R.setRenderTarget(re),R.getClearColor(ae),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),je&&me.render(he);let Ze=R.toneMapping;R.toneMapping=en;let _t=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),y.setupLightsView(te),Me===!0&&D.setGlobalState(R.clippingPlanes,te),ot(A,he,te),Xe.updateMultisampleRenderTarget(re),Xe.updateRenderTargetMipmap(re),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let qe=0,Rt=G.length;qe<Rt;qe++){let ai=G[qe],{object:Ot,geometry:Bt,material:$t,group:Ye}=ai;if($t.side===Ar&&Ot.layers.test(te.layers)){let Li=$t.side;$t.side=Ti,$t.needsUpdate=!0,et(Ot,he,te,Bt,$t,Ye),$t.side=Li,$t.needsUpdate=!0,bt=!0}}bt===!0&&(Xe.updateMultisampleRenderTarget(re),Xe.updateRenderTargetMipmap(re))}R.setRenderTarget(Ue,De,Ge),R.setClearColor(ae,pe),_t!==void 0&&(te.viewport=_t),R.toneMapping=Ze}function ot(A,G,he){let te=G.isScene===!0?G.overrideMaterial:null;for(let re=0,Ce=A.length;re<Ce;re++){let Ue=A[re],{object:De,geometry:Ge,group:Ze}=Ue,_t=Ue.material;_t.allowOverride===!0&&te!==null&&(_t=te),De.layers.test(he.layers)&&et(De,G,he,Ge,_t,Ze)}}function et(A,G,he,te,re,Ce){L!==null&&re.isNodeMaterial&&L.setObject(A,re),A.onBeforeRender(R,G,he,te,re,Ce),A.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(R,G,he,te,A,Ce),re.transparent===!0&&re.side===Ar&&re.forceSinglePass===!1?(re.side=Ti,re.needsUpdate=!0,R.renderBufferDirect(he,G,te,re,A,Ce),re.side=qn,re.needsUpdate=!0,R.renderBufferDirect(he,G,te,re,A,Ce),re.side=Ar):R.renderBufferDirect(he,G,te,re,A,Ce),A.onAfterRender(R,G,he,te,re,Ce)}function Lt(A){let G=0;for(let he of A)he.texture!==null&&G++;return G}function Et(A,G,he){G.isScene!==!0&&(G=Ve);let te=He.get(A),re=y.state.lights,Ce=y.state.shadowsArray,Ue=re.state.version,De=ee.getParameters(A,re.state,Ce,G,he,y.state.lightProbeGridArray),Ge=ee.getProgramCacheKey(De),Ze=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,te.fog=G.fog;let _t=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=_e.get(A.envMap||te.environment,_t),te.envMapRotation=te.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",se),Ze=new Map,te.programs=Ze,te.programVariants=new Map);let bt=Ze.get(Ge);if(bt!==void 0){if(te.currentProgram===bt&&te.lightsStateVersion===Ue)return Tt(A,De),bt}else De.uniforms=ee.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,he,De),A.onBeforeCompile(De,R),bt=ee.acquireProgram(De,Ge),Ze.set(Ge,bt),te.uniforms=De.uniforms;let qe=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=D.uniform),Tt(A,De),te.needsLights=pr(A),te.lightsStateVersion=Ue,te.needsLights&&(qe.ambientLightColor.value=re.state.ambient,qe.lightProbe.value=re.state.probe,qe.sunLights.value=re.state.sun,qe.sunLightShadows.value=re.state.sunShadow,qe.directionalLights.value=re.state.directional,qe.directionalLightShadows.value=re.state.directionalShadow,qe.spotLights.value=re.state.spot,qe.spotLightShadows.value=re.state.spotShadow,qe.rectAreaLights.value=re.state.rectArea,qe.ltc_1.value=re.state.rectAreaLTC1,qe.ltc_2.value=re.state.rectAreaLTC2,qe.pointLights.value=re.state.point,qe.pointLightShadows.value=re.state.pointShadow,qe.hemisphereLights.value=re.state.hemi,qe.sunShadowMatrix.value=re.state.sunShadowMatrix,qe.sunShadowCascade.value=re.state.sunShadowCascade,qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,qe.spotLightMatrix.value=re.state.spotLightMatrix,qe.spotLightMap.value=re.state.spotLightMap,qe.pointShadowMatrix.value=re.state.pointShadowMatrix),te.numLightProbeGrids=Lt(y.state.lightProbeGridArray),te.currentProgram=bt,te.uniformsList=null,bt}function ti(A,G,he,te,re){let Ce=He.get(A),Ue=Ce.currentProgram.id+","+te+","+re,De=Ce.programVariants.get(Ue);return De===void 0?(De=Et(A,G,he),Ce.programVariants.set(Ue,De)):(Ce.currentProgram=De,Ce.uniformsList=null,Ce.outputColorSpace=te,Ce.toneMapping=re),De}function zt(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=Cl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Tt(A,G){let he=He.get(A);he.outputColorSpace=G.outputColorSpace,he.batching=G.batching,he.batchingColor=G.batchingColor,he.instancing=G.instancing,he.instancingColor=G.instancingColor,he.instancingMorph=G.instancingMorph,he.skinning=G.skinning,he.morphTargets=G.morphTargets,he.morphNormals=G.morphNormals,he.morphColors=G.morphColors,he.morphTargetsCount=G.morphTargetsCount,he.numClippingPlanes=G.numClippingPlanes,he.numIntersection=G.numClipIntersection,he.vertexAlphas=G.vertexAlphas,he.vertexTangents=G.vertexTangents,he.toneMapping=G.toneMapping}function ii(A,G,he,te,re){G.isScene!==!0&&(G=Ve),Xe.resetTextureUnits();let Ce=G.fog,Ue=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?G.environment:null,De=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Mt.workingColorSpace,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=_e.get(te.envMap||Ue,Ge),_t=te.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,bt=!!he.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!he.morphAttributes.position,Rt=!!he.morphAttributes.normal,ai=!!he.morphAttributes.color,Ot=en;te.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ot=R.toneMapping);let Bt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,$t=Bt!==void 0?Bt.length:0,Ye=He.get(te),Li=y.state.lights;if(Me===!0&&(B===!0||A!==P)){let Gt=A===P&&te.id===de;D.setState(te,A,Gt)}let Gn=!1,Wn=!1;te.version===Ye.__version?Ye.needsLights&&Ye.lightsStateVersion!==Li.state.version||re.isBatchedMesh&&Ye.batching===!1||!re.isBatchedMesh&&Ye.batching===!0||re.isBatchedMesh&&Ye.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ye.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ye.instancing===!1||!re.isInstancedMesh&&Ye.instancing===!0||re.isSkinnedMesh&&Ye.skinning===!1||!re.isSkinnedMesh&&Ye.skinning===!0||re.isInstancedMesh&&Ye.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ye.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ye.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ye.instancingMorph===!1&&re.morphTexture!==null||Ye.envMap!==Ze||te.fog===!0&&Ye.fog!==Ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==D.numPlanes||Ye.numIntersection!==D.numIntersection)||Ye.vertexAlphas!==_t||Ye.vertexTangents!==bt||Ye.morphTargets!==qe||Ye.morphNormals!==Rt||Ye.morphColors!==ai||Ye.morphTargetsCount!==$t||Ye.numLightProbeGrids!==Lt(y.state.lightProbeGridArray)?Gn=!0:(Ye.outputColorSpace!==De||Ye.toneMapping!==Ot)&&(Wn=!0):(Gn=!0,Ye.__version=te.version);let Si=Ye.currentProgram;(Gn===!0||Wn===!0)&&(Si=Wn===!0?ti(te,G,re,De,Ot):Et(te,G,re),L&&te.isNodeMaterial&&L.onUpdateProgram(te,Si,Ye));let No=!1,_n=!1,Xn=!1,wt=Si.getUniforms(),_i=Ye.uniforms;if(Ae.useProgram(Si.program)&&(No=!0,_n=!0,Xn=!0),te.id!==de&&(de=te.id,_n=!0),No||P!==A){Ae.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),wt.setValue(W,"projectionMatrix",A.projectionMatrix),wt.setValue(W,"viewMatrix",A.matrixWorldInverse);let Gt=wt.map.cameraPosition;Gt!==void 0&&Gt.setValue(W,Fe.setFromMatrixPosition(A.matrixWorld)),Qe.logarithmicDepthBuffer&&wt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&wt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),P!==A&&(P=A,_n=!0,Xn=!0)}if(Ye.needsLights&&(Li.state.sunShadowMap.length>0&&wt.setValue(W,"sunShadowMap",Li.state.sunShadowMap,Xe),Li.state.directionalShadowMap.length>0&&wt.setValue(W,"directionalShadowMap",Li.state.directionalShadowMap,Xe),Li.state.spotShadowMap.length>0&&wt.setValue(W,"spotShadowMap",Li.state.spotShadowMap,Xe),Li.state.pointShadowMap.length>0&&wt.setValue(W,"pointShadowMap",Li.state.pointShadowMap,Xe)),re.isSkinnedMesh){wt.setOptional(W,re,"bindMatrix"),wt.setOptional(W,re,"bindMatrixInverse");let Gt=re.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),wt.setValue(W,"boneTexture",Gt.boneTexture,Xe))}re.isBatchedMesh&&(wt.setOptional(W,re,"batchingTexture"),wt.setValue(W,"batchingTexture",re._matricesTexture,Xe),wt.setOptional(W,re,"batchingIdTexture"),wt.setValue(W,"batchingIdTexture",re._indirectTexture,Xe),wt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&wt.setValue(W,"batchingColorTexture",re._colorsTexture,Xe));let Er=he.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&I.update(re,he,Si),(_n||Ye.receiveShadow!==re.receiveShadow)&&(Ye.receiveShadow=re.receiveShadow,wt.setValue(W,"receiveShadow",re.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&G.environment!==null&&(_i.envMapIntensity.value=G.environmentIntensity),_i.dfgLUT!==void 0&&(_i.dfgLUT.value=XS()),_n){if(wt.setValue(W,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&br(_i,Xn),Ce&&te.fog===!0&&j.refreshFogUniforms(_i,Ce),j.refreshMaterialUniforms(_i,te,Le,be,y.state.transmissionRenderTarget[A.id]),Ye.needsLights&&Ye.numLightProbeGrids>0){let Gt=M,Ii=0;for(let Qr of y.state.lightProbeGridArray)Qr.texture!==null&&(Gt.textures[Ii]=Qr.texture,Gt.min[Ii]=Qr.boundingBox.min,Gt.max[Ii]=Qr.boundingBox.max,Gt.resolution[Ii]=Qr.resolution,Ii++);for(let Qr in Gt)Gt[Qr].length=Ii;_i.probesSH.value=Gt.textures,_i.probesMin.value=Gt.min,_i.probesMax.value=Gt.max,_i.probesResolution.value=Gt.resolution}Cl.upload(W,zt(Ye),_i,Xe)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Cl.upload(W,zt(Ye),_i,Xe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&wt.setValue(W,"center",re.center),wt.setValue(W,"modelViewMatrix",re.modelViewMatrix),wt.setValue(W,"normalMatrix",re.normalMatrix),wt.setValue(W,"modelMatrix",re.matrixWorld),te.uniformsGroups!==void 0){let Gt=te.uniformsGroups;for(let Ii=0,Qr=Gt.length;Ii<Qr;Ii++){let yd=Gt[Ii];V.update(yd,Si),V.bind(yd,Si)}}return Si}function br(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function pr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,G,he){let te=He.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),He.get(A.texture).__webglTexture=G,He.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:he,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){let he=He.get(A);he.__webglFramebuffer=G,he.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,he=0){F=A,O=G,H=he;let te=null,re=!1,Ce=!1;if(A){let Ue=He.get(A);if(Ue.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(W.FRAMEBUFFER,Ue.__webglFramebuffer),$.copy(A.viewport),ge.copy(A.scissor),Re=A.scissorTest,Ae.viewport($),Ae.scissor(ge),Ae.setScissorTest(Re),de=-1;return}else if(Ue.__webglFramebuffer===void 0)Xe.setupRenderTarget(A);else if(Ue.__hasExternalTextures)Xe.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ze=A.depthTexture;if(Ue.__boundDepthTexture!==Ze){if(Ze!==null&&He.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(A)}}let De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ce=!0);let Ge=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?te=Ge[G][he]:te=Ge[G],re=!0):A.samples>0&&Xe.useMultisampledRTT(A)===!1?te=He.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?te=Ge[he]:te=Ge,$.copy(A.viewport),ge.copy(A.scissor),Re=A.scissorTest}else $.copy(ke).multiplyScalar(Le).floor(),ge.copy(fe).multiplyScalar(Le).floor(),Re=Ne;if(he!==0&&(te=k),Ae.bindFramebuffer(W.FRAMEBUFFER,te)&&Ae.drawBuffers(A,te),Ae.viewport($),Ae.scissor(ge),Ae.setScissorTest(Re),re){let Ue=He.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue.__webglTexture,he)}else if(Ce){let Ue=G;for(let De=0;De<A.textures.length;De++){let Ge=He.get(A.textures[De]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+De,Ge.__webglTexture,he,Ue)}}else if(A!==null&&he!==0){let Ue=He.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ue.__webglTexture,he)}de=-1};function wr(A){let G=He.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=Qe.textureFormatReadable(A.format),G.__typeReadable=Qe.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,he,te,re,Ce,Ue,De=0){if(!(A&&A.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){Ae.bindFramebuffer(W.FRAMEBUFFER,Ge);try{let Ze=A.textures[De],_t=Ze.format,bt=Ze.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);let qe=wr(Ze);if(qe.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-te&&he>=0&&he<=A.height-re&&W.readPixels(G,he,te,re,Z.convert(_t),Z.convert(bt),Ce)}finally{let Ze=F!==null?He.get(F).__webglFramebuffer:null;Ae.bindFramebuffer(W.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,G,he,te,re,Ce,Ue,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(G>=0&&G<=A.width-te&&he>=0&&he<=A.height-re){Ae.bindFramebuffer(W.FRAMEBUFFER,Ge);let Ze=A.textures[De],_t=Ze.format,bt=Ze.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De);let qe=wr(Ze);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Rt),W.bufferData(W.PIXEL_PACK_BUFFER,Ce.byteLength,W.STREAM_READ),W.readPixels(G,he,te,re,Z.convert(_t),Z.convert(bt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let ai=F!==null?He.get(F).__webglFramebuffer:null;Ae.bindFramebuffer(W.FRAMEBUFFER,ai);let Ot=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await tv(W,Ot,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Rt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ce),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Rt),W.deleteSync(Ot),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,he=0){let te=Math.pow(2,-he),re=Math.floor(A.image.width*te),Ce=Math.floor(A.image.height*te),Ue=G!==null?G.x:0,De=G!==null?G.y:0;Xe.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,he,0,0,Ue,De,re,Ce),Ae.unbindTexture()},this.copyTextureToTexture=function(A,G,he=null,te=null,re=0,Ce=0){let Ue,De,Ge,Ze,_t,bt,qe,Rt,ai,Ot=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(he!==null)Ue=he.max.x-he.min.x,De=he.max.y-he.min.y,Ge=he.isBox3?he.max.z-he.min.z:1,Ze=he.min.x,_t=he.min.y,bt=he.isBox3?he.min.z:0;else{let wt=Math.pow(2,-re);Ue=Math.floor(Ot.width*wt),De=Math.floor(Ot.height*wt),A.isDataArrayTexture?Ge=Ot.depth:A.isData3DTexture?Ge=Math.floor(Ot.depth*wt):Ge=1,Ze=0,_t=0,bt=0}te!==null?(qe=te.x,Rt=te.y,ai=te.z):(qe=0,Rt=0,ai=0);let Bt=Z.convert(G.format),$t=Z.convert(G.type),Ye;G.isData3DTexture?(Xe.setTexture3D(G,0),Ye=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(Xe.setTexture2DArray(G,0),Ye=W.TEXTURE_2D_ARRAY):(Xe.setTexture2D(G,0),Ye=W.TEXTURE_2D),Ae.activeTexture(W.TEXTURE0),Ae.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),Ae.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Ae.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);let Li=Ae.getParameter(W.UNPACK_ROW_LENGTH),Gn=Ae.getParameter(W.UNPACK_IMAGE_HEIGHT),Wn=Ae.getParameter(W.UNPACK_SKIP_PIXELS),Si=Ae.getParameter(W.UNPACK_SKIP_ROWS),No=Ae.getParameter(W.UNPACK_SKIP_IMAGES);Ae.pixelStorei(W.UNPACK_ROW_LENGTH,Ot.width),Ae.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ot.height),Ae.pixelStorei(W.UNPACK_SKIP_PIXELS,Ze),Ae.pixelStorei(W.UNPACK_SKIP_ROWS,_t),Ae.pixelStorei(W.UNPACK_SKIP_IMAGES,bt);let _n=A.isDataArrayTexture||A.isData3DTexture,Xn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){let wt=He.get(A),_i=He.get(G),Er=He.get(wt.__renderTarget),Gt=He.get(_i.__renderTarget);Ae.bindFramebuffer(W.READ_FRAMEBUFFER,Er.__webglFramebuffer),Ae.bindFramebuffer(W.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Ii=0;Ii<Ge;Ii++)_n&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.get(A).__webglTexture,re,bt+Ii),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.get(G).__webglTexture,Ce,ai+Ii)),W.blitFramebuffer(Ze,_t,Ze+Ue,_t+De,qe,Rt,qe+Ue,Rt+De,W.DEPTH_BUFFER_BIT,W.NEAREST);Ae.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||He.has(A)){let wt=He.get(A),_i=He.get(G);Ae.bindFramebuffer(W.READ_FRAMEBUFFER,K),Ae.bindFramebuffer(W.DRAW_FRAMEBUFFER,C);for(let Er=0;Er<Ge;Er++)_n?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,wt.__webglTexture,re,bt+Er):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,wt.__webglTexture,re),Xn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,_i.__webglTexture,Ce,ai+Er):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,_i.__webglTexture,Ce),re!==0?W.blitFramebuffer(Ze,_t,Ze+Ue,_t+De,qe,Rt,qe+Ue,Rt+De,W.COLOR_BUFFER_BIT,W.NEAREST):Xn?W.copyTexSubImage3D(Ye,Ce,qe,Rt,ai+Er,Ze,_t,Ue,De):W.copyTexSubImage2D(Ye,Ce,qe,Rt,Ze,_t,Ue,De);Ae.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Xn?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Ye,Ce,qe,Rt,ai,Ue,De,Ge,Bt,$t,Ot.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Ye,Ce,qe,Rt,ai,Ue,De,Ge,Bt,Ot.data):W.texSubImage3D(Ye,Ce,qe,Rt,ai,Ue,De,Ge,Bt,$t,Ot):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ce,qe,Rt,Ue,De,Bt,$t,Ot.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ce,qe,Rt,Ot.width,Ot.height,Bt,Ot.data):W.texSubImage2D(W.TEXTURE_2D,Ce,qe,Rt,Ue,De,Bt,$t,Ot);Ae.pixelStorei(W.UNPACK_ROW_LENGTH,Li),Ae.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Gn),Ae.pixelStorei(W.UNPACK_SKIP_PIXELS,Wn),Ae.pixelStorei(W.UNPACK_SKIP_ROWS,Si),Ae.pixelStorei(W.UNPACK_SKIP_IMAGES,No),Ce===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&W.generateMipmap(Ye),Ae.unbindTexture()},this.initRenderTarget=function(A){He.get(A).__webglFramebuffer===void 0&&Xe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Xe.setTextureCube(A,0):A.isData3DTexture?Xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Xe.setTexture2DArray(A,0):Xe.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){O=0,H=0,F=null,Ae.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}},$f=class extends $o{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ga;e.deleteAttribute("uv");let t=new Tl({side:Ti}),i=new Tl,r=new nh(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let n=new Nt(e,t);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);let a=new Cp(e,i,6),s=new Ni;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),a.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),a.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),a.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),a.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),a.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),a.setMatrixAt(5,s.matrix),this.add(a);let o=new Nt(e,Za(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);let l=new Nt(e,Za(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Nt(e,Za(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Nt(e,Za(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Nt(e,Za(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let c=new Nt(e,Za(100));c.position.set(0,20,0),c.scale.set(1,.1,1),this.add(c)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Za(e){return new w_({color:0,emissive:16777215,emissiveIntensity:e})}function hn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Qf(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var ir={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qs={duration:.5,overwrite:!1,delay:0},dh,yi,jt,_r=1e8,Ut=1/_r,ph=Math.PI*2,qS=ph/4,jS=0,em=Math.sqrt,YS=Math.cos,JS=Math.sin,mi=function(e){return typeof e=="string"},ei=function(e){return typeof e=="function"},dn=function(e){return typeof e=="number"},fh=function(e){return typeof e>"u"},Xr=function(e){return typeof e=="object"},Gi=function(e){return e!==!1},mh=function(){return typeof window<"u"},Il=function(e){return ei(e)||mi(e)},tm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ei=Array.isArray,KS=/random\([^)]+\)/g,ZS=/,\s*/g,im=/(?:-?\.?\d|\.)+/gi,rm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$a=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nm=/[+-]=-?[.\d]+/,$S=/[^,'"\[\]\s]+/gi,QS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,qr,vh,_h,rr={},Dl={},am,sm=function(e){return(Dl=es(e,rr))&&ji},xh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},eo=function(e,t){return!t&&console.warn(e)},om=function(e,t){return e&&(rr[e]=t)&&Dl&&(Dl[e]=t)||rr},to=function(){return 0},eT={suppressEvents:!0,isStart:!0,kill:!1},Nl={suppressEvents:!0,kill:!1},tT={suppressEvents:!0},yh={},Rn=[],Mh={},lm,nr={},Sh={},um=30,Ul=[],Th="",bh=function(e){var t=e[0],i,r;if(Xr(t)||ei(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ul.length;r--&&!Ul[r].targetTest(t););i=Ul[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Om(e[r],i)))||e.splice(r,1);return e},sa=function(e){return e._gsap||bh(yr(e))[0]._gsap},cm=function(e,t,i){return(i=e[t])&&ei(i)?e[t]():fh(i)&&e.getAttribute&&e.getAttribute(t)||i},Wi=function(e,t){return(e=e.split(",")).forEach(t)||e},ri=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},Qa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},iT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ol=function(){var e=Rn.length,t=Rn.slice(0),i,r;for(Mh={},Rn.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},wh=function(e){return!!(e._initted||e._startAt||e.add)},hm=function(e,t,i,r){Rn.length&&!yi&&Ol(),e.render(t,i,r||!!(yi&&t<0&&wh(e))),Rn.length&&!yi&&Ol()},dm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($S).length<2?t:mi(e)?e.trim():e},pm=function(e){return e},ar=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},rT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},es=function(e,t){for(var i in t)e[i]=t[i];return e},fm=function e(t,i){for(var r in i)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=Xr(i[r])?e(t[r]||(t[r]={}),i[r]):i[r]);return t},Fl=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},io=function(e){var t=e.parent||Jt,i=e.keyframes?rT(Ei(e.keyframes)):ar;if(Gi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},nT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},mm=function(e,t,i,r,n){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],s;if(n)for(s=t[n];a&&a[n]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},zl=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=t._prev,a=t._next;n?n._next=a:e[i]===t&&(e[i]=a),a?a._prev=n:e[r]===t&&(e[r]=n),t._next=t._prev=t.parent=null},Pn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},oa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},aT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eh=function(e,t,i,r){return e._startAt&&(yi?e._startAt.revert(Nl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},sT=function e(t){return!t||t._ts&&e(t.parent)},gm=function(e){return e._repeat?ts(e._tTime,e=e.duration()+e._rDelay)*e:0},ts=function(e,t){var i=Math.floor(e=Kt(e/t));return e&&i===e?i-1:i},Bl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kl=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ut)||0))},Vl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Kt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kl(e),i._dirty||oa(i,e)),e},vm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bl(e.rawTime(),t),(!t._dur||no(0,t.totalDuration(),i)-t._tTime>Ut)&&t.render(i,!0)),oa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ut}},jr=function(e,t,i,r){return t.parent&&Pn(t),t._start=Kt((dn(i)?i:!i&&Hl(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==Jt?xr(e,i,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mm(e,t,"_first","_last",e._sort?"_start":0),Hl(t)||(e._recent=t),r||vm(e,t),e._ts<0&&Vl(e,e._tTime),e},_m=function(e,t){return(rr.ScrollTrigger||xh("scrollTrigger",t))&&rr.ScrollTrigger.create(t,e)},xm=function(e,t,i,r,n){if(Uh(e,t,n),!e._initted)return 1;if(!i&&e._pt&&!yi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&lm!==or.frame)return Rn.push(e),e._lazy=[n,r],1},oT=function e(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||e(i))},Hl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lT=function(e,t,i,r){var n=e.ratio,a=t<0||!t&&(!e._start&&oT(e)&&!(!e._initted&&Hl(e))||(e._ts<0||e._dp._ts<0)&&!Hl(e))?0:1,s=e._rDelay,o=0,l,u,h;if(s&&e._repeat&&(o=no(0,e._tDur,t),u=ts(o,s),e._yoyo&&u&1&&(a=1-a),u!==ts(e._tTime,s)&&(n=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==n||yi||r||e._zTime===Ut||!t&&e._zTime){if(!e._initted&&xm(e,t,r,i,o))return;for(h=e._zTime,e._zTime=t||(i?Ut:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=o,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Eh(e,t,i,!0),e._onUpdate&&!i&&sr(e,"onUpdate"),o&&e._repeat&&!i&&e.parent&&sr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Pn(e,1),!i&&!yi&&(sr(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uT=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},is=function(e,t,i,r){var n=e._repeat,a=Kt(t)||0,s=e._tTime/e._tDur;return s&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=n?n<0?1e10:Kt(a*(n+1)+e._rDelay*n):a,s>0&&!r&&Vl(e,e._tTime=e._tDur*s),e.parent&&kl(e),i||oa(e.parent,e),e},ym=function(e){return e instanceof Xi?oa(e):is(e,e._dur)},cT={_start:0,endTime:to,totalDuration:to},xr=function e(t,i,r){var n=t.labels,a=t._recent||cT,s=t.duration()>=_r?a.endTime(!1):t._dur,o,l,u;return mi(i)&&(isNaN(i)||i in n)?(l=i.charAt(0),u=i.substr(-1)==="%",o=i.indexOf("="),l==="<"||l===">"?(o>=0&&(i=i.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(i.substr(1))||0)*(u?(o<0?a:r).totalDuration()/100:1)):o<0?(i in n||(n[i]=s),n[i]):(l=parseFloat(i.charAt(o-1)+i.substr(o+1)),u&&r&&(l=l/100*(Ei(r)?r[0]:r).totalDuration()),o>1?e(t,i.substr(0,o-1),r)+l:s+l)):i==null?s:+i},ro=function(e,t,i){var r=dn(t[1]),n=(r?2:1)+(e<2?0:1),a=t[n],s,o;if(r&&(a.duration=t[1]),a.parent=i,e){for(s=a,o=i;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=Gi(o.vars.inherit)&&o.parent;a.immediateRender=Gi(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[n-1]}return new li(t[0],a,t[n+1])},Cn=function(e,t){return e||e===0?t(e):t},no=function(e,t,i){return i<e?e:i>t?t:i},Ai=function(e,t){return!mi(e)||!(t=QS.exec(e))?"":t[1]},hT=function(e,t,i){return Cn(i,function(r){return no(e,t,r)})},Ah=[].slice,Mm=function(e,t){return e&&Xr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Xr(e[0]))&&!e.nodeType&&e!==qr},dT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var n;return mi(r)&&!t||Mm(r,1)?(n=i).push.apply(n,yr(r)):i.push(r)})||i},yr=function(e,t,i){return jt&&!t&&jt.selector?jt.selector(e):mi(e)&&!i&&(vh||!ns())?Ah.call((t||_h).querySelectorAll(e),0):Ei(e)?dT(e,i):Mm(e)?Ah.call(e,0):e?[e]:[]},Rh=function(e){return e=yr(e)[0]||eo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return yr(t,i.querySelectorAll?i:i===e?eo("Invalid scope")||_h.createElement("div"):e)}},Sm=function(e){return e.sort(function(){return .5-Math.random()})},Tm=function(e){if(ei(e))return e;var t=Xr(e)?e:{each:e},i=la(t.ease),r=t.from||0,n=parseFloat(t.base)||0,a={},s=r>0&&r<1,o=isNaN(r)||s,l=t.axis,u=r,h=r;return mi(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!s&&o&&(u=r[0],h=r[1]),function(d,c,p){var f=(p||t).length,x=a[f],_,m,S,M,v,y,w,g,b;if(!x){if(b=t.grid==="auto"?0:(t.grid||[1,_r])[1],!b){for(w=-_r;w<(w=p[b++].getBoundingClientRect().left)&&b<f;);b<f&&b--}for(x=a[f]=[],_=o?Math.min(b,f)*u-.5:r%b,m=b===_r?0:o?f*h/b-.5:r/b|0,w=0,g=_r,y=0;y<f;y++)S=y%b-_,M=m-(y/b|0),x[y]=v=l?Math.abs(l==="y"?M:S):em(S*S+M*M),v>w&&(w=v),v<g&&(g=v);r==="random"&&Sm(x),x.max=w-g,x.min=g,x.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(b>f?f-1:l?l==="y"?f/b:b:Math.max(b,f/b))||0)*(r==="edges"?-1:1),x.b=f<0?n-f:n,x.u=Ai(t.amount||t.each)||0,i=i&&f<0?wT(i):i}return f=(x[d]-x.min)/x.max||0,Kt(x.b+(i?i(f):f)*x.v)+x.u}},Ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Kt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(dn(i)?0:Ai(i))}},bm=function(e,t){var i=Ei(e),r,n;return!i&&Xr(e)&&(r=i=e.radius||_r,e.values?(e=yr(e.values),(n=!dn(e[0]))&&(r*=r)):e=Ph(e.increment)),Cn(t,i?ei(e)?function(a){return n=e(a),Math.abs(n-a)<=r?n:a}:function(a){for(var s=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),l=_r,u=0,h=e.length,d,c;h--;)n?(d=e[h].x-s,c=e[h].y-o,d=d*d+c*c):d=Math.abs(e[h]-s),d<l&&(l=d,u=h);return u=!r||l<=r?e[u]:a,n||u===a||dn(a)?u:u+Ai(a)}:Ph(e))},wm=function(e,t,i,r){return Cn(Ei(e)?!t:i===!0?!!(i=0):!r,function(){return Ei(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},pT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(n,a){return a(n)},r)}},fT=function(e,t){return function(i){return e(parseFloat(i))+(t||Ai(i))}},mT=function(e,t,i){return Am(e,t,0,1,i)},Em=function(e,t,i){return Cn(i,function(r){return e[~~t(r)]})},gT=function e(t,i,r){var n=i-t;return Ei(t)?Em(t,e(0,t.length),i):Cn(r,function(a){return(n+(a-t)%n)%n+t})},vT=function e(t,i,r){var n=i-t,a=n*2;return Ei(t)?Em(t,e(0,t.length-1),i):Cn(r,function(s){return s=(a+(s-t)%a)%a||0,t+(s>n?a-s:s)})},ao=function(e){return e.replace(KS,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ZS);return wm(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Am=function(e,t,i,r,n){var a=t-e,s=r-i;return Cn(n,function(o){return i+((o-e)/a*s||0)})},_T=function e(t,i,r,n){var a=isNaN(t+i)?0:function(p){return(1-p)*t+p*i};if(!a){var s=mi(t),o={},l,u,h,d,c;if(r===!0&&(n=1)&&(r=null),s)t={p:t},i={p:i};else if(Ei(t)&&!Ei(i)){for(h=[],d=t.length,c=d-2,u=1;u<d;u++)h.push(e(t[u-1],t[u]));d--,a=function(p){p*=d;var f=Math.min(c,~~p);return h[f](p-f)},r=i}else n||(t=es(Ei(t)?[]:{},t));if(!h){for(l in i)Dh.call(o,t,l,"get",i[l]);a=function(p){return zh(p,o)||(s?t.p:t)}}}return Cn(r,a)},Rm=function(e,t,i){var r=e.labels,n=_r,a,s,o;for(a in r)s=r[a]-t,s<0==!!i&&s&&n>(s=Math.abs(s))&&(o=a,n=s);return o},sr=function(e,t,i){var r=e.vars,n=r[t],a=jt,s=e._ctx,o,l,u;if(n)return o=r[t+"Params"],l=r.callbackScope||e,i&&Rn.length&&Ol(),s&&(jt=s),u=o?n.apply(l,o):n.call(l),jt=a,u},so=function(e){return Pn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yi),e.progress()<1&&sr(e,"onInterrupt"),e},rs,Pm=[],Cm=function(e){if(e)if(e=!e.name&&e.default||e,mh()||e.headless){var t=e.name,i=ei(e),r=t&&!i&&e.init?function(){this._props=[]}:e,n={init:to,render:zh,add:Dh,kill:UT,modifier:NT,rawVars:0},a={targetTest:0,get:0,getSetter:Fh,aliases:{},register:0};if(ns(),e!==r){if(nr[t])return;ar(r,ar(Fl(e,n),a)),es(r.prototype,es(n,Fl(e,a))),nr[r.prop=t]=r,e.targetTest&&(Ul.push(r),yh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}om(t,r),e.register&&e.register(ji,r,qi)}else Pm.push(e)},Ft=255,oo={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},Ch=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ft+.5|0},Lm=function(e,t,i){var r=e?dn(e)?[e>>16,e>>8&Ft,e&Ft]:0:oo.black,n,a,s,o,l,u,h,d,c,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oo[e])r=oo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+n+n+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ft,r&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match(im),!t)o=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(l+1):u+l-u*l,n=u*2-a,r.length>3&&(r[3]*=1),r[0]=Ch(o+1/3,n,a),r[1]=Ch(o,n,a),r[2]=Ch(o-1/3,n,a);else if(~e.indexOf("="))return r=e.match(rm),i&&r.length<4&&(r[3]=1),r}else r=e.match(im)||oo.transparent;r=r.map(Number)}return t&&!p&&(n=r[0]/Ft,a=r[1]/Ft,s=r[2]/Ft,h=Math.max(n,a,s),d=Math.min(n,a,s),u=(h+d)/2,h===d?o=l=0:(c=h-d,l=u>.5?c/(2-h-d):c/(h+d),o=h===n?(a-s)/c+(a<s?6:0):h===a?(s-n)/c+2:(n-a)/c+4,o*=60),r[0]=~~(o+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Im=function(e){var t=[],i=[],r=-1;return e.split(Ln).forEach(function(n){var a=n.match($a)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Dm=function(e,t,i){var r="",n=(e+r).match(Ln),a=t?"hsla(":"rgba(",s=0,o,l,u,h;if(!n)return e;if(n=n.map(function(d){return(d=Lm(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Im(e),o=i.c,o.join(r)!==u.c.join(r)))for(l=e.replace(Ln,"1").split($a),h=l.length-1;s<h;s++)r+=l[s]+(~o.indexOf(s)?n.shift()||a+"0,0,0,0)":(u.length?u:n.length?n:i).shift());if(!l)for(l=e.split(Ln),h=l.length-1;s<h;s++)r+=l[s]+n[s];return r+l[h]},Ln=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in oo)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),xT=/hsl[a]?\(/,Nm=function(e){var t=e.join(" "),i;if(Ln.lastIndex=0,Ln.test(t))return i=xT.test(t),e[1]=Dm(e[1],i),e[0]=Dm(e[0],i,Im(e[1])),!0},lo,or=(function(){var e=Date.now,t=500,i=33,r=e(),n=r,a=1e3/240,s=a,o=[],l,u,h,d,c,p,f=function x(_){var m=e()-n,S=_===!0,M,v,y,w;if((m>t||m<0)&&(r+=m-i),n+=m,y=n-r,M=y-s,(M>0||S)&&(w=++d.frame,c=y-d.time*1e3,d.time=y=y/1e3,s+=M+(M>=a?0:a-M),v=1),S||(l=u(x)),v)for(p=0;p<o.length;p++)o[p](y,c,w,_)};return d={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(x){return c/(1e3/(x||60))},wake:function(){am&&(!vh&&mh()&&(qr=vh=window,_h=qr.document||{},rr.gsap=ji,(qr.gsapVersions||(qr.gsapVersions=[])).push(ji.version),sm(Dl||qr.GreenSockGlobals||!qr.gsap&&qr||{}),Pm.forEach(Cm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=h||function(x){return setTimeout(x,s-d.time*1e3+1|0)},lo=1,f(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),lo=0,u=to},lagSmoothing:function(x,_){t=x||1/0,i=Math.min(_||33,t)},fps:function(x){a=1e3/(x||240),s=d.time*1e3+a},add:function(x,_,m){var S=_?function(M,v,y,w){x(M,v,y,w),d.remove(S)}:x;return d.remove(x),o[m?"unshift":"push"](S),ns(),S},remove:function(x,_){~(_=o.indexOf(x))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},d})(),ns=function(){return!lo&&or.wake()},St={},yT=/^[\d.\-M][\d.\-,\s]/,MT=/["']/g,ST=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],n=1,a=i.length,s,o,l;n<a;n++)o=i[n],s=n!==a-1?o.lastIndexOf(","):o.length,l=o.substr(0,s),t[r]=isNaN(l)?l.replace(MT,"").trim():+l,r=o.substr(s+1).trim();return t},TT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},bT=function(e){var t=(e+"").split("("),i=St[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ST(t[1])]:TT(e).split(",").map(dm)):St._CE&&yT.test(e)?St._CE("",e):i},wT=function(e){return function(t){return 1-e(1-t)}},la=function(e,t){return e&&(ei(e)?e:St[e]||bT(e))||t},ua=function(e,t,i,r){i===void 0&&(i=function(s){return 1-t(1-s)}),r===void 0&&(r=function(s){return s<.5?t(s*2)/2:1-t((1-s)*2)/2});var n={easeIn:t,easeOut:i,easeInOut:r},a;return Wi(e,function(s){St[s]=rr[s]=n,St[a=s.toLowerCase()]=i;for(var o in n)St[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=St[s+"."+o]=n[o]}),n},Um=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lh=function e(t,i,r){var n=i>=1?i:1,a=(r||(t?.3:.45))/(i<1?i:1),s=a/ph*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*JS((u-s)*a)+1},l=t==="out"?o:t==="in"?function(u){return 1-o(1-u)}:Um(o);return a=ph/a,l.config=function(u,h){return e(t,u,h)},l},Ih=function e(t,i){i===void 0&&(i=1.70158);var r=function(a){return a?--a*a*((i+1)*a+i)+1:0},n=t==="out"?r:t==="in"?function(a){return 1-r(1-a)}:Um(r);return n.config=function(a){return e(t,a)},n};Wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var i=t<5?t+1:t;ua(e+",Power"+(i-1),t?function(r){return Math.pow(r,i)}:function(r){return r},function(r){return 1-Math.pow(1-r,i)},function(r){return r<.5?Math.pow(r*2,i)/2:1-Math.pow((1-r)*2,i)/2})}),St.Linear.easeNone=St.none=St.Linear.easeIn,ua("Elastic",Lh("in"),Lh("out"),Lh()),(function(e,t){var i=1/t,r=2*i,n=2.5*i,a=function(s){return s<i?e*s*s:s<r?e*Math.pow(s-1.5/t,2)+.75:s<n?e*(s-=2.25/t)*s+.9375:e*Math.pow(s-2.625/t,2)+.984375};ua("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75),ua("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)}),ua("Circ",function(e){return-(em(1-e*e)-1)}),ua("Sine",function(e){return e===1?1:-YS(e*qS)+1}),ua("Back",Ih("in"),Ih("out"),Ih()),St.SteppedEase=St.steps=rr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),n=t?1:0,a=1-Ut;return function(s){return((r*no(0,a,s)|0)+n)*i}}},Qs.ease=St["quad.out"],Wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Th+=e+","+e+"Params,"});var Om=function(e,t){this.id=jS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cm,this.set=t?t.getSetter:Fh},uo=(function(){function e(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,is(this,+i.duration,1,1),this.data=i.data,jt&&(this._ctx=jt,jt.data.push(this)),lo||or.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,is(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(ns(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Vl(this,i),!n._dp||n.parent||vm(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ut||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),hm(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+gm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+gm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?ts(this._tTime,n)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Bl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-Ut?0:this._rts;var s=this.totalDuration();return(a!==this._rts<0||n>0&&n<s)&&this.totalTime(no(-Math.abs(this._delay),s,n),r!==!1),kl(this),aT(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ns(),this._ts=this._rts;var r=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==Ut,a;if(n)for(this._tTime-=Ut,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=r+Ut){n=!1;break}a=a._next}this.totalTime(r,n)}return this},t.startTime=function(i){if(arguments.length){this._start=Kt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&jr(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Gi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bl(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=tT);var r=yi;return yi=i,wh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yi=r,this},t.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ym(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ym(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(xr(this,i),Gi(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Gi(r)),this._dur||(this._zTime=-Ut),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ut:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-Ut)},t.eventCallback=function(i,r,n){var a=this.vars;return arguments.length>1?(r?(a[i]=r,n&&(a[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},t.then=function(i){var r=this,n=r._prom;return new Promise(function(a){var s=ei(i)?i:pm,o=function(){var l=r.then;r.then=null,n&&n(),ei(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=l),a(s),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){so(this)},e})();ar(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var Xi=(function(e){Qf(t,e);function t(r,n){var a;return r===void 0&&(r={}),a=e.call(this,r)||this,a.labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=Gi(r.sortChildren),Jt&&jr(r.parent||Jt,hn(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&_m(hn(a),r.scrollTrigger),a}var i=t.prototype;return i.to=function(r,n,a){return ro(0,arguments,this),this},i.from=function(r,n,a){return ro(1,arguments,this),this},i.fromTo=function(r,n,a,s){return ro(2,arguments,this),this},i.set=function(r,n,a){return n.duration=0,n.parent=this,io(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new li(r,n,xr(this,a),1),this},i.call=function(r,n,a){return jr(this,li.delayedCall(0,r,n),a)},i.staggerTo=function(r,n,a,s,o,l,u){return a.duration=n,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new li(r,a,xr(this,o)),this},i.staggerFrom=function(r,n,a,s,o,l,u){return a.runBackwards=1,io(a).immediateRender=Gi(a.immediateRender),this.staggerTo(r,n,a,s,o,l,u)},i.staggerFromTo=function(r,n,a,s,o,l,u,h){return s.startAt=a,io(s).immediateRender=Gi(s.immediateRender),this.staggerTo(r,n,s,o,l,u,h)},i.render=function(r,n,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:Kt(r),h=this._zTime<0!=r<0&&(this._initted||!l),d,c,p,f,x,_,m,S,M,v,y,w;if(this!==Jt&&u>o&&r>=0&&(u=o),u!==this._tTime||a||h){if(s!==this._time&&l&&(u+=this._time-s,r+=this._time-s),d=u,M=this._start,S=this._ts,_=!S,h&&(l||(s=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(y=this._yoyo,x=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,n,a);if(d=Kt(u%x),u===o?(f=this._repeat,d=l):(v=Kt(u/x),f=~~v,f&&f===v&&(d=l,f--),d>l&&(d=l)),v=ts(this._tTime,x),!s&&this._tTime&&v!==f&&this._tTime-v*x-this._dur<=0&&(v=f),y&&f&1&&(d=l-d,w=1),f!==v&&!this._lock){var g=y&&v&1,b=g===(y&&f&1);if(f<v&&(g=!g),s=g?0:u%l?l:u,this._lock=1,this.render(s||(w?0:Kt(f*x)),n,!l)._lock=0,this._tTime=u,!n&&this.parent&&sr(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,v=f),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,b&&(this._lock=2,s=g?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=uT(this,Kt(s),Kt(d)),m&&(u-=d-(d=m._start))),this._tTime=u,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,s=0),!s&&u&&l&&!n&&!v&&(sr(this,"onStart"),this._tTime!==u))return this;if(d>=s&&r>=0)for(c=this._first;c;){if(p=c._next,(c._act||d>=c._start)&&c._ts&&m!==c){if(c.parent!==this)return this.render(r,n,a);if(c.render(c._ts>0?(d-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(d-c._start)*c._ts,n,a),d!==this._time||!this._ts&&!_){m=0,p&&(u+=this._zTime=-Ut);break}}c=p}else{c=this._last;for(var R=r<0?r:d;c;){if(p=c._prev,(c._act||R<=c._end)&&c._ts&&m!==c){if(c.parent!==this)return this.render(r,n,a);if(c.render(c._ts>0?(R-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(R-c._start)*c._ts,n,a||yi&&wh(c)),d!==this._time||!this._ts&&!_){m=0,p&&(u+=this._zTime=R?-Ut:Ut);break}}c=p}}if(m&&!n&&(this.pause(),m.render(d>=s?0:-Ut)._zTime=d>=s?1:-1,this._ts))return this._start=M,kl(this),this.render(r,n,a);this._onUpdate&&!n&&sr(this,"onUpdate",!0),(u===o&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===o&&this._ts>0||!u&&this._ts<0)&&Pn(this,1),!n&&!(r<0&&!s)&&(u||s||!o)&&(sr(this,u===o&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<o&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,n){var a=this;if(dn(n)||(n=xr(this,n,r)),!(r instanceof uo)){if(Ei(r))return r.forEach(function(s){return a.add(s,n)}),this;if(mi(r))return this.addLabel(r,n);if(ei(r))r=li.delayedCall(0,r);else return this}return this!==r?jr(this,r,n):this},i.getChildren=function(r,n,a,s){r===void 0&&(r=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=-_r);for(var o=[],l=this._first;l;)l._start>=s&&(l instanceof li?n&&o.push(l):(a&&o.push(l),r&&o.push.apply(o,l.getChildren(!0,n,a)))),l=l._next;return o},i.getById=function(r){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===r)return n[a]},i.remove=function(r){return mi(r)?this.removeLabel(r):ei(r)?this.killTweensOf(r):(r.parent===this&&zl(this,r),r===this._recent&&(this._recent=this._last),oa(this))},i.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(or.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),e.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},i.addLabel=function(r,n){return this.labels[r]=xr(this,n),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,n,a){var s=li.delayedCall(0,n||to,a);return s.data="isPause",this._hasPause=1,jr(this,s,xr(this,r))},i.removePause=function(r){var n=this._first;for(r=xr(this,r);n;)n._start===r&&n.data==="isPause"&&Pn(n),n=n._next},i.killTweensOf=function(r,n,a){for(var s=this.getTweensOf(r,a),o=s.length;o--;)In!==s[o]&&s[o].kill(r,n);return this},i.getTweensOf=function(r,n){for(var a=[],s=yr(r),o=this._first,l=dn(n),u;o;)o instanceof li?iT(o._targets,s)&&(l?(!In||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(u=o.getTweensOf(s,n)).length&&a.push.apply(a,u),o=o._next;return a},i.tweenTo=function(r,n){n=n||{};var a=this,s=xr(a,r),o=n,l=o.startAt,u=o.onStart,h=o.onStartParams,d=o.immediateRender,c,p=li.to(a,ar({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Ut,onStart:function(){if(a.pause(),!c){var f=n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());p._dur!==f&&is(p,f,0,1).render(p._time,!0,!0),c=1}u&&u.apply(p,h||[])}},n));return d?p.render(0):p},i.tweenFromTo=function(r,n,a){return this.tweenTo(n,ar({startAt:{time:xr(this,r)}},a))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),Rm(this,xr(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),Rm(this,xr(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ut)},i.shiftChildren=function(r,n,a){a===void 0&&(a=0);var s=this._first,o=this.labels,l;for(r=Kt(r);s;)s._start>=a&&(s._start+=r,s._end+=r),s=s._next;if(n)for(l in o)o[l]>=a&&(o[l]+=r);return oa(this)},i.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return e.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),oa(this)},i.totalDuration=function(r){var n=0,a=this,s=a._last,o=_r,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,jr(a,s,u-s._delay,1)._lock=0):o=u,u<0&&s._ts&&(n-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Kt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=l;is(a,a===Jt&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(Jt._ts&&(hm(Jt,Bl(r,Jt)),lm=or.frame),or.frame>=um){um+=ir.autoSleep||120;var n=Jt._first;if((!n||!n._ts)&&ir.autoSleep&&or._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||or.sleep()}}},t})(uo);ar(Xi.prototype,{_lock:0,_hasPause:0,_forcing:0});var ET=function(e,t,i,r,n,a,s){var o=new qi(this._pt,e,t,0,1,Vm,null,n),l=0,u=0,h,d,c,p,f,x,_,m;for(o.b=i,o.e=r,i+="",r+="",(_=~r.indexOf("random("))&&(r=ao(r)),a&&(m=[i,r],a(m,e,t),i=m[0],r=m[1]),d=i.match(gh)||[];h=gh.exec(r);)p=h[0],f=r.substring(l,h.index),c?c=(c+1)%5:f.substr(-5)==="rgba("&&(c=1),p!==d[u++]&&(x=parseFloat(d[u-1])||0,o._pt={_next:o._pt,p:f||u===1?f:",",s:x,c:p.charAt(1)==="="?Qa(x,p)-x:parseFloat(p)-x,m:c&&c<4?Math.round:0},l=gh.lastIndex);return o.c=l<r.length?r.substring(l,r.length):"",o.fp=s,(nm.test(r)||_)&&(o.e=0),this._pt=o,o},Dh=function(e,t,i,r,n,a,s,o,l,u){ei(r)&&(r=r(n||0,e,a));var h=e[t],d=i!=="get"?i:ei(h)?l?e[t.indexOf("set")||!ei(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,c=ei(h)?l?LT:Bm:Oh,p;if(mi(r)&&(~r.indexOf("random(")&&(r=ao(r)),r.charAt(1)==="="&&(p=Qa(d,r)+(Ai(d)||0),(p||p===0)&&(r=p))),!u||d!==r||Nh)return!isNaN(d*r)&&r!==""?(p=new qi(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?DT:km,0,c),l&&(p.fp=l),s&&p.modifier(s,this,e),this._pt=p):(!h&&!(t in e)&&xh(t,r),ET.call(this,e,t,d,r,c,o||ir.stringFilter,l))},AT=function(e,t,i,r,n){if(ei(e)&&(e=co(e,n,t,i,r)),!Xr(e)||e.style&&e.nodeType||Ei(e)||tm(e))return mi(e)?co(e,n,t,i,r):e;var a={},s;for(s in e)a[s]=co(e[s],n,t,i,r);return a},Fm=function(e,t,i,r,n,a){var s,o,l,u;if(nr[e]&&(s=new nr[e]).init(n,s.rawVars?t[e]:AT(t[e],r,n,a,i),i,r,a)!==!1&&(i._pt=o=new qi(i._pt,n,e,0,1,s.render,s,0,s.priority),i!==rs))for(l=i._ptLookup[i._targets.indexOf(n)],u=s._props.length;u--;)l[s._props[u]]=o;return s},In,Nh,Uh=function e(t,i,r){var n=t.vars,a=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,u=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,c=n.keyframes,p=n.autoRevert,f=t._dur,x=t._startAt,_=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:_,M=t._overwrite==="auto"&&!dh,v=t.timeline,y=n.easeReverse||d,w,g,b,R,N,L,k,K,C,O,H,F,de;if(v&&(!c||!a)&&(a="none"),t._ease=la(a,Qs.ease),t._rEase=y&&(la(y)||t._ease),t._from=!v&&!!n.runBackwards,t._from&&(t.ratio=1),!v||c&&!n.stagger){if(K=_[0]?sa(_[0]).harness:0,F=K&&n[K.prop],w=Fl(n,yh),x&&(x._zTime<0&&x.progress(1),i<0&&h&&o&&!p?x.render(-1,!0):x.revert(h&&f?Nl:eT),x._lazy=0),s){if(Pn(t._startAt=li.set(_,ar({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!x&&Gi(l),startAt:null,delay:0,onUpdate:u&&function(){return sr(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(yi||!o&&!p)&&t._startAt.revert(Nl),o&&f&&i<=0&&r<=0){i&&(t._zTime=i);return}}else if(h&&f&&!x){if(i&&(o=!1),b=ar({overwrite:!1,data:"isFromStart",lazy:o&&!x&&Gi(l),immediateRender:o,stagger:0,parent:m},w),F&&(b[K.prop]=F),Pn(t._startAt=li.set(_,b)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(yi?t._startAt.revert(Nl):t._startAt.render(-1,!0)),t._zTime=i,!o)e(t._startAt,Ut,Ut);else if(!i)return}for(t._pt=t._ptCache=0,l=f&&Gi(l)||l&&!f,g=0;g<_.length;g++){if(N=_[g],k=N._gsap||bh(_)[g]._gsap,t._ptLookup[g]=O={},Mh[k.id]&&Rn.length&&Ol(),H=S===_?g:S.indexOf(N),K&&(C=new K).init(N,F||w,t,H,S)!==!1&&(t._pt=R=new qi(t._pt,N,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(P){O[P]=R}),C.priority&&(L=1)),!K||F)for(b in w)nr[b]&&(C=Fm(b,w,t,H,N,S))?C.priority&&(L=1):O[b]=R=Dh.call(t,N,b,"get",w[b],H,S,0,n.stringFilter);t._op&&t._op[g]&&t.kill(N,t._op[g]),M&&t._pt&&(In=t,Jt.killTweensOf(N,O,t.globalTime(i)),de=!t.parent,In=0),t._pt&&l&&(Mh[k.id]=1)}L&&Hm(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!de,c&&i<=0&&v.render(_r,!0,!0)},RT=function(e,t,i,r,n,a,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,c;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,c=e._targets.length;c--;){if(u=d[c][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Nh=1,e.vars[t]="+=0",Uh(e,s),Nh=0,o?eo(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(c=l.length;c--;)h=l[c],u=h._pt||h,u.s=(r||r===0)&&!n?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=ri(i)+Ai(h.e)),h.b&&(h.b=u.s+Ai(h.b))},PT=function(e,t){var i=e[0]?sa(e[0]).harness:0,r=i&&i.aliases,n,a,s,o;if(!r)return t;n=es({},t);for(a in r)if(a in n)for(o=r[a].split(","),s=o.length;s--;)n[o[s]]=n[a];return n},CT=function(e,t,i,r){var n=t.ease||r||"power1.inOut",a,s;if(Ei(t))s=i[e]||(i[e]=[]),t.forEach(function(o,l){return s.push({t:l/(t.length-1)*100,v:o,e:n})});else for(a in t)s=i[a]||(i[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:n})},co=function(e,t,i,r,n){return ei(e)?e.call(t,i,r,n):mi(e)&&~e.indexOf("random(")?ao(e):e},Gl=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",zm={};Wi(Gl+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return zm[e]=1}),Gl=Gl.split(",");var li=(function(e){Qf(t,e);function t(r,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=e.call(this,s?n:io(n))||this;var l=o.vars,u=l.duration,h=l.delay,d=l.immediateRender,c=l.stagger,p=l.overwrite,f=l.keyframes,x=l.defaults,_=l.scrollTrigger,m=n.parent||Jt,S=(Ei(r)||tm(r)?dn(r[0]):"length"in n)?[r]:yr(r),M,v,y,w,g,b,R,N;if(o._targets=S.length?bh(S):eo("GSAP target "+r+" not found. https://gsap.com",!ir.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,f||c||Il(u)||Il(h)){n=o.vars;var L=n.easeReverse||n.yoyoEase;if(M=o.timeline=new Xi({data:"nested",defaults:x||{},targets:m&&m.data==="nested"?m.vars.targets:S}),M.kill(),M.parent=M._dp=hn(o),M._start=0,c||Il(u)||Il(h)){if(w=S.length,R=c&&Tm(c),Xr(c))for(g in c)~Gl.indexOf(g)&&(N||(N={}),N[g]=c[g]);for(v=0;v<w;v++)y=Fl(n,zm),y.stagger=0,L&&(y.easeReverse=L),N&&es(y,N),b=S[v],y.duration=+co(u,hn(o),v,b,S),y.delay=(+co(h,hn(o),v,b,S)||0)-o._delay,!c&&w===1&&y.delay&&(o._delay=h=y.delay,o._start+=h,y.delay=0),M.to(b,y,R?R(v,b,S):0),M._ease=St.none;M.duration()?u=h=0:o.timeline=0}else if(f){io(ar(M.vars.defaults,{ease:"none"})),M._ease=la(f.ease||n.ease||"none");var k=0,K,C,O;if(Ei(f))f.forEach(function(H){return M.to(S,H,">")}),M.duration();else{y={};for(g in f)g==="ease"||g==="easeEach"||CT(g,f[g],y,f.easeEach);for(g in y)for(K=y[g].sort(function(H,F){return H.t-F.t}),k=0,v=0;v<K.length;v++)C=K[v],O={ease:C.e,duration:(C.t-(v?K[v-1].t:0))/100*u},O[g]=C.v,M.to(S,O,k),k+=O.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||o.duration(u=M.duration())}else o.timeline=0;return p===!0&&!dh&&(In=hn(o),Jt.killTweensOf(S),In=0),jr(m,hn(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!u&&!f&&o._start===Kt(m._time)&&Gi(d)&&sT(hn(o))&&m.data!=="nested")&&(o._tTime=-Ut,o.render(Math.max(0,-h)||0)),_&&_m(hn(o),_),o}var i=t.prototype;return i.render=function(r,n,a){var s=this._time,o=this._tDur,l=this._dur,u=r<0,h=r>o-Ut&&!u?o:r<Ut?0:r,d,c,p,f,x,_,m,S;if(!l)lT(this,r,n,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+r,n,a);if(d=Kt(h%f),h===o?(p=this._repeat,d=l):(x=Kt(h/f),p=~~x,p&&p===x?(d=l,p--):d>l&&(d=l)),_=this._yoyo&&p&1,_&&(d=l-d),x=ts(this._tTime,f),d===s&&!a&&this._initted&&p===x)return this._tTime=h,this;p!==x&&this.vars.repeatRefresh&&!_&&!this._lock&&d!==f&&this._initted&&(this._lock=a=1,this.render(Kt(f*p),!0).invalidate()._lock=0)}if(!this._initted){if(xm(this,u?r:d,a,n,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&p!==x))return this;if(l!==this._dur)return this.render(r,n,a)}if(this._rEase){var M=d<s;if(M!==this._inv){var v=M?s:l-s;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(M?-1:1)/v:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(d/l);if(this._from&&(this.ratio=m=1-m),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!n&&!x&&(sr(this,"onStart"),this._tTime!==h))return this;for(c=this._pt;c;)c.r(m,c.d),c=c._next;S&&S.render(r<0?r:S._dur*S._ease(d/this._dur),n,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(u&&Eh(this,r,n,a),sr(this,"onUpdate")),this._repeat&&p!==x&&this.vars.onRepeat&&!n&&this.parent&&sr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Eh(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Pn(this,1),!n&&!(u&&!s)&&(h||s||_)&&(sr(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),e.prototype.invalidate.call(this,r)},i.resetTo=function(r,n,a,s,o){lo||or.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uh(this,l),u=this._ease(l/this._dur),RT(this,r,n,a,s,u,l,o)?this.resetTo(r,n,a,s,1):(Vl(this,0),this.parent||mm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?so(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yi),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,In&&In.vars.overwrite!==!0)._first||so(this),this.parent&&a!==this.timeline.totalDuration()&&is(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=r?yr(r):s,l=this._ptLookup,u=this._pt,h,d,c,p,f,x,_;if((!n||n==="all")&&nT(s,o))return n==="all"&&(this._pt=0),so(this);for(h=this._op=this._op||[],n!=="all"&&(mi(n)&&(f={},Wi(n,function(m){return f[m]=1}),n=f),n=PT(s,n)),_=s.length;_--;)if(~o.indexOf(s[_])){d=l[_],n==="all"?(h[_]=n,p=d,c={}):(c=h[_]=h[_]||{},p=n);for(f in p)x=d&&d[f],x&&((!("kill"in x.d)||x.d.kill(f)===!0)&&zl(this,x,"_pt"),delete d[f]),c!=="all"&&(c[f]=1)}return this._initted&&!this._pt&&u&&so(this),this},t.to=function(r,n){return new t(r,n,arguments[2])},t.from=function(r,n){return ro(1,arguments)},t.delayedCall=function(r,n,a,s){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(r,n,a){return ro(2,arguments)},t.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(r,n)},t.killTweensOf=function(r,n,a){return Jt.killTweensOf(r,n,a)},t})(uo);ar(li.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Wi("staggerTo,staggerFrom,staggerFromTo",function(e){li[e]=function(){var t=new Xi,i=Ah.call(arguments,0);return i.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,i)}});var Oh=function(e,t,i){return e[t]=i},Bm=function(e,t,i){return e[t](i)},LT=function(e,t,i,r){return e[t](r.fp,i)},IT=function(e,t,i){return e.setAttribute(t,i)},Fh=function(e,t){return ei(e[t])?Bm:fh(e[t])&&e.setAttribute?IT:Oh},km=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},DT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Vm=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},zh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},NT=function(e,t,i,r){for(var n=this._pt,a;n;)a=n._next,n.p===r&&n.modifier(e,t,i),n=a},UT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?zl(this,t,"_pt"):t.dep||(i=1),t=r;return!i},OT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Hm=function(e){for(var t=e._pt,i,r,n,a;t;){for(i=t._next,r=n;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:n=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=n},qi=(function(){function e(i,r,n,a,s,o,l,u,h){this.t=r,this.s=a,this.c=s,this.p=n,this.r=o||km,this.d=l||this,this.set=u||Oh,this.pr=h||0,this._next=i,i&&(i._prev=this)}var t=e.prototype;return t.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=OT,this.m=i,this.mt=n,this.tween=r},e})();Wi(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return yh[e]=1}),rr.TweenMax=rr.TweenLite=li,rr.TimelineLite=rr.TimelineMax=Xi,Jt=new Xi({sortChildren:!1,defaults:Qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),ir.stringFilter=Nm;var ca=[],Wl={},FT=[],Gm=0,zT=0,Bh=function(e){return(Wl[e]||FT).map(function(t){return t()})},ho=function(){var e=Date.now(),t=[];e-Gm>2&&(Bh("matchMediaInit"),ca.forEach(function(i){var r=i.queries,n=i.conditions,a,s,o,l;for(s in r)a=qr.matchMedia(r[s]).matches,a&&(o=1),a!==n[s]&&(n[s]=a,l=1);l&&(i.revert(),o&&t.push(i))}),Bh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Gm=e,Bh("matchMedia"))},Wm=(function(){function e(i,r){this.selector=r&&Rh(r),this.data=[],this._r=[],this.isReverted=!1,this.id=zT++,i&&this.add(i)}var t=e.prototype;return t.add=function(i,r,n){ei(i)&&(n=r,r=i,i=ei);var a=this,s=function(){var o=jt,l=a.selector,u;return o&&o!==a&&o.data.push(a),n&&(a.selector=Rh(n)),jt=a,u=r.apply(a,arguments),ei(u)&&a._r.push(u),jt=o,a.selector=l,a.isReverted=!1,u};return a.last=s,i===ei?s(a,function(o){return a.add(null,o)}):i?a[i]=s:s},t.ignore=function(i){var r=jt;jt=null,i(this),jt=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof e?i.push.apply(i,r.getTweens()):r instanceof li&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var n=this;if(i?(function(){for(var s=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),o=n.data.length;o--;)l=n.data[o],l instanceof Xi?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof li)&&l.revert&&l.revert(i);n._r.forEach(function(u){return u(i,n)}),n.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),r){for(var a=ca.length;a--;)ca[a].id===this.id&&ca.splice(a,1);this._mqs&&this._mqs.forEach(function(s){return s.removeListener?s.removeListener(ho):s.removeEventListener("change",ho)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},e})(),BT=(function(){function e(i){this.contexts=[],this.scope=i,jt&&jt.data.push(this)}var t=e.prototype;return t.add=function(i,r,n){Xr(i)||(i={matches:i});var a=new Wm(0,n||this.scope),s=a.conditions={},o,l,u;jt&&!a.selector&&(a.selector=jt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(l in i)l==="all"?u=1:(o=qr.matchMedia(i[l]),o&&(ca.indexOf(a)<0&&ca.push(a),(s[l]=o.matches)&&(u=1),o.addListener?o.addListener(ho):o.addEventListener("change",ho),(a._mqs||(a._mqs=[])).push(o)));return u&&r(a,function(h){return a.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},e})(),Xl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Cm(r)})},timeline:function(e){return new Xi(e)},getTweensOf:function(e,t){return Jt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mi(e)&&(e=yr(e)[0]);var n=sa(e||{}).get,a=i?pm:dm;return i==="native"&&(i=""),e&&(t?a((nr[t]&&nr[t].get||n)(e,t,i,r)):function(s,o,l){return a((nr[s]&&nr[s].get||n)(e,s,o,l))})},quickSetter:function(e,t,i){if(e=yr(e),e.length>1){var r=e.map(function(u){return ji.quickSetter(u,t,i)}),n=r.length;return function(u){for(var h=n;h--;)r[h](u)}}e=e[0]||{};var a=nr[t],s=sa(e),o=s.harness&&(s.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;rs._pt=0,h.init(e,i?u+i:u,rs,0,[e]),h.render(1,h),rs._pt&&zh(1,rs)}:s.set(e,o);return a?l:function(u){return l(e,o,i?u+i:u,s,1)}},quickTo:function(e,t,i){var r,n=ji.to(e,ar((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(s,o,l){return n.resetTo(t,s,o,l)};return a.tween=n,a},isTweening:function(e){return Jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=la(e.ease,Qs.ease)),fm(Qs,e||{})},config:function(e){return fm(ir,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,n=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(s){return s&&!nr[s]&&!rr[s]&&eo(t+" effect requires "+s+" plugin.")}),Sh[t]=function(s,o,l){return i(yr(s),ar(o||{},n),l)},a&&(Xi.prototype[t]=function(s,o,l){return this.add(Sh[t](s,Xr(o)?o:(l=o)&&{},this),l)})},registerEase:function(e,t){St[e]=la(t)},parseEase:function(e,t){return arguments.length?la(e,t):St},getById:function(e){return Jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xi(e),r,n;for(i.smoothChildTiming=Gi(e.smoothChildTiming),Jt.remove(i),i._dp=0,i._time=i._tTime=Jt._time,r=Jt._first;r;)n=r._next,(t||!(!r._dur&&r instanceof li&&r.vars.onComplete===r._targets[0]))&&jr(i,r,r._start-r._delay),r=n;return jr(Jt,i,0),i},context:function(e,t){return e?new Wm(e,t):jt},matchMedia:function(e){return new BT(e)},matchMediaRefresh:function(){return ca.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ho()},addEventListener:function(e,t){var i=Wl[e]||(Wl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Wl[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:gT,wrapYoyo:vT,distribute:Tm,random:wm,snap:bm,normalize:mT,getUnit:Ai,clamp:hT,splitColor:Lm,toArray:yr,selector:Rh,mapRange:Am,pipe:pT,unitize:fT,interpolate:_T,shuffle:Sm},install:sm,effects:Sh,ticker:or,updateRoot:Xi.updateRoot,plugins:nr,globalTimeline:Jt,core:{PropTween:qi,globals:om,Tween:li,Timeline:Xi,Animation:uo,getCache:sa,_removeLinkedListItem:zl,reverting:function(){return yi},context:function(e){return e&&jt&&(jt.data.push(e),e._ctx=jt),jt},suppressOverwrites:function(e){return dh=e}}};Wi("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return Xl[e]=li[e]}),or.add(Xi.updateRoot),rs=Xl.to({},{duration:0});var kT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},VT=function(e,t){var i=e._targets,r,n,a;for(r in t)for(n=i.length;n--;)a=e._ptLookup[n][r],a&&(a=a.d)&&(a._pt&&(a=kT(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[n],r))},kh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,n){n._onInit=function(a){var s,o;if(mi(r)&&(s={},Wi(r,function(l){return s[l]=1}),r=s),t){s={};for(o in r)s[o]=t(r[o]);r=s}VT(a,r)}}}},ji=Xl.registerPlugin({name:"attr",init:function(e,t,i,r,n){var a,s,o;this.tween=i;for(a in t)o=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(o||0)+"",t[a],r,n,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)yi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},kh("roundProps",Ph),kh("modifiers"),kh("snap",bm))||Xl;li.version=Xi.version=ji.version="3.15.1",am=1,mh()&&ns();var aw=St.Power0,sw=St.Power1,ow=St.Power2,lw=St.Power3,uw=St.Power4,cw=St.Linear,hw=St.Quad,dw=St.Cubic,pw=St.Quart,fw=St.Quint,mw=St.Strong,gw=St.Elastic,vw=St.Back,_w=St.SteppedEase,xw=St.Bounce,yw=St.Sine,Mw=St.Expo,Sw=St.Circ,Xm,Dn,as,Vh,ha,HT,qm,Hh,GT=function(){return typeof window<"u"},pn={},da=180/Math.PI,ss=Math.PI/180,os=Math.atan2,jm=1e8,Gh=/([A-Z])/g,WT=/(left|right|width|margin|padding|x)/i,XT=/[\s,\(]\S/,Yr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ym=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},KT=function(e,t,i){return e.style[t]=i},ZT=function(e,t,i){return e.style.setProperty(t,i)},$T=function(e,t,i){return e._gsap[t]=i},QT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},eb=function(e,t,i,r,n){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(n,a)},tb=function(e,t,i,r,n){var a=e._gsap;a[t]=i,a.renderTransform(n,a)},Zt="transform",Yi=Zt+"Origin",ib=function e(t,i){var r=this,n=this.target,a=n.style,s=n._gsap;if(t in pn&&a){if(this.tfm=this.tfm||{},t!=="transform")t=Yr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return r.tfm[o]=fn(n,o)}):this.tfm[t]=s.x?s[t]:fn(n,t),t===Yi&&(this.tfm.zOrigin=s.zOrigin);else return Yr.transform.split(",").forEach(function(o){return e.call(r,o,i)});if(this.props.indexOf(Zt)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Yi,i,"")),t=Zt}(a||i)&&this.props.push(t,i,a[t])},Km=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,n,a;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?t[e[n]](e[n+2]):t[e[n]]=e[n+2]:e[n+2]?i[e[n]]=e[n+2]:i.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(Gh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=Hh(),(!n||!n.isStart)&&!i[Zt]&&(Km(i),r.zOrigin&&i[Yi]&&(i[Yi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Zm=function(e,t){var i={target:e,props:[],revert:rb,save:ib};return e._gsap||ji.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},$m,Xh=function(e,t){var i=Dn.createElementNS?Dn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Dn.createElement(e);return i&&i.style?i:Dn.createElement(e)},lr=function e(t,i,r){var n=getComputedStyle(t);return n[i]||n.getPropertyValue(i.replace(Gh,"-$1").toLowerCase())||n.getPropertyValue(i)||!r&&e(t,ls(i)||i,1)||""},Qm="O,Moz,ms,Ms,Webkit".split(","),ls=function(e,t,i){var r=t||ha,n=r.style,a=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Qm[a]+e in n););return a<0?null:(a===3?"ms":a>=0?Qm[a]:"")+e},qh=function(){GT()&&window.document&&(Xm=window,Dn=Xm.document,as=Dn.documentElement,ha=Xh("div")||{style:{}},HT=Xh("div"),Zt=ls(Zt),Yi=Zt+"Origin",ha.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$m=!!ls("perspective"),Hh=ji.core.reverting,Vh=1)},e0=function(e){var t=e.ownerSVGElement,i=Xh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),n;r.style.display="block",i.appendChild(r),as.appendChild(i);try{n=r.getBBox()}catch{}return i.removeChild(r),as.removeChild(i),n},t0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},i0=function(e){var t,i;try{t=e.getBBox()}catch{t=e0(e),i=1}return t&&(t.width||t.height)||i||(t=e0(e)),t&&!t.width&&!t.x&&!t.y?{x:+t0(e,["x","cx","x1"])||0,y:+t0(e,["y","cy","y1"])||0,width:0,height:0}:t},r0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&i0(e))},Nn=function(e,t){if(t){var i=e.style,r;t in pn&&t!==Yi&&(t=Zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Gh,"-$1").toLowerCase())):i.removeAttribute(t)}},Un=function(e,t,i,r,n,a){var s=new qi(e._pt,t,i,0,1,a?Jm:Ym);return e._pt=s,s.b=r,s.e=n,e._props.push(i),s},n0={deg:1,rad:1,turn:1},nb={grid:1,flex:1},On=function e(t,i,r,n){var a=parseFloat(r)||0,s=(r+"").trim().substr((a+"").length)||"px",o=ha.style,l=WT.test(i),u=t.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(l?"Width":"Height"),d=100,c=n==="px",p=n==="%",f,x,_,m;if(n===s||!a||n0[n]||n0[s])return a;if(s!=="px"&&!c&&(a=e(t,i,r,"px")),m=t.getCTM&&r0(t),(p||s==="%")&&(pn[i]||~i.indexOf("adius")))return f=m?t.getBBox()[l?"width":"height"]:t[h],ri(p?a/f*d:a/100*f);if(o[l?"width":"height"]=d+(c?s:n),x=n!=="rem"&&~i.indexOf("adius")||n==="em"&&t.appendChild&&!u?t:t.parentNode,m&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Dn||!x.appendChild)&&(x=Dn.body),_=x._gsap,_&&p&&_.width&&l&&_.time===or.time&&!_.uncache)return ri(a/_.width*d);if(p&&(i==="height"||i==="width")){var S=t.style[i];t.style[i]=d+n,f=t[h],S?t.style[i]=S:Nn(t,i)}else(p||s==="%")&&!nb[lr(x,"display")]&&(o.position=lr(t,"position")),x===t&&(o.position="static"),x.appendChild(ha),f=ha[h],x.removeChild(ha),o.position="absolute";return l&&p&&(_=sa(x),_.time=or.time,_.width=x[h]),ri(c?f*a/d:f&&a?d/f*a:0)},fn=function(e,t,i,r){var n;return Vh||qh(),t in Yr&&t!=="transform"&&(t=Yr[t],~t.indexOf(",")&&(t=t.split(",")[0])),pn[t]&&t!=="transform"?(n=fo(e,r),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:jl(lr(e,Yi))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=ql[t]&&ql[t](e,t,i)||lr(e,t)||cm(e,t)||(t==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?On(e,t,n,i)+i:n},ab=function(e,t,i,r){if(!i||i==="none"){var n=ls(t,e,1),a=n&&lr(e,n,1);a&&a!==i?(t=n,i=a):t==="borderColor"&&(i=lr(e,"borderTopColor"))}var s=new qi(this._pt,e.style,t,0,1,Vm),o=0,l=0,u,h,d,c,p,f,x,_,m,S,M,v;if(s.b=i,s.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=lr(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(f=e.style[t],e.style[t]=r,r=lr(e,t)||r,f?e.style[t]=f:Nn(e,t)),u=[i,r],Nm(u),i=u[0],r=u[1],d=i.match($a)||[],v=r.match($a)||[],v.length){for(;h=$a.exec(r);)x=h[0],m=r.substring(o,h.index),p?p=(p+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(p=1),x!==(f=d[l++]||"")&&(c=parseFloat(f)||0,M=f.substr((c+"").length),x.charAt(1)==="="&&(x=Qa(c,x)+M),_=parseFloat(x),S=x.substr((_+"").length),o=$a.lastIndex-S.length,S||(S=S||ir.units[t]||M,o===r.length&&(r+=S,s.e+=S)),M!==S&&(c=On(e,t,f,S)||0),s._pt={_next:s._pt,p:m||l===1?m:",",s:c,c:_-c,m:p&&p<4||t==="zIndex"?Math.round:0});s.c=o<r.length?r.substring(o,r.length):""}else s.r=t==="display"&&r==="none"?Jm:Ym;return nm.test(r)&&(s.e=0),this._pt=s,s},a0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=a0[i]||i,t[1]=a0[r]||r,t.join(" ")},ob=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,n=t.u,a=i._gsap,s,o,l;if(n==="all"||n===!0)r.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)s=n[l],pn[s]&&(o=1,s=s==="transformOrigin"?Yi:Zt),Nn(i,s);o&&(Nn(i,Zt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",fo(i,1),a.uncache=1,Km(r)))}},ql={clearProps:function(e,t,i,r,n){if(n.data!=="isFromStart"){var a=e._pt=new qi(e._pt,t,i,0,0,ob);return a.u=r,a.pr=-10,a.tween=n,e._props.push(i),1}}},po=[1,0,0,1,0,0],s0={},o0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},l0=function(e){var t=lr(e,Zt);return o0(t)?po:t.substr(7).match(rm).map(ri)},jh=function(e,t){var i=e._gsap||sa(e),r=e.style,n=l0(e),a,s,o,l;return i.svg&&e.getAttribute("transform")?(o=e.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?po:n):(n===po&&!e.offsetParent&&e!==as&&!i.svg&&(o=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,s=e.nextElementSibling,as.appendChild(e)),n=l0(e),o?r.display=o:Nn(e,"display"),l&&(s?a.insertBefore(e,s):a?a.appendChild(e):as.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Yh=function(e,t,i,r,n,a){var s=e._gsap,o=n||jh(e,!0),l=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,c=o[0],p=o[1],f=o[2],x=o[3],_=o[4],m=o[5],S=t.split(" "),M=parseFloat(S[0])||0,v=parseFloat(S[1])||0,y,w,g,b;i?o!==po&&(w=c*x-p*f)&&(g=M*(x/w)+v*(-f/w)+(f*m-x*_)/w,b=M*(-p/w)+v*(c/w)-(c*m-p*_)/w,M=g,v=b):(y=i0(e),M=y.x+(~S[0].indexOf("%")?M/100*y.width:M),v=y.y+(~(S[1]||S[0]).indexOf("%")?v/100*y.height:v)),r||r!==!1&&s.smooth?(_=M-l,m=v-u,s.xOffset=h+(_*c+m*f)-_,s.yOffset=d+(_*p+m*x)-m):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=v,s.smooth=!!r,s.origin=t,s.originIsAbsolute=!!i,e.style[Yi]="0px 0px",a&&(Un(a,s,"xOrigin",l,M),Un(a,s,"yOrigin",u,v),Un(a,s,"xOffset",h,s.xOffset),Un(a,s,"yOffset",d,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+v)},fo=function(e,t){var i=e._gsap||new Om(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,n=i.scaleX<0,a="px",s="deg",o=getComputedStyle(e),l=lr(e,Yi)||"0",u,h,d,c,p,f,x,_,m,S,M,v,y,w,g,b,R,N,L,k,K,C,O,H,F,de,P,$,ge,Re,ae,pe;return u=h=d=f=x=_=m=S=M=0,c=p=1,i.svg=!!(e.getCTM&&r0(e)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(r[Zt]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[Zt]!=="none"?o[Zt]:"")),r.scale=r.rotate=r.translate="none"),w=jh(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),l=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Yh(e,H||l,!!H||i.originIsAbsolute,i.smooth!==!1,w)),v=i.xOrigin||0,y=i.yOrigin||0,w!==po&&(N=w[0],L=w[1],k=w[2],K=w[3],u=C=w[4],h=O=w[5],w.length===6?(c=Math.sqrt(N*N+L*L),p=Math.sqrt(K*K+k*k),f=N||L?os(L,N)*da:0,m=k||K?os(k,K)*da+f:0,m&&(p*=Math.abs(Math.cos(m*ss))),i.svg&&(u-=v-(v*N+y*k),h-=y-(v*L+y*K))):(pe=w[6],Re=w[7],P=w[8],$=w[9],ge=w[10],ae=w[11],u=w[12],h=w[13],d=w[14],g=os(pe,ge),x=g*da,g&&(b=Math.cos(-g),R=Math.sin(-g),H=C*b+P*R,F=O*b+$*R,de=pe*b+ge*R,P=C*-R+P*b,$=O*-R+$*b,ge=pe*-R+ge*b,ae=Re*-R+ae*b,C=H,O=F,pe=de),g=os(-k,ge),_=g*da,g&&(b=Math.cos(-g),R=Math.sin(-g),H=N*b-P*R,F=L*b-$*R,de=k*b-ge*R,ae=K*R+ae*b,N=H,L=F,k=de),g=os(L,N),f=g*da,g&&(b=Math.cos(g),R=Math.sin(g),H=N*b+L*R,F=C*b+O*R,L=L*b-N*R,O=O*b-C*R,N=H,C=F),x&&Math.abs(x)+Math.abs(f)>359.9&&(x=f=0,_=180-_),c=ri(Math.sqrt(N*N+L*L+k*k)),p=ri(Math.sqrt(O*O+pe*pe)),g=os(C,O),m=Math.abs(g)>2e-4?g*da:0,M=ae?1/(ae<0?-ae:ae):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!o0(lr(e,Zt)),H&&e.setAttribute("transform",H))),Math.abs(m)>90&&Math.abs(m)<270&&(n?(c*=-1,m+=f<=0?180:-180,f+=f<=0?180:-180):(p*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=ri(c),i.scaleY=ri(p),i.rotation=ri(f)+s,i.rotationX=ri(x)+s,i.rotationY=ri(_)+s,i.skewX=m+s,i.skewY=S+s,i.transformPerspective=M+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Yi]=jl(l)),i.xOffset=i.yOffset=0,i.force3D=ir.force3D,i.renderTransform=i.svg?ub:$m?u0:lb,i.uncache=0,i},jl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jh=function(e,t,i){var r=Ai(t);return ri(parseFloat(t)+parseFloat(On(e,"x",i+"px",r)))+r},lb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,u0(e,t)},pa="0deg",mo="0px",fa=") ",u0=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,s=i.y,o=i.z,l=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,c=i.skewY,p=i.scaleX,f=i.scaleY,x=i.transformPerspective,_=i.force3D,m=i.target,S=i.zOrigin,M="",v=_==="auto"&&e&&e!==1||_===!0;if(S&&(h!==pa||u!==pa)){var y=parseFloat(u)*ss,w=Math.sin(y),g=Math.cos(y),b;y=parseFloat(h)*ss,b=Math.cos(y),a=Jh(m,a,w*b*-S),s=Jh(m,s,-Math.sin(y)*-S),o=Jh(m,o,g*b*-S+S)}x!==mo&&(M+="perspective("+x+fa),(r||n)&&(M+="translate("+r+"%, "+n+"%) "),(v||a!==mo||s!==mo||o!==mo)&&(M+=o!==mo||v?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+fa),l!==pa&&(M+="rotate("+l+fa),u!==pa&&(M+="rotateY("+u+fa),h!==pa&&(M+="rotateX("+h+fa),(d!==pa||c!==pa)&&(M+="skew("+d+", "+c+fa),(p!==1||f!==1)&&(M+="scale("+p+", "+f+fa),m.style[Zt]=M||"translate(0, 0)"},ub=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,s=i.y,o=i.rotation,l=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,c=i.target,p=i.xOrigin,f=i.yOrigin,x=i.xOffset,_=i.yOffset,m=i.forceCSS,S=parseFloat(a),M=parseFloat(s),v,y,w,g,b;o=parseFloat(o),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,o+=u),o||l?(o*=ss,l*=ss,v=Math.cos(o)*h,y=Math.sin(o)*h,w=Math.sin(o-l)*-d,g=Math.cos(o-l)*d,l&&(u*=ss,b=Math.tan(l-u),b=Math.sqrt(1+b*b),w*=b,g*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),v*=b,y*=b)),v=ri(v),y=ri(y),w=ri(w),g=ri(g)):(v=h,g=d,y=w=0),(S&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(S=On(c,"x",a,"px"),M=On(c,"y",s,"px")),(p||f||x||_)&&(S=ri(S+p-(p*v+f*w)+x),M=ri(M+f-(p*y+f*g)+_)),(r||n)&&(b=c.getBBox(),S=ri(S+r/100*b.width),M=ri(M+n/100*b.height)),b="matrix("+v+","+y+","+w+","+g+","+S+","+M+")",c.setAttribute("transform",b),m&&(c.style[Zt]=b)},cb=function(e,t,i,r,n){var a=360,s=mi(n),o=parseFloat(n)*(s&&~n.indexOf("rad")?da:1),l=o-r,u=r+l+"deg",h,d;return s&&(h=n.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*jm)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*jm)%a-~~(l/a)*a)),e._pt=d=new qi(e._pt,t,i,r,l,qT),d.e=u,d.u="deg",e._props.push(i),d},c0=function(e,t){for(var i in t)e[i]=t[i];return e},hb=function(e,t,i){var r=c0({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=i.style,s,o,l,u,h,d,c,p;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[Zt]=t,s=fo(i,1),Nn(i,Zt),i.setAttribute("transform",l)):(l=getComputedStyle(i)[Zt],a[Zt]=t,s=fo(i,1),a[Zt]=l);for(o in pn)l=r[o],u=s[o],l!==u&&n.indexOf(o)<0&&(c=Ai(l),p=Ai(u),h=c!==p?On(i,o,l,p):parseFloat(l),d=parseFloat(u),e._pt=new qi(e._pt,s,o,h,d-h,Wh),e._pt.u=p||0,e._props.push(o));c0(s,r)};Wi("padding,margin,Width,Radius",function(e,t){var i="Top",r="Right",n="Bottom",a="Left",s=(t<3?[i,r,n,a]:[i+a,i+r,n+r,n+a]).map(function(o){return t<2?e+o:"border"+o+e});ql[t>1?"border"+e:e]=function(o,l,u,h,d){var c,p;if(arguments.length<4)return c=s.map(function(f){return fn(o,f,u)}),p=c.join(" "),p.split(c[0]).length===5?c[0]:p;c=(h+"").split(" "),p={},s.forEach(function(f,x){return p[f]=c[x]=c[x]||c[(x-1)/2|0]}),o.init(l,p,d)}});var h0={name:"css",register:qh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,n){var a=this._props,s=e.style,o=i.vars.startAt,l,u,h,d,c,p,f,x,_,m,S,M,v,y,w,g,b;Vh||qh(),this.styles=this.styles||Zm(e),g=this.styles.props,this.tween=i;for(f in t)if(f!=="autoRound"&&(u=t[f],!(nr[f]&&Fm(f,t,i,r,e,n)))){if(c=typeof u,p=ql[f],c==="function"&&(u=u.call(i,r,e,n),c=typeof u),c==="string"&&~u.indexOf("random(")&&(u=ao(u)),p)p(this,e,f,u,i)&&(w=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Ln.lastIndex=0,Ln.test(l)||(x=Ai(l),_=Ai(u),_?x!==_&&(l=On(e,f,l,_)+_):x&&(u+=x)),this.add(s,"setProperty",l,u,r,n,0,0,f),a.push(f),g.push(f,0,s[f]);else if(c!=="undefined"){if(o&&f in o?(l=typeof o[f]=="function"?o[f].call(i,r,e,n):o[f],mi(l)&&~l.indexOf("random(")&&(l=ao(l)),Ai(l+"")||l==="auto"||(l+=ir.units[f]||Ai(fn(e,f))||""),(l+"").charAt(1)==="="&&(l=fn(e,f))):l=fn(e,f),d=parseFloat(l),m=c==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),h=parseFloat(u),f in Yr&&(f==="autoAlpha"&&(d===1&&fn(e,"visibility")==="hidden"&&h&&(d=0),g.push("visibility",0,s.visibility),Un(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=Yr[f],~f.indexOf(",")&&(f=f.split(",")[0]))),S=f in pn,S){if(this.styles.save(f),b=u,c==="string"&&u.substring(0,6)==="var(--"){if(u=lr(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=lr(e,"perspective"),R?e.style.perspective=R:Nn(e,"perspective")}h=parseFloat(u)}if(M||(v=e._gsap,v.renderTransform&&!t.parseTransform||fo(e,t.parseTransform),y=t.smoothOrigin!==!1&&v.smooth,M=this._pt=new qi(this._pt,s,Zt,0,1,v.renderTransform,v,0,-1),M.dep=1),f==="scale")this._pt=new qi(this._pt,v,"scaleY",v.scaleY,(m?Qa(v.scaleY,m+h):h)-v.scaleY||0,Wh),this._pt.u=0,a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){g.push(Yi,0,s[Yi]),u=sb(u),v.svg?Yh(e,u,0,y,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Un(this,v,"zOrigin",v.zOrigin,_),Un(this,s,f,jl(l),jl(u)));continue}else if(f==="svgOrigin"){Yh(e,u,1,y,0,this);continue}else if(f in s0){cb(this,v,f,d,m?Qa(d,m+u):u);continue}else if(f==="smoothOrigin"){Un(this,v,"smooth",v.smooth,u);continue}else if(f==="force3D"){v[f]=u;continue}else if(f==="transform"){hb(this,u,e);continue}}else f in s||(f=ls(f)||f);if(S||(h||h===0)&&(d||d===0)&&!XT.test(u)&&f in s)x=(l+"").substr((d+"").length),h||(h=0),_=Ai(u)||(f in ir.units?ir.units[f]:x),x!==_&&(d=On(e,f,l,_)),this._pt=new qi(this._pt,S?v:s,f,d,(m?Qa(d,m+h):h)-d,!S&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?JT:Wh),this._pt.u=_||0,S&&b!==u?(this._pt.b=l,this._pt.e=b,this._pt.r=YT):x!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=jT);else if(f in s)ab.call(this,e,f,l,m?m+u:u);else if(f in e)this.add(e,f,l||e[f],m?m+u:u,r,n);else if(f!=="parseTransform"){xh(f,u);continue}S||(f in s?g.push(f,0,s[f]):typeof e[f]=="function"?g.push(f,2,e[f]()):g.push(f,1,l||e[f])),a.push(f)}}w&&Hm(this)},render:function(e,t){if(t.tween._time||!Hh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:fn,aliases:Yr,getSetter:function(e,t,i){var r=Yr[t];return r&&r.indexOf(",")<0&&(t=r),t in pn&&t!==Yi&&(e._gsap.x||fn(e,"x"))?i&&qm===i?t==="scale"?QT:$T:(qm=i||{})&&(t==="scale"?eb:tb):e.style&&!fh(e.style[t])?KT:~t.indexOf("-")?ZT:Fh(e,t)},core:{_removeProperty:Nn,_getMatrix:jh}};ji.utils.checkPrefix=ls,ji.core.getStyleSaver=Zm,(function(e,t,i,r){var n=Wi(e+","+t+","+i,function(a){pn[a]=1});Wi(t,function(a){ir.units[a]="deg",s0[a]=1}),Yr[n[13]]=e+","+t,Wi(r,function(a){var s=a.split(":");Yr[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){ir.units[e]="px"}),ji.registerPlugin(h0);var pt=ji.registerPlugin(h0)||ji,Tw=pt.core.Tween;function d0(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function db(e,t,i){return t&&d0(e.prototype,t),i&&d0(e,i),e}var Mi,Yl,pb,Ji,Fn,zn,us,p0,ma,cs,f0,mn,Or,m0,g0=function(){return Mi||typeof window<"u"&&(Mi=window.gsap)&&Mi.registerPlugin&&Mi},v0=1,hs=[],ft=[],Jr=[],go=Date.now,Kh=function(e,t){return t},fb=function(){var e=cs.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ft),r.push.apply(r,Jr),ft=i,Jr=r,Kh=function(n,a){return t[n](a)}},Bn=function(e,t){return~Jr.indexOf(e)&&Jr[Jr.indexOf(e)+1][t]},vo=function(e){return!!~f0.indexOf(e)},Oi=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:r!==!1,capture:!!n})},Fi=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Jl="scrollLeft",Kl="scrollTop",Zh=function(){return mn&&mn.isPressed||ft.cache++},Zl=function(e,t){var i=function r(n){if(n||n===0){v0&&Ji.history.scrollRestoration!=="manual"&&(Ji.history.scrollRestoration="manual");var a=mn&&mn.isPressed;n=r.v=Math.round(n)||(mn&&mn.iOS?1:0),e(n),r.cacheID=ft.cache,a&&Kh("ss",n)}else(t||ft.cache!==r.cacheID||Kh("ref"))&&(r.cacheID=ft.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},zi={s:Jl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Zl(function(e){return arguments.length?Ji.scrollTo(e,di.sc()):Ji.pageXOffset||Fn[Jl]||zn[Jl]||us[Jl]||0})},di={s:Kl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zi,sc:Zl(function(e){return arguments.length?Ji.scrollTo(zi.sc(),e):Ji.pageYOffset||Fn[Kl]||zn[Kl]||us[Kl]||0})},Ki=function(e,t){return(t&&t._ctx&&t._ctx.selector||Mi.utils.toArray)(e)[0]||(typeof e=="string"&&Mi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mb=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},kn=function(e,t){var i=t.s,r=t.sc;vo(e)&&(e=Fn.scrollingElement||zn);var n=ft.indexOf(e),a=r===di.sc?1:2;!~n&&(n=ft.push(e)-1),ft[n+a]||Oi(e,"scroll",Zh);var s=ft[n+a],o=s||(ft[n+a]=Zl(Bn(e,i),!0)||(vo(e)?r:Zl(function(l){return arguments.length?e[i]=l:e[i]})));return o.target=e,s||(o.smooth=Mi.getProperty(e,"scrollBehavior")==="smooth"),o},$h=function(e,t,i){var r=e,n=e,a=go(),s=a,o=t||50,l=Math.max(500,o*3),u=function(c,p){var f=go();p||f-a>o?(n=r,r=c,s=a,a=f):i?r+=c:r=n+(c-n)/(f-s)*(a-s)},h=function(){n=r=i?0:r,s=a=0},d=function(c){var p=s,f=n,x=go();return(c||c===0)&&c!==r&&u(c),a===s||x-s>l?0:(r+(i?f:-f))/((i?x:a)-p)*1e3};return{update:u,reset:h,getVelocity:d}},_o=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},x0=function(){cs=Mi.core.globals().ScrollTrigger,cs&&cs.core&&fb()},y0=function(e){return Mi=e||g0(),!Yl&&Mi&&typeof document<"u"&&document.body&&(Ji=window,Fn=document,zn=Fn.documentElement,us=Fn.body,f0=[Ji,Fn,zn,us],pb=Mi.utils.clamp,m0=Mi.core.context||function(){},ma="onpointerenter"in us?"pointer":"mouse",p0=ni.isTouch=Ji.matchMedia&&Ji.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ji||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Or=ni.eventTypes=("ontouchstart"in zn?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zn?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return v0=0},500),Yl=1),cs||x0(),Yl};zi.op=di,ft.cache=0;var ni=(function(){function e(i){this.init(i)}var t=e.prototype;return t.init=function(i){Yl||y0(Mi)||console.warn("Please gsap.registerPlugin(Observer)"),cs||x0();var r=i.tolerance,n=i.dragMinimum,a=i.type,s=i.target,o=i.lineHeight,l=i.debounce,u=i.preventDefault,h=i.onStop,d=i.onStopDelay,c=i.ignore,p=i.wheelSpeed,f=i.event,x=i.onDragStart,_=i.onDragEnd,m=i.onDrag,S=i.onPress,M=i.onRelease,v=i.onRight,y=i.onLeft,w=i.onUp,g=i.onDown,b=i.onChangeX,R=i.onChangeY,N=i.onChange,L=i.onToggleX,k=i.onToggleY,K=i.onHover,C=i.onHoverEnd,O=i.onMove,H=i.ignoreCheck,F=i.isNormalizer,de=i.onGestureStart,P=i.onGestureEnd,$=i.onWheel,ge=i.onEnable,Re=i.onDisable,ae=i.onClick,pe=i.scrollSpeed,Ee=i.capture,be=i.allowClicks,Le=i.lockAxis,xe=i.onLockAxis;this.target=s=Ki(s)||zn,this.vars=i,c&&(c=Mi.utils.toArray(c)),r=r||1e-9,n=n||0,p=p||1,pe=pe||1,a=a||"wheel,touch,pointer",l=l!==!1,o||(o=parseFloat(Ji.getComputedStyle(us).lineHeight)||22);var Be,ke,fe,Ne,ve,Te,Me,B=this,we=0,Fe=0,ye=i.passive||!u&&i.passive!==!1,Ve=kn(s,zi),je=kn(s,di),$e=Ve(),W=je(),st=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Or[0]==="pointerdown",Ke=vo(s),Qe=s.ownerDocument||Fn,Ae=[0,0,0],it=[0,0,0],He=0,Xe=function(){return He=go()},_e=function(V,z){return(B.event=V)&&c&&mb(V.target,c)||z&&st&&V.pointerType!=="touch"||H&&H(V,z)},E=function(){B._vx.reset(),B._vy.reset(),ke.pause(),h&&h(B)},T=function(){var V=B.deltaX=_0(Ae),z=B.deltaY=_0(it),X=Math.abs(V)>=r,q=Math.abs(z)>=r;N&&(X||q)&&N(B,V,z,Ae,it),X&&(v&&B.deltaX>0&&v(B),y&&B.deltaX<0&&y(B),b&&b(B),L&&B.deltaX<0!=we<0&&L(B),we=B.deltaX,Ae[0]=Ae[1]=Ae[2]=0),q&&(g&&B.deltaY>0&&g(B),w&&B.deltaY<0&&w(B),R&&R(B),k&&B.deltaY<0!=Fe<0&&k(B),Fe=B.deltaY,it[0]=it[1]=it[2]=0),(Ne||fe)&&(O&&O(B),fe&&(x&&fe===1&&x(B),m&&m(B),fe=0),Ne=!1),Te&&!(Te=!1)&&xe&&xe(B),ve&&($(B),ve=!1),Be=0},U=function(V,z,X){Ae[X]+=V,it[X]+=z,B._vx.update(V),B._vy.update(z),l?Be||(Be=requestAnimationFrame(T)):T()},ee=function(V,z){Le&&!Me&&(B.axis=Me=Math.abs(V)>Math.abs(z)?"x":"y",Te=!0),Me!=="y"&&(Ae[2]+=V,B._vx.update(V,!0)),Me!=="x"&&(it[2]+=z,B._vy.update(z,!0)),l?Be||(Be=requestAnimationFrame(T)):T()},j=function(V){if(!_e(V,1)){V=_o(V,u);var z=V.clientX,X=V.clientY,q=z-B.x,Q=X-B.y,le=B.isDragging;B.x=z,B.y=X,(le||(q||Q)&&(Math.abs(B.startX-z)>=n||Math.abs(B.startY-X)>=n))&&(fe||(fe=le?2:1),le||(B.isDragging=!0),ee(q,Q))}},ue=B.onPress=function(V){_e(V,1)||V&&V.button||(B.axis=Me=null,ke.pause(),B.isPressed=!0,V=_o(V),we=Fe=0,B.startX=B.x=V.clientX,B.startY=B.y=V.clientY,B._vx.reset(),B._vy.reset(),Oi(F?s:Qe,Or[1],j,ye,!0),B.deltaX=B.deltaY=0,S&&S(B))},ie=B.onRelease=function(V){if(!_e(V,1)){Fi(F?s:Qe,Or[1],j,!0);var z=!isNaN(B.y-B.startY),X=B.isDragging,q=X&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Q=_o(V);!q&&z&&(B._vx.reset(),B._vy.reset(),u&&be&&Mi.delayedCall(.08,function(){if(go()-He>300&&!V.defaultPrevented){if(V.target.click)V.target.click();else if(Qe.createEvent){var le=Qe.createEvent("MouseEvents");le.initMouseEvent("click",!0,!0,Ji,1,Q.screenX,Q.screenY,Q.clientX,Q.clientY,!1,!1,!1,!1,0,null),V.target.dispatchEvent(le)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,h&&X&&!F&&ke.restart(!0),fe&&T(),_&&X&&_(B),M&&M(B,q)}},D=function(V){return V.touches&&V.touches.length>1&&(B.isGesturing=!0)&&de(V,B.isDragging)},ne=function(){return(B.isGesturing=!1)||P(B)},me=function(V){if(!_e(V)){var z=Ve(),X=je();U((z-$e)*pe,(X-W)*pe,1),$e=z,W=X,h&&ke.restart(!0)}},I=function(V){if(!_e(V)){V=_o(V,u),$&&(ve=!0);var z=(V.deltaMode===1?o:V.deltaMode===2?Ji.innerHeight:1)*p;U(V.deltaX*z,V.deltaY*z,0),h&&!F&&ke.restart(!0)}},Y=function(V){if(!_e(V)){var z=V.clientX,X=V.clientY,q=z-B.x,Q=X-B.y;B.x=z,B.y=X,Ne=!0,h&&ke.restart(!0),(q||Q)&&ee(q,Q)}},ce=function(V){B.event=V,K(B)},Z=function(V){B.event=V,C(B)},oe=function(V){return _e(V)||_o(V,u)&&ae(B)};ke=B._dc=Mi.delayedCall(d||.25,E).pause(),B.deltaX=B.deltaY=0,B._vx=$h(0,50,!0),B._vy=$h(0,50,!0),B.scrollX=Ve,B.scrollY=je,B.isDragging=B.isGesturing=B.isPressed=!1,m0(this),B.enable=function(V){return B.isEnabled||(Oi(Ke?Qe:s,"scroll",Zh),a.indexOf("scroll")>=0&&Oi(Ke?Qe:s,"scroll",me,ye,Ee),a.indexOf("wheel")>=0&&Oi(s,"wheel",I,ye,Ee),(a.indexOf("touch")>=0&&p0||a.indexOf("pointer")>=0)&&(Oi(s,Or[0],ue,ye,Ee),Oi(Qe,Or[2],ie),Oi(Qe,Or[3],ie),be&&Oi(s,"click",Xe,!0,!0),ae&&Oi(s,"click",oe),de&&Oi(Qe,"gesturestart",D),P&&Oi(Qe,"gestureend",ne),K&&Oi(s,ma+"enter",ce),C&&Oi(s,ma+"leave",Z),O&&Oi(s,ma+"move",Y)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=Ne=fe=!1,B._vx.reset(),B._vy.reset(),$e=Ve(),W=je(),V&&V.type&&ue(V),ge&&ge(B)),B},B.disable=function(){B.isEnabled&&(hs.filter(function(V){return V!==B&&vo(V.target)}).length||Fi(Ke?Qe:s,"scroll",Zh),B.isPressed&&(B._vx.reset(),B._vy.reset(),Fi(F?s:Qe,Or[1],j,!0)),Fi(Ke?Qe:s,"scroll",me,Ee),Fi(s,"wheel",I,Ee),Fi(s,Or[0],ue,Ee),Fi(Qe,Or[2],ie),Fi(Qe,Or[3],ie),Fi(s,"click",Xe,!0),Fi(s,"click",oe),Fi(Qe,"gesturestart",D),Fi(Qe,"gestureend",ne),Fi(s,ma+"enter",ce),Fi(s,ma+"leave",Z),Fi(s,ma+"move",Y),B.isEnabled=B.isPressed=B.isDragging=!1,Re&&Re(B))},B.kill=B.revert=function(){B.disable();var V=hs.indexOf(B);V>=0&&hs.splice(V,1),mn===B&&(mn=0)},hs.push(B),F&&vo(s)&&(mn=B),B.enable(f)},db(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e})();ni.version="3.15.1",ni.create=function(e){return new ni(e)},ni.register=y0,ni.getAll=function(){return hs.slice()},ni.getById=function(e){return hs.filter(function(t){return t.vars.id===e})[0]},g0()&&Mi.registerPlugin(ni);var We,ds,mt,Dt,ur,Pt,Qh,$l,xo,yo,Mo,Ql,Ri,eu,ed,Bi,M0,S0,ps,T0,td,b0,ki,id,w0,E0,Vn,rd,nd,fs,ad,Hn,sd,od,tu=1,Pi=Date.now,ld=Pi(),Mr=0,So=0,A0=function(e,t,i){var r=cr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},R0=function(e,t){return t&&(!cr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gb=function e(){return So&&requestAnimationFrame(e)},P0=function(){return eu=1},C0=function(){return eu=0},Kr=function(e){return e},To=function(e){return Math.round(e*1e5)/1e5||0},L0=function(){return typeof window<"u"},I0=function(){return We||L0()&&(We=window.gsap)&&We.registerPlugin&&We},ga=function(e){return!!~Qh.indexOf(e)},D0=function(e){return(e==="Height"?ad:mt["inner"+e])||ur["client"+e]||Pt["client"+e]},N0=function(e){return Bn(e,"getBoundingClientRect")||(ga(e)?function(){return fu.width=mt.innerWidth,fu.height=ad,fu}:function(){return gn(e)})},vb=function(e,t,i){var r=i.d,n=i.d2,a=i.a;return(a=Bn(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?D0(n):e["client"+n])||0}},_b=function(e,t){return!t||~Jr.indexOf(e)?N0(e):function(){return fu}},Zr=function(e,t){var i=t.s,r=t.d2,n=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=Bn(e,i))?a()-N0(e)()[n]:ga(e)?(ur[i]||Pt[i])-D0(r):e[i]-e["offset"+r])},iu=function(e,t){for(var i=0;i<ps.length;i+=3)(!t||~t.indexOf(ps[i+1]))&&e(ps[i],ps[i+1],ps[i+2])},cr=function(e){return typeof e=="string"},Ci=function(e){return typeof e=="function"},bo=function(e){return typeof e=="number"},va=function(e){return typeof e=="object"},wo=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ms=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},gs=Math.abs,U0="left",O0="top",ud="right",cd="bottom",_a="width",xa="height",Eo="Right",Ao="Left",Ro="Top",Po="Bottom",ui="padding",Sr="margin",vs="Width",hd="Height",pi="px",Tr=function(e){return mt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},xb=function(e){var t=Tr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},F0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},gn=function(e,t){var i=t&&Tr(e)[ed]!=="matrix(1, 0, 0, 1, 0, 0)"&&We.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},ru=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},z0=function(e){var t=[],i=e.labels,r=e.duration(),n;for(n in i)t.push(i[n]/r);return t},yb=function(e){return function(t){return We.utils.snap(z0(e),t)}},dd=function(e){var t=We.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,n){return r-n});return i?function(r,n,a){a===void 0&&(a=.001);var s;if(!n)return t(r);if(n>0){for(r-=a,s=0;s<i.length;s++)if(i[s]>=r)return i[s];return i[s-1]}else for(s=i.length,r+=a;s--;)if(i[s]<=r)return i[s];return i[0]}:function(r,n,a){a===void 0&&(a=.001);var s=t(r);return!n||Math.abs(s-r)<a||s-r<0==n<0?s:t(n<0?r-e:r+e)}},Mb=function(e){return function(t,i){return dd(z0(e))(t,i.direction)}},nu=function(e,t,i,r){return i.split(",").forEach(function(n){return e(t,n,r)})},gi=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:!r,capture:!!n})},vi=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},au=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},B0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},su={toggleActions:"play",anticipatePin:0},ou={top:0,left:0,center:.5,bottom:1,right:1},lu=function(e,t){if(cr(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ou?ou[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},uu=function(e,t,i,r,n,a,s,o){var l=n.startColor,u=n.endColor,h=n.fontSize,d=n.indent,c=n.fontWeight,p=Dt.createElement("div"),f=ga(i)||Bn(i,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,_=f?Pt:i.tagName==="IFRAME"?i.contentDocument.body:i,m=e.indexOf("start")!==-1,S=m?l:u,M="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+c+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((x||o)&&f?"fixed;":"absolute;"),(x||o||!f)&&(M+=(r===di?ud:cd)+":"+(a+parseFloat(d))+"px;"),s&&(M+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),p._isStart=m,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=M,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+r.op.d2],cu(p,0,r,m),p},cu=function(e,t,i,r){var n={display:"block"},a=i[r?"os2":"p2"],s=i[r?"p2":"os2"];e._isFlipped=r,n[i.a+"Percent"]=r?-100:0,n[i.a]=r?"1px":0,n["border"+a+vs]=1,n["border"+s+vs]=0,n[i.p]=t+"px",We.set(e,n)},gt=[],pd={},Co,k0=function(){return Pi()-Mr>34&&(Co||(Co=requestAnimationFrame(vn)))},_s=function(){(!ki||!ki.isPressed||ki.startX>Pt.clientWidth)&&(ft.cache++,ki?Co||(Co=requestAnimationFrame(vn)):vn(),Mr||Ma("scrollStart"),Mr=Pi())},fd=function(){E0=mt.innerWidth,w0=mt.innerHeight},Lo=function(e){ft.cache++,(e===!0||!Ri&&!b0&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!id||E0!==mt.innerWidth||Math.abs(mt.innerHeight-w0)>mt.innerHeight*.25))&&$l.restart(!0)},ya={},Sb=[],V0=function e(){return vi(vt,"scrollEnd",e)||Ta(!0)},Ma=function(e){return ya[e]&&ya[e].map(function(t){return t()})||Sb},hr=[],H0=function(e){for(var t=0;t<hr.length;t+=5)(!e||hr[t+4]&&hr[t+4].query===e)&&(hr[t].style.cssText=hr[t+1],hr[t].getBBox&&hr[t].setAttribute("transform",hr[t+2]||""),hr[t+3].uncache=1)},G0=function(){ft.cache++,ft.forEach(function(e){return Ci(e)&&(e.rec=e())})},md=function(e,t){var i;for(Bi=0;Bi<gt.length;Bi++)i=gt[Bi],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Hn=!0,t&&H0(t),t||Ma("revert")},W0=function(e,t){ft.cache++,(t||!Vi)&&ft.forEach(function(i){return Ci(i)&&i.cacheID++&&(i.rec=0)}),cr(e)&&(nd=e,mt.history.scrollRestoration!==e&&(mt.history.scrollRestoration=e))},Vi,Sa=0,X0,Tb=function(){if(X0!==Sa){var e=X0=Sa;requestAnimationFrame(function(){return e===Sa&&Ta(!0)})}},q0=function(){Pt.appendChild(fs),ad=!ki&&fs.offsetHeight||mt.innerHeight,Pt.removeChild(fs)},j0=function(e){return xo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ta=function(e,t){if(ur=Dt.documentElement,Pt=Dt.body,Qh=[mt,Dt,ur,Pt],Mr&&!e&&!Hn){gi(vt,"scrollEnd",V0);return}q0(),Vi=vt.isRefreshing=!0,Hn||G0();var i=Ma("refreshInit");T0&&vt.sort(),t||md(),ft.forEach(function(r){Ci(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),gt.slice(0).forEach(function(r){return r.refresh()}),Hn=!1,gt.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-a),r.refresh()}}),sd=1,j0(!0),gt.forEach(function(r){var n=Zr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>n,s=r._startClamp&&r.start>=n;(a||s)&&r.setPositions(s?n-1:r.start,a?Math.max(s?n:r.start+1,n):r.end,!0)}),j0(!1),sd=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ft.forEach(function(r){Ci(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),W0(nd,1),$l.pause(),Sa++,Vi=2,vn(2),gt.forEach(function(r){return Ci(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Vi=vt.isRefreshing=!1,Ma("refresh")},gd=0,hu=1,Io,vn=function(e){if(e===2||!Vi&&!Hn){vt.isUpdating=!0,Io&&Io.update(0);var t=gt.length,i=Pi(),r=i-ld>=50,n=t&&gt[0].scroll();if(hu=gd>n?-1:1,Vi||(gd=n),r&&(Mr&&!eu&&i-Mr>200&&(Mr=0,Ma("scrollEnd")),Mo=ld,ld=i),hu<0){for(Bi=t;Bi-- >0;)gt[Bi]&&gt[Bi].update(0,r);hu=1}else for(Bi=0;Bi<t;Bi++)gt[Bi]&&gt[Bi].update(0,r);vt.isUpdating=!1}Co=0},vd=[U0,O0,cd,ud,Sr+Po,Sr+Eo,Sr+Ro,Sr+Ao,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],du=vd.concat([_a,xa,"boxSizing","max"+vs,"max"+hd,"position",Sr,ui,ui+Ro,ui+Eo,ui+Po,ui+Ao]),bb=function(e,t,i){xs(i);var r=e._gsap;if(r.spacerIsNative)xs(r.spacerState);else if(e._gsap.swappedIn){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}e._gsap.swappedIn=!1},_d=function(e,t,i,r){if(!e._gsap.swappedIn){for(var n=vd.length,a=t.style,s=e.style,o;n--;)o=vd[n],a[o]=i[o];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),s[cd]=s[ud]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[_a]=ru(e,zi)+pi,a[xa]=ru(e,di)+pi,a[ui]=s[Sr]=s[O0]=s[U0]="0",xs(r),s[_a]=s["max"+vs]=i[_a],s[xa]=s["max"+hd]=i[xa],s[ui]=i[ui],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},wb=/([A-Z])/g,xs=function(e){if(e){var t=e.t.style,i=e.length,r=0,n,a;for((e.t._gsap||We.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],n=e[r],a?t[n]=a:t[n]&&t.removeProperty(n.replace(wb,"-$1").toLowerCase())}},pu=function(e){for(var t=du.length,i=e.style,r=[],n=0;n<t;n++)r.push(du[n],i[du[n]]);return r.t=e,r},Eb=function(e,t,i){for(var r=[],n=e.length,a=i?8:0,s;a<n;a+=2)s=e[a],r.push(s,s in t?t[s]:e[a+1]);return r.t=e.t,r},fu={left:0,top:0},Y0=function(e,t,i,r,n,a,s,o,l,u,h,d,c,p){Ci(e)&&(e=e(o)),cr(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?lu("0"+e.substr(3),i):0));var f=c?c.time():0,x,_,m;if(c&&c.seek(0),isNaN(e)||(e=+e),bo(e))c&&(e=We.utils.mapRange(c.scrollTrigger.start,c.scrollTrigger.end,0,d,e)),s&&cu(s,i,r,!0);else{Ci(t)&&(t=t(o));var S=(e||"0").split(" "),M,v,y,w;m=Ki(t,o)||Pt,M=gn(m)||{},(!M||!M.left&&!M.top)&&Tr(m).display==="none"&&(w=m.style.display,m.style.display="block",M=gn(m),w?m.style.display=w:m.style.removeProperty("display")),v=lu(S[0],M[r.d]),y=lu(S[1]||"0",i),e=M[r.p]-l[r.p]-u+v+n-y,s&&cu(s,y,r,i-y<20||s._isStart&&y>20),i-=i-y}if(p&&(o[p]=e||-.001,e<0&&(e=0)),a){var g=e+i,b=a._isStart;x="scroll"+r.d2,cu(a,g,r,b&&g>20||!b&&(h?Math.max(Pt[x],ur[x]):a.parentNode[x])<=g+1),h&&(l=gn(s),h&&(a.style[r.op.p]=l[r.op.p]-r.op.m-a._offset+pi))}return c&&m&&(x=gn(m),c.seek(d),_=gn(m),c._caScrollDist=x[r.p]-_[r.p],e=e/c._caScrollDist*d),c&&c.seek(f),c?e:Math.round(e)},Ab=/(webkit|moz|length|cssText|inset)/i,J0=function(e,t,i,r){if(e.parentNode!==t){var n=e.style,a,s;if(t===Pt){e._stOrig=n.cssText,s=Tr(e);for(a in s)!+a&&!Ab.test(a)&&s[a]&&typeof n[a]=="string"&&a!=="0"&&(n[a]=s[a]);n.top=i,n.left=r}else n.cssText=e._stOrig;We.core.getCache(e).uncache=1,t.appendChild(e)}},K0=function(e,t,i){var r=t,n=r;return function(a){var s=Math.round(e());return s!==r&&s!==n&&Math.abs(s-r)>3&&Math.abs(s-n)>3&&(a=s,i&&i()),n=r,r=Math.round(a),r}},mu=function(e,t,i){var r={};r[t.p]="+="+i,We.set(e,r)},Z0=function(e,t){var i=kn(e,t),r="_scroll"+t.p2,n=function a(s,o,l,u,h){var d=a.tween,c=o.onComplete,p={};l=l||i();var f=K0(i,l,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||s-l,d&&d.kill(),o[r]=s,o.inherit=!1,o.modifiers=p,p[r]=function(){return f(l+u*d.ratio+h*d.ratio*d.ratio)},o.onUpdate=function(){ft.cache++,a.tween&&vn()},o.onComplete=function(){a.tween=0,c&&c.call(d)},d=a.tween=We.to(e,o),d};return e[r]=i,i.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},gi(e,"wheel",i.wheelHandler),vt.isTouch&&gi(e,"touchmove",i.wheelHandler),n},vt=(function(){function e(i,r){ds||e.register(We)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),rd(this),this.init(i,r)}var t=e.prototype;return t.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!So){this.update=this.refresh=this.kill=Kr;return}i=F0(cr(i)||bo(i)||i.nodeType?{trigger:i}:i,su);var n=i,a=n.onUpdate,s=n.toggleClass,o=n.id,l=n.onToggle,u=n.onRefresh,h=n.scrub,d=n.trigger,c=n.pin,p=n.pinSpacing,f=n.invalidateOnRefresh,x=n.anticipatePin,_=n.onScrubComplete,m=n.onSnapComplete,S=n.once,M=n.snap,v=n.pinReparent,y=n.pinSpacer,w=n.containerAnimation,g=n.fastScrollEnd,b=n.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?zi:di,N=!h&&h!==0,L=Ki(i.scroller||mt),k=We.core.getCache(L),K=ga(L),C=("pinType"in i?i.pinType:Bn(L,"pinType")||K&&"fixed")==="fixed",O=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=N&&i.toggleActions.split(" "),F="markers"in i?i.markers:su.markers,de=K?0:parseFloat(Tr(L)["border"+R.p2+vs])||0,P=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ge=vb(L,K,R),Re=_b(L,K),ae=0,pe=0,Ee=0,be=kn(L,R),Le,xe,Be,ke,fe,Ne,ve,Te,Me,B,we,Fe,ye,Ve,je,$e,W,st,Ke,Qe,Ae,it,He,Xe,_e,E,T,U,ee,j,ue,ie,D,ne,me,I,Y,ce,Z;if(P._startClamp=P._endClamp=!1,P._dir=R,x*=45,P.scroller=L,P.scroll=w?w.time.bind(w):be,ke=be(),Hn&&be.rec==null&&(be.rec=ke),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(T0=1,i.refreshPriority===-9999&&(Io=P)),k.tweenScroll=k.tweenScroll||{top:Z0(L,di),left:Z0(L,zi)},P.tweenTo=Le=k.tweenScroll[R.p],P.scrubDuration=function(q){D=bo(q)&&q,D?ie?ie.duration(q):ie=We.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:D,paused:!0,onComplete:function(){return _&&_(P)}}):(ie&&ie.progress(1).kill(),ie=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(h),j=0,o||(o=r.vars.id)),M&&((!va(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in Pt.style&&We.set(K?[Pt,ur]:L,{scrollBehavior:"auto"}),ft.forEach(function(q){return Ci(q)&&q.target===(K?Dt.scrollingElement||ur:L)&&(q.smooth=!1)}),Be=Ci(M.snapTo)?M.snapTo:M.snapTo==="labels"?yb(r):M.snapTo==="labelsDirectional"?Mb(r):M.directional!==!1?function(q,Q){return dd(M.snapTo)(q,Pi()-pe<500?0:Q.direction)}:We.utils.snap(M.snapTo),ne=M.duration||{min:.1,max:2},ne=va(ne)?yo(ne.min,ne.max):yo(ne,ne),me=We.delayedCall(M.delay||D/2||.1,function(){var q=be(),Q=Pi()-pe<500,le=Le.tween;if((Q||Math.abs(P.getVelocity())<10)&&!le&&!eu&&ae!==q){var se=(q-Ne)/Ve,Pe=r&&!N?r.totalProgress():se,Se=Q?0:(Pe-ue)/(Pi()-Mo)*1e3||0,nt=We.utils.clamp(-se,1-se,gs(Se/2)*Se/.185),ze=se+(M.inertia===!1?0:nt),Je,ut,ct=M,xt=ct.onStart,yt=ct.onInterrupt,Wt=ct.onComplete;if(Je=Be(ze,P),bo(Je)||(Je=ze),ut=Math.max(0,Math.round(Ne+Je*Ve)),q<=ve&&q>=Ne&&ut!==q){if(le&&!le._initted&&le.data<=gs(ut-q))return;M.inertia===!1&&(nt=Je-se),Le(ut,{duration:ne(gs(Math.max(gs(ze-Pe),gs(Je-Pe))*.185/Se/.05||0)),ease:M.ease||"power3",data:gs(ut-q),onInterrupt:function(){return me.restart(!0)&&yt&&ms(P,yt)},onComplete:function(){P.update(),ae=be(),r&&!N&&(ie?ie.resetTo("totalProgress",Je,r._tTime/r._tDur):r.progress(Je)),j=ue=r&&!N?r.totalProgress():P.progress,m&&m(P),Wt&&ms(P,Wt)}},q,nt*Ve,ut-q-nt*Ve),xt&&ms(P,xt,Le.tween)}}else P.isActive&&ae!==q&&me.restart(!0)}).pause()),o&&(pd[o]=P),d=P.trigger=Ki(d||c!==!0&&c),Z=d&&d._gsap&&d._gsap.stRevert,Z&&(Z=Z(P)),c=c===!0?d:Ki(c),cr(s)&&(s={targets:d,className:s}),c&&(p===!1||p===Sr||(p=!p&&c.parentNode&&c.parentNode.style&&Tr(c.parentNode).display==="flex"?!1:ui),P.pin=c,xe=We.core.getCache(c),xe.spacer?je=xe.pinState:(y&&(y=Ki(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),xe.spacerIsNative=!!y,y&&(xe.spacerState=pu(y))),xe.spacer=st=y||Dt.createElement("div"),st.classList.add("pin-spacer"),o&&st.classList.add("pin-spacer-"+o),xe.pinState=je=pu(c)),i.force3D!==!1&&We.set(c,{force3D:!0}),P.spacer=st=xe.spacer,ee=Tr(c),Xe=ee[p+R.os2],Qe=We.getProperty(c),Ae=We.quickSetter(c,R.a,pi),_d(c,st,ee),W=pu(c)),F){Fe=va(F)?F0(F,B0):B0,B=uu("scroller-start",o,L,R,Fe,0),we=uu("scroller-end",o,L,R,Fe,0,B),Ke=B["offset"+R.op.d2];var oe=Ki(Bn(L,"content")||L);Te=this.markerStart=uu("start",o,oe,R,Fe,Ke,0,w),Me=this.markerEnd=uu("end",o,oe,R,Fe,Ke,0,w),w&&(ce=We.quickSetter([Te,Me],R.a,pi)),!C&&!(Jr.length&&Bn(L,"fixedMarkers")===!0)&&(xb(K?Pt:L),We.set([B,we],{force3D:!0}),E=We.quickSetter(B,R.a,pi),U=We.quickSetter(we,R.a,pi))}if(w){var V=w.vars.onUpdate,z=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),V&&V.apply(w,z||[])})}if(P.previous=function(){return gt[gt.indexOf(P)-1]},P.next=function(){return gt[gt.indexOf(P)+1]},P.revert=function(q,Q){if(!Q)return P.kill(!0);var le=q!==!1||!P.enabled,se=Ri;le!==P.isReverted&&(le&&(I=Math.max(be(),P.scroll.rec||0),Ee=P.progress,Y=r&&r.progress()),Te&&[Te,Me,B,we].forEach(function(Pe){return Pe.style.display=le?"none":"block"}),le&&(Ri=P,P.update(le)),c&&(!v||!P.isActive)&&(le?bb(c,st,je):_d(c,st,Tr(c),_e)),le||P.update(le),Ri=se,P.isReverted=le)},P.refresh=function(q,Q,le,se){if(!((Ri||!P.enabled)&&!Q)){if(c&&q&&Mr){gi(e,"scrollEnd",V0);return}!Vi&&$&&$(P),Ri=P,Le.tween&&!le&&(Le.tween.kill(),Le.tween=0),ie&&ie.pause(),f&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(te){return te.vars.immediateRender&&te.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Pe=ge(),Se=Re(),nt=w?w.duration():Zr(L,R),ze=Ve<=.01||!Ve,Je=0,ut=se||0,ct=va(le)?le.end:i.end,xt=i.endTrigger||d,yt=va(le)?le.start:i.start||(i.start===0||!d?0:c?"0 0":"0 100%"),Wt=P.pinnedContainer=i.pinnedContainer&&Ki(i.pinnedContainer,P),Xt=d&&Math.max(0,gt.indexOf(P))||0,ot=Xt,et,Lt,Et,ti,zt,Tt,ii,br,pr,wr,A,G,he;for(F&&va(le)&&(G=We.getProperty(B,R.p),he=We.getProperty(we,R.p));ot-- >0;)Tt=gt[ot],Tt.end||Tt.refresh(0,1)||(Ri=P),ii=Tt.pin,ii&&(ii===d||ii===c||ii===Wt)&&!Tt.isReverted&&(wr||(wr=[]),wr.unshift(Tt),Tt.revert(!0,!0)),Tt!==gt[ot]&&(Xt--,ot--);for(Ci(yt)&&(yt=yt(P)),yt=A0(yt,"start",P),Ne=Y0(yt,d,Pe,R,be(),Te,B,P,Se,de,C,nt,w,P._startClamp&&"_startClamp")||(c?-.001:0),Ci(ct)&&(ct=ct(P)),cr(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(cr(yt)?yt.split(" ")[0]:"")+ct:(Je=lu(ct.substr(2),Pe),ct=cr(yt)?yt:(w?We.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Ne):Ne)+Je,xt=d)),ct=A0(ct,"end",P),ve=Math.max(Ne,Y0(ct||(xt?"100% 0":nt),xt,Pe,R,be()+Je,Me,we,P,Se,de,C,nt,w,P._endClamp&&"_endClamp"))||-.001,Je=0,ot=Xt;ot--;)Tt=gt[ot]||{},ii=Tt.pin,ii&&Tt.start-Tt._pinPush<=Ne&&!w&&Tt.end>0&&(et=Tt.end-(P._startClamp?Math.max(0,Tt.start):Tt.start),(ii===d&&Tt.start-Tt._pinPush<Ne||ii===Wt)&&isNaN(yt)&&(Je+=et*(1-Tt.progress)),ii===c&&(ut+=et));if(Ne+=Je,ve+=Je,P._startClamp&&(P._startClamp+=Je),P._endClamp&&!Vi&&(P._endClamp=ve||-.001,ve=Math.min(ve,Zr(L,R))),Ve=ve-Ne||(Ne-=.01)&&.001,ze&&(Ee=We.utils.clamp(0,1,We.utils.normalize(Ne,ve,I))),P._pinPush=ut,Te&&Je&&(et={},et[R.a]="+="+Je,Wt&&(et[R.p]="-="+be()),We.set([Te,Me],et)),c&&!(sd&&P.end>=Zr(L,R)))et=Tr(c),ti=R===di,Et=be(),it=parseFloat(Qe(R.a))+ut,!nt&&ve>1&&(A=(K?Dt.scrollingElement||ur:L).style,A={style:A,value:A["overflow"+R.a.toUpperCase()]},K&&Tr(Pt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(A.style["overflow"+R.a.toUpperCase()]="scroll")),_d(c,st,et),W=pu(c),Lt=gn(c,!0),br=C&&kn(L,ti?zi:di)(),p?(_e=[p+R.os2,Ve+ut+pi],_e.t=st,ot=p===ui?ru(c,R)+Ve+ut:0,ot&&(_e.push(R.d,ot+pi),st.style.flexBasis!=="auto"&&(st.style.flexBasis=ot+pi)),xs(_e),Wt&&gt.forEach(function(te){te.pin===Wt&&te.vars.pinSpacing!==!1&&(te._subPinOffset=!0)}),C&&be(I)):(ot=ru(c,R),ot&&st.style.flexBasis!=="auto"&&(st.style.flexBasis=ot+pi)),C&&(zt={top:Lt.top+(ti?Et-Ne:br)+pi,left:Lt.left+(ti?br:Et-Ne)+pi,boxSizing:"border-box",position:"fixed"},zt[_a]=zt["max"+vs]=Math.ceil(Lt.width)+pi,zt[xa]=zt["max"+hd]=Math.ceil(Lt.height)+pi,zt[Sr]=zt[Sr+Ro]=zt[Sr+Eo]=zt[Sr+Po]=zt[Sr+Ao]="0",zt[ui]=et[ui],zt[ui+Ro]=et[ui+Ro],zt[ui+Eo]=et[ui+Eo],zt[ui+Po]=et[ui+Po],zt[ui+Ao]=et[ui+Ao],$e=Eb(je,zt,v),Vi&&be(0)),r?(pr=r._initted,td(1),r.render(r.duration(),!0,!0),He=Qe(R.a)-it+Ve+ut,T=Math.abs(Ve-He)>1,C&&T&&$e.splice($e.length-2,2),r.render(0,!0,!0),pr||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),td(0)):He=Ve,A&&(A.value?A.style["overflow"+R.a.toUpperCase()]=A.value:A.style.removeProperty("overflow-"+R.a));else if(d&&be()&&!w)for(Lt=d.parentNode;Lt&&Lt!==Pt;)Lt._pinOffset&&(Ne-=Lt._pinOffset,ve-=Lt._pinOffset),Lt=Lt.parentNode;wr&&wr.forEach(function(te){return te.revert(!1,!0)}),P.start=Ne,P.end=ve,ke=fe=Vi?I:be(),!w&&!Vi&&!Hn&&(ke<I&&be(I),P.scroll.rec=0),P.revert(!1,!0),pe=Pi(),me&&(ae=-1,me.restart(!0)),Ri=0,r&&N&&(r._initted||Y)&&r.progress()!==Y&&r.progress(Y||0,!0).render(r.time(),!0,!0),(ze||Ee!==P.progress||w||f||r&&!r._initted)&&(r&&!N&&(r._initted||Ee||r.vars.immediateRender!==!1)&&r.totalProgress(w&&Ne<-.001&&!Ee?We.utils.normalize(Ne,ve,0):Ee,!0),P.progress=ze||(ke-Ne)/Ve===Ee?0:Ee),c&&p&&(st._pinOffset=Math.round(P.progress*He)),ie&&ie.invalidate(),isNaN(G)||(G-=We.getProperty(B,R.p),he-=We.getProperty(we,R.p),mu(B,R,G),mu(Te,R,G-(se||0)),mu(we,R,he),mu(Me,R,he-(se||0))),ze&&!Vi&&P.update(),u&&!Vi&&!ye&&(ye=!0,u(P),ye=!1)}},P.getVelocity=function(){return(be()-fe)/(Pi()-Mo)*1e3||0},P.endAnimation=function(){wo(P.callbackAnimation),r&&(ie?ie.progress(1):r.paused()?N||wo(r,P.direction<0,1):wo(r,r.reversed()))},P.labelToScroll=function(q){return r&&r.labels&&(Ne||P.refresh()||Ne)+r.labels[q]/r.duration()*Ve||0},P.getTrailing=function(q){var Q=gt.indexOf(P),le=P.direction>0?gt.slice(0,Q).reverse():gt.slice(Q+1);return(cr(q)?le.filter(function(se){return se.vars.preventOverlaps===q}):le).filter(function(se){return P.direction>0?se.end<=Ne:se.start>=ve})},P.update=function(q,Q,le){if(!(w&&!le&&!q)){var se=Vi===!0?I:P.scroll(),Pe=q?0:(se-Ne)/Ve,Se=Pe<0?0:Pe>1?1:Pe||0,nt=P.progress,ze,Je,ut,ct,xt,yt,Wt,Xt;if(Q&&(fe=ke,ke=w?be():se,M&&(ue=j,j=r&&!N?r.totalProgress():Se)),x&&c&&!Ri&&!tu&&Mr&&(!Se&&Ne<se+(se-fe)/(Pi()-Mo)*x?Se=1e-4:Se===1&&ve>se+(se-fe)/(Pi()-Mo)*x&&(Se=.9999)),Se!==nt&&P.enabled){if(ze=P.isActive=!!Se&&Se<1,Je=!!nt&&nt<1,yt=ze!==Je,xt=yt||!!Se!=!!nt,P.direction=Se>nt?1:-1,P.progress=Se,xt&&!Ri&&(ut=Se&&!nt?0:Se===1?1:nt===1?2:3,N&&(ct=!yt&&H[ut+1]!=="none"&&H[ut+1]||H[ut],Xt=r&&(ct==="complete"||ct==="reset"||ct in r))),b&&(yt||Xt)&&(Xt||h||!r)&&(Ci(b)?b(P):P.getTrailing(b).forEach(function(Et){return Et.endAnimation()})),N||(ie&&!Ri&&!tu?(ie._dp._time-ie._start!==ie._time&&ie.render(ie._dp._time-ie._start),ie.resetTo?ie.resetTo("totalProgress",Se,r._tTime/r._tDur):(ie.vars.totalProgress=Se,ie.invalidate().restart())):r&&r.totalProgress(Se,!!(Ri&&(pe||q)))),c){if(q&&p&&(st.style[p+R.os2]=Xe),!C)Ae(To(it+He*Se));else if(xt){if(Wt=!q&&Se>nt&&ve+1>se&&se+1>=Zr(L,R),v)if(!q&&(ze||Wt)){var ot=gn(c,!0),et=se-Ne;J0(c,Pt,ot.top+(R===di?et:0)+pi,ot.left+(R===di?0:et)+pi)}else J0(c,st);xs(ze||Wt?$e:W),T&&Se<1&&ze||Ae(it+(Se===1&&!Wt?He:0))}}M&&!Le.tween&&!Ri&&!tu&&me.restart(!0),s&&(yt||S&&Se&&(Se<1||!od))&&xo(s.targets).forEach(function(Et){return Et.classList[ze||S?"add":"remove"](s.className)}),a&&!N&&!q&&a(P),xt&&!Ri?(N&&(Xt&&(ct==="complete"?r.pause().totalProgress(1):ct==="reset"?r.restart(!0).pause():ct==="restart"?r.restart(!0):r[ct]()),a&&a(P)),(yt||!od)&&(l&&yt&&ms(P,l),O[ut]&&ms(P,O[ut]),S&&(Se===1?P.kill(!1,1):O[ut]=0),yt||(ut=Se===1?1:3,O[ut]&&ms(P,O[ut]))),g&&!ze&&Math.abs(P.getVelocity())>(bo(g)?g:2500)&&(wo(P.callbackAnimation),ie?ie.progress(1):wo(r,ct==="reverse"?1:!Se,1))):N&&a&&!Ri&&a(P)}if(U){var Lt=w?se/w.duration()*(w._caScrollDist||0):se;E(Lt+(B._isFlipped?1:0)),U(Lt)}ce&&ce(-se/w.duration()*(w._caScrollDist||0))}},P.enable=function(q,Q){P.enabled||(P.enabled=!0,gi(L,"resize",Lo),K||gi(L,"scroll",_s),$&&gi(e,"refreshInit",$),q!==!1&&(P.progress=Ee=0,ke=fe=ae=be()),Q!==!1&&P.refresh())},P.getTween=function(q){return q&&Le?Le.tween:ie},P.setPositions=function(q,Q,le,se){if(w){var Pe=w.scrollTrigger,Se=w.duration(),nt=Pe.end-Pe.start;q=Pe.start+nt*q/Se,Q=Pe.start+nt*Q/Se}P.refresh(!1,!1,{start:R0(q,le&&!!P._startClamp),end:R0(Q,le&&!!P._endClamp)},se),P.update()},P.adjustPinSpacing=function(q){if(_e&&q){var Q=_e.indexOf(R.d)+1;_e[Q]=parseFloat(_e[Q])+q+pi,_e[1]=parseFloat(_e[1])+q+pi,xs(_e)}},P.disable=function(q,Q){if(q!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Q||ie&&ie.pause(),I=0,xe&&(xe.uncache=1),$&&vi(e,"refreshInit",$),me&&(me.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!K)){for(var le=gt.length;le--;)if(gt[le].scroller===L&&gt[le]!==P)return;vi(L,"resize",Lo),K||vi(L,"scroll",_s)}},P.kill=function(q,Q){P.disable(q,Q),ie&&!Q&&ie.kill(),o&&delete pd[o];var le=gt.indexOf(P);le>=0&&gt.splice(le,1),le===Bi&&hu>0&&Bi--,le=0,gt.forEach(function(se){return se.scroller===P.scroller&&(le=1)}),le||Vi||Hn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,q&&r.revert({kill:!1}),Q||r.kill()),Te&&[Te,Me,B,we].forEach(function(se){return se.parentNode&&se.parentNode.removeChild(se)}),Io===P&&(Io=0),c&&(xe&&(xe.uncache=1),le=0,gt.forEach(function(se){return se.pin===c&&le++}),le||(xe.spacer=0)),i.onKill&&i.onKill(P)},gt.push(P),P.enable(!1,!1),Z&&Z(P),r&&r.add&&!Ve){var X=P.update;P.update=function(){P.update=X,ft.cache++,Ne||ve||P.refresh()},We.delayedCall(.01,P.update),Ve=.01,Ne=ve=0}else P.refresh();c&&Tb()},e.register=function(i){return ds||(We=i||I0(),L0()&&window.document&&e.enable(),ds=So),ds},e.defaults=function(i){if(i)for(var r in i)su[r]=i[r];return su},e.disable=function(i,r){So=0,gt.forEach(function(a){return a[r?"kill":"disable"](i)}),vi(mt,"wheel",_s),vi(Dt,"scroll",_s),clearInterval(Ql),vi(Dt,"touchcancel",Kr),vi(Pt,"touchstart",Kr),nu(vi,Dt,"pointerdown,touchstart,mousedown",P0),nu(vi,Dt,"pointerup,touchend,mouseup",C0),$l.kill(),iu(vi);for(var n=0;n<ft.length;n+=3)au(vi,ft[n],ft[n+1]),au(vi,ft[n],ft[n+2])},e.enable=function(){if(mt=window,Dt=document,ur=Dt.documentElement,Pt=Dt.body,We){if(xo=We.utils.toArray,yo=We.utils.clamp,rd=We.core.context||Kr,td=We.core.suppressOverwrites||Kr,nd=mt.history.scrollRestoration||"auto",gd=mt.pageYOffset||0,We.core.globals("ScrollTrigger",e),Pt){So=1,fs=document.createElement("div"),fs.style.height="100vh",fs.style.position="absolute",q0(),gb(),ni.register(We),e.isTouch=ni.isTouch,Vn=ni.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),id=ni.isTouch===1,gi(mt,"wheel",_s),Qh=[mt,Dt,ur,Pt],We.matchMedia?(e.matchMedia=function(u){var h=We.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},We.addEventListener("matchMediaInit",function(){G0(),md()}),We.addEventListener("matchMediaRevert",function(){return H0()}),We.addEventListener("matchMedia",function(){Ta(0,1),Ma("matchMedia")}),We.matchMedia().add("(orientation: portrait)",function(){return fd(),fd})):console.warn("Requires GSAP 3.11.0 or later"),fd(),gi(Dt,"scroll",_s);var i=Pt.hasAttribute("style"),r=Pt.style,n=r.borderTopStyle,a=We.core.Animation.prototype,s,o;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",s=gn(Pt),di.m=Math.round(s.top+di.sc())||0,zi.m=Math.round(s.left+zi.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),i||(Pt.setAttribute("style",""),Pt.removeAttribute("style")),Ql=setInterval(k0,250),We.delayedCall(.5,function(){return tu=0}),gi(Dt,"touchcancel",Kr),gi(Pt,"touchstart",Kr),nu(gi,Dt,"pointerdown,touchstart,mousedown",P0),nu(gi,Dt,"pointerup,touchend,mouseup",C0),ed=We.utils.checkPrefix("transform"),du.push(ed),ds=Pi(),$l=We.delayedCall(.2,Ta).pause(),ps=[Dt,"visibilitychange",function(){var u=mt.innerWidth,h=mt.innerHeight;Dt.hidden?(M0=u,S0=h):(M0!==u||S0!==h)&&Lo()},Dt,"DOMContentLoaded",Ta,mt,"load",Ta,mt,"resize",Lo],iu(gi),gt.forEach(function(u){return u.enable(0,1)}),o=0;o<ft.length;o+=3)au(vi,ft[o],ft[o+1]),au(vi,ft[o],ft[o+2])}else if(Dt){var l=function u(){e.enable(),Dt.removeEventListener("DOMContentLoaded",u)};Dt.addEventListener("DOMContentLoaded",l)}}},e.config=function(i){"limitCallbacks"in i&&(od=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Ql)||(Ql=r)&&setInterval(k0,r),"ignoreMobileResize"in i&&(id=e.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(iu(vi)||iu(gi,i.autoRefreshEvents||"none"),b0=(i.autoRefreshEvents+"").indexOf("resize")===-1)},e.scrollerProxy=function(i,r){var n=Ki(i),a=ft.indexOf(n),s=ga(n);~a&&ft.splice(a,s?6:2),r&&(s?Jr.unshift(mt,r,Pt,r,ur,r):Jr.unshift(n,r))},e.clearMatchMedia=function(i){gt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},e.isInViewport=function(i,r,n){var a=(cr(i)?Ki(i):i).getBoundingClientRect(),s=a[n?_a:xa]*r||0;return n?a.right-s>0&&a.left+s<mt.innerWidth:a.bottom-s>0&&a.top+s<mt.innerHeight},e.positionInViewport=function(i,r,n){cr(i)&&(i=Ki(i));var a=i.getBoundingClientRect(),s=a[n?_a:xa],o=r==null?s/2:r in ou?ou[r]*s:~r.indexOf("%")?parseFloat(r)*s/100:parseFloat(r)||0;return n?(a.left+o)/mt.innerWidth:(a.top+o)/mt.innerHeight},e.killAll=function(i){if(gt.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),i!==!0){var r=ya.killAll||[];ya={},r.forEach(function(n){return n()})}},e})();vt.version="3.15.1",vt.saveStyles=function(e){return e?xo(e).forEach(function(t){if(t&&t.style){var i=hr.indexOf(t);i>=0&&hr.splice(i,5),hr.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),We.core.getCache(t),rd())}}):hr},vt.revert=function(e,t){return md(!e,t)},vt.create=function(e,t){return new vt(e,t)},vt.refresh=function(e){return e?Lo(!0):(ds||vt.register())&&Ta(!0)},vt.update=function(e){return++ft.cache&&vn(e===!0?2:0)},vt.clearScrollMemory=W0,vt.maxScroll=function(e,t){return Zr(e,t?zi:di)},vt.getScrollFunc=function(e,t){return kn(Ki(e),t?zi:di)},vt.getById=function(e){return pd[e]},vt.getAll=function(){return gt.filter(function(e){return e.vars.id!=="ScrollSmoother"})},vt.isScrolling=function(){return!!Mr},vt.snapDirectional=dd,vt.addEventListener=function(e,t){var i=ya[e]||(ya[e]=[]);~i.indexOf(t)||i.push(t)},vt.removeEventListener=function(e,t){var i=ya[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},vt.batch=function(e,t){var i=[],r={},n=t.interval||.016,a=t.batchMax||1e9,s=function(l,u){var h=[],d=[],c=We.delayedCall(n,function(){u(h,d),h=[],d=[]}).pause();return function(p){h.length||c.restart(!0),h.push(p.trigger),d.push(p),a<=h.length&&c.progress(1)}},o;for(o in t)r[o]=o.substr(0,2)==="on"&&Ci(t[o])&&o!=="onRefreshInit"?s(o,t[o]):t[o];return Ci(a)&&(a=a(),gi(vt,"refresh",function(){return a=t.batchMax()})),xo(e).forEach(function(l){var u={};for(o in r)u[o]=r[o];u.trigger=l,i.push(vt.create(u))}),i};var $0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},xd=function e(t,i){i===!0?t.style.removeProperty("touch-action"):t.style.touchAction=i===!0?"auto":i?"pan-"+i+(ni.isTouch?" pinch-zoom":""):"none",t===ur&&e(Pt,i)},gu={auto:1,scroll:1},Rb=function(e){var t=e.event,i=e.target,r=e.axis,n=(t.changedTouches?t.changedTouches[0]:t).target,a=n._gsap||We.core.getCache(n),s=Pi(),o;if(!a._isScrollT||s-a._isScrollT>2e3){for(;n&&n!==Pt&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(gu[(o=Tr(n)).overflowY]||gu[o.overflowX]));)n=n.parentNode;a._isScroll=n&&n!==i&&!ga(n)&&(gu[(o=Tr(n)).overflowY]||gu[o.overflowX]),a._isScrollT=s}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Q0=function(e,t,i,r){return ni.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Rb,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&gi(Dt,ni.eventTypes[0],tg,!1,!0)},onDisable:function(){return vi(Dt,ni.eventTypes[0],tg,!0)}})},Pb=/(input|label|select|textarea)/i,eg,tg=function(e){var t=Pb.test(e.target.tagName);(t||eg)&&(e._gsapAllow=!0,eg=t)},Cb=function(e){va(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,n=t.allowNestedScroll,a=t.onRelease,s,o,l=Ki(e.target)||ur,u=We.core.globals().ScrollSmoother,h=u&&u.get(),d=Vn&&(e.content&&Ki(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),c=kn(l,di),p=kn(l,zi),f=1,x=(ni.isTouch&&mt.visualViewport?mt.visualViewport.scale*mt.visualViewport.width:mt.outerWidth)/mt.innerWidth,_=0,m=Ci(r)?function(){return r(s)}:function(){return r||2.8},S,M,v=Q0(l,e.type,!0,n),y=function(){return M=!1},w=Kr,g=Kr,b=function(){o=Zr(l,di),g=yo(Vn?1:0,o),i&&(w=yo(0,Zr(l,zi))),S=Sa},R=function(){d._gsap.y=To(parseFloat(d._gsap.y)+c.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",c.offset=c.cacheID=0},N=function(){if(M){requestAnimationFrame(y);var H=To(s.deltaY/2),F=g(c.v-H);if(d&&F!==c.v+c.offset){c.offset=F-c.v;var de=To((parseFloat(d&&d._gsap.y)||0)-c.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+de+", 0, 1)",d._gsap.y=de+"px",c.cacheID=ft.cache,vn()}return!0}c.offset&&R(),M=!0},L,k,K,C,O=function(){b(),L.isActive()&&L.vars.scrollY>o&&(c()>o?L.progress(1)&&c(o):L.resetTo("scrollY",o))};return d&&We.set(d,{y:"+=0"}),e.ignoreCheck=function(H){return Vn&&H.type==="touchmove"&&N(H)||f>1.05&&H.type!=="touchstart"||s.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){M=!1;var H=f;f=To((mt.visualViewport&&mt.visualViewport.scale||1)/x),L.pause(),H!==f&&xd(l,f>1.01?!0:i?!1:"x"),k=p(),K=c(),b(),S=Sa},e.onRelease=e.onGestureStart=function(H,F){if(c.offset&&R(),!F)C.restart(!0);else{ft.cache++;var de=m(),P,$;i&&(P=p(),$=P+de*.05*-H.velocityX/.227,de*=$0(p,P,$,Zr(l,zi)),L.vars.scrollX=w($)),P=c(),$=P+de*.05*-H.velocityY/.227,de*=$0(c,P,$,Zr(l,di)),L.vars.scrollY=g($),L.invalidate().duration(de).play(.01),(Vn&&L.vars.scrollY>=o||P>=o-1)&&We.to({},{onUpdate:O,duration:de})}a&&a(H)},e.onWheel=function(){L._ts&&L.pause(),Pi()-_>1e3&&(S=0,_=Pi())},e.onChange=function(H,F,de,P,$){if(Sa!==S&&b(),F&&i&&p(w(P[2]===F?k+(H.startX-H.x):p()+F-P[1])),de){c.offset&&R();var ge=$[2]===de,Re=ge?K+H.startY-H.y:c()+de-$[1],ae=g(Re);ge&&Re!==ae&&(K+=ae-Re),c(ae)}(de||F)&&vn()},e.onEnable=function(){xd(l,i?!1:"x"),vt.addEventListener("refresh",O),gi(mt,"resize",O),c.smooth&&(c.target.style.scrollBehavior="auto",c.smooth=p.smooth=!1),v.enable()},e.onDisable=function(){xd(l,!0),vi(mt,"resize",O),vt.removeEventListener("refresh",O),v.kill()},e.lockAxis=e.lockAxis!==!1,s=new ni(e),s.iOS=Vn,Vn&&!c()&&c(1),Vn&&We.ticker.add(Kr),C=s._dc,L=We.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:K0(c,c(),function(){return L.pause()})},onUpdate:vn,onComplete:C.vars.onComplete}),s};vt.sort=function(e){if(Ci(e))return gt.sort(e);var t=mt.pageYOffset||0;return vt.getAll().forEach(function(i){return i._sortY=i.trigger?t+i.trigger.getBoundingClientRect().top:i.start+mt.innerHeight}),gt.sort(e||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})},vt.observe=function(e){return new ni(e)},vt.normalizeScroll=function(e){if(typeof e>"u")return ki;if(e===!0&&ki)return ki.enable();if(e===!1){ki&&ki.kill(),ki=e;return}var t=e instanceof ni?e:Cb(e);return ki&&ki.target===t.target&&ki.kill(),ga(t.target)&&(ki=t),t},vt.core={_getVelocityProp:$h,_inputObserver:Q0,_scrollers:ft,_proxies:Jr,bridge:{ss:function(){Mr||Ma("scrollStart"),Mr=Pi()},ref:function(){return Ri}}},I0()&&We.registerPlugin(vt);function Lb(e,t){let i=e.createBuffer(1,Math.ceil(e.sampleRate*t),e.sampleRate),r=i.getChannelData(0);for(let n=0;n<r.length;n++)r[n]=Math.random()*2-1;return i}function Ib(e,t=2048){let i=new Float32Array(t+1),r=Math.tanh(e);for(let n=0;n<=t;n++)i[n]=Math.tanh(e*(2*n/t-1))/r;return i}function Db(e,t,i){let r=Math.ceil(e.sampleRate*t),n=e.createBuffer(2,r,e.sampleRate);for(let a=0;a<2;a++){let s=n.getChannelData(a);for(let o=0;o<r;o++)s[o]=(Math.random()*2-1)*Math.pow(1-o/r,i)}return n}function Nb(e,t,i=3.4){let r=e.currentTime+.05,n=K=>r+K*i,a=1e-4,s=e.createDynamicsCompressor();s.threshold.value=-22,s.knee.value=8,s.ratio.value=3.5,s.attack.value=.005,s.release.value=.3;let o=e.createDynamicsCompressor();o.threshold.value=-3,o.knee.value=0,o.ratio.value=20,o.attack.value=.001,o.release.value=.1;let l=e.createGain();l.gain.value=1;let u=e.createWaveShaper();u.curve=Ib(1.6),u.oversample="2x";let h=e.createGain();h.gain.value=.96,s.connect(l),l.connect(o),o.connect(u),u.connect(h),h.connect(t);let d=e.createConvolver();d.buffer=Db(e,3.2,2.3);let c=e.createGain();c.gain.value=.45,d.connect(c),c.connect(s);let p=(K,C=1,O=.3)=>{if(C){let H=e.createGain();H.gain.value=C,K.connect(H),H.connect(s)}if(O){let H=e.createGain();H.gain.value=O,K.connect(H),H.connect(d)}},f=Lb(e,2.5),x=(K,C,O=0)=>{let H=e.createOscillator();return H.type=K,H.frequency.value=C,H.detune.value=O,H},_=[],m=e.createGain();m.gain.value=1,p(m,1,.35);let S=e.createGain();S.gain.setValueAtTime(.04,r),S.gain.exponentialRampToValueAtTime(.12,n(.92));let M=e.createBiquadFilter();M.type="lowpass",M.Q.value=.8,M.frequency.setValueAtTime(360,r),M.frequency.exponentialRampToValueAtTime(2400,n(1));for(let[K,C]of[[73.42,-9],[73.42,9],[110,4]]){let O=x("sawtooth",K,C),H=e.createGain();H.gain.value=.33,O.connect(H),H.connect(M),O.start(r),_.push(O)}let v=x("sine",36.71),y=e.createGain();y.gain.value=.9,v.connect(y),y.connect(S),v.start(r),_.push(v),M.connect(S),S.connect(m);let w=e.createBufferSource();w.buffer=f,w.loop=!0;let g=e.createBiquadFilter();g.type="bandpass",g.Q.value=.9,g.frequency.setValueAtTime(320,r),g.frequency.exponentialRampToValueAtTime(7200,n(1));let b=e.createGain();b.gain.setValueAtTime(.02,r),b.gain.exponentialRampToValueAtTime(.1,n(1)),w.connect(g),g.connect(b),b.connect(m),w.start(r),_.push(w);let R=x("triangle",146.83);R.frequency.setValueAtTime(146.83,r),R.frequency.exponentialRampToValueAtTime(587.33,n(1));let N=e.createGain();N.gain.setValueAtTime(.004,r),N.gain.exponentialRampToValueAtTime(.06,n(.95)),R.connect(N),N.connect(m),R.start(r),_.push(R);let L=[.02,.26,.46,.61,.72,.8,.86,.905,.94,.965,.985];L.forEach((K,C)=>{let O=n(K),H=.22+.33*(C/(L.length-1)),F=x("sine",150);F.frequency.setValueAtTime(150,O),F.frequency.exponentialRampToValueAtTime(44,O+.22);let de=e.createGain();de.gain.setValueAtTime(a,O),de.gain.exponentialRampToValueAtTime(H,O+.006),de.gain.exponentialRampToValueAtTime(a,O+.45),F.connect(de),de.connect(m),F.start(O),F.stop(O+.5);let P=x("triangle",260);P.frequency.setValueAtTime(260,O),P.frequency.exponentialRampToValueAtTime(110,O+.09);let $=e.createGain();$.gain.setValueAtTime(a,O),$.gain.exponentialRampToValueAtTime(H*.55,O+.004),$.gain.exponentialRampToValueAtTime(a,O+.16),P.connect($),$.connect(m),P.start(O),P.stop(O+.2);let ge=e.createBufferSource();ge.buffer=f;let Re=e.createBiquadFilter();Re.type="bandpass",Re.frequency.value=2400,Re.Q.value=1.4;let ae=e.createGain();ae.gain.setValueAtTime(a,O),ae.gain.exponentialRampToValueAtTime(H*.5,O+.002),ae.gain.exponentialRampToValueAtTime(a,O+.035),ge.connect(Re),Re.connect(ae),ae.connect(m),ge.start(O,C*.137%2),ge.stop(O+.05)});let k=!1;return{hit(K){if(k)return;k=!0;let C=Math.max(K??e.currentTime+.06,e.currentTime+.03);m.gain.setValueAtTime(1,Math.max(C-.06,e.currentTime)),m.gain.exponentialRampToValueAtTime(a,C-.004);for(let be of _)be.stop(C+.1);let O=x("sine",118);O.frequency.setValueAtTime(118,C),O.frequency.exponentialRampToValueAtTime(34,C+.7);let H=e.createGain();H.gain.setValueAtTime(a,C),H.gain.exponentialRampToValueAtTime(1.3,C+.008),H.gain.exponentialRampToValueAtTime(a,C+2.8),O.connect(H),p(H,1,.18),O.start(C),O.stop(C+3);let F=x("triangle",240);F.frequency.setValueAtTime(240,C),F.frequency.exponentialRampToValueAtTime(90,C+.25);let de=e.createGain();de.gain.setValueAtTime(a,C),de.gain.exponentialRampToValueAtTime(1,C+.005),de.gain.exponentialRampToValueAtTime(a,C+.7),F.connect(de),p(de,1,.25),F.start(C),F.stop(C+.7);let P=x("triangle",70);P.frequency.setValueAtTime(70,C),P.frequency.exponentialRampToValueAtTime(38,C+.5);let $=e.createGain();$.gain.setValueAtTime(a,C),$.gain.exponentialRampToValueAtTime(.4,C+.006),$.gain.exponentialRampToValueAtTime(a,C+1.6),P.connect($),p($,1,.1),P.start(C),P.stop(C+1.7);let ge=e.createBufferSource();ge.buffer=f;let Re=e.createBiquadFilter();Re.type="lowpass",Re.frequency.setValueAtTime(3600,C),Re.frequency.exponentialRampToValueAtTime(900,C+1.6);let ae=e.createGain();ae.gain.setValueAtTime(a,C),ae.gain.exponentialRampToValueAtTime(.78,C+.004),ae.gain.exponentialRampToValueAtTime(a,C+1.9),ge.connect(Re),Re.connect(ae),p(ae,.8,.9),ge.start(C),ge.stop(C+2.2);let pe=e.createGain();pe.gain.setValueAtTime(a,C),pe.gain.exponentialRampToValueAtTime(1.5,C+.035),pe.gain.setValueAtTime(1.5,C+.5),pe.gain.exponentialRampToValueAtTime(a,C+3.9);let Ee=e.createBiquadFilter();Ee.type="lowpass",Ee.Q.value=1.2,Ee.frequency.setValueAtTime(320,C),Ee.frequency.exponentialRampToValueAtTime(3200,C+.08),Ee.frequency.exponentialRampToValueAtTime(650,C+2.6),Ee.connect(pe),p(pe,1,.6);for(let[be,Le]of[[73.42,.11],[110,.09],[146.83,.08],[220,.065],[293.66,.055],[369.99,.045],[440,.04]])for(let xe of[-7,7]){let Be=x("sawtooth",be,xe),ke=e.createGain();ke.gain.value=Le,Be.connect(ke),ke.connect(Ee),Be.start(C),Be.stop(C+4.1)}return[[1174.66,.035],[1760,.028],[2349.32,.02],[2959.96,.012]].forEach(([be,Le],xe)=>{let Be=x("sine",be,xe%2?4:-4),ke=e.createGain(),fe=C+.02+xe*.015;ke.gain.setValueAtTime(a,fe),ke.gain.exponentialRampToValueAtTime(Le,fe+.01),ke.gain.exponentialRampToValueAtTime(a,C+3.2),Be.connect(ke),p(ke,.6,1),Be.start(fe),Be.stop(C+3.3)}),C},stop(){let K=e.currentTime;if(l.gain.setValueAtTime(l.gain.value,K),l.gain.linearRampToValueAtTime(0,K+.15),!k){k=!0;for(let C of _)C.stop(K+.2)}}}}function Ub(e,t,i,{loop:r=84.7059,overlap:n=3,level:a=.85}={}){let s=e.createGain();s.gain.value=0,s.connect(t);let o=null,l=null,u=!1,h=0,d=0,c=[],p=0,f=()=>l||(l=fetch(i).then(m=>{if(!m.ok)throw new Error(`backsound ${m.status}`);return m.arrayBuffer()}).then(m=>new Promise((S,M)=>e.decodeAudioData(m,S,M))).then(m=>(o=m,m)).catch(m=>{throw l=null,m}));function x(m,S){let M=e.createBufferSource(),v=e.createGain();M.buffer=o,M.connect(v),v.connect(s);let y=m+Math.min(o.duration,r+n);S?v.gain.setValueAtTime(1,m):(v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(1,m+n)),v.gain.setValueAtTime(1,m+r),v.gain.linearRampToValueAtTime(0,Math.min(y,m+r+n)),M.start(m),M.stop(y);let w={s:M,g:v};c.push(w),M.onended=()=>{c=c.filter(g=>g!==w);try{v.disconnect()}catch{}}}function _(){if(u){for(;d<e.currentTime+4;)x(d,!1),d+=r;h=setTimeout(_,1e3)}}return{load:f,get playing(){return u},start(m=e.currentTime+.1,S=3){if(u)return;u=!0;let M=++p;f().then(()=>{if(!u||M!==p)return;let v=Math.max(m,e.currentTime+.08);s.gain.cancelScheduledValues(e.currentTime),s.gain.setValueAtTime(s.gain.value,e.currentTime),s.gain.setValueAtTime(0,v),s.gain.linearRampToValueAtTime(a,v+S),x(v,!0),d=v+r,_()}).catch(v=>{u=!1,console.warn("The backsound could not be loaded.",v)})},stop(m=.8){if(!u)return;u=!1,p++,clearTimeout(h);let S=e.currentTime;s.gain.cancelScheduledValues(S),s.gain.setValueAtTime(s.gain.value,S),s.gain.linearRampToValueAtTime(0,S+m);for(let{s:M}of c)try{M.stop(S+m+.05)}catch{}}}}var Ob=class extends Ur{constructor(e,t,i,r,n,a,s){super(),Object.assign(this,{c:e,r0:t,r1:i,turns:r,a0:n,dir:a,z:s})}getPoint(e,t=new J){let i=this.a0+this.dir*this.turns*Math.PI*2*e,r=this.r0+(this.r1-this.r0)*e;return t.set(this.c.x+r*Math.cos(i),this.c.y+r*Math.sin(i),this.z)}};function ig(e,t,i,r){let n=[],a=e/2-i,s=t/2-i,o=[[a,s,0],[-a,s,Math.PI/2],[-a,-s,Math.PI],[a,-s,Math.PI*1.5]];return o.forEach(([l,u,h],d)=>{let c=Math.max(4,Math.round(i*Math.PI/2/r));for(let y=0;y<=c;y++){let w=h+y/c*(Math.PI/2);n.push(new J(l+i*Math.cos(w),u+i*Math.sin(w),0))}let[p,f]=o[(d+1)%4],x=Math.hypot(p-l,f-u),_=Math.max(1,Math.round(x/r)),m=l+i*Math.cos(h+Math.PI/2),S=u+i*Math.sin(h+Math.PI/2),M=p+i*Math.cos(h+Math.PI/2),v=f+i*Math.sin(h+Math.PI/2);for(let y=1;y<_;y++)n.push(new J(m+(M-m)*y/_,S+(v-S)*y/_,0))}),new _l(n,!0,"centripetal")}function rg(e,t,i,r=.62){let n=new Kc;n.moveTo(0,0),n.bezierCurveTo(t*.95,e*.16,t*.9,e*r,0,e),n.bezierCurveTo(-t*.9,e*r,-t*.95,e*.16,0,0);let a=new Qp(n,{depth:i,bevelEnabled:!0,bevelThickness:i*.9,bevelSize:t*.16,bevelSegments:3,curveSegments:16});return a.translate(0,0,-i/2),a}function ng(e){let t=new $o;t.add(new Nt(new Ga(24,24,24),new al({color:1447446,side:Ti})));let i=(a,s,o,l,u,h)=>{let d=new Nt(new Xa(a,s),new al({color:new at(h,h,h),side:Ar}));d.position.set(o,l,u),d.lookAt(0,0,0),t.add(d)};i(10,2.4,0,8,4,4),i(2.2,12,-9,1,3,2.6),i(2.2,12,9,-1,1,1.8),i(12,1.2,0,-7,5,.9),i(4,4,5,5,-9,1.2),i(16,9,0,1,11,.55),i(6,2,-3,3,10.5,2.2);let r=new Js(e),n=r.fromScene(t,.03).texture;return r.dispose(),t.traverse(a=>{a.isMesh&&(a.geometry.dispose(),a.material.dispose())}),n}function Fb({w:e,h:t,material:i}){let r=new $n,n=.1*Math.min(e,t),a=[],s=[],o=[],l=(v,y,w,g=8,b=!1)=>{let R=new eh(v,y,w,g,b);o.push(R);let N=new Nt(R,i);return r.add(N),s.push({mesh:N,count:R.index.count}),N},u=rg(n,.4*n,.06*n),h=rg(n,.36*n,.07*n,.5);o.push(u,h);let d=new Yc(new J(0,.08*n,.06*n),new J(0,.86*n,.06*n)),c=new eh(d,6,.018*n,5,!1);o.push(c);let p=(v,y,w,g=1,b=!1,R=.07)=>{let N=new $n;N.position.set(v,y,.02*n);let L=w-Math.PI/2;N.rotation.z=L;let k=new Nt(b?h:u,i);k.scale.set(g,g*(b?1.45:1),g);let K=new Nt(c,i);return K.scale.copy(k.scale),N.add(k,K),r.add(N),a.push({pivot:N,base:L,swing:R,ph:Math.random()*Math.PI*2,rate:.9+Math.random()*.6,size:g}),N},f=(v,y,w,g,b,R=1.6)=>l(new Ob(new Ie(v,y),w,w*.18,R,g,b,0),90,.028*n,6),x=(v,y,w)=>{let g=new ef(w,18,12);o.push(g);let b=new Nt(g,i);b.position.set(v,y,.03*n),r.add(b)};l(ig(e,t,.45*n,.06*n),520,.065*n,8,!0),l(ig(e-.62*n,t-.62*n,.3*n,.06*n),520,.03*n,8,!0);for(let v of[1,-1])for(let y of[1,-1]){let w=v*e/2,g=y*t/2,b=Math.atan2(y,v);p(w-v*.12*n,g-y*.12*n,b,1.15,!0,.04),p(w-v*.05*n,g-y*.05*n,b+.85,.82,!1,.09),p(w-v*.05*n,g-y*.05*n,b-.85,.82,!1,.09),f(w-v*1.25*n,g+y*.46*n,.38*n,y>0?-Math.PI/2:Math.PI/2,v*y>0?1:-1,1.8),f(w+v*.46*n,g-y*1.25*n,.38*n,v>0?Math.PI:0,v*y>0?-1:1,1.8),x(w,g,.13*n)}let _=[[0,t/2,Math.PI/2],[0,-t/2,-Math.PI/2],[e/2,0,0],[-e/2,0,Math.PI]];for(let[v,y,w]of _)p(v,y,w+.55,.95,!1,.1),p(v,y,w-.55,.95,!1,.1),p(v,y,w+Math.PI+.6,.6,!1,.06),p(v,y,w+Math.PI-.6,.6,!1,.06),x(v,y,.12*n);let m=(v,y,w,g,b,R)=>{let N=Math.hypot(w-v,g-y);if(N<2.4*n)return;let L=(w-v)/N,k=(g-y)/N,K=.42*n,C=.22*n,O=[];for(let de=0;de<=24;de++){let P=de/24,$=Math.sin(P*Math.PI*2)*C;O.push(new J(v+L*N*P+b*(K+$),y+k*N*P+R*(K+$),0))}l(new _l(O),120,.024*n,6);let H=N>5*n?4:2;for(let de=0;de<H;de++){let P=(de+.5)/H,$=Math.sin(P*Math.PI*2)*C,ge=v+L*N*P+b*(K+$),Re=y+k*N*P+R*(K+$);p(ge,Re,Math.atan2(R,b)+(de%2?-.6:.6),de%2?.5:.58,!1,.12)}let F=new Ie(w+b*K,g+R*K);f(F.x+b*.2*n,F.y+R*.2*n,.2*n,Math.atan2(-R,-b),1,1.3)},S=e/2,M=t/2;for(let v of[1,-1])m(-S+1.6*n,v*M,-1*n,v*M,0,v),m(S-1.6*n,v*M,1*n,v*M,0,v);for(let v of[1,-1])m(v*S,-M+1.6*n,v*S,-1*n,v,0),m(v*S,M-1.6*n,v*S,1*n,v,0);return{group:r,leaves:a,tubes:s,grow(v){for(let y of s)y.mesh.geometry.setDrawRange(0,Math.floor(y.count*Math.min(1,v*1.25)/6)*6);a.forEach((y,w)=>{let g=Math.min(1,Math.max(0,(v-.25-w%9*.03)/.45));y.open=g})},sway(v,y=1){for(let w of a){let g=w.open??1;w.pivot.rotation.z=w.base+Math.sin(v*w.rate+w.ph)*w.swing*y,w.pivot.rotation.x=Math.sin(v*w.rate*.7+w.ph*1.3)*w.swing*.8*y,w.pivot.scale.setScalar(Math.max(1e-4,g<1?g*(1+.15*Math.sin(g*Math.PI)):1))}},dispose(){for(let v of o)v.dispose();for(let v of s)v.mesh.geometry.dispose();r.removeFromParent()}}}pt.registerPlugin(vt);var At=(e,t=document)=>t.querySelector(e),Zi=(e,t=document)=>[...t.querySelectorAll(e)],Ct=matchMedia("(prefers-reduced-motion: reduce)").matches,vu=matchMedia("(pointer: coarse)").matches,dr=(e,t,i)=>Math.min(i,Math.max(t,e)),ys=(e,t,i)=>e+(t-e)*i,$i=(e,t,i,r)=>ys(e,t,1-Math.exp(-i*r)),zb=e=>e*e*(3-2*e),Do=e=>new Promise(t=>setTimeout(t,e)),Vt={x:innerWidth*.6,y:innerHeight*.35,nx:.2,ny:-.3},$r={y:scrollY,v:0};addEventListener("pointermove",e=>{Vt.x=e.clientX,Vt.y=e.clientY,Vt.nx=e.clientX/innerWidth*2-1,Vt.ny=e.clientY/innerHeight*2-1},{passive:!0});{let e=scrollY,t=performance.now();addEventListener("scroll",()=>{let i=performance.now();$r.v=(scrollY-e)/Math.max(i-t,1)*1e3,$r.y=scrollY,e=scrollY,t=i},{passive:!0})}var Bb=`
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
}`;function kb({scene:e,renderer:t,mobile:i,camera:r}){const n=Nt,a=$n,s=Ga,o=ef,l=Qp,u=eh,h=_l,d=Yc,c=Kc,p=Jc,f=J,x=th,_=Tl,m=at,S=Cp,M=Ni,v=vl,y=rn,w=gr,g=kr,b=Ar,R=Hi,N=new M().matrix.constructor,L=(_e,E,T)=>Math.min(T,Math.max(E,_e)),k=(_e,E,T)=>{const U=L((T-_e)/(E-_e),0,1);return U*U*(3-2*U)},K=_e=>{const E=L(_e,0,1)-1;return 1+2.4*E*E*E+1.4*E*E},C=(_e,E,T)=>{const U=L((T-_e)/(E-_e),0,1);return U*U*U*(U*(U*6-15)+10)},O=_e=>{const E=L(_e,0,1)-1;return 1+1.6*E*E*E+.6*E*E},H=matchMedia("(prefers-reduced-motion: reduce)").matches,F=ng(t),de=new x({color:15790320,metalness:1,roughness:.2,clearcoat:.7,clearcoatRoughness:.08,envMap:F,envMapIntensity:1}),P=new x({color:14342874,metalness:1,roughness:.36,envMap:F,envMapIntensity:.95}),$=new x({color:16777215,metalness:0,roughness:.05,transmission:1,ior:1.5,thickness:1.1,clearcoat:1,clearcoatRoughness:.05,dispersion:.25,attenuationColor:new m("#ffffff"),attenuationDistance:12,envMapIntensity:1.4,specularIntensity:1}),ge=new _({color:16052974,roughness:.42,metalness:0}),Re=new _({color:1447446,roughness:.5,metalness:.1}),ae=new _({color:15329250,roughness:.72,metalness:0,side:b,flatShading:!0}),pe=[];function Ee(_e,E,T,U,ee){const j=new s(_e,E,T,ee,ee,ee),ue=j.attributes.position,ie=j.attributes.normal,D=new f,ne=new f,me=_e/2-U,I=E/2-U,Y=T/2-U;for(let ce=0;ce<ue.count;ce++){D.fromBufferAttribute(ue,ce),ne.set(L(D.x,-me,me),L(D.y,-I,I),L(D.z,-Y,Y)),D.sub(ne);const Z=D.length();Z>1e-6&&(D.multiplyScalar(1/Z),ie.setXYZ(ce,D.x,D.y,D.z),D.multiplyScalar(U).add(ne),ue.setXYZ(ce,D.x,D.y,D.z))}return ue.needsUpdate=ie.needsUpdate=!0,pe.push(j),j}const be=new M;function Le(){const _e=new a,E=Ee(1,1,1,.17,i?8:12),T=new o(.082,14,10);pe.push(T);const U=[[0,0]],ee=[[-.25,-.25],[.25,.25]],j=[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]],ue={1:U,2:ee,3:[...ee,[0,0]],4:j,5:[...j,[0,0]],6:[...j,[-.25,0],[.25,0]]},ie=[[0,0,1,1],[0,0,-1,6],[1,0,0,3],[-1,0,0,4],[0,1,0,2],[0,-1,0,5]],D=new f(0,0,1),ne=new f(0,1,0),me=new f(1,0,0);function I(Z){const oe=new n(E,$),V=[];for(const[X,q,Q,le]of ie){const se=new f(X,q,Q),Pe=new f().crossVectors(Math.abs(se.y)>.9?me:ne,se).normalize(),Se=new f().crossVectors(se,Pe);for(const[nt,ze]of ue[le])V.push({p:se.clone().multiplyScalar(.475).addScaledVector(Pe,nt).addScaledVector(Se,ze),q:new y().setFromUnitVectors(D,se)})}const z=new S(T,ge,V.length);return V.forEach((X,q)=>{be.position.copy(X.p),be.quaternion.copy(X.q),be.scale.set(1,1,.45),be.updateMatrix(),z.setMatrixAt(q,be.matrix)}),oe.add(z),oe.scale.setScalar(Z),oe}const Y=I(.86),ce=I(.74);return _e.add(Y,ce),{group:_e,update(Z,oe,V){const z=H?0:oe,X=k(0,1,V);Y.position.set(-.5*X,.22*X+Math.sin(z*.8)*.04,.05),ce.position.set(.5*X,-.3*X+Math.sin(z*.8+1.7)*.04,.28);const q=H?.3:1;Y.rotation.set(.55+Z*3.3*q+z*.05,.4+Z*2.5*q+z*.07,.2+Z*1.2*q),ce.rotation.set(-.35-Z*2.7*q-z*.06,1.1-Z*3.1*q,-.4+Z*.9*q+z*.04)}}}function xe(){const _e=new a,E=new a,T=i?7:9,U=1.9/T,ee=U*.76,j=.55;_e.add(E);const ue=new s(1,1,1);ue.translate(0,.5,0),pe.push(ue);const ie=new S(ue,de,T*T),D=[];for(let Z=0;Z<T;Z++)for(let oe=0;oe<T;oe++){const V=(Z-(T-1)/2)*U,z=(oe-(T-1)/2)*U,X=V/.52,q=z/.52,Q=Math.exp(-(X*X-2*j*X*q+q*q)/(2*(1-j*j)));D.push({x:V,z,h:.04+1.2*Q,d:Math.hypot(V,z)/1.35})}E.add(ie);const ne=new n(Ee(2.15,.08,2.15,.035,4),$);ne.position.y=-.05,E.add(ne);const me=[];for(let Z=0;Z<=48;Z++){const oe=-1.02+2.04*Z/48;me.push(new f(oe,.03+1.12*Math.exp(-((oe/.52)**2)/2),-1.16))}const I=new u(new h(me),140,.02,6,!1);pe.push(I);const Y=new n(I,P);E.add(Y);const ce=I.index.count;return{group:_e,update(Z,oe,V){const z=H?0:oe;E.position.y=-.45,E.rotation.set(.52,-.75+Z*(H?.3:1.4)+Math.sin(z*.25)*.08,0);const X=k(0,.5,Z)*k(.2,.9,V);D.forEach((q,Q)=>{const le=k(0,1,(X*1.55-q.d*.55)/.45);be.position.set(q.x,0,q.z),be.quaternion.identity(),be.scale.set(ee,Math.max(.001,q.h*le),ee),be.updateMatrix(),ie.setMatrixAt(Q,be.matrix)}),ie.instanceMatrix.needsUpdate=!0,I.setDrawRange(0,Math.floor(ce*k(.28,.75,Z)/6)*6)}}}function Be(){const _e=new a,E=new a,T=9,U=.19,ee=.68,j=.36;_e.add(E);const ue=Ee(.58,.07,.25,.028,3),ie=[];for(let oe=0;oe<T;oe++){const V=new n(ue,oe%3===2?P:de),z=oe*ee;V.position.set(Math.cos(z)*j,-.82+oe*U,-Math.sin(z)*j),V.rotation.y=z,E.add(V),ie.push(V)}const D=new u(new d(new f(0,-.95,0),new f(0,1,0)),1,.045,14,!1);pe.push(D),E.add(new n(D,P));const ne=new o(.07,18,12);pe.push(ne);const me=new n(ne,de);me.position.y=1.02,E.add(me);const I=new o(.115,32,20);pe.push(I);const Y=new n(I,ge);E.add(Y);const ce=oe=>{const V=oe*ee;return new f(Math.cos(V)*.46,-.82+oe*U+.035+.115,-Math.sin(V)*.46)},Z=ie.map((oe,V)=>ce(V));return{group:_e,update(oe,V,z){const X=H?0:V;E.rotation.set(.16,-oe*(H?.4:1.7)+Math.sin(X*.3)*.06,0),ie.forEach((Pe,Se)=>Pe.scale.setScalar(Math.max(1e-4,K((z*1.7-Se*.07)/.6))));const q=k(.04,.92,oe)*(T-1),Q=Math.min(T-2,Math.floor(q)),le=q-Q,se=k(0,1,le);Y.position.lerpVectors(Z[Q],Z[Q+1],se),Y.position.y+=Math.sin(Math.PI*le)*.17,Y.rotation.set(q*2.1,q*1.3,0),Y.scale.setScalar(Math.max(1e-4,k(.45,.95,z)))}}}function ke(){const _e=new a,E=new a,T=new a,U=.6;_e.add(E),E.add(T);const ee=new c;ee.absarc(0,0,U,0,Math.PI*2,!1);const j=new l(ee,{depth:.08,bevelEnabled:!0,bevelThickness:.035,bevelSize:.035,bevelSegments:4,curveSegments:i?48:80});j.translate(0,0,-.04),pe.push(j);const ue=new x({color:15658734,metalness:1,roughness:.24,clearcoat:.6,clearcoatRoughness:.1,envMap:F,envMapIntensity:1}),ie=new n(j,[ue,de]);ie.position.y=-.22,T.add(ie);const D=(Z,oe,V)=>{const z=[];for(let q=0;q<64;q++){const Q=q/64*Math.PI*2;z.push(new f(Math.cos(Q)*Z,V+Math.sin(Q)*Z,oe))}const X=new u(new h(z,!0),96,.016,6,!0);return pe.push(X),X};T.add(new n(D(U*.88,.085,-.22),de),new n(D(U*.88,-.085,-.22),de));const ne=[];for(let Z=0;Z<40;Z++){const oe=Z/40*Math.PI*2;ne.push(new f(0,.45+Math.sin(oe)*.075,Math.cos(oe)*.075))}const me=new u(new h(ne,!0),60,.022,8,!0);pe.push(me),T.add(new n(me,de));const I=(Z,oe)=>{const V=new c;V.moveTo(-Z/2,0),V.lineTo(Z/2,0),V.lineTo(Z/2,oe),V.lineTo(-Z/2,oe),V.closePath();const z=new l(V,{depth:.012,bevelEnabled:!1});return pe.push(z),z},Y=I(.24,.85),ce=I(.07,.85);for(const Z of[-1,1]){const oe=new a;oe.position.set(0,.47,Z*.01),oe.rotation.z=Z*.42;const V=new n(Y,Re),z=new n(ce,ge);z.position.z=.013,oe.add(V,z),E.add(oe)}return(async()=>{const Z=document.getElementById("scene")?.dataset.v||"",oe=await(await fetch(`batik-kawung.svg?v=${Z}`)).text(),V=i?512:768,z=oe.replace(/width="[\d.]+" height="[\d.]+"/,`width="${V*1400/844}" height="${V*1e3/844}"`),X=new Image;X.src=URL.createObjectURL(new Blob([z],{type:"image/svg+xml"})),await new Promise((Pe,Se)=>{X.onload=Pe,X.onerror=Se}),URL.revokeObjectURL(X.src);const q=document.createElement("canvas");q.width=q.height=V;const Q=q.getContext("2d");Q.fillStyle="#8c8c8c",Q.fillRect(0,0,V,V);const le=V/844;Q.drawImage(X,-278*le,-78*le,1400*le,1e3*le);const se=new v(q);se.colorSpace=R,se.repeat.set(1/(2*U),1/(2*U)),se.offset.set(.5,.5),se.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),ue.map=se,ue.bumpMap=se,ue.bumpScale=3,ue.needsUpdate=!0,pe.push(se)})().catch(Z=>console.warn("The medal relief could not be drawn.",Z)),{group:_e,update(Z,oe,V){const z=H?0:oe;E.rotation.set(Math.sin(z*.7)*.05,-.25+Math.sin(z*.45)*.1,Math.sin(z*.9)*.04),T.rotation.y=H?Z*1.2:Z*Math.PI*2.2+Math.sin(z*.6)*.18,E.position.y=-.2+(1-k(0,1,V))*.5}}}function fe(_e,E,T,U){const ee=E+T*.95,j=E-T*1.2,ue=new c,ie=Math.PI*2/_e;for(let ne=0;ne<_e;ne++){const me=ne*ie;[[j,me-ie*.5],[j,me-ie*.27],[ee,me-ie*.12],[ee,me+ie*.12],[j,me+ie*.27]].forEach(([I,Y],ce)=>{const Z=I*Math.cos(Y),oe=I*Math.sin(Y);ne===0&&ce===0?ue.moveTo(Z,oe):ue.lineTo(Z,oe)})}ue.closePath();const D=new p;D.absarc(0,0,E*.19,0,Math.PI*2,!0),ue.holes.push(D);for(let ne=0;ne<U;ne++){const me=ne/U*Math.PI*2,I=new p,Y=U>4?E*.16:E*.13;I.absarc(Math.cos(me)*E*.52,Math.sin(me)*E*.52,Y,0,Math.PI*2,!0),ue.holes.push(I)}return ue}function Ne(){const _e=new a,E=new a,T=.075;_e.add(E);const ee=[{n:18,holes:5,mat:de},{n:11,holes:4,mat:$},{n:13,holes:4,mat:P}].map(({n:I,holes:Y,mat:ce})=>{const Z=T*I/2,oe=new l(fe(I,Z,T,Y),{depth:.12,bevelEnabled:!0,bevelThickness:.02,bevelSize:.018,bevelSegments:2,curveSegments:12});oe.translate(0,0,-.06),pe.push(oe);const V=new n(oe,ce);return E.add(V),{mesh:V,n:I,rp:Z}}),[j,ue,ie]=ee,D=.44,ne=-1.22;j.mesh.position.set(-.32,.32,0),ue.mesh.position.set(-.32+Math.cos(D)*(j.rp+ue.rp),.32+Math.sin(D)*(j.rp+ue.rp),0),ie.mesh.position.set(-.32+Math.cos(ne)*(j.rp+ie.rp),.32+Math.sin(ne)*(j.rp+ie.rp),0);const me=(I,Y,ce,Z)=>ce+Math.PI+Math.PI/Y.n-(Z-ce)*(I.n/Y.n);return{group:_e,update(I,Y,ce){const Z=H?0:Y;E.scale.setScalar(.74),E.rotation.set(-.5+Math.sin(Z*.35)*.05,.42+Math.sin(Z*.27)*.08,.08);const oe=(H?I*1.5:I*Math.PI*2.4)+Z*.08+(1-ce)*1.2;j.mesh.rotation.z=oe,ue.mesh.rotation.z=me(j,ue,D,oe),ie.mesh.rotation.z=me(j,ie,ne,oe)}}}function ve(){const _e=new a,E=new a,T=new a;_e.add(E),E.add(T);const U=new Float32Array([0,0,.62,-.52,.07,-.3,0,0,-.3,0,0,.62,0,0,-.3,.52,.07,-.3,0,0,.62,-.012,-.17,-.3,0,0,-.3,0,0,.62,0,0,-.3,.012,-.17,-.3]),ee=new w;ee.setAttribute("position",new g(U,3)),ee.computeVertexNormals(),pe.push(ee);const j=new n(ee,ae);j.scale.setScalar(.6),T.add(j);const ue=new o(.024,10,8);pe.push(ue);const ie=28,D=new S(ue,ge,ie);E.add(D);const ne=i?.78:1.05,me=(Q,le)=>{const se=Q*Math.PI*2;return le.set(ne*Math.sin(se),.12*Math.sin(se)+.08*Math.cos(2*se),.62*Math.sin(2*se))},I=new f,Y=new f,ce=new f,Z=new f,oe=new f,V=new f,z=new f,X=new N,q=new y;return{group:_e,update(Q,le,se){const Pe=H?0:le;E.rotation.set(.42,-.2,0);const Se=Q*.75+Pe*.045;me(Se,I),me(Se+.004,Y),me(Se+.008,ce),Z.subVectors(Y,I).normalize(),oe.subVectors(ce,Y).normalize(),V.set(0,1,0),z.crossVectors(V,Z).normalize(),V.crossVectors(Z,z).normalize(),X.makeBasis(z,V,Z),T.quaternion.setFromRotationMatrix(X);const nt=L(oe.clone().sub(Z).dot(z)*160,-.9,.9);q.setFromAxisAngle(Z,-nt),T.quaternion.premultiply(q),T.position.copy(I);const ze=k(.3,1,se);for(let Je=0;Je<ie;Je++)me(Se-(Je+1)*.011,be.position),be.scale.setScalar(Math.max(1e-4,(1-Je/ie)*.95*ze)),be.quaternion.identity(),be.updateMatrix(),D.setMatrixAt(Je,be.matrix);D.instanceMatrix.needsUpdate=!0}}}const Te=["about","research","experience","credentials","toolkit","contact"],Me=[Le,xe,Be,ke,Ne,ve],B=(()=>{try{const _e=document.createElement("canvas");_e.id="scene-front",_e.setAttribute("aria-hidden","true"),Object.assign(_e.style,{position:"fixed",inset:"0",width:"100vw",height:"100lvh",pointerEvents:"none",zIndex:"5",visibility:"hidden"}),document.getElementById("scene").after(_e);const E=new Zf({canvas:_e,antialias:!0,alpha:!0});E.setClearColor(0,0),E.toneMapping=t.toneMapping,E.toneMappingExposure=t.toneMappingExposure;const T=new $o,U=new Js(E);T.environment=U.fromScene(new $f,.04).texture,T.environmentIntensity=.45,U.dispose(),T.add(new gf(16777215,.18));const ee=new mf(16777215,2.2);return ee.position.set(-3,4,5),T.add(ee),{canvas:_e,r:E,sc:T,shown:!1,w:0,h:0,dpr:0}}catch(_e){return console.warn("The front layer is not available; the plane stays behind the page.",_e),null}})(),we=Te.map((_e,E)=>{const T=document.getElementById(_e),U=T?Me[E]():null;if(!U)return null;U.group.visible=!1;const ee=_e==="contact"&&B?"front":"back";return(ee==="front"?B.sc:e).add(U.group),{id:_e,el:T,obj:U,layer:ee,w:0,start:0,end:1/0,at:{x:.3,y:0,s:.7,a:.2},formed:!1}}).filter(Boolean);let Fe={x:.06,y:.13,s:1,a:.2},ye=0,Ve=!1,je=scrollY,$e=0,W=0;function st(_e,E){const T=performance.now();if(T===W)return je;W=T;const U=innerHeight||1,ee=Math.min(Math.max(E,0),.1);Math.abs(_e-je)>U*4&&(je=_e-Math.sign(_e-je)*U*.6,$e=0);const j=H?30:7,ue=Math.max(1,Math.ceil(ee/.012)),ie=ee/ue;for(let D=0;D<ue;D++)$e+=(j*j*(_e-je)-2*j*$e)*ie,je+=$e*ie;return je}function Ke(_e,E){Fe={...E};const T=innerHeight,U=innerWidth,ee=scrollY,j=document.documentElement.scrollHeight,ue=j-T/2,ie=document.getElementById("top"),D=ze=>{const Je=ze.getBoundingClientRect();return{top:Je.top+ee,bottom:Je.bottom+ee,left:Je.left,right:Je.right}},ne=[ie?D(ie):{top:0,bottom:T},...we.map(ze=>D(ze.el))];for(let ze=0;ze<we.length;ze++)we[ze].start=(ne[ze].bottom+ne[ze+1].top)/2,we[ze].end=ze+1<we.length?(ne[ze+1].bottom+ne[ze+2].top)/2:1/0;const me=document.createRange(),I=ze=>{me.selectNodeContents(ze);const Je=me.getBoundingClientRect();return{top:Je.top+ee,bottom:Je.bottom+ee,left:Je.left,right:Je.right}},Y=ze=>ze.bottom-ze.top>2&&ze.right-ze.left>2,ce=[...[...document.querySelectorAll("main .glass, main .tabs, main .lanyard")].map(D),...[...document.querySelectorAll("main h1, main h2, main h3, main p")].filter(ze=>!ze.closest(".glass")).map(I)].filter(Y),Z=[...[...document.querySelectorAll("main h1, main h2, main h3, main p, main li")].map(I),...[...document.querySelectorAll("main a, main button, main img, main .tabs")].map(D),...[...document.querySelectorAll(".foot p, .foot span, .foot a, .foot small")].map(I)].filter(Y);let oe=ce;const V=document.getElementById("nav"),z=V?V.getBoundingClientRect():null,X=U/T,q=_e?.9:.84,Q=Math.min(.21,.3*X)*T*q,le=_e?[.2,.5,.8]:[.13,.22,.35,.5,.65,.78,.87],se=[.13,.2,.32,.44,.56,.68,.8,.87],Pe=[];for(const ze of le)for(const Je of se)Pe.push({fx:ze,fy:Je});let Se=Q;const nt=(ze,Je,ut)=>{const ct=ze-T/2,xt=Je*U,yt=ut*T,Wt=oe.filter(et=>et.bottom>ct-Se&&et.top<ct+T+Se);let Xt=0,ot=0;for(let et=0;et<3;et++){const Lt=et===0?1:et*8,Et=et/2*Se*.95;for(let ti=0;ti<Lt;ti++){const zt=ti/Lt*Math.PI*2,Tt=xt+Math.cos(zt)*Et,ii=yt+Math.sin(zt)*Et;if(ot++,Tt<0||Tt>U||ii<0||ii>T){Xt+=.6;continue}if(z&&Tt>z.left-10&&Tt<z.right+10&&ii>z.top-10&&ii<z.bottom+10){Xt++;continue}const br=ct+ii;for(const pr of Wt)if(Tt>pr.left-16&&Tt<pr.right+16&&br>pr.top-16&&br<pr.bottom+16){Xt++;break}}}return Xt/ot};for(const ze of we){oe=ze.layer==="front"?Z:ce;const Je=ze.layer==="front"&&_e?.55:q;Se=Q*(Je/q);let ut=ze.start+.3*T,ct=Math.min(ze.end===1/0?ue:ze.end-.3*T,ue);ct<ut&&(ut=ct=(ze.start+Math.min(ze.end,ue))/2);const xt=Math.min(16,Math.max(3,Math.round((ct-ut)/(.18*T))+1)),yt=Array.from({length:xt},(Et,ti)=>ut+(ct-ut)*ti/(xt-1)),Wt=yt.map(Et=>Pe.map(ti=>nt(Et,ti.fx,ti.fy))),Xt=[Wt[0].slice()],ot=[Pe.map(()=>-1)];for(let Et=1;Et<xt;Et++)Xt.push([]),ot.push([]),Pe.forEach((ti,zt)=>{let Tt=1/0,ii=0;Pe.forEach((br,pr)=>{const wr=Xt[Et-1][pr]+2*Math.hypot((ti.fx-br.fx)*X,ti.fy-br.fy);wr<Tt&&(Tt=wr,ii=pr)}),Xt[Et].push(Tt+Wt[Et][zt]),ot[Et].push(ii)});let et=Xt[xt-1].indexOf(Math.min(...Xt[xt-1]));const Lt=[];for(let Et=xt-1;Et>=0;Et--){const ti=Pe[et],zt=Wt[Et][et];Lt.unshift({c:yt[Et],x:ti.fx-.5,y:.5-ti.fy,s:zt>.45?Je*.85:Je,a:.2}),et=ot[Et][et]}ze.path=Lt}}function Qe(_e,E){const T=_e.path;if(!T||!T.length)return _e.at;if(E<=T[0].c)return T[0];const U=T.length-1;if(E>=T[U].c)return T[U];let ee=0;for(;ee<U-1&&E>T[ee+1].c;)ee++;const j=L((E-T[ee].c)/Math.max(T[ee+1].c-T[ee].c,1),0,1),ue=j*j,ie=ue*j,D=T[Math.max(ee-1,0)],ne=T[ee],me=T[ee+1],I=T[Math.min(ee+2,U)],Y=(ce,Z,oe,V)=>.5*(2*Z+(oe-ce)*j+(2*ce-5*Z+4*oe-V)*ue+(3*Z-ce-3*oe+V)*ie);return{x:Y(D.x,ne.x,me.x,I.x),y:Y(D.y,ne.y,me.y,I.y),s:ne.s+(me.s-ne.s)*k(0,1,j),a:.2}}function Ae(_e,E=.016){const T=innerHeight,U=st(_e,E)+T/2,ee=.3*T,j=D=>D===0?Fe:Qe(we[D-1],U);let ue=0;for(;ue<we.length&&U>=we[ue].start;)ue++;const ie=(D,ne,me)=>({x:D.x+(ne.x-D.x)*me,y:D.y+(ne.y-D.y)*me,s:D.s+(ne.s-D.s)*me,a:D.a+(ne.a-D.a)*me});return ue>0&&U-we[ue-1].start<ee?ie(j(ue-1),j(ue),C(-ee,ee,U-we[ue-1].start)):ue<we.length&&we[ue].start-U<ee?ie(j(ue),j(ue+1),C(-ee,ee,U-we[ue].start)):j(ue)}function it(_e,E,T,U,ee,j,ue){const ie=innerHeight,D=st(T,E)+ie/2,ne=document.documentElement.scrollHeight-ie/2;let me=0;for(const I of we){const Y=I.end===1/0?1/0:I.end,ce=Math.min(D-I.start,Y-D);let Z=(Y===1/0?C(0,.26*ie,ce):C(.04*ie,.42*ie,ce))*j*(ue?0:1);if(Ve&&(Z=Math.max(Z,.001)),I.w=Z,Z<5e-4){I.obj.group.visible=!1,I.formed=!1;continue}me=Math.max(me,Z);const oe=Y===1/0?Math.max(ne,I.start+1):Y,V=L((D-I.start)/Math.max(oe-I.start,1),0,1),z=I.obj.group;z.visible=!0,z.position.copy(U),z.scale.setScalar(Math.max(1e-4,ee*.95*O(Z))),z.rotation.set(Vt.ny*.12,Vt.nx*.18+(1-Z)*(1-Z)*1.1,(1-Z)*(1-Z)*.25),I.obj.update(V,_e,Z),Z>.85&&!I.formed?(I.formed=!0,_e-ye>1.2&&Ht.live&&(ye=_e,Ht.bubble(1.25,.1),Ht.bubble(1.7,.05,.08))):Z<.5&&(I.formed=!1)}return 1-C(.02,.75,me)}function He(){if(!B)return;const _e=we.find(ue=>ue.layer==="front");if(!(!!_e&&_e.obj.group.visible)){B.shown&&(B.r.clear(),B.canvas.style.visibility="hidden",B.shown=!1);return}const T=t.domElement,U=T.clientWidth,ee=T.clientHeight,j=Math.min(t.getPixelRatio(),2);(U!==B.w||ee!==B.h||j!==B.dpr)&&(B.r.setPixelRatio(j),B.r.setSize(U,ee,!1),Object.assign(B,{w:U,h:ee,dpr:j})),B.shown||(B.canvas.style.visibility="visible",B.shown=!0),B.r.render(B.sc,r)}function Xe(_e){_e>=3&&(Object.assign($,{transmission:0,transparent:!0,opacity:.42,dispersion:0}),$.needsUpdate=!0)}return/sodebug/.test(location.search)&&(window.__so={items:we,anchor:Ae,get hero(){return Fe}}),{layout:Ke,anchor:Ae,update:it,quality:Xe,drawFront:He,prewarm(_e){Ve=_e;for(const E of we)_e&&(E.obj.group.visible=!0);if(_e&&B)try{B.r.compile(B.sc,r)}catch{}}}}function Vb(){let e=At("#scene"),t=matchMedia("(max-width: 900px)").matches||vu,i=new Zf({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),r=Math.min(devicePixelRatio||1,t?2.5:2),n=r;i.setPixelRatio(n),i.toneMapping=Ru,i.toneMappingExposure=1.05,i.setClearColor(394758,1),i.transmissionResolutionScale=t?.5:.6;let a=new $o,s=new vr(35,1,.1,60);s.position.set(0,0,9);let o=Math.tan(_v.degToRad(s.fov/2)),l=new Js(i);a.environment=l.fromScene(new $f,.04).texture,a.environmentIntensity=.8,l.dispose();let u={uTime:{value:0},uScroll:{value:0},uAspect:{value:1},uReady:{value:0},uLight:{value:new Ie(.3,.15)},uGround:{value:null},uOrn0:{value:null},uOrn1:{value:null},uOrn2:{value:null},uBox:{value:[new qt,new qt,new qt]},uFade:{value:[0,0,0]},uTile:{value:.1},uInk:{value:.4}},h=new cn({uniforms:u,depthWrite:!1,toneMapped:!1,defines:{RELIEF:1},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
      }`}),d=new Nt(new Xa(1,1),h);d.position.z=-9,d.renderOrder=-10,a.add(d);let c=async(z,X,q)=>{let Q=(await(await fetch(z)).text()).replace(/width="[\d.]+" height="[\d.]+"/,`width="${X}" height="${q}"`),le=new Image,se=new Promise((Se,nt)=>{le.onload=Se,le.onerror=()=>nt(new Error(`could not load ${z}`))});le.src=URL.createObjectURL(new Blob([Q],{type:"image/svg+xml"}));try{await se,le.decode&&await le.decode().catch(()=>{})}finally{setTimeout(()=>URL.revokeObjectURL(le.src),0)}let Pe=document.createElement("canvas");return Pe.width=X,Pe.height=q,Pe.getContext("2d").drawImage(le,0,0,X,q),Pe},p=(z,X,q)=>{let Q=new Lr(X,q,{depthBuffer:!1,generateMipmaps:!0,minFilter:Rr,magFilter:Di});Q.texture.anisotropy=z.anisotropy;let le=t?4.8:3.5,se=t?3.2:2.6,Pe=new cn({uniforms:{uSrc:{value:z},uStep:{value:new Ie(le/X,le/q)},uSoft:{value:se}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D uSrc; uniform vec2 uStep; uniform float uSoft;
        float line(vec2 p){ vec4 s = textureLod(uSrc, p, uSoft); return s.r * s.a; }
        void main(){
          vec4 c = textureLod(uSrc, vUv, 0.0);
          float hx = line(vUv - vec2(uStep.x, 0.0)) - line(vUv + vec2(uStep.x, 0.0));
          float hy = line(vUv - vec2(0.0, uStep.y)) - line(vUv + vec2(0.0, uStep.y));
          gl_FragColor = vec4(c.r, 0.5 + 0.5 * clamp(hx, -1.0, 1.0), 0.5 + 0.5 * clamp(hy, -1.0, 1.0), c.a);
        }`,depthTest:!1,depthWrite:!1,blending:jn,toneMapped:!1}),Se=new Nt(new Xa(2,2),Pe);Se.frustumCulled=!1;let nt=i.getRenderTarget();return i.setRenderTarget(Q),i.render(Se,s),i.setRenderTarget(nt),Se.geometry.dispose(),Pe.dispose(),Q.texture},f={},x=Math.min(8,i.capabilities.getMaxAnisotropy()),_=(navigator.deviceMemory||8)<=2?1024:t?1536:2048,m=Math.round(_/1.4),S=async z=>{let X=await c(`batik-${z}.svg?v=${e.dataset.v||""}`,_,m),q=new vl(X);q.anisotropy=x,q.minFilter=Rr;let Q=q;try{Q=p(q,_,m),q.dispose(),X.width=X.height=0}catch(se){h.defines.RELIEF=0,h.needsUpdate=!0,console.warn("The batik relief could not be prepared, the batik stays flat.",se)}let le={tex:Q,fade:0};f[z]=le,pt.to(le,{fade:1,duration:1.1,ease:"power2.out"})},M=(async()=>{let z=await c(e.dataset.ground,256,256),X=new vl(z);X.anisotropy=x,X.minFilter=Rr,X.wrapS=X.wrapT=Oo,u.uGround.value=X,await S("megamendung"),await S("garuda"),pt.to(u.uReady,{value:1,duration:1.2,ease:"power2.out"})})().catch(z=>console.warn("The batik could not be drawn, the cloth stays plain.",z)),v=M.then(async()=>{for(let z of["kawung","parang","truntum"])await S(z).catch(X=>console.warn(`The ${z} batik could not be drawn.`,X))}),y=At("#hero-name"),w=document.createElement("canvas"),g=new vl(w);g.colorSpace=Hi,g.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let b=new at("#060606"),R=new at("#ffffff"),N=new al({map:g,alphaTest:.5,alphaToCoverage:!0,toneMapped:!1,color:b.clone()}),L=new Nt(new Xa(1,1),N),k=-2.2;L.position.z=k,a.add(L);function K(){let z=y.getBoundingClientRect();if(z.width<2)return;let X=r,q=getComputedStyle(y);w.width=Math.ceil(z.width*X),w.height=Math.ceil(z.height*X);let Q=w.getContext("2d");Q.setTransform(X,0,0,X,0,0),Q.clearRect(0,0,z.width,z.height),Q.font=`${q.fontWeight} ${q.fontSize} ${q.fontFamily}`,"letterSpacing"in Q&&(Q.letterSpacing=q.letterSpacing);let le=Q.createLinearGradient(0,0,0,z.height);le.addColorStop(0,"#ffffff"),le.addColorStop(1,"#d2cec7"),Q.fillStyle=le,Q.textBaseline="alphabetic";for(let se of Zi(".line",y)){let Pe=se.getBoundingClientRect(),Se=Q.measureText(se.textContent),nt=Se.fontBoundingBoxAscent??Se.actualBoundingBoxAscent,ze=Se.fontBoundingBoxDescent??Se.actualBoundingBoxDescent;Q.fillText(se.textContent,Pe.left-z.left,Pe.top-z.top+(Pe.height-(nt+ze))/2+nt)}g.needsUpdate=!0}let C={uTime:{value:0},uAmp:{value:.2},uFreq:{value:.95},uPointer:{value:new J(0,0,1)},uBulge:{value:0}},O=new th({color:16777215,metalness:0,roughness:.08,transmission:1,ior:1.45,thickness:2,clearcoat:1,clearcoatRoughness:.06,dispersion:.25,attenuationColor:new at("#ffffff"),attenuationDistance:16,envMapIntensity:1.5,specularIntensity:1});O.onBeforeCompile=z=>{Object.assign(z.uniforms,C),z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
        ${Bb}
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
        #endif`).replace("#include <begin_vertex>","vec3 transformed=lq0;")},O.customProgramCacheKey=()=>"liquid-glass-v1";let H=t?20:40,F=new Nt(new Qc(1,H),O);a.add(F);let de=new Qc(1,10),P=[0,1,2].map(z=>{let X=new Nt(de,O);return X.userData={r:1.55+z*.32,sp:.22+z*.07,ph:z*2.1,s:.13-z*.025,tilt:.5+z*.4},a.add(X),X});a.add(new gf(16777215,.3));let $=new mf(16777215,2.4);$.position.set(-3,4,5),a.add($);let ge=new nh(16777215,30,30);ge.position.set(4,-2,3),a.add(ge);let Re=new nh(16777215,18,30);Re.position.set(-2,1,4),a.add(Re);let ae=t?140:280,pe=new Float32Array(ae*3);for(let z=0;z<ae;z++)pe[z*3]=(Math.random()-.5)*20,pe[z*3+1]=(Math.random()-.5)*13,pe[z*3+2]=-7+Math.random()*9;let Ee=new gr;Ee.setAttribute("position",new kr(pe,3));let be=new Hv(Ee,new Ip({color:16777215,size:.03,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0}));a.add(be);let Le=kb({scene:a,renderer:i,mobile:t,camera:s}),xe=[["#top",{x:.06,y:.13,s:1,a:.2},{x:.4,y:.33,s:.78,a:.19}],["#about",{x:-.37,y:-.2,s:.62,a:.2},{x:.3,y:-.3,s:.7,a:.2}],["#research",{x:.41,y:.27,s:.5,a:.24},{x:-.3,y:.34,s:.6,a:.22}],["#experience",{x:-.4,y:.04,s:.6,a:.2},{x:.32,y:-.05,s:.62,a:.2}],["#credentials",{x:.4,y:-.22,s:.52,a:.22},{x:-.3,y:.3,s:.6,a:.22}],["#toolkit",{x:-.3,y:.25,s:.5,a:.2},{x:.3,y:.2,s:.6,a:.2}],["#contact",{x:.24,y:.04,s:1.12,a:.2},{x:.12,y:.12,s:1.05,a:.2}]],Be=[],ke=!!document.getElementById("loader"),fe={x:.06,y:.13,s:1,a:.2,intro:Ct&&!ke?1:0,name:Ct&&!ke?1:0,bulge:0,rx:0,ry:0,cx:0,cy:0,lx:.3,ly:.15,gate:0,ink:.4},Ne=1,ve=1,Te=!1,Me=.78,B=2.4,we=[];function Fe(z,X){let q=Math.min(.8,.9*z/1.4),Q=[{name:"megamendung",cx:0,cy:B,h:Math.min(.95,.94*z/1.4)},{name:"garuda",cx:X?0:.13*z,cy:X?.28:.02,h:Math.min(.96,.98*z/1.4)}],le=Math.max(document.documentElement.scrollHeight-innerHeight,1),se=-1;for(let Pe of Zi("[data-batik]")){if(Pe.id==="top")continue;let Se=Pe.offsetTop,nt=Pe.offsetHeight,ze=Math.max(1,Math.round(nt/innerHeight/2.2));for(let Je=0;Je<ze;Je++){let ut=dr(Se+nt*(Je+.5)/ze-innerHeight/2,0,le);Q.push({name:Pe.dataset.batik,cx:X?0:se*.12*z,cy:-(ut/innerHeight)*Me,h:q}),se=-se}}Q.sort((Pe,Se)=>Se.cy-Pe.cy),Q.forEach((Pe,Se)=>{let nt=Math.min(Se>0?Q[Se-1].cy-Pe.cy:1/0,Se<Q.length-1?Pe.cy-Q[Se+1].cy:1/0);Pe.h=Math.min(Pe.h,.92*nt)}),we=Q}let ye={on:ke,shown:!1,loading:!1,frame:null,grow:0,load:0,approach:0,spin:0,turn:0,tx:0,ty:0,glow:ke?1:0};fe.gate=ke?B:0;let Ve=null;function je(){Ve||(Ve=new th({color:15921906,metalness:1,roughness:.2,clearcoat:.7,clearcoatRoughness:.08,envMap:ng(i),envMapIntensity:1})),ye.frame&&ye.frame.dispose();let z=2*(s.position.z-.4)*o,X=z*s.aspect,q=s.aspect<.9,Q=q?.72*X:.7*X,le=q?Math.min(.6*z,1.6*Q):(ve<520?.76:.68)*z;ye.frame=Fb({w:Q,h:le,material:Ve}),ye.frame.grow(ye.grow),a.add(ye.frame.group)}let $e=[];function W(z){let X=-z-.62,q=-z+.62;$e.length=0;for(let Q of we)f[Q.name]&&Q.h>.02&&Q.cy+Q.h/2>X&&Q.cy-Q.h/2<q&&$e.push(Q);$e.sort((Q,le)=>Math.abs(Q.cy+z)-Math.abs(le.cy+z));for(let Q=0;Q<3;Q++){let le=$e[Q],se=u.uBox.value[Q];le?(se.set(le.cx,le.cy,le.h*1.4,le.h),u.uFade.value[Q]=f[le.name].fade,u[`uOrn${Q}`].value=f[le.name].tex):(se.set(0,0,0,0),u.uFade.value[Q]=0)}}function st(){Ne=e.clientWidth,ve=e.clientHeight,Te=Ne/ve<.85,i.setSize(Ne,ve,!1),s.aspect=Ne/ve,s.updateProjectionMatrix();let z=2*(s.position.z-d.position.z)*o;d.scale.set(z*s.aspect*1.3,z*1.3,1),u.uAspect.value=s.aspect;let X=s.aspect,q=X<.9;fe.ink=q?.32:.4,u.uTile.value=q?.07:.1,Fe(X,q),ye.on&&ye.shown&&je(),Be=xe.map(([Q,le,se],Pe)=>{let Se=At(Q);return{at:Pe===0?0:Se.offsetTop+Se.offsetHeight/2-innerHeight/2,...Te||Ne<900?se:le}}).sort((Q,le)=>Q.at-le.at),Le.layout(Te||Ne<900,Te||Ne<900?xe[0][2]:xe[0][1]),K()}function Ke(z){if(z<=Be[0].at)return Be[0];for(let X=0;X<Be.length-1;X++){let q=Be[X],Q=Be[X+1];if(z<=Q.at){let le=zb(dr((z-q.at)/Math.max(Q.at-q.at,1),0,1));return{x:ys(q.x,Q.x,le),y:ys(q.y,Q.y,le),s:ys(q.s,Q.s,le),a:ys(q.a,Q.a,le)}}}return Be[Be.length-1]}let Qe=new J,Ae=new rn,it=.46,He=performance.now(),Xe=!0,_e=!1,E=0,T=0,U=0,ee=0,j=null,ue=0,ie=!1,D=[.024,.034,.05],ne=[14,20,30],me=new Uint8Array(4),I=()=>{document.documentElement.dataset.quality=String(ee)};I();function Y(){ee++,ie=!1,ee===1?(n=Math.max(1,r*.8),i.setPixelRatio(n),i.transmissionResolutionScale=.42,i.setSize(Ne,ve,!1),K()):ee===2?(F.geometry.dispose(),F.geometry=new Qc(1,14),P.forEach(z=>{z.visible=!1}),n=Math.max(1,r*.67),i.setPixelRatio(n),i.setSize(Ne,ve,!1),K()):(O.transmission=0,O.transparent=!0,O.opacity=.42,O.dispersion=0,O.needsUpdate=!0,n=1,i.setPixelRatio(1),i.setSize(Ne,ve,!1),K()),I(),Le.quality(ee)}function ce(z){if(!Xe)return;requestAnimationFrame(ce);let X=Math.max(0,(z-He)/1e3);He=z;let q=Math.min(X,.05);E+=q*(Ct?.15:1),$r.v*=Math.exp(-5*q);let Q=2*s.position.z*o,le=Q*s.aspect,se=Le.anchor($r.y,q),Pe=Ct?30:4.2;fe.x=$i(fe.x,se.x+Vt.nx*.03,Pe,q),fe.y=$i(fe.y,se.y-Vt.ny*.03,Pe,q),fe.s=$i(fe.s,se.s,Pe,q),fe.a=$i(fe.a,se.a+dr(Math.abs($r.v)*7e-5,0,.12),4,q);let Se=Math.min(.21*Q,.3*le)*fe.s*fe.intro;F.visible=fe.intro>.002,F.position.set(fe.x*le,fe.y*Q,0);let nt=Math.max(Se,1e-4),ze=Le.update(E,q,$r.y,F.position,Se,fe.intro,ye.on);ze<.01&&(F.visible=!1),F.scale.set(nt*ze+1e-4,nt*ze+1e-4,(nt*ze+1e-4)*it),fe.rx=$i(fe.rx,Vt.ny*.22,3,q),fe.ry=$i(fe.ry,Vt.nx*.3,3,q),F.rotation.set(fe.rx,fe.ry,Math.sin(E*.1)*.25);let Je=Vt.nx*le*.5,ut=-Vt.ny*Q*.5,ct=Math.hypot(Je-F.position.x,ut-F.position.y);fe.bulge=$i(fe.bulge,ct<Se*1.9&&!vu?.2:0,5,q),Qe.set(Je-F.position.x,ut-F.position.y,Se*1.1).normalize().applyQuaternion(Ae.copy(F.quaternion).invert()),Qe.z/=it,Qe.normalize(),C.uPointer.value.copy(Qe),C.uBulge.value=fe.bulge,C.uAmp.value=fe.a,C.uTime.value=E,C.uFreq.value=.9+dr($r.y/Math.max(document.documentElement.scrollHeight-innerHeight,1),0,1)*.35;for(let ot of P){ot.visible=ee<2&&fe.intro>.002&&ze>.02;let et=ot.userData,Lt=E*et.sp+et.ph;ot.position.set(F.position.x+Math.cos(Lt)*et.r*Se,F.position.y+Math.sin(Lt*1.3)*et.r*Se*.6*Math.cos(et.tilt),Math.sin(Lt)*et.r*Se*.7),ot.scale.setScalar(Math.max(et.s*(Se/1.19+.35)*fe.intro*ze,1e-4))}let xt=y.getBoundingClientRect();if(L.visible=!ye.on&&xt.bottom>-40&&xt.top<ve+40,L.visible){let ot=2*(s.position.z-k)*o,et=ot*s.aspect;L.scale.set(xt.width/Ne*et,xt.height/ve*ot,1),L.position.x=((xt.left+xt.width/2)/Ne-.5)*et,L.position.y=-((xt.top+xt.height/2)/ve-.5)*ot,N.color.copy(b).lerp(R,fe.name)}fe.cx=$i(fe.cx,Vt.nx*.22,2.5,q),fe.cy=$i(fe.cy,-Vt.ny*.16,2.5,q),s.position.x=Ct?0:fe.cx,s.position.y=Ct?0:fe.cy,s.lookAt(0,0,0),Re.position.set(Je*.8,ut*.8,4),be.rotation.y=E*.01,be.position.y=$r.y/Math.max(innerHeight,1)*.35;let yt=$r.y/Math.max(innerHeight,1)*Me-fe.gate;u.uTime.value=E,u.uScroll.value=yt,W(yt);let Wt=vu?Math.sin(E*.13)*.32*s.aspect:Vt.nx*.5*s.aspect,Xt=vu?.1+Math.cos(E*.11)*.24:-Vt.ny*.5;if(fe.lx=$i(fe.lx,Wt,4,q),fe.ly=$i(fe.ly,Xt,4,q),u.uLight.value.set(fe.lx,fe.ly),u.uInk.value=fe.ink*(1+.35*ye.glow),ye.frame){let ot=ye.frame.group,et=Ct?0:1;ye.tx=$i(ye.tx,-Vt.ny*.16,2.2,q),ye.ty=$i(ye.ty,Vt.nx*.24,2.2,q),ot.position.set(0,Math.sin(E*.8)*.05*et,.4+ye.approach),ot.rotation.set((ye.tx+Math.sin(E*.43)*.035)*et,(ye.ty+Math.sin(E*.31)*.06)*et+ye.turn,ye.spin),ye.frame.sway(E,et*(1+ye.load*1.5))}if(i.render(a,s),Le.drawFront(),fe.intro>.6&&ee<3){if(j)oe(z);else if(z>ue&&(U+=Math.min(X,.25),T++,T>=30)){let ot=U/T;T=0,U=0,ot>D[ee]&&Z(z)}}}function Z(z){let X=i.getContext();j={fence:X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0),since:z,waited:0,samples:[]},X.flush()}function oe(z){let X=i.getContext();if(j.fence){if(X.getSyncParameter(j.fence,X.SYNC_STATUS)!==X.SIGNALED){z-j.since>1e3&&++j.waited>=2&&(X.deleteSync(j.fence),j=null,Y());return}X.deleteSync(j.fence),j.fence=null}let q=performance.now();if(X.readPixels(0,0,1,1,X.RGBA,X.UNSIGNED_BYTE,me),j.samples.push(performance.now()-q),j.samples.length===3){let Q=j.samples.sort((se,Pe)=>se-Pe)[1],le=ne[ee];j=null,Q>le*2||Q>le&&ie?Y():Q>le?ie=!0:(ie=!1,ue=z+15e3)}}st();let V=0;return addEventListener("resize",()=>{clearTimeout(V),V=setTimeout(st,120)}),new ResizeObserver(()=>{clearTimeout(V),V=setTimeout(st,120)}).observe(At("main")),document.fonts.ready.then(K),document.addEventListener("visibilitychange",()=>{let z=!document.hidden;z&&!Xe&&!_e?(Xe=!0,He=performance.now(),requestAnimationFrame(ce)):z||(Xe=!1)}),e.addEventListener("webglcontextlost",z=>{z.preventDefault(),Xe=!1,document.documentElement.classList.replace("webgl","no-webgl")}),requestAnimationFrame(ce),{batik:M,firstFrame:()=>new Promise(z=>requestAnimationFrame(()=>requestAnimationFrame(z))),warm(){let z;Le.prewarm(!0);try{z=i.extensions.has("KHR_parallel_shader_compile")?i.compileAsync(a,s):Promise.resolve(i.compile(a,s))}catch{z=Promise.resolve()}return Promise.race([z.catch(()=>{}),Do(3e3)]).then(()=>{try{i.initTexture(g)}catch{}Le.prewarm(!1)})},hold(){_e=!0,Xe=!1},showGate(){if(!(!ye.on||ye.shown)){if(ye.shown=!0,je(),Ct){ye.grow=1,ye.frame.grow(1);return}pt.to(ye,{grow:1,duration:ye.loading?.8:2.4,ease:"power2.inOut",onUpdate:()=>ye.frame&&ye.frame.grow(ye.grow)})}},gateLoad(z){ye.loading=!0,!Ct&&(pt.to(ye,{load:1,duration:z,ease:"none"}),pt.to(ye,{approach:1.3,spin:.16,turn:.38,duration:z,ease:"power1.in"}))},gatePass(){ye.on=!1;let z=()=>{ye.frame&&(ye.frame.dispose(),ye.frame=null)};if(Ct||!ye.frame){z(),fe.gate=0,ye.glow=0;return}pt.to(ye,{approach:9.6,spin:.55,turn:0,duration:.85,ease:"power3.in",onComplete:z}),pt.to(fe,{gate:0,duration:1.5,ease:"power2.inOut"}),pt.to(ye,{glow:0,duration:1.5,ease:"power2.inOut"})},go(){_e=!1,!Xe&&!document.hidden&&(Xe=!0,He=performance.now(),requestAnimationFrame(ce))},intro(){if(Ct){fe.intro=1,fe.name=1;return}pt.to(fe,{intro:1,duration:1.9,ease:"elastic.out(1, 0.55)",delay:.1}),pt.to(fe,{name:1,duration:1.3,ease:"power2.out",delay:.2})}}}function Hb(){let e=new Set,t=new IntersectionObserver(a=>a.forEach(s=>s.isIntersecting?e.add(s.target):e.delete(s.target)),{rootMargin:"80px"});Zi(".glass").forEach(a=>t.observe(a));let i=0,r=()=>{i=0;for(let a of e){let s=a.getBoundingClientRect(),o=Math.max(s.left-Vt.x,0,Vt.x-s.right),l=Math.max(s.top-Vt.y,0,Vt.y-s.bottom);a.style.setProperty("--mx",`${(Vt.x-s.left).toFixed(1)}px`),a.style.setProperty("--my",`${(Vt.y-s.top).toFixed(1)}px`),a.style.setProperty("--rim",dr(1-Math.hypot(o,l)/150,0,1).toFixed(3))}},n=()=>{i||(i=requestAnimationFrame(r))};addEventListener("pointermove",n,{passive:!0}),addEventListener("scroll",n,{passive:!0})}function Gb(){if(Ct)return;let e=170,t=13,i=new Map,r=!1,n=0,a=o=>{let l=Math.min((o-n)/1e3,.032);n=o;let u=!1;for(let[h,d]of i){let c=0;for(let p of["rx","ry","sc"]){let f=p==="sc"?100:1;d.v[p]+=((d.t[p]-d.p[p])*e-d.v[p]*t)*l,d.p[p]+=d.v[p]*l,c+=(Math.abs(d.t[p]-d.p[p])+Math.abs(d.v[p])*.05)*f}c>.02?(u=!0,h.style.setProperty("--tilt",`perspective(900px) rotateX(${d.p.rx.toFixed(3)}deg) rotateY(${d.p.ry.toFixed(3)}deg)`),h.style.setProperty("--sc",d.p.sc.toFixed(4))):(i.delete(h),d.t.rx===0&&d.t.ry===0&&d.t.sc===1&&(Object.assign(d.p,d.t),Object.assign(d.v,{rx:0,ry:0,sc:0}),h.style.removeProperty("--tilt"),h.style.removeProperty("--sc")))}u?requestAnimationFrame(a):r=!1},s=(o,l)=>{i.set(o,l),r||(r=!0,n=performance.now(),requestAnimationFrame(a))};Zi("[data-spring]").forEach(o=>{let l=o.matches(".card, .tl-item, .fact, .cert"),u=l?4.5:0,h=l?1.014:1.045,d={p:{rx:0,ry:0,sc:1},v:{rx:0,ry:0,sc:0},t:{rx:0,ry:0,sc:1},down:!1};o.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let p=o.getBoundingClientRect();d.t.ry=((c.clientX-p.left)/p.width-.5)*u*2,d.t.rx=-((c.clientY-p.top)/p.height-.5)*u*2,d.t.sc=d.down?.97:h,s(o,d)}),o.addEventListener("pointerleave",()=>{d.t.rx=0,d.t.ry=0,d.t.sc=1,d.down=!1,s(o,d)}),o.addEventListener("pointerdown",()=>{d.down=!0,d.t.sc=.965,s(o,d)}),o.addEventListener("pointerup",c=>{d.down=!1,d.t.sc=c.pointerType==="touch"?1:h,s(o,d)}),o.addEventListener("pointercancel",()=>{d.down=!1,d.t.sc=1,d.t.rx=0,d.t.ry=0,s(o,d)})})}var Ht=(()=>{let e=null,t=null,i=!0,r=!1,n=null,a=!1;try{i=localStorage.getItem("nap-sound")!=="off"}catch{}let s=()=>{try{localStorage.setItem("nap-sound",i?"on":"off")}catch{}},o=()=>{if(!e){let p=window.AudioContext||window.webkitAudioContext;if(!p)return null;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}e=new p,t=e.createGain(),t.gain.value=.5,t.connect(e.createDynamicsCompressor()).connect(e.destination);let f=e.createBuffer(1,1,e.sampleRate),x=e.createBufferSource();x.buffer=f,x.connect(e.destination),x.start(0)}return e.state!=="running"&&e.resume().catch(()=>{}),e},l=()=>{r=!0,i&&o()};for(let p of["pointerdown","touchend","click","keydown"])addEventListener(p,l,{passive:!0});let u=(p,f,x,_,m="sine",S=0)=>{if(!i||!r)return;let M=o();if(!M)return;let v=M.currentTime+S,y=M.createOscillator(),w=M.createGain();y.type=m,y.frequency.setValueAtTime(p,v),y.frequency.exponentialRampToValueAtTime(f,v+x),w.gain.setValueAtTime(1e-4,v),w.gain.exponentialRampToValueAtTime(_,v+.012),w.gain.exponentialRampToValueAtTime(1e-4,v+x),y.connect(w).connect(t),y.start(v),y.stop(v+x+.05)},h=()=>`backsound.mp3?v=${document.getElementById("scene")?.dataset.v||""}`,d=()=>{if(!n){let p=o();p&&(n=Ub(p,p.destination,h()))}return n};document.addEventListener("visibilitychange",()=>{n&&(document.hidden?n.stop(.3):a&&i&&(e.state!=="running"&&e.resume().catch(()=>{}),n.start(e.currentTime+.25,2)))});let c={get on(){return i},music(p,f){if(a=p,p&&i&&!document.hidden){let x=d();x&&x.start(f??e.currentTime+.3,f?3:2.5)}else n&&n.stop(.7)},get live(){return i&&r},enable(){i=!0,r=!0,s();let p=o(),f=d();return f&&f.load().catch(()=>{}),p},mute(){i=!1,s()},context(){return i?o():null},toggle(){return i=!i,s(),i&&(r=!0,c.pop()),c.music(i),i},bubble(p=1,f=.3,x=0){u(420*p,980*p,.13,f,"sine",x)},pop(){u(760,1500,.07,.28),u(380,620,.09,.11)},drop(){u(880,360,.17,.24)},lift(){u(300,540,.1,.15,"triangle")},ting(){u(1568,1560,.6,.11),u(2349,2340,.45,.06,"sine",.01),u(3136,3120,.3,.03,"sine",.02)},bubbles(p=5){for(let f=0;f<p;f++)c.bubble(.8+Math.random()*1.3,.05+Math.random()*.07,f*.075+Math.random()*.05)},open(){c.bubble(.75,.28),c.ting()}};return c})(),Wb=(()=>{let e=16,t=performance.now();return pt.ticker.add(()=>{let i=performance.now();e+=(Math.min(i-t,2e3)-e)*.3,t=i}),()=>e})();function ag(e,{items:t,onPick:i}){let r=At(".liquid-track",e),n=At(".lens",e),a={x:0,y:0,w:0,h:0,sx:1,sy:1,o:0,lift:0},s=new Map,o=null,l=null,u=!1,h=y=>({x:y.offsetLeft,y:y.offsetTop,w:y.offsetWidth,h:y.offsetHeight}),d=()=>{let y=r.offsetLeft-r.scrollLeft+a.x,w=r.offsetTop+a.y,g=dr(a.lift,0,1);n.style.width=`${a.w.toFixed(2)}px`,n.style.height=`${a.h.toFixed(2)}px`,n.style.opacity=dr(a.o,0,1).toFixed(3),n.style.transform=`translate3d(${y.toFixed(2)}px, ${w.toFixed(2)}px, 0) scale(${a.sx.toFixed(4)}, ${a.sy.toFixed(4)})`,n.style.setProperty("--lift",g.toFixed(3));let b=a.w*a.sx/2,R=a.x+a.w/2;for(let N of t){let L=N.offsetLeft,k=N.offsetWidth||1,K=Math.max(0,Math.min(R+b,L+k)-Math.max(R-b,L))/k,C=1+.13*g*K*a.o;Math.abs((s.get(N)||1)-C)>8e-4&&(N.style.transform=C>1.0008?`scale(${C.toFixed(4)})`:"",s.set(N,C))}},c=(y,w)=>{if(o=y,pt.killTweensOf(a),!y){pt.to(a,{o:0,lift:0,duration:.25,onUpdate:d});return}let g=h(y);if(w||Ct||Wb()>120){Object.assign(a,g,{sx:1,sy:1,o:1,lift:0}),d();return}if(a.o<.05){Object.assign(a,g,{sx:.6,sy:.6,lift:0}),pt.to(a,{sx:1,sy:1,o:1,duration:.75,ease:"elastic.out(1, 0.5)",onUpdate:d});return}pt.timeline({onUpdate:d}).to(a,{sy:1.2,sx:1.08,lift:.85,duration:.15,ease:"power2.out"}).to(a,{x:g.x,y:g.y,w:g.w,h:g.h,o:1,duration:.5,ease:"power3.inOut"},.04).to(a,{sx:1.22,duration:.2,ease:"sine.out"},.1).to(a,{sx:1,sy:1,lift:0,duration:.85,ease:"elastic.out(1, 0.45)"},.48)},p=y=>y-r.getBoundingClientRect().left+r.scrollLeft,f=y=>y.offsetLeft+y.offsetWidth/2,x=y=>t.reduce((w,g)=>{let b=Math.abs(f(g)-y);return!w||b<w.d?{el:g,d:b}:w},null).el,_=y=>t.forEach(w=>w.classList.toggle("under",w===y)),m=()=>r.scrollWidth<=r.clientWidth+1,S=y=>{_(null),Ht.pop(),i(y),c(y)};e.addEventListener("dragstart",y=>y.preventDefault()),e.addEventListener("pointerdown",y=>{y.button||Ct||!y.target.closest(".liquid-track")||y.pointerType==="touch"&&!m()||(l={id:y.pointerId,x0:y.clientX,last:y.clientX,moved:!1,under:null})}),addEventListener("pointermove",y=>{if(!l||y.pointerId!==l.id)return;if(!l.moved){if(Math.abs(y.clientX-l.x0)<7)return;l.moved=!0,Ht.lift(),pt.killTweensOf(a),a.o<.05&&Object.assign(a,h(x(p(y.clientX)))),pt.to(a,{o:1,sy:1.24,lift:1,duration:.3,ease:"back.out(2.2)",onUpdate:d})}let w=dr(p(y.clientX),f(t[0]),f(t[t.length-1])),g=x(w);g!==l.under&&(l.under=g,_(g),pt.to(a,{w:g.offsetWidth,h:g.offsetHeight,y:g.offsetTop,duration:.25,ease:"power2.out",overwrite:"auto",onUpdate:d}),Ht.live&&Ht.bubble(1.5,.06)),a.sx=1.1+dr(Math.abs(y.clientX-l.last)*.012,0,.24),l.last=y.clientX,a.x=w-a.w/2,d(),pt.to(a,{sx:1.1,duration:.35,ease:"power2.out",overwrite:"auto",onUpdate:d})},{passive:!0});let M=y=>{if(!l||y.pointerId!==l.id)return;let w=l;l=null,w.moved&&(u=!0,setTimeout(()=>{u=!1},0),S(w.under||x(p(y.clientX))))};addEventListener("pointerup",M),addEventListener("pointercancel",M),e.addEventListener("click",y=>{u&&(y.preventDefault(),y.stopPropagation())},!0);let v=()=>{let y=m();r.classList.toggle("is-fit",y),r.style.touchAction=y?"pan-y":"pan-x pan-y",o&&!l&&c(o,!0)};return r.addEventListener("scroll",d,{passive:!0}),addEventListener("resize",v),document.fonts.ready.then(v),window.ResizeObserver&&new ResizeObserver(v).observe(r),v(),{moveTo:c,pick:S,reveal(y){m()||r.scrollTo({left:y.offsetLeft-r.clientWidth/2+y.offsetWidth/2,behavior:Ct?"auto":"smooth"})}}}function Xb(){let e=At("#nav"),t=Zi(".liquid-track a",e),i=new Map(t.map(m=>[m.getAttribute("href").slice(1),m])),r={toolkit:"credentials"},n=Zi("main section[id]"),a=null,s=null,o=0,l=0;function u(m){a=m,t.forEach(S=>m&&S===i.get(m)?S.setAttribute("aria-current","true"):S.removeAttribute("aria-current"))}let h=()=>{let m=innerHeight*.45,S=null;for(let M of n)M.getBoundingClientRect().top<=m&&(S=M.id);return innerHeight+scrollY>=document.documentElement.scrollHeight-4&&(S=n[n.length-1].id),!S||S==="top"?null:r[S]||S},d=ag(e,{items:t,onPick:m=>{c(m),At(m.getAttribute("href")).scrollIntoView({behavior:Ct?"auto":"smooth"})}});function c(m){let S=m.getAttribute("href").slice(1);s=S,o=performance.now()+2500,u(S)}let p=()=>{l=0;let m=h();if(s)if(m===s||performance.now()>o)s=null;else return;if(m===a)return;u(m);let S=m&&i.get(m);d.moveTo(S||null),S&&d.reveal(S)},f=()=>{l||(l=requestAnimationFrame(p))};addEventListener("scroll",f,{passive:!0}),addEventListener("resize",f),t.forEach(m=>m.addEventListener("click",()=>{Ht.pop(),c(m),d.moveTo(m)})),p();let x=At("#sound"),_=()=>{x.setAttribute("aria-pressed",String(Ht.on)),x.title=Ht.on?"Sound on":"Sound off"};x.addEventListener("click",()=>{Ht.toggle(),_()}),_()}function qb(){Zi(".tabs").forEach(e=>{let t=Zi(".tab",e),i=(a,s)=>{t.forEach(o=>{let l=o===a;o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1;let u=document.getElementById(o.getAttribute("aria-controls"));u.hidden=!l,l&&!Ct&&pt.fromTo(Zi("[data-spring], [data-tabitem]",u),{opacity:0,"--ty":"30px"},{opacity:1,"--ty":"0px",duration:.75,ease:"back.out(1.7)",stagger:.06,overwrite:!0})}),s&&a.focus(),vt.refresh()},r=ag(e,{items:t,onPick:a=>i(a)});t.forEach((a,s)=>{a.addEventListener("click",()=>{a.getAttribute("aria-selected")!=="true"&&(Ht.pop(),i(a),r.moveTo(a),r.reveal(a))}),a.addEventListener("keydown",o=>{let l=o.key==="ArrowRight"?1:o.key==="ArrowLeft"?-1:0;if(l){o.preventDefault();let u=t[(s+l+t.length)%t.length];Ht.pop(),i(u,!0),r.moveTo(u),r.reveal(u)}})});let n=()=>r.moveTo(t.find(a=>a.getAttribute("aria-selected")==="true"),!0);n(),document.fonts.ready.then(n)})}function jb(){let e=new Set(["research","credentials"]),t=new Map,i=new IntersectionObserver(r=>r.forEach(n=>{if(!n.isIntersecting||!Ht.live)return;let a=performance.now();a-(t.get(n.target.id)||-1e9)<9e3||(t.set(n.target.id,a),Ht.bubbles(e.has(n.target.id)?6:3))}),{rootMargin:"-35% 0px -45% 0px"});Zi("main section[id]:not(#top)").forEach(r=>i.observe(r))}function Yb(){let e=At("#sheet"),t=At("#sheet-body"),i=At("#lightbox"),r=null,n=s=>{r=document.activeElement,s.showModal(),s===e?Ht.open():Ht.ting(),Ct||pt.fromTo(s,{opacity:0,scale:.9,y:40},{opacity:1,scale:1,y:0,duration:.85,ease:"elastic.out(1, 0.72)",overwrite:!0})},a=s=>{Ht.drop();let o=()=>{s.close(),pt.set(s,{clearProps:"opacity,transform"}),r&&r.focus&&r.focus({preventScroll:!0})};Ct?o():pt.to(s,{opacity:0,scale:.96,y:14,duration:.2,ease:"power2.in",overwrite:!0,onComplete:o})};Zi(".card").forEach(s=>s.addEventListener("click",()=>{let o=document.getElementById(`tpl-${s.dataset.card}`);if(!o)return;t.replaceChildren(o.content.cloneNode(!0));let l=At(".sheet-title",t);l&&(l.id="sheet-heading"),n(e),t.scrollTop=0})),Zi(".cert").forEach(s=>s.addEventListener("click",()=>{let o=At("#lb-img");o.src=s.dataset.zoom,o.width=+s.dataset.w,o.height=+s.dataset.h,o.alt=`Certificate: ${s.dataset.title}`,i.style.setProperty("--ar",(+s.dataset.w/+s.dataset.h).toFixed(4)),At("#lb-title").textContent=s.dataset.title,At("#lb-meta").textContent=s.dataset.meta,n(i)}));for(let s of[e,i])s.addEventListener("click",o=>{(o.target===s||o.target.closest("[data-close]"))&&a(s)}),s.addEventListener("cancel",o=>{o.preventDefault(),a(s)})}function Jb(){let e=At("#lanyard"),t=At(".lanyard-swing",e),i=At(".idcard",e),r={a:0,w:0,drag:!1,ry:0,on:!0};if(Ct)return{drop(){}};let n=()=>{let u=e.getBoundingClientRect();return{x:u.left+u.width/2,y:u.top}},a=null,s=performance.now();i.addEventListener("pointerdown",u=>{u.pointerType==="touch"||u.target.closest("a")||(r.drag=!0,i.setPointerCapture(u.pointerId))}),i.addEventListener("pointermove",u=>{if(!r.drag)return;let h=n(),d=dr(-Math.atan2(u.clientX-h.x,Math.max(u.clientY-h.y,60))*180/Math.PI,-48,48);r.w=(d-r.a)*10,r.a=ys(r.a,d,.5)});let o=()=>{r.drag&&Ht.bubble(1.2,.2),r.drag=!1};i.addEventListener("pointerup",o),i.addEventListener("pointercancel",o),addEventListener("pointermove",u=>{if(a!=null&&!r.drag&&u.pointerType!=="touch"){let h=e.getBoundingClientRect();u.clientX>h.left-150&&u.clientX<h.right+150&&u.clientY>h.top-40&&u.clientY<h.bottom+150&&(r.w-=dr((u.clientX-a)*.3,-12,12))}a=u.clientX},{passive:!0}),new IntersectionObserver(([u])=>{r.on=u.isIntersecting,r.on&&(s=performance.now(),requestAnimationFrame(l))}).observe(e);function l(u){if(!r.on)return;requestAnimationFrame(l);let h=Math.min((u-s)/1e3,.032);s=u,r.drag||(r.w+=dr($r.v*.004,-40,40)*h,r.w+=(-46*r.a-3.3*r.w)*h,r.a+=r.w*h),t.style.transform=`rotate(${r.a.toFixed(3)}deg)`,r.ry=$i(r.ry,dr(Vt.nx,-1,1)*8-r.w*.1,6,h),i.style.transform=`rotateY(${r.ry.toFixed(2)}deg) rotateX(${(-Vt.ny*4).toFixed(2)}deg)`,i.style.setProperty("--hx",`${(50+r.ry*4+r.a*1.5).toFixed(1)}%`)}return{drop(){r.a=-24,r.w=0,pt.fromTo(e,{y:-560},{y:0,duration:1.05,ease:"power3.out",delay:.15})}}}function Kb(){Ct||Zi("[data-reveal]").forEach(e=>{pt.fromTo(e,{opacity:0,"--ty":"44px"},{opacity:1,"--ty":"0px",duration:.95,ease:"back.out(1.6)",scrollTrigger:{trigger:e,start:"top 90%",once:!0}})})}async function Zb(){window.__napBooted=!0;let e=document.documentElement,t=At("#loader"),i=[At("#nav"),At("main"),At(".foot"),At(".skip")].filter(Boolean),r=null,n={drop(){}};try{Hb(),Gb(),Xb(),qb(),Yb(),jb(),Zi(".btn").forEach(y=>y.addEventListener("pointerdown",()=>Ht.bubble(1.1,.16))),n=Jb()}catch(y){console.error(y)}let a=(async()=>{try{await Promise.race([Promise.all([document.fonts.load("560 96px Fraunces"),document.fonts.load("400 16px Geist")]),Do(2500)]);try{r=Vb(),e.classList.add("webgl")}catch(w){console.warn("WebGL is not available, using the static backdrop.",w),e.classList.add("no-webgl")}let y=At(".id-photo");await Promise.race([y.decode?y.decode().catch(()=>{}):Promise.resolve(),Do(2500)]),r&&(await Promise.race([r.batik,Do(4e3)]),await r.firstFrame(),await r.warm(),t&&t.isConnected&&(r.showGate(),e.classList.add("gate3d")))}catch(y){console.error(y)}})(),s=()=>{e.classList.remove("gated"),i.forEach(w=>{w.inert=!1}),r&&(r.go(),r.intro()),n.drop(),Kb(),Ct||(pt.fromTo(".hero-lede, .hero-open",{opacity:0,y:26},{opacity:1,y:0,duration:.9,ease:"back.out(1.5)",stagger:.12,delay:.3}),pt.fromTo(".hero-cta > *",{opacity:0,"--ty":"26px"},{opacity:1,"--ty":"0px",duration:.9,ease:"back.out(1.7)",stagger:.09,delay:.4}),pt.fromTo("#nav",{y:-90},{y:0,duration:1.1,ease:"elastic.out(1, 0.7)",delay:.25})),vt.refresh();let y=location.hash.length>1&&document.getElementById(decodeURIComponent(location.hash.slice(1)));y&&setTimeout(()=>y.scrollIntoView({behavior:"auto"}),60)};if(!t||!t.isConnected){await a,s();return}i.forEach(y=>{y.inert=!0});let o=At("#enter-sound"),l=At("#enter-quiet"),u=await new Promise(y=>{o.addEventListener("click",()=>{Ht.enable(),y(!0)},{once:!0}),l.addEventListener("click",()=>{Ht.mute(),y(!1)},{once:!0})}),h=At("#sound");h&&(h.setAttribute("aria-pressed",String(Ht.on)),h.title=Ht.on?"Sound on":"Sound off");let d=At("#gate"),c=At("#count"),p=At("#loader-count"),f=At("#loader-fill"),x=Ct?1.2:u?3.4:1.6,_=performance.now();a.then(()=>{r&&r.gateLoad(Math.max(.4,x-(performance.now()-_)/1e3))});let m=null;if(u)try{let y=Ht.context();y&&(m=Nb(y,y.destination,x))}catch(y){console.warn(y)}pt.to(d,{opacity:0,y:-12,duration:Ct?0:.25,onComplete:()=>{d.hidden=!0}}),c.hidden=!1,Ct||pt.fromTo(c,{opacity:0,scale:.94},{opacity:1,scale:1,duration:.45,ease:"back.out(1.6)"});let S={p:0},M=()=>{p.textContent=Math.round(S.p),f.style.transform=`scaleX(${S.p/100})`};if(pt.ticker.lagSmoothing(0),await Promise.all([pt.to(S,{p:99,duration:x,ease:u?"power1.in":"power1.inOut",onUpdate:M}),a]),S.p=100,M(),pt.ticker.lagSmoothing(500,33),m){let y=m.hit();Ht.music(!0,y+2.6),await Do(60)}let v=document.createElement("div");v.className="flash",v.setAttribute("aria-hidden","true"),document.body.appendChild(v),pt.timeline({onComplete:()=>v.remove()}).to(v,{opacity:Ct?0:.85,duration:.07}).to(v,{opacity:0,duration:.7,ease:"power2.out"}),Ct||pt.to(".loader-num",{scale:1.14,duration:.3,ease:"power2.out"}),Ct||pt.to(c,{opacity:0,duration:.24,delay:.08,ease:"power2.in"}),pt.to(t,{opacity:0,duration:Ct?0:.65,delay:.05,ease:"power2.inOut",onComplete:()=>t.remove()}),r&&r.gatePass(),Ct?s():setTimeout(s,320)}Zb();
