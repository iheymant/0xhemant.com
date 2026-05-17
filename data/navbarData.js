export const navbarData = [
  {
    name: "Home",
    url: "/",
    mobileOnly: false,
    deskstopOnly: false,
    external: false,
    dropdown: false,

  },
  {
    name: "Builds",
    url: "/builds/",
    mobileOnly: false,
    deskstopOnly: false,
    external: false,
    dropdown: true,
    dropdownCategoryText: "Inside Builds",
    dropdownCategoryTextDescription: "explore different stages",
    children: [
      {
        name: "Conceptual",
        url: "/builds/conceptual/",
        description: "Unfinished systems and future concepts",
        mobileOnly: false,
        deskstopOnly: false,
        external: false

      }, {
        name: "Experimental",
        url: "/builds/experimental",
        description: "Interaction tests and evolving ideas",
        mobileOnly: false,
        deskstopOnly: false,
        external: false
      }, {
        name: "Live",
        url: "/builds/live",
        description: "Public systems currently deployed",
        mobileOnly: false,
        deskstopOnly: false,
        external: false
      },
    ]
  },
  // {
  //   name: "Thoughts",
  //   url: "/thoughts/",
  //   mobileOnly: false,
  //   deskstopOnly: false,
  //   external: false,
  //   dropdown: false,
  // },
];
