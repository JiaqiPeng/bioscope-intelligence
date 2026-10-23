// Story-specific editorial photography shared by hero, listing and article views.
const editorialImageAssignments={
 'abbvie-early-oncology-esmo':['oncology','A gloved hand positions a tissue slide on a microscope in a pathology laboratory.'],
 'ai-scribes-primary-care-study':['documentation','A clinician’s cropped hand writes notes beside a microphone and laptop.'],
 'art002g1-us-trial-clearance':['genetics','Gloved hands pipette into PCR tubes beside a thermal cycler.'],
 'enspryng-thyroid-eye':['eye','A slit-lamp biomicroscope in an ophthalmology examination room.'],
 'fda-rare-disease-framework':['regulation','Clinical research documentation and an unbranded medicine vial on a desk.'],
 'glioma-local-antibody-toxin':['brain','A radiology monitor displaying illustrative brain scans beside an MRI room.'],
 'digital-glp1-women-study':['weight','A body-weight scale and measuring tape with a tablet in a clinical setting.']
};
for(const article of articles){const assignment=editorialImageAssignments[article.id];if(assignment){const [asset,alt]=assignment;article.image={src:`images/editorial-photo-${asset}.webp`,thumbnail:`images/editorial-photo-${asset}-thumb.webp`,alt,caption:'AI-generated editorial image · Illustrative setting, not a photograph of the reported study, product or facility.',width:1500,height:1050,style:'editorial-photography-v3',generated:true};}}

// User-selected company cover photographs.
Object.assign(articles.find(a=>a.id==="roche-hansoh-adc-portfolio"),{image:{"objectPosition":"center 80%","src":"images/roche-hansoh-supplied.webp","thumbnail":"images/roche-hansoh-supplied-thumb.webp","alt":"A Roche sign outside a glass-fronted building.","caption":"User-supplied cover image · Company signage; not a photograph documenting the announced transaction.","width":1500,"height":1050}});
Object.assign(articles.find(a=>a.id==="lilly-metis-delivery-collaboration"),{image:{"src":"images/lilly-metis-supplied.webp","thumbnail":"images/lilly-metis-supplied-thumb.webp","alt":"Lilly signage on a building beneath an American flag.","caption":"User-supplied cover image · Company signage; not a photograph documenting the announced transaction.","width":1500,"height":1050}});

Object.assign(articles.find(a=>a.id==="disc-bitopertin-apollo-results"),{image:{"src":"images/disc-supplied.webp","thumbnail":"images/disc-supplied-thumb.webp","alt":"Two women outdoors in sunlight, one shading her eyes.","caption":"User-supplied illustrative image; the people shown are not identified as APOLLO participants.","width":1500,"height":1050,"objectPosition":"center 35%"}});

Object.assign(articles.find(a=>a.id==="merck-kgaa-silence-acquisition"),{image:{"src":"images/merck-silence-supplied.webp","thumbnail":"images/merck-silence-supplied-thumb.webp","alt":"Gloved hands pipetting into a plate at a laboratory bench.","caption":"User-supplied illustrative laboratory image; not a photograph documenting the acquisition.","width":1500,"height":1050,"objectPosition":"center 60%"}});

Object.assign(articles.find(a=>a.id==="abbvie-early-oncology-esmo"),{image:{"src":"images/abbvie-oncology-supplied.webp","thumbnail":"images/abbvie-oncology-supplied-thumb.webp","alt":"AbbVie signage on a glass-fronted building.","caption":"User-supplied illustrative AbbVie image; not a photograph of the reported studies.","width":1500,"height":1050,"objectPosition":"center 40%"}});

Object.assign(articles.find(a=>a.id==="fda-rare-disease-framework"),{image:{"src":"images/fda-supplied.webp","thumbnail":"images/fda-supplied-thumb.webp","alt":"FDA and Department of Health and Human Services signage outside a building.","caption":"User-supplied illustrative FDA image; not a photograph documenting the reported policy discussion.","width":1500,"height":1050,"objectPosition":"center 65%"}});
