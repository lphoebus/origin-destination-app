import {
  extractRegion
} from "./chunk-5XDM44XF.js";
import {
  timeZones
} from "./chunk-C5ZJJSXU.js";
import "./chunk-IA2NS2LR.js";
import "./chunk-3F74YA3Z.js";

// node_modules/timezone-groups/dist/groupByRegion/index.mjs
var generateTimeZoneMetadata = (timeZoneItems) => {
  return timeZoneItems.map((tzItem) => {
    const { label } = tzItem;
    const continent = extractRegion(label);
    return {
      ...tzItem,
      continent
    };
  });
};
async function groupByRegion() {
  const grouping = [];
  const timeZoneItems = timeZones.map((tz) => ({ label: tz }));
  const timeZoneMetadata = generateTimeZoneMetadata(timeZoneItems);
  for (const tzMetadatum of timeZoneMetadata) {
    const { label, continent } = tzMetadatum;
    if (tzMetadatum.visited) {
      continue;
    }
    tzMetadatum.visited = true;
    const newGroup = {
      label: continent,
      tzs: [{ label }]
    };
    for (const tzMetadatumJ of timeZoneMetadata.filter((_) => !_.visited)) {
      const { label: labelJ, continent: continentJ } = tzMetadatumJ;
      if (continent === continentJ) {
        const tzItem = { label: labelJ };
        newGroup.tzs.push(tzItem);
        tzMetadatumJ.visited = true;
      }
    }
    grouping.push(newGroup);
  }
  return grouping.map((group) => {
    group.tzs = group.tzs.sort((a, b) => a.label.localeCompare(b.label));
    return {
      label: group.label,
      tzs: group.tzs.map((_) => _.label)
    };
  }).sort((a, b) => a.label.localeCompare(b.label));
}
export {
  groupByRegion
};
//# sourceMappingURL=groupByRegion-K6Z5757O.js.map
