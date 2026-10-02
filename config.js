// Where the tag wall sends and reads names. Change these, nothing else.
window.TAG_WALL = {
  // The Google Form the website posts into (WSTI Tag Wall).
  formAction: "https://docs.google.com/forms/d/e/1FAIpQLSfojUpyTSbbdN-fJJJQPr5xGIRmid5q_Xd9J_p2ZPxQJVFIyg/formResponse",
  fields: {
    event: "entry.1074726164",
    name: "entry.1986237947",
    linkedin: "entry.1941138217",
    instagram: "entry.1897527219",
    consent: "entry.608546854"
  },
  // The Google Sheet linked to that form, shared "anyone with the link can view".
  // Paste its id here once the form is linked to a sheet.
  sheetId: "",
  pollSeconds: 5
};
