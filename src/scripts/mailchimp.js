// const data = {
//   email: 'wtf.czabe@example.com',
// }
//
// function mailChimp(data) {
//   const apiKey = 'b14052e3275afbd2aeda632f418545b2-us12';
//   const listId = '9b498357f4';
//   const dc = 'us12';
//   const url = 'https//' + dc + '.api.mailchimp.com/3.0/lists/' + listId + '/members/';
//   const Data = {
//     email: data.email,
//     status: "subscribed",
//     merge_fields: {
//     FNAME:"Name",
//     LNAME:"Last name"
//     }
//   }
//
//   $.post(
//     url,
//     Data,
//     'json'
//   ).done((data) => {
//     console.log(data);
//   }).fail((a, b, c) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   });
// }
//
// mailChimp(data);

// const mailchimpConfig = {
//   dc: 'us12',
//   origin: '.api.mailchimp.com/',
// }
