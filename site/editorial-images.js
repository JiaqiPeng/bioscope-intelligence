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
