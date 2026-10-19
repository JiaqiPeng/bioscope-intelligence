// BioScope house illustrations: editable, deterministic SVG artwork.
// Shared palette, framing and stroke hierarchy; subject drawings are schematic.
const fs=require('node:fs'),path=require('node:path');
const output=path.join(__dirname,'../site/images');
const p=(d,extra='')=>`<path d="${d}" ${extra}/>`;
const circle=(x,y,r,extra='')=>`<circle cx="${x}" cy="${y}" r="${r}" ${extra}/>`;
const line=(x,y,x2,y2,extra='')=>`<path d="M${x} ${y}L${x2} ${y2}" ${extra}/>`;
const art={
 'oncology':{label:'CELLULAR TARGETS',n:'01',body:`
 <path d="M360 260C416 205 499 205 549 250C606 240 655 281 652 338C706 376 696 454 646 482C625 546 546 569 492 537C422 563 355 517 352 457C296 420 304 346 348 316Z" fill="#e5eefb"/>
 <path d="M370 270C424 223 493 221 541 265C596 250 638 289 638 342C690 381 677 445 631 471C615 530 548 548 495 522C431 548 370 505 368 449C317 413 324 352 362 324Z" stroke-dasharray="3 9" stroke-width="2"/>
 <ellipse cx="493" cy="382" rx="68" ry="82" fill="#cfdef5"/>
 ${p('M471 316C441 343 466 365 491 355S537 367 513 390S470 401 480 433','stroke-width="3"')}
 ${p('M385 358q26 -22 43 6m-42 69q22 17 39 -8m127 -109q17 -14 33 6m-35 118q22 18 42 -5','stroke-width="3"')}
 ${[[407,296],[581,381],[450,479],[598,469],[401,397]].map(([x,y])=>circle(x,y,8,'fill="#f8fbff"')).join('')}
 <g stroke-width="6">${p('M665 236l-28 28 29 30m-29 -30l-39 -38')}${p('M598 226l-5 -30m5 30l-30 3')}</g>
 <g fill="#2463b5" stroke="none">${circle(681,221,9)}${circle(699,202,6)}</g>
 ${p('M645 270L730 270L775 225','stroke-width="1.5"')}${circle(782,218,5,'fill="#2463b5"')}
 ${p('M491 382L700 382L763 420','stroke-width="1.5"')}${circle(770,425,5,'fill="#2463b5"')}
 `},
 'brain':{label:'NEURAL SYSTEMS',n:'02',body:`
 ${p('M351 445C303 404 313 351 343 328C329 280 362 244 406 241C431 202 476 205 504 222C544 201 594 222 604 253C651 251 686 292 676 332C711 367 696 411 662 431C639 468 598 475 566 456L559 511L525 508L508 464C451 486 389 481 351 445Z','fill="#e5eefb" stroke-width="3"')}
 ${p('M350 330q49 -20 47 -65m-51 137q40 3 47 -37t42 -46m-42 46q33 17 52 -10m-41 -112q33 16 20 49m80 -70q-23 25 -5 56t-16 47m17 -47q41 -12 57 19m46 -42q-37 13 -36 50t-29 38m-30 -8q-11 32 24 43t25 48m99 -104q-39 -3 -48 32t-44 26m-167 86q31 -31 57 -10t46 -9m-61 -97q-12 29 13 46m118 -4q25 5 22 34m-207 -12q-4 30 27 39','stroke-width="3"')}
 ${p('M570 451q42 -38 89 -20q-3 39 -45 51q-24 0 -44 -31Z','fill="#cddff7"')}
 ${[0,1,2,3].map(i=>p(`M${579+i*7} ${451+i*6}q30 -19 63 -13`,'stroke-width="1.5"')).join('')}
 ${circle(457,319,27,'stroke="#2463b5" stroke-dasharray="3 5"')}${circle(457,319,7,'fill="#2463b5"')}
 ${p('M457 291V172H696','stroke-width="1.5"')}${circle(703,172,5,'fill="#2463b5"')}
 `},
 'eye':{label:'VISION & IMMUNOLOGY',n:'03',body:`
 ${p('M286 365Q494 142 714 365Q494 573 286 365Z','fill="#e5eefb" stroke-width="3"')}
 ${p('M286 365Q494 181 714 365M300 391Q493 548 699 391','stroke-width="1.5"')}
 ${circle(500,364,101,'fill="#f8fbff" stroke-width="3"')}${circle(500,364,72,'fill="#cddff7"')}
 ${Array.from({length:32},(_,i)=>{const t=i*Math.PI/16;return line(500+51*Math.cos(t),364+51*Math.sin(t),500+88*Math.cos(t),364+88*Math.sin(t),'stroke-width="1.5"');}).join('')}
 ${circle(500,364,40,'fill="#163e70" stroke="none"')}${circle(484,349,10,'fill="#f8fbff" stroke="none"')}
 ${p('M307 322Q494 105 695 320M331 449Q493 584 675 449','stroke-width="2"')}
 ${p('M603 364H770M500 263V175H703','stroke-width="1.5"')}${circle(777,364,5,'fill="#2463b5"')}${circle(710,175,5,'fill="#2463b5"')}
 `},
 'genetics':{label:'GENETIC MEDICINE',n:'04',body:`
 ${p('M391 179C673 235 331 316 613 388C895 460 429 507 650 565','stroke-width="5"')}
 ${p('M609 179C327 235 669 316 387 388C105 460 571 507 350 565','stroke-width="5"')}
 ${[[391,609,179],[438,562,197],[469,531,217],[465,535,242],[430,570,264],[392,608,289],[403,597,313],[448,552,337],[473,527,359],[387,613,388],[371,629,410],[407,593,436],[467,533,459],[429,571,490],[383,617,520],[350,650,565]].map(([a,b,y],i)=>line(a,y,b,y,`stroke="${i>8&&i<12?'#2463b5':'#84a8d9'}" stroke-width="${i>8&&i<12?4:2}"`)).join('')}
 <rect x="335" y="375" width="330" height="82" rx="8" fill="#2463b5" fill-opacity=".08" stroke-dasharray="5 7"/>
 ${p('M665 416H750L788 378','stroke-width="1.5"')}${circle(795,371,5,'fill="#2463b5"')}
 `},
 'regulation':{label:'EVIDENCE & POLICY',n:'05',body:`
 <rect x="354" y="207" width="285" height="342" fill="#dce9fa" stroke="none"/>
 ${p('M329 179H552L613 241V521H329Z','fill="#f8fbff" stroke-width="3"')}
 ${p('M552 179V241H613','fill="#dce9fa"')}
 ${[278,299,320,365,386,407,452,473].map((y,i)=>line(368,y,i%3===2?491:560,y,'stroke="#8caad1" stroke-width="3"')).join('')}
 <g transform="translate(627 421)">${circle(0,0,73,'fill="#e5eefb" stroke-width="3"')}${circle(0,0,60,'stroke-dasharray="2 6"')}${p('M-28 0l20 23 37 -47','stroke-width="5"')}</g>
 ${p('M329 179H277V521H305M260 179H294M260 521H294','stroke-width="1.5"')}
 `},
 'weight':{label:'METABOLIC HEALTH',n:'06',body:`
 <rect x="335" y="246" width="335" height="287" rx="29" fill="#e5eefb" stroke-width="3"/>
 <rect x="355" y="267" width="295" height="245" rx="19" stroke="#a8c2e5" stroke-width="1.5"/>
 ${p('M427 330a76 76 0 0 1 152 0Z','fill="#f8fbff" stroke-width="2"')}
 ${Array.from({length:9},(_,i)=>{let t=Math.PI+i*Math.PI/8;return line(503+54*Math.cos(t),330+54*Math.sin(t),503+65*Math.cos(t),330+65*Math.sin(t),'stroke-width="2"')}).join('')}
 ${p('M503 330L525 282','stroke-width="4"')}${circle(503,330,5,'fill="#2463b5"')}
 ${p('M296 445C250 456 263 521 322 548S508 593 592 559L608 587C521 625 335 597 280 564S226 470 296 445Z','fill="#cddff7" stroke-width="2"')}
 ${Array.from({length:11},(_,i)=>line(318+i*23,555+Math.sin(i/3)*25,314+i*23,568+Math.sin(i/3)*25,'stroke-width="1.5"')).join('')}
 <rect x="631" y="173" width="116" height="193" rx="13" fill="#f8fbff" stroke-width="3"/>
 ${p('M661 187h56M651 337h76M653 285l21 -20 17 9 34 -44','stroke-width="3"')}${circle(689,350,3,'fill="#2463b5"')}
 `},
 'documentation':{label:'CLINICAL WORKFLOWS',n:'07',body:`
 <rect x="421" y="208" width="257" height="325" rx="4" fill="#e5eefb" stroke-width="3"/>
 <rect x="478" y="190" width="142" height="35" rx="8" fill="#cddff7" stroke-width="2"/>
 ${[281,303,325,383,405,427,470,492].map((y,i)=>line(461,y,i%3===2?575:635,y,'stroke="#8aa9d2" stroke-width="3"')).join('')}
 <rect x="300" y="278" width="73" height="145" rx="36" fill="#f8fbff" stroke-width="3"/>
 ${[306,320,334,348,362].map(y=>line(319,y,354,y,'stroke-width="2"')).join('')}
 ${p('M280 374v18a56 56 0 0 0 113 0v-18M336 449v55m-36 0h72','stroke-width="4"')}
 ${Array.from({length:11},(_,i)=>{const h=[13,22,37,18,43,56,26,40,19,30,11][i];return line(451+i*18,561-h,451+i*18,561+h,'stroke-width="3"')}).join('')}
 ${p('M679 301H736L769 267','stroke-width="1.5"')}${circle(776,260,5,'fill="#2463b5"')}
 `}
};
for(const [name,a] of Object.entries(art)){
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" role="img" aria-labelledby="title desc"><title id="title">BioScope — ${a.label.toLowerCase().replaceAll("&","&amp;")}</title><desc id="desc">Original schematic editorial illustration; not clinical evidence or an anatomical reference.</desc><rect width="1000" height="700" fill="#f4f8fe"/><g fill="none" stroke="#d3e1f4" stroke-width="1"><circle cx="500" cy="365" r="241"/><path d="M500 104V128M500 602V626M239 365H263M737 365H761M281 146h438M281 584h438"/><path d="M56 85V56H85M915 56H944V85M56 615V644H85M915 644H944V615"/></g><g fill="none" stroke="#23558b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${a.body}</g><g font-family="Arial,sans-serif" fill="#315f96" font-size="11" letter-spacing="2"><text x="58" y="94">BIOSCOPE / FIELDNOTES</text><text x="58" y="619">${a.label.replaceAll("&","&amp;")}</text><text x="942" y="619" text-anchor="end">FIG. ${a.n}</text></g><path d="M58 108h28" stroke="#2463b5" stroke-width="3"/></svg>`;
 fs.writeFileSync(path.join(output,'bioscope-'+name+'.svg'),svg);
}
console.log('Built seven BioScope vector illustrations.');
