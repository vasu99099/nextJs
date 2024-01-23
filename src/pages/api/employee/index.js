import { createRouter } from 'next-connect';
const router = createRouter();
router.get(async (req, res) => {
  res.send('Hello, this is from the next-connect router');
});
router.post(async (req, res) => {
  res.send('Hello, this is from the next-connect router');
});
export default router.handler();
