import sharp from 'sharp';
import fs from 'node:fs/promises';
const index=(await fs.readFile('asset-index.txt','utf8')).trim().split(/\r?\n/);
const source=id=>'cup2eat/'+index[id];
const mask=Buffer.from(`<svg width="1440" height="1440"><path fill="white" d="M54 237 C70 90 310 30 620 40 C960 25 1245 83 1304 222 C1328 275 1298 369 1230 447 L1063 1234 C1049 1350 858 1423 665 1425 C474 1422 293 1360 267 1281 L117 463 C84 401 48 302 54 237Z"/></svg>`);
const cut=await sharp(source(108)).ensureAlpha().composite([{input:mask,blend:'dest-in'}]).png().toBuffer();
await sharp(cut).trim().resize({height:720}).webp({quality:88,alphaQuality:90}).toFile('public/assets/cup.webp');
for(const [name,id,box] of [['regular',115,{left:130,top:51,width:401,height:330}],['cold',116,{left:0,top:0,width:1179,height:518}],['coated',117,{left:628,top:180,width:541,height:800}],['rim',118,{left:0,top:0,width:1179,height:482}]]) await sharp(source(id)).extract(box).resize({width:900,withoutEnlargement:true}).webp({quality:88}).toFile(`public/assets/${name}.webp`);
for(const id of [5,108,138])await sharp(source(id)).resize({width:id===5?150:1100,withoutEnlargement:true}).jpeg({quality:85}).toFile(`public/assets/${id}.jpg`);

await sharp(source(138)).resize({width:700}).webp({quality:80}).toFile('public/assets/event.webp');
