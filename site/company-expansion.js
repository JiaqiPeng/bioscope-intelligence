// Additions to existing records preserve their established IDs, facts and programmes.
Object.assign(sources,{
  rocheH126:{title:'Roche half-year results 2026',publisher:'Roche',date:'2026-07-23',kind:'Company results',url:'https://www.roche.com/media/releases/med-cor-2026-07-23'},
  rocheHQ26:{title:'Roche in Europe — headquarters',publisher:'Roche',date:null,kind:'Corporate information',url:'https://www.roche.com/stories/roche-in-europe-hub'},
  lillyQ226:{title:'Lilly second-quarter 2026 results',publisher:'Eli Lilly',date:'2026-08-05',kind:'Company results',url:'https://investor.lilly.com/news-releases/news-release-details/lilly-reports-second-quarter-2026-financial-results-raises-full'},
  cslProducts26:{title:'CSL Behring products',publisher:'CSL',date:null,kind:'Official product directory',url:'https://www.csl.com/we-are-csl/our-businesses-and-products/csl-behring/csl-behring-products'},
  novoProducts26:{title:'Novo Nordisk Q2 2026 investor presentation',publisher:'Novo Nordisk',date:'2026-08',kind:'Company presentation',url:'https://www.novonordisk.com/content/dam/nncorp/global/en/investors/pdfs/financial-results/2026/Q2-2026-Full%20presentation.pdf'},
  azPortfolio26:{title:'AstraZeneca half-year 2026 report',publisher:'AstraZeneca / SEC',date:'2026-07-27',kind:'Form 6-K',url:'https://www.sec.gov/Archives/edgar/data/901832/000110465926086846/azn-20260630x6k.htm'}
});
const companyUpdates={
 lilly:{areas:['Metabolic disease','Oncology','Neuroscience','Immunology'],products:['Mounjaro — diabetes franchise','Zepbound — obesity franchise','Jaypirca — blood-cancer medicine'],productSources:['lillyQ226','lillyJay'],sources:['lillyQ226','lillyCentessa'],technologies:['GLP-1','Small molecule']},
 astrazeneca:{country:'United Kingdom / Sweden',areas:['Oncology','Cardiovascular disease','Kidney disease','Respiratory disease','Rare disease'],products:['Tagrisso — lung-cancer franchise','Imfinzi — cancer immunotherapy','Farxiga / Forxiga — diabetes, heart and kidney disease','Enhertu — antibody–drug conjugate franchise, partnered with Daiichi Sankyo'],productSources:['azPortfolio26'],sources:['azPortfolio26'],technologies:['ADC','Bispecific']},
 novo:{country:'Denmark',areas:['Metabolic disease','Rare disease'],products:['Ozempic — type 2 diabetes franchise','Wegovy — weight-management franchise','Insulin portfolio — diabetes care'],productSources:['novoProducts26','novoAnnual'],sources:['novoProducts26'],technologies:['GLP-1','Bispecific']},
 csl:{country:'Australia',areas:['Rare disease','Immunology','Kidney disease'],products:['Hizentra / Privigen — immunoglobulin franchises','Hemgenix — gene-therapy franchise','Idelvion — coagulation-factor franchise'],productSources:['cslProducts26'],sources:['cslProducts26'],technologies:['Gene therapy']}
};
for(const [id,update] of Object.entries(companyUpdates)){
 const c=companies.find(c=>c.id===id),mergedSources=[...new Set([...c.sources,...update.sources])];
 Object.assign(c,update,{sources:mergedSources,core:true,reviewed:'2026-10-18'});
}
companies.push({id:'roche',name:'Roche',full:'Roche Group',country:'Switzerland',hq:'Basel, Switzerland',about:'Roche is a global healthcare group combining prescription medicines with diagnostic tests and instruments. Its medicines business includes Genentech and spans cancer, neurological, immune and eye diseases.',snapshot:'Group sales were CHF30.4 billion in the first half of 2026, including both pharmaceuticals and diagnostics.',focus:'Oncology · Neuroscience · Immunology · Ophthalmology',areas:['Oncology','Neuroscience','Immunology','Ophthalmology'],products:['Ocrevus — multiple sclerosis','Hemlibra — haemophilia A','Vabysmo — retinal eye diseases','Phesgo — breast cancer'],productSources:['rocheH126'],programs:[['Fenebrutinib','Oral BTK inhibitor — alters immune signalling','Multiple sclerosis','Phase III results reported in the half-year update','2026-07-23','rocheH126'],['Giredestrant','Oral oestrogen-receptor degrader','Early-stage ER-positive breast cancer','US priority review; decision target 30 November 2026 in cited update','2026-07-23','rocheH126']],sources:['rocheHQ26','rocheH126','alectorDeal','alector8k'],technologies:['Brain delivery','Small molecule'],reviewed:'2026-10-18',core:true});
const majorCompanyOrder=['lilly','merck','roche','pfizer','abbvie','johnson-johnson','astrazeneca','novartis','sanofi','novo','bristol-myers-squibb','gsk','amgen','gilead','takeda','boehringer','teva','csl','regeneron','viatris'];
// Company IDs connect content; aliases improve discovery without creating duplicate profiles.
const companyAliases={lilly:['Eli Lilly and Company'],merck:['MSD','Merck & Co.'],roche:['Genentech'], 'johnson-johnson':['J&J','Janssen'],'bristol-myers-squibb':['BMS'],gsk:['GlaxoSmithKline'],gilead:['Gilead Sciences'],teva:['Teva Pharmaceutical Industries'],regeneron:['Regeneron Pharmaceuticals']};
companies.forEach(c=>{c.aliases=companyAliases[c.id]||[];c.areas ||= c.focus.split(' · ');c.technologies ||= [];c.recentDeals ||= [];});
const rocheDeal=deals.find(d=>d.id==='alector-genentech');
if(rocheDeal&&!rocheDeal.companies.includes('roche'))rocheDeal.companies.push('roche');
const centessa=deals.find(d=>d.id==='lilly-centessa');
if(centessa){centessa.status='Completed in Q2 2026, as reported 5 August 2026';centessa.sources.push('lillyQ226');centessa.notes=centessa.notes.replace(/current closing[^.]*\./i,'Completion was subsequently confirmed in Lilly’s Q2 results.');}
for(const a of articles)if(a.id==='enspryng-thyroid-eye'&&!a.companies.includes('roche'))a.companies.push('roche');
function companySearchText(c){return [c.name,c.full,c.hq,c.country,c.focus,...c.aliases,...(c.products||[]),...c.programs.flat(),...c.recentDeals.map(d=>d.name+' '+d.summary)].join(' ').toLowerCase();}

