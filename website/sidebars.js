module.exports = {
  docs: [
    'introduction',
    'userInteraction',
    {
      type: 'category',
      label: 'Components customization',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'componentsCustomization',
        },
      ],
    },
    'stateManagement',
    'dragAndDrop',
    {
      type: 'category',
      label: 'Api',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'api', // 'api' is the 'out' directory
        },
      ],
    },
  ],
};
