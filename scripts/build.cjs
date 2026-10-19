// Dependency-free static validation and production packaging.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),src=path.join(root,'site'),out=path.join(root,'_site');
const files=[];function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){assert(!e.isSymbolicLink(),'Symlinks are not allowed');const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else files.push(p);}}walk(src);
for(const p of files){assert(/\.(html|css|js|webp|svg)$/.test(p),'Unexpected deployable file: '+p);if(!p.endsWith('.webp')){const text=fs.readFileSync(p,'utf8');assert(!/(?:file:\/\/|[A-Za-z]:[\\/](?:Users|home)[\\/]|localhost:\d|127\.0\.0\.1:\d)/i.test(text),'Local-only path in '+p);assert(!/(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|(?<![A-Za-z0-9])sk-[A-Za-z0-9_-]{32,}|AKIA[A-Z0-9]{16}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----)/.test(text),'Credential signature in '+p);if(p.endsWith('.js'))new vm.Script(text,{filename:p});}}
const html=fs.readFileSync(path.join(src,'index.html'),'utf8');
for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)){const u=m[1];if(/^(?:https?:|#)/.test(u))continue;assert(!u.startsWith('/'),'Root-relative asset: '+u);assert(fs.existsSync(path.join(src,u)),'Missing asset: '+u);}
const scripts=[...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]);
const ctx=vm.createContext({Intl,Date});for(const f of scripts.filter(f=>f!=='edition-app.js'))vm.runInContext(fs.readFileSync(path.join(src,f),'utf8'),ctx);
const data=vm.runInContext('({articles,companies,deals,sources,majorCompanyOrder})',ctx);
for(const a of data.articles){for(const key of ['src','thumbnail']){assert(a.image[key].startsWith('images/'));assert(fs.existsSync(path.join(src,a.image[key])),'Missing article image');}for(const id of a.companies)assert(data.companies.some(c=>c.id===id));for(const id of a.sources)assert(data.sources[id]);}
assert.equal(data.majorCompanyOrder.length,20);assert.equal(data.companies.length,24);assert.ok(data.articles.length>=5);assert.equal(new Set(data.articles.map(a=>a.id)).size,data.articles.length,'Duplicate article IDs');assert.equal(data.deals.length,7);
assert.equal(vm.runInContext("isArchived({date:'2026-10-17'},'2026-10-24')",ctx),false);assert.equal(vm.runInContext("isArchived({date:'2026-10-17'},'2026-10-25')",ctx),true);
// Only this fixed build directory can be replaced.
assert.equal(path.dirname(out),root);fs.rmSync(out,{recursive:true,force:true});fs.cpSync(src,out,{recursive:true});fs.writeFileSync(path.join(out,'.nojekyll'),'');
console.log(`Production build passed: ${files.length} files, ${data.articles.length} articles, ${data.companies.length} companies, ${data.deals.length} deals. Output: _site/`);

