const express = require('express');
const Stripe = require('stripe');
const cors = require('cors')

const app = express();

const stripe = new Stripe("sk_test_51IuQhODxWwRTK4xqrhuMON11XQJDsXmYgiUIxocDCo8HZ5j7SoWOsgupVYjEcvnwK59k6EBkbnFAZnHgtKvBeku200QFtNykXP")

app.use(cors({ origin: 'https://60ab2bd0f1a98400090f27be--vigilant-bose-b9ad67.netlify.app' }))
//https://60ab2bd0f1a98400090f27be--vigilant-bose-b9ad67.netlify.app
app.use(express.json())

app.post('/api/checkout', async (req, res) => {

    try {
        const { id, amount } = req.body;
        await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Gaming Keyboarding",
            payment_method: id,
            confirm: true
        })
        res.send({ message: 'Succesfull payment' });
    } catch (error) {
        console.log(error);
        res.json({message: error})
    }
})

app.listen(3001, () => {
    console.log('Server on port', 3001);
})
