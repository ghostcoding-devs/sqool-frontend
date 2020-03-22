export default {
    inviteList: [],
    subjects: [
        {
          name: "Englisch",
          seen: true,
          children: [
            {
              name: "Reading",
              seen:true,
              children: [
                {
                  name: "Erste Lektion",
                  file: "txt",
                  seen: true
                }
              ]
            },
            {
              name: "Listening",
              file: "mp3",
              seen: true
            },
            {
              name: "Info",
              file: "pdf",
              seen: true
            }
          ]
        },
        {
            name: "Deutsch",
            seen: false,
            children: [
              {
                name: "1 Stunde",
                seen: true,
                children: [
                  {
                    name: "Erste Lektion",
                    file: "txt",
                    seen: true
                  },
                  {
                    name: "Zweite Lektion",
                    file: "txt",
                    seen: true
                  }
                ]
              },
              {
                name: "2 Stunde",
                seen: false,
                children: [
                  {
                    name: "Erste Lektion",
                    file: "txt",
                    seen: false
                  },
                ]
              },
            ]
          }
      ]
}