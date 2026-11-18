/* Portfolio of Naufal Abiyyu Permana. Three.js (MIT), GSAP (GreenSock standard license), simplex noise by Ian McEwan and Stefan Gustavson (MIT). */
var mg=0,Md=1,gg=2,No=1,vg=2,Ss=3,Gn=0,xi=1,Tr=2,Wn=0,Ts=1,Sd=2,Td=3,bd=4,_g=5,Sa=100,xg=101,yg=102,Mg=103,Sg=104,Tg=200,bg=201,Eg=202,wg=203,Ed=204,wd=205,Ag=206,Rg=207,Pg=208,Cg=209,Lg=210,Ig=211,Dg=212,Ng=213,Ug=214,xu=0,yu=1,Mu=2,bs=3,Su=4,Tu=5,bu=6,Eu=7,wu=0,Og=1,Fg=2,Kr=0,Ad=1,Rd=2,Pd=3,Au=4,Cd=5,Ld=6,Id=7,Dd=300,Ta=301,Es=302,Ru=303,Pu=304,Uo=1e3,Zr=1001,Cu=1002,mi=1003,zg=1004,Oo=1005,Pi=1006,Lu=1007,br=1008,Zi=1009,Nd=1010,Ud=1011,ws=1012,Iu=1013,Dr=1014,Er=1015,Nr=1016,Du=1017,Nu=1018,ba=1020,Od=35902,Fd=35899,zd=1021,Bd=1022,Ur=1023,gn=1026,vn=1027,Uu=1028,Ou=1029,Xn=1030,Fu=1031,zu=1033,Fo=33776,zo=33777,Bo=33778,ko=33779,Bu=35840,ku=35841,Vu=35842,Hu=35843,Gu=36196,Wu=37492,Xu=37496,qu=37488,ju=37489,Vo=37490,Yu=37491,Ju=37808,Ku=37809,Zu=37810,$u=37811,Qu=37812,ec=37813,tc=37814,ic=37815,rc=37816,nc=37817,ac=37818,sc=37819,oc=37820,lc=37821,uc=36492,cc=36494,hc=36495,dc=36283,pc=36284,Ho=36285,fc=36286,Go=2300,mc=2301,gc=2302,kd=2303,Vd=2400,Hd=2401,Gd=2402,Bg=3200,Wo=0,kg=1,_n="",zi="srgb",Xo="srgb-linear",qo="linear",Pt="srgb",vc=7680,Vg=519,Hg=512,Gg=513,Wg=514,Wd=515,Xg=516,qg=517,Xd=518,qd=519,jg=35044,jd="300 es",wr=2e3,As=2001;function Yg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Jg(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function jo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Kg(){let e=jo("canvas");return e.style.display="block",e}var Yd={},Ea=null;function Jd(...e){let t="THREE."+e.shift();Ea?Ea("log",t,...e):console.log(t,...e)}function Kd(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function et(...e){e=Kd(e);let t="THREE."+e.shift();if(Ea)Ea("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function it(...e){e=Kd(e);let t="THREE."+e.shift();if(Ea)Ea("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function wa(...e){let t=e.join(" ");t in Yd||(Yd[t]=!0,et(...e))}function Zg(e,t,i){return new Promise(function(r,n){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:n();break;case e.TIMEOUT_EXPIRED:setTimeout(a,i);break;default:r()}}setTimeout(a,i)})}var $g={[xu]:xu,[Mu]:bu,[Su]:Su,[bs]:Tu,[yu]:yu,[bu]:Mu,[Eu]:Eu,[Tu]:bs},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let n=0,a=r.length;n<a;n++)r[n].call(this,e);e.target=null}}},yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,Rs=Math.PI/180,Ps=180/Math.PI;function jn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yi[e&255]+yi[e>>8&255]+yi[e>>16&255]+yi[e>>24&255]+"-"+yi[t&255]+yi[t>>8&255]+"-"+yi[t>>16&15|64]+yi[t>>24&255]+"-"+yi[i&63|128]+yi[i>>8&255]+"-"+yi[i>>16&255]+yi[i>>24&255]+yi[r&255]+yi[r>>8&255]+yi[r>>16&255]+yi[r>>24&255]).toLowerCase()}function ct(e,t,i){return Math.max(t,Math.min(i,e))}function _c(e,t){return(e%t+t)%t}function Qg(e,t,i,r,n){return r+(e-t)*(n-r)/(i-t)}function ev(e,t,i){return e!==t?(i-e)/(t-e):0}function Cs(e,t,i){return(1-i)*e+i*t}function tv(e,t,i,r){return Cs(e,t,1-Math.exp(-i*r))}function iv(e,t=1){return t-Math.abs(_c(e,t*2)-t)}function rv(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function nv(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function av(e,t){return e+Math.floor(Math.random()*(t-e+1))}function sv(e,t){return e+Math.random()*(t-e)}function ov(e){return e*(.5-Math.random())}function lv(e){e!==void 0&&(Zd=e);let t=Zd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uv(e){return e*Rs}function cv(e){return e*Ps}function hv(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function dv(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function $d(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function pv(e,t,i,r,n){let a=Math.cos,s=Math.sin,o=a(i/2),l=s(i/2),u=a((t+r)/2),h=s((t+r)/2),d=a((t-r)/2),c=s((t-r)/2),p=a((r-t)/2),m=s((r-t)/2);switch(n){case"XYX":e.set(o*h,l*d,l*c,o*u);break;case"YZY":e.set(l*c,o*h,l*d,o*u);break;case"ZXZ":e.set(l*d,l*c,o*h,o*u);break;case"XZX":e.set(o*h,l*m,l*p,o*u);break;case"YXY":e.set(l*p,o*h,l*m,o*u);break;case"ZYZ":e.set(l*m,l*p,o*h,o*u);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function xc(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qd(e,t){if(t.constructor===Float32Array)return e;let i=xc(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function ep(e,t){if(t.constructor===Float32Array)return e;let i=xc(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}var fv={DEG2RAD:Rs,RAD2DEG:Ps,generateUUID:jn,clamp:ct,euclideanModulo:_c,mapLinear:Qg,inverseLerp:ev,lerp:Cs,damp:tv,pingpong:iv,smoothstep:rv,smootherstep:nv,randInt:av,randFloat:sv,randFloatSpread:ov,seededRandom:lv,degToRad:uv,radToDeg:cv,isPowerOfTwo:hv,ceilPowerOfTwo:dv,floorPowerOfTwo:$d,setQuaternionFromProperEuler:pv,normalize:ep,denormalize:Qd},tp=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6],this.y=n[1]*i+n[4]*r+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ct(this.x,t.x,i.x),this.y=ct(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ct(this.x,t,i),this.y=ct(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ct(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),n=Math.sin(i),a=this.x-t.x,s=this.y-t.y;return this.x=a*r-s*n+t.x,this.y=a*n+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;var Fe=tp,$r=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,a,s){let o=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=n[a+0],c=n[a+1],p=n[a+2],m=n[a+3];if(h!==m||o!==d||l!==c||u!==p){let x=o*d+l*c+u*p+h*m;x<0&&(d=-d,c=-c,p=-p,m=-m,x=-x);let _=1-s;if(x<.9995){let f=Math.acos(x),S=Math.sin(f);_=Math.sin(_*f)/S,s=Math.sin(s*f)/S,o=o*_+d*s,l=l*_+c*s,u=u*_+p*s,h=h*_+m*s}else{o=o*_+d*s,l=l*_+c*s,u=u*_+p*s,h=h*_+m*s;let f=1/Math.sqrt(o*o+l*l+u*u+h*h);o*=f,l*=f,u*=f,h*=f}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,n,a){let s=i[r],o=i[r+1],l=i[r+2],u=i[r+3],h=n[a],d=n[a+1],c=n[a+2],p=n[a+3];return e[t]=s*p+u*h+o*c-l*d,e[t+1]=o*p+u*d+l*h-s*c,e[t+2]=l*p+u*c+s*d-o*h,e[t+3]=u*p-s*h-o*d-l*c,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,n=e._z,a=e._order,s=Math.cos,o=Math.sin,l=s(i/2),u=s(r/2),h=s(n/2),d=o(i/2),c=o(r/2),p=o(n/2);switch(a){case"XYZ":this._x=d*u*h+l*c*p,this._y=l*c*h-d*u*p,this._z=l*u*p+d*c*h,this._w=l*u*h-d*c*p;break;case"YXZ":this._x=d*u*h+l*c*p,this._y=l*c*h-d*u*p,this._z=l*u*p-d*c*h,this._w=l*u*h+d*c*p;break;case"ZXY":this._x=d*u*h-l*c*p,this._y=l*c*h+d*u*p,this._z=l*u*p+d*c*h,this._w=l*u*h-d*c*p;break;case"ZYX":this._x=d*u*h-l*c*p,this._y=l*c*h+d*u*p,this._z=l*u*p-d*c*h,this._w=l*u*h+d*c*p;break;case"YZX":this._x=d*u*h+l*c*p,this._y=l*c*h+d*u*p,this._z=l*u*p-d*c*h,this._w=l*u*h-d*c*p;break;case"XZY":this._x=d*u*h-l*c*p,this._y=l*c*h-d*u*p,this._z=l*u*p+d*c*h,this._w=l*u*h+d*c*p;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],n=t[8],a=t[1],s=t[5],o=t[9],l=t[2],u=t[6],h=t[10],d=i+s+h;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(u-o)*c,this._y=(n-l)*c,this._z=(a-r)*c}else if(i>s&&i>h){let c=2*Math.sqrt(1+i-s-h);this._w=(u-o)/c,this._x=.25*c,this._y=(r+a)/c,this._z=(n+l)/c}else if(s>h){let c=2*Math.sqrt(1+s-i-h);this._w=(n-l)/c,this._x=(r+a)/c,this._y=.25*c,this._z=(o+u)/c}else{let c=2*Math.sqrt(1+h-i-s);this._w=(a-r)/c,this._x=(n+l)/c,this._y=(o+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,n=e._z,a=e._w,s=t._x,o=t._y,l=t._z,u=t._w;return this._x=i*u+a*s+r*l-n*o,this._y=r*u+a*o+n*s-i*l,this._z=n*u+a*l+i*o-r*s,this._w=a*u-i*s-r*o-n*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,n=e._z,a=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,n=-n,a=-a,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),u=Math.sin(l);o=Math.sin(o*l)/u,t=Math.sin(t*l)/u,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+n*t,this._w=this._w*o+a*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+n*t,this._w=this._w*o+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ip=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(rp.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(rp.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,n=this.z,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6]*n,this.y=a[1]*i+a[4]*r+a[7]*n,this.z=a[2]*i+a[5]*r+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,n=this.z,a=t.elements,s=1/(a[3]*i+a[7]*r+a[11]*n+a[15]);return this.x=(a[0]*i+a[4]*r+a[8]*n+a[12])*s,this.y=(a[1]*i+a[5]*r+a[9]*n+a[13])*s,this.z=(a[2]*i+a[6]*r+a[10]*n+a[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,n=this.z,a=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*n-o*r),h=2*(o*i-a*n),d=2*(a*r-s*i);return this.x=i+l*u+s*d-o*h,this.y=r+l*h+o*u-a*d,this.z=n+l*d+a*h-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,n=this.z,a=t.elements;return this.x=a[0]*i+a[4]*r+a[8]*n,this.y=a[1]*i+a[5]*r+a[9]*n,this.z=a[2]*i+a[6]*r+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ct(this.x,t.x,i.x),this.y=ct(this.y,t.y,i.y),this.z=ct(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ct(this.x,t,i),this.y=ct(this.y,t,i),this.z=ct(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,n=t.y,a=t.z,s=i.x,o=i.y,l=i.z;return this.x=n*l-a*o,this.y=a*s-r*l,this.z=r*o-n*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yc.copy(this).projectOnVector(t),this.sub(yc)}reflect(t){return this.sub(yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(ct(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,n=this.z-t.z;return i*i+r*r+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let n=Math.sin(i)*t;return this.x=n*Math.sin(r),this.y=Math.cos(i)*t,this.z=n*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=n,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ip.prototype.isVector3=!0;var W=ip,yc=new W,rp=new $r,np=class{constructor(t,i,r,n,a,s,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,n,a,s,o,l,u)}set(t,i,r,n,a,s,o,l,u){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=i,h[4]=a,h[5]=l,h[6]=r,h[7]=s,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,n=i.elements,a=this.elements,s=r[0],o=r[3],l=r[6],u=r[1],h=r[4],d=r[7],c=r[2],p=r[5],m=r[8],x=n[0],_=n[3],f=n[6],S=n[1],M=n[4],v=n[7],y=n[2],b=n[5],g=n[8];return a[0]=s*x+o*S+l*y,a[3]=s*_+o*M+l*b,a[6]=s*f+o*v+l*g,a[1]=u*x+h*S+d*y,a[4]=u*_+h*M+d*b,a[7]=u*f+h*v+d*g,a[2]=c*x+p*S+m*y,a[5]=c*_+p*M+m*b,a[8]=c*f+p*v+m*g,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return i*s*h-i*o*u-r*a*h+r*o*l+n*a*u-n*s*l}invert(){let t=this.elements,i=t[0],r=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=h*s-o*u,c=o*l-h*a,p=u*a-s*l,m=i*d+r*c+n*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(n*u-h*r)*x,t[2]=(o*r-n*s)*x,t[3]=c*x,t[4]=(h*i-n*l)*x,t[5]=(n*a-o*i)*x,t[6]=p*x,t[7]=(r*l-u*i)*x,t[8]=(s*i-r*a)*x,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,n,a,s,o){let l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*s+u*o)+s+t,-n*u,n*l,-n*(-u*s+l*o)+o+i,0,0,1),this}scale(t,i){return wa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mc.makeScale(t,i)),this}rotate(t){return wa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mc.makeRotation(-t)),this}translate(t,i){return wa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mc.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let n=0;n<9;n++)if(i[n]!==r[n])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;var at=np,Mc=new at,ap=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sp=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mv(){let e={enabled:!0,workingColorSpace:Xo,spaces:{},convert:function(n,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Pt&&(n.r=Qr(n.r),n.g=Qr(n.g),n.b=Qr(n.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[a].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Pt&&(n.r=Aa(n.r),n.g=Aa(n.g),n.b=Aa(n.b))),n},workingToColorSpace:function(n,a){return this.convert(n,this.workingColorSpace,a)},colorSpaceToWorking:function(n,a){return this.convert(n,a,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===_n?qo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,a=this.workingColorSpace){return n.fromArray(this.spaces[a].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,a,s){return n.copy(this.spaces[s].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xo]:{primaries:t,whitePoint:r,transfer:qo,toXYZ:ap,fromXYZ:sp,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:zi},outputColorSpaceConfig:{drawingBufferColorSpace:zi}},[zi]:{primaries:t,whitePoint:r,transfer:Pt,toXYZ:ap,fromXYZ:sp,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:zi}}}),e}var yt=mv();function Qr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Aa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ra,gv=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ra===void 0&&(Ra=jo("canvas")),Ra.width=e.width,Ra.height=e.height;let r=Ra.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ra}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let a=0;a<n.length;a++)n[a]=Qr(n[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qr(t[i]/255)*255):t[i]=Qr(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vv=0,Sc=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?n.push(Tc(r[a].image)):n.push(Tc(r[a]))}else n=Tc(r);i.url=n}return t||(e.images[this.uuid]=i),i}};function Tc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?gv.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var _v=0,bc=new W,dr=class vu extends qn{constructor(t=vu.DEFAULT_IMAGE,i=vu.DEFAULT_MAPPING,r=Zr,n=Zr,a=Pi,s=br,o=Ur,l=Zi,u=vu.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=jn(),this.name="",this.source=new Sc(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){et(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let n=this[i];if(n===void 0){et(`Texture.setValues(): property '${i}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uo:t.x=t.x-Math.floor(t.x);break;case Zr:t.x=t.x<0?0:1;break;case Cu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uo:t.y=t.y-Math.floor(t.y);break;case Zr:t.y=t.y<0?0:1;break;case Cu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dr.DEFAULT_IMAGE=null,dr.DEFAULT_MAPPING=Dd,dr.DEFAULT_ANISOTROPY=1;var op=class{constructor(t=0,i=0,r=0,n=1){this.x=t,this.y=i,this.z=r,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,n){return this.x=t,this.y=i,this.z=r,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,n=this.z,a=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*n+s[12]*a,this.y=s[1]*i+s[5]*r+s[9]*n+s[13]*a,this.z=s[2]*i+s[6]*r+s[10]*n+s[14]*a,this.w=s[3]*i+s[7]*r+s[11]*n+s[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,n,a,s=t.elements,o=s[0],l=s[4],u=s[8],h=s[1],d=s[5],c=s[9],p=s[2],m=s[6],x=s[10];if(Math.abs(l-h)<.01&&Math.abs(u-p)<.01&&Math.abs(c-m)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+p)<.1&&Math.abs(c+m)<.1&&Math.abs(o+d+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,S=(d+1)/2,M=(x+1)/2,v=(l+h)/4,y=(u+p)/4,b=(c+m)/4;return f>S&&f>M?f<.01?(r=0,n=.707106781,a=.707106781):(r=Math.sqrt(f),n=v/r,a=y/r):S>M?S<.01?(r=.707106781,n=0,a=.707106781):(n=Math.sqrt(S),r=v/n,a=b/n):M<.01?(r=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),r=y/a,n=b/a),this.set(r,n,a,i),this}let _=Math.sqrt((m-c)*(m-c)+(u-p)*(u-p)+(h-l)*(h-l));return Math.abs(_)<.001&&(_=1),this.x=(m-c)/_,this.y=(u-p)/_,this.z=(h-l)/_,this.w=Math.acos((o+d+x-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ct(this.x,t.x,i.x),this.y=ct(this.y,t.y,i.y),this.z=ct(this.z,t.z,i.z),this.w=ct(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ct(this.x,t,i),this.y=ct(this.y,t,i),this.z=ct(this.z,t,i),this.w=ct(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(ct(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};op.prototype.isVector4=!0;var kt=op,xv=class extends qn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let r=i.count;for(let n=0;n<r;n++)this.textures[n]=new dr({width:e,height:t,depth:i.depth}),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sc(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ar=class extends xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},lp=class extends dr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},yv=class extends dr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},up=class ig{constructor(t,i,r,n,a,s,o,l,u,h,d,c,p,m,x,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,n,a,s,o,l,u,h,d,c,p,m,x,_)}set(t,i,r,n,a,s,o,l,u,h,d,c,p,m,x,_){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=d,f[14]=c,f[3]=p,f[7]=m,f[11]=x,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ig().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,n=1/Pa.setFromMatrixColumn(t,0).length(),a=1/Pa.setFromMatrixColumn(t,1).length(),s=1/Pa.setFromMatrixColumn(t,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*a,i[5]=r[5]*a,i[6]=r[6]*a,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,n=t.y,a=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),u=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let c=s*h,p=s*d,m=o*h,x=o*d;i[0]=l*h,i[4]=-l*d,i[8]=u,i[1]=p+m*u,i[5]=c-x*u,i[9]=-o*l,i[2]=x-c*u,i[6]=m+p*u,i[10]=s*l}else if(t.order==="YXZ"){let c=l*h,p=l*d,m=u*h,x=u*d;i[0]=c+x*o,i[4]=m*o-p,i[8]=s*u,i[1]=s*d,i[5]=s*h,i[9]=-o,i[2]=p*o-m,i[6]=x+c*o,i[10]=s*l}else if(t.order==="ZXY"){let c=l*h,p=l*d,m=u*h,x=u*d;i[0]=c-x*o,i[4]=-s*d,i[8]=m+p*o,i[1]=p+m*o,i[5]=s*h,i[9]=x-c*o,i[2]=-s*u,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let c=s*h,p=s*d,m=o*h,x=o*d;i[0]=l*h,i[4]=m*u-p,i[8]=c*u+x,i[1]=l*d,i[5]=x*u+c,i[9]=p*u-m,i[2]=-u,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let c=s*l,p=s*u,m=o*l,x=o*u;i[0]=l*h,i[4]=x-c*d,i[8]=m*d+p,i[1]=d,i[5]=s*h,i[9]=-o*h,i[2]=-u*h,i[6]=p*d+m,i[10]=c-x*d}else if(t.order==="XZY"){let c=s*l,p=s*u,m=o*l,x=o*u;i[0]=l*h,i[4]=-d,i[8]=u*h,i[1]=c*d+x,i[5]=s*h,i[9]=p*d-m,i[2]=m*d-p,i[6]=o*h,i[10]=x*d+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mv,t,Sv)}lookAt(t,i,r){let n=this.elements;return $i.subVectors(t,i),$i.lengthSq()===0&&($i.z=1),$i.normalize(),xn.crossVectors(r,$i),xn.lengthSq()===0&&(Math.abs(r.z)===1?$i.x+=1e-4:$i.z+=1e-4,$i.normalize(),xn.crossVectors(r,$i)),xn.normalize(),Yo.crossVectors($i,xn),n[0]=xn.x,n[4]=Yo.x,n[8]=$i.x,n[1]=xn.y,n[5]=Yo.y,n[9]=$i.y,n[2]=xn.z,n[6]=Yo.z,n[10]=$i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,n=i.elements,a=this.elements,s=r[0],o=r[4],l=r[8],u=r[12],h=r[1],d=r[5],c=r[9],p=r[13],m=r[2],x=r[6],_=r[10],f=r[14],S=r[3],M=r[7],v=r[11],y=r[15],b=n[0],g=n[4],T=n[8],R=n[12],N=n[1],L=n[5],k=n[9],G=n[13],C=n[2],O=n[6],H=n[10],F=n[14],de=n[3],P=n[7],J=n[11],ce=n[15];return a[0]=s*b+o*N+l*C+u*de,a[4]=s*g+o*L+l*O+u*P,a[8]=s*T+o*k+l*H+u*J,a[12]=s*R+o*G+l*F+u*ce,a[1]=h*b+d*N+c*C+p*de,a[5]=h*g+d*L+c*O+p*P,a[9]=h*T+d*k+c*H+p*J,a[13]=h*R+d*G+c*F+p*ce,a[2]=m*b+x*N+_*C+f*de,a[6]=m*g+x*L+_*O+f*P,a[10]=m*T+x*k+_*H+f*J,a[14]=m*R+x*G+_*F+f*ce,a[3]=S*b+M*N+v*C+y*de,a[7]=S*g+M*L+v*O+y*P,a[11]=S*T+M*k+v*H+y*J,a[15]=S*R+M*G+v*F+y*ce,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],n=t[8],a=t[12],s=t[1],o=t[5],l=t[9],u=t[13],h=t[2],d=t[6],c=t[10],p=t[14],m=t[3],x=t[7],_=t[11],f=t[15],S=l*p-u*c,M=o*p-u*d,v=o*c-l*d,y=s*p-u*h,b=s*c-l*h,g=s*d-o*h;return i*(x*S-_*M+f*v)-r*(m*S-_*y+f*b)+n*(m*M-x*y+f*g)-a*(m*v-x*b+_*g)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],n=t[8],a=t[1],s=t[5],o=t[9],l=t[2],u=t[6],h=t[10];return i*(s*h-o*u)-r*(a*h-o*l)+n*(a*u-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=i,n[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],n=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],h=t[8],d=t[9],c=t[10],p=t[11],m=t[12],x=t[13],_=t[14],f=t[15],S=i*o-r*s,M=i*l-n*s,v=i*u-a*s,y=r*l-n*o,b=r*u-a*o,g=n*u-a*l,T=h*x-d*m,R=h*_-c*m,N=h*f-p*m,L=d*_-c*x,k=d*f-p*x,G=c*f-p*_,C=S*G-M*k+v*L+y*N-b*R+g*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return t[0]=(o*G-l*k+u*L)*O,t[1]=(n*k-r*G-a*L)*O,t[2]=(x*g-_*b+f*y)*O,t[3]=(c*b-d*g-p*y)*O,t[4]=(l*N-s*G-u*R)*O,t[5]=(i*G-n*N+a*R)*O,t[6]=(_*v-m*g-f*M)*O,t[7]=(h*g-c*v+p*M)*O,t[8]=(s*k-o*N+u*T)*O,t[9]=(r*N-i*k-a*T)*O,t[10]=(m*b-x*v+f*S)*O,t[11]=(d*v-h*b-p*S)*O,t[12]=(o*R-s*L-l*T)*O,t[13]=(i*L-r*R+n*T)*O,t[14]=(x*M-m*y-_*S)*O,t[15]=(h*y-d*M+c*S)*O,this}scale(t){let i=this.elements,r=t.x,n=t.y,a=t.z;return i[0]*=r,i[4]*=n,i[8]*=a,i[1]*=r,i[5]*=n,i[9]*=a,i[2]*=r,i[6]*=n,i[10]*=a,i[3]*=r,i[7]*=n,i[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),n=Math.sin(i),a=1-r,s=t.x,o=t.y,l=t.z,u=a*s,h=a*o;return this.set(u*s+r,u*o-n*l,u*l+n*o,0,u*o+n*l,h*o+r,h*l-n*s,0,u*l-n*o,h*l+n*s,a*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,n,a,s){return this.set(1,r,a,0,t,1,s,0,i,n,1,0,0,0,0,1),this}compose(t,i,r){let n=this.elements,a=i._x,s=i._y,o=i._z,l=i._w,u=a+a,h=s+s,d=o+o,c=a*u,p=a*h,m=a*d,x=s*h,_=s*d,f=o*d,S=l*u,M=l*h,v=l*d,y=r.x,b=r.y,g=r.z;return n[0]=(1-(x+f))*y,n[1]=(p+v)*y,n[2]=(m-M)*y,n[3]=0,n[4]=(p-v)*b,n[5]=(1-(c+f))*b,n[6]=(_+S)*b,n[7]=0,n[8]=(m+M)*g,n[9]=(_-S)*g,n[10]=(1-(c+x))*g,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,i,r){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let a=this.determinantAffine();if(a===0)return r.set(1,1,1),i.identity(),this;let s=Pa.set(n[0],n[1],n[2]).length(),o=Pa.set(n[4],n[5],n[6]).length(),l=Pa.set(n[8],n[9],n[10]).length();a<0&&(s=-s),Rr.copy(this);let u=1/s,h=1/o,d=1/l;return Rr.elements[0]*=u,Rr.elements[1]*=u,Rr.elements[2]*=u,Rr.elements[4]*=h,Rr.elements[5]*=h,Rr.elements[6]*=h,Rr.elements[8]*=d,Rr.elements[9]*=d,Rr.elements[10]*=d,i.setFromRotationMatrix(Rr),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,n,a,s,o=wr,l=!1){let u=this.elements,h=2*a/(i-t),d=2*a/(r-n),c=(i+t)/(i-t),p=(r+n)/(r-n),m,x;if(l)m=a/(s-a),x=s*a/(s-a);else if(o===wr)m=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===As)m=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,i,r,n,a,s,o=wr,l=!1){let u=this.elements,h=2/(i-t),d=2/(r-n),c=-(i+t)/(i-t),p=-(r+n)/(r-n),m,x;if(l)m=1/(s-a),x=s/(s-a);else if(o===wr)m=-2/(s-a),x=-(s+a)/(s-a);else if(o===As)m=-1/(s-a),x=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=m,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};up.prototype.isMatrix4=!0;var Ot=up,Pa=new W,Rr=new Ot,Mv=new W(0,0,0),Sv=new W(1,1,1),xn=new W,Yo=new W,$i=new W,cp=new Ot,hp=new $r,Yn=class rg{constructor(t=0,i=0,r=0,n=rg.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,n=this._order){return this._x=t,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let n=t.elements,a=n[0],s=n[4],o=n[8],l=n[1],u=n[5],h=n[9],d=n[2],c=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cp,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return hp.setFromEuler(this),this.setFromQuaternion(hp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var dp=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tv=0,pp=new W,Ca=new $r,en=new Ot,Jo=new W,Ls=new W,bv=new W,Ev=new $r,fp=new W(1,0,0),mp=new W(0,1,0),gp=new W(0,0,1),vp={type:"added"},wv={type:"removed"},La={type:"childadded",child:null},Ec={type:"childremoved",child:null},Ci=class _u extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_u.DEFAULT_UP.clone();let t=new W,i=new Yn,r=new $r,n=new W(1,1,1);function a(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ot},normalMatrix:{value:new at}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=_u.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_u.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ca.setFromAxisAngle(t,i),this.quaternion.multiply(Ca),this}rotateOnWorldAxis(t,i){return Ca.setFromAxisAngle(t,i),this.quaternion.premultiply(Ca),this}rotateX(t){return this.rotateOnAxis(fp,t)}rotateY(t){return this.rotateOnAxis(mp,t)}rotateZ(t){return this.rotateOnAxis(gp,t)}translateOnAxis(t,i){return pp.copy(t).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(fp,t)}translateY(t){return this.translateOnAxis(mp,t)}translateZ(t){return this.translateOnAxis(gp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jo.copy(t):Jo.set(t,i,r);let n=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ls,Jo,this.up):en.lookAt(Jo,Ls,this.up),this.quaternion.setFromRotationMatrix(en),n&&(en.extractRotation(n.matrixWorld),Ca.setFromRotationMatrix(en),this.quaternion.premultiply(Ca.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(it("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vp),La.child=t,this.dispatchEvent(La),La.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(wv),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vp),La.child=t,this.dispatchEvent(La),La.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,n=this.children.length;r<n;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,bv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Ev,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,n=t.z,a=this.matrix.elements;a[12]+=i-a[0]*i-a[4]*r-a[8]*n,a[13]+=r-a[1]*i-a[5]*r-a[9]*n,a[14]+=n-a[2]*i-a[6]*r-a[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let d=l[u];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(t.materials,this.material[l]));n.material=o}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(a(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),u=s(t.textures),h=s(t.images),d=s(t.shapes),c=s(t.skeletons),p=s(t.animations),m=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),m.length>0&&(r.nodes=m)}return r.object=n,r;function s(o){let l=[];for(let u in o){let h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let n=t.children[r];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ci.DEFAULT_UP=new W(0,1,0),Ci.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=class extends Ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},Av={type:"move"},wc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,a=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let m of e.hand.values()){let x=t.getJointPose(m,i),_=this._getHandJoint(l,m);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),c=.02,p=.005;l.inputState.pinching&&d>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Ac(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var rt=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=_c(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=Ac(a,n,e+1/3),this.g=Ac(a,n,e),this.b=Ac(a,n,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=zi){function i(n){n!==void 0&&parseFloat(n)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n,a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(n[4]),this.setRGB(Math.min(100,parseFloat(n[1]))/100,Math.min(100,parseFloat(n[2]))/100,Math.min(100,parseFloat(n[3]))/100,t);break;case"hsl":case"hsla":if(n=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zi){let i=_p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zi){return yt.workingToColorSpace(Mi.copy(this),e),Math.round(ct(Mi.r*255,0,255))*65536+Math.round(ct(Mi.g*255,0,255))*256+Math.round(ct(Mi.b*255,0,255))}getHexString(e=zi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Mi.copy(this),t);let i=Mi.r,r=Mi.g,n=Mi.b,a=Math.max(i,r,n),s=Math.min(i,r,n),o,l,u=(s+a)/2;if(s===a)o=0,l=0;else{let h=a-s;switch(l=u<=.5?h/(a+s):h/(2-a-s),a){case i:o=(r-n)/h+(r<n?6:0);break;case r:o=(n-i)/h+2;break;case n:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Mi.copy(this),t),e.r=Mi.r,e.g=Mi.g,e.b=Mi.b,e}getStyle(e=zi){yt.workingToColorSpace(Mi.copy(this),e);let t=Mi.r,i=Mi.g,r=Mi.b;return e!==zi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Ko);let i=Cs(yn.h,Ko.h,t),r=Cs(yn.s,Ko.s,t),n=Cs(yn.l,Ko.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mi=new rt;rt.NAMES=_p;var Rc=class extends Ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pr=new W,tn=new W,Pc=new W,rn=new W,Ia=new W,Da=new W,xp=new W,Cc=new W,Lc=new W,Ic=new W,Dc=new kt,Nc=new kt,Uc=new kt,Is=class xs{constructor(t=new W,i=new W,r=new W){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,n){n.subVectors(r,i),Pr.subVectors(t,i),n.cross(Pr);let a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,i,r,n,a){Pr.subVectors(n,i),tn.subVectors(r,i),Pc.subVectors(t,i);let s=Pr.dot(Pr),o=Pr.dot(tn),l=Pr.dot(Pc),u=tn.dot(tn),h=tn.dot(Pc),d=s*u-o*o;if(d===0)return a.set(0,0,0),null;let c=1/d,p=(u*l-o*h)*c,m=(s*h-o*l)*c;return a.set(1-p-m,m,p)}static containsPoint(t,i,r,n){return this.getBarycoord(t,i,r,n,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getInterpolation(t,i,r,n,a,s,o,l){return this.getBarycoord(t,i,r,n,rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,rn.x),l.addScaledVector(s,rn.y),l.addScaledVector(o,rn.z),l)}static getInterpolatedAttribute(t,i,r,n,a,s){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(t,i),Nc.fromBufferAttribute(t,r),Uc.fromBufferAttribute(t,n),s.setScalar(0),s.addScaledVector(Dc,a.x),s.addScaledVector(Nc,a.y),s.addScaledVector(Uc,a.z),s}static isFrontFacing(t,i,r,n){return Pr.subVectors(r,i),tn.subVectors(t,i),Pr.cross(tn).dot(n)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,n){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,i,r,n){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pr.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Pr.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xs.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xs.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,n,a){return xs.getInterpolation(t,this.a,this.b,this.c,i,r,n,a)}containsPoint(t){return xs.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xs.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,n=this.b,a=this.c,s,o;Ia.subVectors(n,r),Da.subVectors(a,r),Cc.subVectors(t,r);let l=Ia.dot(Cc),u=Da.dot(Cc);if(l<=0&&u<=0)return i.copy(r);Lc.subVectors(t,n);let h=Ia.dot(Lc),d=Da.dot(Lc);if(h>=0&&d<=h)return i.copy(n);let c=l*d-h*u;if(c<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),i.copy(r).addScaledVector(Ia,s);Ic.subVectors(t,a);let p=Ia.dot(Ic),m=Da.dot(Ic);if(m>=0&&p<=m)return i.copy(a);let x=p*u-l*m;if(x<=0&&u>=0&&m<=0)return o=u/(u-m),i.copy(r).addScaledVector(Da,o);let _=h*m-p*d;if(_<=0&&d-h>=0&&p-m>=0)return xp.subVectors(a,n),o=(d-h)/(d-h+(p-m)),i.copy(n).addScaledVector(xp,o);let f=1/(_+x+c);return s=x*f,o=c*f,i.copy(r).addScaledVector(Ia,s).addScaledVector(Da,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Cr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,s=n.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Cr):Cr.fromBufferAttribute(n,a),Cr.applyMatrix4(e.matrixWorld),this.expandByPoint(Cr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}let r=e.children;for(let n=0,a=r.length;n<a;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cr),Cr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),$o.subVectors(this.max,Ds),Na.subVectors(e.a,Ds),Ua.subVectors(e.b,Ds),Oa.subVectors(e.c,Ds),Mn.subVectors(Ua,Na),Sn.subVectors(Oa,Ua),Zn.subVectors(Na,Oa);let t=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Zn.z,Zn.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Zn.z,0,-Zn.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Zn.y,Zn.x,0];return!Oc(t,Na,Ua,Oa,$o)||(t=[1,0,0,0,1,0,0,0,1],!Oc(t,Na,Ua,Oa,$o))?!1:(Qo.crossVectors(Mn,Sn),t=[Qo.x,Qo.y,Qo.z],Oc(t,Na,Ua,Oa,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nn=[new W,new W,new W,new W,new W,new W,new W,new W],Cr=new W,Zo=new Kn,Na=new W,Ua=new W,Oa=new W,Mn=new W,Sn=new W,Zn=new W,Ds=new W,$o=new W,Qo=new W,$n=new W;function Oc(e,t,i,r,n){for(let a=0,s=e.length-3;a<=s;a+=3){$n.fromArray(e,a);let o=n.x*Math.abs($n.x)+n.y*Math.abs($n.y)+n.z*Math.abs($n.z),l=t.dot($n),u=i.dot($n),h=r.dot($n);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}var ei=new W,el=new Fe,Rv=0,Or=class extends qn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jg,this.updateRanges=[],this.gpuType=Er,this.version=0,this._normalizationScale=e!==void 0?xc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix3(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ep(e,this.array)}},yp=class extends Or{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Mp=class extends Or{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ti=class extends Or{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pv=new Kn,Ns=new W,Fc=new W,Fa=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Pv.setFromPoints(e).getCenter(i);let r=0;for(let n=0,a=e.length;n<a;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);let t=Ns.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Fc)),this.expandByPoint(Ns.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cv=0,pr=new Ot,zc=new Ci,za=new W,Qi=new Kn,Us=new Kn,ci=new W,fr=class ng extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yg(t)?Mp:yp)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let a=new at().getNormalMatrix(t);r.applyNormalMatrix(a),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pr.makeRotationFromQuaternion(t),this.applyMatrix4(pr),this}rotateX(t){return pr.makeRotationX(t),this.applyMatrix4(pr),this}rotateY(t){return pr.makeRotationY(t),this.applyMatrix4(pr),this}rotateZ(t){return pr.makeRotationZ(t),this.applyMatrix4(pr),this}translate(t,i,r){return pr.makeTranslation(t,i,r),this.applyMatrix4(pr),this}scale(t,i,r){return pr.makeScale(t,i,r),this.applyMatrix4(pr),this}lookAt(t){return zc.lookAt(t),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(za).negate(),this.translate(za.x,za.y,za.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let n=0,a=t.length;n<a;n++){let s=t[n];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ti(r,3))}else{let r=Math.min(t.length,i.count);for(let n=0;n<r;n++){let a=t[n];i.setXYZ(n,a.x,a.y,a.z||0)}t.length>i.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,n=i.length;r<n;r++){let a=i[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(ci.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(ci),ci.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(ci)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let r=this.boundingSphere.center;if(Qi.setFromBufferAttribute(t),i)for(let a=0,s=i.length;a<s;a++){let o=i[a];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(ci.addVectors(Qi.min,Us.min),Qi.expandByPoint(ci),ci.addVectors(Qi.max,Us.max),Qi.expandByPoint(ci)):(Qi.expandByPoint(Us.min),Qi.expandByPoint(Us.max))}Qi.getCenter(r);let n=0;for(let a=0,s=t.count;a<s;a++)ci.fromBufferAttribute(t,a),n=Math.max(n,r.distanceToSquared(ci));if(i)for(let a=0,s=i.length;a<s;a++){let o=i[a],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)ci.fromBufferAttribute(o,u),l&&(za.fromBufferAttribute(t,u),ci.add(za)),n=Math.max(n,r.distanceToSquared(ci))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,n=i.normal,a=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Or(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],u=new Uint8Array(r.count);for(let R=0;R<r.count;R++)o[R]=new W,l[R]=new W;let h=new W,d=new W,c=new W,p=new Fe,m=new Fe,x=new Fe,_=new W,f=new W;function S(R,N,L){u[R]=u[N]=u[L]=1,h.fromBufferAttribute(r,R),d.fromBufferAttribute(r,N),c.fromBufferAttribute(r,L),p.fromBufferAttribute(a,R),m.fromBufferAttribute(a,N),x.fromBufferAttribute(a,L),d.sub(h),c.sub(h),m.sub(p),x.sub(p);let k=1/(m.x*x.y-x.x*m.y);isFinite(k)&&(_.copy(d).multiplyScalar(x.y).addScaledVector(c,-m.y).multiplyScalar(k),f.copy(c).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(k),o[R].add(_),o[N].add(_),o[L].add(_),l[R].add(f),l[N].add(f),l[L].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,N=M.length;R<N;++R){let L=M[R],k=L.start,G=L.count;for(let C=k,O=k+G;C<O;C+=3)S(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let v=new W,y=new W,b=new W,g=new W;function T(R){b.fromBufferAttribute(n,R),g.copy(b);let N=o[R];v.copy(N),v.sub(b.multiplyScalar(b.dot(N))).normalize(),y.crossVectors(g,N);let L=y.dot(l[R])<0?-1:1;s.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,N=r.count;R<N;++R)u[R]&&T(R);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Or(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);let n=new W,a=new W,s=new W,o=new W,l=new W,u=new W,h=new W,d=new W;if(t)for(let c=0,p=t.count;c<p;c+=3){let m=t.getX(c+0),x=t.getX(c+1),_=t.getX(c+2);n.fromBufferAttribute(i,m),a.fromBufferAttribute(i,x),s.fromBufferAttribute(i,_),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(r,m),l.fromBufferAttribute(r,x),u.fromBufferAttribute(r,_),o.add(h),l.add(h),u.add(h),r.setXYZ(m,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(_,u.x,u.y,u.z)}else for(let c=0,p=i.count;c<p;c+=3)n.fromBufferAttribute(i,c+0),a.fromBufferAttribute(i,c+1),s.fromBufferAttribute(i,c+2),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),r.setXYZ(c+0,h.x,h.y,h.z),r.setXYZ(c+1,h.x,h.y,h.z),r.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)ci.fromBufferAttribute(t,i),ci.normalize(),t.setXYZ(i,ci.x,ci.y,ci.z)}toNonIndexed(){function t(o,l){let u=o.array,h=o.itemSize,d=o.normalized,c=new u.constructor(l.length*h),p=0,m=0;for(let x=0,_=l.length;x<_;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)c[m++]=u[p++]}return new Or(c,h,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new ng,r=this.index.array,n=this.attributes;for(let o in n){let l=n[o],u=t(l,r);i.setAttribute(o,u)}let a=this.morphAttributes;for(let o in a){let l=[],u=a[o];for(let h=0,d=u.length;h<d;h++){let c=u[h],p=t(c,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];i.addGroup(u.start,u.count,u.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let u=r[l];t.data.attributes[l]=u.toJSON(t.data)}let n={},a=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],h=[];for(let d=0,c=u.length;d<c;d++){let p=u[d];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let n=t.attributes;for(let u in n){let h=n[u];this.setAttribute(u,h.clone(i))}let a=t.morphAttributes;for(let u in a){let h=[],d=a[u];for(let c=0,p=d.length;c<p;c++)h.push(d[c].clone(i));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,h=s.length;u<h;u++){let d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bc=new W,Lv=new W,Iv=new at,Tn=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Bc.subVectors(i,t).cross(Lv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Bc),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/n;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Iv.getNormalMatrix(e),r=this.coplanarPoint(Bc).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dv=0,Qn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ts,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=wd,this.blendEquation=Sa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vc,this.stencilZFail=vc,this.stencilZPass=vc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(n=>n.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){let a=[];for(let s in n){let o=n[s];delete o.metadata,a.push(o)}return a}if(t){let n=r(e.textures),a=r(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Tn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},an=new W,kc=new W,tl=new W,il=new W,Sp=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){kc.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),il.copy(this.origin).sub(kc);let n=e.distanceTo(t)*.5,a=-this.direction.dot(tl),s=il.dot(this.direction),o=-il.dot(tl),l=il.lengthSq(),u=Math.abs(1-a*a),h,d,c,p;if(u>0)if(h=a*o-s,d=a*s-o,p=n*u,h>=0)if(d>=-p)if(d<=p){let m=1/u;h*=m,d*=m,c=h*(h+a*d+2*s)+d*(a*h+d+2*o)+l}else d=n,h=Math.max(0,-(a*d+s)),c=-h*h+d*(d+2*o)+l;else d=-n,h=Math.max(0,-(a*d+s)),c=-h*h+d*(d+2*o)+l;else d<=-p?(h=Math.max(0,-(-a*n+s)),d=h>0?-n:Math.min(Math.max(-n,-o),n),c=-h*h+d*(d+2*o)+l):d<=p?(h=0,d=Math.min(Math.max(-n,-o),n),c=d*(d+2*o)+l):(h=Math.max(0,-(a*n+s)),d=h>0?n:Math.min(Math.max(-n,-o),n),c=-h*h+d*(d+2*o)+l);else d=a>0?-n:n,h=Math.max(0,-(a*d+s)),c=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(kc).addScaledVector(tl,d),c}intersectSphere(e,t){if(e.radius<0)return null;an.subVectors(e.center,this.origin);let i=an.dot(this.direction),r=an.dot(an)-i*i,n=e.radius*e.radius;if(r>n)return null;let a=Math.sqrt(n-r),s=i-a,o=i+a;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,a,s,o,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(n=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||n>r||((n>i||isNaN(i))&&(i=n),(a<r||isNaN(r))&&(r=a),h>=0?(s=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,i,r,n){let a=this.origin,s=this.direction,o=s.x,l=s.y,u=s.z,h=e.x-a.x,d=e.y-a.y,c=e.z-a.z,p=t.x-a.x,m=t.y-a.y,x=t.z-a.z,_=i.x-a.x,f=i.y-a.y,S=i.z-a.z,M=Math.abs(o),v=Math.abs(l),y=Math.abs(u),b,g,T,R,N,L,k,G,C,O,H,F;if(M>=v&&M>=y?(T=o,L=h,C=p,F=_,o>=0?(b=l,g=u,R=d,N=c,k=m,G=x,O=f,H=S):(b=u,g=l,R=c,N=d,k=x,G=m,O=S,H=f)):v>=y?(T=l,L=d,C=m,F=f,l>=0?(b=u,g=o,R=c,N=h,k=x,G=p,O=S,H=_):(b=o,g=u,R=h,N=c,k=p,G=x,O=_,H=S)):(T=u,L=c,C=x,F=S,u>=0?(b=o,g=l,R=h,N=d,k=p,G=m,O=_,H=f):(b=l,g=o,R=d,N=h,k=m,G=p,O=f,H=_)),T===0)return null;let de=b/T,P=g/T,J=1/T,ce=R-de*L,Ie=N-P*L,Z=k-de*C,ve=G-P*C,Ce=O-de*F,De=H-P*F,ze=Ce*ve-De*Z,ye=ce*De-Ie*Ce,Ge=Z*Ie-ve*ce;if(r){if(ze<0||ye<0||Ge<0)return null}else if((ze<0||ye<0||Ge<0)&&(ze>0||ye>0||Ge>0))return null;let Xe=ze+ye+Ge;if(Xe===0)return null;let ge=J*(ze*L+ye*C+Ge*F);return(Xe>0?ge<0:ge>0)?null:this.at(ge/Xe,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rl=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tp=new Ot,ea=new Sp,nl=new Fa,bp=new W,al=new W,sl=new W,ol=new W,Vc=new W,ll=new W,Ep=new W,ul=new W,Lt=class extends Ci{constructor(e=new fr,t=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(n&&s){ll.set(0,0,0);for(let o=0,l=n.length;o<l;o++){let u=s[o],h=n[o];u!==0&&(Vc.fromBufferAttribute(h,e),a?ll.addScaledVector(Vc,u):ll.addScaledVector(Vc.sub(t),u))}t.add(ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(n),ea.copy(e.ray).recast(e.near),!(nl.containsPoint(ea.origin)===!1&&(ea.intersectSphere(nl,bp)===null||ea.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(Tp.copy(n).invert(),ea.copy(e.ray).applyMatrix4(Tp),!(i.boundingBox!==null&&ea.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}_computeIntersections(e,t,i){let r,n=this.geometry,a=this.material,s=n.index,o=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv1,h=n.attributes.normal,d=n.groups,c=n.drawRange;if(s!==null)if(Array.isArray(a))for(let p=0,m=d.length;p<m;p++){let x=d[p],_=a[x.materialIndex],f=Math.max(x.start,c.start),S=Math.min(s.count,Math.min(x.start+x.count,c.start+c.count));for(let M=f,v=S;M<v;M+=3){let y=s.getX(M),b=s.getX(M+1),g=s.getX(M+2);r=cl(this,_,e,i,l,u,h,y,b,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),m=Math.min(s.count,c.start+c.count);for(let x=p,_=m;x<_;x+=3){let f=s.getX(x),S=s.getX(x+1),M=s.getX(x+2);r=cl(this,a,e,i,l,u,h,f,S,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let p=0,m=d.length;p<m;p++){let x=d[p],_=a[x.materialIndex],f=Math.max(x.start,c.start),S=Math.min(o.count,Math.min(x.start+x.count,c.start+c.count));for(let M=f,v=S;M<v;M+=3){let y=M,b=M+1,g=M+2;r=cl(this,_,e,i,l,u,h,y,b,g),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,c.start),m=Math.min(o.count,c.start+c.count);for(let x=p,_=m;x<_;x+=3){let f=x,S=x+1,M=x+2;r=cl(this,a,e,i,l,u,h,f,S,M),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function Nv(e,t,i,r,n,a,s,o){let l;if(t.side===xi?l=r.intersectTriangle(s,a,n,!0,o):l=r.intersectTriangle(n,a,s,t.side===Gn,o),l===null)return null;ul.copy(o),ul.applyMatrix4(e.matrixWorld);let u=i.ray.origin.distanceTo(ul);return u<i.near||u>i.far?null:{distance:u,point:ul.clone(),object:e}}function cl(e,t,i,r,n,a,s,o,l,u){e.getVertexPosition(o,al),e.getVertexPosition(l,sl),e.getVertexPosition(u,ol);let h=Nv(e,t,i,r,al,sl,ol,Ep);if(h){let d=new W;Is.getBarycoord(Ep,al,sl,ol,d),n&&(h.uv=Is.getInterpolatedAttribute(n,o,l,u,d,new Fe)),a&&(h.uv1=Is.getInterpolatedAttribute(a,o,l,u,d,new Fe)),s&&(h.normal=Is.getInterpolatedAttribute(s,o,l,u,d,new W),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new W,materialIndex:0};Is.getNormal(al,sl,ol,c.normal),h.face=c,h.barycoord=d}return h}var wp=class extends dr{constructor(e=null,t=1,i=1,r,n,a,s,o,l=mi,u=mi,h,d){super(null,a,s,o,l,u,r,n,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ap=class extends Or{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ba=new Ot,Rp=new Ot,hl=[],Pp=new Kn,Uv=new Ot,Os=new Lt,Fs=new Fa,Cp=class extends Lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ap(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Uv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ba),Pp.copy(e.boundingBox).applyMatrix4(Ba),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ba),Fs.copy(e.boundingSphere).applyMatrix4(Ba),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,a=e*n+1;for(let s=0;s<i.length;s++)i[s]=r[a+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(i),e.ray.intersectsSphere(Fs)!==!1))for(let n=0;n<r;n++){this.getMatrixAt(n,Ba),Rp.multiplyMatrices(i,Ba),Os.matrixWorld=Rp,Os.raycast(e,hl);for(let a=0,s=hl.length;a<s;a++){let o=hl[a];o.instanceId=n,o.object=this,t.push(o)}hl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ap(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wp(new Float32Array(r*this.count),r,this.count,Uu,Er));let n=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let s=this.geometry.morphTargetsRelative?1:1-a,o=r*e;return n[o]=s,n.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ta=new Fa,Ov=new Fe(.5,.5),dl=new W,zs=class{constructor(e=new Tn,t=new Tn,i=new Tn,r=new Tn,n=new Tn,a=new Tn){this.planes=[e,t,i,r,n,a]}set(e,t,i,r,n,a){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wr,i=!1){let r=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],u=n[4],h=n[5],d=n[6],c=n[7],p=n[8],m=n[9],x=n[10],_=n[11],f=n[12],S=n[13],M=n[14],v=n[15];if(r[0].setComponents(l-a,c-u,_-p,v-f).normalize(),r[1].setComponents(l+a,c+u,_+p,v+f).normalize(),r[2].setComponents(l+s,c+h,_+m,v+S).normalize(),r[3].setComponents(l-s,c-h,_-m,v-S).normalize(),i)r[4].setComponents(o,d,x,M).normalize(),r[5].setComponents(l-o,c-d,_-x,v-M).normalize();else if(r[4].setComponents(l-o,c-d,_-x,v-M).normalize(),t===wr)r[5].setComponents(l+o,c+d,_+x,v+M).normalize();else if(t===As)r[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ta)}intersectsSprite(e){ta.center.set(0,0,0);let t=Ov.distanceTo(e.center);return ta.radius=.7071067811865476+t,ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(ta)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Lp=new Ot,Fv=class ag{constructor(){this.coordinateSystem=wr,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let n=0;n<i.length;n++){let a=i[n];Lp.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),r[n]===void 0&&(r[n]=new zs),r[n].setFromProjectionMatrix(Lp,a.coordinateSystem,a.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let n=0;n<t._count;n++)i[n]===void 0&&(i[n]=new zs),i[n].copy(r[n]);return this._count=t._count,this}clone(){return new ag().copy(this)}},Ip=class extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new Ot,Hc=new Sp,pl=new Fa,fl=new W,zv=class extends Ci{constructor(e=new fr,t=new Ip){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=n,e.ray.intersectsSphere(pl)===!1)return;Dp.copy(r).invert(),Hc.copy(e.ray).applyMatrix4(Dp);let s=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,u=i.attributes.position;if(l!==null){let h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let c=h,p=d;c<p;c++){let m=l.getX(c);fl.fromBufferAttribute(u,m),Np(fl,m,o,r,e,t,this)}}else{let h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let c=h,p=d;c<p;c++)fl.fromBufferAttribute(u,c),Np(fl,c,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Np(e,t,i,r,n,a,s){let o=Hc.distanceSqToPoint(e);if(o<i){let l=new W;Hc.closestPointToPoint(e,l),l.applyMatrix4(r);let u=n.ray.origin.distanceTo(l);if(u<n.near||u>n.far)return;a.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Up=class extends dr{constructor(e=[],t=Ta,i,r,n,a,s,o,l,u){super(e,t,i,r,n,a,s,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ml=class extends dr{constructor(e,t,i,r,n,a,s,o,l){super(e,t,i,r,n,a,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ka=class extends dr{constructor(e,t,i=Dr,r,n,a,s=mi,o=mi,l,u=gn,h=1){if(u!==gn&&u!==vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,n,a,s,o,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Op=class extends ka{constructor(e,t=Dr,i=Ta,r,n,a=mi,s=mi,o,l=gn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,n,a,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fp=class extends dr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Va=class sg extends fr{constructor(t=1,i=1,r=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:n,heightSegments:a,depthSegments:s};let o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);let l=[],u=[],h=[],d=[],c=0,p=0;m("z","y","x",-1,-1,r,i,t,s,a,0),m("z","y","x",1,-1,r,i,-t,s,a,1),m("x","z","y",1,1,t,r,i,n,s,2),m("x","z","y",1,-1,t,r,-i,n,s,3),m("x","y","z",1,-1,t,i,r,n,a,4),m("x","y","z",-1,-1,t,i,-r,n,a,5),this.setIndex(l),this.setAttribute("position",new ti(u,3)),this.setAttribute("normal",new ti(h,3)),this.setAttribute("uv",new ti(d,2));function m(x,_,f,S,M,v,y,b,g,T,R){let N=v/g,L=y/T,k=v/2,G=y/2,C=b/2,O=g+1,H=T+1,F=0,de=0,P=new W;for(let J=0;J<H;J++){let ce=J*L-G;for(let Ie=0;Ie<O;Ie++){let Z=Ie*N-k;P[x]=Z*S,P[_]=ce*M,P[f]=C,u.push(P.x,P.y,P.z),P[x]=0,P[_]=0,P[f]=b>0?1:-1,h.push(P.x,P.y,P.z),d.push(Ie/g),d.push(1-J/T),F+=1}}for(let J=0;J<T;J++)for(let ce=0;ce<g;ce++){let Ie=c+ce+O*J,Z=c+ce+O*(J+1),ve=c+(ce+1)+O*(J+1),Ce=c+(ce+1)+O*J;l.push(Ie,Z,Ce),l.push(Z,ve,Ce),de+=6}o.addGroup(p,de,R),p+=de,c+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sg(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Bv=class og extends fr{constructor(t=[],i=[],r=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:n};let a=[],s=[];o(n),u(r),h(),this.setAttribute("position",new ti(a,3)),this.setAttribute("normal",new ti(a.slice(),3)),this.setAttribute("uv",new ti(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let M=new W,v=new W,y=new W;for(let b=0;b<i.length;b+=3)p(i[b+0],M),p(i[b+1],v),p(i[b+2],y),l(M,v,y,S)}function l(S,M,v,y){let b=y+1,g=[];for(let T=0;T<=b;T++){g[T]=[];let R=S.clone().lerp(v,T/b),N=M.clone().lerp(v,T/b),L=b-T;for(let k=0;k<=L;k++)k===0&&T===b?g[T][k]=R:g[T][k]=R.clone().lerp(N,k/L)}for(let T=0;T<b;T++)for(let R=0;R<2*(b-T)-1;R++){let N=Math.floor(R/2);R%2===0?(c(g[T][N+1]),c(g[T+1][N]),c(g[T][N])):(c(g[T][N+1]),c(g[T+1][N+1]),c(g[T+1][N]))}}function u(S){let M=new W;for(let v=0;v<a.length;v+=3)M.x=a[v+0],M.y=a[v+1],M.z=a[v+2],M.normalize().multiplyScalar(S),a[v+0]=M.x,a[v+1]=M.y,a[v+2]=M.z}function h(){let S=new W;for(let M=0;M<a.length;M+=3){S.x=a[M+0],S.y=a[M+1],S.z=a[M+2];let v=_(S)/2/Math.PI+.5,y=f(S)/Math.PI+.5;s.push(v,1-y)}m(),d()}function d(){for(let S=0;S<s.length;S+=6){let M=s[S+0],v=s[S+2],y=s[S+4],b=Math.max(M,v,y),g=Math.min(M,v,y);b>.9&&g<.1&&(M<.2&&(s[S+0]+=1),v<.2&&(s[S+2]+=1),y<.2&&(s[S+4]+=1))}}function c(S){a.push(S.x,S.y,S.z)}function p(S,M){let v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){let S=new W,M=new W,v=new W,y=new W,b=new Fe,g=new Fe,T=new Fe;for(let R=0,N=0;R<a.length;R+=9,N+=6){S.set(a[R+0],a[R+1],a[R+2]),M.set(a[R+3],a[R+4],a[R+5]),v.set(a[R+6],a[R+7],a[R+8]),b.set(s[N+0],s[N+1]),g.set(s[N+2],s[N+3]),T.set(s[N+4],s[N+5]),y.copy(S).add(M).add(v).divideScalar(3);let L=_(y);x(b,N+0,S,L),x(g,N+2,M,L),x(T,N+4,v,L)}}function x(S,M,v,y){y<0&&S.x===1&&(s[M]=S.x-1),v.x===0&&v.z===0&&(s[M]=y/2/Math.PI+.5)}function _(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new og(t.vertices,t.indices,t.radius,t.detail)}},Lr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,n=i.length,a;t?a=t:a=e*i[n-1];let s=0,o=n-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-a,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===a)return r/(n-1);let u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let n=this.getPoint(i),a=this.getPoint(r),s=t||(n.isVector2?new Fe:new W);return s.copy(a).sub(n).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new W,r=[],n=[],a=[],s=new W,o=new Ot;for(let c=0;c<=e;c++){let p=c/e;r[c]=this.getTangentAt(p,new W)}n[0]=new W,a[0]=new W;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],s),a[0].crossVectors(r[0],n[0]);for(let c=1;c<=e;c++){if(n[c]=n[c-1].clone(),a[c]=a[c-1].clone(),s.crossVectors(r[c-1],r[c]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(ct(r[c-1].dot(r[c]),-1,1));n[c].applyMatrix4(o.makeRotationAxis(s,p))}a[c].crossVectors(r[c],n[c])}if(t===!0){let c=Math.acos(ct(n[0].dot(n[e]),-1,1));c/=e,r[0].dot(s.crossVectors(n[0],n[e]))>0&&(c=-c);for(let p=1;p<=e;p++)n[p].applyMatrix4(o.makeRotationAxis(r[p],c*p)),a[p].crossVectors(r[p],n[p])}return{tangents:r,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Gc=class extends Lr{constructor(e=0,t=0,i=1,r=1,n=0,a=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Fe){let i=t,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(a?n=0:n=r),this.aClockwise===!0&&!a&&(n===r?n=-r:n=n-r);let s=this.aStartAngle+e*n,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,c=l-this.aY;o=d*u-c*h+this.aX,l=d*h+c*u+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kv=class extends Gc{constructor(e,t,i,r,n,a){super(e,t,i,i,r,n,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wc(){let e=0,t=0,i=0,r=0;function n(a,s,o,l){e=a,t=o,i=-3*a+3*s-2*o-l,r=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){n(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,h,d){let c=(s-a)/u-(o-a)/(u+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+d)+(l-o)/d;c*=h,p*=h,n(s,o,c,p)},calc:function(a){let s=a*a,o=s*a;return e+t*a+i*s+r*o}}}var zp=new W,Bp=new W,Xc=new Wc,qc=new Wc,jc=new Wc,gl=class extends Lr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new W){let i=t,r=this.points,n=r.length,a=(n-(this.closed?0:1))*e,s=Math.floor(a),o=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/n)+1)*n:o===0&&s===n-1&&(s=n-2,o=1);let l,u;this.closed||s>0?l=r[(s-1)%n]:(Bp.subVectors(r[0],r[1]).add(r[0]),l=Bp);let h=r[s%n],d=r[(s+1)%n];if(this.closed||s+2<n?u=r[(s+2)%n]:(zp.subVectors(r[n-1],r[n-2]).add(r[n-1]),u=zp),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),c),m=Math.pow(h.distanceToSquared(d),c),x=Math.pow(d.distanceToSquared(u),c);m<1e-4&&(m=1),p<1e-4&&(p=m),x<1e-4&&(x=m),Xc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,m,x),qc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,m,x),jc.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,m,x)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),qc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),jc.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Xc.calc(o),qc.calc(o),jc.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kp(e,t,i,r,n){let a=(r-t)*.5,s=(n-i)*.5,o=e*e,l=e*o;return(2*i-2*r+a+s)*l+(-3*i+3*r-2*a-s)*o+a*e+i}function Vv(e,t){let i=1-e;return i*i*t}function Hv(e,t){return 2*(1-e)*e*t}function Gv(e,t){return e*e*t}function Bs(e,t,i,r){return Vv(e,t)+Hv(e,i)+Gv(e,r)}function Wv(e,t){let i=1-e;return i*i*i*t}function Xv(e,t){let i=1-e;return 3*i*i*e*t}function qv(e,t){return 3*(1-e)*e*e*t}function jv(e,t){return e*e*e*t}function ks(e,t,i,r,n){return Wv(e,t)+Xv(e,i)+qv(e,r)+jv(e,n)}var Vp=class extends Lr{constructor(e=new Fe,t=new Fe,i=new Fe,r=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Fe){let i=t,r=this.v0,n=this.v1,a=this.v2,s=this.v3;return i.set(ks(e,r.x,n.x,a.x,s.x),ks(e,r.y,n.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yv=class extends Lr{constructor(e=new W,t=new W,i=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new W){let i=t,r=this.v0,n=this.v1,a=this.v2,s=this.v3;return i.set(ks(e,r.x,n.x,a.x,s.x),ks(e,r.y,n.y,a.y,s.y),ks(e,r.z,n.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hp=class extends Lr{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yc=class extends Lr{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gp=class extends Lr{constructor(e=new Fe,t=new Fe,i=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Fe){let i=t,r=this.v0,n=this.v1,a=this.v2;return i.set(Bs(e,r.x,n.x,a.x),Bs(e,r.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wp=class extends Lr{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,r=this.v0,n=this.v1,a=this.v2;return i.set(Bs(e,r.x,n.x,a.x),Bs(e,r.y,n.y,a.y),Bs(e,r.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xp=class extends Lr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let i=t,r=this.points,n=(r.length-1)*e,a=Math.floor(n),s=n-a,o=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return i.set(kp(s,o.x,l.x,u.x,h.x),kp(s,o.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Fe().fromArray(r))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:kv,CatmullRomCurve3:gl,CubicBezierCurve:Vp,CubicBezierCurve3:Yv,EllipseCurve:Gc,LineCurve:Hp,LineCurve3:Yc,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:Wp,SplineCurve:Xp}),Jv=class extends Lr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),n=0;for(;n<r.length;){if(r[n]>=i){let a=r[n]-i,s=this.curves[n],o=s.getLength(),l=o===0?0:1-a/o;return s.getPointAt(l,t)}n++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,n=this.curves;r<n.length;r++){let a=n[r],s=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(s);for(let l=0;l<o.length;l++){let u=o[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new vl[r.type]().fromJSON(r))}return this.cacheLengths=null,this}},Jc=class extends Jv{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Hp(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let n=new Gp(this.currentPoint.clone(),new Fe(e,t),new Fe(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,a){let s=new Vp(this.currentPoint.clone(),new Fe(e,t),new Fe(i,r),new Fe(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,a){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,n,a),this}absarc(e,t,i,r,n,a){return this.absellipse(e,t,i,i,r,n,a),this}ellipse(e,t,i,r,n,a,s,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,n,a,s,o),this}absellipse(e,t,i,r,n,a,s,o){let l=new Gc(e,t,i,r,n,a,s,o);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Kc=class extends Jc{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Jc().fromJSON(r))}return this}};function Kv(e,t,i=2){let r=t&&t.length,n=r?t[0]*i:e.length,a=qp(e,0,n,i,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,u;if(r&&(a=t_(e,t,a,i)),e.length>80*i){o=e[0],l=e[1];let h=o,d=l;for(let c=i;c<n;c+=i){let p=e[c],m=e[c+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>d&&(d=m)}u=Math.max(h-o,d-l),u=u!==0?32767/u:0}return Vs(a,s,i,o,l,u,0),s}function qp(e,t,i,r,n){let a;if(n===d_(e,t,i,r)>0)for(let s=t;s<i;s+=r)a=Kp(s/r|0,e[s],e[s+1],a);else for(let s=i-r;s>=t;s-=r)a=Kp(s/r|0,e[s],e[s+1],a);return a&&Ha(a,a.next)&&(Ws(a),a=a.next),a}function ia(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Ha(i,i.next)||Gt(i.prev,i,i.next)===0)){if(Ws(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Vs(e,t,i,r,n,a,s){if(!e)return;!s&&a&&s_(e,r,n,a);let o=e;for(;e.prev!==e.next;){let l=e.prev,u=e.next;if(a?$v(e,r,n,a):Zv(e)){t.push(l.i,e.i,u.i),Ws(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=Qv(ia(e),t),Vs(e,t,i,r,n,a,2)):s===2&&e_(e,t,i,r,n,a):Vs(ia(e),t,i,r,n,a,1);break}}}function Zv(e){let t=e.prev,i=e,r=e.next;if(Gt(t,i,r)>=0)return!1;let n=t.x,a=i.x,s=r.x,o=t.y,l=i.y,u=r.y,h=Math.min(n,a,s),d=Math.min(o,l,u),c=Math.max(n,a,s),p=Math.max(o,l,u),m=r.next;for(;m!==t;){if(m.x>=h&&m.x<=c&&m.y>=d&&m.y<=p&&Hs(n,o,a,l,s,u,m.x,m.y)&&Gt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $v(e,t,i,r){let n=e.prev,a=e,s=e.next;if(Gt(n,a,s)>=0)return!1;let o=n.x,l=a.x,u=s.x,h=n.y,d=a.y,c=s.y,p=Math.min(o,l,u),m=Math.min(h,d,c),x=Math.max(o,l,u),_=Math.max(h,d,c),f=Zc(p,m,t,i,r),S=Zc(x,_,t,i,r),M=e.prevZ,v=e.nextZ;for(;M&&M.z>=f&&v&&v.z<=S;){if(M.x>=p&&M.x<=x&&M.y>=m&&M.y<=_&&M!==n&&M!==s&&Hs(o,h,l,d,u,c,M.x,M.y)&&Gt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=x&&v.y>=m&&v.y<=_&&v!==n&&v!==s&&Hs(o,h,l,d,u,c,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=x&&M.y>=m&&M.y<=_&&M!==n&&M!==s&&Hs(o,h,l,d,u,c,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=_&&v!==n&&v!==s&&Hs(o,h,l,d,u,c,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qv(e,t){let i=e;do{let r=i.prev,n=i.next.next;!Ha(r,n)&&Yp(r,i,i.next,n)&&Gs(r,n)&&Gs(n,r)&&(t.push(r.i,i.i,n.i),Ws(i),Ws(i.next),i=e=n),i=i.next}while(i!==e);return ia(i)}function e_(e,t,i,r,n,a){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&u_(s,o)){let l=Jp(s,o);s=ia(s,s.next),l=ia(l,l.next),Vs(s,t,i,r,n,a,0),Vs(l,t,i,r,n,a,0);return}o=o.next}s=s.next}while(s!==e)}function t_(e,t,i,r){let n=[];for(let a=0,s=t.length;a<s;a++){let o=t[a]*r,l=a<s-1?t[a+1]*r:e.length,u=qp(e,o,l,r,!1);u===u.next&&(u.steiner=!0),n.push(l_(u))}n.sort(i_);for(let a=0;a<n.length;a++)i=r_(n[a],i);return i}function i_(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),n=(t.next.y-t.y)/(t.next.x-t.x);i=r-n}return i}function r_(e,t){let i=n_(e,t);if(!i)return t;let r=Jp(i,e);return ia(r,r.next),ia(i,i.next)}function n_(e,t){let i=t,r=e.x,n=e.y,a=-1/0,s;if(Ha(e,i))return i;do{if(Ha(e,i.next))return i.next;if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>a&&(a=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,u=s.y,h=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&jp(n<u?r:a,n,l,u,n<u?a:r,n,i.x,i.y)){let d=Math.abs(n-i.y)/(r-i.x);Gs(i,e)&&(d<h||d===h&&(i.x>s.x||i.x===s.x&&a_(s,i)))&&(s=i,h=d)}i=i.next}while(i!==o);return s}function a_(e,t){return Gt(e.prev,e,t.prev)<0&&Gt(t.next,e,e.next)<0}function s_(e,t,i,r){let n=e;do n.z===0&&(n.z=Zc(n.x,n.y,t,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==e);n.prevZ.nextZ=null,n.prevZ=null,o_(n)}function o_(e){let t,i=1;do{let r=e,n;e=null;let a=null;for(t=0;r;){t++;let s=r,o=0;for(let u=0;u<i&&(o++,s=s.nextZ,!!s);u++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(n=r,r=r.nextZ,o--):(n=s,s=s.nextZ,l--),a?a.nextZ=n:e=n,n.prevZ=a,a=n;r=s}a.nextZ=null,i*=2}while(t>1);return e}function Zc(e,t,i,r,n){return e=(e-i)*n|0,t=(t-r)*n|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function l_(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function jp(e,t,i,r,n,a,s,o){return(n-s)*(t-o)>=(e-s)*(a-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(a-o)>=(n-s)*(r-o)}function Hs(e,t,i,r,n,a,s,o){return!(e===s&&t===o)&&jp(e,t,i,r,n,a,s,o)}function u_(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!c_(e,t)&&(Gs(e,t)&&Gs(t,e)&&h_(e,t)&&(Gt(e.prev,e,t.prev)||Gt(e,t.prev,t))||Ha(e,t)&&Gt(e.prev,e,e.next)>0&&Gt(t.prev,t,t.next)>0)}function Gt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Ha(e,t){return e.x===t.x&&e.y===t.y}function Yp(e,t,i,r){let n=xl(Gt(e,t,i)),a=xl(Gt(e,t,r)),s=xl(Gt(i,r,e)),o=xl(Gt(i,r,t));return!!(n!==a&&s!==o||n===0&&_l(e,i,t)||a===0&&_l(e,r,t)||s===0&&_l(i,e,r)||o===0&&_l(i,t,r))}function _l(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function xl(e){return e>0?1:e<0?-1:0}function c_(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Yp(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Gs(e,t){return Gt(e.prev,e,e.next)<0?Gt(e,t,e.next)>=0&&Gt(e,e.prev,t)>=0:Gt(e,t,e.prev)<0||Gt(e,e.next,t)<0}function h_(e,t){let i=e,r=!1,n=(e.x+t.x)/2,a=(e.y+t.y)/2;do i.y>a!=i.next.y>a&&i.next.y!==i.y&&n<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function Jp(e,t){let i=$c(e.i,e.x,e.y),r=$c(t.i,t.x,t.y),n=e.next,a=t.prev;return e.next=t,t.prev=e,i.next=n,n.prev=i,r.next=i,i.prev=r,a.next=r,r.prev=a,r}function Kp(e,t,i,r){let n=$c(e,t,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Ws(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function $c(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d_(e,t,i,r){let n=0;for(let a=t,s=i-r;a<i;a+=r)n+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return n}var p_=class{static triangulate(e,t,i=2){return Kv(e,t,i)}},yl=class lg{static area(t){let i=t.length,r=0;for(let n=i-1,a=0;a<i;n=a++)r+=t[n].x*t[a].y-t[a].x*t[n].y;return r*.5}static isClockWise(t){return lg.area(t)<0}static triangulateShape(t,i){let r=[],n=[],a=[];Zp(t),$p(r,t);let s=t.length;i.forEach(Zp);for(let l=0;l<i.length;l++)n.push(s),s+=i[l].length,$p(r,i[l]);let o=p_.triangulate(r,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Zp(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function $p(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Qp=class ug extends fr{constructor(t=new Kc([new Fe(.5,.5),new Fe(-.5,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,n=[],a=[];for(let o=0,l=t.length;o<l;o++){let u=t[o];s(u)}this.setAttribute("position",new ti(n,3)),this.setAttribute("uv",new ti(a,2)),this.computeVertexNormals();function s(o){let l=[],u=i.curveSegments!==void 0?i.curveSegments:12,h=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,m=i.bevelSize!==void 0?i.bevelSize:p-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,_=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,S=i.UVGenerator!==void 0?i.UVGenerator:f_,M,v=!1,y,b,g,T;if(f){M=f.getSpacedPoints(h),v=!0,c=!1;let le=f.isCatmullRomCurve3?f.closed:!1;y=f.computeFrenetFrames(h,le),b=new W,g=new W,T=new W}c||(_=0,p=0,m=0,x=0);let R=o.extractPoints(u),N=R.shape,L=R.holes;if(!yl.isClockWise(N)){N=N.reverse();for(let le=0,Ae=L.length;le<Ae;le++){let Ee=L[le];yl.isClockWise(Ee)&&(L[le]=Ee.reverse())}}function k(le){let Ae=10000000000000001e-36,Ee=le[0];for(let V=1;V<=le.length;V++){let Ne=V%le.length,We=le[Ne],we=We.x-Ee.x,qe=We.y-Ee.y,Qe=we*we+qe*qe,tt=Math.max(Math.abs(We.x),Math.abs(We.y),Math.abs(Ee.x),Math.abs(Ee.y)),U=Ae*tt*tt;if(Qe<=U){le.splice(Ne,1),V--;continue}Ee=We}}k(N),L.forEach(k);let G=L.length,C=N;for(let le=0;le<G;le++){let Ae=L[le];N=N.concat(Ae)}function O(le,Ae,Ee){return Ae||it("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(Ae,Ee)}let H=N.length;function F(le,Ae,Ee){let V,Ne,We,we=le.x-Ae.x,qe=le.y-Ae.y,Qe=Ee.x-le.x,tt=Ee.y-le.y,U=we*we+qe*qe,Re=we*tt-qe*Qe;if(Math.abs(Re)>Number.EPSILON){let pe=Math.sqrt(U),Se=Math.sqrt(Qe*Qe+tt*tt),fe=Ae.x-qe/pe,Pe=Ae.y+we/pe,Te=Ee.x-tt/Se,Me=Ee.y+Qe/Se,Le=((Te-fe)*tt-(Me-Pe)*Qe)/(we*tt-qe*Qe);V=fe+we*Le-le.x,Ne=Pe+qe*Le-le.y;let A=V*V+Ne*Ne;if(A<=2)return new Fe(V,Ne);We=Math.sqrt(A/2)}else{let pe=!1;we>Number.EPSILON?Qe>Number.EPSILON&&(pe=!0):we<-Number.EPSILON?Qe<-Number.EPSILON&&(pe=!0):Math.sign(qe)===Math.sign(tt)&&(pe=!0),pe?(V=-qe,Ne=we,We=Math.sqrt(U)):(V=we,Ne=qe,We=Math.sqrt(U/2))}return new Fe(V/We,Ne/We)}let de=[];for(let le=0,Ae=C.length,Ee=Ae-1,V=le+1;le<Ae;le++,Ee++,V++)Ee===Ae&&(Ee=0),V===Ae&&(V=0),de[le]=F(C[le],C[Ee],C[V]);let P=[],J,ce=de.concat();for(let le=0,Ae=G;le<Ae;le++){let Ee=L[le];J=[];for(let V=0,Ne=Ee.length,We=Ne-1,we=V+1;V<Ne;V++,We++,we++)We===Ne&&(We=0),we===Ne&&(we=0),J[V]=F(Ee[V],Ee[We],Ee[we]);P.push(J),ce=ce.concat(J)}let Ie;if(_===0)Ie=yl.triangulateShape(C,L);else{let le=[],Ae=[];for(let Ee=0;Ee<_;Ee++){let V=Ee/_,Ne=p*Math.cos(V*Math.PI/2),We=m*Math.sin(V*Math.PI/2)+x;for(let we=0,qe=C.length;we<qe;we++){let Qe=O(C[we],de[we],We);ye(Qe.x,Qe.y,-Ne),V===0&&le.push(Qe)}for(let we=0,qe=G;we<qe;we++){let Qe=L[we];J=P[we];let tt=[];for(let U=0,Re=Qe.length;U<Re;U++){let pe=O(Qe[U],J[U],We);ye(pe.x,pe.y,-Ne),V===0&&tt.push(pe)}V===0&&Ae.push(tt)}}Ie=yl.triangulateShape(le,Ae)}let Z=Ie.length,ve=m+x;for(let le=0;le<H;le++){let Ae=c?O(N[le],ce[le],ve):N[le];v?(g.copy(y.normals[0]).multiplyScalar(Ae.x),b.copy(y.binormals[0]).multiplyScalar(Ae.y),T.copy(M[0]).add(g).add(b),ye(T.x,T.y,T.z)):ye(Ae.x,Ae.y,0)}for(let le=1;le<=h;le++)for(let Ae=0;Ae<H;Ae++){let Ee=c?O(N[Ae],ce[Ae],ve):N[Ae];v?(g.copy(y.normals[le]).multiplyScalar(Ee.x),b.copy(y.binormals[le]).multiplyScalar(Ee.y),T.copy(M[le]).add(g).add(b),ye(T.x,T.y,T.z)):ye(Ee.x,Ee.y,d/h*le)}for(let le=_-1;le>=0;le--){let Ae=le/_,Ee=p*Math.cos(Ae*Math.PI/2),V=m*Math.sin(Ae*Math.PI/2)+x;for(let Ne=0,We=C.length;Ne<We;Ne++){let we=O(C[Ne],de[Ne],V);ye(we.x,we.y,d+Ee)}for(let Ne=0,We=L.length;Ne<We;Ne++){let we=L[Ne];J=P[Ne];for(let qe=0,Qe=we.length;qe<Qe;qe++){let tt=O(we[qe],J[qe],V);v?ye(tt.x,tt.y+M[h-1].y,M[h-1].x+Ee):ye(tt.x,tt.y,d+Ee)}}}Ce(),De();function Ce(){let le=n.length/3;if(c){let Ae=0,Ee=H*Ae;for(let V=0;V<Z;V++){let Ne=Ie[V];Ge(Ne[2]+Ee,Ne[1]+Ee,Ne[0]+Ee)}Ae=h+_*2,Ee=H*Ae;for(let V=0;V<Z;V++){let Ne=Ie[V];Ge(Ne[0]+Ee,Ne[1]+Ee,Ne[2]+Ee)}}else{for(let Ae=0;Ae<Z;Ae++){let Ee=Ie[Ae];Ge(Ee[2],Ee[1],Ee[0])}for(let Ae=0;Ae<Z;Ae++){let Ee=Ie[Ae];Ge(Ee[0]+H*h,Ee[1]+H*h,Ee[2]+H*h)}}r.addGroup(le,n.length/3-le,0)}function De(){let le=n.length/3,Ae=0;ze(C,Ae),Ae+=C.length;for(let Ee=0,V=L.length;Ee<V;Ee++){let Ne=L[Ee];ze(Ne,Ae),Ae+=Ne.length}r.addGroup(le,n.length/3-le,1)}function ze(le,Ae){let Ee=le.length;for(;--Ee>=0;){let V=Ee,Ne=Ee-1;Ne<0&&(Ne=le.length-1);for(let We=0,we=h+_*2;We<we;We++){let qe=H*We,Qe=H*(We+1),tt=Ae+V+qe,U=Ae+Ne+qe,Re=Ae+Ne+Qe,pe=Ae+V+Qe;Xe(tt,U,Re,pe)}}}function ye(le,Ae,Ee){l.push(le),l.push(Ae),l.push(Ee)}function Ge(le,Ae,Ee){ge(le),ge(Ae),ge(Ee);let V=n.length/3,Ne=S.generateTopUV(r,n,V-3,V-2,V-1);ke(Ne[0]),ke(Ne[1]),ke(Ne[2])}function Xe(le,Ae,Ee,V){ge(le),ge(Ae),ge(V),ge(Ae),ge(Ee),ge(V);let Ne=n.length/3,We=S.generateSideWallUV(r,n,Ne-6,Ne-3,Ne-2,Ne-1);ke(We[0]),ke(We[1]),ke(We[3]),ke(We[1]),ke(We[2]),ke(We[3])}function ge(le){n.push(l[le*3+0]),n.push(l[le*3+1]),n.push(l[le*3+2])}function ke(le){a.push(le.x),a.push(le.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return m_(i,r,t)}static fromJSON(t,i){let r=[];for(let a=0,s=t.shapes.length;a<s;a++){let o=i[t.shapes[a]];r.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new vl[n.type]().fromJSON(n)),new ug(r,t.options)}},f_={generateTopUV:function(e,t,i,r,n){let a=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],u=t[n*3],h=t[n*3+1];return[new Fe(a,s),new Fe(o,l),new Fe(u,h)]},generateSideWallUV:function(e,t,i,r,n,a){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],u=t[r*3],h=t[r*3+1],d=t[r*3+2],c=t[n*3],p=t[n*3+1],m=t[n*3+2],x=t[a*3],_=t[a*3+1],f=t[a*3+2];return Math.abs(o-h)<Math.abs(s-u)?[new Fe(s,1-l),new Fe(u,1-d),new Fe(c,1-m),new Fe(x,1-f)]:[new Fe(o,1-l),new Fe(h,1-d),new Fe(p,1-m),new Fe(_,1-f)]}};function m_(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let a=e[r];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Qc=class cg extends Bv{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,n=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,a,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new cg(t.radius,t.detail)}},Ga=class hg extends fr{constructor(t=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:n};let a=t/2,s=i/2,o=Math.floor(r),l=Math.floor(n),u=o+1,h=l+1,d=t/o,c=i/l,p=[],m=[],x=[],_=[];for(let f=0;f<h;f++){let S=f*c-s;for(let M=0;M<u;M++){let v=M*d-a;m.push(v,-S,0),x.push(0,0,1),_.push(M/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){let M=S+u*f,v=S+u*(f+1),y=S+1+u*(f+1),b=S+1+u*f;p.push(M,v,b),p.push(v,y,b)}this.setIndex(p),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(x,3)),this.setAttribute("uv",new ti(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hg(t.width,t.height,t.widthSegments,t.heightSegments)}},ef=class dg extends fr{constructor(t=1,i=32,r=16,n=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:n,phiLength:a,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),u=0,h=[],d=new W,c=new W,p=[],m=[],x=[],_=[];for(let f=0;f<=r;f++){let S=[],M=f/r,v=s+M*o,y=t*Math.cos(v),b=Math.sqrt(t*t-y*y),g=0;f===0&&s===0?g=.5/i:f===r&&l===Math.PI&&(g=-.5/i);for(let T=0;T<=i;T++){let R=T/i,N=n+R*a;d.x=-b*Math.cos(N),d.y=y,d.z=b*Math.sin(N),m.push(d.x,d.y,d.z),c.copy(d).normalize(),x.push(c.x,c.y,c.z),_.push(R+g,1-M),S.push(u++)}h.push(S)}for(let f=0;f<r;f++)for(let S=0;S<i;S++){let M=h[f][S+1],v=h[f][S],y=h[f+1][S],b=h[f+1][S+1];(f!==0||s>0)&&p.push(M,v,b),(f!==r-1||l<Math.PI)&&p.push(v,y,b)}this.setIndex(p),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(x,3)),this.setAttribute("uv",new ti(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dg(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},eh=class pg extends fr{constructor(t=new Wp(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),i=64,r=1,n=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:n,closed:a};let s=t.computeFrenetFrames(i,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new W,l=new W,u=new Fe,h=new W,d=[],c=[],p=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ti(d,3)),this.setAttribute("normal",new ti(c,3)),this.setAttribute("uv",new ti(p,2));function x(){for(let M=0;M<i;M++)_(M);_(a===!1?i:0),S(),f()}function _(M){h=t.getPointAt(M/i,h);let v=s.normals[M],y=s.binormals[M];for(let b=0;b<=n;b++){let g=b/n*Math.PI*2,T=Math.sin(g),R=-Math.cos(g);l.x=R*v.x+T*y.x,l.y=R*v.y+T*y.y,l.z=R*v.z+T*y.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=h.x+r*l.x,o.y=h.y+r*l.y,o.z=h.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=i;M++)for(let v=1;v<=n;v++){let y=(n+1)*(M-1)+(v-1),b=(n+1)*M+(v-1),g=(n+1)*M+v,T=(n+1)*(M-1)+v;m.push(y,b,T),m.push(b,g,T)}}function S(){for(let M=0;M<=i;M++)for(let v=0;v<=n;v++)u.x=M/i,u.y=v/n,p.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new pg(new vl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Wa(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let n=e[i][r];if(tf(n))n.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=n.clone();else if(Array.isArray(n))if(tf(n[0])){let a=[];for(let s=0,o=n.length;s<o;s++)a[s]=n[s].clone();t[i][r]=a}else t[i][r]=n.slice();else t[i][r]=n}}return t}function Li(e){let t={};for(let i=0;i<e.length;i++){let r=Wa(e[i]);for(let n in r)t[n]=r[n]}return t}function tf(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function g_(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function rf(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yt.workingColorSpace}var v_={clone:Wa,merge:Li},__=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=g_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new rt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new kt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new at().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ot().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},y_=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ml=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},th=class extends Ml{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return wa('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){wa('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},M_=class extends Qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=wu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},S_=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},T_=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Sl(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Xs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let a;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(n=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=n)){let s=t[1];e<s&&(i=2,n=s);for(let o=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=n,n=t[--i-1],e>=n)break e}a=i,i=0;break t}break i}for(;i<a;){let s=i+a>>>1;e<t[s]?a=s:i=s+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let a=0;a!==r;++a)t[a]=i[n+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},b_=class extends Xs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vd,endingEnd:Vd}}intervalChanged_(e,t,i){let r=this.parameterPositions,n=e-2,a=e+1,s=r[n],o=r[a];if(s===void 0)switch(this.getSettings_().endingStart){case Hd:n=e,s=2*t-i;break;case Gd:n=r.length-2,s=t+r[n]-r[n+1];break;default:n=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Hd:a=e,o=2*i-t;break;case Gd:a=1,o=i+r[1]-r[0];break;default:a=e-1,o=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=n*u,this._offsetNext=a*u}interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-t)/(r-t),m=p*p,x=m*p,_=-d*x+2*d*m-d*p,f=(1+d)*x+(-1.5-2*d)*m+(-.5+d)*p+1,S=(-1-c)*x+(1.5+c)*m+.5*p,M=c*x-c*m;for(let v=0;v!==s;++v)n[v]=_*a[u+v]+f*a[l+v]+S*a[o+v]+M*a[h+v];return n}},E_=class extends Xs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=(i-t)/(r-t),h=1-u;for(let d=0;d!==s;++d)n[d]=a[l+d]*h+a[o+d]*u;return n}},w_=class extends Xs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},A_=class extends Xs{interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-t)/(r-t),m=1-p;for(let x=0;x!==s;++x)n[x]=a[l+x]*m+a[o+x]*p;return n}let d=s*2,c=e-1;for(let p=0;p!==s;++p){let m=a[l+p],x=a[o+p],_=c*d+p*2,f=h[_],S=h[_+1],M=e*d+p*2,v=u[M],y=u[M+1],b=P_(i,t,f,v,r);n[p]=nf(b,m,S,y,x)}return n}};function nf(e,t,i,r,n){let a=1-e;return a*a*a*t+3*a*a*e*i+3*a*e*e*r+e*e*e*n}function R_(e,t,i,r,n){let a=1-e;return 3*a*a*(i-t)+6*a*e*(r-i)+3*e*e*(n-r)}function P_(e,t,i,r,n){let a=(e-t)/(n-t);for(let s=0;s<8;s++){let o=nf(a,t,i,r,n)-e;if(Math.abs(o)<1e-10)break;let l=R_(a,t,i,r,n);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Fr=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Sl(e.settings)&&(i.settings={inTangents:Xa(e.settings.inTangents,Array),outTangents:Xa(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new w_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new b_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new A_(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Go:t=this.InterpolantFactoryMethodDiscrete;break;case mc:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break;case kd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return et("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Go;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return gc;case this.InterpolantFactoryMethodBezier:return kd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Sl(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Sl(this.settings)&&(sf(this.settings.inTangents,e),sf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,n=0,a=r-1;for(;n!==r&&i[n]<e;)++n;for(;a!==-1&&i[a]>t;)--a;if(++a,n!==0||a!==r){n>=a&&(a=Math.max(a,1),n=a-1);let s=this.getValueSize();this.times=i.slice(n,a),this.values=this.values.slice(n*s,a*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,n=i.length;n===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==n;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){it("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(a!==null&&a>o){it("KeyframeTrack: Out of order keys.",this,s,o,a),e=!1;break}a=o}if(r!==void 0&&Jg(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){it("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===gc,n=e.length-1,a=1;for(let s=1;s<n;++s){let o=!1,l=e[s],u=e[s+1];if(l!==u&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,d=h-i,c=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[d+p]||m!==t[c+p]){o=!0;break}}}if(o){if(s!==a){e[a]=e[s];let h=s*i,d=a*i;for(let c=0;c!==i;++c)t[d+c]=t[h+c]}++a}}if(n>0){e[a]=e[n];for(let s=n*i,o=a*i,l=0;l!==i;++l)t[o+l]=t[s+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Sl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function af(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function sf(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Fr.prototype.ValueTypeName="",Fr.prototype.TimeBufferType=Float32Array,Fr.prototype.ValueBufferType=Float32Array,Fr.prototype.DefaultInterpolation=mc;var qs=class extends Fr{constructor(e,t,i){super(e,t,i)}};qs.prototype.ValueTypeName="bool",qs.prototype.ValueBufferType=Array,qs.prototype.DefaultInterpolation=Go,qs.prototype.InterpolantFactoryMethodLinear=void 0,qs.prototype.InterpolantFactoryMethodSmooth=void 0;var C_=class extends Fr{constructor(e,t,i,r){super(e,t,i,r)}};C_.prototype.ValueTypeName="color";var L_=class extends Fr{constructor(e,t,i,r){super(e,t,i,r)}};L_.prototype.ValueTypeName="number";var I_=class extends Xs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let n=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let u=l+s;l!==u;l+=4)$r.slerpFlat(n,0,a,l-s,a,l,o);return n}},of=class extends Fr{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new I_(this.times,this.values,this.getValueSize(),e)}};of.prototype.ValueTypeName="quaternion",of.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Fr{constructor(e,t,i){super(e,t,i)}};js.prototype.ValueTypeName="string",js.prototype.ValueBufferType=Array,js.prototype.DefaultInterpolation=Go,js.prototype.InterpolantFactoryMethodLinear=void 0,js.prototype.InterpolantFactoryMethodSmooth=void 0;var D_=class extends Fr{constructor(e,t,i,r){super(e,t,i,r)}};D_.prototype.ValueTypeName="vector";var N_=class{constructor(e,t,i){let r=this,n=!1,a=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){s++,n===!1&&r.onStart!==void 0&&r.onStart(u,a,s),n=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,s),a===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let c=l[h],p=l[h+1];if(c.global&&(c.lastIndex=0),c.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},U_=new N_,O_=class{constructor(e){this.manager=e!==void 0?e:U_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};O_.DEFAULT_MATERIAL_NAME="__DEFAULT";var ih=class extends Ci{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},rh=new Ot,lf=new W,uf=new W,cf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Zi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rh,e.coordinateSystem,e.reversedDepth);let n=this._frameExtents,a=r?r.z/n.x:1,s=r?r.w/n.y:1,o=r?r.x/n.x:0,l=r?r.y/n.y:0;e.coordinateSystem===As||e.reversedDepth?t.set(.5*a,0,0,.5*a+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Tl=new W,bl=new $r,zr=new W,hf=class extends Ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=wr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tl,bl,zr),zr.x===1&&zr.y===1&&zr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,bl,zr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Tl,bl,zr),zr.x===1&&zr.y===1&&zr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tl,bl,zr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new W,df=new Fe,pf=new Fe,mr=class extends hf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,df,pf),t.subVectors(pf,df)}setViewOffset(e,t,i,r,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;n+=a.offsetX*r/o,t-=a.offsetY*i/l,r*=a.width/o,i*=a.height/l}let s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},F_=class extends cf{constructor(){super(new mr(90,1,.5,500)),this.isPointLightShadow=!0}},nh=class extends ih{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new F_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ff=class extends hf{constructor(e=-1,t=1,i=1,r=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-e,a=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,a=n+l*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},z_=class extends cf{constructor(){super(new ff(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},B_=class extends ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ci.DEFAULT_UP),this.updateMatrix(),this.target=new Ci,this.shadow=new z_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},k_=class extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},qa=-90,ja=1,ah=class extends Ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mr(qa,ja,e,t);r.layers=this.layers,this.add(r);let n=new mr(qa,ja,e,t);n.layers=this.layers,this.add(n);let a=new mr(qa,ja,e,t);a.layers=this.layers,this.add(a);let s=new mr(qa,ja,e,t);s.layers=this.layers,this.add(s);let o=new mr(qa,ja,e,t);o.layers=this.layers,this.add(o);let l=new mr(qa,ja,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,n,a,s,o]=t;for(let l of t)this.remove(l);if(e===wr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===As)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[n,a,s,o,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),c=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=m,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,c),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},V_=class extends mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},sh="\\[\\]\\.:\\/",H_=new RegExp("["+sh+"]","g"),oh="[^"+sh+"]",G_="[^"+sh.replace("\\.","")+"]",W_=/((?:WC+[\/:])*)/.source.replace("WC",oh),X_=/(WCOD+)?/.source.replace("WCOD",G_),q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh),j_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh),Y_=new RegExp("^"+W_+X_+q_+j_+"$"),J_=["material","materials","bones","map"],K_=class{constructor(e,t,i){let r=i||Jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Jt=class ys{constructor(t,i,r){this.path=i,this.parsedPath=r||ys.parseTrackName(i),this.node=ys.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new ys.Composite(t,i,r):new ys(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(H_,"")}static parseTrackName(t){let i=Y_.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let a=r.nodeName.substring(n+1);J_.indexOf(a)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=a)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},n=r(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)t[i++]=r[n]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let n=0,a=r.length;n!==a;++n)r[n]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,n=i.propertyName,a=i.propertyIndex;if(t||(t=ys.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[n];if(s===void 0){let u=i.nodeName;it("PropertyBinding: Trying to update property for track: "+u+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Jt.Composite=K_,Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray],Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iE=new Float32Array(1),mf=class{constructor(t,i,r,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,n){let a=this.elements;return a[0]=t,a[2]=i,a[1]=r,a[3]=n,this}};mf.prototype.isMatrix2=!0;var nE=mf;function gf(e,t,i,r){let n=Z_(r);switch(i){case zd:return e*t;case Uu:return e*t/n.components*n.byteLength;case Ou:return e*t/n.components*n.byteLength;case Xn:return e*t*2/n.components*n.byteLength;case Fu:return e*t*2/n.components*n.byteLength;case Bd:return e*t*3/n.components*n.byteLength;case Ur:return e*t*4/n.components*n.byteLength;case zu:return e*t*4/n.components*n.byteLength;case Fo:case zo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Bo:case ko:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ku:case Hu:return Math.max(e,16)*Math.max(t,8)/4;case Bu:case Vu:return Math.max(e,8)*Math.max(t,8)/2;case Gu:case Wu:case qu:case ju:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xu:case Vo:case Yu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ju:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ku:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case $u:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ic:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case rc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case lc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case uc:case cc:case hc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case dc:case pc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ho:case fc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Z_(e){switch(e){case Zi:case Nd:return{byteLength:1,components:1};case ws:case Ud:case Nr:return{byteLength:2,components:1};case Du:case Nu:return{byteLength:2,components:4};case Dr:case Iu:case Er:return{byteLength:4,components:1};case Od:case Fd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}})),typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vf(){let e=null,t=!1,i=null,r=null;function n(a,s){r=e.requestAnimationFrame(n),i(a,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(n),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(a){i=a},setContext:function(a){e=a}}}function $_(e){let t=new WeakMap;function i(o,l){let u=o.array,h=o.usage,d=u.byteLength,c=e.createBuffer();e.bindBuffer(l,c),e.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=e.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=e.SHORT;else if(u instanceof Uint32Array)p=e.UNSIGNED_INT;else if(u instanceof Int32Array)p=e.INT;else if(u instanceof Int8Array)p=e.BYTE;else if(u instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,u){let h=l.array,d=l.updateRanges;if(e.bindBuffer(u,o),d.length===0)e.bufferSubData(u,0,h);else{d.sort((p,m)=>p.start-m.start);let c=0;for(let p=1;p<d.length;p++){let m=d[c],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++c,d[c]=x)}d.length=c+1;for(let p=0,m=d.length;p<m;p++){let x=d[p];e.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,i(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,o,l),u.version=o.version}}return{get:n,remove:a,update:s}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e1=`#ifdef USE_ALPHAHASH
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
#endif`,t1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a1=`#ifdef USE_AOMAP
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
#endif`,s1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o1=`#ifdef USE_BATCHING
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
#endif`,l1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d1=`#ifdef USE_IRIDESCENCE
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
#endif`,p1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,S1=`#define PI 3.141592653589793
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
} // validated`,T1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",P1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
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
#endif`,K1=`uniform sampler2D dfgLUT;
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
}`,Z1=`
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lx=`#if defined( USE_POINTS_UV )
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
#endif`,ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
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
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
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
#endif`,mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fx=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform float backgroundBlurriness;
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,ay=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,oy=`#define DISTANCE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,hy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,py=`uniform vec3 diffuse;
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
}`,fy=`#define LAMBERT
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
}`,my=`#define LAMBERT
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
}`,gy=`#define MATCAP
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
}`,vy=`#define MATCAP
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
}`,_y=`#define NORMAL
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
}`,xy=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,My=`#define PHONG
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
}`,Sy=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
}`,by=`#define TOON
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
}`,Ey=`#define TOON
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
}`,wy=`uniform float size;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#include <common>
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
}`,Py=`uniform vec3 color;
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
}`,Cy=`uniform float rotation;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Q_,alphahash_pars_fragment:e1,alphamap_fragment:t1,alphamap_pars_fragment:i1,alphatest_fragment:r1,alphatest_pars_fragment:n1,aomap_fragment:a1,aomap_pars_fragment:s1,batching_pars_vertex:o1,batching_vertex:l1,begin_vertex:u1,beginnormal_vertex:c1,bsdfs:h1,iridescence_fragment:d1,bumpmap_pars_fragment:p1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:v1,color_fragment:_1,color_pars_fragment:x1,color_pars_vertex:y1,color_vertex:M1,common:S1,defaultnormal_vertex:T1,displacementmap_pars_vertex:b1,displacementmap_vertex:E1,emissivemap_fragment:w1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:P1,envmap_fragment:C1,envmap_common_pars_fragment:L1,envmap_pars_fragment:I1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:W1,envmap_vertex:N1,fog_vertex:U1,fog_pars_vertex:O1,fog_fragment:F1,fog_pars_fragment:z1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:k1,lights_lambert_fragment:V1,lights_lambert_pars_fragment:H1,lights_pars_begin:G1,lights_toon_fragment:X1,lights_toon_pars_fragment:q1,lights_phong_fragment:j1,lights_phong_pars_fragment:Y1,lights_physical_fragment:J1,lights_physical_pars_fragment:K1,lights_fragment_begin:Z1,lights_fragment_maps:$1,lights_fragment_end:Q1,lightprobes_pars_fragment:ex,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:rx,logdepthbuf_vertex:nx,map_fragment:ax,map_pars_fragment:sx,map_particle_fragment:ox,map_particle_pars_fragment:lx,metalnessmap_fragment:ux,metalnessmap_pars_fragment:cx,morphinstance_vertex:hx,morphcolor_vertex:dx,morphnormal_vertex:px,morphtarget_pars_vertex:fx,morphtarget_vertex:mx,normal_fragment_begin:gx,normal_fragment_maps:vx,normal_pars_fragment:_x,normal_pars_vertex:xx,normal_vertex:yx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Ex,opaque_fragment:wx,packing:Ax,premultiplied_alpha_fragment:Rx,project_vertex:Px,dithering_fragment:Cx,dithering_pars_fragment:Lx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Nx,shadowmap_pars_vertex:Ux,shadowmap_vertex:Ox,shadowmask_pars_fragment:Fx,skinbase_vertex:zx,skinning_pars_vertex:Bx,skinning_vertex:kx,skinnormal_vertex:Vx,specularmap_fragment:Hx,specularmap_pars_fragment:Gx,tonemapping_fragment:Wx,tonemapping_pars_fragment:Xx,transmission_fragment:qx,transmission_pars_fragment:jx,uv_pars_fragment:Yx,uv_pars_vertex:Jx,uv_vertex:Kx,worldpos_vertex:Zx,background_vert:$x,background_frag:Qx,backgroundCube_vert:ey,backgroundCube_frag:ty,cube_vert:iy,cube_frag:ry,depth_vert:ny,depth_frag:ay,distance_vert:sy,distance_frag:oy,equirect_vert:ly,equirect_frag:uy,linedashed_vert:cy,linedashed_frag:hy,meshbasic_vert:dy,meshbasic_frag:py,meshlambert_vert:fy,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:vy,meshnormal_vert:_y,meshnormal_frag:xy,meshphong_vert:yy,meshphong_frag:My,meshphysical_vert:Sy,meshphysical_frag:Ty,meshtoon_vert:by,meshtoon_frag:Ey,points_vert:wy,points_frag:Ay,shadow_vert:Ry,shadow_frag:Py,sprite_vert:Cy,sprite_frag:Ly},He={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Br={basic:{uniforms:Li([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Li([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Li([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Li([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Li([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Li([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Li([He.points,He.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Li([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Li([He.common,He.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Li([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Li([He.sprite,He.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:Li([He.common,He.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:Li([He.lights,He.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Br.physical={uniforms:Li([Br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var El={r:0,b:0,g:0},Iy=new Ot,_f=new at;_f.set(-1,0,0,0,1,0,0,0,1);function Dy(e,t,i,r,n,a){let s=new rt(0),o=n===!0?0:1,l,u,h=null,d=0,c=null;function p(S){let M=S.isScene===!0?S.background:null;if(M&&M.isTexture){let v=S.backgroundBlurriness>0;M=t.get(M,v)}return M}function m(S){let M=!1,v=p(S);v===null?_(s,o):v&&v.isColor&&(_(v,1),M=!0);let y=e.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(S,M){let v=p(M);v&&v.isCubeTexture?(u===void 0&&(u=new Lt(new Va(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Wa(Br.backgroundCube.uniforms),vertexShader:Br.backgroundCube.vertexShader,fragmentShader:Br.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(_f),u.material.toneMapped=yt.getTransfer(v.colorSpace)!==Pt,(h!==v||d!==v.version||c!==e.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,c=e.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Lt(new Ga(2,2),new sn({name:"BackgroundMaterial",uniforms:Wa(Br.background.uniforms),vertexShader:Br.background.vertexShader,fragmentShader:Br.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=yt.getTransfer(v.colorSpace)!==Pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||c!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,c=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function _(S,M){S.getRGB(El,rf(e)),i.buffers.color.setClear(El.r,El.g,El.b,M,a)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,M=1){s.set(S),o=M,_(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,_(s,o)},render:m,addToRenderList:x,dispose:f}}function Ny(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},n=c(null),a=n,s=!1;function o(L,k,G,C,O){let H=!1,F=d(L,C,G,k);a!==F&&(a=F,u(a.object)),H=p(L,C,G,O),H&&m(L,C,G,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,v(L,k,G,C),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function u(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function d(L,k,G,C){let O=C.wireframe===!0,H=r[k.id];H===void 0&&(H={},r[k.id]=H);let F=L.isInstancedMesh===!0?L.id:0,de=H[F];de===void 0&&(de={},H[F]=de);let P=de[G.id];P===void 0&&(P={},de[G.id]=P);let J=P[O];return J===void 0&&(J=c(l()),P[O]=J),J}function c(L){let k=[],G=[],C=[];for(let O=0;O<i;O++)k[O]=0,G[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:C,object:L,attributes:{},index:null}}function p(L,k,G,C){let O=a.attributes,H=k.attributes,F=0,de=G.getAttributes();for(let P in de)if(de[P].location>=0){let J=O[P],ce=H[P];if(ce===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;F++}return a.attributesNum!==F||a.index!==C}function m(L,k,G,C){let O={},H=k.attributes,F=0,de=G.getAttributes();for(let P in de)if(de[P].location>=0){let J=H[P];J===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),O[P]=ce,F++}a.attributes=O,a.attributesNum=F,a.index=C}function x(){let L=a.newAttributes;for(let k=0,G=L.length;k<G;k++)L[k]=0}function _(L){f(L,0)}function f(L,k){let G=a.newAttributes,C=a.enabledAttributes,O=a.attributeDivisors;G[L]=1,C[L]===0&&(e.enableVertexAttribArray(L),C[L]=1),O[L]!==k&&(e.vertexAttribDivisor(L,k),O[L]=k)}function S(){let L=a.newAttributes,k=a.enabledAttributes;for(let G=0,C=k.length;G<C;G++)k[G]!==L[G]&&(e.disableVertexAttribArray(G),k[G]=0)}function M(L,k,G,C,O,H,F){F===!0?e.vertexAttribIPointer(L,k,G,O,H):e.vertexAttribPointer(L,k,G,C,O,H)}function v(L,k,G,C){x();let O=C.attributes,H=G.getAttributes(),F=k.defaultAttributeValues;for(let de in H){let P=H[de];if(P.location>=0){let J=O[de];if(J===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let ce=J.normalized,Ie=J.itemSize,Z=t.get(J);if(Z===void 0)continue;let ve=Z.buffer,Ce=Z.type,De=Z.bytesPerElement,ze=Ce===e.INT||Ce===e.UNSIGNED_INT||J.gpuType===Iu;if(J.isInterleavedBufferAttribute){let ye=J.data,Ge=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Xe=J.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let ge=0;ge<P.locationSize;ge++)f(P.location+ge,ye.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ge=0;ge<P.locationSize;ge++)_(P.location+ge);e.bindBuffer(e.ARRAY_BUFFER,ve);for(let ge=0;ge<P.locationSize;ge++)M(P.location+ge,Ie/P.locationSize,Ce,ce,Ge*De,(Xe+Ie/P.locationSize*ge)*De,ze)}else{if(J.isInstancedBufferAttribute){for(let ye=0;ye<P.locationSize;ye++)f(P.location+ye,J.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<P.locationSize;ye++)_(P.location+ye);e.bindBuffer(e.ARRAY_BUFFER,ve);for(let ye=0;ye<P.locationSize;ye++)M(P.location+ye,Ie/P.locationSize,Ce,ce,Ie*De,Ie/P.locationSize*ye*De,ze)}}else if(F!==void 0){let ce=F[de];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(P.location,ce);break;case 3:e.vertexAttrib3fv(P.location,ce);break;case 4:e.vertexAttrib4fv(P.location,ce);break;default:e.vertexAttrib1fv(P.location,ce)}}}}S()}function y(){R();for(let L in r){let k=r[L];for(let G in k){let C=k[G];for(let O in C){let H=C[O];for(let F in H)h(H[F].object),delete H[F];delete C[O]}}delete r[L]}}function b(L){if(r[L.id]===void 0)return;let k=r[L.id];for(let G in k){let C=k[G];for(let O in C){let H=C[O];for(let F in H)h(H[F].object),delete H[F];delete C[O]}}delete r[L.id]}function g(L){for(let k in r){let G=r[k];for(let C in G){let O=G[C];if(O[L.id]===void 0)continue;let H=O[L.id];for(let F in H)h(H[F].object),delete H[F];delete O[L.id]}}}function T(L){for(let k in r){let G=r[k],C=L.isInstancedMesh===!0?L.id:0,O=G[C];if(O!==void 0){for(let H in O){let F=O[H];for(let de in F)h(F[de].object),delete F[de];delete O[H]}delete G[C],Object.keys(G).length===0&&delete r[k]}}}function R(){N(),s=!0,a!==n&&(a=n,u(a.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:T,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:_,disableUnusedAttributes:S}}function Uy(e,t,i){let r;function n(l){r=l}function a(l,u){e.drawArrays(r,l,u),i.update(u,r,1)}function s(l,u,h){h!==0&&(e.drawArraysInstanced(r,l,u,h),i.update(u,r,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,u,0,h);let d=0;for(let c=0;c<h;c++)d+=u[c];i.update(d,r,1)}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function Oy(e,t,i,r){let n;function a(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");n=e.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(g){return!(g!==Ur&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let T=g===Nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Zi&&g!==Er&&!T&&r.convert(g)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=i.precision!==void 0?i.precision:"highp",h=l(u);h!==u&&(et("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),c=i.logarithmicDepthBuffer===!0&&d===!1;i.reversedDepthBuffer===!0&&d===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&d===!0&&et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,maxSamples:y,samples:b}}function Fy(e){let t=this,i=null,r=0,n=!1,a=!1,s=new Tn,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let p=d.length!==0||c||r!==0||n;return n=c,r=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,c){i=h(d,c,0)},this.setState=function(d,c,p){let m=d.clippingPlanes,x=d.clipIntersection,_=d.clipShadows,f=e.get(d);if(!n||m===null||m.length===0||a&&!_)a?h(null):u();else{let S=a?0:r,M=S*4,v=f.clippingState||null;l.value=v,v=h(m,c,M,p);for(let y=0;y!==M;++y)v[y]=i[y];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(d,c,p,m){let x=d!==null?d.length:0,_=null;if(x!==0){if(_=l.value,m!==!0||_===null){let f=p+x*4,S=c.matrixWorldInverse;o.getNormalMatrix(S),(_===null||_.length<f)&&(_=new Float32Array(f));for(let M=0,v=p;M!==x;++M,v+=4)s.copy(d[M]).applyMatrix4(S,o),s.normal.toArray(_,v),_[v+3]=s.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,_}}var lh=class extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Up(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Va(5,5,5),n=new sn({name:"CubemapFromEquirect",uniforms:Wa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xi,blending:Wn});n.uniforms.tEquirect.value=t;let a=new Lt(r,n),s=t.minFilter;return t.minFilter===br&&(t.minFilter=Pi),new ah(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(n)}},xf=256,zy=3,By=20,yf=256,Mf=16,ky=3,Vy=new W,Hy=new rt,wl=class fg{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ah(1,10,null),this._boxMesh=new Lt(new Va(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,n=100,a={}){let{size:s=256,position:o=Vy}=a,l=this._renderer;this._setSize(s);let u=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,c=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Hy));let _=new ah(r,n,h);return _.position.copy(o),_.update(l,t),l.autoClear=d,l.autoClearColor=c,l.autoClearDepth=p,l.autoClearStencil=m,t.background=x,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,i)),this._applyPMREM(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(xf,$d(t))}_fromTexture(t,i){t.mapping===Ta||t.mapping===Es?this._setSize(t.image.length===0?xf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=Sf(t,!1,!1),r=Math.log2(t)-zy;for(let n=0;n<=r;n++)i.texture.mipmaps.push({width:t>>n,height:t>>n});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Sf(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let n=this._boxMesh,a=this._cubeCamera;n.material=r,a.renderTarget=t,a.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),a.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===Ta||t.mapping===Es?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tf()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gy(),this._integrationMaterial=Wy());let i=this._cubeSize,r=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(i/Mf);for(let s=0;s<=r;s++){let o=fg.lodToRoughness(s,r);if(s>r-ky)a.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(yf*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=Xy());let r=this._blurMaterial,n=r.uniforms,a=this._sourceTarget;n.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,n.envMap.value=a.texture,this._renderCube(t,0,r),n.envMap.value=t.texture,this._renderCube(a,0,r)}};function Sf(e,t,i){return new lh(e,{minFilter:br,generateMipmaps:t,type:Nr,colorSpace:Xo,depthBuffer:i})}function Ys(e,t,i){return new sn({name:e,uniforms:t,vertexShader:lt.cube_vert,fragmentShader:i,side:xi,blending:Wn,depthTest:!1,depthWrite:!1})}function Gy(){return Ys("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yf}u

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
	`)}function Wy(){return Ys("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mf}},`

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
	`)}function Xy(){return Ys("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${By}
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
	`)}function Tf(){return Ys("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bf(){return Ys("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qy(e){let t=new WeakMap,i=new WeakMap,r=null;function n(c,p=!1){return c==null?null:p?s(c):a(c)}function a(c){if(c&&c.isTexture){let p=c.mapping;if(p===Ru||p===Pu)if(t.has(c)){let m=t.get(c).texture;return o(m,c.mapping)}else{let m=c.image;if(m&&m.height>0){let x=new lh(m.height);return x.fromEquirectangularTexture(e,c),t.set(c,x),c.addEventListener("dispose",u),o(x.texture,c.mapping)}else return null}}return c}function s(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let p=c.mapping,m=p===Ru||p===Pu,x=p===Ta||p===Es;if(m||x){let _=i.get(c),f=_!==void 0?_.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return r===null&&(r=new wl(e)),_=m?r.fromEquirectangular(c,_):r.fromCubemap(c,_),_.texture.pmremVersion=c.pmremVersion,i.set(c,_),_.texture;if(_!==void 0)return _.texture;{let S=c.image;return m&&S&&S.height>0||x&&S&&l(S)?(r===null&&(r=new wl(e)),_=m?r.fromEquirectangular(c):r.fromCubemap(c),_.texture.pmremVersion=c.pmremVersion,i.set(c,_),c.addEventListener("dispose",h),_.texture):null}}}return c}function o(c,p){return p===Ru?c.mapping=Ta:p===Pu&&(c.mapping=Es),c}function l(c){let p=0,m=6;for(let x=0;x<m;x++)c[x]!==void 0&&p++;return p===m}function u(c){let p=c.target;p.removeEventListener("dispose",u);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(c){let p=c.target;p.removeEventListener("dispose",h);let m=i.get(p);m!==void 0&&(i.delete(p),m.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:d}}function jy(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let n=e.getExtension(r);return t[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);return n===null&&wa("WebGLRenderer: "+r+" extension not supported."),n}}}function Yy(e,t,i,r){let n={},a=new WeakMap,s=new FinalizationRegistry(m=>delete n[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let _ in m.attributes)t.remove(m.attributes[_]);m.removeEventListener("dispose",o),delete n[m.id],s.unregister(m);let x=a.get(m);x&&(t.remove(x),a.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,i.memory.geometries--}function u(m,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),s.register(x,x.id,x),i.memory.geometries++),x}function h(m){let x=m.attributes;for(let _ in x)t.update(x[_],e.ARRAY_BUFFER)}function d(m){let x=m.index,_=m.attributes.position,f=0;if(_===void 0)return;let S=x!==null?x.array.length:_.array.length/3-1,M=_.count>=65535?Mp:yp,v=new M(Math.ceil(S/3)*6,1),y=v.array;if(x!==null){let g=x.array;f=x.version;for(let T=0,R=0;T<S;T+=3){let N=g[T+0],L=g[T+1],k=g[T+2];y[R++]=N,y[R++]=L,y[R++]=L,y[R++]=k,y[R++]=k,y[R++]=N}}else{f=_.version;for(let g=0,T=0;g<S;g+=3){let R=g+0,N=g+1,L=g+2;y[T++]=R,y[T++]=N,y[T++]=N,y[T++]=L,y[T++]=L,y[T++]=R}}v.version=f;let b=a.get(m);b&&t.remove(b),a.set(m,v)}function c(m){let x=a.get(m);if(x){let _=m.index;_!==null&&x.version<_.version&&d(m)}else d(m);return a.get(m)}function p(){for(let m in n){let x=n[m].deref();x!==void 0&&l(x)}}return{get:u,update:h,getWireframeAttribute:c,dispose:p}}function Jy(e,t,i){let r;function n(d){r=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,c){e.drawElements(r,c,a,d*s),i.update(c,r,1)}function u(d,c,p){p!==0&&(e.drawElementsInstanced(r,c,a,d*s,p),i.update(c,r,p))}function h(d,c,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,a,d,0,p);let m=0;for(let x=0;x<p;x++)m+=c[x];i.update(m,r,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function Ky(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(a/3);break;case e.LINES:i.lines+=o*(a/2);break;case e.LINE_STRIP:i.lines+=o*(a-1);break;case e.LINE_LOOP:i.lines+=o*a;break;case e.POINTS:i.points+=o*a;break;default:it("WebGLInfo: Unknown draw mode:",s);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:n,update:r}}function Zy(e,t,i){let r=new WeakMap,n=new kt;function a(s,o,l){let u=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,c=r.get(o);if(c===void 0||c.count!==d){let p=function(){T.dispose(),r.delete(o),o.removeEventListener("dispose",p)};c!==void 0&&c.texture.dispose();let m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],v=0;m===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let g=new Float32Array(y*b*4*d),T=new lp(g,y,b,d);T.type=Er,T.needsUpdate=!0;let R=v*4;for(let N=0;N<d;N++){let L=f[N],k=S[N],G=M[N],C=y*b*4*N;for(let O=0;O<L.count;O++){let H=O*R;m===!0&&(n.fromBufferAttribute(L,O),g[C+H+0]=n.x,g[C+H+1]=n.y,g[C+H+2]=n.z,g[C+H+3]=0),x===!0&&(n.fromBufferAttribute(k,O),g[C+H+4]=n.x,g[C+H+5]=n.y,g[C+H+6]=n.z,g[C+H+7]=0),_===!0&&(n.fromBufferAttribute(G,O),g[C+H+8]=n.x,g[C+H+9]=n.y,g[C+H+10]=n.z,g[C+H+11]=G.itemSize===4?n.w:1)}}c={count:d,texture:T,size:new Fe(y,b)},r.set(o,c),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",c.size)}return{update:a}}function $y(e,t,i,r,n){let a=new WeakMap;function s(u){let h=n.render.frame,d=u.geometry,c=t.get(u,d);if(a.get(c)!==h&&(t.update(c),a.set(c,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),a.get(u)!==h&&(i.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null&&i.update(u.instanceColor,e.ARRAY_BUFFER),a.set(u,h))),u.isSkinnedMesh){let p=u.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return c}function o(){a=new WeakMap}function l(u){let h=u.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}var Qy={[Ad]:"LINEAR_TONE_MAPPING",[Rd]:"REINHARD_TONE_MAPPING",[Pd]:"CINEON_TONE_MAPPING",[Au]:"ACES_FILMIC_TONE_MAPPING",[Ld]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Cd]:"CUSTOM_TONE_MAPPING"};function eM(e,t,i,r,n,a){let s=new Ar(t,i,{type:e,depthBuffer:n,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,h=new fr;h.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ti([0,2,0,0,2,0],2));let d=new y_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Lt(h,d),p=new ff(-1,1,1,-1,0,1),m=null,x=null,_=!1,f,S=null,M=[],v=!1;this.setSize=function(y,b){s.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let g=0;g<M.length;g++){let T=M[g];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){M=y,v=M.length>0&&M[0].isRenderPass===!0;let b=s.width,g=s.height;M.length>0&&o===null&&(o=new Ar(b,g,{type:Nr,depthBuffer:!1,stencilBuffer:!1}),l=new Ar(b,g,{type:Nr,depthBuffer:!1,stencilBuffer:!1}));let T=n===!0&&M.some(R=>R.needsDepthTexture===!0);T!==(s.depthTexture!==null)&&(T===!0&&u===null&&(u=new ka(b,g),a===!0&&(u.format=vn,u.type=ba)),s.dispose(),s.depthTexture=T?u:null,s.resolveDepthBuffer=T,s.storeMultisampledDepthBuffer=T);for(let R=0;R<M.length;R++){let N=M[R];N.setSize&&N.setSize(b,g),T&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(u)}},this.begin=function(y,b){if(_||y.toneMapping===Kr&&M.length===0)return!1;if(S=b,b!==null){let g=b.width,T=b.height;(s.width!==g||s.height!==T)&&this.setSize(g,T)}return v===!1&&y.setRenderTarget(s),f=y.toneMapping,y.toneMapping=Kr,!0},this.hasRenderPass=function(){return v},this.end=function(y,b){y.toneMapping=f,_=!0;let g=s,T=o;for(let R=0;R<M.length;R++){let N=M[R];N.enabled!==!1&&(N.render(y,T,g,b),N.needsSwap!==!1&&(g=T,T=T===o?l:o))}if(m!==y.outputColorSpace||x!==y.toneMapping){m=y.outputColorSpace,x=y.toneMapping,d.defines={},yt.getTransfer(m)===Pt&&(d.defines.SRGB_TRANSFER="");let R=Qy[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,y.setRenderTarget(S),y.render(c,p),S=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Ef=new dr,wf=new ka(1,1),Af=new Op(1),Rf=new lp,Pf=new yv,Cf=new Up,Lf=[],If=[],Df=new Float32Array(16),Nf=new Float32Array(9),Uf=new Float32Array(4);function Ya(e,t,i){let r=e[0];if(r<=0||r>0)return e;let n=t*i,a=Lf[n];if(a===void 0&&(a=new Float32Array(n),Lf[n]=a),t!==0){r.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(a,o)}return a}function ai(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function si(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Al(e,t){let i=If[t];i===void 0&&(i=new Int32Array(t),If[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function tM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function iM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;e.uniform2fv(this.addr,t),si(i,t)}}function rM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ai(i,t))return;e.uniform3fv(this.addr,t),si(i,t)}}function nM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;e.uniform4fv(this.addr,t),si(i,t)}}function aM(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ai(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),si(i,t)}else{if(ai(i,r))return;Uf.set(r),e.uniformMatrix2fv(this.addr,!1,Uf),si(i,r)}}function sM(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ai(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),si(i,t)}else{if(ai(i,r))return;Nf.set(r),e.uniformMatrix3fv(this.addr,!1,Nf),si(i,r)}}function oM(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(ai(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),si(i,t)}else{if(ai(i,r))return;Df.set(r),e.uniformMatrix4fv(this.addr,!1,Df),si(i,r)}}function lM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function uM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;e.uniform2iv(this.addr,t),si(i,t)}}function cM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ai(i,t))return;e.uniform3iv(this.addr,t),si(i,t)}}function hM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;e.uniform4iv(this.addr,t),si(i,t)}}function dM(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function pM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ai(i,t))return;e.uniform2uiv(this.addr,t),si(i,t)}}function fM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ai(i,t))return;e.uniform3uiv(this.addr,t),si(i,t)}}function mM(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ai(i,t))return;e.uniform4uiv(this.addr,t),si(i,t)}}function Rl(e){return e.version===0&&(e.compareFunction=qd,e.needsUpdate=!0),e}function gM(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n);let a;this.type===e.SAMPLER_2D_SHADOW?a=Rl(wf):a=Ef,i.setTexture2D(t||a,n)}function vM(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(t||Pf,n)}function _M(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=Rl(Af):a=Cf,i.setTextureCube(t||a,n)}function xM(e,t,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(e.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(t||Rf,n)}function yM(e){switch(e){case 5126:return tM;case 35664:return iM;case 35665:return rM;case 35666:return nM;case 35674:return aM;case 35675:return sM;case 35676:return oM;case 5124:case 35670:return lM;case 35667:case 35671:return uM;case 35668:case 35672:return cM;case 35669:case 35673:return hM;case 5125:return dM;case 36294:return pM;case 36295:return fM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return _M;case 36289:case 36303:case 36311:case 36292:return xM}}function MM(e,t){e.uniform1fv(this.addr,t)}function SM(e,t){let i=Ya(t,this.size,2);e.uniform2fv(this.addr,i)}function TM(e,t){let i=Ya(t,this.size,3);e.uniform3fv(this.addr,i)}function bM(e,t){let i=Ya(t,this.size,4);e.uniform4fv(this.addr,i)}function EM(e,t){let i=Ya(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function wM(e,t){let i=Ya(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function AM(e,t){let i=Ya(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function RM(e,t){e.uniform1iv(this.addr,t)}function PM(e,t){e.uniform2iv(this.addr,t)}function CM(e,t){e.uniform3iv(this.addr,t)}function LM(e,t){e.uniform4iv(this.addr,t)}function IM(e,t){e.uniform1uiv(this.addr,t)}function DM(e,t){e.uniform2uiv(this.addr,t)}function NM(e,t){e.uniform3uiv(this.addr,t)}function UM(e,t){e.uniform4uiv(this.addr,t)}function OM(e,t,i){let r=this.cache,n=t.length,a=Al(i,n);ai(r,a)||(e.uniform1iv(this.addr,a),si(r,a));let s;this.type===e.SAMPLER_2D_SHADOW?s=Rl(wf):s=Ef;for(let o=0;o!==n;++o)i.setTexture2D(t[o]||s,a[o])}function FM(e,t,i){let r=this.cache,n=t.length,a=Al(i,n);ai(r,a)||(e.uniform1iv(this.addr,a),si(r,a));for(let s=0;s!==n;++s)i.setTexture3D(t[s]||Pf,a[s])}function zM(e,t,i){let r=this.cache,n=t.length,a=Al(i,n);ai(r,a)||(e.uniform1iv(this.addr,a),si(r,a));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=Rl(Af):s=Cf;for(let o=0;o!==n;++o)i.setTextureCube(t[o]||s,a[o])}function BM(e,t,i){let r=this.cache,n=t.length,a=Al(i,n);ai(r,a)||(e.uniform1iv(this.addr,a),si(r,a));for(let s=0;s!==n;++s)i.setTexture2DArray(t[s]||Rf,a[s])}function kM(e){switch(e){case 5126:return MM;case 35664:return SM;case 35665:return TM;case 35666:return bM;case 35674:return EM;case 35675:return wM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return PM;case 35668:case 35672:return CM;case 35669:case 35673:return LM;case 5125:return IM;case 36294:return DM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return BM}}var VM=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}},HM=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}},GM=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let n=0,a=r.length;n!==a;++n){let s=r[n];s.setValue(e,t[s.id],i)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Of(e,t){e.seq.push(t),e.map[t.id]=t}function WM(e,t,i){let r=e.name,n=r.length;for(uh.lastIndex=0;;){let a=uh.exec(r),s=uh.lastIndex,o=a[1],l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===n){Of(i,u===void 0?new VM(o,e,t):new HM(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new GM(o),Of(i,h)),i=h}}}var Pl=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);WM(s,o,this)}let r=[],n=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):n.push(a);r.length>0&&(this.seq=r.concat(n))}setValue(e,t,i,r){let n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,a=t.length;n!==a;++n){let s=t[n],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,n=e.length;r!==n;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Ff(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var XM=37297,qM=0;function jM(e,t){let i=e.split(`
`),r=[],n=Math.max(t-6,0),a=Math.min(t+6,i.length);for(let s=n;s<a;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var zf=new at;function YM(e){yt._getMatrix(zf,yt.workingColorSpace,e);let t=`mat3( ${zf.elements.map(i=>i.toFixed(4))} )`;switch(yt.getTransfer(e)){case qo:return[t,"LinearTransferOETF"];case Pt:return[t,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Bf(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),n=(e.getShaderInfoLog(t)||"").trim();if(r&&n==="")return"";let a=/ERROR: 0:(\d+)/.exec(n);if(a){let s=parseInt(a[1]);return i.toUpperCase()+`

`+n+`

`+jM(e.getShaderSource(t),s)}else return n}function JM(e,t){let i=YM(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var KM={[Ad]:"Linear",[Rd]:"Reinhard",[Pd]:"Cineon",[Au]:"ACESFilmic",[Ld]:"AgX",[Id]:"Neutral",[Cd]:"Custom"};function ZM(e,t){let i=KM[t];return i===void 0?(et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Cl=new W;function $M(){yt.getLuminanceCoefficients(Cl);let e=Cl.x.toFixed(4),t=Cl.y.toFixed(4),i=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QM(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function eS(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function tS(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let a=e.getActiveAttrib(t,n),s=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),i[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Js(e){return e!==""}function kf(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(e){return e.replace(iS,rS)}function rS(e,t){let i=lt[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ch(i)}var nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hf(e){return e.replace(nS,aS)}function aS(e,t,i,r){let n="";for(let a=parseInt(t);a<parseInt(i);a++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Gf(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var sS={[No]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function oS(e){return sS[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lS={[Es]:"ENVMAP_MODE_REFRACTION"};function uS(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":lS[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cS={[wu]:"ENVMAP_BLENDING_MULTIPLY",[Og]:"ENVMAP_BLENDING_MIX",[Fg]:"ENVMAP_BLENDING_ADD"};function hS(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":cS[e.combine]||"ENVMAP_BLENDING_NONE"}function dS(e,t,i,r){let n=e.getContext(),a=i.defines,s=i.vertexShader,o=i.fragmentShader,l=oS(i),u=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=uS(i),d=hS(i),c=QM(i),p=eS(a),m=n.createProgram(),x,_,f=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(Js).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(Js).join(`
`),_.length>0&&(_+=`
`)):(x=[Gf(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),_=[Gf(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Kr?"#define TONE_MAPPING":"",i.toneMapping!==Kr?lt.tonemapping_pars_fragment:"",i.toneMapping!==Kr?ZM("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,JM("linearToOutputTexel",i.outputColorSpace),$M(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Js).join(`
`)),s=ch(s),s=kf(s,i),s=Vf(s,i),o=ch(o),o=kf(o,i),o=Vf(o,i),s=Hf(s),o=Hf(o),i.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,x=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=f+x+s,M=f+_+o,v=Ff(n,n.VERTEX_SHADER,S),y=Ff(n,n.FRAGMENT_SHADER,M);n.attachShader(m,v),n.attachShader(m,y),i.index0AttributeName!==void 0?n.bindAttribLocation(m,0,i.index0AttributeName):i.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function b(N){if(e.debug.checkShaderErrors){let L=n.getProgramInfoLog(m)||"",k=n.getShaderInfoLog(v)||"",G=n.getShaderInfoLog(y)||"",C=L.trim(),O=k.trim(),H=G.trim(),F=!0,de=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(n,m,v,y);else{let P=Bf(n,v,"vertex"),J=Bf(n,y,"fragment");it("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+C+`
`+P+`
`+J)}else C!==""?et("WebGLProgram: Program Info Log:",C):(O===""||H==="")&&(de=!1);de&&(N.diagnostics={runnable:F,programLog:C,vertexShader:{log:O,prefix:x},fragmentShader:{log:H,prefix:_}})}n.deleteShader(v),n.deleteShader(y),g=new Pl(n,m),T=tS(n,m)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(m,XM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qM++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=y,this}var pS=0,fS=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new mS(e),t.set(e,i)),i}},mS=class{constructor(e){this.id=pS++,this.code=e,this.usedTimes=0}};function gS(e){return e===Xn||e===Vo||e===Ho}function vS(e,t,i,r,n,a){let s=new dp,o=new fS,l=new Set,u=[],h=new Map,d=r.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,T,R,N,L,k){let G=N.fog,C=L.geometry,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=t.get(g.envMap||O,H),de=c[g.type],P=r.precision;g.precision!==null&&(P=r.getMaxPrecision(g.precision),P!==g.precision&&et("WebGLProgram.getParameters:",g.precision,"not supported, using",P,"instead."));let J=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ce=J!==void 0?J.length:0,Ie=0;C.morphAttributes.position!==void 0&&(Ie=1),C.morphAttributes.normal!==void 0&&(Ie=2),C.morphAttributes.color!==void 0&&(Ie=3);let Z,ve,Ce,De;if(de){let he=Br[de];Z=he.vertexShader,ve=he.fragmentShader}else{Z=g.vertexShader,ve=g.fragmentShader;let he=o.getVertexShaderStage(g),Ue=o.getFragmentShaderStage(g);o.update(g,he,Ue),Ce=he.id,De=Ue.id}let ze=e.getRenderTarget(),ye=e.state.buffers.depth.getReversed(),Ge=L.isInstancedMesh===!0,Xe=L.isBatchedMesh===!0,ge=!!g.map,ke=!!g.matcap,le=!!F,Ae=le&&F.isPMREMTexture===!0,Ee=!!g.aoMap,V=!!g.lightMap,Ne=!!g.bumpMap&&g.wireframe===!1,We=!!g.normalMap,we=!!g.displacementMap,qe=!!g.emissiveMap,Qe=!!g.metalnessMap,tt=!!g.roughnessMap,U=g.anisotropy>0,Re=g.clearcoat>0,pe=g.diffuseRoughness>0,Se=g.dispersion>0,fe=g.retroreflectivity>0,Pe=g.iridescence>0,Te=g.sheen>0,Me=g.transmission>0,Le=U&&!!g.anisotropyMap,A=Re&&!!g.clearcoatMap,E=Re&&!!g.clearcoatNormalMap,z=Re&&!!g.clearcoatRoughnessMap,se=pe&&!!g.diffuseRoughnessMap,Y=Pe&&!!g.iridescenceMap,te=Pe&&!!g.iridescenceThicknessMap,j=Te&&!!g.sheenColorMap,D=Te&&!!g.sheenRoughnessMap,ie=!!g.specularMap,_e=!!g.specularColorMap,I=!!g.specularIntensityMap,K=Me&&!!g.transmissionMap,me=Me&&!!g.thicknessMap,ae=!!g.gradientMap,xe=!!g.alphaMap,$=g.alphaTest>0,X=!!g.alphaHash,q=!!g.extensions,Q=Kr;g.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(Q=e.toneMapping);let ne=Ae?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,ue={shaderID:de,shaderType:g.type,shaderName:g.name,vertexShader:Z,fragmentShader:ve,defines:g.defines,customVertexShaderID:Ce,customFragmentShaderID:De,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:P,batching:Xe,batchingColor:Xe&&L._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&L.instanceColor!==null,instancingMorph:Ge&&L.morphTexture!==null,outputColorSpace:ze===null?e.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ge,matcap:ke,envMap:le,envMapMode:le&&F.mapping,envMapPMREM:Ae,envMapMaxLod:Ae?ne.length-1:null,envMapSize:Ae?ne[0].width:null,aoMap:Ee,lightMap:V,bumpMap:Ne,normalMap:We,displacementMap:we,emissiveMap:qe,normalMapObjectSpace:We&&g.normalMapType===kg,normalMapTangentSpace:We&&g.normalMapType===Wo,packedNormalMap:We&&g.normalMapType===Wo&&gS(g.normalMap.format),metalnessMap:Qe,roughnessMap:tt,anisotropy:U,anisotropyMap:Le,clearcoat:Re,clearcoatMap:A,clearcoatNormalMap:E,clearcoatRoughnessMap:z,diffuseRoughness:pe,diffuseRoughnessMap:se,dispersion:Se,retroreflection:fe,iridescence:Pe,iridescenceMap:Y,iridescenceThicknessMap:te,sheen:Te,sheenColorMap:j,sheenRoughnessMap:D,specularMap:ie,specularColorMap:_e,specularIntensityMap:I,transmission:Me,transmissionMap:K,thicknessMap:me,gradientMap:ae,opaque:g.transparent===!1&&g.blending===Ts&&g.alphaToCoverage===!1,alphaMap:xe,alphaTest:$,alphaHash:X,combine:g.combine,mapUv:ge&&p(g.map.channel),aoMapUv:Ee&&p(g.aoMap.channel),lightMapUv:V&&p(g.lightMap.channel),bumpMapUv:Ne&&p(g.bumpMap.channel),normalMapUv:We&&p(g.normalMap.channel),displacementMapUv:we&&p(g.displacementMap.channel),emissiveMapUv:qe&&p(g.emissiveMap.channel),metalnessMapUv:Qe&&p(g.metalnessMap.channel),roughnessMapUv:tt&&p(g.roughnessMap.channel),anisotropyMapUv:Le&&p(g.anisotropyMap.channel),clearcoatMapUv:A&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:Y&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:te&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:j&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:D&&p(g.sheenRoughnessMap.channel),specularMapUv:ie&&p(g.specularMap.channel),specularColorMapUv:_e&&p(g.specularColorMap.channel),specularIntensityMapUv:I&&p(g.specularIntensityMap.channel),transmissionMapUv:K&&p(g.transmissionMap.channel),thicknessMapUv:me&&p(g.thicknessMap.channel),alphaMapUv:xe&&p(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(We||U),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(ge||xe),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&We===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ie,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.filter(he=>he.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Q,decodeVideoTexture:ge&&g.map.isVideoTexture===!0&&yt.getTransfer(g.map.colorSpace)===Pt,decodeVideoTextureEmissive:qe&&g.emissiveMap.isVideoTexture===!0&&yt.getTransfer(g.emissiveMap.colorSpace)===Pt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Tr,flipSided:g.side===xi,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:q&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q&&g.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function x(g){let T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)T.push(R),T.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(_(T,g),f(T,g),T.push(e.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function _(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapPMREM),g.push(T.envMapMaxLod),g.push(T.envMapSize),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.diffuseRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.numLightProbeGrids),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function f(g,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.diffuseRoughness&&s.enable(25),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function S(g){let T=c[g.type],R;if(T){let N=Br[T];R=v_.clone(N.uniforms)}else R=g.uniforms;return R}function M(g,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new dS(e,T,g,n),u.push(R),h.set(T,R)),R}function v(g){if(--g.usedTimes===0){let T=u.indexOf(g);u[T]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function y(g){o.remove(g)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:S,acquireProgram:M,releaseProgram:v,releaseShaderCache:y,programs:u,dispose:b}}function _S(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function n(s,o,l){e.get(s)[o]=l}function a(){e=new WeakMap}return{has:t,get:i,remove:r,update:n,dispose:a}}function xS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Wf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Xf(){let e=[],t=0,i=[],r=[],n=[];function a(){t=0,i.length=0,r.length=0,n.length=0}function s(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,m,x,_,f){let S=e[t];return S===void 0?(S={id:c.id,object:c,geometry:p,material:m,materialVariant:s(c),groupOrder:x,renderOrder:c.renderOrder,z:_,group:f},e[t]=S):(S.id=c.id,S.object=c,S.geometry=p,S.material=m,S.materialVariant=s(c),S.groupOrder=x,S.renderOrder=c.renderOrder,S.z=_,S.group=f),t++,S}function l(c,p,m,x,_,f,S){S.reversedDepth===!0&&(_=-_);let M=o(c,p,m,x,_,f);m.transmission>0?r.push(M):m.transparent===!0?n.push(M):i.push(M)}function u(c,p,m,x,_,f){let S=o(c,p,m,x,_,f);m.transmission>0?r.unshift(S):m.transparent===!0?n.unshift(S):i.unshift(S)}function h(c,p){i.length>1&&i.sort(c||xS),r.length>1&&r.sort(p||Wf),n.length>1&&n.sort(p||Wf)}function d(){for(let c=t,p=e.length;c<p;c++){let m=e[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:r,transparent:n,init:a,push:l,unshift:u,finish:d,sort:h}}function yS(){let e=new WeakMap;function t(r,n){let a=e.get(r),s;return a===void 0?(s=new Xf,e.set(r,[s])):n>=a.length?(s=new Xf,a.push(s)):s=a[n],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function MS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new W,color:new rt};break;case"SpotLight":i={position:new W,direction:new W,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":i={color:new rt,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=i,i}}}function SS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var TS=0;function bS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ES(e){let t=new MS,i=SS(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new W);let n=new W,a=new Ot,s=new Ot;function o(u){let h=0,d=0,c=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let p=0,m=0,x=0,_=0,f=0,S=0,M=0,v=0,y=0,b=0,g=0,T=0,R=0,N=0;u.sort(bS);for(let k=0,G=u.length;k<G;k++){let C=u[k],O=C.color,H=C.intensity,F=C.distance,de=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Xn?de=C.shadow.map.texture:de=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*H,d+=O.g*H,c+=O.b*H;else if(C.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(C.sh.coefficients[P],H);N++}else if(C.isSunLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,ce=i.get(C);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[m]=ce,r.sunShadowMap[m]=de;let Ie=J.getViewportCount();for(let Z=0;Z<Ie;Z++)r.sunShadowMatrix[x+Z]=J.getMatrix(Z),r.sunShadowCascade[x+Z]=J._cascadeData[Z];x+=Ie,m++}r.sun[p]=P,p++}else if(C.isDirectionalLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let J=C.shadow,ce=i.get(C);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize=J.mapSize,r.directionalShadow[_]=ce,r.directionalShadowMap[_]=de,r.directionalShadowMatrix[_]=C.shadow.matrix,y++}r.directional[_]=P,_++}else if(C.isSpotLight){let P=t.get(C);P.position.setFromMatrixPosition(C.matrixWorld),P.color.copy(O).multiplyScalar(H),P.distance=F,P.coneCos=Math.cos(C.angle),P.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),P.decay=C.decay,r.spot[S]=P;let J=C.shadow;if(C.map&&(r.spotLightMap[T]=C.map,T++,J.updateMatrices(C),C.castShadow&&R++),r.spotLightMatrix[S]=J.matrix,C.castShadow){let ce=i.get(C);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize=J.mapSize,r.spotShadow[S]=ce,r.spotShadowMap[S]=de,g++}S++}else if(C.isRectAreaLight){let P=t.get(C);P.color.copy(O).multiplyScalar(H),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),r.rectArea[M]=P,M++}else if(C.isPointLight){let P=t.get(C);if(P.color.copy(C.color).multiplyScalar(C.intensity),P.distance=C.distance,P.decay=C.decay,C.castShadow){let J=C.shadow,ce=i.get(C);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize=J.mapSize,ce.shadowCameraNear=J.camera.near,ce.shadowCameraFar=J.camera.far,r.pointShadow[f]=ce,r.pointShadowMap[f]=de,r.pointShadowMatrix[f]=C.shadow.matrix,b++}r.point[f]=P,f++}else if(C.isHemisphereLight){let P=t.get(C);P.skyColor.copy(C.color).multiplyScalar(H),P.groundColor.copy(C.groundColor).multiplyScalar(H),r.hemi[v]=P,v++}}M>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=c;let L=r.hash;(L.sunLength!==p||L.directionalLength!==_||L.pointLength!==f||L.spotLength!==S||L.rectAreaLength!==M||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==g||L.numSpotMaps!==T||L.numLightProbes!==N)&&(r.sun.length=p,r.directional.length=_,r.spot.length=S,r.rectArea.length=M,r.point.length=f,r.hemi.length=v,r.sunShadow.length=m,r.sunShadowMap.length=m,r.sunShadowMatrix.length=x,r.sunShadowCascade.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.directionalShadowMatrix.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.pointShadowMatrix.length=b,r.spotShadow.length=g,r.spotShadowMap.length=g,r.spotLightMatrix.length=g+T-R,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=N,L.sunLength=p,L.directionalLength=_,L.pointLength=f,L.spotLength=S,L.rectAreaLength=M,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=g,L.numSpotMaps=T,L.numLightProbes=N,r.version=TS++)}function l(u,h){let d=0,c=0,p=0,m=0,x=0,_=0,f=h.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){let v=u[S];if(v.isSunLight){let y=r.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let y=r.directional[c];y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(f),c++}else if(v.isSpotLight){let y=r.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(f),m++}else if(v.isRectAreaLight){let y=r.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),s.identity(),a.copy(v.matrixWorld),a.premultiply(f),s.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){let y=r.point[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let y=r.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(f),_++}}}return{setup:o,setupView:l,state:r}}function qf(e){let t=new ES(e),i=[],r=[],n=[];function a(d){h.camera=d,i.length=0,r.length=0,n.length=0}function s(d){d.isLightProbeGrid?n.push(d):i.push(d)}function o(d){r.push(d)}function l(){t.setup(i),n.sort((d,c)=>d.priority-c.priority||d.id-c.id)}function u(d){t.setupView(i,d)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function wS(e){let t=new WeakMap;function i(n,a=0){let s=t.get(n),o;return s===void 0?(o=new qf(e),t.set(n,[o])):a>=s.length?(o=new qf(e),s.push(o)):o=s[a],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var AS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RS=`uniform sampler2D shadow_pass;
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
}`,PS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],CS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],jf=new Ot,Ks=new W,hh=new W;function LS(e,t,i){let r=new zs,n=new Fe,a=new Fe,s=new kt,o=new S_,l=new T_,u={},h=i.maxTextureSize,d={[Gn]:xi,[xi]:Gn,[Tr]:Tr},c=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:AS,fragmentShader:RS}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let m=new fr;m.setAttribute("position",new Or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Lt(m,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let f=this.type;this.render=function(b,g,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;this.type===vg&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);let R=e.getRenderTarget(),N=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Wn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=f!==this.type;G&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=b.length;C<O;C++){let H=b[C],F=H.shadow;if(F===void 0){et("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;n.copy(F.mapSize);let de=F.getFrameExtents();n.multiply(de),a.copy(F.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/de.x),n.x=a.x*de.x,F.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/de.y),n.y=a.y*de.y,F.mapSize.y=a.y));let P=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=P,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ss){if(H.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ar(n.x,n.y,{format:Xn,type:Nr,minFilter:Pi,magFilter:Pi,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new ka(n.x,n.y,Er),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=gn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=mi,F.map.depthTexture.magFilter=mi}else H.isPointLight?(F.map=new lh(n.x),F.map.depthTexture=new Op(n.x,Dr)):(F.map=new Ar(n.x,n.y),F.map.depthTexture=new ka(n.x,n.y,Dr)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=gn,this.type===No?(F.map.depthTexture.compareFunction=P?Xd:Wd,F.map.depthTexture.minFilter=Pi,F.map.depthTexture.magFilter=Pi):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=mi,F.map.depthTexture.magFilter=mi);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==n.x||F.map.height!==n.y)&&F.map.setSize(n.x,n.y);let J=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();H.isPointLight!==!0&&F.updateMatrices(H,T);let ce=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:T.layers;for(let Ie=0;Ie<J;Ie++){let Z=F.getCamera(Ie);if(H.isPointLight){let ve=F.camera,Ce=F.matrix,De=H.distance||ve.far;De!==ve.far&&(ve.far=De,ve.updateProjectionMatrix()),Ks.setFromMatrixPosition(H.matrixWorld),ve.position.copy(Ks),hh.copy(ve.position),hh.add(PS[Ie]),ve.up.copy(CS[Ie]),ve.lookAt(hh),ve.updateMatrixWorld(),Ce.makeTranslation(-Ks.x,-Ks.y,-Ks.z),jf.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),F._frustum.setFromProjectionMatrix(jf,ve.coordinateSystem,ve.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,Ie),e.clear();else{Ie===0&&(e.setRenderTarget(F.map),e.clear());let ve=F.getViewport(Ie);s.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),k.viewport(s)}r=F.getFrustum(Ie),v(g,T,Z,H,ce,this.type)}F.isPointLightShadow!==!0&&this.type===Ss&&S(F,T),F.needsUpdate=!1}f=this.type,_.needsUpdate=!1,e.setRenderTarget(R,N,L)};function S(b,g){let T=t.update(x);c.defines.VSM_SAMPLES!==b.blurSamples&&(c.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ar(n.x,n.y,{format:Xn,type:Nr}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),c.uniforms.shadow_pass.value=b.map.depthTexture,c.uniforms.resolution.value.set(b.map.width,b.map.height),c.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(g,null,T,c,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(g,null,T,p,x,null)}function M(b,g,T,R){let N=null,L=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)N=L;else if(N=T.isPointLight===!0?l:o,e.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=N.uuid,G=g.uuid,C=u[k];C===void 0&&(C={},u[k]=C);let O=C[G];O===void 0&&(O=N.clone(),C[G]=O,g.addEventListener("dispose",y)),N=O}if(N.visible=g.visible,N.wireframe=g.wireframe,R===Ss?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:d[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,T.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let k=e.properties.get(N);k.light=T}return N}function v(b,g,T,R,N,L){if(b.visible===!1)return;if(b.layers.test(N)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Ss)&&(!b.frustumCulled||b.intersectsFrustum(r))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let G=t.update(b),C=b.material;if(Array.isArray(C)){let O=G.groups;for(let H=0,F=O.length;H<F;H++){let de=O[H],P=C[de.materialIndex];if(P&&P.visible){let J=M(b,P,R,L);b.onBeforeShadow(e,b,g,T,G,J,de),e.renderBufferDirect(T,null,G,J,b,de),b.onAfterShadow(e,b,g,T,G,J,de)}}}else if(C.visible){let O=M(b,C,R,L);b.onBeforeShadow(e,b,g,T,G,O,null),e.renderBufferDirect(T,null,G,O,b,null),b.onAfterShadow(e,b,g,T,G,O,null)}}let k=b.children;for(let G=0,C=k.length;G<C;G++)v(k[G],g,T,R,N,L)}function y(b){b.target.removeEventListener("dispose",y);for(let g in u){let T=u[g],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function IS(e,t){function i(){let I=!1,K=new kt,me=null,ae=new kt(0,0,0,0);return{setMask:function(xe){me!==xe&&!I&&(e.colorMask(xe,xe,xe,xe),me=xe)},setLocked:function(xe){I=xe},setClear:function(xe,$,X,q,Q){Q===!0&&(xe*=q,$*=q,X*=q),K.set(xe,$,X,q),ae.equals(K)===!1&&(e.clearColor(xe,$,X,q),ae.copy(K))},reset:function(){I=!1,me=null,ae.set(-1,0,0,0)}}}function r(){let I=!1,K=!1,me=null,ae=null,xe=null;return{setReversed:function($){if(K!==$){let X=t.get("EXT_clip_control");$?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),K=$;let q=xe;xe=null,this.setClear(q)}},getReversed:function(){return K},setTest:function($){$?ye(e.DEPTH_TEST):Ge(e.DEPTH_TEST)},setMask:function($){me!==$&&!I&&(e.depthMask($),me=$)},setFunc:function($){if(K&&($=$g[$]),ae!==$){switch($){case xu:e.depthFunc(e.NEVER);break;case yu:e.depthFunc(e.ALWAYS);break;case Mu:e.depthFunc(e.LESS);break;case bs:e.depthFunc(e.LEQUAL);break;case Su:e.depthFunc(e.EQUAL);break;case Tu:e.depthFunc(e.GEQUAL);break;case bu:e.depthFunc(e.GREATER);break;case Eu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ae=$}},setLocked:function($){I=$},setClear:function($){xe!==$&&(xe=$,K&&($=1-$),e.clearDepth($))},reset:function(){I=!1,me=null,ae=null,xe=null,K=!1}}}function n(){let I=!1,K=null,me=null,ae=null,xe=null,$=null,X=null,q=null,Q=null;return{setTest:function(ne){I||(ne?ye(e.STENCIL_TEST):Ge(e.STENCIL_TEST))},setMask:function(ne){K!==ne&&!I&&(e.stencilMask(ne),K=ne)},setFunc:function(ne,ue,he){(me!==ne||ae!==ue||xe!==he)&&(e.stencilFunc(ne,ue,he),me=ne,ae=ue,xe=he)},setOp:function(ne,ue,he){($!==ne||X!==ue||q!==he)&&(e.stencilOp(ne,ue,he),$=ne,X=ue,q=he)},setLocked:function(ne){I=ne},setClear:function(ne){Q!==ne&&(e.clearStencil(ne),Q=ne)},reset:function(){I=!1,K=null,me=null,ae=null,xe=null,$=null,X=null,q=null,Q=null}}}let a=new i,s=new r,o=new n,l={},u=new WeakMap,h={},d={},c={},p=new WeakMap,m=[],x=null,_=!1,f=null,S=null,M=null,v=null,y=null,b=null,g=null,T=new rt(0,0,0),R=0,N=!1,L=null,k=null,G=null,C=null,O=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,de=0,P=e.getParameter(e.VERSION);P.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(P)[1]),F=de>=1):P.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),F=de>=2);let J=null,ce={},Ie=e.getParameter(e.SCISSOR_BOX),Z=e.getParameter(e.VIEWPORT),ve=new kt().fromArray(Ie),Ce=new kt().fromArray(Z);function De(I,K,me,ae){let xe=new Uint8Array(4),$=e.createTexture();e.bindTexture(I,$),e.texParameteri(I,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(I,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let X=0;X<me;X++)I===e.TEXTURE_3D||I===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,ae,0,e.RGBA,e.UNSIGNED_BYTE,xe):e.texImage2D(K+X,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return $}let ze={};ze[e.TEXTURE_2D]=De(e.TEXTURE_2D,e.TEXTURE_2D,1),ze[e.TEXTURE_CUBE_MAP]=De(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[e.TEXTURE_2D_ARRAY]=De(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ze[e.TEXTURE_3D]=De(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ye(e.DEPTH_TEST),s.setFunc(bs),Ne(!1),We(Md),ye(e.CULL_FACE),Ee(Wn);function ye(I){h[I]!==!0&&(e.enable(I),h[I]=!0)}function Ge(I){h[I]!==!1&&(e.disable(I),h[I]=!1)}function Xe(I,K){return c[I]!==K?(e.bindFramebuffer(I,K),c[I]=K,I===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=K),I===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=K),!0):!1}function ge(I,K){let me=m,ae=!1;if(I){me=p.get(K),me===void 0&&(me=[],p.set(K,me));let xe=I.textures;if(me.length!==xe.length||me[0]!==e.COLOR_ATTACHMENT0){for(let $=0,X=xe.length;$<X;$++)me[$]=e.COLOR_ATTACHMENT0+$;me.length=xe.length,ae=!0}}else me[0]!==e.BACK&&(me[0]=e.BACK,ae=!0);ae&&e.drawBuffers(me)}function ke(I){return x!==I?(e.useProgram(I),x=I,!0):!1}let le={[Sa]:e.FUNC_ADD,[xg]:e.FUNC_SUBTRACT,[yg]:e.FUNC_REVERSE_SUBTRACT};le[Mg]=e.MIN,le[Sg]=e.MAX;let Ae={[Tg]:e.ZERO,[bg]:e.ONE,[Eg]:e.SRC_COLOR,[Ed]:e.SRC_ALPHA,[Lg]:e.SRC_ALPHA_SATURATE,[Pg]:e.DST_COLOR,[Ag]:e.DST_ALPHA,[wg]:e.ONE_MINUS_SRC_COLOR,[wd]:e.ONE_MINUS_SRC_ALPHA,[Cg]:e.ONE_MINUS_DST_COLOR,[Rg]:e.ONE_MINUS_DST_ALPHA,[Ig]:e.CONSTANT_COLOR,[Dg]:e.ONE_MINUS_CONSTANT_COLOR,[Ng]:e.CONSTANT_ALPHA,[Ug]:e.ONE_MINUS_CONSTANT_ALPHA};function Ee(I,K,me,ae,xe,$,X,q,Q,ne){if(I===Wn){_===!0&&(Ge(e.BLEND),_=!1);return}if(_===!1&&(ye(e.BLEND),_=!0),I!==_g){if(I!==f||ne!==N){if((S!==Sa||y!==Sa)&&(e.blendEquation(e.FUNC_ADD),S=Sa,y=Sa),ne)switch(I){case Ts:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sd:e.blendFunc(e.ONE,e.ONE);break;case Td:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case bd:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:it("WebGLState: Invalid blending: ",I);break}else switch(I){case Ts:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Sd:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Td:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bd:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",I);break}M=null,v=null,b=null,g=null,T.set(0,0,0),R=0,f=I,N=ne}return}xe=xe||K,$=$||me,X=X||ae,(K!==S||xe!==y)&&(e.blendEquationSeparate(le[K],le[xe]),S=K,y=xe),(me!==M||ae!==v||$!==b||X!==g)&&(e.blendFuncSeparate(Ae[me],Ae[ae],Ae[$],Ae[X]),M=me,v=ae,b=$,g=X),(q.equals(T)===!1||Q!==R)&&(e.blendColor(q.r,q.g,q.b,Q),T.copy(q),R=Q),f=I,N=!1}function V(I,K){I.side===Tr?Ge(e.CULL_FACE):ye(e.CULL_FACE);let me=I.side===xi;K&&(me=!me),Ne(me),I.blending===Ts&&I.transparent===!1?Ee(Wn):Ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),a.setMask(I.colorWrite);let ae=I.stencilWrite;o.setTest(ae),ae&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ye(e.SAMPLE_ALPHA_TO_COVERAGE):Ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(I){L!==I&&(I?e.frontFace(e.CW):e.frontFace(e.CCW),L=I)}function We(I){I!==mg?(ye(e.CULL_FACE),I!==k&&(I===Md?e.cullFace(e.BACK):I===gg?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ge(e.CULL_FACE),k=I}function we(I){I!==G&&(F&&e.lineWidth(I),G=I)}function qe(I,K,me){I?(ye(e.POLYGON_OFFSET_FILL),(C!==K||O!==me)&&(C=K,O=me,s.getReversed()&&(K=-K,me=-me),e.polygonOffset(K,me))):Ge(e.POLYGON_OFFSET_FILL)}function Qe(I){I?ye(e.SCISSOR_TEST):Ge(e.SCISSOR_TEST)}function tt(I){I===void 0&&(I=e.TEXTURE0+H-1),J!==I&&(e.activeTexture(I),J=I)}function U(I,K,me){me===void 0&&(J===null?me=e.TEXTURE0+H-1:me=J);let ae=ce[me];ae===void 0&&(ae={type:void 0,texture:void 0},ce[me]=ae),(ae.type!==I||ae.texture!==K)&&(J!==me&&(e.activeTexture(me),J=me),e.bindTexture(I,K||ze[I]),ae.type=I,ae.texture=K)}function Re(){let I=ce[J];I!==void 0&&I.type!==void 0&&(e.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pe(){try{e.compressedTexImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function fe(){try{e.texSubImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function Pe(){try{e.texSubImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function Le(){try{e.texStorage2D(...arguments)}catch(I){it("WebGLState:",I)}}function A(){try{e.texStorage3D(...arguments)}catch(I){it("WebGLState:",I)}}function E(){try{e.texImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function z(){try{e.texImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function se(I){return d[I]!==void 0?d[I]:e.getParameter(I)}function Y(I,K){d[I]!==K&&(e.pixelStorei(I,K),d[I]=K)}function te(I){ve.equals(I)===!1&&(e.scissor(I.x,I.y,I.z,I.w),ve.copy(I))}function j(I){Ce.equals(I)===!1&&(e.viewport(I.x,I.y,I.z,I.w),Ce.copy(I))}function D(I,K){let me=u.get(K);me===void 0&&(me=new WeakMap,u.set(K,me));let ae=me.get(I);ae===void 0&&(ae=e.getUniformBlockIndex(K,I.name),e.uniformBlockBinding(K,ae,ae),me.set(I,ae))}function ie(I,K,me){let ae=u.get(K).get(I);l[ae]!==me&&(e.bindBufferBase(e.UNIFORM_BUFFER,ae,me),l[ae]=me)}function _e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,ce={},c={},l={},p=new WeakMap,m=[],x=null,_=!1,f=null,S=null,M=null,v=null,y=null,b=null,g=null,T=new rt(0,0,0),R=0,N=!1,L=null,k=null,G=null,C=null,O=null,ve.set(0,0,e.canvas.width,e.canvas.height),Ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ye,disable:Ge,bindFramebuffer:Xe,drawBuffers:ge,useProgram:ke,setBlending:Ee,setMaterial:V,setFlipSided:Ne,setCullFace:We,setLineWidth:we,setPolygonOffset:qe,setScissorTest:Qe,activeTexture:tt,bindTexture:U,unbindTexture:Re,compressedTexImage2D:pe,compressedTexImage3D:Se,texImage2D:E,texImage3D:z,pixelStorei:Y,getParameter:se,updateUBOMapping:D,uniformBlockBinding:ie,texStorage2D:Le,texStorage3D:A,texSubImage2D:fe,texSubImage3D:Pe,compressedTexSubImage2D:Te,compressedTexSubImage3D:Me,scissor:te,viewport:j,reset:_e}}function DS(e,t,i,r,n,a,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Fe,h=new WeakMap,d=new Set,c,p=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,E){return _?new OffscreenCanvas(A,E):jo("canvas")}function S(A,E,z){let se=1,Y=Le(A);if((Y.width>z||Y.height>z)&&(se=z/Math.max(Y.width,Y.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let te=Math.floor(se*Y.width),j=Math.floor(se*Y.height);c===void 0&&(c=f(te,j));let D=E?f(te,j):c;return D.width=te,D.height=j,D.getContext("2d").drawImage(A,0,0,te,j),et("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+te+"x"+j+")."),D}else return"data"in A&&et("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function M(A){return A.generateMipmaps}function v(A){e.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(A,E,z,se,Y,te=!1){if(A!==null){if(e[A]!==void 0)return e[A];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j;se&&(j=t.get("EXT_texture_norm16"),j||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let D=E;if(E===e.RED&&(z===e.FLOAT&&(D=e.R32F),z===e.HALF_FLOAT&&(D=e.R16F),z===e.UNSIGNED_BYTE&&(D=e.R8),z===e.UNSIGNED_SHORT&&j&&(D=j.R16_EXT),z===e.SHORT&&j&&(D=j.R16_SNORM_EXT)),E===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(D=e.R8UI),z===e.UNSIGNED_SHORT&&(D=e.R16UI),z===e.UNSIGNED_INT&&(D=e.R32UI),z===e.BYTE&&(D=e.R8I),z===e.SHORT&&(D=e.R16I),z===e.INT&&(D=e.R32I)),E===e.RG&&(z===e.FLOAT&&(D=e.RG32F),z===e.HALF_FLOAT&&(D=e.RG16F),z===e.UNSIGNED_BYTE&&(D=e.RG8),z===e.UNSIGNED_SHORT&&j&&(D=j.RG16_EXT),z===e.SHORT&&j&&(D=j.RG16_SNORM_EXT)),E===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(D=e.RG8UI),z===e.UNSIGNED_SHORT&&(D=e.RG16UI),z===e.UNSIGNED_INT&&(D=e.RG32UI),z===e.BYTE&&(D=e.RG8I),z===e.SHORT&&(D=e.RG16I),z===e.INT&&(D=e.RG32I)),E===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(D=e.RGB8UI),z===e.UNSIGNED_SHORT&&(D=e.RGB16UI),z===e.UNSIGNED_INT&&(D=e.RGB32UI),z===e.BYTE&&(D=e.RGB8I),z===e.SHORT&&(D=e.RGB16I),z===e.INT&&(D=e.RGB32I)),E===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(D=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(D=e.RGBA16UI),z===e.UNSIGNED_INT&&(D=e.RGBA32UI),z===e.BYTE&&(D=e.RGBA8I),z===e.SHORT&&(D=e.RGBA16I),z===e.INT&&(D=e.RGBA32I)),E===e.RGB&&(z===e.UNSIGNED_SHORT&&j&&(D=j.RGB16_EXT),z===e.SHORT&&j&&(D=j.RGB16_SNORM_EXT),z===e.UNSIGNED_INT_5_9_9_9_REV&&(D=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(D=e.R11F_G11F_B10F)),E===e.RGBA){let ie=te?qo:yt.getTransfer(Y);z===e.FLOAT&&(D=e.RGBA32F),z===e.HALF_FLOAT&&(D=e.RGBA16F),z===e.UNSIGNED_BYTE&&(D=ie===Pt?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT&&j&&(D=j.RGBA16_EXT),z===e.SHORT&&j&&(D=j.RGBA16_SNORM_EXT),z===e.UNSIGNED_SHORT_4_4_4_4&&(D=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(D=e.RGB5_A1)}return(D===e.R16F||D===e.R32F||D===e.RG16F||D===e.RG32F||D===e.RGBA16F||D===e.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function g(A,E){let z;return A?E===null||E===Dr||E===ba?z=e.DEPTH24_STENCIL8:E===Er?z=e.DEPTH32F_STENCIL8:E===ws&&(z=e.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Dr||E===ba?z=e.DEPTH_COMPONENT24:E===Er?z=e.DEPTH_COMPONENT32F:E===ws&&(z=e.DEPTH_COMPONENT16),z}function T(A,E){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==mi&&A.minFilter!==Pi?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function R(A){let E=new WeakRef(A);r.get(A).__ref=E,m.add(E),x.register(A,E,E)}function N(A){let E=r.get(A).__ref;E!==void 0&&(m.delete(E),x.unregister(E))}function L(A){G(A.target)}function k(A){C(A.target)}function G(A){A.removeEventListener("dispose",L),N(A),H(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function C(A){A.removeEventListener("dispose",k),N(A),de(A)}function O(){for(let A of m){let E=A.deref();E!==void 0&&(E.isRenderTarget===!0?C(E):G(E))}m.clear(),d.clear()}function H(A){let E=r.get(A);if(E.__webglInit===void 0)return;let z=A.source,se=p.get(z);if(se){let Y=se[E.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&F(A),Object.keys(se).length===0&&p.delete(z)}r.remove(A)}function F(A){let E=r.get(A);e.deleteTexture(E.__webglTexture);let z=A.source,se=p.get(z);delete se[E.__cacheKey],s.memory.textures--}function de(A){let E=r.get(A);E.__depthDisposeCallback&&E.__depthDisposeCallback();let z=A.depthTexture;if(z&&z.renderTarget===A&&G(z),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let te=0;te<E.__webglFramebuffer[Y].length;te++)e.deleteFramebuffer(E.__webglFramebuffer[Y][te]);else e.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)e.deleteFramebuffer(E.__webglFramebuffer[Y]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let se=A.textures;for(let Y=0,te=se.length;Y<te;Y++){let j=r.get(se[Y]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),s.memory.textures--),r.remove(se[Y])}r.remove(A)}let P=0;function J(){P=0}function ce(){return P}function Ie(A){P=A}function Z(){let A=P;return A>=n.maxTextures&&et("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),P+=1,A}function ve(A){let E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.mipmapsAutoUpdate),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Ce(A,E){let z=r.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let se=A.image;if(se===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{V(z,A,E);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+E)}function De(A,E){let z=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){V(z,A,E);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+E)}function ze(A,E){let z=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){V(z,A,E);return}i.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+E)}function ye(A,E){let z=r.get(A);if(A.version>0&&z.__version!==A.version){Ne(z,A,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+E)}let Ge={[Uo]:e.REPEAT,[Zr]:e.CLAMP_TO_EDGE,[Cu]:e.MIRRORED_REPEAT},Xe={[mi]:e.NEAREST,[zg]:e.NEAREST_MIPMAP_NEAREST,[Oo]:e.NEAREST_MIPMAP_LINEAR,[Pi]:e.LINEAR,[Lu]:e.LINEAR_MIPMAP_NEAREST,[br]:e.LINEAR_MIPMAP_LINEAR},ge={[Hg]:e.NEVER,[qd]:e.ALWAYS,[Gg]:e.LESS,[Wd]:e.LEQUAL,[Wg]:e.EQUAL,[Xd]:e.GEQUAL,[Xg]:e.GREATER,[qg]:e.NOTEQUAL};function ke(A,E){if(E.type===Er&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Pi||E.magFilter===Lu||E.magFilter===Oo||E.magFilter===br||E.minFilter===Pi||E.minFilter===Lu||E.minFilter===Oo||E.minFilter===br)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Ge[E.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Ge[E.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Ge[E.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Xe[E.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Xe[E.minFilter]),E.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,ge[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==Oo&&E.minFilter!==br||E.type===Er&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function le(A,E){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",L),R(E));let se=E.source,Y=p.get(se);Y===void 0&&(Y={},p.set(se,Y));let te=ve(E);if(te!==A.__cacheKey){Y[te]===void 0&&(Y[te]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Y[te].usedTimes++;let j=Y[A.__cacheKey];j!==void 0&&(Y[A.__cacheKey].usedTimes--,j.usedTimes===0&&F(E)),A.__cacheKey=te,A.__webglTexture=Y[te].texture}return z}function Ae(A,E,z){return Math.floor(Math.floor(A/z)/E)}function Ee(A,E,z,se){let Y=A.updateRanges;if(Y.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,z,se,E.data);else{Y.sort((_e,I)=>_e.start-I.start);let te=0;for(let _e=1;_e<Y.length;_e++){let I=Y[te],K=Y[_e],me=I.start+I.count,ae=Ae(K.start,E.width,4),xe=Ae(I.start,E.width,4);K.start<=me+1&&ae===xe&&Ae(K.start+K.count-1,E.width,4)===ae?I.count=Math.max(I.count,K.start+K.count-I.start):(++te,Y[te]=K)}Y.length=te+1;let j=i.getParameter(e.UNPACK_ROW_LENGTH),D=i.getParameter(e.UNPACK_SKIP_PIXELS),ie=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let _e=0,I=Y.length;_e<I;_e++){let K=Y[_e],me=Math.floor(K.start/4),ae=Math.ceil(K.count/4),xe=me%E.width,$=Math.floor(me/E.width),X=ae;i.pixelStorei(e.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(e.UNPACK_SKIP_ROWS,$),i.texSubImage2D(e.TEXTURE_2D,0,xe,$,X,1,z,se,E.data)}A.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,j),i.pixelStorei(e.UNPACK_SKIP_PIXELS,D),i.pixelStorei(e.UNPACK_SKIP_ROWS,ie)}}function V(A,E,z){let se=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=e.TEXTURE_3D);let Y=le(A,E),te=E.source;i.bindTexture(se,A.__webglTexture,e.TEXTURE0+z);let j=r.get(te);if(te.version!==j.__version||Y===!0){if(i.activeTexture(e.TEXTURE0+z),!(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)){let q=yt.getPrimaries(yt.workingColorSpace),Q=E.colorSpace===_n?null:yt.getPrimaries(E.colorSpace),ne=E.colorSpace===_n||q===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let D=S(E.image,!1,n.maxTextureSize);D=Me(E,D);let ie=a.convert(E.format,E.colorSpace),_e=a.convert(E.type),I=b(E.internalFormat,ie,_e,E.normalized,E.colorSpace,E.isVideoTexture);ke(se,E);let K,me=E.mipmaps,ae=E.isVideoTexture!==!0,xe=j.__version===void 0||Y===!0,$=te.dataReady,X=T(E,D);if(E.isDepthTexture)I=g(E.format===vn,E.type),xe&&(ae?i.texStorage2D(e.TEXTURE_2D,1,I,D.width,D.height):i.texImage2D(e.TEXTURE_2D,0,I,D.width,D.height,0,ie,_e,null));else if(E.isDataTexture)if(me.length>0){ae&&xe&&i.texStorage2D(e.TEXTURE_2D,X,I,me[0].width,me[0].height);for(let q=0,Q=me.length;q<Q;q++)K=me[q],ae?$&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,K.width,K.height,ie,_e,K.data):i.texImage2D(e.TEXTURE_2D,q,I,K.width,K.height,0,ie,_e,K.data);E.generateMipmaps=!1}else ae?(xe&&i.texStorage2D(e.TEXTURE_2D,X,I,D.width,D.height),$&&Ee(E,D,ie,_e)):i.texImage2D(e.TEXTURE_2D,0,I,D.width,D.height,0,ie,_e,D.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ae&&xe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,X,I,me[0].width,me[0].height,D.depth);for(let q=0,Q=me.length;q<Q;q++)if(K=me[q],E.format!==Ur)if(ie!==null)if(ae){if($)if(E.layerUpdates.size>0){let ne=gf(K.width,K.height,E.format,E.type);for(let ue of E.layerUpdates){let he=K.data.subarray(ue*ne/K.data.BYTES_PER_ELEMENT,(ue+1)*ne/K.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,ue,K.width,K.height,1,ie,he)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,K.width,K.height,D.depth,ie,K.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,I,K.width,K.height,D.depth,0,K.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?$&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,K.width,K.height,D.depth,ie,_e,K.data):i.texImage3D(e.TEXTURE_2D_ARRAY,q,I,K.width,K.height,D.depth,0,ie,_e,K.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ae&&xe&&i.texStorage2D(e.TEXTURE_2D,X,I,me[0].width,me[0].height);for(let q=0,Q=me.length;q<Q;q++)K=me[q],E.format!==Ur?ie!==null?ae?$&&i.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,K.width,K.height,ie,K.data):i.compressedTexImage2D(e.TEXTURE_2D,q,I,K.width,K.height,0,K.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?$&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,K.width,K.height,ie,_e,K.data):i.texImage2D(e.TEXTURE_2D,q,I,K.width,K.height,0,ie,_e,K.data)}else if(E.isDataArrayTexture)if(ae){if(xe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,X,I,D.width,D.height,D.depth),$)if(E.layerUpdates.size>0){let q=gf(D.width,D.height,E.format,E.type);for(let Q of E.layerUpdates){let ne=D.data.subarray(Q*q/D.data.BYTES_PER_ELEMENT,(Q+1)*q/D.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,D.width,D.height,1,ie,_e,ne)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,ie,_e,D.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,I,D.width,D.height,D.depth,0,ie,_e,D.data);else if(E.isData3DTexture)ae?(xe&&i.texStorage3D(e.TEXTURE_3D,X,I,D.width,D.height,D.depth),$&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,ie,_e,D.data)):i.texImage3D(e.TEXTURE_3D,0,I,D.width,D.height,D.depth,0,ie,_e,D.data);else if(E.isFramebufferTexture){if(xe)if(ae)i.texStorage2D(e.TEXTURE_2D,X,I,D.width,D.height);else{let q=D.width,Q=D.height;for(let ne=0;ne<X;ne++)i.texImage2D(e.TEXTURE_2D,ne,I,q,Q,0,ie,_e,null),q>>=1,Q>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){let q=e.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),D.parentNode!==q){q.appendChild(D),d.add(E),q.onpaint=Q=>{let ne=Q.changedElements;for(let ue of d)ne.includes(ue.image)&&(ue.needsUpdate=!0)},q.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,D);else{let Q=e.RGBA,ne=e.RGBA,ue=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Q,ne,ue,D)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(me.length>0){if(ae&&xe){let q=Le(me[0]);i.texStorage2D(e.TEXTURE_2D,X,I,q.width,q.height)}for(let q=0,Q=me.length;q<Q;q++)K=me[q],ae?$&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,ie,_e,K):i.texImage2D(e.TEXTURE_2D,q,I,ie,_e,K);E.generateMipmaps=!1}else if(ae){if(xe){let q=Le(D);i.texStorage2D(e.TEXTURE_2D,X,I,q.width,q.height)}$&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,_e,D)}else i.texImage2D(e.TEXTURE_2D,0,I,ie,_e,D);M(E)&&E.mipmapsAutoUpdate===!0&&v(se),j.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ne(A,E,z){if(E.image.length!==6)return;let se=le(A,E),Y=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+z);let te=r.get(Y);if(Y.version!==te.__version||se===!0){i.activeTexture(e.TEXTURE0+z);let j=yt.getPrimaries(yt.workingColorSpace),D=E.colorSpace===_n?null:yt.getPrimaries(E.colorSpace),ie=E.colorSpace===_n||j===D?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let _e=E.isCompressedTexture||E.image[0].isCompressedTexture,I=E.image[0]&&E.image[0].isDataTexture,K=[];for(let he=0;he<6;he++)!_e&&!I?K[he]=S(E.image[he],!0,n.maxCubemapSize):K[he]=I?E.image[he].image:E.image[he],K[he]=Me(E,K[he]);let me=K[0],ae=a.convert(E.format,E.colorSpace),xe=a.convert(E.type),$=b(E.internalFormat,ae,xe,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,q=te.__version===void 0||se===!0,Q=Y.dataReady,ne=T(E,me);ke(e.TEXTURE_CUBE_MAP,E);let ue;if(E.isDepthTexture){if($=g(E.format===vn,E.type),q)if(X)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,$,me.width,me.height);else for(let he=0;he<6;he++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,$,me.width,me.height,0,ae,xe,null)}else if(_e){X&&q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ne,$,me.width,me.height);for(let he=0;he<6;he++){ue=K[he].mipmaps;for(let Ue=0;Ue<ue.length;Ue++){let be=ue[Ue];E.format!==Ur?ae!==null?X?Q&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,be.width,be.height,ae,be.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,$,be.width,be.height,0,be.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,0,0,be.width,be.height,ae,xe,be.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue,$,be.width,be.height,0,ae,xe,be.data)}}}else{if(ue=E.mipmaps,X&&q){ue.length>0&&ne++;let he=Le(K[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ne,$,he.width,he.height)}for(let he=0;he<6;he++)if(I){X?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,K[he].width,K[he].height,ae,xe,K[he].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,$,K[he].width,K[he].height,0,ae,xe,K[he].data);for(let Ue=0;Ue<ue.length;Ue++){let be=ue[Ue].image[he].image;X?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,be.width,be.height,ae,xe,be.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,$,be.width,be.height,0,ae,xe,be.data)}}else{X?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ae,xe,K[he]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,$,ae,xe,K[he]);for(let Ue=0;Ue<ue.length;Ue++){let be=ue[Ue];X?Q&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,0,0,ae,xe,be.image[he]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue+1,$,ae,xe,be.image[he])}}}M(E)&&E.mipmapsAutoUpdate===!0&&v(e.TEXTURE_CUBE_MAP),te.__version=Y.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function We(A,E,z,se,Y,te){let j=a.convert(z.format,z.colorSpace),D=a.convert(z.type),ie=b(z.internalFormat,j,D,z.normalized,z.colorSpace),_e=r.get(E),I=r.get(z);if(I.__renderTarget=E,!_e.__hasExternalTextures){let K=Math.max(1,E.width>>te),me=Math.max(1,E.height>>te);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?i.texImage3D(Y,te,ie,K,me,E.depth,0,j,D,null):i.texImage2D(Y,te,ie,K,me,0,j,D,null)}i.bindFramebuffer(e.FRAMEBUFFER,A),Pe(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,Y,I.__webglTexture,0,fe(E)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,se,Y,I.__webglTexture,te),i.bindFramebuffer(e.FRAMEBUFFER,null)}function we(A,E,z){if(e.bindRenderbuffer(e.RENDERBUFFER,A),E.depthBuffer){let se=E.depthTexture,Y=se&&se.isDepthTexture?se.type:null,te=g(E.stencilBuffer,Y),j=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(E),te,E.width,E.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(E),te,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,te,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,A)}else{let se=E.textures;for(let Y=0;Y<se.length;Y++){let te=se[Y],j=a.convert(te.format,te.colorSpace),D=a.convert(te.type),ie=b(te.internalFormat,j,D,te.normalized,te.colorSpace);Pe(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,fe(E),ie,E.width,E.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,fe(E),ie,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,ie,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qe(A,E,z){let se=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=r.get(E.depthTexture);Y.__renderTarget=E;let te=se?E.depthTexture.image[0]:E.depthTexture.image;(!Y.__webglTexture||te.width!==E.width||te.height!==E.height)&&(te.width=E.width,te.height=E.height,E.depthTexture.needsUpdate=!0),se?ye(E.depthTexture,0):Ce(E.depthTexture,0);let j=Y.__webglTexture,D=fe(E),ie=se?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,_e=E.depthTexture.format===vn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===gn)Pe(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,ie,j,0,D):e.framebufferTexture2D(e.FRAMEBUFFER,_e,ie,j,0);else if(E.depthTexture.format===vn)Pe(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,_e,ie,j,0,D):e.framebufferTexture2D(e.FRAMEBUFFER,_e,ie,j,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(A){let E=r.get(A),z=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){let se=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){let Y=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",Y)};se.addEventListener("dispose",Y),E.__depthDisposeCallback=Y}E.__boundDepthTexture=se}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(z)for(let se=0;se<6;se++)qe(E.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?qe(E.__webglFramebuffer[0],A,0):qe(E.__webglFramebuffer,A,0);else if(z){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=e.createRenderbuffer(),we(E.__webglDepthbuffer[se],A,!1);else{let Y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[se];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,te)}}else if(A.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),we(E.__webglDepthbuffer,A,!1);else{let se=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,Y)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(A,E,z){let se=r.get(A);E!==void 0&&We(se.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&Qe(A)}function U(A){let E=A.texture,z=r.get(A),se=r.get(E);A.addEventListener("dispose",k),R(A);let Y=A.textures,te=A.isWebGLCubeRenderTarget===!0,j=Y.length>1;if(j||(se.__webglTexture===void 0&&(se.__webglTexture=e.createTexture()),se.__version=E.version,s.memory.textures++),te){z.__webglFramebuffer=[];for(let D=0;D<6;D++)if(E.mipmaps.length>0){z.__webglFramebuffer[D]=[];for(let ie=0;ie<E.mipmaps.length;ie++)z.__webglFramebuffer[D][ie]=e.createFramebuffer()}else z.__webglFramebuffer[D]=e.createFramebuffer()}else{if(E.mipmaps.length>0){z.__webglFramebuffer=[];for(let D=0;D<E.mipmaps.length;D++)z.__webglFramebuffer[D]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(j)for(let D=0,ie=Y.length;D<ie;D++){let _e=r.get(Y[D]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&Pe(A)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let D=0;D<Y.length;D++){let ie=Y[D];z.__webglColorRenderbuffer[D]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[D]);let _e=a.convert(ie.format,ie.colorSpace),I=a.convert(ie.type),K=b(ie.internalFormat,_e,I,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),me=fe(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,me,K,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+D,e.RENDERBUFFER,z.__webglColorRenderbuffer[D])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),we(z.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){i.bindTexture(e.TEXTURE_CUBE_MAP,se.__webglTexture),ke(e.TEXTURE_CUBE_MAP,E);for(let D=0;D<6;D++)if(E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)We(z.__webglFramebuffer[D][ie],A,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,ie);else We(z.__webglFramebuffer[D],A,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);M(E)?v(e.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),i.unbindTexture()}else if(j){for(let D=0,ie=Y.length;D<ie;D++){let _e=Y[D],I=r.get(_e),K=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(K,I.__webglTexture),ke(K,_e),We(z.__webglFramebuffer,A,_e,e.COLOR_ATTACHMENT0+D,K,0),M(_e)&&v(K)}i.unbindTexture()}else{let D=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(D=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(D,se.__webglTexture),ke(D,E),E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)We(z.__webglFramebuffer[ie],A,E,e.COLOR_ATTACHMENT0,D,ie);else We(z.__webglFramebuffer,A,E,e.COLOR_ATTACHMENT0,D,0);M(E)?v(D):E.mipmaps.length>0&&e.texParameteri(D,e.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),i.unbindTexture()}A.depthBuffer&&Qe(A)}function Re(A){let E=A.textures;for(let z=0,se=E.length;z<se;z++){let Y=E[z];if(M(Y)&&Y.mipmapsAutoUpdate===!0){let te=y(A),j=r.get(Y).__webglTexture;i.bindTexture(te,j),v(te),i.unbindTexture()}}}let pe=[];function Se(A){if(A.samples>0){if(Pe(A)===!1){let E=A.textures,z=A.width,se=A.height,Y=e.COLOR_BUFFER_BIT,te=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=r.get(A),D=E.length>1;if(D)for(let ie=0;ie<E.length;ie++)i.bindFramebuffer(e.FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,j.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),D){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,j.__webglColorRenderbuffer[ie]);let _e=r.get(E[ie]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_e,0)}e.blitFramebuffer(0,0,z,se,0,0,z,se,Y,e.NEAREST),l===!0&&(pe.length=0,pe.push(e.COLOR_ATTACHMENT0+ie),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&pe.push(te),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pe))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),D)for(let ie=0;ie<E.length;ie++){i.bindFramebuffer(e.FRAMEBUFFER,j.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,j.__webglColorRenderbuffer[ie]);let _e=r.get(E[ie]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,j.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,_e,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let E=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function fe(A){return Math.min(n.maxSamples,A.samples)}function Pe(A){let E=r.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(A){let E=s.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Me(A,E){let z=A.colorSpace,se=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Xo&&z!==_n&&(yt.getTransfer(z)===Pt?(se!==Ur||Y!==Zi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",z)),E}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.getTextureUnits=ce,this.setTextureUnits=Ie,this.setTexture2D=Ce,this.setTexture2DArray=De,this.setTexture3D=ze,this.setTextureCube=ye,this.rebindTextures=tt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Pe,this.dispose=O}function NS(e,t){function i(r,n=_n){let a,s=yt.getTransfer(n);if(r===Zi)return e.UNSIGNED_BYTE;if(r===Du)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Nu)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Od)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Fd)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Nd)return e.BYTE;if(r===Ud)return e.SHORT;if(r===ws)return e.UNSIGNED_SHORT;if(r===Iu)return e.INT;if(r===Dr)return e.UNSIGNED_INT;if(r===Er)return e.FLOAT;if(r===Nr)return e.HALF_FLOAT;if(r===zd)return e.ALPHA;if(r===Bd)return e.RGB;if(r===Ur)return e.RGBA;if(r===gn)return e.DEPTH_COMPONENT;if(r===vn)return e.DEPTH_STENCIL;if(r===Uu)return e.RED;if(r===Ou)return e.RED_INTEGER;if(r===Xn)return e.RG;if(r===Fu)return e.RG_INTEGER;if(r===zu)return e.RGBA_INTEGER;if(r===Fo||r===zo||r===Bo||r===ko)if(s===Pt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bu||r===ku||r===Vu||r===Hu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ku)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gu||r===Wu||r===Xu||r===qu||r===ju||r===Vo||r===Yu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Gu||r===Wu)return s===Pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===qu)return a.COMPRESSED_R11_EAC;if(r===ju)return a.COMPRESSED_SIGNED_R11_EAC;if(r===Vo)return a.COMPRESSED_RG11_EAC;if(r===Yu)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ju||r===Ku||r===Zu||r===$u||r===Qu||r===ec||r===tc||r===ic||r===rc||r===nc||r===ac||r===sc||r===oc||r===lc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ju)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ku)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$u)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qu)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ec)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tc)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ic)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rc)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nc)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ac)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sc)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oc)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lc)return s===Pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===cc||r===hc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===uc)return s===Pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dc||r===pc||r===Ho||r===fc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===dc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===pc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ba?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var US=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
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

}`,FS=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Fp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sn({vertexShader:US,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zS=class extends qn{constructor(e,t){super();let i=this,r=null,n=1,a=null,s="local-floor",o=1,l=null,u=null,h=null,d=null,c=null,p=null,m=typeof XRWebGLBinding<"u",x=new FS,_={},f=t.getContextAttributes(),S=null,M=null,v=[],y=[],b=new Fe,g=null,T=null,R=new mr;R.viewport=new kt;let N=new mr;N.viewport=new kt;let L=[R,N],k=new V_,G=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ve=v[Z];return ve===void 0&&(ve=new wc,v[Z]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Z){let ve=v[Z];return ve===void 0&&(ve=new wc,v[Z]=ve),ve.getGripSpace()},this.getHand=function(Z){let ve=v[Z];return ve===void 0&&(ve=new wc,v[Z]=ve),ve.getHandSpace()};function O(Z){let ve=y.indexOf(Z.inputSource);if(ve===-1)return;let Ce=v[ve];Ce!==void 0&&(Ce.update(Z.inputSource,Z.frame,l||a),Ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",F);for(let Z=0;Z<v.length;Z++){let ve=y[Z];ve!==null&&(y[Z]=null,v[Z].disconnect(ve))}G=null,C=null,x.reset();for(let Z in _)delete _[Z];if(e.setRenderTarget(S),c=null,d=null,h=null,r=null,M=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(b.width,b.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){n=Z,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){s=Z,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return h===null&&m&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(b),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ce=null,De=null;f.depth&&(De=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=f.stencil?vn:gn,Ce=f.stencil?ba:Dr);let ze={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:n};h=this.getBinding(),d=h.createProjectionLayer(ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Ar(d.textureWidth,d.textureHeight,{format:Ur,type:Zi,depthTexture:new ka(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};c=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:c}),e.setPixelRatio(1),e.setSize(c.framebufferWidth,c.framebufferHeight,!1),M=new Ar(c.framebufferWidth,c.framebufferHeight,{format:Ur,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await r.requestReferenceSpace(s),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(Z){for(let ve=0;ve<Z.removed.length;ve++){let Ce=Z.removed[ve],De=y.indexOf(Ce);De>=0&&(y[De]=null,v[De].disconnect(Ce))}for(let ve=0;ve<Z.added.length;ve++){let Ce=Z.added[ve],De=y.indexOf(Ce);if(De===-1){for(let ye=0;ye<v.length;ye++)if(ye>=y.length){y.push(Ce),De=ye;break}else if(y[ye]===null){y[ye]=Ce,De=ye;break}if(De===-1)break}let ze=v[De];ze&&ze.connect(Ce)}}function de(Z,ve){ve===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ve.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ve=Z.near,Ce=Z.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(Ce=x.depthFar)),k.near=N.near=R.near=ve,k.far=N.far=R.far=Ce,(G!==k.near||C!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),G=k.near,C=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let De=Z.parent,ze=k.cameras;de(k,De);for(let ye=0;ye<ze.length;ye++)de(ze[ye],De);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),P(Z,k,De)};function P(Z,ve,Ce){Ce===null?Z.matrix.copy(ve.matrixWorld):(Z.matrix.copy(Ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ve.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ve.projectionMatrix),Z.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ps*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&c===null))return o},this.setFoveation=function(Z){o=Z,d!==null&&(d.fixedFoveation=Z),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(Z){return _[Z]};let J=null;function ce(Z,ve){if(u=ve.getViewerPose(l||a),p=ve,u!==null){let Ce=u.views;c!==null&&(e.setRenderTargetFramebuffer(M,c.framebuffer),e.setRenderTarget(M));let De=!1;Ce.length!==k.cameras.length&&(k.cameras.length=0,De=!0);for(let ye=0;ye<Ce.length;ye++){let Ge=Ce[ye],Xe=null;if(c!==null)Xe=c.getViewport(Ge);else{let ke=h.getViewSubImage(d,Ge);Xe=ke.viewport,ye===0&&(e.setRenderTargetTextures(M,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(M))}let ge=L[ye];ge===void 0&&(ge=new mr,ge.layers.enable(ye),ge.viewport=new kt,L[ye]=ge),ge.matrix.fromArray(Ge.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Ge.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),ye===0&&(k.matrix.copy(ge.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),De===!0&&k.cameras.push(ge)}let ze=r.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&m){h=i.getBinding();let ye=h.getDepthInformation(Ce[0]);ye&&ye.isValid&&ye.texture&&x.init(ye,r.renderState)}if(ze&&ze.includes("camera-access")&&m){e.state.unbindTexture(),h=i.getBinding();for(let ye=0;ye<Ce.length;ye++){let Ge=Ce[ye].camera;if(Ge){let Xe=_[Ge];Xe||(Xe=new Fp,_[Ge]=Xe);let ge=h.getCameraImage(Ge);Xe.sourceTexture=ge}}}}for(let Ce=0;Ce<v.length;Ce++){let De=y[Ce],ze=v[Ce];De!==null&&ze!==void 0&&ze.update(De,ve,l||a)}J&&J(Z,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),p=null}let Ie=new vf;Ie.setAnimationLoop(ce),this.setAnimationLoop=function(Z){J=Z},this.dispose=function(){}}},BS=new Ot,Yf=new at;Yf.set(-1,0,0,0,1,0,0,0,1);function kS(e,t){function i(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function r(_,f){f.color.getRGB(_.fogColor.value,rf(e)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function n(_,f,S,M,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(_,f):f.isMeshLambertMaterial?(a(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(_,f),d(_,f)):f.isMeshPhongMaterial?(a(_,f),h(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(_,f),c(_,f),f.isMeshPhysicalMaterial&&p(_,f,v)):f.isMeshMatcapMaterial?(a(_,f),m(_,f)):f.isMeshDepthMaterial?a(_,f):f.isMeshDistanceMaterial?(a(_,f),x(_,f)):f.isMeshNormalMaterial?a(_,f):f.isLineBasicMaterial?(s(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?l(_,f,S,M):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,i(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,i(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,i(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===xi&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,i(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===xi&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,i(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,i(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);let S=t.get(f),M=S.envMap,v=S.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Yf),_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,_.aoMapTransform))}function s(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,i(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,S,M){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*S,_.scale.value=M*.5,f.map&&(_.map.value=f.map,i(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,i(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,i(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,i(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function c(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,S){_.ior.value=f.ior,f.diffuseRoughness>0&&(_.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=f.diffuseRoughnessMap,i(f.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xi&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.retroreflectivity>0&&(_.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=S.texture,_.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,f){f.matcap&&(_.matcap.value=f.matcap)}function x(_,f){let S=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(S.matrixWorld),_.nearDistance.value=S.shadow.camera.near,_.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function VS(e,t,i,r){let n={},a={};function s(S,M){let v=M.program;r.uniformBlockBinding(S,v,n[S.id])}function o(S,M){let v=n[S.id];v===void 0&&(m(S),v=l(S),n[S.id]=v,S.addEventListener("dispose",_));let y=M.program;r.updateUBOMapping(S,y);let b=t.render.frame;a[S.id]!==b&&(u(S),a[S.id]=b)}function l(S){let M=e.createBuffer(),v=S.__size,y=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,v,y),e.bindBuffer(e.UNIFORM_BUFFER,null),M}function u(S){let M=n[S.id],v=S.uniforms,y=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let b=0,g=v.length;b<g;b++){let T=v[b];if(Array.isArray(T))for(let R=0,N=T.length;R<N;R++)h(T[R],b,R,y);else h(T,b,0,y)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(S,M,v,y){if(c(S,M,v,y)===!0){let b=S.__offset,g=S.value;if(Array.isArray(g)){let T=0;for(let R=0;R<g.length;R++){let N=g[R],L=x(N,!0);d(N,S.__data,T),T+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,b,S.__data)}}function d(S,M,v){typeof S=="number"||typeof S=="boolean"?M[v]=S:S.isMatrix3?(M[v]=S.elements[0],M[v+1]=S.elements[1],M[v+2]=S.elements[2],M[v+3]=0,M[v+4]=S.elements[3],M[v+5]=S.elements[4],M[v+6]=S.elements[5],M[v+7]=0,M[v+8]=S.elements[6],M[v+9]=S.elements[7],M[v+10]=S.elements[8],M[v+11]=0):ArrayBuffer.isView(S)?M.set(S.subarray(0,M.length-v),v):S.toArray(M,v)}function c(S,M,v,y){let b=S.value,g=M+"_"+v;if(Array.isArray(b)){y[g]===void 0&&(y[g]=[]);let T=y[g],R=!1;for(let N=0;N<b.length;N++)p(b[N],T,N)===!0&&(R=!0);return R}return p(b,y,g)}function p(S,M,v){if(M[v]===void 0)return typeof S=="number"||typeof S=="boolean"?M[v]=S:ArrayBuffer.isView(S)?M[v]=S.slice():M[v]=S.clone(),!0;{let y=M[v];if(typeof S=="number"||typeof S=="boolean"){if(y!==S)return M[v]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(y.equals(S)===!1)return y.copy(S),!0}}return!1}function m(S){let M=S.uniforms,v=0,y=16;for(let g=0,T=M.length;g<T;g++){let R=Array.isArray(M[g])?M[g]:[M[g]];for(let N=0,L=R.length;N<L;N++){let k=R[N],G=Array.isArray(k.value)?k.value:[k.value],C=Array.isArray(M[g])||Array.isArray(k.value),O=v;for(let F=0,de=G.length;F<de;F++){let P=G[F],J=x(P,C),ce=v%y,Ie=ce%J.boundary,Z=ce+Ie;v+=Ie,Z!==0&&y-Z<J.storage&&(v+=y-Z),F===0&&(O=v),v+=J.storage}let H=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new H((v-O)/Float32Array.BYTES_PER_ELEMENT),k.__offset=O}}let b=v%y;return b>0&&(v+=y-b),S.__size=v,S.__cache={},this}function x(S,M){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=16,v.storage=48):S.isMatrix4?(v.boundary=16,v.storage=64):S.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(v.boundary=16,v.storage=S.byteLength):et("WebGLRenderer: Unsupported uniform value type.",S),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function _(S){let M=S.target;M.removeEventListener("dispose",_),e.deleteBuffer(n[M.id]),delete n[M.id],delete a[M.id]}function f(){for(let S in n)e.deleteBuffer(n[S]);n={},a={}}return{bind:s,update:o,dispose:f}}var HS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kr=null;function GS(){return kr===null&&(kr=new wp(HS,16,16,Xn,Nr),kr.name="DFG_LUT",kr.minFilter=Pi,kr.magFilter=Pi,kr.wrapS=Zr,kr.wrapT=Zr,kr.generateMipmaps=!1,kr.needsUpdate=!0),kr}var WS=class{constructor(e={}){let{canvas:t=Kg(),context:i=null,depth:r=!0,stencil:n=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Zi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let m=c,x=new Set([zu,Fu,Ou]),_=new Set([Zi,Dr,ws,ba,Du,Nu]),f=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},v=null,y=null,b=[],g=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,L=null,k=null,G=null,C=null;this._outputColorSpace=zi;let O=0,H=0,F=null,de=-1,P=null,J=new kt,ce=new kt,Ie=null,Z=new rt(0),ve=0,Ce=t.width,De=t.height,ze=1,ye=null,Ge=null,Xe=new kt(0,0,Ce,De),ge=new kt(0,0,Ce,De),ke=!1,le=new zs,Ae=new Fv,Ee=!1,V=!1,Ne=new Ot,We=new W,we=new kt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function tt(){return F===null?ze:1}let U=i;function Re(w,B){return t.getContext(w,B)}let pe,Se,fe,Pe,Te,Me,Le,A,E,z,se,Y,te,j,D,ie,_e,I,K,me,ae,xe,$;try{let w={alpha:!0,depth:r,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",ue,!1),U===null){let B="webgl2";if(U=Re(B,w),U===null)throw Re(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}X()}catch(w){throw t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),it("WebGLRenderer: "+w.message),w}function X(){pe=new jy(U),pe.init(),ae=new NS(U,pe),Se=new Oy(U,pe,e,ae),fe=new IS(U,pe),Se.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),k=U.createFramebuffer(),G=U.createFramebuffer(),C=U.createFramebuffer(),Pe=new Ky(U),Te=new _S,Me=new DS(U,pe,fe,Te,Se,ae,Pe),Le=new qy(R),A=new $_(U),xe=new Ny(U,A),E=new Yy(U,A,Pe,xe),z=new $y(U,E,A,xe,Pe),I=new Zy(U,Se,Me),D=new Fy(Te),se=new vS(R,Le,pe,Se,xe,D),Y=new kS(R,Te),te=new yS,j=new wS(pe),_e=new Dy(R,Le,fe,z,p,o),ie=new LS(R,z,Se),$=new VS(U,Pe,Se,fe),K=new Uy(U,pe,Pe),me=new Jy(U,pe,Pe),Pe.programs=se.programs,R.capabilities=Se,R.extensions=pe,R.properties=Te,R.renderLists=te,R.shadowMap=ie,R.state=fe,R.info=Pe}m!==Zi&&(T=new eM(m,t.width,t.height,s,r,n));let q=new zS(R,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(w){w!==void 0&&(ze=w,this.setSize(Ce,De,!1))},this.getSize=function(w){return w.set(Ce,De)},this.setSize=function(w,B,oe=!0){if(q.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=w,De=B,t.width=Math.floor(w*ze),t.height=Math.floor(B*ze),oe===!0&&(t.style.width=w+"px",t.style.height=B+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Ce*ze,De*ze).floor()},this.setDrawingBufferSize=function(w,B,oe){Ce=w,De=B,ze=oe,t.width=Math.floor(w*oe),t.height=Math.floor(B*oe),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(m===Zi){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(Xe)},this.setViewport=function(w,B,oe,ee){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,B,oe,ee),fe.viewport(J.copy(Xe).multiplyScalar(tt()).round())},this.getScissor=function(w){return w.copy(ge)},this.setScissor=function(w,B,oe,ee){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,B,oe,ee),fe.scissor(ce.copy(ge).multiplyScalar(tt()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){fe.setScissorTest(ke=w)},this.setOpaqueSort=function(w){ye=w},this.setTransparentSort=function(w){Ge=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,oe=!0){let ee=0;if(w){let re=!1;if(F!==null){let Oe=F.texture.format;re=x.has(Oe)}if(re){let Oe=F.texture.type,Ve=_.has(Oe),Be=_e.getClearColor(),je=_e.getClearAlpha(),$e=Be.r,vt=Be.g,Tt=Be.b;Ve?(f[0]=$e,f[1]=vt,f[2]=Tt,f[3]=je,U.clearBufferuiv(U.COLOR,0,f)):(S[0]=$e,S[1]=vt,S[2]=Tt,S[3]=je,U.clearBufferiv(U.COLOR,0,S))}else ee|=U.COLOR_BUFFER_BIT}B&&(ee|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ee|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&U.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),_e.dispose(),te.dispose(),j.dispose(),Me.dispose(),Te.dispose(),Le.dispose(),z.dispose(),E.dispose(),xe.dispose(),$.dispose(),se.dispose(),q.dispose(),q.removeEventListener("sessionstart",nt),q.removeEventListener("sessionend",st),St.stop()};function Q(w){w.preventDefault(),Jd("WebGLRenderer: Context Lost."),N=!0}function ne(){Jd("WebGLRenderer: Context Restored."),N=!1;let w=Pe.autoReset,B=ie.enabled,oe=ie.autoUpdate,ee=ie.needsUpdate,re=ie.type;X(),Pe.autoReset=w,ie.enabled=B,ie.autoUpdate=oe,ie.needsUpdate=ee,ie.type=re}function ue(w){it("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){let B=w.target;B.removeEventListener("dispose",he),Ue(B)}function Ue(w){be(w),Te.remove(w)}function be(w){let B=Te.get(w).programs;B!==void 0&&(B.forEach(function(oe){se.releaseProgram(oe)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,oe,ee,re,Oe){B===null&&(B=qe);let Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Be=hr(w,B,oe,ee,re);fe.setMaterial(ee,Ve);let je=oe.index,$e=1;if(ee.wireframe===!0){if(je=E.getWireframeAttribute(oe),je===void 0)return;$e=2}let vt=oe.drawRange,Tt=oe.attributes.position,Je=vt.start*$e,wt=(vt.start+vt.count)*$e;Oe!==null&&(Je=Math.max(Je,Oe.start*$e),wt=Math.min(wt,(Oe.start+Oe.count)*$e)),je!==null?(Je=Math.max(Je,0),wt=Math.min(wt,je.count)):Tt!=null&&(Je=Math.max(Je,0),wt=Math.min(wt,Tt.count));let Qt=wt-Je;if(Qt<0||Qt===1/0)return;xe.setup(re,ee,Be,oe,je);let Dt,Ut=K;if(je!==null&&(Dt=A.get(je),Ut=me,Ut.setIndex(Dt)),re.isMesh)ee.wireframe===!0?(fe.setLineWidth(ee.wireframeLinewidth*tt()),Ut.setMode(U.LINES)):Ut.setMode(U.TRIANGLES);else if(re.isLine){let Yt=ee.linewidth;Yt===void 0&&(Yt=1),fe.setLineWidth(Yt*tt()),re.isLineSegments?Ut.setMode(U.LINES):re.isLineLoop?Ut.setMode(U.LINE_LOOP):Ut.setMode(U.LINE_STRIP)}else re.isPoints?Ut.setMode(U.POINTS):re.isSprite&&Ut.setMode(U.TRIANGLES);if(re.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Ut.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let Yt=re._multiDrawStarts,Ke=re._multiDrawCounts,Ai=re._multiDrawCount,kn=je?A.get(je).bytesPerElement:1,Vn=Te.get(ee).currentProgram.getUniforms();for(let _i=0;_i<Ai;_i++)Vn.setValue(U,"_gl_DrawID",_i),Ut.render(Yt[_i]/kn,Ke[_i])}else if(re.isInstancedMesh)Ut.renderInstances(Je,Qt,re.count);else if(oe.isInstancedBufferGeometry){let Yt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ke=Math.min(oe.instanceCount,Yt);Ut.renderInstances(Je,Qt,Ke)}else Ut.render(Je,Qt)};function Ze(w,B,oe,ee){L!==null&&w.isNodeMaterial&&L.setObject(ee,w),Ee===!0&&D.setState(w,oe,!1),w.transparent===!0&&w.side===Tr&&w.forceSinglePass===!1?(w.side=xi,w.needsUpdate=!0,Ki(w,B,ee),w.side=Gn,w.needsUpdate=!0,Ki(w,B,ee),w.side=Tr):Ki(w,B,ee)}this.compile=function(w,B,oe=null){oe===null&&(oe=w),L!==null&&L.renderStart(w,B,oe),y=j.get(oe),y.init(B),g.push(y),oe.traverseVisible(function(re){re.isLight&&re.layers.test(B.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),w!==oe&&w.traverseVisible(function(re){re.isLight&&re.layers.test(B.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(),L!==null&&L.updateLights(y.state.lightsArray),V=this.localClippingEnabled,Ee=D.init(this.clippingPlanes,V),Ee===!0&&D.setGlobalState(this.clippingPlanes,B),L!==null&&ie.render(y.state.shadowsArray,oe,B);let ee=new Set;return w.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let Oe=re.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){let Be=Oe[Ve];Ze(Be,oe,B,re),ee.add(Be)}else Ze(Oe,oe,B,re),ee.add(Oe)}),y=g.pop(),L!==null&&L.renderEnd(),ee},this.compileAsync=function(w,B,oe=null){let ee=this.compile(w,B,oe);return new Promise(re=>{function Oe(){if(ee.forEach(function(Ve){let Be=Te.get(Ve).currentProgram;(Be===void 0||Be.isReady())&&ee.delete(Ve)}),ee.size===0){re(w);return}setTimeout(Oe,10)}pe.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let ot=null;function ut(w){ot&&ot(w)}function nt(){St.stop()}function st(){St.start()}let St=new vf;St.setAnimationLoop(ut),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(w){ot=w,q.setAnimationLoop(w),w===null?St.stop():St.start()},q.addEventListener("sessionstart",nt),q.addEventListener("sessionend",st),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(w,B);let oe=q.enabled===!0&&q.isPresenting===!0,ee=T!==null&&(F===null||oe)&&T.begin(R,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,B,F),y=j.get(w,g.length),y.init(B),y.state.textureUnits=Me.getTextureUnits(),g.push(y),Ne.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Ae.setFromArrayCamera(B):le.setFromProjectionMatrix(Ne,wr,B.reversedDepth),V=this.localClippingEnabled,Ee=D.init(this.clippingPlanes,V),v=te.get(w,b.length),v.init(),b.push(v),this.info.render.frame++,q.enabled===!0&&q.isPresenting===!0){let Oe=R.xr.getDepthSensingMesh();Oe!==null&&gt(Oe,B,-1/0,R.sortObjects)}gt(w,B,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(y.state.lightsArray),R.sortObjects===!0&&v.sort(ye,Ge),Qe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Qe&&_e.addToRenderList(v,w),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&D.beginShadows();let re=y.state.shadowsArray;if(ie.render(re,w,B),Ee===!0&&D.endShadows(),(ee&&T.hasRenderPass())===!1){let Oe=v.opaque,Ve=v.transmissive;if(y.setupLights(),B.isArrayCamera){let Be=B.cameras;if(Ve.length>0)for(let je=0,$e=Be.length;je<$e;je++){let vt=Be[je];Ji(Oe,Ve,w,vt)}Qe&&_e.render(w);for(let je=0,$e=Be.length;je<$e;je++){let vt=Be[je];ui(v,w,vt,vt.viewport)}}else Ve.length>0&&Ji(Oe,Ve,w,B),Qe&&_e.render(w),ui(v,w,B)}F!==null&&H===0&&(Me.updateMultisampleRenderTarget(F),Me.updateRenderTargetMipmap(F)),ee&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,B),xe.resetDefaultState(),de=-1,P=null,g.pop(),g.length>0?(y=g[g.length-1],Me.setTextureUnits(y.state.textureUnits),Ee===!0&&D.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?v=b[b.length-1]:v=null,L!==null&&L.renderEnd()};function gt(w,B,oe,ee){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){let Oe=B.isArrayCamera?Ae:le;if(!w.frustumCulled||w.intersectsFrustum(Oe)){ee&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ne);let Ve=z.update(w),Be=w.material;Be.visible&&v.push(w,Ve,Be,oe,we.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Oe=B.isArrayCamera?Ae:le;if(!w.frustumCulled||w.intersectsFrustum(Oe)){let Ve=z.update(w),Be=w.material;if(ee&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),we.copy(Ve.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(Ne)),Array.isArray(Be)){let je=Ve.groups;for(let $e=0,vt=je.length;$e<vt;$e++){let Tt=je[$e],Je=Be[Tt.materialIndex];Je&&Je.visible&&v.push(w,Ve,Je,oe,we.z,Tt,B)}}else Be.visible&&v.push(w,Ve,Be,oe,we.z,null,B)}}}let re=w.children;for(let Oe=0,Ve=re.length;Oe<Ve;Oe++)gt(re[Oe],B,oe,ee)}function ui(w,B,oe,ee){let{opaque:re,transmissive:Oe,transparent:Ve}=w;y.setupLightsView(oe),Ee===!0&&D.setGlobalState(R.clippingPlanes,oe),ee&&fe.viewport(J.copy(ee)),re.length>0&&_t(re,B,oe),Oe.length>0&&_t(Oe,B,oe),Ve.length>0&&_t(Ve,B,oe),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ji(w,B,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[ee.id]===void 0){let Tt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[ee.id]=new Ar(1,1,{generateMipmaps:!0,type:Tt?Nr:Zi,minFilter:br,samples:Math.max(4,Se.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let re=y.state.transmissionRenderTarget[ee.id],Oe=ee.viewport||J;re.setSize(Oe.z*R.transmissionResolutionScale,Oe.w*R.transmissionResolutionScale);let Ve=R.getRenderTarget(),Be=R.getActiveCubeFace(),je=R.getActiveMipmapLevel();R.setRenderTarget(re),R.getClearColor(Z),ve=R.getClearAlpha(),ve<1&&R.setClearColor(16777215,.5),R.clear(),Qe&&_e.render(oe);let $e=R.toneMapping;R.toneMapping=Kr;let vt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),Ee===!0&&D.setGlobalState(R.clippingPlanes,ee),_t(w,oe,ee),Me.updateMultisampleRenderTarget(re),Me.updateRenderTargetMipmap(re),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Je=0,wt=B.length;Je<wt;Je++){let Qt=B[Je],{object:Dt,geometry:Ut,material:Yt,group:Ke}=Qt;if(Yt.side===Tr&&Dt.layers.test(ee.layers)){let Ai=Yt.side;Yt.side=xi,Yt.needsUpdate=!0,xt(Dt,oe,ee,Ut,Yt,Ke),Yt.side=Ai,Yt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Me.updateMultisampleRenderTarget(re),Me.updateRenderTargetMipmap(re))}R.setRenderTarget(Ve,Be,je),R.setClearColor(Z,ve),vt!==void 0&&(ee.viewport=vt),R.toneMapping=$e}function _t(w,B,oe){let ee=B.isScene===!0?B.overrideMaterial:null;for(let re=0,Oe=w.length;re<Oe;re++){let Ve=w[re],{object:Be,geometry:je,group:$e}=Ve,vt=Ve.material;vt.allowOverride===!0&&ee!==null&&(vt=ee),Be.layers.test(oe.layers)&&xt(Be,B,oe,je,vt,$e)}}function xt(w,B,oe,ee,re,Oe){L!==null&&re.isNodeMaterial&&L.setObject(w,re),w.onBeforeRender(R,B,oe,ee,re,Oe),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),re.onBeforeRender(R,B,oe,ee,w,Oe),re.transparent===!0&&re.side===Tr&&re.forceSinglePass===!1?(re.side=xi,re.needsUpdate=!0,R.renderBufferDirect(oe,B,ee,re,w,Oe),re.side=Gn,re.needsUpdate=!0,R.renderBufferDirect(oe,B,ee,re,w,Oe),re.side=Tr):R.renderBufferDirect(oe,B,ee,re,w,Oe),w.onAfterRender(R,B,oe,ee,re,Oe)}function Ht(w){let B=0;for(let oe of w)oe.texture!==null&&B++;return B}function Ki(w,B,oe){B.isScene!==!0&&(B=qe);let ee=Te.get(w),re=y.state.lights,Oe=y.state.shadowsArray,Ve=re.state.version,Be=se.getParameters(w,re.state,Oe,B,oe,y.state.lightProbeGridArray),je=se.getProgramCacheKey(Be),$e=ee.programs;ee.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,ee.fog=B.fog;let vt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ee.envMap=Le.get(w.envMap||ee.environment,vt),ee.envMapRotation=ee.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",he),$e=new Map,ee.programs=$e,ee.programVariants=new Map);let Tt=$e.get(je);if(Tt!==void 0){if(ee.currentProgram===Tt&&ee.lightsStateVersion===Ve)return jt(w,Be),Tt}else Be.uniforms=se.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,oe,Be),w.onBeforeCompile(Be,R),Tt=se.acquireProgram(Be,je),$e.set(je,Tt),ee.uniforms=Be.uniforms;let Je=ee.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=D.uniform),jt(w,Be),ee.needsLights=Io(w),ee.lightsStateVersion=Ve,ee.needsLights&&(Je.ambientLightColor.value=re.state.ambient,Je.lightProbe.value=re.state.probe,Je.sunLights.value=re.state.sun,Je.sunLightShadows.value=re.state.sunShadow,Je.directionalLights.value=re.state.directional,Je.directionalLightShadows.value=re.state.directionalShadow,Je.spotLights.value=re.state.spot,Je.spotLightShadows.value=re.state.spotShadow,Je.rectAreaLights.value=re.state.rectArea,Je.ltc_1.value=re.state.rectAreaLTC1,Je.ltc_2.value=re.state.rectAreaLTC2,Je.pointLights.value=re.state.point,Je.pointLightShadows.value=re.state.pointShadow,Je.hemisphereLights.value=re.state.hemi,Je.sunShadowMatrix.value=re.state.sunShadowMatrix,Je.sunShadowCascade.value=re.state.sunShadowCascade,Je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Je.spotLightMatrix.value=re.state.spotLightMatrix,Je.spotLightMap.value=re.state.spotLightMap,Je.pointShadowMatrix.value=re.state.pointShadowMatrix),ee.numLightProbeGrids=Ht(y.state.lightProbeGridArray),ee.currentProgram=Tt,ee.uniformsList=null,Tt}function Ma(w,B,oe,ee,re){let Oe=Te.get(w),Ve=Oe.currentProgram.id+","+ee+","+re,Be=Oe.programVariants.get(Ve);return Be===void 0?(Be=Ki(w,B,oe),Oe.programVariants.set(Ve,Be)):(Oe.currentProgram=Be,Oe.uniformsList=null,Oe.outputColorSpace=ee,Oe.toneMapping=re),Be}function ni(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Pl.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function jt(w,B){let oe=Te.get(w);oe.outputColorSpace=B.outputColorSpace,oe.batching=B.batching,oe.batchingColor=B.batchingColor,oe.instancing=B.instancing,oe.instancingColor=B.instancingColor,oe.instancingMorph=B.instancingMorph,oe.skinning=B.skinning,oe.morphTargets=B.morphTargets,oe.morphNormals=B.morphNormals,oe.morphColors=B.morphColors,oe.morphTargetsCount=B.morphTargetsCount,oe.numClippingPlanes=B.numClippingPlanes,oe.numIntersection=B.numClipIntersection,oe.vertexAlphas=B.vertexAlphas,oe.vertexTangents=B.vertexTangents,oe.toneMapping=B.toneMapping}function hr(w,B,oe,ee,re){B.isScene!==!0&&(B=qe),Me.resetTextureUnits();let Oe=B.fog,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?B.environment:null,Be=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:yt.workingColorSpace,je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,$e=Le.get(ee.envMap||Ve,je),vt=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Tt=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Je=!!oe.morphAttributes.position,wt=!!oe.morphAttributes.normal,Qt=!!oe.morphAttributes.color,Dt=Kr;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Dt=R.toneMapping);let Ut=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Yt=Ut!==void 0?Ut.length:0,Ke=Te.get(ee),Ai=y.state.lights;if(Ee===!0&&(V===!0||w!==P)){let Bt=w===P&&ee.id===de;D.setState(ee,w,Bt)}let kn=!1,Vn=!1;ee.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Ai.state.version||re.isBatchedMesh&&Ke.batching===!1||!re.isBatchedMesh&&Ke.batching===!0||re.isBatchedMesh&&Ke.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ke.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ke.instancing===!1||!re.isInstancedMesh&&Ke.instancing===!0||re.isSkinnedMesh&&Ke.skinning===!1||!re.isSkinnedMesh&&Ke.skinning===!0||re.isInstancedMesh&&Ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ke.instancingMorph===!1&&re.morphTexture!==null||Ke.envMap!==$e||ee.fog===!0&&Ke.fog!==Oe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==D.numPlanes||Ke.numIntersection!==D.numIntersection)||Ke.vertexAlphas!==vt||Ke.vertexTangents!==Tt||Ke.morphTargets!==Je||Ke.morphNormals!==wt||Ke.morphColors!==Qt||Ke.morphTargetsCount!==Yt||Ke.numLightProbeGrids!==Ht(y.state.lightProbeGridArray)?kn=!0:(Ke.outputColorSpace!==Be||Ke.toneMapping!==Dt)&&(Vn=!0):(kn=!0,Ke.__version=ee.version);let _i=Ke.currentProgram;(kn===!0||Vn===!0)&&(_i=Vn===!0?Ma(ee,B,re,Be,Dt):Ki(ee,B,re),L&&ee.isNodeMaterial&&L.onUpdateProgram(ee,_i,Ke));let Do=!1,mn=!1,Hn=!1,bt=_i.getUniforms(),fi=Ke.uniforms;if(fe.useProgram(_i.program)&&(Do=!0,mn=!0,Hn=!0),ee.id!==de&&(de=ee.id,mn=!0),Do||P!==w){fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),bt.setValue(U,"projectionMatrix",w.projectionMatrix),bt.setValue(U,"viewMatrix",w.matrixWorldInverse);let Bt=bt.map.cameraPosition;Bt!==void 0&&Bt.setValue(U,We.setFromMatrixPosition(w.matrixWorld)),Se.logarithmicDepthBuffer&&bt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,mn=!0,Hn=!0)}if(Ke.needsLights&&(Ai.state.sunShadowMap.length>0&&bt.setValue(U,"sunShadowMap",Ai.state.sunShadowMap,Me),Ai.state.directionalShadowMap.length>0&&bt.setValue(U,"directionalShadowMap",Ai.state.directionalShadowMap,Me),Ai.state.spotShadowMap.length>0&&bt.setValue(U,"spotShadowMap",Ai.state.spotShadowMap,Me),Ai.state.pointShadowMap.length>0&&bt.setValue(U,"pointShadowMap",Ai.state.pointShadowMap,Me)),re.isSkinnedMesh){bt.setOptional(U,re,"bindMatrix"),bt.setOptional(U,re,"bindMatrixInverse");let Bt=re.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),bt.setValue(U,"boneTexture",Bt.boneTexture,Me))}re.isBatchedMesh&&(bt.setOptional(U,re,"batchingTexture"),bt.setValue(U,"batchingTexture",re._matricesTexture,Me),bt.setOptional(U,re,"batchingIdTexture"),bt.setValue(U,"batchingIdTexture",re._indirectTexture,Me),bt.setOptional(U,re,"batchingColorTexture"),re._colorsTexture!==null&&bt.setValue(U,"batchingColorTexture",re._colorsTexture,Me));let Sr=oe.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&I.update(re,oe,_i),(mn||Ke.receiveShadow!==re.receiveShadow)&&(Ke.receiveShadow=re.receiveShadow,bt.setValue(U,"receiveShadow",re.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&B.environment!==null&&(fi.envMapIntensity.value=B.environmentIntensity),fi.dfgLUT!==void 0&&(fi.dfgLUT.value=GS()),mn){if(bt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ke.needsLights&&Ms(fi,Hn),Oe&&ee.fog===!0&&Y.refreshFogUniforms(fi,Oe),Y.refreshMaterialUniforms(fi,ee,ze,De,y.state.transmissionRenderTarget[w.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let Bt=M,Ri=0;for(let Jr of y.state.lightProbeGridArray)Jr.texture!==null&&(Bt.textures[Ri]=Jr.texture,Bt.min[Ri]=Jr.boundingBox.min,Bt.max[Ri]=Jr.boundingBox.max,Bt.resolution[Ri]=Jr.resolution,Ri++);for(let Jr in Bt)Bt[Jr].length=Ri;fi.probesSH.value=Bt.textures,fi.probesMin.value=Bt.min,fi.probesMax.value=Bt.max,fi.probesResolution.value=Bt.resolution}Pl.upload(U,ni(Ke),fi,Me)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Pl.upload(U,ni(Ke),fi,Me),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(U,"center",re.center),bt.setValue(U,"modelViewMatrix",re.modelViewMatrix),bt.setValue(U,"normalMatrix",re.normalMatrix),bt.setValue(U,"modelMatrix",re.matrixWorld),ee.uniformsGroups!==void 0){let Bt=ee.uniformsGroups;for(let Ri=0,Jr=Bt.length;Ri<Jr;Ri++){let yd=Bt[Ri];$.update(yd,_i),$.bind(yd,_i)}}return _i}function Ms(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Io(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,B,oe){let ee=Te.get(w);ee.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Te.get(w.texture).__webglTexture=B,Te.get(w.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let oe=Te.get(w);oe.__webglFramebuffer=B,oe.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,oe=0){F=w,O=B,H=oe;let ee=null,re=!1,Oe=!1;if(w){let Ve=Te.get(w);if(Ve.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,Ve.__webglFramebuffer),J.copy(w.viewport),ce.copy(w.scissor),Ie=w.scissorTest,fe.viewport(J),fe.scissor(ce),fe.setScissorTest(Ie),de=-1;return}else if(Ve.__webglFramebuffer===void 0)Me.setupRenderTarget(w);else if(Ve.__hasExternalTextures)Me.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let $e=w.depthTexture;if(Ve.__boundDepthTexture!==$e){if($e!==null&&Te.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(w)}}let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Oe=!0);let je=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(je[B])?ee=je[B][oe]:ee=je[B],re=!0):w.samples>0&&Me.useMultisampledRTT(w)===!1?ee=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(je)?ee=je[oe]:ee=je,J.copy(w.viewport),ce.copy(w.scissor),Ie=w.scissorTest}else J.copy(Xe).multiplyScalar(ze).floor(),ce.copy(ge).multiplyScalar(ze).floor(),Ie=ke;if(oe!==0&&(ee=k),fe.bindFramebuffer(U.FRAMEBUFFER,ee)&&fe.drawBuffers(w,ee),fe.viewport(J),fe.scissor(ce),fe.setScissorTest(Ie),re){let Ve=Te.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ve.__webglTexture,oe)}else if(Oe){let Ve=B;for(let Be=0;Be<w.textures.length;Be++){let je=Te.get(w.textures[Be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Be,je.__webglTexture,oe,Ve)}}else if(w!==null&&oe!==0){let Ve=Te.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ve.__webglTexture,oe)}de=-1};function fn(w){let B=Te.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=Se.textureFormatReadable(w.format),B.__typeReadable=Se.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,oe,ee,re,Oe,Ve,Be=0){if(!(w&&w.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(je=je[Ve],Array.isArray(je)&&(je=je[0])),je){fe.bindFramebuffer(U.FRAMEBUFFER,je);try{let $e=w.textures[Be],vt=$e.format,Tt=$e.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Be);let Je=fn($e);if(Je.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-ee&&oe>=0&&oe<=w.height-re&&U.readPixels(B,oe,ee,re,ae.convert(vt),ae.convert(Tt),Oe)}finally{let $e=F!==null?Te.get(F).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,B,oe,ee,re,Oe,Ve,Be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ve!==void 0&&(je=je[Ve],Array.isArray(je)&&(je=je[0])),je)if(B>=0&&B<=w.width-ee&&oe>=0&&oe<=w.height-re){fe.bindFramebuffer(U.FRAMEBUFFER,je);let $e=w.textures[Be],vt=$e.format,Tt=$e.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Be);let Je=fn($e);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.bufferData(U.PIXEL_PACK_BUFFER,Oe.byteLength,U.STREAM_READ),U.readPixels(B,oe,ee,re,ae.convert(vt),ae.convert(Tt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Qt=F!==null?Te.get(F).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Qt);let Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zg(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Oe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(wt),U.deleteSync(Dt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,oe=0){let ee=Math.pow(2,-oe),re=Math.floor(w.image.width*ee),Oe=Math.floor(w.image.height*ee),Ve=B!==null?B.x:0,Be=B!==null?B.y:0;Me.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,oe,0,0,Ve,Be,re,Oe),fe.unbindTexture()},this.copyTextureToTexture=function(w,B,oe=null,ee=null,re=0,Oe=0){let Ve,Be,je,$e,vt,Tt,Je,wt,Qt,Dt=w.isCompressedTexture?w.mipmaps[Oe]:w.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Be=oe.max.y-oe.min.y,je=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,vt=oe.min.y,Tt=oe.isBox3?oe.min.z:0;else{let bt=Math.pow(2,-re);Ve=Math.floor(Dt.width*bt),Be=Math.floor(Dt.height*bt),w.isDataArrayTexture?je=Dt.depth:w.isData3DTexture?je=Math.floor(Dt.depth*bt):je=1,$e=0,vt=0,Tt=0}ee!==null?(Je=ee.x,wt=ee.y,Qt=ee.z):(Je=0,wt=0,Qt=0);let Ut=ae.convert(B.format),Yt=ae.convert(B.type),Ke;B.isData3DTexture?(Me.setTexture3D(B,0),Ke=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Me.setTexture2DArray(B,0),Ke=U.TEXTURE_2D_ARRAY):(Me.setTexture2D(B,0),Ke=U.TEXTURE_2D),fe.activeTexture(U.TEXTURE0),fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),fe.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Ai=fe.getParameter(U.UNPACK_ROW_LENGTH),kn=fe.getParameter(U.UNPACK_IMAGE_HEIGHT),Vn=fe.getParameter(U.UNPACK_SKIP_PIXELS),_i=fe.getParameter(U.UNPACK_SKIP_ROWS),Do=fe.getParameter(U.UNPACK_SKIP_IMAGES);fe.pixelStorei(U.UNPACK_ROW_LENGTH,Dt.width),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt.height),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),fe.pixelStorei(U.UNPACK_SKIP_ROWS,vt),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,Tt);let mn=w.isDataArrayTexture||w.isData3DTexture,Hn=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let bt=Te.get(w),fi=Te.get(B),Sr=Te.get(bt.__renderTarget),Bt=Te.get(fi.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,Sr.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ri=0;Ri<je;Ri++)mn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,re,Tt+Ri),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(B).__webglTexture,Oe,Qt+Ri)),U.blitFramebuffer($e,vt,$e+Ve,vt+Be,Je,wt,Je+Ve,wt+Be,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(re!==0||w.isRenderTargetTexture||Te.has(w)){let bt=Te.get(w),fi=Te.get(B);fe.bindFramebuffer(U.READ_FRAMEBUFFER,G),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,C);for(let Sr=0;Sr<je;Sr++)mn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,re,Tt+Sr):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,re),Hn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,fi.__webglTexture,Oe,Qt+Sr):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,fi.__webglTexture,Oe),re!==0?U.blitFramebuffer($e,vt,$e+Ve,vt+Be,Je,wt,Je+Ve,wt+Be,U.COLOR_BUFFER_BIT,U.NEAREST):Hn?U.copyTexSubImage3D(Ke,Oe,Je,wt,Qt+Sr,$e,vt,Ve,Be):U.copyTexSubImage2D(Ke,Oe,Je,wt,$e,vt,Ve,Be);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Hn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ke,Oe,Je,wt,Qt,Ve,Be,je,Ut,Yt,Dt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ke,Oe,Je,wt,Qt,Ve,Be,je,Ut,Dt.data):U.texSubImage3D(Ke,Oe,Je,wt,Qt,Ve,Be,je,Ut,Yt,Dt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Oe,Je,wt,Ve,Be,Ut,Yt,Dt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Oe,Je,wt,Dt.width,Dt.height,Ut,Dt.data):U.texSubImage2D(U.TEXTURE_2D,Oe,Je,wt,Ve,Be,Ut,Yt,Dt);fe.pixelStorei(U.UNPACK_ROW_LENGTH,Ai),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,kn),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Vn),fe.pixelStorei(U.UNPACK_SKIP_ROWS,_i),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,Do),Oe===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&U.generateMipmap(Ke),fe.unbindTexture()},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&Me.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Me.setTextureCube(w,0):w.isData3DTexture?Me.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Me.setTexture2DArray(w,0):Me.setTexture2D(w,0),fe.unbindTexture()},this.resetState=function(){O=0,H=0,F=null,fe.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}},XS=class extends Rc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Va;e.deleteAttribute("uv");let t=new Ml({side:xi}),i=new Ml,r=new nh(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let n=new Lt(e,t);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);let a=new Cp(e,i,6),s=new Ci;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),a.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),a.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),a.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),a.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),a.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),a.setMatrixAt(5,s.matrix),this.add(a);let o=new Lt(e,Ja(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);let l=new Lt(e,Ja(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new Lt(e,Ja(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Lt(e,Ja(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new Lt(e,Ja(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let c=new Lt(e,Ja(100));c.position.set(0,20,0),c.scale.set(1,.1,1),this.add(c)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ja(e){return new M_({color:0,emissive:16777215,emissiveIntensity:e})}function on(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Jf(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var er={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},dh,gi,Vt,gr=1e8,It=1/gr,ph=Math.PI*2,qS=ph/4,jS=0,Kf=Math.sqrt,YS=Math.cos,JS=Math.sin,hi=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},ln=function(e){return typeof e=="number"},fh=function(e){return typeof e>"u"},Vr=function(e){return typeof e=="object"},Bi=function(e){return e!==!1},mh=function(){return typeof window<"u"},Ll=function(e){return Kt(e)||hi(e)},Zf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Si=Array.isArray,KS=/random\([^)]+\)/g,ZS=/,\s*/g,$f=/(?:-?\.?\d|\.)+/gi,Qf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,em=/[+-]=-?[.\d]+/,$S=/[^,'"\[\]\s]+/gi,QS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Hr,vh,_h,tr={},Il={},tm,im=function(e){return(Il=$a(e,tr))&&Gi},xh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$s=function(e,t){return!t&&console.warn(e)},rm=function(e,t){return e&&(tr[e]=t)&&Il&&(Il[e]=t)||tr},Qs=function(){return 0},eT={suppressEvents:!0,isStart:!0,kill:!1},Dl={suppressEvents:!0,kill:!1},tT={suppressEvents:!0},yh={},En=[],Mh={},nm,ir={},Sh={},am=30,Nl=[],Th="",bh=function(e){var t=e[0],i,r;if(Vr(t)||Kt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Nl.length;r--&&!Nl[r].targetTest(t););i=Nl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Im(e[r],i)))||e.splice(r,1);return e},ra=function(e){return e._gsap||bh(_r(e))[0]._gsap},sm=function(e,t,i){return(i=e[t])&&Kt(i)?e[t]():fh(i)&&e.getAttribute&&e.getAttribute(t)||i},ki=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},Za=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},iT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ul=function(){var e=En.length,t=En.slice(0),i,r;for(Mh={},En.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Eh=function(e){return!!(e._initted||e._startAt||e.add)},om=function(e,t,i,r){En.length&&!gi&&Ul(),e.render(t,i,r||!!(gi&&t<0&&Eh(e))),En.length&&!gi&&Ul()},lm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($S).length<2?t:hi(e)?e.trim():e},um=function(e){return e},rr=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},rT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},$a=function(e,t){for(var i in t)e[i]=t[i];return e},cm=function e(t,i){for(var r in i)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(t[r]=Vr(i[r])?e(t[r]||(t[r]={}),i[r]):i[r]);return t},Ol=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},eo=function(e){var t=e.parent||Wt,i=e.keyframes?rT(Si(e.keyframes)):rr;if(Bi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},nT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},hm=function(e,t,i,r,n){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],s;if(n)for(s=t[n];a&&a[n]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Fl=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=t._prev,a=t._next;n?n._next=a:e[i]===t&&(e[i]=a),a?a._prev=n:e[r]===t&&(e[r]=n),t._next=t._prev=t.parent=null},wn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},na=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},aT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},wh=function(e,t,i,r){return e._startAt&&(gi?e._startAt.revert(Dl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},sT=function e(t){return!t||t._ts&&e(t.parent)},dm=function(e){return e._repeat?Qa(e._tTime,e=e.duration()+e._rDelay)*e:0},Qa=function(e,t){var i=Math.floor(e=Xt(e/t));return e&&i===e?i-1:i},zl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bl=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},kl=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Xt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bl(e),i._dirty||na(i,e)),e},pm=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=zl(e.rawTime(),t),(!t._dur||io(0,t.totalDuration(),i)-t._tTime>It)&&t.render(i,!0)),na(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-It}},Gr=function(e,t,i,r){return t.parent&&wn(t),t._start=Xt((ln(i)?i:!i&&Vl(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:i||e!==Wt?vr(e,i,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hm(e,t,"_first","_last",e._sort?"_start":0),Vl(t)||(e._recent=t),r||pm(e,t),e._ts<0&&kl(e,e._tTime),e},fm=function(e,t){return(tr.ScrollTrigger||xh("scrollTrigger",t))&&tr.ScrollTrigger.create(t,e)},mm=function(e,t,i,r,n){if(Uh(e,t,n),!e._initted)return 1;if(!i&&e._pt&&!gi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nm!==ar.frame)return En.push(e),e._lazy=[n,r],1},oT=function e(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||e(i))},Vl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},lT=function(e,t,i,r){var n=e.ratio,a=t<0||!t&&(!e._start&&oT(e)&&!(!e._initted&&Vl(e))||(e._ts<0||e._dp._ts<0)&&!Vl(e))?0:1,s=e._rDelay,o=0,l,u,h;if(s&&e._repeat&&(o=io(0,e._tDur,t),u=Qa(o,s),e._yoyo&&u&1&&(a=1-a),u!==Qa(e._tTime,s)&&(n=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==n||gi||r||e._zTime===It||!t&&e._zTime){if(!e._initted&&mm(e,t,r,i,o))return;for(h=e._zTime,e._zTime=t||(i?It:0),i||(i=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=o,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&wh(e,t,i,!0),e._onUpdate&&!i&&nr(e,"onUpdate"),o&&e._repeat&&!i&&e.parent&&nr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&wn(e,1),!i&&!gi&&(nr(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uT=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},es=function(e,t,i,r){var n=e._repeat,a=Xt(t)||0,s=e._tTime/e._tDur;return s&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=n?n<0?1e10:Xt(a*(n+1)+e._rDelay*n):a,s>0&&!r&&kl(e,e._tTime=e._tDur*s),e.parent&&Bl(e),i||na(e.parent,e),e},gm=function(e){return e instanceof Vi?na(e):es(e,e._dur)},cT={_start:0,endTime:Qs,totalDuration:Qs},vr=function e(t,i,r){var n=t.labels,a=t._recent||cT,s=t.duration()>=gr?a.endTime(!1):t._dur,o,l,u;return hi(i)&&(isNaN(i)||i in n)?(l=i.charAt(0),u=i.substr(-1)==="%",o=i.indexOf("="),l==="<"||l===">"?(o>=0&&(i=i.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(i.substr(1))||0)*(u?(o<0?a:r).totalDuration()/100:1)):o<0?(i in n||(n[i]=s),n[i]):(l=parseFloat(i.charAt(o-1)+i.substr(o+1)),u&&r&&(l=l/100*(Si(r)?r[0]:r).totalDuration()),o>1?e(t,i.substr(0,o-1),r)+l:s+l)):i==null?s:+i},to=function(e,t,i){var r=ln(t[1]),n=(r?2:1)+(e<2?0:1),a=t[n],s,o;if(r&&(a.duration=t[1]),a.parent=i,e){for(s=a,o=i;o&&!("immediateRender"in s);)s=o.vars.defaults||{},o=Bi(o.vars.inherit)&&o.parent;a.immediateRender=Bi(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[n-1]}return new ii(t[0],a,t[n+1])},An=function(e,t){return e||e===0?t(e):t},io=function(e,t,i){return i<e?e:i>t?t:i},Ti=function(e,t){return!hi(e)||!(t=QS.exec(e))?"":t[1]},hT=function(e,t,i){return An(i,function(r){return io(e,t,r)})},Ah=[].slice,vm=function(e,t){return e&&Vr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vr(e[0]))&&!e.nodeType&&e!==Hr},dT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var n;return hi(r)&&!t||vm(r,1)?(n=i).push.apply(n,_r(r)):i.push(r)})||i},_r=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):hi(e)&&!i&&(vh||!is())?Ah.call((t||_h).querySelectorAll(e),0):Si(e)?dT(e,i):vm(e)?Ah.call(e,0):e?[e]:[]},Rh=function(e){return e=_r(e)[0]||$s("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return _r(t,i.querySelectorAll?i:i===e?$s("Invalid scope")||_h.createElement("div"):e)}},_m=function(e){return e.sort(function(){return .5-Math.random()})},xm=function(e){if(Kt(e))return e;var t=Vr(e)?e:{each:e},i=aa(t.ease),r=t.from||0,n=parseFloat(t.base)||0,a={},s=r>0&&r<1,o=isNaN(r)||s,l=t.axis,u=r,h=r;return hi(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!s&&o&&(u=r[0],h=r[1]),function(d,c,p){var m=(p||t).length,x=a[m],_,f,S,M,v,y,b,g,T;if(!x){if(T=t.grid==="auto"?0:(t.grid||[1,gr])[1],!T){for(b=-gr;b<(b=p[T++].getBoundingClientRect().left)&&T<m;);T<m&&T--}for(x=a[m]=[],_=o?Math.min(T,m)*u-.5:r%T,f=T===gr?0:o?m*h/T-.5:r/T|0,b=0,g=gr,y=0;y<m;y++)S=y%T-_,M=f-(y/T|0),x[y]=v=l?Math.abs(l==="y"?M:S):Kf(S*S+M*M),v>b&&(b=v),v<g&&(g=v);r==="random"&&_m(x),x.max=b-g,x.min=g,x.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(T>m?m-1:l?l==="y"?m/T:T:Math.max(T,m/T))||0)*(r==="edges"?-1:1),x.b=m<0?n-m:n,x.u=Ti(t.amount||t.each)||0,i=i&&m<0?ET(i):i}return m=(x[d]-x.min)/x.max||0,Xt(x.b+(i?i(m):m)*x.v)+x.u}},Ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Xt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ln(i)?0:Ti(i))}},ym=function(e,t){var i=Si(e),r,n;return!i&&Vr(e)&&(r=i=e.radius||gr,e.values?(e=_r(e.values),(n=!ln(e[0]))&&(r*=r)):e=Ph(e.increment)),An(t,i?Kt(e)?function(a){return n=e(a),Math.abs(n-a)<=r?n:a}:function(a){for(var s=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),l=gr,u=0,h=e.length,d,c;h--;)n?(d=e[h].x-s,c=e[h].y-o,d=d*d+c*c):d=Math.abs(e[h]-s),d<l&&(l=d,u=h);return u=!r||l<=r?e[u]:a,n||u===a||ln(a)?u:u+Ti(a)}:Ph(e))},Mm=function(e,t,i,r){return An(Si(e)?!t:i===!0?!!(i=0):!r,function(){return Si(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},pT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(n,a){return a(n)},r)}},fT=function(e,t){return function(i){return e(parseFloat(i))+(t||Ti(i))}},mT=function(e,t,i){return Tm(e,t,0,1,i)},Sm=function(e,t,i){return An(i,function(r){return e[~~t(r)]})},gT=function e(t,i,r){var n=i-t;return Si(t)?Sm(t,e(0,t.length),i):An(r,function(a){return(n+(a-t)%n)%n+t})},vT=function e(t,i,r){var n=i-t,a=n*2;return Si(t)?Sm(t,e(0,t.length-1),i):An(r,function(s){return s=(a+(s-t)%a)%a||0,t+(s>n?a-s:s)})},ro=function(e){return e.replace(KS,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(ZS);return Mm(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Tm=function(e,t,i,r,n){var a=t-e,s=r-i;return An(n,function(o){return i+((o-e)/a*s||0)})},_T=function e(t,i,r,n){var a=isNaN(t+i)?0:function(p){return(1-p)*t+p*i};if(!a){var s=hi(t),o={},l,u,h,d,c;if(r===!0&&(n=1)&&(r=null),s)t={p:t},i={p:i};else if(Si(t)&&!Si(i)){for(h=[],d=t.length,c=d-2,u=1;u<d;u++)h.push(e(t[u-1],t[u]));d--,a=function(p){p*=d;var m=Math.min(c,~~p);return h[m](p-m)},r=i}else n||(t=$a(Si(t)?[]:{},t));if(!h){for(l in i)Dh.call(o,t,l,"get",i[l]);a=function(p){return zh(p,o)||(s?t.p:t)}}}return An(r,a)},bm=function(e,t,i){var r=e.labels,n=gr,a,s,o;for(a in r)s=r[a]-t,s<0==!!i&&s&&n>(s=Math.abs(s))&&(o=a,n=s);return o},nr=function(e,t,i){var r=e.vars,n=r[t],a=Vt,s=e._ctx,o,l,u;if(n)return o=r[t+"Params"],l=r.callbackScope||e,i&&En.length&&Ul(),s&&(Vt=s),u=o?n.apply(l,o):n.call(l),Vt=a,u},no=function(e){return wn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gi),e.progress()<1&&nr(e,"onInterrupt"),e},ts,Em=[],wm=function(e){if(e)if(e=!e.name&&e.default||e,mh()||e.headless){var t=e.name,i=Kt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,n={init:Qs,render:zh,add:Dh,kill:UT,modifier:NT,rawVars:0},a={targetTest:0,get:0,getSetter:Fh,aliases:{},register:0};if(is(),e!==r){if(ir[t])return;rr(r,rr(Ol(e,n),a)),$a(r.prototype,$a(n,Ol(e,a))),ir[r.prop=t]=r,e.targetTest&&(Nl.push(r),yh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rm(t,r),e.register&&e.register(Gi,r,Hi)}else Em.push(e)},Nt=255,ao={aqua:[0,Nt,Nt],lime:[0,Nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Nt],navy:[0,0,128],white:[Nt,Nt,Nt],olive:[128,128,0],yellow:[Nt,Nt,0],orange:[Nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Nt,0,0],pink:[Nt,192,203],cyan:[0,Nt,Nt],transparent:[Nt,Nt,Nt,0]},Ch=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Nt+.5|0},Am=function(e,t,i){var r=e?ln(e)?[e>>16,e>>8&Nt,e&Nt]:0:ao.black,n,a,s,o,l,u,h,d,c,p;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ao[e])r=ao[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+n+n+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Nt,r&Nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Nt,e&Nt]}else if(e.substr(0,3)==="hsl"){if(r=p=e.match($f),!t)o=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(l+1):u+l-u*l,n=u*2-a,r.length>3&&(r[3]*=1),r[0]=Ch(o+1/3,n,a),r[1]=Ch(o,n,a),r[2]=Ch(o-1/3,n,a);else if(~e.indexOf("="))return r=e.match(Qf),i&&r.length<4&&(r[3]=1),r}else r=e.match($f)||ao.transparent;r=r.map(Number)}return t&&!p&&(n=r[0]/Nt,a=r[1]/Nt,s=r[2]/Nt,h=Math.max(n,a,s),d=Math.min(n,a,s),u=(h+d)/2,h===d?o=l=0:(c=h-d,l=u>.5?c/(2-h-d):c/(h+d),o=h===n?(a-s)/c+(a<s?6:0):h===a?(s-n)/c+2:(n-a)/c+4,o*=60),r[0]=~~(o+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Rm=function(e){var t=[],i=[],r=-1;return e.split(Rn).forEach(function(n){var a=n.match(Ka)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},Pm=function(e,t,i){var r="",n=(e+r).match(Rn),a=t?"hsla(":"rgba(",s=0,o,l,u,h;if(!n)return e;if(n=n.map(function(d){return(d=Am(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Rm(e),o=i.c,o.join(r)!==u.c.join(r)))for(l=e.replace(Rn,"1").split(Ka),h=l.length-1;s<h;s++)r+=l[s]+(~o.indexOf(s)?n.shift()||a+"0,0,0,0)":(u.length?u:n.length?n:i).shift());if(!l)for(l=e.split(Rn),h=l.length-1;s<h;s++)r+=l[s]+n[s];return r+l[h]},Rn=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ao)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),xT=/hsl[a]?\(/,Cm=function(e){var t=e.join(" "),i;if(Rn.lastIndex=0,Rn.test(t))return i=xT.test(t),e[1]=Pm(e[1],i),e[0]=Pm(e[0],i,Rm(e[1])),!0},so,ar=(function(){var e=Date.now,t=500,i=33,r=e(),n=r,a=1e3/240,s=a,o=[],l,u,h,d,c,p,m=function x(_){var f=e()-n,S=_===!0,M,v,y,b;if((f>t||f<0)&&(r+=f-i),n+=f,y=n-r,M=y-s,(M>0||S)&&(b=++d.frame,c=y-d.time*1e3,d.time=y=y/1e3,s+=M+(M>=a?0:a-M),v=1),S||(l=u(x)),v)for(p=0;p<o.length;p++)o[p](y,c,b,_)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(x){return c/(1e3/(x||60))},wake:function(){tm&&(!vh&&mh()&&(Hr=vh=window,_h=Hr.document||{},tr.gsap=Gi,(Hr.gsapVersions||(Hr.gsapVersions=[])).push(Gi.version),im(Il||Hr.GreenSockGlobals||!Hr.gsap&&Hr||{}),Em.forEach(wm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=h||function(x){return setTimeout(x,s-d.time*1e3+1|0)},so=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),so=0,u=Qs},lagSmoothing:function(x,_){t=x||1/0,i=Math.min(_||33,t)},fps:function(x){a=1e3/(x||240),s=d.time*1e3+a},add:function(x,_,f){var S=_?function(M,v,y,b){x(M,v,y,b),d.remove(S)}:x;return d.remove(x),o[f?"unshift":"push"](S),is(),S},remove:function(x,_){~(_=o.indexOf(x))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},d})(),is=function(){return!so&&ar.wake()},Mt={},yT=/^[\d.\-M][\d.\-,\s]/,MT=/["']/g,ST=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],n=1,a=i.length,s,o,l;n<a;n++)o=i[n],s=n!==a-1?o.lastIndexOf(","):o.length,l=o.substr(0,s),t[r]=isNaN(l)?l.replace(MT,"").trim():+l,r=o.substr(s+1).trim();return t},TT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},bT=function(e){var t=(e+"").split("("),i=Mt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ST(t[1])]:TT(e).split(",").map(lm)):Mt._CE&&yT.test(e)?Mt._CE("",e):i},ET=function(e){return function(t){return 1-e(1-t)}},aa=function(e,t){return e&&(Kt(e)?e:Mt[e]||bT(e))||t},sa=function(e,t,i,r){i===void 0&&(i=function(s){return 1-t(1-s)}),r===void 0&&(r=function(s){return s<.5?t(s*2)/2:1-t((1-s)*2)/2});var n={easeIn:t,easeOut:i,easeInOut:r},a;return ki(e,function(s){Mt[s]=tr[s]=n,Mt[a=s.toLowerCase()]=i;for(var o in n)Mt[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=Mt[s+"."+o]=n[o]}),n},Lm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Lh=function e(t,i,r){var n=i>=1?i:1,a=(r||(t?.3:.45))/(i<1?i:1),s=a/ph*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*JS((u-s)*a)+1},l=t==="out"?o:t==="in"?function(u){return 1-o(1-u)}:Lm(o);return a=ph/a,l.config=function(u,h){return e(t,u,h)},l},Ih=function e(t,i){i===void 0&&(i=1.70158);var r=function(a){return a?--a*a*((i+1)*a+i)+1:0},n=t==="out"?r:t==="in"?function(a){return 1-r(1-a)}:Lm(r);return n.config=function(a){return e(t,a)},n};ki("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var i=t<5?t+1:t;sa(e+",Power"+(i-1),t?function(r){return Math.pow(r,i)}:function(r){return r},function(r){return 1-Math.pow(1-r,i)},function(r){return r<.5?Math.pow(r*2,i)/2:1-Math.pow((1-r)*2,i)/2})}),Mt.Linear.easeNone=Mt.none=Mt.Linear.easeIn,sa("Elastic",Lh("in"),Lh("out"),Lh()),(function(e,t){var i=1/t,r=2*i,n=2.5*i,a=function(s){return s<i?e*s*s:s<r?e*Math.pow(s-1.5/t,2)+.75:s<n?e*(s-=2.25/t)*s+.9375:e*Math.pow(s-2.625/t,2)+.984375};sa("Bounce",function(s){return 1-a(1-s)},a)})(7.5625,2.75),sa("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)}),sa("Circ",function(e){return-(Kf(1-e*e)-1)}),sa("Sine",function(e){return e===1?1:-YS(e*qS)+1}),sa("Back",Ih("in"),Ih("out"),Ih()),Mt.SteppedEase=Mt.steps=tr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),n=t?1:0,a=1-It;return function(s){return((r*io(0,a,s)|0)+n)*i}}},Zs.ease=Mt["quad.out"],ki("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return Th+=e+","+e+"Params,"});var Im=function(e,t){this.id=jS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sm,this.set=t?t.getSetter:Fh},oo=(function(){function e(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,es(this,+i.duration,1,1),this.data=i.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),so||ar.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,es(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(is(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(kl(this,i),!n._dp||n.parent||pm(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Gr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),om(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+dm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+dm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Qa(this._tTime,n)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?zl(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-It?0:this._rts;var s=this.totalDuration();return(a!==this._rts<0||n>0&&n<s)&&this.totalTime(io(-Math.abs(this._delay),s,n),r!==!1),Bl(this),aT(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{is(),this._ts=this._rts;var r=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==It,a;if(n)for(this._tTime-=It,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=r+It){n=!1;break}a=a._next}this.totalTime(r,n)}return this},t.startTime=function(i){if(arguments.length){this._start=Xt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gr(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Bi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zl(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=tT);var r=gi;return gi=i,Eh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),gi=r,this},t.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,gm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,gm(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(vr(this,i),Bi(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Bi(r)),this._dur||(this._zTime=-It),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-It:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-It)},t.eventCallback=function(i,r,n){var a=this.vars;return arguments.length>1?(r?(a[i]=r,n&&(a[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},t.then=function(i){var r=this,n=r._prom;return new Promise(function(a){var s=Kt(i)?i:um,o=function(){var l=r.then;r.then=null,n&&n(),Kt(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=l),a(s),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){no(this)},e})();rr(oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var Vi=(function(e){Jf(t,e);function t(r,n){var a;return r===void 0&&(r={}),a=e.call(this,r)||this,a.labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=Bi(r.sortChildren),Wt&&Gr(r.parent||Wt,on(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&fm(on(a),r.scrollTrigger),a}var i=t.prototype;return i.to=function(r,n,a){return to(0,arguments,this),this},i.from=function(r,n,a){return to(1,arguments,this),this},i.fromTo=function(r,n,a,s){return to(2,arguments,this),this},i.set=function(r,n,a){return n.duration=0,n.parent=this,eo(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new ii(r,n,vr(this,a),1),this},i.call=function(r,n,a){return Gr(this,ii.delayedCall(0,r,n),a)},i.staggerTo=function(r,n,a,s,o,l,u){return a.duration=n,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new ii(r,a,vr(this,o)),this},i.staggerFrom=function(r,n,a,s,o,l,u){return a.runBackwards=1,eo(a).immediateRender=Bi(a.immediateRender),this.staggerTo(r,n,a,s,o,l,u)},i.staggerFromTo=function(r,n,a,s,o,l,u,h){return s.startAt=a,eo(s).immediateRender=Bi(s.immediateRender),this.staggerTo(r,n,s,o,l,u,h)},i.render=function(r,n,a){var s=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:Xt(r),h=this._zTime<0!=r<0&&(this._initted||!l),d,c,p,m,x,_,f,S,M,v,y,b;if(this!==Wt&&u>o&&r>=0&&(u=o),u!==this._tTime||a||h){if(s!==this._time&&l&&(u+=this._time-s,r+=this._time-s),d=u,M=this._start,S=this._ts,_=!S,h&&(l||(s=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(y=this._yoyo,x=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,n,a);if(d=Xt(u%x),u===o?(m=this._repeat,d=l):(v=Xt(u/x),m=~~v,m&&m===v&&(d=l,m--),d>l&&(d=l)),v=Qa(this._tTime,x),!s&&this._tTime&&v!==m&&this._tTime-v*x-this._dur<=0&&(v=m),y&&m&1&&(d=l-d,b=1),m!==v&&!this._lock){var g=y&&v&1,T=g===(y&&m&1);if(m<v&&(g=!g),s=g?0:u%l?l:u,this._lock=1,this.render(s||(b?0:Xt(m*x)),n,!l)._lock=0,this._tTime=u,!n&&this.parent&&nr(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,v=m),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,T&&(this._lock=2,s=g?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(f=uT(this,Xt(s),Xt(d)),f&&(u-=d-(d=f._start))),this._tTime=u,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,s=0),!s&&u&&l&&!n&&!v&&(nr(this,"onStart"),this._tTime!==u))return this;if(d>=s&&r>=0)for(c=this._first;c;){if(p=c._next,(c._act||d>=c._start)&&c._ts&&f!==c){if(c.parent!==this)return this.render(r,n,a);if(c.render(c._ts>0?(d-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(d-c._start)*c._ts,n,a),d!==this._time||!this._ts&&!_){f=0,p&&(u+=this._zTime=-It);break}}c=p}else{c=this._last;for(var R=r<0?r:d;c;){if(p=c._prev,(c._act||R<=c._end)&&c._ts&&f!==c){if(c.parent!==this)return this.render(r,n,a);if(c.render(c._ts>0?(R-c._start)*c._ts:(c._dirty?c.totalDuration():c._tDur)+(R-c._start)*c._ts,n,a||gi&&Eh(c)),d!==this._time||!this._ts&&!_){f=0,p&&(u+=this._zTime=R?-It:It);break}}c=p}}if(f&&!n&&(this.pause(),f.render(d>=s?0:-It)._zTime=d>=s?1:-1,this._ts))return this._start=M,Bl(this),this.render(r,n,a);this._onUpdate&&!n&&nr(this,"onUpdate",!0),(u===o&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===o&&this._ts>0||!u&&this._ts<0)&&wn(this,1),!n&&!(r<0&&!s)&&(u||s||!o)&&(nr(this,u===o&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<o&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,n){var a=this;if(ln(n)||(n=vr(this,n,r)),!(r instanceof oo)){if(Si(r))return r.forEach(function(s){return a.add(s,n)}),this;if(hi(r))return this.addLabel(r,n);if(Kt(r))r=ii.delayedCall(0,r);else return this}return this!==r?Gr(this,r,n):this},i.getChildren=function(r,n,a,s){r===void 0&&(r=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),s===void 0&&(s=-gr);for(var o=[],l=this._first;l;)l._start>=s&&(l instanceof ii?n&&o.push(l):(a&&o.push(l),r&&o.push.apply(o,l.getChildren(!0,n,a)))),l=l._next;return o},i.getById=function(r){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===r)return n[a]},i.remove=function(r){return hi(r)?this.removeLabel(r):Kt(r)?this.killTweensOf(r):(r.parent===this&&Fl(this,r),r===this._recent&&(this._recent=this._last),na(this))},i.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(ar.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),e.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},i.addLabel=function(r,n){return this.labels[r]=vr(this,n),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,n,a){var s=ii.delayedCall(0,n||Qs,a);return s.data="isPause",this._hasPause=1,Gr(this,s,vr(this,r))},i.removePause=function(r){var n=this._first;for(r=vr(this,r);n;)n._start===r&&n.data==="isPause"&&wn(n),n=n._next},i.killTweensOf=function(r,n,a){for(var s=this.getTweensOf(r,a),o=s.length;o--;)Pn!==s[o]&&s[o].kill(r,n);return this},i.getTweensOf=function(r,n){for(var a=[],s=_r(r),o=this._first,l=ln(n),u;o;)o instanceof ii?iT(o._targets,s)&&(l?(!Pn||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(u=o.getTweensOf(s,n)).length&&a.push.apply(a,u),o=o._next;return a},i.tweenTo=function(r,n){n=n||{};var a=this,s=vr(a,r),o=n,l=o.startAt,u=o.onStart,h=o.onStartParams,d=o.immediateRender,c,p=ii.to(a,rr({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||It,onStart:function(){if(a.pause(),!c){var m=n.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());p._dur!==m&&es(p,m,0,1).render(p._time,!0,!0),c=1}u&&u.apply(p,h||[])}},n));return d?p.render(0):p},i.tweenFromTo=function(r,n,a){return this.tweenTo(n,rr({startAt:{time:vr(this,r)}},a))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),bm(this,vr(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),bm(this,vr(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+It)},i.shiftChildren=function(r,n,a){a===void 0&&(a=0);var s=this._first,o=this.labels,l;for(r=Xt(r);s;)s._start>=a&&(s._start+=r,s._end+=r),s=s._next;if(n)for(l in o)o[l]>=a&&(o[l]+=r);return na(this)},i.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return e.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),na(this)},i.totalDuration=function(r){var n=0,a=this,s=a._last,o=gr,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>o&&a._sort&&s._ts&&!a._lock?(a._lock=1,Gr(a,s,u-s._delay,1)._lock=0):o=u,u<0&&s._ts&&(n-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Xt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),o=0),s._end>n&&s._ts&&(n=s._end),s=l;es(a,a===Wt&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(Wt._ts&&(om(Wt,zl(r,Wt)),nm=ar.frame),ar.frame>=am){am+=er.autoSleep||120;var n=Wt._first;if((!n||!n._ts)&&er.autoSleep&&ar._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||ar.sleep()}}},t})(oo);rr(Vi.prototype,{_lock:0,_hasPause:0,_forcing:0});var wT=function(e,t,i,r,n,a,s){var o=new Hi(this._pt,e,t,0,1,Fm,null,n),l=0,u=0,h,d,c,p,m,x,_,f;for(o.b=i,o.e=r,i+="",r+="",(_=~r.indexOf("random("))&&(r=ro(r)),a&&(f=[i,r],a(f,e,t),i=f[0],r=f[1]),d=i.match(gh)||[];h=gh.exec(r);)p=h[0],m=r.substring(l,h.index),c?c=(c+1)%5:m.substr(-5)==="rgba("&&(c=1),p!==d[u++]&&(x=parseFloat(d[u-1])||0,o._pt={_next:o._pt,p:m||u===1?m:",",s:x,c:p.charAt(1)==="="?Za(x,p)-x:parseFloat(p)-x,m:c&&c<4?Math.round:0},l=gh.lastIndex);return o.c=l<r.length?r.substring(l,r.length):"",o.fp=s,(em.test(r)||_)&&(o.e=0),this._pt=o,o},Dh=function(e,t,i,r,n,a,s,o,l,u){Kt(r)&&(r=r(n||0,e,a));var h=e[t],d=i!=="get"?i:Kt(h)?l?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,c=Kt(h)?l?LT:Um:Oh,p;if(hi(r)&&(~r.indexOf("random(")&&(r=ro(r)),r.charAt(1)==="="&&(p=Za(d,r)+(Ti(d)||0),(p||p===0)&&(r=p))),!u||d!==r||Nh)return!isNaN(d*r)&&r!==""?(p=new Hi(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?DT:Om,0,c),l&&(p.fp=l),s&&p.modifier(s,this,e),this._pt=p):(!h&&!(t in e)&&xh(t,r),wT.call(this,e,t,d,r,c,o||er.stringFilter,l))},AT=function(e,t,i,r,n){if(Kt(e)&&(e=lo(e,n,t,i,r)),!Vr(e)||e.style&&e.nodeType||Si(e)||Zf(e))return hi(e)?lo(e,n,t,i,r):e;var a={},s;for(s in e)a[s]=lo(e[s],n,t,i,r);return a},Dm=function(e,t,i,r,n,a){var s,o,l,u;if(ir[e]&&(s=new ir[e]).init(n,s.rawVars?t[e]:AT(t[e],r,n,a,i),i,r,a)!==!1&&(i._pt=o=new Hi(i._pt,n,e,0,1,s.render,s,0,s.priority),i!==ts))for(l=i._ptLookup[i._targets.indexOf(n)],u=s._props.length;u--;)l[s._props[u]]=o;return s},Pn,Nh,Uh=function e(t,i,r){var n=t.vars,a=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,u=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,c=n.keyframes,p=n.autoRevert,m=t._dur,x=t._startAt,_=t._targets,f=t.parent,S=f&&f.data==="nested"?f.vars.targets:_,M=t._overwrite==="auto"&&!dh,v=t.timeline,y=n.easeReverse||d,b,g,T,R,N,L,k,G,C,O,H,F,de;if(v&&(!c||!a)&&(a="none"),t._ease=aa(a,Zs.ease),t._rEase=y&&(aa(y)||t._ease),t._from=!v&&!!n.runBackwards,t._from&&(t.ratio=1),!v||c&&!n.stagger){if(G=_[0]?ra(_[0]).harness:0,F=G&&n[G.prop],b=Ol(n,yh),x&&(x._zTime<0&&x.progress(1),i<0&&h&&o&&!p?x.render(-1,!0):x.revert(h&&m?Dl:eT),x._lazy=0),s){if(wn(t._startAt=ii.set(_,rr({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!x&&Bi(l),startAt:null,delay:0,onUpdate:u&&function(){return nr(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(gi||!o&&!p)&&t._startAt.revert(Dl),o&&m&&i<=0&&r<=0){i&&(t._zTime=i);return}}else if(h&&m&&!x){if(i&&(o=!1),T=rr({overwrite:!1,data:"isFromStart",lazy:o&&!x&&Bi(l),immediateRender:o,stagger:0,parent:f},b),F&&(T[G.prop]=F),wn(t._startAt=ii.set(_,T)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(gi?t._startAt.revert(Dl):t._startAt.render(-1,!0)),t._zTime=i,!o)e(t._startAt,It,It);else if(!i)return}for(t._pt=t._ptCache=0,l=m&&Bi(l)||l&&!m,g=0;g<_.length;g++){if(N=_[g],k=N._gsap||bh(_)[g]._gsap,t._ptLookup[g]=O={},Mh[k.id]&&En.length&&Ul(),H=S===_?g:S.indexOf(N),G&&(C=new G).init(N,F||b,t,H,S)!==!1&&(t._pt=R=new Hi(t._pt,N,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(P){O[P]=R}),C.priority&&(L=1)),!G||F)for(T in b)ir[T]&&(C=Dm(T,b,t,H,N,S))?C.priority&&(L=1):O[T]=R=Dh.call(t,N,T,"get",b[T],H,S,0,n.stringFilter);t._op&&t._op[g]&&t.kill(N,t._op[g]),M&&t._pt&&(Pn=t,Wt.killTweensOf(N,O,t.globalTime(i)),de=!t.parent,Pn=0),t._pt&&l&&(Mh[k.id]=1)}L&&zm(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!de,c&&i<=0&&v.render(gr,!0,!0)},RT=function(e,t,i,r,n,a,s,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,c;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,c=e._targets.length;c--;){if(u=d[c][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Nh=1,e.vars[t]="+=0",Uh(e,s),Nh=0,o?$s(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(c=l.length;c--;)h=l[c],u=h._pt||h,u.s=(r||r===0)&&!n?r:u.s+(r||0)+a*u.c,u.c=i-u.s,h.e&&(h.e=Zt(i)+Ti(h.e)),h.b&&(h.b=u.s+Ti(h.b))},PT=function(e,t){var i=e[0]?ra(e[0]).harness:0,r=i&&i.aliases,n,a,s,o;if(!r)return t;n=$a({},t);for(a in r)if(a in n)for(o=r[a].split(","),s=o.length;s--;)n[o[s]]=n[a];return n},CT=function(e,t,i,r){var n=t.ease||r||"power1.inOut",a,s;if(Si(t))s=i[e]||(i[e]=[]),t.forEach(function(o,l){return s.push({t:l/(t.length-1)*100,v:o,e:n})});else for(a in t)s=i[a]||(i[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:n})},lo=function(e,t,i,r,n){return Kt(e)?e.call(t,i,r,n):hi(e)&&~e.indexOf("random(")?ro(e):e},Hl=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nm={};ki(Hl+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return Nm[e]=1}),Hl=Hl.split(",");var ii=(function(e){Jf(t,e);function t(r,n,a,s){var o;typeof n=="number"&&(a.duration=n,n=a,a=null),o=e.call(this,s?n:eo(n))||this;var l=o.vars,u=l.duration,h=l.delay,d=l.immediateRender,c=l.stagger,p=l.overwrite,m=l.keyframes,x=l.defaults,_=l.scrollTrigger,f=n.parent||Wt,S=(Si(r)||Zf(r)?ln(r[0]):"length"in n)?[r]:_r(r),M,v,y,b,g,T,R,N;if(o._targets=S.length?bh(S):$s("GSAP target "+r+" not found. https://gsap.com",!er.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,m||c||Ll(u)||Ll(h)){n=o.vars;var L=n.easeReverse||n.yoyoEase;if(M=o.timeline=new Vi({data:"nested",defaults:x||{},targets:f&&f.data==="nested"?f.vars.targets:S}),M.kill(),M.parent=M._dp=on(o),M._start=0,c||Ll(u)||Ll(h)){if(b=S.length,R=c&&xm(c),Vr(c))for(g in c)~Hl.indexOf(g)&&(N||(N={}),N[g]=c[g]);for(v=0;v<b;v++)y=Ol(n,Nm),y.stagger=0,L&&(y.easeReverse=L),N&&$a(y,N),T=S[v],y.duration=+lo(u,on(o),v,T,S),y.delay=(+lo(h,on(o),v,T,S)||0)-o._delay,!c&&b===1&&y.delay&&(o._delay=h=y.delay,o._start+=h,y.delay=0),M.to(T,y,R?R(v,T,S):0),M._ease=Mt.none;M.duration()?u=h=0:o.timeline=0}else if(m){eo(rr(M.vars.defaults,{ease:"none"})),M._ease=aa(m.ease||n.ease||"none");var k=0,G,C,O;if(Si(m))m.forEach(function(H){return M.to(S,H,">")}),M.duration();else{y={};for(g in m)g==="ease"||g==="easeEach"||CT(g,m[g],y,m.easeEach);for(g in y)for(G=y[g].sort(function(H,F){return H.t-F.t}),k=0,v=0;v<G.length;v++)C=G[v],O={ease:C.e,duration:(C.t-(v?G[v-1].t:0))/100*u},O[g]=C.v,M.to(S,O,k),k+=O.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||o.duration(u=M.duration())}else o.timeline=0;return p===!0&&!dh&&(Pn=on(o),Wt.killTweensOf(S),Pn=0),Gr(f,on(o),a),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(d||!u&&!m&&o._start===Xt(f._time)&&Bi(d)&&sT(on(o))&&f.data!=="nested")&&(o._tTime=-It,o.render(Math.max(0,-h)||0)),_&&fm(on(o),_),o}var i=t.prototype;return i.render=function(r,n,a){var s=this._time,o=this._tDur,l=this._dur,u=r<0,h=r>o-It&&!u?o:r<It?0:r,d,c,p,m,x,_,f,S;if(!l)lT(this,r,n,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+r,n,a);if(d=Xt(h%m),h===o?(p=this._repeat,d=l):(x=Xt(h/m),p=~~x,p&&p===x?(d=l,p--):d>l&&(d=l)),_=this._yoyo&&p&1,_&&(d=l-d),x=Qa(this._tTime,m),d===s&&!a&&this._initted&&p===x)return this._tTime=h,this;p!==x&&this.vars.repeatRefresh&&!_&&!this._lock&&d!==m&&this._initted&&(this._lock=a=1,this.render(Xt(m*p),!0).invalidate()._lock=0)}if(!this._initted){if(mm(this,u?r:d,a,n,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&p!==x))return this;if(l!==this._dur)return this.render(r,n,a)}if(this._rEase){var M=d<s;if(M!==this._inv){var v=M?s:l-s;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=v?(M?-1:1)/v:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=f=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=f=this._ease(d/l);if(this._from&&(this.ratio=f=1-f),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!n&&!x&&(nr(this,"onStart"),this._tTime!==h))return this;for(c=this._pt;c;)c.r(f,c.d),c=c._next;S&&S.render(r<0?r:S._dur*S._ease(d/this._dur),n,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(u&&wh(this,r,n,a),nr(this,"onUpdate")),this._repeat&&p!==x&&this.vars.onRepeat&&!n&&this.parent&&nr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&wh(this,r,!0,!0),(r||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&wn(this,1),!n&&!(u&&!s)&&(h||s||_)&&(nr(this,h===o?"onComplete":"onReverseComplete",!0),this._prom&&!(h<o&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),e.prototype.invalidate.call(this,r)},i.resetTo=function(r,n,a,s,o){so||ar.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uh(this,l),u=this._ease(l/this._dur),RT(this,r,n,a,s,u,l,o)?this.resetTo(r,n,a,s,1):(kl(this,0),this.parent||hm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?no(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gi),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,Pn&&Pn.vars.overwrite!==!0)._first||no(this),this.parent&&a!==this.timeline.totalDuration()&&es(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,o=r?_r(r):s,l=this._ptLookup,u=this._pt,h,d,c,p,m,x,_;if((!n||n==="all")&&nT(s,o))return n==="all"&&(this._pt=0),no(this);for(h=this._op=this._op||[],n!=="all"&&(hi(n)&&(m={},ki(n,function(f){return m[f]=1}),n=m),n=PT(s,n)),_=s.length;_--;)if(~o.indexOf(s[_])){d=l[_],n==="all"?(h[_]=n,p=d,c={}):(c=h[_]=h[_]||{},p=n);for(m in p)x=d&&d[m],x&&((!("kill"in x.d)||x.d.kill(m)===!0)&&Fl(this,x,"_pt"),delete d[m]),c!=="all"&&(c[m]=1)}return this._initted&&!this._pt&&u&&no(this),this},t.to=function(r,n){return new t(r,n,arguments[2])},t.from=function(r,n){return to(1,arguments)},t.delayedCall=function(r,n,a,s){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(r,n,a){return to(2,arguments)},t.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(r,n)},t.killTweensOf=function(r,n,a){return Wt.killTweensOf(r,n,a)},t})(oo);rr(ii.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ki("staggerTo,staggerFrom,staggerFromTo",function(e){ii[e]=function(){var t=new Vi,i=Ah.call(arguments,0);return i.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,i)}});var Oh=function(e,t,i){return e[t]=i},Um=function(e,t,i){return e[t](i)},LT=function(e,t,i,r){return e[t](r.fp,i)},IT=function(e,t,i){return e.setAttribute(t,i)},Fh=function(e,t){return Kt(e[t])?Um:fh(e[t])&&e.setAttribute?IT:Oh},Om=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},DT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fm=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},zh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},NT=function(e,t,i,r){for(var n=this._pt,a;n;)a=n._next,n.p===r&&n.modifier(e,t,i),n=a},UT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Fl(this,t,"_pt"):t.dep||(i=1),t=r;return!i},OT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},zm=function(e){for(var t=e._pt,i,r,n,a;t;){for(i=t._next,r=n;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:n=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=n},Hi=(function(){function e(i,r,n,a,s,o,l,u,h){this.t=r,this.s=a,this.c=s,this.p=n,this.r=o||Om,this.d=l||this,this.set=u||Oh,this.pr=h||0,this._next=i,i&&(i._prev=this)}var t=e.prototype;return t.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=OT,this.m=i,this.mt=n,this.tween=r},e})();ki(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return yh[e]=1}),tr.TweenMax=tr.TweenLite=ii,tr.TimelineLite=tr.TimelineMax=Vi,Wt=new Vi({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),er.stringFilter=Cm;var oa=[],Gl={},FT=[],Bm=0,zT=0,Bh=function(e){return(Gl[e]||FT).map(function(t){return t()})},uo=function(){var e=Date.now(),t=[];e-Bm>2&&(Bh("matchMediaInit"),oa.forEach(function(i){var r=i.queries,n=i.conditions,a,s,o,l;for(s in r)a=Hr.matchMedia(r[s]).matches,a&&(o=1),a!==n[s]&&(n[s]=a,l=1);l&&(i.revert(),o&&t.push(i))}),Bh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Bm=e,Bh("matchMedia"))},km=(function(){function e(i,r){this.selector=r&&Rh(r),this.data=[],this._r=[],this.isReverted=!1,this.id=zT++,i&&this.add(i)}var t=e.prototype;return t.add=function(i,r,n){Kt(i)&&(n=r,r=i,i=Kt);var a=this,s=function(){var o=Vt,l=a.selector,u;return o&&o!==a&&o.data.push(a),n&&(a.selector=Rh(n)),Vt=a,u=r.apply(a,arguments),Kt(u)&&a._r.push(u),Vt=o,a.selector=l,a.isReverted=!1,u};return a.last=s,i===Kt?s(a,function(o){return a.add(null,o)}):i?a[i]=s:s},t.ignore=function(i){var r=Vt;Vt=null,i(this),Vt=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof e?i.push.apply(i,r.getTweens()):r instanceof ii&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var n=this;if(i?(function(){for(var s=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),o=n.data.length;o--;)l=n.data[o],l instanceof Vi?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof ii)&&l.revert&&l.revert(i);n._r.forEach(function(u){return u(i,n)}),n.isReverted=!0})():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),r){for(var a=oa.length;a--;)oa[a].id===this.id&&oa.splice(a,1);this._mqs&&this._mqs.forEach(function(s){return s.removeListener?s.removeListener(uo):s.removeEventListener("change",uo)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},e})(),BT=(function(){function e(i){this.contexts=[],this.scope=i,Vt&&Vt.data.push(this)}var t=e.prototype;return t.add=function(i,r,n){Vr(i)||(i={matches:i});var a=new km(0,n||this.scope),s=a.conditions={},o,l,u;Vt&&!a.selector&&(a.selector=Vt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(l in i)l==="all"?u=1:(o=Hr.matchMedia(i[l]),o&&(oa.indexOf(a)<0&&oa.push(a),(s[l]=o.matches)&&(u=1),o.addListener?o.addListener(uo):o.addEventListener("change",uo),(a._mqs||(a._mqs=[])).push(o)));return u&&r(a,function(h){return a.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},e})(),Wl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return wm(r)})},timeline:function(e){return new Vi(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){hi(e)&&(e=_r(e)[0]);var n=ra(e||{}).get,a=i?um:lm;return i==="native"&&(i=""),e&&(t?a((ir[t]&&ir[t].get||n)(e,t,i,r)):function(s,o,l){return a((ir[s]&&ir[s].get||n)(e,s,o,l))})},quickSetter:function(e,t,i){if(e=_r(e),e.length>1){var r=e.map(function(u){return Gi.quickSetter(u,t,i)}),n=r.length;return function(u){for(var h=n;h--;)r[h](u)}}e=e[0]||{};var a=ir[t],s=ra(e),o=s.harness&&(s.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;ts._pt=0,h.init(e,i?u+i:u,ts,0,[e]),h.render(1,h),ts._pt&&zh(1,ts)}:s.set(e,o);return a?l:function(u){return l(e,o,i?u+i:u,s,1)}},quickTo:function(e,t,i){var r,n=Gi.to(e,rr((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(s,o,l){return n.resetTo(t,s,o,l)};return a.tween=n,a},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=aa(e.ease,Zs.ease)),cm(Zs,e||{})},config:function(e){return cm(er,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,n=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(s){return s&&!ir[s]&&!tr[s]&&$s(t+" effect requires "+s+" plugin.")}),Sh[t]=function(s,o,l){return i(_r(s),rr(o||{},n),l)},a&&(Vi.prototype[t]=function(s,o,l){return this.add(Sh[t](s,Vr(o)?o:(l=o)&&{},this),l)})},registerEase:function(e,t){Mt[e]=aa(t)},parseEase:function(e,t){return arguments.length?aa(e,t):Mt},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Vi(e),r,n;for(i.smoothChildTiming=Bi(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)n=r._next,(t||!(!r._dur&&r instanceof ii&&r.vars.onComplete===r._targets[0]))&&Gr(i,r,r._start-r._delay),r=n;return Gr(Wt,i,0),i},context:function(e,t){return e?new km(e,t):Vt},matchMedia:function(e){return new BT(e)},matchMediaRefresh:function(){return oa.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||uo()},addEventListener:function(e,t){var i=Gl[e]||(Gl[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Gl[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:gT,wrapYoyo:vT,distribute:xm,random:Mm,snap:ym,normalize:mT,getUnit:Ti,clamp:hT,splitColor:Am,toArray:_r,selector:Rh,mapRange:Tm,pipe:pT,unitize:fT,interpolate:_T,shuffle:_m},install:im,effects:Sh,ticker:ar,updateRoot:Vi.updateRoot,plugins:ir,globalTimeline:Wt,core:{PropTween:Hi,globals:rm,Tween:ii,Timeline:Vi,Animation:oo,getCache:ra,_removeLinkedListItem:Fl,reverting:function(){return gi},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return dh=e}}};ki("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return Wl[e]=ii[e]}),ar.add(Vi.updateRoot),ts=Wl.to({},{duration:0});var kT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},VT=function(e,t){var i=e._targets,r,n,a;for(r in t)for(n=i.length;n--;)a=e._ptLookup[n][r],a&&(a=a.d)&&(a._pt&&(a=kT(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[n],r))},kh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,n){n._onInit=function(a){var s,o;if(hi(r)&&(s={},ki(r,function(l){return s[l]=1}),r=s),t){s={};for(o in r)s[o]=t(r[o]);r=s}VT(a,r)}}}},Gi=Wl.registerPlugin({name:"attr",init:function(e,t,i,r,n){var a,s,o;this.tween=i;for(a in t)o=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(o||0)+"",t[a],r,n,0,0,a),s.op=a,s.b=o,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)gi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},kh("roundProps",Ph),kh("modifiers"),kh("snap",ym))||Wl;ii.version=Vi.version=Gi.version="3.15.1",tm=1,mh()&&is();var aE=Mt.Power0,sE=Mt.Power1,oE=Mt.Power2,lE=Mt.Power3,uE=Mt.Power4,cE=Mt.Linear,hE=Mt.Quad,dE=Mt.Cubic,pE=Mt.Quart,fE=Mt.Quint,mE=Mt.Strong,gE=Mt.Elastic,vE=Mt.Back,_E=Mt.SteppedEase,xE=Mt.Bounce,yE=Mt.Sine,ME=Mt.Expo,SE=Mt.Circ,Vm,Cn,rs,Vh,la,HT,Hm,Hh,GT=function(){return typeof window<"u"},un={},ua=180/Math.PI,ns=Math.PI/180,as=Math.atan2,Gm=1e8,Gh=/([A-Z])/g,WT=/(left|right|width|margin|padding|x)/i,XT=/[\s,\(]\S/,Wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Wm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},KT=function(e,t,i){return e.style[t]=i},ZT=function(e,t,i){return e.style.setProperty(t,i)},$T=function(e,t,i){return e._gsap[t]=i},QT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},eb=function(e,t,i,r,n){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(n,a)},tb=function(e,t,i,r,n){var a=e._gsap;a[t]=i,a.renderTransform(n,a)},qt="transform",Wi=qt+"Origin",ib=function e(t,i){var r=this,n=this.target,a=n.style,s=n._gsap;if(t in un&&a){if(this.tfm=this.tfm||{},t!=="transform")t=Wr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return r.tfm[o]=cn(n,o)}):this.tfm[t]=s.x?s[t]:cn(n,t),t===Wi&&(this.tfm.zOrigin=s.zOrigin);else return Wr.transform.split(",").forEach(function(o){return e.call(r,o,i)});if(this.props.indexOf(qt)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Wi,i,"")),t=qt}(a||i)&&this.props.push(t,i,a[t])},qm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,n,a;for(n=0;n<e.length;n+=3)e[n+1]?e[n+1]===2?t[e[n]](e[n+2]):t[e[n]]=e[n+2]:e[n+2]?i[e[n]]=e[n+2]:i.removeProperty(e[n].substr(0,2)==="--"?e[n]:e[n].replace(Gh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=Hh(),(!n||!n.isStart)&&!i[qt]&&(qm(i),r.zOrigin&&i[Wi]&&(i[Wi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},jm=function(e,t){var i={target:e,props:[],revert:rb,save:ib};return e._gsap||Gi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Ym,Xh=function(e,t){var i=Cn.createElementNS?Cn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cn.createElement(e);return i&&i.style?i:Cn.createElement(e)},sr=function e(t,i,r){var n=getComputedStyle(t);return n[i]||n.getPropertyValue(i.replace(Gh,"-$1").toLowerCase())||n.getPropertyValue(i)||!r&&e(t,ss(i)||i,1)||""},Jm="O,Moz,ms,Ms,Webkit".split(","),ss=function(e,t,i){var r=t||la,n=r.style,a=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Jm[a]+e in n););return a<0?null:(a===3?"ms":a>=0?Jm[a]:"")+e},qh=function(){GT()&&window.document&&(Vm=window,Cn=Vm.document,rs=Cn.documentElement,la=Xh("div")||{style:{}},HT=Xh("div"),qt=ss(qt),Wi=qt+"Origin",la.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ym=!!ss("perspective"),Hh=Gi.core.reverting,Vh=1)},Km=function(e){var t=e.ownerSVGElement,i=Xh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),n;r.style.display="block",i.appendChild(r),rs.appendChild(i);try{n=r.getBBox()}catch{}return i.removeChild(r),rs.removeChild(i),n},Zm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},$m=function(e){var t,i;try{t=e.getBBox()}catch{t=Km(e),i=1}return t&&(t.width||t.height)||i||(t=Km(e)),t&&!t.width&&!t.x&&!t.y?{x:+Zm(e,["x","cx","x1"])||0,y:+Zm(e,["y","cy","y1"])||0,width:0,height:0}:t},Qm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$m(e))},Ln=function(e,t){if(t){var i=e.style,r;t in un&&t!==Wi&&(t=qt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Gh,"-$1").toLowerCase())):i.removeAttribute(t)}},In=function(e,t,i,r,n,a){var s=new Hi(e._pt,t,i,0,1,a?Xm:Wm);return e._pt=s,s.b=r,s.e=n,e._props.push(i),s},e0={deg:1,rad:1,turn:1},nb={grid:1,flex:1},Dn=function e(t,i,r,n){var a=parseFloat(r)||0,s=(r+"").trim().substr((a+"").length)||"px",o=la.style,l=WT.test(i),u=t.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(l?"Width":"Height"),d=100,c=n==="px",p=n==="%",m,x,_,f;if(n===s||!a||e0[n]||e0[s])return a;if(s!=="px"&&!c&&(a=e(t,i,r,"px")),f=t.getCTM&&Qm(t),(p||s==="%")&&(un[i]||~i.indexOf("adius")))return m=f?t.getBBox()[l?"width":"height"]:t[h],Zt(p?a/m*d:a/100*m);if(o[l?"width":"height"]=d+(c?s:n),x=n!=="rem"&&~i.indexOf("adius")||n==="em"&&t.appendChild&&!u?t:t.parentNode,f&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Cn||!x.appendChild)&&(x=Cn.body),_=x._gsap,_&&p&&_.width&&l&&_.time===ar.time&&!_.uncache)return Zt(a/_.width*d);if(p&&(i==="height"||i==="width")){var S=t.style[i];t.style[i]=d+n,m=t[h],S?t.style[i]=S:Ln(t,i)}else(p||s==="%")&&!nb[sr(x,"display")]&&(o.position=sr(t,"position")),x===t&&(o.position="static"),x.appendChild(la),m=la[h],x.removeChild(la),o.position="absolute";return l&&p&&(_=ra(x),_.time=ar.time,_.width=x[h]),Zt(c?m*a/d:m&&a?d/m*a:0)},cn=function(e,t,i,r){var n;return Vh||qh(),t in Wr&&t!=="transform"&&(t=Wr[t],~t.indexOf(",")&&(t=t.split(",")[0])),un[t]&&t!=="transform"?(n=ho(e,r),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:ql(sr(e,Wi))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Xl[t]&&Xl[t](e,t,i)||sr(e,t)||sm(e,t)||(t==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Dn(e,t,n,i)+i:n},ab=function(e,t,i,r){if(!i||i==="none"){var n=ss(t,e,1),a=n&&sr(e,n,1);a&&a!==i?(t=n,i=a):t==="borderColor"&&(i=sr(e,"borderTopColor"))}var s=new Hi(this._pt,e.style,t,0,1,Fm),o=0,l=0,u,h,d,c,p,m,x,_,f,S,M,v;if(s.b=i,s.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=sr(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=sr(e,t)||r,m?e.style[t]=m:Ln(e,t)),u=[i,r],Cm(u),i=u[0],r=u[1],d=i.match(Ka)||[],v=r.match(Ka)||[],v.length){for(;h=Ka.exec(r);)x=h[0],f=r.substring(o,h.index),p?p=(p+1)%5:(f.substr(-5)==="rgba("||f.substr(-5)==="hsla(")&&(p=1),x!==(m=d[l++]||"")&&(c=parseFloat(m)||0,M=m.substr((c+"").length),x.charAt(1)==="="&&(x=Za(c,x)+M),_=parseFloat(x),S=x.substr((_+"").length),o=Ka.lastIndex-S.length,S||(S=S||er.units[t]||M,o===r.length&&(r+=S,s.e+=S)),M!==S&&(c=Dn(e,t,m,S)||0),s._pt={_next:s._pt,p:f||l===1?f:",",s:c,c:_-c,m:p&&p<4||t==="zIndex"?Math.round:0});s.c=o<r.length?r.substring(o,r.length):""}else s.r=t==="display"&&r==="none"?Xm:Wm;return em.test(r)&&(s.e=0),this._pt=s,s},t0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},sb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=t0[i]||i,t[1]=t0[r]||r,t.join(" ")},ob=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,n=t.u,a=i._gsap,s,o,l;if(n==="all"||n===!0)r.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)s=n[l],un[s]&&(o=1,s=s==="transformOrigin"?Wi:qt),Ln(i,s);o&&(Ln(i,qt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ho(i,1),a.uncache=1,qm(r)))}},Xl={clearProps:function(e,t,i,r,n){if(n.data!=="isFromStart"){var a=e._pt=new Hi(e._pt,t,i,0,0,ob);return a.u=r,a.pr=-10,a.tween=n,e._props.push(i),1}}},co=[1,0,0,1,0,0],i0={},r0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},n0=function(e){var t=sr(e,qt);return r0(t)?co:t.substr(7).match(Qf).map(Zt)},jh=function(e,t){var i=e._gsap||ra(e),r=e.style,n=n0(e),a,s,o,l;return i.svg&&e.getAttribute("transform")?(o=e.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?co:n):(n===co&&!e.offsetParent&&e!==rs&&!i.svg&&(o=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,s=e.nextElementSibling,rs.appendChild(e)),n=n0(e),o?r.display=o:Ln(e,"display"),l&&(s?a.insertBefore(e,s):a?a.appendChild(e):rs.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Yh=function(e,t,i,r,n,a){var s=e._gsap,o=n||jh(e,!0),l=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,d=s.yOffset||0,c=o[0],p=o[1],m=o[2],x=o[3],_=o[4],f=o[5],S=t.split(" "),M=parseFloat(S[0])||0,v=parseFloat(S[1])||0,y,b,g,T;i?o!==co&&(b=c*x-p*m)&&(g=M*(x/b)+v*(-m/b)+(m*f-x*_)/b,T=M*(-p/b)+v*(c/b)-(c*f-p*_)/b,M=g,v=T):(y=$m(e),M=y.x+(~S[0].indexOf("%")?M/100*y.width:M),v=y.y+(~(S[1]||S[0]).indexOf("%")?v/100*y.height:v)),r||r!==!1&&s.smooth?(_=M-l,f=v-u,s.xOffset=h+(_*c+f*m)-_,s.yOffset=d+(_*p+f*x)-f):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=v,s.smooth=!!r,s.origin=t,s.originIsAbsolute=!!i,e.style[Wi]="0px 0px",a&&(In(a,s,"xOrigin",l,M),In(a,s,"yOrigin",u,v),In(a,s,"xOffset",h,s.xOffset),In(a,s,"yOffset",d,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+v)},ho=function(e,t){var i=e._gsap||new Im(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,n=i.scaleX<0,a="px",s="deg",o=getComputedStyle(e),l=sr(e,Wi)||"0",u,h,d,c,p,m,x,_,f,S,M,v,y,b,g,T,R,N,L,k,G,C,O,H,F,de,P,J,ce,Ie,Z,ve;return u=h=d=m=x=_=f=S=M=0,c=p=1,i.svg=!!(e.getCTM&&Qm(e)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(r[qt]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[qt]!=="none"?o[qt]:"")),r.scale=r.rotate=r.translate="none"),b=jh(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),l=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Yh(e,H||l,!!H||i.originIsAbsolute,i.smooth!==!1,b)),v=i.xOrigin||0,y=i.yOrigin||0,b!==co&&(N=b[0],L=b[1],k=b[2],G=b[3],u=C=b[4],h=O=b[5],b.length===6?(c=Math.sqrt(N*N+L*L),p=Math.sqrt(G*G+k*k),m=N||L?as(L,N)*ua:0,f=k||G?as(k,G)*ua+m:0,f&&(p*=Math.abs(Math.cos(f*ns))),i.svg&&(u-=v-(v*N+y*k),h-=y-(v*L+y*G))):(ve=b[6],Ie=b[7],P=b[8],J=b[9],ce=b[10],Z=b[11],u=b[12],h=b[13],d=b[14],g=as(ve,ce),x=g*ua,g&&(T=Math.cos(-g),R=Math.sin(-g),H=C*T+P*R,F=O*T+J*R,de=ve*T+ce*R,P=C*-R+P*T,J=O*-R+J*T,ce=ve*-R+ce*T,Z=Ie*-R+Z*T,C=H,O=F,ve=de),g=as(-k,ce),_=g*ua,g&&(T=Math.cos(-g),R=Math.sin(-g),H=N*T-P*R,F=L*T-J*R,de=k*T-ce*R,Z=G*R+Z*T,N=H,L=F,k=de),g=as(L,N),m=g*ua,g&&(T=Math.cos(g),R=Math.sin(g),H=N*T+L*R,F=C*T+O*R,L=L*T-N*R,O=O*T-C*R,N=H,C=F),x&&Math.abs(x)+Math.abs(m)>359.9&&(x=m=0,_=180-_),c=Zt(Math.sqrt(N*N+L*L+k*k)),p=Zt(Math.sqrt(O*O+ve*ve)),g=as(C,O),f=Math.abs(g)>2e-4?g*ua:0,M=Z?1/(Z<0?-Z:Z):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!r0(sr(e,qt)),H&&e.setAttribute("transform",H))),Math.abs(f)>90&&Math.abs(f)<270&&(n?(c*=-1,f+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,f+=f<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Zt(c),i.scaleY=Zt(p),i.rotation=Zt(m)+s,i.rotationX=Zt(x)+s,i.rotationY=Zt(_)+s,i.skewX=f+s,i.skewY=S+s,i.transformPerspective=M+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Wi]=ql(l)),i.xOffset=i.yOffset=0,i.force3D=er.force3D,i.renderTransform=i.svg?ub:Ym?a0:lb,i.uncache=0,i},ql=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jh=function(e,t,i){var r=Ti(t);return Zt(parseFloat(t)+parseFloat(Dn(e,"x",i+"px",r)))+r},lb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,a0(e,t)},ca="0deg",po="0px",ha=") ",a0=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,s=i.y,o=i.z,l=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,c=i.skewY,p=i.scaleX,m=i.scaleY,x=i.transformPerspective,_=i.force3D,f=i.target,S=i.zOrigin,M="",v=_==="auto"&&e&&e!==1||_===!0;if(S&&(h!==ca||u!==ca)){var y=parseFloat(u)*ns,b=Math.sin(y),g=Math.cos(y),T;y=parseFloat(h)*ns,T=Math.cos(y),a=Jh(f,a,b*T*-S),s=Jh(f,s,-Math.sin(y)*-S),o=Jh(f,o,g*T*-S+S)}x!==po&&(M+="perspective("+x+ha),(r||n)&&(M+="translate("+r+"%, "+n+"%) "),(v||a!==po||s!==po||o!==po)&&(M+=o!==po||v?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+ha),l!==ca&&(M+="rotate("+l+ha),u!==ca&&(M+="rotateY("+u+ha),h!==ca&&(M+="rotateX("+h+ha),(d!==ca||c!==ca)&&(M+="skew("+d+", "+c+ha),(p!==1||m!==1)&&(M+="scale("+p+", "+m+ha),f.style[qt]=M||"translate(0, 0)"},ub=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,a=i.x,s=i.y,o=i.rotation,l=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,c=i.target,p=i.xOrigin,m=i.yOrigin,x=i.xOffset,_=i.yOffset,f=i.forceCSS,S=parseFloat(a),M=parseFloat(s),v,y,b,g,T;o=parseFloat(o),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,o+=u),o||l?(o*=ns,l*=ns,v=Math.cos(o)*h,y=Math.sin(o)*h,b=Math.sin(o-l)*-d,g=Math.cos(o-l)*d,l&&(u*=ns,T=Math.tan(l-u),T=Math.sqrt(1+T*T),b*=T,g*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),v*=T,y*=T)),v=Zt(v),y=Zt(y),b=Zt(b),g=Zt(g)):(v=h,g=d,y=b=0),(S&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(S=Dn(c,"x",a,"px"),M=Dn(c,"y",s,"px")),(p||m||x||_)&&(S=Zt(S+p-(p*v+m*b)+x),M=Zt(M+m-(p*y+m*g)+_)),(r||n)&&(T=c.getBBox(),S=Zt(S+r/100*T.width),M=Zt(M+n/100*T.height)),T="matrix("+v+","+y+","+b+","+g+","+S+","+M+")",c.setAttribute("transform",T),f&&(c.style[qt]=T)},cb=function(e,t,i,r,n){var a=360,s=hi(n),o=parseFloat(n)*(s&&~n.indexOf("rad")?ua:1),l=o-r,u=r+l+"deg",h,d;return s&&(h=n.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Gm)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Gm)%a-~~(l/a)*a)),e._pt=d=new Hi(e._pt,t,i,r,l,qT),d.e=u,d.u="deg",e._props.push(i),d},s0=function(e,t){for(var i in t)e[i]=t[i];return e},hb=function(e,t,i){var r=s0({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=i.style,s,o,l,u,h,d,c,p;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[qt]=t,s=ho(i,1),Ln(i,qt),i.setAttribute("transform",l)):(l=getComputedStyle(i)[qt],a[qt]=t,s=ho(i,1),a[qt]=l);for(o in un)l=r[o],u=s[o],l!==u&&n.indexOf(o)<0&&(c=Ti(l),p=Ti(u),h=c!==p?Dn(i,o,l,p):parseFloat(l),d=parseFloat(u),e._pt=new Hi(e._pt,s,o,h,d-h,Wh),e._pt.u=p||0,e._props.push(o));s0(s,r)};ki("padding,margin,Width,Radius",function(e,t){var i="Top",r="Right",n="Bottom",a="Left",s=(t<3?[i,r,n,a]:[i+a,i+r,n+r,n+a]).map(function(o){return t<2?e+o:"border"+o+e});Xl[t>1?"border"+e:e]=function(o,l,u,h,d){var c,p;if(arguments.length<4)return c=s.map(function(m){return cn(o,m,u)}),p=c.join(" "),p.split(c[0]).length===5?c[0]:p;c=(h+"").split(" "),p={},s.forEach(function(m,x){return p[m]=c[x]=c[x]||c[(x-1)/2|0]}),o.init(l,p,d)}});var o0={name:"css",register:qh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,n){var a=this._props,s=e.style,o=i.vars.startAt,l,u,h,d,c,p,m,x,_,f,S,M,v,y,b,g,T;Vh||qh(),this.styles=this.styles||jm(e),g=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(u=t[m],!(ir[m]&&Dm(m,t,i,r,e,n)))){if(c=typeof u,p=Xl[m],c==="function"&&(u=u.call(i,r,e,n),c=typeof u),c==="string"&&~u.indexOf("random(")&&(u=ro(u)),p)p(this,e,m,u,i)&&(b=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Rn.lastIndex=0,Rn.test(l)||(x=Ti(l),_=Ti(u),_?x!==_&&(l=Dn(e,m,l,_)+_):x&&(u+=x)),this.add(s,"setProperty",l,u,r,n,0,0,m),a.push(m),g.push(m,0,s[m]);else if(c!=="undefined"){if(o&&m in o?(l=typeof o[m]=="function"?o[m].call(i,r,e,n):o[m],hi(l)&&~l.indexOf("random(")&&(l=ro(l)),Ti(l+"")||l==="auto"||(l+=er.units[m]||Ti(cn(e,m))||""),(l+"").charAt(1)==="="&&(l=cn(e,m))):l=cn(e,m),d=parseFloat(l),f=c==="string"&&u.charAt(1)==="="&&u.substr(0,2),f&&(u=u.substr(2)),h=parseFloat(u),m in Wr&&(m==="autoAlpha"&&(d===1&&cn(e,"visibility")==="hidden"&&h&&(d=0),g.push("visibility",0,s.visibility),In(this,s,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),m!=="scale"&&m!=="transform"&&(m=Wr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),S=m in un,S){if(this.styles.save(m),T=u,c==="string"&&u.substring(0,6)==="var(--"){if(u=sr(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=sr(e,"perspective"),R?e.style.perspective=R:Ln(e,"perspective")}h=parseFloat(u)}if(M||(v=e._gsap,v.renderTransform&&!t.parseTransform||ho(e,t.parseTransform),y=t.smoothOrigin!==!1&&v.smooth,M=this._pt=new Hi(this._pt,s,qt,0,1,v.renderTransform,v,0,-1),M.dep=1),m==="scale")this._pt=new Hi(this._pt,v,"scaleY",v.scaleY,(f?Za(v.scaleY,f+h):h)-v.scaleY||0,Wh),this._pt.u=0,a.push("scaleY",m),m+="X";else if(m==="transformOrigin"){g.push(Wi,0,s[Wi]),u=sb(u),v.svg?Yh(e,u,0,y,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&In(this,v,"zOrigin",v.zOrigin,_),In(this,s,m,ql(l),ql(u)));continue}else if(m==="svgOrigin"){Yh(e,u,1,y,0,this);continue}else if(m in i0){cb(this,v,m,d,f?Za(d,f+u):u);continue}else if(m==="smoothOrigin"){In(this,v,"smooth",v.smooth,u);continue}else if(m==="force3D"){v[m]=u;continue}else if(m==="transform"){hb(this,u,e);continue}}else m in s||(m=ss(m)||m);if(S||(h||h===0)&&(d||d===0)&&!XT.test(u)&&m in s)x=(l+"").substr((d+"").length),h||(h=0),_=Ti(u)||(m in er.units?er.units[m]:x),x!==_&&(d=Dn(e,m,l,_)),this._pt=new Hi(this._pt,S?v:s,m,d,(f?Za(d,f+h):h)-d,!S&&(_==="px"||m==="zIndex")&&t.autoRound!==!1?JT:Wh),this._pt.u=_||0,S&&T!==u?(this._pt.b=l,this._pt.e=T,this._pt.r=YT):x!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=jT);else if(m in s)ab.call(this,e,m,l,f?f+u:u);else if(m in e)this.add(e,m,l||e[m],f?f+u:u,r,n);else if(m!=="parseTransform"){xh(m,u);continue}S||(m in s?g.push(m,0,s[m]):typeof e[m]=="function"?g.push(m,2,e[m]()):g.push(m,1,l||e[m])),a.push(m)}}b&&zm(this)},render:function(e,t){if(t.tween._time||!Hh())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:cn,aliases:Wr,getSetter:function(e,t,i){var r=Wr[t];return r&&r.indexOf(",")<0&&(t=r),t in un&&t!==Wi&&(e._gsap.x||cn(e,"x"))?i&&Hm===i?t==="scale"?QT:$T:(Hm=i||{})&&(t==="scale"?eb:tb):e.style&&!fh(e.style[t])?KT:~t.indexOf("-")?ZT:Fh(e,t)},core:{_removeProperty:Ln,_getMatrix:jh}};Gi.utils.checkPrefix=ss,Gi.core.getStyleSaver=jm,(function(e,t,i,r){var n=ki(e+","+t+","+i,function(a){un[a]=1});ki(t,function(a){er.units[a]="deg",i0[a]=1}),Wr[n[13]]=e+","+t,ki(r,function(a){var s=a.split(":");Wr[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),ki("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){er.units[e]="px"}),Gi.registerPlugin(o0);var ht=Gi.registerPlugin(o0)||Gi,TE=ht.core.Tween;function l0(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function db(e,t,i){return t&&l0(e.prototype,t),i&&l0(e,i),e}var vi,jl,pb,Xi,Nn,Un,os,u0,da,ls,c0,hn,Ir,h0,d0=function(){return vi||typeof window<"u"&&(vi=window.gsap)&&vi.registerPlugin&&vi},p0=1,us=[],dt=[],Xr=[],fo=Date.now,Kh=function(e,t){return t},fb=function(){var e=ls.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,dt),r.push.apply(r,Xr),dt=i,Xr=r,Kh=function(n,a){return t[n](a)}},On=function(e,t){return~Xr.indexOf(e)&&Xr[Xr.indexOf(e)+1][t]},mo=function(e){return!!~c0.indexOf(e)},Ii=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:r!==!1,capture:!!n})},Di=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Yl="scrollLeft",Jl="scrollTop",Zh=function(){return hn&&hn.isPressed||dt.cache++},Kl=function(e,t){var i=function r(n){if(n||n===0){p0&&Xi.history.scrollRestoration!=="manual"&&(Xi.history.scrollRestoration="manual");var a=hn&&hn.isPressed;n=r.v=Math.round(n)||(hn&&hn.iOS?1:0),e(n),r.cacheID=dt.cache,a&&Kh("ss",n)}else(t||dt.cache!==r.cacheID||Kh("ref"))&&(r.cacheID=dt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Ni={s:Yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kl(function(e){return arguments.length?Xi.scrollTo(e,oi.sc()):Xi.pageXOffset||Nn[Yl]||Un[Yl]||os[Yl]||0})},oi={s:Jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ni,sc:Kl(function(e){return arguments.length?Xi.scrollTo(Ni.sc(),e):Xi.pageYOffset||Nn[Jl]||Un[Jl]||os[Jl]||0})},qi=function(e,t){return(t&&t._ctx&&t._ctx.selector||vi.utils.toArray)(e)[0]||(typeof e=="string"&&vi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mb=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Fn=function(e,t){var i=t.s,r=t.sc;mo(e)&&(e=Nn.scrollingElement||Un);var n=dt.indexOf(e),a=r===oi.sc?1:2;!~n&&(n=dt.push(e)-1),dt[n+a]||Ii(e,"scroll",Zh);var s=dt[n+a],o=s||(dt[n+a]=Kl(On(e,i),!0)||(mo(e)?r:Kl(function(l){return arguments.length?e[i]=l:e[i]})));return o.target=e,s||(o.smooth=vi.getProperty(e,"scrollBehavior")==="smooth"),o},$h=function(e,t,i){var r=e,n=e,a=fo(),s=a,o=t||50,l=Math.max(500,o*3),u=function(c,p){var m=fo();p||m-a>o?(n=r,r=c,s=a,a=m):i?r+=c:r=n+(c-n)/(m-s)*(a-s)},h=function(){n=r=i?0:r,s=a=0},d=function(c){var p=s,m=n,x=fo();return(c||c===0)&&c!==r&&u(c),a===s||x-s>l?0:(r+(i?m:-m))/((i?x:a)-p)*1e3};return{update:u,reset:h,getVelocity:d}},go=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},f0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},m0=function(){ls=vi.core.globals().ScrollTrigger,ls&&ls.core&&fb()},g0=function(e){return vi=e||d0(),!jl&&vi&&typeof document<"u"&&document.body&&(Xi=window,Nn=document,Un=Nn.documentElement,os=Nn.body,c0=[Xi,Nn,Un,os],pb=vi.utils.clamp,h0=vi.core.context||function(){},da="onpointerenter"in os?"pointer":"mouse",u0=$t.isTouch=Xi.matchMedia&&Xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ir=$t.eventTypes=("ontouchstart"in Un?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Un?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return p0=0},500),jl=1),ls||m0(),jl};Ni.op=oi,dt.cache=0;var $t=(function(){function e(i){this.init(i)}var t=e.prototype;return t.init=function(i){jl||g0(vi)||console.warn("Please gsap.registerPlugin(Observer)"),ls||m0();var r=i.tolerance,n=i.dragMinimum,a=i.type,s=i.target,o=i.lineHeight,l=i.debounce,u=i.preventDefault,h=i.onStop,d=i.onStopDelay,c=i.ignore,p=i.wheelSpeed,m=i.event,x=i.onDragStart,_=i.onDragEnd,f=i.onDrag,S=i.onPress,M=i.onRelease,v=i.onRight,y=i.onLeft,b=i.onUp,g=i.onDown,T=i.onChangeX,R=i.onChangeY,N=i.onChange,L=i.onToggleX,k=i.onToggleY,G=i.onHover,C=i.onHoverEnd,O=i.onMove,H=i.ignoreCheck,F=i.isNormalizer,de=i.onGestureStart,P=i.onGestureEnd,J=i.onWheel,ce=i.onEnable,Ie=i.onDisable,Z=i.onClick,ve=i.scrollSpeed,Ce=i.capture,De=i.allowClicks,ze=i.lockAxis,ye=i.onLockAxis;this.target=s=qi(s)||Un,this.vars=i,c&&(c=vi.utils.toArray(c)),r=r||1e-9,n=n||0,p=p||1,ve=ve||1,a=a||"wheel,touch,pointer",l=l!==!1,o||(o=parseFloat(Xi.getComputedStyle(os).lineHeight)||22);var Ge,Xe,ge,ke,le,Ae,Ee,V=this,Ne=0,We=0,we=i.passive||!u&&i.passive!==!1,qe=Fn(s,Ni),Qe=Fn(s,oi),tt=qe(),U=Qe(),Re=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ir[0]==="pointerdown",pe=mo(s),Se=s.ownerDocument||Nn,fe=[0,0,0],Pe=[0,0,0],Te=0,Me=function(){return Te=fo()},Le=function($,X){return(V.event=$)&&c&&mb($.target,c)||X&&Re&&$.pointerType!=="touch"||H&&H($,X)},A=function(){V._vx.reset(),V._vy.reset(),Xe.pause(),h&&h(V)},E=function(){var $=V.deltaX=f0(fe),X=V.deltaY=f0(Pe),q=Math.abs($)>=r,Q=Math.abs(X)>=r;N&&(q||Q)&&N(V,$,X,fe,Pe),q&&(v&&V.deltaX>0&&v(V),y&&V.deltaX<0&&y(V),T&&T(V),L&&V.deltaX<0!=Ne<0&&L(V),Ne=V.deltaX,fe[0]=fe[1]=fe[2]=0),Q&&(g&&V.deltaY>0&&g(V),b&&V.deltaY<0&&b(V),R&&R(V),k&&V.deltaY<0!=We<0&&k(V),We=V.deltaY,Pe[0]=Pe[1]=Pe[2]=0),(ke||ge)&&(O&&O(V),ge&&(x&&ge===1&&x(V),f&&f(V),ge=0),ke=!1),Ae&&!(Ae=!1)&&ye&&ye(V),le&&(J(V),le=!1),Ge=0},z=function($,X,q){fe[q]+=$,Pe[q]+=X,V._vx.update($),V._vy.update(X),l?Ge||(Ge=requestAnimationFrame(E)):E()},se=function($,X){ze&&!Ee&&(V.axis=Ee=Math.abs($)>Math.abs(X)?"x":"y",Ae=!0),Ee!=="y"&&(fe[2]+=$,V._vx.update($,!0)),Ee!=="x"&&(Pe[2]+=X,V._vy.update(X,!0)),l?Ge||(Ge=requestAnimationFrame(E)):E()},Y=function($){if(!Le($,1)){$=go($,u);var X=$.clientX,q=$.clientY,Q=X-V.x,ne=q-V.y,ue=V.isDragging;V.x=X,V.y=q,(ue||(Q||ne)&&(Math.abs(V.startX-X)>=n||Math.abs(V.startY-q)>=n))&&(ge||(ge=ue?2:1),ue||(V.isDragging=!0),se(Q,ne))}},te=V.onPress=function($){Le($,1)||$&&$.button||(V.axis=Ee=null,Xe.pause(),V.isPressed=!0,$=go($),Ne=We=0,V.startX=V.x=$.clientX,V.startY=V.y=$.clientY,V._vx.reset(),V._vy.reset(),Ii(F?s:Se,Ir[1],Y,we,!0),V.deltaX=V.deltaY=0,S&&S(V))},j=V.onRelease=function($){if(!Le($,1)){Di(F?s:Se,Ir[1],Y,!0);var X=!isNaN(V.y-V.startY),q=V.isDragging,Q=q&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),ne=go($);!Q&&X&&(V._vx.reset(),V._vy.reset(),u&&De&&vi.delayedCall(.08,function(){if(fo()-Te>300&&!$.defaultPrevented){if($.target.click)$.target.click();else if(Se.createEvent){var ue=Se.createEvent("MouseEvents");ue.initMouseEvent("click",!0,!0,Xi,1,ne.screenX,ne.screenY,ne.clientX,ne.clientY,!1,!1,!1,!1,0,null),$.target.dispatchEvent(ue)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&q&&!F&&Xe.restart(!0),ge&&E(),_&&q&&_(V),M&&M(V,Q)}},D=function($){return $.touches&&$.touches.length>1&&(V.isGesturing=!0)&&de($,V.isDragging)},ie=function(){return(V.isGesturing=!1)||P(V)},_e=function($){if(!Le($)){var X=qe(),q=Qe();z((X-tt)*ve,(q-U)*ve,1),tt=X,U=q,h&&Xe.restart(!0)}},I=function($){if(!Le($)){$=go($,u),J&&(le=!0);var X=($.deltaMode===1?o:$.deltaMode===2?Xi.innerHeight:1)*p;z($.deltaX*X,$.deltaY*X,0),h&&!F&&Xe.restart(!0)}},K=function($){if(!Le($)){var X=$.clientX,q=$.clientY,Q=X-V.x,ne=q-V.y;V.x=X,V.y=q,ke=!0,h&&Xe.restart(!0),(Q||ne)&&se(Q,ne)}},me=function($){V.event=$,G(V)},ae=function($){V.event=$,C(V)},xe=function($){return Le($)||go($,u)&&Z(V)};Xe=V._dc=vi.delayedCall(d||.25,A).pause(),V.deltaX=V.deltaY=0,V._vx=$h(0,50,!0),V._vy=$h(0,50,!0),V.scrollX=qe,V.scrollY=Qe,V.isDragging=V.isGesturing=V.isPressed=!1,h0(this),V.enable=function($){return V.isEnabled||(Ii(pe?Se:s,"scroll",Zh),a.indexOf("scroll")>=0&&Ii(pe?Se:s,"scroll",_e,we,Ce),a.indexOf("wheel")>=0&&Ii(s,"wheel",I,we,Ce),(a.indexOf("touch")>=0&&u0||a.indexOf("pointer")>=0)&&(Ii(s,Ir[0],te,we,Ce),Ii(Se,Ir[2],j),Ii(Se,Ir[3],j),De&&Ii(s,"click",Me,!0,!0),Z&&Ii(s,"click",xe),de&&Ii(Se,"gesturestart",D),P&&Ii(Se,"gestureend",ie),G&&Ii(s,da+"enter",me),C&&Ii(s,da+"leave",ae),O&&Ii(s,da+"move",K)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=ke=ge=!1,V._vx.reset(),V._vy.reset(),tt=qe(),U=Qe(),$&&$.type&&te($),ce&&ce(V)),V},V.disable=function(){V.isEnabled&&(us.filter(function($){return $!==V&&mo($.target)}).length||Di(pe?Se:s,"scroll",Zh),V.isPressed&&(V._vx.reset(),V._vy.reset(),Di(F?s:Se,Ir[1],Y,!0)),Di(pe?Se:s,"scroll",_e,Ce),Di(s,"wheel",I,Ce),Di(s,Ir[0],te,Ce),Di(Se,Ir[2],j),Di(Se,Ir[3],j),Di(s,"click",Me,!0),Di(s,"click",xe),Di(Se,"gesturestart",D),Di(Se,"gestureend",ie),Di(s,da+"enter",me),Di(s,da+"leave",ae),Di(s,da+"move",K),V.isEnabled=V.isPressed=V.isDragging=!1,Ie&&Ie(V))},V.kill=V.revert=function(){V.disable();var $=us.indexOf(V);$>=0&&us.splice($,1),hn===V&&(hn=0)},us.push(V),F&&mo(s)&&(hn=V),V.enable(m)},db(e,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),e})();$t.version="3.15.1",$t.create=function(e){return new $t(e)},$t.register=g0,$t.getAll=function(){return us.slice()},$t.getById=function(e){return us.filter(function(t){return t.vars.id===e})[0]},d0()&&vi.registerPlugin($t);var Ye,cs,pt,Ct,or,At,Qh,Zl,vo,_o,xo,$l,bi,Ql,ed,Ui,v0,_0,hs,x0,td,y0,Oi,id,M0,S0,zn,rd,nd,ds,ad,Bn,sd,od,eu=1,Ei=Date.now,ld=Ei(),xr=0,yo=0,T0=function(e,t,i){var r=lr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},b0=function(e,t){return t&&(!lr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gb=function e(){return yo&&requestAnimationFrame(e)},E0=function(){return Ql=1},w0=function(){return Ql=0},qr=function(e){return e},Mo=function(e){return Math.round(e*1e5)/1e5||0},A0=function(){return typeof window<"u"},R0=function(){return Ye||A0()&&(Ye=window.gsap)&&Ye.registerPlugin&&Ye},pa=function(e){return!!~Qh.indexOf(e)},P0=function(e){return(e==="Height"?ad:pt["inner"+e])||or["client"+e]||At["client"+e]},C0=function(e){return On(e,"getBoundingClientRect")||(pa(e)?function(){return pu.width=pt.innerWidth,pu.height=ad,pu}:function(){return dn(e)})},vb=function(e,t,i){var r=i.d,n=i.d2,a=i.a;return(a=On(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?P0(n):e["client"+n])||0}},_b=function(e,t){return!t||~Xr.indexOf(e)?C0(e):function(){return pu}},jr=function(e,t){var i=t.s,r=t.d2,n=t.d,a=t.a;return Math.max(0,(i="scroll"+r)&&(a=On(e,i))?a()-C0(e)()[n]:pa(e)?(or[i]||At[i])-P0(r):e[i]-e["offset"+r])},tu=function(e,t){for(var i=0;i<hs.length;i+=3)(!t||~t.indexOf(hs[i+1]))&&e(hs[i],hs[i+1],hs[i+2])},lr=function(e){return typeof e=="string"},wi=function(e){return typeof e=="function"},So=function(e){return typeof e=="number"},fa=function(e){return typeof e=="object"},To=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ps=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},fs=Math.abs,L0="left",I0="top",ud="right",cd="bottom",ma="width",ga="height",bo="Right",Eo="Left",wo="Top",Ao="Bottom",ri="padding",yr="margin",ms="Width",hd="Height",li="px",Mr=function(e){return pt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},xb=function(e){var t=Mr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},D0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},dn=function(e,t){var i=t&&Mr(e)[ed]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},iu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},N0=function(e){var t=[],i=e.labels,r=e.duration(),n;for(n in i)t.push(i[n]/r);return t},yb=function(e){return function(t){return Ye.utils.snap(N0(e),t)}},dd=function(e){var t=Ye.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,n){return r-n});return i?function(r,n,a){a===void 0&&(a=.001);var s;if(!n)return t(r);if(n>0){for(r-=a,s=0;s<i.length;s++)if(i[s]>=r)return i[s];return i[s-1]}else for(s=i.length,r+=a;s--;)if(i[s]<=r)return i[s];return i[0]}:function(r,n,a){a===void 0&&(a=.001);var s=t(r);return!n||Math.abs(s-r)<a||s-r<0==n<0?s:t(n<0?r-e:r+e)}},Mb=function(e){return function(t,i){return dd(N0(e))(t,i.direction)}},ru=function(e,t,i,r){return i.split(",").forEach(function(n){return e(t,n,r)})},di=function(e,t,i,r,n){return e.addEventListener(t,i,{passive:!r,capture:!!n})},pi=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},nu=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},U0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},au={toggleActions:"play",anticipatePin:0},su={top:0,left:0,center:.5,bottom:1,right:1},ou=function(e,t){if(lr(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in su?su[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},lu=function(e,t,i,r,n,a,s,o){var l=n.startColor,u=n.endColor,h=n.fontSize,d=n.indent,c=n.fontWeight,p=Ct.createElement("div"),m=pa(i)||On(i,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,_=m?At:i.tagName==="IFRAME"?i.contentDocument.body:i,f=e.indexOf("start")!==-1,S=f?l:u,M="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+c+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((x||o)&&m?"fixed;":"absolute;"),(x||o||!m)&&(M+=(r===oi?ud:cd)+":"+(a+parseFloat(d))+"px;"),s&&(M+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),p._isStart=f,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=M,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+r.op.d2],uu(p,0,r,f),p},uu=function(e,t,i,r){var n={display:"block"},a=i[r?"os2":"p2"],s=i[r?"p2":"os2"];e._isFlipped=r,n[i.a+"Percent"]=r?-100:0,n[i.a]=r?"1px":0,n["border"+a+ms]=1,n["border"+s+ms]=0,n[i.p]=t+"px",Ye.set(e,n)},ft=[],pd={},Ro,O0=function(){return Ei()-xr>34&&(Ro||(Ro=requestAnimationFrame(pn)))},gs=function(){(!Oi||!Oi.isPressed||Oi.startX>At.clientWidth)&&(dt.cache++,Oi?Ro||(Ro=requestAnimationFrame(pn)):pn(),xr||_a("scrollStart"),xr=Ei())},fd=function(){S0=pt.innerWidth,M0=pt.innerHeight},Po=function(e){dt.cache++,(e===!0||!bi&&!y0&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!id||S0!==pt.innerWidth||Math.abs(pt.innerHeight-M0)>pt.innerHeight*.25))&&Zl.restart(!0)},va={},Sb=[],F0=function e(){return pi(mt,"scrollEnd",e)||ya(!0)},_a=function(e){return va[e]&&va[e].map(function(t){return t()})||Sb},ur=[],z0=function(e){for(var t=0;t<ur.length;t+=5)(!e||ur[t+4]&&ur[t+4].query===e)&&(ur[t].style.cssText=ur[t+1],ur[t].getBBox&&ur[t].setAttribute("transform",ur[t+2]||""),ur[t+3].uncache=1)},B0=function(){dt.cache++,dt.forEach(function(e){return wi(e)&&(e.rec=e())})},md=function(e,t){var i;for(Ui=0;Ui<ft.length;Ui++)i=ft[Ui],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Bn=!0,t&&z0(t),t||_a("revert")},k0=function(e,t){dt.cache++,(t||!Fi)&&dt.forEach(function(i){return wi(i)&&i.cacheID++&&(i.rec=0)}),lr(e)&&(nd=e,pt.history.scrollRestoration!==e&&(pt.history.scrollRestoration=e))},Fi,xa=0,V0,Tb=function(){if(V0!==xa){var e=V0=xa;requestAnimationFrame(function(){return e===xa&&ya(!0)})}},H0=function(){At.appendChild(ds),ad=!Oi&&ds.offsetHeight||pt.innerHeight,At.removeChild(ds)},G0=function(e){return vo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ya=function(e,t){if(or=Ct.documentElement,At=Ct.body,Qh=[pt,Ct,or,At],xr&&!e&&!Bn){di(mt,"scrollEnd",F0);return}H0(),Fi=mt.isRefreshing=!0,Bn||B0();var i=_a("refreshInit");x0&&mt.sort(),t||md(),dt.forEach(function(r){wi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ft.slice(0).forEach(function(r){return r.refresh()}),Bn=!1,ft.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-a),r.refresh()}}),sd=1,G0(!0),ft.forEach(function(r){var n=jr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>n,s=r._startClamp&&r.start>=n;(a||s)&&r.setPositions(s?n-1:r.start,a?Math.max(s?n:r.start+1,n):r.end,!0)}),G0(!1),sd=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),dt.forEach(function(r){wi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),k0(nd,1),Zl.pause(),xa++,Fi=2,pn(2),ft.forEach(function(r){return wi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Fi=mt.isRefreshing=!1,_a("refresh")},gd=0,cu=1,Co,pn=function(e){if(e===2||!Fi&&!Bn){mt.isUpdating=!0,Co&&Co.update(0);var t=ft.length,i=Ei(),r=i-ld>=50,n=t&&ft[0].scroll();if(cu=gd>n?-1:1,Fi||(gd=n),r&&(xr&&!Ql&&i-xr>200&&(xr=0,_a("scrollEnd")),xo=ld,ld=i),cu<0){for(Ui=t;Ui-- >0;)ft[Ui]&&ft[Ui].update(0,r);cu=1}else for(Ui=0;Ui<t;Ui++)ft[Ui]&&ft[Ui].update(0,r);mt.isUpdating=!1}Ro=0},vd=[L0,I0,cd,ud,yr+Ao,yr+bo,yr+wo,yr+Eo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hu=vd.concat([ma,ga,"boxSizing","max"+ms,"max"+hd,"position",yr,ri,ri+wo,ri+bo,ri+Ao,ri+Eo]),bb=function(e,t,i){vs(i);var r=e._gsap;if(r.spacerIsNative)vs(r.spacerState);else if(e._gsap.swappedIn){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}e._gsap.swappedIn=!1},_d=function(e,t,i,r){if(!e._gsap.swappedIn){for(var n=vd.length,a=t.style,s=e.style,o;n--;)o=vd[n],a[o]=i[o];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),s[cd]=s[ud]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ma]=iu(e,Ni)+li,a[ga]=iu(e,oi)+li,a[ri]=s[yr]=s[I0]=s[L0]="0",vs(r),s[ma]=s["max"+ms]=i[ma],s[ga]=s["max"+hd]=i[ga],s[ri]=i[ri],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Eb=/([A-Z])/g,vs=function(e){if(e){var t=e.t.style,i=e.length,r=0,n,a;for((e.t._gsap||Ye.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],n=e[r],a?t[n]=a:t[n]&&t.removeProperty(n.replace(Eb,"-$1").toLowerCase())}},du=function(e){for(var t=hu.length,i=e.style,r=[],n=0;n<t;n++)r.push(hu[n],i[hu[n]]);return r.t=e,r},wb=function(e,t,i){for(var r=[],n=e.length,a=i?8:0,s;a<n;a+=2)s=e[a],r.push(s,s in t?t[s]:e[a+1]);return r.t=e.t,r},pu={left:0,top:0},W0=function(e,t,i,r,n,a,s,o,l,u,h,d,c,p){wi(e)&&(e=e(o)),lr(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ou("0"+e.substr(3),i):0));var m=c?c.time():0,x,_,f;if(c&&c.seek(0),isNaN(e)||(e=+e),So(e))c&&(e=Ye.utils.mapRange(c.scrollTrigger.start,c.scrollTrigger.end,0,d,e)),s&&uu(s,i,r,!0);else{wi(t)&&(t=t(o));var S=(e||"0").split(" "),M,v,y,b;f=qi(t,o)||At,M=dn(f)||{},(!M||!M.left&&!M.top)&&Mr(f).display==="none"&&(b=f.style.display,f.style.display="block",M=dn(f),b?f.style.display=b:f.style.removeProperty("display")),v=ou(S[0],M[r.d]),y=ou(S[1]||"0",i),e=M[r.p]-l[r.p]-u+v+n-y,s&&uu(s,y,r,i-y<20||s._isStart&&y>20),i-=i-y}if(p&&(o[p]=e||-.001,e<0&&(e=0)),a){var g=e+i,T=a._isStart;x="scroll"+r.d2,uu(a,g,r,T&&g>20||!T&&(h?Math.max(At[x],or[x]):a.parentNode[x])<=g+1),h&&(l=dn(s),h&&(a.style[r.op.p]=l[r.op.p]-r.op.m-a._offset+li))}return c&&f&&(x=dn(f),c.seek(d),_=dn(f),c._caScrollDist=x[r.p]-_[r.p],e=e/c._caScrollDist*d),c&&c.seek(m),c?e:Math.round(e)},Ab=/(webkit|moz|length|cssText|inset)/i,X0=function(e,t,i,r){if(e.parentNode!==t){var n=e.style,a,s;if(t===At){e._stOrig=n.cssText,s=Mr(e);for(a in s)!+a&&!Ab.test(a)&&s[a]&&typeof n[a]=="string"&&a!=="0"&&(n[a]=s[a]);n.top=i,n.left=r}else n.cssText=e._stOrig;Ye.core.getCache(e).uncache=1,t.appendChild(e)}},q0=function(e,t,i){var r=t,n=r;return function(a){var s=Math.round(e());return s!==r&&s!==n&&Math.abs(s-r)>3&&Math.abs(s-n)>3&&(a=s,i&&i()),n=r,r=Math.round(a),r}},fu=function(e,t,i){var r={};r[t.p]="+="+i,Ye.set(e,r)},j0=function(e,t){var i=Fn(e,t),r="_scroll"+t.p2,n=function a(s,o,l,u,h){var d=a.tween,c=o.onComplete,p={};l=l||i();var m=q0(i,l,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||s-l,d&&d.kill(),o[r]=s,o.inherit=!1,o.modifiers=p,p[r]=function(){return m(l+u*d.ratio+h*d.ratio*d.ratio)},o.onUpdate=function(){dt.cache++,a.tween&&pn()},o.onComplete=function(){a.tween=0,c&&c.call(d)},d=a.tween=Ye.to(e,o),d};return e[r]=i,i.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},di(e,"wheel",i.wheelHandler),mt.isTouch&&di(e,"touchmove",i.wheelHandler),n},mt=(function(){function e(i,r){cs||e.register(Ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),rd(this),this.init(i,r)}var t=e.prototype;return t.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!yo){this.update=this.refresh=this.kill=qr;return}i=D0(lr(i)||So(i)||i.nodeType?{trigger:i}:i,au);var n=i,a=n.onUpdate,s=n.toggleClass,o=n.id,l=n.onToggle,u=n.onRefresh,h=n.scrub,d=n.trigger,c=n.pin,p=n.pinSpacing,m=n.invalidateOnRefresh,x=n.anticipatePin,_=n.onScrubComplete,f=n.onSnapComplete,S=n.once,M=n.snap,v=n.pinReparent,y=n.pinSpacer,b=n.containerAnimation,g=n.fastScrollEnd,T=n.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ni:oi,N=!h&&h!==0,L=qi(i.scroller||pt),k=Ye.core.getCache(L),G=pa(L),C=("pinType"in i?i.pinType:On(L,"pinType")||G&&"fixed")==="fixed",O=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=N&&i.toggleActions.split(" "),F="markers"in i?i.markers:au.markers,de=G?0:parseFloat(Mr(L)["border"+R.p2+ms])||0,P=this,J=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ce=vb(L,G,R),Ie=_b(L,G),Z=0,ve=0,Ce=0,De=Fn(L,R),ze,ye,Ge,Xe,ge,ke,le,Ae,Ee,V,Ne,We,we,qe,Qe,tt,U,Re,pe,Se,fe,Pe,Te,Me,Le,A,E,z,se,Y,te,j,D,ie,_e,I,K,me,ae;if(P._startClamp=P._endClamp=!1,P._dir=R,x*=45,P.scroller=L,P.scroll=b?b.time.bind(b):De,Xe=De(),Bn&&De.rec==null&&(De.rec=Xe),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(x0=1,i.refreshPriority===-9999&&(Co=P)),k.tweenScroll=k.tweenScroll||{top:j0(L,oi),left:j0(L,Ni)},P.tweenTo=ze=k.tweenScroll[R.p],P.scrubDuration=function(Q){D=So(Q)&&Q,D?j?j.duration(Q):j=Ye.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:D,paused:!0,onComplete:function(){return _&&_(P)}}):(j&&j.progress(1).kill(),j=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(h),Y=0,o||(o=r.vars.id)),M&&((!fa(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in At.style&&Ye.set(G?[At,or]:L,{scrollBehavior:"auto"}),dt.forEach(function(Q){return wi(Q)&&Q.target===(G?Ct.scrollingElement||or:L)&&(Q.smooth=!1)}),Ge=wi(M.snapTo)?M.snapTo:M.snapTo==="labels"?yb(r):M.snapTo==="labelsDirectional"?Mb(r):M.directional!==!1?function(Q,ne){return dd(M.snapTo)(Q,Ei()-ve<500?0:ne.direction)}:Ye.utils.snap(M.snapTo),ie=M.duration||{min:.1,max:2},ie=fa(ie)?_o(ie.min,ie.max):_o(ie,ie),_e=Ye.delayedCall(M.delay||D/2||.1,function(){var Q=De(),ne=Ei()-ve<500,ue=ze.tween;if((ne||Math.abs(P.getVelocity())<10)&&!ue&&!Ql&&Z!==Q){var he=(Q-ke)/qe,Ue=r&&!N?r.totalProgress():he,be=ne?0:(Ue-te)/(Ei()-xo)*1e3||0,Ze=Ye.utils.clamp(-he,1-he,fs(be/2)*be/.185),ot=he+(M.inertia===!1?0:Ze),ut,nt,st=M,St=st.onStart,gt=st.onInterrupt,ui=st.onComplete;if(ut=Ge(ot,P),So(ut)||(ut=ot),nt=Math.max(0,Math.round(ke+ut*qe)),Q<=le&&Q>=ke&&nt!==Q){if(ue&&!ue._initted&&ue.data<=fs(nt-Q))return;M.inertia===!1&&(Ze=ut-he),ze(nt,{duration:ie(fs(Math.max(fs(ot-Ue),fs(ut-Ue))*.185/be/.05||0)),ease:M.ease||"power3",data:fs(nt-Q),onInterrupt:function(){return _e.restart(!0)&&gt&&ps(P,gt)},onComplete:function(){P.update(),Z=De(),r&&!N&&(j?j.resetTo("totalProgress",ut,r._tTime/r._tDur):r.progress(ut)),Y=te=r&&!N?r.totalProgress():P.progress,f&&f(P),ui&&ps(P,ui)}},Q,Ze*qe,nt-Q-Ze*qe),St&&ps(P,St,ze.tween)}}else P.isActive&&Z!==Q&&_e.restart(!0)}).pause()),o&&(pd[o]=P),d=P.trigger=qi(d||c!==!0&&c),ae=d&&d._gsap&&d._gsap.stRevert,ae&&(ae=ae(P)),c=c===!0?d:qi(c),lr(s)&&(s={targets:d,className:s}),c&&(p===!1||p===yr||(p=!p&&c.parentNode&&c.parentNode.style&&Mr(c.parentNode).display==="flex"?!1:ri),P.pin=c,ye=Ye.core.getCache(c),ye.spacer?Qe=ye.pinState:(y&&(y=qi(y),y&&!y.nodeType&&(y=y.current||y.nativeElement),ye.spacerIsNative=!!y,y&&(ye.spacerState=du(y))),ye.spacer=Re=y||Ct.createElement("div"),Re.classList.add("pin-spacer"),o&&Re.classList.add("pin-spacer-"+o),ye.pinState=Qe=du(c)),i.force3D!==!1&&Ye.set(c,{force3D:!0}),P.spacer=Re=ye.spacer,se=Mr(c),Me=se[p+R.os2],Se=Ye.getProperty(c),fe=Ye.quickSetter(c,R.a,li),_d(c,Re,se),U=du(c)),F){We=fa(F)?D0(F,U0):U0,V=lu("scroller-start",o,L,R,We,0),Ne=lu("scroller-end",o,L,R,We,0,V),pe=V["offset"+R.op.d2];var xe=qi(On(L,"content")||L);Ae=this.markerStart=lu("start",o,xe,R,We,pe,0,b),Ee=this.markerEnd=lu("end",o,xe,R,We,pe,0,b),b&&(me=Ye.quickSetter([Ae,Ee],R.a,li)),!C&&!(Xr.length&&On(L,"fixedMarkers")===!0)&&(xb(G?At:L),Ye.set([V,Ne],{force3D:!0}),A=Ye.quickSetter(V,R.a,li),z=Ye.quickSetter(Ne,R.a,li))}if(b){var $=b.vars.onUpdate,X=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){P.update(0,0,1),$&&$.apply(b,X||[])})}if(P.previous=function(){return ft[ft.indexOf(P)-1]},P.next=function(){return ft[ft.indexOf(P)+1]},P.revert=function(Q,ne){if(!ne)return P.kill(!0);var ue=Q!==!1||!P.enabled,he=bi;ue!==P.isReverted&&(ue&&(I=Math.max(De(),P.scroll.rec||0),Ce=P.progress,K=r&&r.progress()),Ae&&[Ae,Ee,V,Ne].forEach(function(Ue){return Ue.style.display=ue?"none":"block"}),ue&&(bi=P,P.update(ue)),c&&(!v||!P.isActive)&&(ue?bb(c,Re,Qe):_d(c,Re,Mr(c),Le)),ue||P.update(ue),bi=he,P.isReverted=ue)},P.refresh=function(Q,ne,ue,he){if(!((bi||!P.enabled)&&!ne)){if(c&&Q&&xr){di(e,"scrollEnd",F0);return}!Fi&&J&&J(P),bi=P,ze.tween&&!ue&&(ze.tween.kill(),ze.tween=0),j&&j.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ee){return ee.vars.immediateRender&&ee.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ue=ce(),be=Ie(),Ze=b?b.duration():jr(L,R),ot=qe<=.01||!qe,ut=0,nt=he||0,st=fa(ue)?ue.end:i.end,St=i.endTrigger||d,gt=fa(ue)?ue.start:i.start||(i.start===0||!d?0:c?"0 0":"0 100%"),ui=P.pinnedContainer=i.pinnedContainer&&qi(i.pinnedContainer,P),Ji=d&&Math.max(0,ft.indexOf(P))||0,_t=Ji,xt,Ht,Ki,Ma,ni,jt,hr,Ms,Io,fn,w,B,oe;for(F&&fa(ue)&&(B=Ye.getProperty(V,R.p),oe=Ye.getProperty(Ne,R.p));_t-- >0;)jt=ft[_t],jt.end||jt.refresh(0,1)||(bi=P),hr=jt.pin,hr&&(hr===d||hr===c||hr===ui)&&!jt.isReverted&&(fn||(fn=[]),fn.unshift(jt),jt.revert(!0,!0)),jt!==ft[_t]&&(Ji--,_t--);for(wi(gt)&&(gt=gt(P)),gt=T0(gt,"start",P),ke=W0(gt,d,Ue,R,De(),Ae,V,P,be,de,C,Ze,b,P._startClamp&&"_startClamp")||(c?-.001:0),wi(st)&&(st=st(P)),lr(st)&&!st.indexOf("+=")&&(~st.indexOf(" ")?st=(lr(gt)?gt.split(" ")[0]:"")+st:(ut=ou(st.substr(2),Ue),st=lr(gt)?gt:(b?Ye.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,ke):ke)+ut,St=d)),st=T0(st,"end",P),le=Math.max(ke,W0(st||(St?"100% 0":Ze),St,Ue,R,De()+ut,Ee,Ne,P,be,de,C,Ze,b,P._endClamp&&"_endClamp"))||-.001,ut=0,_t=Ji;_t--;)jt=ft[_t]||{},hr=jt.pin,hr&&jt.start-jt._pinPush<=ke&&!b&&jt.end>0&&(xt=jt.end-(P._startClamp?Math.max(0,jt.start):jt.start),(hr===d&&jt.start-jt._pinPush<ke||hr===ui)&&isNaN(gt)&&(ut+=xt*(1-jt.progress)),hr===c&&(nt+=xt));if(ke+=ut,le+=ut,P._startClamp&&(P._startClamp+=ut),P._endClamp&&!Fi&&(P._endClamp=le||-.001,le=Math.min(le,jr(L,R))),qe=le-ke||(ke-=.01)&&.001,ot&&(Ce=Ye.utils.clamp(0,1,Ye.utils.normalize(ke,le,I))),P._pinPush=nt,Ae&&ut&&(xt={},xt[R.a]="+="+ut,ui&&(xt[R.p]="-="+De()),Ye.set([Ae,Ee],xt)),c&&!(sd&&P.end>=jr(L,R)))xt=Mr(c),Ma=R===oi,Ki=De(),Pe=parseFloat(Se(R.a))+nt,!Ze&&le>1&&(w=(G?Ct.scrollingElement||or:L).style,w={style:w,value:w["overflow"+R.a.toUpperCase()]},G&&Mr(At)["overflow"+R.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+R.a.toUpperCase()]="scroll")),_d(c,Re,xt),U=du(c),Ht=dn(c,!0),Ms=C&&Fn(L,Ma?Ni:oi)(),p?(Le=[p+R.os2,qe+nt+li],Le.t=Re,_t=p===ri?iu(c,R)+qe+nt:0,_t&&(Le.push(R.d,_t+li),Re.style.flexBasis!=="auto"&&(Re.style.flexBasis=_t+li)),vs(Le),ui&&ft.forEach(function(ee){ee.pin===ui&&ee.vars.pinSpacing!==!1&&(ee._subPinOffset=!0)}),C&&De(I)):(_t=iu(c,R),_t&&Re.style.flexBasis!=="auto"&&(Re.style.flexBasis=_t+li)),C&&(ni={top:Ht.top+(Ma?Ki-ke:Ms)+li,left:Ht.left+(Ma?Ms:Ki-ke)+li,boxSizing:"border-box",position:"fixed"},ni[ma]=ni["max"+ms]=Math.ceil(Ht.width)+li,ni[ga]=ni["max"+hd]=Math.ceil(Ht.height)+li,ni[yr]=ni[yr+wo]=ni[yr+bo]=ni[yr+Ao]=ni[yr+Eo]="0",ni[ri]=xt[ri],ni[ri+wo]=xt[ri+wo],ni[ri+bo]=xt[ri+bo],ni[ri+Ao]=xt[ri+Ao],ni[ri+Eo]=xt[ri+Eo],tt=wb(Qe,ni,v),Fi&&De(0)),r?(Io=r._initted,td(1),r.render(r.duration(),!0,!0),Te=Se(R.a)-Pe+qe+nt,E=Math.abs(qe-Te)>1,C&&E&&tt.splice(tt.length-2,2),r.render(0,!0,!0),Io||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),td(0)):Te=qe,w&&(w.value?w.style["overflow"+R.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+R.a));else if(d&&De()&&!b)for(Ht=d.parentNode;Ht&&Ht!==At;)Ht._pinOffset&&(ke-=Ht._pinOffset,le-=Ht._pinOffset),Ht=Ht.parentNode;fn&&fn.forEach(function(ee){return ee.revert(!1,!0)}),P.start=ke,P.end=le,Xe=ge=Fi?I:De(),!b&&!Fi&&!Bn&&(Xe<I&&De(I),P.scroll.rec=0),P.revert(!1,!0),ve=Ei(),_e&&(Z=-1,_e.restart(!0)),bi=0,r&&N&&(r._initted||K)&&r.progress()!==K&&r.progress(K||0,!0).render(r.time(),!0,!0),(ot||Ce!==P.progress||b||m||r&&!r._initted)&&(r&&!N&&(r._initted||Ce||r.vars.immediateRender!==!1)&&r.totalProgress(b&&ke<-.001&&!Ce?Ye.utils.normalize(ke,le,0):Ce,!0),P.progress=ot||(Xe-ke)/qe===Ce?0:Ce),c&&p&&(Re._pinOffset=Math.round(P.progress*Te)),j&&j.invalidate(),isNaN(B)||(B-=Ye.getProperty(V,R.p),oe-=Ye.getProperty(Ne,R.p),fu(V,R,B),fu(Ae,R,B-(he||0)),fu(Ne,R,oe),fu(Ee,R,oe-(he||0))),ot&&!Fi&&P.update(),u&&!Fi&&!we&&(we=!0,u(P),we=!1)}},P.getVelocity=function(){return(De()-ge)/(Ei()-xo)*1e3||0},P.endAnimation=function(){To(P.callbackAnimation),r&&(j?j.progress(1):r.paused()?N||To(r,P.direction<0,1):To(r,r.reversed()))},P.labelToScroll=function(Q){return r&&r.labels&&(ke||P.refresh()||ke)+r.labels[Q]/r.duration()*qe||0},P.getTrailing=function(Q){var ne=ft.indexOf(P),ue=P.direction>0?ft.slice(0,ne).reverse():ft.slice(ne+1);return(lr(Q)?ue.filter(function(he){return he.vars.preventOverlaps===Q}):ue).filter(function(he){return P.direction>0?he.end<=ke:he.start>=le})},P.update=function(Q,ne,ue){if(!(b&&!ue&&!Q)){var he=Fi===!0?I:P.scroll(),Ue=Q?0:(he-ke)/qe,be=Ue<0?0:Ue>1?1:Ue||0,Ze=P.progress,ot,ut,nt,st,St,gt,ui,Ji;if(ne&&(ge=Xe,Xe=b?De():he,M&&(te=Y,Y=r&&!N?r.totalProgress():be)),x&&c&&!bi&&!eu&&xr&&(!be&&ke<he+(he-ge)/(Ei()-xo)*x?be=1e-4:be===1&&le>he+(he-ge)/(Ei()-xo)*x&&(be=.9999)),be!==Ze&&P.enabled){if(ot=P.isActive=!!be&&be<1,ut=!!Ze&&Ze<1,gt=ot!==ut,St=gt||!!be!=!!Ze,P.direction=be>Ze?1:-1,P.progress=be,St&&!bi&&(nt=be&&!Ze?0:be===1?1:Ze===1?2:3,N&&(st=!gt&&H[nt+1]!=="none"&&H[nt+1]||H[nt],Ji=r&&(st==="complete"||st==="reset"||st in r))),T&&(gt||Ji)&&(Ji||h||!r)&&(wi(T)?T(P):P.getTrailing(T).forEach(function(Ki){return Ki.endAnimation()})),N||(j&&!bi&&!eu?(j._dp._time-j._start!==j._time&&j.render(j._dp._time-j._start),j.resetTo?j.resetTo("totalProgress",be,r._tTime/r._tDur):(j.vars.totalProgress=be,j.invalidate().restart())):r&&r.totalProgress(be,!!(bi&&(ve||Q)))),c){if(Q&&p&&(Re.style[p+R.os2]=Me),!C)fe(Mo(Pe+Te*be));else if(St){if(ui=!Q&&be>Ze&&le+1>he&&he+1>=jr(L,R),v)if(!Q&&(ot||ui)){var _t=dn(c,!0),xt=he-ke;X0(c,At,_t.top+(R===oi?xt:0)+li,_t.left+(R===oi?0:xt)+li)}else X0(c,Re);vs(ot||ui?tt:U),E&&be<1&&ot||fe(Pe+(be===1&&!ui?Te:0))}}M&&!ze.tween&&!bi&&!eu&&_e.restart(!0),s&&(gt||S&&be&&(be<1||!od))&&vo(s.targets).forEach(function(Ki){return Ki.classList[ot||S?"add":"remove"](s.className)}),a&&!N&&!Q&&a(P),St&&!bi?(N&&(Ji&&(st==="complete"?r.pause().totalProgress(1):st==="reset"?r.restart(!0).pause():st==="restart"?r.restart(!0):r[st]()),a&&a(P)),(gt||!od)&&(l&&gt&&ps(P,l),O[nt]&&ps(P,O[nt]),S&&(be===1?P.kill(!1,1):O[nt]=0),gt||(nt=be===1?1:3,O[nt]&&ps(P,O[nt]))),g&&!ot&&Math.abs(P.getVelocity())>(So(g)?g:2500)&&(To(P.callbackAnimation),j?j.progress(1):To(r,st==="reverse"?1:!be,1))):N&&a&&!bi&&a(P)}if(z){var Ht=b?he/b.duration()*(b._caScrollDist||0):he;A(Ht+(V._isFlipped?1:0)),z(Ht)}me&&me(-he/b.duration()*(b._caScrollDist||0))}},P.enable=function(Q,ne){P.enabled||(P.enabled=!0,di(L,"resize",Po),G||di(L,"scroll",gs),J&&di(e,"refreshInit",J),Q!==!1&&(P.progress=Ce=0,Xe=ge=Z=De()),ne!==!1&&P.refresh())},P.getTween=function(Q){return Q&&ze?ze.tween:j},P.setPositions=function(Q,ne,ue,he){if(b){var Ue=b.scrollTrigger,be=b.duration(),Ze=Ue.end-Ue.start;Q=Ue.start+Ze*Q/be,ne=Ue.start+Ze*ne/be}P.refresh(!1,!1,{start:b0(Q,ue&&!!P._startClamp),end:b0(ne,ue&&!!P._endClamp)},he),P.update()},P.adjustPinSpacing=function(Q){if(Le&&Q){var ne=Le.indexOf(R.d)+1;Le[ne]=parseFloat(Le[ne])+Q+li,Le[1]=parseFloat(Le[1])+Q+li,vs(Le)}},P.disable=function(Q,ne){if(Q!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,ne||j&&j.pause(),I=0,ye&&(ye.uncache=1),J&&pi(e,"refreshInit",J),_e&&(_e.pause(),ze.tween&&ze.tween.kill()&&(ze.tween=0)),!G)){for(var ue=ft.length;ue--;)if(ft[ue].scroller===L&&ft[ue]!==P)return;pi(L,"resize",Po),G||pi(L,"scroll",gs)}},P.kill=function(Q,ne){P.disable(Q,ne),j&&!ne&&j.kill(),o&&delete pd[o];var ue=ft.indexOf(P);ue>=0&&ft.splice(ue,1),ue===Ui&&cu>0&&Ui--,ue=0,ft.forEach(function(he){return he.scroller===P.scroller&&(ue=1)}),ue||Fi||Bn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,Q&&r.revert({kill:!1}),ne||r.kill()),Ae&&[Ae,Ee,V,Ne].forEach(function(he){return he.parentNode&&he.parentNode.removeChild(he)}),Co===P&&(Co=0),c&&(ye&&(ye.uncache=1),ue=0,ft.forEach(function(he){return he.pin===c&&ue++}),ue||(ye.spacer=0)),i.onKill&&i.onKill(P)},ft.push(P),P.enable(!1,!1),ae&&ae(P),r&&r.add&&!qe){var q=P.update;P.update=function(){P.update=q,dt.cache++,ke||le||P.refresh()},Ye.delayedCall(.01,P.update),qe=.01,ke=le=0}else P.refresh();c&&Tb()},e.register=function(i){return cs||(Ye=i||R0(),A0()&&window.document&&e.enable(),cs=yo),cs},e.defaults=function(i){if(i)for(var r in i)au[r]=i[r];return au},e.disable=function(i,r){yo=0,ft.forEach(function(a){return a[r?"kill":"disable"](i)}),pi(pt,"wheel",gs),pi(Ct,"scroll",gs),clearInterval($l),pi(Ct,"touchcancel",qr),pi(At,"touchstart",qr),ru(pi,Ct,"pointerdown,touchstart,mousedown",E0),ru(pi,Ct,"pointerup,touchend,mouseup",w0),Zl.kill(),tu(pi);for(var n=0;n<dt.length;n+=3)nu(pi,dt[n],dt[n+1]),nu(pi,dt[n],dt[n+2])},e.enable=function(){if(pt=window,Ct=document,or=Ct.documentElement,At=Ct.body,Ye){if(vo=Ye.utils.toArray,_o=Ye.utils.clamp,rd=Ye.core.context||qr,td=Ye.core.suppressOverwrites||qr,nd=pt.history.scrollRestoration||"auto",gd=pt.pageYOffset||0,Ye.core.globals("ScrollTrigger",e),At){yo=1,ds=document.createElement("div"),ds.style.height="100vh",ds.style.position="absolute",H0(),gb(),$t.register(Ye),e.isTouch=$t.isTouch,zn=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),id=$t.isTouch===1,di(pt,"wheel",gs),Qh=[pt,Ct,or,At],Ye.matchMedia?(e.matchMedia=function(u){var h=Ye.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},Ye.addEventListener("matchMediaInit",function(){B0(),md()}),Ye.addEventListener("matchMediaRevert",function(){return z0()}),Ye.addEventListener("matchMedia",function(){ya(0,1),_a("matchMedia")}),Ye.matchMedia().add("(orientation: portrait)",function(){return fd(),fd})):console.warn("Requires GSAP 3.11.0 or later"),fd(),di(Ct,"scroll",gs);var i=At.hasAttribute("style"),r=At.style,n=r.borderTopStyle,a=Ye.core.Animation.prototype,s,o;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",s=dn(At),oi.m=Math.round(s.top+oi.sc())||0,Ni.m=Math.round(s.left+Ni.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),i||(At.setAttribute("style",""),At.removeAttribute("style")),$l=setInterval(O0,250),Ye.delayedCall(.5,function(){return eu=0}),di(Ct,"touchcancel",qr),di(At,"touchstart",qr),ru(di,Ct,"pointerdown,touchstart,mousedown",E0),ru(di,Ct,"pointerup,touchend,mouseup",w0),ed=Ye.utils.checkPrefix("transform"),hu.push(ed),cs=Ei(),Zl=Ye.delayedCall(.2,ya).pause(),hs=[Ct,"visibilitychange",function(){var u=pt.innerWidth,h=pt.innerHeight;Ct.hidden?(v0=u,_0=h):(v0!==u||_0!==h)&&Po()},Ct,"DOMContentLoaded",ya,pt,"load",ya,pt,"resize",Po],tu(di),ft.forEach(function(u){return u.enable(0,1)}),o=0;o<dt.length;o+=3)nu(pi,dt[o],dt[o+1]),nu(pi,dt[o],dt[o+2])}else if(Ct){var l=function u(){e.enable(),Ct.removeEventListener("DOMContentLoaded",u)};Ct.addEventListener("DOMContentLoaded",l)}}},e.config=function(i){"limitCallbacks"in i&&(od=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval($l)||($l=r)&&setInterval(O0,r),"ignoreMobileResize"in i&&(id=e.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(tu(pi)||tu(di,i.autoRefreshEvents||"none"),y0=(i.autoRefreshEvents+"").indexOf("resize")===-1)},e.scrollerProxy=function(i,r){var n=qi(i),a=dt.indexOf(n),s=pa(n);~a&&dt.splice(a,s?6:2),r&&(s?Xr.unshift(pt,r,At,r,or,r):Xr.unshift(n,r))},e.clearMatchMedia=function(i){ft.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},e.isInViewport=function(i,r,n){var a=(lr(i)?qi(i):i).getBoundingClientRect(),s=a[n?ma:ga]*r||0;return n?a.right-s>0&&a.left+s<pt.innerWidth:a.bottom-s>0&&a.top+s<pt.innerHeight},e.positionInViewport=function(i,r,n){lr(i)&&(i=qi(i));var a=i.getBoundingClientRect(),s=a[n?ma:ga],o=r==null?s/2:r in su?su[r]*s:~r.indexOf("%")?parseFloat(r)*s/100:parseFloat(r)||0;return n?(a.left+o)/pt.innerWidth:(a.top+o)/pt.innerHeight},e.killAll=function(i){if(ft.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),i!==!0){var r=va.killAll||[];va={},r.forEach(function(n){return n()})}},e})();mt.version="3.15.1",mt.saveStyles=function(e){return e?vo(e).forEach(function(t){if(t&&t.style){var i=ur.indexOf(t);i>=0&&ur.splice(i,5),ur.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ye.core.getCache(t),rd())}}):ur},mt.revert=function(e,t){return md(!e,t)},mt.create=function(e,t){return new mt(e,t)},mt.refresh=function(e){return e?Po(!0):(cs||mt.register())&&ya(!0)},mt.update=function(e){return++dt.cache&&pn(e===!0?2:0)},mt.clearScrollMemory=k0,mt.maxScroll=function(e,t){return jr(e,t?Ni:oi)},mt.getScrollFunc=function(e,t){return Fn(qi(e),t?Ni:oi)},mt.getById=function(e){return pd[e]},mt.getAll=function(){return ft.filter(function(e){return e.vars.id!=="ScrollSmoother"})},mt.isScrolling=function(){return!!xr},mt.snapDirectional=dd,mt.addEventListener=function(e,t){var i=va[e]||(va[e]=[]);~i.indexOf(t)||i.push(t)},mt.removeEventListener=function(e,t){var i=va[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},mt.batch=function(e,t){var i=[],r={},n=t.interval||.016,a=t.batchMax||1e9,s=function(l,u){var h=[],d=[],c=Ye.delayedCall(n,function(){u(h,d),h=[],d=[]}).pause();return function(p){h.length||c.restart(!0),h.push(p.trigger),d.push(p),a<=h.length&&c.progress(1)}},o;for(o in t)r[o]=o.substr(0,2)==="on"&&wi(t[o])&&o!=="onRefreshInit"?s(o,t[o]):t[o];return wi(a)&&(a=a(),di(mt,"refresh",function(){return a=t.batchMax()})),vo(e).forEach(function(l){var u={};for(o in r)u[o]=r[o];u.trigger=l,i.push(mt.create(u))}),i};var Y0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},xd=function e(t,i){i===!0?t.style.removeProperty("touch-action"):t.style.touchAction=i===!0?"auto":i?"pan-"+i+($t.isTouch?" pinch-zoom":""):"none",t===or&&e(At,i)},mu={auto:1,scroll:1},Rb=function(e){var t=e.event,i=e.target,r=e.axis,n=(t.changedTouches?t.changedTouches[0]:t).target,a=n._gsap||Ye.core.getCache(n),s=Ei(),o;if(!a._isScrollT||s-a._isScrollT>2e3){for(;n&&n!==At&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(mu[(o=Mr(n)).overflowY]||mu[o.overflowX]));)n=n.parentNode;a._isScroll=n&&n!==i&&!pa(n)&&(mu[(o=Mr(n)).overflowY]||mu[o.overflowX]),a._isScrollT=s}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},J0=function(e,t,i,r){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Rb,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&di(Ct,$t.eventTypes[0],Z0,!1,!0)},onDisable:function(){return pi(Ct,$t.eventTypes[0],Z0,!0)}})},Pb=/(input|label|select|textarea)/i,K0,Z0=function(e){var t=Pb.test(e.target.tagName);(t||K0)&&(e._gsapAllow=!0,K0=t)},Cb=function(e){fa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,n=t.allowNestedScroll,a=t.onRelease,s,o,l=qi(e.target)||or,u=Ye.core.globals().ScrollSmoother,h=u&&u.get(),d=zn&&(e.content&&qi(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),c=Fn(l,oi),p=Fn(l,Ni),m=1,x=($t.isTouch&&pt.visualViewport?pt.visualViewport.scale*pt.visualViewport.width:pt.outerWidth)/pt.innerWidth,_=0,f=wi(r)?function(){return r(s)}:function(){return r||2.8},S,M,v=J0(l,e.type,!0,n),y=function(){return M=!1},b=qr,g=qr,T=function(){o=jr(l,oi),g=_o(zn?1:0,o),i&&(b=_o(0,jr(l,Ni))),S=xa},R=function(){d._gsap.y=Mo(parseFloat(d._gsap.y)+c.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",c.offset=c.cacheID=0},N=function(){if(M){requestAnimationFrame(y);var H=Mo(s.deltaY/2),F=g(c.v-H);if(d&&F!==c.v+c.offset){c.offset=F-c.v;var de=Mo((parseFloat(d&&d._gsap.y)||0)-c.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+de+", 0, 1)",d._gsap.y=de+"px",c.cacheID=dt.cache,pn()}return!0}c.offset&&R(),M=!0},L,k,G,C,O=function(){T(),L.isActive()&&L.vars.scrollY>o&&(c()>o?L.progress(1)&&c(o):L.resetTo("scrollY",o))};return d&&Ye.set(d,{y:"+=0"}),e.ignoreCheck=function(H){return zn&&H.type==="touchmove"&&N(H)||m>1.05&&H.type!=="touchstart"||s.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){M=!1;var H=m;m=Mo((pt.visualViewport&&pt.visualViewport.scale||1)/x),L.pause(),H!==m&&xd(l,m>1.01?!0:i?!1:"x"),k=p(),G=c(),T(),S=xa},e.onRelease=e.onGestureStart=function(H,F){if(c.offset&&R(),!F)C.restart(!0);else{dt.cache++;var de=f(),P,J;i&&(P=p(),J=P+de*.05*-H.velocityX/.227,de*=Y0(p,P,J,jr(l,Ni)),L.vars.scrollX=b(J)),P=c(),J=P+de*.05*-H.velocityY/.227,de*=Y0(c,P,J,jr(l,oi)),L.vars.scrollY=g(J),L.invalidate().duration(de).play(.01),(zn&&L.vars.scrollY>=o||P>=o-1)&&Ye.to({},{onUpdate:O,duration:de})}a&&a(H)},e.onWheel=function(){L._ts&&L.pause(),Ei()-_>1e3&&(S=0,_=Ei())},e.onChange=function(H,F,de,P,J){if(xa!==S&&T(),F&&i&&p(b(P[2]===F?k+(H.startX-H.x):p()+F-P[1])),de){c.offset&&R();var ce=J[2]===de,Ie=ce?G+H.startY-H.y:c()+de-J[1],Z=g(Ie);ce&&Ie!==Z&&(G+=Z-Ie),c(Z)}(de||F)&&pn()},e.onEnable=function(){xd(l,i?!1:"x"),mt.addEventListener("refresh",O),di(pt,"resize",O),c.smooth&&(c.target.style.scrollBehavior="auto",c.smooth=p.smooth=!1),v.enable()},e.onDisable=function(){xd(l,!0),pi(pt,"resize",O),mt.removeEventListener("refresh",O),v.kill()},e.lockAxis=e.lockAxis!==!1,s=new $t(e),s.iOS=zn,zn&&!c()&&c(1),zn&&Ye.ticker.add(qr),C=s._dc,L=Ye.to(s,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:q0(c,c(),function(){return L.pause()})},onUpdate:pn,onComplete:C.vars.onComplete}),s};mt.sort=function(e){if(wi(e))return ft.sort(e);var t=pt.pageYOffset||0;return mt.getAll().forEach(function(i){return i._sortY=i.trigger?t+i.trigger.getBoundingClientRect().top:i.start+pt.innerHeight}),ft.sort(e||function(i,r){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((r.vars.containerAnimation?1e6:r._sortY)+(r.vars.refreshPriority||0)*-1e6)})},mt.observe=function(e){return new $t(e)},mt.normalizeScroll=function(e){if(typeof e>"u")return Oi;if(e===!0&&Oi)return Oi.enable();if(e===!1){Oi&&Oi.kill(),Oi=e;return}var t=e instanceof $t?e:Cb(e);return Oi&&Oi.target===t.target&&Oi.kill(),pa(t.target)&&(Oi=t),t},mt.core={_getVelocityProp:$h,_inputObserver:J0,_scrollers:dt,_proxies:Xr,bridge:{ss:function(){xr||_a("scrollStart"),xr=Ei()},ref:function(){return bi}}},R0()&&Ye.registerPlugin(mt);function Lb(e,t){let i=e.createBuffer(1,Math.ceil(e.sampleRate*t),e.sampleRate),r=i.getChannelData(0);for(let n=0;n<r.length;n++)r[n]=Math.random()*2-1;return i}function Ib(e,t=2048){let i=new Float32Array(t+1),r=Math.tanh(e);for(let n=0;n<=t;n++)i[n]=Math.tanh(e*(2*n/t-1))/r;return i}function Db(e,t,i){let r=Math.ceil(e.sampleRate*t),n=e.createBuffer(2,r,e.sampleRate);for(let a=0;a<2;a++){let s=n.getChannelData(a);for(let o=0;o<r;o++)s[o]=(Math.random()*2-1)*Math.pow(1-o/r,i)}return n}function Nb(e,t,i=3.4){let r=e.currentTime+.05,n=G=>r+G*i,a=1e-4,s=e.createDynamicsCompressor();s.threshold.value=-22,s.knee.value=8,s.ratio.value=3.5,s.attack.value=.005,s.release.value=.3;let o=e.createDynamicsCompressor();o.threshold.value=-3,o.knee.value=0,o.ratio.value=20,o.attack.value=.001,o.release.value=.1;let l=e.createGain();l.gain.value=1;let u=e.createWaveShaper();u.curve=Ib(1.6),u.oversample="2x";let h=e.createGain();h.gain.value=.96,s.connect(l),l.connect(o),o.connect(u),u.connect(h),h.connect(t);let d=e.createConvolver();d.buffer=Db(e,3.2,2.3);let c=e.createGain();c.gain.value=.45,d.connect(c),c.connect(s);let p=(G,C=1,O=.3)=>{if(C){let H=e.createGain();H.gain.value=C,G.connect(H),H.connect(s)}if(O){let H=e.createGain();H.gain.value=O,G.connect(H),H.connect(d)}},m=Lb(e,2.5),x=(G,C,O=0)=>{let H=e.createOscillator();return H.type=G,H.frequency.value=C,H.detune.value=O,H},_=[],f=e.createGain();f.gain.value=1,p(f,1,.35);let S=e.createGain();S.gain.setValueAtTime(.04,r),S.gain.exponentialRampToValueAtTime(.12,n(.92));let M=e.createBiquadFilter();M.type="lowpass",M.Q.value=.8,M.frequency.setValueAtTime(360,r),M.frequency.exponentialRampToValueAtTime(2400,n(1));for(let[G,C]of[[73.42,-9],[73.42,9],[110,4]]){let O=x("sawtooth",G,C),H=e.createGain();H.gain.value=.33,O.connect(H),H.connect(M),O.start(r),_.push(O)}let v=x("sine",36.71),y=e.createGain();y.gain.value=.9,v.connect(y),y.connect(S),v.start(r),_.push(v),M.connect(S),S.connect(f);let b=e.createBufferSource();b.buffer=m,b.loop=!0;let g=e.createBiquadFilter();g.type="bandpass",g.Q.value=.9,g.frequency.setValueAtTime(320,r),g.frequency.exponentialRampToValueAtTime(7200,n(1));let T=e.createGain();T.gain.setValueAtTime(.02,r),T.gain.exponentialRampToValueAtTime(.1,n(1)),b.connect(g),g.connect(T),T.connect(f),b.start(r),_.push(b);let R=x("triangle",146.83);R.frequency.setValueAtTime(146.83,r),R.frequency.exponentialRampToValueAtTime(587.33,n(1));let N=e.createGain();N.gain.setValueAtTime(.004,r),N.gain.exponentialRampToValueAtTime(.06,n(.95)),R.connect(N),N.connect(f),R.start(r),_.push(R);let L=[.02,.26,.46,.61,.72,.8,.86,.905,.94,.965,.985];L.forEach((G,C)=>{let O=n(G),H=.22+.33*(C/(L.length-1)),F=x("sine",150);F.frequency.setValueAtTime(150,O),F.frequency.exponentialRampToValueAtTime(44,O+.22);let de=e.createGain();de.gain.setValueAtTime(a,O),de.gain.exponentialRampToValueAtTime(H,O+.006),de.gain.exponentialRampToValueAtTime(a,O+.45),F.connect(de),de.connect(f),F.start(O),F.stop(O+.5);let P=x("triangle",260);P.frequency.setValueAtTime(260,O),P.frequency.exponentialRampToValueAtTime(110,O+.09);let J=e.createGain();J.gain.setValueAtTime(a,O),J.gain.exponentialRampToValueAtTime(H*.55,O+.004),J.gain.exponentialRampToValueAtTime(a,O+.16),P.connect(J),J.connect(f),P.start(O),P.stop(O+.2);let ce=e.createBufferSource();ce.buffer=m;let Ie=e.createBiquadFilter();Ie.type="bandpass",Ie.frequency.value=2400,Ie.Q.value=1.4;let Z=e.createGain();Z.gain.setValueAtTime(a,O),Z.gain.exponentialRampToValueAtTime(H*.5,O+.002),Z.gain.exponentialRampToValueAtTime(a,O+.035),ce.connect(Ie),Ie.connect(Z),Z.connect(f),ce.start(O,C*.137%2),ce.stop(O+.05)});let k=!1;return{hit(G){if(k)return;k=!0;let C=Math.max(G??e.currentTime+.06,e.currentTime+.03);f.gain.setValueAtTime(1,Math.max(C-.06,e.currentTime)),f.gain.exponentialRampToValueAtTime(a,C-.004);for(let De of _)De.stop(C+.1);let O=x("sine",118);O.frequency.setValueAtTime(118,C),O.frequency.exponentialRampToValueAtTime(34,C+.7);let H=e.createGain();H.gain.setValueAtTime(a,C),H.gain.exponentialRampToValueAtTime(1.3,C+.008),H.gain.exponentialRampToValueAtTime(a,C+2.8),O.connect(H),p(H,1,.18),O.start(C),O.stop(C+3);let F=x("triangle",240);F.frequency.setValueAtTime(240,C),F.frequency.exponentialRampToValueAtTime(90,C+.25);let de=e.createGain();de.gain.setValueAtTime(a,C),de.gain.exponentialRampToValueAtTime(1,C+.005),de.gain.exponentialRampToValueAtTime(a,C+.7),F.connect(de),p(de,1,.25),F.start(C),F.stop(C+.7);let P=x("triangle",70);P.frequency.setValueAtTime(70,C),P.frequency.exponentialRampToValueAtTime(38,C+.5);let J=e.createGain();J.gain.setValueAtTime(a,C),J.gain.exponentialRampToValueAtTime(.4,C+.006),J.gain.exponentialRampToValueAtTime(a,C+1.6),P.connect(J),p(J,1,.1),P.start(C),P.stop(C+1.7);let ce=e.createBufferSource();ce.buffer=m;let Ie=e.createBiquadFilter();Ie.type="lowpass",Ie.frequency.setValueAtTime(3600,C),Ie.frequency.exponentialRampToValueAtTime(900,C+1.6);let Z=e.createGain();Z.gain.setValueAtTime(a,C),Z.gain.exponentialRampToValueAtTime(.78,C+.004),Z.gain.exponentialRampToValueAtTime(a,C+1.9),ce.connect(Ie),Ie.connect(Z),p(Z,.8,.9),ce.start(C),ce.stop(C+2.2);let ve=e.createGain();ve.gain.setValueAtTime(a,C),ve.gain.exponentialRampToValueAtTime(1.5,C+.035),ve.gain.setValueAtTime(1.5,C+.5),ve.gain.exponentialRampToValueAtTime(a,C+3.9);let Ce=e.createBiquadFilter();Ce.type="lowpass",Ce.Q.value=1.2,Ce.frequency.setValueAtTime(320,C),Ce.frequency.exponentialRampToValueAtTime(3200,C+.08),Ce.frequency.exponentialRampToValueAtTime(650,C+2.6),Ce.connect(ve),p(ve,1,.6);for(let[De,ze]of[[73.42,.11],[110,.09],[146.83,.08],[220,.065],[293.66,.055],[369.99,.045],[440,.04]])for(let ye of[-7,7]){let Ge=x("sawtooth",De,ye),Xe=e.createGain();Xe.gain.value=ze,Ge.connect(Xe),Xe.connect(Ce),Ge.start(C),Ge.stop(C+4.1)}return[[1174.66,.035],[1760,.028],[2349.32,.02],[2959.96,.012]].forEach(([De,ze],ye)=>{let Ge=x("sine",De,ye%2?4:-4),Xe=e.createGain(),ge=C+.02+ye*.015;Xe.gain.setValueAtTime(a,ge),Xe.gain.exponentialRampToValueAtTime(ze,ge+.01),Xe.gain.exponentialRampToValueAtTime(a,C+3.2),Ge.connect(Xe),p(Xe,.6,1),Ge.start(ge),Ge.stop(C+3.3)}),C},stop(){let G=e.currentTime;if(l.gain.setValueAtTime(l.gain.value,G),l.gain.linearRampToValueAtTime(0,G+.15),!k){k=!0;for(let C of _)C.stop(G+.2)}}}}function Ub(e,t,i,{loop:r=84.7059,overlap:n=3,level:a=.85}={}){let s=e.createGain();s.gain.value=0,s.connect(t);let o=null,l=null,u=!1,h=0,d=0,c=[],p=0,m=()=>l||(l=fetch(i).then(f=>{if(!f.ok)throw new Error(`backsound ${f.status}`);return f.arrayBuffer()}).then(f=>new Promise((S,M)=>e.decodeAudioData(f,S,M))).then(f=>(o=f,f)).catch(f=>{throw l=null,f}));function x(f,S){let M=e.createBufferSource(),v=e.createGain();M.buffer=o,M.connect(v),v.connect(s);let y=f+Math.min(o.duration,r+n);S?v.gain.setValueAtTime(1,f):(v.gain.setValueAtTime(0,f),v.gain.linearRampToValueAtTime(1,f+n)),v.gain.setValueAtTime(1,f+r),v.gain.linearRampToValueAtTime(0,Math.min(y,f+r+n)),M.start(f),M.stop(y);let b={s:M,g:v};c.push(b),M.onended=()=>{c=c.filter(g=>g!==b);try{v.disconnect()}catch{}}}function _(){if(u){for(;d<e.currentTime+4;)x(d,!1),d+=r;h=setTimeout(_,1e3)}}return{load:m,get playing(){return u},start(f=e.currentTime+.1,S=3){if(u)return;u=!0;let M=++p;m().then(()=>{if(!u||M!==p)return;let v=Math.max(f,e.currentTime+.08);s.gain.cancelScheduledValues(e.currentTime),s.gain.setValueAtTime(s.gain.value,e.currentTime),s.gain.setValueAtTime(0,v),s.gain.linearRampToValueAtTime(a,v+S),x(v,!0),d=v+r,_()}).catch(v=>{u=!1,console.warn("The backsound could not be loaded.",v)})},stop(f=.8){if(!u)return;u=!1,p++,clearTimeout(h);let S=e.currentTime;s.gain.cancelScheduledValues(S),s.gain.setValueAtTime(s.gain.value,S),s.gain.linearRampToValueAtTime(0,S+f);for(let{s:M}of c)try{M.stop(S+f+.05)}catch{}}}}var Ob=class extends Lr{constructor(e,t,i,r,n,a,s){super(),Object.assign(this,{c:e,r0:t,r1:i,turns:r,a0:n,dir:a,z:s})}getPoint(e,t=new W){let i=this.a0+this.dir*this.turns*Math.PI*2*e,r=this.r0+(this.r1-this.r0)*e;return t.set(this.c.x+r*Math.cos(i),this.c.y+r*Math.sin(i),this.z)}};function $0(e,t,i,r){let n=[],a=e/2-i,s=t/2-i,o=[[a,s,0],[-a,s,Math.PI/2],[-a,-s,Math.PI],[a,-s,Math.PI*1.5]];return o.forEach(([l,u,h],d)=>{let c=Math.max(4,Math.round(i*Math.PI/2/r));for(let y=0;y<=c;y++){let b=h+y/c*(Math.PI/2);n.push(new W(l+i*Math.cos(b),u+i*Math.sin(b),0))}let[p,m]=o[(d+1)%4],x=Math.hypot(p-l,m-u),_=Math.max(1,Math.round(x/r)),f=l+i*Math.cos(h+Math.PI/2),S=u+i*Math.sin(h+Math.PI/2),M=p+i*Math.cos(h+Math.PI/2),v=m+i*Math.sin(h+Math.PI/2);for(let y=1;y<_;y++)n.push(new W(f+(M-f)*y/_,S+(v-S)*y/_,0))}),new gl(n,!0,"centripetal")}function Q0(e,t,i,r=.62){let n=new Kc;n.moveTo(0,0),n.bezierCurveTo(t*.95,e*.16,t*.9,e*r,0,e),n.bezierCurveTo(-t*.9,e*r,-t*.95,e*.16,0,0);let a=new Qp(n,{depth:i,bevelEnabled:!0,bevelThickness:i*.9,bevelSize:t*.16,bevelSegments:3,curveSegments:16});return a.translate(0,0,-i/2),a}function eg(e){let t=new Rc;t.add(new Lt(new Va(24,24,24),new rl({color:1447446,side:xi})));let i=(a,s,o,l,u,h)=>{let d=new Lt(new Ga(a,s),new rl({color:new rt(h,h,h),side:Tr}));d.position.set(o,l,u),d.lookAt(0,0,0),t.add(d)};i(10,2.4,0,8,4,4),i(2.2,12,-9,1,3,2.6),i(2.2,12,9,-1,1,1.8),i(12,1.2,0,-7,5,.9),i(4,4,5,5,-9,1.2),i(16,9,0,1,11,.55),i(6,2,-3,3,10.5,2.2);let r=new wl(e),n=r.fromScene(t,.03).texture;return r.dispose(),t.traverse(a=>{a.isMesh&&(a.geometry.dispose(),a.material.dispose())}),n}function Fb({w:e,h:t,material:i}){let r=new Jn,n=.1*Math.min(e,t),a=[],s=[],o=[],l=(v,y,b,g=8,T=!1)=>{let R=new eh(v,y,b,g,T);o.push(R);let N=new Lt(R,i);return r.add(N),s.push({mesh:N,count:R.index.count}),N},u=Q0(n,.4*n,.06*n),h=Q0(n,.36*n,.07*n,.5);o.push(u,h);let d=new Yc(new W(0,.08*n,.06*n),new W(0,.86*n,.06*n)),c=new eh(d,6,.018*n,5,!1);o.push(c);let p=(v,y,b,g=1,T=!1,R=.07)=>{let N=new Jn;N.position.set(v,y,.02*n);let L=b-Math.PI/2;N.rotation.z=L;let k=new Lt(T?h:u,i);k.scale.set(g,g*(T?1.45:1),g);let G=new Lt(c,i);return G.scale.copy(k.scale),N.add(k,G),r.add(N),a.push({pivot:N,base:L,swing:R,ph:Math.random()*Math.PI*2,rate:.9+Math.random()*.6,size:g}),N},m=(v,y,b,g,T,R=1.6)=>l(new Ob(new Fe(v,y),b,b*.18,R,g,T,0),90,.028*n,6),x=(v,y,b)=>{let g=new ef(b,18,12);o.push(g);let T=new Lt(g,i);T.position.set(v,y,.03*n),r.add(T)};l($0(e,t,.45*n,.06*n),520,.065*n,8,!0),l($0(e-.62*n,t-.62*n,.3*n,.06*n),520,.03*n,8,!0);for(let v of[1,-1])for(let y of[1,-1]){let b=v*e/2,g=y*t/2,T=Math.atan2(y,v);p(b-v*.12*n,g-y*.12*n,T,1.15,!0,.04),p(b-v*.05*n,g-y*.05*n,T+.85,.82,!1,.09),p(b-v*.05*n,g-y*.05*n,T-.85,.82,!1,.09),m(b-v*1.25*n,g+y*.46*n,.38*n,y>0?-Math.PI/2:Math.PI/2,v*y>0?1:-1,1.8),m(b+v*.46*n,g-y*1.25*n,.38*n,v>0?Math.PI:0,v*y>0?-1:1,1.8),x(b,g,.13*n)}let _=[[0,t/2,Math.PI/2],[0,-t/2,-Math.PI/2],[e/2,0,0],[-e/2,0,Math.PI]];for(let[v,y,b]of _)p(v,y,b+.55,.95,!1,.1),p(v,y,b-.55,.95,!1,.1),p(v,y,b+Math.PI+.6,.6,!1,.06),p(v,y,b+Math.PI-.6,.6,!1,.06),x(v,y,.12*n);let f=(v,y,b,g,T,R)=>{let N=Math.hypot(b-v,g-y);if(N<2.4*n)return;let L=(b-v)/N,k=(g-y)/N,G=.42*n,C=.22*n,O=[];for(let de=0;de<=24;de++){let P=de/24,J=Math.sin(P*Math.PI*2)*C;O.push(new W(v+L*N*P+T*(G+J),y+k*N*P+R*(G+J),0))}l(new gl(O),120,.024*n,6);let H=N>5*n?4:2;for(let de=0;de<H;de++){let P=(de+.5)/H,J=Math.sin(P*Math.PI*2)*C,ce=v+L*N*P+T*(G+J),Ie=y+k*N*P+R*(G+J);p(ce,Ie,Math.atan2(R,T)+(de%2?-.6:.6),de%2?.5:.58,!1,.12)}let F=new Fe(b+T*G,g+R*G);m(F.x+T*.2*n,F.y+R*.2*n,.2*n,Math.atan2(-R,-T),1,1.3)},S=e/2,M=t/2;for(let v of[1,-1])f(-S+1.6*n,v*M,-1*n,v*M,0,v),f(S-1.6*n,v*M,1*n,v*M,0,v);for(let v of[1,-1])f(v*S,-M+1.6*n,v*S,-1*n,v,0),f(v*S,M-1.6*n,v*S,1*n,v,0);return{group:r,leaves:a,tubes:s,grow(v){for(let y of s)y.mesh.geometry.setDrawRange(0,Math.floor(y.count*Math.min(1,v*1.25)/6)*6);a.forEach((y,b)=>{let g=Math.min(1,Math.max(0,(v-.25-b%9*.03)/.45));y.open=g})},sway(v,y=1){for(let b of a){let g=b.open??1;b.pivot.rotation.z=b.base+Math.sin(v*b.rate+b.ph)*b.swing*y,b.pivot.rotation.x=Math.sin(v*b.rate*.7+b.ph*1.3)*b.swing*.8*y,b.pivot.scale.setScalar(Math.max(1e-4,g<1?g*(1+.15*Math.sin(g*Math.PI)):1))}},dispose(){for(let v of o)v.dispose();for(let v of s)v.mesh.geometry.dispose();r.removeFromParent()}}}ht.registerPlugin(mt);var Et=(e,t=document)=>t.querySelector(e),ji=(e,t=document)=>[...t.querySelectorAll(e)],Rt=matchMedia("(prefers-reduced-motion: reduce)").matches,gu=matchMedia("(pointer: coarse)").matches,cr=(e,t,i)=>Math.min(i,Math.max(t,e)),_s=(e,t,i)=>e+(t-e)*i,Yi=(e,t,i,r)=>_s(e,t,1-Math.exp(-i*r)),zb=e=>e*e*(3-2*e),Lo=e=>new Promise(t=>setTimeout(t,e)),Ft={x:innerWidth*.6,y:innerHeight*.35,nx:.2,ny:-.3},Yr={y:scrollY,v:0};addEventListener("pointermove",e=>{Ft.x=e.clientX,Ft.y=e.clientY,Ft.nx=e.clientX/innerWidth*2-1,Ft.ny=e.clientY/innerHeight*2-1},{passive:!0});{let e=scrollY,t=performance.now();addEventListener("scroll",()=>{let i=performance.now();Yr.v=(scrollY-e)/Math.max(i-t,1)*1e3,Yr.y=scrollY,e=scrollY,t=i},{passive:!0})}var Bb=`
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
}`;function kb({scene:e,renderer:t,mobile:i}){const r=Lt,n=Jn,a=Va,s=ef,o=Qp,l=eh,u=gl,h=Yc,d=Kc,c=Jc,p=W,m=th,x=Ml,_=rt,f=Cp,S=Ci,M=ml,v=$r,y=fr,b=Or,g=Tr,T=zi,R=new S().matrix.constructor,N=(U,Re,pe)=>Math.min(pe,Math.max(Re,U)),L=(U,Re,pe)=>{const Se=N((pe-U)/(Re-U),0,1);return Se*Se*(3-2*Se)},k=U=>{const Re=N(U,0,1)-1;return 1+2.4*Re*Re*Re+1.4*Re*Re},G=matchMedia("(prefers-reduced-motion: reduce)").matches,C=eg(t),O=new m({color:15790320,metalness:1,roughness:.2,clearcoat:.7,clearcoatRoughness:.08,envMap:C,envMapIntensity:1}),H=new m({color:14342874,metalness:1,roughness:.36,envMap:C,envMapIntensity:.95}),F=new m({color:16777215,metalness:0,roughness:.05,transmission:1,ior:1.5,thickness:1.1,clearcoat:1,clearcoatRoughness:.05,dispersion:.25,attenuationColor:new _("#ffffff"),attenuationDistance:12,envMapIntensity:1.4,specularIntensity:1}),de=new x({color:16052974,roughness:.42,metalness:0}),P=new x({color:1447446,roughness:.5,metalness:.1}),J=new x({color:16184560,roughness:.62,metalness:0,side:g,flatShading:!0}),ce=[];function Ie(U,Re,pe,Se,fe){const Pe=new a(U,Re,pe,fe,fe,fe),Te=Pe.attributes.position,Me=Pe.attributes.normal,Le=new p,A=new p,E=U/2-Se,z=Re/2-Se,se=pe/2-Se;for(let Y=0;Y<Te.count;Y++){Le.fromBufferAttribute(Te,Y),A.set(N(Le.x,-E,E),N(Le.y,-z,z),N(Le.z,-se,se)),Le.sub(A);const te=Le.length();te>1e-6&&(Le.multiplyScalar(1/te),Me.setXYZ(Y,Le.x,Le.y,Le.z),Le.multiplyScalar(Se).add(A),Te.setXYZ(Y,Le.x,Le.y,Le.z))}return Te.needsUpdate=Me.needsUpdate=!0,ce.push(Pe),Pe}const Z=new S;function ve(){const U=new n,Re=Ie(1,1,1,.17,i?8:12),pe=new s(.082,14,10);ce.push(pe);const Se=[[0,0]],fe=[[-.25,-.25],[.25,.25]],Pe=[[-.25,-.25],[.25,-.25],[-.25,.25],[.25,.25]],Te={1:Se,2:fe,3:[...fe,[0,0]],4:Pe,5:[...Pe,[0,0]],6:[...Pe,[-.25,0],[.25,0]]},Me=[[0,0,1,1],[0,0,-1,6],[1,0,0,3],[-1,0,0,4],[0,1,0,2],[0,-1,0,5]],Le=new p(0,0,1),A=new p(0,1,0),E=new p(1,0,0);function z(te){const j=new r(Re,F),D=[];for(const[_e,I,K,me]of Me){const ae=new p(_e,I,K),xe=new p().crossVectors(Math.abs(ae.y)>.9?E:A,ae).normalize(),$=new p().crossVectors(ae,xe);for(const[X,q]of Te[me])D.push({p:ae.clone().multiplyScalar(.475).addScaledVector(xe,X).addScaledVector($,q),q:new v().setFromUnitVectors(Le,ae)})}const ie=new f(pe,de,D.length);return D.forEach((_e,I)=>{Z.position.copy(_e.p),Z.quaternion.copy(_e.q),Z.scale.set(1,1,.45),Z.updateMatrix(),ie.setMatrixAt(I,Z.matrix)}),j.add(ie),j.scale.setScalar(te),j}const se=z(.86),Y=z(.74);return U.add(se,Y),{group:U,update(te,j,D){const ie=G?0:j,_e=L(0,1,D);se.position.set(-.5*_e,.22*_e+Math.sin(ie*.8)*.04,.05),Y.position.set(.5*_e,-.3*_e+Math.sin(ie*.8+1.7)*.04,.28);const I=G?.3:1;se.rotation.set(.55+te*3.3*I+ie*.05,.4+te*2.5*I+ie*.07,.2+te*1.2*I),Y.rotation.set(-.35-te*2.7*I-ie*.06,1.1-te*3.1*I,-.4+te*.9*I+ie*.04)}}}function Ce(){const U=new n,Re=new n,pe=i?7:9,Se=1.9/pe,fe=Se*.76,Pe=.55;U.add(Re);const Te=new a(1,1,1);Te.translate(0,.5,0),ce.push(Te);const Me=new f(Te,O,pe*pe),Le=[];for(let te=0;te<pe;te++)for(let j=0;j<pe;j++){const D=(te-(pe-1)/2)*Se,ie=(j-(pe-1)/2)*Se,_e=D/.52,I=ie/.52,K=Math.exp(-(_e*_e-2*Pe*_e*I+I*I)/(2*(1-Pe*Pe)));Le.push({x:D,z:ie,h:.04+1.2*K,d:Math.hypot(D,ie)/1.35})}Re.add(Me);const A=new r(Ie(2.15,.08,2.15,.035,4),F);A.position.y=-.05,Re.add(A);const E=[];for(let te=0;te<=48;te++){const j=-1.02+2.04*te/48;E.push(new p(j,.03+1.12*Math.exp(-((j/.52)**2)/2),-1.16))}const z=new l(new u(E),140,.02,6,!1);ce.push(z);const se=new r(z,H);Re.add(se);const Y=z.index.count;return{group:U,update(te,j,D){const ie=G?0:j;Re.position.y=-.45,Re.rotation.set(.52,-.75+te*(G?.3:1.4)+Math.sin(ie*.25)*.08,0);const _e=L(0,.5,te)*L(.2,.9,D);Le.forEach((I,K)=>{const me=L(0,1,(_e*1.55-I.d*.55)/.45);Z.position.set(I.x,0,I.z),Z.quaternion.identity(),Z.scale.set(fe,Math.max(.001,I.h*me),fe),Z.updateMatrix(),Me.setMatrixAt(K,Z.matrix)}),Me.instanceMatrix.needsUpdate=!0,z.setDrawRange(0,Math.floor(Y*L(.28,.75,te)/6)*6)}}}function De(){const U=new n,Re=new n,pe=9,Se=.19,fe=.68,Pe=.36;U.add(Re);const Te=Ie(.58,.07,.25,.028,3),Me=[];for(let j=0;j<pe;j++){const D=new r(Te,j%3===2?H:O),ie=j*fe;D.position.set(Math.cos(ie)*Pe,-.82+j*Se,-Math.sin(ie)*Pe),D.rotation.y=ie,Re.add(D),Me.push(D)}const Le=new l(new h(new p(0,-.95,0),new p(0,1,0)),1,.045,14,!1);ce.push(Le),Re.add(new r(Le,H));const A=new s(.07,18,12);ce.push(A);const E=new r(A,O);E.position.y=1.02,Re.add(E);const z=new s(.115,32,20);ce.push(z);const se=new r(z,de);Re.add(se);const Y=j=>{const D=j*fe;return new p(Math.cos(D)*.46,-.82+j*Se+.035+.115,-Math.sin(D)*.46)},te=Me.map((j,D)=>Y(D));return{group:U,update(j,D,ie){const _e=G?0:D;Re.rotation.set(.16,-j*(G?.4:1.7)+Math.sin(_e*.3)*.06,0),Me.forEach((xe,$)=>xe.scale.setScalar(Math.max(1e-4,k((ie*1.7-$*.07)/.6))));const I=L(.04,.92,j)*(pe-1),K=Math.min(pe-2,Math.floor(I)),me=I-K,ae=L(0,1,me);se.position.lerpVectors(te[K],te[K+1],ae),se.position.y+=Math.sin(Math.PI*me)*.17,se.rotation.set(I*2.1,I*1.3,0),se.scale.setScalar(Math.max(1e-4,L(.45,.95,ie)))}}}function ze(){const U=new n,Re=new n,pe=new n,Se=.6;U.add(Re),Re.add(pe);const fe=new d;fe.absarc(0,0,Se,0,Math.PI*2,!1);const Pe=new o(fe,{depth:.08,bevelEnabled:!0,bevelThickness:.035,bevelSize:.035,bevelSegments:4,curveSegments:i?48:80});Pe.translate(0,0,-.04),ce.push(Pe);const Te=new m({color:15658734,metalness:1,roughness:.24,clearcoat:.6,clearcoatRoughness:.1,envMap:C,envMapIntensity:1}),Me=new r(Pe,[Te,O]);Me.position.y=-.22,pe.add(Me);const Le=(te,j,D)=>{const ie=[];for(let I=0;I<64;I++){const K=I/64*Math.PI*2;ie.push(new p(Math.cos(K)*te,D+Math.sin(K)*te,j))}const _e=new l(new u(ie,!0),96,.016,6,!0);return ce.push(_e),_e};pe.add(new r(Le(Se*.88,.085,-.22),O),new r(Le(Se*.88,-.085,-.22),O));const A=[];for(let te=0;te<40;te++){const j=te/40*Math.PI*2;A.push(new p(0,.45+Math.sin(j)*.075,Math.cos(j)*.075))}const E=new l(new u(A,!0),60,.022,8,!0);ce.push(E),pe.add(new r(E,O));const z=(te,j)=>{const D=new d;D.moveTo(-te/2,0),D.lineTo(te/2,0),D.lineTo(te/2,j),D.lineTo(-te/2,j),D.closePath();const ie=new o(D,{depth:.012,bevelEnabled:!1});return ce.push(ie),ie},se=z(.24,.85),Y=z(.07,.85);for(const te of[-1,1]){const j=new n;j.position.set(0,.47,te*.01),j.rotation.z=te*.42;const D=new r(se,P),ie=new r(Y,de);ie.position.z=.013,j.add(D,ie),Re.add(j)}return(async()=>{const te=document.getElementById("scene")?.dataset.v||"",j=await(await fetch(`batik-kawung.svg?v=${te}`)).text(),D=i?512:768,ie=j.replace(/width="[\d.]+" height="[\d.]+"/,`width="${D*1400/844}" height="${D*1e3/844}"`),_e=new Image;_e.src=URL.createObjectURL(new Blob([ie],{type:"image/svg+xml"})),await new Promise((xe,$)=>{_e.onload=xe,_e.onerror=$}),URL.revokeObjectURL(_e.src);const I=document.createElement("canvas");I.width=I.height=D;const K=I.getContext("2d");K.fillStyle="#8c8c8c",K.fillRect(0,0,D,D);const me=D/844;K.drawImage(_e,-278*me,-78*me,1400*me,1e3*me);const ae=new M(I);ae.colorSpace=T,ae.repeat.set(1/(2*Se),1/(2*Se)),ae.offset.set(.5,.5),ae.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy()),Te.map=ae,Te.bumpMap=ae,Te.bumpScale=3,Te.needsUpdate=!0,ce.push(ae)})().catch(te=>console.warn("The medal relief could not be drawn.",te)),{group:U,update(te,j,D){const ie=G?0:j;Re.rotation.set(Math.sin(ie*.7)*.05,-.25+Math.sin(ie*.45)*.1,Math.sin(ie*.9)*.04),pe.rotation.y=G?te*1.2:te*Math.PI*2.2+Math.sin(ie*.6)*.18,Re.position.y=-.2+(1-L(0,1,D))*.5}}}function ye(U,Re,pe,Se){const fe=Re+pe*.95,Pe=Re-pe*1.2,Te=new d,Me=Math.PI*2/U;for(let A=0;A<U;A++){const E=A*Me;[[Pe,E-Me*.5],[Pe,E-Me*.27],[fe,E-Me*.12],[fe,E+Me*.12],[Pe,E+Me*.27]].forEach(([z,se],Y)=>{const te=z*Math.cos(se),j=z*Math.sin(se);A===0&&Y===0?Te.moveTo(te,j):Te.lineTo(te,j)})}Te.closePath();const Le=new c;Le.absarc(0,0,Re*.19,0,Math.PI*2,!0),Te.holes.push(Le);for(let A=0;A<Se;A++){const E=A/Se*Math.PI*2,z=new c,se=Se>4?Re*.16:Re*.13;z.absarc(Math.cos(E)*Re*.52,Math.sin(E)*Re*.52,se,0,Math.PI*2,!0),Te.holes.push(z)}return Te}function Ge(){const U=new n,Re=new n,pe=.075;U.add(Re);const fe=[{n:18,holes:5,mat:O},{n:11,holes:4,mat:F},{n:13,holes:4,mat:H}].map(({n:z,holes:se,mat:Y})=>{const te=pe*z/2,j=new o(ye(z,te,pe,se),{depth:.12,bevelEnabled:!0,bevelThickness:.02,bevelSize:.018,bevelSegments:2,curveSegments:12});j.translate(0,0,-.06),ce.push(j);const D=new r(j,Y);return Re.add(D),{mesh:D,n:z,rp:te}}),[Pe,Te,Me]=fe,Le=.44,A=-1.22;Pe.mesh.position.set(-.32,.32,0),Te.mesh.position.set(-.32+Math.cos(Le)*(Pe.rp+Te.rp),.32+Math.sin(Le)*(Pe.rp+Te.rp),0),Me.mesh.position.set(-.32+Math.cos(A)*(Pe.rp+Me.rp),.32+Math.sin(A)*(Pe.rp+Me.rp),0);const E=(z,se,Y,te)=>Y+Math.PI+Math.PI/se.n-(te-Y)*(z.n/se.n);return{group:U,update(z,se,Y){const te=G?0:se;Re.scale.setScalar(.74),Re.rotation.set(-.5+Math.sin(te*.35)*.05,.42+Math.sin(te*.27)*.08,.08);const j=(G?z*1.5:z*Math.PI*2.4)+te*.08+(1-Y)*1.2;Pe.mesh.rotation.z=j,Te.mesh.rotation.z=E(Pe,Te,Le,j),Me.mesh.rotation.z=E(Pe,Me,A,j)}}}function Xe(){const U=new n,Re=new n,pe=new n;U.add(Re),Re.add(pe);const Se=new Float32Array([0,0,.62,-.52,.07,-.3,0,0,-.3,0,0,.62,0,0,-.3,.52,.07,-.3,0,0,.62,-.012,-.17,-.3,0,0,-.3,0,0,.62,0,0,-.3,.012,-.17,-.3]),fe=new y;fe.setAttribute("position",new b(Se,3)),fe.computeVertexNormals(),ce.push(fe);const Pe=new r(fe,J);Pe.scale.setScalar(.6),pe.add(Pe);const Te=new s(.024,10,8);ce.push(Te);const Me=28,Le=new f(Te,de,Me);Re.add(Le);const A=(I,K)=>{const me=I*Math.PI*2;return K.set(1.05*Math.sin(me),.12*Math.sin(me)+.08*Math.cos(2*me),.62*Math.sin(2*me))},E=new p,z=new p,se=new p,Y=new p,te=new p,j=new p,D=new p,ie=new R,_e=new v;return{group:U,update(I,K,me){const ae=G?0:K;Re.rotation.set(.42,-.2,0);const xe=I*.75+ae*.045;A(xe,E),A(xe+.004,z),A(xe+.008,se),Y.subVectors(z,E).normalize(),te.subVectors(se,z).normalize(),j.set(0,1,0),D.crossVectors(j,Y).normalize(),j.crossVectors(Y,D).normalize(),ie.makeBasis(D,j,Y),pe.quaternion.setFromRotationMatrix(ie);const $=N(te.clone().sub(Y).dot(D)*160,-.9,.9);_e.setFromAxisAngle(Y,-$),pe.quaternion.premultiply(_e),pe.position.copy(E);const X=L(.3,1,me);for(let q=0;q<Me;q++)A(xe-(q+1)*.011,Z.position),Z.scale.setScalar(Math.max(1e-4,(1-q/Me)*.95*X)),Z.quaternion.identity(),Z.updateMatrix(),Le.setMatrixAt(q,Z.matrix);Le.instanceMatrix.needsUpdate=!0}}}const ge=["about","research","experience","credentials","toolkit","contact"],ke=[ve,Ce,De,ze,Ge,Xe],le=ge.map((U,Re)=>{const pe=document.getElementById(U),Se=pe?ke[Re]():null;return Se?(Se.group.visible=!1,e.add(Se.group),{id:U,el:pe,obj:Se,w:0,start:0,end:1/0,at:{x:.3,y:0,s:.7,a:.2},formed:!1}):null}).filter(Boolean);let Ae={x:.06,y:.13,s:1,a:.2},Ee=scrollY,V=0,Ne=!1;function We(U,Re){Ae={...Re};const pe=innerHeight,Se=innerWidth,fe=scrollY,Pe=document.documentElement.scrollHeight,Te=Pe-pe/2,Me=document.getElementById("top"),Le=ae=>{const xe=ae.getBoundingClientRect();return{top:xe.top+fe,bottom:xe.bottom+fe,left:xe.left,right:xe.right}},A=[Me?Le(Me):{top:0,bottom:pe},...le.map(ae=>Le(ae.el))];for(let ae=0;ae<le.length;ae++)le[ae].start=(A[ae].bottom+A[ae+1].top)/2,le[ae].end=ae+1<le.length?(A[ae+1].bottom+A[ae+2].top)/2:1/0;const E=document.createRange(),z=ae=>{E.selectNodeContents(ae);const xe=E.getBoundingClientRect();return{top:xe.top+fe,bottom:xe.bottom+fe,left:xe.left,right:xe.right}},se=[...[...document.querySelectorAll("main .glass, main .tabs, main .lanyard")].map(Le),...[...document.querySelectorAll("main h1, main h2, main h3, main p")].filter(ae=>!ae.closest(".glass")).map(z)].filter(ae=>ae.bottom-ae.top>2&&ae.right-ae.left>2),Y=document.getElementById("nav"),te=Y?Y.getBoundingClientRect():null,j=Se/pe,D=U?.9:.84,ie=Math.min(.21,.3*j)*pe*D,_e=U?[.18,.5,.82]:[.13,.22,.35,.5,.65,.78,.87],I=[.2,.32,.44,.56,.68,.8],K=[];for(const ae of _e)for(const xe of I)K.push({fx:ae,fy:xe});const me=(ae,xe,$)=>{const X=ae-pe/2,q=xe*Se,Q=$*pe,ne=se.filter(Ue=>Ue.bottom>X-ie&&Ue.top<X+pe+ie);let ue=0,he=0;for(let Ue=0;Ue<3;Ue++){const be=Ue===0?1:Ue*8,Ze=Ue/2*ie*.95;for(let ot=0;ot<be;ot++){const ut=ot/be*Math.PI*2,nt=q+Math.cos(ut)*Ze,st=Q+Math.sin(ut)*Ze;if(he++,nt<0||nt>Se||st<0||st>pe){ue+=.6;continue}if(te&&nt>te.left-10&&nt<te.right+10&&st>te.top-10&&st<te.bottom+10){ue++;continue}const St=X+st;for(const gt of ne)if(nt>gt.left-16&&nt<gt.right+16&&St>gt.top-16&&St<gt.bottom+16){ue++;break}}}return ue/he};for(const ae of le){let xe=ae.start+.3*pe,$=Math.min(ae.end===1/0?Te:ae.end-.3*pe,Te);$<xe&&(xe=$=(ae.start+Math.min(ae.end,Te))/2);const X=Math.min(16,Math.max(3,Math.round(($-xe)/(.18*pe))+1)),q=Array.from({length:X},(be,Ze)=>xe+($-xe)*Ze/(X-1)),Q=q.map(be=>K.map(Ze=>me(be,Ze.fx,Ze.fy))),ne=[Q[0].slice()],ue=[K.map(()=>-1)];for(let be=1;be<X;be++)ne.push([]),ue.push([]),K.forEach((Ze,ot)=>{let ut=1/0,nt=0;K.forEach((st,St)=>{const gt=ne[be-1][St]+1.2*Math.hypot((Ze.fx-st.fx)*j,Ze.fy-st.fy);gt<ut&&(ut=gt,nt=St)}),ne[be].push(ut+Q[be][ot]),ue[be].push(nt)});let he=ne[X-1].indexOf(Math.min(...ne[X-1]));const Ue=[];for(let be=X-1;be>=0;be--){const Ze=K[he],ot=Q[be][he];Ue.unshift({c:q[be],x:Ze.fx-.5,y:.5-Ze.fy,s:ot>.45?D*.85:D,a:.2}),he=ue[be][he]}ae.path=Ue}}function we(U,Re){const pe=U.path;if(!pe||!pe.length)return U.at;if(Re<=pe[0].c)return pe[0];for(let Se=0;Se<pe.length-1;Se++)if(Re<=pe[Se+1].c){const fe=L(pe[Se].c,pe[Se+1].c,Re);return{x:pe[Se].x+(pe[Se+1].x-pe[Se].x)*fe,y:pe[Se].y+(pe[Se+1].y-pe[Se].y)*fe,s:pe[Se].s+(pe[Se+1].s-pe[Se].s)*fe,a:.2}}return pe[pe.length-1]}function qe(U){const Re=innerHeight,pe=U+Re/2,Se=.25*Re,fe=Me=>Me===0?Ae:we(le[Me-1],pe);let Pe=0;for(;Pe<le.length&&pe>=le[Pe].start;)Pe++;const Te=(Me,Le,A)=>({x:Me.x+(Le.x-Me.x)*A,y:Me.y+(Le.y-Me.y)*A,s:Me.s+(Le.s-Me.s)*A,a:Me.a+(Le.a-Me.a)*A});return Pe>0&&pe-le[Pe-1].start<Se?Te(fe(Pe-1),fe(Pe),L(-Se,Se,pe-le[Pe-1].start)):Pe<le.length&&le[Pe].start-pe<Se?Te(fe(Pe),fe(Pe+1),L(-Se,Se,pe-le[Pe].start)):fe(Pe)}function Qe(U,Re,pe,Se,fe,Pe,Te){Ee+=(pe-Ee)*(1-Math.exp(-8*Re));const Me=innerHeight,Le=Ee+Me/2,A=document.documentElement.scrollHeight-Me/2;let E=0;for(const z of le){const se=z.end===1/0?1/0:z.end,Y=Math.min(Le-z.start,se-Le);let te=(se===1/0?L(0,.22*Me,Y):L(.06*Me,.36*Me,Y))*Pe*(Te?0:1);if(Ne&&(te=Math.max(te,.001)),z.w=te,te<5e-4){z.obj.group.visible=!1,z.formed=!1;continue}E=Math.max(E,te);const j=se===1/0?Math.max(A,z.start+1):se,D=N((Le-z.start)/Math.max(j-z.start,1),0,1),ie=z.obj.group;ie.visible=!0,ie.position.copy(Se),ie.scale.setScalar(Math.max(1e-4,fe*.95*k(te))),ie.rotation.set(Ft.ny*.12,Ft.nx*.18+(1-te)*1.4,(1-te)*.3),z.obj.update(D,U,te),te>.85&&!z.formed?(z.formed=!0,U-V>1.2&&zt.live&&(V=U,zt.bubble(1.25,.1),zt.bubble(1.7,.05,.08))):te<.5&&(z.formed=!1)}return 1-L(.04,.62,E)}function tt(U){U>=3&&(Object.assign(F,{transmission:0,transparent:!0,opacity:.42,dispersion:0}),F.needsUpdate=!0)}return/sodebug/.test(location.search)&&(window.__so={items:le,anchor:qe,get hero(){return Ae}}),{layout:We,anchor:qe,update:Qe,quality:tt,prewarm(U){Ne=U;for(const Re of le)U&&(Re.obj.group.visible=!0)}}}function Vb(){let e=Et("#scene"),t=matchMedia("(max-width: 900px)").matches||gu,i=new WS({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),r=Math.min(devicePixelRatio||1,t?2.5:2),n=r;i.setPixelRatio(n),i.toneMapping=Au,i.toneMappingExposure=1.05,i.setClearColor(394758,1),i.transmissionResolutionScale=t?.5:.6;let a=new Rc,s=new mr(35,1,.1,60);s.position.set(0,0,9);let o=Math.tan(fv.degToRad(s.fov/2)),l=new wl(i);a.environment=l.fromScene(new XS,.04).texture,a.environmentIntensity=.8,l.dispose();let u={uTime:{value:0},uScroll:{value:0},uAspect:{value:1},uReady:{value:0},uLight:{value:new Fe(.3,.15)},uGround:{value:null},uOrn0:{value:null},uOrn1:{value:null},uOrn2:{value:null},uBox:{value:[new kt,new kt,new kt]},uFade:{value:[0,0,0]},uTile:{value:.1},uInk:{value:.4}},h=new sn({uniforms:u,depthWrite:!1,toneMapped:!1,defines:{RELIEF:1},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
      }`}),d=new Lt(new Ga(1,1),h);d.position.z=-9,d.renderOrder=-10,a.add(d);let c=async(X,q,Q)=>{let ne=(await(await fetch(X)).text()).replace(/width="[\d.]+" height="[\d.]+"/,`width="${q}" height="${Q}"`),ue=new Image,he=new Promise((be,Ze)=>{ue.onload=be,ue.onerror=()=>Ze(new Error(`could not load ${X}`))});ue.src=URL.createObjectURL(new Blob([ne],{type:"image/svg+xml"}));try{await he,ue.decode&&await ue.decode().catch(()=>{})}finally{setTimeout(()=>URL.revokeObjectURL(ue.src),0)}let Ue=document.createElement("canvas");return Ue.width=q,Ue.height=Q,Ue.getContext("2d").drawImage(ue,0,0,q,Q),Ue},p=(X,q,Q)=>{let ne=new Ar(q,Q,{depthBuffer:!1,generateMipmaps:!0,minFilter:br,magFilter:Pi});ne.texture.anisotropy=X.anisotropy;let ue=t?4.8:3.5,he=t?3.2:2.6,Ue=new sn({uniforms:{uSrc:{value:X},uStep:{value:new Fe(ue/q,ue/Q)},uSoft:{value:he}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D uSrc; uniform vec2 uStep; uniform float uSoft;
        float line(vec2 p){ vec4 s = textureLod(uSrc, p, uSoft); return s.r * s.a; }
        void main(){
          vec4 c = textureLod(uSrc, vUv, 0.0);
          float hx = line(vUv - vec2(uStep.x, 0.0)) - line(vUv + vec2(uStep.x, 0.0));
          float hy = line(vUv - vec2(0.0, uStep.y)) - line(vUv + vec2(0.0, uStep.y));
          gl_FragColor = vec4(c.r, 0.5 + 0.5 * clamp(hx, -1.0, 1.0), 0.5 + 0.5 * clamp(hy, -1.0, 1.0), c.a);
        }`,depthTest:!1,depthWrite:!1,blending:Wn,toneMapped:!1}),be=new Lt(new Ga(2,2),Ue);be.frustumCulled=!1;let Ze=i.getRenderTarget();return i.setRenderTarget(ne),i.render(be,s),i.setRenderTarget(Ze),be.geometry.dispose(),Ue.dispose(),ne.texture},m={},x=Math.min(8,i.capabilities.getMaxAnisotropy()),_=(navigator.deviceMemory||8)<=2?1024:t?1536:2048,f=Math.round(_/1.4),S=async X=>{let q=await c(`batik-${X}.svg?v=${e.dataset.v||""}`,_,f),Q=new ml(q);Q.anisotropy=x,Q.minFilter=br;let ne=Q;try{ne=p(Q,_,f),Q.dispose(),q.width=q.height=0}catch(he){h.defines.RELIEF=0,h.needsUpdate=!0,console.warn("The batik relief could not be prepared, the batik stays flat.",he)}let ue={tex:ne,fade:0};m[X]=ue,ht.to(ue,{fade:1,duration:1.1,ease:"power2.out"})},M=(async()=>{let X=await c(e.dataset.ground,256,256),q=new ml(X);q.anisotropy=x,q.minFilter=br,q.wrapS=q.wrapT=Uo,u.uGround.value=q,await S("megamendung"),await S("garuda"),ht.to(u.uReady,{value:1,duration:1.2,ease:"power2.out"})})().catch(X=>console.warn("The batik could not be drawn, the cloth stays plain.",X)),v=M.then(async()=>{for(let X of["kawung","parang","truntum"])await S(X).catch(q=>console.warn(`The ${X} batik could not be drawn.`,q))}),y=Et("#hero-name"),b=document.createElement("canvas"),g=new ml(b);g.colorSpace=zi,g.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy());let T=new rt("#060606"),R=new rt("#ffffff"),N=new rl({map:g,alphaTest:.5,alphaToCoverage:!0,toneMapped:!1,color:T.clone()}),L=new Lt(new Ga(1,1),N),k=-2.2;L.position.z=k,a.add(L);function G(){let X=y.getBoundingClientRect();if(X.width<2)return;let q=r,Q=getComputedStyle(y);b.width=Math.ceil(X.width*q),b.height=Math.ceil(X.height*q);let ne=b.getContext("2d");ne.setTransform(q,0,0,q,0,0),ne.clearRect(0,0,X.width,X.height),ne.font=`${Q.fontWeight} ${Q.fontSize} ${Q.fontFamily}`,"letterSpacing"in ne&&(ne.letterSpacing=Q.letterSpacing);let ue=ne.createLinearGradient(0,0,0,X.height);ue.addColorStop(0,"#ffffff"),ue.addColorStop(1,"#d2cec7"),ne.fillStyle=ue,ne.textBaseline="alphabetic";for(let he of ji(".line",y)){let Ue=he.getBoundingClientRect(),be=ne.measureText(he.textContent),Ze=be.fontBoundingBoxAscent??be.actualBoundingBoxAscent,ot=be.fontBoundingBoxDescent??be.actualBoundingBoxDescent;ne.fillText(he.textContent,Ue.left-X.left,Ue.top-X.top+(Ue.height-(Ze+ot))/2+Ze)}g.needsUpdate=!0}let C={uTime:{value:0},uAmp:{value:.2},uFreq:{value:.95},uPointer:{value:new W(0,0,1)},uBulge:{value:0}},O=new th({color:16777215,metalness:0,roughness:.08,transmission:1,ior:1.45,thickness:2,clearcoat:1,clearcoatRoughness:.06,dispersion:.25,attenuationColor:new rt("#ffffff"),attenuationDistance:16,envMapIntensity:1.5,specularIntensity:1});O.onBeforeCompile=X=>{Object.assign(X.uniforms,C),X.vertexShader=X.vertexShader.replace("#include <common>",`#include <common>
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
        #endif`).replace("#include <begin_vertex>","vec3 transformed=lq0;")},O.customProgramCacheKey=()=>"liquid-glass-v1";let H=t?20:40,F=new Lt(new Qc(1,H),O);a.add(F);let de=new Qc(1,10),P=[0,1,2].map(X=>{let q=new Lt(de,O);return q.userData={r:1.55+X*.32,sp:.22+X*.07,ph:X*2.1,s:.13-X*.025,tilt:.5+X*.4},a.add(q),q});a.add(new k_(16777215,.3));let J=new B_(16777215,2.4);J.position.set(-3,4,5),a.add(J);let ce=new nh(16777215,30,30);ce.position.set(4,-2,3),a.add(ce);let Ie=new nh(16777215,18,30);Ie.position.set(-2,1,4),a.add(Ie);let Z=t?140:280,ve=new Float32Array(Z*3);for(let X=0;X<Z;X++)ve[X*3]=(Math.random()-.5)*20,ve[X*3+1]=(Math.random()-.5)*13,ve[X*3+2]=-7+Math.random()*9;let Ce=new fr;Ce.setAttribute("position",new Or(ve,3));let De=new zv(Ce,new Ip({color:16777215,size:.03,transparent:!0,opacity:.32,depthWrite:!1,sizeAttenuation:!0}));a.add(De);let ze=kb({scene:a,renderer:i,mobile:t}),ye=[["#top",{x:.06,y:.13,s:1,a:.2},{x:.4,y:.33,s:.78,a:.19}],["#about",{x:-.37,y:-.2,s:.62,a:.2},{x:.3,y:-.3,s:.7,a:.2}],["#research",{x:.41,y:.27,s:.5,a:.24},{x:-.3,y:.34,s:.6,a:.22}],["#experience",{x:-.4,y:.04,s:.6,a:.2},{x:.32,y:-.05,s:.62,a:.2}],["#credentials",{x:.4,y:-.22,s:.52,a:.22},{x:-.3,y:.3,s:.6,a:.22}],["#toolkit",{x:-.3,y:.25,s:.5,a:.2},{x:.3,y:.2,s:.6,a:.2}],["#contact",{x:.24,y:.04,s:1.12,a:.2},{x:.12,y:.12,s:1.05,a:.2}]],Ge=[],Xe=!!document.getElementById("loader"),ge={x:.06,y:.13,s:1,a:.2,intro:Rt&&!Xe?1:0,name:Rt&&!Xe?1:0,bulge:0,rx:0,ry:0,cx:0,cy:0,lx:.3,ly:.15,gate:0,ink:.4},ke=1,le=1,Ae=!1,Ee=.78,V=2.4,Ne=[];function We(X,q){let Q=Math.min(.8,.9*X/1.4),ne=[{name:"megamendung",cx:0,cy:V,h:Math.min(.95,.94*X/1.4)},{name:"garuda",cx:q?0:.13*X,cy:q?.28:.02,h:Math.min(.96,.98*X/1.4)}],ue=Math.max(document.documentElement.scrollHeight-innerHeight,1),he=-1;for(let Ue of ji("[data-batik]")){if(Ue.id==="top")continue;let be=Ue.offsetTop,Ze=Ue.offsetHeight,ot=Math.max(1,Math.round(Ze/innerHeight/2.2));for(let ut=0;ut<ot;ut++){let nt=cr(be+Ze*(ut+.5)/ot-innerHeight/2,0,ue);ne.push({name:Ue.dataset.batik,cx:q?0:he*.12*X,cy:-(nt/innerHeight)*Ee,h:Q}),he=-he}}ne.sort((Ue,be)=>be.cy-Ue.cy),ne.forEach((Ue,be)=>{let Ze=Math.min(be>0?ne[be-1].cy-Ue.cy:1/0,be<ne.length-1?Ue.cy-ne[be+1].cy:1/0);Ue.h=Math.min(Ue.h,.92*Ze)}),Ne=ne}let we={on:Xe,shown:!1,loading:!1,frame:null,grow:0,load:0,approach:0,spin:0,turn:0,tx:0,ty:0,glow:Xe?1:0};ge.gate=Xe?V:0;let qe=null;function Qe(){qe||(qe=new th({color:15921906,metalness:1,roughness:.2,clearcoat:.7,clearcoatRoughness:.08,envMap:eg(i),envMapIntensity:1})),we.frame&&we.frame.dispose();let X=2*(s.position.z-.4)*o,q=X*s.aspect,Q=s.aspect<.9,ne=Q?.72*q:.7*q,ue=Q?Math.min(.6*X,1.6*ne):(le<520?.76:.68)*X;we.frame=Fb({w:ne,h:ue,material:qe}),we.frame.grow(we.grow),a.add(we.frame.group)}let tt=[];function U(X){let q=-X-.62,Q=-X+.62;tt.length=0;for(let ne of Ne)m[ne.name]&&ne.h>.02&&ne.cy+ne.h/2>q&&ne.cy-ne.h/2<Q&&tt.push(ne);tt.sort((ne,ue)=>Math.abs(ne.cy+X)-Math.abs(ue.cy+X));for(let ne=0;ne<3;ne++){let ue=tt[ne],he=u.uBox.value[ne];ue?(he.set(ue.cx,ue.cy,ue.h*1.4,ue.h),u.uFade.value[ne]=m[ue.name].fade,u[`uOrn${ne}`].value=m[ue.name].tex):(he.set(0,0,0,0),u.uFade.value[ne]=0)}}function Re(){ke=e.clientWidth,le=e.clientHeight,Ae=ke/le<.85,i.setSize(ke,le,!1),s.aspect=ke/le,s.updateProjectionMatrix();let X=2*(s.position.z-d.position.z)*o;d.scale.set(X*s.aspect*1.3,X*1.3,1),u.uAspect.value=s.aspect;let q=s.aspect,Q=q<.9;ge.ink=Q?.32:.4,u.uTile.value=Q?.07:.1,We(q,Q),we.on&&we.shown&&Qe(),Ge=ye.map(([ne,ue,he],Ue)=>{let be=Et(ne);return{at:Ue===0?0:be.offsetTop+be.offsetHeight/2-innerHeight/2,...Ae||ke<900?he:ue}}).sort((ne,ue)=>ne.at-ue.at),ze.layout(Ae||ke<900,Ae||ke<900?ye[0][2]:ye[0][1]),G()}function pe(X){if(X<=Ge[0].at)return Ge[0];for(let q=0;q<Ge.length-1;q++){let Q=Ge[q],ne=Ge[q+1];if(X<=ne.at){let ue=zb(cr((X-Q.at)/Math.max(ne.at-Q.at,1),0,1));return{x:_s(Q.x,ne.x,ue),y:_s(Q.y,ne.y,ue),s:_s(Q.s,ne.s,ue),a:_s(Q.a,ne.a,ue)}}}return Ge[Ge.length-1]}let Se=new W,fe=new $r,Pe=.46,Te=performance.now(),Me=!0,Le=!1,A=0,E=0,z=0,se=0,Y=null,te=0,j=!1,D=[.024,.034,.05],ie=[14,20,30],_e=new Uint8Array(4),I=()=>{document.documentElement.dataset.quality=String(se)};I();function K(){se++,j=!1,se===1?(n=Math.max(1,r*.8),i.setPixelRatio(n),i.transmissionResolutionScale=.42,i.setSize(ke,le,!1),G()):se===2?(F.geometry.dispose(),F.geometry=new Qc(1,14),P.forEach(X=>{X.visible=!1}),n=Math.max(1,r*.67),i.setPixelRatio(n),i.setSize(ke,le,!1),G()):(O.transmission=0,O.transparent=!0,O.opacity=.42,O.dispersion=0,O.needsUpdate=!0,n=1,i.setPixelRatio(1),i.setSize(ke,le,!1),G()),I(),ze.quality(se)}function me(X){if(!Me)return;requestAnimationFrame(me);let q=Math.max(0,(X-Te)/1e3);Te=X;let Q=Math.min(q,.05);A+=Q*(Rt?.15:1),Yr.v*=Math.exp(-5*Q);let ne=2*s.position.z*o,ue=ne*s.aspect,he=ze.anchor(Yr.y),Ue=Rt?30:3.2;ge.x=Yi(ge.x,he.x+Ft.nx*.03,Ue,Q),ge.y=Yi(ge.y,he.y-Ft.ny*.03,Ue,Q),ge.s=Yi(ge.s,he.s,Ue,Q),ge.a=Yi(ge.a,he.a+cr(Math.abs(Yr.v)*7e-5,0,.12),4,Q);let be=Math.min(.21*ne,.3*ue)*ge.s*ge.intro;F.visible=ge.intro>.002,F.position.set(ge.x*ue,ge.y*ne,0);let Ze=Math.max(be,1e-4),ot=ze.update(A,Q,Yr.y,F.position,be,ge.intro,we.on);ot<.01&&(F.visible=!1),F.scale.set(Ze*ot+1e-4,Ze*ot+1e-4,(Ze*ot+1e-4)*Pe),ge.rx=Yi(ge.rx,Ft.ny*.22,3,Q),ge.ry=Yi(ge.ry,Ft.nx*.3,3,Q),F.rotation.set(ge.rx,ge.ry,Math.sin(A*.1)*.25);let ut=Ft.nx*ue*.5,nt=-Ft.ny*ne*.5,st=Math.hypot(ut-F.position.x,nt-F.position.y);ge.bulge=Yi(ge.bulge,st<be*1.9&&!gu?.2:0,5,Q),Se.set(ut-F.position.x,nt-F.position.y,be*1.1).normalize().applyQuaternion(fe.copy(F.quaternion).invert()),Se.z/=Pe,Se.normalize(),C.uPointer.value.copy(Se),C.uBulge.value=ge.bulge,C.uAmp.value=ge.a,C.uTime.value=A,C.uFreq.value=.9+cr(Yr.y/Math.max(document.documentElement.scrollHeight-innerHeight,1),0,1)*.35;for(let _t of P){_t.visible=se<2&&ge.intro>.002&&ot>.02;let xt=_t.userData,Ht=A*xt.sp+xt.ph;_t.position.set(F.position.x+Math.cos(Ht)*xt.r*be,F.position.y+Math.sin(Ht*1.3)*xt.r*be*.6*Math.cos(xt.tilt),Math.sin(Ht)*xt.r*be*.7),_t.scale.setScalar(Math.max(xt.s*(be/1.19+.35)*ge.intro*ot,1e-4))}let St=y.getBoundingClientRect();if(L.visible=!we.on&&St.bottom>-40&&St.top<le+40,L.visible){let _t=2*(s.position.z-k)*o,xt=_t*s.aspect;L.scale.set(St.width/ke*xt,St.height/le*_t,1),L.position.x=((St.left+St.width/2)/ke-.5)*xt,L.position.y=-((St.top+St.height/2)/le-.5)*_t,N.color.copy(T).lerp(R,ge.name)}ge.cx=Yi(ge.cx,Ft.nx*.22,2.5,Q),ge.cy=Yi(ge.cy,-Ft.ny*.16,2.5,Q),s.position.x=Rt?0:ge.cx,s.position.y=Rt?0:ge.cy,s.lookAt(0,0,0),Ie.position.set(ut*.8,nt*.8,4),De.rotation.y=A*.01,De.position.y=Yr.y/Math.max(innerHeight,1)*.35;let gt=Yr.y/Math.max(innerHeight,1)*Ee-ge.gate;u.uTime.value=A,u.uScroll.value=gt,U(gt);let ui=gu?Math.sin(A*.13)*.32*s.aspect:Ft.nx*.5*s.aspect,Ji=gu?.1+Math.cos(A*.11)*.24:-Ft.ny*.5;if(ge.lx=Yi(ge.lx,ui,4,Q),ge.ly=Yi(ge.ly,Ji,4,Q),u.uLight.value.set(ge.lx,ge.ly),u.uInk.value=ge.ink*(1+.35*we.glow),we.frame){let _t=we.frame.group,xt=Rt?0:1;we.tx=Yi(we.tx,-Ft.ny*.16,2.2,Q),we.ty=Yi(we.ty,Ft.nx*.24,2.2,Q),_t.position.set(0,Math.sin(A*.8)*.05*xt,.4+we.approach),_t.rotation.set((we.tx+Math.sin(A*.43)*.035)*xt,(we.ty+Math.sin(A*.31)*.06)*xt+we.turn,we.spin),we.frame.sway(A,xt*(1+we.load*1.5))}if(i.render(a,s),ge.intro>.6&&se<3){if(Y)xe(X);else if(X>te&&(z+=Math.min(q,.25),E++,E>=30)){let _t=z/E;E=0,z=0,_t>D[se]&&ae(X)}}}function ae(X){let q=i.getContext();Y={fence:q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0),since:X,waited:0,samples:[]},q.flush()}function xe(X){let q=i.getContext();if(Y.fence){if(q.getSyncParameter(Y.fence,q.SYNC_STATUS)!==q.SIGNALED){X-Y.since>1e3&&++Y.waited>=2&&(q.deleteSync(Y.fence),Y=null,K());return}q.deleteSync(Y.fence),Y.fence=null}let Q=performance.now();if(q.readPixels(0,0,1,1,q.RGBA,q.UNSIGNED_BYTE,_e),Y.samples.push(performance.now()-Q),Y.samples.length===3){let ne=Y.samples.sort((he,Ue)=>he-Ue)[1],ue=ie[se];Y=null,ne>ue*2||ne>ue&&j?K():ne>ue?j=!0:(j=!1,te=X+15e3)}}Re();let $=0;return addEventListener("resize",()=>{clearTimeout($),$=setTimeout(Re,120)}),new ResizeObserver(()=>{clearTimeout($),$=setTimeout(Re,120)}).observe(Et("main")),document.fonts.ready.then(G),document.addEventListener("visibilitychange",()=>{let X=!document.hidden;X&&!Me&&!Le?(Me=!0,Te=performance.now(),requestAnimationFrame(me)):X||(Me=!1)}),e.addEventListener("webglcontextlost",X=>{X.preventDefault(),Me=!1,document.documentElement.classList.replace("webgl","no-webgl")}),requestAnimationFrame(me),{batik:M,firstFrame:()=>new Promise(X=>requestAnimationFrame(()=>requestAnimationFrame(X))),warm(){let X;ze.prewarm(!0);try{X=i.extensions.has("KHR_parallel_shader_compile")?i.compileAsync(a,s):Promise.resolve(i.compile(a,s))}catch{X=Promise.resolve()}return Promise.race([X.catch(()=>{}),Lo(3e3)]).then(()=>{try{i.initTexture(g)}catch{}ze.prewarm(!1)})},hold(){Le=!0,Me=!1},showGate(){if(!(!we.on||we.shown)){if(we.shown=!0,Qe(),Rt){we.grow=1,we.frame.grow(1);return}ht.to(we,{grow:1,duration:we.loading?.8:2.4,ease:"power2.inOut",onUpdate:()=>we.frame&&we.frame.grow(we.grow)})}},gateLoad(X){we.loading=!0,!Rt&&(ht.to(we,{load:1,duration:X,ease:"none"}),ht.to(we,{approach:1.3,spin:.16,turn:.38,duration:X,ease:"power1.in"}))},gatePass(){we.on=!1;let X=()=>{we.frame&&(we.frame.dispose(),we.frame=null)};if(Rt||!we.frame){X(),ge.gate=0,we.glow=0;return}ht.to(we,{approach:9.6,spin:.55,turn:0,duration:.85,ease:"power3.in",onComplete:X}),ht.to(ge,{gate:0,duration:1.5,ease:"power2.inOut"}),ht.to(we,{glow:0,duration:1.5,ease:"power2.inOut"})},go(){Le=!1,!Me&&!document.hidden&&(Me=!0,Te=performance.now(),requestAnimationFrame(me))},intro(){if(Rt){ge.intro=1,ge.name=1;return}ht.to(ge,{intro:1,duration:1.9,ease:"elastic.out(1, 0.55)",delay:.1}),ht.to(ge,{name:1,duration:1.3,ease:"power2.out",delay:.2})}}}function Hb(){let e=new Set,t=new IntersectionObserver(a=>a.forEach(s=>s.isIntersecting?e.add(s.target):e.delete(s.target)),{rootMargin:"80px"});ji(".glass").forEach(a=>t.observe(a));let i=0,r=()=>{i=0;for(let a of e){let s=a.getBoundingClientRect(),o=Math.max(s.left-Ft.x,0,Ft.x-s.right),l=Math.max(s.top-Ft.y,0,Ft.y-s.bottom);a.style.setProperty("--mx",`${(Ft.x-s.left).toFixed(1)}px`),a.style.setProperty("--my",`${(Ft.y-s.top).toFixed(1)}px`),a.style.setProperty("--rim",cr(1-Math.hypot(o,l)/150,0,1).toFixed(3))}},n=()=>{i||(i=requestAnimationFrame(r))};addEventListener("pointermove",n,{passive:!0}),addEventListener("scroll",n,{passive:!0})}function Gb(){if(Rt)return;let e=170,t=13,i=new Map,r=!1,n=0,a=o=>{let l=Math.min((o-n)/1e3,.032);n=o;let u=!1;for(let[h,d]of i){let c=0;for(let p of["rx","ry","sc"]){let m=p==="sc"?100:1;d.v[p]+=((d.t[p]-d.p[p])*e-d.v[p]*t)*l,d.p[p]+=d.v[p]*l,c+=(Math.abs(d.t[p]-d.p[p])+Math.abs(d.v[p])*.05)*m}c>.02?(u=!0,h.style.setProperty("--tilt",`perspective(900px) rotateX(${d.p.rx.toFixed(3)}deg) rotateY(${d.p.ry.toFixed(3)}deg)`),h.style.setProperty("--sc",d.p.sc.toFixed(4))):(i.delete(h),d.t.rx===0&&d.t.ry===0&&d.t.sc===1&&(Object.assign(d.p,d.t),Object.assign(d.v,{rx:0,ry:0,sc:0}),h.style.removeProperty("--tilt"),h.style.removeProperty("--sc")))}u?requestAnimationFrame(a):r=!1},s=(o,l)=>{i.set(o,l),r||(r=!0,n=performance.now(),requestAnimationFrame(a))};ji("[data-spring]").forEach(o=>{let l=o.matches(".card, .tl-item, .fact, .cert"),u=l?4.5:0,h=l?1.014:1.045,d={p:{rx:0,ry:0,sc:1},v:{rx:0,ry:0,sc:0},t:{rx:0,ry:0,sc:1},down:!1};o.addEventListener("pointermove",c=>{if(c.pointerType==="touch")return;let p=o.getBoundingClientRect();d.t.ry=((c.clientX-p.left)/p.width-.5)*u*2,d.t.rx=-((c.clientY-p.top)/p.height-.5)*u*2,d.t.sc=d.down?.97:h,s(o,d)}),o.addEventListener("pointerleave",()=>{d.t.rx=0,d.t.ry=0,d.t.sc=1,d.down=!1,s(o,d)}),o.addEventListener("pointerdown",()=>{d.down=!0,d.t.sc=.965,s(o,d)}),o.addEventListener("pointerup",c=>{d.down=!1,d.t.sc=c.pointerType==="touch"?1:h,s(o,d)}),o.addEventListener("pointercancel",()=>{d.down=!1,d.t.sc=1,d.t.rx=0,d.t.ry=0,s(o,d)})})}var zt=(()=>{let e=null,t=null,i=!0,r=!1,n=null,a=!1;try{i=localStorage.getItem("nap-sound")!=="off"}catch{}let s=()=>{try{localStorage.setItem("nap-sound",i?"on":"off")}catch{}},o=()=>{if(!e){let p=window.AudioContext||window.webkitAudioContext;if(!p)return null;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}e=new p,t=e.createGain(),t.gain.value=.5,t.connect(e.createDynamicsCompressor()).connect(e.destination);let m=e.createBuffer(1,1,e.sampleRate),x=e.createBufferSource();x.buffer=m,x.connect(e.destination),x.start(0)}return e.state!=="running"&&e.resume().catch(()=>{}),e},l=()=>{r=!0,i&&o()};for(let p of["pointerdown","touchend","click","keydown"])addEventListener(p,l,{passive:!0});let u=(p,m,x,_,f="sine",S=0)=>{if(!i||!r)return;let M=o();if(!M)return;let v=M.currentTime+S,y=M.createOscillator(),b=M.createGain();y.type=f,y.frequency.setValueAtTime(p,v),y.frequency.exponentialRampToValueAtTime(m,v+x),b.gain.setValueAtTime(1e-4,v),b.gain.exponentialRampToValueAtTime(_,v+.012),b.gain.exponentialRampToValueAtTime(1e-4,v+x),y.connect(b).connect(t),y.start(v),y.stop(v+x+.05)},h=()=>`backsound.mp3?v=${document.getElementById("scene")?.dataset.v||""}`,d=()=>{if(!n){let p=o();p&&(n=Ub(p,p.destination,h()))}return n};document.addEventListener("visibilitychange",()=>{n&&(document.hidden?n.stop(.3):a&&i&&(e.state!=="running"&&e.resume().catch(()=>{}),n.start(e.currentTime+.25,2)))});let c={get on(){return i},music(p,m){if(a=p,p&&i&&!document.hidden){let x=d();x&&x.start(m??e.currentTime+.3,m?3:2.5)}else n&&n.stop(.7)},get live(){return i&&r},enable(){i=!0,r=!0,s();let p=o(),m=d();return m&&m.load().catch(()=>{}),p},mute(){i=!1,s()},context(){return i?o():null},toggle(){return i=!i,s(),i&&(r=!0,c.pop()),c.music(i),i},bubble(p=1,m=.3,x=0){u(420*p,980*p,.13,m,"sine",x)},pop(){u(760,1500,.07,.28),u(380,620,.09,.11)},drop(){u(880,360,.17,.24)},lift(){u(300,540,.1,.15,"triangle")},ting(){u(1568,1560,.6,.11),u(2349,2340,.45,.06,"sine",.01),u(3136,3120,.3,.03,"sine",.02)},bubbles(p=5){for(let m=0;m<p;m++)c.bubble(.8+Math.random()*1.3,.05+Math.random()*.07,m*.075+Math.random()*.05)},open(){c.bubble(.75,.28),c.ting()}};return c})(),Wb=(()=>{let e=16,t=performance.now();return ht.ticker.add(()=>{let i=performance.now();e+=(Math.min(i-t,2e3)-e)*.3,t=i}),()=>e})();function tg(e,{items:t,onPick:i}){let r=Et(".liquid-track",e),n=Et(".lens",e),a={x:0,y:0,w:0,h:0,sx:1,sy:1,o:0,lift:0},s=new Map,o=null,l=null,u=!1,h=y=>({x:y.offsetLeft,y:y.offsetTop,w:y.offsetWidth,h:y.offsetHeight}),d=()=>{let y=r.offsetLeft-r.scrollLeft+a.x,b=r.offsetTop+a.y,g=cr(a.lift,0,1);n.style.width=`${a.w.toFixed(2)}px`,n.style.height=`${a.h.toFixed(2)}px`,n.style.opacity=cr(a.o,0,1).toFixed(3),n.style.transform=`translate3d(${y.toFixed(2)}px, ${b.toFixed(2)}px, 0) scale(${a.sx.toFixed(4)}, ${a.sy.toFixed(4)})`,n.style.setProperty("--lift",g.toFixed(3));let T=a.w*a.sx/2,R=a.x+a.w/2;for(let N of t){let L=N.offsetLeft,k=N.offsetWidth||1,G=Math.max(0,Math.min(R+T,L+k)-Math.max(R-T,L))/k,C=1+.13*g*G*a.o;Math.abs((s.get(N)||1)-C)>8e-4&&(N.style.transform=C>1.0008?`scale(${C.toFixed(4)})`:"",s.set(N,C))}},c=(y,b)=>{if(o=y,ht.killTweensOf(a),!y){ht.to(a,{o:0,lift:0,duration:.25,onUpdate:d});return}let g=h(y);if(b||Rt||Wb()>120){Object.assign(a,g,{sx:1,sy:1,o:1,lift:0}),d();return}if(a.o<.05){Object.assign(a,g,{sx:.6,sy:.6,lift:0}),ht.to(a,{sx:1,sy:1,o:1,duration:.75,ease:"elastic.out(1, 0.5)",onUpdate:d});return}ht.timeline({onUpdate:d}).to(a,{sy:1.2,sx:1.08,lift:.85,duration:.15,ease:"power2.out"}).to(a,{x:g.x,y:g.y,w:g.w,h:g.h,o:1,duration:.5,ease:"power3.inOut"},.04).to(a,{sx:1.22,duration:.2,ease:"sine.out"},.1).to(a,{sx:1,sy:1,lift:0,duration:.85,ease:"elastic.out(1, 0.45)"},.48)},p=y=>y-r.getBoundingClientRect().left+r.scrollLeft,m=y=>y.offsetLeft+y.offsetWidth/2,x=y=>t.reduce((b,g)=>{let T=Math.abs(m(g)-y);return!b||T<b.d?{el:g,d:T}:b},null).el,_=y=>t.forEach(b=>b.classList.toggle("under",b===y)),f=()=>r.scrollWidth<=r.clientWidth+1,S=y=>{_(null),zt.pop(),i(y),c(y)};e.addEventListener("dragstart",y=>y.preventDefault()),e.addEventListener("pointerdown",y=>{y.button||Rt||!y.target.closest(".liquid-track")||y.pointerType==="touch"&&!f()||(l={id:y.pointerId,x0:y.clientX,last:y.clientX,moved:!1,under:null})}),addEventListener("pointermove",y=>{if(!l||y.pointerId!==l.id)return;if(!l.moved){if(Math.abs(y.clientX-l.x0)<7)return;l.moved=!0,zt.lift(),ht.killTweensOf(a),a.o<.05&&Object.assign(a,h(x(p(y.clientX)))),ht.to(a,{o:1,sy:1.24,lift:1,duration:.3,ease:"back.out(2.2)",onUpdate:d})}let b=cr(p(y.clientX),m(t[0]),m(t[t.length-1])),g=x(b);g!==l.under&&(l.under=g,_(g),ht.to(a,{w:g.offsetWidth,h:g.offsetHeight,y:g.offsetTop,duration:.25,ease:"power2.out",overwrite:"auto",onUpdate:d}),zt.live&&zt.bubble(1.5,.06)),a.sx=1.1+cr(Math.abs(y.clientX-l.last)*.012,0,.24),l.last=y.clientX,a.x=b-a.w/2,d(),ht.to(a,{sx:1.1,duration:.35,ease:"power2.out",overwrite:"auto",onUpdate:d})},{passive:!0});let M=y=>{if(!l||y.pointerId!==l.id)return;let b=l;l=null,b.moved&&(u=!0,setTimeout(()=>{u=!1},0),S(b.under||x(p(y.clientX))))};addEventListener("pointerup",M),addEventListener("pointercancel",M),e.addEventListener("click",y=>{u&&(y.preventDefault(),y.stopPropagation())},!0);let v=()=>{let y=f();r.classList.toggle("is-fit",y),r.style.touchAction=y?"pan-y":"pan-x pan-y",o&&!l&&c(o,!0)};return r.addEventListener("scroll",d,{passive:!0}),addEventListener("resize",v),document.fonts.ready.then(v),window.ResizeObserver&&new ResizeObserver(v).observe(r),v(),{moveTo:c,pick:S,reveal(y){f()||r.scrollTo({left:y.offsetLeft-r.clientWidth/2+y.offsetWidth/2,behavior:Rt?"auto":"smooth"})}}}function Xb(){let e=Et("#nav"),t=ji(".liquid-track a",e),i=new Map(t.map(f=>[f.getAttribute("href").slice(1),f])),r={toolkit:"credentials"},n=ji("main section[id]"),a=null,s=null,o=0,l=0;function u(f){a=f,t.forEach(S=>f&&S===i.get(f)?S.setAttribute("aria-current","true"):S.removeAttribute("aria-current"))}let h=()=>{let f=innerHeight*.45,S=null;for(let M of n)M.getBoundingClientRect().top<=f&&(S=M.id);return innerHeight+scrollY>=document.documentElement.scrollHeight-4&&(S=n[n.length-1].id),!S||S==="top"?null:r[S]||S},d=tg(e,{items:t,onPick:f=>{c(f),Et(f.getAttribute("href")).scrollIntoView({behavior:Rt?"auto":"smooth"})}});function c(f){let S=f.getAttribute("href").slice(1);s=S,o=performance.now()+2500,u(S)}let p=()=>{l=0;let f=h();if(s)if(f===s||performance.now()>o)s=null;else return;if(f===a)return;u(f);let S=f&&i.get(f);d.moveTo(S||null),S&&d.reveal(S)},m=()=>{l||(l=requestAnimationFrame(p))};addEventListener("scroll",m,{passive:!0}),addEventListener("resize",m),t.forEach(f=>f.addEventListener("click",()=>{zt.pop(),c(f),d.moveTo(f)})),p();let x=Et("#sound"),_=()=>{x.setAttribute("aria-pressed",String(zt.on)),x.title=zt.on?"Sound on":"Sound off"};x.addEventListener("click",()=>{zt.toggle(),_()}),_()}function qb(){ji(".tabs").forEach(e=>{let t=ji(".tab",e),i=(a,s)=>{t.forEach(o=>{let l=o===a;o.setAttribute("aria-selected",String(l)),o.tabIndex=l?0:-1;let u=document.getElementById(o.getAttribute("aria-controls"));u.hidden=!l,l&&!Rt&&ht.fromTo(ji("[data-spring], [data-tabitem]",u),{opacity:0,"--ty":"30px"},{opacity:1,"--ty":"0px",duration:.75,ease:"back.out(1.7)",stagger:.06,overwrite:!0})}),s&&a.focus(),mt.refresh()},r=tg(e,{items:t,onPick:a=>i(a)});t.forEach((a,s)=>{a.addEventListener("click",()=>{a.getAttribute("aria-selected")!=="true"&&(zt.pop(),i(a),r.moveTo(a),r.reveal(a))}),a.addEventListener("keydown",o=>{let l=o.key==="ArrowRight"?1:o.key==="ArrowLeft"?-1:0;if(l){o.preventDefault();let u=t[(s+l+t.length)%t.length];zt.pop(),i(u,!0),r.moveTo(u),r.reveal(u)}})});let n=()=>r.moveTo(t.find(a=>a.getAttribute("aria-selected")==="true"),!0);n(),document.fonts.ready.then(n)})}function jb(){let e=new Set(["research","credentials"]),t=new Map,i=new IntersectionObserver(r=>r.forEach(n=>{if(!n.isIntersecting||!zt.live)return;let a=performance.now();a-(t.get(n.target.id)||-1e9)<9e3||(t.set(n.target.id,a),zt.bubbles(e.has(n.target.id)?6:3))}),{rootMargin:"-35% 0px -45% 0px"});ji("main section[id]:not(#top)").forEach(r=>i.observe(r))}function Yb(){let e=Et("#sheet"),t=Et("#sheet-body"),i=Et("#lightbox"),r=null,n=s=>{r=document.activeElement,s.showModal(),s===e?zt.open():zt.ting(),Rt||ht.fromTo(s,{opacity:0,scale:.9,y:40},{opacity:1,scale:1,y:0,duration:.85,ease:"elastic.out(1, 0.72)",overwrite:!0})},a=s=>{zt.drop();let o=()=>{s.close(),ht.set(s,{clearProps:"opacity,transform"}),r&&r.focus&&r.focus({preventScroll:!0})};Rt?o():ht.to(s,{opacity:0,scale:.96,y:14,duration:.2,ease:"power2.in",overwrite:!0,onComplete:o})};ji(".card").forEach(s=>s.addEventListener("click",()=>{let o=document.getElementById(`tpl-${s.dataset.card}`);if(!o)return;t.replaceChildren(o.content.cloneNode(!0));let l=Et(".sheet-title",t);l&&(l.id="sheet-heading"),n(e),t.scrollTop=0})),ji(".cert").forEach(s=>s.addEventListener("click",()=>{let o=Et("#lb-img");o.src=s.dataset.zoom,o.width=+s.dataset.w,o.height=+s.dataset.h,o.alt=`Certificate: ${s.dataset.title}`,i.style.setProperty("--ar",(+s.dataset.w/+s.dataset.h).toFixed(4)),Et("#lb-title").textContent=s.dataset.title,Et("#lb-meta").textContent=s.dataset.meta,n(i)}));for(let s of[e,i])s.addEventListener("click",o=>{(o.target===s||o.target.closest("[data-close]"))&&a(s)}),s.addEventListener("cancel",o=>{o.preventDefault(),a(s)})}function Jb(){let e=Et("#lanyard"),t=Et(".lanyard-swing",e),i=Et(".idcard",e),r={a:0,w:0,drag:!1,ry:0,on:!0};if(Rt)return{drop(){}};let n=()=>{let u=e.getBoundingClientRect();return{x:u.left+u.width/2,y:u.top}},a=null,s=performance.now();i.addEventListener("pointerdown",u=>{u.pointerType==="touch"||u.target.closest("a")||(r.drag=!0,i.setPointerCapture(u.pointerId))}),i.addEventListener("pointermove",u=>{if(!r.drag)return;let h=n(),d=cr(-Math.atan2(u.clientX-h.x,Math.max(u.clientY-h.y,60))*180/Math.PI,-48,48);r.w=(d-r.a)*10,r.a=_s(r.a,d,.5)});let o=()=>{r.drag&&zt.bubble(1.2,.2),r.drag=!1};i.addEventListener("pointerup",o),i.addEventListener("pointercancel",o),addEventListener("pointermove",u=>{if(a!=null&&!r.drag&&u.pointerType!=="touch"){let h=e.getBoundingClientRect();u.clientX>h.left-150&&u.clientX<h.right+150&&u.clientY>h.top-40&&u.clientY<h.bottom+150&&(r.w-=cr((u.clientX-a)*.3,-12,12))}a=u.clientX},{passive:!0}),new IntersectionObserver(([u])=>{r.on=u.isIntersecting,r.on&&(s=performance.now(),requestAnimationFrame(l))}).observe(e);function l(u){if(!r.on)return;requestAnimationFrame(l);let h=Math.min((u-s)/1e3,.032);s=u,r.drag||(r.w+=cr(Yr.v*.004,-40,40)*h,r.w+=(-46*r.a-3.3*r.w)*h,r.a+=r.w*h),t.style.transform=`rotate(${r.a.toFixed(3)}deg)`,r.ry=Yi(r.ry,cr(Ft.nx,-1,1)*8-r.w*.1,6,h),i.style.transform=`rotateY(${r.ry.toFixed(2)}deg) rotateX(${(-Ft.ny*4).toFixed(2)}deg)`,i.style.setProperty("--hx",`${(50+r.ry*4+r.a*1.5).toFixed(1)}%`)}return{drop(){r.a=-24,r.w=0,ht.fromTo(e,{y:-560},{y:0,duration:1.05,ease:"power3.out",delay:.15})}}}function Kb(){Rt||ji("[data-reveal]").forEach(e=>{ht.fromTo(e,{opacity:0,"--ty":"44px"},{opacity:1,"--ty":"0px",duration:.95,ease:"back.out(1.6)",scrollTrigger:{trigger:e,start:"top 90%",once:!0}})})}async function Zb(){window.__napBooted=!0;let e=document.documentElement,t=Et("#loader"),i=[Et("#nav"),Et("main"),Et(".foot"),Et(".skip")].filter(Boolean),r=null,n={drop(){}};try{Hb(),Gb(),Xb(),qb(),Yb(),jb(),ji(".btn").forEach(y=>y.addEventListener("pointerdown",()=>zt.bubble(1.1,.16))),n=Jb()}catch(y){console.error(y)}let a=(async()=>{try{await Promise.race([Promise.all([document.fonts.load("560 96px Fraunces"),document.fonts.load("400 16px Geist")]),Lo(2500)]);try{r=Vb(),e.classList.add("webgl")}catch(b){console.warn("WebGL is not available, using the static backdrop.",b),e.classList.add("no-webgl")}let y=Et(".id-photo");await Promise.race([y.decode?y.decode().catch(()=>{}):Promise.resolve(),Lo(2500)]),r&&(await Promise.race([r.batik,Lo(4e3)]),await r.firstFrame(),await r.warm(),t&&t.isConnected&&(r.showGate(),e.classList.add("gate3d")))}catch(y){console.error(y)}})(),s=()=>{e.classList.remove("gated"),i.forEach(b=>{b.inert=!1}),r&&(r.go(),r.intro()),n.drop(),Kb(),Rt||(ht.fromTo(".hero-lede, .hero-open",{opacity:0,y:26},{opacity:1,y:0,duration:.9,ease:"back.out(1.5)",stagger:.12,delay:.3}),ht.fromTo(".hero-cta > *",{opacity:0,"--ty":"26px"},{opacity:1,"--ty":"0px",duration:.9,ease:"back.out(1.7)",stagger:.09,delay:.4}),ht.fromTo("#nav",{y:-90},{y:0,duration:1.1,ease:"elastic.out(1, 0.7)",delay:.25})),mt.refresh();let y=location.hash.length>1&&document.getElementById(decodeURIComponent(location.hash.slice(1)));y&&setTimeout(()=>y.scrollIntoView({behavior:"auto"}),60)};if(!t||!t.isConnected){await a,s();return}i.forEach(y=>{y.inert=!0});let o=Et("#enter-sound"),l=Et("#enter-quiet"),u=await new Promise(y=>{o.addEventListener("click",()=>{zt.enable(),y(!0)},{once:!0}),l.addEventListener("click",()=>{zt.mute(),y(!1)},{once:!0})}),h=Et("#sound");h&&(h.setAttribute("aria-pressed",String(zt.on)),h.title=zt.on?"Sound on":"Sound off");let d=Et("#gate"),c=Et("#count"),p=Et("#loader-count"),m=Et("#loader-fill"),x=Rt?1.2:u?3.4:1.6,_=performance.now();a.then(()=>{r&&r.gateLoad(Math.max(.4,x-(performance.now()-_)/1e3))});let f=null;if(u)try{let y=zt.context();y&&(f=Nb(y,y.destination,x))}catch(y){console.warn(y)}ht.to(d,{opacity:0,y:-12,duration:Rt?0:.25,onComplete:()=>{d.hidden=!0}}),c.hidden=!1,Rt||ht.fromTo(c,{opacity:0,scale:.94},{opacity:1,scale:1,duration:.45,ease:"back.out(1.6)"});let S={p:0},M=()=>{p.textContent=Math.round(S.p),m.style.transform=`scaleX(${S.p/100})`};if(ht.ticker.lagSmoothing(0),await Promise.all([ht.to(S,{p:99,duration:x,ease:u?"power1.in":"power1.inOut",onUpdate:M}),a]),S.p=100,M(),ht.ticker.lagSmoothing(500,33),f){let y=f.hit();zt.music(!0,y+2.6),await Lo(60)}let v=document.createElement("div");v.className="flash",v.setAttribute("aria-hidden","true"),document.body.appendChild(v),ht.timeline({onComplete:()=>v.remove()}).to(v,{opacity:Rt?0:.85,duration:.07}).to(v,{opacity:0,duration:.7,ease:"power2.out"}),Rt||ht.to(".loader-num",{scale:1.14,duration:.3,ease:"power2.out"}),Rt||ht.to(c,{opacity:0,duration:.24,delay:.08,ease:"power2.in"}),ht.to(t,{opacity:0,duration:Rt?0:.65,delay:.05,ease:"power2.inOut",onComplete:()=>t.remove()}),r&&r.gatePass(),Rt?s():setTimeout(s,320)}Zb();
