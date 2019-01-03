module.exports = {
  title: "button",
  context: {
    text: "Button",
    colors: ["", "primary",
      "secondary",
      "warning",
      "alert",
      "success",
      "sky",
      "navy",
      "slate",
      "lightest",
      "light-gray",
      "medium",
      "darkest-gray"
    ],
    sizes: ["tiny", "small", " ", "large", "xlarge"]
  },
  variants: [{
      name: "default",
      context: {
        modifier: "default"
      }
    },
    {
      name: "Icon Before",
      context: {
        modifier: "",
        text: "Start",
        icon: "far fa-play-circle"
      }
    },
    {
      name: "Icon After",
      context: {
        modifier: "",
        text: "Call to Action",
        iconAfter: "fas fa-arrow-right"
      }
    },
    {
      name: "hollow",
      context: {
        modifier: "hollow"
      }
    },
    {
      name: "clear",
      context: {
        modifier: "clear"
      }
    },
    {
      name: "tiny",
      context: {
        modifier: "tiny"
      }
    },
    {
      name: "small",
      context: {
        modifier: "small"
      }
    },
    {
      name: "large",
      context: {
        modifier: "large"
      }
    },
    {
      name: "expanded",
      context: {
        modifier: "expanded"
      }
    },
    {
      name: "entity",
      context: {
        icon: "far fa-pencil",
        modifier: "entity"
      }
    },
    {
      name: "circle",
      context: {
        text: "",
        icon: "fas fa-check",
        modifier: "circle"
      }
    },
    {
      name: "context menu",
      context: {
        text: "",
        icon: "fas fa-ellipsis-h"
      }
    }
  ]
};
