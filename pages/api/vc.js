export default function handler(req, res) {
  res.status(200).json(
      [
          { 
              name: 'SHL Capital',
              social : {
                twitter : "",
                linkedin : "",
                founder : ""
              },
              website : ""
          },

          { 
            name: 'Weekend Fund',
            social : {
              twitter : "",
              linkedin : "",
              founder : ""
            },
            website : ""
        },

      ]
      )
}
