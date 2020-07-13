// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      // The products-pages module powers
      // these pages that display
      // paginated products
      name: 'products-page',
      label: 'Products'
    },
    {
      name: 'specialists-page',
      label: 'Specialists'
    }
  ],
  park: [
    {
      // marks notes: parked pages are pages that should *always* be there
      // e.g. if your site is all about products, then you will always want a products page.
      // A "parked" (permanent) page:
      //
      // Always have at least one products page,
      // so the _url property of each product
      // can be populated
      type: 'products-page',
      slug: '/products',
      title: 'Products',
      _defaults:{
        title: 'foo'
      }
    },
    {
      type: 'specialists-page',
      slug: '/specialists',
      title: 'Specialists'
    },
  ],
  filters: {
    ancestors: {
      children: {
        areas: [ 'thumbnail' ]
      }
    }
  }
};
