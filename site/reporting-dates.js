// Publication age uses calendar days in the publication's editorial timezone.
const REPORTING_TIMEZONE='America/New_York';
function reportingDay(now=new Date()){
  const parts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:REPORTING_TIMEZONE,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(now).map(p=>[p.type,p.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}
function articleAge(a,day=reportingDay()){return (Date.parse(day+'T00:00:00Z')-Date.parse(a.date+'T00:00:00Z'))/86400000;}
function isArchived(a,day=reportingDay()){return articleAge(a,day)>7;}
function isCurrent(a,day=reportingDay()){const age=articleAge(a,day);return age>=0&&age<=7;}
function newestReporting(list){return [...list].sort((a,b)=>b.date.localeCompare(a.date));}
function reportingMonths(list){const groups=new Map();for(const a of newestReporting(list)){const month=a.date.slice(0,7);if(!groups.has(month))groups.set(month,[]);groups.get(month).push(a);}return [...groups];}
function monthLabel(month){return new Date(month+'-01T12:00:00Z').toLocaleDateString('en-GB',{month:'long',year:'numeric',timeZone:'UTC'});}
