const EDITION_DATE='2026-10-22';
const sourceRows=[
['azSummit','AstraZeneca completes its Summit equity investment','AstraZeneca','2026-10-05','Company announcement','https://www.astrazeneca.com/media-centre/press-releases/2026/astrazeneca-completes-equity-investment-in-summit-therapeutics.html'],
['azDato','Datroway / ivonescimab clinical collaboration','AstraZeneca','2026-10-02','Company announcement','https://www.astrazeneca.com/media-centre/press-releases/2026/az-ds-collaboration-with-summit-for-datroway.html'],
['vaxOpus','VAX-31: OPUS-1 Phase III topline results','Vaxcyte','2026-10-05','Sponsor-reported results','https://investors.vaxcyte.com/news-releases/news-release-details/vaxcyte-reports-positive-topline-data-opus-1-pivotal-adult-phase'],
['alectorDeal','AL050 global licence — Exhibit 99.1','Alector / SEC EDGAR','2026-10-05','Company release furnished to the SEC','https://www.sec.gov/Archives/edgar/data/1653087/000119312526413090/alec-ex99_01.htm'],
['alector8k','Current report: Genentech licence agreement','Alector / SEC EDGAR','2026-10-05','Form 8-K','https://www.sec.gov/Archives/edgar/data/1653087/000119312526413090/alec-20260930.htm'],
['cslDeal','Lixudebart global partnership','CSL & Alentis','2026-10-05','Joint company announcement','https://newsroom.csl.com/2026-10-04-CSL-and-Alentis-announce-global-partnership-to-develop-and-commercialise-lixudebart-for-rare-kidney-and-liver-diseases'],
['cslFiling','CSL enters agreement with Alentis','CSL','2026-10-05','ASX announcement','https://investors.csl.com/PDF/575f6202-11e9-425e-ab23-ce3804cbea7c/CSLentersexclusiveagreementwithAlentisTherapeutics'],
['hengruiNovo','HRS-1596 licence agreement with Novo Nordisk','Hengrui Pharma','2026-09-29','Company announcement','https://www.hengrui.com/en/media/detail-1042.html'],
['hengruiInterim','2026 interim financial results','Hengrui Pharma','2026-08-19','Interim results announcement','https://www.hengrui.com/en/media/detail-1016.html'],
['hengruiHistory','2025 ESG report: company history','Hengrui Pharma','2026-04-02','Corporate report','https://www.hengrui.com/uploads/20260402093102/f.pdf'],
['hengruiProspectus','Hong Kong listing prospectus','Hengrui Pharma','2025','Listing prospectus','https://www.hengrui.com/images/investor/hk/2.%20Prospectus/2.%20Offer%20for%20Subscription%20%28EN%29.pdf'],
['akesoInterim','2026 interim results','Akeso','2026-08-28','Interim results announcement','https://akesobio.com/en/media/akeso-news/260828/'],
['akesoOS','HARMONi-2 interim overall survival announcement','Akeso','2026-09-03','Sponsor-reported results','https://akesobio.com/en/media/akeso-news/260903/'],
['akesoTrial','First patient enrolled in COMPASSION-37','Akeso','2026-09-28','Clinical development announcement','https://akesobio.com/en/media/akeso-news/20260928/'],
['akesoHistory','Corporate milestones','Akeso',null,'Official company history','https://www.akesobio.com/en/about-us/milestones/'],
['akesoReport','2024 annual report: corporate information','Akeso','2025','Annual report','https://www.akesobio.com/media/2563/24ar.pdf'],
['akesoSummit','Original ivonescimab licensing agreement','Summit Therapeutics','2022-12-06','Historical transaction announcement','https://www.smmttx.com/wp-content/uploads/2023/10/2022_PR_1208_Ivonescimab-Announcement-_-FINAL.pdf'],
['akesoSummitUpdate','Q3 2023 results: original licence closing','Summit Therapeutics','2023-11-07','Historical financial results','https://www.smmttx.com/wp-content/uploads/2023/11/2023_PR_1107_Q3-2023-Financial-Results-_-FINAL.pdf'],
['lillyAnnual','2025 annual report on Form 10-K','Eli Lilly / SEC EDGAR','2026-02-12','Annual regulatory filing','https://www.sec.gov/Archives/edgar/data/59478/000005947826000013/lly-20251231.htm'],
['lillyJay','Jaypirca: expanded U.S. CLL/SLL indication','Eli Lilly','2026-10-02','Company regulatory announcement','https://investor.lilly.com/news-releases/news-release-details/lillys-jaypirca-pirtobrutinib-first-and-only-approved-non-1'],
['lillyReta','Retatrutide: TRIUMPH-2 Phase III results','Eli Lilly','2026-09-29','Sponsor-reported results','https://investor.lilly.com/node/54981'],
['lillyElora','EloraTZP Phase IIb results and plans','Eli Lilly','2026-09-30','Sponsor-reported results','https://investor.lilly.com/news-releases/news-release-details/lillys-eloratzp-combination-eloralintide-and-tirzepatide'],
['lillyCentessa','Agreement to acquire Centessa Pharmaceuticals','Eli Lilly','2026-03-31','Transaction announcement','https://investor.lilly.com/node/54066'],
['novoAnnual','2025 annual report: innovation and therapeutic focus','Novo Nordisk','2026-02','Annual report; year-end 2025 snapshot','https://annualreport.novonordisk.com/2025/strategic-aspirations/innovation-and-therapeutic-focus.html'],
['novo20f','2025 annual report on Form 20-F','Novo Nordisk','2026-02-04','Annual regulatory filing','https://www.novonordisk.com/content/dam/nncorp/global/en/investors/irmaterial/annual_report/2026/novo-nordisk-form-20-f-2025.pdf'],
['novoContact','Corporate headquarters','Novo Nordisk',null,'Official company directory','https://www.novonordisk.com/contact-us/contact-local-office.html'],
['novoDen','Denecimig U.S. BLA review update','Novo Nordisk','2026-10-02','Company regulatory announcement','https://www.novonordisk.com/news-and-media/news-and-ir-materials/news-details.html?id=917287'],
['azResults','H1 and Q2 2026 results','AstraZeneca','2026-07-27','Half-year financial report','https://www.astrazeneca.com/content/dam/az/PDF/2026/h1q2/H1-and-Q2-2026-results-announcement.pdf'],
['azHistory','Company history','AstraZeneca',null,'Official company history','https://www.astrazeneca.com/our-company/history.html'],
['azIR','Results, presentations and corporate contacts','AstraZeneca',null,'Investor relations archive','https://www.astrazeneca.com/investor-relations/results-and-presentations.html'],
['azListing','AstraZeneca begins NYSE trading','AstraZeneca','2026-02-02','Listing announcement','https://www.astrazeneca.com/media-centre/press-releases/2026/astrazeneca-begins-trading-on-NYSE.html'],
['alectorFAQ','Investor FAQ','Alector',null,'Official corporate facts','https://investors.alector.com/investor-resources/investor-faqs'],
['vaxFAQ','Investor FAQ','Vaxcyte',null,'Official corporate facts','https://investors.vaxcyte.com/shareholder-services/investor-faqs'],
['cslHQ','Global headquarters and company history','CSL','2022-10-19','Official corporate announcement','https://newsroom.csl.com/2022-10-19-CSLs-New-HQ-Earns-Sustainability-Credentials']
];
sourceRows.push(...[["nciAdc","Antibody–drug conjugate: definition","National Cancer Institute",null,"Independent scientific reference (undated)","https://www.cancer.gov/publications/dictionaries/cancer-terms/def/antibody-drug-conjugate"],["nciIvonescimab","Ivonescimab: mechanism and targets","National Cancer Institute",null,"Independent scientific reference (undated)","https://www.cancer.gov/publications/dictionaries/cancer-drug/def/ivonescimab"],["fdaTrials","Step 3: Clinical research","FDA",null,"Regulator educational reference (undated)","https://www.fda.gov/patients/drug-development-process/step-3-clinical-research"],["fdaReview","FDA’s drug review process: ensuring drugs are safe and effective","FDA",null,"Regulator educational reference (undated)","https://www.fda.gov/drugs/information-consumers-and-patients-drugs/fdas-drug-review-process-ensuring-drugs-are-safe-and-effective"]]);
sourceRows.push(["nciBreast","Tests for breast cancer biomarkers","National Cancer Institute","2025-12-02","Independent scientific reference","https://www.cancer.gov/types/breast/diagnosis/breast-cancer-biomarker-tests"]);
const sources=Object.fromEntries(sourceRows.map(([id,title,publisher,date,kind,url])=>[id,{title,publisher,date,kind,url}]));

for(const id of ["nciAdc","nciIvonescimab","fdaTrials","fdaReview","nciBreast"])sources[id].accessed="2026-10-10";
