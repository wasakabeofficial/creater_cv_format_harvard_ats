export const LEADERSHIP_VERBS_ENGLISH = [
  "Accelerated",
  "Chaired",
  "Directed",
  "Executed",
  "Founded",
  "Guided",
  "Headed",
  "Managed",
  "Orchestrated",
  "Spearheaded",
  "Supervised",
  "Transformed",
] as const;

export const TECHNICAL_VERBS_ENGLISH = [
  "Analyzed",
  "Built",
  "Coded",
  "Computed",
  "Debugged",
  "Designed",
  "Developed",
  "Engineered",
  "Implemented",
  "Optimized",
  "Programmed",
  "Restructured",
] as const;

export const COMMUNICATION_VERBS_ENGLISH = [
  "Authored",
  "Collaborated",
  "Convinced",
  "Drafted",
  "Edited",
  "Illustrated",
  "Negotiated",
  "Persuaded",
  "Presented",
  "Published",
] as const;

export const CREATIVE_VERBS_ENGLISH = [
  "Conceptualized",
  "Created",
  "Customized",
  "Fashioned",
  "Integrated",
  "Invented",
  "Modified",
  "Originated",
  "Reformatted",
  "Revitalized",
] as const;

export const HARVARD_ACTION_VERBS_ENGLISH = [
  ...LEADERSHIP_VERBS_ENGLISH,
  ...TECHNICAL_VERBS_ENGLISH,
  ...COMMUNICATION_VERBS_ENGLISH,
  ...CREATIVE_VERBS_ENGLISH,
];
