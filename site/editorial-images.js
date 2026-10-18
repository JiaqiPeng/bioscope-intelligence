// Explicit, story-specific images shared by every article rendering surface.
const editorialImageAssignments={
 'art002g1-us-trial-clearance':['gene-editing','A thermal cycler, capped sample tubes and a micropipette on a molecular-biology laboratory bench.'],
 'enspryng-thyroid-eye':['eye-care','A slit-lamp microscope and empty examination chair in a daylight-lit eye clinic.'],
 'fda-rare-disease-framework':['regulatory','An open document folder, papers and navy binder on an institutional office desk.'],
 'glioma-local-antibody-toxin':['brain-anatomy','An ivory educational brain model showing the cerebral hemisphere, cerebellum and brainstem on a small stand.'],
 'digital-glp1-women-study':['weight-management','A body-weight scale and measuring tape in the foreground of a clinic, with a tablet on a bench behind them.']
};
// Editorial briefs are stored with the image, not displayed as page copy.
const editorialImageBriefs={
 'art002g1-us-trial-clearance':{subject:'Gene editing for cholesterol reduction',visual:'Molecular-biology equipment and PCR samples',rationale:'The molecular-biology workbench represents the genetic technology, rather than a generic corporate setting.',priority:1},
 'enspryng-thyroid-eye':{subject:'Treatment for thyroid eye disease',visual:'Ophthalmology slit-lamp examination equipment',rationale:'The disease area leads the visual choice even though the news concerns a regulatory approval.',priority:1},
 'fda-rare-disease-framework':{subject:'Regulatory evidence standards and consultation',visual:'Institutional document review',rationale:'Documents fit this process-focused policy story; they are not the default for individual drug approvals.',priority:1},
 'glioma-local-antibody-toxin':{subject:'Locally delivered treatment for brain cancer',visual:'Educational brain anatomy model',rationale:'The affected organ is immediately recognizable without inventing patient scans or depicting surgery.',priority:2},
 'digital-glp1-women-study':{subject:'Digitally supported weight-management care',visual:'Body-weight scale and measuring tape as the focal point, with a secondary tablet',rationale:'Weight measurement leads the composition; the background tablet provides the secondary digital-care context.',priority:1}
};
for(const article of articles){const assignment=editorialImageAssignments[article.id];if(assignment){const [asset,alt]=assignment;article.image={src:`images/editorial-${asset}.webp`,thumbnail:`images/editorial-${asset}-thumb.webp`,alt,caption:'AI-generated editorial image · Illustrative setting, not a photograph of the reported study, product or facility.',width:1440,height:960,style:'topic-first-editorial-v2',generated:true,brief:editorialImageBriefs[article.id]};}}
