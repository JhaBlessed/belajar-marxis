import { workAliases } from '../src/data/workAliases';
import { works } from '../src/data/works';
import { workSourceEvidence } from '../src/generated/workSourceEvidence';

function validate() {
  let errors = 0;
  
  // Track alias cycles and target missing
  for (const [legacy, target] of Object.entries(workAliases)) {
    // Alias cycle?
    if (workAliases[target]) {
      console.error(`FAIL: Alias cycle or chain detected: ${legacy} -> ${target} -> ${workAliases[target]}`);
      errors++;
    }
    
    // Target missing?
    const targetWork = works.find(w => w.slug === target);
    if (!targetWork) {
      console.error(`FAIL: Target missing for alias ${legacy}: target ${target} not in works.ts`);
      errors++;
    }
    
    // Legacy missing?
    const legacyWork = works.find(w => w.slug === legacy);
    if (!legacyWork) {
      console.error(`FAIL: Legacy work missing for alias ${legacy}: ${legacy} not in works.ts`);
      errors++;
    }
    
    // Must be exact source duplicate
    if (targetWork && legacyWork) {
       const ev1 = workSourceEvidence[target];
       const ev2 = workSourceEvidence[legacy];
       const prim1 = ev1?.sources.find(s => s.role === 'primary')?.path || targetWork.localSourcePath;
       const prim2 = ev2?.sources.find(s => s.role === 'primary')?.path || legacyWork.localSourcePath;
       
       if (!prim1 || !prim2 || prim1 !== prim2) {
          console.error(`FAIL: Alias pair ${legacy} -> ${target} does not share the same primary source!`);
          errors++;
       }
    }
    
    // Target itself incorrectly marked as alias
    if (workAliases[target]) {
       console.error(`FAIL: Target canonical slug ${target} is incorrectly marked as an alias itself!`);
       errors++;
    }
  }

  const rawCount = works.length;
  const legacyCount = Object.keys(workAliases).length;
  const canonicalCount = rawCount - legacyCount;
  
  console.log("=== WORK ALIASES VALIDATION REPORT ===");
  console.log(`Raw works count: ${rawCount}`);
  console.log(`Legacy alias works: ${legacyCount}`);
  console.log(`Visible canonical works: ${canonicalCount}`);
  
  if (errors > 0) {
    process.exitCode = 1;
  }
}

validate();
