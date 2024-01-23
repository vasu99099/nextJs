// import nextConnect from 'next-connect';

// const companyRoute = createRouter();

// companyRoute.get(async (req, res) => {
//   res.send('Hello, this is from the next-connect companyRoute');
// });
// companyRoute.post(async (req, res) => {
//   res.send('Hello, this is from the next-connect companyRoute');
// });

// export default companyRoute.handler();
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'This is a GET request' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
