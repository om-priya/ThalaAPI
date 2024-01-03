const optionsV2 = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Thala API V2",
        version: "2.0.0",
        description:
          "This is a complex thala api which checks whether you have thala protection or not",
        license: {
          name: "Sher Om Priya",
          url: "https://om-portfolio-fawn.vercel.app/",
        },
        contact: {
          name: "Sher Op Bhai",
          url: "https://om-portfolio-fawn.vercel.app/",
          email: "contactsher@email.com",
        },
      },
      servers: [
        {
          url: "https://thala-api.vercel.app/api/v2",
        },
      ],
    },
    apis: ["./router/v2*.js"],
  };
  
  module.exports = { optionsV2 };