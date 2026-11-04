// These views are used only for the Analysis index and flagship reports.
function renderAnalysisLibrary() {
  const leads = flagshipReports.map(report => articles.find(a => a.id === report.id));
  const previous = newestReporting(articles.filter(a => a.type === 'Analysis' && !a.sections));
  const library = [...leads, ...previous];
  const filterOptions = key => [...new Set(library.map(a => a[key]))].map(value =>
    `<option value="${esc(value)}">${esc(value)}</option>`).join('');
  main.innerHTML = '<div class="research-library">' +
    heading('Analysis', 'Original research on the decisions behind drug development, licensing and pharmaceutical investment.', 'BIOSCOPE INTELLIGENCE · RESEARCH DESK') +
    '<p class="research-label">Flagship research · November 2026</p><div class="research-grid">' +
    leads.map(a => `<article>${link('article/'+a.id,picture(a,'hero'))}<div class="research-label">${esc(a.tags[0])} · Strategic analysis</div><h2>${link('article/'+a.id,esc(a.title))}</h2><p>${esc(a.deck)}</p><small>Research through November 3, 2026 · ${a.minutes} min read</small></article>`).join('') +
    '</div><section class="research-previous"><h2>Browse the research library</h2>' +
    `<div class="filters"><input type="search" id="research-query" aria-label="Search analysis" placeholder="Search analysis…"><select id="research-category" aria-label="Analysis category"><option value="">All categories</option>${filterOptions('category')}</select><select id="research-region" aria-label="Analysis region"><option value="">All regions</option>${filterOptions('region')}</select></div><p class="small muted" id="research-count" aria-live="polite"></p><div id="research-results"></div>${link('archive','Reporting Archive →','all-link')}</section></div>`;
  function filterLibrary() {
    const query = $('#research-query').value.trim().toLowerCase();
    const category = $('#research-category').value;
    const region = $('#research-region').value;
    const rows = library.filter(a => (!category || a.category === category) &&
      (!region || a.region === region) && [a.title,a.deck,...a.tags||[]].join(' ').toLowerCase().includes(query));
    $('#research-results').innerHTML = rows.map(analysisCard).join('');
    $('#research-count').textContent = rows.length + (rows.length === 1 ? ' report' : ' reports');
  }
  document.querySelectorAll('.research-library .filters input,.research-library .filters select').forEach(el=>el.addEventListener('input',filterLibrary));
  filterLibrary();
}
function renderReportFigure(figure) {
  const chart = figure.bars ? '<div class="research-chart">' + figure.bars.map(([label,value]) =>
    `<div class="research-bar"><span>${esc(label)}</span><div class="research-track"><i style="width:${100*value/figure.max}%"></i></div><b>${value}${figure.unit}</b></div>`
  ).join('') + '</div>' : `<div class="research-scroll" tabindex="0" role="region" aria-label="${esc(figure.title)}"><table><thead><tr>${figure.headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')}</tr></thead><tbody>${figure.rows.map(row=>'<tr>'+row.map((cell,i)=>i?'<td>'+esc(cell)+'</td>':'<th scope="row">'+esc(cell)+'</th>').join('')+'</tr>').join('')}</tbody></table></div>`;
  return `<figure class="research-figure"><figcaption><b>${esc(figure.title)}</b><span>${esc(figure.caption)}</span></figcaption>${chart}<small>Data sources ${cite(figure.keys)}</small></figure>`;
}
function renderFlagship(a) {
  const chapters = a.sections.map((s,i) => ({...s,anchor:'research-section-'+(i+1)}));
  const notes = chapters.map(s => {
    const content = s.paragraphs.map(([words,keys]) => {
      const bullet = words.startsWith('• ');
      return `<p class="${bullet?'research-finding':''}">${esc(bullet?words.slice(2):words)} ${cite(keys)}</p>`;
    }).join('');
    const figs = a.figures.filter(f=>f.section===s.heading).map(renderReportFigure).join('');
    const style = s.heading === "Scenario analysis" ? "research-scenarios" : s.heading === "What to watch" ? "research-timeline" : "";
    return `<section id="${s.anchor}"><h2>${esc(s.heading)}</h2><div class="${style}">${content}</div>${figs}</section>`;
  }).join('');
  const toc = '<details class="research-toc" open><summary>Contents</summary><ol>' +
    chapters.map(s=>`<li><a href="/article/${a.id}/#${s.anchor}">${esc(s.heading)}</a></li>`).join('')+
    `<li><a href="/article/${a.id}/#research-method">Sources and methodology</a></li></ol></details>`;
  main.innerHTML = `<article class="research-reader">${link('analysis','← Analysis','back')}<header><p class="research-label">Flagship analysis · BioScope Intelligence</p><h1>${esc(a.title)}</h1><p class="intro">${esc(a.deck)}</p><small>BioScope Intelligence · Last updated November 3, 2026 · ${a.minutes} min read</small></header><figure class="research-cover">${picture(a,'hero')}<figcaption>Illustrative cover from the BioScope editorial collection.</figcaption></figure><div class="research-columns">${toc}<div class="research-prose">${notes}<section id="research-method"><h2>Sources and methodology</h2><details open><summary>Scope, definitions and assumptions</summary><p>Research cutoff: November 3, 2026.</p><p>${esc(a.method)}</p></details>${sourceBox(a.sources,'Evidence register',undefined,false)}</section><aside class="related"><h2>Related BioScope reporting</h2>${a.relatedArticles.map(id=>link('article/'+id,esc(articles.find(a=>a.id===id).title))).join('')}${a.deals.map(id=>link('deal/'+id,'Deal Tracker · '+esc(dealName(deals.find(d=>d.id===id))))).join('')}</aside></div></div></article>`;
}
