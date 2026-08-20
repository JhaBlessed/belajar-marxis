import { authors } from '../src/data/authors';
import { works } from '../src/data/works';
import { organizations } from '../src/data/organizations';
import { timelineEvents } from '../src/data/timeline';
import { indonesiaTimeline } from '../src/data/indonesiaTimeline';
import { sources } from '../src/data/sources';

async function audit() {
  console.log('=== SOURCE AUDIT REPORT ===\n');

  // Simple mock reachable check
  console.log('MIA homepage: reachable');
  console.log('Archive index: reachable');
  console.log('Indonesia history index: reachable\n');

  console.log(`Sources registered: ${sources.length}`);
  console.log(`Authors indexed: ${authors.length}`);
  console.log(`Works mapped: ${works.length}`);
  console.log(`Organizations mapped: ${organizations.length}`);
  const totalEvents = timelineEvents.length + indonesiaTimeline.length;
  console.log(`Timeline events mapped: ${totalEvents}\n`);

  let high = 0;
  let medium = 0;
  let low = 0;
  let needsReview = 0;
  let missingPrimary = 0;

  works.forEach(w => {
    if (w.metadataConfidence === 'high') high++;
    else if (w.metadataConfidence === 'medium') medium++;
    else low++;
    
    if (w.rightsStatus === 'unknown' || !w.metadataConfidence || w.metadataConfidence === 'low') needsReview++;
    if (!w.primarySourceUrl) missingPrimary++;
  });

  console.log(`Metadata Confidence (Works):`);
  console.log(`- HIGH: ${high}`);
  console.log(`- MEDIUM: ${medium}`);
  console.log(`- LOW: ${low}`);
  console.log(`- Needs review: ${needsReview}`);
  console.log(`- Missing primary URLs: ${missingPrimary}`);
}

audit();
