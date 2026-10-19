// BioScope illustration identity: one vector master shared across all surfaces.
// Subjects stay tied to the reporting; diagrams are editorial, not clinical evidence.
const editorialImageAssignments={
 'abbvie-early-oncology-esmo':['oncology','A blue scientific line illustration of a cell and a targeted antibody–drug conjugate.'],
 'ai-scribes-primary-care-study':['documentation','A blue line illustration of a clinical chart, microphone and voice waveform.'],
 'art002g1-us-trial-clearance':['genetics','A blue DNA schematic with a highlighted segment representing gene editing.'],
 'enspryng-thyroid-eye':['eye','A blue scientific line illustration of an eye with detailed iris structure.'],
 'fda-rare-disease-framework':['regulation','A blue line illustration of a document and an evidence-review check mark.'],
 'glioma-local-antibody-toxin':['brain','A blue schematic illustration of a brain with a highlighted treatment region.'],
 'digital-glp1-women-study':['weight','A blue line illustration of a weight scale, measuring tape and digital-care device.']
};
for(const article of articles){const assignment=editorialImageAssignments[article.id];if(assignment){const [asset,alt]=assignment;article.image={src:`images/bioscope-${asset}.svg`,thumbnail:`images/bioscope-${asset}.svg`,alt,caption:'BioScope Fieldnotes · Original editorial illustration. Schematic; not a clinical image or anatomical reference.',width:1000,height:700,style:'bioscope-fieldnotes-v1',generated:false};}}
