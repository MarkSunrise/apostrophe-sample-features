module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Three Column',
  contextualOnly: true,
  // This will configure 3 one-column widgets and will save the data to a mongo schema called 'one', 'two', and 'three' respectively.
  // Type area refers to a section of editable content. e.g. 3 one-column widget areas where you can store/edit content
  addFields: [
    {
      name: 'one',
      type: 'area'
    },
    {
      name: 'two',
      type: 'area'
    },
    {
      name: 'three',
      type: 'area'
    },
  ]
};

