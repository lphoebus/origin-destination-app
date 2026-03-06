import{r3 as kt,yd as Nt,dY as Wt,dy as Yt,tS as Xt,cs as wt,dR as Kt,ye as Qt,yf as Zt,yg as Jt,oN as eo,dB as bt,fA as to,yh as oo,yi as ao,yj as io,xQ as so,xR as no,xS as ro,k1 as lo,ha as oe,dx as F,gb as W,dW as L,e5 as k,gj as G,gi as q,dU as ae,h8 as re,dA as Je,dz as yt,dS as We,iv as Ye,mB as co,l1 as Xe,tO as uo,jW as fo,jC as po,aH as ho,kJ as et,b8 as U,ke as tt,jy as Pt,e3 as $t,lg as Ve,mA as St,dD as zt,gc as be,hb as Ot,fb as go,hx as vo,h6 as ot,ju as mo,kq as xo,e7 as wo}from"./index-C2O4leJh.js";import{u as bo}from"./meshVertexSpaceUtils-Daw-CDF7.js";import{t as Ke}from"./projectVectorToVector-CDRQ8jP3.js";import{o as yo,x as Po}from"./hydratedFeatures-CjFp6yjX.js";import{r as B,t as at,n as Y}from"./vec3f32-WCVSSNPR.js";import{a6 as $o,n as X,m as K,a7 as it,a8 as At,D as So,a9 as zo,aa as Qe,r as Be,ab as Me,ac as Oo,ad as Ao,ae as Ct,af as Mt,ag as Co,K as Mo,ah as Dt,i as Do,ai as Vo,G as jo,H as To,M as Fo,aj as st,L as Fe,b as nt,ak as Ro,a2 as te,al as _o,a as Eo,j as Uo,k as Ho,W as Io,V as Bo,X as Vt,Y as Go,x as H,A as Lo,am as Re,t as qo,an as ko,ao as No,ap as Wo,aq as Yo,ar as Xo,as as Ko,at as Qo,au as rt,av as Zo,aw as lt,ax as ct,ay as Jo,az as ea}from"./OutputColorHighlightOID.glsl-HTlImG6z.js";import{A as ta,U as jt}from"./Indices-CNp8D7HX.js";import{j as oa,U as aa,K as ia}from"./plane-BVGFCj0v.js";import{k as sa}from"./sphere-Bc7NdNeT.js";import{t as M}from"./orientedBoundingBox-vSJIIHRq.js";import{s as Tt,g as na}from"./BufferView--3IHe6V_.js";import{Q as Ft,t as ra}from"./InterleavedLayout-hazgdkoh.js";import{T as la,d as ca,c as ua}from"./renderState-CKc66y4x.js";import{t as fa}from"./VertexAttributeLocations-BfZbt_DV.js";import{t as $,n as I}from"./glsl-B5bJgrnA.js";import{s as pa}from"./ShaderBuilder-BOY6c-pV.js";function vi(o,e){if(o.type==="point")return ee(o,e,!1);if(yo(o))switch(o.type){case"extent":return ee(o.center,e,!1);case"polygon":return ee(ft(o),e,!1);case"polyline":return ee(ut(o),e,!0);case"mesh":return ee(bo(o.vertexSpace,o.spatialReference)??o.extent.center,e,!1);case"multipoint":return}else switch(o.type){case"extent":return ee(da(o),e,!0);case"polygon":return ee(ft(o),e,!0);case"polyline":return ee(ut(o),e,!0);case"multipoint":return}}function ut(o){const e=o.paths[0];if(!e||e.length===0)return null;const a=Zt(e,Jt(e)/2);return Ke(a[0],a[1],a[2],o.spatialReference)}function da(o){return Ke(.5*(o.xmax+o.xmin),.5*(o.ymax+o.ymin),o.zmin!=null&&o.zmax!=null&&isFinite(o.zmin)&&isFinite(o.zmax)?.5*(o.zmax+o.zmin):void 0,o.spatialReference)}function ft(o){const e=o.rings[0];if(!e||e.length===0)return null;const a=eo(o.rings,!!o.hasZ);return Ke(a[0],a[1],a[2],o.spatialReference)}function ee(o,e,a){const t=a?o:Po(o);return e&&o?Qt(o,t,e)?t:null:t}function mi(o,e,a,t=0){if(o){e||(e=wt());const i=o;let n=.5*i.width*(a-1),s=.5*i.height*(a-1);return i.width<1e-7*i.height?n+=s/20:i.height<1e-7*i.width&&(s+=n/20),Kt(e,i.xmin-n-t,i.ymin-s-t,i.xmax+n+t,i.ymax+s+t),e}return null}function xi(o,e,a=null){const t=Nt(Xt);return o!=null&&(t[0]=o[0],t[1]=o[1],t[2]=o[2],o.length>3&&(t[3]=o[3])),e!=null&&(t[3]=e),a&&Wt(t,t,a),t}function wi(o=kt,e,a,t=1){const i=new Array(3);if(e==null||a==null)i[0]=1,i[1]=1,i[2]=1;else{let n,s=0;for(let r=2;r>=0;r--){const c=o[r],l=c!=null,u=r===0&&!n&&!l,f=a[r];let h;c==="symbol-value"||u?h=f!==0?e[r]/f:1:l&&c!=="proportional"&&isFinite(c)&&(h=f!==0?c/f:1),h!=null&&(i[r]=h,n=h,s=Math.max(s,Math.abs(h)))}for(let r=2;r>=0;r--)i[r]==null?i[r]=n:i[r]===0&&(i[r]=.001*s)}for(let n=2;n>=0;n--)i[n]/=t;return Yt(i)}function ha(o){return o.isPrimitive!=null}function bi(o){return ga(ha(o)?[o.width,o.depth,o.height]:o)?null:"Symbol sizes may not be negative values"}function ga(o){const e=a=>a==null||a>=0;return Array.isArray(o)?o.every(e):e(o)}function yi(o,e,a,t=bt()){return o&&so(t,t,-o/180*Math.PI),e&&no(t,t,e/180*Math.PI),a&&ro(t,t,a/180*Math.PI),t}function Pi(o,e,a){if(a.minDemResolution!=null)return a.minDemResolution;const t=to(e),i=oo(o)*t,n=ao(o)*t,s=io(o)*(e.isGeographic?1:t);return i===0&&n===0&&s===0?a.minDemResolutionForPoints:.01*Math.max(i,n,s)}function pt(o,e){const a=o[e],t=o[e+1],i=o[e+2];return Math.sqrt(a*a+t*t+i*i)}function va(o,e){const a=o[e],t=o[e+1],i=o[e+2],n=1/Math.sqrt(a*a+t*t+i*i);o[e]*=n,o[e+1]*=n,o[e+2]*=n}function dt(o,e,a){o[e]*=a,o[e+1]*=a,o[e+2]*=a}function ma(o,e,a,t,i,n=e){(i=i||o)[n]=o[e]+a[t],i[n+1]=o[e+1]+a[t+1],i[n+2]=o[e+2]+a[t+2]}function xa(){return ht??(ht=wa()),ht}function wa(){const a=new M([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new $o([["uv0",a]])}let ht=null;const _e=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],ba=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],ya=[0,0,1,0,1,1,0,1],Pa=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Rt=new Array(36);for(let o=0;o<6;o++)for(let e=0;e<6;e++)Rt[6*o+e]=o;const se=new Array(36);for(let o=0;o<6;o++)se[6*o]=0,se[6*o+1]=1,se[6*o+2]=2,se[6*o+3]=2,se[6*o+4]=3,se[6*o+5]=0;function $i(o,e){Array.isArray(e)||(e=[e,e,e]);const a=new Array(24);for(let t=0;t<8;t++)a[3*t]=_e[t][0]*e[0],a[3*t+1]=_e[t][1]*e[1],a[3*t+2]=_e[t][2]*e[2];return new K(o,[["position",new M(a,Pa,3,!0)],["normal",new M(ba,Rt,3)],["uv0",new M(ya,se,2)]])}const Ee=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],$a=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Sa=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],za=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Si(o,e){Array.isArray(e)||(e=[e,e,e]);const a=new Array(18);for(let t=0;t<6;t++)a[3*t]=Ee[t][0]*e[0],a[3*t+1]=Ee[t][1]*e[1],a[3*t+2]=Ee[t][2]*e[2];return new K(o,[["position",new M(a,Sa,3,!0)],["normal",new M($a,za,3)]])}const $e=B(-.5,0,-.5),Se=B(.5,0,-.5),ze=B(0,0,.5),Oe=B(0,.5,0),ce=Y(),ue=Y(),pe=Y(),de=Y(),he=Y();W(ce,$e,Oe),W(ue,$e,Se),ae(pe,ce,ue),L(pe,pe),W(ce,Se,Oe),W(ue,Se,ze),ae(de,ce,ue),L(de,de),W(ce,ze,Oe),W(ue,ze,$e),ae(he,ce,ue),L(he,he);const Ue=[$e,Se,ze,Oe],Oa=[0,-1,0,pe[0],pe[1],pe[2],de[0],de[1],de[2],he[0],he[1],he[2]],Aa=[0,1,2,3,1,0,3,2,1,3,0,2],Ca=[0,0,0,1,1,1,2,2,2,3,3,3];function zi(o,e){Array.isArray(e)||(e=[e,e,e]);const a=new Array(12);for(let t=0;t<4;t++)a[3*t]=Ue[t][0]*e[0],a[3*t+1]=Ue[t][1]*e[1],a[3*t+2]=Ue[t][2]*e[2];return new K(o,[["position",new M(a,Aa,3,!0)],["normal",new M(Oa,Ca,3)]])}function Oi(o,e,a,t,i={uv:!0}){const n=-Math.PI,s=2*Math.PI,r=-Math.PI/2,c=Math.PI,l=Math.max(3,Math.floor(a)),u=Math.max(2,Math.floor(t)),f=(l+1)*(u+1),h=X(3*f),b=X(3*f),P=X(2*f),m=[];let d=0;for(let x=0;x<=u;x++){const A=[],p=x/u,O=r+p*c,z=Math.cos(O);for(let y=0;y<=l;y++){const R=y/l,w=n+R*s,j=Math.cos(w)*z,V=Math.sin(O),Q=-Math.sin(w)*z;h[3*d]=j*e,h[3*d+1]=V*e,h[3*d+2]=Q*e,b[3*d]=j,b[3*d+1]=V,b[3*d+2]=Q,P[2*d]=R,P[2*d+1]=p,A.push(d),++d}m.push(A)}const g=new Array;for(let x=0;x<u;x++)for(let A=0;A<l;A++){const p=m[x][A],O=m[x][A+1],z=m[x+1][A+1],y=m[x+1][A];x===0?(g.push(p),g.push(z),g.push(y)):x===u-1?(g.push(p),g.push(O),g.push(z)):(g.push(p),g.push(O),g.push(z),g.push(z),g.push(y),g.push(p))}const v=[["position",new M(h,g,3,!0)],["normal",new M(b,g,3,!0)]];return i.uv&&v.push(["uv0",new M(P,g,2,!0)]),i.offset&&(v[0][0]="offset",v.push(["position",new M(Float64Array.from(i.offset),jt(g.length),3,!0)])),new K(o,v)}function Ai(o,e,a,t){const i=Ma(e,a);return new K(o,i)}function Ma(o,e,a){let t,i;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],i=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)dt(t,c,o/pt(t,c));let n={};function s(c,l){c>l&&([c,l]=[l,c]);const u=c.toString()+"."+l.toString();if(n[u])return n[u];let f=t.length;return t.length+=3,ma(t,3*c,t,3*l,t,f),dt(t,f,o/pt(t,f)),f/=3,n[u]=f,f}for(let c=0;c<e;c++){const l=i.length,u=new Array(4*l);for(let f=0;f<l;f+=3){const h=i[f],b=i[f+1],P=i[f+2],m=s(h,b),d=s(b,P),g=s(P,h),v=4*f;u[v]=h,u[v+1]=m,u[v+2]=g,u[v+3]=b,u[v+4]=d,u[v+5]=m,u[v+6]=P,u[v+7]=g,u[v+8]=d,u[v+9]=m,u[v+10]=d,u[v+11]=g}i=u,n={}}const r=it(t);for(let c=0;c<r.length;c+=3)va(r,c);return[["position",new M(it(t),i,3,!0)],["normal",new M(r,i,3,!0)]]}function Ci(o,{normal:e,position:a,color:t,rotation:i,size:n,centerOffsetAndDistance:s,uvi:r,featureAttribute:c,olidColor:l=null}={}){const u=a?Je(a):F(),f=e?Je(e):yt(0,0,1),h=t?[t[0],t[1],t[2],t.length>3?t[3]:255]:[255,255,255,255],b=n!=null&&n.length===2?n:[1,1],P=i!=null?[i]:[0],m=jt(1),d=[["position",new M(u,m,3,!0)],["normal",new M(f,m,3,!0)],["color",new M(h,m,4,!0)],["size",new M(b,m,2)],["rotation",new M(P,m,1,!0)]];if(r&&d.push(["uvi",new M(r,m,r.length)]),s!=null){const g=[s[0],s[1],s[2],s[3]];d.push(["centerOffsetAndDistance",new M(g,m,4)])}if(c){const g=[c[0],c[1],c[2],c[3]];d.push(["featureAttribute",new M(g,m,4)])}return new K(o,d,null,1,l,void 0,xa())}function Da(o,e,a,t,i=!0,n=!0){let s=0;const r=e,c=o;let l=B(0,s,0),u=B(0,s+c,0),f=B(0,-1,0),h=B(0,1,0);t&&(s=c,u=B(0,0,0),l=B(0,s,0),f=B(0,1,0),h=B(0,-1,0));const b=[u,l],P=[f,h],m=a+2,d=Math.sqrt(c*c+r*r);if(t)for(let p=a-1;p>=0;p--){const O=p*(2*Math.PI/a),z=B(Math.cos(O)*r,s,Math.sin(O)*r);b.push(z);const y=B(c*Math.cos(O)/d,-r/d,c*Math.sin(O)/d);P.push(y)}else for(let p=0;p<a;p++){const O=p*(2*Math.PI/a),z=B(Math.cos(O)*r,s,Math.sin(O)*r);b.push(z);const y=B(c*Math.cos(O)/d,r/d,c*Math.sin(O)/d);P.push(y)}const g=new Array,v=new Array;if(i){for(let p=3;p<b.length;p++)g.push(1),g.push(p-1),g.push(p),v.push(0),v.push(0),v.push(0);g.push(b.length-1),g.push(2),g.push(1),v.push(0),v.push(0),v.push(0)}if(n){for(let p=3;p<b.length;p++)g.push(p),g.push(p-1),g.push(0),v.push(p),v.push(p-1),v.push(1);g.push(0),g.push(2),g.push(b.length-1),v.push(1),v.push(2),v.push(P.length-1)}const x=X(3*m);for(let p=0;p<m;p++)x[3*p]=b[p][0],x[3*p+1]=b[p][1],x[3*p+2]=b[p][2];const A=X(3*m);for(let p=0;p<m;p++)A[3*p]=P[p][0],A[3*p+1]=P[p][1],A[3*p+2]=P[p][2];return[["position",new M(x,g,3,!0)],["normal",new M(A,v,3,!0)]]}function Mi(o,e,a,t,i,n=!0,s=!0){return new K(o,Da(e,a,t,i,n,s))}function Di(o,e,a,t,i,n,s){const r=i?at(i):B(1,0,0),c=n?at(n):B(0,0,0);s??(s=!0);const l=Y();L(l,r);const u=Y();G(u,l,Math.abs(e));const f=Y();G(f,u,-.5),q(f,f,c);const h=B(0,1,0);Math.abs(1-We(l,h))<.2&&oe(h,0,0,1);const b=Y();ae(b,l,h),L(b,b),ae(h,b,l);const P=2*t+(s?2:0),m=t+(s?2:0),d=X(3*P),g=X(3*m),v=X(2*P),x=new Array(3*t*(s?4:2)),A=new Array(3*t*(s?4:2));s&&(d[3*(P-2)]=f[0],d[3*(P-2)+1]=f[1],d[3*(P-2)+2]=f[2],v[2*(P-2)]=0,v[2*(P-2)+1]=0,d[3*(P-1)]=d[3*(P-2)]+u[0],d[3*(P-1)+1]=d[3*(P-2)+1]+u[1],d[3*(P-1)+2]=d[3*(P-2)+2]+u[2],v[2*(P-1)]=1,v[2*(P-1)+1]=1,g[3*(m-2)]=-l[0],g[3*(m-2)+1]=-l[1],g[3*(m-2)+2]=-l[2],g[3*(m-1)]=l[0],g[3*(m-1)+1]=l[1],g[3*(m-1)+2]=l[2]);const p=(w,j,V)=>{x[w]=j,A[w]=V};let O=0;const z=Y(),y=Y();for(let w=0;w<t;w++){const j=w*(2*Math.PI/t);G(z,h,Math.sin(j)),G(y,b,Math.cos(j)),q(z,z,y),g[3*w]=z[0],g[3*w+1]=z[1],g[3*w+2]=z[2],G(z,z,a),q(z,z,f),d[3*w]=z[0],d[3*w+1]=z[1],d[3*w+2]=z[2],v[2*w]=w/t,v[2*w+1]=0,d[3*(w+t)]=d[3*w]+u[0],d[3*(w+t)+1]=d[3*w+1]+u[1],d[3*(w+t)+2]=d[3*w+2]+u[2],v[2*(w+t)]=w/t,v[2*w+1]=1;const V=(w+1)%t;p(O++,w,w),p(O++,w+t,w),p(O++,V,V),p(O++,V,V),p(O++,w+t,w),p(O++,V+t,V)}if(s){for(let w=0;w<t;w++){const j=(w+1)%t;p(O++,P-2,m-2),p(O++,w,m-2),p(O++,j,m-2)}for(let w=0;w<t;w++){const j=(w+1)%t;p(O++,w+t,m-1),p(O++,P-1,m-1),p(O++,j+t,m-1)}}const R=[["position",new M(d,x,3,!0)],["normal",new M(g,A,3,!0)],["uv0",new M(v,x,2,!0)]];return new K(o,R)}function Vi(o,e,a,t,i,n){t=t||10,i=i==null||i,Tt(e.length>1);const s=[[0,0,0]],r=[],c=[];for(let l=0;l<t;l++){r.push([0,-l-1,-(l+1)%t-1]);const u=l/t*2*Math.PI;c.push([Math.cos(u)*a,Math.sin(u)*a])}return Va(o,c,e,s,r,i,n)}function Va(o,e,a,t,i,n,s=B(0,0,0)){const r=e.length,c=X(a.length*r*3+(6*t.length||0)),l=X(a.length*r*3+(t?6:0)),u=new Array,f=new Array;let h=0,b=0;const P=F(),m=F(),d=F(),g=F(),v=F(),x=F(),A=F(),p=F(),O=F(),z=F(),y=F(),R=F(),w=F(),j=oa();oe(O,0,1,0),W(m,a[1],a[0]),L(m,m),n?(q(p,a[0],s),L(d,p)):oe(d,0,0,1),gt(m,d,O,O,v,d,vt),k(g,d),k(R,v);for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(p,d,t[S][2]),q(x,x,p),q(x,x,a[0]),c[h++]=x[0],c[h++]=x[1],c[h++]=x[2];l[b++]=-m[0],l[b++]=-m[1],l[b++]=-m[2];for(let S=0;S<i.length;S++)u.push(i[S][0]>0?i[S][0]:-i[S][0]-1+t.length),u.push(i[S][1]>0?i[S][1]:-i[S][1]-1+t.length),u.push(i[S][2]>0?i[S][2]:-i[S][2]-1+t.length),f.push(0),f.push(0),f.push(0);let V=t.length;const Q=t.length-1;for(let S=0;S<a.length;S++){let me=!1;S>0&&(k(P,m),S<a.length-1?(W(m,a[S+1],a[S]),L(m,m)):me=!0,q(z,P,m),L(z,z),q(y,a[S-1],g),aa(a[S],z,j),ia(j,sa(y,P),p)?(W(p,p,a[S]),L(d,p),ae(v,z,d),L(v,v)):gt(z,g,R,O,v,d,vt),k(g,d),k(R,v)),n&&(q(p,a[S],s),L(w,p));for(let J=0;J<r;J++)if(G(x,v,e[J][0]),G(p,d,e[J][1]),q(x,x,p),L(A,x),l[b++]=A[0],l[b++]=A[1],l[b++]=A[2],q(x,x,a[S]),c[h++]=x[0],c[h++]=x[1],c[h++]=x[2],!me){const je=(J+1)%r;u.push(V+J),u.push(V+r+J),u.push(V+je),u.push(V+je),u.push(V+r+J),u.push(V+r+je);for(let Te=0;Te<6;Te++){const qt=u.length-6;f.push(u[qt+Te]-Q)}}V+=r}const le=a[a.length-1];for(let S=0;S<t.length;S++)G(x,v,t[S][0]),G(p,d,t[S][1]),q(x,x,p),q(x,x,le),c[h++]=x[0],c[h++]=x[1],c[h++]=x[2];const Z=b/3;l[b++]=m[0],l[b++]=m[1],l[b++]=m[2];const N=V-r;for(let S=0;S<i.length;S++)u.push(i[S][0]>=0?V+i[S][0]:-i[S][0]-1+N),u.push(i[S][2]>=0?V+i[S][2]:-i[S][2]-1+N),u.push(i[S][1]>=0?V+i[S][1]:-i[S][1]-1+N),f.push(Z),f.push(Z),f.push(Z);const ie=[["position",new M(c,u,3,!0)],["normal",new M(l,f,3,!0)]];return new K(o,ie)}function ji(o,e,a,t,i){const n=lo(3*e.length),s=new Array(2*(e.length-1));let r=0,c=0;for(let u=0;u<e.length;u++){for(let f=0;f<3;f++)n[r++]=e[u][f];u>0&&(s[c++]=u-1,s[c++]=u)}const l=[["position",new M(n,s,3,!0)]];if(a&&a.length===e.length&&a[0].length===3){const u=X(3*a.length);let f=0;for(let h=0;h<e.length;h++)for(let b=0;b<3;b++)u[f++]=a[h][b];l.push(["normal",new M(u,s,3,!0)])}return t&&l.push(["color",new M(t,ta(t.length/4),4)]),new K(o,l,null,2)}function Ti(o,e,a,t,i,n=0){const s=new Array(18),r=[[-a,n,i/2],[t,n,i/2],[0,e+n,i/2],[-a,n,-i/2],[t,n,-i/2],[0,e+n,-i/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)s[3*l]=r[l][0],s[3*l+1]=r[l][1],s[3*l+2]=r[l][2];return new K(o,[["position",new M(s,c,3,!0)]])}function Fi(o,e){const a=o.getMutableAttribute("position").data;for(let t=0;t<a.length;t+=3){const i=a[t],n=a[t+1],s=a[t+2];oe(fe,i,n,s),re(fe,fe,e),a[t]=fe[0],a[t+1]=fe[1],a[t+2]=fe[2]}}function Ri(o,e=o){const a=o.attributes,t=a.get("position").data,i=a.get("normal").data;if(i){const n=e.getMutableAttribute("normal").data;for(let s=0;s<i.length;s+=3){const r=i[s+1];n[s+1]=-i[s+2],n[s+2]=r}}if(t){const n=e.getMutableAttribute("position").data;for(let s=0;s<t.length;s+=3){const r=t[s+1];n[s+1]=-t[s+2],n[s+2]=r}}}function He(o,e,a,t,i){return!(Math.abs(We(e,o))>i)&&(ae(a,o,e),L(a,a),ae(t,a,o),L(t,t),!0)}function gt(o,e,a,t,i,n,s){return He(o,e,i,n,s)||He(o,a,i,n,s)||He(o,t,i,n,s)}const vt=.99619469809,fe=F();function ja(o){return o instanceof Float32Array&&o.length>=16}function Ta(o){return Array.isArray(o)&&o.length>=16}function Fa(o){return ja(o)||Ta(o)}const _t=.5;function Ra(o,e){o.include(At),o.attributes.add("position","vec3"),o.attributes.add("normal","vec3"),o.attributes.add("centerOffsetAndDistance","vec4");const a=o.vertex;So(a,e),zo(a,e),a.uniforms.add(new Qe("viewport",t=>t.camera.fullViewport),new Be("polygonOffset",t=>t.shaderPolygonOffset),new Me("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Oo(a),a.code.add($`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),a.code.add($`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?$.float(0):$`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Ao(a),e.draped||(a.uniforms.add(new Me("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),a.code.add($`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${$.float(_t)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&Ct(a),e.hasScreenSizePerspective&&Mt(a),a.code.add($`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?$`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":$`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Ze(o){o.uniforms.add(new Co("alignPixelEnabled",e=>e.alignPixelEnabled)),o.code.add($`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),o.code.add($`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function _a(o,e){const{vertex:a,fragment:t}=o;o.include(Mo,e),a.include(Ze),a.main.add($`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),t.main.add($`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Ea(o){o.vertex.uniforms.add(new Me("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Qe("viewport",e=>e.camera.fullViewport),new Dt("hudVisibilityTexture",e=>{var a;return(a=e.hudVisibility)==null?void 0:a.getTexture()})),o.vertex.include(Ze),o.vertex.code.add($`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}class Ua extends Do{constructor(e,a,t){super(e,"vec4",2,(i,n,s)=>i.setUniform4fv(e,a(n,s),t))}}function Et(o){const e=new pa,{signedDistanceFieldEnabled:a,occlusionTestEnabled:t,horizonCullingEnabled:i,pixelSnappingEnabled:n,hasScreenSizePerspective:s,debugDrawLabelBorder:r,hasVVSize:c,hasVVColor:l,hasRotation:u,occludedFragmentFade:f,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(Ra,o),e.vertex.include(Vo,o);const{occlusionPass:b,output:P,oitPass:m}=o;if(b)return e.include(_a,o),e;const{vertex:d,fragment:g}=e;e.include(At),e.include(jo,o),e.include(To,o),t&&e.include(Ea),g.include(Fo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const v=P===9,x=v&&t;x&&e.varyings.add("voccluded","float"),d.uniforms.add(new Qe("viewport",y=>y.camera.fullViewport),new st("screenOffset",(y,R)=>Xe(Ae,2*y.screenOffset[0]*R.camera.pixelRatio,2*y.screenOffset[1]*R.camera.pixelRatio)),new st("anchorPosition",y=>ve(y)),new Fe("materialColor",y=>y.color),new Be("materialRotation",y=>y.rotation),new nt("tex",y=>y.texture)),Ct(d),a&&(d.uniforms.add(new Fe("outlineColor",y=>y.outlineColor)),g.uniforms.add(new Fe("outlineColor",y=>mt(y)?y.outlineColor:uo),new Be("outlineSize",y=>mt(y)?y.outlineSize:0))),i&&d.uniforms.add(new Ua("pointDistanceSphere",(y,R)=>{const w=R.camera.eye,j=y.origin;return fo(j[0]-w[0],j[1]-w[1],j[2]-w[2],po.radius)})),n&&d.include(Ze),s&&(Ro(d),Mt(d)),r&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(c||l)&&e.attributes.add("featureAttribute","vec4"),d.code.add(i?$`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:$`bool behindHorizon(vec3 posModel) { return false; }`),d.main.add($`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${I(s,$`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,$`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${I(c,$`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${I(t,$`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${I(r,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${I(x,$`voccluded = visible ? 0.0 : 1.0;`)}
  `);const A=$`
      vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
      vec2 texSize = vec2(textureSize(tex, 0));
      uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Ia})));
      quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

      ${I(u,$`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,p=n?a?$`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:$`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:$`posProj += quadOffset;`;d.main.add($`
    ${A}
    ${l?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${I(P===10,$`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${$.float(te)};
    ${I(a,`alphaDiscard = alphaDiscard && outlineColor.a < ${$.float(te)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${p}
      gl_Position = posProj;
    }

    vtc = uv;

    ${I(r,$`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),g.uniforms.add(new nt("tex",y=>y.texture)),f&&!v&&g.uniforms.add(new Dt("depthMap",y=>y.mainDepth),new Me("occludedOpacity",y=>y.hudOccludedFragmentOpacity));const O=r?$`(isBorder > 0.0 ? 0.0 : ${$.float(te)})`:$.float(te),z=$`
    ${I(r,$`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${I(h,$`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${a?$`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${O} ||
          fillPixelColor.a + outlinePixelColor.a < ${$.float(te)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${I(!v,$`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${O}) {
          discard;
        }

        ${I(!v,$`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:$`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${O}) {
            discard;
          }
          ${I(!v,$`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${I(f&&!v,$`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${I(!v&&r,$`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(P){case 0:case 1:e.outputs.add("fragColor","vec4",0),P===1&&e.outputs.add("fragEmission","vec4",1),m===1&&e.outputs.add("fragAlpha","float",P===1?2:1),g.main.add($`
        ${z}
        ${I(m===2,$`fragColor.rgb /= fragColor.a;`)}
        ${I(P===1,$`fragEmission = vec4(0.0);`)}
        ${I(m===1,$`fragAlpha = fragColor.a;`)}`);break;case 10:g.main.add($`
        ${z}
        outputObjectAndLayerIdColor();`);break;case 9:e.include(_o,o),g.main.add($`
        ${z}
        outputHighlight(${I(x,$`voccluded == 1.0`,$`false`)});`)}return e}function mt(o){return o.outlineColor[3]>0&&o.outlineSize>0}function ve(o){return o.textureIsSignedDistanceField?Ha(o.anchorPosition,o.distanceFieldBoundingBox,Ae):co(Ae,o.anchorPosition),Ae}function Ha(o,e,a){Xe(a,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const Ae=Ye(),ye=32e3,Ia=$.float(ye),Ba=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ve,fullUV:ye},Symbol.toStringTag,{value:"Module"}));class Ga extends Uo{constructor(e,a){super(e,a,new Ho(Ba,()=>ho(()=>Promise.resolve().then(()=>Ja),void 0)),fa([Ut,It()].map(ra))),this.primitiveType=a.occlusionPass?et.POINTS:et.TRIANGLE_STRIP}initializePipeline(e){const{oitPass:a,hasPolygonOffset:t,draped:i,output:n,depthTestEnabled:s,occlusionPass:r}=e,c=s&&!i&&a!==1&&!r&&n!==9;return la({blending:Vt(n)?Bo(a,!0):null,depthTest:s&&!i?{func:515}:null,depthWrite:c?ua:null,drawBuffers:Io(a,n),colorWrite:ca,polygonOffset:t?La:null})}}const La={factor:0,units:-4},Ut=Ft().vec2u8("uv0",{glNormalized:!0}),Ht=Ft().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color").vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),qa=Ht.clone().vec4u8("olidColor");function It(){return Eo()?qa:Ht}class _ extends Go{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1}}U([H()],_.prototype,"screenCenterOffsetUnitsEnabled",void 0),U([H()],_.prototype,"occlusionTestEnabled",void 0),U([H()],_.prototype,"signedDistanceFieldEnabled",void 0),U([H()],_.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),U([H()],_.prototype,"hasVVSize",void 0),U([H()],_.prototype,"hasVVColor",void 0),U([H()],_.prototype,"hasVerticalOffset",void 0),U([H()],_.prototype,"hasScreenSizePerspective",void 0),U([H()],_.prototype,"hasRotation",void 0),U([H()],_.prototype,"debugDrawLabelBorder",void 0),U([H()],_.prototype,"hasPolygonOffset",void 0),U([H()],_.prototype,"depthTestEnabled",void 0),U([H()],_.prototype,"pixelSnappingEnabled",void 0),U([H()],_.prototype,"draped",void 0),U([H()],_.prototype,"terrainDepthTest",void 0),U([H()],_.prototype,"cullAboveTerrain",void 0),U([H()],_.prototype,"occlusionPass",void 0),U([H()],_.prototype,"occludedFragmentFade",void 0),U([H()],_.prototype,"horizonCullingEnabled",void 0),U([H()],_.prototype,"isFocused",void 0);class _i extends Lo{constructor(e,a){super(e,Qa),this.produces=new Map([[13,t=>Re(t)&&!this.parameters.drawAsLabel],[14,t=>Re(t)&&this.parameters.drawAsLabel],[12,()=>this.parameters.occlusionTest],[18,t=>this.parameters.draped&&Re(t)]]),this._visible=!0,this._configuration=new _(a)}getConfiguration(e,a){const t=this.parameters.draped;return super.getConfiguration(e,a,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=t,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=a.slot===12,this._configuration.occludedFragmentFade=!t&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||a.slot===12,Vt(e)&&(this._configuration.debugDrawLabelBorder=!!qo.LABELS_SHOW_BORDER),this._configuration.oitPass=a.oitPass,this._configuration.terrainDepthTest=a.terrainDepthTest,this._configuration.cullAboveTerrain=a.cullAboveTerrain,this._configuration}intersect(e,a,t,i,n,s){const{options:{selectionMode:r,hud:c,excludeLabels:l},point:u,camera:f}=t,{parameters:h}=this;if(!r||!c||l&&h.isLabel||!e.visible||!u||!f)return;const b=e.attributes.get("featureAttribute"),P=b==null?null:tt(b.data,qe),{scaleX:m,scaleY:d}=ke(P,h,f.pixelRatio);Pt(Ce,a),e.attributes.has("featureAttribute")&&Wa(Ce);const g=e.attributes.get("position"),v=e.attributes.get("size"),x=e.attributes.get("normal"),A=e.attributes.get("rotation"),p=e.attributes.get("centerOffsetAndDistance");Tt(g.size>=3);const O=ve(h),z=this.parameters.centerOffsetUnits==="screen";for(let y=0;y<g.data.length/g.size;y++){const R=y*g.size;oe(C,g.data[R],g.data[R+1],g.data[R+2]),re(C,C,a),re(C,C,f.viewMatrix);const w=y*p.size;if(oe(T,p.data[w],p.data[w+1],p.data[w+2]),!z&&(C[0]+=T[0],C[1]+=T[1],T[2]!==0)){const V=T[2];L(T,C),W(C,C,G(T,T,V))}const j=y*x.size;if(oe(ne,x.data[j],x.data[j+1],x.data[j+2]),Ge(ne,Ce,f,we),Ne(this.parameters,C,we,f,ge),f.applyProjection(C,D),D[0]>-1){z&&(T[0]||T[1])&&(D[0]+=T[0]*f.pixelRatio,T[1]!==0&&(D[1]+=ge.alignmentEvaluator.apply(T[1])*f.pixelRatio),f.unapplyProjection(D,C)),D[0]+=this.parameters.screenOffset[0]*f.pixelRatio,D[1]+=this.parameters.screenOffset[1]*f.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]);const V=y*v.size;E[0]=v.data[V],E[1]=v.data[V+1],ge.evaluator.applyVec2(E,E);const Q=Lt*f.pixelRatio;let le=0;h.textureIsSignedDistanceField&&(le=Math.min(h.outlineSize,.5*E[0])*f.pixelRatio/2),E[0]*=m,E[1]*=d;const Z=y*A.size,N=h.rotation+A.data[Z];if(Le(u,D[0],D[1],E,Q,le,N,h,O)){const ie=t.ray;if(re(De,C,zt(Gt,f.viewMatrix)),D[0]=u[0],D[1]=u[1],f.unprojectFromRenderScreen(D,C)){const S=F();k(S,ie.direction);const me=1/be(S);G(S,S,me),s(Ot(ie.origin,C)*me,S,-1,De)}}}}}intersectDraped(e,a,t,i,n){const s=e.attributes.get("position"),r=e.attributes.get("size"),c=e.attributes.get("rotation"),l=this.parameters,u=ve(l),f=e.attributes.get("featureAttribute"),h=f==null?null:tt(f.data,qe),{scaleX:b,scaleY:P}=ke(h,l,e.screenToWorldRatio),m=Xa*e.screenToWorldRatio;for(let d=0;d<s.data.length/s.size;d++){const g=d*s.size,v=s.data[g],x=s.data[g+1],A=d*r.size;E[0]=r.data[A],E[1]=r.data[A+1];let p=0;l.textureIsSignedDistanceField&&(p=Math.min(l.outlineSize,.5*E[0])*e.screenToWorldRatio/2),E[0]*=b,E[1]*=P;const O=d*c.size,z=l.rotation+c.data[O];Le(t,v,x,E,m,p,z,l,u)&&i(n.distance,n.normal,-1)}}createBufferWriter(){return new Za}applyShaderOffsetsView(e,a,t,i,n,s,r){const c=Ge(a,t,n,we);return this._applyVerticalGroundOffsetView(e,c,n,r),Ne(this.parameters,r,c,n,s),this._applyPolygonOffsetView(r,c,i[3],n,r),this._applyCenterOffsetView(r,i,r),r}applyShaderOffsetsNDC(e,a,t,i,n){return this._applyCenterOffsetNDC(e,a,t,i),n!=null&&k(n,i),this._applyPolygonOffsetNDC(i,a,t,i),i}_applyPolygonOffsetView(e,a,t,i,n){const s=i.aboveGround?1:-1;let r=Math.sign(t);r===0&&(r=s);const c=s*r;if(this.parameters.shaderPolygonOffset<=0)return k(n,e);const l=go(Math.abs(a.cosAngle),.01,1),u=1-Math.sqrt(1-l*l)/l/i.viewport[2];return G(n,e,c>0?u:1/u),n}_applyVerticalGroundOffsetView(e,a,t,i){const n=be(e),s=t.aboveGround?1:-1,r=t.computeRenderPixelSizeAtDist(n)*_t,c=G(C,a.normal,s*r);return q(i,e,c),i}_applyCenterOffsetView(e,a,t){const i=this.parameters.centerOffsetUnits!=="screen";return t!==e&&k(t,e),i&&(t[0]+=a[0],t[1]+=a[1],a[2]&&(L(ne,t),vo(t,t,G(ne,ne,a[2])))),t}_applyCenterOffsetNDC(e,a,t,i){const n=this.parameters.centerOffsetUnits!=="screen";return i!==e&&k(i,e),n||(i[0]+=a[0]/t.fullWidth*2,i[1]+=a[1]/t.fullHeight*2),i}_applyPolygonOffsetNDC(e,a,t,i){const n=this.parameters.shaderPolygonOffset;if(e!==i&&k(i,e),n){const s=t.aboveGround?1:-1,r=s*Math.sign(a[3]);i[2]-=(r||s)*n}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:a,outlineColor:t}=this.parameters,i=e[3]>=te||a>=te&&t[3]>=te;return this._visible&&i}createGLMaterial(e){return new ka(e)}calculateRelativeScreenBounds(e,a,t=wt()){return Na(this.parameters,e,a,t),t[2]=t[0]+e[0],t[3]=t[1]+e[1],t}}class ka extends ea{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Ga,e)}}function Na(o,e,a,t){t[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*a,t[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*a}function Ge(o,e,a,t){return Fa(e)&&(e=Pt(Ya,e)),mo(t.normal,o,e),re(t.normal,t.normal,a.viewInverseTransposeMatrix),t.cosAngle=We(Bt,Ka),t}function Wa(o){const e=o[0],a=o[1],t=o[2],i=o[3],n=o[4],s=o[5],r=o[6],c=o[7],l=o[8],u=1/Math.sqrt(e*e+a*a+t*t),f=1/Math.sqrt(i*i+n*n+s*s),h=1/Math.sqrt(r*r+c*c+l*l);return o[0]=e*u,o[1]=a*u,o[2]=t*u,o[3]=i*f,o[4]=n*f,o[5]=s*f,o[6]=r*h,o[7]=c*h,o[8]=l*h,o}function Le(o,e,a,t,i,n,s,r,c){let l=e-i-t[0]*c[0],u=l+t[0]+2*i,f=a-i-t[1]*c[1],h=f+t[1]+2*i;const b=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&b!=null&&(l+=t[0]*b[0],f+=t[1]*b[1],u-=t[0]*(1-b[2]),h-=t[1]*(1-b[3]),l-=n,u+=n,f-=n,h+=n),Xe(xt,e,a),xo(xe,o,xt,wo(s)),xe[0]>l&&xe[0]<u&&xe[1]>f&&xe[1]<h}const ge=new ko,C=F(),ne=F(),D=Ve(),Bt=F(),De=F(),xe=Ye(),xt=Ye(),Ce=$t(),Ya=$t(),Gt=bt(),Pe=Ve(),T=F(),Ie=F(),qe=Ve(),we={normal:Bt,cosAngle:0},Lt=1,Xa=2,E=St(0,0),Ka=yt(0,0,1);class Qa extends No{constructor(){super(...arguments),this.renderOccluded=1,this.isDecoration=!1,this.color=ot(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=St(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ot(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ve(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Za{constructor(){this.layout=Ut,this.instanceLayout=It()}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,a,t,i,n,s){var p,O;const{position:r,normal:c,color:l,size:u,rotation:f,centerOffsetAndDistance:h,featureAttribute:b,uvi:P}=n;Xo(t.get("position"),e,r,s),Ko(t.get("normal"),a,c,s);const m=t.get("position").indices.length;let d=0,g=0,v=ye,x=ye;const A=(p=t.get("uvi"))==null?void 0:p.data;A&&A.length>=4&&(d=A[0],g=A[1],v=A[2],x=A[3]);for(let z=0;z<m;++z){const y=s+z;P.setValues(y,d,g,v,x)}if(Qo(t.get("color"),4,l,s),rt(t.get("size"),u,s),Zo(t.get("rotation"),f,s),t.get("centerOffsetAndDistance")?lt(t.get("centerOffsetAndDistance"),h,s):ct(h,s,m),t.get("featureAttribute")?lt(t.get("featureAttribute"),b,s):ct(b,s,m),i!=null){const z=(O=t.get("position"))==null?void 0:O.indices;if(z){const y=z.length,R=n.getField("olidColor",na);Jo(i,R,y,s)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,a){const{uv0:t}=a;rt(e.get("uv0"),t,0)}intersect(e,a,t,i,n,s,r){const{options:{selectionMode:c,hud:l,excludeLabels:u},point:f,camera:h}=i;if(!c||!l||u&&a.isLabel||!f)return;const b=this.instanceLayout.createView(e),{position:P,normal:m,rotation:d,size:g,featureAttribute:v,centerOffsetAndDistance:x}=b,A=a.centerOffsetUnits==="screen",p=ve(a);if(P==null||m==null||d==null||g==null||x==null||h==null)return;const O=v==null?null:v.getVec(0,qe),{scaleX:z,scaleY:y}=ke(O,a,h.pixelRatio),R=P.count;for(let w=0;w<R;w++){if(P.getVec(w,C),t!=null&&q(C,C,t),re(C,C,h.viewMatrix),x.getVec(w,Pe),oe(T,Pe[0],Pe[1],Pe[2]),!A&&(C[0]+=T[0],C[1]+=T[1],T[2]!==0)){const j=T[2];L(T,C),W(C,C,G(T,T,j))}if(m.getVec(w,ne),Ge(ne,Ce,h,we),Ne(a,C,we,h,ge),h.applyProjection(C,D),D[0]>-1){A&&(T[0]||T[1])&&(D[0]+=T[0]*h.pixelRatio,T[1]!==0&&(D[1]+=ge.alignmentEvaluator.apply(T[1])*h.pixelRatio),h.unapplyProjection(D,C)),D[0]+=a.screenOffset[0]*h.pixelRatio,D[1]+=a.screenOffset[1]*h.pixelRatio,D[0]=Math.floor(D[0]),D[1]=Math.floor(D[1]),g.getVec(w,E),ge.evaluator.applyVec2(E,E);const j=Lt*h.pixelRatio;let V=0;a.textureIsSignedDistanceField&&(V=Math.min(a.outlineSize,.5*E[0])*h.pixelRatio/2),E[0]*=z,E[1]*=y;const Q=d.get(w),le=a.rotation+Q;if(Le(f,D[0],D[1],E,j,V,le,a,p)){const Z=i.ray;if(re(De,C,zt(Gt,h.viewMatrix)),D[0]=f[0],D[1]=f[1],h.unprojectFromRenderScreen(D,C)){const N=F();k(N,Z.direction);const ie=1/be(N);G(N,N,ie),r(Ot(Z.origin,C)*ie,N,w,De)}}}}}}function ke(o,e,a){return o==null||e.vvSize==null?{scaleX:a,scaleY:a}:(Wo(Ie,e,o),{scaleX:Ie[0]*a,scaleY:Ie[1]*a})}function Ne(o,e,a,t,i){var c;if(!((c=o.verticalOffset)!=null&&c.screenLength)){const l=be(e);return i.update(a.cosAngle,l,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),e}const n=be(e),s=o.screenSizePerspectiveAlignment??o.screenSizePerspective,r=Yo(t,n,o.verticalOffset,a.cosAngle,s,o.screenSizePerspectiveMinPixelReferenceSize);return i.update(a.cosAngle,n,o.screenSizePerspective,o.screenSizePerspectiveMinPixelReferenceSize,o.screenSizePerspectiveAlignment,null),G(a.normal,a.normal,r),q(e,e,a.normal)}function Ei(o){return o.type==="point"}const Ja=Object.freeze(Object.defineProperty({__proto__:null,build:Et,calculateAnchorPosition:ve,fullUV:ye},Symbol.toStringTag,{value:"Module"}));export{xi as A,wi as D,$i as E,Pi as G,ji as M,Si as Q,mi as U,bi as Z,vi as a,Ri as b,Ci as c,Ra as d,yi as e,Mi as f,gt as g,Ai as h,_i as i,Oi as j,ga as k,Ze as l,Ti as m,Ea as n,Vi as o,Da as p,Va as q,zi as r,Ei as t,Ma as u,Di as w,Fi as y};
