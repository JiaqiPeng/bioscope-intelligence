// Shared metadata for browser navigation and the static production build.
function updateSearchMetadata(raw){
  const origin='https://bioscopeintel.com',routePath=raw.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g,'');
  const canonical=origin+'/'+(routePath?routePath+'/':'');
  const a=routePath.startsWith('article/')?articles.find(a=>a.id===routePath.slice(8)):null;
  const title=routePath?(main.querySelector('h1')?.textContent||'BioScope Intelligence')+' | BioScope Intelligence':'BioScope Intelligence | Global biotech news and analysis';
  const description=a?a.deck:(main.querySelector('.page-head p')?.textContent||'Independent biotechnology and pharmaceutical intelligence: news, analysis, company profiles and global deal coverage.');
  document.title=title;
  function meta(key,value,property=false){let el=document.head.querySelector(`meta[${property?'property':'name'}="${key}"]`);if(!el){el=document.createElement('meta');el.setAttribute(property?'property':'name',key);document.head.append(el);}el.content=value;}
  let c=document.head.querySelector('link[rel="canonical"]');if(!c){c=document.createElement('link');c.rel='canonical';document.head.append(c);}c.href=canonical;
  meta('description',description);meta('robots',main.querySelector('h1')?.textContent==='Page not found'?'noindex,follow':'index,follow');
  for(const [k,v] of Object.entries({'og:title':title,'og:description':description,'og:url':canonical,'og:type':a?'article':'website','og:site_name':'BioScope Intelligence','og:image':origin+'/'+(a?a.image.src:'images/bioscope-approved-logo-trimmed.png')}))meta(k,v,true);
  meta('twitter:card',a?'summary_large_image':'summary');
  const publisher={'@type':'Organization',name:'BioScope Intelligence',url:origin+'/',logo:{'@type':'ImageObject',url:origin+'/images/bioscope-approved-logo-trimmed.png'}};
  const schema=a?{'@context':'https://schema.org','@type':a.type==='News'?'NewsArticle':'Article',headline:a.title,description:a.deck,datePublished:a.date,...(a.revisedDate?{dateModified:a.revisedDate}:{}),image:[origin+'/'+a.image.src],mainEntityOfPage:canonical,author:{'@type':'Organization',name:'BioScope Intelligence',url:origin+'/about/'},publisher}:!routePath?{'@context':'https://schema.org','@graph':[publisher,{'@type':'WebSite',name:'BioScope Intelligence',url:origin+'/'}]}:{'@context':'https://schema.org','@type':'WebPage',name:title,description,url:canonical};
  let s=document.getElementById('page-schema');if(!s){s=document.createElement('script');s.id='page-schema';s.type='application/ld+json';document.head.append(s);}s.textContent=JSON.stringify(schema);
  document.querySelectorAll('a[href^="#/"]').forEach(el=>{const target=el.getAttribute('href').slice(2);el.setAttribute('href','/'+target+(target&&!target.includes('?')&&!target.includes('#')?'/':''));});
}
